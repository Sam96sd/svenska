import { addXp } from '../progress'
import {
  AVATAR_COLORS,
  defaultSettings,
  type AppState,
  type Profile,
  type Settings,
} from './schema'
import { store } from './store'

function newId(): string {
  return typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `p-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

export function makeProfile(name: string, color: string, now = Date.now()): Profile {
  return {
    id: newId(),
    name: name.trim() || 'Learner',
    color,
    createdAt: now,
    settings: defaultSettings(),
    xp: 0,
    xpByDay: {},
    streak: { current: 0, longest: 0, lastDay: null },
    lessons: {},
    srs: {},
    mistakes: {},
    unlockedUnits: [],
    badges: [],
  }
}

/** First launch: create the two default profiles. */
export function ensureDefaultProfiles() {
  if (store.get().profiles.length > 0) return
  store.set((s) => ({
    ...s,
    profiles: [makeProfile('Samer', AVATAR_COLORS[0]), makeProfile('Partner', AVATAR_COLORS[1])],
  }))
}

export function addProfile(name: string, color: string): Profile {
  const profile = makeProfile(name, color)
  store.set((s) => ({ ...s, profiles: [...s.profiles, profile] }))
  return profile
}

export function setActiveProfile(id: string | null) {
  store.set((s) => ({ ...s, activeProfileId: id }))
}

export function updateProfile(id: string, fn: (p: Profile) => Profile) {
  store.set((s) => mapProfile(s, id, fn))
}

export function renameProfile(id: string, name: string, color: string) {
  updateProfile(id, (p) => ({ ...p, name: name.trim() || p.name, color }))
}

export function deleteProfile(id: string) {
  store.set((s) => ({
    ...s,
    profiles: s.profiles.filter((p) => p.id !== id),
    activeProfileId: s.activeProfileId === id ? null : s.activeProfileId,
  }))
}

/** Wipe progress but keep name, color and settings. */
export function resetProfile(id: string) {
  updateProfile(id, (p) => ({
    ...makeProfile(p.name, p.color, p.createdAt),
    id: p.id,
    settings: p.settings,
  }))
}

export function updateSettings(id: string, patch: Partial<Settings>) {
  updateProfile(id, (p) => ({ ...p, settings: { ...p.settings, ...patch } }))
}

export function awardXp(id: string, amount: number) {
  updateProfile(id, (p) => addXp(p, amount))
}

function mapProfile(s: AppState, id: string, fn: (p: Profile) => Profile): AppState {
  let changed = false
  const profiles = s.profiles.map((p) => {
    if (p.id !== id) return p
    changed = true
    return fn(p)
  })
  return changed ? { ...s, profiles } : s
}
