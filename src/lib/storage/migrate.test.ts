import { describe, expect, it } from 'vitest'
import { makeProfile } from './actions'
import { migrate } from './migrate'
import { STORAGE_VERSION } from './schema'

describe('migrate', () => {
  it('returns a fresh state for empty or garbage input', () => {
    for (const raw of [null, undefined, 42, 'x', [], { version: 'nope' }]) {
      const s = migrate(raw)
      expect(s.version).toBe(STORAGE_VERSION)
      expect(s.profiles).toEqual([])
      expect(s.activeProfileId).toBeNull()
    }
  })

  it('upgrades unversioned (v0) data', () => {
    const p = makeProfile('Samer', '#000')
    const s = migrate({ profiles: [p], activeProfileId: p.id })
    expect(s.version).toBe(STORAGE_VERSION)
    expect(s.profiles[0]?.name).toBe('Samer')
    expect(s.activeProfileId).toBe(p.id)
  })

  it('fills in missing and invalid fields with defaults', () => {
    const s = migrate({
      version: 1,
      profiles: [
        { id: 'a', name: 'Sara', xp: 'lots', settings: { theme: 'neon', dailyGoalMinutes: 20 } },
      ],
      activeProfileId: 'a',
    })
    const p = s.profiles[0]!
    expect(p.xp).toBe(0)
    expect(p.settings.theme).toBe('auto')
    expect(p.settings.dailyGoalMinutes).toBe(20)
    expect(p.srs).toEqual({})
    expect(p.streak).toEqual({ current: 0, longest: 0, lastDay: null })
  })

  it('drops broken profiles but keeps valid ones', () => {
    const good = makeProfile('A', '#111')
    const s = migrate({ version: 1, profiles: [{ nope: true }, good], activeProfileId: 'missing' })
    expect(s.profiles.map((p) => p.id)).toEqual([good.id])
    expect(s.activeProfileId).toBeNull()
  })

  it('keeps data written by a newer app version', () => {
    const p = makeProfile('A', '#111')
    const s = migrate({
      version: STORAGE_VERSION + 5,
      profiles: [p],
      activeProfileId: p.id,
      future: 1,
    })
    expect(s.profiles).toHaveLength(1)
  })

  it('round-trips a full profile unchanged', () => {
    const p = { ...makeProfile('A', '#111'), xp: 120, xpByDay: { '2026-01-02': 120 } }
    p.srs = { 'v:hej': { ease: 2.5, interval: 3, reps: 2, lapses: 0, due: 5, last: 1, added: 0 } }
    const s = migrate(
      JSON.parse(JSON.stringify({ version: 1, profiles: [p], activeProfileId: null })),
    )
    expect(s.profiles[0]).toEqual(p)
  })
})
