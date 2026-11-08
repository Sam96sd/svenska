import { defineCueCard } from '../define'

/** Original cue card for full mock test 1, with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-mock1',
  skill: 'speaking',
  use: 'mock',
  kind: 'cue-card',
  title: 'A park or garden you know',
  theme: 'Environment and green spaces',
  prompt: 'Describe a public park or garden that you know well.',
  points: ['where it is', 'what it looks like', 'what people do there'],
  explain: 'and explain how you feel about spending time there.',
  followUp: 'Did you go to parks often when you were a child?',
  part3: [
    'What kinds of people use public parks, and for what purposes?',
    'How do parks in city centres differ from green spaces in the countryside?',
    'Why is it important for cities to have green spaces?',
    'In crowded cities, should land be used for parks or for much-needed housing?',
    'Who should pay for the upkeep of public parks: local taxpayers or the people who use them?',
    'How might cities be redesigned in the future to bring people closer to nature?',
  ],
})
