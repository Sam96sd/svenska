import { Turtle, Volume2 } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'
import { speak } from '../lib/audio'
import { cx } from './styles'

function usePlaying() {
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    if (!playing) return
    const t = setTimeout(() => setPlaying(false), 8000)
    return () => clearTimeout(t)
  }, [playing])
  return [playing, setPlaying] as const
}

/** 🔊 and 🐢 buttons for a Swedish word or sentence. */
export function SpeakButtons({
  text,
  size = 'md',
  slow = true,
  className,
}: {
  text: string
  size?: 'sm' | 'md' | 'lg'
  slow?: boolean
  className?: string
}) {
  const [playing, setPlaying] = usePlaying()
  const dims = { sm: 'h-8 w-8', md: 'h-10 w-10', lg: 'h-14 w-14' }[size]
  const icon = { sm: 16, md: 20, lg: 28 }[size]
  const play = (isSlow: boolean) => {
    setPlaying(true)
    speak(text, { slow: isSlow, onEnd: () => setPlaying(false) })
  }
  return (
    <span className={cx('inline-flex shrink-0 items-center gap-1', className)}>
      <button
        type="button"
        onClick={() => play(false)}
        aria-label={`Play “${text}”`}
        className={cx(
          dims,
          'bg-primary-soft text-primary hover:bg-primary hover:text-on-primary inline-flex items-center justify-center rounded-full transition-colors',
          playing && 'ring-primary/40 ring-4',
        )}
      >
        <Volume2 size={icon} aria-hidden="true" />
      </button>
      {slow && (
        <button
          type="button"
          onClick={() => play(true)}
          aria-label={`Play “${text}” slowly`}
          className={cx(
            dims,
            'text-muted hover:bg-surface-2 hover:text-ink inline-flex items-center justify-center rounded-full transition-colors',
          )}
        >
          <Turtle size={icon - 2} aria-hidden="true" />
        </button>
      )}
    </span>
  )
}

/** A Swedish phrase you can tap to hear. */
export function Say({
  text,
  children,
  className,
}: {
  text: string
  children?: ReactNode
  className?: string
}) {
  return (
    <button
      type="button"
      lang="sv"
      onClick={() => speak(text)}
      className={cx(
        'decoration-primary/40 hover:decoration-primary hover:text-primary cursor-pointer font-semibold underline decoration-dotted decoration-2 underline-offset-4 transition-colors',
        className,
      )}
      title="Tap to hear"
    >
      {children ?? text}
    </button>
  )
}
