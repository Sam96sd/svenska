import { defineLesson } from '../define'

export default defineLesson({
  id: 'w-a1-proportions',
  skill: 'writing',
  module: 'academic',
  order: 3,
  title: 'Proportions, tables and mixed charts',
  summary:
    'Turn percentages into natural proportion language, pick the right figures from a busy table and link two charts in one report.',
  types: ['pie', 'table', 'mixed'],
  minutes: 10,
  sections: [
    {
      kind: 'text',
      heading: 'From percentages to proportions',
      paragraphs: [
        'Pie charts and many tables show **shares of a whole**. Quoting every percentage in brackets is accurate but mechanical. Band 8 writers translate the most important figures into **proportion language** — a quarter, just under a third, the vast majority — and support them with the exact figure where it matters.',
        'The trick is precision. “A third” for 28% is inaccurate; “just over a quarter” is right. Mix the two forms: a fraction to make the point, the percentage to prove it. “Just under a third of the budget (32%) went on staff.”',
      ],
    },
    {
      kind: 'compare',
      heading: 'Matching figures to phrases',
      headers: ['Figure', 'Natural phrase', 'Avoid'],
      rows: [
        ['1–3%', 'a negligible / tiny proportion', 'a small part'],
        ['8–10%', 'roughly one in ten; fewer than one in ten', 'some'],
        ['24–26%', 'a quarter; around a quarter', 'a third'],
        ['30–32%', 'just under a third', 'about a quarter; nearly half'],
        ['34–36%', 'just over a third', 'a big part'],
        ['47–49%', 'almost / nearly half', 'the majority (it is not over 50%)'],
        ['51–53%', 'just over half; a slim majority', 'most of them'],
        ['65–67%', 'roughly two-thirds', 'nearly all'],
        ['74–76%', 'about three-quarters', 'all'],
        ['85% +', 'the vast majority; the overwhelming majority', 'everyone'],
      ],
    },
    {
      kind: 'phrases',
      heading: 'Useful proportion language',
      items: [
        {
          phrase: 'accounted for / made up / comprised',
          use: 'Link a category to its share: “Rail accounted for just over a fifth of journeys.”',
        },
        {
          phrase: 'the lion’s share',
          use: 'The biggest portion by a clear margin, e.g. a slice of 60–70%. Use it once, not in every paragraph.',
        },
        {
          phrase: 'the largest single category',
          use: 'The biggest slice when no slice is a majority.',
        },
        { phrase: 'a small minority', use: 'A low share, usually under about 15%.' },
        {
          phrase: 'the remainder / the remaining X%',
          use: 'Wrap up the minor slices in one phrase instead of listing them.',
        },
        { phrase: 'twice as large a share as', use: 'Compare two slices directly.' },
        {
          phrase: 'X’s share rose from … to …',
          use: 'Comparing two pies over time: change in proportion, not in number.',
        },
        {
          phrase: 'by contrast, only…',
          use: 'Introduce a strikingly small figure after a large one.',
        },
      ],
    },
    {
      kind: 'steps',
      heading: 'Choosing what to compare in a table',
      items: [
        '**Read the row and column headings** and the unit before any figure. Decide whether rows or columns are the real comparison.',
        '**Circle the extremes:** the highest and lowest figure in each column, and any total or average row.',
        '**Look for a pattern across the table:** does a figure rise or fall as you move down the rows (by age, by year, by income)?',
        '**Spot the exception:** the one row or column that breaks the pattern is usually worth a sentence.',
        '**Select six to ten figures in total.** A table of 30 numbers does not need 30 numbers in the report.',
        '**Group your paragraphs** by the pattern you found, not by the order of the rows.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: planning a table report',
      context:
        'A table shows average weekly hours spent on four leisure activities by age group. 16–24: streaming video 14, sport 5, reading 2, socialising 9. 25–44: streaming 10, sport 3, reading 3, socialising 6. 45–64: streaming 8, sport 2, reading 5, socialising 5. 65+: streaming 6, sport 1, reading 9, socialising 7.',
      question: 'Which features would you select, and how would you group the two body paragraphs?',
      answer:
        'Overview: streaming was the most time-consuming activity for every group except the over-65s, for whom reading came first; streaming fell steadily with age while reading rose. Body 1: streaming and reading as mirror images (14 → 6 hours; 2 → 9 hours). Body 2: socialising and sport (socialising highest among 16–24s at 9 hours, dipping in middle age and recovering to 7 for the over-65s; sport the least popular activity in every group, falling from 5 hours to 1).',
      reasoning: [
        'Reading down each column reveals two opposite patterns — streaming falls with age, reading rises — which become the overview and the first paragraph.',
        'The over-65s are the exception: the only group not led by streaming. That earns a place in the overview.',
        'Socialising does not move in one direction (9, 6, 5, 7), so it is described as dipping and then recovering, with the end points as evidence.',
        'Sport needs only one sentence: lowest everywhere and declining.',
        'About ten figures are used out of sixteen, and no reason is given for any of them.',
      ],
    },
    {
      kind: 'text',
      heading: 'Mixed charts: two visuals, one report',
      paragraphs: [
        'When the task gives two charts (for example, a line graph of total energy use and a pie chart of energy sources), your **overview must cover both** — one main feature from each is enough.',
        'Usually give **one body paragraph to each chart**. Where the charts share a category or a time period, link them in a sentence: “In the same year in which total demand peaked, coal still supplied almost half of it.” Linking facts is excellent; inventing a **cause** (“demand rose because coal was cheap”) is not allowed.',
      ],
    },
    {
      kind: 'trap',
      text: 'A pie chart shows **proportions, not numbers**. If two pies show different years but no totals, you cannot say “fewer people cycled”; you can only say “a smaller proportion of journeys were made by bicycle”. Writing “fewer” is a factual error that costs Task Achievement.',
    },
    {
      kind: 'tip',
      text: 'Round off minor categories together: “The remaining 12% was split between wind, solar and other sources.” This shows selection and saves you from three dull sentences.',
    },
  ],
  drills: [],
})
