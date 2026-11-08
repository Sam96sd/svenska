import { defineLesson } from '../define'

export default defineLesson({
  id: 'r-match-features',
  skill: 'reading',
  module: 'both',
  order: 14,
  title: 'Matching features: people, dates and places',
  summary:
    'Find every mention of each name first, note what each person says, then match the paraphrased statements.',
  types: ['match-features'],
  minutes: 9,
  sections: [
    {
      kind: 'text',
      heading: 'What the examiner is testing',
      paragraphs: [
        'You match statements — opinions, findings, achievements, events — to a list of **people**, **dates**, **places** or **organisations**. The names are easy to find; the difficulty is that the statements are **paraphrased**, the questions are **not in text order**, and one person may be mentioned three times in different paragraphs.',
        'The instructions often say **“You may use any letter more than once”**. One researcher can match two statements, and another can match none. Unused names are deliberate distractors.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Option first, statement second',
      items: [
        'Scan the passage for **every** mention of each option and mark it with the option letter. Include surnames alone, pronouns (*she*, *his team*) and job titles (*the economist*).',
        'At each mention, read the sentence and note in 2–3 words what the person **says, finds, believes or does**: *“B: fear of traffic; cut speed”*.',
        'Read each statement and reduce it to a simple idea in your own words.',
        'Compare the idea with your notes. Match **meaning**, not words.',
        'Check the reporting verb: *argues*, *accepts*, *doubts*, *rejects*, *points out*. Does this person hold the view, or report someone else’s view?',
        'Make sure **every part** of the statement is supported. Half a match is a wrong answer.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example',
      context:
        'Professor Adeyemi believes that young children learn languages best through play. Her colleague Dr Varga agrees that play is useful but argues that, after the age of eight, direct teaching of grammar leads to faster progress. Varga also points out that most studies of play-based learning have involved fewer than thirty children.',
      question:
        'Match the statement with the correct person (A Professor Adeyemi, B Dr Varga): “Research on one teaching approach has been carried out with small groups.”',
      answer: 'B',
      reasoning: [
        'Mark every mention: Adeyemi once; Varga twice (“Dr Varga”, “Varga”). The answer is in the **second** mention — stopping at the first would miss it.',
        'Paraphrase: “research on one teaching approach” = “studies of play-based learning”; “small groups” = “fewer than thirty children”.',
        'The word *play* tempts you towards A, because Adeyemi is the person most linked to play. But she makes a claim **about play**, not about the research behind it.',
        '“Varga also points out” — the reporting verb shows that this is Varga’s own observation. Answer: **B**.',
      ],
    },
    {
      kind: 'compare',
      heading: 'How the statements trick you',
      headers: ['Trap', 'What it looks like', 'How to beat it'],
      rows: [
        [
          'Reported view',
          'Person X describes Y’s idea, then disagrees',
          'Ask: whose opinion is this? Check *accepts*, *rejects*, *claims*',
        ],
        [
          'Shared keyword',
          'A word from the statement appears beside the wrong name',
          'Match the whole idea, not one word',
        ],
        [
          'Later mention',
          'The answer is in the second or third mention of a name',
          'Mark every mention before you decide',
        ],
        [
          'Partial match',
          'The person says only half of the statement',
          'Every part of the statement must be supported',
        ],
      ],
    },
    {
      kind: 'trap',
      text: 'Assuming each name is used once. If the instructions allow reuse, two statements may belong to the same person — and a name you have not used may simply be a distractor. Don’t change a well-supported answer just to “use up” every option.',
    },
    {
      kind: 'tip',
      text: 'With **dates** as options, draw a quick timeline in the margin and write what happened at each point. With **places**, note what happened where. When the option list is short and the statements are long, going option → text → statement is usually faster than the reverse.',
    },
  ],
  drills: ['drill-match-features'],
})
