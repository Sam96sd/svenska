import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-saving-money',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Saving up for something',
  theme: 'Money and spending',
  prompt: 'Describe a time when you saved money to buy something.',
  points: [
    'what you wanted to buy',
    'how long it took you to save',
    'how you managed to save the money',
  ],
  explain: 'and explain how you felt when you finally bought it.',
  followUp: 'Are you generally good at saving money?',
  part3: [
    'At what age should children start learning how to manage money?',
    'Why do some people find it much harder to save than others?',
    'How has paying by card or phone affected the way people spend?',
    'Is it better to save up for something or to borrow and buy it straight away?',
    'Should schools teach young people about personal finance?',
    'Do you think young people in the future will have different attitudes towards money?',
  ],
})
