import { defineWritingTask } from '../define'

/**
 * Original task and model answers for Academic mock test 1. Academic Task 1, mixed charts
 * (line graph + pie chart). All data is fictional.
 */
export default defineWritingTask({
  id: 'm-ac1-task1',
  skill: 'writing',
  use: 'mock',
  module: 'academic',
  task: 1,
  type: 'mixed',
  topic: 'Tourism and leisure',
  title: 'Visitors to a national park',
  prompt:
    'The line graph below shows the number of day visitors and overnight visitors to Brennmoor National Park between 2004 and 2024. The pie chart shows where the park’s visitors came from in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
  chart: {
    kind: 'mixed',
    title: 'Visitors to Brennmoor National Park',
    charts: [
      {
        kind: 'line',
        title: 'Number of visitors, 2004–2024 (thousands)',
        xLabels: ['2004', '2008', '2012', '2016', '2020', '2024'],
        yLabel: 'Visitors (thousands)',
        unit: 'thousand',
        series: [
          { name: 'Day visitors', values: [310, 345, 390, 470, 295, 520] },
          { name: 'Overnight visitors', values: [120, 130, 155, 210, 140, 265] },
        ],
      },
      {
        kind: 'pie',
        title: 'Origin of visitors, 2024 (% of total)',
        pies: [
          {
            label: '2024',
            slices: [
              { name: 'Same region as the park', value: 41 },
              { name: 'Other regions of the country', value: 33 },
              { name: 'Neighbouring countries', value: 17 },
              { name: 'Rest of the world', value: 9 },
            ],
          },
        ],
      },
    ],
  },
  planHints: [
    'Two charts, one overview: give the main trend of the line graph (both lines up overall, one sharp dip, day visitors always higher) AND the main feature of the pie chart (mostly domestic visitors), with no numbers.',
    'Use one body paragraph per chart. Don’t try to link them with reasons; just report each clearly.',
    'Line graph: select the key points only — the start, the high point before the fall, the low point, and the end. Don’t list all six years for both lines.',
    'Compare the rate of growth, not just the numbers: which line grew faster in proportion? (“more than doubled” versus “rose by about two-thirds”.)',
    'Pie chart: group the slices (domestic versus foreign) and use fractions and proportions (“roughly three-quarters”, “under a tenth”). Don’t call 41% “most” — it is not a majority.',
  ],
  models: [
    {
      band: 6,
      text: `The line graph show the number of day visitors and overnight visitors in Brennmoor National Park from 2004 to 2024 and the pie chart show where the visitors are coming from in 2024.

In 2004 there was 310 thousand day visitors and 120 thousand overnight visitors. In 2008 the day visitors increased to 345 thousand and the overnight visitors increased to 130 thousand. In 2012 the day visitors were 390 thousand and in 2016 they were 470 thousand. The overnight visitors also increased to 210 thousand in 2016. However, in 2020 both of them decreased sharply, the day visitors fell to 295 thousand and the overnight visitors fell to 140 thousand. After that they increased again and in 2024 the day visitors was 520 thousand and overnight visitors was 265 thousand.

In the pie chart, most of visitors came from the same region with 41%. 33% came from other regions, 17% came from neighbouring countries and only 9% came from the rest of world.

In conclusion, the number of visitors to the park increased and the most visitors are from the same country.`,
      annotations: [
        {
          quote:
            'In 2008 the day visitors increased to 345 thousand and the overnight visitors increased to 130 thousand.',
          note: 'Task Achievement: the answer reports almost every figure year by year instead of selecting the key points (start, peak, dip, end). The main trends are buried in the detail.',
        },
        {
          quote: 'most of visitors came from the same region with 41%',
          note: 'Task Achievement: inaccurate. 41% is the largest share, but it is not “most” (a majority). Say “the largest proportion”. “Most of visitors” is also a grammar error (most visitors / most of the visitors).',
        },
        {
          quote: 'both of them decreased sharply, the day visitors fell to 295 thousand',
          note: 'Grammatical Range & Accuracy: a comma splice. Errors such as “there was 310 thousand”, “the day visitors was” and the switch to the present (“are coming”) keep GRA at 6.',
        },
        {
          quote:
            'In conclusion, the number of visitors to the park increased and the most visitors are from the same country.',
          note: 'Task Achievement: the only overview comes at the very end and is very general. It misses that day visitors were always more numerous and that overnight stays grew faster.',
        },
      ],
    },
    {
      band: 7,
      text: `The line graph shows how many people visited Brennmoor National Park on day trips and how many stayed overnight between 2004 and 2024, while the pie chart shows where visitors came from in 2024.

Overall, both types of visitor increased over the period despite one sharp fall, and there were always more day visitors than overnight visitors. Most visitors in 2024 came from within the country, especially from the park’s own region.

In 2004, there were 310,000 day visitors and 120,000 overnight visitors. Both figures rose steadily, reaching 470,000 and 210,000 respectively in 2016. In 2020, however, the number of day visitors dropped to 295,000, slightly lower than in 2004, and overnight stays fell to 140,000. Both groups then recovered strongly and reached their highest points in 2024, at 520,000 and 265,000.

Regarding the origin of visitors, 41% came from the same region as the park and a further 33% from other parts of the country. In comparison, only 17% travelled from neighbouring countries, and the rest of the world accounted for just 9%.`,
      annotations: [
        {
          quote:
            'Overall, both types of visitor increased over the period despite one sharp fall, and there were always more day visitors than overnight visitors.',
          note: 'Task Achievement: a clear overview with no figures, covering both charts. This is what lifts the answer to Band 7.',
        },
        {
          quote: 'slightly lower than in 2004',
          note: 'Task Achievement: a useful comparison (295,000 against 310,000) that shows the reader how deep the fall was, not just the number.',
        },
        {
          quote: 'reaching 470,000 and 210,000 respectively in 2016',
          note: 'Grammatical Range & Accuracy: “respectively” and the participle clause are used accurately. The figures all match the graph.',
        },
        {
          quote: 'Both groups then recovered strongly and reached their highest points in 2024',
          note: 'Task Achievement: accurate, but it misses a key comparison — overnight stays more than doubled, while day visits grew by only about two-thirds. Band 8 compares rates of change, not just figures.',
        },
      ],
    },
    {
      band: 8.5,
      text: `The line graph compares the numbers of day and overnight visitors to Brennmoor National Park at four-year intervals from 2004 to 2024, and the pie chart breaks down the park’s visitors in 2024 by origin.

Overall, the park became considerably busier over the period, with a single sharp interruption, and although day visitors remained in the majority throughout, overnight stays grew faster. Visitors in the final year were predominantly domestic, with the park’s home region the largest single source.

Day visits climbed steadily from 310,000 in 2004 to 470,000 in 2016, while overnight stays rose from 120,000 to 210,000 over the same period. Both then fell sharply in 2020, with day visits dipping to 295,000, marginally below their starting level. The recovery that followed was swift: by 2024 day visits had reached a peak of 520,000, and overnight stays had more than doubled from their 2004 figure, to 265,000.

As for origin, roughly three-quarters of visitors were domestic, with 41% from the surrounding region and 33% from elsewhere in the country. Neighbouring countries supplied 17%, and visitors from further afield made up under a tenth.`,
      annotations: [
        {
          quote:
            'although day visitors remained in the majority throughout, overnight stays grew faster',
          note: 'Task Achievement: the overview has no numbers but identifies the most important comparison in the line graph — the gap in growth rates — which the Band 7 answer misses.',
        },
        {
          quote: 'marginally below their starting level',
          note: 'Lexical Resource: precise comparative language that interprets the figure (295,000 against 310,000) rather than simply repeating it.',
        },
        {
          quote: 'overnight stays had more than doubled from their 2004 figure, to 265,000',
          note: 'Task Achievement: proportional language (“more than doubled”) that is accurate — 120,000 to 265,000 is a rise of just over 120%.',
        },
        {
          quote: 'roughly three-quarters of visitors were domestic',
          note: 'Coherence & Cohesion and Task Achievement: the slices are grouped (41% + 33% = 74%) before the detail is given, so the reader sees the main point first.',
        },
        {
          quote: 'The recovery that followed was swift:',
          note: 'Coherence & Cohesion: a short summarising sentence and a colon lead into the detail. Cohesion comes from referencing (“Both then”, “that followed”), not from a list of linking words.',
        },
      ],
    },
  ],
})
