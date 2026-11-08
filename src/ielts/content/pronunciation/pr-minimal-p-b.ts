import { definePronSet } from '../define'

export default definePronSet({
  id: 'pr-minimal-p-b',
  focus: 'minimal-pairs',
  title: '/p/ and /b/',
  intro: [
    'Arabic has /b/ but no /p/, so “park” can come out as “bark” and “people” as “beoble”. In English these are different words, and the examiner will notice.',
    '**/p/** has no voice but a strong **puff of air** at the start of a word: hold your hand or a tissue in front of your lips and feel it. **/b/** is voiced: your throat vibrates and there is no puff. At the end of a word, the vowel before /b/ is a little **longer** (cab) than the vowel before /p/ (cap).',
    'Listen to the word and choose what you heard. Then say both words yourself and record them.',
  ],
  quiz: 'which-word',
  items: [
    {
      text: 'pin / bin',
      options: ['pin', 'bin'],
      answer: 'bin',
      note: 'You heard “bin”: voiced /b/, no puff of air.',
    },
    {
      text: 'pear / bear',
      options: ['pear', 'bear'],
      answer: 'pear',
      note: 'You heard “pear”: /p/ with a clear puff of air before the vowel.',
    },
    {
      text: 'cap / cab',
      options: ['cap', 'cab'],
      answer: 'cab',
      note: 'You heard “cab”: the vowel is slightly longer before voiced /b/. In “cap” it is short and clipped.',
    },
    {
      text: 'pull / bull',
      options: ['pull', 'bull'],
      answer: 'pull',
      note: 'You heard “pull”: aspirated /p/, a puff of air with no voice.',
    },
    {
      text: 'pack / back',
      options: ['pack', 'back'],
      answer: 'back',
      note: 'You heard “back”: voice starts at once with /b/.',
    },
    {
      text: 'pie / buy',
      options: ['pie', 'buy'],
      answer: 'pie',
      note: 'You heard “pie”: /p/ plus a puff of air. Without the puff it sounds like “buy”.',
    },
    {
      text: 'pet / bet',
      options: ['pet', 'bet'],
      answer: 'bet',
      note: 'You heard “bet”: voiced /b/. Put a finger on your throat and feel it vibrate.',
    },
    {
      text: 'park / bark',
      options: ['park', 'bark'],
      answer: 'park',
      note: 'You heard “park”: /p/ is voiceless and aspirated. “Car park” must not sound like “car bark”.',
    },
    {
      text: 'rope / robe',
      options: ['rope', 'robe'],
      answer: 'robe',
      note: 'You heard “robe”: the vowel /əʊ/ is longer before voiced /b/, and the lips close gently.',
    },
    {
      text: 'pea / bee',
      options: ['pea', 'bee'],
      answer: 'pea',
      note: 'You heard “pea”: /p/ with a puff of air before /iː/.',
    },
    {
      text: 'path / bath',
      options: ['path', 'bath'],
      answer: 'path',
      note: 'You heard “path” /pɑːθ/: aspirated /p/. Both words have the long British vowel /ɑː/.',
    },
    {
      text: 'pride / bride',
      options: ['pride', 'bride'],
      answer: 'bride',
      note: 'You heard “bride”: voiced /b/ before /r/. With /p/ the puff of air makes the /r/ sound slightly whispered.',
    },
    {
      text: 'peach / beach',
      options: ['peach', 'beach'],
      answer: 'peach',
      note: 'You heard “peach”: voiceless, aspirated /p/.',
    },
    {
      text: 'lap / lab',
      options: ['lap', 'lab'],
      answer: 'lab',
      note: 'You heard “lab”: a longer vowel and a voiced /b/ at the end. Useful for Part 1 answers about science or study.',
    },
    {
      text: 'pig / big',
      options: ['pig', 'big'],
      answer: 'pig',
      note: 'You heard “pig”: aspirated /p/. Practise: put a sheet of paper in front of your mouth; it should move for /p/ but not for /b/.',
    },
  ],
})
