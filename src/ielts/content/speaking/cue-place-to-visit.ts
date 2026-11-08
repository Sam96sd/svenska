import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-place-to-visit',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A place you would like to visit',
  theme: 'Travel',
  prompt: 'Describe a place you would like to visit in the future.',
  points: ['where it is', 'how you found out about it', 'what you would do there'],
  explain: 'and explain why you would like to visit this place.',
  followUp: 'Do you prefer to plan trips carefully or to be spontaneous?',
  part3: [
    'Why do people like visiting places they have never been to before?',
    'How has the way people choose holiday destinations changed in recent years?',
    'Is it better to travel independently or as part of an organised tour?',
    'What problems can large numbers of tourists cause for popular places?',
    'Should famous sites limit the number of visitors they allow each day?',
    'Do you think virtual tours could ever replace real travel?',
  ],
})
