import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-crowded-place',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A crowded place',
  theme: 'Places',
  prompt: 'Describe a crowded place you have been to.',
  points: ['where it was', 'when you went there', 'why there were so many people there'],
  explain: 'and explain how you felt about being in such a busy place.',
  followUp: 'Would you go back there again?',
  part3: [
    'Which places in your country tend to be crowded, and at what times?',
    'Why do some people enjoy busy places while others try to avoid them?',
    'How is life in a crowded city different from life in a quiet town?',
    'What can be done to reduce overcrowding on public transport?',
    'Should popular tourist sites limit the number of visitors they allow?',
    'Do you think more people will move away from big cities in the future? Why?',
  ],
})
