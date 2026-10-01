import { type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react'
import { buttonClass, cx, type ButtonSize, type ButtonVariant } from './styles'

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize }) {
  return <button type={type} className={cx(buttonClass(variant, size), className)} {...rest} />
}

export function Card({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx(
        'bg-surface border-line rounded-card border p-5 shadow-[0_1px_2px_rgb(0_0_0/0.04)]',
        className,
      )}
      {...rest}
    />
  )
}

export function Avatar({
  name,
  color,
  size = 40,
  className,
}: {
  name: string
  color: string
  size?: number
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        'inline-flex shrink-0 items-center justify-center rounded-full font-bold text-white',
        className,
      )}
      style={{ background: color, width: size, height: size, fontSize: size * 0.42 }}
    >
      {name.trim().charAt(0).toUpperCase() || '?'}
    </span>
  )
}

export function ProgressBar({
  value,
  label,
  className,
  tone = 'primary',
}: {
  value: number
  label: string
  className?: string
  tone?: 'primary' | 'accent' | 'success'
}) {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100)
  const fill = { primary: 'bg-primary', accent: 'bg-accent', success: 'bg-success' }[tone]
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      className={cx('bg-surface-2 h-2.5 overflow-hidden rounded-full', className)}
    >
      <div
        className={cx('h-full rounded-full transition-[width] duration-500', fill)}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: ReactNode
  action?: ReactNode
}) {
  return (
    <header className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="text-muted mt-1">{subtitle}</p>}
      </div>
      {action}
    </header>
  )
}
