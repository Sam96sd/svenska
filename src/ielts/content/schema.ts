import { z } from 'zod'

/**
 * Typed, validated IELTS content: reading passages, listening parts, writing tasks, cue cards
 * and strategy lessons. Every file under src/ielts/content/ is parsed with these schemas by
 * `content.test.ts`, which also cross-checks answer keys against the text. CI runs the tests
 * before building, so broken content never deploys.
 *
 * Conventions
 * - Question numbers (`n`) run 1…40 inside one passage/part, like the real paper.
 * - A gap in a completion body is written [[n]], e.g. "Opening hours: 9 am to [[3]]".
 * - `location.quote` must be copied exactly from the passage paragraph or script line it names.
 */

export const Id = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'ids are kebab-case')

export const OptionSchema = z.object({ key: z.string().min(1).max(6), text: z.string().min(1) })
export type Option = z.infer<typeof OptionSchema>

/** "NO MORE THAN TWO WORDS AND/OR A NUMBER" = { words: 2, number: true }. */
export const WordLimitSchema = z.object({
  words: z.number().int().min(0).max(5),
  number: z.boolean().default(false),
})
export type WordLimit = z.infer<typeof WordLimitSchema>

export const LocationSchema = z.object({
  /** Paragraph label ("B") or listening line id ("l12"). */
  ref: z.string().min(1),
  /** Words copied exactly from that paragraph/line that justify the answer. */
  quote: z.string().min(3),
})
export type Location = z.infer<typeof LocationSchema>

const base = {
  n: z.number().int().min(1).max(40),
  explanation: z.string().min(15),
  location: LocationSchema,
}

// ---------- Diagrams (maps, plans, process and labelling diagrams), drawn as SVG ----------

export const DiagramItemSchema = z.discriminatedUnion('shape', [
  z.object({
    shape: z.literal('rect'),
    x: z.number(),
    y: z.number(),
    w: z.number(),
    h: z.number(),
    label: z.string().optional(),
    tone: z.enum(['plain', 'soft', 'water', 'green']).default('plain'),
  }),
  z.object({
    shape: z.literal('circle'),
    cx: z.number(),
    cy: z.number(),
    r: z.number(),
    label: z.string().optional(),
    tone: z.enum(['plain', 'soft', 'water', 'green']).default('plain'),
  }),
  z.object({
    shape: z.literal('line'),
    x1: z.number(),
    y1: z.number(),
    x2: z.number(),
    y2: z.number(),
    dashed: z.boolean().default(false),
    arrow: z.boolean().default(false),
  }),
  z.object({
    shape: z.literal('path'),
    d: z.string(),
    tone: z.enum(['line', 'road', 'water']).default('line'),
  }),
  z.object({
    shape: z.literal('text'),
    x: z.number(),
    y: z.number(),
    text: z.string(),
    size: z.number().default(13),
    anchor: z.enum(['start', 'middle', 'end']).default('middle'),
  }),
  /** A lettered point on a map or plan (the options for map labelling). */
  z.object({ shape: z.literal('marker'), x: z.number(), y: z.number(), letter: z.string().max(2) }),
  /** A numbered gap on a labelling diagram (answers typed in). */
  z.object({ shape: z.literal('gap'), x: z.number(), y: z.number(), n: z.number().int() }),
])
export type DiagramItem = z.infer<typeof DiagramItemSchema>

export const DiagramSchema = z.object({
  width: z.number().positive(),
  height: z.number().positive(),
  /** Read out to screen-reader users: what the picture shows. */
  description: z.string().min(10),
  items: z.array(DiagramItemSchema).min(1),
  /** Compass, e.g. "N" arrow in a corner. */
  north: z.boolean().default(false),
})
export type Diagram = z.infer<typeof DiagramSchema>

// ---------- Question groups ----------

export const BlockSchema = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('heading'), text: z.string() }),
  z.object({ kind: z.literal('text'), text: z.string() }),
  z.object({ kind: z.literal('bullets'), items: z.array(z.string()).min(1) }),
  z.object({
    kind: z.literal('table'),
    header: z.array(z.string()).min(1),
    rows: z.array(z.array(z.string())).min(1),
  }),
  z.object({ kind: z.literal('flow'), steps: z.array(z.string()).min(2) }),
  z.object({ kind: z.literal('diagram'), diagram: DiagramSchema }),
])
export type Block = z.infer<typeof BlockSchema>

const instructions = z.string().min(5).optional()

