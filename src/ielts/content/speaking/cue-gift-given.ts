import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-gift-given',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A gift you gave',
  theme: 'People and relationships',
  prompt: 'Describe a gift you gave to someone that they really liked.',
  points: ['what the gift was', 'who you gave it to', 'how you chose it'],
  explain: 'and explain why the person liked it so much.',
  followUp: 'Do you enjoy choosing presents for other people?',
  part3: [
    'On what occasions do people give gifts in your country?',
    'Is it better to give money or a gift that you have chosen yourself?',
    'Why do some people feel under pressure to spend a lot on presents?',
    'Are homemade gifts more meaningful than ones bought in shops?',
    'Has gift-giving become too commercial in modern society?',
    'Do you think gift-giving customs will change as people become more concerned about waste?',
  ],
})
