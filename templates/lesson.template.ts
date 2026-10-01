// Copy this file to src/content/units/unit-XX/lesson-YY.ts and fill it in.
// The id must match the lesson entry in that unit's meta.ts. See CONTENT_GUIDE.md.
import { defineLesson } from '../../define'

export default defineLesson({
  id: 'uXX-lYY',
  learn: [
    {
      title: 'The main idea',
      text: 'Explain one idea in plain English. Tap-to-hear Swedish goes in double brackets: [[Hej!]]',
      examples: [{ sv: 'Hej!', en: 'Hi!' }],
      tip: 'An optional tip.',
    },
  ],
  vocab: [
    {
      id: 'unique-id',
      sv: 'ord',
      en: 'word',
      pos: 'noun',
      gender: 'ett',
      forms: { definite: 'ordet', plural: 'ord', pluralDefinite: 'orden' },
    },
  ],
  dialogue: {
    title: 'A short conversation',
    lines: [
      { speaker: 'Anna', sv: 'Hej!', en: 'Hi!' },
      { speaker: 'Erik', sv: 'Hej, Anna!', en: 'Hi, Anna!' },
    ],
  },
  exercises: [
    {
      type: 'mcq',
      prompt: 'ord',
      promptLang: 'sv',
      choices: ['word', 'house', 'car'],
      answer: 'word',
    },
    {
      type: 'build',
      prompt: 'Hi, Anna!',
      answer: 'Hej, Anna!',
    },
  ],
})
