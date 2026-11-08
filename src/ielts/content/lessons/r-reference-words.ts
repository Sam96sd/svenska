import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-reference-words',
  skill: 'reading',
  module: 'both',
  order: 3,
  title: 'Tracking reference words',
  summary:
    'Follow this, which, such, it, the former and the latter back to what they mean, so ideas connect across sentences.',
  types: ['reference'],
  minutes: 7,
  sections: [
    {
      kind: 'text',
      heading: 'Why reference words matter',
      paragraphs: [
        'Writers avoid repeating nouns, so they use **reference words** to point back to something already said. If you lose track of them, you misread who did what, and many TFNG, MCQ and matching answers depend on exactly that.',
        'A reference word can point to a **single noun** (“the carriages … *they*”) or to a **whole idea** (“travellers want to cut carbon, and *this* has encouraged…”). The second kind is harder and is tested more often at Band 7 and above.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Common reference words and what they usually point to',
      headers: ['Word', 'Usually refers to', 'Example'],
      rows: [
        [
          'it / they / them',
          'a noun already mentioned, usually the nearest one that fits grammatically',
          'The telescope arrived in 1873. *It* still works.',
        ],
        [
          'this / that',
          'a noun, or a whole idea in the previous clause or sentence',
          'Fees were cut. *This* lowered prices.',
        ],
        ['these / those', 'a plural noun group', 'Few carriages remain. *Those* that do are old.'],
        [
          'such (+ noun)',
          'a type of thing just described',
          'Each country has its own rules. *Such* differences…',
        ],
        [
          'which / who',
          'the noun (or clause) directly before it',
          'sleeper carriages, *which* were expensive…',
        ],
        [
          'the former / the latter',
          'the first / the second of two things just named',
          'business travellers and families: *the former*…',
        ],
      ],
    },
    {
      kind: 'steps',
      heading: 'How to find the referent',
      items: [
        'Find the reference word and note its **grammar**: singular or plural? a person or a thing? one noun or an idea?',
        'Look **back**, usually to the same or the previous sentence. Reference words almost never point forward in IELTS texts.',
        'List the possible candidates that fit the grammar.',
        '**Substitute** each candidate for the reference word and reread the sentence. Only one should make logical sense.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: “this” as a whole idea',
      context:
        'Since then, however, the picture has changed. A growing number of travellers want to reduce the carbon cost of their journeys, and this has encouraged rail companies to reconsider the overnight market.',
      question: 'What does “this” refer to?',
      answer: 'Travellers’ wish to reduce the carbon cost of their journeys',
      reasoning: [
        'Grammar: “this has encouraged” is singular, and something that *encourages* is usually a situation or idea, not an object.',
        'Look back. Candidates: “the picture”, “travellers”, “the carbon cost”, or the whole clause “travellers want to reduce the carbon cost”.',
        '“Travellers” is plural, so it does not fit “this has”. “The carbon cost has encouraged rail companies” is illogical: the cost itself is not new.',
        'Substitute the whole idea: “Travellers wanting to cut carbon has encouraged rail companies to reconsider.” This makes sense, so “this” refers to the whole clause.',
      ],
    },
    {
      kind: 'trap',
      text: 'The **nearest-noun trap**: the noun closest to the reference word is not always the referent. In “Critics reply that *it* treats rail more generously than coach travel”, “it” is the proposal from the previous sentence, not “coach travel”, which comes after it.',
    },
    {
      kind: 'tip',
      text: '**The former / the latter** always refer to exactly two things named just before. Put your finger on the pair (“business travellers and families on holiday”) and count: first = former, second = latter.',
    },
  ],
  drills: ['drill-reference-words'],
})
