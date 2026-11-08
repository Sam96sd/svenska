import { useSearchParams } from 'react-router'
import { type Attempt } from '../../storage/schema'

export type SpecialRun = 'diagnostic' | 'mock' | null

/**
 * Runners opened from the diagnostic or a mock test get `?kind=diagnostic|mock` (always timed,
 * saved with that kind) and return there afterwards.
 */
export function useSpecialRun(): { special: SpecialRun; back: string } {
  const [search] = useSearchParams()
  const k = search.get('kind')
  const special: SpecialRun = k === 'diagnostic' || k === 'mock' ? k : null
  const back =
    special === 'diagnostic'
      ? '/ielts/diagnostic'
      : special === 'mock'
        ? (search.get('back') ?? '/ielts/mock')
        : '/ielts/practice'
  return { special, back }
}

export function attemptKind(special: SpecialRun, timed: boolean): Attempt['kind'] {
  return special ?? (timed ? 'exam' : 'practice')
}
