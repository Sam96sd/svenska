import { Eye, RotateCcw } from 'lucide-react'
import { Link } from 'react-router'
import { buttonClass } from '../../components/styles'
import { Button } from '../../components/ui'
import { QUESTION_TYPE_LABEL } from '../content/schema'
import { type IeltsModule } from '../examSpec'
import { formatBand, RAW_TABLE_NOTE, scaledBand } from '../scoring'
import { BandBadge, Pill } from '../components/ui'
import { REASON_LABEL } from './answerCheck'
import { type Marked, type MarkedQuestion } from './marking'
import { formatClock } from './timers'

export function ResultsSummary({
  marked,
  skill,
  module,
  durationMs,
  onRetry,
}: {
  marked: Marked
  skill: 'reading' | 'listening'
  module: IeltsModule
  durationMs: number
  onRetry: () => void
}) {
  const band = scaledBand(marked.correct, marked.total, skill, module)
  const byType = new Map<string, { right: number; total: number }>()
  for (const q of marked.questions) {
    const t = byType.get(q.type) ?? { right: 0, total: 0 }
    t.total++
    if (q.correct) t.right++
    byType.set(q.type, t)
  }
  return (
    <section
      aria-labelledby="results-heading"
      className="bg-surface border-line rounded-card grid gap-4 border p-5"
    >
      <div className="flex flex-wrap items-center gap-4">
        <BandBadge band={formatBand(band)} label="est." />
        <div className="flex-1">
          <h2 id="results-heading" className="font-display text-2xl font-semibold" role="status">
            {marked.correct} / {marked.total} correct
          </h2>
          <p className="text-muted text-sm">
            Time: {formatClock(durationMs)} · Band estimate scaled to 40 questions. {RAW_TABLE_NOTE}
          </p>
        </div>
      </div>
      <ul className="grid gap-1.5 text-sm">
        {[...byType].map(([type, t]) => (
          <li key={type} className="flex justify-between gap-3">
            <span>{QUESTION_TYPE_LABEL[type] ?? type}</span>
            <span className="font-semibold tabular-nums">
              {t.right}/{t.total}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" onClick={onRetry}>
          <RotateCcw size={18} /> Try again
        </Button>
        <Link to="/ielts/practice" className={buttonClass('primary', 'md')}>
          Back to practice
        </Link>
      </div>
    </section>
  )
}

/** One explained answer, shown after marking. */
export function AnswerExplanation({
  q,
  onShow,
  showLabel = 'Show in text',
}: {
  q: MarkedQuestion
  onShow: (q: MarkedQuestion) => void
  showLabel?: string
}) {
  return (
    <li className="border-line grid gap-1.5 rounded-2xl border p-4 text-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className="bg-surface-2 inline-flex h-7 min-w-7 items-center justify-center rounded-lg px-1.5 font-bold">
          {q.n}
        </span>
        <Pill tone={q.correct ? 'success' : 'danger'}>{q.correct ? 'Correct' : 'Wrong'}</Pill>
        {q.reason && <Pill tone="accent">{REASON_LABEL[q.reason]}</Pill>}
        <span className="text-muted">{QUESTION_TYPE_LABEL[q.type] ?? q.type}</span>
      </div>
      <p>
        <span className="text-muted">Your answer:</span> <strong>{q.given || '—'}</strong>
        {!q.correct && (
          <>
            {' '}
            · <span className="text-muted">Answer:</span> <strong>{q.expected}</strong>
          </>
        )}
      </p>
      <p>{q.explanation}</p>
      {q.trapNote && (
        <p className="text-accent-ink">
          <strong>Why your choice is tempting:</strong> {q.trapNote}
        </p>
      )}
      <button
        type="button"
        onClick={() => onShow(q)}
        className="text-primary flex items-center gap-1 justify-self-start font-semibold"
      >
        <Eye size={15} aria-hidden="true" /> {showLabel}
      </button>
    </li>
  )
}
