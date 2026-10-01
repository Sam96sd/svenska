import { defineUnit } from '../../define'

export default defineUnit({
  id: 'unit-02',
  number: 2,
  title: 'Hej! Greetings & introductions',
  titleSv: 'Hälsningar',
  cefr: 'A0',
  emoji: '👋',
  description:
    'Say hello and goodbye, introduce yourself, ask how someone is and where they come from.',
  lessons: [
    {
      id: 'u02-l01',
      title: 'Hello and goodbye',
      titleSv: 'Hej och hej då',
      goal: 'Greet people at any time of day and say goodbye.',
    },
    {
      id: 'u02-l02',
      title: "What's your name?",
      titleSv: 'Vad heter du?',
      goal: 'Introduce yourself and ask someone their name.',
    },
    {
      id: 'u02-l03',
      title: 'How are you?',
      titleSv: 'Hur mår du?',
      goal: 'Ask how someone is and say how you feel.',
    },
    {
      id: 'u02-l04',
      title: 'Where are you from?',
      titleSv: 'Var kommer du ifrån?',
      goal: 'Say where you come from, where you live and what you speak.',
    },
    {
      id: 'u02-l05',
      title: 'Polite words',
      titleSv: 'Artighetsord',
      goal: 'Apologise, get attention and thank people properly.',
    },
    {
      id: 'u02-l06',
      title: 'Everyone is "du"',
      titleSv: 'Du-reformen',
      kind: 'culture',
      goal: 'Use all the personal pronouns, and learn why Swedes say "du" to everyone.',
    },
  ],
})
