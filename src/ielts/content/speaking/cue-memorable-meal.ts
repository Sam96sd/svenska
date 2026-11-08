import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-memorable-meal',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A memorable meal',
  theme: 'Food',
  prompt: 'Describe a meal that you remember well.',
  points: ['where and when you had it', 'who you were with', 'what you ate'],
  explain: 'and explain why this meal was so memorable.',
  followUp: 'Do you often eat out?',
  part3: [
    'On what occasions do families in your country usually eat together?',
    'How have eating habits in your country changed over the past few decades?',
    'Is it better to eat at home or in a restaurant? Why?',
    'Why do you think fast food has become so popular around the world?',
    'Should schools be responsible for teaching children about healthy eating?',
    "Do you think traditional dishes will still be popular in fifty years' time?",
  ],
})
