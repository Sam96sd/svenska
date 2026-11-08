import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-future-job',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A job you would like to do',
  theme: 'Work and careers',
  prompt: 'Describe a job you would like to do in the future.',
  points: [
    'what the job is',
    'what skills or qualifications it requires',
    'how you could get this kind of job',
  ],
  explain: 'and explain why you would like to do this job.',
  followUp: 'Does anyone you know do this kind of work?',
  part3: [
    'What do young people consider most important when choosing a career?',
    'Is job satisfaction more important than a high salary?',
    'Why are some jobs highly paid while others that seem equally important are not?',
    'Should parents influence the careers their children choose?',
    'How has the idea of having one job for life changed?',
    'Which jobs do you think will disappear in the future, and what new ones might appear?',
  ],
})
