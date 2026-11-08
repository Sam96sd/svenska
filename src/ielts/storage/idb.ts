/**
 * IndexedDB for large, device-only data: full AI feedback, speaking recordings and cached
 * speech audio. None of this is synced or exported (recordings stay on the device that made
 * them). Falls back to memory when IndexedDB is unavailable (private mode, tests).
 */

const DB_NAME = 'ielts'
const DB_VERSION = 1
export type StoreName = 'feedback' | 'recordings' | 'tts'
const STORES: StoreName[] = ['feedback', 'recordings', 'tts']

let dbPromise: Promise<IDBDatabase | null> | null = null
const memory: Record<StoreName, Map<string, unknown>> = {
  feedback: new Map(),
  recordings: new Map(),
  tts: new Map(),
}

function open(): Promise<IDBDatabase | null> {
  if (dbPromise) return dbPromise
  dbPromise = new Promise((resolve) => {
    if (typeof indexedDB === 'undefined') return resolve(null)
    try {
      const req = indexedDB.open(DB_NAME, DB_VERSION)
      req.onupgradeneeded = () => {
        for (const name of STORES)
          if (!req.result.objectStoreNames.contains(name)) req.result.createObjectStore(name)
      }
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => resolve(null)
      req.onblocked = () => resolve(null)
    } catch {
      resolve(null)
    }
  })
  return dbPromise
}

function run<T>(
  store: StoreName,
  mode: IDBTransactionMode,
  fn: (s: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  return open().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        if (!db) return reject(new Error('no-idb'))
        const tx = db.transaction(store, mode)
        const req = fn(tx.objectStore(store))
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => reject(req.error)
      }),
  )
}

export async function idbGet<T>(store: StoreName, key: string): Promise<T | undefined> {
  try {
    return (await run<T>(store, 'readonly', (s) => s.get(key) as IDBRequest<T>)) ?? undefined
  } catch {
    return memory[store].get(key) as T | undefined
  }
}

export async function idbSet(store: StoreName, key: string, value: unknown): Promise<void> {
  try {
    await run(store, 'readwrite', (s) => s.put(value, key))
  } catch {
    memory[store].set(key, value)
  }
}

export async function idbDelete(store: StoreName, key: string): Promise<void> {
  try {
    await run(store, 'readwrite', (s) => s.delete(key))
  } catch {
    memory[store].delete(key)
  }
}

/** All keys in a store (recordings list). */
export async function idbKeys(store: StoreName): Promise<string[]> {
  try {
    return (await run<IDBValidKey[]>(store, 'readonly', (s) => s.getAllKeys())).map(String)
  } catch {
    return [...memory[store].keys()]
  }
}

/** SHA-256 hex of a string or bytes, for cache keys. */
export async function sha256(data: string | ArrayBuffer): Promise<string> {
  const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : new Uint8Array(data)
  const digest = await crypto.subtle.digest('SHA-256', bytes)
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
}
