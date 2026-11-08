import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-outdoor-activity',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'An outdoor activity',
  theme: 'Leisure and sport',
  prompt: 'Describe an outdoor activity you enjoy doing.',
  points: ['what the activity is', 'where you usually do it', 'who you do it with'],
  explain: 'and explain why you enjoy it.',
  followUp: 'How often do you get the chance to do it?',
  part3: [
    'What outdoor activities are popular in your country?',
    'How does the climate of a country affect the way people spend their free time?',
    'Do children spend less time outdoors than they did in the past? Why?',
    'What are the benefits of outdoor activities compared with indoor ones?',
    'Should towns and cities provide more free facilities for outdoor exercise?',
    'Do you think people will spend more or less time outdoors in the future?',
  ],
})
