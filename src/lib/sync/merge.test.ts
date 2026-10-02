import { describe, expect, it } from 'vitest'
import { applyLessonResult, applyReview, cardId } from '../learning'
import { addXp } from '../progress'
import { makeProfile } from '../storage/actions'
import { migrate } from '../storage/migrate'
import { defaultState, type AppState, type Profile } from '../storage/schema'
import {
  canonical,
  mergeDocs,
  mergeProfiles,
  parseDoc,
  serializeDoc,
  syncStep,
  toDoc,
} from './merge'

const DAY = 24 * 60 * 60 * 1000
const T0 = new Date(2026, 9, 1, 12).getTime()

const state = (profiles: Profile[], extra: Partial<AppState> = {}): AppState => ({
  ...defaultState(),
  profiles,
  ...extra,
})

/** Simulates a device: its own state, syncing against a shared remote doc. */
function sync(local: AppState, remote: string | null, joining = false) {
  const doc = remote ? parseDoc(remote).doc : { profiles: [], deleted: {} }
  const r = syncStep(local, doc, joining)
  return { local: r.state, remote: serializeDoc(r.doc) }
}

const lesson = (lessonId: string, vocab: string[]) => ({
  lessonId,
  score: 1,
  xp: 30,
  vocabIds: vocab,
  mistakeVocabIds: [],
})

describe('sync merge', () => {
  it('adds up XP earned on two devices without counting anything twice', () => {
    const base = makeProfile('Samer', '#000', T0)
    const laptop = addXp(base, 30, T0, 'laptop')
    const phone = addXp(addXp(base, 20, T0, 'phone'), 5, T0 + DAY, 'phone')

    const merged = mergeProfiles(laptop, phone)
    expect(merged.xp).toBe(55)
    expect(Object.values(merged.xpByDay)).toEqual([50, 5])
    expect(merged.streak.current).toBe(2)

    // Merging again (or the other way round) changes nothing.
    expect(canonical(mergeProfiles(merged, phone))).toBe(canonical(merged))
    expect(canonical(mergeProfiles(merged, laptop))).toBe(canonical(merged))
    expect(canonical(mergeProfiles(phone, laptop))).toBe(canonical(merged))
  })

  it('is commutative and idempotent for whole documents', () => {
    const a = makeProfile('Samer', '#000', T0)
    const b = makeProfile('Partner', '#111', T0 + 1)
    const x = state([applyLessonResult(a, lesson('u1-l1', ['hej', 'tack']), T0), b])
    const y = state([a, applyLessonResult(b, lesson('u1-l1', ['hej']), T0 + 5)], {
      deleted: { gone: T0 },
    })
    const xy = mergeDocs(toDoc(x), toDoc(y))
    expect(canonical(xy)).toBe(canonical(mergeDocs(toDoc(y), toDoc(x))))
    expect(canonical(mergeDocs(xy, toDoc(x)))).toBe(canonical(xy))
    expect(xy.profiles.map((p) => Object.keys(p.lessons))).toEqual(
      [a, b].sort((p, q) => (p.id < q.id ? -1 : 1)).map(() => ['u1-l1']),
    )
  })

  it('keeps the most recent review of a card', () => {
    const base = applyLessonResult(makeProfile('S', '#000', T0), lesson('l', ['hej']), T0)
    const later = applyReview(base, cardId('hej'), 'good', T0 + 2 * DAY)
    const earlier = applyReview(base, cardId('hej'), 'again', T0 + DAY)
    const merged = mergeProfiles(earlier, later)
    expect(merged.srs[cardId('hej')]).toEqual(later.srs[cardId('hej')])
  })

  it('remembers that a weak word was cleared on another device', () => {
    const base = applyLessonResult(
      makeProfile('S', '#000', T0),
      { ...lesson('l', ['hej']), mistakeVocabIds: ['hej'] },
      T0,
    )
    const cleared = applyReview(base, cardId('hej'), 'good', T0 + DAY)
    expect(cleared.mistakes.hej?.count).toBe(0)
    expect(mergeProfiles(base, cleared).mistakes.hej?.count).toBe(0)
  })

  it('takes the newest name and settings', () => {
    const p = makeProfile('Partner', '#111', T0)
    const renamed = { ...p, name: 'Sara', metaAt: T0 + 10 }
    const goal = {
      ...p,
      settings: { ...p.settings, dailyGoalMinutes: 20 as const },
      settingsAt: T0 + 5,
    }
    const merged = mergeProfiles(goal, renamed)
    expect(merged.name).toBe('Sara')
    expect(merged.settings.dailyGoalMinutes).toBe(20)
  })

  it('a reset wins over older progress from another device', () => {
    const p = applyLessonResult(makeProfile('S', '#000', T0), lesson('l', ['hej']), T0)
    const reset = { ...makeProfile('S', '#000', T0), id: p.id, resetAt: T0 + DAY }
    const merged = mergeProfiles(p, reset)
    expect(merged.xp).toBe(0)
    expect(merged.lessons).toEqual({})
  })

  it('deleted profiles stay deleted', () => {
    const a = makeProfile('A', '#000', T0)
    const b = makeProfile('B', '#111', T0)
    const doc = mergeDocs(toDoc(state([a, b])), toDoc(state([a], { deleted: { [b.id]: T0 } })))
    expect(doc.profiles.map((p) => p.id)).toEqual([a.id])
  })

  it('keeps per-device settings (voice, theme) out of the shared data', () => {
    const p = makeProfile('S', '#000', T0)
    p.settings = { ...p.settings, voiceURI: 'Alva', theme: 'dark' }
    const doc = toDoc(state([p]))
    expect(doc.profiles[0]?.settings.voiceURI).toBeNull()
    const { local } = sync(state([p]), serializeDoc(doc))
    expect(local.profiles[0]?.settings).toMatchObject({ voiceURI: 'Alva', theme: 'dark' })
  })
})

