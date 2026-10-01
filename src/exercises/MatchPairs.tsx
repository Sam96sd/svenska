import { Timer } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { cx } from '../components/styles'
import { type ExerciseOf } from '../content/schema'
import { speak } from '../lib/audio'
import { shuffle } from '../lib/random'
import { Instruction } from './shared'
import { type ExerciseProps } from './types'

type Side = 'sv' | 'en'

export function MatchPairs({ exercise: ex, api, verdict }: ExerciseProps<ExerciseOf<'match'>>) {
  const left = useMemo(() => shuffle(ex.pairs.map((p, i) => ({ i, text: p.sv }))), [ex])
  const right = useMemo(() => shuffle(ex.pairs.map((p, i) => ({ i, text: p.en }))), [ex])
  const [pick, setPick] = useState<{ side: Side; i: number } | null>(null)
  const [done, setDone] = useState<Set<number>>(new Set())
  const [wrong, setWrong] = useState<{ sv: number; en: number } | null>(null)
  const mistakes = useRef(0)
  const started = useRef(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    api.setAudio(null)
    api.setReady(null)
  }, [api])

  useEffect(() => {
    started.current = Date.now()
  }, [])

  useEffect(() => {
    if (verdict) return
    const t = setInterval(() => setSeconds(Math.floor((Date.now() - started.current) / 1000)), 1000)
    return () => clearInterval(t)
  }, [verdict])

  const tap = (side: Side, i: number) => {
    if (done.has(i) || verdict) return
    if (side === 'sv') speak(ex.pairs[i]!.sv)
    if (!pick || pick.side === side) {
      setPick({ side, i })
      return
    }
    const svIndex = side === 'sv' ? i : pick.i
    const enIndex = side === 'en' ? i : pick.i
    setPick(null)
    if (svIndex === enIndex) {
      const next = new Set(done).add(i)
      setDone(next)
      if (next.size === ex.pairs.length) {
        const m = mistakes.current
        api.submit({
          correct: true,
          note:
            m === 0
              ? `All pairs matched in ${Math.max(1, seconds)} s, no mix-ups.`
              : `Matched with ${m} mix-up${m === 1 ? '' : 's'}.`,
        })
      }
    } else {
      mistakes.current++
      setWrong({ sv: svIndex, en: enIndex })
      setTimeout(() => setWrong(null), 600)
    }
  }

  const cell = (side: Side, i: number, text: string) => {
    const isDone = done.has(i)
    const isPicked = pick?.side === side && pick.i === i
    const isWrong = wrong && wrong[side] === i
    return (
      <button
        key={`${side}-${i}`}
        type="button"
        lang={side}
        disabled={isDone || verdict !== null}
        aria-pressed={isPicked}
        onClick={() => tap(side, i)}
        className={cx(
          'min-h-14 rounded-2xl border-2 px-3 py-2 text-[16px] font-medium transition-all duration-200',
          isDone
            ? 'border-success/40 bg-success-soft text-success scale-[0.97] opacity-60'
            : isWrong
              ? 'border-danger bg-danger-soft animate-shake'
              : isPicked
                ? 'border-primary bg-primary-soft'
                : 'border-line bg-surface hover:border-primary/50',
        )}
      >
        {text}
      </button>
    )
  }

  return (
    <div>
      <div className="mb-5 flex items-center justify-between">
        <Instruction>Match the pairs</Instruction>
        <span
          className="text-muted -mt-5 flex items-center gap-1 text-sm tabular-nums"
          aria-label="Time"
        >
          <Timer size={16} aria-hidden="true" />
          {seconds}s
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid grid-cols-1 gap-3">{left.map((x) => cell('sv', x.i, x.text))}</div>
        <div className="grid grid-cols-1 gap-3">{right.map((x) => cell('en', x.i, x.text))}</div>
      </div>
    </div>
  )
}
