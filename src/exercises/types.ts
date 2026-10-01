import { type Exercise } from '../content/schema'

export interface Verdict {
  correct: boolean
  /** Counted correct, but with a nudge. */
  almost?: 'typo' | 'accents'
  /** The right answer, shown in the feedback bar. */
  expected?: string
  expectedLang?: 'sv' | 'en'
  /** Extra line under the answer (e.g. "I heard: …" or a translation). */
  note?: string
  /** Swedish text to play from the feedback bar. */
  audio?: string
}

/** How an exercise talks to the lesson player. */
export interface ExerciseApi {
  /** Pass an evaluator when the answer can be checked, or null to disable "Check". */
  setReady: (evaluate: (() => Verdict) | null) => void
  /** For exercises that finish themselves (match pairs, speaking). */
  submit: (verdict: Verdict) => void
  /** Leave the exercise out without scoring it (e.g. "can't speak now"). */
  skip: () => void
  /** What the Space key plays. */
  setAudio: (play: (() => void) | null) => void
}

export interface ExerciseProps<E extends Exercise = Exercise> {
  exercise: E
  api: ExerciseApi
  /** Set once the answer has been checked; inputs lock and show the result. */
  verdict: Verdict | null
}
