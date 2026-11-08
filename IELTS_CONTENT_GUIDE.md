# IELTS content guide

All IELTS content lives in `src/ielts/content/` as typed TypeScript data — no React code needed.
Every file is validated by Zod **and** by review checks in code (`validate.ts`): answer keys are
checked against the text, word limits are enforced, British spelling is checked, and listening
answers must come in recording order. CI runs these before every deploy, so broken content never
goes live.

```
src/ielts/content/
  reading/academic/   Academic passages             definePassage()
  reading/general/    General Training sections 1–3 definePassage()
  reading/drills/     short drill texts             definePassage({ section: 'drill', use: 'drill' })
  listening/          Parts 1–4                     defineListening()
  listening/drills/   short drill recordings        defineListening({ use: 'drill' })
  writing/            Task 1 and Task 2             defineWritingTask()
  speaking/           Part 1 topics, cue cards      definePart1(), defineCueCard()
  lessons/            strategy lessons              defineLesson()
  catalog.generated.json   ← generated, don't edit
```

**Workflow**

1. Copy a template below into a new file. The file name must equal the `id` (kebab-case).
2. Write the content (original only, see rules).
3. Run `npx vitest run src/ielts/content/content.test.ts` and fix every problem it lists.
4. Run `npm run catalog` to add the new item to the lists in the app.
5. Do the review pass (bottom of this guide) before committing.

## Golden rules

- **Original content only.** Never copy or closely paraphrase Cambridge IELTS books, official
  practice tests or other published test material. Invent your own texts, scripts, people,
  places and data.
- **Real exam difficulty and style.** Academic passages 750–950 words; GT Section 3 650–850;
  lexis and syntax at the level of a quality newspaper or popular-science magazine.
- **British English** everywhere (colour, centre, organise, programme, travelled…). A speaker with
  an American or Canadian accent may _say_ American words, but questions stay British.
- **Every question** has an answer key, an exact `location.quote` copied from the text or script,
  and an `explanation` of why the answer is right and, where useful, why distractors are wrong
  (use `traps` for options and `distractors` for typed answers).
- **No invented statistics** presented as real facts in model essays. Data in Task 1 charts and in
  reading passages is fictional but plausible.

## Reading passage

```ts
import { definePassage } from '../../define'

export default definePassage({
  id: 'ac-urban-beekeeping', // = file name
  skill: 'reading',
  module: 'academic', // 'academic' | 'general' | 'both' (drills)
  section: 'academic', // 'academic' | 'gt1' | 'gt2' | 'gt3' | 'drill'
  use: 'practice', // 'practice' | 'drill' | 'mock' | 'diagnostic'
  title: 'The rise of urban beekeeping',
  topic: 'Environment',
  minutes: 20, // suggested time
  level: 2, // 1 = like Passage 1 … 3 = like Passage 3
  texts: [
    {
      title: 'The rise of urban beekeeping',
      paragraphs: [
        { label: 'A', text: '…' }, // letter paragraphs when using headings / match-info
        { label: 'B', text: '…' },
      ],
    },
  ],
  groups: [/* question groups, numbered 1, 2, 3 … with no gaps */],
})
```

- `location.ref` is the paragraph label (`'B'`) or, for unlabelled paragraphs, `t{text}p{para}`
  counting from 0 (`'t1p2'` = third paragraph of the second text).
- **Academic**: one text, 7–9 lettered paragraphs, 13–14 questions in 2–3 groups of different
  types. **GT Section 1**: 2–3 short everyday texts (notices, adverts, timetables), 13–14 questions.
  **GT Section 2**: 2 workplace texts (job ads, policies, training material), 13 questions.
  **GT Section 3**: one long general-interest text, 13 questions.
- The questions in a group follow the order of the text (except headings, matching information,
  matching features and summary-with-word-bank, which may jump around, as in the real test).
- If a passage quotes invented researchers or studies, say so in `intro` (e.g. “Original practice
  passage: the researchers described are fictional.”). Never attach invented claims to real,
  named people.

### Question groups

