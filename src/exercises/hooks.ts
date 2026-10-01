import { useEffect, useRef } from 'react'
import { speak } from '../lib/audio'

export function isTypingTarget(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null
  return !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)
}

/** Calls `handler` for number keys 1–9 (not while typing). */
export function useNumberKeys(count: number, handler: (index: number) => void, enabled = true) {
  const ref = useRef(handler)
  useEffect(() => {
    ref.current = handler
  })
  useEffect(() => {
    if (!enabled) return
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isTypingTarget(e.target)) return
      const n = Number(e.key)
      if (Number.isInteger(n) && n >= 1 && n <= count) {
        e.preventDefault()
        ref.current(n - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count, enabled])
}

/** Plays `text` once when the exercise appears. */
export function useAutoplay(text: string | null | undefined) {
  useEffect(() => {
    if (!text) return
    const t = setTimeout(() => speak(text), 250)
    return () => clearTimeout(t)
  }, [text])
}
