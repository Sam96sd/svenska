import { defineLesson } from '../define'

export default defineLesson({
  id: 's-fluency-pauses',
  skill: 'speaking',
  module: 'both',
  order: 3,
  title: 'Pauses, thinking time and missing words',
  summary:
    'Make your pauses sound like thinking about ideas rather than searching for words, buy time naturally, and talk your way round a word you do not know.',
  types: ['part2', 'part3'],
  minutes: 8,
  sections: [
    {
      kind: 'text',
      heading: 'Not all pauses are equal',
      paragraphs: [
        'Fluent speakers pause all the time. The examiner is not counting pauses; they are listening for **why** you pause. At Band 8, hesitation is **usually to plan content**, not to find words. At Band 6, it is often **language-related**: a sentence stops, restarts, or stalls while you look for a word.',
        'You cannot avoid ever forgetting a word. What you can control is how you handle it: with a natural phrase that buys time, or with a paraphrase that keeps the meaning flowing.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Planning pauses and word-search pauses',
      headers: ['', 'Planning pause (fine)', 'Word-search pause (costs marks)'],
      rows: [
        [
          'Where it happens',
          'Before a new idea, or between ideas',
          'In the middle of a phrase, often before a noun',
        ],
        [
          'What it sounds like',
          '“Hmm, let me think… I’d say the main difference is…”',
          '“My city has a very big… um… ah… the, the…”',
        ],
        [
          'What follows',
          'A complete, connected idea',
          'A restart, a repeated word, or a switch to your first language',
        ],
        [
          'Examiner’s impression',
          'You are thinking about the question',
          'Your vocabulary has run out',
        ],
      ],
    },
    {
      kind: 'phrases',
      heading: 'Buying time naturally',
      items: [
        {
          phrase: 'Let me think for a second…',
          use: 'Honest and natural before a hard Part 3 question.',
        },
        {
          phrase: 'That’s an interesting question — I suppose…',
          use: 'Fills the gap while you choose an angle. Use once, not every time.',
        },
        {
          phrase: 'How can I put this…',
          use: 'Signals you are choosing words carefully, not failing to find them.',
        },
        {
          phrase: 'Off the top of my head, …',
          use: 'When you need to answer without much time to think.',
        },
        {
          phrase: 'Do you mean… or…?',
          use: 'Checking a question you only half understood. It is allowed, and it sounds confident.',
        },
        {
          phrase: 'It’s hard to say exactly, but…',
          use: 'Speculating about the future or about statistics you do not know.',
        },
      ],
    },
    {
      kind: 'steps',
      heading: 'When a word is missing: paraphrase',
      items: [
        '**Do not stop.** As soon as you feel the word is not coming, switch to describing it.',
        '**Give the category:** “It’s a kind of…”, “It’s a sort of tool / place / job…”.',
        '**Give the function or purpose:** “…the thing you use to…”, “…the place where…”, “…someone who…”.',
        '**Add a detail if needed:** what it looks like, what it is made of, where you find it.',
        '**Carry on with your answer.** The examiner rewards **effective paraphrase** in Lexical Resource; the missing word itself costs far less than a long silence.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Paraphrasing language',
      items: [
        {
          phrase: 'It’s a kind of… / It’s a sort of…',
          use: 'Naming the category: “It’s a kind of covered market.”',
        },
        {
          phrase: 'the thing you use to…',
          use: 'Describing a tool by its function: “the thing you use to open tins.”',
        },
        {
          phrase: 'the place where… / someone who…',
          use: 'Describing a place or a person by what happens there or what they do.',
        },
        {
          phrase: 'I can’t think of the exact word, but it’s…',
          use: 'Being open about the gap, then explaining. Sounds natural, not weak.',
        },
        {
          phrase: '…or something like that.',
          use: 'Closing an approximate description and moving on.',
        },
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: keeping going',
      context:
        'Part 2: “Describe something you own that is very useful.” The candidate wants to say “a pressure cooker” but cannot remember the word: “I have a… a… how do you say… a pot… um… sorry, I forget.”',
      question: 'How could the candidate keep going fluently?',
      answer:
        'One thing I use almost every day is… I can’t think of the exact name in English, but it’s a kind of heavy cooking pot with a lid that locks shut, so the steam stays inside and the food cooks in about a third of the time. My mother gave it to me when I moved out, and honestly, it’s saved me hours.',
      reasoning: [
        'A short planning phrase (“I can’t think of the exact name in English, but…”) replaces the stalled “a… a… how do you say”.',
        'The category comes first: “a kind of heavy cooking pot”.',
        'The function and a detail follow: “a lid that locks shut, so the steam stays inside”.',
        'The candidate then moves straight on to the story, so the gap is barely noticeable.',
        'The paraphrase itself shows good vocabulary (locks shut, steam, saved me hours).',
      ],
    },
    {
      kind: 'trap',
      text: '**Chains of fillers and restarts.** “Um… er… I think, I think that, um, the… the problem is…” is the pattern that most clearly signals word-searching. One short, silent pause is better than a string of noises. And never ask the examiner for a word (“How do you say…?”) — paraphrase instead.',
    },
    {
      kind: 'tip',
      text: 'Practise with a **word you are not allowed to say**: describe a familiar object for 20 seconds without naming it. This trains exactly the paraphrasing reflex you need when a word disappears in the exam.',
    },
  ],
  drills: [],
})
