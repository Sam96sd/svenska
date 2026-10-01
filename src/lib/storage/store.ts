import { migrate } from './migrate'
import { type AppState } from './schema'

export const STORAGE_KEY = 'svenska:state'

type Listener = () => void

function readStorage(): unknown {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

let state: AppState = migrate(readStorage())
let persistFailed = false
const listeners = new Set<Listener>()

function emit() {
  for (const l of listeners) l()
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    persistFailed = false
  } catch {
    // Private mode, quota exceeded or storage blocked: keep working in memory.
    persistFailed = true
  }
}

export const store = {
  get: (): AppState => state,

  set(updater: (prev: AppState) => AppState) {
    const next = updater(state)
    if (next === state) return
    state = next
    persist()
    emit()
  },

  /** Replace everything (used by import and tests). Input goes through migration. */
  replace(raw: unknown) {
    state = migrate(raw)
    persist()
    emit()
  },

  subscribe(listener: Listener) {
    listeners.add(listener)
    return () => listeners.delete(listener)
  },

  persistFailed: () => persistFailed,
}

// Keep several open tabs in sync.
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key !== STORAGE_KEY) return
    state = migrate(readStorage())
    emit()
  })
}
