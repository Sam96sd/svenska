import { ArrowRight, Check, CircleAlert, Sparkles, X } from 'lucide-react'
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { Link, useNavigate } from 'react-router'
import { SpeakButtons } from '../../components/Speak'
import { cx } from '../../components/styles'
import { Button, ProgressBar } from '../../components/ui'
import { VoiceBanner } from '../../components/VoiceBanner'
import { nextLessonRef } from '../../content/course'
import { svDisplay } from '../../content/display'
import { type Lesson, type Vocab } from '../../content/schema'
import { ExerciseView } from '../../exercises/ExerciseView'
import { isTypingTarget } from '../../exercises/hooks'
import { type ExerciseApi, type Verdict } from '../../exercises/types'
import { stopSpeaking } from '../../lib/audio'
import { lessonXp } from '../../lib/learning'
import { recognitionSupported } from '../../lib/recognition'
import { sfx } from '../../lib/sfx'
import { completeLesson } from '../../lib/storage/actions'
import { useProfile } from '../../lib/storage/hooks'
import { buildSession, MAX_RETRIES, toQueue, vocabFor, type QueueItem } from './session'
import { Confetti, DialogueView, SectionView, WordCard } from './views'

type Stage = 'learn' | 'words' | 'dialogue' | 'practice' | 'summary'

interface PracticeState {
  queue: QueueItem[]
  pos: number
  verdict: Verdict | null
  /** origin → correct on the first attempt */
  firstTry: Record<number, boolean>
  skipped: number[]
  mistakeVocab: string[]
}

type Action =
  { type: 'check'; verdict: Verdict; vocab: string[] } | { type: 'continue' } | { type: 'skip' }

function reducer(s: PracticeState, a: Action): PracticeState {
  const item = s.queue[s.pos]
  if (!item) return s
  switch (a.type) {
    case 'check': {
      if (s.verdict) return s
      const firstTry =
        item.retry === 0 ? { ...s.firstTry, [item.origin]: a.verdict.correct } : s.firstTry
      let queue = s.queue
      let mistakeVocab = s.mistakeVocab
      if (!a.verdict.correct) {
        mistakeVocab = [...mistakeVocab, ...a.vocab]
        if (item.retry < MAX_RETRIES) {
          queue = [...queue, { ...item, key: `${item.key}r`, retry: item.retry + 1 }]
        }
      }
      return { ...s, verdict: a.verdict, firstTry, queue, mistakeVocab }
    }
    case 'continue':
      return { ...s, pos: s.pos + 1, verdict: null }
    case 'skip':
      return {
        ...s,
        pos: s.pos + 1,
        verdict: null,
        skipped: [...s.skipped, item.origin],
        // A skipped exercise that comes back later is dropped too.
        queue: s.queue.filter((q, i) => i <= s.pos || q.origin !== item.origin),
      }
  }
}

