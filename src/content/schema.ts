import { z } from 'zod'

/*
 * Course content schema. All lessons are plain data validated by these schemas
 * (see content.test.ts, which fails the build if any content is invalid).
 * See CONTENT_GUIDE.md for how to write a lesson.
 */

const text = z.string().trim().min(1)
const id = z.string().regex(/^[a-z0-9][a-z0-9-]*$/, 'ids use lowercase letters, digits and dashes')

export const POS = [
  'noun',
  'verb',
  'adjective',
  'adverb',
  'pronoun',
  'preposition',
  'conjunction',
  'numeral',
  'phrase',
  'interjection',
  'other',
] as const

export const VocabSchema = z
  .object({
    /** Unique across the whole course; used for review cards and weak-word tracking. */
    id,
    /** Swedish headword without article: "bil", "tala", "stor", "god morgon". */
    sv: text,
    /** English meaning shown to the learner. */
    en: text,
    pos: z.enum(POS),
    gender: z.enum(['en', 'ett']).optional(),
    forms: z
      .object({
        definite: text,
        plural: text,
        pluralDefinite: text,
        present: text,
        past: text,
        supine: text,
        imperative: text,
        neuter: text,
        comparative: text,
        superlative: text,
      })
      .partial()
      .optional(),
    /** English-friendly pronunciation hint, e.g. "hwoo". */
    pron: text.optional(),
    note: text.optional(),
    /** Other Swedish spellings accepted when typing. */
    alt: z.array(text).optional(),
    /** Other English meanings accepted when typing. */
    enAlt: z.array(text).optional(),
  })
  .refine((v) => v.pos !== 'noun' || v.gender, { message: 'nouns need a gender (en/ett)' })

export const ExampleSchema = z.object({ sv: text, en: text, note: text.optional() })

/**
 * A "Learn" card. `text` supports **bold**, *italic*, line breaks, and [[Swedish]]
 * which renders as a tappable phrase that plays audio.
 */
export const SectionSchema = z.object({
  title: text.optional(),
  text: text.optional(),
  examples: z.array(ExampleSchema).optional(),
  table: z
    .object({
      caption: text.optional(),
      headers: z.array(z.string()),
      rows: z.array(z.array(z.string())),
      /** Column indexes that contain Swedish (get audio buttons). */
      svColumns: z.array(z.number().int().min(0)).optional(),
    })
    .optional(),
  tip: text.optional(),
})

export const DialogueLineSchema = z.object({ speaker: text, sv: text, en: text })

export const DialogueSchema = z.object({
  title: text.optional(),
  setting: text.optional(),
  lines: z.array(DialogueLineSchema).min(2),
})

const base = {
  /** Shown after answering: why the answer is right. */
  explanation: text.optional(),
  /** Vocab ids this exercise practises (for weak-word tracking). */
  vocab: z.array(id).optional(),
}

const choices = z.array(text).min(2).max(6)

const answerInChoices = (e: { choices: string[]; answer: string }) => e.choices.includes(e.answer)
const answerInChoicesMsg = { message: 'answer must be one of the choices' }

export const McqSchema = z
  .object({
    ...base,
    type: z.literal('mcq'),
    prompt: text,
    promptLang: z.enum(['sv', 'en']),
    /** Optional instruction, e.g. "Which word is an ett-word?" */
    question: text.optional(),
    choices,
    answer: text,
  })
  .refine(answerInChoices, answerInChoicesMsg)

export const ListenSchema = z
  .object({
    ...base,
    type: z.literal('listen'),
    /** Swedish text that is spoken (not shown until answered). */
    audio: text,
    question: text.optional(),
    choices,
    answer: text,
  })
  .refine(answerInChoices, answerInChoicesMsg)

export const TypeSchema = z.object({
  ...base,
  type: z.literal('type'),
  prompt: text,
  promptLang: z.enum(['sv', 'en']),
  question: text.optional(),
  answer: text,
  answerLang: z.enum(['sv', 'en']).default('sv'),
  accept: z.array(text).optional(),
  /** Wrong forms that must never be accepted as typos (e.g. "stor" when "stort" is required). */
  reject: z.array(text).optional(),
  /** No typo tolerance: use when the exercise tests a spelling or an ending. */
  strict: z.boolean().optional(),
  hint: text.optional(),
})

