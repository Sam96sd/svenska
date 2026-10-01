import { ArrowRight, Check, CircleAlert, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SpeakButtons } from '../../components/Speak'
import { cx } from '../../components/styles'
import { Button } from '../../components/ui'
import { type Exercise, type Vocab } from '../../content/schema'
import { ExerciseView } from '../../exercises/ExerciseView'
import { isTypingTarget } from '../../exercises/hooks'
import { type ExerciseApi, type Verdict } from '../../exercises/types'
import { stopSpeaking } from '../../lib/audio'
import { sfx } from '../../lib/sfx'
import { MAX_RETRIES, toQueue, vocabFor, type QueueItem } from '../lesson/session'

export interface PracticeOutcome {
  /** Exercises that were scored (skipped ones excluded). */
  total: number
  /** Answered correctly on the first attempt. */
  correct: number
  /** Vocab ids involved in wrong answers. */
  mistakeVocab: string[]
}

interface State {
  queue: QueueItem[]
  pos: number
  verdict: Verdict | null
  firstTry: Record<number, boolean>
  skipped: number[]
  mistakeVocab: string[]
}

function outcomeOf(s: State): PracticeOutcome {
  const origins = new Set(s.queue.map((q) => q.origin))
  for (const o of s.skipped) origins.delete(o)
  return {
    total: origins.size,
    correct: [...origins].filter((o) => s.firstTry[o]).length,
    mistakeVocab: [...new Set(s.mistakeVocab)],
  }
}

/**
 * Runs a list of exercises one at a time with a Check/Continue bar.
 * Wrong answers come back at the end (up to MAX_RETRIES times) unless `requeueWrong` is false.
 */
export function PracticeSession({
  exercises,
  words,
  requeueWrong = true,
  onProgress,
  onAnswer,
  onFinish,
}: {
  exercises: Exercise[]
  /** Vocabulary used to work out which words a mistake was about. */
  words: Vocab[]
  requeueWrong?: boolean
  onProgress?: (fraction: number) => void
  /** Called once per checked answer. */
  onAnswer?: (info: {
    exercise: Exercise
    correct: boolean
    firstAttempt: boolean
    vocab: string[]
  }) => void
  onFinish: (outcome: PracticeOutcome) => void
}) {
  const [state, setState] = useState<State>(() => ({
    queue: toQueue(exercises),
    pos: 0,
    verdict: null,
    firstTry: {},
    skipped: [],
    mistakeVocab: [],
  }))
  const item = state.queue[state.pos]

  const advance = useCallback(
    (next: State) => {
      setState(next)
      onProgress?.(next.pos / Math.max(1, next.queue.length))
      if (next.pos >= next.queue.length) onFinish(outcomeOf(next))
    },
    [onFinish, onProgress],
  )

  const check = useCallback(
    (verdict: Verdict) => {
      if (!item || state.verdict) return
      if (verdict.correct) sfx.correct()
      else sfx.wrong()
      const vocab = vocabFor(item.exercise, words)
      onAnswer?.({
        exercise: item.exercise,
        correct: verdict.correct,
        firstAttempt: item.retry === 0,
        vocab,
      })
      setState((s) => {
        const firstTry =
          item.retry === 0 ? { ...s.firstTry, [item.origin]: verdict.correct } : s.firstTry
        let { queue, mistakeVocab } = s
        if (!verdict.correct) {
          mistakeVocab = [...mistakeVocab, ...vocab]
          if (requeueWrong && item.retry < MAX_RETRIES) {
            queue = [...queue, { ...item, key: `${item.key}r`, retry: item.retry + 1 }]
          }
        }
        return { ...s, verdict, firstTry, queue, mistakeVocab }
      })
    },
    [item, state.verdict, words, onAnswer, requeueWrong],
  )

  const onContinue = useCallback(() => {
    stopSpeaking()
    window.scrollTo({ top: 0 })
    advance({ ...state, pos: state.pos + 1, verdict: null })
  }, [state, advance])

  const skip = useCallback(() => {
    if (!item) return
    advance({
      ...state,
      pos: state.pos + 1,
      verdict: null,
      skipped: [...state.skipped, item.origin],
      // A skipped exercise that was queued again is dropped too.
      queue: state.queue.filter((q, i) => i <= state.pos || q.origin !== item.origin),
    })
  }, [state, item, advance])

  useEffect(() => () => stopSpeaking(), [])

  if (!item) return null
  return (
    <ExerciseStep
      key={item.key}
      item={item}
      verdict={state.verdict}
      onCheck={check}
      onContinue={onContinue}
      onSkip={skip}
    />
  )
}

