import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-headings',
  skill: 'reading',
  module: 'both',
  order: 12,
  title: 'Matching headings',
  summary:
    'Find each paragraph’s controlling idea first, then eliminate headings that only match a detail or borrow its words.',
  types: ['headings'],
  minutes: 9,
  sections: [
    {
      kind: 'text',
      heading: 'What a heading must do',
      paragraphs: [
        'A correct heading summarises the **whole paragraph**: its **controlling idea**, the point that every sentence supports. A heading that fits one sentence, or one example, is almost always a trap.',
        'The controlling idea is often in the first sentence, but not always. Watch for paragraphs that open with background and then turn with **Yet**, **However** or **But**: the main point usually comes after the turn.',
      ],
    },
    {
      kind: 'steps',
      heading: 'The method',
      items: [
        '**Read the paragraph first**, not the headings. Reading the list first makes you see what you expect instead of what is there.',
        'Ask: **what is this paragraph mainly about, and why did the writer include it?** Write your own heading in three to five words.',
        'Now read the list and choose the heading closest to **your summary**. Check it against every sentence, not just the first.',
        'Cross out each heading as you use it, and leave hard paragraphs until last, when there are fewer options.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: the turn in the paragraph',
      context:
        'Fresh produce grown a few metres from the restaurants that buy it can be sold at a high price. Yet very few rooftop farms survive on vegetable sales alone. Most of the successful ones earn a large part of their income in other ways: running workshops, hosting private events, or charging building owners a fee for looking after their roofs.',
      question:
        'Choose a heading: (v) Restaurants on the roof · (vi) Why selling vegetables is rarely enough · (x) The high prices of rooftop produce',
      answer: 'vi',
      reasoning: [
        'Own summary first: “Farms need income besides vegetables.” The first sentence is background; “Yet” turns to the main point.',
        '(x) matches only the first sentence. Nothing after “Yet” is about prices, so it is a **detail trap**.',
        '(v) reuses “restaurants” and “roofs”, but the restaurants *buy* the produce; nothing says restaurants are on roofs. This is a **word-reuse trap**.',
        '(vi) covers every sentence: vegetable sales are not enough (sentence 2), and here are the other sources of income (sentence 3).',
      ],
    },
    {
      kind: 'compare',
      heading: 'Right heading vs the two classic traps',
      headers: ['Feature', 'Right heading', 'Detail trap', 'Word-reuse trap'],
      rows: [
        [
          'Covers…',
          'the whole paragraph',
          'one sentence or example',
          'nothing: it only shares words',
        ],
        [
          'Wording',
          'usually a paraphrase',
          'often a paraphrase of a minor point',
          'repeats nouns from the text',
        ],
        [
          'Check',
          'every sentence supports it',
          'remove that sentence: does the paragraph still make sense? If yes, it was a detail',
          'read the heading’s meaning, not its words',
        ],
      ],
    },
    {
      kind: 'trap',
      text: 'The **detail trap**: a paragraph about rooftop growing conditions ends “Bees kept in hives on some roofs also seem to thrive.” A heading about keeping bees fits that sentence perfectly, but not the paragraph. Examples, final remarks and numbers are where detail traps hide.',
    },
    {
      kind: 'tip',
      text: 'Headings often signal **function** as well as topic: “Why…” means causes or reasons, “The problem of…” means difficulties, “A solution…” means a response. Check that the paragraph does what the heading promises, not just that it shares the subject.',
    },
  ],
  drills: ['drill-headings'],
})
