import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-ynng',
  skill: 'reading',
  module: 'both',
  order: 11,
  title: 'Yes, No or Not Given',
  summary:
    'Judge statements against the writer’s opinions, not the facts, by learning to spot the language of views and claims.',
  types: ['ynng'],
  minutes: 8,
  sections: [
    {
      kind: 'text',
      heading: 'Views, not facts',
      paragraphs: [
        'YES/NO/NOT GIVEN looks like TRUE/FALSE/NOT GIVEN, but it asks a different question: **does the statement agree with the claims or views of the writer?** It usually appears with argumentative texts, such as opinion articles or passages that evaluate a theory.',
        'The writer may report other people’s views only to reject them. A statement that matches a view the writer *quotes and rejects* is NO, not YES.',
      ],
    },
    {
      kind: 'compare',
      heading: 'TFNG vs YNNG',
      headers: ['Feature', 'TRUE / FALSE / NOT GIVEN', 'YES / NO / NOT GIVEN'],
      rows: [
        [
          'Compares the statement with…',
          'information in the text',
          'the writer’s opinions and claims',
        ],
        ['Typical text', 'factual, descriptive', 'argumentative, evaluative'],
        ['Key question', '“What does the text say happened?”', '“What does the writer believe?”'],
        [
          'Same 3 steps?',
          'Yes: topic → agree → contradict',
          'Yes, but only the writer’s voice counts',
        ],
      ],
    },
    {
      kind: 'phrases',
      heading: 'Language that signals the writer’s view',
      items: [
        {
          phrase: 'It is a mistake to… / It would be wrong to…',
          use: 'The writer rejects the idea that follows: a NO for any statement supporting it.',
        },
        {
          phrase: 'Arguably… / It could be argued that…',
          use: 'A cautious opinion, but still the writer’s own: usually YES.',
        },
        {
          phrase: 'The evidence suggests… / This shows that…',
          use: 'The writer’s conclusion from evidence. Match the strength: “suggests” is not “proves”.',
        },
        {
          phrase: 'I accept that… / Admittedly… / Of course…',
          use: 'A concession: the writer agrees with this point even while arguing the opposite overall.',
        },
        {
          phrase: 'What I object to is… / The problem is…',
          use: 'Marks exactly what the writer disagrees with.',
        },
        {
          phrase: 'Many believe… / It is often said that…',
          use: 'Other people’s view. Read on: the writer often disagrees (“Yet…”, “However…”).',
        },
      ],
    },
    {
      kind: 'steps',
      heading: 'How to decide',
      items: [
        'Find the part of the text about the statement’s topic.',
        'Ask **whose voice** it is: the writer’s, or someone the writer is reporting? Look for signals such as “many councils believe”, “critics reply”, “I accept”.',
        'If the writer clearly holds the view in the statement, choose **YES**. If the writer clearly holds the opposite view, choose **NO**.',
        'If the writer never says what they think about this point, choose **NOT GIVEN**, even if the statement seems a logical extension of their argument.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: reported belief vs the writer’s claim',
      context:
        'When town centres struggle, the first response of many local councils is to build another multi-storey car park. The reasoning seems obvious: if shoppers cannot park, they will go elsewhere. Yet the evidence suggests that this belief is, at best, only partly true.',
      question:
        'Statement: “Councils are right to assume that shoppers will go elsewhere if they cannot park.”',
      answer: 'NO',
      reasoning: [
        'The topic (parking and shoppers going elsewhere) is in the first two sentences, but that is the **councils’** reasoning, not the writer’s.',
        '“Seems obvious” is a warning: writers use it to introduce an idea they are about to challenge.',
        '“Yet the evidence suggests that this belief is, at best, only partly true” is the writer’s own claim. A belief that is “at best, only partly true” is not one the councils are “right” to rely on.',
        'The writer’s view contradicts the statement, so the answer is NO. Choosing YES would mean matching the reported view instead of the writer’s.',
      ],
    },
    {
      kind: 'trap',
      text: '**The logical-extension trap.** A writer who wants better buses has not said that bus fares should be cut. If a statement goes one step further than the writer does, however reasonable that step seems, the answer is NOT GIVEN.',
    },
    {
      kind: 'tip',
      text: 'Before answering, skim the whole text once and write the writer’s **overall position** in five words (e.g. “more parking won’t save towns”). Most NO answers contradict that position; most YES answers support it.',
    },
  ],
  drills: ['drill-ynng-writer-view'],
})
