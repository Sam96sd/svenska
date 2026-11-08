import { definePassage } from '../../define'

/** Original text. TFNG drill built around FALSE vs NOT GIVEN pairs. */
export default definePassage({
  id: 'drill-tfng-false-vs-ng',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'TFNG drill: FALSE or NOT GIVEN?',
  topic: 'Community',
  minutes: 7,
  level: 2,
  intro:
    'Several statements come in pairs on the same topic: one is contradicted by the text, the other is simply not covered. Use the three steps: Is the topic there? Does the text agree? Does it contradict?',
  texts: [
    {
      title: 'The repair café',
      paragraphs: [
        {
          text: 'The first repair café in the market town of Hollinbrook opened in a church hall in March 2019. The idea was simple: once a month, residents could bring broken household items and volunteers would try to fix them for free. The organiser, a retired electrician named Graham Pell, had got the idea from an older repair café he had visited in the Netherlands.',
        },
        {
          text: 'Attendance was modest at first. Only fourteen people came to the opening session, most of them carrying lamps or toasters. Within a year, however, the café was attracting around eighty visitors each month, and it moved to the larger community centre on Station Road. Volunteers now include a dressmaker, two bicycle mechanics and a former watchmaker.',
        },
        {
          text: 'Not everything can be saved. Pell estimates that about two thirds of items are repaired successfully; the rest are either too badly damaged or need parts that are no longer manufactured. Smartphones are the most difficult, he says, because many are glued together and cannot be opened without special tools. Clothing, by contrast, is almost always fixable.',
        },
        {
          text: 'Visitors are not charged, but most leave a small donation, which covers the cost of the hall and basic materials such as thread and fuses. The café has never received money from the local council. Pell insists that the social side matters as much as the repairs: people waiting for their items are encouraged to watch and learn, and several regular visitors have since become volunteers themselves.',
        },
        {
          text: 'Similar cafés have now opened in two neighbouring towns, both run by people who first came to Hollinbrook as customers.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'tfng',
      instructions:
        'Do the following statements agree with the information given in the text? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.',
      questions: [
        {
          n: 1,
          statement: 'The Hollinbrook repair café was the first one ever to open.',
          answer: 'FALSE',
          location: {
            ref: 't0p0',
            quote: 'had got the idea from an older repair café he had visited in the Netherlands',
          },
          explanation:
            'Pell got the idea from an older repair café in the Netherlands, so Hollinbrook’s cannot have been the first ever. Note the qualifier trap: the text says “the first repair café in the market town”, which is much narrower than “the first one ever”.',
        },
        {
          n: 2,
          statement: 'Graham Pell used to work in the Netherlands.',
          answer: 'NOT GIVEN',
          location: { ref: 't0p0', quote: 'a retired electrician named Graham Pell' },
          explanation:
            'The text says he was an electrician and that he visited a repair café in the Netherlands, but not where he worked. “Visited” does not tell us he never worked there, so the text neither confirms nor contradicts the statement. Compare Q1, where the same sentence does contradict the claim.',
        },
        {
          n: 3,
          statement: 'Few people attended the café’s first session.',
          answer: 'TRUE',
          location: {
            ref: 't0p1',
            quote: 'Attendance was modest at first. Only fourteen people came',
          },
          explanation:
            '“Few people attended” paraphrases “Attendance was modest” and “Only fourteen people came”. The word “only” shows the writer sees this as a small number.',
        },
        {
          n: 4,
          statement:
            'Most of the café’s volunteers have trained professionally in a skilled trade.',
          answer: 'NOT GIVEN',
          location: {
            ref: 't0p1',
            quote:
              'Volunteers now include a dressmaker, two bicycle mechanics and a former watchmaker',
          },
          explanation:
            '“Include” means these are examples, not the full list. We do not know how many volunteers there are in total, so we cannot say whether “most” of them are skilled professionals.',
        },
        {
          n: 5,
          statement: 'Smartphones are the items that people bring to the café most often.',
          answer: 'NOT GIVEN',
          location: { ref: 't0p2', quote: 'Smartphones are the most difficult' },
          explanation:
            'The topic (smartphones) is mentioned, but the text describes them as the most difficult to fix, not the most common. How often they are brought in is never stated. Do not let the word “most” in both sentences fool you.',
        },
        {
          n: 6,
          statement: 'According to Pell, clothes are harder to mend than smartphones.',
          answer: 'FALSE',
          location: {
            ref: 't0p2',
            quote: 'Clothing, by contrast, is almost always fixable',
          },
          explanation:
            'Pell says smartphones are “the most difficult” and that clothing is “almost always fixable”, so the comparison in the statement is the reverse of what the text says. Compare Q5: here the text gives the information and it disagrees.',
        },
        {
          n: 7,
          statement: 'The local council has given the café some financial support.',
          answer: 'FALSE',
          location: {
            ref: 't0p3',
            quote: 'The café has never received money from the local council',
          },
          explanation:
            '“Never received money” directly contradicts “has given … financial support”. This is a clear FALSE: the text makes a statement that cannot be true at the same time as the question.',
        },
        {
          n: 8,
          statement: 'Some people who first came to have items repaired now help with repairs.',
          answer: 'TRUE',
          location: {
            ref: 't0p3',
            quote: 'several regular visitors have since become volunteers themselves',
          },
          explanation:
            '“Some people who first came to have items repaired” = “regular visitors”; “now help with repairs” = “have since become volunteers”.',
        },
      ],
    },
  ],
})
