import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-tfng',
  skill: 'reading',
  module: 'both',
  order: 10,
  title: 'True, False or Not Given',
  summary:
    'A 3-step decision tree that separates FALSE from NOT GIVEN, plus the qualifier traps that cost Band 7 candidates marks.',
  types: ['tfng'],
  minutes: 10,
  sections: [
    {
      kind: 'text',
      heading: 'What the examiner is testing',
      paragraphs: [
        'TRUE/FALSE/NOT GIVEN questions test whether you can compare a statement with the text **exactly**, without adding your own knowledge or logic. Most lost marks come from one confusion: choosing FALSE when the text simply does not say, or NOT GIVEN when the text quietly contradicts the statement.',
        'Judge only against the text. If the text says the sky is green, a statement that the sky is green is TRUE.',
      ],
    },
    {
      kind: 'steps',
      heading: 'The 3-step decision tree',
      items: [
        '**Is the topic mentioned?** Find the part of the text about the statement’s topic. If the topic appears nowhere, the answer is NOT GIVEN. (This is rare: usually the topic is there.)',
        '**Does the text agree with the whole statement?** Check every part: who, what, when, how many, and the qualifier (all, some, most, only, may). If every part is confirmed, possibly in other words, the answer is TRUE.',
        '**Does the text contradict it?** Look for a sentence that cannot be true at the same time as the statement: an opposite, a different number, a different person, a stronger or weaker qualifier. If you can point to that sentence, the answer is FALSE.',
        'If the text neither confirms nor contradicts the statement, even though the topic is there, the answer is **NOT GIVEN**.',
      ],
    },
    {
      kind: 'compare',
      heading: 'FALSE vs NOT GIVEN',
      headers: ['Feature', 'FALSE', 'NOT GIVEN'],
      rows: [
        [
          'The text…',
          'says something that cannot be true at the same time',
          'does not say enough to decide',
        ],
        [
          'You can…',
          'point to the sentence that disproves it',
          'only point to the nearest related sentence',
        ],
        [
          'Example statement',
          '“The council has given the café money.”',
          '“Smartphones are brought in most often.”',
        ],
        [
          'What the text says',
          '“The café has never received money from the local council.”',
          '“Smartphones are the most difficult [to fix].”',
        ],
        [
          'Test question',
          '“Could both be true?” No.',
          '“Could both be true?” Yes, or we cannot tell.',
        ],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: same topic, two answers',
      context:
        'The organiser, a retired electrician named Graham Pell, had got the idea from an older repair café he had visited in the Netherlands.',
      question:
        'Statement 1: “The Hollinbrook café was the first one ever to open.” Statement 2: “Graham Pell used to work in the Netherlands.”',
      answer: '1 FALSE · 2 NOT GIVEN',
      reasoning: [
        'Step 1 for both: the topic (the café’s origins, Pell and the Netherlands) is clearly mentioned.',
        'Statement 1, step 3: an *older* repair café already existed, so Hollinbrook’s cannot be the first ever. Both cannot be true together, so FALSE.',
        'Statement 2, step 2: the text says he was an electrician and *visited* the Netherlands. It does not say where he worked.',
        'Statement 2, step 3: does “visited” prove he never worked there? No. It could be true or false, and the text does not tell us, so NOT GIVEN.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Qualifier and comparison traps',
      headers: ['Statement says', 'Text says', 'Answer'],
      rows: [
        [
          '**Most** seed banks hold huge collections',
          'the **largest** hold huge collections; **most** are small',
          'FALSE',
        ],
        ['Drying suits **every** species', '**not all** seeds survive drying', 'FALSE'],
        [
          'X is **the most** expensive part',
          'X is **one of the most** expensive parts',
          'NOT GIVEN',
        ],
        [
          'Avocado was **the first** plant found to…',
          'avocado seeds are killed by drying (no date)',
          'NOT GIVEN',
        ],
        ['Frozen seeds **might** cope less well', 'they **may** be less suited', 'TRUE'],
        [
          'Clothes are **harder** to mend than phones',
          'phones are **the most difficult**',
          'FALSE',
        ],
      ],
    },
    {
      kind: 'trap',
      text: '**Don’t fill gaps with common sense.** “The café moved to a larger centre” does not tell you *why* it moved. If you think “it must have been too small”, you are supplying the reason yourself, and the answer to “It moved because the hall was too small” is NOT GIVEN.',
    },
    {
      kind: 'tip',
      text: 'Before marking FALSE, ask: **“Which sentence proves this wrong?”** If you cannot put your finger on one, the answer is almost certainly NOT GIVEN. Before marking TRUE, check the qualifier one more time.',
    },
  ],
  drills: ['drill-tfng-false-vs-ng', 'drill-tfng-qualifiers'],
})
