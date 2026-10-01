import { defineUnit } from '../../define'

export default defineUnit({
  id: 'unit-06',
  number: 6,
  title: 'Word order',
  titleSv: 'Ordföljd',
  cefr: 'A1',
  emoji: '🧩',
  description:
    'The famous V2 rule, questions, and where to put inte: the keys to sounding Swedish.',
  lessons: [
    {
      id: 'u06-l01',
      title: 'Simple sentences',
      titleSv: 'Enkla meningar',
      goal: 'Say how often you do things: Jag dricker alltid kaffe.',
    },
    {
      id: 'u06-l02',
      title: 'The verb comes second',
      titleSv: 'V2-regeln',
      goal: 'Start a sentence with a time word: Idag dricker jag te.',
    },
    {
      id: 'u06-l03',
      title: 'Yes/no questions',
      titleSv: 'Ja/nej-frågor',
      goal: 'Ask questions by starting with the verb, and answer with jo.',
    },
    {
      id: 'u06-l04',
      title: 'Question words',
      titleSv: 'Frågeord',
      goal: 'Ask who, when, why and how much.',
    },
    {
      id: 'u06-l05',
      title: 'Where does inte go?',
      titleSv: 'Var står inte?',
      goal: 'Put inte in the right place, even after att.',
    },
  ],
})
