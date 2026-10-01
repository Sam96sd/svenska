import { lessonRefs, units, type LessonRef } from '../content/course'
import { type UnitMeta } from '../content/schema'
import { type Profile } from './storage/schema'

export type Status = 'locked' | 'available' | 'completed'

export function unitDoneCount(unit: UnitMeta, profile: Profile): number {
  return unit.lessons.filter((l) => profile.lessons[l.id]).length
}

export function isUnitComplete(unit: UnitMeta, profile: Profile): boolean {
  return unitDoneCount(unit, profile) === unit.lessons.length
}

/**
 * A unit opens when the previous one is finished, when you pass its placement
 * test, or once you've started it.
 */
export function unitStatus(unit: UnitMeta, profile: Profile): Status {
  if (isUnitComplete(unit, profile)) return 'completed'
  const i = units.findIndex((u) => u.id === unit.id)
  const prev = units[i - 1]
  const open =
    i <= 0 ||
    (prev && isUnitComplete(prev, profile)) ||
    profile.unlockedUnits.includes(unit.id) ||
    unitDoneCount(unit, profile) > 0
  return open ? 'available' : 'locked'
}

/** Lessons inside an open unit unlock one after another. */
export function lessonStatus(unit: UnitMeta, index: number, profile: Profile): Status {
  const lesson = unit.lessons[index]
  if (!lesson) return 'locked'
  if (profile.lessons[lesson.id]) return 'completed'
  if (unitStatus(unit, profile) === 'locked') return 'locked'
  const prev = unit.lessons[index - 1]
  return !prev || profile.lessons[prev.id] ? 'available' : 'locked'
}

/** The lesson the "Continue" button should open. */
export function nextUp(profile: Profile): LessonRef | undefined {
  return (
    lessonRefs.find((r) => lessonStatus(r.unit, r.index, profile) === 'available') ??
    // Everything done: offer the last lesson for practice.
    lessonRefs[lessonRefs.length - 1]
  )
}

export function courseProgress(profile: Profile): { done: number; total: number } {
  return {
    done: lessonRefs.filter((r) => profile.lessons[r.lesson.id]).length,
    total: lessonRefs.length,
  }
}
