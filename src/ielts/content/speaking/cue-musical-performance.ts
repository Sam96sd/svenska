import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-musical-performance',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A musical performance',
  theme: 'Arts and entertainment',
  prompt: 'Describe a musical performance that you enjoyed.',
  points: ['what the performance was', 'where and when you saw it', 'who performed'],
  explain: 'and explain why you enjoyed it so much.',
  followUp: 'Do you often go to live performances?',
  part3: [
    'Why do many people prefer live music to recorded music?',
    'How has the internet changed the way musicians reach their audiences?',
    'Should the government provide financial support for musicians and orchestras?',
    'How important is it for children to learn a musical instrument at school?',
    'Why do some kinds of music stay popular for centuries while others disappear quickly?',
    'Will live concerts become more or less popular in the future, in your opinion?',
  ],
})
