import { svDisplay } from '../content/display'
import { type Exercise, type Vocab } from '../content/schema'
import { sample, shuffle, type Rng } from './random'

/*
 * Auto-generated vocabulary exercises. Hand-authored exercises always come first;
 * these top a lesson up with recognition (match, meaning, listening) and
 * production (pick or type the Swedish) practice for the lesson's new words.
 */

export interface Generated {
  recognition: Exercise[]
  production: Exercise[]
}

const same = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase()

/** Up to `n` distractor words for `word`, preferring the same part of speech. */
export function distractors(word: Vocab, pool: Vocab[], n: number, rng: Rng): Vocab[] {
  const usable = uniqueBy(
    pool.filter(
      (v) => v.id !== word.id && !same(v.en, word.en) && !same(svDisplay(v), svDisplay(word)),
    ),
    (v) => v.en.toLowerCase(),
  )
  const samePos = shuffle(
    usable.filter((v) => v.pos === word.pos),
    rng,
  )
  const other = shuffle(
    usable.filter((v) => v.pos !== word.pos),
    rng,
  )
  return [...samePos, ...other].slice(0, n)
}

function uniqueBy<T>(items: T[], key: (t: T) => string): T[] {
  const seen = new Set<string>()
  return items.filter((t) => {
    const k = key(t)
    if (seen.has(k)) return false
    seen.add(k)
    return true
  })
}

type Kind = 'meaning' | 'listen' | 'pick-sv' | 'type'

function make(kind: Kind, word: Vocab, pool: Vocab[], rng: Rng): Exercise | null {
  const others = distractors(word, pool, 3, rng)
  if (kind !== 'type' && others.length < 2) return null
  const sv = svDisplay(word)
  const vocab = [word.id]
  switch (kind) {
    case 'meaning':
      return {
        type: 'mcq',
        prompt: sv,
        promptLang: 'sv',
        question: 'What does this mean?',
        choices: shuffle([word.en, ...others.map((o) => o.en)], rng),
        answer: word.en,
        vocab,
      }
    case 'listen':
      return {
        type: 'listen',
        audio: sv,
        question: 'What did you hear?',
        choices: shuffle([word.en, ...others.map((o) => o.en)], rng),
        answer: word.en,
        vocab,
      }
    case 'pick-sv':
      return {
        type: 'mcq',
        prompt: word.en,
        promptLang: 'en',
        question: 'How do you say this in Swedish?',
        choices: shuffle([sv, ...others.map(svDisplay)], rng),
        answer: sv,
        vocab,
      }
    case 'type':
      return {
        type: 'type',
        prompt: word.en,
        promptLang: 'en',
        question: 'Write this in Swedish',
        answer: sv,
        answerLang: 'sv',
        accept: [word.sv, ...(word.alt ?? [])],
        hint: word.pos === 'noun' ? `Include the article: en or ett` : undefined,
        vocab,
      }
  }
}

export function generateExercises(
  words: Vocab[],
  pool: Vocab[],
  count: number,
  rng: Rng = Math.random,
): Generated {
  const out: Generated = { recognition: [], production: [] }
  if (count <= 0 || words.length === 0) return out

  const fullPool = uniqueBy([...words, ...pool], (v) => v.id)

  if (words.length >= 3) {
    out.recognition.push({
      type: 'match',
      pairs: sample(words, Math.min(5, words.length), rng).map((v) => ({
        sv: svDisplay(v),
        en: v.en,
      })),
      vocab: words.map((w) => w.id),
    })
  }

  const kinds: Kind[] = ['meaning', 'listen', 'pick-sv', 'type']
  const order = shuffle(words, rng)
  let k = 0
  let attempts = 0
  while (out.recognition.length + out.production.length < count && attempts < count * 4) {
    const word = order[attempts % order.length]!
    let kind = kinds[k % kinds.length]!
    // Long phrases are hard to type from memory this early; pick them instead.
    if (kind === 'type' && word.sv.split(' ').length > 3) kind = 'pick-sv'
    const ex = make(kind, word, fullPool, rng)
    if (ex) (kind === 'meaning' || kind === 'listen' ? out.recognition : out.production).push(ex)
    k++
    attempts++
  }
  return out
}