export const TfngGroupSchema = z.object({
  type: z.enum(['tfng', 'ynng']),
  instructions,
  questions: z
    .array(
      z.object({
        ...base,
        statement: z.string().min(5),
        answer: z.enum(['TRUE', 'FALSE', 'NOT GIVEN', 'YES', 'NO']),
      }),
    )
    .min(1),
})

export const HeadingsGroupSchema = z.object({
  type: z.literal('headings'),
  instructions,
  headings: z.array(OptionSchema).min(3),
  questions: z
    .array(
      z.object({
        ...base,
        /** The paragraph to choose a heading for. */
        para: z.string().min(1),
        answer: z.string(),
        /** Why the most tempting wrong headings are wrong (key → reason). */
        traps: z.record(z.string(), z.string()).optional(),
      }),
    )
    .min(1),
})

export const MatchingGroupSchema = z.object({
  /**
   * info: which paragraph contains the information (options = paragraph letters)
   * features: match statements to people/places/dates
   * endings: complete each sentence with the right ending
   * map: label places on a map or plan (options = lettered markers)
   */
  type: z.enum(['match-info', 'match-features', 'match-endings', 'map']),
  instructions,
  optionsTitle: z.string().optional(),
  /** For match-info, the paragraph letters; for map, the marker letters. */
  options: z.array(OptionSchema).min(2),
  /** "You may use any letter more than once." */
  reuse: z.boolean().default(false),
  diagram: DiagramSchema.optional(),
  questions: z
    .array(
      z.object({
        ...base,
        prompt: z.string().min(2),
        answer: z.string(),
        traps: z.record(z.string(), z.string()).optional(),
      }),
    )
    .min(1),
})

export const McqGroupSchema = z.object({
  type: z.literal('mcq'),
  instructions,
  questions: z
    .array(
      z.object({
        ...base,
        prompt: z.string().min(5),
        options: z.array(OptionSchema).min(3).max(5),
        answer: z.string(),
        /** Why each wrong option is wrong (key → reason), shown after marking. */
        traps: z.record(z.string(), z.string()).optional(),
      }),
    )
    .min(1),
})

/** "Choose TWO letters": one item worth two marks (two question numbers). */
export const McqMultiGroupSchema = z.object({
  type: z.literal('mcq-multi'),
  instructions,
  questions: z
    .array(
      z.object({
        ...base,
        /** The second question number this item covers (n, n2). */
        n2: z.number().int().min(2).max(40),
        prompt: z.string().min(5),
        options: z.array(OptionSchema).min(4).max(7),
        answers: z.array(z.string()).length(2),
        traps: z.record(z.string(), z.string()).optional(),
      }),
    )
    .min(1),
})

export const CompletionGroupSchema = z.object({
  type: z.literal('completion'),
  /** What the learner sees it as; changes the layout, not the marking. */
  format: z.enum([
    'sentence',
    'summary',
    'note',
    'table',
    'flowchart',
    'form',
    'short-answer',
    'diagram',
  ]),
  instructions,
  /** Not used with a word bank. */
  wordLimit: WordLimitSchema.optional(),
  /** Summary completion from a list of words: answers are option keys. */
  wordBank: z.array(OptionSchema).optional(),
  title: z.string().optional(),
  body: z.array(BlockSchema).min(1),
  questions: z
    .array(
      z.object({
        ...base,
        /** Accepted answers. "(the) library" also accepts "library". */
        answers: z.array(z.string().min(1)).min(1),
        /** Wrong answers learners often give (e.g. the distractor in a recording). */
        distractors: z.array(z.string()).optional(),
      }),
    )
    .min(1),
})

export const QuestionGroupSchema = z.discriminatedUnion('type', [
  TfngGroupSchema,
  HeadingsGroupSchema,
  MatchingGroupSchema,
  McqGroupSchema,
  McqMultiGroupSchema,
  CompletionGroupSchema,
])
export type QuestionGroup = z.infer<typeof QuestionGroupSchema>
export type GroupType = QuestionGroup['type']

// ---------- Reading ----------

export const ParagraphSchema = z.object({
  /** "A", "B"… for lettered paragraphs; omitted for unlettered text. */
  label: z.string().max(3).optional(),
  text: z.string().min(20),
})

export const ReadingTextSchema = z.object({
  title: z.string().optional(),
  /** e.g. "Notice", "Advertisement" — shown above short GT texts. */
  kind: z.string().optional(),
  paragraphs: z.array(ParagraphSchema).min(1),
})

