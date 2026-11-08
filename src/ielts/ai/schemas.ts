import { z } from 'zod'
import { GeminiError } from './gemini'

/*
 * What the graders return. Each result has two schemas:
 * - a Gemini `responseSchema` (OpenAPI subset) so the model returns structured JSON, and
 * - a Zod schema that validates it. Missing optional parts are repaired with defaults; a result
 *   without usable bands is rejected.
 */

/** Bands are whole or half numbers between 0 and 9. */
const Band = z.coerce.number().transform((n) => Math.round(Math.min(9, Math.max(0, n)) * 2) / 2)

const str = z.string().catch('')
const strArr = z.array(z.string()).catch([])

export const ERROR_TYPES = [
  'grammar',
  'tense',
  'agreement',
  'article',
  'preposition',
  'word-form',
  'vocabulary',
  'collocation',
  'spelling',
  'punctuation',
  'cohesion',
  'register',
] as const
export type ErrorType = (typeof ERROR_TYPES)[number]

const CriterionResult = z.object({
  id: z.string(),
  band: Band,
  evidence: strArr,
  comment: str,
})

const Change = z.object({
  change: z.string(),
  why: str,
  impact: z.enum(['high', 'medium', 'low']).catch('medium'),
})

export const WritingFeedbackSchema = z.object({
  criteria: z.array(CriterionResult).min(4),
  overallBand: Band,
  summary: str,
  topChanges: z.array(Change).catch([]),
  errors: z
    .array(
      z.object({
        original: z.string(),
        correction: z.string(),
        type: z.enum(ERROR_TYPES).catch('grammar'),
        explanation: str,
      }),
    )
    .catch([]),
  vocabulary: z
    .object({
      overused: strArr,
      underused: strArr,
      collocations: z.array(z.object({ original: z.string(), better: z.string() })).catch([]),
    })
    .catch({ overused: [], underused: [], collocations: [] }),
  taskChecks: z
    .array(z.object({ check: z.string(), passed: z.boolean().catch(false), comment: str }))
    .catch([]),
  memorisedPhrases: strArr,
  offTopic: z.boolean().catch(false),
  rewrite: str,
})
export type WritingFeedback = z.infer<typeof WritingFeedbackSchema>

export const PRONUNCIATION_ISSUES = [
  'word-stress',
  'sentence-stress',
  'ed-ending',
  's-ending',
  'chunking',
  'intonation',
  'vowel',
  'consonant',
  'cluster',
  'other',
] as const

export const SpeakingFeedbackSchema = z.object({
  transcript: z.string(),
  criteria: z.array(CriterionResult).min(4),
  overallBand: Band,
  summary: str,
  fluency: z
    .object({
      pauses: str,
      fillers: strArr,
      selfCorrections: z.coerce.number().catch(0),
      development: str,
    })
    .catch({ pauses: '', fillers: [], selfCorrections: 0, development: '' }),
  topChanges: z.array(Change).catch([]),
  upgrades: z.array(z.object({ original: z.string(), better: z.string(), why: str })).catch([]),
  pronunciation: z
    .array(z.object({ issue: z.enum(PRONUNCIATION_ISSUES).catch('other'), example: str, tip: str }))
    .catch([]),
  band8Version: str,
})
export type SpeakingFeedback = z.infer<typeof SpeakingFeedbackSchema>

// ---------- Gemini responseSchema (OpenAPI subset) ----------

const S = { type: 'STRING' }
const N = { type: 'NUMBER' }
const B = { type: 'BOOLEAN' }
const arr = (items: object, extra: object = {}) => ({ type: 'ARRAY', items, ...extra })
const obj = (properties: Record<string, object>, required = Object.keys(properties)) => ({
  type: 'OBJECT',
  properties,
  required,
  propertyOrdering: Object.keys(properties),
})

const criterionSchema = (ids: string[]) =>
  obj({
    id: { type: 'STRING', enum: ids },
    band: { ...N, description: 'Whole or half band from 0 to 9' },
    evidence: arr(S, { description: '2–3 short quotes from the answer that justify the band' }),
    comment: S,
  })

const changeSchema = obj({
  change: S,
  why: S,
  impact: { type: 'STRING', enum: ['high', 'medium', 'low'] },
})

export function writingResponseSchema(criteriaIds: string[]) {
  return obj({
    criteria: arr(criterionSchema(criteriaIds), { minItems: 4, maxItems: 4 }),
    overallBand: N,
    summary: S,
    topChanges: arr(changeSchema, { minItems: 3, maxItems: 3 }),
    errors: arr(
      obj({
        original: S,
        correction: S,
        type: { type: 'STRING', enum: [...ERROR_TYPES] },
        explanation: S,
      }),
    ),
    vocabulary: obj({
      overused: arr(S),
      underused: arr(S),
      collocations: arr(obj({ original: S, better: S })),
    }),
    taskChecks: arr(obj({ check: S, passed: B, comment: S })),
    memorisedPhrases: arr(S),
    offTopic: B,
    rewrite: S,
  })
}

export function speakingResponseSchema() {
  return obj({
    transcript: S,
    criteria: arr(criterionSchema(['fc', 'lr', 'gra', 'p']), { minItems: 4, maxItems: 4 }),
    overallBand: N,
    summary: S,
    fluency: obj({ pauses: S, fillers: arr(S), selfCorrections: N, development: S }),
    topChanges: arr(changeSchema, { minItems: 3, maxItems: 3 }),
    upgrades: arr(obj({ original: S, better: S, why: S })),
    pronunciation: arr(
      obj({ issue: { type: 'STRING', enum: [...PRONUNCIATION_ISSUES] }, example: S, tip: S }),
    ),
    band8Version: S,
  })
}

/** Validates model output; throws a GeminiError the UI can show if it's unusable. */
export function parseWritingFeedback(json: unknown, criteriaIds: string[]): WritingFeedback {
  const r = WritingFeedbackSchema.safeParse(json)
  if (!r.success)
    throw new GeminiError('bad-response', 'The AI feedback was incomplete. Try again.')
  const byId = new Map(r.data.criteria.map((c) => [c.id, c]))
  if (!criteriaIds.every((id) => byId.has(id)))
    throw new GeminiError('bad-response', 'The AI feedback was missing a criterion. Try again.')
  return { ...r.data, criteria: criteriaIds.map((id) => byId.get(id)!) }
}

export function parseSpeakingFeedback(json: unknown): SpeakingFeedback {
  const r = SpeakingFeedbackSchema.safeParse(json)
  if (!r.success)
    throw new GeminiError('bad-response', 'The AI feedback was incomplete. Try again.')
  const ids = ['fc', 'lr', 'gra', 'p']
  const byId = new Map(r.data.criteria.map((c) => [c.id, c]))
  if (!ids.every((id) => byId.has(id)))
    throw new GeminiError('bad-response', 'The AI feedback was missing a criterion. Try again.')
  return { ...r.data, criteria: ids.map((id) => byId.get(id)!) }
}
