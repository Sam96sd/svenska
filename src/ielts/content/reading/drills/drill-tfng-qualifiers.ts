import { definePassage } from '../../define'

/** Original text. TFNG drill built around qualifiers (most, some, every, first, may, one of the most). */
export default definePassage({
  id: 'drill-tfng-qualifiers',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'TFNG drill: watch the qualifiers',
  topic: 'Science',
  minutes: 7,
  level: 2,
  intro:
    'Every statement contains a qualifier such as most, some, every, first or may. Before deciding, underline the qualifier in the statement and find the matching word in the text.',
  texts: [
    {
      title: 'Seed banks',
      paragraphs: [
        {
          text: 'A seed bank stores seeds so that plant varieties can be grown again if they disappear from the wild or from farms. The largest facilities hold samples of hundreds of thousands of varieties, but most seed banks are small, regional collections run by universities or botanic gardens. Some are run entirely by volunteers.',
        },
        {
          text: 'Most seeds are dried until they contain only a small amount of moisture and are then stored at about minus 18 °C. Under these conditions, the seeds of many crops, such as wheat and barley, can remain alive for decades. However, not all seeds survive drying. Those of some tropical trees, including cocoa and avocado, are killed by the process and must be preserved in other ways, usually by growing living plants in field collections.',
        },
        {
          text: 'Even well-stored seeds slowly lose their ability to germinate. For this reason, staff test samples at regular intervals, typically every ten years. If the proportion that sprouts falls below a set level, the seeds are planted and a fresh batch is harvested. This is one of the most expensive parts of the work, as it may require several seasons of careful growing.',
        },
        {
          text: 'Seed banks are sometimes described as a last line of defence against disaster, and they have proved their value: after fighting damaged one national collection, duplicate samples held abroad allowed researchers to rebuild it. Yet experts warn that seed banks cannot replace conservation in the wild. Plants kept in a freezer do not continue to evolve, so they may be less suited to future climates than populations that keep adapting in their natural habitats.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'tfng',
      instructions:
        'Do the following statements agree with the information given in the text? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.',
      questions: [
        {
          n: 1,
          statement: 'Most seed banks hold samples of hundreds of thousands of plant varieties.',
          answer: 'FALSE',
          location: {
            ref: 't0p0',
            quote: 'but most seed banks are small, regional collections',
          },
          explanation:
            'Only “the largest facilities” hold that many samples; “most seed banks are small”. The statement moves the claim from the largest few to the majority, which contradicts the text.',
        },
        {
          n: 2,
          statement: 'Certain seed banks operate without any paid staff.',
          answer: 'TRUE',
          location: { ref: 't0p0', quote: 'Some are run entirely by volunteers' },
          explanation:
            '“Certain” = “Some”; “without any paid staff” = “entirely by volunteers”. The qualifiers match: some, not all.',
        },
        {
          n: 3,
          statement: 'Drying is a suitable way to store the seeds of every plant species.',
          answer: 'FALSE',
          location: { ref: 't0p1', quote: 'However, not all seeds survive drying' },
          explanation:
            '“Every plant species” is contradicted by “not all seeds survive drying”, and the text gives examples (cocoa and avocado) that are killed by it.',
        },
        {
          n: 4,
          statement: 'Avocado was the first plant found to be damaged by drying.',
          answer: 'NOT GIVEN',
          location: {
            ref: 't0p1',
            quote:
              'Those of some tropical trees, including cocoa and avocado, are killed by the process',
          },
          explanation:
            'The text says avocado seeds are killed by drying, but says nothing about when this was discovered or which plant was found first. “First” is the untested part of the statement.',
        },
        {
          n: 5,
          statement: 'Seeds stored in good conditions can be kept alive indefinitely.',
          answer: 'FALSE',
          location: {
            ref: 't0p2',
            quote: 'Even well-stored seeds slowly lose their ability to germinate',
          },
          explanation:
            '“Indefinitely” means for ever. The text says even well-stored seeds slowly lose the ability to grow, which is why they must be tested and replaced. “For decades” in the paragraph before is long, but not for ever.',
        },
        {
          n: 6,
          statement:
            'Growing new batches of seeds is the most expensive part of a seed bank’s work.',
          answer: 'NOT GIVEN',
          location: { ref: 't0p2', quote: 'This is one of the most expensive parts of the work' },
          explanation:
            '“One of the most expensive” does not tell us whether it is THE most expensive. It might be, or something else might cost more, so the text neither confirms nor contradicts the statement.',
        },
        {
          n: 7,
          statement:
            'Copies of seeds stored in another country have been used to restore a damaged collection.',
          answer: 'TRUE',
          location: {
            ref: 't0p3',
            quote: 'duplicate samples held abroad allowed researchers to rebuild it',
          },
          explanation:
            '“Copies … stored in another country” = “duplicate samples held abroad”; “restore” = “rebuild”.',
        },
        {
          n: 8,
          statement:
            'Plants from frozen seeds might cope less well with future climates than wild populations.',
          answer: 'TRUE',
          location: {
            ref: 't0p3',
            quote: 'they may be less suited to future climates than populations that keep adapting',
          },
          explanation:
            'The qualifiers match: “might” = “may”. If the statement had said “will certainly cope less well”, it would be stronger than the text, and the answer would no longer be TRUE.',
        },
      ],
    },
  ],
})
