import { definePassage } from '../../define'

/** Original text. Drill for lesson r-completion: flow-chart completion with a word limit. */
export default definePassage({
  id: 'drill-table-flowchart',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'From fleece to insulation',
  topic: 'Industry and recycling',
  minutes: 6,
  level: 1,
  texts: [
    {
      title: 'From fleece to insulation',
      paragraphs: [
        {
          text: 'Wool that is too coarse for clothing has little commercial value, and some farmers have simply burned it. A small factory in the hills of mid-Wales now turns this unwanted fleece into insulation for houses.',
        },
        {
          text: 'The fleeces arrive in bales from local farms and are first sorted by hand. Workers remove any pieces that are heavily stained or contain plant material such as thistles, which would weaken the final product.',
        },
        {
          text: 'The sorted wool is then washed in large tanks of warm water mixed with a mild soap. This stage removes lanolin, the natural grease in the fleece, which the factory collects and sells to cosmetics firms. Because the water is filtered and reused, the process needs much less water than might be expected.',
        },
        {
          text: 'After washing, the wool is dried in a tunnel heated by a wood-burning boiler and then treated with a natural salt solution that protects it against moths. Without this treatment, the insulation would be eaten within a few years.',
        },
        {
          text: 'The dry fibres are next fed into a carding machine, whose rollers are covered in fine wire teeth. These separate the fibres and comb them into a thin, even layer called a web. Several webs are laid on top of one another and gently heated so that a small proportion of recycled polyester fibre melts and bonds the wool together.',
        },
        {
          text: 'Finally, the thick sheets are cut into rolls of standard widths, packed and sent to builders’ merchants. The factory claims that its insulation can absorb moisture without losing its effectiveness, something that many synthetic products cannot do.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'flowchart',
      instructions: 'Complete the flow-chart below. Choose words from the text for each answer.',
      wordLimit: { words: 2 },
      title: 'Making wool insulation',
      body: [
        {
          kind: 'flow',
          steps: [
            'Fleeces are sorted by hand: pieces that are stained or contain [[1]] are removed.',
            'The wool is washed in warm water with a mild soap.',
            '[[2]], the natural grease, is collected and sold to cosmetics firms.',
            'The wool is dried in a [[3]] heated by a wood-burning boiler.',
            'A salt solution is added to protect the wool from [[4]].',
            'A carding machine separates the fibres and combs them into a thin layer called a [[5]].',
            'Layers are heated until some recycled [[6]] fibre melts and bonds the wool.',
            'The sheets are cut into [[7]] and sent to builders’ merchants.',
          ],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['plant material', 'thistles'],
          location: {
            ref: 't0p1',
            quote:
              'remove any pieces that are heavily stained or contain plant material such as thistles',
          },
          explanation:
            '“Contain [[1]]” matches “contain plant material”. “Thistles” is only an example, but it is also accepted because it is copied from the text and fits the gap.',
        },
        {
          n: 2,
          answers: ['lanolin'],
          location: {
            ref: 't0p2',
            quote: 'This stage removes lanolin, the natural grease in the fleece',
          },
          explanation:
            '“The natural grease” in the flow-chart points straight to “lanolin”. Do not write “soap” — the soap is used for washing, not sold.',
          distractors: ['soap', 'mild soap'],
        },
        {
          n: 3,
          answers: ['tunnel'],
          location: {
            ref: 't0p3',
            quote: 'the wool is dried in a tunnel heated by a wood-burning boiler',
          },
          explanation:
            '“A [[3]] heated by a wood-burning boiler” — the noun before “heated” is “tunnel”. The boiler provides the heat; it is not where the wool is dried.',
          distractors: ['boiler'],
        },
        {
          n: 4,
          answers: ['moths'],
          location: {
            ref: 't0p3',
            quote: 'a natural salt solution that protects it against moths',
          },
          explanation:
            '“Protect … from” paraphrases “protects it against”. Copy the plural form, “moths”, exactly as it appears.',
        },
        {
          n: 5,
          answers: ['web'],
          location: { ref: 't0p4', quote: 'comb them into a thin, even layer called a web' },
          explanation:
            '“A thin layer called a [[5]]” matches “a thin, even layer called a web”. The article “a” is already in the flow-chart, so write only “web”.',
        },
        {
          n: 6,
          answers: ['polyester'],
          location: {
            ref: 't0p4',
            quote:
              'a small proportion of recycled polyester fibre melts and bonds the wool together',
          },
          explanation:
            '“Recycled” and “fibre” are already printed around the gap, so only “polyester” is needed. Writing “polyester fibre” would make the sentence say “fibre fibre”.',
        },
        {
          n: 7,
          answers: ['rolls'],
          location: {
            ref: 't0p5',
            quote: 'the thick sheets are cut into rolls of standard widths',
          },
          explanation:
            '“Cut into [[7]]” matches “cut into rolls”. “Standard widths” describes the rolls; the noun the sheets become is “rolls”.',
        },
      ],
    },
  ],
})
