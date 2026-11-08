import { useCallback, useEffect, useRef, useState } from 'react'

/** Re-renders every `ms` while `active`, returning the current time. */
export function useTick(active: boolean, ms = 1000): number {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    if (!active) return
    const id = setInterval(() => setNow(Date.now()), ms)
    return () => clearInterval(id)
  }, [active, ms])
  return now
}

/**
 * Exam countdown based on wall-clock time, so it stays right when the tab is in the background.
 * `limitSeconds: null` = untimed (only counts up).
 */
export function useExamClock(
  limitSeconds: number | null,
  opts: { running: boolean; onExpire?: () => void },
) {
  const [elapsedMs, setElapsed] = useState(0)
  const accumulated = useRef(0)
  const expired = useRef(false)
  const onExpire = useRef(opts.onExpire)
  useEffect(() => {
    onExpire.current = opts.onExpire
  })

  useEffect(() => {
    if (!opts.running) return
    const t0 = Date.now()
    const id = setInterval(() => {
      const total = accumulated.current + Date.now() - t0
      setElapsed(total)
      if (limitSeconds !== null && total >= limitSeconds * 1000 && !expired.current) {
        expired.current = true
        onExpire.current?.()
      }
    }, 500)
    return () => {
      clearInterval(id)
      accumulated.current += Date.now() - t0
    }
  }, [opts.running, limitSeconds])

  const remainingMs = limitSeconds === null ? null : Math.max(0, limitSeconds * 1000 - elapsedMs)
  return { elapsedMs, remainingMs }
}

export function formatClock(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000))
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  const mm = h ? String(m).padStart(2, '0') : String(m)
  return `${h ? `${h}:` : ''}${mm}:${String(s).padStart(2, '0')}`
}

/**
 * Time spent per question: the clock runs for whichever question the learner last worked on.
 * `stuck` is the question they've been on for longer than `stuckAfterMs` (the timing coach).
 */
export function useQuestionTimes(running: boolean, stuckAfterMs: number) {
  const times = useRef<Record<number, number>>({})
  const current = useRef<{ n: number; since: number } | null>(null)
  const [stuck, setStuck] = useState<number | null>(null)
  const dismissed = useRef(new Set<number>())

  const commit = useCallback(() => {
    const c = current.current
    if (!c) return
    const now = Date.now()
    times.current[c.n] = (times.current[c.n] ?? 0) + (now - c.since)
    c.since = now
  }, [])

  const focus = useCallback(
    (n: number) => {
      if (current.current?.n === n) return
      commit()
      current.current = { n, since: Date.now() }
      setStuck(null)
    },
    [commit],
  )

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      const c = current.current
      if (!c || dismissed.current.has(c.n)) return
      const spent = (times.current[c.n] ?? 0) + (Date.now() - c.since)
      if (spent > stuckAfterMs) setStuck(c.n)
    }, 5000)
    return () => clearInterval(id)
  }, [running, stuckAfterMs])

  useEffect(() => {
    if (running) return
    commit()
  }, [running, commit])

  return {
    focus,
    stuck,
    dismissStuck: () => {
      if (stuck !== null) dismissed.current.add(stuck)
      setStuck(null)
    },
    /** Final per-question times in ms (call when finishing). */
    snapshot: () => {
      commit()
      return { ...times.current }
    },
  }
}
