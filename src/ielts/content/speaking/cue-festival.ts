import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-festival',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A festival or holiday',
  theme: 'Culture and traditions',
  prompt: 'Describe a festival or holiday that is important in your country.',
  points: [
    'what it is called and when it takes place',
    'how people prepare for it',
    'what people usually do on the day',
  ],
  explain: 'and explain how you personally feel about this festival or holiday.',
  followUp: 'Did you celebrate it in the same way when you were a child?',
  part3: [
    'Why do you think traditional festivals are still important in modern society?',
    'How have the ways people celebrate changed compared with the past?',
    'Do you think some festivals have become too commercial?',
    'What can visitors learn about a country by taking part in its festivals?',
    'Should governments spend public money on organising large celebrations?',
    'Do you think new festivals will appear in the future, and what might they celebrate?',
  ],
})
