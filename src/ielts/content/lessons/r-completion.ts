import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-completion',
  skill: 'reading',
  module: 'both',
  order: 17,
  title: 'Sentence, summary, note, table and flow-chart completion',
  summary:
    'Predict the word class, obey the word limit, copy the spelling exactly and check the grammar of the finished sentence.',
  types: [
    'completion-sentence',
    'completion-summary',
    'completion-note',
    'completion-table',
    'completion-flowchart',
  ],
  minutes: 11,
  sections: [
    {
      kind: 'text',
      heading: 'One skill, five layouts',
      paragraphs: [
        'Sentences, summaries, notes, tables and flow-charts all test the same skill: **locate the right sentence and copy the right word(s)**. Only the layout changes.',
        'There are two versions. In most tasks you **copy words from the text** within a **word limit**. In summary completion with a **word bank**, you choose letters from a box — and the words in the box are often **synonyms** of the passage, not the passage’s own words.',
      ],
    },
    {
      kind: 'steps',
      heading: 'The method',
      items: [
        'Read the instructions and circle the **word limit** (*ONE WORD ONLY*, *NO MORE THAN TWO WORDS AND/OR A NUMBER*) and where the answers come from (the text or a box).',
        'For each gap, **predict the word class** from the words around it: noun (singular or plural?), verb (which form?), adjective, number or name.',
        'Use the title, headings and the words around the gap to locate the right sentence. Scan for **paraphrases**, not the same words.',
        '**Copy** the word(s) exactly as they appear in the text — same spelling, same singular or plural. Never change the form to fit.',
        'Read the completed sentence: Is it grammatical? Does it match the text? Is it within the limit?',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Grammar clues around a gap',
      items: [
        { phrase: 'a / an ___', use: 'a singular countable noun (an → begins with a vowel sound)' },
        { phrase: 'many / several / a number of ___', use: 'a plural noun' },
        { phrase: 'to ___ / can ___', use: 'the base form of a verb' },
        { phrase: 'is very ___ / more ___ than', use: 'an adjective' },
        { phrase: 'the ___ of', use: 'a noun, often an abstract one (the cost of, the size of)' },
        { phrase: 'in ___ / £___', use: 'a number: a year, an amount' },
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example',
      context:
        'The museum’s oldest exhibit, a wooden canoe, was discovered by two farmers in 1931 while they were draining a field. It is thought to be about 3,000 years old.',
      question:
        'Complete the sentence. NO MORE THAN TWO WORDS AND/OR A NUMBER. The canoe was found when farmers were removing water from a ______.',
      answer: 'field',
      reasoning: [
        '**Predict**: after “a” you need a singular noun — a place you can remove water from.',
        '**Locate**: “removing water from” paraphrases “draining”, which takes you to the first sentence.',
        '**Choose**: “field” fits. “1931” is a number, not a noun after “a”; “wooden canoe” is the object found, not the place.',
        '**Check**: write “field”, not “a field” (the gap already has *a*) and not “fields” (the text says *a field*). One word, within the limit.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Summary from the text vs summary with a word bank',
      headers: ['', 'Words from the text', 'Word bank'],
      rows: [
        [
          'Where answers come from',
          'copied exactly from the passage',
          'letters from a box; often synonyms of the passage',
        ],
        ['Word limit', 'strict: one extra word makes it wrong', 'none: write the letter only'],
        ['Order', 'usually follows the text', 'mostly follows the text but may jump'],
        [
          'Main skill',
          'locating and copying accurately',
          'paraphrase plus grammar: several words fit each gap',
        ],
        [
          'Typical trap',
          'changing the form (*sold* for *sell*)',
          'a box word that fits the grammar but means the opposite',
        ],
      ],
    },
    {
      kind: 'trap',
      text: '**Breaking the word limit** with a perfect meaning still scores zero. Articles count as words, a hyphenated word counts as one, and a number written in digits counts as a number. If the limit is two words, “the old harbour” is wrong even though it is the right place.',
    },
    {
      kind: 'tip',
      text: 'With **tables**, read the column and row headings first: they tell you the type of answer for every gap in that column. With **flow-charts**, the steps follow a process, so scan for sequence signals — *first*, *then*, *once*, *after*, *finally*.',
    },
  ],
  drills: ['drill-summary-word-bank', 'drill-table-flowchart'],
})
