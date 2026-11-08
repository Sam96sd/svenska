import { defineCueCard } from '../define'

/** Original cue card with linked Part 3 questions. */
export default defineCueCard({
  id: 'cue-stranger-conversation',
  skill: 'speaking',
  use: 'practice',
  kind: 'cue-card',
  title: 'A conversation with a stranger',
  theme: 'Communication',
  prompt: 'Describe an interesting conversation you had with someone you did not know.',
  points: ['where and when it happened', 'who the person was', 'what you talked about'],
  explain: 'and explain why you found the conversation interesting.',
  followUp: "Do you often chat to people you don't know?",
  part3: [
    'In what situations do people most often start conversations with strangers?',
    'Are people in big cities less willing to talk to strangers than people in small communities?',
    'Why are children often taught to be careful about talking to strangers?',
    'Has technology made people more or less comfortable talking face to face?',
    'What skills does a person need to be a good conversationalist?',
    'Do you think people will have fewer chance conversations in the future?',
  ],
})
