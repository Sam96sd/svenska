import { defineUnit } from '../../define'

export default defineUnit({
  id: 'unit-07',
  number: 7,
  title: 'Food & café',
  titleSv: 'Mat och fika',
  cefr: 'A2',
  emoji: '☕',
  description:
    'Fika like a Swede, order in a café, understand prices in kronor and do the weekly shop.',
  lessons: [
    {
      id: 'u07-l01',
      title: 'Fika',
      titleSv: 'Fika',
      kind: 'culture',
      goal: 'Talk about coffee, buns and cakes, and the Swedish coffee break.',
    },
    {
      id: 'u07-l02',
      title: 'Ordering: Kan jag få …?',
      titleSv: 'Beställa',
      goal: 'Order food and drinks politely and pay.',
    },
    {
      id: 'u07-l03',
      title: 'Prices in kronor',
      titleSv: 'Vad kostar det?',
      goal: 'Ask about prices and understand the answer.',
    },
    {
      id: 'u07-l04',
      title: 'At the supermarket',
      titleSv: 'I mataffären',
      goal: 'Name everyday groceries and do the shopping.',
    },
    {
      id: 'u07-l05',
      title: 'Meals of the day',
      titleSv: 'Dagens måltider',
      goal: 'Talk about breakfast, lunch and dinner, and what you like to eat.',
    },
  ],
})
