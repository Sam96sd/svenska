import { type IeltsModule } from '../examSpec'
import { type CatalogItem, type LessonMeta } from './catalogBuild'
import generated from './catalog.generated.json'

/**
 * What content exists, without loading it. Generated from the content files by
 * `npm run catalog`; the catalog test fails if it is out of date.
 */
export type { CatalogItem, LessonMeta }

export const CATALOG = generated.items as CatalogItem[]
export const LESSONS = generated.lessons as LessonMeta[]

export function catalogFor(
  skill: CatalogItem['skill'],
  module: IeltsModule,
  use: CatalogItem['use'] = 'practice',
) {
  return CATALOG.filter(
    (c) => c.skill === skill && c.use === use && (c.module === 'both' || c.module === module),
  )
}

export const catalogItem = (id: string) => CATALOG.find((c) => c.id === id)

export function lessonsFor(skill: LessonMeta['skill'], module: IeltsModule) {
  return LESSONS.filter((l) => l.skill === skill && (l.module === 'both' || l.module === module))
}
