import { migrateIelts } from './migrate'
import { type IeltsState } from './schema'

export const IELTS_STORAGE_KEY = 'ielts:state'

type Listener = () => void

function readStorage(): unknown {
  try {
    const raw = localStorage.getItem(IELTS_STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

let state: IeltsState = migrateIelts(readStorage())
let persistFailed = false
const listeners = new Set<Listener>()

function emit() {
  for (const l of listeners) l()
}

function persist() {
  try {
    localStorage.setItem(IELTS_STORAGE_KEY, JSON.stringify(state))
    persistFailed = false
  } catch {
    // Private mode, quota exceeded or storage blocked: keep working in memory.
    persistFailed = true
  }
}

/** The IELTS store. Same contract as the Swedish store in src/lib/storage/store.ts. */
export const ieltsStore = {
  get: (): IeltsState => state,

  set(updater: (prev: IeltsState) => IeltsState) {
    const next = updater(state)
    if (next === state) return
    state = next
    persist()
    emit()
  },

  /** Replace everything (import, sync and tests). Input goes through migration. */
  replace(raw: unknown) {
    state = migrateIelts(raw)
    persist()
    emit()
  },

  subscribe(listener: Listener) {
    listeners.add(listener)
    return () => listeners.delete(listener)
  },

  persistFailed: () => persistFailed,
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key !== IELTS_STORAGE_KEY) return
    state = migrateIelts(readStorage())
    emit()
  })
}
