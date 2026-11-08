import { defineLesson } from '../define'

export default defineLesson({
  id: 'w-t2-essay-types',
  skill: 'writing',
  module: 'both',
  order: 10,
  title: 'The five Task 2 essay types',
  summary:
    'Recognise each essay type from its wording, count the parts of the question, and use a paragraph plan that answers every part.',
  types: ['opinion', 'discussion', 'adv-disadv', 'problem-solution', 'two-part'],
  minutes: 9,
  sections: [
    {
      kind: 'text',
      heading: 'Why the type matters',
      paragraphs: [
        'Task Response asks whether you have answered **every part of the question**. Most essays that stall at Band 6 are not badly written; they answer a slightly different question from the one on the paper — a balanced discussion when an opinion was asked for, or causes when solutions were asked for.',
        'There are five common types. Each has typical wording, a fixed number of parts, and a paragraph plan that covers those parts with nothing missing and nothing extra.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Recognising the type',
      headers: ['Type', 'Typical wording', 'Parts to answer'],
      rows: [
        [
          'Opinion',
          'To what extent do you agree or disagree? / Do you agree or disagree?',
          '1: your position on the statement, and how strongly you hold it.',
        ],
        [
          'Discussion',
          'Discuss both these views and give your own opinion.',
          '3: view A, view B, your opinion.',
        ],
        [
          'Advantages / disadvantages',
          'Do the advantages outweigh the disadvantages? / Discuss the advantages and disadvantages.',
          '“Outweigh”: 2 sides plus your judgement. “Discuss”: 2 sides (an opinion is optional).',
        ],
        [
          'Problem / solution',
          'What problems does this cause? What solutions can you suggest? (or causes + solutions)',
          '2: the problems (or causes), and the solutions.',
        ],
        [
          'Two-part (direct questions)',
          'Why is this happening? Is this a positive or negative development?',
          '2: one answer to each question, each given equal weight.',
        ],
      ],
    },
    {
      kind: 'steps',
      heading: 'Counting the parts',
      items: [
        '**Underline every question mark and every instruction verb** (discuss, give, suggest, explain).',
        '**Split on “and”.** “Discuss both views and give your opinion” is not one task but three.',
        '**Watch for evaluation words:** outweigh, positive or negative, to what extent. Each one means you must **judge**, not just describe, so you need a clear position.',
        '**Check the exact focus.** “Causes” are not “effects”; “for society” is not “for individuals”; “in your country” must be answered for your country.',
        '**Write the parts down** as a numbered list on the question paper and tick them off as you plan.',
      ],
    },
    {
      kind: 'compare',
      heading: 'A paragraph plan for each type',
      headers: ['Type', 'Introduction', 'Body paragraphs', 'Conclusion'],
      rows: [
        [
          'Opinion',
          'Paraphrase + your position (e.g. largely agree).',
          'B1: main reason for your view. B2: second reason, or the opposing view and why it is weaker.',
          'Restate your position.',
        ],
        [
          'Discussion',
          'Paraphrase both views + which you favour.',
          'B1: view A, developed fairly. B2: view B (often the one you support) + your reasons.',
          'Restate your opinion.',
        ],
        [
          'Advantages / disadvantages (outweigh)',
          'Paraphrase + which side outweighs.',
          'B1: the weaker side. B2: the stronger side, and why it matters more.',
          'Restate your judgement.',
        ],
        [
          'Problem / solution',
          'Paraphrase + preview of the main problem and solution.',
          'B1: one or two problems, developed. B2: solutions that match those problems.',
          'Summarise the main problem and solution.',
        ],
        [
          'Two-part',
          'Paraphrase + a short answer to both questions.',
          'B1: answer to question 1. B2: answer to question 2 (with your view if it asks for one).',
          'Restate both answers in one or two sentences.',
        ],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: analysing a prompt',
      context:
        '“In many countries, young adults are leaving rural areas to live in large cities. Why is this happening? Do the benefits of this trend outweigh the drawbacks?”',
      question:
        'Which type is this, how many parts does it have, and how would you plan the body paragraphs?',
      answer:
        'A two-part question with two parts: (1) the causes of the move to cities, and (2) a judgement on whether the benefits outweigh the drawbacks. B1: one main cause, developed fully (e.g. the concentration of skilled jobs and universities in cities). B2: a clear judgement, e.g. the benefits for the individual outweigh the drawbacks, despite the loss of young people from rural communities.',
      reasoning: [
        'There are two question marks, so there are at least two parts.',
        'The second question contains **outweigh**, so it needs a judgement, not just a list of pros and cons.',
        'Part 1 asks “why”: causes only. Writing about effects here would be off-task.',
        'Because part 2 requires a judgement, the position appears in the introduction and is restated in the conclusion.',
        'Each body paragraph answers one question, so the examiner can see at a glance that both parts are covered.',
      ],
    },
    {
      kind: 'trap',
      text: '**The balanced essay that never decides.** For “To what extent do you agree?”, a neat “on the one hand… on the other hand…” essay with the opinion hidden in the last line keeps Task Response at 6. State your position in the introduction and keep it the same to the end. Partial agreement is fine — as long as it is clear.',
    },
    {
      kind: 'tip',
      text: 'In problem–solution essays, **match every solution to a problem** you described. A solution to a problem you never mentioned looks random; a solution that answers the exact problem in Body 1 looks planned.',
    },
  ],
  drills: [],
})
