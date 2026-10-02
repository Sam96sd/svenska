import { streakFromDays, xpTotals } from '../progress'
import {
  ProfileSchema,
  STORAGE_VERSION,
  type AppState,
  type LessonProgress,
  type Mistake,
  type Profile,
  type Settings,
  type SrsCard,
} from '../storage/schema'

/*
 * Merging progress from several devices. Every rule is commutative and idempotent
 * (max, union, newest-wins with a deterministic tie-break), so devices that sync in any
 * order end up with the same data, and syncing twice changes nothing.
 */

/** What is shared between devices: everything except per-device choices. */
export interface SyncDoc {
  profiles: Profile[]
  deleted: Record<string, number>
}

export const SYNC_KIND = 'svenska-sync'

/** Settings that belong to the device, not the learner (voices differ per device). */
const SHARED_DEFAULTS: Pick<Settings, 'voiceURI' | 'theme'> = { voiceURI: null, theme: 'auto' }

/** JSON with sorted object keys, so equal data always gives the same string. */
export function canonical(value: unknown): string {
  return JSON.stringify(value, (_, v: unknown) =>
    v && typeof v === 'object' && !Array.isArray(v)
      ? Object.fromEntries(
          Object.entries(v as Record<string, unknown>).sort(([a], [b]) => (a < b ? -1 : 1)),
        )
      : v,
  )
}

const byId = (a: { id: string }, b: { id: string }) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)

export function toDoc(state: AppState): SyncDoc {
  return {
    profiles: state.profiles
      .map((p) => ({ ...p, settings: { ...p.settings, ...SHARED_DEFAULTS } }))
      .sort(byId),
    deleted: state.deleted,
  }
}

export const emptyDoc = (): SyncDoc => ({ profiles: [], deleted: {} })

export function serializeDoc(doc: SyncDoc): string {
  return canonical({ kind: SYNC_KIND, version: STORAGE_VERSION, ...doc })
}

export interface ParsedDoc {
  doc: SyncDoc
  /** Written by a newer version of the app: don't write back, or we'd drop what it added. */
  newer: boolean
}

export function parseDoc(text: string): ParsedDoc {
  const json = JSON.parse(text) as Record<string, unknown> | null
  if (!json || json.kind !== SYNC_KIND) throw new Error('The sync file is not Svenska data.')
  const profiles = Array.isArray(json.profiles)
    ? json.profiles.flatMap((p) => {
        const r = ProfileSchema.safeParse(p)
        return r.success ? [r.data] : []
      })
    : []
  const deleted: Record<string, number> = {}
  if (json.deleted && typeof json.deleted === 'object')
    for (const [id, at] of Object.entries(json.deleted))
      if (typeof at === 'number') deleted[id] = at
  return {
    doc: { profiles: profiles.sort(byId), deleted },
    newer: typeof json.version === 'number' && json.version > STORAGE_VERSION,
  }
}

/** Newest wins; on a tie the larger value wins, so both sides pick the same one. */
function newest<T>(a: T, aAt: number, b: T, bAt: number): T {
  if (aAt !== bAt) return aAt > bAt ? a : b
  return canonical(a) >= canonical(b) ? a : b
}

function mergeRecords<T>(
  a: Record<string, T>,
  b: Record<string, T>,
  pick: (x: T, y: T) => T,
): Record<string, T> {
  const out: Record<string, T> = { ...a }
  for (const [k, v] of Object.entries(b)) {
    const mine = out[k]
    out[k] = mine === undefined ? v : pick(mine, v)
  }
  return out
}

const mergeLesson = (x: LessonProgress, y: LessonProgress): LessonProgress => ({
  completedAt: Math.max(x.completedAt, y.completedAt),
  bestScore: Math.max(x.bestScore, y.bestScore),
  attempts: Math.max(x.attempts, y.attempts),
})

/** The card that was reviewed most recently (then: most reps, then: due soonest). */
function mergeCard(x: SrsCard, y: SrsCard): SrsCard {
  const key = (c: SrsCard) => [c.last ?? -1, c.reps, -c.due, -c.added]
  const kx = key(x)
  const ky = key(y)
  for (let i = 0; i < kx.length; i++) if (kx[i] !== ky[i]) return kx[i]! > ky[i]! ? x : y
  return newest(x, 0, y, 0)
}

const mergeMistake = (x: Mistake, y: Mistake): Mistake =>
  x.lastAt !== y.lastAt ? (x.lastAt > y.lastAt ? x : y) : x.count >= y.count ? x : y

const union = (a: string[], b: string[]) => [...new Set([...a, ...b])].sort()

