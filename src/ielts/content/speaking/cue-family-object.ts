import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-family-object',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'An old family object',
  theme: 'Objects and possessions',
  prompt: 'Describe an old object that your family has kept for a long time.',
  points: ['what the object is', 'how long your family has had it', 'where it is kept'],
  explain: 'and explain why your family has decided to keep it.',
  followUp: 'Would you like to keep it yourself one day?',
  part3: [
    'What kinds of things do families commonly keep to remember the past?',
    'Do young people value old things as much as older people do?',
    'Why do some people find it so hard to throw things away?',
    'How important are museums in helping people understand their history?',
    'Should governments spend public money preserving old buildings and objects?',
    'Do you think digital photos will be treasured by future generations in the same way as printed ones?',
  ],
})
