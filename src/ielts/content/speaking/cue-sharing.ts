import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-sharing',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Sharing something',
  theme: 'People and relationships',
  prompt: 'Describe a time when you shared something with another person.',
  points: ['what you shared', 'who you shared it with', 'why you decided to share it'],
  explain: 'and explain how you felt about sharing it.',
  followUp: 'Were you good at sharing when you were younger?',
  part3: [
    'How can parents teach young children to share?',
    'What kinds of things do people commonly share with friends or neighbours?',
    'Why have services that let people share cars, tools or homes become popular?',
    'Are people today more or less generous than they used to be?',
    'Should richer countries share more of their knowledge and resources with poorer ones?',
    'Are there things that people should never be expected to share?',
  ],
})
