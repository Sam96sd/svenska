import { defineWritingTask } from '../define'

/** Original task and model answers. Academic Task 1, process diagram (a cycle). */
export default defineWritingTask({
  id: 'a1-process-paper-recycling',
  skill: 'writing',
  use: 'practice',
  module: 'academic',
  task: 1,
  type: 'process',
  topic: 'Environment and recycling',
  title: 'How paper is recycled',
  prompt:
    'The diagram below shows the process by which used paper is recycled to make new paper products.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
  chart: {
    kind: 'process',
    title: 'The paper recycling process',
    cycle: true,
    steps: [
      {
        label: 'Collection',
        detail: 'Used paper and card collected from homes, offices and recycling banks',
      },
      { label: 'Sorting', detail: 'Separated into grades: cardboard, newspaper, office paper' },
      { label: 'Pulping', detail: 'Mixed with water in a pulper and broken down into fibres' },
      { label: 'Screening', detail: 'Staples, plastic and glue removed' },
      {
        label: 'De-inking',
        detail: 'Air bubbles carry ink to the surface, where it is skimmed off',
      },
      { label: 'Bleaching', detail: 'Only for white paper' },
      { label: 'Pressing', detail: 'Pulp spread onto a wire mesh; rollers squeeze out the water' },
      { label: 'Drying', detail: 'Passed over heated cylinders' },
      { label: 'Reeling and cutting', detail: 'Wound onto large reels, then cut to size' },
      { label: 'New paper products', detail: 'Sent to shops and used again' },
    ],
  },
  planHints: [
    'Overview first: is it a cycle or a linear process, where does it begin and end, and what are its main phases? Put this before any detail. A clear overview is the main Band 7→8 difference.',
    'Group the stages into two body paragraphs (for example, collection and cleaning, then making the new paper) instead of writing one sentence per box.',
    'Use the passive for what happens to the material (“is collected”, “is broken down”), and vary your sequencers: “once”, “after which”, “at this point”, “before being”.',
    'Include the conditions and exceptions the diagram gives, such as bleaching only for white paper. Leaving them out, or making them general, is an accuracy error.',
    'No opinions: don’t add that recycling “saves trees” or is “good for the environment”. The diagram doesn’t say so.',
  ],
  models: [
    {
      band: 6,
      text: `The diagram shows the process of recycling paper. There are ten stages in the process.

First, the paper is collect from homes, offices and recycling banks. Then they sort it in cardboard, newspaper and office paper. After that the paper go to the pulper and mix with water and it become fibres. Then there is screening, the staples, plastic and glue are removed.

Next stage is de-inking. The ink goes up with air bubbles and it is taken off. Then the paper is bleached so it becomes white. After that the pulp is put on a mesh and the rollers press it to take out the water. Then it is dried with hot cylinders. Then it is put on reels and cut.

Finally the new paper products go to the shops and people can buy them. This process is very good for the environment because we can save trees. In conclusion, paper can be recycled many times and it is a cycle.`,
      annotations: [
        {
          quote: 'There are ten stages in the process.',
          note: 'Task Achievement: counting the stages is not an overview. The fact that the process is a cycle only appears in the final sentence.',
        },
        {
          quote: 'Then the paper is bleached so it becomes white.',
          note: 'Task Achievement: inaccurate. The diagram says bleaching is only for white paper, not for all of it.',
        },
        {
          quote: 'This process is very good for the environment because we can save trees.',
          note: 'Task Achievement: an opinion and a reason that the diagram does not give. Leave this for Task 2.',
        },
        {
          quote: 'the paper is collect from homes',
          note: 'Grammatical Range & Accuracy: errors in the passive (“is collect”, “mix with water”) and agreement (“the paper go”), and a comma splice after “screening”. The repeated “Then” is mechanical (Coherence & Cohesion).',
        },
      ],
    },
    {
      band: 7,
      text: `The diagram shows how used paper is recycled to produce new paper products.

Overall, it is a cycle with several stages, starting with the collection of waste paper and ending with new products that can be recycled again. Most of the stages involve cleaning the paper and then making it into new sheets.

First, used paper is collected from homes, offices and recycling banks. After that, it is sorted into different types, for example cardboard, newspaper and office paper. Then the paper is mixed with water in a pulper so that it breaks down into fibres. The next stage is screening, which removes things like staples, plastic and glue. After this, the ink is removed using air bubbles, which carry it to the surface.

If the paper is going to be white, it is bleached. Then the pulp is spread onto a wire mesh and rollers press the water out. After that, it is dried on heated cylinders, and then it is wound onto big reels and cut to the right size. Finally, the new paper products are sent to shops, and after use they can be collected again.`,
      annotations: [
        {
          quote:
            'Overall, it is a cycle with several stages, starting with the collection of waste paper and ending with new products that can be recycled again.',
          note: 'Task Achievement: a clear overview that identifies the cycle and its start and end points. The phases could be named more precisely.',
        },
        {
          quote: 'If the paper is going to be white, it is bleached.',
          note: 'Task Achievement: the condition in the diagram is reported accurately, which the Band 6 answer missed.',
        },
        {
          quote: 'things like staples, plastic and glue',
          note: 'Lexical Resource: “things like” is informal. “Contaminants such as” would be more precise (also “big reels”, “the right size”).',
        },
        {
          quote: 'After that, it is dried on heated cylinders, and then it is wound onto big reels',
          note: 'Coherence & Cohesion: every stage is covered in order, but the sequencers (“After that”, “Then”, “After this”) are repetitive. Grammatical Range & Accuracy is good: passives and relative clauses are accurate.',
        },
      ],
    },
    {
      band: 8.5,
      text: `The diagram illustrates how used paper is recycled into new paper products.

Overall, the process is cyclical and can be divided into a preparation phase, a cleaning phase and a manufacturing phase, with the finished products returning to the start of the cycle.

To begin with, used paper and card are collected from households, offices and recycling banks and sorted into grades such as cardboard, newspaper and office paper. The sorted material is then mixed with water in a pulper, where it is broken down into fibres. Next, this pulp is screened to remove contaminants including staples, plastic and glue, after which it is de-inked: air bubbles carry the ink to the surface, where it is skimmed off. Pulp intended for white paper is also bleached at this point, a step that is omitted for other grades.

In the manufacturing phase, the clean pulp is spread onto a wire mesh and passed between rollers, which squeeze out the water. The resulting sheet is dried over heated cylinders before being wound onto large reels and cut to size. Finally, the new products are distributed to shops, and once used, they can be collected again, so the cycle begins anew.`,
      annotations: [
        {
          quote: 'the process is cyclical and can be divided into a preparation phase',
          note: 'Task Achievement: the overview identifies both the shape of the process (a cycle) and its main phases, without any detail. This is the Band 8 overview.',
        },
        {
          quote:
            'Pulp intended for white paper is also bleached at this point, a step that is omitted for other grades.',
          note: 'Task Achievement: the condition in the diagram is reported precisely, and the noun phrase in apposition (“a step that…”) adds it without a new sentence.',
        },
        {
          quote: 'after which it is de-inked',
          note: 'Coherence & Cohesion: varied sequencing (“To begin with”, “after which”, “at this point”, “before being”) links stages without a list of “Then… Then…”.',
        },
        {
          quote: 'to remove contaminants including staples, plastic and glue',
          note: 'Lexical Resource: precise process vocabulary (“contaminants”, “skimmed off”, “distributed”, “re-enters the cycle”).',
        },
        {
          quote: 'before being wound onto large reels and cut to size',
          note: 'Grammatical Range & Accuracy: a passive -ing form after a preposition, one of several error-free complex passives.',
        },
      ],
    },
  ],
})
