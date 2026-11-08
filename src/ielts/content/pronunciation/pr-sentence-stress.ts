import { definePronSet } from '../define'

export default definePronSet({
  id: 'pr-sentence-stress',
  focus: 'sentence-stress',
  title: 'Sentence stress in IELTS answers',
  intro: [
    'English has a strong beat. **Content words** (nouns, main verbs, adjectives, adverbs, negatives) are stressed; **grammar words** (the, a, of, to, for, is, can) are short and weak. If every word gets equal weight, you sound flat and are harder to follow.',
    'In the notes, stressed words are in CAPITALS and | marks a short pause between chunks. Listen, record yourself, then compare the beat, not just the sounds. Words that show a **contrast** (not ME, EASIER not HARDER) get extra stress.',
  ],
  quiz: 'listen-repeat',
  items: [
    {
      text: "I've lived in the same town for most of my life.",
      note: "I've LIVED in the same TOWN | for MOST of my LIFE. Keep “in the”, “for” and “of my” light and quick.",
    },
    {
      text: "To be honest, I'm not really a morning person.",
      note: "To be HONEST, | I'm NOT really a MORNING person. The negative NOT is stressed; “morning person” is stressed on MORNING.",
    },
    {
      text: 'It depends on the kind of film, but I usually prefer comedies.',
      note: 'It DEPENDS on the KIND of film, | but I USUALLY prefer COMEDIES.',
    },
    {
      text: 'I study at a local college about twenty minutes from home.',
      note: 'I STUDY | at a LOCAL COLLEGE | about TWENTY MINUTES from HOME. “At a” is weak: /ət ə/.',
    },
    {
      text: 'The main reason is that it saves a lot of time.',
      note: 'The MAIN REASON | is that it SAVES a LOT of TIME. “Is that it” runs together quickly.',
    },
    {
      text: "I didn't enjoy it at first, but now I love it.",
      note: "I DIDN'T enjoy it at FIRST, | but NOW I LOVE it. NOW and LOVE are stressed to show the change.",
    },
    {
      text: "I'd say that technology has made our lives easier, not harder.",
      note: "I'd SAY | that TECHNOLOGY has made our LIVES EASIER, | not HARDER. EASIER and HARDER carry the contrast.",
    },
    {
      text: 'In my country, family meals are really important.',
      note: 'In my COUNTRY, | FAMILY MEALS are REALLY IMPORTANT. Remember: imPORtant.',
    },
    {
      text: 'I prefer to read the news online rather than in a newspaper.',
      note: 'I PREFER to READ the NEWS ONLINE | rather than in a NEWSPAPER. “Rather than in a” is one quick, weak stretch.',
    },
    {
      text: "If I had more free time, I'd learn to play the guitar.",
      note: "If I HAD more FREE TIME, | I'd LEARN to play the GUITAR. “To” is weak: /tə/.",
    },
    {
      text: 'Actually, it was my brother who suggested it, not me.',
      note: 'ACTUALLY, | it was my BROTHER who SUGGESTED it, | not ME. ME is normally weak, but here it shows a contrast.',
    },
    {
      text: 'What I like most about my job is the people I work with.',
      note: 'What I LIKE MOST about my JOB | is the PEOPLE I WORK with. Do not stress “with” at the end.',
    },
    {
      text: "That's an interesting question. I've never really thought about it.",
      note: "That's an INTERESTING QUESTION. | I've NEVER REALLY THOUGHT about it. “About it” is unstressed and linked: /əˈbaʊtɪt/.",
    },
  ],
})
