/// <reference types="node" />
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { catalogFromContent, lessonsMeta } from './catalogBuild'
import { contentFiles } from './index'
import { DIAGNOSTIC } from './diagnostic'
import {
  LessonSchema,
  ListeningPartSchema,
  PassageSchema,
  SpeakingItemSchema,
  WritingTaskSchema,
} from './schema'

/**
 * The catalog is generated from the content files. Run `npm run catalog` to update it;
 * this test fails when it is out of date.
 */
const FILE = join(__dirname, 'catalog.generated.json')

async function all<T>(
  files: Record<string, () => Promise<{ default: unknown }>>,
  parse: (x: unknown) => T,
) {
  const out: T[] = []
  for (const load of Object.values(files)) out.push(parse((await load()).default))
  return out
}

describe('catalog', () => {
  it('is up to date with the content files', async () => {
    const items = catalogFromContent({
      passages: await all(contentFiles.reading, (x) => PassageSchema.parse(x)),
      parts: await all(contentFiles.listening, (x) => ListeningPartSchema.parse(x)),
      writing: await all(contentFiles.writing, (x) => WritingTaskSchema.parse(x)),
      speaking: await all(contentFiles.speaking, (x) => SpeakingItemSchema.parse(x)),
    })
    const lessons = lessonsMeta(await all(contentFiles.lessons, (x) => LessonSchema.parse(x)))
    const json = `${JSON.stringify({ items, lessons }, null, 2)}\n`
    if (process.env.UPDATE_CATALOG) writeFileSync(FILE, json)
    expect(
      readFileSync(FILE, 'utf8').replace(/\r\n/g, '\n'),
      'Run `npm run catalog` to update the catalog',
    ).toBe(json)

    // Every lesson's drills must exist and be marked as drills.
    for (const l of lessons)
      for (const d of l.drills) {
        const item = items.find((i) => i.id === d)
        expect(item, `lesson ${l.id}: drill ${d} not found`).toBeDefined()
        expect(item!.use, `lesson ${l.id}: ${d} should have use: "drill"`).toBe('drill')
      }
  })

  it('diagnostic content exists', async () => {
    const generated = (await import('./catalog.generated.json')).default as {
      items: Array<{ id: string }>
    }
    const ids = [
      DIAGNOSTIC.listening,
      DIAGNOSTIC.reading.academic,
      DIAGNOSTIC.reading.general,
      DIAGNOSTIC.writing,
      DIAGNOSTIC.speaking,
    ]
    for (const id of ids)
      expect(
        generated.items.some((i) => i.id === id),
        `diagnostic item ${id} missing`,
      ).toBe(true)
  })
})
