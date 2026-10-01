# Content guide

All course content lives in `src/content/units/`. Components never contain lesson text, so you can
add or fix lessons without touching any React code. Every file is type-checked, and
`src/content/content.test.ts` validates all content against the Zod schemas in
`src/content/schema.ts`. If `npm test` passes, your content is structurally valid.

```
src/content/units/
  unit-01/
    meta.ts        ← the unit's table of contents (title, lessons, goals)
    index.ts       ← boilerplate that collects the lesson files (copy as-is)
    lesson-01.ts   ← one file per lesson
    lesson-02.ts
```

`CURRICULUM.md` lists which words each lesson introduces.

## Add a lesson

1. Add an entry to the unit's `meta.ts`:
   ```ts
   { id: 'u04-l06', title: 'At the flea market', titleSv: 'På loppis', goal: 'Ask what things cost.' },
   ```
   `kind` is optional: `'lesson'` (default), `'sounds'`, `'culture'` or `'review'`.
2. Copy `templates/lesson.template.ts` to `src/content/units/unit-04/lesson-06.ts` and fill it in.
   The `id` must match the one in `meta.ts`.
3. Run `npm test`. Fix anything it reports, then `npm run dev` and play the lesson.

## Add a unit

1. Create `src/content/units/unit-12/` with a `meta.ts` (copy another unit's and change it; the folder
   name must equal the unit `id`, and `number` must be the next number).
2. Copy `index.ts` from any other unit unchanged.
3. Add lesson files as above. The unit appears on the home screen automatically and is lazy-loaded as
   its own JavaScript chunk.

## Anatomy of a lesson

```ts
export default defineLesson({
  id: 'u02-l02',
  learn: [/* 1–3 short "Learn" cards */],
  vocab: [/* 8–12 new words */],
  dialogue: {/* optional short conversation */},
  exercises: [/* 6–10 hand-written exercises */],
  generate: 4, // optional: how many vocabulary exercises to auto-generate
  culture: {/* optional culture note shown after the Learn cards */},
})
```

### Learn cards (`learn`)

Friendly, plain English. One idea per card. Use examples rather than terminology.

```ts
{
  title: 'Two words for "a"',
  text: 'Every noun is either an **en**-word or an **ett**-word: [[en bil]], [[ett hus]].',
  examples: [{ sv: 'en bil', en: 'a car' }],
  table: { headers: ['en-words', 'ett-words'], rows: [['en bil', 'ett hus']], svColumns: [0, 1] },
  tip: 'Learn every noun together with en or ett.',
}
```

In `text` and `tip`: `**bold**`, `*italic*`, blank line = new paragraph, and `[[Swedish]]` makes
a tappable phrase that plays audio. `svColumns` marks the table columns that contain Swedish, so they
get audio buttons.

### Vocabulary (`vocab`)

```ts
{ id: 'kopp', sv: 'kopp', en: 'cup', pos: 'noun', gender: 'en',
  forms: { definite: 'koppen', plural: 'koppar', pluralDefinite: 'kopparna' } }
{ id: 'prata', sv: 'prata', en: 'to speak / talk', pos: 'verb',
  forms: { present: 'pratar', past: 'pratade', supine: 'pratat', imperative: 'prata' } }
{ id: 'stor', sv: 'stor', en: 'big', pos: 'adjective', forms: { neuter: 'stort', plural: 'stora' } }
```

- `id`: unique across the **whole course**, lowercase ASCII with dashes (å/ä → a, ö → o). Use
  a suffix when two words collide: `var-where`, `var-our`.
- `sv`: the headword **without** the article; verbs in the infinitive without "att".
- Nouns must have `gender`. Give `forms` for nouns, verbs and adjectives where they are regular
  enough to be useful.
- `pron` (optional): an English-friendly hint, e.g. `'hwoo'`. Add these mainly in Units 1–3, and
  for words whose spelling misleads.
- `en`: the meaning learners will see. `enAlt` / `alt` add accepted alternatives for typing.
- Keep it to **8–12 new words** per lesson.

### Dialogue (`dialogue`)

Four to eight short lines between named people. Every line needs `sv` and `en`. Use mostly known
words; a few new ones are fine because translations are shown.

### Exercises (`exercises`)

Hand-written exercises come first and matter most. The app adds generated vocabulary practice
(match pairs, meaning, listening, typing) until a lesson has about 12. Use `generate` to set the
exact number. Every exercise can have an `explanation` (shown after answering) and `vocab`
(ids of the words it practises, used for the weak-words list).

| type            | What the learner does                 | Key fields                                                                      |
| --------------- | ------------------------------------- | ------------------------------------------------------------------------------- |
| `mcq`           | Pick the answer to a prompt           | `prompt`, `promptLang`, `choices`, `answer`, `question?`                        |
| `listen`        | Hear Swedish, pick the meaning        | `audio`, `choices`, `answer`                                                    |
| `type`          | Type the answer (å ä ö keys provided) | `prompt`, `promptLang`, `answer`, `answerLang`, `accept?`, `strict?`, `reject?` |
| `dictation`     | Hear a sentence, type it              | `audio`, `en?`                                                                  |
| `build`         | Put word tiles in order               | `prompt` (English), `answer` (Swedish), `distractors?`                          |
| `match`         | Match 3–6 Swedish/English pairs       | `pairs`                                                                         |
| `gap`           | Choose the word for the `___`         | `text`, `choices`, `answer`, `en?`                                              |
| `minimalPair`   | Hear one of two similar words         | `options`, `answer`, `focus?`                                                   |
| `speak`         | Say a sentence (Chrome/Edge/Android)  | `text`, `en`                                                                    |
| `dialogueReply` | Pick the right reply                  | `lines`, `choices`, `answer`                                                    |

Tips:

- `choices` must contain `answer` exactly, with no duplicates.
- Typed answers ignore case and punctuation, and forgive small typos. Use `strict: true` when the
  exercise tests an ending (stor/stort), and `reject` for specific wrong forms.
- `build` answers are split on spaces, and the final `.`, `!` or `?` is dropped from the tiles.
  Distractor tiles must not be words of the answer.
- `minimalPair` options must be spelled differently (the device's voice reads the text).
- Aim for a mix: listening, reading, writing, and at least one sentence-level exercise
  (`build`, `gap`, `dialogueReply` or `dictation`).

## Swedish quality checklist

Run through this before committing any content:

- Natural, modern standard Swedish (rikssvenska), the way a friendly Stockholm teacher would speak.
  Prefer everyday words: _jättebra_, _tjej_, _kul_ are fine; avoid stiff or old-fashioned phrasing.
- Correct gender (en/ett) and forms. Double-check plurals and verb conjugations.
- V2 word order in main clauses (_Idag dricker jag kaffe_), _inte_ after the verb.
- Spelling: å, ä, ö everywhere they belong. Days and months are lowercase. Nationalities and
  languages are lowercase (_svensk_, _svenska_); country names are capitalised (_Sverige_).
- Punctuation: Swedish uses the same marks as English. Quotation marks in English text are fine.
- English translations are natural English, not word-for-word glosses (except in grammar examples
  where the literal version helps).
