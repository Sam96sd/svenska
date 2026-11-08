import { store } from '../../lib/storage/store'
import { pruneIeltsProfiles } from './actions'
import { forgetAiConfig } from '../ai/keys'

/**
 * Keeps IELTS data in step with the Swedish profiles: when a learner is deleted (here or on
 * another device, via sync), their IELTS progress and this device's API keys go too.
 */
export function startIeltsBridge() {
  let seen = ''
  const run = () => {
    const ids = Object.keys(store.get().deleted)
    const key = ids.join(',')
    if (key === seen) return
    seen = key
    pruneIeltsProfiles(ids)
    for (const id of ids) forgetAiConfig(id)
  }
  run()
  store.subscribe(run)
}

const SECTION_KEY = 'svenska:section'

export type Section = 'swedish' | 'ielts'

/** Which section each learner used last on this device, so the app reopens there. */
export function lastSection(profileId: string): Section {
  try {
    const map = JSON.parse(localStorage.getItem(SECTION_KEY) ?? '{}') as Record<string, unknown>
    return map[profileId] === 'ielts' ? 'ielts' : 'swedish'
  } catch {
    return 'swedish'
  }
}

export function rememberSection(profileId: string, section: Section) {
  try {
    const map = JSON.parse(localStorage.getItem(SECTION_KEY) ?? '{}') as Record<string, unknown>
    if (map[profileId] === section) return
    localStorage.setItem(SECTION_KEY, JSON.stringify({ ...map, [profileId]: section }))
  } catch {
    // Storage blocked: the app just opens on Swedish.
  }
}

export const sectionHome = (section: Section) => (section === 'ielts' ? '/ielts' : '/')
