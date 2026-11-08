import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-good-at-job',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Someone good at their job',
  theme: 'Work and careers',
  prompt: 'Describe a person you know who is very good at their job.',
  points: ['who the person is', 'what job they do', 'how you know them'],
  explain: 'and explain what makes them so good at their job.',
  followUp: 'Would you like to do the same kind of work?',
  part3: [
    'What qualities make someone a good employee?',
    'Is natural talent or hard work more important for success at work?',
    'How should employers reward staff who perform well?',
    'Why do some people stay in jobs that they do not enjoy?',
    'Is it better to be an expert in one area or to have a wide range of skills?',
    'How might the skills that employers value change over the next few decades?',
  ],
})
