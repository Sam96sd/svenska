import { recordProSpend, proSpendThisMonth } from '../storage/actions'
import { getIeltsProfile } from '../storage/hooks'
import { idbGet, idbSet, sha256 } from '../storage/idb'
import { generate, GeminiError, parseJsonText, withRetry, type Usage } from './gemini'
import { detectModels, getAiConfig, modelFor } from './keys'
import { estimateCost } from './pricing'
import {
  PROMPT_VERSION,
  speakingSystemPrompt,
  speakingUserPrompt,
  writingCriteriaIds,
  writingSystemPrompt,
  writingUserPrompt,
  type SpeakingInput,
  type WritingTaskInput,
} from './prompts'
import {
  parseSpeakingFeedback,
  parseWritingFeedback,
  speakingResponseSchema,
  writingResponseSchema,
  type SpeakingFeedback,
  type WritingFeedback,
} from './schemas'

export type Tier = 'standard' | 'pro'

export interface StoredFeedback<T> {
  kind: 'writing' | 'speaking'
  tier: Tier
  model: string
  createdAt: number
  usage: Usage
  /** Estimated cost in US dollars (0 on the free tier). */
  costUsd: number
  promptVersion: number
  data: T
  /** Cache key in IndexedDB; stored on the attempt as `feedbackKey`. */
  key: string
  fromCache?: boolean
}

export interface GradeContext {
  profileId: string
  tier: Tier
  signal?: AbortSignal
  /** Called before each retry wait, for the countdown. */
  onWait?: (ms: number, attempt: number, message: string) => void
  /**
   * Asked before a Pro call once 80% of the monthly cap is used. Return false to cancel.
   * Without it, such calls are cancelled.
   */
  confirmPro?: (info: {
    spentUsd: number
    capUsd: number
    estimateUsd: number
  }) => boolean | Promise<boolean>
}

export const PRO_CONFIRM_RATIO = 0.8

async function resolveModel(
  profileId: string,
  tier: Tier,
): Promise<{ key: string; model: string }> {
  let config = getAiConfig(profileId)
  const key = tier === 'pro' ? config.premiumKey : config.freeKey
  if (!key.trim())
    throw new GeminiError(
      'auth',
      tier === 'pro'
        ? 'Add a premium key in IELTS settings → AI to use Pro grading.'
        : 'Add a free Gemini key in IELTS settings → AI to get AI feedback.',
    )
  let model = modelFor(config, tier)
  if (!model) {
    await detectModels(profileId, tier)
    config = getAiConfig(profileId)
    model = modelFor(config, tier)
  }
  if (!model) throw new GeminiError('other', 'No suitable Gemini model is available for this key.')
  return { key, model }
}

/** Rough cost estimate before a call: ~4 characters per token, plus a generous answer. */
function estimateBefore(model: string, promptChars: number, audioSeconds = 0): number {
  return estimateCost(
    model,
    {
      promptTokens: Math.ceil(promptChars / 4) + audioSeconds * 32,
      outputTokens: 4000,
      thoughtsTokens: 4000,
    },
    { audio: audioSeconds > 0 },
  )
}

async function checkBudget(ctx: GradeContext, estimateUsd: number) {
  if (ctx.tier !== 'pro') return
  const p = getIeltsProfile(ctx.profileId)
  const spentUsd = proSpendThisMonth(p)
  const capUsd = p.settings.proMonthlyCapUsd
  if (capUsd > 0 && spentUsd < capUsd * PRO_CONFIRM_RATIO) return
  const ok = ctx.confirmPro ? await ctx.confirmPro({ spentUsd, capUsd, estimateUsd }) : false
  if (!ok) throw new GeminiError('other', 'Pro grading cancelled.')
}

async function callGrader<T>(
  ctx: GradeContext,
  kind: 'writing' | 'speaking',
  cacheInput: unknown,
  build: (model: string) => {
    system: string
    parts: Parameters<typeof generate>[0]['parts']
    schema: object
    promptChars: number
    audioSeconds?: number
  },
  parse: (json: unknown) => T,
): Promise<StoredFeedback<T>> {
  const { key, model } = await resolveModel(ctx.profileId, ctx.tier)
  const cacheKey = `${kind}:${await sha256(JSON.stringify({ v: PROMPT_VERSION, kind, tier: ctx.tier, model, cacheInput }))}`
  const cached = await idbGet<StoredFeedback<T>>('feedback', cacheKey)
  if (cached) return { ...cached, fromCache: true }

  const req = build(model)
  await checkBudget(ctx, estimateBefore(model, req.promptChars, req.audioSeconds))

  const result = await withRetry(
    () =>
      generate({
        key,
        model,
        system: req.system,
        parts: req.parts,
        responseSchema: req.schema,
        temperature: 0.2,
        signal: ctx.signal,
      }),
    { signal: ctx.signal, onWait: (ms, attempt, e) => ctx.onWait?.(ms, attempt, e.message) },
  )
  const data = parse(parseJsonText(result.text))
  const costUsd =
    ctx.tier === 'pro' ? estimateCost(model, result.usage, { audio: !!req.audioSeconds }) : 0
  if (ctx.tier === 'pro') recordProSpend(ctx.profileId, costUsd)

  const stored: StoredFeedback<T> = {
    kind,
    tier: ctx.tier,
    model: result.model,
    createdAt: Date.now(),
    usage: result.usage,
    costUsd,
    promptVersion: PROMPT_VERSION,
    data,
    key: cacheKey,
  }
  await idbSet('feedback', cacheKey, stored)
  return stored
}

export function gradeWriting(
  ctx: GradeContext,
  task: WritingTaskInput,
  answer: string,
  meta: { words: number; minutes: number | null },
): Promise<StoredFeedback<WritingFeedback>> {
  const ids = writingCriteriaIds(task.task)
  return callGrader(
    ctx,
    'writing',
    { task, answer: answer.trim() },
    () => {
      const system = writingSystemPrompt(task)
      const user = writingUserPrompt(task, answer.trim(), meta)
      return {
        system,
        parts: [{ text: user }],
        schema: writingResponseSchema(ids),
        promptChars: system.length + user.length,
      }
    },
    (json) => parseWritingFeedback(json, ids),
  )
}

/** Grades one or more recorded answers from the same part (e.g. all Part 3 answers) in one call. */
export async function gradeSpeaking(
  ctx: GradeContext,
  input: SpeakingInput,
  audios: Array<{ base64: string; mimeType: string; hash: string }>,
): Promise<StoredFeedback<SpeakingFeedback>> {
  return callGrader(
    ctx,
    'speaking',
    { input, audio: audios.map((a) => a.hash) },
    () => {
      const system = speakingSystemPrompt()
      const user = speakingUserPrompt(input)
      const parts: Parameters<typeof generate>[0]['parts'] = [{ text: user }]
      audios.forEach((a, i) => {
        if (audios.length > 1)
          parts.push({ text: `Answer ${i + 1} (to: "${input.questions[i] ?? ''}"):` })
        parts.push({ inlineData: { mimeType: a.mimeType, data: a.base64 } })
      })
      return {
        system,
        parts,
        schema: speakingResponseSchema(),
        promptChars: system.length + user.length,
        audioSeconds: input.seconds,
      }
    },
    parseSpeakingFeedback,
  )
}

/** Feedback saved earlier on this device (null if it was graded on another device). */
export function loadFeedback<T>(key: string): Promise<StoredFeedback<T> | undefined> {
  return idbGet<StoredFeedback<T>>('feedback', key)
}
