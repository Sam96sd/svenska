import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-match-info',
  skill: 'reading',
  module: 'both',
  order: 13,
  title: 'Matching information: which paragraph contains…?',
  summary:
    'Scan for the type of information — a reason, an example, a comparison — not the topic, and expect the answers in any order.',
  types: ['match-info'],
  minutes: 9,
  sections: [
    {
      kind: 'text',
      heading: 'What the examiner is testing',
      paragraphs: [
        'You get a list of statements such as *“an example of a product that failed”* or *“a reason why a law was changed”*, and you must say which lettered paragraph contains each one. The statement describes **one detail**, often a single sentence in the middle of a paragraph — not the main idea. That is the big difference from matching headings.',
        'Two features make the task slow: the statements are **not in text order**, and the instructions often say **“You may use any letter more than once”**. So one paragraph may hold two answers and another may hold none.',
      ],
    },
    {
      kind: 'steps',
      heading: 'A five-step method',
      items: [
        'Read every statement and underline two things: the **information type** (example, reason, comparison, criticism, method, prediction, number) and the **topic** (e.g. *a hedge trimmer*, *the cost of membership*).',
        'If the passage has other question groups, do them first. Answering in-order questions gives you a map of the passage for free.',
        'Skim each paragraph once and write a 2–3-word margin note listing the kinds of information it contains, e.g. *“B: origin + example + green benefit”*.',
        'Match the easy statements first — those with names, numbers or unusual words — then use your notes for the rest.',
        'Before you commit, find the **exact sentence**. Does it give the *type* of information the statement asks for, not just the same topic?',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example',
      context:
        'Paragraph B: Early bicycles were expensive, heavy and difficult to ride, and most owners were young men from wealthy families. Several manufacturers produced models for women, but sales were poor. Paragraph C: Riding on cobbled streets with solid wheels was extremely uncomfortable. Cycling spread to ordinary working people only after the air-filled tyre appeared, because daily journeys to work suddenly became bearable.',
      question:
        'Which paragraph contains an explanation of why cycling became popular with a wider group of people?',
      answer: 'C',
      reasoning: [
        'The information type is **an explanation** (a reason). Scan for reason signals: *because*, *since*, *led to*, *as a result*, *only after*.',
        'Paragraph B has the right **topic** — who rode bicycles, and a group (women) that did not buy them — but it describes a situation. Nothing in B explains a change. Topic match is not enough.',
        'Paragraph C: “spread to ordinary working people” = “popular with a wider group”, and “because daily journeys to work suddenly became bearable” is the reason. Answer: **C**.',
        'Notice where the answer sits: in the **second** sentence of C. A student who reads only first sentences (a good habit for headings) would miss it.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Information types and what to scan for',
      items: [
        {
          phrase: 'an example of…',
          use: 'for example, for instance, such as, a named case, a single person or place',
        },
        {
          phrase: 'a reason for / an explanation of…',
          use: 'because, since, due to, led to, the cause, this is why',
        },
        {
          phrase: 'a comparison / a contrast…',
          use: 'unlike, whereas, while, more than, similar to, in common with',
        },
        {
          phrase: 'a criticism / a problem…',
          use: 'however, not everything, a drawback, critics, fails to',
        },
        {
          phrase: 'a solution / measures taken…',
          use: 'responded by, introduced, to deal with, since then',
        },
        {
          phrase: 'a prediction / a future plan…',
          use: 'will, aim, hope, eventually, plan to, in future',
        },
      ],
    },
    {
      kind: 'compare',
      heading: 'Matching information vs matching headings',
      headers: ['', 'Matching headings', 'Matching information'],
      rows: [
        [
          'What you match',
          'the main idea of the whole paragraph',
          'one detail, often one sentence',
        ],
        ['Question order', 'follows the paragraphs', 'random'],
        ['Reuse', 'each heading used once', 'a letter may be used twice; some never'],
        [
          'How to read',
          'gist: opening and closing sentences help',
          'scan the whole paragraph for the information type',
        ],
      ],
    },
    {
      kind: 'trap',
      text: 'Choosing a paragraph because it **shares a keyword** with the statement. Writers repeat key nouns all through a passage: *tool* may appear in every paragraph, but only one paragraph gives *an example of a tool that is rarely used*. Always check the information type.',
    },
    {
      kind: 'tip',
      text: 'If one statement has taken more than 90 seconds, guess, flag it and move on. When you return, use your margin notes to rule out paragraphs instead of rereading the whole passage.',
    },
  ],
  drills: ['drill-match-info'],
})
