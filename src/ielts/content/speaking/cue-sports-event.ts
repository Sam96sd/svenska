import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-sports-event',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A sports event you watched',
  theme: 'Leisure and sport',
  prompt: 'Describe a sports event that you watched, either live or on a screen.',
  points: ['what the event was', 'where and when you watched it', 'who you watched it with'],
  explain: 'and explain what made it memorable for you.',
  followUp: 'Do you prefer watching sport or taking part in it?',
  part3: [
    'Why do so many people enjoy watching sport?',
    'Is watching a match in a stadium better than watching it at home?',
    'Do top professional athletes earn too much money?',
    'What effects can hosting a major sports event have on a city?',
    'Should governments do more to encourage ordinary people to play sport?',
    'How might technology change the way people watch sport in the future?',
  ],
})