describe('two devices', () => {
  it('a new phone joins, matches profiles by name and sees all progress', () => {
    // Laptop: both learners have done some work.
    const samer = applyLessonResult(makeProfile('Samer', '#000', T0), lesson('u1-l1', ['hej']), T0)
    const partner = addXp(makeProfile('Partner', '#111', T0 + 1), 12, T0, 'laptop')
    let laptop = state([samer, partner], { activeProfileId: samer.id })
    let remote: string | null = null
    ;({ local: laptop, remote } = sync(laptop, remote))

    // Phone: fresh default profiles (different ids), plus some offline work as Samer.
    const phoneSamer = addXp(makeProfile('Samer', '#000', T0 + 50), 7, T0 + DAY, 'phone')
    const phonePartner = makeProfile('Partner', '#111', T0 + 51)
    let phone = state([phoneSamer, phonePartner], { activeProfileId: phoneSamer.id })
    ;({ local: phone, remote } = sync(phone, remote, true))

    expect(phone.profiles.map((p) => p.id)).toEqual([samer.id, partner.id])
    expect(phone.activeProfileId).toBe(samer.id)
    expect(phone.profiles[0]?.xp).toBe(samer.xp + 7)
    expect(phone.profiles[0]?.lessons['u1-l1']).toBeDefined()
    expect(phone.profiles[1]?.xp).toBe(12)

    // Back on the laptop, the phone's XP shows up too.
    ;({ local: laptop, remote } = sync(laptop, remote))
    expect(canonical(toDoc(laptop))).toBe(canonical(toDoc(phone)))

    // Nothing left to do: syncing again doesn't change the remote.
    const again = sync(phone, remote)
    expect(again.remote).toBe(remote)
  })

  it('drops untouched default profiles on a joining device', () => {
    const sara = makeProfile('Sara', '#111', T0)
    const remote = serializeDoc(toDoc(state([sara])))
    const fresh = state([
      makeProfile('Samer', '#000', T0 + 9),
      makeProfile('Partner', '#111', T0 + 9),
    ])
    const { local } = sync(fresh, remote, true)
    expect(local.profiles.map((p) => p.name)).toEqual(['Sara'])
  })

  it('migrates v1 data so existing XP is kept and merges safely', () => {
    const v1 = {
      version: 1,
      profiles: [{ id: 'p1', name: 'Samer', xp: 40, xpByDay: { '2026-09-30': 40 } }],
      activeProfileId: 'p1',
    }
    const a = migrate(structuredClone(v1))
    const b = migrate(structuredClone(v1))
    expect(a.profiles[0]?.xpDevices).toEqual({ 'legacy-p1': { '2026-09-30': 40 } })
    // The same old data migrated on two devices is still 40 XP, not 80.
    expect(mergeProfiles(a.profiles[0]!, b.profiles[0]!).xp).toBe(40)
  })
})
