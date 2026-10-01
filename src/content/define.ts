import { type LessonContentInput, type UnitMetaInput } from './schema'

/** Typed helpers for content files: they only add type-checking and autocompletion. */
export const defineUnit = (unit: UnitMetaInput) => unit
export const defineLesson = (lesson: LessonContentInput) => lesson
