import { defineLesson } from '../define'

export default defineLesson({
  id: 'w-a1-overview',
  skill: 'writing',
  module: 'academic',
  order: 1,
  title: 'The overview paragraph comes first',
  summary:
    'Write a clear, number-free overview of the two main features straight after your introduction: the single biggest step from Band 7 to Band 8 in Task 1.',
  types: ['line', 'bar', 'pie', 'table', 'mixed', 'map', 'process'],
  minutes: 9,
  sections: [
    {
      kind: 'text',
      heading: 'Why the overview decides your band',
      paragraphs: [
        'In Academic Task 1 the examiner is asking one question before any other: **can you see the big picture?** The overview is the paragraph that answers it. Without a clear overview, Task Achievement usually stays at **Band 5**, however accurate your numbers are. With a clear one, Band 7 becomes possible; with a clear, **accurate and well-selected** one, Band 8 is within reach.',
        'An overview is not a conclusion and not a summary of every line. It is **two or three sentences that state the main features** — the patterns a reader would remember after looking at the chart for ten seconds. It contains **no numbers**, because numbers belong to detail, and detail belongs to the body paragraphs.',
        'Put it **second**, directly after your one-sentence introduction. Writing it early guarantees it is there even if you run short of time, and it tells the examiner from the start that you have selected the key information instead of describing the chart from left to right.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Finding the two main features in one minute',
      items: [
        '**Step back from the detail.** Look at the whole chart, not individual points. Ignore small ups and downs for now.',
        '**Ask about direction.** Over the whole period, did the main categories go up, go down or stay broadly the same? Did any of them move in opposite directions?',
        '**Ask about rank.** Which category was the largest or smallest — and did that change? A reversal (one category overtaking another) is almost always a main feature.',
        '**For maps,** ask what kind of place it became overall: more residential, more commercial, more built-up, better connected?',
        '**For processes,** count the stages and note where the process begins and ends, and whether it is a cycle or a straight line, natural or man-made.',
        '**Choose two features** and write them as one or two sentences joined by *while*, *whereas* or *and*. If a third feature is genuinely striking, add it briefly.',
      ],
    },
    {
      kind: 'list',
      heading: 'What goes in — and what stays out',
      items: [
        '**In:** overall trends (rose, declined, remained stable), the biggest and smallest categories, any change in ranking, the most striking contrast between groups.',
        '**In (maps):** the overall transformation, e.g. a quiet farming village turned into a commuter town with far more housing and better roads.',
        '**In (processes):** the number of stages, the starting and finishing points, and whether the process is cyclical.',
        '**Out:** every number, year-by-year changes, minor fluctuations, and anything that only one data point shows.',
        '**Out:** opinions, reasons or predictions (“probably because of the economy”, “this will continue”). Task 1 reports; it never explains.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Weak and strong overviews',
      headers: ['Weak overview', 'Why it is weak', 'Strong overview'],
      rows: [
        [
          'Overall, there were many changes in the number of cinema visits.',
          'Vague: it could describe any chart. No feature is identified.',
          'Overall, cinema attendance fell in every age group, but the decline was far steeper among teenagers than among the over-50s.',
        ],
        [
          'Overall, Country A had the highest rate at 42%.',
          'Contains a number and gives only one feature.',
          'Overall, Country A recorded the highest rate throughout, while Country C, which started lowest, showed by far the fastest growth.',
        ],
        [
          'In conclusion, the chart shows that people should recycle more.',
          'An opinion, placed as a conclusion. Task 1 has no opinions.',
          'In general, recycling became the main method of waste disposal, replacing landfill, which had dominated at the start of the period.',
        ],
        [
          'Overall, the town changed a lot between 1995 and 2025.',
          'True of every map task; it says nothing about how it changed.',
          'Overall, the town was transformed from a largely agricultural settlement into a busy residential area with greatly improved transport links.',
        ],
        [
          'Overall, there are many steps to make paper.',
          'No number of stages, no start or end point.',
          'Overall, paper production involves eight stages, beginning with the felling of trees and ending with the delivery of finished rolls to printers.',
        ],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: rewriting a Band 6 overview',
      context:
        'A line graph shows annual visitors to three museums in one city from 2005 to 2025. The Science Museum rose steadily from 120,000 to 310,000. The Art Gallery stayed between 180,000 and 210,000, ending at 180,000. The Maritime Museum fell from 90,000 to 40,000. A student wrote: “Overall, the Science Museum had 310,000 visitors in 2025, which was the highest number.”',
      question: 'Rewrite the overview so that it would support Band 8 for Task Achievement.',
      answer:
        'Overall, the Science Museum saw strong and sustained growth, rising from second place to become by far the most visited of the three, whereas visitor numbers at the Art Gallery remained broadly stable and those at the Maritime Museum declined.',
      reasoning: [
        'The original contains a number and describes one moment (2025), not a trend. It is detail dressed up as an overview.',
        'The first main feature is **direction**: one museum grew, one was stable, one declined. All three can be covered in a single sentence.',
        'The second main feature is **rank change**: the Science Museum began behind the Art Gallery and ended well ahead of it. “Rising from second place” captures this without quoting a figure.',
        '“Whereas” links the contrasting trends in one well-controlled complex sentence, which also helps Grammatical Range.',
        'All the actual numbers — 120,000, 310,000, 40,000 — are saved for the body paragraphs, where they support these features.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Language for overviews',
      items: [
        {
          phrase: 'Overall, it is clear that…',
          use: 'A neutral opener for any chart type; follow it with the main trend.',
        },
        {
          phrase: 'The most striking feature is…',
          use: 'To introduce the single feature that stands out most, e.g. a reversal.',
        },
        {
          phrase: '…, whereas / while …',
          use: 'To join two contrasting main features in one sentence.',
        },
        {
          phrase: '…remained the dominant / largest … throughout the period',
          use: 'When the ranking at the top never changed.',
        },
        {
          phrase: '…overtook … to become the most …',
          use: 'When categories swapped positions: almost always worth an overview.',
        },
        {
          phrase: 'In general terms, … was transformed from … into …',
          use: 'Map overviews: the overall change in character.',
        },
        {
          phrase: 'The process consists of … stages, beginning with … and ending with …',
          use: 'Process overviews: number of stages, start and end.',
        },
      ],
    },
    {
      kind: 'trap',
      text: 'Putting the overview at the very end and starting it with **“In conclusion”**. Examiners accept an overview at the end, but “in conclusion” invites an opinion or a summary of figures, and if you run out of time it is the paragraph you lose. Write it second and start with **“Overall”**.',
    },
    {
      kind: 'tip',
      text: '**The sketch test:** give your overview to someone who has not seen the chart. Could they draw a rough version of it — which lines go up, which go down, which bar is tallest? If yes, your overview is doing its job.',
    },
  ],
  drills: [],
})
