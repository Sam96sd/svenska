import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-useful-app',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A useful app or website',
  theme: 'Technology',
  prompt: 'Describe an app or website that you find useful.',
  points: [
    'what it is and what it does',
    'how you first found out about it',
    'how often you use it',
  ],
  explain: 'and explain why you find it so useful.',
  followUp: 'Would you recommend it to other people?',
  part3: [
    'What kinds of apps are most popular with people of different ages?',
    'How has the way people look for information changed since the internet became widespread?',
    'Why do some older people find new technology difficult to use, and how could they be helped?',
    'Do you think people now depend too much on apps for simple everyday tasks?',
    'Should companies that collect personal data through apps be more strictly controlled?',
    'Will apps eventually replace services such as banks and shops on the high street?',
  ],
})
