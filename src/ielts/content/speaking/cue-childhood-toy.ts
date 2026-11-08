import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-childhood-toy',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A toy from your childhood',
  theme: 'Childhood',
  prompt: 'Describe a toy that you liked when you were a child.',
  points: [
    'what the toy was',
    'who gave it to you or where it came from',
    'how you played with it',
  ],
  explain: 'and explain why you liked it so much.',
  followUp: 'Do you still have it?',
  part3: [
    'How are the toys children play with today different from those of the past?',
    'In what ways can toys help children learn?',
    'Should parents limit the time children spend playing on electronic devices?',
    'Why do advertisers target children so heavily, and should this be restricted?',
    'Is it better for children to play on their own or with others?',
    'Do you think adults also need time to play?',
  ],
})
