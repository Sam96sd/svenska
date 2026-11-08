import { type z } from 'zod'
import { type ListeningPartSchema, type PassageSchema } from './schema'

/** Typed helpers for content files: autocomplete while authoring, Zod validation on load. */
export const definePassage = (p: z.input<typeof PassageSchema>) => p
export const defineListening = (p: z.input<typeof ListeningPartSchema>) => p