export function LessonPlayer({ lesson, pool }: { lesson: Lesson; pool: Vocab[] }) {
  const profile = useProfile()
  const navigate = useNavigate()
  const stages = useMemo<Stage[]>(
    () =>
      [
        'learn',
        lesson.vocab.length ? 'words' : null,
        lesson.dialogue ? 'dialogue' : null,
        'practice',
        'summary',
      ].filter(Boolean) as Stage[],
    [lesson],
  )
  const [stageState, setStage] = useState<Stage>('learn')
  const exercises = useMemo(
    () => buildSession(lesson, pool, { canSpeak: recognitionSupported() }),
    [lesson, pool],
  )
  const [practice, dispatch] = useReducer(reducer, exercises, (ex) => ({
    queue: toQueue(ex),
    pos: 0,
    verdict: null,
    firstTry: {},
    skipped: [],
    mistakeVocab: [],
  }))

  // Captured once: completing the lesson must not turn this run into a "replay".
  const [alreadyDone] = useState(() => !!profile.lessons[lesson.id])

  // Practice ends when the queue runs out.
  const stage: Stage =
    stageState === 'practice' && practice.pos >= practice.queue.length ? 'summary' : stageState

  // Stop audio when leaving a stage or the lesson.
  useEffect(() => () => stopSpeaking(), [stage])

  const next = () => {
    const i = stages.indexOf(stage)
    setStage(stages[i + 1] ?? 'summary')
    window.scrollTo({ top: 0 })
  }

  const progress =
    stage === 'practice'
      ? 0.15 + 0.85 * (practice.pos / Math.max(1, practice.queue.length))
      : stage === 'summary'
        ? 1
        : (stages.indexOf(stage) / (stages.length - 1)) * 0.15

  const leave = () => {
    if (stage === 'practice' && !confirm('Leave this lesson? Your progress in it will be lost.'))
      return
    navigate(`/unit/${lesson.unitId}`)
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="bg-bg/90 sticky top-0 z-20 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-2xl items-center gap-4 px-5">
          <button
            type="button"
            onClick={leave}
            aria-label="Close lesson"
            className="text-muted hover:bg-surface-2 hover:text-ink -ml-2 rounded-full p-2"
          >
            <X size={24} />
          </button>
          <ProgressBar value={progress} label="Lesson progress" className="flex-1" tone="success" />
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-5 pt-2 pb-40">
        {stage === 'learn' && (
          <IntroStage
            eyebrow={
              lesson.kind === 'culture' ? 'Culture' : lesson.kind === 'sounds' ? 'Sounds' : 'Learn'
            }
            title={lesson.title}
            subtitle={lesson.goal}
          >
            <VoiceBanner />
            <div className="grid grid-cols-1 gap-4">
              {lesson.learn.map((s, i) => (
                <SectionView key={i} section={s} />
              ))}
              {lesson.culture && <SectionView section={lesson.culture} tone="culture" />}
            </div>
          </IntroStage>
        )}

        {stage === 'words' && (
          <IntroStage
            eyebrow="New words"
            title={`${lesson.vocab.length} new words`}
            subtitle="Listen to each one. Tap 🐢 to hear it slowly."
          >
            <div className="grid grid-cols-1 gap-3">
              {lesson.vocab.map((w) => (
                <WordCard key={w.id} word={w} showPron={profile.settings.showPronunciation} />
              ))}
            </div>
          </IntroStage>
        )}

        {stage === 'dialogue' && lesson.dialogue && (
          <IntroStage
            eyebrow="Dialogue"
            title={lesson.dialogue.title ?? 'Listen to the conversation'}
          >
            <DialogueView dialogue={lesson.dialogue} />
          </IntroStage>
        )}

        {stage === 'practice' && practice.queue[practice.pos] && (
          <PracticeStage
            key={practice.queue[practice.pos]!.key}
            item={practice.queue[practice.pos]!}
            verdict={practice.verdict}
            dispatch={dispatch}
            vocab={lesson.vocab}
            pool={pool}
          />
        )}

        {stage === 'summary' && (
          <Summary
            lesson={lesson}
            practice={practice}
            replay={alreadyDone}
            onNext={(to) => navigate(to)}
          />
        )}
      </main>

      {stage !== 'practice' && stage !== 'summary' && (
        <footer className="bg-surface/95 border-line fixed inset-x-0 bottom-0 border-t pb-[env(safe-area-inset-bottom)] backdrop-blur">
          <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-5 py-4">
            {alreadyDone ? (
              <Button variant="ghost" onClick={() => setStage('practice')}>
                Skip to practice
              </Button>
            ) : (
              <span />
            )}
            <Button size="lg" onClick={next} autoFocus>
              {stages[stages.indexOf(stage) + 1] === 'practice' ? 'Start practice' : 'Continue'}
              <ArrowRight size={20} />
            </Button>
          </div>
        </footer>
      )}
    </div>
  )
}

function IntroStage({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <div className="animate-fade-up">
      <p className="text-primary mb-1 text-sm font-semibold tracking-wide uppercase">{eyebrow}</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight">{title}</h1>
      {subtitle && <p className="text-muted mt-2 mb-6 text-[17px]">{subtitle}</p>}
      {!subtitle && <div className="mb-6" />}
      {children}
    </div>
  )
}

