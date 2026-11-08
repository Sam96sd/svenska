/**
 * IELTS exam facts: the single source of truth for timings, structure and scoring.
 * Everything else in the IELTS section (timers, mock tests, the overview page, scoring)
 * reads from here, so a format change only needs editing in one place.
 */

export type IeltsModule = 'academic' | 'general'
export type Skill = 'listening' | 'reading' | 'writing' | 'speaking'

export const SKILLS: Skill[] = ['listening', 'reading', 'writing', 'speaking']

export const SKILL_LABEL: Record<Skill, string> = {
  listening: 'Listening',
  reading: 'Reading',
  writing: 'Writing',
  speaking: 'Speaking',
}

export const MODULE_LABEL: Record<IeltsModule, string> = {
  academic: 'Academic',
  general: 'General Training',
}

export interface SectionSpec {
  title: string
  description: string
}

export const LISTENING = {
  minutes: 30,
  questions: 40,
  /** Same test for both modules. */
  shared: true,
  playedOnce: true,
  parts: [
    {
      title: 'Part 1',
      description: 'A conversation between two people in an everyday social context.',
    },
    {
      title: 'Part 2',
      description: 'A monologue in an everyday social context, e.g. a talk about local facilities.',
    },
    {
      title: 'Part 3',
      description: 'A conversation among up to four people in an educational or training context.',
    },
    {
      title: 'Part 4',
      description: 'A monologue on an academic subject, such as a university lecture.',
    },
  ] satisfies SectionSpec[],
  questionsPerPart: 10,
} as const

export const READING = {
  minutes: 60,
  questions: 40,
  /** Computer-delivered: answers are typed straight in, so there is no extra transfer time. */
  transferMinutes: 0,
  /** Recommended split of the 60 minutes across the three sections. */
  suggestedSplit: [17, 20, 23],
  /** Flag a question once a learner has been stuck on it this long. */
  stuckAfterSeconds: 120,
  academic: [
    { title: 'Passage 1', description: 'A long authentic text, often descriptive or factual.' },
    { title: 'Passage 2', description: 'A long authentic text, often discursive.' },
    {
      title: 'Passage 3',
      description: 'The longest and hardest text, often with a detailed argument.',
    },
  ] satisfies SectionSpec[],
  general: [
    {
      title: 'Section 1',
      description: 'Social survival: notices, adverts, timetables, short factual texts.',
    },
    {
      title: 'Section 2',
      description: 'Workplace survival: job descriptions, contracts, staff training material.',
    },
    {
      title: 'Section 3',
      description: 'General reading: one longer, more complex text on a topic of general interest.',
    },
  ] satisfies SectionSpec[],
  /** Typical length of one Academic passage, in words. */
  academicPassageWords: [750, 950],
} as const

export const WRITING = {
  minutes: 60,
  task1: {
    minWords: 150,
    suggestedMinutes: 20,
    weight: 1,
    academic: 'Describe a graph, table, chart, map or process in your own words.',
    general: 'Write a letter (formal, semi-formal or informal) that covers three bullet points.',
  },
  task2: {
    minWords: 250,
    suggestedMinutes: 40,
    /** Task 2 counts twice as much as Task 1 towards the Writing band. */
    weight: 2,
    description: 'Write an essay in response to a point of view, argument or problem.',
    /** What the app suggests aiming for: long enough to develop ideas, short enough to proofread. */
    targetWords: [260, 300],
  },
} as const

export const SPEAKING = {
  minutes: [11, 14],
  faceToFace: true,
  part1: {
    title: 'Part 1',
    minutes: [4, 5],
    description: 'Introduction and questions on familiar topics.',
  },
  part2: {
    title: 'Part 2',
    prepSeconds: 60,
    minSpeakSeconds: 60,
    maxSpeakSeconds: 120,
    /** Nudge the learner if they stop before this. */
    nudgeBeforeSeconds: 90,
    description: 'A cue card: one minute to prepare, then speak for one to two minutes.',
  },
  part3: {
    title: 'Part 3',
    minutes: [4, 5],
    description: 'A discussion of more abstract ideas linked to Part 2.',
  },
} as const

export const FORMAT_NOTE =
  'From mid-2026 IELTS is delivered on computer only (some markets offer a “Writing on Paper” option). ' +
  'The mock tests here copy the computer-delivered screens: split-screen reading, highlighting and notes, ' +
  'a word counter in Writing and an on-screen timer.'

/** Total exam time excluding Speaking, in minutes. */
export const WRITTEN_MINUTES = LISTENING.minutes + READING.minutes + WRITING.minutes

export const BAND_STEPS = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9] as const
export const DEFAULT_TARGET_BAND = 8
