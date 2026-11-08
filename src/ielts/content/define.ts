import { type z } from 'zod'
import {
  type CueCardSchema,
  type LessonSchema,
  type ListeningPartSchema,
  type Part1TopicSchema,
  type PassageSchema,
  type WritingTaskSchema,
} from './schema'

/** Typed helpers for content files: autocomplete while authoring, Zod validation on load. */
export const definePassage = (p: z.input<typeof PassageSchema>) => p
export const defineListening = (p: z.input<typeof ListeningPartSchema>) => p
export const defineWritingTask = (t: z.input<typeof WritingTaskSchema>) => t
export const defineCueCard = (c: z.input<typeof CueCardSchema>) => c
export const definePart1 = (p: z.input<typeof Part1TopicSchema>) => p
export const defineLesson = (l: z.input<typeof LessonSchema>) => l