export function mergeProfiles(a: Profile, b: Profile): Profile {
  const meta = newest(
    { name: a.name, color: a.color },
    a.metaAt,
    { name: b.name, color: b.color },
    b.metaAt,
  )
  const shared = {
    id: a.id,
    ...meta,
    metaAt: Math.max(a.metaAt, b.metaAt),
    settings: newest(a.settings, a.settingsAt, b.settings, b.settingsAt),
    settingsAt: Math.max(a.settingsAt, b.settingsAt),
    createdAt: Math.min(a.createdAt, b.createdAt),
  }

  // A reset on one device wipes the progress the other device still has.
  if (a.resetAt !== b.resetAt) {
    const winner = a.resetAt > b.resetAt ? a : b
    return { ...winner, ...shared }
  }

  const xpDevices = mergeRecords(a.xpDevices, b.xpDevices, (x, y) => mergeRecords(x, y, Math.max))
  const { xp, xpByDay } = xpTotals(xpDevices)
  return {
    ...shared,
    resetAt: a.resetAt,
    xp,
    xpByDay,
    xpDevices,
    streak: streakFromDays(xpByDay, Math.max(a.streak.longest, b.streak.longest)),
    lessons: mergeRecords(a.lessons, b.lessons, mergeLesson),
    srs: mergeRecords(a.srs, b.srs, mergeCard),
    mistakes: mergeRecords(a.mistakes, b.mistakes, mergeMistake),
    unlockedUnits: union(a.unlockedUnits, b.unlockedUnits),
    badges: union(a.badges, b.badges),
  }
}

export function mergeDocs(a: SyncDoc, b: SyncDoc): SyncDoc {
  const deleted = mergeRecords(a.deleted, b.deleted, Math.max)
  const profiles = new Map<string, Profile>()
  for (const p of [...a.profiles, ...b.profiles]) {
    if (deleted[p.id] !== undefined) continue
    const seen = profiles.get(p.id)
    profiles.set(p.id, seen ? mergeProfiles(seen, p) : p)
  }
  return { profiles: [...profiles.values()].sort(byId), deleted }
}

const sameName = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase()

/** A default profile that was created automatically and never used. */
const isPristine = (p: Profile) =>
  p.metaAt === 0 &&
  p.xp === 0 &&
  Object.keys(p.lessons).length === 0 &&
  Object.keys(p.srs).length === 0

/**
 * Lines local profiles up with the synced ones. Each device creates its own "Samer" and
 * "Partner" on first launch, with different ids; a local profile whose id the other side
 * doesn't know takes the id of the synced profile with the same name. When a device joins,
 * its untouched default profiles that have no synced counterpart are dropped.
 */
export function matchProfiles(local: AppState, remote: SyncDoc, joining: boolean): AppState {
  const localIds = new Set(local.profiles.map((p) => p.id))
  const remoteIds = new Set(remote.profiles.map((p) => p.id))
  const claimed = new Set<string>()
  const remap = new Map<string, string | null>()

  for (const p of local.profiles) {
    if (remoteIds.has(p.id) || remote.deleted[p.id] !== undefined) continue
    const twin = remote.profiles.find(
      (r) => !localIds.has(r.id) && !claimed.has(r.id) && sameName(r.name, p.name),
    )
    if (twin) {
      claimed.add(twin.id)
      remap.set(p.id, twin.id)
    } else if (joining && remote.profiles.length > 0 && isPristine(p)) {
      remap.set(p.id, null)
    }
  }
  if (remap.size === 0) return local

  const profiles = local.profiles.flatMap((p) => {
    if (!remap.has(p.id)) return [p]
    const id = remap.get(p.id)
    return id ? [{ ...p, id }] : []
  })
  const active = local.activeProfileId
  const activeProfileId = active && remap.has(active) ? (remap.get(active) ?? null) : active
  return { ...local, profiles, activeProfileId }
}

/**
 * The local state after taking in the merged doc: local profile order and per-device
 * settings are kept, new profiles are added at the end.
 */
export function applyDoc(local: AppState, doc: SyncDoc): AppState {
  const synced = new Map(doc.profiles.map((p) => [p.id, p]))
  const profiles: Profile[] = []
  for (const mine of local.profiles) {
    const p = synced.get(mine.id)
    if (!p) continue
    const { voiceURI, theme } = mine.settings
    profiles.push({ ...p, settings: { ...p.settings, voiceURI, theme } })
    synced.delete(mine.id)
  }
  profiles.push(...[...synced.values()].sort((a, b) => a.createdAt - b.createdAt))

  const activeProfileId =
    local.activeProfileId && profiles.some((p) => p.id === local.activeProfileId)
      ? local.activeProfileId
      : null
  return { ...local, profiles, deleted: doc.deleted, activeProfileId }
}

/** One full merge step: local state + remote doc → new local state and the doc to upload. */
export function syncStep(
  local: AppState,
  remote: SyncDoc,
  joining: boolean,
): { state: AppState; doc: SyncDoc } {
  const matched = matchProfiles(local, remote, joining)
  const doc = mergeDocs(toDoc(matched), remote)
  return { state: applyDoc(matched, doc), doc }
}
