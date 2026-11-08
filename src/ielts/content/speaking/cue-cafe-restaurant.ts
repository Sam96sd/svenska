import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-cafe-restaurant',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A café or restaurant you like',
  theme: 'Food',
  prompt: 'Describe a café or restaurant that you like going to.',
  points: ['where it is', 'what it looks like inside', 'what you usually order there'],
  explain: 'and explain why you like going there.',
  followUp: 'Do you usually go there alone or with other people?',
  part3: [
    'Why do people enjoy eating out rather than cooking at home?',
    'How have eating habits in your country changed over the last few decades?',
    'Do online reviews have too much influence on which restaurants succeed?',
    'What makes a café a good place to meet friends or to work?',
    'Should restaurants be required to show nutritional information on their menus?',
    'How might technology change the experience of eating out in the future?',
  ],
})
