import { definePronSet } from '../define'

export default definePronSet({
  id: 'pr-minimal-v-f',
  focus: 'minimal-pairs',
  title: '/v/ and /f/',
  intro: [
    'Most varieties of Arabic have /f/ but no /v/, so “very” can sound like “ferry” and “leave” like “leaf”. In English these are different words.',
    'For both sounds your **top teeth touch your bottom lip**. **/f/** is just air, with no voice. **/v/** is the same position with your **voice switched on**: you should feel your lip buzz. At the end of a word, the vowel before /v/ is also a little longer (leave) than before /f/ (leaf).',
  ],
  quiz: 'which-word',
  items: [
    {
      text: 'van / fan',
      options: ['van', 'fan'],
      answer: 'fan',
      note: 'You heard “fan”: voiceless /f/, only air between your teeth and lip.',
    },
    {
      text: 'very / ferry',
      options: ['very', 'ferry'],
      answer: 'very',
      note: 'You heard “very”: voiced /v/. Your bottom lip should buzz from the very start.',
    },
    {
      text: 'leave / leaf',
      options: ['leave', 'leaf'],
      answer: 'leaf',
      note: 'You heard “leaf”: a shorter vowel and a voiceless /f/ at the end.',
    },
    {
      text: 'vine / fine',
      options: ['vine', 'fine'],
      answer: 'vine',
      note: 'You heard “vine”: voiced /v/. Compare “I’m fine”.',
    },
    {
      text: 'vast / fast',
      options: ['vast', 'fast'],
      answer: 'fast',
      note: 'You heard “fast”: voiceless /f/. Both words have the long British vowel /ɑː/.',
    },
    {
      text: 'view / few',
      options: ['view', 'few'],
      answer: 'view',
      note: 'You heard “view” /vjuː/: voiced /v/. Useful in Part 2: “the view from my window”.',
    },
    {
      text: 'veil / fail',
      options: ['veil', 'fail'],
      answer: 'fail',
      note: 'You heard “fail”: voiceless /f/, no buzz.',
    },
    {
      text: 'vat / fat',
      options: ['vat', 'fat'],
      answer: 'vat',
      note: 'You heard “vat” (as in VAT, a tax on goods): voiced /v/.',
    },
    {
      text: 'save / safe',
      options: ['save', 'safe'],
      answer: 'safe',
      note: 'You heard “safe”: voiceless /f/ at the end, and the vowel is shorter than in “save”.',
    },
    {
      text: 'prove / proof',
      options: ['prove', 'proof'],
      answer: 'prove',
      note: 'You heard “prove”, the verb: long vowel and a voiced /v/. “Proof” is the noun.',
    },
    {
      text: 'believe / belief',
      options: ['believe', 'belief'],
      answer: 'belief',
      note: 'You heard “belief”, the noun: voiceless /f/. “Believe” is the verb, with /v/.',
    },
    {
      text: 'halve / half',
      options: ['halve', 'half'],
      answer: 'halve',
      note: 'You heard “halve” /hɑːv/, the verb: voiced /v/. The l is silent in both words.',
    },
    {
      text: 'fairy / vary',
      options: ['fairy', 'vary'],
      answer: 'vary',
      note: 'You heard “vary” /ˈveəri/: voiced /v/. Very useful in Writing Task 1: “prices vary”.',
    },
    {
      text: 'safer / saver',
      options: ['safer', 'saver'],
      answer: 'saver',
      note: 'You heard “saver”: voiced /v/ between the vowels. “Safer” has a voiceless /f/.',
    },
  ],
})
