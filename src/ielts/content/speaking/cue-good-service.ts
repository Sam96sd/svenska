import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-good-service',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Good service',
  theme: 'Shopping and services',
  prompt: 'Describe a time when you received very good service.',
  points: ['where you were', 'what you needed', 'what the staff did for you'],
  explain: 'and explain why you thought the service was so good.',
  followUp: 'Do you usually tell a business when you have had good service?',
  part3: [
    'What do customers in your country expect from a shop or restaurant?',
    'Is service generally better in small businesses or in large companies?',
    'Why do some people complain much more than others?',
    'Should good service be rewarded with a tip, or simply included in the price?',
    'Do automated systems, such as self-service checkouts and chatbots, improve customer service or damage it?',
    'Which service jobs do you think will still be done by people in the future, and why?',
  ],
})
