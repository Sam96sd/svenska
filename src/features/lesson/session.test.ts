import { describe, expect, it } from 'vitest'
import { type Exercise, type Vocab } from '../../content/schema'
import { seededRng } from '../../lib/random'
import { buildSession, vocabFor } from './session'

const vocab: Vocab[] = [
  { id: 'hej', sv: 'hej', en: 'hi', pos: 'interjection' },
  { id: 'tack', sv: 'tack', en: 'thanks', pos: 'interjection' },
  { id: 'bil', sv: 'bil', en: 'car', pos: 'noun', gender: 'en', forms: { definite: 'bilen' } },
  { id: 'heta', sv: 'heta', en: 'to be called', pos: 'verb', forms: { present: 'heter' } },
]

const authored: Exercise[] = [
  { type: 'speak', text: 'Hej!', en: 'Hi!' },
  { type: 'build', prompt: 'My name is Anna', answer: 'Jag heter Anna.' },
]

describe('buildSession', () => {
  it('drops speaking exercises when the device cannot listen', () => {
    const s = buildSession({ exercises: authored, vocab }, [], {
      canSpeak: false,
      rng: seededRng(1),
    })
    expect(s.some((e) => e.type === 'speak')).toBe(false)
  })

  it('tops up to the target count with generated exercises around the authored ones', () => {
    const s = buildSession({ exercises: authored, vocab }, [], {
      canSpeak: true,
      rng: seededRng(1),
    })
    expect(s.length).toBe(12)
    expect(s[0]?.type).toBe('match')
    expect(s).toContain(authored[1])
  })

  it('respects an explicit generate count', () => {
    const s = buildSession({ exercises: authored, vocab, generate: 0 }, [], { canSpeak: true })
    expect(s).toEqual(authored)
  })
})

describe('vocabFor', () => {
  it('uses explicit vocab ids', () => {
    expect(vocabFor({ type: 'speak', text: 'x', en: 'y', vocab: ['tack'] }, vocab)).toEqual([
      'tack',
    ])
  })
  it('finds words and inflected forms in the answer', () => {
    expect(vocabFor(authored[1]!, vocab)).toEqual(['heta'])
    expect(vocabFor({ type: 'dictation', audio: 'Bilen är här.' }, vocab)).toEqual(['bil'])
    expect(
      vocabFor(
        { type: 'gap', text: '___, jag heter Sam.', choices: ['Hej', 'Tack'], answer: 'Hej' },
        vocab,
      ),
    ).toEqual(['hej', 'heta'])
  })
})
