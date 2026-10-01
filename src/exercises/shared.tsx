import { Check, X } from 'lucide-react'
import { useEffect, useRef, type ChangeEvent, type ReactNode, type RefObject } from 'react'
import { SpeakButtons } from '../components/Speak'
import { cx } from '../components/styles'
import { useNumberKeys } from './hooks'

export function Instruction({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-muted mb-5 text-sm font-semibold tracking-wide uppercase">{children}</h2>
  )
}

/** The main prompt: big text, with audio buttons if it's Swedish. */
export function Prompt({ text, lang }: { text: string; lang: 'sv' | 'en' }) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      {lang === 'sv' && <SpeakButtons text={text} size="md" />}
      <p lang={lang} className="font-display text-2xl leading-snug font-semibold sm:text-3xl">
        {text}
      </p>
    </div>
  )
}

export interface ChoiceOption {
  value: string
  label: ReactNode
  lang?: 'sv' | 'en'
}

/** Answer tiles with 1–9 keyboard shortcuts and correct/wrong styling once checked. */
export function ChoiceGrid({
  options,
  selected,
  onSelect,
  locked,
  correct,
  columns = 1,
}: {
  options: ChoiceOption[]
  selected: string | null
  onSelect: (value: string) => void
  locked: boolean
  correct?: string
  columns?: 1 | 2
}) {
  useNumberKeys(options.length, (i) => onSelect(options[i]!.value), !locked)
  return (
    <div role="radiogroup" className={cx('grid gap-3', columns === 2 && 'sm:grid-cols-2')}>
      {options.map((o, i) => {
        const isSelected = selected === o.value
        const isCorrect = locked && o.value === correct
        const isWrong = locked && isSelected && o.value !== correct
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={locked}
            lang={o.lang}
            onClick={() => onSelect(o.value)}
            className={cx(
              'flex min-h-14 items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left text-[17px] font-medium transition-all',
              !locked && 'hover:border-primary/50 active:scale-[0.99]',
              isCorrect
                ? 'border-success bg-success-soft'
                : isWrong
                  ? 'border-danger bg-danger-soft animate-shake'
                  : isSelected
                    ? 'border-primary bg-primary-soft'
                    : 'border-line bg-surface',
              locked && !isCorrect && !isWrong && 'opacity-60',
            )}
          >
            <kbd
              aria-hidden="true"
              className="border-line text-muted hidden h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs font-semibold sm:inline-flex"
            >
              {i + 1}
            </kbd>
            <span className="flex-1">{o.label}</span>
            {isCorrect && <Check className="text-success" size={20} aria-label="correct" />}
            {isWrong && <X className="text-danger" size={20} aria-label="wrong" />}
          </button>
        )
      })}
    </div>
  )
}

const LETTERS = ['å', 'ä', 'ö', 'é']

/** On-screen å ä ö keys that insert at the caret of the given input. */
export function SwedishKeys({
  inputRef,
  onInsert,
  disabled,
}: {
  inputRef: RefObject<HTMLInputElement | HTMLTextAreaElement | null>
  onInsert: (next: string) => void
  disabled?: boolean
}) {
  const insert = (ch: string) => {
    const el = inputRef.current
    if (!el) return
    const start = el.selectionStart ?? el.value.length
    const end = el.selectionEnd ?? el.value.length
    const next = el.value.slice(0, start) + ch + el.value.slice(end)
    onInsert(next)
    requestAnimationFrame(() => {
      el.focus()
      el.setSelectionRange(start + ch.length, start + ch.length)
    })
  }
  return (
    <div className="mt-3 flex gap-2" aria-label="Swedish letters">
      {LETTERS.map((ch) => (
        <button
          key={ch}
          type="button"
          disabled={disabled}
          // Keep focus (and the mobile keyboard) in the input.
          onMouseDown={(e) => e.preventDefault()}
          onClick={(e) => insert(e.shiftKey ? ch.toUpperCase() : ch)}
          className="border-line bg-surface hover:bg-surface-2 h-11 min-w-11 rounded-xl border px-3 text-lg font-semibold disabled:opacity-40"
          aria-label={`Insert ${ch}`}
        >
          {ch}
        </button>
      ))}
    </div>
  )
}

export function TextAnswer({
  value,
  onChange,
  locked,
  status,
  placeholder,
  lang,
  multiline,
}: {
  value: string
  onChange: (v: string) => void
  locked: boolean
  status?: 'correct' | 'wrong' | 'almost'
  placeholder: string
  lang: 'sv' | 'en'
  multiline?: boolean
}) {
  const ref = useRef<HTMLInputElement & HTMLTextAreaElement>(null)
  useEffect(() => {
    if (!locked) ref.current?.focus({ preventScroll: true })
  }, [locked])
  const cls = cx(
    'w-full rounded-2xl border-2 bg-surface px-4 py-3 text-lg outline-none transition-colors',
    status === 'correct'
      ? 'border-success'
      : status === 'almost'
        ? 'border-accent'
        : status === 'wrong'
          ? 'border-danger'
          : 'border-line focus:border-primary',
  )
  const common = {
    ref,
    value,
    lang,
    readOnly: locked,
    placeholder,
    autoCapitalize: 'off',
    autoCorrect: 'off',
    autoComplete: 'off',
    spellCheck: false,
    'aria-label': placeholder,
    className: cls,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
  }
  return (
    <div>
      {multiline ? (
        <textarea
          {...common}
          rows={2}
          onKeyDown={(e) => {
            // Enter checks the answer (handled by the player); don't insert a newline.
            if (e.key === 'Enter') e.preventDefault()
          }}
        />
      ) : (
        <input {...common} type="text" enterKeyHint="done" />
      )}
      {lang === 'sv' && <SwedishKeys inputRef={ref} onInsert={onChange} disabled={locked} />}
    </div>
  )
}
