import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-busy-time',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A very busy time',
  theme: 'Work and study',
  prompt: 'Describe a period when you were very busy.',
  points: ['when it was', 'what you had to do', 'how you organised your time'],
  explain: 'and explain how you felt when this busy period was over.',
  followUp: 'Do you prefer being busy or having plenty of free time?',
  part3: [
    'Which groups of people tend to be the busiest in society?',
    'Is being busy seen as a sign of success in your country?',
    "What effects can having too much work have on people's health and relationships?",
    'Why do some people find it difficult to say no to extra work?',
    'Should there be laws limiting the number of hours people can work each week?',
    'Would a shorter working week be good or bad for the economy as a whole?',
  ],
})
