import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions (full mock test 2). */
export default defineCueCard({
  id: 'cue-mock2',
  skill: 'speaking',
  use: 'mock',
  kind: 'cue-card',
  title: 'Losing something',
  theme: 'Possessions and values',
  prompt: 'Describe a time when you lost something that was important to you.',
  points: ['what you lost', 'where and how you lost it', 'what you did to try to find it'],
  explain: 'and explain how you felt about losing it.',
  followUp: 'Are you usually careful with your belongings?',
  part3: [
    'What kinds of things do people most commonly lose, and why?',
    'Why do people sometimes feel more upset about losing a cheap item than an expensive one?',
    'How has technology made it easier, or harder, to keep track of our belongings?',
    'Do you think people today are too attached to their possessions?',
    'Should someone who finds and returns a lost item be given a reward?',
    'Will people own fewer physical possessions in the future, in your opinion?',
  ],
})
