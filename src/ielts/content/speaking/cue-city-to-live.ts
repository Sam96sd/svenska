import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-city-to-live',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A city you would like to live in',
  theme: 'Cities and urban life',
  prompt: 'Describe a city you would like to live in one day.',
  points: ['where the city is', 'how you know about it', 'what you would do there'],
  explain: 'and explain why you would like to live in this city.',
  followUp: 'Do you think you will actually move there?',
  part3: [
    'What makes a city a good place to live?',
    'Why do so many people move from the countryside to big cities?',
    'What problems can rapid growth cause for a city?',
    'Is it better to live in the centre of a city or in the suburbs?',
    'How can planners make urban areas greener and more pleasant?',
    'Do you think working from home will change where people choose to live?',
  ],
})
