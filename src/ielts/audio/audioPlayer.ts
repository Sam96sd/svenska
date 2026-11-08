import { useEffect, useRef, useState } from 'react'
import { type PlayerState } from './tts'

/**
 * Plays pre-rendered audio (Gemini voices) with the same controls as the device-voice script
 * player, so the listening runner can use either. The current line is estimated from the
 * playback position, weighted by the length of each line.
 */
export function useAudioPlayer(lineLengths: number[], rate: number, previewMs: number) {
  const audio = useRef<HTMLAudioElement | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const [state, setState] = useState<PlayerState>({ status: 'idle', line: -1 })
  const total = lineLengths.reduce((a, b) => a + b, 0) || 1

  useEffect(() => {
    if (audio.current) audio.current.playbackRate = rate
  }, [rate])

  useEffect(
    () => () => {
      clearTimeout(timer.current)
      audio.current?.pause()
    },
    [],
  )

  function lineAt(a: HTMLAudioElement): number {
    if (!a.duration || !Number.isFinite(a.duration)) return 1
    const target = (a.currentTime / a.duration) * total
    let sum = 0
    for (let i = 0; i < lineLengths.length; i++) {
      sum += lineLengths[i]!
      // +1: line 0 is the introduction/preview, as with the device player.
      if (sum >= target) return i + 1
    }
    return lineLengths.length
  }

  function element(): HTMLAudioElement {
    if (audio.current) return audio.current
    const a = new Audio()
    a.preload = 'auto'
    a.ontimeupdate = () =>
      setState((s) => (s.status === 'playing' ? { status: 'playing', line: lineAt(a) } : s))
    a.onended = () => setState({ status: 'done', line: -1 })
    audio.current = a
    return a
  }

  return {
    state,
    /** Loads the audio and plays it after the preview (reading) time. */
    start(url: string) {
      const a = element()
      a.src = url
      a.playbackRate = rate
      setState({ status: 'playing', line: 0 })
      clearTimeout(timer.current)
      timer.current = setTimeout(
        () => void a.play().catch(() => setState({ status: 'paused', line: 1 })),
        previewMs,
      )
    },
    play() {
      const a = element()
      if (!a.src) return
      if (state.status === 'done') a.currentTime = 0
      setState({ status: 'playing', line: lineAt(a) })
      void a.play()
    },
    pause() {
      clearTimeout(timer.current)
      audio.current?.pause()
      setState((s) => ({ status: 'paused', line: s.line }))
    },
    restart() {
      const a = element()
      clearTimeout(timer.current)
      a.currentTime = 0
      setState({ status: 'playing', line: 1 })
      void a.play()
    },
    stop() {
      clearTimeout(timer.current)
      audio.current?.pause()
      setState({ status: 'idle', line: -1 })
    },
  }
}
