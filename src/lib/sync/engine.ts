import { useSyncExternalStore } from 'react'
import { canonical, emptyDoc, parseDoc, serializeDoc, syncStep, toDoc } from './merge'
import { createGist, findGist, readGist, SyncError, writeGist } from './github'
import { store } from '../storage/store'

/*
 * Keeps this device's progress in sync with the shared gist: pull, merge, push.
 * Runs on start, shortly after every change, when the app comes back to the foreground
 * or back online, and every minute while it's open (to pick up the other learner's progress).
 */

const CONFIG_KEY = 'svenska:sync'
const DEBOUNCE_MS = 2500
const POLL_MS = 60_000

export interface SyncConfig {
  token: string
  gistId: string
  /** False until the first successful sync, while this device is joining. */
  joined: boolean
  lastSyncedAt: number | null
}

export interface SyncStatus {
  enabled: boolean
  state: 'idle' | 'syncing' | 'error' | 'offline'
  lastSyncedAt: number | null
  error: string | null
  /** The token was rejected: the user needs to paste a new one. */
  needsToken: boolean
}

function readConfig(): SyncConfig | null {
  try {
    const raw = localStorage.getItem(CONFIG_KEY)
    if (!raw) return null
    const c = JSON.parse(raw) as Partial<SyncConfig>
    if (typeof c.token !== 'string' || typeof c.gistId !== 'string') return null
    return {
      token: c.token,
      gistId: c.gistId,
      joined: c.joined === true,
      lastSyncedAt: typeof c.lastSyncedAt === 'number' ? c.lastSyncedAt : null,
    }
  } catch {
    return null
  }
}

let config = readConfig()

function saveConfig(next: SyncConfig | null) {
  config = next
  try {
    if (next) localStorage.setItem(CONFIG_KEY, JSON.stringify(next))
    else localStorage.removeItem(CONFIG_KEY)
  } catch {
    // Storage blocked: sync works until the page is closed.
  }
}

let status: SyncStatus = {
  enabled: config !== null,
  state: 'idle',
  lastSyncedAt: config?.lastSyncedAt ?? null,
  error: null,
  needsToken: false,
}
const listeners = new Set<() => void>()

function setStatus(patch: Partial<SyncStatus>) {
  status = { ...status, ...patch }
  for (const l of listeners) l()
}

let running: Promise<void> | null = null
let again = false
let applying = false
let timer: ReturnType<typeof setTimeout> | undefined

async function runOnce(): Promise<void> {
  const c = config
  if (!c) return
  setStatus({ state: 'syncing' })
  try {
    const raw = await readGist(c.token, c.gistId)
    const remote = raw ? parseDoc(raw) : { doc: emptyDoc(), newer: false }
    if (config !== c) return // disconnected meanwhile

    // Read local state and apply the merge in one synchronous step, so nothing done
    // during the download is lost.
    const local = store.get()
    const { state, doc } = syncStep(local, remote.doc, !c.joined)
    if (canonical(state) !== canonical(local)) {
      applying = true
      try {
        store.set(() => state)
      } finally {
        applying = false
      }
    }

    if (remote.newer) {
      throw new SyncError(
        'other',
        'Another device has a newer version of the app. Reload to update.',
      )
    }
    const out = serializeDoc(doc)
    if (out !== raw) await writeGist(c.token, c.gistId, out)

    if (config !== c) return
    saveConfig({ ...c, joined: true, lastSyncedAt: Date.now() })
    setStatus({ state: 'idle', lastSyncedAt: Date.now(), error: null, needsToken: false })
  } catch (e) {
    const err =
      e instanceof SyncError ? e : new SyncError('other', 'The sync data couldn’t be read.')
    if (config !== c) return
    setStatus({
      state: err.kind === 'network' ? 'offline' : 'error',
      error: err.message,
      needsToken: err.kind === 'auth' || err.kind === 'notFound',
    })
  }
}

/** Sync now. Calls made while a sync is running are folded into one more run. */
export function syncNow(): Promise<void> {
  clearTimeout(timer)
  timer = undefined
  if (!config) return Promise.resolve()
  if (running) {
    again = true
    return running
  }
  running = (async () => {
    do {
      again = false
      await runOnce()
    } while (again && config)
  })().finally(() => {
    running = null
  })
  return running
}

function scheduleSync() {
  if (!config || applying) return
  clearTimeout(timer)
  timer = setTimeout(() => void syncNow(), DEBOUNCE_MS)
}

/**
 * Connects this device. Without a gist id, finds the user's existing Svenska gist or
 * creates one from this device's progress. Then runs the first sync.
 */
export async function connect(token: string, gistId?: string): Promise<void> {
  const t = token.trim()
  if (!t) throw new SyncError('auth', 'Paste your GitHub token first.')
  let id = gistId?.trim() || null
  if (id) await readGist(t, id)
  else id = (await findGist(t)) ?? (await createGist(t, serializeDoc(toDoc(store.get()))))
  saveConfig({ token: t, gistId: id, joined: false, lastSyncedAt: null })
  setStatus({ enabled: true, state: 'idle', error: null, needsToken: false, lastSyncedAt: null })
  await syncNow()
  if (status.state === 'error') throw new SyncError('other', status.error ?? 'Sync failed.')
}

/** Stops syncing on this device. Progress stays here and in the gist. */
export function disconnect() {
  clearTimeout(timer)
  saveConfig(null)
  setStatus({ enabled: false, state: 'idle', lastSyncedAt: null, error: null, needsToken: false })
}

/** A link that connects another device to the same sync data (contains the token). */
export function deviceLink(): string | null {
  if (!config) return null
  const base = `${location.origin}${import.meta.env.BASE_URL}`
  const q = new URLSearchParams({ t: config.token, g: config.gistId })
  return `${base}#/connect?${q.toString()}`
}

export function useSyncStatus(): SyncStatus {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l)
      return () => listeners.delete(l)
    },
    () => status,
  )
}

let started = false

/** Starts background syncing. Call once at startup. */
export function startSync() {
  if (started || typeof window === 'undefined') return
  started = true
  store.subscribe(scheduleSync)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') void syncNow()
    // Leaving the app: push pending changes right away instead of waiting for the debounce.
    else if (timer !== undefined) void syncNow()
  })
  window.addEventListener('online', () => void syncNow())
  setInterval(() => {
    if (document.visibilityState === 'visible') void syncNow()
  }, POLL_MS)
  void syncNow()
}
