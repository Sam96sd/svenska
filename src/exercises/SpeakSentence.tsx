import { Mic, MicOff } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { SpeakButtons } from '../components/Speak'
import { Button } from '../components/ui'
import { cx } from '../components/styles'
import { type ExerciseOf } from '../content/schema'
import { similarity } from '../lib/answer'
import { speak } from '../lib/audio'
import { listen, type Listening } from '../lib/recognition'
import { Instruction } from './shared'
import { useAutoplay } from './hooks'
import { type ExerciseProps } from './types'

const PASS = 0.75
const CLOSE = 0.5
const MAX_TRIES = 3

export function SpeakSentence({ exercise: ex, api, verdict }: ExerciseProps<ExerciseOf<'speak'>>) {
  const [state, setState] = useState<'idle' | 'listening' | 'feedback'>('idle')
  const [heard, setHeard] = useState<{ text: string; score: number } | null>(null)
  const [error, setError] = useState<string | null>(null)
  const tries = useRef(0)
  const session = useRef<Listening | null>(null)

  useAutoplay(ex.text)

  useEffect(() => {
    api.setAudio(() => speak(ex.text))
    api.setReady(null)
    return () => session.current?.stop()
  }, [api, ex])

  async function record() {
    if (state === 'listening') {
      session.current?.stop()
      return
    }
    setError(null)
    setState('listening')
    const s = listen('sv-SE')
    session.current = s
    try {
      const alternatives = await s.result
      const best = alternatives
        .map((t) => ({ text: t, score: similarity(t, ex.text) }))
        .sort((a, b) => b.score - a.score)[0] ?? { text: '', score: 0 }
      tries.current++
      setHeard(best)
      setState('feedback')
      if (best.score >= PASS) {
        api.submit({ correct: true, note: `I heard: “${best.text}”`, audio: ex.text })
      } else if (tries.current >= MAX_TRIES) {
        api.submit({
          correct: false,
          expected: ex.text,
          expectedLang: 'sv',
          note: `I heard: “${best.text}”. Listen with 🐢 and try it again later.`,
          audio: ex.text,
        })
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong.')
      setState('idle')
    }
  }

  const listening = state === 'listening'

  return (
    <div>
      <Instruction>Say this out loud</Instruction>
      <div className="mb-2 flex flex-wrap items-center gap-3">
        <SpeakButtons text={ex.text} />
        <p lang="sv" className="font-display text-2xl font-semibold sm:text-3xl">
          {ex.text}
        </p>
      </div>
      <p className="text-muted mb-10">{ex.en}</p>

      <div className="flex flex-col items-center gap-4">
        <button
          type="button"
          onClick={record}
          disabled={verdict !== null}
          aria-label={listening ? 'Stop recording' : 'Start speaking'}
          className={cx(
            'flex h-24 w-24 items-center justify-center rounded-full shadow-lg transition-all disabled:opacity-50',
            listening
              ? 'bg-danger animate-pulse text-white'
              : 'bg-primary text-on-primary hover:scale-105',
          )}
        >
          {listening ? <MicOff size={36} /> : <Mic size={36} />}
        </button>
        <p className="text-muted text-sm" aria-live="polite">
          {listening ? 'Listening… speak now' : verdict ? '' : 'Tap the microphone and speak'}
        </p>

        {heard && !verdict && (
          <div
            aria-live="polite"
            className={cx(
              'w-full rounded-2xl p-4 text-center',
              heard.score >= CLOSE ? 'bg-accent-soft' : 'bg-danger-soft',
            )}
          >
            <p className="text-sm font-semibold">
              {heard.score >= CLOSE
                ? 'Close! Try once more.'
                : 'Not quite. Listen again and try once more.'}
            </p>
            <p className="text-muted text-sm">I heard: “{heard.text || '…'}”</p>
          </div>
        )}
        {error && (
          <p role="alert" className="text-danger text-center text-sm">
            {error}
          </p>
        )}
        {!verdict && (
          <Button variant="ghost" size="sm" onClick={api.skip}>
            Can't speak right now
          </Button>
        )}
      </div>
    </div>
  )
}
