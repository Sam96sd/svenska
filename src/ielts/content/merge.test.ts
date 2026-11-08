import { describe, expect, it } from 'vitest'
import { contentFiles } from './index'
import { mergeListening, mergeReading } from './merge'
import { MOCKS } from './mocks'
import {
  ListeningPartSchema,
  PassageSchema,
  screenOrder,
  type ListeningPart,
  type Passage,
} from './schema'
import { validateListening, validatePassage } from './validate'

async function byId<T>(
  files: Record<string, () => Promise<{ default: unknown }>>,
  parse: (x: unknown) => T,
) {
  const out = new Map<string, T>()
  for (const [path, load] of Object.entries(files))
    out.set(contentFiles.idOf(path), parse((await load()).default))
  return out
}

describe('full mock tests', async () => {
  const parts = await byId<ListeningPart>(contentFiles.listening, (x) =>
    ListeningPartSchema.parse(x),
  )
  const passages = await byId<Passage>(contentFiles.reading, (x) => PassageSchema.parse(x))

  for (const m of MOCKS) {
    it(`${m.id}: listening merges into 40 questions in order, with valid keys`, () => {
      const merged = mergeListening(
        `${m.id}-listening`,
        m.title,
        m.listening.map((id) => parts.get(id)!),
      )
      expect(screenOrder(merged.groups)).toEqual(Array.from({ length: 40 }, (_, i) => i + 1))
      expect(validateListening(merged)).toEqual([])
    })

    it(`${m.id}: reading merges into 40 questions with valid keys`, () => {
      const merged = mergeReading(
        `${m.id}-reading`,
        m.title,
        m.reading.map((id) => passages.get(id)!),
      )
      expect([...screenOrder(merged.groups)].sort((a, b) => a - b)).toEqual(
        Array.from({ length: 40 }, (_, i) => i + 1),
      )
      // The merged section is long by design; every other check must still pass.
      expect(validatePassage(merged).filter((p) => !p.includes('academic passage has'))).toEqual([])
    })
  }
})
