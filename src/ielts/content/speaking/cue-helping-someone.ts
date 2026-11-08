import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-helping-someone',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Helping someone',
  theme: 'People and relationships',
  prompt: 'Describe a time when you helped someone.',
  points: ['who you helped', 'what the situation was', 'what you did to help'],
  explain: 'and explain how you felt about helping this person.',
  followUp: 'Do you often help people in this way?',
  part3: [
    'In what ways do neighbours typically help one another in your country?',
    'Are people less willing to help strangers than they used to be?',
    'Why do some people do voluntary work without being paid?',
    'Should children learn to help others at school, or is that the role of parents?',
    'Is it the responsibility of individuals or of governments to help people in need?',
    'How might technology make it easier for people to help each other in the future?',
  ],
})
