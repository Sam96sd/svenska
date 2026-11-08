import { RotateCcw } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { buttonClass } from '../../../components/styles'
import { Button, Card } from '../../../components/ui'
import { hasPremiumKey, useAiConfig } from '../../ai/keys'
import { copyableWritingPrompt, type WritingTaskInput } from '../../ai/prompts'
import { type WritingFeedback } from '../../ai/schemas'
import { type WritingTask } from '../../content/schema'
import { wordCount } from '../../content/validate'
import { WRITING_CRITERIA, WRITING_TASK1_CRITERIA, WRITING_TASK2_CRITERIA } from '../../criteria'
import { wordDiff } from '../../engine/diff'
import { formatClock } from '../../engine/timers'
import { WRITING } from '../../examSpec'
import { criteriaBand, formatBand } from '../../scoring'
import { BandBadge, Notice, Pill } from '../../components/ui'
import { useIelts } from '../../storage/hooks'
import { applySelfAssessment } from '../../storage/record'
import { type Attempt } from '../../storage/schema'
import {
  CopyPromptButton,
  CriteriaBands,
  FeedbackMeta,
  GradingError,
  GradingProgress,
  ProButton,
  SelfAssessment,
  Tabs,
} from '../shared/AiWidgets'
import { type useGrader } from '../shared/useGrader'
import { ModelAnswers } from './ModelAnswers'

type Tab = 'feedback' | 'rewrite' | 'errors' | 'models' | 'self'

export function WritingFeedbackView({
  task,
  input,
  attempt,
  grader,
  onGrade,
  onRetry,
  backTo = '/ielts/practice',
}: {
  task: WritingTask
  input: WritingTaskInput
  attempt: Attempt
  grader: ReturnType<typeof useGrader<WritingFeedback>>
  onGrade: (tier: 'standard' | 'pro') => void
  onRetry: () => void
  backTo?: string
}) {
  const { profileId } = useIelts()
  const ai = useAiConfig(profileId)
  const state = grader.state
  const fb = state.status === 'done' ? state.result : null
  const [tab, setTab] = useState<Tab>('feedback')
  const [self, setSelf] = useState<Record<string, boolean>>({})
  const text = attempt.text ?? ''
  const words = wordCount(text)
  const minWords = task.task === 1 ? WRITING.task1.minWords : WRITING.task2.minWords
  const ids = task.task === 1 ? WRITING_TASK1_CRITERIA : WRITING_TASK2_CRITERIA
  const meta = { words, minutes: Math.round(attempt.durationMs / 60000) }
  const offline = !fb && state.status !== 'working'

  const tabs: Array<{ value: Tab; label: string }> = fb
    ? [
        { value: 'feedback', label: 'Feedback' },
        { value: 'rewrite', label: 'Band 8–9 version' },
        { value: 'errors', label: `Errors (${fb.data.errors.length})` },
        { value: 'models', label: 'Model answers' },
        { value: 'self', label: 'Self-check' },
      ]
    : [
        { value: 'self', label: 'Self-check' },
        { value: 'models', label: 'Model answers' },
      ]
  const current: Tab = tabs.some((t) => t.value === tab) ? tab : tabs[0]!.value

  return (
    <div className="grid gap-5">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-semibold">Your feedback</h1>
          <p className="text-muted text-sm">
            {words} words · {formatClock(attempt.durationMs)} used
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {fb && hasPremiumKey(ai) && fb.tier !== 'pro' && (
            <ProButton onClick={() => onGrade('pro')} />
          )}
          <CopyPromptButton text={copyableWritingPrompt(input, text, meta)} />
          <Button variant="ghost" onClick={onRetry}>
            <RotateCcw size={18} /> Write again
          </Button>
        </div>
      </header>

      {words < minWords && (
        <Notice tone="warn">
          Your answer has {words} words; the minimum is {minWords}. Short answers lose marks in Task{' '}
          {task.task === 1 ? 'Achievement' : 'Response'}.
        </Notice>
      )}

      <GradingProgress state={state} onCancel={grader.cancel} />
      {state.status === 'error' && (
        <GradingError
          message={state.message}
          retryable={state.retryable}
          onRetry={() => onGrade('standard')}
        />
      )}

      {fb && (
        <Card className="grid gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <BandBadge band={formatBand(fb.data.overallBand)} label={`Task ${task.task}`} />
            <p className="min-w-0 flex-1">{fb.data.summary}</p>
          </div>
          <FeedbackMeta fb={fb} />
        </Card>
      )}

      {offline && (
        <Notice>
          {state.status === 'error'
            ? 'AI feedback isn’t available right now. Use the self-check and model answers below, or copy the grading prompt into any chatbot.'
            : 'Offline feedback: tick what’s true for your answer, compare with the model answers, or copy the grading prompt into any chatbot.'}
        </Notice>
      )}

      <Tabs label="Feedback sections" value={current} onChange={setTab} tabs={tabs} />

      {current === 'feedback' && fb && <FeedbackTab fb={fb.data} />}
      {current === 'rewrite' && fb && <RewriteTab original={text} rewrite={fb.data.rewrite} />}
      {current === 'errors' && fb && <ErrorsTab fb={fb.data} />}
      {current === 'models' && <ModelAnswers task={task} />}
      {current === 'self' && (
        <div className="grid gap-4">
          <SelfAssessment
            criteria={ids.map((id) => WRITING_CRITERIA[id])}
            value={self}
            onChange={setSelf}
          />
          <Button
            className="justify-self-start"
            onClick={() => {
              const bands = Object.fromEntries(
                ids.map((id) => {
                  const list = WRITING_CRITERIA[id].checklist
                  const ratio = list.filter((_, i) => self[`${id}:${i}`]).length / list.length
                  return [id, ratio >= 0.9 ? 8 : ratio >= 0.7 ? 7 : ratio >= 0.45 ? 6 : 5]
                }),
              )
              applySelfAssessment(profileId, attempt, bands, criteriaBand(Object.values(bands)))
              alert('Saved your self-assessment to your progress.')
            }}
          >
            Save my self-assessment
          </Button>
        </div>
      )}

      <Link to={backTo} className={buttonClass('secondary', 'md') + ' justify-self-start'}>
        {backTo === '/ielts/practice' ? 'Back to practice' : 'Continue'}
      </Link>
    </div>
  )
}

