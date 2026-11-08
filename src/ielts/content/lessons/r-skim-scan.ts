import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-skim-scan',
  skill: 'reading',
  module: 'both',
  order: 1,
  title: 'Skimming and scanning',
  summary:
    'Read for the big picture in two minutes, then find exact details without reading every word.',
  types: ['skimming', 'scanning'],
  minutes: 8,
  sections: [
    {
      kind: 'text',
      heading: 'Two different kinds of reading',
      paragraphs: [
        'You have about 20 minutes per passage, so you cannot read 900 words slowly and still answer 13 questions. Strong candidates switch between two speeds. **Skimming** means reading quickly for the *general idea*: what the text is about and where each topic is. **Scanning** means searching for *one specific thing*: a name, a date, a number or a key phrase.',
        'Skim once, at the start. Then scan for every question. Careful, slow reading is only for the one or two sentences where the answer actually is.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Skimming vs scanning',
      headers: ['Feature', 'Skimming', 'Scanning'],
      rows: [
        ['Goal', 'Understand the topic and structure', 'Find one piece of information'],
        [
          'What you read',
          'Title, first sentence of each paragraph, a few key words',
          'Nothing in full: your eyes move until they spot the target',
        ],
        ['Time', '1–2 minutes per passage', 'Seconds per question'],
        [
          'Useful for',
          'Headings, matching information, main-idea MCQs',
          'Completion, short answer, matching names and dates, TFNG',
        ],
      ],
    },
    {
      kind: 'steps',
      heading: 'What to read first',
      items: [
        'Read the **title and any subtitle**. They tell you the topic and often the writer’s angle.',
        'Read the **first sentence of each paragraph** (and the last sentence of a long one). Write two or three words in the margin: “history”, “problems”, “future plans”.',
        'Glance at the **questions** to see which types you have and whether they follow the order of the text.',
        'Now answer the questions one by one, **scanning** for each answer in the area your margin notes point to.',
      ],
    },
    {
      kind: 'list',
      heading: 'What to scan for',
      items: [
        '**Names and titles**: capital letters stand out. Scan for the shape of “Thomas Abara” or “Lights Above Wexmoor”.',
        '**Numbers and dates**: digits jump out, but remember numbers written as words (“eleven”, “nearly three decades”).',
        '**Capitalised words**: places, organisations, days and months.',
        '**Paraphrases**: for ordinary words, scan for the *idea*, not the word. “Completed” may appear as “built between 1871 and 1874”.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: scanning for a paraphrase',
      context:
        'It took eleven horses to haul the instrument up the hill in the winter of 1873, and local newspapers reported that crowds of more than 2,000 people lined the route.',
      question:
        'How many horses were used to pull the telescope up the hill? (NO MORE THAN THREE WORDS AND/OR A NUMBER)',
      answer: '11 (eleven)',
      reasoning: [
        'Decide what you are scanning for: a **number** connected with **horses**. “Horses” is a concrete noun and is unlikely to be paraphrased, so scan for the word itself.',
        'Your eyes stop at “eleven horses”. Check the verb: “pull … up the hill” = “haul … up the hill”, so this is the right sentence.',
        'Check the other numbers in the sentence: 1873 is a year and 2,000 is the number of people. Neither answers “how many horses”.',
        'Write “11” or “eleven”: both are accepted, and neither breaks the word limit.',
      ],
    },
    {
      kind: 'trap',
      text: 'Scanning finds the **place**; it does not give you the answer. Once your eyes stop on the key word, slow down and read the whole sentence. The number next to the word you scanned for is often the distractor.',
    },
    {
      kind: 'tip',
      text: 'Before you scan, **predict the answer type**: a year? a price? a person? a job? Knowing the shape you want (four digits, a £ sign, a capital letter) makes your eyes much faster.',
    },
  ],
  drills: ['drill-scan-dates-names'],
})
