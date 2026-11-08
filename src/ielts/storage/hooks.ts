import { useSyncExternalStore } from 'react'
import { useProfile } from '../../lib/storage/hooks'
import { defaultIeltsProfile, type IeltsProfile } from './schema'
import { ieltsStore } from './store'

/** Shared, never-mutated default, so the hook returns a stable object for new learners. */
const EMPTY: IeltsProfile = Object.freeze(defaultIeltsProfile()) as IeltsProfile

export function getIeltsProfile(profileId: string): IeltsProfile {
  return ieltsStore.get().profiles[profileId] ?? EMPTY
}

export function useIeltsProfileFor(profileId: string): IeltsProfile {
  return useSyncExternalStore(ieltsStore.subscribe, () => getIeltsProfile(profileId))
}

/** The active learner's IELTS data (screens behind the profile gate only). */
export function useIelts(): { profileId: string; name: string; ielts: IeltsProfile } {
  const profile = useProfile()
  const ielts = useIeltsProfileFor(profile.id)
  return { profileId: profile.id, name: profile.name, ielts }
}
