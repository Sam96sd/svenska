import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-learning-from-mistake',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Learning from a mistake',
  theme: 'Personal experiences',
  prompt: 'Describe a time when you made a mistake and learnt something from it.',
  points: ['what the mistake was', 'when it happened', 'what the consequences were'],
  explain: 'and explain what you learnt from the experience.',
  followUp: 'Do you find it easy to admit when you are wrong?',
  part3: [
    'What kinds of mistakes do students commonly make?',
    'Do children learn more from their own mistakes or from being told what to do?',
    'Why are some people so afraid of making mistakes?',
    'Should schools and employers be more tolerant of failure?',
    'When a large company makes a serious mistake, how should it respond to the public?',
    'Is it possible for a whole society to learn from the mistakes of its past?',
  ],
})
