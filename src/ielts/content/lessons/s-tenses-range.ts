import { defineLesson } from '../define'

export default defineLesson({
  id: 's-tenses-range',
  skill: 'speaking',
  module: 'both',
  order: 4,
  title: 'Mixing tenses for grammatical range',
  summary:
    'Use past simple for stories, present perfect for experience, used to and would for past habits, and conditionals for hypotheticals — accurately and naturally.',
  types: ['part1', 'part2', 'part3'],
  minutes: 9,
  sections: [
    {
      kind: 'text',
      heading: 'Range comes from the questions',
      paragraphs: [
        'Grammatical Range and Accuracy at Band 8 asks for **a wide range of structures used flexibly**, with most sentences error-free. You do not need to force rare grammar into your answers: the questions themselves invite different tenses. A question about childhood calls for past habits; a question about the future calls for prediction; “What would you do if…?” calls for a conditional.',
        'The skill is to **notice the time frame** of each question and to **switch tenses** naturally inside one answer — present for now, past for the story, present perfect for your experience up to now.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Which tense, when',
      headers: ['Structure', 'Use it for', 'Example'],
      rows: [
        [
          'Past simple',
          'Finished events and stories with a time',
          'We missed the last ferry, so we spent the night in the car.',
        ],
        [
          'Past continuous',
          'Background to a story',
          'I was waiting for a bus when it started to snow.',
        ],
        [
          'Present perfect',
          'Experience up to now, no specific time',
          'I’ve been to that festival three times, and it’s never been the same twice.',
        ],
        [
          'used to / would',
          'Past habits that have stopped (would: actions only)',
          'We used to live by the river, and every summer we’d swim there after school.',
        ],
        [
          'Second conditional',
          'Imagined present or future situations',
          'If I had more free time, I’d probably take up the guitar again.',
        ],
        [
          'Third conditional',
          'Imagined past: regret or relief',
          'If I hadn’t taken that job, I’d never have met my best friend.',
        ],
        [
          'Future forms',
          'Predictions and plans',
          'I think more people will work part-time; I’m going to start a course in May.',
        ],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: Part 1',
      context:
        'Examiner: “Did you play any sports when you were a child?” Candidate: “Yes, I play football every day with my friends. It is very fun.”',
      question: 'Correct the tense errors and add range.',
      answer:
        'Yes, loads. I used to play football with the kids on my street almost every evening — we’d use two schoolbags as goalposts. I haven’t played properly for years, though. If there were a team near my office, I’d probably join.',
      reasoning: [
        'The question is about the past, so “I play” is wrong: **used to** expresses a past habit that has stopped.',
        '**Would** (“we’d use”) describes a repeated past action. It cannot be used for states: “I would live there” is wrong; “I used to live there” is right.',
        'The **present perfect** (“I haven’t played properly for years”) links the past to now.',
        'A **second conditional** (“If there were…, I’d…”) adds a hypothetical without sounding forced.',
        'Four structures in three sentences, all accurate and all natural answers to the question.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: Part 3',
      context: 'Examiner: “How has the way people shop changed in your country?”',
      question:
        'Which tenses does this question invite, and what might a strong answer sound like?',
      answer:
        'It’s changed enormously. When my parents were young, people would go to the local market a few times a week and buy only what they needed. Over the last ten years or so, online shopping has taken over for a lot of things, especially clothes and electronics. If that continues, I think many small shops will struggle to survive, unless they offer something you can’t get online.',
      reasoning: [
        '“How has… changed” invites the **present perfect** to open (“It’s changed enormously”).',
        'The comparison with the past uses **would** for past habits (“people would go to the local market”).',
        '“Over the last ten years” is an unfinished time period, so the present perfect again (“has taken over”).',
        'A **first conditional** and **future prediction** (“If that continues, … will struggle”) finish the answer by looking ahead.',
      ],
    },
    {
      kind: 'list',
      heading: 'Common tense errors to fix',
      items: [
        '**Present perfect with a finished time:** “I have visited Rome last year” → “I visited Rome last year”.',
        '**used to vs be used to:** “I used to wake up early” (past habit) is different from “I’m used to waking up early” (it is normal for me now).',
        '**would for states:** “I would have a dog when I was young” → “I used to have a dog”.',
        '**will in the if-clause:** “If it will rain, …” → “If it rains, …”.',
        '**Story tenses drifting into the present:** keep Part 2 stories in the past once you have started them there.',
      ],
    },
    {
      kind: 'trap',
      text: '**Forcing complex grammar.** “Had I been knowing that, I would have been going” is not range; it is a string of errors. Accuracy and range are judged together, so use a structure only when you can produce it correctly and it fits the meaning.',
    },
    {
      kind: 'tip',
      text: 'Listen to the **tense of the question** and answer in it first: “Have you ever…?” → “Yes, I have, a couple of times.” Then switch to the past simple for the details: “The last time was in March, when…”.',
    },
  ],
  drills: [],
})
