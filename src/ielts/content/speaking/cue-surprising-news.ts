import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-surprising-news',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Surprising news',
  theme: 'Media and news',
  prompt: 'Describe a piece of news that surprised you.',
  points: ['what the news was', 'how you heard about it', 'when you heard it'],
  explain: 'and explain why it surprised you.',
  followUp: 'Did you talk about it with anyone?',
  part3: [
    'How do people in your country usually keep up with the news?',
    'How do older and younger people differ in the way they get their news?',
    'Why does bad news seem to attract more attention than good news?',
    'How can people tell whether a news story is reliable?',
    'Should the media be allowed to report on the private lives of public figures?',
    'Do you think printed newspapers will disappear completely in the future?',
  ],
})