function ExerciseStep({
  item,
  verdict,
  onCheck,
  onContinue,
  onSkip,
}: {
  item: QueueItem
  verdict: Verdict | null
  onCheck: (v: Verdict) => void
  onContinue: () => void
  onSkip: () => void
}) {
  const evaluator = useRef<(() => Verdict) | null>(null)
  const audio = useRef<(() => void) | null>(null)
  const [ready, setReady] = useState(false)

  // Keep the latest callbacks in refs so the exercise API object stays stable.
  const handlers = useRef({ onCheck, onSkip })
  useEffect(() => {
    handlers.current = { onCheck, onSkip }
  })

  const api = useMemo<ExerciseApi>(
    () => ({
      setReady: (fn) => {
        evaluator.current = fn
        setReady(fn !== null)
      },
      submit: (v) => handlers.current.onCheck(v),
      skip: () => handlers.current.onSkip(),
      setAudio: (fn) => {
        audio.current = fn
      },
    }),
    [],
  )

  const check = useCallback(() => {
    if (evaluator.current) onCheck(evaluator.current())
  }, [onCheck])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName
      if (e.key === 'Enter' && !e.shiftKey) {
        // Let Enter on a focused button do its own thing.
        if (tag === 'BUTTON') return
        e.preventDefault()
        if (verdict) onContinue()
        else if (ready) check()
      } else if (e.key === ' ' && !isTypingTarget(e.target) && tag !== 'BUTTON' && audio.current) {
        e.preventDefault()
        audio.current()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [verdict, ready, check, onContinue])

  return (
    <>
      <div className="animate-fade-up pt-4">
        {item.retry > 0 && (
          <p className="text-accent-ink mb-3 flex items-center gap-1.5 text-sm font-semibold">
            <CircleAlert size={16} aria-hidden="true" /> Let's try this one again
          </p>
        )}
        <ExerciseView exercise={item.exercise} api={api} verdict={verdict} />
      </div>
      <FeedbackBar
        verdict={verdict}
        explanation={item.exercise.explanation}
        ready={ready}
        onCheck={check}
        onContinue={onContinue}
        selfSubmitting={item.exercise.type === 'match' || item.exercise.type === 'speak'}
      />
    </>
  )
}

function FeedbackBar({
  verdict,
  explanation,
  ready,
  onCheck,
  onContinue,
  selfSubmitting,
}: {
  verdict: Verdict | null
  explanation?: string
  ready: boolean
  onCheck: () => void
  onContinue: () => void
  selfSubmitting: boolean
}) {
  const continueRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (verdict) continueRef.current?.focus({ preventScroll: true })
  }, [verdict])

  const tone = !verdict
    ? 'neutral'
    : verdict.almost
      ? 'almost'
      : verdict.correct
        ? 'correct'
        : 'wrong'
  const title = {
    neutral: '',
    correct: 'Rätt! Correct',
    almost:
      verdict?.almost === 'accents' ? 'Almost! Watch the å, ä and ö' : 'Almost! Watch the spelling',
    wrong: 'Inte riktigt. Not quite',
  }[tone]

  return (
    <div
      className={cx(
        'fixed inset-x-0 bottom-0 z-20 border-t pb-[env(safe-area-inset-bottom)] transition-colors',
        tone === 'neutral' && 'bg-surface/95 border-line backdrop-blur',
        tone === 'correct' && 'bg-success-soft border-success/30',
        tone === 'almost' && 'bg-accent-soft border-accent/40',
        tone === 'wrong' && 'bg-danger-soft border-danger/30',
      )}
    >
      <div className="mx-auto flex max-w-2xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center">
        {verdict && (
          <div role="status" aria-live="assertive" className="animate-fade-up min-w-0 flex-1">
            <p
              className={cx(
                'flex items-center gap-2 text-lg font-bold',
                tone === 'correct' && 'text-success',
                tone === 'almost' && 'text-accent-ink',
                tone === 'wrong' && 'text-danger',
              )}
            >
              {tone === 'wrong' ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Check size={22} aria-hidden="true" />
              )}
              {title}
            </p>
            {verdict.expected && (
              <p className="mt-1">
                <span className="text-muted text-sm">
                  {tone === 'correct' ? 'Answer: ' : 'Correct answer: '}
                </span>
                <span lang={verdict.expectedLang} className="font-semibold">
                  {verdict.expected}
                </span>
              </p>
            )}
            {verdict.note && <p className="text-muted mt-1 text-sm">{verdict.note}</p>}
            {explanation && <p className="mt-1 text-sm">{explanation}</p>}
          </div>
        )}
        <div className="flex items-center gap-2 sm:ml-auto">
          {verdict?.audio && <SpeakButtons text={verdict.audio} size="md" />}
          {verdict ? (
            <Button
              ref={continueRef}
              size="lg"
              variant={tone === 'wrong' ? 'danger' : 'primary'}
              onClick={onContinue}
              className="flex-1 sm:flex-none"
            >
              Continue <ArrowRight size={20} />
            </Button>
          ) : (
            !selfSubmitting && (
              <Button size="lg" onClick={onCheck} disabled={!ready} className="w-full sm:w-auto">
                Check
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  )
}
