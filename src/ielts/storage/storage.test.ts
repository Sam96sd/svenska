import { describe, expect, it } from 'vitest'
import { migrateIelts } from './migrate'
import { IELTS_VERSION, defaultIeltsProfile, type Attempt, type IeltsProfile } from './schema'
import {
  mergeIeltsDocs,
  mergeIeltsProfiles,
  parseIeltsDoc,
  remapIelts,
  serializeIeltsDoc,
} from './merge'

const attempt = (id: string, updatedAt: number, band: number | null = null): Attempt => ({
  id,
  kind: 'practice',
  skill: 'reading',
  contentId: 'p1',
  module: 'academic',
  startedAt: 1,
  finishedAt: 2,
  updatedAt,
  durationMs: 1,
  correct: 10,
  total: 13,
  band,
  bands: {},
  questions: [],
  criteria: {},
  text: null,
  task: null,
  feedbackKey: null,
  gradedBy: null,
})

const profile = (patch: Partial<IeltsProfile> = {}): IeltsProfile => ({
  ...defaultIeltsProfile(),
  ...patch,
})

describe('IELTS storage migration', () => {
  it('returns a fresh state for empty or garbage input', () => {
    for (const raw of [null, undefined, 42, 'x', [], { version: 'nope' }]) {
      const s = migrateIelts(raw)
      expect(s.version).toBe(IELTS_VERSION)
      expect(s.profiles).toEqual({})
    }
  })

  it('upgrades unversioned data and repairs bad fields', () => {
    const s = migrateIelts({
      profiles: {
        a: { settings: { module: 'general', targetBand: 'high' }, attempts: 'nope' },
        b: 'broken',
      },
    })
    expect(s.version).toBe(IELTS_VERSION)
    expect(s.profiles.a?.settings.module).toBe('general')
    expect(s.profiles.a?.settings.targetBand).toBe(8)
    expect(s.profiles.a?.attempts).toEqual({})
    // A profile that isn't an object at all is dropped; the others survive.
    expect(s.profiles.b).toBeUndefined()
  })

  it('keeps data written by a newer app version', () => {
    const s = migrateIelts({ version: IELTS_VERSION + 3, profiles: { a: profile() }, extra: 1 })
    expect(Object.keys(s.profiles)).toEqual(['a'])
  })

  it('round-trips a full profile unchanged', () => {
    const p = profile({ attempts: { x: attempt('x', 5, 7) }, lessonsDone: { l1: 3 } })
    p.settings.module = 'academic'
    const s = migrateIelts(JSON.parse(JSON.stringify({ version: 1, profiles: { a: p } })))
    expect(s.profiles.a).toEqual(p)
  })
})

describe('IELTS sync merge', () => {
  it('keeps every attempt and the newest version of each', () => {
    const a = profile({ attempts: { x: attempt('x', 1), y: attempt('y', 1) } })
    const b = profile({ attempts: { x: attempt('x', 9, 7.5), z: attempt('z', 2) } })
    const m = mergeIeltsProfiles(a, b)
    expect(Object.keys(m.attempts).sort()).toEqual(['x', 'y', 'z'])
    expect(m.attempts.x?.band).toBe(7.5)
  })

  it('is commutative and idempotent', () => {
    const a = profile({
      settingsAt: 5,
      lessonsDone: { l1: 4 },
      aiUsage: { d1: { '2026-11': 100 } },
    })
    a.settings.module = 'general'
    const b = profile({
      settingsAt: 2,
      lessonsDone: { l1: 2, l2: 8 },
      aiUsage: { d2: { '2026-11': 50 } },
    })
    const ab = mergeIeltsProfiles(a, b)
    const ba = mergeIeltsProfiles(b, a)
    expect(serializeIeltsDoc({ profiles: { p: ab } })).toBe(
      serializeIeltsDoc({ profiles: { p: ba } }),
    )
    expect(mergeIeltsProfiles(ab, ab)).toEqual(ab)
    expect(ab.settings.module).toBe('general')
    expect(ab.lessonsDone).toEqual({ l1: 2, l2: 8 })
    expect(ab.aiUsage).toEqual({ d1: { '2026-11': 100 }, d2: { '2026-11': 50 } })
  })

  it('lets a reset win but never forgets Pro spend', () => {
    const old = profile({ attempts: { x: attempt('x', 1) }, aiUsage: { d1: { '2026-11': 7 } } })
    const reset = profile({ resetAt: 10 })
    const m = mergeIeltsProfiles(old, reset)
    expect(m.attempts).toEqual({})
    expect(m.aiUsage).toEqual({ d1: { '2026-11': 7 } })
  })

  it('drops deleted learners', () => {
    const doc = mergeIeltsDocs(
      { profiles: { a: profile(), b: profile() } },
      { profiles: {} },
      { b: 1 },
    )
    expect(Object.keys(doc.profiles)).toEqual(['a'])
  })

  it('follows profile id changes from the Swedish sync', () => {
    const s = remapIelts(
      { version: 1, profiles: { old: profile({ lessonsDone: { l: 1 } }), gone: profile() } },
      new Map([
        ['old', 'new'],
        ['gone', null],
      ]),
    )
    expect(Object.keys(s.profiles)).toEqual(['new'])
    expect(s.profiles.new?.lessonsDone).toEqual({ l: 1 })
  })

  it('round-trips the sync file', () => {
    const doc = { profiles: { a: profile({ attempts: { x: attempt('x', 3) } }) } }
    const parsed = parseIeltsDoc(serializeIeltsDoc(doc))
    expect(parsed.newer).toBe(false)
    expect(parsed.doc).toEqual(doc)
    expect(() => parseIeltsDoc('{"kind":"other"}')).toThrow()
  })
})
