import { createContext, useContext } from 'react'
import { type Answers, type MarkedQuestion } from '../marking'

/** Everything a question component needs, passed through context to keep props small. */
export interface QuestionCtx {
  answers: Answers
  setAnswer: (n: number, value: string) => void
  /** After marking: results by question number. Inputs become read-only. */
  marked: Map<number, MarkedQuestion> | null
  /** Called when the learner starts working on a question (timing per question). */
  onFocus: (n: number) => void
  flagged: Set<number>
}

export const QuestionContext = createContext<QuestionCtx | null>(null)

export function useQ(): QuestionCtx {
  const ctx = useContext(QuestionContext)
  if (!ctx) throw new Error('Question components need a QuestionContext')
  return ctx
}

export function markTone(m: MarkedQuestion | undefined): string {
  if (!m) return 'border-line focus:border-primary'
  return m.correct ? 'border-success bg-success-soft' : 'border-danger bg-danger-soft'
}

export function rangeOf(ns: number[]): string {
  if (ns.length === 0) return ''
  const min = Math.min(...ns)
  const max = Math.max(...ns)
  return min === max ? String(min) : `${min}–${max}`
}

/** "Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer." */
export function wordLimitText(
  limit: { words: number; number: boolean } | undefined,
): string | null {
  if (!limit) return null
  const n = ['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'][limit.words] ?? String(limit.words)
  if (limit.words === 0) return 'Write A NUMBER for each answer.'
  if (limit.words === 1 && !limit.number) return 'Write ONE WORD ONLY for each answer.'
  if (limit.words === 1 && limit.number) return 'Write ONE WORD AND/OR A NUMBER for each answer.'
  return `Write NO MORE THAN ${n} WORDS${limit.number ? ' AND/OR A NUMBER' : ''} for each answer.`
}