function PracticeStage({
  item,
  verdict,
  dispatch,
  vocab,
  pool,
}: {
  item: QueueItem
  verdict: Verdict | null
  dispatch: (a: Action) => void
  vocab: Vocab[]
  pool: Vocab[]
}) {
  const evaluator = useRef<(() => Verdict) | null>(null)
  const audio = useRef<(() => void) | null>(null)
  const [ready, setReadyState] = useState(false)

  const check = useCallback(
    (v: Verdict) => {
      if (v.correct) sfx.correct()
      else sfx.wrong()
      dispatch({
        type: 'check',
        verdict: v,
        vocab: v.correct ? [] : vocabFor(item.exercise, [...vocab, ...pool]),
      })
    },
    [dispatch, item, vocab, pool],
  )

  const api = useMemo<ExerciseApi>(
    () => ({
      setReady: (fn) => {
        evaluator.current = fn
        setReadyState(fn !== null)
      },
      submit: check,
      skip: () => dispatch({ type: 'skip' }),
      setAudio: (fn) => {
        audio.current = fn
      },
    }),
    [check, dispatch],
  )

  const onCheck = useCallback(() => {
    if (evaluator.current) check(evaluator.current())
  }, [check])

  const onContinue = useCallback(() => {
    stopSpeaking()
    dispatch({ type: 'continue' })
    window.scrollTo({ top: 0 })
  }, [dispatch])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        // Let Enter on a focused button do its own thing.
        if ((e.target as HTMLElement)?.tagName === 'BUTTON') return
        e.preventDefault()
        if (verdict) onContinue()
        else if (ready) onCheck()
      } else if (
        e.key === ' ' &&
        !isTypingTarget(e.target) &&
        (e.target as HTMLElement)?.tagName !== 'BUTTON'
      ) {
        if (audio.current) {
          e.preventDefault()
          audio.current()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [verdict, ready, onCheck, onContinue])

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
        onCheck={onCheck}
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
              <div className="mt-1 flex items-center gap-2">
                <p className="min-w-0">
                  <span className="text-muted text-sm">
                    {tone === 'correct' ? 'Answer: ' : 'Correct answer: '}
                  </span>
                  <span lang={verdict.expectedLang} className="font-semibold">
                    {verdict.expected}
                  </span>
                </p>
              </div>
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

function Summary({
  lesson,
  practice,
  replay,
  onNext,
}: {
  lesson: Lesson
  practice: PracticeState
  replay: boolean
  onNext: (to: string) => void
}) {
  const profile = useProfile()
  const origins = new Set(practice.queue.map((q) => q.origin))
  for (const s of practice.skipped) origins.delete(s)
  const total = origins.size
  const correct = [...origins].filter((o) => practice.firstTry[o]).length
  const score = total ? correct / total : 1
  const xp = lessonXp(correct, total, replay)
  const saved = useRef(false)
  const next = nextLessonRef(lesson.id)

  useEffect(() => {
    if (saved.current) return
    saved.current = true
    completeLesson(profile.id, {
      lessonId: lesson.id,
      score,
      xp,
      vocabIds: lesson.vocab.map((v) => v.id),
      mistakeVocabIds: [...new Set(practice.mistakeVocab)],
    })
    sfx.complete()
  }, [profile.id, lesson, score, xp, practice.mistakeVocab])

  const headline =
    score === 1
      ? 'Perfekt!'
      : score >= 0.8
        ? 'Bra jobbat!'
        : score >= 0.5
          ? 'Snyggt!'
          : 'Bra kämpat!'
  const sub =
    score === 1
      ? 'Perfect — no mistakes!'
      : score >= 0.8
        ? 'Great job!'
        : score >= 0.5
          ? 'Nicely done!'
          : 'Good effort — practice makes perfect!'

  return (
    <div className="animate-fade-up pt-6 text-center">
      <Confetti />
      <div className="bg-accent-soft mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full">
        <Sparkles className="text-accent-ink" size={40} aria-hidden="true" />
      </div>
      <h1 className="font-display text-4xl font-semibold tracking-tight" lang="sv">
        {headline}
      </h1>
      <p className="text-muted mt-1 text-lg">{sub}</p>

      <dl className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-3">
        <div className="bg-surface border-line rounded-card border p-4">
          <dt className="text-muted text-sm">XP earned</dt>
          <dd className="text-primary text-3xl font-bold" data-testid="lesson-xp">
            +{xp}
          </dd>
        </div>
        <div className="bg-surface border-line rounded-card border p-4">
          <dt className="text-muted text-sm">Accuracy</dt>
          <dd className="text-3xl font-bold">{Math.round(score * 100)}%</dd>
        </div>
      </dl>

      {lesson.vocab.length > 0 && (
        <section className="mt-8 text-left">
          <h2 className="mb-3 font-semibold">
            {lesson.vocab.length} words added to your review deck
          </h2>
          <ul className="flex flex-wrap gap-2">
            {lesson.vocab.map((w) => (
              <li
                key={w.id}
                className="bg-surface border-line flex items-center gap-1 rounded-full border py-1 pr-3 pl-1"
              >
                <SpeakButtons text={svDisplay(w)} size="sm" slow={false} />
                <span lang="sv" className="font-medium">
                  {svDisplay(w)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        {next && (
          <Button size="lg" onClick={() => onNext(`/lesson/${next.lesson.id}`)} autoFocus>
            Next lesson <ArrowRight size={20} />
          </Button>
        )}
        <Link
          to={`/unit/${lesson.unitId}`}
          className="text-muted hover:text-ink inline-flex h-14 items-center justify-center rounded-2xl px-6 font-semibold"
        >
          Back to unit
        </Link>
      </div>
    </div>
  )
}
