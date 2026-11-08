import { GeminiError, GEMINI_API, listModels, withRetry } from '../ai/gemini'
import { getAiConfig } from '../ai/keys'
import { type ListeningPart } from '../content/schema'
import { idbGet, idbSet, sha256 } from '../storage/idb'

/*
 * Optional upgrade: render a listening part with Gemini's text-to-speech (free tier), which
 * sounds far more natural than device voices. Up to two speakers per request; parts with more
 * speakers keep using device voices. Rendered audio is cached in IndexedDB on this device.
 */

const ACCENT_NAME: Record<string, string> = {
  'en-GB': 'British',
  'en-AU': 'Australian',
  'en-US': 'American',
  'en-CA': 'Canadian',
  'en-NZ': 'New Zealand',
  'en-IE': 'Irish',
  'en-ZA': 'South African',
  'en-IN': 'Indian',
}
const VOICES = { f: ['Kore', 'Aoede', 'Leda'], m: ['Puck', 'Charon', 'Orus'] }

export function geminiTtsSupported(part: ListeningPart): boolean {
  return new Set(part.lines.map((l) => l.speaker)).size <= 2
}

let ttsModel: string | null = null

async function findTtsModel(key: string): Promise<string> {
  if (ttsModel) return ttsModel
  const models = await listModels(key)
  const ids = models
    .map((m) => m.id)
    .filter((id) => /^gemini-[\d.]+-flash.*tts/.test(id) && !/lite/.test(id))
  ids.sort((a, b) => (a < b ? 1 : -1))
  if (!ids[0]) throw new GeminiError('other', 'Your key has no Gemini text-to-speech model.')
  ttsModel = ids[0]
  return ttsModel
}

function pcmToWav(pcm: Uint8Array, rate = 24000): Blob {
  const header = new ArrayBuffer(44)
  const v = new DataView(header)
  const w = (o: number, s: string) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)))
  w(0, 'RIFF')
  v.setUint32(4, 36 + pcm.length, true)
  w(8, 'WAVE')
  w(12, 'fmt ')
  v.setUint32(16, 16, true)
  v.setUint16(20, 1, true)
  v.setUint16(22, 1, true)
  v.setUint32(24, rate, true)
  v.setUint32(28, rate * 2, true)
  v.setUint16(32, 2, true)
  v.setUint16(34, 16, true)
  w(36, 'data')
  v.setUint32(40, pcm.length, true)
  return new Blob([header, pcm as BlobPart], { type: 'audio/wav' })
}

/** Rendered audio for a part: from the device cache, or generated with the learner's free key. */
export async function geminiAudioFor(
  profileId: string,
  part: ListeningPart,
  signal?: AbortSignal,
): Promise<Blob> {
  const key = getAiConfig(profileId).freeKey.trim()
  if (!key) throw new GeminiError('auth', 'Add a free Gemini key in IELTS settings → AI first.')
  const cacheKey = `tts:${part.id}:${await sha256(JSON.stringify(part.lines))}`
  const cached = await idbGet<Blob>('tts', cacheKey)
  if (cached) return cached

  const speakers = part.speakers.filter((s) => part.lines.some((l) => l.speaker === s.id))
  const names = new Map(speakers.map((s) => [s.id, s.name.replace(/[^A-Za-z]/g, '') || s.id]))
  const used = { f: 0, m: 0 }
  const voiceFor = new Map(speakers.map((s) => [s.id, VOICES[s.gender][used[s.gender]++ % 3]!]))
  const style = speakers
    .map(
      (s) =>
        `${names.get(s.id)} speaks with a ${ACCENT_NAME[s.accent] ?? 'British'} English accent`,
    )
    .join('; ')
  const text = `Read this as a natural, clear recording for an English listening test, at a normal conversational pace. ${style}.\n\n${part.lines
    .map((l) => `${names.get(l.speaker)}: ${l.text}`)
    .join('\n')}`

  const speechConfig =
    speakers.length === 1
      ? { voiceConfig: { prebuiltVoiceConfig: { voiceName: voiceFor.get(speakers[0]!.id) } } }
      : {
          multiSpeakerVoiceConfig: {
            speakerVoiceConfigs: speakers.map((s) => ({
              speaker: names.get(s.id),
              voiceConfig: { prebuiltVoiceConfig: { voiceName: voiceFor.get(s.id) } },
            })),
          },
        }

  const model = await findTtsModel(key)
  const body = await withRetry(
    async () => {
      let res: Response
      try {
        res = await fetch(`${GEMINI_API}/models/${model}:generateContent`, {
          method: 'POST',
          signal,
          headers: { 'x-goog-api-key': key, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text }] }],
            generationConfig: { responseModalities: ['AUDIO'], speechConfig },
          }),
        })
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') throw e
        throw new GeminiError('network', 'Couldn’t reach Gemini. Check your internet connection.')
      }
      if (!res.ok) {
        const { toGeminiError } = await import('../ai/gemini')
        throw await toGeminiError(res)
      }
      return (await res.json()) as {
        candidates?: Array<{
          content?: { parts?: Array<{ inlineData?: { data?: string; mimeType?: string } }> }
        }>
      }
    },
    { signal },
  )
  const data = body.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data)?.inlineData
  if (!data?.data) throw new GeminiError('bad-response', 'Gemini returned no audio.')
  const bytes = Uint8Array.from(atob(data.data), (c) => c.charCodeAt(0))
  const rate = Number(/rate=(\d+)/.exec(data.mimeType ?? '')?.[1] ?? 24000)
  const blob = /wav|mpeg|mp3|ogg/.test(data.mimeType ?? '')
    ? new Blob([bytes], { type: data.mimeType })
    : pcmToWav(bytes, rate)
  await idbSet('tts', cacheKey, blob)
  return blob
}
