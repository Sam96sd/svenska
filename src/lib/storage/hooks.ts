import { useSyncExternalStore } from 'react'
import { type AppState, type Profile } from './schema'
import { store } from './store'

/** Subscribe to a slice of app state. The selector must return existing objects, not new ones. */
export function useAppState<T>(selector: (s: AppState) => T): T {
  return useSyncExternalStore(store.subscribe, () => selector(store.get()))
}

export function useProfiles(): Profile[] {
  return useAppState((s) => s.profiles)
}

export function useActiveProfile(): Profile | null {
  return useAppState((s) => s.profiles.find((p) => p.id === s.activeProfileId) ?? null)
}

/** For screens that are only rendered behind the profile gate. */
export function useProfile(): Profile {
  const profile = useActiveProfile()
  if (!profile) throw new Error('useProfile() used without an active profile')
  return profile
}
