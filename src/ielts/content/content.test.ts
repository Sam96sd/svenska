import { describe, expect, it } from 'vitest'
import { CATALOG } from './catalog'
import { contentFiles } from './index'
import {
  ListeningPartSchema,
  PassageSchema,
  screenOrder,
  SpeakingItemSchema,
  WritingTaskSchema,
  type ListeningPart,
  type Passage,
  type SpeakingItem,
  type WritingTask,
} from './schema'
import {
  britishSpellingIssues,
  validateListening,
  validatePassage,
  validateSpeaking,
  validateWritingTask,
} from './validate'

async function loadAll<T>(
  files: Record<string, () => Promise<{ default: unknown }>>,
  parse: (x: unknown) => T,
) {
  const out: Array<{ path: string; data: T }> = []
  for (const [path, load] of Object.entries(files))
    out.push({ path, data: parse((await load()).default) })
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

  it('has content to check', () => {
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

  it('catalog matches the content files', () => {
    const all = [
      ...passages.map(({ data }) => ({
        id: data.id,
        skill: 'reading',
        module: data.module,
        title: data.title,
        n: screenOrder(data.groups).length,
      })),
      ...parts.map(({ data }) => ({
        id: data.id,
        skill: 'listening',
        module: 'both',
        title: data.title,
        n: screenOrder(data.groups).length,
      })),
      ...writing.map(({ data }) => ({
        id: data.id,
        skill: 'writing',
        module: data.module,
        title: data.title,
        n: 1,
      })),
      ...speaking.map(({ data }) => ({
        id: data.id,
        skill: 'speaking',
        module: 'both',
        title:
          data.kind === 'part1' ? data.topic : (CATALOG.find((c) => c.id === data.id)?.title ?? ''),
        n: data.kind === 'part1' ? data.questions.length : 1 + data.part3.length,
      })),
    ]
    expect(new Set(CATALOG.map((c) => c.id)).size).toBe(CATALOG.length)
    for (const c of CATALOG) {
      const file = all.find((a) => a.id === c.id)
      expect(file, `catalog entry ${c.id} has no file`).toBeDefined()
      expect({ skill: c.skill, module: c.module, title: c.title, n: c.questions }).toEqual({
        skill: file!.skill,
        module: file!.module,
        title: file!.title,
        n: file!.n,
      })
    }
    for (const a of all)
      expect(
        CATALOG.some((c) => c.id === a.id),
        `${a.id} missing from catalog`,
      ).toBe(true)
  })

  it('flags American spellings', () => {
    expect(britishSpellingIssues('The colour of the centre')).toEqual([])
    expect(britishSpellingIssues('The color of the center')).toEqual(['color', 'center'])
  })
})
