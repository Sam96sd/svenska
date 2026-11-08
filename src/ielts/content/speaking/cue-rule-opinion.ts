import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-rule-opinion',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A rule you agree or disagree with',
  theme: 'Society and rules',
  prompt: 'Describe a rule that you agree or disagree with.',
  points: ['what the rule is', 'where it applies', 'who has to follow it'],
  explain: 'and explain why you agree or disagree with it.',
  followUp: 'Were the rules at your school strict?',
  part3: [
    'What kinds of rules do children usually have to follow at home?',
    'Are rules at work generally stricter or more relaxed than rules at school?',
    'Why do some people break rules even when they know the consequences?',
    'Is it ever right to disobey a rule that you think is unfair?',
    'Are strict punishments more effective than education in getting people to follow rules?',
    'Do you think societies will need more rules or fewer in the future?',
  ],
})
