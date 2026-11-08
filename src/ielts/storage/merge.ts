import { canonical, mergeCard, mergeRecords, newest } from '../../lib/sync/merge'
import {
  IELTS_VERSION,
  IeltsProfileSchema,
  type Attempt,
  type ErrorEntry,
  type IeltsProfile,
  type IeltsState,
} from './schema'

/*
 * Merging IELTS progress between devices, in a second file of the same sync gist.
 * Same rules as the Swedish data: every step is commutative and idempotent, so devices
 * syncing in any order end up equal, and syncing twice changes nothing.
 */

export const IELTS_SYNC_KIND = 'svenska-ielts-sync'

export interface IeltsDoc {
  profiles: Record<string, IeltsProfile>
}

export const emptyIeltsDoc = (): IeltsDoc => ({ profiles: {} })

export function toIeltsDoc(state: IeltsState): IeltsDoc {
  return { profiles: state.profiles }
}

export function serializeIeltsDoc(doc: IeltsDoc): string {
  return canonical({ kind: IELTS_SYNC_KIND, version: IELTS_VERSION, ...doc })
}

export function parseIeltsDoc(text: string): { doc: IeltsDoc; newer: boolean } {
  const json = JSON.parse(text) as Record<string, unknown> | null
  if (!json || json.kind !== IELTS_SYNC_KIND)
    throw new Error('The IELTS sync file is not Svenska data.')
  const profiles: Record<string, IeltsProfile> = {}
  if (json.profiles && typeof json.profiles === 'object')
    for (const [id, p] of Object.entries(json.profiles as Record<string, unknown>)) {
      const r = IeltsProfileSchema.safeParse(p)
      if (r.success) profiles[id] = r.data
    }
  return {
    doc: { profiles },
    newer: typeof json.version === 'number' && json.version > IELTS_VERSION,
  }
}

const byUpdate = <T extends Attempt | ErrorEntry>(x: T, y: T): T =>
  newest(x, x.updatedAt, y, y.updatedAt)

export function mergeIeltsProfiles(a: IeltsProfile, b: IeltsProfile): IeltsProfile {
  const shared = {
    settings: newest(a.settings, a.settingsAt, b.settings, b.settingsAt),
    settingsAt: Math.max(a.settingsAt, b.settingsAt),
    // Spend is real money: never lose it to a reset.
    aiUsage: mergeRecords(a.aiUsage, b.aiUsage, (x, y) => mergeRecords(x, y, Math.max)),
  }

  if (a.resetAt !== b.resetAt) {
    const winner = a.resetAt > b.resetAt ? a : b
    return { ...winner, ...shared }
  }

  const plan =
    a.plan && b.plan
      ? newest(a.plan, a.plan.updatedAt, b.plan, b.plan.updatedAt)
      : (a.plan ?? b.plan)
  const mergedPlan =
    a.plan && b.plan && plan && a.plan.startedAt === b.plan.startedAt
      ? { ...plan, done: mergeRecords(a.plan.done, b.plan.done, Math.max) }
      : plan

  return {
    ...shared,
    resetAt: a.resetAt,
    attempts: mergeRecords(a.attempts, b.attempts, byUpdate),
    errors: mergeRecords(a.errors, b.errors, byUpdate),
    srs: mergeRecords(a.srs, b.srs, mergeCard),
    lessonsDone: mergeRecords(a.lessonsDone, b.lessonsDone, Math.min),
    plan: mergedPlan,
  }
}

/** Merge two docs; profiles in `deleted` (from the Swedish sync data) are dropped. */
export function mergeIeltsDocs(
  a: IeltsDoc,
  b: IeltsDoc,
  deleted: Record<string, number> = {},
): IeltsDoc {
  const profiles: Record<string, IeltsProfile> = {}
  for (const [id, p] of [...Object.entries(a.profiles), ...Object.entries(b.profiles)]) {
    if (deleted[id] !== undefined) continue
    const seen = profiles[id]
    profiles[id] = seen ? mergeIeltsProfiles(seen, p) : p
  }
  // Sorted keys, so equal data serialises the same way.
  return {
    profiles: Object.fromEntries(Object.entries(profiles).sort(([x], [y]) => (x < y ? -1 : 1))),
  }
}

/**
 * Follow profile id changes made by the Swedish sync (a local "Samer" taking the id of the
 * synced "Samer"). Data under a dropped id (an untouched default learner that a joining
 * device throws away) goes with it.
 */
export function remapIelts(state: IeltsState, remap: Map<string, string | null>): IeltsState {
  if (remap.size === 0) return state
  const profiles: Record<string, IeltsProfile> = {}
  for (const [id, p] of Object.entries(state.profiles)) {
    if (!remap.has(id)) {
      profiles[id] = profiles[id] ? mergeIeltsProfiles(profiles[id], p) : p
      continue
    }
    const to = remap.get(id)
    if (!to) continue
    profiles[to] = profiles[to] ? mergeIeltsProfiles(profiles[to], p) : p
  }
  return { ...state, profiles }
}

export function ieltsSyncStep(
  local: IeltsState,
  remote: IeltsDoc,
  remap: Map<string, string | null>,
  deleted: Record<string, number>,
): { state: IeltsState; doc: IeltsDoc } {
  const mapped = remapIelts(local, remap)
  const doc = mergeIeltsDocs(toIeltsDoc(mapped), remote, deleted)
  return { state: { ...mapped, profiles: doc.profiles }, doc }
}
