import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-favourite-photo',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A photograph you like',
  theme: 'Objects and possessions',
  prompt: 'Describe a photograph that you like.',
  points: ['what it shows', 'who took it and when', 'where you keep it'],
  explain: 'and explain why you like this photograph.',
  followUp: 'Do you take a lot of photographs yourself?',
  part3: [
    'What kinds of photographs do people usually take nowadays?',
    'How is taking photographs with a phone different from using a camera in the past?',
    'Why do people share so many photographs online?',
    'Can a photograph be a work of art in the same way as a painting?',
    'Should people be allowed to photograph strangers in public places?',
    'Do you think printed photographs will disappear completely in the future?',
  ],
})
