import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-being-patient',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'Being patient',
  theme: 'Personal qualities',
  prompt: 'Describe a time when you had to be patient to achieve something.',
  points: [
    'what you were trying to do',
    'why it took longer or was harder than you expected',
    'how you managed to stay calm',
  ],
  explain: 'and explain how you felt when it was over.',
  followUp: 'Would you describe yourself as a patient person?',
  part3: [
    'Why is patience considered such an important quality?',
    'Are young people today less patient than older generations?',
    'In which jobs is patience especially important?',
    'Has fast technology made people expect everything immediately?',
    "Can patience be learnt, or is it simply part of someone's personality?",
    'Are there situations in which it is better to be impatient?',
  ],
})
