import { defineLesson } from '../define'

export default defineLesson({
  id: 'l-distractors',
  skill: 'listening',
  module: 'both',
  order: 3,
  title: 'Don’t fall for distractors',
  summary:
    'Spot corrections, rejected options and changed plans, and wait for the final answer before you write.',
  types: ['distractor'],
  minutes: 8,
  sections: [
    {
      kind: 'text',
      heading: 'Why you hear two answers',
      paragraphs: [
        'In almost every part of the test you will hear **more than one possible answer** for the same gap: two prices, two dates, two rooms. Only one is correct. The other is a **distractor**, put there to test whether you understand the conversation or are simply writing the first matching word.',
        'Distractors are fair: the speaker always makes it clear which option is final. Your job is to listen for the words that cancel the first option and confirm the second.',
      ],
    },
    {
      kind: 'list',
      heading: 'The four common patterns',
      items: [
        '**Self-correction**: “It’s on Tuesday — oh no, sorry, Thursday.”',
        '**Rejected option**: “We could take the train, but it’s too expensive, so we’ll drive.”',
        '**Changed plan**: “It was going to be in the main hall, but they’ve moved it to the library.”',
        '**At first… but then…**: “At first we used the car park at the back, but then it closed.”',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: a self-correction',
      context:
        'Form: Start date: ______ March\n\nRecording: “The course starts on the twelfth of March. Oh, hang on, that’s the date we sent out last week, and it changed. It’s now the nineteenth.”',
      question: 'What is the start date?',
      answer: '19 March',
      reasoning: [
        'The first date, the twelfth, fits the gap perfectly, which is why it is a good distractor.',
        '“Oh, hang on” warns you that a correction is coming, and “it changed” cancels the twelfth.',
        '“It’s now the nineteenth” gives the final, current date. Write 19 only after you hear it.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: a rejected option',
      context:
        'Notes: Recommended transport to the airport: ______\n\nRecording: “Lots of people get a taxi, and it’s quick, but at that time of night it costs a fortune. The shuttle bus is what I’d go for. It leaves every half hour and it’s a third of the price.”',
      question: 'What transport is recommended?',
      answer: '(the) shuttle bus',
      reasoning: [
        'The taxi is mentioned first and given a positive point (“it’s quick”), so it is tempting.',
        '“But… it costs a fortune” rejects the taxi.',
        '“What I’d go for” is a recommendation, so the shuttle bus is the answer.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Language that cancels the first option',
      items: [
        {
          phrase: 'Sorry, I mean… / No, wait…',
          use: 'A self-correction: the next word replaces the last one.',
        },
        { phrase: 'Actually… / On second thoughts…', use: 'The speaker changes their mind.' },
        {
          phrase: 'That was the old… / That’s out of date',
          use: 'The information that follows is the current one.',
        },
        {
          phrase: 'It was going to be… but…',
          use: 'A changed plan: the first option is no longer true.',
        },
        { phrase: '… rather than… / … instead', use: 'One option is chosen over another.' },
        {
          phrase: 'That’s fully booked / That one’s not available',
          use: 'The option has been ruled out.',
        },
      ],
    },
    {
      kind: 'steps',
      heading: 'How to wait for the final answer',
      items: [
        'When you hear a possible answer, write it lightly in the margin, not in the gap.',
        'Keep listening for two or three more seconds for “but”, “actually”, “sorry” or “instead”.',
        'If the option is confirmed (“Yes, that’s fine”, “Let’s do that”) or the topic changes, write it in the gap.',
        'If it is cancelled, cross it out and wait for the replacement.',
      ],
    },
    {
      kind: 'trap',
      text: 'The **second** option is not always right. Sometimes a speaker suggests a change and then decides against it: “Shall we move it to Friday? No, actually, Wednesday is still better.” Follow the conversation to its end: the answer is what they finally agree.',
    },
    {
      kind: 'tip',
      text: 'Repetitions help you. In Part 1 the other speaker often repeats the final answer to check it (“So that’s the nineteenth?”). If you hear a confirmation like this, you can be sure.',
    },
  ],
  drills: ['drill-listen-distractors'],
})
