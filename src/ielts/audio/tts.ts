import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { type Accent } from '../content/schema'

/*
 * English text-to-speech for listening practice, using the voices built into the device.
 * Speakers in a script ask for an accent (en-GB, en-AU…) and a gender; we pick the closest
 * installed voice, and give each speaker a different voice (or at least a different pitch).
 */

const synth: SpeechSynthesis | null =
  typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null

let voices: SpeechSynthesisVoice[] = []
let loaded = false
const listeners = new Set<() => void>()

function refresh() {
  if (!synth) return
  const list = synth
    .getVoices()
    .filter((v) => v.lang.replace('_', '-').toLowerCase().startsWith('en'))
  if (synth.getVoices().length) loaded = true
  voices = list.sort((a, b) => quality(b) - quality(a))
  for (const l of listeners) l()
}

if (synth) {
  refresh()
  synth.addEventListener?.('voiceschanged', refresh)
  setTimeout(() => {
    loaded = true
    refresh()
  }, 1500)
}

/** Higher is better: natural/neural voices sound far more like the real test. */
function quality(v: SpeechSynthesisVoice): number {
  const name = v.name.toLowerCase()
  let s = 0
  if (/natural|neural|premium|enhanced|siri/.test(name)) s += 30
  if (/google/.test(name)) s += 12
  if (v.localService) s += 2
  return s
}

const FEMALE =
  /female|woman|sonia|libby|maisie|hollie|abbie|bella|olivia|natasha|annette|carly|elsie|freya|joanne|kim|tina|jenny|aria|ana|ashley|cora|elizabeth|emma|michelle|monica|nancy|sara|clara|molly|emily|connor?a|leah|neerja|serena|karen|moira|tessa|veena|fiona|samantha|victoria|allison|ava|susan|kate|hazel|zira|catherine|heera|linda|heather/
const MALE =
  /\bmale\b|\bman\b|ryan|thomas|alfie|elliot|ethan|noah|oliver|william|darren|duncan|ken|neil|tim|guy|davis|andrew|brian|christopher|eric|jacob|jason|roger|steffan|tony|liam|mitchell|connor\b|prabhat|daniel|arthur|aaron|fred|alex|tom|rishi|george|james|mark|david|richard|sean/

export function guessGender(v: Pick<SpeechSynthesisVoice, 'name'>): 'f' | 'm' | null {
  const name = v.name.toLowerCase()
  if (FEMALE.test(name) && !/\bmale\b/.test(name)) return 'f'
  if (MALE.test(name)) return 'm'
  return null
}

const norm = (lang: string) => lang.replace('_', '-').toLowerCase()

export interface VoiceRequest {
  id: string
  accent: Accent
  gender: 'f' | 'm'
}

export interface Casting {
  voice: SpeechSynthesisVoice | null
  /** Used when two speakers have to share a voice. */
  pitch: number
  /** The accent actually used ("en-GB"), for the "accents on this device" note. */
  lang: string | null
}

/**
 * Gives each speaker the best free voice: same accent and gender first, then same accent,
 * then same gender, then anything English. Speakers never share a voice while another is free.
 */
export function castVoices(
  speakers: VoiceRequest[],
  available: SpeechSynthesisVoice[] = voices,
): Record<string, Casting> {
  const used = new Set<string>()
  const out: Record<string, Casting> = {}
  const pick = (req: VoiceRequest, allowUsed: boolean) => {
    const pool = available.filter((v) => allowUsed || !used.has(v.voiceURI))
    const accent = (v: SpeechSynthesisVoice) => norm(v.lang) === req.accent.toLowerCase()
    const gender = (v: SpeechSynthesisVoice) => guessGender(v) === req.gender
    return (
      pool.find((v) => accent(v) && gender(v)) ??
      pool.find((v) => accent(v) && guessGender(v) === null) ??
      pool.find(gender) ??
      pool.find(accent) ??
      pool[0] ??
      null
    )
  }
  speakers.forEach((req, i) => {
    let voice = pick(req, false)
    let pitch = 1
    if (!voice) {
      voice = pick(req, true)
      // Sharing a voice: shift the pitch so speakers stay distinguishable.
      pitch = [1, 0.8, 1.2, 0.9, 1.1][i % 5]!
    }
    if (voice) used.add(voice.voiceURI)
    out[req.id] = { voice, pitch, lang: voice ? voice.lang : null }
  })
  return out
}

