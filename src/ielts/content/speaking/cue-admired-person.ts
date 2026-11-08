import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-admired-person',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A person you admire',
  theme: 'People and relationships',
  prompt: 'Describe someone you admire who has had an influence on your life.',
  points: ['who this person is', 'how you know them', 'what they are like as a person'],
  explain: 'and explain why you admire them.',
  followUp: 'Would you like to be more like this person in the future?',
  part3: [
    'What kinds of people do children tend to look up to nowadays?',
    'How are the people admired today different from those admired by earlier generations?',
    'Is it better to admire famous people or people in your own community? Why?',
    'Do celebrities have a responsibility to behave well because young people copy them?',
    'Why do some people become role models while others with similar achievements do not?',
    'Do you think social media will change the kind of people society admires in the future?',
  ],
})
