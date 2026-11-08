import {
  groupTypeKey,
  screenOrder,
  type Lesson,
  type ListeningPart,
  type Passage,
  type SpeakingItem,
  type WritingTask,
} from './schema'

/**
 * Builds the lightweight catalog (what exists, without the text) from the content files.
 * Run `npm run catalog` after adding content; content tests fail if it's out of date.
 */

export interface CatalogItem {
  id: string
  skill: 'reading' | 'listening' | 'writing' | 'speaking'
  /** Listening, speaking and drills are shared by both modules. */
  module: 'academic' | 'general' | 'both'
  title: string
  topic: string
  /** Reading: academic / gt1 / gt2 / gt3 / drill. Listening and speaking: part1…part4. Writing: task1 / task2. */
  section: string
  minutes: number
  questions: number
  /** Question/task types it practises. */
  types: string[]
  use: 'practice' | 'drill' | 'mock' | 'diagnostic'
  /** Reading difficulty 1–3 (Passage 1–3); 0 when not applicable. */
  level: number
}

export interface LessonMeta {
  id: string
  skill: Lesson['skill']
  module: Lesson['module']
  order: number
  title: string
  summary: string
  types: string[]
  minutes: number
  drills: string[]
}

const uniq = (xs: string[]) => [...new Set(xs)]

export function catalogFromContent(c: {
  passages: Passage[]
  parts: ListeningPart[]
  writing: WritingTask[]
  speaking: SpeakingItem[]
}): CatalogItem[] {
  const items: CatalogItem[] = [
    ...c.passages.map((p) => ({
      id: p.id,
      skill: 'reading' as const,
      module: p.module,
      title: p.title,
      topic: p.topic,
      section: p.section,
      minutes: p.minutes,
      questions: screenOrder(p.groups).length,
      types: uniq(p.groups.map(groupTypeKey)),
      use: p.use,
      level: p.level,
    })),
    ...c.parts.map((l) => {
      const words = l.lines.reduce((n, x) => n + x.text.split(/\s+/).length, 0)
      return {
        id: l.id,
        skill: 'listening' as const,
        module: 'both' as const,
        title: l.title,
        topic: l.topic,
        section: `part${l.part}`,
        minutes: Math.max(3, Math.round(words / 140) + 2),
        questions: screenOrder(l.groups).length,
        types: uniq(l.groups.map(groupTypeKey)),
        use: l.use,
        level: 0,
      }
    }),
    ...c.writing.map((w) => ({
      id: w.id,
      skill: 'writing' as const,
      module: w.module,
      title: w.title,
      topic: w.topic,
      section: `task${w.task}`,
      minutes: w.task === 1 ? 20 : 40,
      questions: 1,
      types: [w.type],
      use: w.use,
      level: 0,
    })),
    ...c.speaking.map((s) =>
      s.kind === 'part1'
        ? {
            id: s.id,
            skill: 'speaking' as const,
            module: 'both' as const,
            title: s.topic,
            topic: s.topic,
            section: 'part1',
            minutes: 4,
            questions: s.questions.length,
            types: ['part1'],
            use: s.use,
            level: 0,
          }
        : {
            id: s.id,
            skill: 'speaking' as const,
            module: 'both' as const,
            title: s.title,
            topic: s.theme,
            section: 'part2',
            minutes: 9,
            questions: 1 + s.part3.length,
            types: ['part2', 'part3'],
            use: s.use,
            level: 0,
          },
    ),
  ]
  return items.sort((a, b) => (a.skill + a.section + a.id < b.skill + b.section + b.id ? -1 : 1))
}

export function lessonsMeta(lessons: Lesson[]): LessonMeta[] {
  return lessons
    .map((l) => ({
      id: l.id,
      skill: l.skill,
      module: l.module,
      order: l.order,
      title: l.title,
      summary: l.summary,
      types: l.types,
      minutes: l.minutes,
      drills: l.drills,
    }))
    .sort((a, b) => (a.skill === b.skill ? a.order - b.order : a.skill < b.skill ? -1 : 1))
}
