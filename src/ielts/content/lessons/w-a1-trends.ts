import { defineLesson } from '../define'

export default defineLesson({
  id: 'w-a1-trends',
  skill: 'writing',
  module: 'academic',
  order: 2,
  title: 'Trends and comparisons in line and bar charts',
  summary:
    'Group the data, describe change with precise trend language and compare categories, without a single opinion or reason.',
  types: ['line', 'bar'],
  minutes: 10,
  sections: [
    {
      kind: 'text',
      heading: 'Select, group, compare',
      paragraphs: [
        'A Band 6 report walks through the chart point by point: “In 2000 it was 20. In 2005 it was 25. In 2010 it was 40.” A Band 8 report **selects** the figures that matter, **groups** categories that behave alike and **compares** them in the same sentence. The examiner’s phrase for this is that key features are “well selected” and “compared”.',
        'First decide what the chart is measuring. **Change over time** (a line graph, or bars across several years) needs the language of trends: rose, peaked, levelled off. **Comparison at one point in time** (bars for different countries in one year) needs the language of comparison: twice as high as, the second largest, slightly lower than. Many bar charts need both.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How to group the data into two body paragraphs',
      items: [
        '**Look for families.** Which lines or bars move in the same direction? Risers vs fallers is the most common split.',
        '**Or split by time.** If everything changes at a turning point (say, 2015), paragraph 1 can cover the period before it and paragraph 2 the period after.',
        '**Or split by size.** For a single-year bar chart, the leading categories can go in one paragraph and the smaller ones in the other.',
        '**Open each paragraph with its most important feature,** then support it with two or three accurate figures (start, end, peak).',
        '**Compare inside sentences,** not just between them: “X doubled, while Y barely changed.”',
        '**Check your coverage.** Every category should be mentioned at least once, even briefly, but not every number.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Precise trend and comparison language',
      items: [
        {
          phrase: 'rose steadily from X to Y',
          use: 'A consistent increase over the period; give the start and end figures.',
        },
        {
          phrase: 'peaked at X in [year]',
          use: 'The highest point, before a fall. Also: reached a peak of X.',
        },
        {
          phrase: 'levelled off at around X',
          use: 'A rise or fall that stopped and stayed flat. Also: plateaued at.',
        },
        {
          phrase: 'fluctuated between X and Y',
          use: 'Repeated small ups and downs with no clear direction.',
        },
        { phrase: 'hit a low of X', use: 'The lowest point, especially before a recovery.' },
        {
          phrase: 'overtook',
          use: 'One category passed another: “Online sales overtook in-store sales in 2019.”',
        },
        {
          phrase: 'the gap between X and Y widened / narrowed',
          use: 'Compares how far apart two series are over time.',
        },
        {
          phrase: 'roughly double / almost three times that of',
          use: 'Comparison of size; check the arithmetic before you write it.',
        },
        {
          phrase: 'a threefold / fourfold increase',
          use: 'Growth as a multiple; more precise than “a huge increase”.',
        },
        {
          phrase: 'remained broadly stable',
          use: 'Little change overall, allowing for small movements.',
        },
        {
          phrase: 'a marginal / modest / sharp / dramatic rise',
          use: 'Match the adjective to the size of the change; do not exaggerate.',
        },
      ],
    },
    {
      kind: 'compare',
      heading: 'Band 7 and Band 8 sentences',
      headers: ['Band 7', 'Band 8', 'What changed'],
      rows: [
        [
          'The number of cyclists increased a lot from 2010 to 2020.',
          'The number of cyclists more than tripled between 2010 and 2020, from 4,000 to 13,500.',
          'A precise multiple and supporting figures replace “a lot”.',
        ],
        [
          'Car use went up and then went down after 2015.',
          'Car use peaked at 62% in 2015 before falling back to 48% by the end of the period.',
          'Exact trend verbs (peaked, fell back) and a clear time frame.',
        ],
        [
          'Bus use was 30%. Train use was 15%.',
          'At 30%, bus use was double the figure for trains.',
          'Two facts become one comparison.',
        ],
        [
          'The difference between men and women got bigger.',
          'The gap between male and female participation widened steadily, reaching 18 percentage points by 2024.',
          'Natural collocation (the gap widened) plus a precise measure.',
        ],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: one grouped body paragraph',
      context:
        'A bar chart shows the percentage of households with solar panels in four regions in 2010 and 2025. North: 4% → 18%. South: 9% → 36%. East: 5% → 11%. West: 12% → 14%.',
      question: 'Write a body paragraph about the regions that changed the most.',
      answer:
        'The South recorded by far the most dramatic growth: its share of households with solar panels quadrupled from 9% to 36%, taking it well ahead of the West, which had led in 2010 with 12%. The North followed a similar pattern on a smaller scale, rising more than fourfold from just 4% to 18%.',
      reasoning: [
        '**Group first:** the South and the North grew strongly; the East and the West grew modestly. That split gives two paragraphs.',
        'The paragraph opens with its main point (the South grew most) before giving figures.',
        '“Quadrupled” is checked against the data: 9 × 4 = 36. “More than fourfold” is also accurate for 4% to 18%.',
        'The South is **compared** with the West inside the same sentence, which shows the change in ranking.',
        'There is no reason or opinion: nothing about government grants or cheaper panels, because the chart shows neither.',
      ],
    },
    {
      kind: 'trap',
      text: '**Never explain the data.** “This is probably because electric cars became cheaper” or “This is a positive development” is an opinion or a reason, and Task 1 asks for neither. If it is not on the chart, it is not in your report.',
    },
    {
      kind: 'list',
      heading: 'Accuracy checklist for numbers',
      items: [
        '**To vs by:** “rose to 40%” gives the new level; “rose by 10%” gives the size of the change.',
        '**Per cent vs percentage points:** a change from 20% to 30% is a rise of ten **percentage points** (and a 50% increase).',
        '**Approximate honestly** when a value falls between gridlines: just over, roughly, almost, well under.',
        '**Number vs amount:** the number of visitors (countable); the amount of water (uncountable).',
        '**Always give the unit:** thousands of tonnes, millions of passengers, % of households.',
      ],
    },
    {
      kind: 'tip',
      text: 'Vary the **subject** of your sentences instead of hunting for synonyms of “increase”: “Sales of tea rose…”, “Tea sales saw a rise…”, “The figure for tea climbed…”, “There was a steady rise in tea sales…”. This shows grammatical range as well as vocabulary.',
    },
  ],
  drills: [],
})
