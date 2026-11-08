import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-learning-website',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A website for learning',
  theme: 'Education and learning',
  prompt: 'Describe a website or online platform that you use to learn something.',
  points: ['what the website is', 'what you learn from it', 'how and when you use it'],
  explain: 'and explain how it has helped you make progress.',
  followUp: 'Do you think you will keep using it in the future?',
  part3: [
    'What are the main advantages of learning online compared with learning in a classroom?',
    'Why do so many people give up on online courses before they finish them?',
    'How can learners judge whether the information they find online is reliable?',
    'Do you think teachers will become less important as online learning grows?',
    'Should schools teach children how to study independently using the internet?',
    'How might technology change the way people learn over the next twenty years?',
  ],
})
