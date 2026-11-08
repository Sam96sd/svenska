import { useCallback, useEffect, useRef, useState } from 'react'
import { idbDelete, idbGet, idbKeys, idbSet, sha256 } from '../storage/idb'

/*
 * Recording answers with MediaRecorder. Recordings are kept in IndexedDB on this device so the
 * learner can listen again and compare attempts over time. For grading, audio is converted to
 * 16 kHz mono WAV, a format Gemini accepts on every browser (Chrome records WebM, Safari MP4).
 */

const MIME_CANDIDATES = [
  'audio/webm;codecs=opus',
  'audio/mp4',
  'audio/ogg;codecs=opus',
  'audio/webm',
]

export function recordingSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof MediaRecorder !== 'undefined' &&
    !!navigator.mediaDevices?.getUserMedia
  )
}

function pickMime(): string | undefined {
  if (typeof MediaRecorder === 'undefined') return undefined
  return MIME_CANDIDATES.find((m) => MediaRecorder.isTypeSupported?.(m))
}

export interface Recording {
  id: string
  createdAt: number
  /** What was answered, e.g. "cue-favourite-place" or "p1-hometown#2". */
  contentId: string
  part: 1 | 2 | 3
  question: string
  mimeType: string
  durationMs: number
  blob: Blob
  /** Attempt this recording belongs to, once graded. */
  attemptId: string | null
}

export type RecorderState = 'idle' | 'requesting' | 'recording' | 'stopped' | 'error'

export function useRecorder(opts: { maxMs?: number } = {}) {
  const [state, setState] = useState<RecorderState>('idle')
  const [error, setError] = useState<string | null>(null)
  const [elapsedMs, setElapsed] = useState(0)
  const [result, setResult] = useState<{ blob: Blob; mimeType: string; durationMs: number } | null>(
    null,
  )
  const rec = useRef<MediaRecorder | null>(null)
  const stream = useRef<MediaStream | null>(null)
  const startedAt = useRef(0)
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined)
  const maxMs = opts.maxMs

  const cleanup = useCallback(() => {
    clearInterval(timer.current)
    stream.current?.getTracks().forEach((t) => t.stop())
    stream.current = null
  }, [])

  useEffect(
    () => () => {
      if (rec.current?.state === 'recording') rec.current.stop()
      cleanup()
    },
    [cleanup],
  )

  const stop = useCallback(() => {
    if (rec.current?.state === 'recording') rec.current.stop()
  }, [])

  const start = useCallback(async () => {
    setError(null)
    setResult(null)
    if (!recordingSupported()) {
      setState('error')
      setError('This browser can’t record audio. Try Chrome, Edge or Safari.')
      return
    }
    setState('requesting')
    try {
      stream.current = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true },
      })
    } catch {
      setState('error')
      setError(
        'Microphone access was blocked. Allow the microphone for this site in your browser settings, then try again.',
      )
      return
    }
    const mimeType = pickMime()
    const r = new MediaRecorder(stream.current, mimeType ? { mimeType } : undefined)
    const chunks: Blob[] = []
    r.ondataavailable = (e) => e.data.size && chunks.push(e.data)
    r.onstop = () => {
      const durationMs = Date.now() - startedAt.current
      const type = r.mimeType || mimeType || 'audio/webm'
      setResult({ blob: new Blob(chunks, { type }), mimeType: type, durationMs })
      setState('stopped')
      cleanup()
    }
    rec.current = r
    startedAt.current = Date.now()
    setElapsed(0)
    r.start(1000)
    setState('recording')
    timer.current = setInterval(() => {
      const ms = Date.now() - startedAt.current
      setElapsed(ms)
      if (maxMs && ms >= maxMs && r.state === 'recording') r.stop()
    }, 250)
  }, [cleanup, maxMs])

  return {
    state,
    error,
    elapsedMs,
    result,
    start,
    stop,
    reset: () => {
      setResult(null)
      setState('idle')
      setElapsed(0)
    },
  }
}

// ---------- Storage ----------

export async function saveRecording(r: Recording): Promise<void> {
  await idbSet('recordings', r.id, r)
}

export async function getRecording(id: string): Promise<Recording | undefined> {
  return idbGet<Recording>('recordings', id)
}

export async function deleteRecording(id: string): Promise<void> {
  await idbDelete('recordings', id)
}

/** All recordings for one piece of content, newest first. */
export async function recordingsFor(contentId: string): Promise<Recording[]> {
  const keys = await idbKeys('recordings')
  const all = await Promise.all(keys.map((k) => idbGet<Recording>('recordings', k)))
  return all
    .filter((r): r is Recording => !!r && r.contentId === contentId)
    .sort((a, b) => b.createdAt - a.createdAt)
}

// ---------- Conversion for grading ----------

function encodeWav(samples: Float32Array, sampleRate: number): ArrayBuffer {
  const buffer = new ArrayBuffer(44 + samples.length * 2)
  const view = new DataView(buffer)
  const write = (offset: number, s: string) =>
    [...s].forEach((c, i) => view.setUint8(offset + i, c.charCodeAt(0)))
  write(0, 'RIFF')
  view.setUint32(4, 36 + samples.length * 2, true)
  write(8, 'WAVE')
  write(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, 1, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * 2, true)
  view.setUint16(32, 2, true)
  view.setUint16(34, 16, true)
  write(36, 'data')
  view.setUint32(40, samples.length * 2, true)
  for (let i = 0; i < samples.length; i++) {
    const s = Math.max(-1, Math.min(1, samples[i]!))
    view.setInt16(44 + i * 2, s < 0 ? s * 0x8000 : s * 0x7fff, true)
  }
  return buffer
}

function toBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  const chunk = 0x8000
  for (let i = 0; i < bytes.length; i += chunk)
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk))
  return btoa(binary)
}

/** 16 kHz mono WAV as base64, plus a hash for caching. Falls back to the original audio. */
export async function audioForGrading(
  blob: Blob,
): Promise<{ base64: string; mimeType: string; hash: string }> {
  const original = await blob.arrayBuffer()
  const hash = await sha256(original)
  try {
    const Ctx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    const ctx = new Ctx()
    const decoded = await ctx.decodeAudioData(original.slice(0))
    void ctx.close()
    const rate = 16000
    const offline = new OfflineAudioContext(1, Math.ceil(decoded.duration * rate), rate)
    const src = offline.createBufferSource()
    src.buffer = decoded
    src.connect(offline.destination)
    src.start()
    const rendered = await offline.startRendering()
    return {
      base64: toBase64(encodeWav(rendered.getChannelData(0), rate)),
      mimeType: 'audio/wav',
      hash,
    }
  } catch {
    const type = blob.type.split(';')[0] || 'audio/webm'
    return { base64: toBase64(original), mimeType: type, hash }
  }
}
