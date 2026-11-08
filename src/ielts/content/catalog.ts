import { type IeltsModule } from '../examSpec'

/**
 * What content exists, without loading it. Keep in step with the files in reading/ and
 * listening/ — content.test.ts fails if an entry and its file disagree.
 */
export interface CatalogItem {
  id: string
  skill: 'reading' | 'listening' | 'writing' | 'speaking'
  /** Listening is shared by both modules. */
  module: IeltsModule | 'both'
  title: string
  topic: string
  /** Reading: academic / gt1 / gt2 / gt3. Listening and speaking: part1…part4. Writing: task1 / task2. */
  section: string
  minutes: number
  questions: number
  /** Question types it practises (keys of QUESTION_TYPE_LABEL). */
  types: string[]
  /** practice = in the Practice lists; mock/diagnostic = kept for those tests only. */
  use: 'practice' | 'mock' | 'diagnostic'
}

export const CATALOG: CatalogItem[] = [
  {
    id: 'gt1-leisure-centre',
    skill: 'reading',
    module: 'general',
    title: 'Riverside Leisure Centre',
    topic: 'Leisure and sport',
    section: 'gt1',
    minutes: 15,
    questions: 14,
    types: ['tfng', 'completion-note'],
    use: 'practice',
  },
  {
    id: 'l1-hall-booking',
    skill: 'listening',
    module: 'both',
    title: 'Booking a community hall',
    topic: 'Events and bookings',
    section: 'part1',
    minutes: 7,
    questions: 10,
    types: ['completion-form'],
    use: 'practice',
  },
  {
    id: 't2-remote-work',
    skill: 'writing',
    module: 'both',
    title: 'Remote working',
    topic: 'Work',
    section: 'task2',
    minutes: 40,
    questions: 1,
    types: ['opinion'],
    use: 'practice',
  },
  {
    id: 'g1-damaged-furniture',
    skill: 'writing',
    module: 'general',
    title: 'Late, damaged delivery',
    topic: 'Shopping and services',
    section: 'task1',
    minutes: 20,
    questions: 1,
    types: ['complaint'],
    use: 'practice',
  },
  {
    id: 'p1-hometown',
    skill: 'speaking',
    module: 'both',
    title: 'Your hometown',
    topic: 'Your hometown',
    section: 'part1',
    minutes: 4,
    questions: 4,
    types: ['part1'],
    use: 'practice',
  },
  {
    id: 'cue-helpful-advice',
    skill: 'speaking',
    module: 'both',
    title: 'Useful advice',
    topic: 'People and relationships',
    section: 'part2',
    minutes: 8,
    questions: 7,
    types: ['part2', 'part3'],
    use: 'practice',
  },
]

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
