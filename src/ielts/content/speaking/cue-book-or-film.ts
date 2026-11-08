import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-book-or-film',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A book or film that made you think',
  theme: 'Media and culture',
  prompt: 'Describe a book or film that made you think deeply about something.',
  points: [
    'what it was and what it was about',
    'when you read or watched it',
    'whether anyone recommended it to you',
  ],
  explain: 'and explain what it made you think about, and why.',
  followUp: 'Have you recommended it to anyone else?',
  part3: [
    'What kinds of books and films are popular in your country at the moment?',
    'Do people get more out of reading a story or watching a film of the same story?',
    'How have streaming services changed the way people choose what to watch?',
    'Is it the job of writers and film-makers to make people think, or simply to entertain them?',
    'Should governments fund films and books that are unlikely to make a profit?',
    'Do you think people will read fewer books in the future? Why?',
  ],
})
