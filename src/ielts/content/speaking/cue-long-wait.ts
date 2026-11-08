import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-long-wait',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Waiting a long time',
  theme: 'Personal experiences',
  prompt: 'Describe a time when you had to wait a long time for something.',
  points: ['what you were waiting for', 'where you were', 'how long you waited'],
  explain: 'and explain how you felt while you were waiting.',
  followUp: 'What do you usually do to pass the time when you have to wait?',
  part3: [
    'In what everyday situations do people often have to wait?',
    'Are people less patient than they used to be?',
    'Why do some people find waiting more stressful than others do?',
    'Is patience something that can be taught, or are people born with it?',
    'Should people be able to pay extra to skip queues, for example at airports or theme parks?',
    'How might technology reduce the time people spend waiting in the future?',
  ],
})