export const DictationSchema = z.object({
  ...base,
  type: z.literal('dictation'),
  audio: text,
  en: text.optional(),
  accept: z.array(text).optional(),
})

export const BuildSchema = z.object({
  ...base,
  type: z.literal('build'),
  /** English sentence to translate. */
  prompt: text,
  /** Swedish answer; its words become the tiles. */
  answer: text,
  accept: z.array(text).optional(),
  /** Extra wrong tiles. */
  distractors: z.array(text).optional(),
})

export const MatchSchema = z.object({
  ...base,
  type: z.literal('match'),
  pairs: z
    .array(z.object({ sv: text, en: text }))
    .min(3)
    .max(6),
})

export const GapSchema = z
  .object({
    ...base,
    type: z.literal('gap'),
    /** Sentence with exactly one "___" gap. */
    text: text.refine((t) => t.split('___').length === 2, 'text needs exactly one ___ gap'),
    en: text.optional(),
    question: text.optional(),
    choices,
    answer: text,
  })
  .refine(answerInChoices, answerInChoicesMsg)

export const MinimalPairSchema = z
  .object({
    ...base,
    type: z.literal('minimalPair'),
    /** What to listen for, e.g. "long or short a?" */
    focus: text.optional(),
    options: z
      .array(z.object({ sv: text, en: text.optional(), hint: text.optional() }))
      .min(2)
      .max(4),
    /** The option (sv) that is played. */
    answer: text,
  })
  .refine((e) => e.options.some((o) => o.sv === e.answer), {
    message: 'answer must be one of the options',
  })

export const SpeakSchema = z.object({
  ...base,
  type: z.literal('speak'),
  text: text,
  en: text,
})

export const DialogueReplySchema = z
  .object({
    ...base,
    type: z.literal('dialogueReply'),
    lines: z.array(DialogueLineSchema).min(1),
    question: text.optional(),
    choices,
    answer: text,
  })
  .refine(answerInChoices, answerInChoicesMsg)

export const ExerciseSchema = z.discriminatedUnion('type', [
  McqSchema,
  ListenSchema,
  TypeSchema,
  DictationSchema,
  BuildSchema,
  MatchSchema,
  GapSchema,
  MinimalPairSchema,
  SpeakSchema,
  DialogueReplySchema,
])

/** The table of contents entry for a lesson (lives in the unit's meta.ts). */
export const LessonMetaSchema = z.object({
  id,
  title: text,
  titleSv: text.optional(),
  kind: z.enum(['lesson', 'sounds', 'culture', 'review']).default('lesson'),
  /** One line: what you can do after this lesson. */
  goal: text,
})

/** The body of a lesson (lives in lesson-XX.ts). */
export const LessonContentSchema = z.object({
  id,
  learn: z.array(SectionSchema).min(1),
  vocab: z.array(VocabSchema),
  dialogue: DialogueSchema.optional(),
  exercises: z.array(ExerciseSchema).min(1),
  /** How many exercises to auto-generate from the vocab on top of the authored ones. */
  generate: z.number().int().min(0).max(10).optional(),
  culture: SectionSchema.optional(),
})

export const UnitMetaSchema = z.object({
  id,
  number: z.number().int().min(1),
  title: text,
  titleSv: text,
  cefr: z.enum(['A0', 'A1', 'A2', 'B1']),
  description: text,
  emoji: text,
  lessons: z.array(LessonMetaSchema).min(1),
})

export type Vocab = z.infer<typeof VocabSchema>
export type Example = z.infer<typeof ExampleSchema>
export type Section = z.infer<typeof SectionSchema>
export type DialogueLine = z.infer<typeof DialogueLineSchema>
export type Dialogue = z.infer<typeof DialogueSchema>
export type Exercise = z.infer<typeof ExerciseSchema>
export type ExerciseType = Exercise['type']
export type ExerciseOf<T extends ExerciseType> = Extract<Exercise, { type: T }>
export type LessonMeta = z.infer<typeof LessonMetaSchema>
export type LessonContent = z.infer<typeof LessonContentSchema>
export type UnitMeta = z.infer<typeof UnitMetaSchema>

/** Input types: what authors write (defaults like `kind` and `answerLang` may be omitted). */
export type LessonContentInput = z.input<typeof LessonContentSchema>
export type UnitMetaInput = z.input<typeof UnitMetaSchema>

export type Lesson = LessonMeta & LessonContent & { unitId: string; index: number }
