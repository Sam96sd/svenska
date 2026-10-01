import { defineUnit } from '../../define'

export default defineUnit({
  id: 'unit-03',
  number: 3,
  title: 'Numbers, time & dates',
  titleSv: 'Siffror och tid',
  cefr: 'A1',
  emoji: '🕒',
  description:
    'Count, tell your age, read the clock the Swedish way, and talk about days and months.',
  lessons: [
    {
      id: 'u03-l01',
      title: 'Numbers 0–10',
      titleSv: 'Siffror 0–10',
      goal: 'Count from zero to ten and ask "how many?".',
    },
    {
      id: 'u03-l02',
      title: 'Numbers 11–20',
      titleSv: 'Siffror 11–20',
      goal: 'Count to twenty and spot the -ton pattern.',
    },
    {
      id: 'u03-l03',
      title: 'Big numbers and age',
      titleSv: 'Hur gammal är du?',
      goal: 'Say any number up to a thousand and tell your age.',
    },
    {
      id: 'u03-l04',
      title: 'What time is it?',
      titleSv: 'Vad är klockan?',
      goal: 'Tell the time — and remember that "halv tre" is 2:30.',
    },
    {
      id: 'u03-l05',
      title: 'Days of the week',
      titleSv: 'Veckans dagar',
      goal: 'Name the days and say today, tomorrow and yesterday.',
    },
    {
      id: 'u03-l06',
      title: 'Months and dates',
      titleSv: 'Månader och datum',
      goal: 'Say the months and dates, and meet midsommar.',
    },
  ],
})
