import { defineUnit } from '../../define'

export default defineUnit({
  id: 'unit-11',
  number: 11,
  title: 'Getting around Sweden',
  titleSv: 'Ta sig fram',
  cefr: 'A2',
  emoji: '🚆',
  description:
    'Ask the way, take buses and trains, buy tickets, talk about the weather and enjoy the right to roam.',
  lessons: [
    {
      id: 'u11-l01',
      title: 'Asking the way',
      titleSv: 'Fråga om vägen',
      goal: 'Ask for and understand directions.',
    },
    {
      id: 'u11-l02',
      title: 'Getting around',
      titleSv: 'Kollektivtrafik',
      goal: 'Use buses, trains and the tunnelbana, and know åka from gå.',
    },
    {
      id: 'u11-l03',
      title: 'Buying a ticket',
      titleSv: 'Köpa biljett',
      goal: 'Buy the right ticket.',
    },
    {
      id: 'u11-l04',
      title: 'The weather',
      titleSv: 'Vädret',
      goal: 'Talk about the weather, the Swedish small-talk favourite.',
    },
    {
      id: 'u11-l05',
      title: 'The right to roam',
      titleSv: 'Allemansrätten',
      kind: 'culture',
      goal: 'Enjoy Swedish nature and know what allemansrätten allows.',
    },
  ],
})
