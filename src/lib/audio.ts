import { useSyncExternalStore } from 'react'
import { store } from './storage/store'

/*
 * Text-to-speech through the browser's Web Speech API, using a Swedish (sv-SE) voice.
 * Voices load asynchronously (Chrome fires `voiceschanged`), so voice lists are
 * exposed through a small subscribable store.
 */

export const SLOW_RATE = 0.6

const synth: SpeechSynthesis | null =
  typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null

let allVoices: SpeechSynthesisVoice[] = []
let voicesLoaded = false
const listeners = new Set<() => void>()

function isSwedish(v: SpeechSynthesisVoice): boolean {
  return v.lang.replace('_', '-').toLowerCase().startsWith('sv')
}

function refreshVoices() {
  if (!synth) return
  const list = synth.getVoices()
  if (list.length) voicesLoaded = true
  allVoices = list
  swedishCache = allVoices.filter(isSwedish).sort((a, b) => scoreVoice(b) - scoreVoice(a))
  for (const l of listeners) l()
}

let swedishCache: SpeechSynthesisVoice[] = []

if (synth) {
  refreshVoices()
  synth.addEventListener?.('voiceschanged', refreshVoices)
  // Some browsers never fire voiceschanged; treat the list as final after a moment.
  setTimeout(() => {
    voicesLoaded = true
    refreshVoices()
  }, 1500)
}

/** Higher is better: prefer natural/neural voices and exact sv-SE. */
export function scoreVoice(
  v: Pick<SpeechSynthesisVoice, 'name' | 'lang' | 'localService'>,
): number {
  let s = 0
  const name = v.name.toLowerCase()
  if (v.lang.replace('_', '-').toLowerCase() === 'sv-se') s += 10
  if (/natural|neural|premium|enhanced|siri/.test(name)) s += 30
  if (/google/.test(name)) s += 15
  if (/alva|klara|sofie|mattias|oskar|hillevi/.test(name)) s += 5
  if (v.localService) s += 2
  return s
}

export function swedishVoices(): SpeechSynthesisVoice[] {
  return swedishCache
}

export function pickVoice(preferredURI: string | null | undefined): SpeechSynthesisVoice | null {
  if (preferredURI) {
    const chosen = swedishCache.find((v) => v.voiceURI === preferredURI)
    if (chosen) return chosen
  }
  return swedishCache[0] ?? null
}

function activeSettings() {
  const s = store.get()
  return s.profiles.find((p) => p.id === s.activeProfileId)?.settings
}

export interface SpeakOptions {
  slow?: boolean
  /** Slight pitch change so dialogue speakers sound different. */
  pitch?: number
  onEnd?: () => void
}

export function speak(text: string, opts: SpeakOptions = {}): void {
  if (!synth) {
    opts.onEnd?.()
    return
  }
  const settings = activeSettings()
  const utterance = new SpeechSynthesisUtterance(cleanForSpeech(text))
  utterance.lang = 'sv-SE'
  const voice = pickVoice(settings?.voiceURI)
  if (voice) utterance.voice = voice
  utterance.rate = opts.slow ? SLOW_RATE : (settings?.audioRate ?? 0.9)
  utterance.pitch = opts.pitch ?? 1
  if (opts.onEnd) {
    utterance.onend = () => opts.onEnd?.()
    utterance.onerror = () => opts.onEnd?.()
  }
  synth.cancel()
  // Chrome sometimes gets stuck in a paused state; resume before speaking.
  synth.resume()
  synth.speak(utterance)
}

/** Speak several lines in a row (dialogues). Returns a function that stops playback. */
export function speakSequence(
  lines: Array<{ text: string; pitch?: number }>,
  onLine?: (index: number) => void,
  onDone?: () => void,
): () => void {
  let stopped = false
  const next = (i: number) => {
    if (stopped) return
    if (i >= lines.length) {
      onLine?.(-1)
      onDone?.()
      return
    }
    onLine?.(i)
    const line = lines[i]!
    speak(line.text, { pitch: line.pitch, onEnd: () => setTimeout(() => next(i + 1), 350) })
  }
  next(0)
  return () => {
    stopped = true
    synth?.cancel()
    onLine?.(-1)
  }
}

export function stopSpeaking() {
  synth?.cancel()
}

/** Remove things that shouldn't be read aloud: gap markers, slashes between alternatives. */
export function cleanForSpeech(text: string): string {
  return text
    .replace(/_{2,}/g, ' … ')
    .replace(/\s*\/\s*/g, ', ')
    .trim()
}

export const speechSupported = (): boolean => synth !== null

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

const getVoicesSnapshot = () => swedishCache
const getLoadedSnapshot = () => voicesLoaded

/** Swedish voices available on this device, best first. */
export function useSwedishVoices(): {
  voices: SpeechSynthesisVoice[]
  loaded: boolean
  supported: boolean
} {
  const voices = useSyncExternalStore(subscribe, getVoicesSnapshot)
  const loaded = useSyncExternalStore(subscribe, getLoadedSnapshot)
  return { voices, loaded, supported: synth !== null }
}
