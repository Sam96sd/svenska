import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-future-goal',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A goal for the future',
  theme: 'Ambitions and plans',
  prompt: 'Describe a goal you hope to achieve in the future.',
  points: [
    'what the goal is',
    'when you first started thinking about it',
    'what you are doing to work towards it',
  ],
  explain: 'and explain why this goal matters to you.',
  followUp: 'Have you told many people about this goal?',
  part3: [
    'What kinds of goals do young people in your country typically have?',
    "How do the ambitions of young people differ from those of their parents' generation?",
    'Is it better to set yourself lots of small goals or one large one?',
    'Why do many people fail to achieve the goals they set themselves?',
    'Do you think people put too much pressure on themselves to succeed nowadays?',
    "In what ways might people's ambitions change in the coming decades?",
  ],
})
