import { cardId, dueCardIds, weakVocabIds } from '../../lib/learning'
import { shuffle } from '../../lib/random'
import { type Profile } from '../../lib/storage/schema'

export type ReviewSet = 'due' | 'all' | 'weak'

const SESSION_SIZE = 30

/** Which cards a review session covers. Non-due sets are "extra practice" and don't reschedule. */
export function reviewCardIds(profile: Profile, set: ReviewSet, now = Date.now()): string[] {
  if (set === 'weak')
    return weakVocabIds(profile)
      .map(cardId)
      .filter((id) => profile.srs[id])
  if (set === 'all') return shuffle(Object.keys(profile.srs)).slice(0, 20)
  return dueCardIds(profile, now).slice(0, SESSION_SIZE)
}
