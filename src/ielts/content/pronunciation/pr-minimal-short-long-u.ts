import { definePronSet } from '../define'

export default definePronSet({
  id: 'pr-minimal-short-long-u',
  focus: 'minimal-pairs',
  title: 'Short /ʊ/ and long /uː/',
  intro: [
    'Like /ɪ/ and /iː/, these two vowels differ in **length and mouth shape**, not length alone. Arabic speakers often use one “u” sound for both, so “full” and “fool” sound the same.',
    '**/uː/** (fool): push your lips forward into a small, tight circle and hold the sound. **/ʊ/** (full): lips only loosely rounded, tongue relaxed, and the sound is short. Some pairs appear twice, with a different word spoken each time.',
  ],
  quiz: 'which-word',
  items: [
    {
      text: 'full / fool',
      options: ['full', 'fool'],
      answer: 'fool',
      note: 'You heard “fool”: long /uː/ with tightly rounded lips.',
    },
    {
      text: 'pull / pool',
      options: ['pull', 'pool'],
      answer: 'pull',
      note: 'You heard “pull”: short, relaxed /ʊ/. Also keep the aspirated /p/.',
    },
    {
      text: 'look / Luke',
      options: ['look', 'Luke'],
      answer: 'Luke',
      note: 'You heard “Luke” (a name): long /uː/.',
    },
    {
      text: 'would / wooed',
      options: ['would', 'wooed'],
      answer: 'would',
      note: 'You heard “would” /wʊd/: short /ʊ/. It sounds exactly like “wood”.',
    },
    {
      text: 'could / cooed',
      options: ['could', 'cooed'],
      answer: 'cooed',
      note: 'You heard “cooed” /kuːd/: long /uː/. The l in “could” is silent: /kʊd/.',
    },
    {
      text: "hood / who'd",
      options: ['hood', "who'd"],
      answer: "who'd",
      note: "You heard “who'd” (who would) /huːd/: long /uː/.",
    },
    {
      text: 'soot / suit',
      options: ['soot', 'suit'],
      answer: 'suit',
      note: 'You heard “suit” /suːt/: long /uː/. “Soot” is the black dust from a fire.',
    },
    {
      text: 'should / shooed',
      options: ['should', 'shooed'],
      answer: 'should',
      note: 'You heard “should” /ʃʊd/: short /ʊ/, silent l.',
    },
    {
      text: 'pulled / pooled',
      options: ['pulled', 'pooled'],
      answer: 'pooled',
      note: 'You heard “pooled” /puːld/: long /uː/, and the -ed is /d/.',
    },
    {
      text: 'full / fool',
      options: ['full', 'fool'],
      answer: 'full',
      note: 'You heard “full”: short /ʊ/, lips relaxed. “I’m full” after a meal.',
    },
    {
      text: 'pull / pool',
      options: ['pull', 'pool'],
      answer: 'pool',
      note: 'You heard “pool”: long /uː/. A swimming pool.',
    },
    {
      text: 'look / Luke',
      options: ['look', 'Luke'],
      answer: 'look',
      note: 'You heard “look” /lʊk/: short /ʊ/. Do not stretch it to “Luke”.',
    },
  ],
})
