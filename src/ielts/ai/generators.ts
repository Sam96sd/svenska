import { z } from 'zod'
import { TASK2_TYPES } from '../content/schema'
import { generate, GeminiError, parseJsonText, withRetry } from './gemini'
import { getAiConfig, modelFor, detectModels } from './keys'

/*
 * Optional AI generators (behind buttons). Every output is validated against a schema;
 * anything that doesn't fit is rejected. Hand-written content always comes first in the app —
 * generated items are extra practice and are labelled as AI-generated.
 */

const RULES = `Write ORIGINAL material in British English, at the level and style of the real IELTS test.
Do not copy or closely paraphrase Cambridge IELTS or any published test material.
Return JSON only, matching the schema.`

async function run<T>(
  profileId: string,
  prompt: string,
  schema: object,
  parse: z.ZodType<T>,
  signal?: AbortSignal,
): Promise<T> {
  let config = getAiConfig(profileId)
  if (!config.freeKey.trim())
    throw new GeminiError('auth', 'Add a free Gemini key in IELTS settings → AI first.')
  let model = modelFor(config, 'standard')
  if (!model) {
    await detectModels(profileId, 'standard')
    config = getAiConfig(profileId)
    model = modelFor(config, 'standard')
  }
  if (!model) throw new GeminiError('other', 'No suitable Gemini model is available for this key.')
  const result = await withRetry(
    () =>
      generate({
        key: config.freeKey,
        model: model!,
        system: RULES,
        parts: [{ text: prompt }],
        responseSchema: schema,
        temperature: 0.9,
        signal,
      }),
    { signal },
  )
  const parsed = parse.safeParse(parseJsonText(result.text))
  if (!parsed.success)
    throw new GeminiError('bad-response', 'The generated item didn’t pass the checks. Try again.')
  return parsed.data
}

const S = { type: 'STRING' }
const arr = (items: object, extra: object = {}) => ({ type: 'ARRAY', items, ...extra })
const obj = (properties: Record<string, object>) => ({
  type: 'OBJECT',
  properties,
  required: Object.keys(properties),
  propertyOrdering: Object.keys(properties),
})

// ---------- Task 2 prompts ----------

export const GeneratedTask2Schema = z.object({
  type: z.enum(TASK2_TYPES),
  topic: z.string().min(3).max(40),
  prompt: z.string().min(60).max(700),
  planHints: z.array(z.string().min(10)).min(3).max(6),
})
export type GeneratedTask2 = z.infer<typeof GeneratedTask2Schema>

export function generateTask2(
  profileId: string,
  opts: { topic: string; type: (typeof TASK2_TYPES)[number] },
  signal?: AbortSignal,
) {
  return run(
    profileId,
    `Create one IELTS Writing Task 2 question of type "${opts.type}" on the topic "${opts.topic}".
"prompt" is the task exactly as printed: the statement or situation, the question(s), then "Give reasons for your answer and include any relevant examples from your own knowledge or experience." and "Write at least 250 words." on separate lines.
"planHints": 3–5 short planning tips specific to this question (how many parts it has, a sensible position, what each body paragraph could develop).`,
    obj({
      type: { type: 'STRING', enum: [...TASK2_TYPES] },
      topic: S,
      prompt: S,
      planHints: arr(S),
    }),
    GeneratedTask2Schema,
    signal,
  )
}

// ---------- General Training letters ----------

export const GeneratedLetterSchema = z.object({
  type: z.enum(['complaint', 'request', 'apology', 'invitation', 'thanks', 'explanation']),
  tone: z.enum(['formal', 'semi-formal', 'informal']),
  situation: z.string().min(30).max(400),
  bullets: z.array(z.string().min(5).max(120)).length(3),
})
export type GeneratedLetter = z.infer<typeof GeneratedLetterSchema>

export function generateLetter(
  profileId: string,
  opts: { type: GeneratedLetter['type']; tone: GeneratedLetter['tone'] },
  signal?: AbortSignal,
) {
  return run(
    profileId,
    `Create one IELTS General Training Writing Task 1 letter task: a "${opts.type}" letter in a ${opts.tone} tone.
"situation": the situation and "Write a letter to … In your letter" (who the reader is must make the ${opts.tone} tone clear).
"bullets": exactly three bullet points, each starting with a verb (describe…, explain…, say…, suggest…).`,
    obj({
      type: {
        type: 'STRING',
        enum: ['complaint', 'request', 'apology', 'invitation', 'thanks', 'explanation'],
      },
      tone: { type: 'STRING', enum: ['formal', 'semi-formal', 'informal'] },
      situation: S,
      bullets: arr(S, { minItems: 3, maxItems: 3 }),
    }),
    GeneratedLetterSchema,
    signal,
  )
}

// ---------- Speaking question sets ----------

export const GeneratedSpeakingSchema = z.object({
  title: z.string().min(3).max(60),
  part1: z.array(z.string().min(8)).min(3).max(5),
  cue: z.object({
    prompt: z.string().min(10),
    points: z.array(z.string().min(3)).length(3),
    explain: z.string().min(5),
  }),
  part3: z.array(z.string().min(10)).min(4).max(6),
})
export type GeneratedSpeaking = z.infer<typeof GeneratedSpeakingSchema>

export function generateSpeakingSet(profileId: string, theme: string, signal?: AbortSignal) {
  return run(
    profileId,
    `Create a full IELTS Speaking set on the theme "${theme}": 4 Part 1 questions on a related familiar topic, one Part 2 cue card ("Describe …", three "You should say" points, "and explain …"), and 5 Part 3 questions that are more abstract, linked to the cue card, moving from comparing to evaluating and speculating. Culturally neutral, not intrusive.`,
    obj({
      title: S,
      part1: arr(S),
      cue: obj({ prompt: S, points: arr(S, { minItems: 3, maxItems: 3 }), explain: S }),
      part3: arr(S),
    }),
    GeneratedSpeakingSchema,
    signal,
  )
}

// ---------- Personalised drill from the error log ----------

export const GeneratedDrillSchema = z.object({
  title: z.string().min(3).max(80),
  items: z
    .array(
      z.object({
        /** A sentence with one error of the target type, written the way a learner might. */
        sentence: z.string().min(10),
        correction: z.string().min(10),
        explanation: z.string().min(10),
      }),
    )
    .min(5)
    .max(10),
})
export type GeneratedDrill = z.infer<typeof GeneratedDrillSchema>

/** Sentence-correction exercises targeting the learner's own logged writing/speaking errors. */
export function generateErrorDrill(
  profileId: string,
  errors: Array<{ type: string; original: string; correction: string }>,
  signal?: AbortSignal,
) {
  const sample = errors
    .slice(0, 15)
    .map((e) => `- ${e.type}: "${e.original}" → "${e.correction}"`)
    .join('\n')
  return run(
    profileId,
    `A Band 6.5–7 IELTS learner keeps making these errors in their writing and speaking:
${sample}

Create a correction drill of 8 NEW sentences (not the ones above) on IELTS-style topics, each containing one error of the same kinds, so the learner practises spotting and fixing their own error patterns. Give the corrected sentence and a one-line explanation for each.`,
    obj({
      title: S,
      items: arr(obj({ sentence: S, correction: S, explanation: S }), {
        minItems: 5,
        maxItems: 10,
      }),
    }),
    GeneratedDrillSchema,
    signal,
  )
}
