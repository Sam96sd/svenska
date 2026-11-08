import { defineWritingTask } from '../define'

/** Original task and model answers for Academic mock test 2. Academic Task 1, process diagram (linear). */
export default defineWritingTask({
  id: 'm-ac2-task1',
  skill: 'writing',
  use: 'mock',
  module: 'academic',
  task: 1,
  type: 'process',
  topic: 'Food production',
  title: 'How olive oil is produced',
  prompt:
    'The diagram below shows the stages in the production of olive oil.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
  chart: {
    kind: 'process',
    title: 'The production of olive oil',
    cycle: false,
    steps: [
      {
        label: 'Harvesting',
        detail: 'Olives picked from October to December, by hand or with mechanical tree shakers',
      },
      { label: 'Cleaning', detail: 'Leaves and twigs removed; olives washed in cold water' },
      {
        label: 'Crushing',
        detail: 'Whole olives (including stones) ground into a paste by steel hammers',
      },
      { label: 'Mixing', detail: 'Paste stirred slowly for 30–45 minutes, kept below 27°C' },
      {
        label: 'Separation',
        detail:
          'Centrifuge separates the oil from water and pomace (skins and stones); pomace dried and burnt as fuel',
      },
      {
        label: 'Settling',
        detail: 'Oil stored in stainless steel tanks for 4–6 weeks; sediment sinks to the bottom',
      },
      {
        label: 'Filtering (optional)',
        detail: 'Oil passed through paper filters; unfiltered oil goes straight to bottling',
      },
      {
        label: 'Bottling',
        detail:
          'Filled into dark glass bottles to protect it from light, labelled and sent to shops',
      },
    ],
  },
  planHints: [
    'Overview first, with no times or temperatures: how many stages, where the process starts and ends, and its main phases (preparing the fruit, extracting the oil, storing and packaging).',
    'Mention the two features that make this diagram different: one stage is optional, and the process has a by-product (pomace) that is used. Leaving these out is an accuracy error.',
    'Use the passive for what happens to the olives and the oil (“are picked”, “is stirred”), and vary the sequencing: “once”, “after which”, “before being”, “at this point”.',
    'Include the key details the diagram gives (October to December, 30–45 minutes, below 27°C, four to six weeks), but don’t copy the labels word for word — paraphrase them.',
    'Describe, don’t evaluate: don’t add that the oil is “healthy” or “delicious”, or explain why the temperature matters. The diagram doesn’t say so.',
  ],
  models: [
    {
      band: 6,
      text: `The diagram shows how the olive oil is made. There are eight stages from harvesting to bottling.

First, the olives are pick from the trees between October and December, by hand or by machine which shake the trees. Then the leaves and twigs are removed and the olives is washed in cold water. After that, the olives are crushed by steel hammers and they become a paste, the stones are also crushed.

Next, the paste is mixed slowly for 30-45 minutes and the temperature must be less than 27 degree. Then a centrifuge separate the oil from the water and the pomace, which are the skins and stones, and the pomace is used for fuel. After that the oil stay in steel tanks for 4-6 weeks. Then the oil is filtered with paper filters. Finally the oil is put in dark bottles because light is bad for the oil and it is sent to the shops.

In conclusion, making olive oil has many stages and it is a long process.`,
      annotations: [
        {
          quote: 'Then the oil is filtered with paper filters.',
          note: 'Task Achievement: inaccurate. The diagram shows that filtering is optional and that unfiltered oil goes straight to bottling. Missing a condition like this is a typical Band 6 error.',
        },
        {
          quote: 'In conclusion, making olive oil has many stages and it is a long process.',
          note: 'Task Achievement: the only overview is at the end and says almost nothing. It should give the main phases and the start and end points, near the beginning.',
        },
        {
          quote: 'the olives are pick from the trees',
          note: 'Grammatical Range & Accuracy: the passive is attempted but often wrong (“are pick”, “the olives is washed”), and there are agreement errors (“a centrifuge separate”, “the oil stay”).',
        },
        {
          quote: 'Then a centrifuge separate the oil',
          note: 'Coherence & Cohesion: every stage begins with First / Then / After that / Next. The sequence is clear but mechanical, and some sentences are joined with commas instead of full stops.',
        },
      ],
    },
    {
      band: 7,
      text: `The diagram illustrates the main stages in the production of olive oil, from picking the fruit to sending the finished product to shops.

Overall, the process consists of eight stages, beginning with the harvest and ending with bottling. After the olives have been cleaned and made into a paste, the oil is extracted and stored before it is packaged, and one of the stages, filtering, is optional.

The olives are harvested between October and December, either by hand or with machines that shake the trees. After that, leaves and twigs are removed and the fruit is washed in cold water. The olives are then crushed together with their stones by steel hammers to produce a paste, which is stirred slowly for 30 to 45 minutes at a temperature below 27°C.

In the next stage, a centrifuge separates the oil from the water and the pomace, which is dried and burnt as fuel. The oil is kept in stainless steel tanks for four to six weeks so that sediment can sink. It may then be filtered, although unfiltered oil goes directly to bottling. Finally, the oil is put into dark glass bottles, labelled and sent to shops.`,
      annotations: [
        {
          quote:
            'Overall, the process consists of eight stages, beginning with the harvest and ending with bottling.',
          note: 'Task Achievement: a clear overview, placed early, that gives the start and end points and notes the optional stage. This lifts the answer to Band 7.',
        },
        {
          quote: 'which is stirred slowly for 30 to 45 minutes at a temperature below 27°C',
          note: 'Grammatical Range & Accuracy: the passive and relative clauses are used accurately, and the details match the diagram.',
        },
        {
          quote: 'which is dried and burnt as fuel',
          note: 'Task Achievement: the by-product is reported, but only in passing. Band 8 would present it in the overview as a key feature of the process.',
        },
        {
          quote: 'After that, leaves and twigs are removed',
          note: 'Coherence & Cohesion: logical paragraphing, but the sequencers (After that / then / In the next stage / Finally) are fairly simple. Band 8 varies them with “once”, “before being” and participle clauses.',
        },
      ],
    },
    {
      band: 8.5,
      text: `The diagram outlines the eight stages by which olive oil is produced.

Overall, the process is linear and falls into two broad phases: the olives are first gathered, cleaned and reduced to a paste, after which the oil is extracted, left to settle and packaged. Only one stage, filtering, is optional, and the process also yields a by-product, pomace, which is put to use as fuel.

The harvest takes place between October and December, with olives picked either by hand or by mechanical shakers. Once leaves and twigs have been removed and the fruit has been washed in cold water, the whole olives, stones included, are ground into a paste by steel hammers. This paste is then stirred slowly for 30–45 minutes at a temperature kept below 27°C.

Next, a centrifuge spins the oil out of the paste, separating it from water and pomace, the latter being dried and burnt as fuel. The oil is left in stainless steel tanks for four to six weeks while sediment settles. It is then either passed through paper filters or bottled unfiltered, in both cases in dark glass to protect it from light, before being labelled and sent to retailers.`,
      annotations: [
        {
          quote: 'the process is linear and falls into two broad phases',
          note: 'Task Achievement: the overview has no figures but summarises the whole structure of the process and highlights both special features (the optional stage and the by-product). This is the Band 8 overview.',
        },
        {
          quote: 'the whole olives, stones included, are ground into a paste',
          note: 'Lexical Resource: the diagram’s labels are paraphrased rather than copied (“stones included”, “spins the oil out”, “sent to retailers”).',
        },
        {
          quote:
            'Once leaves and twigs have been removed and the fruit has been washed in cold water',
          note: 'Grammatical Range & Accuracy: perfect passive in a time clause, used accurately to show that one step must finish before the next begins.',
        },
        {
          quote: 'the latter being dried and burnt as fuel',
          note: 'Grammatical Range & Accuracy: an absolute participle clause with “the latter” packs in the by-product without a new sentence. Range like this, error-free, is Band 8+.',
        },
        {
          quote: 'It is then either passed through paper filters or bottled unfiltered',
          note: 'Task Achievement: the optional stage is reported precisely, with both routes leading to the same final stage.',
        },
      ],
    },
  ],
})
