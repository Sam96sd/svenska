import { defineLesson } from '../define'

export default defineLesson({
  id: 'w-gt-letter-types',
  skill: 'writing',
  module: 'general',
  order: 6,
  title: 'Phrases for six types of letter',
  summary:
    'Ready-to-adapt language for complaints, requests, apologies, invitations, thanks and explanations, at formal, semi-formal and informal levels.',
  types: ['complaint', 'request', 'apology', 'invitation', 'thanks', 'explanation'],
  minutes: 10,
  sections: [
    {
      kind: 'text',
      heading: 'Phrases are tools, not templates',
      paragraphs: [
        'Each letter type has a job: a complaint wants a problem solved, an apology wants to repair a relationship, an invitation wants a yes. The phrases below help you do that job in the **right tone**. Each one is labelled **(F)** formal, **(S)** semi-formal or **(I)** informal.',
        'Use them as frames and **fill them with specific details** from the task: dates, names, items, what exactly went wrong. A letter built only from stock phrases reads as memorised, and examiners notice. Two or three well-chosen phrases per letter is plenty.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Complaint',
      items: [
        {
          phrase: 'I am writing to express my dissatisfaction with…',
          use: '(F) Purpose sentence to a company or organisation.',
        },
        {
          phrase: 'Despite being assured that…, I have still not received…',
          use: '(F) Shows the history of the problem.',
        },
        {
          phrase: 'I would therefore ask you to arrange a full refund / a replacement.',
          use: '(F) The action you want, stated clearly.',
        },
        {
          phrase: 'I’m afraid I need to raise a problem with…',
          use: '(S) To a landlord, neighbour or manager you know.',
        },
        {
          phrase: 'I’d really appreciate it if this could be sorted out by the end of the month.',
          use: '(S) A polite but firm deadline.',
        },
        {
          phrase: 'I have to tell you, I was pretty disappointed with…',
          use: '(I) Complaining to a friend, e.g. about a shared booking.',
        },
      ],
    },
    {
      kind: 'phrases',
      heading: 'Request',
      items: [
        {
          phrase: 'I am writing to enquire whether it would be possible to…',
          use: '(F) Opening a formal request.',
        },
        { phrase: 'I would be grateful if you could send me…', use: '(F) The request itself.' },
        {
          phrase: 'Could you let me know whether…?',
          use: '(S) Polite and direct, e.g. to a manager.',
        },
        { phrase: 'Would you mind if I took Friday off instead?', use: '(S) Asking permission.' },
        {
          phrase: 'I was wondering if you could do me a favour.',
          use: '(I) Softening a request to a friend.',
        },
        {
          phrase: 'Any chance you could lend me your camping gear for the weekend?',
          use: '(I) Casual request; still give the reason and details.',
        },
      ],
    },
    {
      kind: 'phrases',
      heading: 'Apology',
      items: [
        {
          phrase: 'Please accept my sincere apologies for…',
          use: '(F) A formal apology, e.g. for missing an appointment.',
        },
        {
          phrase: 'This was due to an unforeseen problem with…',
          use: '(F) Explaining without making excuses.',
        },
        {
          phrase: 'To make up for the inconvenience, I would like to offer…',
          use: '(F/S) Proposing a solution; essential in apology letters.',
        },
        {
          phrase: 'I’m really sorry that I wasn’t able to…',
          use: '(S) To a colleague or neighbour.',
        },
        {
          phrase: 'I feel terrible about missing your party.',
          use: '(I) A personal, honest apology to a friend.',
        },
        {
          phrase: 'Let me make it up to you — dinner’s on me next week.',
          use: '(I) Offering to put things right.',
        },
      ],
    },
    {
      kind: 'phrases',
      heading: 'Invitation',
      items: [
        {
          phrase: 'We would be delighted if you could attend…',
          use: '(F) Inviting a guest speaker or official.',
        },
        { phrase: 'The event will take place on… at…', use: '(F/S) Giving the practical details.' },
        {
          phrase: 'I would be grateful if you could confirm your attendance by…',
          use: '(F) Asking for a reply.',
        },
        {
          phrase: 'We’re holding a small get-together and we’d love you to come.',
          use: '(S/I) To neighbours or colleagues.',
        },
        {
          phrase: 'Fancy coming along? It wouldn’t be the same without you.',
          use: '(I) Persuading a friend.',
        },
        {
          phrase: 'Let me know by Friday so I can book a table.',
          use: '(I) A practical reason for a reply.',
        },
      ],
    },
    {
      kind: 'phrases',
      heading: 'Thanks',
      items: [
        {
          phrase: 'I am writing to thank you for…',
          use: '(F) Purpose sentence, e.g. to a hospital or a hotel manager.',
        },
        {
          phrase: 'I would particularly like to mention…, whose help…',
          use: '(F) Praising a specific member of staff.',
        },
        {
          phrase: 'I just wanted to say how much I appreciated…',
          use: '(S) To a teacher, colleague or neighbour.',
        },
        {
          phrase: 'It made a real difference, because…',
          use: '(S/I) Explaining why the help mattered: the detail that develops the bullet.',
        },
        {
          phrase: 'Thanks so much for having me last weekend.',
          use: '(I) After staying with a friend.',
        },
        {
          phrase: 'You must come and stay with us next time you’re in town.',
          use: '(I) Returning the favour.',
        },
      ],
    },
    {
      kind: 'phrases',
      heading: 'Explanation',
      items: [
        {
          phrase: 'I am writing to explain why…',
          use: '(F) Explaining a late payment, an absence or a change.',
        },
        {
          phrase: 'The main reason for this is that…',
          use: '(F/S) Introducing the cause clearly.',
        },
        {
          phrase: 'As a result, I was unable to…',
          use: '(F/S) Linking the cause to the consequence.',
        },
        { phrase: 'I hope this clarifies the situation.', use: '(F/S) Closing an explanation.' },
        {
          phrase: 'Basically, what happened was…',
          use: '(I) Starting a story-like explanation to a friend.',
        },
        { phrase: 'Long story short, …', use: '(I) Summing up after the details.' },
      ],
    },
    {
      kind: 'trap',
      text: 'Using a phrase from the wrong column. “I would be grateful if you could confirm your attendance” in a birthday invitation to your cousin, or “Any chance you could refund me?” to an airline, breaks the tone and costs marks for Task Achievement and Lexical Resource.',
    },
    {
      kind: 'tip',
      text: 'Many tasks combine types: a complaint that ends with a request, or an apology that needs an explanation. Choose **one phrase for each job**, and make sure each bullet point still gets its own paragraph.',
    },
  ],
  drills: [],
})