export const PassageSchema = z.object({
  id: Id,
  skill: z.literal('reading'),
  module: z.enum(['academic', 'general']),
  /** academic = one long passage; gt1/gt2/gt3 = General Training sections 1–3. */
  section: z.enum(['academic', 'gt1', 'gt2', 'gt3']),
  title: z.string().min(3),
  topic: z.string().min(3),
  /** Suggested minutes for this passage in a timed run. */
  minutes: z.number().int().min(5).max(30),
  /** 1 (easier, like Passage 1) … 3 (hardest, like Passage 3). */
  level: z.number().int().min(1).max(3),
  intro: z.string().optional(),
  texts: z.array(ReadingTextSchema).min(1),
  groups: z.array(QuestionGroupSchema).min(1),
})
export type Passage = z.infer<typeof PassageSchema>

// ---------- Listening ----------

export const AccentSchema = z.enum([
  'en-GB',
  'en-AU',
  'en-US',
  'en-CA',
  'en-NZ',
  'en-IE',
  'en-ZA',
  'en-IN',
])
export type Accent = z.infer<typeof AccentSchema>

export const SpeakerSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(2),
  gender: z.enum(['f', 'm']),
  accent: AccentSchema,
})

export const ScriptLineSchema = z.object({
  id: z.string().regex(/^l\d+$/),
  speaker: z.string(),
  text: z.string().min(1),
})

export const ListeningPartSchema = z.object({
  id: Id,
  skill: z.literal('listening'),
  part: z.number().int().min(1).max(4),
  title: z.string().min(3),
  topic: z.string().min(3),
  /** Read by the narrator before the recording, e.g. "You will hear a woman phoning…". */
  context: z.string().min(10),
  speakers: z.array(SpeakerSchema).min(1),
  lines: z.array(ScriptLineSchema).min(5),
  groups: z.array(QuestionGroupSchema).min(1),
})
export type ListeningPart = z.infer<typeof ListeningPartSchema>
export type ScriptLine = z.infer<typeof ScriptLineSchema>

// ---------- Helpers ----------

/** Every question number a group covers, in order. */
export function groupNumbers(g: QuestionGroup): number[] {
  if (g.type === 'mcq-multi') return g.questions.flatMap((q) => [q.n, q.n2])
  return g.questions.map((q) => q.n)
}

export const GAP = /\[\[(\d+)\]\]/g

export function gapsIn(text: string): number[] {
  return [...text.matchAll(GAP)].map((m) => Number(m[1]))
}

/** All gap numbers in a completion body, in reading order. */
export function bodyGaps(body: Block[]): number[] {
  const out: number[] = []
  for (const b of body) {
    if (b.kind === 'text' || b.kind === 'heading') out.push(...gapsIn(b.text))
    else if (b.kind === 'bullets') b.items.forEach((t) => out.push(...gapsIn(t)))
    else if (b.kind === 'table') b.rows.flat().forEach((t) => out.push(...gapsIn(t)))
    else if (b.kind === 'flow') b.steps.forEach((t) => out.push(...gapsIn(t)))
    else if (b.kind === 'diagram')
      b.diagram.items.forEach((i) => i.shape === 'gap' && out.push(i.n))
  }
  return out
}

/** Question numbers in the order they appear on screen (for the question navigator). */
export function screenOrder(groups: QuestionGroup[]): number[] {
  return groups.flatMap((g) => (g.type === 'completion' ? bodyGaps(g.body) : groupNumbers(g)))
}

/** Short human name for a question type, used in the error log and the dashboard. */
export function groupTypeKey(g: QuestionGroup): string {
  if (g.type === 'completion') return `completion-${g.format}`
  return g.type
}

export const QUESTION_TYPE_LABEL: Record<string, string> = {
  tfng: 'True / False / Not Given',
  ynng: 'Yes / No / Not Given',
  headings: 'Matching headings',
  'match-info': 'Matching information',
  'match-features': 'Matching features',
  'match-endings': 'Matching sentence endings',
  map: 'Map / plan labelling',
  mcq: 'Multiple choice',
  'mcq-multi': 'Multiple choice (two answers)',
  'completion-sentence': 'Sentence completion',
  'completion-summary': 'Summary completion',
  'completion-note': 'Note completion',
  'completion-table': 'Table completion',
  'completion-flowchart': 'Flow-chart completion',
  'completion-form': 'Form completion',
  'completion-short-answer': 'Short answer',
  'completion-diagram': 'Diagram labelling',
}

// ---------- Writing ----------

const SeriesSchema = z.object({ name: z.string(), values: z.array(z.number()) })

