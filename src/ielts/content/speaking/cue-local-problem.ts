import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-local-problem',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A local problem to solve',
  theme: 'Community and local life',
  prompt: 'Describe a problem in your local area that you would like to solve.',
  points: ['what the problem is', 'who it affects', 'how you would solve it'],
  explain: 'and explain why you think it is important to solve it.',
  followUp: 'Do you know many people in your neighbourhood?',
  part3: [
    'What are the most common problems in towns and cities today?',
    'Are the problems facing rural areas different from those facing cities?',
    'Who should be responsible for solving local problems: residents or the local council?',
    'Why do some people get involved in their community while others do not?',
    'Can small actions by individuals really make a difference to a neighbourhood?',
    'What new problems do you think cities will face in the next few decades?',
  ],
})
