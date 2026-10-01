import { useId } from 'react'
import { cx } from './styles'

/** A row of radio buttons styled as a segmented control. */
export function Segmented<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: Array<{ value: T; label: string }>
  onChange: (value: T) => void
}) {
  const name = useId()
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-semibold">{label}</legend>
      <div className="bg-surface-2 inline-flex flex-wrap gap-1 rounded-2xl p-1">
        {options.map((o) => (
          <label
            key={String(o.value)}
            className={cx(
              'relative flex h-10 cursor-pointer items-center rounded-xl px-4 text-sm font-semibold transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-[var(--color-primary)]',
              o.value === value ? 'bg-surface text-ink shadow-sm' : 'text-muted hover:text-ink',
            )}
          >
            <input
              type="radio"
              name={name}
              className="sr-only"
              checked={o.value === value}
              onChange={() => onChange(o.value)}
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
