import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-helpful-advice',
  skill: 'speaking',
  kind: 'cue-card',
  title: 'Useful advice',
  theme: 'People and relationships',
  prompt: 'Describe a piece of advice you received that turned out to be very useful.',
  points: ['who gave you the advice', 'what the advice was', 'when you received it'],
  explain: 'and explain why it turned out to be so useful.',
  followUp: 'Do you often give advice to other people?',
  part3: [
    'Who do young people in your country usually go to for advice, and why?',
    'Is advice from older people always more valuable than advice from friends of the same age?',
    'Why do some people find it difficult to accept advice?',
    'Do you think people rely too much on the internet for advice nowadays?',
    'What qualities make someone good at giving advice?',
    'Should professional advice, for example from financial advisers, be free for everyone?',
  ],
})
