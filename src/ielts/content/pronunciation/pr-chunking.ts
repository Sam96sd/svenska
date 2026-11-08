import { definePronSet } from '../define'

export default definePronSet({
  id: 'pr-chunking',
  focus: 'sentence-stress',
  title: 'Chunking long answers',
  intro: [
    'In Speaking Parts 2 and 3 your sentences get longer. Fluent speakers do not pause after every word, and they do not rush the whole sentence in one breath. They speak in **thought groups**: short chunks of meaning, each with one main stress, and a tiny pause between them.',
    'Good places to pause: after a long subject, before a clause (who, where, that, because, although) and around linking phrases (on the other hand, in my opinion). **Never pause inside a chunk** such as “a small café” or “the right decision”.',
    'The notes show the chunks with |. Read the sentence aloud first, then listen and compare where you paused.',
  ],
  quiz: 'listen-repeat',
  items: [
    {
      text: "The place I'd like to describe is a small café near the university where I used to meet my friends after lectures.",
      note: "The place I'd like to describe | is a small café near the university | where I used to meet my friends | after lectures. The long subject is one chunk; pause before “is”.",
    },
    {
      text: 'One of the main reasons why young people move to big cities is that there are simply more job opportunities.',
      note: 'One of the main reasons | why young people move to big cities | is that there are simply | more job opportunities.',
    },
    {
      text: "Although I wasn't very keen on the idea at first, I eventually realised that it was the right decision.",
      note: "Although I wasn't very keen on the idea | at first, | I eventually realised | that it was the right decision. Pause at the comma, and let your voice rise slightly there to show you have not finished.",
    },
    {
      text: 'If governments invested more in public transport, fewer people would need to drive to work every day.',
      note: 'If governments invested more | in public transport, | fewer people would need | to drive to work every day.',
    },
    {
      text: 'I think the most memorable part of the trip was when we got lost in the old town and had to ask a local family for directions.',
      note: 'I think | the most memorable part of the trip | was when we got lost in the old town | and had to ask a local family | for directions.',
    },
    {
      text: 'On the one hand, working from home saves time; on the other hand, it can make people feel quite isolated.',
      note: 'On the one hand, | working from home saves time; | on the other hand, | it can make people feel quite isolated. Each linking phrase is its own short chunk.',
    },
    {
      text: "What surprised me most was how friendly everyone was, even though they didn't know who I was.",
      note: "What surprised me most | was how friendly everyone was, | even though they didn't know | who I was.",
    },
    {
      text: 'In my opinion, schools should spend less time on memorising facts and more time on teaching practical skills.',
      note: 'In my opinion, | schools should spend less time | on memorising facts | and more time | on teaching practical skills. Stress LESS and MORE: they are the contrast.',
    },
    {
      text: 'The person I admire most is my grandmother, who raised six children while running a small business.',
      note: 'The person I admire most | is my grandmother, | who raised six children | while running a small business.',
    },
    {
      text: "It's difficult to say for certain, but I suspect that within twenty years most cars will be electric.",
      note: "It's difficult to say for certain, | but I suspect | that within twenty years | most cars will be electric.",
    },
    {
      text: "Something I'd really like to learn in the future is how to cook traditional dishes from my region.",
      note: "Something I'd really like to learn in the future | is how to cook traditional dishes | from my region.",
    },
    {
      text: "Compared with my parents' generation, people today tend to change jobs far more often.",
      note: "Compared with my parents' generation, | people today | tend to change jobs | far more often.",
    },
  ],
})
