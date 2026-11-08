import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-habit-to-change',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A habit you want to change',
  theme: 'Health and lifestyle',
  prompt: 'Describe a habit you would like to change.',
  points: ['what the habit is', 'how long you have had it', 'how it affects your daily life'],
  explain: 'and explain why you would like to change it.',
  followUp: 'Have you ever managed to break a habit?',
  part3: [
    'What good habits do parents try to teach their children?',
    'Is it easier to start a new habit or to give up an old one?',
    'Why do people so often abandon their plans to live more healthily?',
    'How much are our habits shaped by the people around us?',
    "Should governments try to change people's habits, for example by taxing sugary drinks?",
    'Do you think smartphones have created habits that will be difficult for society to change?',
  ],
})
