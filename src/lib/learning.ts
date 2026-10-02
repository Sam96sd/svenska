import { addXp } from './progress'
import { newCard, review, type Rating } from './srs'
import { type Profile } from './storage/schema'

/** Pure progress updates for lessons and reviews (wrapped as store actions in storage/actions.ts). */

export const cardId = (vocabId: string) => `v:${vocabId}`
export const vocabIdOfCard = (id: string) => (id.startsWith('v:') ? id.slice(2) : id)

export interface LessonResult {
  lessonId: string
  /** Share of exercises answered correctly on the first try (0–1). */
  score: number
  xp: number
  /** Vocab introduced by the lesson: added to the review deck. */
  vocabIds: string[]
  /** Vocab involved in mistakes: due for review right away and tracked as weak. */
  mistakeVocabIds: string[]
}

export const XP = {
  lessonBase: 10,
  perCorrect: 3,
  perfectBonus: 10,
  reviewCard: 1,
  /** Replaying a completed lesson earns half. */
  replayFactor: 0.5,
}

export function lessonXp(correctFirstTry: number, total: number, replay: boolean): number {
  const perfect = total > 0 && correctFirstTry === total
  const xp = XP.lessonBase + correctFirstTry * XP.perCorrect + (perfect ? XP.perfectBonus : 0)
  return Math.round(replay ? xp * XP.replayFactor : xp)
}

export function applyLessonResult(profile: Profile, r: LessonResult, now = Date.now()): Profile {
  const prev = profile.lessons[r.lessonId]
  const srs = { ...profile.srs }
  const struggled = new Set(r.mistakeVocabIds)
  for (const vid of r.vocabIds) {
    const id = cardId(vid)
    if (!srs[id]) srs[id] = newCard(now, { dueNow: struggled.has(vid) })
  }
  // A mistake on an older word brings its card forward.
  for (const vid of struggled) {
    const card = srs[cardId(vid)]
    if (card && card.due > now) srs[cardId(vid)] = { ...card, due: now }
  }

  const updated: Profile = {
    ...profile,
    lessons: {
      ...profile.lessons,
      [r.lessonId]: {
        completedAt: now,
        bestScore: Math.max(prev?.bestScore ?? 0, r.score),
        attempts: (prev?.attempts ?? 0) + 1,
      },
    },
    srs,
    mistakes: addMistakes(profile.mistakes, r.mistakeVocabIds, now),
  }
  return addXp(updated, r.xp, now)
}

function addMistakes(
  mistakes: Profile['mistakes'],
  vocabIds: string[],
  now: number,
): Profile['mistakes'] {
  const next = { ...mistakes }
  for (const id of new Set(vocabIds)) {
    next[id] = { count: (next[id]?.count ?? 0) + 1, lastAt: now }
  }
  return next
}

export function applyReview(
  profile: Profile,
  id: string,
  rating: Rating,
  now = Date.now(),
): Profile {
  const card = profile.srs[id] ?? newCard(now, { dueNow: true })
  const vid = vocabIdOfCard(id)
  let mistakes = profile.mistakes
  if (rating === 'again') {
    mistakes = addMistakes(mistakes, [vid], now)
  } else if (rating !== 'hard' && isWeak(profile, vid)) {
    // Remembering a weak word well slowly clears it from the weak list. A cleared word keeps
    // count 0 (instead of being deleted) so sync knows it was cleared, not never missed.
    const count = mistakes[vid]?.count ?? 0
    mistakes = { ...mistakes, [vid]: { count: Math.max(0, count - 1), lastAt: now } }
  }
  const updated = { ...profile, srs: { ...profile.srs, [id]: review(card, rating, now) }, mistakes }
  return addXp(updated, XP.reviewCard, now)
}

/** Ids of review cards due now, most overdue first. */
export function dueCardIds(profile: Profile, now = Date.now()): string[] {
  return Object.entries(profile.srs)
    .filter(([, c]) => c.due <= now)
    .sort(([, a], [, b]) => a.due - b.due)
    .map(([id]) => id)
}

export const isWeak = (profile: Profile, vocabId: string) =>
  (profile.mistakes[vocabId]?.count ?? 0) > 0

/** Weak words: most mistakes first. */
export function weakVocabIds(profile: Profile): string[] {
  return Object.entries(profile.mistakes)
    .filter(([, m]) => m.count > 0)
    .sort(([, a], [, b]) => b.count - a.count || b.lastAt - a.lastAt)
    .map(([id]) => id)
}
