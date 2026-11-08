import { Check, X } from 'lucide-react'
import { type ReactNode } from 'react'
import { cx } from '../../../components/styles'
import { markTone, useQ } from './qutils'

/** The bold question number, as on the computer-delivered test. */
export function QNum({ n, className }: { n: number; className?: string }) {
  const { flagged } = useQ()
  return (
    <span
      className={cx(
        'inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-lg px-1.5 text-sm font-bold tabular-nums',
        flagged.has(n) ? 'bg-accent text-on-accent' : 'bg-surface-2 text-ink',
        className,
      )}
    >
      {n}
    </span>
  )
}

/** ✓ / ✗ with the right answer, shown after marking. */
export function Verdict({ n }: { n: number }) {
  const { marked } = useQ()
  const m = marked?.get(n)
  if (!m) return null
  return m.correct ? (
    <span className="text-success inline-flex items-center gap-1 text-sm font-semibold">
      <Check size={16} aria-hidden="true" /> <span className="sr-only">Correct</span>
    </span>
  ) : (
    <span className="text-danger inline-flex items-center gap-1 text-sm font-semibold">
      <X size={16} aria-hidden="true" />
      <span className="sr-only">Wrong.</span> Answer: {m.expected}
    </span>
  )
}

/** A typed gap inside a sentence, note, table or form. */
export function GapInput({ n, wide = false }: { n: number; wide?: boolean }) {
  const { answers, setAnswer, marked, onFocus } = useQ()
  const m = marked?.get(n)
  return (
    <span
      id={`q-${n}`}
      className="inline-flex max-w-full scroll-mt-28 flex-wrap items-center gap-1 align-middle"
    >
      <QNum n={n} />
      <input
        type="text"
        aria-label={`Question ${n}`}
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        readOnly={!!marked}
        value={answers[n] ?? ''}
        onFocus={() => onFocus(n)}
        onChange={(e) => setAnswer(n, e.target.value)}
        className={cx(
          'bg-bg h-9 min-w-0 rounded-lg border px-2 text-[15px] outline-none',
          wide ? 'w-56 max-w-full' : 'w-36 max-w-full',
          markTone(m),
        )}
      />
      {m && !m.correct && <span className="text-danger text-sm font-semibold">→ {m.expected}</span>}
    </span>
  )
}

/** A dropdown of option keys (headings, matching, word bank). */
export function OptionSelect({
  n,
  options,
  label,
}: {
  n: number
  options: Array<{ key: string; text: string }>
  label: string
}) {
  const { answers, setAnswer, marked, onFocus } = useQ()
  const m = marked?.get(n)
  return (
    <select
      aria-label={label}
      disabled={!!marked}
      value={answers[n] ?? ''}
      onFocus={() => onFocus(n)}
      onChange={(e) => setAnswer(n, e.target.value)}
      className={cx(
        'bg-bg h-10 max-w-full min-w-0 rounded-lg border px-2 text-[15px] outline-none disabled:opacity-100',
        markTone(m),
      )}
    >
      <option value="">Choose…</option>
      {options.map((o) => (
        <option key={o.key} value={o.key}>
          {o.key} {o.text.length > 60 ? `${o.text.slice(0, 57)}…` : o.text}
        </option>
      ))}
    </select>
  )
}

export function GroupShell({
  range,
  instructions,
  children,
}: {
  range: string
  instructions: ReactNode
  children: ReactNode
}) {
  return (
    <section className="grid grid-cols-1 gap-4" aria-label={`Questions ${range}`}>
      <header>
        <h3 className="font-semibold">Questions {range}</h3>
        <div className="text-muted mt-1 text-sm">{instructions}</div>
      </header>
      {children}
    </section>
  )
}
