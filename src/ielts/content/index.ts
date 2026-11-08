import {
  ListeningPartSchema,
  PassageSchema,
  SpeakingItemSchema,
  WritingTaskSchema,
  type ListeningPart,
  type Passage,
  type SpeakingItem,
  type WritingTask,
} from './schema'

/*
 * Lazy content loading. Each passage / listening part is its own file and its own JS chunk,
 * loaded only when opened. The lightweight catalog (catalog.ts) lists what exists, so lists
 * can render without downloading every text. content.test.ts checks the two agree.
 */

const readingFiles = import.meta.glob<{ default: unknown }>('./reading/**/*.ts')
const listeningFiles = import.meta.glob<{ default: unknown }>('./listening/**/*.ts')
const writingFiles = import.meta.glob<{ default: unknown }>('./writing/**/*.ts')
const speakingFiles = import.meta.glob<{ default: unknown }>('./speaking/**/*.ts')

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

function loader<T>(
  prefix: string,
  files: Record<string, () => Promise<{ default: unknown }>>,
  parse: (x: unknown) => T,
  what: string,
) {
  return (id: string): Promise<T> => {
    const key = `${prefix}:${id}`
    if (!cache.has(key)) {
      const load = find(files, id)
      if (!load) return Promise.reject(new Error(`Unknown ${what}: ${id}`))
      cache.set(
        key,
        load().then((m) => parse(m.default)),
      )
    }
    return cache.get(key) as Promise<T>
  }
}

export const loadWritingTask = loader<WritingTask>(
  'w',
  writingFiles,
  (x) => WritingTaskSchema.parse(x),
  'writing task',
)
export const loadSpeaking = loader<SpeakingItem>(
  's',
  speakingFiles,
  (x) => SpeakingItemSchema.parse(x),
  'speaking topic',
)

/** For tests: every content file path by kind. */
export const contentFiles = {
  reading: readingFiles,
  listening: listeningFiles,
  writing: writingFiles,
  speaking: speakingFiles,
  idOf,
}
