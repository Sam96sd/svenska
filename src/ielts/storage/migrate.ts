import { IELTS_VERSION, IeltsStateSchema, defaultIeltsState, type IeltsState } from './schema'

type Raw = Record<string, unknown>

/**
 * One step per version: migrations[n] turns version n data into version n + 1.
 * Version 0 means "no version field". Add a step here (and bump IELTS_VERSION) whenever
 * the stored shape changes in a way `.catch` defaults can't repair.
 */
const migrations: Record<number, (data: Raw) => Raw> = {
  0: (data) => ({ ...data, version: 1 }),
}

export function migrateIelts(raw: unknown): IeltsState {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return defaultIeltsState()

  let data = raw as Raw
  let version = typeof data.version === 'number' ? data.version : 0

  // Written by a newer app version: keep what this version understands.
  if (version > IELTS_VERSION) {
    data = { ...data, version: IELTS_VERSION }
    version = IELTS_VERSION
  }

  while (version < IELTS_VERSION) {
    const step = migrations[version]
    if (!step) return defaultIeltsState()
    data = step(data)
    version = data.version as number
  }

  const parsed = IeltsStateSchema.safeParse(data)
  return parsed.success ? parsed.data : defaultIeltsState()
}
