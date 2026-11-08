import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-paraphrase',
  skill: 'reading',
  module: 'both',
  order: 2,
  title: 'Spotting paraphrase',
  summary:
    'The answer rarely uses the question’s words: learn the six ways the test rewrites an idea.',
  types: ['paraphrase'],
  minutes: 8,
  sections: [
    {
      kind: 'text',
      heading: 'Why matching words is not enough',
      paragraphs: [
        'IELTS tests whether you understand **meaning**, not whether you can match letters. So the question almost always expresses the idea in different words from the text. This is **paraphrase**.',
        'Worse, the test often places the question’s exact words near the **wrong** answer. If you find the same word in the text, be suspicious; if you find the same *idea* in different words, you are probably in the right place.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Six common types of paraphrase',
      headers: ['Type', 'Question says…', 'Text says…'],
      rows: [
        ['Synonym', 'older trees', 'mature trees'],
        [
          'Word class change',
          'a sharp fall in visitor numbers (noun)',
          'visitor numbers fell sharply (verb)',
        ],
        [
          'Active ↔ passive',
          'volunteers repair two thirds of the items',
          'about two thirds of items are repaired successfully',
        ],
        [
          'Positive ↔ negative',
          'the trust takes a long time to build',
          'such trust cannot be built quickly',
        ],
        ['General ↔ specific', 'a reduced need for medication', 'asked for fewer painkillers'],
        ['Phrase ↔ single word', 'people who are not members', 'non-members'],
      ],
    },
    {
      kind: 'steps',
      heading: 'How to find the paraphrase',
      items: [
        'Underline the **key idea** in the question, not just a key word. For “Older trees deserve more protection”, the idea is *protect old trees more than young ones*.',
        'Keep **names, numbers and technical nouns** as scanning anchors: these are rarely paraphrased.',
        'Before you look at the text, think of **two or three ways** the idea could be expressed: older → mature, established, long-standing.',
        'When you find a candidate sentence, check that **every part** of the question is matched, including the qualifier (some, most, only) and the direction (more, less).',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: ignoring the shared word',
      context:
        'A: “Shade is the cheapest air conditioning a city will ever buy,” says Dr Okafor. C: Dr Reyes is cautious about air quality, though: some species release chemicals that can actually add to pollution on hot days.',
      question:
        'Which researcher says: “Certain trees can make the atmosphere dirtier when temperatures are high”?',
      answer: 'C (Dr Reyes)',
      reasoning: [
        'The key idea is *some trees cause pollution in hot weather*. The tempting shortcut is to scan for “air”, which appears in both A and C.',
        'A uses “air conditioning”, which is about cooling, so the shared word is a trap.',
        'C matches every part in different words: “certain trees” = “some species”, “make the atmosphere dirtier” = “add to pollution”, “when temperatures are high” = “on hot days”.',
        'Because all three parts match, C is the answer, even though the most “obvious” word match pointed elsewhere.',
      ],
    },
    {
      kind: 'trap',
      text: 'The **word-match trap**: an option that repeats a word from the question is often wrong. In the real test, the right answer is usually the one that matches the *meaning* with *different* words.',
    },
    {
      kind: 'tip',
      text: 'Keep a **paraphrase notebook**. After every practice test, write each question phrase next to the text phrase it matched (“fall in number” → “decline”). Band 8 readers recognise these pairs instantly because they have seen them before.',
    },
  ],
  drills: ['drill-paraphrase-match'],
})