| `type`           | Use for                                                                           | Key fields                                                                                          |
| ---------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `tfng` / `ynng`  | True/False/Not Given, Yes/No/Not Given                                            | `statement`, `answer`                                                                               |
| `headings`       | Matching headings                                                                 | `headings[]` (more than paragraphs, keys `i`, `ii`…), questions `para`, `answer`, `traps`           |
| `match-info`     | Which paragraph contains…                                                         | `options` = paragraph letters, `reuse`                                                              |
| `match-features` | Match statements to people/dates/places                                           | `options`, `optionsTitle`, `reuse`                                                                  |
| `match-endings`  | Sentence endings                                                                  | `options` = endings, questions `prompt` = beginning                                                 |
| `map`            | Map/plan labelling (listening)                                                    | `diagram` with `marker` items, `options` = marker letters                                           |
| `mcq`            | One answer from A–D                                                               | `options`, `answer`, `traps` (why each wrong option tempts)                                         |
| `mcq-multi`      | Choose TWO                                                                        | `n`, `n2` (= n + 1), `answers` (two keys)                                                           |
| `completion`     | Sentence, summary, note, table, flow-chart, form, short answer, diagram labelling | `format`, `wordLimit` or `wordBank`, `body` with `[[n]]` gaps, questions `answers[]`, `distractors` |

Completion `body` blocks: `{ kind: 'text' | 'heading', text }`, `{ kind: 'bullets', items }`,
`{ kind: 'table', header, rows }`, `{ kind: 'flow', steps }`, `{ kind: 'diagram', diagram }`.
Every `[[n]]` gap needs a question with the same `n`, and vice versa.

Word limits (numbers written as words, like “five”, count as a number, not as words): `{ words: 2, number: true }` = “NO MORE THAN TWO WORDS AND/OR A NUMBER”;
`{ words: 1 }` = “ONE WORD ONLY”; `{ words: 0, number: true }` = “A NUMBER”. Every accepted answer
must fit the limit (the validator checks). Answers must be words **copied from the text** (reading)
or heard (listening), spelled exactly. List alternatives in `answers`: `['6', 'six']` is not needed
(digits and number words are equivalent), but `['Tuesday', 'Tuesdays']` is. Optional words go in
brackets: `'(the) library'`.

### TRUE/FALSE/NOT GIVEN must be defensible

- **TRUE**: the text says the same thing in other words. Quote the sentence that proves it.
- **FALSE**: the text says the opposite, or something that cannot be true at the same time.
  Quote the contradiction.
- **NOT GIVEN**: the topic is mentioned but the specific claim is neither confirmed nor
  contradicted. Quote the nearest relevant sentence and explain what is missing.
- Avoid statements that need outside knowledge or arithmetic. Test qualifiers (all/some/always/
  may/only/first) and comparisons — they make the best FALSE vs NOT GIVEN contrasts.
- Aim for a mix: never all one answer, and at least one of each in a group of 5+.

## Listening part

```ts
import { defineListening } from '../define'

export default defineListening({
  id: 'l2-museum-tour',
  skill: 'listening',
  part: 2, // 1 everyday dialogue · 2 everyday monologue · 3 academic discussion · 4 lecture
  use: 'practice',
  title: 'A guided tour of the river museum',
  topic: 'Tourism',
  context:
    'You will hear a guide talking to a group of visitors… First, you have some time to look at questions 11 to 20.',
  speakers: [{ id: 'guide', name: 'Mark', role: 'Museum guide', gender: 'm', accent: 'en-NZ' }],
  lines: [{ id: 'l1', speaker: 'guide', text: '…' }],
  groups: [/* numbered 1–10 inside the part, like a single part on its own */],
})
```

- Number questions **1–10** within the part (mock tests renumber them).
- Script lines are read by device voices: keep each line **under ~40 words**; write numbers the
  way people say them (“thirty-eight pounds”, “oh seven seven…”), spell names as `W, H, I, T…`.
- Build in the real traps: **corrections** (“Tuesday — oh, no, sorry, Thursday”), **distractors**
  (two prices, the rejected option), **paraphrase** between question and audio, **signposting**
  (“Moving on to…”, “The second point is…”). Add wrong-but-heard answers to `distractors`.
- Answers must come **in the order of the recording** (the validator checks line order).
- Accents: mix `en-GB`, `en-AU`, `en-US`, `en-CA`, `en-NZ` across parts; give speakers in one
  part different genders or accents so the voices differ.
