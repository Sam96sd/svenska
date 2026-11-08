import { z } from 'zod'
import { DEFAULT_TARGET_BAND } from '../examSpec'
import { SrsCardSchema } from '../../lib/storage/schema'

/**
 * IELTS data, stored apart from the Swedish course under its own key (`ielts:state`) with its
 * own version and migrations. Every field has a `.catch` fallback, so damaged or older data is
 * repaired field by field instead of being thrown away.
 *
 * Gemini keys and recordings are NOT here: they stay on the device (see ../ai/keys.ts and
 * ./idb.ts) and are never synced or exported.
 */
export const IELTS_VERSION = 1

const record = <T extends z.ZodType>(value: T) => z.record(z.string(), value).catch({})

export const ModuleSchema = z.enum(['academic', 'general'])
export const SkillSchema = z.enum(['listening', 'reading', 'writing', 'speaking'])

export const IeltsSettingsSchema = z.object({
  /** null until the learner has chosen on their first visit. */
  module: ModuleSchema.nullable().catch(null),
  targetBand: z.number().min(4).max(9).catch(DEFAULT_TARGET_BAND),
  /** Accent preferences for listening practice; empty = mix of all available. */
  accents: z.array(z.string()).catch([]),
  /** Soft monthly cap for Pro (premium key) calls, in US dollars. */
  proMonthlyCapUsd: z.number().min(0).max(1000).catch(8),
})
export type IeltsSettings = z.infer<typeof IeltsSettingsSchema>

/** One answered question inside an attempt. */
export const QuestionResultSchema = z.object({
  qid: z.string(),
  type: z.string().catch('unknown'),
  correct: z.boolean().catch(false),
  /** What the learner wrote or chose (for the review screen and the error log). */
  given: z.string().catch(''),
  timeMs: z.number().catch(0),
  /** Error-reason tag, e.g. "paraphrase", "distractor", "word-limit", "spelling", "ng-vs-false". */
  reason: z.string().nullable().catch(null),
})
export type QuestionResult = z.infer<typeof QuestionResultSchema>

export const AttemptKindSchema = z.enum(['practice', 'drill', 'exam', 'mock', 'diagnostic'])

/**
 * Anything the learner completed: a reading passage, a listening part, a drill, an essay,
 * a speaking part, a full mock or the diagnostic. Append-only; an attempt can be updated
 * later (e.g. when an essay is graded), which bumps `updatedAt` so sync keeps the newest.
 */
export const AttemptSchema = z.object({
  id: z.string(),
  kind: AttemptKindSchema.catch('practice'),
  skill: SkillSchema.nullable().catch(null),
  contentId: z.string().catch(''),
  module: ModuleSchema.catch('academic'),
  startedAt: z.number().catch(0),
  finishedAt: z.number().catch(0),
  updatedAt: z.number().catch(0),
  durationMs: z.number().catch(0),
  correct: z.number().nullable().catch(null),
  total: z.number().nullable().catch(null),
  band: z.number().nullable().catch(null),
  /** Per-skill bands, for mocks and the diagnostic. */
  bands: z.partialRecord(SkillSchema, z.number()).catch({}),
  questions: z.array(QuestionResultSchema).catch([]),
  /** Writing/speaking criterion bands, keyed by criterion id (ta, tr, cc, lr, gra, fc, p). */
  criteria: record(z.number()),
  /** Writing: the essay or letter. Speaking: the transcript. */
  text: z.string().nullable().catch(null),
  /** Writing task (1 or 2) or speaking part (1, 2 or 3). */
  task: z.number().nullable().catch(null),
  /** Key of the full AI feedback in the device cache (IndexedDB). */
  feedbackKey: z.string().nullable().catch(null),
  /** Gemini model that graded it, or "self" for a self-assessment. */
  gradedBy: z.string().nullable().catch(null),
})
export type Attempt = z.infer<typeof AttemptSchema>

/** One entry in the error log: a pattern to fix, tagged by question type or criterion. */
export const ErrorEntrySchema = z.object({
  id: z.string(),
  at: z.number().catch(0),
  updatedAt: z.number().catch(0),
  skill: SkillSchema.catch('reading'),
  attemptId: z.string().nullable().catch(null),
  contentId: z.string().catch(''),
  qid: z.string().nullable().catch(null),
  /** Question type (reading/listening) or criterion id (writing/speaking). */
  category: z.string().catch('other'),
  reason: z.string().catch('other'),
  /** A short excerpt: the wrong answer, or the sentence with the error. */
  detail: z.string().catch(''),
  correction: z.string().catch(''),
  resolvedAt: z.number().nullable().catch(null),
})
export type ErrorEntry = z.infer<typeof ErrorEntrySchema>

export const StudyPlanSchema = z.object({
  weeks: z.number().int().min(2).max(26).catch(8),
  dailyMinutes: z.number().int().min(15).max(240).catch(45),
  startedAt: z.number().catch(0),
  updatedAt: z.number().catch(0),
  /** Done tasks: "day-index:task-id" → when. */
  done: record(z.number()),
})
export type StudyPlan = z.infer<typeof StudyPlanSchema>

export const IeltsProfileSchema = z.object({
  settings: IeltsSettingsSchema.catch(() => IeltsSettingsSchema.parse({})),
  settingsAt: z.number().catch(0),
  attempts: record(AttemptSchema),
  errors: record(ErrorEntrySchema),
  srs: record(SrsCardSchema),
  /** Strategy lessons read: lesson id → when. */
  lessonsDone: record(z.number()),
  plan: StudyPlanSchema.nullable().catch(null),
  /**
   * Estimated Pro spend in micro-dollars, per device per month ("2026-11"). Each device only
   * adds to its own counter, so devices merge without double counting.
   */
  aiUsage: record(record(z.number())),
  /** When IELTS progress was last reset: sync drops progress older than a reset. */
  resetAt: z.number().catch(0),
})
export type IeltsProfile = z.infer<typeof IeltsProfileSchema>

export const IeltsStateSchema = z.object({
  version: z.literal(IELTS_VERSION),
  /** Keyed by the Swedish-app profile id. */
  profiles: z
    .record(z.string(), z.unknown())
    .catch({})
    .transform((map) => {
      const out: Record<string, IeltsProfile> = {}
      for (const [id, p] of Object.entries(map)) {
        const r = IeltsProfileSchema.safeParse(p)
        if (r.success) out[id] = r.data
      }
      return out
    }),
})
export type IeltsState = z.infer<typeof IeltsStateSchema>

export const defaultIeltsState = (): IeltsState => ({ version: IELTS_VERSION, profiles: {} })
export const defaultIeltsProfile = (): IeltsProfile => IeltsProfileSchema.parse({})
