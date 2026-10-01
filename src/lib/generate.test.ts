import { describe, expect, it } from 'vitest'
import { type Vocab } from '../content/schema'
import { distractors, generateExercises, meanings } from './generate'
import { seededRng } from './random'

const v = (id: string, sv: string, en: string, extra: Partial<Vocab> = {}): Vocab => ({
  id,
  sv,
  en,
  pos: 'noun',
  gender: 'en',
  ...extra,
})

const words = [
  v('bil', 'bil', 'car'),
  v('hus', 'hus', 'house', { gender: 'ett' }),
  v('katt', 'katt', 'cat'),
  v('hund', 'hund', 'dog'),
  v('tala', 'tala', 'to speak', { pos: 'verb', gender: undefined }),
]

describe('generateExercises', () => {
  it('produces the requested number of exercises plus a match', () => {
    const g = generateExercises(words, [], 6, seededRng(1))
    const all = [...g.recognition, ...g.production]
    expect(all.length).toBe(6)
    expect(all.filter((e) => e.type === 'match')).toHaveLength(1)
  })

  it('always includes the answer among the choices, without duplicates', () => {
    const g = generateExercises(words, [], 10, seededRng(7))
    for (const e of [...g.recognition, ...g.production]) {
      if ('choices' in e) {
        expect(e.choices).toContain(e.answer)
        expect(new Set(e.choices).size).toBe(e.choices.length)
      }
    }
  })

  it('shows nouns with their article', () => {
    const g = generateExercises(words, [], 10, seededRng(3))
    const svChoices = [...g.recognition, ...g.production].flatMap((e) =>
      e.type === 'mcq' && e.promptLang === 'en' ? e.choices : [],
    )
    expect(
      svChoices.some(
        (c) =>
          c === 'ett hus' || c === 'en bil' || c === 'en katt' || c === 'en hund' || c === 'tala',
      ),
    ).toBe(true)
  })

  it('returns nothing when asked for nothing', () => {
    const g = generateExercises(words, [], 0)
    expect(g.recognition).toHaveLength(0)
    expect(g.production).toHaveLength(0)
  })
})

describe('distractors', () => {
  it('excludes words with the same meaning and prefers the same part of speech', () => {
    const pool = [...words, v('bil2', 'auto', 'car')]
    const d = distractors(words[0]!, pool, 3, seededRng(2))
    expect(d.map((x) => x.en)).not.toContain('car')
    expect(d.every((x) => x.pos === 'noun')).toBe(true)
  })
})

describe('meanings', () => {
  it('splits glosses and drops articles, "to" and notes', () => {
    expect([...meanings({ en: 'girl / young woman' })]).toEqual(['girl', 'young woman'])
    expect([...meanings({ en: 'to speak (formal)', enAlt: ['talk'] })]).toEqual(['speak', 'talk'])
  })

  it('never offers a distractor that shares a meaning with the answer', () => {
    const tjej = v('tjej', 'tjej', 'girl / young woman')
    const pool = [v('flicka', 'flicka', 'girl'), v('kvinna', 'kvinna', 'woman'), ...words]
    for (let seed = 0; seed < 20; seed++) {
      const d = distractors(tjej, pool, 3, seededRng(seed))
      expect(d.map((x) => x.id)).not.toContain('flicka')
    }
  })
})
