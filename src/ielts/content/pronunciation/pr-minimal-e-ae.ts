import { definePronSet } from '../define'

export default definePronSet({
  id: 'pr-minimal-e-ae',
  focus: 'minimal-pairs',
  title: '/e/ and /æ/',
  intro: [
    'Arabic fatha can sound anywhere between /e/ and /æ/ depending on the consonants around it, so these two English vowels are easy to mix up: “men” and “man”, “said” and “sad”.',
    'The difference is mostly your **jaw**. **/e/** (bed): jaw half open, tongue fairly forward. **/æ/** (bad): **drop your jaw** much further and open your mouth wide; the tongue lies low. In modern British English /æ/ is very open, close to a short “a”.',
  ],
  quiz: 'which-word',
  items: [
    {
      text: 'bed / bad',
      options: ['bed', 'bad'],
      answer: 'bad',
      note: 'You heard “bad”: wide-open /æ/, jaw dropped.',
    },
    {
      text: 'pen / pan',
      options: ['pen', 'pan'],
      answer: 'pen',
      note: 'You heard “pen”: /e/ with the jaw only half open.',
    },
    {
      text: 'men / man',
      options: ['men', 'man'],
      answer: 'man',
      note: 'You heard “man”: open /æ/. Singular “man”, plural “men”: the vowel is the only difference.',
    },
    {
      text: 'said / sad',
      options: ['said', 'sad'],
      answer: 'said',
      note: 'You heard “said” /sed/: the vowel is /e/, not /eɪ/ and not /æ/, whatever the spelling suggests.',
    },
    {
      text: 'set / sat',
      options: ['set', 'sat'],
      answer: 'sat',
      note: 'You heard “sat”: open /æ/.',
    },
    {
      text: 'met / mat',
      options: ['met', 'mat'],
      answer: 'met',
      note: 'You heard “met”: /e/. “I met him last year.”',
    },
    {
      text: 'head / had',
      options: ['head', 'had'],
      answer: 'had',
      note: 'You heard “had”: open /æ/ (when “had” is stressed; as a helping verb it is often weak /həd/).',
    },
    {
      text: 'beg / bag',
      options: ['beg', 'bag'],
      answer: 'beg',
      note: 'You heard “beg”: /e/, jaw half open.',
    },
    {
      text: 'send / sand',
      options: ['send', 'sand'],
      answer: 'sand',
      note: 'You heard “sand”: open /æ/. Think of desert sand: open your mouth wide.',
    },
    {
      text: 'celery / salary',
      options: ['celery', 'salary'],
      answer: 'salary',
      note: 'You heard “salary” /ˈsæləri/, the money you earn: open /æ/ in the stressed syllable. Celery is a vegetable.',
    },
    {
      text: 'pet / pat',
      options: ['pet', 'pat'],
      answer: 'pet',
      note: 'You heard “pet”: /e/. A favourite Part 1 topic: “Do you have a pet?”',
    },
    {
      text: 'lend / land',
      options: ['lend', 'land'],
      answer: 'land',
      note: 'You heard “land”: open /æ/.',
    },
    {
      text: 'dead / dad',
      options: ['dead', 'dad'],
      answer: 'dead',
      note: 'You heard “dead”: /e/. Mixing these two can cause real confusion.',
    },
    {
      text: 'guess / gas',
      options: ['guess', 'gas'],
      answer: 'guess',
      note: 'You heard “guess” /ɡes/: /e/, and the u is silent.',
    },
  ],
})
