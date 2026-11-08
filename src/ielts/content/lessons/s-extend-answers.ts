import { defineLesson } from '../define'

export default defineLesson({
  id: 's-extend-answers',
  skill: 'speaking',
  module: 'both',
  order: 1,
  title: 'Extending your answers',
  summary:
    'Turn one-line replies into developed answers with Answer → Reason → Example → Contrast, and judge the right length for Part 1 and Part 3.',
  types: ['part1', 'part3'],
  minutes: 8,
  sections: [
    {
      kind: 'text',
      heading: 'Why short answers cost marks',
      paragraphs: [
        'Fluency and Coherence rewards candidates who can **speak at length without noticeable effort** and **develop topics coherently**. A reply like “Yes, I do” gives the examiner almost nothing to assess: no range of vocabulary, no complex grammar, no evidence that you can connect ideas.',
        'The fix is not to talk for as long as possible, but to give each answer a **shape**. A simple four-step pattern — **Answer, Reason, Example, Contrast** — produces natural, well-organised answers on almost any question.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Answer → Reason → Example → Contrast',
      items: [
        '**Answer** the question directly in the first few words: “Yes, quite a lot, actually.” Never make the examiner wait for your answer.',
        '**Reason:** say why. “…mainly because it’s the only time in the day I can switch off.”',
        '**Example:** make it concrete with a specific detail from your life (Part 1) or from society (Part 3). “Last weekend, for instance, I spent the whole of Sunday afternoon making a curry from scratch.”',
        '**Contrast:** add a different angle, an exception or a change over time. “Having said that, on weekdays I usually just throw something together in ten minutes.”',
        'You do not need all four every time. In Part 1, two or three steps are often enough; in Part 3, use all four and develop the reason more deeply.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: Part 1',
      context: 'Examiner: “Do you enjoy cooking?” Candidate: “Yes, I do. It is nice.”',
      question: 'Extend the answer to a natural Part 1 length.',
      answer:
        'Yes, I really do — mostly because it’s a nice break from staring at a screen all day. I’m trying to learn dishes from my grandmother’s region at the moment, so last week I had a go at a lentil soup she used to make. Mind you, on busy weekdays I’m afraid it’s usually just pasta.',
      reasoning: [
        '**Answer** first: “Yes, I really do.”',
        '**Reason:** a personal one (“a break from staring at a screen”), which also brings in natural vocabulary.',
        '**Example:** a specific dish and a specific time (“last week”), with a past tense that adds grammatical range.',
        '**Contrast:** “Mind you…” adds a realistic exception and makes the answer sound spontaneous.',
        'Four sentences, about 20 seconds: long enough to show ability, short enough for Part 1.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: Part 3',
      context:
        'Examiner: “Why do you think many people now eat out more often than they did in the past?” Candidate: “Because people are busy.”',
      question: 'Develop this into a Band 8 Part 3 answer.',
      answer:
        'I think the main reason is the way working life has changed. When both partners work long hours, cooking every evening can feel like a second job, so a meal out — or a takeaway — becomes the easiest option. You can see this in most city centres, where cheap lunch places are packed with office workers every weekday. That said, I’m not sure it’s only about time. For a lot of younger people eating out has become a social activity in itself, a way of seeing friends, so it’s as much about lifestyle as convenience.',
      reasoning: [
        'Part 3 asks about **people in general**, so the answer talks about society, not only the speaker.',
        'The **reason** is explained as a chain: long hours → cooking feels like a chore → eating out is easier.',
        'The **example** is a general observation anyone could recognise, not an invented statistic.',
        'The **contrast** (“That said, I’m not sure it’s only about time”) adds a second, deeper idea, which is what pushes Part 3 answers towards Band 8.',
        'Around 40–45 seconds: a typical length for a developed Part 3 answer.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Part 1 and Part 3 answers',
      headers: ['', 'Part 1', 'Part 3'],
      rows: [
        ['Length', '2–4 sentences, about 15–25 seconds', '4–7 sentences, about 30–60 seconds'],
        [
          'Focus',
          'You: your life, habits and preferences',
          'People and society: causes, effects, comparisons, the future',
        ],
        [
          'Examples',
          'From your own experience',
          'From society, your country, or typical situations',
        ],
        [
          'Language',
          'Natural, personal, everyday vocabulary',
          'More abstract vocabulary, hedging (I’d say, it tends to), speculation',
        ],
        [
          'Contrast',
          'An exception: “Mind you, on weekdays…”',
          'A second view or a nuance: “That said, it depends on…”',
        ],
      ],
    },
    {
      kind: 'phrases',
      heading: 'Language for each step',
      items: [
        { phrase: 'The main reason is that… / Mostly because…', use: 'Reason: introducing why.' },
        {
          phrase: 'For instance, just last week… / A good example is…',
          use: 'Example: making it concrete.',
        },
        {
          phrase: 'Having said that, … / That said, …',
          use: 'Contrast: adding a different angle.',
        },
        {
          phrase: 'It depends on… — for some people…, whereas…',
          use: 'Contrast in Part 3: showing nuance.',
        },
        {
          phrase: 'Whereas when I was younger, …',
          use: 'Contrast through change over time; also adds a past tense.',
        },
      ],
    },
    {
      kind: 'trap',
      text: '**Over-extending Part 1.** A 90-second speech about your hometown is not a better answer; the examiner will interrupt, and you lose the chance to show range on other questions. Keep Part 1 short and well-shaped, and save your longest answers for Part 3.',
    },
    {
      kind: 'tip',
      text: 'When you practise, record yourself answering five Part 1 questions. For each one, check: did I answer in the first few words, and did I give at least one reason and one specific detail?',
    },
  ],
  drills: [],
})
