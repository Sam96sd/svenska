import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-influential-teacher',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A teacher who influenced you',
  theme: 'Education and learning',
  prompt: 'Describe a teacher who had a strong influence on you.',
  points: [
    'who this teacher was and what they taught',
    'when you were their student',
    'what their lessons were like',
  ],
  explain: 'and explain how this teacher influenced you.',
  followUp: 'Have you kept in touch with any of your former teachers?',
  part3: [
    'What qualities make someone a good teacher?',
    'How is the role of a teacher different now from when your parents were at school?',
    'Do pupils learn more from their teachers or from each other?',
    'Should teachers be paid as much as doctors or lawyers?',
    'To what extent could online courses replace a teacher in a classroom?',
    "What do you think schools will look like in fifty years' time?",
  ],
})
