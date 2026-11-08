import { Timer } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router'
import { PageSpinner } from '../../../app/PageSpinner'
import { cx } from '../../../components/styles'
import { Button, Card } from '../../../components/ui'
import { loadPassage } from '../../content/index'
import { QUESTION_TYPE_LABEL, groupTypeKey, type Passage } from '../../content/schema'
import { ExamShell, QuestionNavigator } from '../../engine/ExamShell'
import { QuestionGroupView } from '../../engine/questions/Groups'
import { QuestionContext } from '../../engine/questions/qutils'
import { PassageView } from '../../engine/reader/PassageView'
import { type Highlight } from '../../engine/reader/highlights'
import { AnswerExplanation, ResultsSummary } from '../../engine/ResultsView'
import { useExamClock } from '../../engine/timers'
import { jumpToQuestion, useQuestionSession } from '../../engine/useQuestionSession'
import { MODULE_LABEL, READING } from '../../examSpec'
import { Notice, Pill } from '../../components/ui'
import { useIelts } from '../../storage/hooks'
import { recordObjectiveAttempt } from '../../storage/record'
import { attemptKind, useSpecialRun } from '../shared/runKind'
import { type MarkedQuestion } from '../../engine/marking'

export type RunMode = 'practice' | 'exam'

export default function ReadingSessionPage() {
  const { id = '' } = useParams()
  const [search] = useSearchParams()
  const { special } = useSpecialRun()
  const mode: RunMode = search.get('mode') === 'exam' || special ? 'exam' : 'practice'
  const [passage, setPassage] = useState<Passage | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [run, setRun] = useState(0)

  useEffect(() => {
    let alive = true
    loadPassage(id).then(
      (p) => alive && setPassage(p),
      (e: unknown) =>
        alive && setError(e instanceof Error ? e.message : 'Could not load this passage.'),
    )
    return () => {
      alive = false
    }
  }, [id])

  if (error)
    return (
      <div className="mx-auto max-w-lg p-6">
        <Notice tone="error">{error}</Notice>
      </div>
    )
  if (!passage) return <PageSpinner />
  return (
    <ReadingRun
      key={run}
      passage={passage}
      initialMode={mode}
      onRetry={() => setRun((r) => r + 1)}
    />
  )
}

