import { defineLesson } from '../define'

export default defineLesson({
  id: 's-discourse-markers',
  skill: 'speaking',
  module: 'both',
  order: 2,
  title: 'Natural discourse markers',
  summary:
    'Use the small spoken phrases that make you sound fluent and connected — and stop overusing the written linkers that make you sound like an essay.',
  types: ['part1', 'part2', 'part3'],
  minutes: 8,
  sections: [
    {
      kind: 'text',
      heading: 'Speaking is not a spoken essay',
      paragraphs: [
        '**Discourse markers** are the short words and phrases speakers use to start an answer, change direction, add a point or show their attitude: *well*, *actually*, *mind you*, *the thing is*. They help the listener follow you, and they buy you a second of thinking time without a silent pause.',
        'At Band 6, the examiner notes that markers are used but **not always appropriately**. A common reason is that candidates bring essay linkers into speech — “Firstly… Moreover… In conclusion” — which sounds rehearsed. At Band 8, markers are varied, natural and chosen for their meaning.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Starting an answer',
      items: [
        {
          phrase: 'Well, to be honest, …',
          use: 'A soft, natural start, especially before a slightly surprising answer.',
        },
        {
          phrase: 'That’s a tricky one…',
          use: 'A difficult or unexpected question; gives you a moment to think.',
        },
        {
          phrase: 'I’ve never really thought about it, but I suppose…',
          use: 'Part 3 questions on unfamiliar topics. Honest and fluent.',
        },
        {
          phrase: 'Oh, definitely. / Not really, no.',
          use: 'A clear direct answer in Part 1 before you extend it.',
        },
        {
          phrase: 'It’s funny you should ask, because…',
          use: 'When the question connects to something recent in your life.',
        },
      ],
    },
    {
      kind: 'phrases',
      heading: 'Adding, contrasting and correcting',
      items: [
        {
          phrase: 'On top of that, …',
          use: 'Adding a second point; more natural than “Moreover”.',
        },
        {
          phrase: 'Mind you, …',
          use: 'Adding a contrasting thought: “It’s expensive. Mind you, it’s worth it.”',
        },
        { phrase: 'Then again, …', use: 'Introducing the opposite consideration.' },
        {
          phrase: 'Actually, …',
          use: 'Correcting or adding a surprising fact: “Actually, it was my brother who suggested it.”',
        },
        { phrase: 'I mean, …', use: 'Clarifying or expanding what you just said.' },
        { phrase: 'The thing is, …', use: 'Introducing the real reason or the key problem.' },
      ],
    },
    {
      kind: 'phrases',
      heading: 'Storytelling and returning to the point (Part 2)',
      items: [
        { phrase: 'Anyway, …', use: 'Returning to the main story after a side detail.' },
        { phrase: 'Funnily enough, …', use: 'Introducing a surprising or ironic detail.' },
        { phrase: 'As it turned out, …', use: 'Introducing how things ended, often unexpectedly.' },
        { phrase: 'So, to cut a long story short, …', use: 'Moving towards the end of your talk.' },
        {
          phrase: 'Looking back, …',
          use: 'Reflecting at the end: ideal for the “explain why” point.',
        },
      ],
    },
    {
      kind: 'compare',
      heading: 'Markers to avoid overusing',
      headers: ['Overused or misplaced', 'Why it sounds wrong', 'Try instead'],
      rows: [
        [
          'Firstly… Secondly… Finally…',
          'Essay structure in speech sounds memorised.',
          'The main reason is… / On top of that… / And another thing is…',
        ],
        [
          'Moreover / Furthermore',
          'Written, formal linkers; rare in conversation.',
          'Also / What’s more / Plus',
        ],
        [
          'In my opinion (before every answer)',
          'Repetitive; every answer is your opinion.',
          'I’d say… / Personally… / I reckon…',
        ],
        [
          'like, like, you know, you know',
          'Fillers without meaning; they suggest word-searching.',
          'A short pause, or a planning phrase like “Let me think”.',
        ],
        ['In conclusion', 'You are not ending an essay.', 'So, all in all… / So yes, that’s why…'],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: from stiff to natural',
      context:
        'Examiner: “Do you think people will read fewer printed books in the future?” Candidate: “In my opinion, yes. Firstly, e-books are cheaper. Moreover, they are convenient. In conclusion, people will read fewer printed books.”',
      question: 'Rewrite the answer with natural discourse markers.',
      answer:
        'Well, I’d say probably, yes, at least for things like novels people read on the train. E-books are cheaper and you can carry hundreds of them on your phone. Mind you, I don’t think printed books will disappear completely. The thing is, a lot of people still love the feel of a real book, and children’s books in particular work much better on paper.',
      reasoning: [
        '“Well, I’d say probably, yes” answers directly but sounds like conversation, not a speech.',
        '“Firstly / Moreover” become a simple sentence with “and”: in speech, ideas can just follow each other.',
        '“Mind you” introduces the contrasting idea naturally.',
        '“The thing is” introduces the deeper reason, which develops the answer instead of concluding it.',
        'The essay-style “In conclusion” is gone; the answer simply ends with its strongest point.',
      ],
    },
    {
      kind: 'trap',
      text: '**Markers without content.** Starting with “That’s a very interesting question, I’ve never really thought about it, but well, to be honest…” and then saying very little is noticed immediately. One marker to start, then get to the point.',
    },
    {
      kind: 'tip',
      text: 'Choose **three new markers** each week and use them deliberately in practice until they come out naturally. Rotating a small set is more convincing than forcing a long list into one answer.',
    },
  ],
  drills: [],
})