- Typical shapes: Part 1 form/note completion (10); Part 2 MCQ + map or matching; Part 3 MCQ,
  choose-two and matching between 2–3 speakers; Part 4 note completion (10) for a lecture.

## Writing task

```ts
import { defineWritingTask } from '../define'

export default defineWritingTask({
  id: 't2-public-transport',
  skill: 'writing',
  use: 'practice',
  module: 'both',        // Task 2: 'both' (or 'general' for everyday GT topics); Task 1: 'academic' | 'general'
  task: 2,
  type: 'discussion',    // T2: opinion | discussion | adv-disadv | problem-solution | two-part
                         // T1 Academic: line | bar | pie | table | mixed | map | process
                         // T1 General: complaint | request | apology | invitation | thanks | explanation
  topic: 'Transport',
  title: 'Free public transport',
  prompt: '…the task exactly as printed, ending with “Write at least 250 words.”',
  bullets: [/* GT letters: exactly 3 */],
  tone: 'formal',        // GT letters: formal | semi-formal | informal
  chart: { /* Academic Task 1 only */ },
  planHints: ['…', '…'],
  models: [
    { band: 6, text: '…', annotations: [{ quote: '…exact words…', note: '…' }] },
    { band: 7, text: '…', annotations: [ … ] },
    { band: 8.5, text: '…', annotations: [ … ] },
  ],
})
```

- Three model answers to **the same task**, Band 6, 7 and 8.5 (shown as “8–9”), each over the
  minimum (Task 1: 150 words, aim 160–200; Task 2: 250, aim 260–310). Band 6 shows realistic
  Band 6 problems (mechanical linking, under-developed ideas, some errors); Band 7 is clear and
  accurate but less developed; Band 8.5 shows the Band 8 method (clear position, one idea per
  paragraph fully developed, precise vocabulary, natural cohesion). Never use the same text twice.
- 3–5 `annotations` per model, each quoting the model’s exact words and saying what lifts or
  limits the band.
- Charts (Academic Task 1), all fictional data:
  - `{ kind: 'line', title, xLabels, yLabel, unit, series: [{ name, values }] }`
  - `{ kind: 'bar', title, categories, yLabel, unit, series }`
  - `{ kind: 'pie', title, pies: [{ label, slices: [{ name, value }] }] }` (values in %)
  - `{ kind: 'table', title, columns, rows: [{ label, values }], unit }` (the first column is the row label)
  - `{ kind: 'map', title, maps: [{ label: '1990', diagram }] }`
  - `{ kind: 'process', title, steps: [{ label, detail? }], cycle }`
  - `{ kind: 'mixed', title, charts: [two of the above] }`
- Academic Task 1 model answers: an overview paragraph with no numbers, grouped comparisons,
  accurate data matching the chart, and no opinions.
- GT letters: purpose in the first paragraph, one paragraph per bullet, matching opening/closing
  (Dear Sir or Madam … Yours faithfully; Dear Mr Patel … Yours sincerely; Hi Sam … Best wishes),
  and no addresses.

## Speaking

```ts
import { defineCueCard } from '../define'

export default defineCueCard({
  id: 'cue-memorable-journey',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A memorable journey',
  theme: 'Travel',
  prompt: 'Describe a journey you remember well.',
  points: ['where you went', 'how you travelled', 'who you were with'],
  explain: 'and explain why you remember this journey so well.',
  followUp: 'Do you often travel like this?',
  part3: [
    'Why do people enjoy travelling to new places?',
    '…4–8 questions, more abstract, linked to the card…',
  ],
})
```

Part 1 topics use `definePart1({ id: 'p1-music', skill: 'speaking', kind: 'part1', topic: 'Music', questions: [3–6 questions] })`.

## Strategy lesson

