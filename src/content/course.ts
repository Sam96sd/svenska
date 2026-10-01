import {
  LessonContentSchema,
  UnitMetaSchema,
  type Lesson,
  type LessonContentInput,
  type LessonMeta,
  type UnitMeta,
  type UnitMetaInput,
  type Vocab,
} from './schema'

/*
 * The course is discovered from the folder structure:
 *   units/<unit-id>/meta.ts      table of contents (loaded up front, tiny)
 *   units/<unit-id>/index.ts     all lesson bodies of the unit (one lazy chunk per unit)
 */

const metaModules = import.meta.glob<UnitMetaInput>('./units/*/meta.ts', {
  eager: true,
  import: 'default',
})
const unitLoaders = import.meta.glob<LessonContentInput[]>('./units/*/index.ts', {
  import: 'default',
})

export const units: UnitMeta[] = Object.values(metaModules)
  .map((m) => UnitMetaSchema.parse(m))
  .sort((a, b) => a.number - b.number)

export interface LessonRef {
  unit: UnitMeta
  lesson: LessonMeta
  /** Position within the unit. */
  index: number
}

/** Every lesson in course order. */
export const lessonRefs: LessonRef[] = units.flatMap((unit) =>
  unit.lessons.map((lesson, index) => ({ unit, lesson, index })),
)

export function findLesson(lessonId: string): LessonRef | undefined {
  return lessonRefs.find((r) => r.lesson.id === lessonId)
}

export function nextLessonRef(lessonId: string): LessonRef | undefined {
  const i = lessonRefs.findIndex((r) => r.lesson.id === lessonId)
  return i >= 0 ? lessonRefs[i + 1] : undefined
}

export function findUnit(unitId: string): UnitMeta | undefined {
  return units.find((u) => u.id === unitId)
}

export interface LoadedUnit {
  meta: UnitMeta
  lessons: Lesson[]
}

const cache = new Map<string, Promise<LoadedUnit>>()

export function loadUnit(unitId: string): Promise<LoadedUnit> {
  let promise = cache.get(unitId)
  if (!promise) {
    promise = loadUnitUncached(unitId)
    promise.catch(() => cache.delete(unitId))
    cache.set(unitId, promise)
  }
  return promise
}

async function loadUnitUncached(unitId: string): Promise<LoadedUnit> {
  const meta = findUnit(unitId)
  const loader = unitLoaders[`./units/${unitId}/index.ts`]
  if (!meta || !loader) throw new Error(`Unknown unit: ${unitId}`)
  const contents = (await loader()).map((c) => LessonContentSchema.parse(c))
  const lessons = meta.lessons.flatMap((lm, index) => {
    const content = contents.find((c) => c.id === lm.id)
    return content ? [{ ...lm, ...content, unitId, index }] : []
  })
  return { meta, lessons }
}

export async function loadLesson(lessonId: string): Promise<{ unit: LoadedUnit; lesson: Lesson }> {
  const ref = findLesson(lessonId)
  if (!ref) throw new Error(`Unknown lesson: ${lessonId}`)
  const unit = await loadUnit(ref.unit.id)
  const lesson = unit.lessons.find((l) => l.id === lessonId)
  if (!lesson) throw new Error(`Lesson content missing: ${lessonId}`)
  return { unit, lesson }
}

export function loadAllUnits(): Promise<LoadedUnit[]> {
  return Promise.all(units.map((u) => loadUnit(u.id)))
}

export interface VocabEntry extends Vocab {
  unitId: string
  lessonId: string
}

/** All vocabulary in the course, in course order. */
export async function loadAllVocab(): Promise<VocabEntry[]> {
  const all = await loadAllUnits()
  return all.flatMap((u) =>
    u.lessons.flatMap((l) => l.vocab.map((v) => ({ ...v, unitId: u.meta.id, lessonId: l.id }))),
  )
}
