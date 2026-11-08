/**
 * IELTS assessment criteria, paraphrased in plain English (not copied from the official band
 * descriptors). Used by the AI grading prompts, the self-assessment checklists and the
 * "7 vs 8 vs 9" comparison cards. Edit here and everything updates.
 */

export type WritingCriterion = 'ta' | 'tr' | 'cc' | 'lr' | 'gra'
export type SpeakingCriterion = 'fc' | 'lr' | 'gra' | 'p'
export type CriterionId = WritingCriterion | SpeakingCriterion

export interface LevelDescription {
  band: 6 | 7 | 8 | 9
  summary: string
  /** A short example sentence or answer fragment at this level. */
  example: string
}

export interface Criterion {
  id: CriterionId
  name: string
  short: string
  /** What the examiner is looking at, in one sentence. */
  focus: string
  levels: LevelDescription[]
  /** Yes/no checks for the offline self-assessment, from the Band 7–8 descriptors. */
  checklist: string[]
}

export const WRITING_CRITERIA: Record<WritingCriterion, Criterion> = {
  ta: {
    id: 'ta',
    name: 'Task Achievement',
    short: 'TA',
    focus:
      'Task 1: does the answer cover the key information accurately, with a clear overview (Academic) or all three bullet points in the right tone (General)?',
    levels: [
      {
        band: 6,
        summary:
          'Covers the task, but the overview is unclear or missing, and some details are listed rather than selected; data may be slightly inaccurate.',
        example: 'In 2000 sales were 20%. In 2005 they were 25%. In 2010 they were 40%.',
      },
      {
        band: 7,
        summary:
          'Has a clear overview of the main trends or stages; key features are presented and highlighted, though they could be developed or compared more fully.',
        example:
          'Overall, sales rose steadily throughout the period, with the sharpest growth after 2005.',
      },
      {
        band: 8,
        summary:
          'Covers every requirement well. The overview is clear and accurate, key features are well selected, compared and supported by precise data; only occasional minor gaps.',
        example:
          'Overall, online sales more than doubled, overtaking in-store sales by 2010, whereas catalogue sales fell steadily.',
      },
      {
        band: 9,
        summary:
          'Fully satisfies every requirement; the key features are selected, compared and illustrated with complete precision.',
        example:
          'Online sales, negligible in 2000, had become the dominant channel within a decade, while catalogue sales dwindled to a fraction of their former level.',
      },
    ],
    checklist: [
      'Academic: my second paragraph is a clear overview of the main trends, with no numbers.',
      'Academic: I compared the key features instead of listing every figure.',
      'Academic: every number I quote is accurate, with the right unit.',
      'General: I covered all three bullet points, each in its own paragraph.',
      'General: the purpose of the letter is clear in the first paragraph.',
      'General: the tone and the opening and closing match the reader (formal, semi-formal or informal).',
      'I wrote at least 150 words and gave no personal opinions (Academic).',
    ],
  },
  tr: {
    id: 'tr',
    name: 'Task Response',
    short: 'TR',
    focus:
      'Task 2: does the essay answer every part of the question with a clear, consistent position and fully developed, relevant ideas?',
    levels: [
      {
        band: 6,
        summary:
          'Addresses all parts, but some more fully than others; a position is given but may become unclear; some ideas are underdeveloped or too general.',
        example: 'Technology has many advantages and disadvantages. It is good and bad for people.',
      },
      {
        band: 7,
        summary:
          'Addresses all parts with a clear position throughout; main ideas are extended and supported, though some may over-generalise or lack focus.',
        example:
          'I believe the benefits of remote work outweigh the drawbacks, mainly because it widens access to jobs.',
      },
      {
        band: 8,
        summary:
          'Sufficiently addresses every part of the prompt. The position is clear and well developed; ideas are relevant, extended and well supported, with only occasional lapses.',
        example:
          'Remote work widens access to skilled jobs: a parent in a rural area, for instance, can now compete for roles once limited to city commuters.',
      },
      {
        band: 9,
        summary:
          'Fully addresses every part with a fully developed position; ideas are relevant, fully extended and supported throughout.',
        example:
          'By removing the commute as a barrier, remote work redistributes opportunity geographically, which is arguably its most far-reaching effect.',
      },
    ],
    checklist: [
      'I answered every part of the question (count them: “discuss both views AND give your opinion” is two parts).',
      'My opinion is stated in the introduction and stays the same until the conclusion.',
      'Each body paragraph develops ONE main idea fully: point, explanation, example, link.',
      'My examples are specific and realistic, with no invented statistics.',
      'Nothing is off-topic, and I didn’t use memorised template sentences.',
      'I wrote at least 250 words (ideally 260–300).',
    ],
  },
  cc: {
    id: 'cc',
    name: 'Coherence & Cohesion',
    short: 'CC',
    focus:
      'Is the writing logically organised, with clear paragraphs and linking that helps rather than gets in the way?',
    levels: [
      {
        band: 6,
        summary:
          'Arranged coherently with overall progression, but linking is mechanical or sometimes faulty; referencing may be unclear; paragraphing is not always logical.',
        example:
          'Firstly, cars are bad. Secondly, they are expensive. Moreover, they are dangerous. In conclusion…',
      },
      {
        band: 7,
        summary:
          'Information is logically organised with clear progression; a range of linking devices is used, with some under- or over-use; each paragraph has a clear central topic.',
        example: 'One major drawback is cost. This is particularly true for younger drivers, who…',
      },
      {
        band: 8,
        summary:
          'Information and ideas are sequenced logically; all aspects of cohesion are well managed; paragraphing is sufficient and appropriate; only occasional lapses.',
        example:
          'This expense falls hardest on young drivers, whose insurance premiums can exceed the value of the car itself.',
      },
      {
        band: 9,
        summary:
          'Cohesion is used so skilfully that it attracts no attention; paragraphing is managed expertly.',
        example: 'Such costs, however, are only half the story.',
      },
    ],
    checklist: [
      'Every paragraph has one clear central idea, stated near the start.',
      'I used reference words (this, these, such, which) instead of repeating nouns.',
      'My linking words are varied and not forced at the start of every sentence.',
      'The ideas follow a logical order that a reader can follow without effort.',
    ],
  },
  lr: {
    id: 'lr',
    name: 'Lexical Resource',
    short: 'LR',
    focus: 'How wide, precise and natural is the vocabulary, including collocations and spelling?',
    levels: [
      {
        band: 6,
        summary:
          'An adequate range for the task; tries less common vocabulary with some inaccuracy; some errors in word choice, spelling or word formation that don’t stop communication.',
        example: 'Pollution makes a big damage to the environment.',
      },
      {
        band: 7,
        summary:
          'Enough range for some flexibility and precision; uses less common items with some awareness of style and collocation; occasional errors in word choice, spelling or word formation.',
        example: 'Pollution causes considerable damage to fragile ecosystems.',
      },
      {
        band: 8,
        summary:
          'A wide range used fluently and flexibly to convey precise meanings; skilful use of uncommon or idiomatic items, with only occasional slips in collocation or word choice.',
        example: 'Industrial run-off has inflicted lasting damage on coastal ecosystems.',
      },
      {
        band: 9,
        summary: 'A wide range with very natural, sophisticated control; rare minor slips only.',
        example: 'Decades of unchecked run-off have left coastal ecosystems all but irreparable.',
      },
    ],
    checklist: [
      'I used topic-specific words, not just general ones (e.g. “emissions”, not “bad gases”).',
      'My collocations are natural (e.g. “pose a threat”, “a sharp rise”).',
      'I paraphrased the question instead of copying its words.',
      'I avoided repeating the same key word many times.',
      'My spelling is accurate, and I didn’t use idioms just to show off.',
    ],
  },
  gra: {
    id: 'gra',
    name: 'Grammatical Range & Accuracy',
    short: 'GRA',
    focus:
      'How varied are the sentence structures, and how accurate is the grammar and punctuation?',
    levels: [
      {
        band: 6,
        summary:
          'A mix of simple and complex sentences, but with limited flexibility; some errors in grammar and punctuation that rarely reduce communication.',
        example: 'If the government will invest more, the problem would be solved.',
      },
      {
        band: 7,
        summary:
          'A variety of complex structures; frequent error-free sentences; good control of grammar and punctuation with a few errors.',
        example: 'If the government invested more, the problem could be reduced significantly.',
      },
      {
        band: 8,
        summary:
          'A wide range of structures used flexibly; the majority of sentences are error-free; only very occasional errors or slips.',
        example: 'Were governments to invest more, the problem would be far easier to contain.',
      },
      {
        band: 9,
        summary:
          'A wide range of structures with full flexibility and accuracy; only rare minor slips.',
        example:
          'Had earlier governments invested, the problem would never have reached its present scale.',
      },
    ],
    checklist: [
      'Most of my sentences have no errors at all.',
      'I used a range of complex structures: conditionals, relative clauses, passives, participle clauses.',
      'My articles (a/an/the), plurals and subject–verb agreement are correct.',
      'My punctuation is correct, with no comma splices.',
    ],
  },
}

