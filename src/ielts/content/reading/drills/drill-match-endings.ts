import { definePassage } from '../../define'

/** Original text. Drill for lesson r-match-endings. */
export default definePassage({
  id: 'drill-match-endings',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'The psychology of queuing',
  topic: 'Psychology',
  minutes: 6,
  level: 2,
  texts: [
    {
      title: 'Why waiting feels so long',
      paragraphs: [
        {
          text: 'Few people enjoy waiting in a queue, but research suggests that how long we wait matters less than how the wait feels. Psychologists who study queues have found that people consistently overestimate the time they spend standing still, often by a third or more.',
        },
        {
          text: 'One reason is that unoccupied time seems to pass slowly. When a hotel received complaints about its slow lifts, it did not install faster ones; instead, it put mirrors beside the lift doors. Guests spent the wait looking at themselves, and the complaints almost stopped, although the lifts were no quicker than before.',
        },
        {
          text: 'Uncertainty also makes waiting harder. A wait of unknown length feels longer than one whose end is in sight, which is why many transport operators now display the number of minutes until the next train. Interestingly, passengers seem to prefer an accurate estimate of a long delay to a vague promise that the service will arrive “shortly”.',
        },
        {
          text: 'Fairness may be the most powerful factor of all. Customers become angry far more quickly when someone pushes in than when the line is merely slow. For this reason, many banks and post offices have replaced several separate queues with a single line that feeds all the counters. The average wait is roughly the same, but nobody has to watch a neighbouring queue move faster.',
        },
        {
          text: 'Finally, people judge a wait partly by what they expect at the end of it. Diners will queue happily for a popular restaurant, partly because the line itself signals that the food is worth it. Some businesses are even suspected of keeping their queues visible on purpose, since an empty entrance can suggest that a place is unpopular.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'match-endings',
      instructions: 'Complete each sentence with the correct ending, A–H, below.',
      options: [
        { key: 'A', text: 'prevents customers from seeing others served more quickly.' },
        { key: 'B', text: 'makes a wait feel shorter by removing uncertainty.' },
        { key: 'C', text: 'greatly reduces the average time that customers spend waiting.' },
        { key: 'D', text: 'solved the problem without making the service any faster.' },
        { key: 'E', text: 'tend to underestimate how long they have spent in a queue.' },
        { key: 'F', text: 'prefer precise information, even when the news is bad.' },
        { key: 'G', text: 'can suggest that the food is of high quality.' },
        { key: 'H', text: 'were offered a discount on their next stay.' },
      ],
      questions: [
        {
          n: 1,
          prompt: 'The hotel that received complaints about its slow lifts',
          answer: 'D',
          location: {
            ref: 't0p1',
            quote: 'the complaints almost stopped, although the lifts were no quicker than before',
          },
          explanation:
            'The mirrors “solved the problem” (the complaints almost stopped) while the lifts were “no quicker” = “without making the service any faster”. H is a grammar clash (“The hotel … were”) and is never mentioned.',
          traps: {
            H: '“The hotel … were offered” does not agree (singular subject, plural verb), and no discount is mentioned.',
          },
        },
        {
          n: 2,
          prompt: 'Showing passengers how many minutes remain until the next train',
          answer: 'B',
          location: {
            ref: 't0p2',
            quote: 'A wait of unknown length feels longer than one whose end is in sight',
          },
          explanation:
            'Displaying the minutes puts the end of the wait “in sight”, and the text says such a wait feels shorter than one of “unknown length” — so the display works by removing uncertainty.',
          traps: {
            C: 'The display changes how the wait feels, not how long it actually is.',
          },
        },
        {
          n: 3,
          prompt: 'Most passengers',
          answer: 'F',
          location: {
            ref: 't0p2',
            quote:
              'passengers seem to prefer an accurate estimate of a long delay to a vague promise',
          },
          explanation:
            '“Precise information” = “an accurate estimate”; “even when the news is bad” = “of a long delay”. The plural subject “Most passengers” needs a plural verb, so E, F and H all fit the grammar — only F fits the meaning.',
          traps: {
            E: 'Reversed: the first paragraph says people overestimate their waiting time, not underestimate it.',
          },
        },
        {
          n: 4,
          prompt: 'Replacing several queues with a single line',
          answer: 'A',
          location: {
            ref: 't0p3',
            quote: 'nobody has to watch a neighbouring queue move faster',
          },
          explanation:
            'With one line, “nobody has to watch a neighbouring queue move faster” = customers do not see others served more quickly. This removes the sense of unfairness the paragraph is about.',
          traps: {
            C: 'Contradicted: “The average wait is roughly the same.” C fits the grammar but not the meaning.',
          },
        },
        {
          n: 5,
          prompt: 'A long queue outside a restaurant',
          answer: 'G',
          location: {
            ref: 't0p4',
            quote: 'the line itself signals that the food is worth it',
          },
          explanation:
            '“Signals” = “can suggest”; “the food is worth it” = “of high quality”. B fits the grammar (“A long queue … makes a wait feel shorter”), but the text never says that.',
        },
      ],
    },
  ],
})
