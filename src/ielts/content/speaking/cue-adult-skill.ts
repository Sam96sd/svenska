import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-adult-skill',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A skill learned as an adult',
  theme: 'Education and learning',
  prompt: 'Describe a skill you learned as an adult.',
  points: [
    'what the skill is',
    'how and where you learned it',
    'how long it took you to become reasonably good at it',
  ],
  explain: 'and explain why you decided to learn it at that stage of your life.',
  followUp: 'Is there another skill you would like to learn soon?',
  part3: [
    'What kinds of skills do adults in your country commonly choose to learn?',
    'How is learning something new as an adult different from learning it as a child?',
    'Is it better to learn a skill from a teacher or to teach yourself? Why?',
    'Why do some people give up on learning a new skill so quickly?',
    'Should employers pay for their staff to learn new skills, even ones not linked to their job?',
    'Which skills do you think will become more important over the next twenty years?',
  ],
})