export const SPEAKING_CRITERIA: Record<SpeakingCriterion, Criterion> = {
  fc: {
    id: 'fc',
    name: 'Fluency & Coherence',
    short: 'FC',
    focus: 'Can you speak at length without effort, with ideas that connect logically?',
    levels: [
      {
        band: 6,
        summary:
          'Willing to speak at length, but coherence is sometimes lost through repetition, self-correction or hesitation; discourse markers used, not always appropriately.',
        example: 'I like… I like reading, um, because, because it is, how to say, relaxing.',
      },
      {
        band: 7,
        summary:
          'Speaks at length without noticeable effort; some language-related hesitation, repetition or self-correction; uses a range of connectives flexibly.',
        example: 'I’m really into reading, mainly because it helps me switch off after work.',
      },
      {
        band: 8,
        summary:
          'Speaks fluently with only occasional repetition or self-correction; hesitation is usually to plan content, not to find words; develops topics coherently.',
        example:
          'Well, to be honest, reading’s my way of switching off — I tend to go for crime novels, partly because…',
      },
      {
        band: 9,
        summary:
          'Speaks fluently with only rare repetition or self-correction; any hesitation is content-related; fully coherent and fully developed.',
        example:
          'Reading is pretty much how I unwind, though what I read has shifted a lot over the years…',
      },
    ],
    checklist: [
      'I answered beyond a single sentence: answer, reason, example, contrast.',
      'When I paused, it was to think of an idea, not to find a word.',
      'I rarely repeated myself or restarted sentences.',
      'In Part 2 I kept talking for close to two minutes.',
    ],
  },
  lr: {
    id: 'lr',
    name: 'Lexical Resource',
    short: 'LR',
    focus: 'How wide and precise is your vocabulary on every topic, and can you paraphrase?',
    levels: [
      {
        band: 6,
        summary:
          'Wide enough vocabulary to discuss topics at length and make meaning clear despite inappropriacies; generally paraphrases successfully.',
        example: 'My city is very big and has many good things to do.',
      },
      {
        band: 7,
        summary:
          'Uses vocabulary flexibly on a variety of topics; some less common and idiomatic vocabulary, with some awareness of style and collocation.',
        example: 'My city is pretty lively — there’s always something going on.',
      },
      {
        band: 8,
        summary:
          'A wide resource used readily and flexibly to convey precise meaning; skilful use of less common and idiomatic items, occasional inaccuracies; effective paraphrase.',
        example:
          'It’s a city that never really sleeps, which is a blessing and a curse if you live near the centre.',
      },
      {
        band: 9,
        summary:
          'Full flexibility and precision on all topics; idiomatic language used naturally and accurately.',
        example:
          'It has a buzz that’s hard to put into words, though the nightlife can wear thin after a while.',
      },
    ],
    checklist: [
      'I used precise words for the topic, not only general ones like “good” or “nice”.',
      'I used a few natural collocations or idiomatic phrases correctly.',
      'When I didn’t know a word, I explained it another way and kept going.',
    ],
  },
  gra: {
    id: 'gra',
    name: 'Grammatical Range & Accuracy',
    short: 'GRA',
    focus: 'How varied and accurate is your grammar when you speak?',
    levels: [
      {
        band: 6,
        summary:
          'A mix of simple and complex structures, but with limited flexibility; frequent mistakes in complex structures, though these rarely cause problems.',
        example: 'When I was child I go to the beach every summer.',
      },
      {
        band: 7,
        summary:
          'Uses a range of complex structures with some flexibility; frequently produces error-free sentences, though some mistakes persist.',
        example: 'When I was a child, we used to go to the beach every summer.',
      },
      {
        band: 8,
        summary:
          'A wide range of structures used flexibly; most sentences are error-free, with only occasional inappropriacies or basic non-systematic errors.',
        example:
          'If we hadn’t moved inland, I’d probably still be going to that beach every weekend.',
      },
      {
        band: 9,
        summary:
          'Full range of structures used naturally and appropriately; consistently accurate apart from native-speaker-type slips.',
        example:
          'Having grown up by the sea, I find it hard to imagine living anywhere landlocked.',
      },
    ],
    checklist: [
      'I mixed tenses correctly: past simple for stories, present perfect for experience.',
      'I used some complex sentences: conditionals, relative clauses, “used to/would”.',
      'Most of my sentences had no grammar mistakes.',
    ],
  },
  p: {
    id: 'p',
    name: 'Pronunciation',
    short: 'P',
    focus: 'How easy are you to understand, and how well do you use stress, rhythm and intonation?',
    levels: [
      {
        band: 6,
        summary:
          'Uses a range of features with mixed control; can generally be understood, though some words or sounds are mispronounced, reducing clarity at times.',
        example: 'Stress on the wrong syllable (“deVElop” → “DEvelop”), dropped -ed endings.',
      },
      {
        band: 7,
        summary:
          'Shows the positive features of Band 6 and some of Band 8: generally clear, with good use of features but occasional lapses.',
        example: 'Clear word stress, mostly natural rhythm, a few flat stretches.',
      },
      {
        band: 8,
        summary:
          'Uses a wide range of features; sustains flexible use of rhythm, stress and intonation; easy to understand throughout; accent has minimal effect on intelligibility.',
        example:
          'Natural chunking (“I’d say | it’s mainly because…”), stress on key words, rising and falling tone.',
      },
      {
        band: 9,
        summary:
          'Uses the full range of features with precision and subtlety; effortless to understand throughout.',
        example: 'Intonation and stress used to signal attitude and emphasis naturally.',
      },
    ],
    checklist: [
      'My word stress is right on longer words (deVELop, PHOtograph, photOGraphy).',
      'I pronounced -ed and -s endings clearly.',
      'I spoke in natural chunks, stressing the important words.',
      'My voice rose and fell; I didn’t speak in a flat tone.',
    ],
  },
}

export const WRITING_TASK1_CRITERIA: WritingCriterion[] = ['ta', 'cc', 'lr', 'gra']
export const WRITING_TASK2_CRITERIA: WritingCriterion[] = ['tr', 'cc', 'lr', 'gra']
export const SPEAKING_CRITERIA_IDS: SpeakingCriterion[] = ['fc', 'lr', 'gra', 'p']

/** Plain-English descriptor text for prompts: "Band 8: …" lines per criterion. */
export function descriptorText(c: Criterion): string {
  return [`${c.name} — ${c.focus}`, ...c.levels.map((l) => `  Band ${l.band}: ${l.summary}`)].join(
    '\n',
  )
}
