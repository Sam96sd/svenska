import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-essential-technology',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: "Technology you couldn't live without",
  theme: 'Technology',
  prompt: "Describe a piece of technology (not your phone) that you couldn't live without.",
  points: ['what it is', 'when you started using it', 'what you use it for'],
  explain: 'and explain why it would be difficult for you to manage without it.',
  followUp: 'Are you quick to learn how to use new devices?',
  part3: [
    "Which household devices have changed people's lives the most in recent decades?",
    'Do younger and older people use technology in different ways?',
    'Has technology made people too dependent on machines?',
    'Who benefits more from new technology: ordinary people or businesses?',
    'Should manufacturers be required to make devices that last longer and are easy to repair?',
    'What kind of technology do you think people will consider essential in twenty years?',
  ],
})
