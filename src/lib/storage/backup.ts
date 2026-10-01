import { dayKey } from '../dates'
import { migrate } from './migrate'
import { type AppState } from './schema'
import { store } from './store'

const BACKUP_KIND = 'svenska-backup'

export function serializeBackup(state: AppState = store.get()): string {
  return JSON.stringify(
    { kind: BACKUP_KIND, exportedAt: new Date().toISOString(), data: state },
    null,
    2,
  )
}

export function backupFileName(now = Date.now()): string {
  return `svenska-progress-${dayKey(now)}.json`
}

/** Parses a backup file. Throws a readable error when the file isn't a Svenska backup. */
export function parseBackup(text: string): AppState {
  let json: unknown
  try {
    json = JSON.parse(text)
  } catch {
    throw new Error("That file isn't valid JSON.")
  }
  const wrapper = json as { kind?: unknown; data?: unknown }
  if (!wrapper || wrapper.kind !== BACKUP_KIND || !wrapper.data) {
    throw new Error("That file doesn't look like a Svenska backup.")
  }
  const state = migrate(wrapper.data)
  if (state.profiles.length === 0) throw new Error('The backup contains no learner profiles.')
  return state
}

export function downloadBackup() {
  const blob = new Blob([serializeBackup()], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = backupFileName()
  document.body.append(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export function restoreBackup(state: AppState) {
  store.replace(state)
}
