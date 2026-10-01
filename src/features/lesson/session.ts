import { svDisplay } from '../../content/display'
import { type Exercise, type Lesson, type Vocab } from '../../content/schema'
import { normalize } from '../../lib/answer'
import { generateExercises } from '../../lib/generate'
import { type Rng } from '../../lib/random'

export const TARGET_EXERCISES = 12
export const MAX_RETRIES = 2

export interface QueueItem {
  key: string
  exercise: Exercise
  /** 0 the first time; wrong answers come back at the end with retry + 1. */
  retry: number
  /** Index into the original list (for scoring first attempts). */
  origin: number
}

/**
 * Lesson practice: generated recognition practice first (match, meaning, listening),
 * then the hand-authored exercises, then generated production practice (pick / type Swedish).
 */
export function buildSession(
  lesson: Pick<Lesson, 'exercises' | 'vocab' | 'generate'>,
  pool: Vocab[],
  opts: { canSpeak: boolean; rng?: Rng },
): Exercise[] {
  const authored = lesson.exercises.filter((e) => e.type !== 'speak' || opts.canSpeak)
  const count = lesson.generate ?? Math.max(0, TARGET_EXERCISES - authored.length)
  const gen = generateExercises(lesson.vocab, pool, count, opts.rng)
  return [...gen.recognition, ...authored, ...gen.production]
}

export function toQueue(exercises: Exercise[]): QueueItem[] {
  return exercises.map((exercise, i) => ({ key: `e${i}`, exercise, retry: 0, origin: i }))
}

/** Vocab ids an exercise practises: explicit `vocab`, else words that appear in its answer. */
export function vocabFor(ex: Exercise, words: Vocab[]): string[] {
  if (ex.vocab?.length) return ex.vocab
  const haystack = ` ${normalize(answerText(ex))} `
  return words
    .filter((w) => {
      const forms = [w.sv, svDisplay(w), ...Object.values(w.forms ?? {})].map((f) => normalize(f))
      return forms.some((f) => f && haystack.includes(` ${f} `))
    })
    .map((w) => w.id)
}

function answerText(ex: Exercise): string {
  switch (ex.type) {
    case 'mcq':
      return ex.promptLang === 'sv' ? ex.prompt : ex.answer
    case 'listen':
    case 'dictation':
      return ex.audio
    case 'type':
    case 'build':
    case 'dialogueReply':
    case 'minimalPair':
      return ex.answer
    case 'gap':
      return ex.text.replace('___', ex.answer)
    case 'speak':
      return ex.text
    case 'match':
      return ex.pairs.map((p) => p.sv).join(' ')
  }
}
