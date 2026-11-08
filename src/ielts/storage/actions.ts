import { deviceId } from '../../lib/device'
import { newCard, review, type Rating } from '../../lib/srs'
import {
  defaultIeltsProfile,
  type Attempt,
  type ErrorEntry,
  type IeltsProfile,
  type IeltsSettings,
  type IeltsState,
} from './schema'
import { ieltsStore } from './store'

export function newId(prefix = 'i'): string {
  const rand =
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
  return `${prefix}-${rand}`
}

function mapProfile(
  s: IeltsState,
  profileId: string,
  fn: (p: IeltsProfile) => IeltsProfile,
): IeltsState {
  const prev = s.profiles[profileId] ?? defaultIeltsProfile()
  const next = fn(prev)
  if (next === prev && s.profiles[profileId]) return s
  return { ...s, profiles: { ...s.profiles, [profileId]: next } }
}

export function updateIelts(profileId: string, fn: (p: IeltsProfile) => IeltsProfile) {
  ieltsStore.set((s) => mapProfile(s, profileId, fn))
}

export function updateIeltsSettings(profileId: string, patch: Partial<IeltsSettings>) {
  updateIelts(profileId, (p) => ({
    ...p,
    settings: { ...p.settings, ...patch },
    settingsAt: Date.now(),
  }))
}

/** Saves a new or updated attempt; returns it with timestamps filled in. */
export function saveAttempt(profileId: string, attempt: Attempt): Attempt {
  const saved = { ...attempt, updatedAt: Date.now() }
  updateIelts(profileId, (p) => ({ ...p, attempts: { ...p.attempts, [saved.id]: saved } }))
  return saved
}

export function addErrors(profileId: string, entries: ErrorEntry[]) {
  if (entries.length === 0) return
  updateIelts(profileId, (p) => {
    const errors = { ...p.errors }
    for (const e of entries) errors[e.id] = { ...e, updatedAt: Date.now() }
    return { ...p, errors }
  })
}

export function resolveError(profileId: string, errorId: string, resolved = true) {
  updateIelts(profileId, (p) => {
    const e = p.errors[errorId]
    if (!e) return p
    const now = Date.now()
    return {
      ...p,
      errors: {
        ...p.errors,
        [errorId]: { ...e, resolvedAt: resolved ? now : null, updatedAt: now },
      },
    }
  })
}

export function markLessonDone(profileId: string, lessonId: string) {
  updateIelts(profileId, (p) =>
    p.lessonsDone[lessonId]
      ? p
      : { ...p, lessonsDone: { ...p.lessonsDone, [lessonId]: Date.now() } },
  )
}

export function monthKey(at = Date.now()): string {
  const d = new Date(at)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

/** Adds estimated Pro spend (in US dollars) to this device's counter for this month. */
export function recordProSpend(profileId: string, usd: number, at = Date.now()) {
  if (!(usd > 0)) return
  const micro = Math.round(usd * 1_000_000)
  const device = deviceId()
  const month = monthKey(at)
  updateIelts(profileId, (p) => {
    const mine = p.aiUsage[device] ?? {}
    return {
      ...p,
      aiUsage: { ...p.aiUsage, [device]: { ...mine, [month]: (mine[month] ?? 0) + micro } },
    }
  })
}

/** Estimated Pro spend this month across all devices, in US dollars. */
export function proSpendThisMonth(p: IeltsProfile, at = Date.now()): number {
  const month = monthKey(at)
  let micro = 0
  for (const months of Object.values(p.aiUsage)) micro += months[month] ?? 0
  return micro / 1_000_000
}

/** Wipe IELTS progress but keep the module, target and settings. */
export function resetIelts(profileId: string) {
  updateIelts(profileId, (p) => ({
    ...defaultIeltsProfile(),
    settings: p.settings,
    settingsAt: p.settingsAt,
    aiUsage: p.aiUsage,
    resetAt: Date.now(),
  }))
}

/** Drop IELTS data of learners that were deleted. */
export function pruneIeltsProfiles(deletedIds: Iterable<string>) {
  const ids = [...deletedIds]
  ieltsStore.set((s) => {
    if (!ids.some((id) => s.profiles[id])) return s
    const profiles = { ...s.profiles }
    for (const id of ids) delete profiles[id]
    return { ...s, profiles }
  })
}

/** Starts (or restarts) the study plan from today. */
export function startPlan(profileId: string, weeks: number, dailyMinutes: number) {
  const now = Date.now()
  updateIelts(profileId, (p) => ({
    ...p,
    plan: { weeks, dailyMinutes, startedAt: now, updatedAt: now, done: {} },
  }))
}

/** Changes the plan's length or daily time without losing progress. */
export function updatePlan(profileId: string, patch: { weeks?: number; dailyMinutes?: number }) {
  updateIelts(profileId, (p) =>
    p.plan ? { ...p, plan: { ...p.plan, ...patch, updatedAt: Date.now() } } : p,
  )
}

export function setPlanTaskDone(profileId: string, day: number, key: string, done: boolean) {
  updateIelts(profileId, (p) => {
    if (!p.plan) return p
    const k = `${day}:${key}`
    const next = { ...p.plan.done }
    if (done) next[k] = Date.now()
    else delete next[k]
    return { ...p, plan: { ...p.plan, done: next, updatedAt: Date.now() } }
  })
}

/** Adds up to `count` new cards from a deck to the learner's reviews (due now). */
export function addVocabCards(profileId: string, cardIds: string[]) {
  if (cardIds.length === 0) return
  const now = Date.now()
  updateIelts(profileId, (p) => {
    const srs = { ...p.srs }
    let added = false
    for (const id of cardIds)
      if (!srs[id]) {
        srs[id] = newCard(now, { dueNow: true })
        added = true
      }
    return added ? { ...p, srs } : p
  })
}

export function reviewVocabCard(profileId: string, cardId: string, rating: Rating) {
  updateIelts(profileId, (p) => {
    const card = p.srs[cardId]
    if (!card) return p
    return { ...p, srs: { ...p.srs, [cardId]: review(card, rating) } }
  })
}
