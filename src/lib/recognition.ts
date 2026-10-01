/*
 * Speech recognition (Chrome, Edge, Android, and recent Safari) for "say it" exercises.
 * Where it isn't available, speaking exercises are left out of lessons.
 */

interface RecognitionResultList {
  length: number
  [index: number]: { length: number; [index: number]: { transcript: string; confidence: number } }
}

interface Recognition {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  continuous: boolean
  start(): void
  stop(): void
  abort(): void
  onresult: ((e: { results: RecognitionResultList }) => void) | null
  onerror: ((e: { error: string }) => void) | null
  onend: (() => void) | null
}

type RecognitionCtor = new () => Recognition

function getCtor(): RecognitionCtor | null {
  if (typeof window === 'undefined') return null
  const w = window as unknown as {
    SpeechRecognition?: RecognitionCtor
    webkitSpeechRecognition?: RecognitionCtor
  }
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null
}

export function recognitionSupported(): boolean {
  return getCtor() !== null
}

export interface Listening {
  /** Resolves with the recognised alternatives (best first), or rejects with a readable message. */
  result: Promise<string[]>
  stop: () => void
}

const ERROR_MESSAGES: Record<string, string> = {
  'not-allowed': 'Microphone access was blocked. Allow the microphone for this site and try again.',
  'service-not-allowed': 'Speech recognition is not allowed in this browser.',
  'no-speech': "I didn't hear anything. Try again a little closer to the microphone.",
  'audio-capture': 'No microphone was found.',
  network: 'Speech recognition needs an internet connection.',
}

export function listen(lang = 'sv-SE'): Listening {
  const Ctor = getCtor()
  if (!Ctor) {
    return {
      result: Promise.reject(new Error('Speech recognition is not supported here.')),
      stop() {},
    }
  }
  const rec = new Ctor()
  rec.lang = lang
  rec.interimResults = false
  rec.maxAlternatives = 5
  rec.continuous = false

  const result = new Promise<string[]>((resolve, reject) => {
    let settled = false
    rec.onresult = (e) => {
      const first = e.results[0]
      const alternatives: string[] = []
      if (first) for (let i = 0; i < first.length; i++) alternatives.push(first[i]!.transcript)
      settled = true
      resolve(alternatives)
    }
    rec.onerror = (e) => {
      if (settled) return
      settled = true
      reject(new Error(ERROR_MESSAGES[e.error] ?? 'Speech recognition failed. Please try again.'))
    }
    rec.onend = () => {
      if (settled) return
      settled = true
      reject(new Error(ERROR_MESSAGES['no-speech']))
    }
  })

  rec.start()
  return { result, stop: () => rec.stop() }
}
