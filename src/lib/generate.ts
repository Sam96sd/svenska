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

/** The separate meanings in an English gloss: "girl / young woman" → ["girl", "young woman"]. */
export function meanings(v: Pick<Vocab, 'en' | 'enAlt'>): Set<string> {
  return new Set(
    [v.en, ...(v.enAlt ?? [])]
      .flatMap((e) => e.split(/\/|,|;|\bor\b/))
      .map((m) =>
        m
          .toLowerCase()
          .replace(/\(.*?\)/g, '')
          .replace(/[’']/g, "'")
          .replace(/^\s*(to|a|an|the)\s+/, '')
          .trim(),
      )
      .filter(Boolean),
  )
}

const overlaps = (a: Set<string>, b: Set<string>) => [...a].some((m) => b.has(m))

/**
 * Up to `n` distractor words for `word`, preferring the same part of speech.
 * A distractor never shares a meaning or a spelling with the answer or with another distractor,
 * so there is always exactly one right choice.
 */
export function distractors(word: Vocab, pool: Vocab[], n: number, rng: Rng): Vocab[] {
  const candidates = [
    ...shuffle(
      pool.filter((v) => v.pos === word.pos),
      rng,
    ),
    ...shuffle(
      pool.filter((v) => v.pos !== word.pos),
      rng,
    ),
  ]
  const picked: Vocab[] = []
  const taken = [meanings(word)]
  const spellings = new Set([svDisplay(word).toLowerCase()])
  for (const v of candidates) {
    if (picked.length >= n) break
    if (v.id === word.id) continue
    const m = meanings(v)
    const sv = svDisplay(v).toLowerCase()
    if (spellings.has(sv) || taken.some((t) => overlaps(t, m))) continue
    picked.push(v)
    taken.push(m)
    spellings.add(sv)
  }
  return picked
}

/** Up to `max` words whose meanings and spellings don't overlap (so match pairs are unambiguous). */
function distinctWords(words: Vocab[], max: number): Vocab[] {
  const out: Vocab[] = []
  const taken: Set<string>[] = []
  const spellings = new Set<string>()
  for (const w of words) {
    if (out.length >= max) break
    const m = meanings(w)
    const sv = svDisplay(w).toLowerCase()
    if (spellings.has(sv) || taken.some((t) => overlaps(t, m))) continue
    out.push(w)
    taken.push(m)
    spellings.add(sv)
  }
  return out
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

  const pairs = distinctWords(sample(words, words.length, rng), 5)
  if (pairs.length >= 3) {
    out.recognition.push({
      type: 'match',
      pairs: pairs.map((v) => ({ sv: svDisplay(v), en: v.en })),
      vocab: pairs.map((w) => w.id),
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
