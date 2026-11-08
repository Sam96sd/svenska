import { defineLesson } from '../define'

export default defineLesson({
  id: 'l-word-limits',
  skill: 'listening',
  module: 'both',
  order: 6,
  title: 'Keep to the word limit',
  summary:
    'Learn exactly what counts as a word and a number, so that a right answer is never marked wrong for being too long.',
  types: ['word-limit'],
  minutes: 7,
  sections: [
    {
      kind: 'text',
      heading: 'The rule that costs easy marks',
      paragraphs: [
        'Completion questions always give a word limit, such as **ONE WORD ONLY** or **NO MORE THAN TWO WORDS AND/OR A NUMBER**. If your answer is longer than the limit, it is marked wrong, **even if every word is correct**. Examiners do not choose the right part for you.',
        '“NO MORE THAN TWO WORDS AND/OR A NUMBER” means you may write one word, two words, a number, or one or two words plus a number. You may not write three words.',
      ],
    },
    {
      kind: 'list',
      heading: 'What counts as a word',
      items: [
        'A **hyphenated word** counts as one word: “part-time”, “twenty-five”, “well-known”.',
        'A **number** written in digits counts as a number, not a word: 45, 7.30, 2025.',
        'A group of digits such as a phone number (0161 496 0315) counts as one number.',
        '**Articles** (a, an, the) count as words. Leave them out if they push you over the limit; they are rarely needed.',
        'Symbols already printed on the form (£, %, km) do not need to be written again.',
        'A time such as “10 am” counts as one number: “am” and “pm” are part of the time.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Valid and invalid answers (NO MORE THAN TWO WORDS AND/OR A NUMBER)',
      headers: ['Answer', 'Valid?', 'Why'],
      rows: [
        ['city museum', 'Yes', 'two words'],
        ['the city museum', 'No', 'three words: drop “the”'],
        ['15 May', 'Yes', 'a number and one word'],
        ['2 large towels', 'Yes', 'a number and two words'],
        ['part-time job', 'Yes', 'the hyphenated word counts as one'],
        ['a very quiet room', 'No', 'four words: the gap probably needs only “quiet”'],
        ['15 and 20', 'No', 'two numbers'],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: too many words',
      context:
        'Notes (ONE WORD ONLY): Volunteers must bring their own ______.\n\nRecording: “Please bring your own gardening gloves, because we never have enough to go round.”',
      question: 'What should you write?',
      answer: 'gloves',
      reasoning: [
        'The natural answer is “gardening gloves”, but that is two words, so it would score zero.',
        'Ask which word the notes cannot do without. “Bring their own gardening” makes no sense; “bring their own gloves” does.',
        'Write “gloves”. The describing word “gardening” is extra detail that the one-word limit does not allow.',
      ],
    },
    {
      kind: 'trap',
      text: 'Never copy words that are already printed next to the gap. If the form says “£ ______ per night”, writing “£80 per night” repeats words and may break the limit. Write “80”.',
    },
    {
      kind: 'tip',
      text: 'Check the limit for **every** group of questions, not just the first. A test can switch from TWO WORDS AND/OR A NUMBER in Part 1 to ONE WORD ONLY in Part 4, and the change is easy to miss.',
    },
  ],
  drills: ['drill-lecture-notes', 'drill-listen-form-spelling'],
})
