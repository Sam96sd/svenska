import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-memorable-advert',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A memorable advertisement',
  theme: 'Media and culture',
  prompt: 'Describe an advertisement that you remember well.',
  points: ['what it was advertising', 'where you saw or heard it', 'what happened in it'],
  explain: 'and explain why it stayed in your memory.',
  followUp: 'Have you ever bought something because of an advertisement?',
  part3: [
    'Where do people come across the most advertising nowadays?',
    'How is advertising on social media different from advertising on television?',
    'Why are children particularly easy to influence through advertising?',
    'Should there be stricter rules on advertising unhealthy food and drink?',
    'Do advertisements give people a false idea of what they need in order to be happy?',
    'How might advertising change as more people find ways to avoid it?',
  ],
})