export const ttsSupported = () => synth !== null

const subscribe = (l: () => void) => {
  listeners.add(l)
  return () => listeners.delete(l)
}
const snapVoices = () => voices
const snapLoaded = () => loaded

export function useEnglishVoices() {
  const list = useSyncExternalStore(subscribe, snapVoices)
  const isLoaded = useSyncExternalStore(subscribe, snapLoaded)
  return { voices: list, loaded: isLoaded, supported: synth !== null }
}

/** Accents with at least one installed voice, e.g. ["en-AU", "en-GB", "en-US"]. */
export function availableAccents(list: SpeechSynthesisVoice[] = voices): string[] {
  return [...new Set(list.map((v) => v.lang.replace('_', '-')))].sort()
}

export function speakLine(
  text: string,
  cast: Casting | undefined,
  rate: number,
  onEnd: () => void,
): void {
  if (!synth) {
    onEnd()
    return
  }
  const u = new SpeechSynthesisUtterance(text)
  if (cast?.voice) {
    u.voice = cast.voice
    u.lang = cast.voice.lang
  } else u.lang = 'en-GB'
  u.pitch = cast?.pitch ?? 1
  u.rate = rate
  let done = false
  const finish = () => {
    if (done) return
    done = true
    onEnd()
  }
  u.onend = finish
  u.onerror = finish
  synth.resume()
  synth.speak(u)
}

export function stopAll() {
  synth?.cancel()
}

// ---------- Script player ----------

export interface PlayerLine {
  speaker: string
  text: string
  /** Silence after the line, in ms (reading time, pauses between sections). */
  pauseAfterMs?: number
}

export interface PlayerState {
  status: 'idle' | 'playing' | 'paused' | 'done'
  /** Index of the line being spoken, or -1. */
  line: number
}

/**
 * Plays a list of lines with the cast voices. Pausing stops after cancelling the current line;
 * resuming starts that line again (speechSynthesis can't pause reliably on every browser).
 */
export function useScriptPlayer(
  lines: PlayerLine[],
  casting: Record<string, Casting>,
  rate: number,
) {
  const [state, setState] = useState<PlayerState>({ status: 'idle', line: -1 })
  const token = useRef(0)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const linesRef = useRef(lines)
  const castRef = useRef(casting)
  const rateRef = useRef(rate)
  useEffect(() => {
    linesRef.current = lines
    castRef.current = casting
    rateRef.current = rate
  })

  useEffect(
    () => () => {
      token.current++
      clearTimeout(timer.current)
      stopAll()
    },
    [],
  )

  const playFrom = (index: number) => {
    const my = ++token.current
    clearTimeout(timer.current)
    stopAll()
    const step = (i: number) => {
      if (token.current !== my) return
      const all = linesRef.current
      if (i >= all.length) {
        setState({ status: 'done', line: -1 })
        return
      }
      setState({ status: 'playing', line: i })
      const line = all[i]!
      speakLine(line.text, castRef.current[line.speaker], rateRef.current, () => {
        if (token.current !== my) return
        timer.current = setTimeout(() => step(i + 1), line.pauseAfterMs ?? 450)
      })
    }
    step(index)
  }

  return {
    state,
    play: () => playFrom(state.status === 'paused' ? Math.max(0, state.line) : 0),
    pause: () => {
      token.current++
      clearTimeout(timer.current)
      stopAll()
      setState((s) => ({ status: 'paused', line: s.line }))
    },
    restart: () => playFrom(0),
    stop: () => {
      token.current++
      clearTimeout(timer.current)
      stopAll()
      setState({ status: 'idle', line: -1 })
    },
  }
}
