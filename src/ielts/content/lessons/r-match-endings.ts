import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-match-endings',
  skill: 'reading',
  module: 'both',
  order: 15,
  title: 'Matching sentence endings',
  summary:
    'The completed sentence must be grammatical and say what the passage says — eliminate endings that are true but do not complete that beginning.',
  types: ['match-endings'],
  minutes: 8,
  sections: [
    {
      kind: 'text',
      heading: 'What the examiner is testing',
      paragraphs: [
        'You get sentence beginnings and a longer list of endings. Each finished sentence must pass **two tests**: it must be **grammatically correct**, and it must **match the meaning of the passage**.',
        'The beginnings follow **text order**. The extra endings are not random: many are true statements from elsewhere in the passage, or ideas that sound sensible. They are wrong only because they do not complete **that particular beginning**.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Grammar filter, then meaning check',
      items: [
        'Read each beginning and predict the grammar of what follows: a verb (singular or plural? past or present?), a noun, a *that*-clause, or a reason/purpose phrase after a complete clause.',
        'Run through the endings and pencil in the letters that could **grammatically** follow each beginning. This often cuts seven options to two or three.',
        'Locate the beginning in the passage — use its key nouns and the text order — and read the sentence before and after carefully.',
        'Choose the ending that says what the passage says **about that subject**.',
        'Read the full sentence in your head. Is it grammatical, does it make sense, and can you point to the words that prove it?',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example',
      context:
        'In the 1950s, the town council planted lime trees along the main road. Residents soon complained that sticky sap dripped onto parked cars, so in the 1970s the trees were replaced with smaller maples, which drop leaves but no sap.',
      question:
        'The town council replaced the lime trees … A because residents disliked their effect on vehicles. B were planted along the main road. C because maples grow more quickly. D drop leaves but no sap.',
      answer: 'A',
      reasoning: [
        '**Grammar**: “The town council replaced the lime trees” is already a complete clause, so the ending must add information such as a reason or a time. B (*were planted…*) and D (*drop leaves…*) start with a verb, which cannot follow a complete clause. Eliminate both.',
        'Notice that B and D are both **true** — the limes were planted on the main road, and maples do drop leaves but no sap. True is not enough: they do not complete this beginning.',
        '**Meaning**: C fits the grammar, but the speed of growth is never mentioned. Eliminate.',
        'A: “disliked their effect on vehicles” paraphrases “complained that sticky sap dripped onto parked cars”, and *so* in the text confirms the cause. Answer: **A**.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Why a wrong ending is wrong',
      headers: ['Type', 'In the worked example', 'Question to ask'],
      rows: [
        [
          'Grammar clash',
          'B and D start with a verb after a complete clause',
          'Does the joined sentence read correctly?',
        ],
        [
          'True but unconnected',
          'B is true, but it is not why the trees were replaced',
          'Does the passage link THIS beginning to THIS ending?',
        ],
        ['Not in the text', 'C: maples grow more quickly', 'Can I point to the sentence?'],
        [
          'Wrong subject',
          'D is true of the maples, not of the council',
          'Who or what is the ending really about?',
        ],
      ],
    },
    {
      kind: 'trap',
      text: 'Stopping after the grammar filter. Test writers usually make two or three endings fit each beginning grammatically, so grammar alone rarely gives you the answer. Always finish with the **meaning check** against the passage.',
    },
    {
      kind: 'tip',
      text: 'Use the order. Because the beginnings follow the passage, the answer to question 3 lies between the places where you found 2 and 4. Cross out each ending once you have used it — in this task each ending is normally used only once.',
    },
  ],
  drills: ['drill-match-endings'],
})
