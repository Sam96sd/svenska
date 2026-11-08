import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-beautiful-building',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A beautiful building',
  theme: 'Architecture and cities',
  prompt: 'Describe a building that you find beautiful.',
  points: ['where it is', 'what it looks like', 'how often you see it'],
  explain: 'and explain why you find it beautiful.',
  followUp: 'Do you generally prefer old buildings or modern ones?',
  part3: [
    'What makes a building attractive to most people?',
    'How do new buildings in towns and cities differ from older ones?',
    'Should public money be spent on preserving historic buildings?',
    'Is it more important for a building to be practical or to look good?',
    'Who should have the final say on what is built in a town: architects, planners or local residents?',
    'How might concerns about the environment change the design of buildings in the future?',
  ],
})
