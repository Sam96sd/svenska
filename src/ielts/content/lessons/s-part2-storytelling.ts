import { defineLesson } from '../define'

export default defineLesson({
  id: 's-part2-storytelling',
  skill: 'speaking',
  module: 'both',
  order: 5,
  title: 'Part 2: planning and telling a story',
  summary:
    'Use the one-minute preparation for keywords, not sentences, and shape your two-minute talk like a story so it sounds natural rather than memorised.',
  types: ['part2'],
  minutes: 9,
  sections: [
    {
      kind: 'text',
      heading: 'Two minutes is a story, not a list',
      paragraphs: [
        'In Part 2 you get a cue card, **one minute to prepare** and up to **two minutes to speak**. Many candidates answer the bullet points one by one, like a form, and run out of things to say after a minute. Others recite a prepared speech that only loosely fits the card.',
        'The answer that works best is a **story**: a real (or realistic) event with a setting, a sequence of things that happened and a reflection at the end. Stories are easy to remember, naturally use a range of tenses and keep going for two minutes without effort.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Using the one-minute preparation',
      items: [
        '**Choose your story in the first ten seconds.** Pick the example you can say most about, not the most impressive one.',
        '**Write keywords, not sentences.** Six to ten words or short phrases are enough; you will not have time to read full sentences anyway.',
        '**Note one keyword per stage** of the story (setting, what happened, the turning point, the feeling, the reflection) rather than one per bullet.',
        '**Add two or three precise words** you want to use (e.g. *stranded*, *spontaneous*, *a turning point*), so your best vocabulary is ready.',
        '**Mark the “explain” point** with a star: it is the part examiners most often hear skipped.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Notes that help and notes that hurt',
      headers: ['Sentence notes (avoid)', 'Keyword notes (use)'],
      rows: [
        [
          'I went to my cousin’s wedding in the countryside last summer.',
          'cousin’s wedding — village — July',
        ],
        ['The car broke down and we were late.', 'car broke down — stranded — farmer’s tractor'],
        ['I felt very nervous because I had to give a speech.', 'speech — nerves — forgot notes'],
        ['I learned that plans do not always work.', '★ why: laughed afterwards — best memory'],
      ],
    },
    {
      kind: 'steps',
      heading: 'A story shape for two minutes',
      items: [
        '**Opening (10–15 seconds):** a direct first line that answers the card. “I’d like to talk about a time my plans fell apart completely, which was my cousin’s wedding last July.”',
        '**Setting (20 seconds):** when, where, who was there — past continuous works well here.',
        '**Events (40 seconds):** what happened, in order, with one or two vivid details.',
        '**Turning point (20 seconds):** the moment things changed, often introduced with “That’s when…” or “Funnily enough…”.',
        '**Reflection (20–30 seconds):** the “explain why” point — how you felt then and how you see it now. “Looking back…”',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: turning notes into an opening',
      context:
        'Cue card: “Describe a time when you had to change your plans at the last minute. You should say: what the plans were, why you had to change them, what you did instead, and explain how you felt about the change.” Notes: cousin’s wedding — village — July / car broke down — stranded — farmer’s tractor / ★ laughed — best memory.',
      question: 'Write the first 30 seconds of the talk from these notes.',
      answer:
        'I’d like to talk about the day my cousin got married, back in July, because almost nothing went to plan. The wedding was in a tiny village about two hours from the city, and the idea was that my brother and I would drive there in the morning and arrive with plenty of time to spare. We were about twenty minutes away, singing along to the radio, when the engine suddenly made a horrible noise and just died.',
      reasoning: [
        'The first sentence answers the card directly and previews the story, so the examiner knows where it is going.',
        'The setting comes from three keywords (cousin’s wedding — village — July), expanded naturally in speech.',
        '“The idea was that we would drive…” describes the original plan: the first bullet point, covered inside the story.',
        'The past continuous (“We were… singing along”) sets the scene for the sudden event in the past simple (“the engine… died”).',
        'Nothing here was memorised as sentences; the keywords act as signposts, and the language is produced fresh.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Storytelling language',
      items: [
        {
          phrase: 'I’d like to talk about… / The one that comes to mind is…',
          use: 'Opening line that answers the card.',
        },
        { phrase: 'It was back in… / This was a few years ago, when…', use: 'Setting the time.' },
        { phrase: 'That’s when… / All of a sudden, …', use: 'The turning point.' },
        { phrase: 'What I remember most is…', use: 'Highlighting a vivid detail.' },
        {
          phrase: 'Looking back, … / If it happened again, I’d…',
          use: 'Reflection: the “explain” point, with a chance for a conditional.',
        },
      ],
    },
    {
      kind: 'trap',
      text: '**The memorised speech.** Examiners hear the same prepared “favourite place” talk many times, and a talk that only loosely fits the card cannot be rated on its rehearsed language alone. Prepare stories you can **adapt** — one good travel story can answer cards about a journey, a problem, a surprise or a time you helped someone — but tell them fresh each time.',
    },
    {
      kind: 'tip',
      text: 'If you finish early, **keep going with the reflection**: how you feel about it now, what you would do differently, or whether it changed you. If the examiner stops you mid-sentence at two minutes, that is perfectly normal and does not cost marks.',
    },
  ],
  drills: [],
})
