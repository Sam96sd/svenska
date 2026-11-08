import { definePassage } from '../../define'

/** Original text. Scanning drill: names, dates, numbers and capitalised words. */
export default definePassage({
  id: 'drill-scan-dates-names',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'Scanning drill: the Ferrand Observatory',
  topic: 'History',
  minutes: 6,
  level: 1,
  intro:
    'Skim the text for 30 seconds to see how it is organised. Then scan for each answer: decide first what kind of word you are looking for (a year, a number, a name, a title) and let your eyes search for that shape.',
  texts: [
    {
      title: 'The Ferrand Observatory',
      paragraphs: [
        {
          text: 'The Ferrand Observatory, which stands on Calder Hill above the town of Wexmoor, was built between 1871 and 1874. It was paid for by Henrietta Ferrand, the widow of a wealthy mill owner, who had taught herself astronomy from borrowed books. She insisted that the building should be open to the public on at least one night a week, an unusual condition at a time when most observatories were reserved for university staff.',
        },
        {
          text: 'The main telescope, a 30-centimetre refractor, was made in Glasgow by the firm of Lindqvist and Hale. It took eleven horses to haul the instrument up the hill in the winter of 1873, and local newspapers reported that crowds of more than 2,000 people lined the route. The telescope is still in working order today.',
        },
        {
          text: 'The observatory’s first director was Thomas Abara, a former ship’s navigator who had learned to observe the stars at sea. During his 26 years in charge, he recorded over 400 meteors and wrote a popular guide to the night sky, Lights Above Wexmoor, which sold more than 9,000 copies. His assistant, Edith Marlow, succeeded him in 1900 and became the first woman to direct a public observatory in the region.',
        },
        {
          text: 'By the 1960s, light from street lamps in the growing town had made serious observation almost impossible. The building closed in 1968 and remained empty for nearly three decades. It was rescued in 1997 by a group of volunteers, who raised £180,000 to repair the dome. Today the observatory welcomes around 12,000 visitors a year, and its Thursday evening sessions, a direct link to Henrietta Ferrand’s original wish, are usually fully booked.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'short-answer',
      instructions:
        'Answer the questions below. Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the text for each answer.',
      wordLimit: { words: 3, number: true },
      body: [
        {
          kind: 'bullets',
          items: [
            'Where did Henrietta Ferrand get her knowledge of astronomy? [[1]]',
            'In which year was the observatory completed? [[2]]',
            'How many horses were used to pull the telescope up the hill? [[3]]',
            'What job did Thomas Abara have before he became director? [[4]]',
            'What was the name of the book Abara wrote? [[5]]',
            'Who took over as director when Abara left? [[6]]',
            'How much money did the volunteers collect for repairs? [[7]]',
            'On which day of the week are the public sessions held now? [[8]]',
          ],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['(from) borrowed books'],
          location: { ref: 't0p0', quote: 'who had taught herself astronomy from borrowed books' },
          explanation:
            'Scan for her name, then for a paraphrase of “get her knowledge”: “taught herself … from borrowed books”. “Books” alone is incomplete; “borrowed books” is the full answer.',
          distractors: ['mill owner'],
        },
        {
          n: 2,
          answers: ['1874'],
          location: { ref: 't0p0', quote: 'was built between 1871 and 1874' },
          explanation:
            '“Completed” means the end of the building work, so the second date is the answer. 1871 is when building started, and 1873 is when the telescope arrived.',
          distractors: ['1871', '1873'],
        },
        {
          n: 3,
          answers: ['11'],
          location: {
            ref: 't0p1',
            quote: 'It took eleven horses to haul the instrument up the hill',
          },
          explanation:
            '“Pull … up the hill” paraphrases “haul … up the hill”. When you scan for a number, remember it may be written as a word (“eleven”). 2,000 is the number of people watching.',
          distractors: ['2,000', '30'],
        },
        {
          n: 4,
          answers: ['(a) (ship’s) navigator'],
          location: { ref: 't0p2', quote: 'a former ship’s navigator' },
          explanation:
            '“Before he became director” is signalled by “former”. Scan for the capitalised name Thomas Abara and read the words right after it.',
          distractors: ['director', 'assistant'],
        },
        {
          n: 5,
          answers: ['Lights Above Wexmoor'],
          location: { ref: 't0p2', quote: 'Lights Above Wexmoor' },
          explanation:
            'Titles are easy to scan for because every main word starts with a capital letter. “A popular guide to the night sky” describes the book but is not its name.',
        },
        {
          n: 6,
          answers: ['(Edith) Marlow'],
          location: { ref: 't0p2', quote: 'His assistant, Edith Marlow, succeeded him in 1900' },
          explanation:
            '“Took over as director when Abara left” paraphrases “succeeded him”. Scan for capitalised names after Abara’s paragraph begins.',
        },
        {
          n: 7,
          answers: ['£180,000', '180,000'],
          location: { ref: 't0p3', quote: 'who raised £180,000 to repair the dome' },
          explanation:
            '“Collect” paraphrases “raised”, and the £ sign tells you this is the amount of money. 12,000 is the number of visitors a year.',
          distractors: ['12,000'],
        },
        {
          n: 8,
          answers: ['Thursday', 'Thursdays', 'Thursday evening', 'Thursday evenings'],
          location: { ref: 't0p3', quote: 'its Thursday evening sessions' },
          explanation:
            'Days of the week always have capital letters, so they stand out when you scan. “Now” matches “Today” at the start of the sentence.',
        },
      ],
    },
  ],
})
