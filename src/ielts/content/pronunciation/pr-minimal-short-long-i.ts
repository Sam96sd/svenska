import { definePronSet } from '../define'

export default definePronSet({
  id: 'pr-minimal-short-long-i',
  focus: 'minimal-pairs',
  title: 'Short /ɪ/ and long /iː/',
  intro: [
    'Arabic separates short and long vowels mainly by **length**. English /ɪ/ and /iː/ differ in length and also in **mouth shape**, so making /ɪ/ just a short version of /iː/ is not enough: “ship” can still sound like “sheep”.',
    '**/iː/** (sheep): spread your lips as if smiling, keep your tongue high and tense, and hold the sound. **/ɪ/** (ship): relax your lips and tongue and open your mouth very slightly; it is short and sits a little towards /e/.',
  ],
  quiz: 'which-word',
  items: [
    {
      text: 'ship / sheep',
      options: ['ship', 'sheep'],
      answer: 'sheep',
      note: 'You heard “sheep”: long, tense /iː/ with spread lips.',
    },
    {
      text: 'live / leave',
      options: ['live', 'leave'],
      answer: 'live',
      note: 'You heard “live” /lɪv/: short, relaxed /ɪ/. “Where do you live?” must not sound like “Where do you leave?”',
    },
    {
      text: 'fill / feel',
      options: ['fill', 'feel'],
      answer: 'feel',
      note: 'You heard “feel”: long /iː/. Smile and hold it.',
    },
    {
      text: 'bit / beat',
      options: ['bit', 'beat'],
      answer: 'bit',
      note: 'You heard “bit”: short, relaxed /ɪ/. “A bit” is very common in natural answers.',
    },
    {
      text: 'sit / seat',
      options: ['sit', 'seat'],
      answer: 'seat',
      note: 'You heard “seat”: long /iː/, even though the final /t/ makes it a little shorter.',
    },
    {
      text: 'hit / heat',
      options: ['hit', 'heat'],
      answer: 'hit',
      note: 'You heard “hit”: short /ɪ/, lips relaxed, not smiling.',
    },
    {
      text: 'chip / cheap',
      options: ['chip', 'cheap'],
      answer: 'cheap',
      note: 'You heard “cheap”: long /iː/. Keep the /p/ at the end, not /b/.',
    },
    {
      text: 'will / wheel',
      options: ['will', 'wheel'],
      answer: 'will',
      note: 'You heard “will”: short /ɪ/. In fast speech it often shrinks further, as in “I’ll”.',
    },
    {
      text: 'list / least',
      options: ['list', 'least'],
      answer: 'least',
      note: 'You heard “least”: long /iː/. “At least” is a useful phrase in Part 3.',
    },
    {
      text: 'slip / sleep',
      options: ['slip', 'sleep'],
      answer: 'slip',
      note: 'You heard “slip”: short /ɪ/. Also check the cluster /sl/: no vowel before it.',
    },
    {
      text: 'rich / reach',
      options: ['rich', 'reach'],
      answer: 'reach',
      note: 'You heard “reach”: long /iː/ with spread lips.',
    },
    {
      text: 'fit / feet',
      options: ['fit', 'feet'],
      answer: 'fit',
      note: 'You heard “fit”: short, relaxed /ɪ/.',
    },
    {
      text: 'still / steal',
      options: ['still', 'steal'],
      answer: 'steal',
      note: 'You heard “steal”: long /iː/. It sounds the same as “steel”.',
    },
    {
      text: 'lip / leap',
      options: ['lip', 'leap'],
      answer: 'lip',
      note: 'You heard “lip”: short /ɪ/, tongue slightly lower and more relaxed than for /iː/.',
    },
  ],
})
