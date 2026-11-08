import { defineWritingTask } from '../define'

/** Original task and model answers. Academic Task 1, grouped bar chart. All data is fictional. */
export default defineWritingTask({
  id: 'a1-bar-energy-sources',
  skill: 'writing',
  use: 'practice',
  module: 'academic',
  task: 1,
  type: 'bar',
  topic: 'Energy',
  title: 'Electricity sources in three countries',
  prompt:
    'The bar chart below shows the proportion of electricity generated from five different sources in three countries in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
  chart: {
    kind: 'bar',
    title: 'Electricity generation by source in three countries, 2024 (% of total)',
    categories: ['Arlandia', 'Bressia', 'Corvenia'],
    yLabel: '% of electricity generated',
    unit: '%',
    series: [
      { name: 'Coal', values: [46, 8, 3] },
      { name: 'Natural gas', values: [31, 17, 12] },
      { name: 'Nuclear', values: [0, 52, 10] },
      { name: 'Hydroelectric', values: [5, 9, 41] },
      { name: 'Wind and solar', values: [18, 14, 34] },
    ],
  },
  planHints: [
    'Write the overview first, with no numbers: what is the main source in each country, and is any source important everywhere? An overview is the single biggest difference between Band 7 and Band 8.',
    'Group the data by type of energy (fossil fuels, nuclear, renewables) and compare the three countries inside each group, instead of describing one country after another.',
    'Combine figures where it helps: coal plus gas in Arlandia, or hydro plus wind and solar in Corvenia, gives you a strong comparison.',
    'Use precise proportion language: “just over half”, “over three-quarters”, “less than a tenth”, “a negligible 3%”, “no nuclear generation at all”.',
    'No opinions: don’t say which country is “greener” or “better”, and don’t guess why each country chose its energy mix.',
  ],
  models: [
    {
      band: 6,
      text: `The chart show the electricity which is made from five different sources in Arlandia, Bressia and Corvenia in the year 2024.

In Arlandia the coal is 46% and it is the highest. Natural gas is 31%, wind and solar is 18%, hydroelectric is 5% and nuclear is 0%. So Arlandia use a lot of coal and gas which is not good for the environment.

Bressia is different. The nuclear is 52% and this is the most big in all the chart. Natural gas is 17%, wind and solar is 14%, coal is 9% and hydroelectric is 8%.

In Corvenia the hydroelectric is 41% and wind and solar is 34%, so it is more than Arlandia and Bressia. The nuclear is 10%, gas is 12% and coal is 3%. Corvenia use the most clean energy from all the countries.

In conclusion, the three countries use different sources, Arlandia uses coal, Bressia uses nuclear and Corvenia uses hydroelectric.`,
      annotations: [
        {
          quote:
            'Natural gas is 31%, wind and solar is 18%, hydroelectric is 5% and nuclear is 0%.',
          note: 'Task Achievement: every bar is listed, country by country, with no selection of key features. The comparisons between countries are left to the reader.',
        },
        {
          quote: 'coal is 9% and hydroelectric is 8%',
          note: 'Task Achievement: inaccurate. The chart shows coal at 8% and hydroelectric at 9% in Bressia. Check each figure against the chart before you move on.',
        },
        {
          quote: 'which is not good for the environment',
          note: 'Task Achievement: a personal opinion. Academic Task 1 reports the data only.',
        },
        {
          quote: 'so it is more than Arlandia and Bressia',
          note: 'Coherence & Cohesion: unclear reference. What is “it”: hydroelectric, wind and solar, or both together? Grammar errors (“The chart show”, “the most big”, “Corvenia use”) also limit GRA to 6.',
        },
      ],
    },
    {
      band: 7,
      text: `The bar chart shows the percentage of electricity produced from coal, natural gas, nuclear power, hydroelectric power and wind and solar power in three countries in 2024.

Overall, Arlandia used mostly fossil fuels, Bressia relied mainly on nuclear power and Corvenia got most of its electricity from renewable energy. Wind and solar power was used in all three countries.

In Arlandia, coal was the biggest source, at 46%, followed by natural gas at 31%. Wind and solar provided 18%, while hydroelectric power was only 5% and there was no nuclear power. In Bressia, the situation was very different, because more than half of the electricity (52%) came from nuclear power. Natural gas produced 17%, and the other three sources were all below 15%.

Corvenia had the highest proportion of hydroelectric power, at 41%, and wind and solar was also important there, at 34%. Fossil fuels were much less common than in the other countries, with gas at 12% and coal at only 3%. Nuclear power made up 10% of the total.`,
      annotations: [
        {
          quote:
            'Overall, Arlandia used mostly fossil fuels, Bressia relied mainly on nuclear power and Corvenia got most of its electricity from renewable energy.',
          note: 'Task Achievement: a clear, accurate overview of the main source in each country, which secures Band 7.',
        },
        {
          quote: 'Wind and solar power was used in all three countries.',
          note: 'Task Achievement: true but weak. Natural gas was also used everywhere; the stronger point is that only gas and wind and solar made a substantial contribution in all three.',
        },
        {
          quote: 'and the other three sources were all below 15%',
          note: 'Task Achievement: an efficient summary that avoids listing three small figures. Good selection of detail.',
        },
        {
          quote: 'In Bressia, the situation was very different, because',
          note: 'Coherence & Cohesion: the answer is organised country by country, so the cross-country comparisons are made only occasionally. “Because” is also the wrong link here: the data is not a reason.',
        },
      ],
    },
    {
      band: 8.5,
      text: `The bar chart compares the share of electricity that Arlandia, Bressia and Corvenia generated from five sources in 2024.

Overall, each country depended mainly on a different type of energy: fossil fuels in Arlandia, nuclear power in Bressia and renewable sources in Corvenia. Only natural gas and wind and solar power made a substantial contribution in every country.

Arlandia was the most reliant on fossil fuels, with coal alone generating 46% of its electricity and natural gas a further 31%, a combined total of over three-quarters. Gas played a smaller role in Bressia (17%) and Corvenia (12%), while coal accounted for just 8% and a negligible 3% of their output respectively. Bressia stood out for its use of nuclear energy, which supplied just over half of its electricity (52%), compared with only 10% in Corvenia, and Arlandia had no nuclear generation at all.

Renewables presented a very different picture. Hydroelectric power was the leading source in Corvenia, at 41%, but provided less than a tenth of the total elsewhere (9% in Bressia and 5% in Arlandia). Wind and solar ranged from 14% in Bressia to 34% in Corvenia, meaning that exactly three-quarters of Corvenia’s electricity came from renewables.`,
      annotations: [
        {
          quote:
            'Only natural gas and wind and solar power made a substantial contribution in every country.',
          note: 'Task Achievement: the overview goes beyond “the main source in each country” and identifies a pattern across all three, with no numbers.',
        },
        {
          quote: 'a combined total of over three-quarters',
          note: 'Task Achievement: combining coal and gas (46% + 31% = 77%) turns two bars into one meaningful comparison. Accurate and precise.',
        },
        {
          quote: 'coal accounted for just 8% and a negligible 3% of their output respectively',
          note: 'Lexical Resource: “accounted for”, “a negligible 3%”, “respectively” let the writer compare two countries in one accurate, compact sentence.',
        },
        {
          quote: 'Renewables presented a very different picture.',
          note: 'Coherence & Cohesion: the body is organised by type of energy, not by country, so every paragraph compares all three countries.',
        },
        {
          quote:
            'meaning that exactly three-quarters of Corvenia’s electricity came from renewables',
          note: 'Grammatical Range & Accuracy: a participle clause that adds a conclusion drawn only from the data (41% + 34% = 75%), not an opinion.',
        },
      ],
    },
  ],
})
