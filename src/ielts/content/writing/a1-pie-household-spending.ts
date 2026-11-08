import { defineWritingTask } from '../define'

/** Original task and model answers. Academic Task 1, two pie charts. All data is fictional. */
export default defineWritingTask({
  id: 'a1-pie-household-spending',
  skill: 'writing',
  use: 'practice',
  module: 'academic',
  task: 1,
  type: 'pie',
  topic: 'Economics and consumers',
  title: 'Household spending, 1995 and 2025',
  prompt:
    'The pie charts below show how the average household in Valdmark divided its spending between six categories in 1995 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
  chart: {
    kind: 'pie',
    title: 'Average household spending by category in Valdmark, 1995 and 2025 (% of total)',
    pies: [
      {
        label: '1995',
        slices: [
          { name: 'Food', value: 31 },
          { name: 'Housing', value: 22 },
          { name: 'Transport', value: 14 },
          { name: 'Clothing', value: 11 },
          { name: 'Leisure', value: 9 },
          { name: 'Other', value: 13 },
        ],
      },
      {
        label: '2025',
        slices: [
          { name: 'Food', value: 17 },
          { name: 'Housing', value: 34 },
          { name: 'Transport', value: 15 },
          { name: 'Clothing', value: 5 },
          { name: 'Leisure', value: 14 },
          { name: 'Other', value: 15 },
        ],
      },
    ],
  },
  planHints: [
    'Start with the overview, with no numbers: which category was largest in each year, and which changed most? A clear overview is what separates Band 7 from Band 8.',
    'Compare the two years category by category; don’t describe one pie and then the other, or you will end up listing.',
    'Group the slices: the two biggest changes (food and housing) in one paragraph, the smaller changes and the stable category in the other.',
    'Use proportion language accurately: “almost a third” (31%), “just over a fifth” (22%), “more than halved”, “exactly double”, “virtually unchanged”.',
    'Report, don’t explain. The charts don’t say why housing became more expensive, so don’t give reasons.',
  ],
  models: [
    {
      band: 6,
      text: `The pie charts are about the spending of households in Valdmark in 1995 and 2025 for six different things.

In 1995 food was 31%, housing was 22%, transport was 14%, other was 13%, clothing was 11% and leisure was 9%. Food was the most big part of the spending and leisure was the smallest.

In 2025 housing was 34% and it became the biggest. Food was decreased to 17% and this is nearly half, because people buy cheaper food in supermarkets now. Transport was 15% and it was very similar with before. Leisure was increase to 14% and clothing was decrease to 5%, other was 15%.

We can see that housing increased a lot, it was increased 12%, and food decreased 14%. Leisure also increased 5% and clothing decreased 6%. Transport and other was the same in the two years.

In conclusion, the spending changed a lot from 1995 to 2025 and housing is now the biggest part.`,
      annotations: [
        {
          quote:
            'In 1995 food was 31%, housing was 22%, transport was 14%, other was 13%, clothing was 11% and leisure was 9%.',
          note: 'Task Achievement: the first pie is listed in full before any comparison is made. The overview only appears in the final sentence.',
        },
        {
          quote: 'this is nearly half, because people buy cheaper food in supermarkets now',
          note: 'Task Achievement: “nearly half” of what? The comparison is unclear, and the reason is invented: the charts give no causes.',
        },
        {
          quote: 'Transport and other was the same in the two years.',
          note: 'Task Achievement: inaccurate. “Other” rose from 13% to 15%; only transport was almost unchanged (14% to 15%).',
        },
        {
          quote: 'it was increased 12%',
          note: 'Grammatical Range & Accuracy: wrong passive (“was increased”, “was decrease”) and a comma splice. Say “rose by 12 percentage points”.',
        },
      ],
    },
    {
      band: 7,
      text: `The pie charts show how households in Valdmark spent their money in 1995 and 2025, divided into six categories.

Overall, housing replaced food as the biggest area of spending, and people spent a larger share on leisure. On the other hand, the percentage spent on clothing went down.

In 1995, the largest part of the budget was food, at 31%, followed by housing at 22%. By 2025, the situation had changed completely. Housing had increased to 34%, which was more than a third of all spending, while food had dropped to 17%, just over half its earlier level. In other words, the two categories had almost changed places.

The other categories changed less. Leisure rose from 9% to 14%, and the proportion for other items also grew slightly, from 13% to 15%. Transport stayed almost the same, going from 14% to 15%. Clothing was the only category apart from food that decreased, falling from 11% in 1995 to only 5% in 2025, which made it the smallest category in the second year.`,
      annotations: [
        {
          quote: 'Overall, housing replaced food as the biggest area of spending',
          note: 'Task Achievement: the overview names the most important change clearly and accurately.',
        },
        {
          quote: 'On the other hand, the percentage spent on clothing went down.',
          note: 'Coherence & Cohesion: “On the other hand” introduces a contrast of viewpoints, not just a different trend. “In contrast” or “while” would be more accurate.',
        },
        {
          quote: 'which was more than a third of all spending',
          note: 'Lexical Resource: a fraction used accurately (34% is just over a third). Band 8 uses more of these and varies them.',
        },
        {
          quote: 'Clothing was the only category apart from food that decreased',
          note: 'Task Achievement: a good comparison, but it comes at the end. Grouping the decreases (food, clothing) and the increases together would make the answer more precise.',
        },
      ],
    },
    {
      band: 8.5,
      text: `The two pie charts compare the proportions of their total budget that households in Valdmark spent on six categories in 1995 and 2025.

Overall, the most striking change was a reversal in the positions of food and housing: food was the largest item of expenditure at the start of the period, but it had been overtaken by housing by the end. Leisure also took a noticeably larger share, while clothing became a far smaller part of the household budget.

In 1995, food accounted for almost a third of spending (31%), compared with just over a fifth (22%) for housing. By 2025, the share devoted to food had fallen by nearly half to 17%, whereas housing had risen to 34%, exactly double the figure for food. Taken together, however, these two essentials made up a similar proportion in both years, roughly half of all spending.

Among the remaining categories, leisure saw the largest increase, from 9% to 14%, while the share spent on clothing more than halved, from 11% to a mere 5%. By contrast, transport remained virtually unchanged at around a seventh of the total (14% and 15%), and miscellaneous ‘other’ spending edged up from 13% to 15%.`,
      annotations: [
        {
          quote: 'the most striking change was a reversal in the positions of food and housing',
          note: 'Task Achievement: the overview identifies the key feature of both charts together, with no numbers. This is the Band 8 overview.',
        },
        {
          quote:
            'Taken together, however, these two essentials made up a similar proportion in both years',
          note: 'Task Achievement: a comparison that only a careful reader finds (53% and 51%). Selecting a feature like this shows full control of the data.',
        },
        {
          quote: 'exactly double the figure for food',
          note: 'Lexical Resource: precise proportional language (“almost a third”, “just over a fifth”, “more than halved”, “a mere 5%”) that is accurate to the chart.',
        },
        {
          quote: 'Among the remaining categories, leisure saw the largest increase',
          note: 'Coherence & Cohesion: the body is grouped by size of change, the big shift first and the smaller ones second, and every category is compared across the two years.',
        },
        {
          quote: 'but it had been overtaken by housing by the end',
          note: 'Grammatical Range & Accuracy: the past perfect passive is used accurately to show the change over time; the answer is error-free.',
        },
      ],
    },
  ],
})
