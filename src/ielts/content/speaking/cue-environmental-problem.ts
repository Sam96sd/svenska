import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-environmental-problem',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'An environmental problem',
  theme: 'Environment',
  prompt: 'Describe an environmental problem in the area where you live.',
  points: ['what the problem is', 'what has caused it', 'how it affects local people'],
  explain: 'and explain what you think could be done to solve it.',
  followUp: 'Have you done anything yourself to help with this problem?',
  part3: [
    'What are the most serious environmental problems facing the world today?',
    'Whose responsibility is it to protect the environment: individuals, businesses or governments?',
    'Why do people find it difficult to change habits that harm the environment?',
    'Should products that damage the environment be taxed more heavily?',
    "How effective is education in changing people's attitudes towards the environment?",
    'Are you optimistic or pessimistic about the future of the environment?',
  ],
})
