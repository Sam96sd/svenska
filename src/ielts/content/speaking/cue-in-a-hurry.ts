import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-in-a-hurry',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Being in a hurry',
  theme: 'Personal experiences',
  prompt: 'Describe a time when you had to do something in a hurry.',
  points: ['what you had to do', 'why you were short of time', 'how you managed it'],
  explain: 'and explain how you felt during and after the experience.',
  followUp: 'Are you usually an organised person?',
  part3: [
    'In what situations do people commonly find themselves rushing?',
    'Is the pace of life faster now than it was in the past?',
    'Why are some people always late while others are always early?',
    'Do people make better decisions when they have plenty of time?',
    'Should employers give staff more flexibility over their working hours?',
    'Do you think technology will give people more free time in the future, or less?',
  ],
})
