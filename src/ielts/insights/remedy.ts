import { catalogFor, lessonsFor, type CatalogItem, type LessonMeta } from '../content/catalog'
import { QUESTION_TYPE_LABEL } from '../content/schema'
import { SPEAKING_CRITERIA, WRITING_CRITERIA } from '../criteria'
import { REASON_LABEL, type WrongReason } from '../engine/answerCheck'
import { type Skill } from '../examSpec'
import { type ErrorPattern } from './stats'

export function categoryLabel(p: Pick<ErrorPattern, 'skill' | 'category'>): string {
  if (p.skill === 'writing')
    return WRITING_CRITERIA[p.category as keyof typeof WRITING_CRITERIA]?.name ?? p.category
  if (p.skill === 'speaking')
    return SPEAKING_CRITERIA[p.category as keyof typeof SPEAKING_CRITERIA]?.name ?? p.category
  return QUESTION_TYPE_LABEL[p.category] ?? p.category
}

export function reasonLabel(reason: string): string {
  return REASON_LABEL[reason as WrongReason] ?? reason.replace(/-/g, ' ')
}

/** The lesson and the practice that best fix a pattern. */
export function remedyFor(
  p: ErrorPattern,
  module: 'academic' | 'general',
): { lesson: LessonMeta | null; practice: CatalogItem | null } {
  const skill = p.skill as Skill
  const lessons = lessonsFor(skill, module)
  const byType = lessons.find((l) => l.types.includes(p.category))
  const byReason =
    lessons.find((l) => l.types.includes(p.reason)) ??
    (p.reason === 'distractor' ? lessons.find((l) => l.types.includes('distractor')) : undefined) ??
    (p.reason === 'paraphrase' ? lessons.find((l) => l.types.includes('paraphrase')) : undefined) ??
    (p.reason === 'word-limit' ? lessons.find((l) => l.types.includes('word-limit')) : undefined)
  const lesson = (p.reason === 'ng-vs-false' ? byType : (byReason ?? byType)) ?? null
  // Exact question type first, then the same family (e.g. any completion format).
  const family = p.category.split('-')[0]!
  const allDrills = catalogFor(skill, module, 'drill')
  const exact = allDrills.filter((c) => c.types.includes(p.category))
  const drills = exact.length
    ? exact
    : allDrills.filter((c) => c.types.some((t) => t.split('-')[0] === family))
  const practice =
    (lesson && drills.find((d) => lesson.drills.includes(d.id))) ??
    drills[0] ??
    catalogFor(skill, module).find((c) => c.types.includes(p.category)) ??
    null
  return { lesson, practice }
}
