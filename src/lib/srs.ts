import { addDays } from './dates'
import { type SrsCard } from './storage/schema'

/**
 * Spaced repetition: SM-2 with Anki-style four buttons.
 * - Again: the card failed; relearn it in 10 minutes and lower its ease.
 * - Hard / Good / Easy: grow the interval (in days) by roughly 1.2× / ease / ease×1.3.
 * Due dates of a day or more land on local midnight, so a card due "tomorrow"
 * is available all of tomorrow.
 */

export type Rating = 'again' | 'hard' | 'good' | 'easy'
export const RATINGS: Rating[] = ['again', 'hard', 'good', 'easy']

const MIN_EASE = 1.3
const MAX_INTERVAL = 365
const RELEARN_MS = 10 * 60 * 1000

export function newCard(now = Date.now(), opts: { dueNow?: boolean } = {}): SrsCard {
  return {
    ease: 2.5,
    interval: 0,
    reps: 0,
    lapses: 0,
    // Words just learned in a lesson come back tomorrow; words you struggled with, right away.
    due: opts.dueNow ? now : addDays(now, 1),
    last: null,
    added: now,
  }
}

export function isDue(card: SrsCard, now = Date.now()): boolean {
  return card.due <= now
}

function nextInterval(card: SrsCard, rating: Exclude<Rating, 'again'>): number {
  if (card.reps === 0) return { hard: 1, good: 1, easy: 4 }[rating]
  if (card.reps === 1) return { hard: 2, good: 3, easy: 6 }[rating]
  const base = Math.max(1, card.interval)
  const factor = { hard: 1.2, good: card.ease, easy: card.ease * 1.3 }[rating]
  // Never shrink a successful card's interval.
  return Math.max(base + (rating === 'hard' ? 0 : 1), Math.round(base * factor))
}

export function review(card: SrsCard, rating: Rating, now = Date.now()): SrsCard {
  if (rating === 'again') {
    return {
      ...card,
      ease: Math.max(MIN_EASE, card.ease - 0.2),
      interval: 0,
      reps: 0,
      lapses: card.lapses + 1,
      due: now + RELEARN_MS,
      last: now,
    }
  }
  const interval = Math.min(MAX_INTERVAL, nextInterval(card, rating))
  const easeDelta = { hard: -0.15, good: 0, easy: 0.15 }[rating]
  return {
    ...card,
    ease: Math.max(MIN_EASE, card.ease + easeDelta),
    interval,
    reps: card.reps + 1,
    due: addDays(now, interval),
    last: now,
  }
}

/** Short label for a rating button, e.g. "10 min", "1 day", "3 days", "2 mo". */
export function intervalLabel(card: SrsCard, rating: Rating): string {
  if (rating === 'again') return '10 min'
  const days = Math.min(MAX_INTERVAL, nextInterval(card, rating))
  if (days < 30) return days === 1 ? '1 day' : `${days} days`
  if (days < 365) return `${Math.round(days / 30)} mo`
  return '1 yr'
}

/** A card counts as "learned" once it has been reviewed successfully with a 3+ week interval. */
export function isMature(card: SrsCard): boolean {
  return card.interval >= 21
}
