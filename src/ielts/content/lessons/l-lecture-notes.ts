import { defineLesson } from '../define'

export default defineLesson({
  id: 'l-lecture-notes',
  skill: 'listening',
  module: 'both',
  order: 7,
  title: 'Part 4: lecture note completion',
  summary:
    'Follow the headings, predict each gap and keep up with a ten-question lecture with no break in the middle.',
  types: ['completion-note'],
  minutes: 10,
  sections: [
    {
      kind: 'text',
      heading: 'What Part 4 is like',
      paragraphs: [
        'Part 4 is a lecture or talk on an academic subject, given by one speaker. There is **no pause in the middle**, so you must follow all ten questions in one go. Most often the task is note completion, and the limit is usually **ONE WORD ONLY**.',
        'The vocabulary is more academic than in Parts 1 to 3, but the answers are usually ordinary nouns or adjectives. The difficulty is keeping up, not knowing rare words.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Before the lecture starts',
      items: [
        'Read the title and every heading: they are the structure of the talk, in order.',
        'For each gap, predict the word class (noun, plural noun, adjective) from the words around it.',
        'Underline the word just before or after each gap. The speaker will usually say it, or a synonym, right next to the answer.',
        'Notice where the headings are, so you know when to jump.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: two gaps under one heading',
      context:
        'Notes (ONE WORD ONLY):\nProblems with bamboo as a building material\n• it can be damaged by (7) ______\n• it is hard to (8) ______ for quality\n\nRecording: “Now, the drawbacks. Bamboo is strong, but unless it’s treated, it’s quickly attacked by insects. Another issue is consistency. Because every stem is different, it’s very difficult to test bamboo in the way we test steel.”',
      question: 'Complete gaps 7 and 8.',
      answer: '7 insects  8 test',
      reasoning: [
        '“Now, the drawbacks” matches the heading “Problems”, so gap 7 is close.',
        '“Damaged by” in the notes is a paraphrase of “attacked by”, and the plural noun that follows is “insects”.',
        '“Another issue” is the signpost for the next bullet. “Hard to” = “very difficult to”, and the verb after it is “test”.',
        '“Steel” is a comparison, not the answer: it does not fit “hard to ___ for quality”.',
      ],
    },
    {
      kind: 'text',
      heading: 'When you miss an answer',
      paragraphs: [
        'Everyone misses a gap sometimes. The danger is not the missed mark; it is the next three marks you lose while trying to remember it. As soon as you hear the speaker move on, **leave the gap and follow the next one**.',
        'Use the key words around each gap as checkpoints. If you hear the words of gap 5 while you are still waiting for gap 4, gap 4 has gone: move on. At the end, make a sensible guess of the right word class. A blank always scores zero.',
      ],
    },
    {
      kind: 'trap',
      text: 'With ONE WORD ONLY, a two-word answer is wrong even if both words are correct. If you hear “solar energy” and the notes say “a source of ______ energy”, write only “solar”. Read the words after the gap so you do not repeat them.',
    },
    {
      kind: 'tip',
      text: 'Lecturers often give an example straight after the answer (“…insects, such as termites and beetles”). The general word is usually the answer; the examples help you check it.',
    },
    {
      kind: 'phrases',
      heading: 'Signposts that move you to the next heading',
      items: [
        { phrase: 'Let’s start with…', use: 'The first heading.' },
        { phrase: 'Moving on to… / Now, the…', use: 'The next heading: jump to it.' },
        {
          phrase: 'Another issue / A further point',
          use: 'The next bullet under the same heading.',
        },
        { phrase: 'Finally… / To conclude…', use: 'The last heading: only one or two gaps left.' },
      ],
    },
  ],
  drills: ['drill-lecture-notes'],
})
