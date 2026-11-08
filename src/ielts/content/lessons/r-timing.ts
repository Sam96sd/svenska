import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-timing',
  skill: 'reading',
  module: 'both',
  order: 30,
  title: 'Timing the Reading test',
  summary:
    'A 17 / 20 / 23-minute plan for the three sections, the 2-minute rule, and the order to tackle question types.',
  types: ['timing'],
  minutes: 7,
  sections: [
    {
      kind: 'text',
      heading: 'Sixty minutes, forty questions, no extra time',
      paragraphs: [
        'The Reading test is **60 minutes** for three sections and 40 questions. Unlike Listening, there is **no transfer time**: on paper, your answers must be on the answer sheet before the 60 minutes end; on computer, you type them straight in, so there is nothing to transfer.',
        'The sections get harder, so give later sections more time. Each question is worth one mark wherever it is — an easy mark in Section 1 counts exactly as much as a hard one in Section 3.',
      ],
    },
    {
      kind: 'steps',
      heading: 'The 60-minute plan',
      items: [
        '**Minutes 0–17: Section 1** (questions 1–13). Work quickly but accurately — these are your most reliable marks.',
        '**Minutes 17–37: Section 2** (questions 14–26). About 20 minutes.',
        '**Minutes 37–60: Section 3** (questions 27–40), the longest and hardest text. About 23 minutes, including 2 minutes at the end to return to flagged questions.',
        'Check the clock at each change of section. If you are more than 3 minutes behind, speed up on the next section rather than giving up a whole group of questions at the end.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Order inside a section',
      items: [
        'Spend 30 seconds looking at all the question groups and their types before you read.',
        'Skim the passage for 2–3 minutes for its structure. Do **not** read every word: careful reading comes later, only where the questions send you.',
        'If there are matching headings, do them early: reading for the main idea of each paragraph builds a map of the text.',
        'Next, do the groups that follow **text order** (completion, TRUE/FALSE/NOT GIVEN, multiple choice). They move you through the text in one direction.',
        'Leave the groups in **random order** — matching information and matching features — until last, when you already know where things are.',
      ],
    },
    {
      kind: 'tip',
      text: '**The 2-minute rule**: if one question has taken about 2 minutes and you still cannot decide, choose your best answer, **flag it** (circle the number on paper, use the flag/review button on computer) and move on. Never leave a blank — there is no penalty for a wrong answer.',
    },
    {
      kind: 'example',
      heading: 'Worked timing scenario',
      context:
        'It is minute 31. You are in Section 2 and have answered questions 14–22. Questions 23–26 are matching features. You have already spent 5 minutes on question 21, a YES/NO/NOT GIVEN statement, and you are still unsure whether the answer is NO or NOT GIVEN.',
      question: 'What should you do now?',
      answer: 'Guess question 21, flag it, finish 23–26 by about minute 37, then start Section 3.',
      reasoning: [
        'Your plan says Section 2 ends at minute 37, so 6 minutes remain for five questions — and four of them are still untouched.',
        'Question 21 is worth one mark, the same as each of 23–26. Five minutes on one mark has already cost you; another two could cost you three easy marks.',
        'Pick the better-supported answer now: if you cannot find a sentence that contradicts the statement, NOT GIVEN is usually the safer choice. Flag it.',
        'For 23–26, mark every mention of each name first, then match: four questions in about 5 minutes is realistic.',
        'If you finish Section 3 by minute 58, spend the last 2 minutes on the flagged question 21 with fresh eyes.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Paper vs computer',
      headers: ['', 'Paper-based', 'Computer-delivered'],
      rows: [
        [
          'Transferring answers',
          'write on the answer sheet within the 60 minutes — no extra time',
          'nothing to transfer: you type answers directly',
        ],
        [
          'Flagging',
          'circle the question number on the question paper',
          'flag the question and use the navigation bar to return',
        ],
        ['Marking the text', 'underline with a pencil', 'highlight tool and notes'],
        [
          'Spelling',
          'clear handwriting; capitals are acceptable',
          'a typing slip is a spelling mistake',
        ],
      ],
    },
    {
      kind: 'trap',
      text: 'Losing marks in the **last 2 minutes**. Use them to check, not to start a new question: no blanks, every answer within the word limit, spellings copied exactly, and — on paper — each answer next to the right question number.',
    },
  ],
  drills: [],
})
