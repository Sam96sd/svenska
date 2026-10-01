import { defineUnit } from '../../define'

export default defineUnit({
  id: 'unit-01',
  number: 1,
  title: 'Sounds & Alphabet',
  titleSv: 'Ljud och alfabetet',
  cefr: 'A0',
  emoji: '🔤',
  description:
    'Meet å, ä and ö, the long and short vowels, the famous sj-sound and the melody that makes Swedish sound Swedish.',
  lessons: [
    {
      id: 'u01-l01',
      title: 'The Swedish alphabet',
      titleSv: 'Alfabetet',
      kind: 'sounds',
      goal: 'Recognise and say å, ä and ö, and your first words.',
    },
    {
      id: 'u01-l02',
      title: 'Long and short vowels',
      titleSv: 'Långa och korta vokaler',
      kind: 'sounds',
      goal: 'Hear the difference between glas (glass) and glass (ice cream).',
    },
    {
      id: 'u01-l03',
      title: 'The sj- and tj-sounds',
      titleSv: 'Sj-ljudet och tj-ljudet',
      kind: 'sounds',
      goal: 'Say sju, tjugo and the other "shh" sounds.',
    },
    {
      id: 'u01-l04',
      title: 'Soft k and g, and the rs-sound',
      titleSv: 'Mjukt k och g',
      kind: 'sounds',
      goal: 'Know when k and g go soft, and why "Lars" sounds like "Lahsh".',
    },
    {
      id: 'u01-l05',
      title: 'The Swedish melody',
      titleSv: 'Ordmelodi',
      kind: 'sounds',
      goal: 'Hear the two word tones that give Swedish its sing-song sound.',
    },
  ],
})