function FeedbackTab({ fb }: { fb: WritingFeedback }) {
  const patterns = useMemo(() => {
    const counts = new Map<string, number>()
    for (const e of fb.errors) counts.set(e.type, (counts.get(e.type) ?? 0) + 1)
    return [...counts].sort((a, b) => b[1] - a[1])
  }, [fb.errors])
  return (
    <div className="grid gap-5">
      <CriteriaBands items={fb.criteria} criteria={WRITING_CRITERIA} />

      <section>
        <h2 className="mb-2 text-lg font-semibold">Top 3 changes for +0.5</h2>
        <ol className="grid gap-2">
          {fb.topChanges.map((c, i) => (
            <li key={i} className="border-line flex gap-3 rounded-2xl border p-4">
              <span className="bg-primary text-on-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold">{c.change}</p>
                {c.why && <p className="text-muted text-sm">{c.why}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {fb.taskChecks.length > 0 && (
        <section>
          <h2 className="mb-2 text-lg font-semibold">Task checks</h2>
          <ul className="grid gap-2">
            {fb.taskChecks.map((c, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <Pill tone={c.passed ? 'success' : 'danger'}>{c.passed ? 'Yes' : 'No'}</Pill>
                <span>
                  <strong>{c.check}.</strong> {c.comment}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(patterns.length > 0 || fb.memorisedPhrases.length > 0 || fb.offTopic) && (
        <section>
          <h2 className="mb-2 text-lg font-semibold">Your error patterns</h2>
          <div className="flex flex-wrap gap-2">
            {patterns.map(([type, n]) => (
              <Pill key={type} tone="accent">
                {n}× {type}
              </Pill>
            ))}
          </div>
          <p className="text-muted mt-2 text-sm">These have been added to your error log.</p>
          {fb.memorisedPhrases.length > 0 && (
            <Notice tone="warn" className="mt-3">
              Memorised phrases examiners penalise:{' '}
              {fb.memorisedPhrases.map((p) => `“${p}”`).join(', ')}
            </Notice>
          )}
          {fb.offTopic && (
            <Notice tone="error" className="mt-3">
              Parts of this answer are off-topic.
            </Notice>
          )}
        </section>
      )}

      <section>
        <h2 className="mb-2 text-lg font-semibold">Vocabulary</h2>
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          {fb.vocabulary.overused.length > 0 && (
            <p>
              <strong>Overused:</strong> {fb.vocabulary.overused.join(', ')}
            </p>
          )}
          {fb.vocabulary.underused.length > 0 && (
            <p>
              <strong>Try instead:</strong> {fb.vocabulary.underused.join(', ')}
            </p>
          )}
        </div>
        {fb.vocabulary.collocations.length > 0 && (
          <ul className="mt-2 grid gap-1 text-sm">
            {fb.vocabulary.collocations.map((c, i) => (
              <li key={i}>
                <span className="text-danger line-through">{c.original}</span> →{' '}
                <strong className="text-success">{c.better}</strong>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

function RewriteTab({ original, rewrite }: { original: string; rewrite: string }) {
  const diff = useMemo(() => wordDiff(original, rewrite), [original, rewrite])
  return (
    <div className="grid gap-3">
      <p className="text-muted text-sm">
        Your ideas, upgraded. Changed words are highlighted on both sides.
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        <section aria-label="Your answer" className="border-line rounded-2xl border p-4">
          <h2 className="mb-2 font-semibold">Your answer</h2>
          <p className="text-[15px] leading-7 whitespace-pre-wrap">
            {diff.before.map((p, i) =>
              p.changed ? (
                <del key={i} className="bg-danger-soft decoration-danger/60 rounded-sm">
                  {p.text}
                </del>
              ) : (
                <span key={i}>{p.text}</span>
              ),
            )}
          </p>
        </section>
        <section aria-label="Band 8 to 9 version" className="border-line rounded-2xl border p-4">
          <h2 className="mb-2 font-semibold">Band 8–9 version</h2>
          <p className="text-[15px] leading-7 whitespace-pre-wrap">
            {diff.after.map((p, i) =>
              p.changed ? (
                <ins key={i} className="bg-success-soft rounded-sm no-underline">
                  {p.text}
                </ins>
              ) : (
                <span key={i}>{p.text}</span>
              ),
            )}
          </p>
        </section>
      </div>
    </div>
  )
}

function ErrorsTab({ fb }: { fb: WritingFeedback }) {
  if (fb.errors.length === 0) return <p>No sentence-level errors found. 🎉</p>
  return (
    <ol className="grid gap-2">
      {fb.errors.map((e, i) => (
        <li key={i} className="border-line grid gap-1 rounded-2xl border p-4 text-sm">
          <div className="flex flex-wrap items-center gap-2">
            <Pill tone="accent">{e.type}</Pill>
          </div>
          <p>
            <span className="text-danger line-through">{e.original}</span> →{' '}
            <strong className="text-success">{e.correction}</strong>
          </p>
          {e.explanation && <p className="text-muted">{e.explanation}</p>}
        </li>
      ))}
    </ol>
  )
}
