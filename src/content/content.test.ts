import { describe, expect, it } from 'vitest'
import { tokenize } from '../exercises/tokenize'
import { buildSession } from '../features/lesson/session'
import { seededRng } from '../lib/random'
import { LessonContentSchema, UnitMetaSchema, type Exercise, type LessonContent } from './schema'

/*
 * Validates every unit and lesson against the Zod schemas plus cross-checks the
 * schemas can't express (unique ids, references, sensible exercise counts).
 * `npm test` runs this in CI, so invalid content never gets deployed.
 */

const metas = import.meta.glob('./units/*/meta.ts', { eager: true, import: 'default' })
const lessonFiles = import.meta.glob('./units/*/lesson-*.ts', { eager: true, import: 'default' })

const folderOf = (path: string) => path.split('/')[2]!

const units = Object.entries(metas).map(([path, raw]) => ({ folder: folderOf(path), raw }))
const lessons = Object.entries(lessonFiles).map(([path, raw]) => ({
  path,
  folder: folderOf(path),
  raw,
}))

describe('course content', () => {
  it('has units', () => {
    expect(units.length).toBeGreaterThan(0)
  })

  for (const u of units) {
    describe(u.folder, () => {
      it('meta is valid', () => {
        const r = UnitMetaSchema.safeParse(u.raw)
        expect(r.success, r.error?.message).toBe(true)
        expect(r.data?.id).toBe(u.folder)
      })
    })
  }

  for (const l of lessons) {
    it(`${l.path} is valid`, () => {
      const r = LessonContentSchema.safeParse(l.raw)
      expect(r.success, r.error?.message).toBe(true)
    })
  }

  const parsedUnits = units.map((u) => UnitMetaSchema.parse(u.raw))
  const parsedLessons = lessons.map((l) => ({ ...l, content: LessonContentSchema.parse(l.raw) }))

  it('unit numbers are unique and consecutive', () => {
    const numbers = parsedUnits.map((u) => u.number).sort((a, b) => a - b)
    expect(numbers).toEqual(numbers.map((_, i) => i + 1))
  })

  it('every lesson in a unit table of contents has a lesson file in that unit, and vice versa', () => {
    for (const u of parsedUnits) {
      const files = parsedLessons.filter((l) => l.folder === u.id).map((l) => l.content.id)
      expect(files.sort()).toEqual(u.lessons.map((l) => l.id).sort())
    }
  })

  it('lesson ids are unique', () => {
    const ids = parsedUnits.flatMap((u) => u.lessons.map((l) => l.id))
    expect(duplicates(ids)).toEqual([])
  })

  it('vocab ids are unique across the course', () => {
    const ids = parsedLessons.flatMap((l) => l.content.vocab.map((v) => v.id))
    expect(duplicates(ids)).toEqual([])
  })

  it('exercise vocab references point to existing words', () => {
    const known = new Set(parsedLessons.flatMap((l) => l.content.vocab.map((v) => v.id)))
    for (const l of parsedLessons) {
      for (const ex of l.content.exercises) {
        for (const id of ex.vocab ?? [])
          expect(known.has(id), `${l.content.id}: unknown vocab "${id}"`).toBe(true)
      }
    }
  })

  it('exercises are well-formed', () => {
    for (const l of parsedLessons) {
      l.content.exercises.forEach((ex, i) => {
        const where = `${l.content.id} exercise ${i + 1} (${ex.type})`
        for (const problem of exerciseProblems(ex)) expect.fail(`${where}: ${problem}`)
      })
    }
  })

  it('every lesson has 10–15 exercises once generated ones are added', () => {
    for (const l of parsedLessons) {
      const pool = parsedLessons
        .filter((x) => x.folder === l.folder)
        .flatMap((x) => x.content.vocab)
      for (const canSpeak of [true, false]) {
        const n = buildSession(l.content, pool, { canSpeak, rng: seededRng(1) }).length
        expect(
          n,
          `${l.content.id} (speech ${canSpeak ? 'on' : 'off'}) has ${n}`,
        ).toBeGreaterThanOrEqual(10)
        expect(n, `${l.content.id} has ${n}`).toBeLessThanOrEqual(16)
      }
    }
  })

  it('lessons introduce at most 12 new words', () => {
    for (const l of parsedLessons)
      expect(l.content.vocab.length, l.content.id).toBeLessThanOrEqual(12)
  })

  it('Swedish text has no stray spacing or placeholder text', () => {
    for (const l of parsedLessons) {
      for (const s of swedishStrings(l.content)) {
        expect(s, `${l.content.id}: "${s}"`).not.toMatch(/ {2,}|\s[,.!?]|TODO|xxx/i)
        expect(s, `${l.content.id}: "${s}" has leading/trailing space`).toBe(s.trim())
      }
    }
  })
})

function duplicates(items: string[]): string[] {
  return [...new Set(items.filter((x, i) => items.indexOf(x) !== i))]
}

function exerciseProblems(ex: Exercise): string[] {
  const problems: string[] = []
  if ('choices' in ex && new Set(ex.choices).size !== ex.choices.length)
    problems.push('duplicate choices')
  if (ex.type === 'minimalPair') {
    const sv = ex.options.map((o) => o.sv)
    if (new Set(sv).size !== sv.length)
      problems.push('minimal pair options must be spelled differently')
  }
  if (ex.type === 'match') {
    if (new Set(ex.pairs.map((p) => p.sv)).size !== ex.pairs.length)
      problems.push('duplicate Swedish in pairs')
    if (new Set(ex.pairs.map((p) => p.en)).size !== ex.pairs.length)
      problems.push('duplicate English in pairs')
  }
  if (ex.type === 'build') {
    const tokens = tokenize(ex.answer)
    if (tokens.length < 2) problems.push('build answers need at least two words')
    for (const d of ex.distractors ?? [])
      if (tokens.includes(d)) problems.push(`distractor "${d}" is part of the answer`)
  }
  if (ex.type === 'dialogueReply' && ex.lines.length === 0) problems.push('no lines')
  return problems
}

function swedishStrings(l: LessonContent): string[] {
  const out: string[] = []
  for (const v of l.vocab) out.push(v.sv, ...Object.values(v.forms ?? {}))
  for (const s of l.learn) for (const e of s.examples ?? []) out.push(e.sv)
  for (const line of l.dialogue?.lines ?? []) out.push(line.sv)
  for (const ex of l.exercises) {
    switch (ex.type) {
      case 'listen':
      case 'dictation':
        out.push(ex.audio)
        break
      case 'build':
      case 'type':
        if (ex.type === 'build' || ex.answerLang === 'sv') out.push(ex.answer)
        break
      case 'gap':
        out.push(ex.text, ...ex.choices)
        break
      case 'speak':
        out.push(ex.text)
        break
      case 'dialogueReply':
        out.push(...ex.lines.map((x) => x.sv), ...ex.choices)
        break
      case 'minimalPair':
        out.push(...ex.options.map((o) => o.sv))
        break
      case 'match':
        out.push(...ex.pairs.map((p) => p.sv))
        break
      case 'mcq':
        out.push(ex.promptLang === 'sv' ? ex.prompt : ex.answer)
        break
    }
  }
  return out
}