```ts
import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-tfng',
  skill: 'reading',
  module: 'both',
  order: 10,
  title: 'True, False or Not Given',
  summary: 'A 3-step decision tree that separates FALSE from NOT GIVEN.',
  types: ['tfng'],
  minutes: 8,
  sections: [
    {
      kind: 'text',
      heading: 'What the examiner is testing',
      paragraphs: ['…**bold** and *italic* allowed…'],
    },
    { kind: 'steps', heading: 'The 3-step decision tree', items: ['…', '…', '…'] },
    {
      kind: 'example',
      heading: 'Worked example',
      context: '…extract…',
      question: '…',
      answer: 'NOT GIVEN',
      reasoning: ['…', '…'],
    },
    {
      kind: 'compare',
      heading: 'FALSE vs NOT GIVEN',
      headers: ['FALSE', 'NOT GIVEN'],
      rows: [['…', '…']],
    },
    { kind: 'trap', text: '…' },
    { kind: 'tip', text: '…' },
    { kind: 'phrases', heading: '…', items: [{ phrase: '…', use: '…' }] },
  ],
  drills: ['drill-tfng-qualifiers'], // ids of drill passages/listening parts with use: 'drill'
})
```

Drills are short: a 200–400-word text (or a 1–2-minute script) with 5–8 questions of the lesson’s
type. Reading drills use `section: 'drill'`, `use: 'drill'` and usually `module: 'both'`.

## Vocabulary deck (language bank)

Decks become spaced-repetition flashcards (same engine as the Swedish course).

```ts
import { defineVocabDeck } from '../define'

export default defineVocabDeck({
  id: 'vb-environment',
  kind: 'topic',            // topic | collocations | hedging | linking | structures | academic-words
  title: 'Environment',
  topic: 'Environment',
  description: 'Precise words and collocations for Task 2 essays and Part 3 answers on the environment.',
  skills: ['writing', 'speaking'],
  cards: [
    {
      id: 'mitigate',
      term: 'mitigate (the effects of)',
      meaning: 'to make something harmful less severe',
      example: 'Planting trees along busy roads can mitigate the effects of traffic pollution.',
      pos: 'verb',
      note: 'More formal than “reduce”. Not “mitigate against”.',
    },
  ],
})
```

- 20–40 cards per deck, Band 7–8 level: precise, natural, not obscure. No translations.
- Every `example` is a natural sentence on an IELTS-type topic that uses the term.
- Structures decks: `term` is the pattern (“Were governments to…, …”), `example` a full sentence.

## Pronunciation set

```ts
import { definePronSet } from '../define'

export default definePronSet({
  id: 'pr-minimal-p-b',
  focus: 'minimal-pairs',   // word-stress | sentence-stress | connected-speech | endings | minimal-pairs | clusters
  title: '/p/ and /b/',
  intro: ['Arabic has no /p/ sound, so …'],
  quiz: 'which-word',       // stress | which-word | ending | listen-repeat
  items: [
    { text: 'pin / bin', options: ['pin', 'bin'], answer: 'bin', note: '/b/ is voiced: your throat vibrates.' },
  ],
})
```

- `stress`: `text` is the word, `options` its syllables in order (they must spell the word), `answer`
  the stressed syllable.
- `which-word`: the app speaks `answer` (or `say`); the learner picks from `options`.
- `ending`: `options` are `/t/`, `/d/`, `/ɪd/` (or `/s/`, `/z/`, `/ɪz/`); `answer` the right one.
- `listen-repeat`: the app reads `text` (or `say`), the learner records themselves and compares.
  Mark chunks with `|` and stressed words in CAPITALS in `note`, not in `text`.

## Mock tests

Mock content is ordinary content with `use: 'mock'`, so it never appears in Practice. The ids are
listed in `src/ielts/content/mocks.ts`; the mock runner renumbers questions 1–40 per section.
Mock listening parts are numbered 1–10 in their own files like any part.

## Review pass (do this before committing)

1. Read every question against the text yourself: is the key the **only** defensible answer?
2. TRUE/FALSE/NOT GIVEN: apply the three definitions above to each one.
3. Word limits: would a careful student’s natural answer fit? Is every accepted form listed?
4. Distractors: are the traps real but fair (the right answer is clearly stated)?
5. British spelling, punctuation and the passage length.
6. `npx vitest run src/ielts/content` passes, then `npm run catalog`.

## Free official resources

The app’s Resources page links to official free practice (ielts.org, British Council “Take
IELTS”, IDP IELTS, IELTS Ready). Link to them; never copy their content into this repo.
