/** A random id for this browser, so sync can tell which device earned which XP. */

const DEVICE_KEY = 'svenska:device'

let cached: string | null = null

export function deviceId(): string {
  if (cached) return cached
  try {
    cached = localStorage.getItem(DEVICE_KEY)
  } catch {
    // Storage blocked: fall through to a per-session id.
  }
  if (!cached) {
    cached =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `d-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`
    try {
      localStorage.setItem(DEVICE_KEY, cached)
    } catch {
      // Ignore: XP still merges correctly, it just lands in more than one bucket.
    }
  }
  return cached
}