const SimpleChartSchema = z.discriminatedUnion('kind', [
  z.object({
    kind: z.literal('line'),
    title: z.string(),
    xLabels: z.array(z.string()).min(2),
    yLabel: z.string(),
    unit: z.string().default(''),
    series: z.array(SeriesSchema).min(1).max(6),
  }),
  z.object({
    kind: z.literal('bar'),
    title: z.string(),
    categories: z.array(z.string()).min(2),
    yLabel: z.string(),
    unit: z.string().default(''),
    series: z.array(SeriesSchema).min(1).max(5),
    horizontal: z.boolean().default(false),
  }),
  z.object({
    kind: z.literal('pie'),
    title: z.string(),
    pies: z
      .array(
        z.object({
          label: z.string(),
          slices: z.array(z.object({ name: z.string(), value: z.number() })).min(2),
        }),
      )
      .min(1)
      .max(3),
  }),
  z.object({
    kind: z.literal('table'),
    title: z.string(),
    columns: z.array(z.string()).min(2),
    rows: z
      .array(z.object({ label: z.string(), values: z.array(z.union([z.number(), z.string()])) }))
      .min(2),
    unit: z.string().default(''),
  }),
  z.object({
    kind: z.literal('map'),
    title: z.string(),
    maps: z
      .array(z.object({ label: z.string(), diagram: DiagramSchema }))
      .min(1)
      .max(2),
  }),
  z.object({
    kind: z.literal('process'),
    title: z.string(),
    steps: z.array(z.object({ label: z.string(), detail: z.string().optional() })).min(4),
    cycle: z.boolean().default(false),
  }),
])
export const ChartSchema = z.union([
  SimpleChartSchema,
  z.object({
    kind: z.literal('mixed'),
    title: z.string(),
    charts: z.array(SimpleChartSchema).min(2).max(2),
  }),
])
export type Chart = z.infer<typeof ChartSchema>
export type SimpleChart = z.infer<typeof SimpleChartSchema>

export const TASK2_TYPES = [
  'opinion',
  'discussion',
  'adv-disadv',
  'problem-solution',
  'two-part',
] as const
export const TASK1A_TYPES = ['line', 'bar', 'pie', 'table', 'mixed', 'map', 'process'] as const
export const TASK1G_TYPES = [
  'complaint',
  'request',
  'apology',
  'invitation',
  'thanks',
  'explanation',
] as const

export const ModelAnswerSchema = z.object({
  band: z.union([z.literal(6), z.literal(7), z.literal(8.5)]),
  text: z.string().min(400),
  /** Notes on what lifts (or holds back) this answer, anchored to quotes from it. */
  annotations: z.array(z.object({ quote: z.string().min(3), note: z.string().min(10) })).min(2),
})
export type ModelAnswer = z.infer<typeof ModelAnswerSchema>

export const WritingTaskSchema = z.object({
  id: Id,
  skill: z.literal('writing'),
  module: z.enum(['academic', 'general', 'both']),
  task: z.union([z.literal(1), z.literal(2)]),
  type: z.enum([...TASK2_TYPES, ...TASK1A_TYPES, ...TASK1G_TYPES]),
  topic: z.string().min(3),
  title: z.string().min(3),
  /** The task as printed on the paper. */
  prompt: z.string().min(20),
  /** General Training letters: the three bullet points. */
  bullets: z.array(z.string()).optional(),
  tone: z.enum(['formal', 'semi-formal', 'informal']).optional(),
  chart: ChartSchema.optional(),
  /** Planning prompts shown in the planning pane. */
  planHints: z.array(z.string()).min(2),
  models: z.array(ModelAnswerSchema).length(3),
})
export type WritingTask = z.infer<typeof WritingTaskSchema>

// ---------- Speaking ----------

export const Part1TopicSchema = z.object({
  id: Id,
  skill: z.literal('speaking'),
  kind: z.literal('part1'),
  topic: z.string().min(3),
  questions: z.array(z.string().min(5)).min(3).max(6),
})
export type Part1Topic = z.infer<typeof Part1TopicSchema>

export const CueCardSchema = z.object({
  id: Id,
  skill: z.literal('speaking'),
  kind: z.literal('cue-card'),
  theme: z.string().min(3),
  /** "Describe a place you visited that…" */
  prompt: z.string().min(10),
  /** "You should say:" points. */
  points: z.array(z.string()).min(3).max(4),
  /** "and explain…" */
  explain: z.string().min(5),
  /** Rounding-off question the examiner may ask after Part 2. */
  followUp: z.string().optional(),
  /** Linked Part 3 discussion questions. */
  part3: z.array(z.string().min(10)).min(4).max(8),
})
export type CueCard = z.infer<typeof CueCardSchema>

export const SpeakingItemSchema = z.discriminatedUnion('kind', [Part1TopicSchema, CueCardSchema])
export type SpeakingItem = z.infer<typeof SpeakingItemSchema>
