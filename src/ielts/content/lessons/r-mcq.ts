import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-mcq',
  skill: 'reading',
  module: 'both',
  order: 16,
  title: 'Multiple choice: predict, match, eliminate',
  summary:
    'Answer the question before you read the options, then prove every wrong option wrong: too broad, too narrow, reversed or mentioned but not the answer.',
  types: ['mcq', 'mcq-multi'],
  minutes: 10,
  sections: [
    {
      kind: 'text',
      heading: 'What the examiner is testing',
      paragraphs: [
        'IELTS multiple choice comes in two forms: **one answer from A–D**, and **choose TWO from A–E** (two marks). Questions follow **text order**; a final question may ask about the whole passage, such as the writer’s purpose.',
        'Every option is built from words in the passage, so “I saw that word in the text” proves nothing. You score by understanding **exactly what the text says about the question asked** — and by having a clear reason to reject each wrong option.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Predict → match → eliminate',
      items: [
        'Read the **stem only** (cover the options). Underline its key words and turn it into a direct question.',
        'Locate the part of the text — text order helps — and read two or three sentences **carefully**.',
        '**Predict**: answer the question in your own words before you look at the options.',
        '**Match**: find the option that means the same as your prediction. Expect a paraphrase, not the same words.',
        '**Eliminate**: prove each remaining option wrong with the text, using the types in the table below.',
        'For **choose TWO**, treat every option as a TRUE/FALSE statement against the text: exactly two should survive.',
      ],
    },
    {
      kind: 'compare',
      heading: 'The wrong-option types',
      headers: ['Type', 'What it does', 'Warning sign'],
      rows: [
        [
          'Too broad',
          'Claims more than the text: *all*, *always*, *any*, *prevents*',
          'The text has a limiting word: *some*, *often*, *can*, *in some places*',
        ],
        [
          'Too narrow',
          'Keeps one part of a wider idea: *only*, *just*, *mainly X*',
          'The text gives several cases or a range',
        ],
        [
          'Reversed relationship',
          'Swaps cause and effect or the direction: *faster* for *slower*, *rises* for *falls*',
          'Check the direction of every cause and comparison',
        ],
        [
          'Mentioned but not the answer',
          'A true detail that answers a different question',
          'Ask: is it true AND does it answer THIS stem?',
        ],
        [
          'Not stated',
          'Sounds logical or uses general knowledge',
          'You cannot point to a sentence that says it',
        ],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example',
      context:
        'Most of the town’s allotments were created after the war, when food was scarce. Today the waiting lists are long, but not mainly because people want to save money. Surveys of new tenants show that the chance to spend time outdoors and to meet neighbours matters far more to them than the cost of vegetables.',
      question:
        'Why do people want allotments today? A to grow cheaper food B because food is in short supply C for social and outdoor reasons D because the waiting lists have become shorter',
      answer: 'C',
      reasoning: [
        '**Predict** from the last sentence: “to be outside and to meet people”.',
        '**Match**: C, “social and outdoor reasons”, paraphrases “spend time outdoors and to meet neighbours”.',
        'A is **mentioned but not the answer**: saving money and the cost of vegetables are in the text, but “not mainly because” rejects them.',
        'B is **mentioned but not the answer**: scarcity explains why allotments were *created* after the war, not why people want them *today*. D is **reversed**: the lists are long. Answer: **C**.',
      ],
    },
    {
      kind: 'trap',
      text: 'The option that **repeats the most words** from the text is often a distractor. Correct options usually paraphrase; wrong options borrow exact phrases from nearby sentences to look familiar.',
    },
    {
      kind: 'tip',
      text: 'Write a one-letter code next to each option you reject — **B** (broad), **N** (narrow), **R** (reversed), **M** (mentioned), **X** (not stated). If you cannot give an option a code, you have not really eliminated it: go back to the text and look for the qualifier.',
    },
  ],
  drills: ['drill-mcq-eliminate'],
})
