import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-historical-place',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A historical place',
  theme: 'History and heritage',
  prompt: 'Describe a historical place that you have visited.',
  points: [
    'where it is',
    'when you went there and who you went with',
    'what you saw and learnt there',
  ],
  explain: 'and explain how you felt about visiting this place.',
  followUp: 'Would you like to go back there one day?',
  part3: [
    'Why is it important to preserve old buildings and historical sites?',
    'How do young people today learn about history compared with their grandparents?',
    'In what ways can large numbers of tourists damage historical places?',
    'Who should pay for the upkeep of historical sites: the government, visitors or private companies?',
    'Is it ever acceptable to knock down an old building to make room for something new?',
    'Do you think virtual tours will one day replace real visits to historical places?',
  ],
})
