import { defineLesson } from '../define'

export default defineLesson({
  id: 'w-t2-peel-paragraph',
  skill: 'writing',
  module: 'both',
  order: 12,
  title: 'Building a body paragraph with PEEL',
  summary:
    'Point, Explain, Example, Link: develop one idea fully, and watch a Band 6 paragraph become a Band 8 one.',
  types: ['opinion', 'discussion', 'adv-disadv', 'problem-solution', 'two-part'],
  minutes: 10,
  sections: [
    {
      kind: 'text',
      heading: 'One idea, fully developed',
      paragraphs: [
        'A body paragraph at Band 8 makes **one main point** and develops it until the reader is convinced. **PEEL** is a simple way to make sure each paragraph does that: a **Point** (the topic sentence), an **Explanation** of why it is true, an **Example** that makes it concrete, and a **Link** back to the question or your position.',
        'PEEL is a thinking tool, not a fixed number of sentences. The explanation may take two sentences; the example may be woven into the explanation. What matters is that all four jobs are done, and that the paragraph never jumps to a second, undeveloped idea.',
      ],
    },
    {
      kind: 'steps',
      heading: 'The four jobs',
      items: [
        '**Point:** one sentence that states the paragraph’s idea and connects it to your position. It should make sense on its own, as if it were a headline.',
        '**Explain:** answer “why?” or “how?”. Show the cause-and-effect chain behind the point. This is where most Band 6 paragraphs are too thin.',
        '**Example:** a specific, realistic case — a type of person, place or situation — that shows the explanation working in real life.',
        '**Link:** a final sentence that shows what the example proves about the question. Not a repetition of the point, but a step forward from it.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: Band 6 to Band 8',
      context:
        'Prompt: “Some people believe that young people should be required to do unpaid community work in their free time. To what extent do you agree?” Band 6 paragraph: “Firstly, community work is good for young people. They can learn many skills. Also they can meet new people and it is good for their CV. Moreover, it helps the society, for example old people. So community work has many benefits.”',
      question: 'Rewrite the paragraph so that it develops one idea fully, using PEEL.',
      answer:
        'The strongest argument for compulsory community work is that it gives teenagers practical experience that school rarely provides. In a classroom, students are assessed mainly on what they know; in a volunteer role, they must turn up on time, communicate with strangers and take responsibility when something goes wrong. A sixteen-year-old who spends two hours a week helping at a food bank, for instance, quickly learns to organise stock, deal politely with stressed customers and work under the direction of an adult supervisor. These are precisely the habits employers complain are missing in school leavers, which suggests that a modest weekly commitment could do more for young people’s prospects than many extra hours of study.',
      reasoning: [
        '**One idea instead of four.** The Band 6 paragraph lists skills, meeting people, CVs and helping society, and develops none. The rewrite keeps only practical experience.',
        '**Point:** the topic sentence states the idea and links it to the position (“the strongest argument for compulsory community work”).',
        '**Explain:** the contrast between classroom and volunteer role shows *why* the experience is different, using a semicolon to balance the two halves.',
        '**Example:** a specific, believable case (a sixteen-year-old at a food bank) with concrete actions, not a statistic.',
        '**Link:** the final sentence moves the argument forward — from skills to employability — and connects back to the question of whether the work should be required.',
        'Mechanical linkers (Firstly, Also, Moreover, So) have gone; the ideas themselves now carry the logic.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Each part: weak and strong',
      headers: ['Part', 'Weak', 'Strong'],
      rows: [
        [
          'Point',
          'Firstly, there are many advantages.',
          'The clearest benefit of a four-day week is a measurable fall in staff burnout.',
        ],
        [
          'Explain',
          'This is because it is good for people.',
          'An extra rest day gives employees time to recover from a demanding week, so they return more focused and less likely to take sick leave.',
        ],
        [
          'Example',
          'For example, a study showed 90% of workers were happier.',
          'A hospital administrator, for instance, could use the spare day for medical appointments that would otherwise mean leaving work early.',
        ],
        [
          'Link',
          'So it has many advantages.',
          'In this way, a shorter week can benefit employers as much as their staff, which is why I support it.',
        ],
      ],
    },
    {
      kind: 'phrases',
      heading: 'Language for each part',
      items: [
        {
          phrase: 'The most compelling reason for… is that…',
          use: 'Point: a topic sentence that also signals your position.',
        },
        {
          phrase: 'This matters because… / The reason is simple:…',
          use: 'Explain: moving from the claim to the cause.',
        },
        {
          phrase: 'As a result, … / This, in turn, means that…',
          use: 'Explain: extending the cause-and-effect chain one step further.',
        },
        {
          phrase: 'Take, for instance, … / Consider a…',
          use: 'Example: introducing a specific case.',
        },
        {
          phrase: 'A case in point is…',
          use: 'Example: when the case is a well-known type of situation.',
        },
        {
          phrase: 'This illustrates why… / For this reason,…',
          use: 'Link: showing what the example proves.',
        },
      ],
    },
    {
      kind: 'trap',
      text: '**The Link that only repeats the Point.** “In conclusion, community work is good for young people” after a paragraph saying exactly that adds nothing. A good Link takes one step further: why this matters for the question, or how it supports your overall position.',
    },
    {
      kind: 'tip',
      text: 'Test your explanation by asking **“So what?”** after each sentence. If the next sentence answers it, the paragraph is developing. If the next sentence starts a new topic, you have stopped explaining too early.',
    },
  ],
  drills: [],
})
