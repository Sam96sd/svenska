import { CircleCheck, Info, TriangleAlert } from 'lucide-react'
import { type ReactNode } from 'react'
import { cx } from '../../components/styles'
import { Card } from '../../components/ui'

export function Section({
  title,
  description,
  children,
  id,
}: {
  title: string
  description?: ReactNode
  children: ReactNode
  id?: string
}) {
  return (
    <Card id={id}>
      <h2 className="text-lg font-semibold">{title}</h2>
      {description && <p className="text-muted mt-1 text-sm">{description}</p>}
      <div className="mt-4 grid grid-cols-1 gap-5">{children}</div>
    </Card>
  )
}

export function Notice({
  tone = 'info',
  children,
  className,
}: {
  tone?: 'info' | 'warn' | 'ok' | 'error'
  children: ReactNode
  className?: string
}) {
  const Icon = tone === 'ok' ? CircleCheck : tone === 'info' ? Info : TriangleAlert
  const color = {
    info: 'bg-primary-soft text-ink',
    warn: 'bg-accent-soft text-ink',
    ok: 'bg-success-soft text-ink',
    error: 'bg-danger-soft text-ink',
  }[tone]
  const iconColor = {
    info: 'text-primary',
    warn: 'text-accent-ink',
    ok: 'text-success',
    error: 'text-danger',
  }[tone]
  return (
    <div
      role={tone === 'error' ? 'alert' : undefined}
      className={cx('flex gap-3 rounded-2xl p-3 text-sm', color, className)}
    >
      <Icon size={18} className={cx('mt-0.5 shrink-0', iconColor)} aria-hidden="true" />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}

export function Pill({
  children,
  tone = 'neutral',
  className,
}: {
  children: ReactNode
  tone?: 'neutral' | 'primary' | 'accent' | 'success' | 'danger'
  className?: string
}) {
  const color = {
    neutral: 'bg-surface-2 text-muted',
    primary: 'bg-primary-soft text-primary',
    accent: 'bg-accent-soft text-accent-ink',
    success: 'bg-success-soft text-success',
    danger: 'bg-danger-soft text-danger',
  }[tone]
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold',
        color,
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Toggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string
  description?: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4">
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        {description && <span className="text-muted block text-sm">{description}</span>}
      </span>
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="bg-line checked:bg-primary relative mt-0.5 h-7 w-12 shrink-0 cursor-pointer appearance-none rounded-full transition-colors before:absolute before:top-1 before:left-1 before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform checked:before:translate-x-5"
      />
    </label>
  )
}

export const inputClass =
  'border-line bg-bg focus:border-primary h-11 w-full min-w-0 rounded-xl border px-3 text-[15px] outline-none'

export function BandBadge({ band, label }: { band: string; label?: string }) {
  return (
    <span
      className="bg-primary-soft text-primary inline-flex min-w-12 flex-col items-center rounded-2xl px-3 py-1.5"
      aria-label={label ? `${label}: band ${band}` : `Band ${band}`}
    >
      <span className="font-display text-xl leading-none font-semibold">{band}</span>
      {label && <span className="mt-0.5 text-[11px] font-semibold uppercase">{label}</span>}
    </span>
  )
}
