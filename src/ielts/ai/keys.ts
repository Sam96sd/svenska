import { useSyncExternalStore } from 'react'
import { listModels } from './gemini'
import { pickProModel, pickStandardModel, selectableModels, type Pick } from './models'

/**
 * Gemini settings per learner, kept on THIS device only (localStorage `ielts:ai:<profileId>`).
 * Keys are never synced, exported, logged or sent anywhere except Google's API.
 */

export interface Detected {
  pick: Pick | null
  /** Ids offered in the override menu, newest first. */
  models: string[]
  at: number
}

export interface AiConfig {
  /** Google AI Studio key from a project WITHOUT billing (free tier). */
  freeKey: string
  /** Optional key from a separate project WITH billing, used only for Pro grading. */
  premiumKey: string
  /** Manual model choices; null = automatic. */
  standardOverride: string | null
  proOverride: string | null
  standard: Detected | null
  pro: Detected | null
}

export const PRIVACY_NOTICE =
  'On the free tier, Google may use what you submit (essays, recordings) to improve its products.'

const PREFIX = 'ielts:ai:'

const EMPTY: AiConfig = Object.freeze({
  freeKey: '',
  premiumKey: '',
  standardOverride: null,
  proOverride: null,
  standard: null,
  pro: null,
}) as AiConfig

const cache = new Map<string, AiConfig>()
const listeners = new Set<() => void>()

function read(profileId: string): AiConfig {
  const hit = cache.get(profileId)
  if (hit) return hit
  let value = EMPTY
  try {
    const raw = localStorage.getItem(PREFIX + profileId)
    if (raw) {
      const p = JSON.parse(raw) as Partial<AiConfig>
      value = {
        freeKey: typeof p.freeKey === 'string' ? p.freeKey : '',
        premiumKey: typeof p.premiumKey === 'string' ? p.premiumKey : '',
        standardOverride: typeof p.standardOverride === 'string' ? p.standardOverride : null,
        proOverride: typeof p.proOverride === 'string' ? p.proOverride : null,
        standard: p.standard && typeof p.standard === 'object' ? p.standard : null,
        pro: p.pro && typeof p.pro === 'object' ? p.pro : null,
      }
    }
  } catch {
    // Unreadable: start empty.
  }
  cache.set(profileId, value)
  return value
}

function write(profileId: string, value: AiConfig) {
  cache.set(profileId, value)
  try {
    localStorage.setItem(PREFIX + profileId, JSON.stringify(value))
  } catch {
    // Storage blocked: the key works until the page is closed.
  }
  for (const l of listeners) l()
}

export function getAiConfig(profileId: string): AiConfig {
  return read(profileId)
}

export function updateAiConfig(profileId: string, patch: Partial<AiConfig>) {
  write(profileId, { ...read(profileId), ...patch })
}

/** Removes this device's keys for a learner (on delete, or "Remove keys"). */
export function forgetAiConfig(profileId: string) {
  cache.delete(profileId)
  try {
    if (localStorage.getItem(PREFIX + profileId) === null) return
    localStorage.removeItem(PREFIX + profileId)
  } catch {
    // Ignore.
  }
  for (const l of listeners) l()
}

export function useAiConfig(profileId: string): AiConfig {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => read(profileId),
  )
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (!e.key?.startsWith(PREFIX)) return
    cache.delete(e.key.slice(PREFIX.length))
    for (const l of listeners) l()
  })
}

/** The model to use for a tier: the manual choice if set, else the detected one. */
export function modelFor(config: AiConfig, tier: 'standard' | 'pro'): string | null {
  if (tier === 'standard') return config.standardOverride ?? config.standard?.pick?.id ?? null
  return config.proOverride ?? config.pro?.pick?.id ?? null
}

export const hasFreeKey = (c: AiConfig) => c.freeKey.trim().length > 0
export const hasPremiumKey = (c: AiConfig) => c.premiumKey.trim().length > 0

/** Lists the key's models and stores the automatic choice. */
export async function detectModels(
  profileId: string,
  tier: 'standard' | 'pro',
  signal?: AbortSignal,
): Promise<Detected> {
  const config = read(profileId)
  const key = tier === 'standard' ? config.freeKey : config.premiumKey
  const models = await listModels(key, signal)
  const pick = tier === 'standard' ? pickStandardModel(models) : pickProModel(models)
  const detected: Detected = {
    pick,
    models: selectableModels(models).map((m) => m.id),
    at: Date.now(),
  }
  updateAiConfig(profileId, tier === 'standard' ? { standard: detected } : { pro: detected })
  return detected
}

/** Rough format check, to catch obvious paste mistakes before calling Google. */
export function looksLikeGeminiKey(key: string): boolean {
  return /^AIza[0-9A-Za-z_-]{30,}$/.test(key.trim())
}
