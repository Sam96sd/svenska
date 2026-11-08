import { useCallback, useMemo, useState } from 'react'
import { type QuestionGroup, screenOrder } from '../content/schema'
import {
  answeredNumbers,
  markGroups,
  type Answers,
  type Marked,
  type MarkedQuestion,
} from './marking'
import { useQuestionTimes } from './timers'

/** Answers, flags, per-question timing and marking for one set of question groups. */
export function useQuestionSession(
  groups: QuestionGroup[] | null,
  opts: { running: boolean; stuckAfterMs: number },
) {
  const [answers, setAnswers] = useState<Answers>({})
  const [flagged, setFlagged] = useState<Set<number>>(new Set())
  const [marked, setMarked] = useState<Marked | null>(null)
  const [current, setCurrent] = useState<number | null>(null)
  const times = useQuestionTimes(opts.running && !marked, opts.stuckAfterMs)

  const numbers = useMemo(() => (groups ? screenOrder(groups) : []), [groups])
  const answered = useMemo(
    () => (groups ? answeredNumbers(groups, answers) : new Set<number>()),
    [groups, answers],
  )
  const markedMap = useMemo(
    () => (marked ? new Map<number, MarkedQuestion>(marked.questions.map((q) => [q.n, q])) : null),
    [marked],
  )

  const setAnswer = useCallback((n: number, value: string) => {
    setAnswers((a) => ({ ...a, [n]: value }))
  }, [])

  const { focus: focusTime } = times
  const focus = useCallback(
    (n: number) => {
      setCurrent(n)
      focusTime(n)
    },
    [focusTime],
  )

  return {
    answers,
    setAnswer,
    flagged,
    toggleFlag: (n: number) =>
      setFlagged((f) => {
        const next = new Set(f)
        if (next.has(n)) next.delete(n)
        else next.add(n)
        return next
      }),
    current,
    focus,
    numbers,
    answered,
    marked,
    markedMap,
    stuck: times.stuck,
    dismissStuck: times.dismissStuck,
    /** Marks everything and returns the result plus time per question. */
    submit: (): { marked: Marked; times: Record<number, number> } => {
      const m = markGroups(groups ?? [], answers)
      const t = times.snapshot()
      setMarked(m)
      return { marked: m, times: t }
    },
    reset: () => {
      setAnswers({})
      setFlagged(new Set())
      setMarked(null)
      setCurrent(null)
    },
  }
}

/** Scroll a question into view (by its element id) and focus its first control. */
export function jumpToQuestion(n: number) {
  const el = document.getElementById(`q-${n}`)
  if (!el) return
  el.scrollIntoView({ block: 'center', behavior: 'smooth' })
  el.querySelector<HTMLElement>('input, select, textarea')?.focus({ preventScroll: true })
}
