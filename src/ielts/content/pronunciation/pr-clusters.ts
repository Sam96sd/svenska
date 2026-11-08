import { definePronSet } from '../define'

export default definePronSet({
  id: 'pr-clusters',
  focus: 'clusters',
  title: 'Consonant clusters without extra vowels',
  intro: [
    'An Arabic syllable does not start with two consonants, so many speakers add a vowel to break up English clusters: **before** the cluster (“istreet”, “ispring”) or **inside** it (“sitreet”, “sipring”). Extra vowels add syllables, change the rhythm and can make words hard to recognise.',
    'Practise by starting with the **s** alone and stretching it, then moving straight into the next consonant with no gap: sssss-treet. At the end of words, clusters like -xts and -nths are hard for everyone; say every consonant with no vowel between them, slowly at first.',
  ],
  quiz: 'listen-repeat',
  items: [
    {
      text: 'street',
      note: '/striːt/: one syllable, three consonants together. Not “istreet” or “sitreet”. Start with a long sss.',
    },
    {
      text: 'spring',
      note: '/sprɪŋ/: one syllable. Not “ispring” or “sipring”. Keep /p/ voiceless too: not “sbring”.',
    },
    {
      text: 'scream',
      note: '/skriːm/: one syllable. Go straight from /s/ to /k/ with no vowel: not “sikream”.',
    },
    {
      text: 'school',
      note: '/skuːl/: one syllable. Not “iskool”. The ch is a /k/ sound.',
    },
    {
      text: 'student',
      note: '/ˈstjuːdnt/: two syllables, STU-dent. Not “istudent”. The British /stj/ has a light “y” after the t.',
    },
    {
      text: 'sport',
      note: '/spɔːt/: one syllable, no vowel before the s. The r is silent in British English.',
    },
    {
      text: 'split',
      note: '/splɪt/: one syllable. Three consonants /spl/ before the vowel, with no “i” anywhere among them.',
    },
    {
      text: 'texts',
      note: '/teksts/: one syllable ending in four consonants. Not “tekses” or “tekists”. In fast speech many speakers say /teks/; that is fine, but never add a vowel.',
    },
    {
      text: 'months',
      note: '/mʌnθs/: one syllable. Not “monthes”. In natural speech the /θ/ is often very light: /mʌns/ is acceptable.',
    },
    {
      text: 'strengths',
      note: '/streŋθs/: one syllable with three consonants before the vowel and three after. Go slowly: str-e-ngths.',
    },
    {
      text: 'explained',
      note: '/ɪkˈspleɪnd/: two syllables, ex-PLAINED. Not “ekisplained” and not “explain-ed”.',
    },
    {
      text: 'asked',
      note: '/ɑːskt/: one syllable ending in three consonants. Not “ask-ed” or “askid”. In fast speech it is often /ɑːst/.',
    },
    {
      text: 'Students often struggle with stress before exams.',
      note: 'Three s-clusters: students, struggle, stress. No vowel before any of them. STUDENTS OFTEN STRUGGLE with STRESS before EXAMS.',
    },
    {
      text: 'I spent three months in Scotland.',
      note: 'spent /spent/, three /θriː/, months /mʌnθs/, Scotland /ˈskɒtlənd/. Link months_in: “mʌnθ-sɪn”.',
    },
    {
      text: 'She asked me to explain the texts again.',
      note: 'asked_me /ɑːskt mi/ (often /ɑːs mi/), explain /ɪkˈspleɪn/, texts_again: the final /s/ links to the vowel.',
    },
    {
      text: 'The first step is the hardest.',
      note: 'first_step: the /t/ of “first” usually disappears: /fɜːs step/. Still no vowel before /st/.',
    },
  ],
})
