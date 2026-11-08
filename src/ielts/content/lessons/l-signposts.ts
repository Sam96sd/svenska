import { defineLesson } from '../define'

export default defineLesson({
  id: 'l-signposts',
  skill: 'listening',
  module: 'both',
  order: 2,
  title: 'Follow the signposts',
  summary:
    'Recognise the phrases speakers use in Parts 2 and 4 to show that a new point, and the next answer, is coming.',
  types: ['signposting'],
  minutes: 8,
  sections: [
    {
      kind: 'text',
      heading: 'What signposts do',
      paragraphs: [
        'In Parts 2 and 4 one person speaks for several minutes: a guide, a manager or a lecturer. To help listeners, speakers organise their talk with **signposts**: short phrases that announce a new section, the next point, a reason, a contrast or the end.',
        'Signposts are your map. When you hear “Moving on to…”, the speaker is about to reach the next heading on your question paper. When you hear “The main reason is…”, the answer to a “why” question is a second away. If you lose your place, a signpost is the quickest way to find it again.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Signposts to listen for',
      items: [
        {
          phrase: 'Let me start with… / First of all…',
          use: 'The first point: the first answer is close.',
        },
        {
          phrase: 'Moving on to… / Turning now to…',
          use: 'A new section: look at the next heading in your notes.',
        },
        {
          phrase: 'The main reason is… / This is because…',
          use: 'A reason or cause follows, often the answer to a “why” question.',
        },
        {
          phrase: 'Another point… / A second advantage…',
          use: 'The next item in a list: move to the next gap.',
        },
        {
          phrase: 'However… / In contrast… / On the other hand…',
          use: 'The opposite idea: what came before may be the distractor.',
        },
        {
          phrase: 'What this means is… / In other words…',
          use: 'The speaker repeats the idea more simply: a second chance to catch an answer.',
        },
        {
          phrase: 'For example… / Take… for instance',
          use: 'An example, which is usually not the answer to a general gap.',
        },
        {
          phrase: 'Finally… / To sum up…',
          use: 'The last section: the last few answers are coming.',
        },
      ],
    },
    {
      kind: 'steps',
      heading: 'Using signposts while you listen',
      items: [
        'During the reading time, notice how the questions are organised: headings, numbered stages, or a list of places on a map.',
        'Match each heading to the signpost you expect: “Benefits” → “Moving on to the benefits”, “Problems” → “Now, the drawbacks”.',
        'When you hear a signpost, move your eyes to the matching heading even if you have not finished the previous gap.',
        'After the signpost, listen for the key word or a synonym of it, then write the answer.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: a museum guide',
      context:
        'Notes:\nFirst floor: the (5) ______ collection\nSecond floor: closed because of (6) ______\n\nRecording: “Let me start with the first floor, which is home to our textile collection, the largest in the region. Moving on to the second floor, I’m afraid that’s closed at the moment. The main reason is a leak in the roof, which we hope to fix by the summer.”',
      question: 'Complete gaps 5 and 6 (ONE WORD ONLY).',
      answer: '5 textile  6 (a) leak',
      reasoning: [
        '“Let me start with the first floor” matches the first heading, so the next noun phrase about the floor is likely to be the answer: “textile collection”.',
        '“Moving on to the second floor” tells you to jump to gap 6 straight away.',
        '“The main reason is…” introduces the cause, so “because of” in the notes is answered by “a leak”. “Roof” is where the leak is, not the reason.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Signpost type and what comes next',
      headers: ['You hear', 'What follows', 'What to do'],
      rows: [
        ['Moving on to…', 'a new section', 'jump to the next heading'],
        ['The main reason…', 'a cause or purpose', 'get ready for a “why” or “because of” gap'],
        ['However… / But…', 'a contrast', 'cross out the idea that came before'],
        ['For example…', 'a specific case', 'only write it if the gap asks for an example'],
        ['Finally…', 'the last point', 'check which questions are still left'],
      ],
    },
    {
      kind: 'trap',
      text: 'Do not stop listening while you are still writing. If the speaker says “Another point…” and you are still on the previous gap, leave it, move on and come back to it at the end. One missed gap is far better than losing your place for the next three.',
    },
    {
      kind: 'tip',
      text: 'Lecturers often name the structure at the start (“I’ll look at three causes and then two solutions”). Count them off on your notes as you hear them: it tells you exactly where you are.',
    },
  ],
  drills: ['drill-lecture-notes'],
})