export function ReadingRun({
  passage,
  initialMode,
  onRetry,
}: {
  passage: Passage
  initialMode: RunMode
  onRetry: () => void
}) {
  const navigate = useNavigate()
  const { profileId, ielts } = useIelts()
  // Drills suit both modules: score them on the learner's own module.
  const module = passage.module === 'both' ? (ielts.settings.module ?? 'academic') : passage.module
  const { special, back } = useSpecialRun()
  const [mode, setMode] = useState<RunMode>(initialMode)
  const [phase, setPhase] = useState<'intro' | 'running' | 'done'>('intro')
  const [startedAt, setStartedAt] = useState(0)
  const [duration, setDuration] = useState(0)
  const [tab, setTab] = useState<'text' | 'questions'>('text')
  const [highlights, setHighlights] = useState<Highlight[]>([])
  const [focusLoc, setFocusLoc] = useState<{ ref: string; quote: string } | null>(null)
  const session = useQuestionSession(passage.groups, {
    running: phase === 'running',
    stuckAfterMs: READING.stuckAfterSeconds * 1000,
  })
  const clock = useExamClock(mode === 'exam' ? passage.minutes * 60 : null, {
    running: phase === 'running',
    onExpire: () => finish(),
  })

  function finish() {
    if (phase !== 'running') return
    const { marked, times } = session.submit()
    setDuration(clock.elapsedMs)
    recordObjectiveAttempt(profileId, {
      skill: 'reading',
      contentId: passage.id,
      module,
      kind: attemptKind(special, mode === 'exam'),
      startedAt,
      durationMs: clock.elapsedMs,
      marked,
      times,
    })
    setPhase('done')
    setTab('questions')
    document.getElementById('questions-pane')?.scrollTo({ top: 0 })
  }

  function submit() {
    const left = session.numbers.length - session.answered.size
    if (
      left > 0 &&
      !confirm(`${left} question${left === 1 ? ' is' : 's are'} unanswered. Submit anyway?`)
    )
      return
    finish()
  }

  function exit() {
    if (
      phase === 'running' &&
      session.answered.size > 0 &&
      !confirm('Leave this test? Your answers will be lost.')
    )
      return
    navigate(back)
  }

  const ctx = useMemo(
    () => ({
      answers: session.answers,
      setAnswer: session.setAnswer,
      marked: session.markedMap,
      onFocus: session.focus,
      flagged: session.flagged,
    }),
    [session.answers, session.setAnswer, session.markedMap, session.focus, session.flagged],
  )

  const types = [
    ...new Set(passage.groups.map((g) => QUESTION_TYPE_LABEL[groupTypeKey(g)] ?? g.type)),
  ]

  if (phase === 'intro')
    return (
      <ExamShell
        title={passage.title}
        subtitle={`Reading · ${MODULE_LABEL[module]}`}
        clock={null}
        onExit={exit}
      >
        <div className="h-full overflow-y-auto">
          <Card className="mx-auto my-6 grid max-w-xl gap-4">
            <h1 className="font-display text-2xl font-semibold">{passage.title}</h1>
            <p className="text-muted text-sm">
              {session.numbers.length} questions · suggested time {passage.minutes} minutes ·{' '}
              {passage.topic}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {types.map((t) => (
                <Pill key={t}>{t}</Pill>
              ))}
            </div>
            {!special && (
              <fieldset className="grid gap-2">
                <legend className="mb-1 text-sm font-semibold">Mode</legend>
                {(['practice', 'exam'] as const).map((m) => (
                  <label
                    key={m}
                    className={cx(
                      'flex cursor-pointer gap-3 rounded-2xl border p-3 text-sm',
                      mode === m ? 'border-primary bg-primary-soft' : 'border-line',
                    )}
                  >
                    <input
                      type="radio"
                      name="mode"
                      checked={mode === m}
                      onChange={() => setMode(m)}
                      className="accent-[var(--color-primary)]"
                    />
                    <span>
                      <strong>{m === 'practice' ? 'Practice' : 'Timed (exam conditions)'}</strong>
                      <span className="text-muted block">
                        {m === 'practice'
                          ? 'The clock counts up. Take your time and learn from the explanations.'
                          : `${passage.minutes} minutes, counting down. Your answers are marked when time runs out.`}
                      </span>
                    </span>
                  </label>
                ))}
              </fieldset>
            )}
            <p className="text-muted text-sm">
              Tip: select words in the text to <strong>highlight</strong> them or add a{' '}
              <strong>note</strong>, as you can in the computer-delivered test.
            </p>
            <Button
              size="lg"
              onClick={() => {
                setStartedAt(Date.now())
                setPhase('running')
              }}
            >
              Start
            </Button>
          </Card>
        </div>
      </ExamShell>
    )

  const done = phase === 'done'
  const showOnText = (q: MarkedQuestion) => {
    setFocusLoc({ ...q.location })
    setTab('text')
  }

  return (
    <QuestionContext.Provider value={ctx}>
      <ExamShell
        title={passage.title}
        subtitle={`Reading · ${MODULE_LABEL[module]}${mode === 'exam' ? ' · timed' : ''}`}
        clock={
          done
            ? null
            : clock.remainingMs !== null
              ? { ms: clock.remainingMs, countdown: true }
              : { ms: clock.elapsedMs, countdown: false }
        }
        onExit={exit}
        action={
          !done && (
            <Button size="sm" onClick={submit}>
              Submit
            </Button>
          )
        }
        footer={
          <QuestionNavigator
            numbers={session.numbers}
            answered={session.answered}
            flagged={session.flagged}
            marked={session.markedMap}
            current={session.current}
            onToggleFlag={session.toggleFlag}
            onJump={(n) => {
              setTab('questions')
              session.focus(n)
              setTimeout(() => jumpToQuestion(n), 30)
            }}
          />
        }
      >
        <div className="flex h-full flex-col">
          <div
            role="tablist"
            aria-label="View"
            className="bg-surface border-line flex border-b lg:hidden"
          >
            {(['text', 'questions'] as const).map((t) => (
              <button
                key={t}
                role="tab"
                type="button"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={cx(
                  'h-11 flex-1 text-sm font-semibold',
                  tab === t ? 'border-primary text-primary border-b-2' : 'text-muted',
                )}
              >
                {t === 'text'
                  ? 'Text'
                  : `Questions (${session.answered.size}/${session.numbers.length})`}
              </button>
            ))}
          </div>
          <div className="grid min-h-0 flex-1 lg:grid-cols-2">
            <div
              className={cx(
                'min-h-0 overflow-y-auto px-5 py-6',
                tab !== 'text' && 'hidden lg:block',
              )}
            >
              <div className="mx-auto max-w-2xl">
                <PassageView
                  passage={passage}
                  highlights={highlights}
                  onChange={setHighlights}
                  focus={focusLoc}
                />
              </div>
            </div>
            <div
              id="questions-pane"
              className={cx(
                'border-line min-h-0 overflow-y-auto border-l px-5 py-6',
                tab !== 'questions' && 'hidden lg:block',
              )}
            >
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8">
                {done && session.marked && (
                  <>
                    <ResultsSummary
                      backTo={back}
                      marked={session.marked}
                      skill="reading"
                      module={module}
                      durationMs={duration}
                      onRetry={onRetry}
                    />
                    <section aria-label="Explanations">
                      <h2 className="mb-3 text-lg font-semibold">Answers explained</h2>
                      <ol className="grid gap-3">
                        {session.marked.questions.map((q) => (
                          <AnswerExplanation key={q.n} q={q} onShow={showOnText} />
                        ))}
                      </ol>
                    </section>
                  </>
                )}
                {passage.groups.map((g, i) => (
                  <QuestionGroupView key={i} group={g} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {session.stuck !== null && !done && (
          <div className="fixed inset-x-0 bottom-20 z-40 flex justify-center px-4">
            <div
              role="status"
              className="bg-ink text-bg flex max-w-md items-center gap-3 rounded-2xl p-3 text-sm shadow-lg"
            >
              <Timer size={20} aria-hidden="true" className="shrink-0" />
              <span className="flex-1">
                Over 2 minutes on question {session.stuck}. Flag it, move on, and come back at the
                end.
              </span>
              <button
                type="button"
                className="font-semibold underline"
                onClick={() => {
                  if (!session.flagged.has(session.stuck!)) session.toggleFlag(session.stuck!)
                  session.dismissStuck()
                }}
              >
                Flag it
              </button>
              <button
                type="button"
                className="opacity-80"
                onClick={session.dismissStuck}
                aria-label="Dismiss"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </ExamShell>
    </QuestionContext.Provider>
  )
}
