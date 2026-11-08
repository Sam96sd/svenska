import { Flag, X } from 'lucide-react'
import { type ReactNode } from 'react'
import { cx } from '../../components/styles'
import { Button } from '../../components/ui'
import { formatClock } from './timers'
import { type MarkedQuestion } from './marking'

/**
 * Full-screen frame that mimics the computer-delivered test: title and clock on top, the
 * question navigator along the bottom.
 */
export function ExamShell({
  title,
  subtitle,
  clock,
  warnBelowMs = 5 * 60_000,
  onExit,
  action,
  children,
  footer,
}: {
  title: string
  subtitle?: string
  /** Remaining (countdown) or elapsed ms; null hides the clock. */
  clock: { ms: number; countdown: boolean } | null
  warnBelowMs?: number
  onExit: () => void
  action?: ReactNode
  children: ReactNode
  footer?: ReactNode
}) {
  const warn = clock?.countdown && clock.ms <= warnBelowMs
  return (
    <div className="bg-bg flex h-dvh flex-col">
      <header className="bg-surface border-line flex h-14 shrink-0 items-center gap-2 border-b px-2 sm:px-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onExit}
          aria-label="Leave"
          className="h-10 w-10 px-0"
        >
          <X size={20} />
        </Button>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{title}</p>
          {subtitle && <p className="text-muted truncate text-xs">{subtitle}</p>}
        </div>
        {clock && (
          <div
            role="timer"
            aria-live={warn ? 'polite' : 'off'}
            aria-label={
              clock.countdown
                ? `${formatClock(clock.ms)} remaining`
                : `${formatClock(clock.ms)} elapsed`
            }
            className={cx(
              'rounded-xl px-3 py-1.5 font-mono text-sm font-semibold tabular-nums',
              warn ? 'bg-danger-soft text-danger' : 'bg-surface-2',
            )}
          >
            {formatClock(clock.ms)}
            {clock.countdown && <span className="sr-only"> left</span>}
          </div>
        )}
        {action}
      </header>
      <div className="min-h-0 flex-1">{children}</div>
      {footer}
    </div>
  )
}

/** Numbered buttons for every question: answered, flagged, current, and (after marking) right/wrong. */
export function QuestionNavigator({
  numbers,
  answered,
  flagged,
  marked,
  current,
  onJump,
  onToggleFlag,
}: {
  numbers: number[]
  answered: Set<number>
  flagged: Set<number>
  marked: Map<number, MarkedQuestion> | null
  current: number | null
  onJump: (n: number) => void
  onToggleFlag?: (n: number) => void
}) {
  const answeredCount = numbers.filter((n) => answered.has(n)).length
  return (
    <nav
      aria-label="Questions"
      className="bg-surface border-line shrink-0 border-t px-2 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2">
        <div className="flex min-w-0 flex-1 gap-1 overflow-x-auto pb-1">
          {numbers.map((n) => {
            const m = marked?.get(n)
            const isAnswered = answered.has(n)
            return (
              <button
                key={n}
                type="button"
                onClick={() => onJump(n)}
                aria-label={`Question ${n}${isAnswered ? ', answered' : ''}${flagged.has(n) ? ', flagged' : ''}${m ? (m.correct ? ', correct' : ', wrong') : ''}`}
                aria-current={current === n ? 'true' : undefined}
                className={cx(
                  'relative h-9 min-w-9 shrink-0 rounded-lg px-1 text-sm font-semibold tabular-nums transition-colors',
                  m
                    ? m.correct
                      ? 'bg-success-soft text-success'
                      : 'bg-danger-soft text-danger'
                    : isAnswered
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-2 text-ink',
                  current === n && 'ring-ink ring-2',
                )}
              >
                {n}
                {flagged.has(n) && (
                  <span className="bg-accent absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full" />
                )}
              </button>
            )
          })}
        </div>
        {onToggleFlag && current !== null && !marked && (
          <Button
            variant="secondary"
            size="sm"
            aria-pressed={flagged.has(current)}
            onClick={() => onToggleFlag(current)}
            className="shrink-0"
          >
            <Flag size={16} />{' '}
            <span className="hidden sm:inline">{flagged.has(current) ? 'Unflag' : 'Flag'}</span>
          </Button>
        )}
        <span className="text-muted hidden shrink-0 text-xs tabular-nums md:inline">
          {answeredCount}/{numbers.length} answered
        </span>
      </div>
    </nav>
  )
}
