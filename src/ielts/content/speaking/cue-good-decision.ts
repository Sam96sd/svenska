import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-good-decision',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A decision you are glad you made',
  theme: 'Personal experiences',
  prompt: 'Describe a decision you made that you are glad about now.',
  points: ['what the decision was', 'when you made it', 'what other options you had'],
  explain: 'and explain why you are pleased that you made this decision.',
  followUp: 'Do you usually make decisions quickly?',
  part3: [
    'What kinds of important decisions do young people have to make?',
    'Do people in your country usually ask family or friends for advice before big decisions?',
    'Why do some people find it so hard to make up their minds?',
    'Is it better to trust your instincts or to analyse every option carefully?',
    "Should young people be free to decide what to study without their parents' approval?",
    'Does having more choice make people happier, or more anxious?',
  ],
})
