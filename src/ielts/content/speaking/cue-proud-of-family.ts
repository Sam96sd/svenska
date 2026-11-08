import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-proud-of-family',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Feeling proud of a family member',
  theme: 'Family',
  prompt: 'Describe a time when you felt proud of a member of your family.',
  points: ['who the person is', 'what they did', 'how you found out about it'],
  explain: 'and explain why you felt so proud of them.',
  followUp: 'Did you tell them how you felt?',
  part3: [
    'What kinds of achievements are parents usually most proud of?',
    'Is it better to praise children often or only when they have done something special?',
    'How do the expectations families have of young people today differ from those of previous generations?',
    'Why do some people find it hard to express pride or affection openly?',
    'Do public forms of recognition, such as awards and prizes, really motivate people to achieve more?',
    'Could too much pressure from a family do more harm than good?',
  ],
})
