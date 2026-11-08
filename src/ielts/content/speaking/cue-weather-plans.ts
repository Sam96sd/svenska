import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-weather-plans',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'When the weather changed your plans',
  theme: 'Nature and weather',
  prompt: 'Describe a time when the weather affected something you had planned to do.',
  points: ['what you had planned', 'what the weather was like', 'what you did instead'],
  explain: 'and explain how you felt about what happened.',
  followUp: 'Do you usually check the weather forecast before making plans?',
  part3: [
    "How does the weather affect people's moods and behaviour?",
    'Which jobs are most affected by the weather?',
    'How reliable do you think weather forecasts are nowadays?',
    'Why might extreme weather be becoming more common in many parts of the world?',
    'How should towns and cities prepare for severe weather such as floods or heatwaves?',
    "In what ways can the climate shape a country's culture and way of life?",
  ],
})
