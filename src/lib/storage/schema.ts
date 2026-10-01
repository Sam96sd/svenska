import { z } from 'zod'

/**
 * Persisted data shape. Every field has a fallback (`.catch`) so partially
 * corrupt or older data is repaired field by field instead of being thrown away.
 * Bump STORAGE_VERSION and add a step in migrate.ts when the shape changes.
 */
export const STORAGE_VERSION = 1

export const AVATAR_COLORS = [
  '#2C5D8F',
  '#D9A21B',
  '#3F8F6B',
  '#C2566B',
  '#7A5BB5',
  '#D9733F',
] as const

export const DAILY_GOALS = [5, 10, 20] as const
export type DailyGoal = (typeof DAILY_GOALS)[number]

/** Roughly how much XP a focused minute earns. Daily goal in XP = minutes × this. */
export const XP_PER_MINUTE = 10

export const SettingsSchema = z.object({
  dailyGoalMinutes: z.union([z.literal(5), z.literal(10), z.literal(20)]).catch(10),
  audioRate: z.number().min(0.5).max(1.5).catch(0.9),
  voiceURI: z.string().nullable().catch(null),
  theme: z.enum(['auto', 'light', 'dark']).catch('auto'),
  showCouple: z.boolean().catch(true),
  showPronunciation: z.boolean().catch(true),
  soundEffects: z.boolean().catch(true),
})
export type Settings = z.infer<typeof SettingsSchema>
export const defaultSettings = (): Settings => SettingsSchema.parse({})

export const SrsCardSchema = z.object({
  ease: z.number().catch(2.5),
  interval: z.number().catch(0),
  reps: z.number().catch(0),
  lapses: z.number().catch(0),
  due: z.number().catch(0),
  last: z.number().nullable().catch(null),
  added: z.number().catch(0),
})
export type SrsCard = z.infer<typeof SrsCardSchema>

export const LessonProgressSchema = z.object({
  completedAt: z.number(),
  bestScore: z.number().min(0).max(1).catch(0),
  attempts: z.number().catch(1),
})
export type LessonProgress = z.infer<typeof LessonProgressSchema>

export const MistakeSchema = z.object({
  count: z.number().catch(1),
  lastAt: z.number().catch(0),
})
export type Mistake = z.infer<typeof MistakeSchema>

export const StreakSchema = z.object({
  current: z.number().catch(0),
  longest: z.number().catch(0),
  lastDay: z.string().nullable().catch(null),
})

const record = <T extends z.ZodType>(value: T) => z.record(z.string(), value).catch({})

export const ProfileSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(40).catch('Learner'),
  color: z.string().catch(AVATAR_COLORS[0]),
  createdAt: z.number().catch(0),
  settings: SettingsSchema.catch(defaultSettings),
  xp: z.number().min(0).catch(0),
  xpByDay: record(z.number()),
  streak: StreakSchema.catch({ current: 0, longest: 0, lastDay: null }),
  lessons: record(LessonProgressSchema),
  srs: record(SrsCardSchema),
  mistakes: record(MistakeSchema),
  /** Units unlocked early by passing a placement test. */
  unlockedUnits: z.array(z.string()).catch([]),
  badges: z.array(z.string()).catch([]),
})
export type Profile = z.infer<typeof ProfileSchema>

export const AppStateSchema = z.object({
  version: z.literal(STORAGE_VERSION),
  profiles: z
    .array(z.unknown())
    .catch([])
    // Keep valid profiles even if one of them is broken beyond repair.
    .transform((list) =>
      list.flatMap((p) => {
        const r = ProfileSchema.safeParse(p)
        return r.success ? [r.data] : []
      }),
    ),
  activeProfileId: z.string().nullable().catch(null),
})
export type AppState = z.infer<typeof AppStateSchema>

export const defaultState = (): AppState => ({
  version: STORAGE_VERSION,
  profiles: [],
  activeProfileId: null,
})
