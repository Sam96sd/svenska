import { AppStateSchema, STORAGE_VERSION, defaultState, type AppState } from './schema'

type Raw = Record<string, unknown>

/**
 * One step per version: migrations[n] turns version n data into version n + 1.
 * Version 0 means "no version field" (data written before versioning existed).
 */
const migrations: Record<number, (data: Raw) => Raw> = {
  0: (data) => ({ ...data, version: 1 }),
}

export function migrate(raw: unknown): AppState {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return defaultState()

  let data = raw as Raw
  let version = typeof data.version === 'number' ? data.version : 0

  // Data from a newer app version: keep what this version understands.
  if (version > STORAGE_VERSION) data = { ...data, version: STORAGE_VERSION }

  while (version < STORAGE_VERSION) {
    const step = migrations[version]
    if (!step) return defaultState()
    data = step(data)
    version = data.version as number
  }

  const parsed = AppStateSchema.safeParse(data)
  if (!parsed.success) return defaultState()

  const state = parsed.data
  if (state.activeProfileId && !state.profiles.some((p) => p.id === state.activeProfileId)) {
    state.activeProfileId = null
  }
  return state
}
