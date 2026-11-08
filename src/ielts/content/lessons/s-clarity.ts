import { defineLesson } from '../define'

export default defineLesson({
  id: 's-clarity',
  skill: 'speaking',
  module: 'both',
  order: 6,
  title: 'Clarity over accent',
  summary:
    'What the Pronunciation criterion really rewards, and the four habits that make you easy to understand: word stress, sentence stress, chunking and clear endings.',
  types: ['pronunciation'],
  minutes: 9,
  sections: [
    {
      kind: 'text',
      heading: 'You do not need a British accent',
      paragraphs: [
        'The Pronunciation criterion is about **how easy you are to understand**, not about sounding like a native speaker. The Band 8 description says you are **easy to understand throughout**, use **rhythm, stress and intonation flexibly**, and that your **accent has minimal effect** on intelligibility. A clear Indian, Brazilian or Swedish accent can score Band 8 or 9.',
        'What lowers the score is anything that makes the listener work harder: stress on the wrong syllable, every word given equal weight, no pauses between ideas, or missing word endings that change the meaning. These are habits, and habits can be changed.',
      ],
    },
    {
      kind: 'compare',
      heading: 'What changes between bands',
      headers: ['Band 6', 'Band 7', 'Band 8'],
      rows: [
        [
          'Generally understood, but some words are mispronounced and clarity drops at times.',
          'Generally clear, with good use of features but occasional lapses.',
          'Easy to understand throughout; the accent has minimal effect.',
        ],
        [
          'Stress and intonation used with mixed control; some flat stretches.',
          'Mostly natural rhythm, a few flat or rushed sections.',
          'Flexible rhythm, stress and intonation sustained over long turns.',
        ],
        [
          'Endings such as -ed and -s sometimes dropped.',
          'Endings usually clear.',
          'Endings clear even in fast, connected speech.',
        ],
      ],
    },
    {
      kind: 'list',
      heading: '1. Word stress',
      items: [
        'Long words have one main stressed syllable, and getting it wrong can make a familiar word unrecognisable.',
        '**PHO**tograph → pho**TO**grapher → photo**GRA**phic: the stress moves as the word changes.',
        '**ECO**nomy → eco**NO**mic; **PO**litics → po**LI**tical; de**VE**lop → de**VE**lopment.',
        'Noun–verb pairs: a **RE**cord (noun) vs to re**CORD** (verb); a **PRE**sent vs to pre**SENT**.',
        '**COM**fortable has three syllables in natural speech (COMF-ta-ble), not four with stress on “-for-”.',
      ],
    },
    {
      kind: 'list',
      heading: '2. Sentence stress',
      items: [
        'Stress the **content words** (nouns, main verbs, adjectives, negatives) and let small words (a, the, of, to, was) become short and weak.',
        '“I **went** to the **market** to buy some **fruit**.” — three strong beats, not ten equal ones.',
        'Move the stress to show **contrast**: “I didn’t say **he** took it — I said he **borrowed** it.”',
        'Speaking with every word stressed equally sounds robotic and is surprisingly hard to follow.',
      ],
    },
    {
      kind: 'example',
      heading: '3. Chunking: a worked example',
      context:
        'A Part 3 answer, spoken without pauses: “I think the main reason people move to cities is that there are more jobs and the salaries are usually higher but the cost of living is also much higher so it is not always a better choice.”',
      question: 'Divide it into natural chunks and mark the stressed words.',
      answer:
        'I think the **main** reason | people move to **cities** | is that there are more **jobs** | and the salaries are usually **higher**. | But the **cost** of living | is also much higher, | so it’s **not** always | a **better** choice.',
      reasoning: [
        'A **chunk** is a group of words that belong together in meaning, said as one unit with a tiny pause after it.',
        'Each chunk has one main stressed word, usually the last content word or the newest piece of information.',
        'The longer pause at “higher. | But” signals a change of direction, so the listener can follow the argument.',
        'Contracting “it is” to “it’s” and keeping small words weak makes the rhythm natural.',
        'In the chunked version the voice falls at the end of each complete idea and rises slightly on “but”, giving the intonation the Band 8 description mentions.',
      ],
    },
    {
      kind: 'compare',
      heading: '4. Clear -ed and -s endings',
      headers: ['Ending', 'Sound', 'Examples'],
      rows: [
        [
          '-ed after voiceless sounds (p, k, s, sh, ch, f)',
          '/t/',
          'walked, stopped, watched, laughed',
        ],
        ['-ed after voiced sounds (most others)', '/d/', 'played, moved, opened, travelled'],
        ['-ed after t or d', '/ɪd/ (extra syllable)', 'wanted, decided, needed, started'],
        ['-s after voiceless sounds', '/s/', 'books, cats, shops, works'],
        ['-s after voiced sounds', '/z/', 'friends, plays, cities, lives'],
        [
          '-s after s, z, sh, ch, j sounds',
          '/ɪz/ (extra syllable)',
          'buses, watches, changes, oranges',
        ],
      ],
    },
    {
      kind: 'trap',
      text: '**Dropped endings change grammar.** “Yesterday I walk to work” and “my friend live there” sound like tense or agreement errors, so they affect Grammatical Range and Accuracy as well as Pronunciation. Never add an extra syllable either: “walked” is one syllable, not “walk-ed”.',
    },
    {
      kind: 'tip',
      text: '**Shadowing:** play 20 seconds of a podcast in English, then speak along with it, copying the chunks, stresses and rises and falls rather than the accent. Record yourself answering a Part 3 question afterwards and listen only for chunking and stress.',
    },
  ],
  drills: [],
})
