import { ChevronDown, ChevronUp, PenLine } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router'
import { PageSpinner } from '../../../app/PageSpinner'
import { cx } from '../../../components/styles'
import { Button, Card } from '../../../components/ui'
import { gradeWriting } from '../../ai/grade'
import { hasFreeKey, useAiConfig } from '../../ai/keys'
import { type WritingFeedback } from '../../ai/schemas'
import { loadWritingTask } from '../../content/index'
import { type WritingTask } from '../../content/schema'
import { wordCount } from '../../content/validate'
import { ExamShell } from '../../engine/ExamShell'
import { useExamClock } from '../../engine/timers'
import { WRITING } from '../../examSpec'
import { Notice, Pill } from '../../components/ui'
import { useIelts } from '../../storage/hooks'
import { applyFeedback, startProductiveAttempt } from '../../storage/record'
import { type Attempt } from '../../storage/schema'
import { TaskPrompt } from './TaskPrompt'
import { WritingFeedbackView } from './WritingFeedbackView'
import { useGrader } from '../shared/useGrader'
import { taskInput } from './taskInput'

type Phase = 'intro' | 'plan' | 'write' | 'feedback'

export default function WritingTaskPage() {
  const { id = '' } = useParams()
  const [search] = useSearchParams()
  const [task, setTask] = useState<WritingTask | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [run, setRun] = useState(0)
  useEffect(() => {
    let alive = true
    loadWritingTask(id).then(
      (t) => alive && setTask(t),
      (e: unknown) =>
        alive && setError(e instanceof Error ? e.message : 'Could not load this task.'),
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
  if (!task) return <PageSpinner />
  return (
    <WritingRun
      key={run}
      task={task}
      timed={search.get('mode') === 'exam'}
      onRetry={() => setRun((r) => r + 1)}
    />
  )
}

function draftKey(profileId: string, taskId: string) {
  return `ielts:draft:${profileId}:${taskId}`
}

function readDraft(key: string): { plan: string; text: string } {
  try {
    const raw = localStorage.getItem(key)
    if (raw) return JSON.parse(raw) as { plan: string; text: string }
  } catch {
    // No draft.
  }
  return { plan: '', text: '' }
}

function WritingRun({
  task,
  timed: initialTimed,
  onRetry,
}: {
  task: WritingTask
  timed: boolean
  onRetry: () => void
}) {
  const navigate = useNavigate()
  const { profileId, ielts } = useIelts()
  const ai = useAiConfig(profileId)
  const module = task.module === 'both' ? (ielts.settings.module ?? 'academic') : task.module
  const key = draftKey(profileId, task.id)
  const [draft] = useState(() => readDraft(key))
  const [plan, setPlan] = useState(draft.plan)
  const [text, setText] = useState(draft.text)
  const [phase, setPhase] = useState<Phase>('intro')
  const [timed, setTimed] = useState(initialTimed)
  const [startedAt, setStartedAt] = useState(0)
  const [showPrompt, setShowPrompt] = useState(true)
  const [attempt, setAttempt] = useState<Attempt | null>(null)
  const grader = useGrader<WritingFeedback>(profileId)
  const minutes = task.task === 1 ? WRITING.task1.suggestedMinutes : WRITING.task2.suggestedMinutes
  const minWords = task.task === 1 ? WRITING.task1.minWords : WRITING.task2.minWords
  const clock = useExamClock(timed ? minutes * 60 : null, {
    running: phase === 'plan' || phase === 'write',
    onExpire: () => submit(true),
  })

  useEffect(() => {
    if (phase === 'feedback') return
    try {
      if (plan || text) localStorage.setItem(key, JSON.stringify({ plan, text }))
    } catch {
      // Storage full or blocked: the draft just isn't kept.
    }
  }, [key, plan, text, phase])

  const words = wordCount(text)
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim()).length
  const input = useMemo(() => taskInput(task, module), [task, module])

  async function grade(a: Attempt, tier: 'standard' | 'pro') {
    const result = await grader.grade(tier, (ctx) =>
      gradeWriting(ctx, input, a.text ?? '', {
        words: wordCount(a.text ?? ''),
        minutes: Math.round(a.durationMs / 60000),
      }),
    )
    if (result)
      setAttempt(applyFeedback(profileId, a, result.data, { key: result.key, model: result.model }))
  }

  function submit(auto = false) {
    if (phase !== 'write' && phase !== 'plan') return
    if (
      !auto &&
      words < minWords &&
      !confirm(`You have ${words} words; the minimum is ${minWords}. Submit anyway?`)
    )
      return
    const a = startProductiveAttempt(profileId, {
      skill: 'writing',
      contentId: task.id,
      module,
      kind: timed ? 'exam' : 'practice',
      task: task.task,
      text,
      startedAt,
      durationMs: clock.elapsedMs,
    })
    setAttempt(a)
    setPhase('feedback')
    try {
      localStorage.removeItem(key)
    } catch {
      // Ignore.
    }
    if (hasFreeKey(ai) && text.trim()) void grade(a, 'standard')
  }

  function exit() {
    if (
      (phase === 'plan' || phase === 'write') &&
      text.trim() &&
      !confirm('Leave? Your draft is saved on this device.')
    )
      return
    navigate('/ielts/practice')
  }

  const title = `Writing Task ${task.task} · ${task.title}`

  if (phase === 'intro')
    return (
      <ExamShell title={title} clock={null} onExit={exit}>
        <div className="h-full overflow-y-auto px-4">
          <Card className="mx-auto my-6 grid max-w-2xl gap-4">
            <h1 className="font-display text-2xl font-semibold">{task.title}</h1>
            <TaskPrompt task={task} />
            {draft.text && (
              <Notice>Your saved draft ({wordCount(draft.text)} words) will be restored.</Notice>
            )}
            {!hasFreeKey(ai) && (
              <Notice tone="warn">
                No Gemini key yet, so you’ll get offline feedback: a self-assessment checklist,
                model answers and a grading prompt to paste into any chatbot.
              </Notice>
            )}
            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={timed}
                onChange={(e) => setTimed(e.target.checked)}
                className="accent-[var(--color-primary)]"
              />
              Timed: {minutes} minutes, counting down (submits automatically)
            </label>
            <Button
              size="lg"
              onClick={() => {
                setStartedAt(Date.now())
                setPhase('plan')
              }}
            >
              Start planning
            </Button>
          </Card>
        </div>
      </ExamShell>
    )

  if (phase === 'feedback' && attempt)
    return (
      <ExamShell title={title} clock={null} onExit={() => navigate('/ielts/practice')}>
        <div className="h-full overflow-y-auto px-4 py-6">
          <div className="mx-auto max-w-5xl">
            <WritingFeedbackView
              task={task}
              input={input}
              attempt={attempt}
              grader={grader}
              onGrade={(tier) => void grade(attempt, tier)}
              onRetry={onRetry}
            />
          </div>
        </div>
      </ExamShell>
    )

  const target = task.task === 2 ? WRITING.task2.targetWords : null
  const wordTone =
    words < minWords
      ? 'text-danger'
      : target && words > target[1] + 40
        ? 'text-accent-ink'
        : 'text-success'

  return (
    <ExamShell
      title={title}
      clock={
        clock.remainingMs !== null
          ? { ms: clock.remainingMs, countdown: true }
          : { ms: clock.elapsedMs, countdown: false }
      }
      onExit={exit}
      action={
        phase === 'plan' ? (
          <Button size="sm" onClick={() => setPhase('write')}>
            <PenLine size={16} /> Start writing
          </Button>
        ) : (
          <Button size="sm" onClick={() => submit()}>
            Submit
          </Button>
        )
      }
    >
      <div className="grid h-full min-h-0 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <aside className="border-line min-h-0 overflow-y-auto border-b px-5 py-4 lg:border-r lg:border-b-0">
          <button
            type="button"
            className="flex w-full items-center justify-between font-semibold lg:hidden"
            aria-expanded={showPrompt}
            onClick={() => setShowPrompt((v) => !v)}
          >
            The task {showPrompt ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          <div className={cx('mt-3 grid gap-4 lg:mt-0', !showPrompt && 'hidden lg:grid')}>
            <TaskPrompt task={task} />
            {phase === 'write' && plan.trim() && (
              <div className="bg-surface-2 rounded-2xl p-3 text-sm">
                <p className="mb-1 font-semibold">Your plan</p>
                <p className="whitespace-pre-wrap">{plan}</p>
              </div>
            )}
          </div>
        </aside>
        <section className="flex min-h-0 flex-col px-5 py-4">
          {phase === 'plan' ? (
            <div className="grid min-h-0 flex-1 content-start gap-4 overflow-y-auto">
              <div>
                <h2 className="font-semibold">
                  Plan first (about {task.task === 2 ? 5 : 3} minutes)
                </h2>
                <ul className="text-muted mt-2 grid list-disc gap-1 pl-5 text-sm">
                  {task.planHints.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
              <label className="grid gap-1">
                <span className="text-sm font-semibold">Plan notes</span>
                <textarea
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  rows={10}
                  placeholder={
                    task.task === 2
                      ? 'Position:\nBody 1:\nBody 2:\nExample:'
                      : 'Overview / bullet points:'
                  }
                  className="border-line bg-bg focus:border-primary rounded-2xl border p-3 text-[15px] outline-none"
                />
              </label>
            </div>
          ) : (
            <>
              <label htmlFor="essay" className="sr-only">
                Your answer
              </label>
              <textarea
                id="essay"
                autoFocus
                spellCheck={false}
                autoCorrect="off"
                autoCapitalize="sentences"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border-line bg-bg focus:border-primary min-h-64 flex-1 resize-none rounded-2xl border p-4 text-[16px] leading-7 outline-none"
                placeholder="Write your answer here. Leave a blank line between paragraphs."
              />
              <div
                className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm"
                aria-live="polite"
              >
                <span className={cx('font-semibold tabular-nums', wordTone)}>{words} words</span>
                <span className="text-muted">
                  minimum {minWords}
                  {target ? ` · aim for ${target[0]}–${target[1]}` : ''}
                </span>
                <span className="text-muted">{paragraphs} paragraphs</span>
                <Pill>Spellcheck off, as in the exam</Pill>
              </div>
            </>
          )}
        </section>
      </div>
    </ExamShell>
  )
}
