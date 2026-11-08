import { defineListening } from '../../define'

/** Original script. Part 3 style drill: every right option paraphrases the audio; wrong options repeat words heard. */
export default defineListening({
  id: 'drill-listen-paraphrase-mcq',
  skill: 'listening',
  part: 3,
  use: 'drill',
  title: 'Planning a presentation on food waste',
  topic: 'University life',
  context:
    'You will hear two students, Priya and Lucas, discussing a presentation about food waste in their university canteen. First, you have some time to look at questions 1 to 7.',
  speakers: [
    { id: 'priya', name: 'Priya', role: 'Student', gender: 'f', accent: 'en-GB' },
    { id: 'lucas', name: 'Lucas', role: 'Student', gender: 'm', accent: 'en-CA' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'priya',
      text: 'So, Lucas, we should probably start by agreeing why we picked food waste. Dr Ahmed suggested transport, didn’t she?',
    },
    {
      id: 'l2',
      speaker: 'lucas',
      text: 'She did, but neither of us was keen. I think the real reason was working in the campus café last summer. We watched trays of food go straight into the bin every day.',
    },
    {
      id: 'l3',
      speaker: 'priya',
      text: 'True. And at least there’s plenty of published research on it, so finding sources won’t be hard. Now, the survey. Were the results what you expected?',
    },
    {
      id: 'l4',
      speaker: 'lucas',
      text: 'Partly. I assumed the main complaint would be that portions are too big, and a few people did say that.',
    },
    { id: 'l5', speaker: 'priya', text: 'But?' },
    {
      id: 'l6',
      speaker: 'lucas',
      text: 'What I really didn’t see coming was how many leave food because they have to dash off to a lecture. Nearly half of them ticked that box.',
    },
    {
      id: 'l7',
      speaker: 'priya',
      text: 'That’s interesting. And we didn’t include anything about prices in the end, did we?',
    },
    {
      id: 'l8',
      speaker: 'lucas',
      text: 'No, the canteen manager asked us to leave that out. Speaking of her, I was expecting her to be quite defensive.',
    },
    {
      id: 'l9',
      speaker: 'priya',
      text: 'So was I, but she was really open and gave us all her records. And she’s clearly tried to tackle the problem herself. She switched to smaller plates last year.',
    },
    {
      id: 'l10',
      speaker: 'lucas',
      text: 'Right, and she didn’t blame the students at all. She said the kitchen cooks far more than it needs, just in case.',
    },
    {
      id: 'l11',
      speaker: 'priya',
      text: 'Her figures were the bit that surprised me. I’d have guessed lunchtime, since it’s the busiest, and breakfast hardly produces any waste.',
    },
    {
      id: 'l12',
      speaker: 'lucas',
      text: 'But most of it actually goes in the bin after the evening service, when the hot counter closes.',
    },
    {
      id: 'l13',
      speaker: 'priya',
      text: 'Exactly. So, recommendations. Donating leftovers to the food bank is a lovely idea, but it only deals with food that’s never served.',
    },
    { id: 'l14', speaker: 'lucas', text: 'What about cheaper half portions?' },
    {
      id: 'l15',
      speaker: 'priya',
      text: 'Students would probably just buy two. Honestly, I think what would change behaviour most is a weekly figure on a board by the tills, showing how many kilos were thrown away.',
    },
    {
      id: 'l16',
      speaker: 'lucas',
      text: 'I like that. Now, the presentation itself. The slides are looking good, and people seemed interested when we mentioned the topic in the seminar.',
    },
    { id: 'l17', speaker: 'priya', text: 'So what’s bothering you?' },
    {
      id: 'l18',
      speaker: 'lucas',
      text: 'Simply that we’ve collected more figures than we could possibly cover in ten minutes. We’ll have to cut some.',
    },
    {
      id: 'l19',
      speaker: 'priya',
      text: 'Agreed. Should I email the manager again and ask for more detail?',
    },
    {
      id: 'l20',
      speaker: 'lucas',
      text: 'No need, she sent us everything. And it’s too late to change the questionnaire now.',
    },
    {
      id: 'l21',
      speaker: 'priya',
      text: 'True. Then I’ll go back through the survey totals tonight, because a couple of them didn’t seem to add up.',
    },
  ],
  groups: [
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B or C.',
      questions: [
        {
          n: 1,
          prompt: 'Why did the students choose food waste as their topic?',
          options: [
            { key: 'A', text: 'Their tutor recommended it.' },
            { key: 'B', text: 'They had seen the problem for themselves.' },
            { key: 'C', text: 'Little research has been done on it.' },
          ],
          answer: 'B',
          location: {
            ref: 'l2',
            quote: 'We watched trays of food go straight into the bin every day.',
          },
          explanation:
            '“Seen the problem for themselves” paraphrases working in the café and watching food “go straight into the bin”.',
          traps: {
            A: 'Dr Ahmed suggested transport, not food waste, and the students were not keen on it.',
            C: 'Priya says the opposite: there is “plenty of published research”.',
          },
        },
        {
          n: 2,
          prompt: 'What surprised Lucas about the survey results?',
          options: [
            { key: 'A', text: 'the number of students who said portions were too large' },
            {
              key: 'B',
              text: 'the number of students who leave food because they are short of time',
            },
            { key: 'C', text: 'the number of students who were unhappy with prices' },
          ],
          answer: 'B',
          location: {
            ref: 'l6',
            quote: 'how many leave food because they have to dash off to a lecture',
          },
          explanation: '“Didn’t see coming” = surprised; “dash off to a lecture” = short of time.',
          traps: {
            A: 'Large portions were what Lucas expected (“I assumed”), so they did not surprise him.',
            C: 'Prices were left out of the survey, so there are no results about them.',
          },
        },
        {
          n: 3,
          prompt: 'What do the students say about the canteen manager?',
          options: [
            { key: 'A', text: 'She was unwilling to share information.' },
            { key: 'B', text: 'She has already taken action on the problem.' },
            { key: 'C', text: 'She holds students mainly responsible for the waste.' },
          ],
          answer: 'B',
          location: {
            ref: 'l9',
            quote: 'she’s clearly tried to tackle the problem herself',
          },
          explanation:
            '“Taken action” paraphrases “tried to tackle the problem”, and the smaller plates are the example.',
          traps: {
            A: 'They expected her to be “defensive”, but she was “really open” and gave them all her records.',
            C: 'She “didn’t blame the students at all”; she blamed the kitchen for cooking too much.',
          },
        },
        {
          n: 4,
          prompt: 'According to the manager’s records, when is most food thrown away?',
          options: [
            { key: 'A', text: 'after breakfast' },
            { key: 'B', text: 'after lunch' },
            { key: 'C', text: 'at the end of the day' },
          ],
          answer: 'C',
          location: {
            ref: 'l12',
            quote: 'most of it actually goes in the bin after the evening service',
          },
          explanation:
            '“After the evening service, when the hot counter closes” = at the end of the day.',
          traps: {
            A: 'Breakfast “hardly produces any waste”.',
            B: 'Lunchtime was Priya’s guess because it is the busiest, but the figures showed otherwise.',
          },
        },
        {
          n: 5,
          prompt: 'Which idea does Priya think would be most effective?',
          options: [
            { key: 'A', text: 'giving unsold food to a charity' },
            { key: 'B', text: 'selling smaller meals at a lower price' },
            { key: 'C', text: 'making public how much food is wasted' },
          ],
          answer: 'C',
          location: {
            ref: 'l15',
            quote:
              'a weekly figure on a board by the tills, showing how many kilos were thrown away',
          },
          explanation:
            '“Would change behaviour most” = most effective; a figure on a board by the tills = making the amount of waste public.',
          traps: {
            A: 'The food bank is “a lovely idea”, but Priya says it only deals with food that is never served.',
            B: 'Half portions are Lucas’s idea, and Priya rejects it: students “would probably just buy two”.',
          },
        },
        {
          n: 6,
          prompt: 'What is Lucas’s main concern about the presentation?',
          options: [
            { key: 'A', text: 'The audience may not find the topic interesting.' },
            { key: 'B', text: 'The slides are not ready yet.' },
            { key: 'C', text: 'They have too much data for the time allowed.' },
          ],
          answer: 'C',
          location: {
            ref: 'l18',
            quote: 'we’ve collected more figures than we could possibly cover in ten minutes',
          },
          explanation:
            '“More figures than we could possibly cover in ten minutes” = too much data for the time allowed.',
          traps: {
            A: 'People “seemed interested” in the seminar, so this is not his worry.',
            B: 'The slides “are looking good”.',
          },
        },
        {
          n: 7,
          prompt: 'What will Priya do next?',
          options: [
            { key: 'A', text: 'contact the canteen manager again' },
            { key: 'B', text: 'make changes to the questionnaire' },
            { key: 'C', text: 'check some of the survey figures' },
          ],
          answer: 'C',
          location: { ref: 'l21', quote: 'I’ll go back through the survey totals tonight' },
          explanation:
            '“Go back through the survey totals” because they “didn’t seem to add up” = check some of the figures.',
          traps: {
            A: 'Priya offers to email the manager, but Lucas says there is no need.',
            B: 'Lucas says it is “too late to change the questionnaire”.',
          },
        },
      ],
    },
  ],
})
