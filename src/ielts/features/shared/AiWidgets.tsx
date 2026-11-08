import { Check, ClipboardCopy, Loader2, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { cx } from '../../../components/styles'
import { Button } from '../../../components/ui'
import { type StoredFeedback } from '../../ai/grade'
import { PRIVACY_NOTICE } from '../../ai/keys'
import { type Criterion, type CriterionId } from '../../criteria'
import { formatBand } from '../../scoring'
import { BandBadge, Notice } from '../../components/ui'
import { type GradeState } from './useGrader'

/** "Grading…" with a countdown while waiting out a rate limit. */
export function GradingProgress<T>({
  state,
  onCancel,
}: {
  state: GradeState<T>
  onCancel: () => void
}) {
  const [now, setNow] = useState(() => Date.now())
  const waiting = state.status === 'working' && state.waitUntil
  useEffect(() => {
    if (!waiting) return
    const id = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(id)
  }, [waiting])
  if (state.status !== 'working') return null
  const secs = state.waitUntil ? Math.max(0, Math.ceil((state.waitUntil - now) / 1000)) : 0
  return (
    <div
      role="status"
      aria-live="polite"
      className="bg-surface border-line rounded-card grid gap-3 border p-5"
    >
      <p className="flex items-center gap-2 font-semibold">
        <Loader2 size={20} className="text-primary animate-spin" aria-hidden="true" />
        {state.tier === 'pro' ? 'Pro examiner is grading…' : 'The examiner is grading your answer…'}
      </p>
      {state.waitUntil ? (
        <p className="text-muted text-sm">
          {state.message} Retrying in <strong className="text-ink tabular-nums">{secs}s</strong>.
        </p>
      ) : (
        <p className="text-muted text-sm">This usually takes 15–60 seconds.</p>
      )}
      <Button variant="ghost" size="sm" className="justify-self-start" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  )
}

export function GradingError({
  message,
  retryable,
  onRetry,
}: {
  message: string
  retryable: boolean
  onRetry: () => void
}) {
  return (
    <Notice tone="error">
      <p>{message}</p>
      <div className="mt-2 flex flex-wrap gap-3">
        {retryable && (
          <button type="button" className="text-primary font-semibold underline" onClick={onRetry}>
            Try again
          </button>
        )}
        <Link to="/ielts/settings#ai" className="text-primary font-semibold underline">
          AI settings
        </Link>
      </div>
    </Notice>
  )
}

/** Band per criterion with evidence quotes and the examiner's comment. */
export function CriteriaBands({
  items,
  criteria,
}: {
  items: Array<{ id: string; band: number; evidence: string[]; comment: string }>
  criteria: Record<string, Criterion>
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((c) => {
        const info = criteria[c.id as CriterionId]
        return (
          <li key={c.id} className="border-line grid gap-2 rounded-2xl border p-4">
            <div className="flex items-center gap-3">
              <BandBadge band={formatBand(c.band)} />
              <p className="font-semibold">{info?.name ?? c.id}</p>
            </div>
            {c.comment && <p className="text-sm">{c.comment}</p>}
            {c.evidence.length > 0 && (
              <ul className="text-muted grid gap-1 text-sm italic">
                {c.evidence.map((e, i) => (
                  <li key={i}>“{e}”</li>
                ))}
              </ul>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export function FeedbackMeta<T>({ fb }: { fb: StoredFeedback<T> }) {
  const tokens = fb.usage.promptTokens + fb.usage.outputTokens + fb.usage.thoughtsTokens
  return (
    <p className="text-muted text-xs">
      Graded by <span className="font-mono">{fb.model}</span>
      {fb.tier === 'pro' ? ' (Pro)' : ''} · ≈{tokens.toLocaleString()} tokens
      {fb.costUsd > 0 ? ` · ≈$${fb.costUsd.toFixed(3)}` : ' · free tier'}
      {fb.fromCache ? ' · saved result (not graded again)' : ''}. AI estimates can differ from a
      real examiner. {fb.tier === 'standard' && PRIVACY_NOTICE}
    </p>
  )
}

export function CopyPromptButton({
  text,
  label = 'Copy grading prompt',
}: {
  text: string
  label?: string
}) {
  const [copied, setCopied] = useState(false)
  return (
    <Button
      variant="secondary"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          setCopied(true)
          setTimeout(() => setCopied(false), 2500)
        } catch {
          prompt('Copy this prompt:', text)
        }
      }}
    >
      {copied ? <Check size={18} /> : <ClipboardCopy size={18} />} {copied ? 'Copied' : label}
    </Button>
  )
}

/** Offline self-assessment: tick what's true; a rough band estimate per criterion. */
export function SelfAssessment({
  criteria,
  value,
  onChange,
}: {
  criteria: Criterion[]
  value: Record<string, boolean>
  onChange: (next: Record<string, boolean>) => void
}) {
  return (
    <div className="grid gap-4">
      {criteria.map((c) => {
        const ticked = c.checklist.filter((_, i) => value[`${c.id}:${i}`]).length
        const ratio = c.checklist.length ? ticked / c.checklist.length : 0
        const est = ratio >= 0.9 ? 8 : ratio >= 0.7 ? 7 : ratio >= 0.45 ? 6 : 5
        return (
          <fieldset key={c.id} className="border-line rounded-2xl border p-4">
            <legend className="px-1 font-semibold">
              {c.name}{' '}
              <span className="text-muted text-sm font-normal">· rough estimate: Band {est}</span>
            </legend>
            <div className="mt-2 grid gap-2">
              {c.checklist.map((item, i) => {
                const key = `${c.id}:${i}`
                return (
                  <label key={key} className="flex cursor-pointer items-start gap-3 text-sm">
                    <input
                      type="checkbox"
                      className="mt-0.5 accent-[var(--color-primary)]"
                      checked={!!value[key]}
                      onChange={(e) => onChange({ ...value, [key]: e.target.checked })}
                    />
                    <span>{item}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>
        )
      })}
    </div>
  )
}

export function ProButton({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  return (
    <Button variant="secondary" onClick={onClick} disabled={disabled}>
      <Sparkles size={18} /> Second opinion (Pro)
    </Button>
  )
}

export function Tabs<T extends string>({
  value,
  onChange,
  tabs,
  label,
}: {
  value: T
  onChange: (v: T) => void
  tabs: Array<{ value: T; label: string }>
  label: string
}) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="border-line flex gap-1 overflow-x-auto overflow-y-hidden border-b"
    >
      {tabs.map((t) => (
        <button
          key={t.value}
          type="button"
          role="tab"
          aria-selected={value === t.value}
          onClick={() => onChange(t.value)}
          className={cx(
            '-mb-px h-11 shrink-0 border-b-2 px-3 text-sm font-semibold',
            value === t.value
              ? 'border-primary text-primary'
              : 'text-muted hover:text-ink border-transparent',
          )}
        >
          {t.label}
        </button>
      ))}
    </div>
  )
}
