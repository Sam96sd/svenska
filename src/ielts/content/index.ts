import { ListeningPartSchema, PassageSchema, type ListeningPart, type Passage } from './schema'

/*
 * Lazy content loading. Each passage / listening part is its own file and its own JS chunk,
 * loaded only when opened. The lightweight catalog (catalog.ts) lists what exists, so lists
 * can render without downloading every text. content.test.ts checks the two agree.
 */

const readingFiles = import.meta.glob<{ default: unknown }>('./reading/**/*.ts')
const listeningFiles = import.meta.glob<{ default: unknown }>('./listening/**/*.ts')

const idOf = (path: string) => path.split('/').pop()!.replace(/\.ts$/, '')

function find(files: Record<string, () => Promise<{ default: unknown }>>, id: string) {
  const path = Object.keys(files).find((p) => idOf(p) === id && !p.endsWith('.test.ts'))
  return path ? files[path]! : null
}

const cache = new Map<string, Promise<unknown>>()

export function loadPassage(id: string): Promise<Passage> {
  const key = `r:${id}`
  if (!cache.has(key)) {
    const load = find(readingFiles, id)
    if (!load) return Promise.reject(new Error(`Unknown reading passage: ${id}`))
    cache.set(
      key,
      load().then((m) => PassageSchema.parse(m.default)),
    )
  }
  return cache.get(key) as Promise<Passage>
}

export function loadListening(id: string): Promise<ListeningPart> {
  const key = `l:${id}`
  if (!cache.has(key)) {
    const load = find(listeningFiles, id)
    if (!load) return Promise.reject(new Error(`Unknown listening part: ${id}`))
    cache.set(
      key,
      load().then((m) => ListeningPartSchema.parse(m.default)),
    )
  }
  return cache.get(key) as Promise<ListeningPart>
}

/** For tests: every content file path by kind. */
export const contentFiles = { reading: readingFiles, listening: listeningFiles, idOf }
