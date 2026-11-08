import { defineLesson } from '../define'

export default defineLesson({
  id: 'l-predict',
  skill: 'listening',
  module: 'both',
  order: 1,
  title: 'Predict before you listen',
  summary:
    'Use the reading time to predict the type of answer for every gap and underline the key words.',
  types: ['prediction'],
  minutes: 8,
  sections: [
    {
      kind: 'text',
      heading: 'Why the reading time matters',
      paragraphs: [
        'Before each part of the recording you get about thirty seconds to look at the questions. Strong candidates never just read them: they **predict** what kind of answer each gap needs. Then, while listening, they are waiting for one specific kind of information instead of trying to catch everything.',
        'You cannot predict the exact word, but you can almost always predict its *type*: a noun or an adjective, singular or plural, a number, a price, a date, a time, a name or a unit of measurement. That alone tells you when to start writing and what to ignore.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Predict in four moves',
      items: [
        'Read the instructions and circle the word limit (for example, ONE WORD AND/OR A NUMBER).',
        'Read the words on both sides of each gap and decide the grammar: “a ___” needs a singular noun, “two ___” a plural, “very ___” an adjective, “by ___” a time or date.',
        'Look for symbols and units: £, %, km, “per night”, “pm”. They tell you the answer is a number and what follows it.',
        'Underline one or two key words per question (names, places, topic words). Expect the speaker to use a synonym, so think of one in advance.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Clues on the page and what they predict',
      headers: ['Clue in the question', 'Likely answer type', 'Example'],
      rows: [
        ['£ ___ per person', 'a price (number)', '£ 35'],
        [
          'an ___ entrance',
          'a singular noun or adjective beginning with a vowel',
          'an east entrance',
        ],
        ['open until ___ pm', 'a time', '9.30'],
        ['Surname: ___', 'a name, probably spelled out', 'Hollis'],
        ['bring two ___', 'a plural noun', 'towels'],
        ['distance: ___ km', 'a number', '12'],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: a hotel booking form',
      context:
        'Form:\nHotel: the (1) ______ Hotel\nArrival: (2) ______ 5 May\nRoom: a (3) ______ room\nPrice: £ (4) ______ per night\n\nRecording: “We’re booked into the Belmont — B, E, L, M, O, N, T. We arrive on the Friday, the fifth, and we’ve asked for a quiet room at the back, not one facing the road. It’s eighty-two pounds a night, including breakfast.”',
      question: 'Predict the type of answer for gaps 1–4, then fill them in.',
      answer: '1 Belmont  2 Friday  3 quiet  4 82',
      reasoning: [
        'Gap 1 sits between “the” and “Hotel”, so it is a name. Names in Part 1 are usually spelled out: get ready to write letters.',
        'Gap 2 comes before a date, so it is probably a day of the week. “Friday” is the only day mentioned.',
        'Gap 3 comes after “a” and before “room”, so it is an adjective describing the room. “Quiet” fits; “at the back” is a position, not an adjective.',
        'Gap 4 follows “£” and comes before “per night”, so it is a number. “A night” is a paraphrase of “per night”, and breakfast is extra information you do not need.',
      ],
    },
    {
      kind: 'trap',
      text: 'Prediction tells you the *type* of answer, not the answer itself. If you predicted “single room” but the speaker says “a quiet room”, write what you hear. Never fill a gap with your prediction because it sounds likely.',
    },
    {
      kind: 'tip',
      text: 'Write tiny labels next to each gap during the reading time: **N** (noun), **N-pl** (plural noun), **#** (number), **£**, **date**, **name**. It takes seconds, and your eyes will know what to look for when the audio starts.',
    },
    {
      kind: 'list',
      heading: 'Quick checklist for the reading time',
      items: [
        'Word limit circled?',
        'Answer type marked for every gap?',
        'Key words underlined, with a synonym in mind?',
        'Where does the next group of questions begin?',
      ],
    },
  ],
  drills: ['drill-listen-form-spelling'],
})
