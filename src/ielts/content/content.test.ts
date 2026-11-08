import { describe, expect, it } from 'vitest'
import { contentFiles } from './index'
import {
  LessonSchema,
  ListeningPartSchema,
  PronSetSchema,
  VocabDeckSchema,
  PassageSchema,
  SpeakingItemSchema,
  WritingTaskSchema,
  type Lesson,
  type ListeningPart,
  type PronSet,
  type VocabDeck,
  type Passage,
  type SpeakingItem,
  type WritingTask,
} from './schema'
import {
  britishSpellingIssues,
  validateLesson,
  validatePronSet,
  validateVocabDeck,
  validateListening,
  validatePassage,
  validateSpeaking,
  validateWritingTask,
} from './validate'

/**
 * CONTENT_ONLY=reading/academic,lessons/ checks only matching files (handy while authoring).
 * Without it, every content file is checked.
 */
const only = (process.env.CONTENT_ONLY ?? '').split(',').filter(Boolean)
const selected = (path: string) => only.length === 0 || only.some((o) => path.includes(o))

async function loadAll<T>(
  files: Record<string, () => Promise<{ default: unknown }>>,
  parse: (x: unknown) => T,
) {
  const out: Array<{ path: string; data: T }> = []
  for (const [path, load] of Object.entries(files))
    if (selected(path)) out.push({ path, data: parse((await load()).default) })
  return out
}

describe('IELTS content', async () => {
  const passages = await loadAll<Passage>(contentFiles.reading, (x) => PassageSchema.parse(x))
  const parts = await loadAll<ListeningPart>(contentFiles.listening, (x) =>
    ListeningPartSchema.parse(x),
  )

  const writing = await loadAll<WritingTask>(contentFiles.writing, (x) =>
    WritingTaskSchema.parse(x),
  )
  const speaking = await loadAll<SpeakingItem>(contentFiles.speaking, (x) =>
    SpeakingItemSchema.parse(x),
  )

  for (const { path, data } of writing)
    it(`writing ${data.id} is valid`, () => {
      expect(contentFiles.idOf(path)).toBe(data.id)
      expect(validateWritingTask(data)).toEqual([])
    })

  for (const { path, data } of speaking)
    it(`speaking ${data.id} is valid`, () => {
      expect(contentFiles.idOf(path)).toBe(data.id)
      expect(validateSpeaking(data)).toEqual([])
    })

  const lessons = await loadAll<Lesson>(contentFiles.lessons, (x) => LessonSchema.parse(x))

  for (const { path, data } of lessons)
    it(`lesson ${data.id} is valid`, () => {
      expect(contentFiles.idOf(path)).toBe(data.id)
      expect(validateLesson(data)).toEqual([])
    })

  const decks = await loadAll<VocabDeck>(contentFiles.vocab, (x) => VocabDeckSchema.parse(x))
  for (const { path, data } of decks)
    it(`vocabulary deck ${data.id} is valid`, () => {
      expect(contentFiles.idOf(path)).toBe(data.id)
      expect(validateVocabDeck(data)).toEqual([])
    })

  const pron = await loadAll<PronSet>(contentFiles.pronunciation, (x) => PronSetSchema.parse(x))
  for (const { path, data } of pron)
    it(`pronunciation set ${data.id} is valid`, () => {
      expect(contentFiles.idOf(path)).toBe(data.id)
      expect(validatePronSet(data)).toEqual([])
    })

  it.skipIf(only.length > 0)('has content to check', () => {
    expect(passages.length).toBeGreaterThan(0)
    expect(parts.length).toBeGreaterThan(0)
  })

  for (const { path, data } of passages)
    it(`reading ${data.id} is valid and its answer keys check out`, () => {
      expect(contentFiles.idOf(path)).toBe(data.id)
      expect(validatePassage(data)).toEqual([])
    })

  for (const { path, data } of parts)
    it(`listening ${data.id} is valid and its answer keys check out`, () => {
      expect(contentFiles.idOf(path)).toBe(data.id)
      expect(validateListening(data)).toEqual([])
    })

  it('flags American spellings', () => {
    expect(britishSpellingIssues('The colour of the centre')).toEqual([])
    expect(britishSpellingIssues('The color of the center')).toEqual(['color', 'center'])
  })
})
