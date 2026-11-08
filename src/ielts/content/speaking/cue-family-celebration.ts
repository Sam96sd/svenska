import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-family-celebration',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A family celebration',
  theme: 'Culture and traditions',
  prompt: 'Describe a family celebration that you enjoyed.',
  points: ['what was being celebrated', 'where it took place', 'who was there'],
  explain: 'and explain why you enjoyed it.',
  followUp: 'How often does your family get together?',
  part3: [
    'What occasions do families usually celebrate in your country?',
    'How have family celebrations changed compared with the past?',
    'Why do some people spend large amounts of money on celebrations?',
    'Are traditional celebrations losing their importance in modern society?',
    'What role do shared celebrations play in keeping families close?',
    'Do you think more celebrations will take place online in the future?',
  ],
})
