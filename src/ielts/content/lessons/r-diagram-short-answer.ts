import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-diagram-short-answer',
  skill: 'reading',
  module: 'both',
  order: 18,
  title: 'Diagram labelling and short-answer questions',
  summary:
    'Follow the description in the text step by step to label a diagram, and let the wh- word tell you what kind of short answer to write.',
  types: ['completion-diagram', 'completion-short-answer'],
  minutes: 9,
  sections: [
    {
      kind: 'text',
      heading: 'What the examiner is testing',
      paragraphs: [
        '**Diagram labelling** shows a drawing of a machine, building, plant or natural process with numbered boxes. One or two paragraphs describe the object, usually in a clear direction: top to bottom, outside to inside, or following the flow of water or air.',
        '**Short-answer questions** ask a direct question that you answer with words copied from the text, within a word limit. Both types follow **text order**.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Labelling a diagram',
      items: [
        'Study the diagram first. What is it? Read the labels that are already given — they are signposts you can scan for in the text.',
        'Find the paragraph that describes the object; the given labels usually appear in it.',
        'Follow the description **in order** and trace it on the diagram with your finger or the cursor.',
        'Expect **nouns**: parts, materials and substances. Copy them exactly, within the word limit.',
        'Use the position words in the text — *above*, *beneath*, *at the lower edge*, *alongside*, *attached to* — to decide which box is which.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example',
      context:
        'Rainwater falls onto the sloping roof and runs into a gutter fixed along its lower edge. From the gutter, a downpipe carries the water to a filter, which removes leaves before the water enters an underground tank.',
      question:
        'Label the diagram. ONE WORD ONLY. Box 2 sits between the downpipe (labelled) and the tank (labelled).',
      answer: 'filter',
      reasoning: [
        'The text follows the water: roof → gutter → downpipe → **?** → tank. Box 2 comes after the downpipe, so the answer is in the words just after “downpipe”.',
        '“a downpipe carries the water to a filter” — the next part is the **filter**, a noun naming a part.',
        'Not “leaves”: they are what the filter removes, not the part itself. Not “a filter”: with ONE WORD ONLY, the article breaks the limit.',
        'Check against the picture: the filter is between the pipe and the underground tank. Answer: **filter**.',
      ],
    },
    {
      kind: 'compare',
      heading: 'The question word tells you the answer type',
      headers: ['Question word', 'Answer type', 'Example answer'],
      rows: [
        ['What / Which', 'a thing, object or idea (noun)', 'a filter'],
        ['Who', 'a person, group or job', 'local farmers'],
        ['Where', 'a place or part', 'the roof'],
        ['When / In which year', 'a time, date or period', 'the 1890s'],
        ['How many / How much', 'a number or amount', '40 litres'],
        ['What kind of', 'adjective + noun', 'wooden boxes'],
      ],
    },
    {
      kind: 'trap',
      text: 'Labelling from **general knowledge**. If you “know” the part is called a *reservoir* but the text says *tank*, write *tank*. The answer must be copied from the passage, and a correct synonym is still marked wrong.',
    },
    {
      kind: 'tip',
      text: 'For short answers, write the **shortest complete answer**. With NO MORE THAN THREE WORDS, “salt” is safer than “the salt that builds up”: extra words can break the limit or add something the text does not say.',
    },
  ],
  drills: ['drill-diagram-label'],
})
