import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-changed-mind',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Changing your mind',
  theme: 'Personal experiences',
  prompt: 'Describe a time when you changed your mind about something.',
  points: [
    'what your original opinion or plan was',
    'when this happened',
    'what made you think again',
  ],
  explain: 'and explain how you felt after changing your mind.',
  followUp: 'Do you change your mind easily?',
  part3: [
    'What kinds of decisions do people often change their minds about?',
    'Are young people more willing to change their opinions than older people?',
    'How much do advertisements influence the choices people make?',
    'Is changing your mind a sign of weakness or of good judgement?',
    'Should public figures be criticised for changing their position on an issue?',
    'Do you think the internet will make it easier or harder for people to change their views?',
  ],
})
