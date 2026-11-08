import { defineWritingTask } from '../define'

/** Original task and model answers. Academic Task 1, line graph. All data is fictional. */
export default defineWritingTask({
  id: 'a1-line-cinema-attendance',
  skill: 'writing',
  use: 'practice',
  module: 'academic',
  task: 1,
  type: 'line',
  topic: 'Leisure and entertainment',
  title: 'Cinema visits by age group',
  prompt:
    'The graph below shows the average number of times people in four age groups went to the cinema each year in Kestria between 2000 and 2025.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
  chart: {
    kind: 'line',
    title:
      'Average number of cinema visits per person per year in Kestria, by age group, 2000–2025',
    xLabels: ['2000', '2005', '2010', '2015', '2020', '2025'],
    yLabel: 'Visits per person per year',
    unit: '',
    series: [
      { name: '15–24', values: [8.2, 7.6, 6.9, 5.4, 4.1, 3.5] },
      { name: '25–44', values: [5.1, 5.6, 6.0, 5.8, 5.2, 4.9] },
      { name: '45–64', values: [2.4, 2.9, 3.6, 4.3, 4.8, 5.2] },
      { name: '65 and over', values: [0.8, 1.0, 1.5, 2.1, 2.6, 3.0] },
    ],
  },
  planHints: [
    'Find the big picture first and put it in your overview (paragraph 2), with no numbers: which groups went up, which went down, and how the ranking changed by the end. This is the main difference between Band 7 and Band 8.',
    'Group the lines instead of describing them one by one: the two younger groups (falling, or rising then falling) against the two older groups (rising).',
    'Report the key points only: starting and finishing figures, the peak, and when one line overtook another. You don’t need every value for every year.',
    'Use precise trend language: “peaked at”, “more than halved”, “almost quadrupled”, “overtook”, “the gap narrowed”.',
    'Describe, don’t explain. The graph gives no reasons (streaming, ticket prices…), so don’t invent any.',
  ],
  models: [
    {
      band: 6,
      text: `The graph shows how many times people go to cinema in Kestria from 2000 until 2025 for four age groups.

In 2000 the people from 15-24 went to the cinema 8.2 times, the people 25-44 went 5.1 times, the people 45-64 went 2.4 times and the people over 65 went 0.8 times. In 2005 the youngest group decreased to 7.6 and the 25-44 group increased to 5.6.

In 2010 the 25-44 group was the highest with 6.0 but after that it was going down until 4.9 in 2025. The young people decreased a lot and in 2025 they are only 3.5, maybe because they prefer to watch films on internet. The 45-64 group was increase every year and at the end it was 5.2, it is the most popular. The old people also increased to 3.0 in 2025, the same like the young people.

To sum up, the young people go less to the cinema and the older people go more, and the 45-64 group is the biggest in the end.`,
      annotations: [
        {
          quote:
            'In 2000 the people from 15-24 went to the cinema 8.2 times, the people 25-44 went 5.1 times',
          note: 'Task Achievement: the answer lists every figure year by year instead of selecting key features. There is no overview until the last line, which keeps TA at 6.',
        },
        {
          quote: 'In 2010 the 25-44 group was the highest with 6.0',
          note: 'Task Achievement: inaccurate. In 2010 the 15–24 group (6.9) was still higher; 6.0 was only the peak of the 25–44 line. Say “peaked at 6.0”.',
        },
        {
          quote: 'maybe because they prefer to watch films on internet',
          note: 'Task Achievement: the graph gives no reasons. Speculation like this is irrelevant in Task 1 and the examiner ignores it at best.',
        },
        {
          quote: 'the same like the young people',
          note: 'Task Achievement and Grammatical Range & Accuracy: 3.0 is not the same as 3.5, and “the same like” should be “the same as”. Errors such as “was increase” and the tense shifts (“they are only 3.5”) also limit GRA.',
        },
      ],
    },
    {
      band: 7,
      text: `The line graph shows the average number of cinema visits per person each year in Kestria from 2000 to 2025, divided into four age groups.

Overall, younger people went to the cinema less often over the period, while older people went more often. By 2025, people aged 45 to 64 had become the most frequent cinema-goers, and the over-65s still had the lowest figure.

In 2000, 15- to 24-year-olds visited the cinema most often, at 8.2 times per year. However, this number decreased steadily and reached only 3.5 in 2025. The 25 to 44 age group started at 5.1 visits and rose to a peak of 6.0 in 2010. After that, it fell gradually to 4.9 at the end of the period.

In contrast, the figures for the two older groups increased throughout. Visits among people aged 45 to 64 went up from 2.4 to 5.2, and this group had overtaken both younger groups by 2025. The figure for people aged 65 and over was very low in 2000, at 0.8, but it grew to 3.0 by 2025, which was not far below the figure for the youngest group.`,
      annotations: [
        {
          quote:
            'Overall, younger people went to the cinema less often over the period, while older people went more often.',
          note: 'Task Achievement: a clear overview that identifies the two opposite trends. This is what lifts the answer to Band 7.',
        },
        {
          quote: 'rose to a peak of 6.0 in 2010',
          note: 'Lexical Resource: accurate trend language (“rose to a peak”, “fell gradually”, “decreased steadily”), with data that matches the graph.',
        },
        {
          quote: 'and this group had overtaken both younger groups by 2025',
          note: 'Task Achievement: a key feature, but it would be clearer to say when each overtaking happened (the 15–24 group by 2020, the 25–44 group by 2025).',
        },
        {
          quote: 'In contrast, the figures for the two older groups increased throughout.',
          note: 'Coherence & Cohesion: good grouping in the last paragraph, but the third paragraph still describes each line separately. Band 8 compares groups directly.',
        },
      ],
    },
    {
      band: 8.5,
      text: `The line graph illustrates how often people in four age groups in Kestria went to the cinema each year, on average, between 2000 and 2025.

Overall, cinema-going declined among younger adults while becoming more popular with older people, so that the four groups ended the period far closer together than they began. The youngest group, initially the most frequent filmgoers, had slipped to third place by the end, whereas the second-oldest group rose to the top.

In 2000, 15- to 24-year-olds went to the cinema 8.2 times a year, compared with 5.1 times for 25- to 44-year-olds. The former figure then fell continuously, more than halving to 3.5 by 2025. Attendance among 25- to 44-year-olds followed a different pattern, peaking at 6.0 in 2010 before easing back to 4.9, slightly below its starting level.

At the other end of the age range, the trends were consistently upward. The rate for 45- to 64-year-olds more than doubled, from 2.4 to 5.2, overtaking the youngest group by 2020 and the 25–44 group by 2025. Although the over-65s remained the least frequent cinema-goers throughout, their figure almost quadrupled, from 0.8 to 3.0, leaving them only half a visit behind the youngest group.`,
      annotations: [
        {
          quote: 'so that the four groups ended the period far closer together than they began',
          note: 'Task Achievement: the overview has no numbers but captures the most important feature of the whole graph: the convergence of the lines. This is the Band 8 overview.',
        },
        {
          quote: 'more than halving to 3.5 by 2025',
          note: 'Lexical Resource: precise proportional language (“more than halving”, “more than doubled”, “almost quadrupled”) turns raw figures into comparisons.',
        },
        {
          quote: 'overtaking the youngest group by 2020 and the 25–44 group by 2025',
          note: 'Task Achievement: the crossing points are reported accurately, which a Band 7 answer often misses or blurs.',
        },
        {
          quote: 'At the other end of the age range, the trends were consistently upward.',
          note: 'Coherence & Cohesion: each body paragraph groups two lines with a topic sentence, so the reader sees the contrast without “On the other hand”.',
        },
        {
          quote: 'Although the over-65s remained the least frequent cinema-goers throughout',
          note: 'Grammatical Range & Accuracy: a concessive clause combined with a participle clause (“leaving them…”), error-free and natural.',
        },
      ],
    },
  ],
})
