import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-relaxing-place',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A place to relax',
  theme: 'Places',
  prompt: 'Describe a place in your town or city where you like to relax.',
  points: ['where it is', 'how often you go there', 'what you usually do there'],
  explain: 'and explain why you find it a relaxing place to be.',
  followUp: 'Do you usually go there alone or with other people?',
  part3: [
    'Where do people in cities usually go when they want to unwind?',
    'Do people today have less time to relax than their parents did?',
    'Why do some people find it hard to relax even when they have free time?',
    'How important are parks and green spaces to the quality of life in a city?',
    'Should local councils spend more money on public spaces than on new buildings?',
    'How do you think cities could be designed to reduce stress in the future?',
  ],
})
