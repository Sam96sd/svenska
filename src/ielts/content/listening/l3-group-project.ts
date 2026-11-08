import { defineListening } from '../define'

/** Original script. Part 3 style: two students and their tutor discuss a research project on food waste in the university canteen. */
export default defineListening({
  id: 'l3-group-project',
  skill: 'listening',
  part: 3,
  use: 'practice',
  title: 'A research project on canteen food waste',
  topic: 'University study',
  context:
    'You will hear two students, Priya and Jake, talking to their tutor, Dr Kelly, about a research project on food waste in their university canteen. First, you have some time to look at questions 1 to 4.',
  speakers: [
    { id: 'kelly', name: 'Dr Kelly', role: 'Tutor', gender: 'f', accent: 'en-IE' },
    { id: 'priya', name: 'Priya', role: 'Student', gender: 'f', accent: 'en-GB' },
    { id: 'jake', name: 'Jake', role: 'Student', gender: 'm', accent: 'en-US' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'kelly',
      text: 'Come in, both of you. So, this is our last meeting before you write up the food waste project. How are things going?',
    },
    {
      id: 'l2',
      speaker: 'priya',
      text: 'Pretty well, I think. We’ve finished collecting the data, and we’ve started looking at the results.',
    },
    {
      id: 'l3',
      speaker: 'kelly',
      text: 'Good. Remind me first how you settled on this topic. I know it was on my list of suggestions.',
    },
    {
      id: 'l4',
      speaker: 'jake',
      text: 'It was, but we’d actually decided before we saw the list. I was working part-time in the canteen last semester, and I kept watching whole plates of food get scraped straight into the trash.',
    },
    {
      id: 'l5',
      speaker: 'priya',
      text: 'And then we looked into what had been done already. There’s quite a lot of national research, so it’s hardly a neglected area. But nobody had looked at our canteen.',
    },
    {
      id: 'l6',
      speaker: 'kelly',
      text: 'And how did you measure the waste in the end? Last time we spoke, you were planning to weigh the bins.',
    },
    {
      id: 'l7',
      speaker: 'jake',
      text: 'Right, that was the plan. But it turned out the kitchen puts its own waste in the same bins, like peelings and stuff past its date, so the weights wouldn’t have told us anything about what students leave.',
    },
    {
      id: 'l8',
      speaker: 'priya',
      text: 'So we stood at the tray return and took a photo of every tray, then estimated how much of each item was left. We thought about a questionnaire as well, but people aren’t very honest about waste.',
    },
    { id: 'l9', speaker: 'kelly', text: 'Sensible. So what did you find?' },
    {
      id: 'l10',
      speaker: 'priya',
      text: 'Well, we expected vegetables to be the worst, and they were high, about a fifth of everything left. But the biggest single category was the bread roll that comes free with every soup.',
    },
    {
      id: 'l11',
      speaker: 'jake',
      text: 'Which honestly blew my mind. Almost half of those rolls went back untouched. People just take them because they’re there.',
    },
    {
      id: 'l12',
      speaker: 'kelly',
      text: 'That’s a striking result. How many trays did you photograph altogether?',
    },
    {
      id: 'l13',
      speaker: 'jake',
      text: 'Just over eight hundred. A few pictures were too blurry to use, but only about twenty.',
    },
    {
      id: 'l14',
      speaker: 'kelly',
      text: 'That’s a respectable number for a project like this, so I wouldn’t worry about the sample size, or a few bad photos. What does concern me is when you did it. That was the week before exams, wasn’t it?',
    },
    {
      id: 'l15',
      speaker: 'priya',
      text: 'Yes. It was the only week the catering manager would let us in.',
    },
    {
      id: 'l16',
      speaker: 'kelly',
      text: 'The trouble is that students eat very differently when they’re stressed and short of time. So your figures may not be typical of a normal week, and you’ll need to acknowledge that.',
    },
    {
      id: 'l17',
      speaker: 'kelly',
      text: 'Now, recommendations. What are you going to suggest to the canteen?',
    },
    {
      id: 'l18',
      speaker: 'jake',
      text: 'Our first idea was to start charging for the bread, even just a few pence. But when we mentioned it to some students, they just saw it as a price increase.',
    },
    {
      id: 'l19',
      speaker: 'priya',
      text: 'So instead we’re going to recommend offering a smaller portion of the main dishes at a lower price. Lots of people said the standard plate is too much for them.',
    },
    {
      id: 'l20',
      speaker: 'jake',
      text: 'And the other one is getting rid of trays altogether. There’s research from the States showing that when people have to carry their plates by hand, they take less and waste less.',
    },
    {
      id: 'l21',
      speaker: 'kelly',
      text: 'What about putting up posters showing how much food is thrown away each week? I’ve seen that done elsewhere.',
    },
    {
      id: 'l22',
      speaker: 'priya',
      text: 'We did talk about that, but the evidence for posters is pretty weak. People stop noticing them after a week or two, so we’ve left that out.',
    },
    {
      id: 'l23',
      speaker: 'jake',
      text: 'We also wanted the canteen to sell leftovers cheaply at the end of the day, but the manager said food safety regulations make that impossible for them.',
    },
    {
      id: 'l24',
      speaker: 'kelly',
      text: 'Fair enough. Now, the report itself. I’d like to see a proper section on limitations: the timing issue we discussed, and the fact that you were estimating from photos.',
    },
    {
      id: 'l25',
      speaker: 'priya',
      text: 'OK. We were also thinking of comparing our results with the figures from another university.',
    },
    {
      id: 'l26',
      speaker: 'kelly',
      text: 'I’d be careful there. Their method was quite different, so the comparison could be misleading.',
    },
    {
      id: 'l27',
      speaker: 'kelly',
      text: 'What would really strengthen the report is putting a cost on the waste. If you can tell the catering managers how much money is going in the bin each term, they’ll take it far more seriously.',
    },
    {
      id: 'l28',
      speaker: 'jake',
      text: 'We could work that out from the canteen’s price list.',
    },
    {
      id: 'l29',
      speaker: 'kelly',
      text: 'Exactly. But don’t add any more charts; you’ve got plenty already. And interviewing the kitchen staff is a nice idea, but you’d need ethics approval, and there isn’t time this term.',
    },
    {
      id: 'l30',
      speaker: 'kelly',
      text: 'So how are you going to divide up the writing?',
    },
    {
      id: 'l31',
      speaker: 'priya',
      text: 'I’ll do the literature review, since I’ve read most of the background studies already.',
    },
    {
      id: 'l32',
      speaker: 'jake',
      text: 'And I was going to write up the method section. But to be honest, Priya’s much better at that kind of detail than I am.',
    },
    {
      id: 'l33',
      speaker: 'priya',
      text: 'Fine, I’ll take the method as well. Then you can do the cost calculations, Jake, because you’re better with numbers.',
    },
    {
      id: 'l34',
      speaker: 'jake',
      text: 'Deal. And when it comes to presenting our findings to the catering manager, I think we should both go, so we can answer questions on every part.',
    },
    {
      id: 'l35',
      speaker: 'kelly',
      text: 'Good. Send me a draft by the end of the month.',
    },
  ],
  groups: [
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B or C.',
      questions: [
        {
          n: 1,
          prompt: 'Why did the students choose canteen food waste as their topic?',
          options: [
            { key: 'A', text: 'Their tutor recommended it to them.' },
            { key: 'B', text: 'One of them had seen the problem at first hand.' },
            { key: 'C', text: 'Very little research had been done on the subject.' },
          ],
          answer: 'B',
          location: {
            ref: 'l4',
            quote: 'I kept watching whole plates of food get scraped straight into the trash',
          },
          explanation:
            'Jake saw the waste himself while working in the canteen; that is how the idea started.',
          traps: {
            A: 'It was on the tutor’s list, but they had decided “before we saw the list”.',
            C: 'There is “quite a lot of national research”; only their own canteen had not been studied.',
          },
        },
        {
          n: 2,
          prompt: 'How did the students eventually measure the food that was left?',
          options: [
            { key: 'A', text: 'by weighing the canteen’s bins' },
            { key: 'B', text: 'by photographing what was left on trays' },
            { key: 'C', text: 'by asking diners to complete a questionnaire' },
          ],
          answer: 'B',
          location: { ref: 'l8', quote: 'took a photo of every tray' },
          explanation:
            'They photographed every tray at the tray return and estimated what was left.',
          traps: {
            A: 'Weighing the bins was the original plan, dropped because kitchen waste went in the same bins.',
            C: 'A questionnaire was considered but rejected because people are not honest about waste.',
          },
        },
        {
          n: 3,
          prompt: 'What did the students find most surprising?',
          options: [
            { key: 'A', text: 'the proportion of vegetables left uneaten' },
            { key: 'B', text: 'how much free food was thrown away' },
            { key: 'C', text: 'the number of people who chose soup' },
          ],
          answer: 'B',
          location: {
            ref: 'l10',
            quote: 'the biggest single category was the bread roll that comes free with every soup',
          },
          explanation:
            'The free bread roll was the biggest category of waste, which Jake says “blew my mind”.',
          traps: {
            A: 'They “expected” vegetables to be high, so that was not a surprise.',
            C: 'Soup is mentioned only because the roll comes with it; no figure for soup is given.',
          },
        },
        {
          n: 4,
          prompt: 'What is Dr Kelly’s main concern about the data?',
          options: [
            { key: 'A', text: 'The sample was too small.' },
            { key: 'B', text: 'It was collected at an untypical time.' },
            { key: 'C', text: 'Too many of the photographs were unclear.' },
          ],
          answer: 'B',
          location: { ref: 'l16', quote: 'your figures may not be typical of a normal week' },
          explanation:
            '“What does concern me is when you did it”: the week before exams, when students eat differently.',
          traps: {
            A: '“I wouldn’t worry about the sample size” — eight hundred trays is respectable.',
            C: 'Only about twenty photos were blurry, and she dismisses “a few bad photos”.',
          },
        },
      ],
    },
    {
      type: 'mcq-multi',
      instructions: 'Choose TWO letters, A–E.',
      questions: [
        {
          n: 5,
          n2: 6,
          prompt: 'Which TWO changes will the students recommend to the canteen?',
          options: [
            { key: 'A', text: 'introducing a charge for bread rolls' },
            { key: 'B', text: 'offering smaller meals for less money' },
            { key: 'C', text: 'removing trays from the canteen' },
            { key: 'D', text: 'displaying weekly figures for food waste' },
            { key: 'E', text: 'selling unsold food cheaply at closing time' },
          ],
          answers: ['B', 'C'],
          location: {
            ref: 'l19',
            quote: 'offering a smaller portion of the main dishes at a lower price',
          },
          explanation:
            'The two recommendations are smaller portions at a lower price (Priya) and “getting rid of trays altogether” (Jake).',
          traps: {
            A: 'Their “first idea”, dropped because students saw it as a price increase.',
            D: 'The tutor suggests posters, but the students have “left that out” because the evidence is weak.',
            E: 'Food safety regulations make selling leftovers impossible for the canteen.',
          },
        },
        {
          n: 7,
          n2: 8,
          prompt: 'Which TWO things does Dr Kelly advise the students to include in their report?',
          options: [
            { key: 'A', text: 'a discussion of the weaknesses of the study' },
            { key: 'B', text: 'a comparison with another university' },
            { key: 'C', text: 'an estimate of the financial cost of the waste' },
            { key: 'D', text: 'some additional charts' },
            { key: 'E', text: 'interviews with kitchen staff' },
          ],
          answers: ['A', 'C'],
          location: { ref: 'l24', quote: 'I’d like to see a proper section on limitations' },
          explanation:
            'A section on “limitations” = the weaknesses of the study; “putting a cost on the waste” = the financial cost.',
          traps: {
            B: 'The comparison “could be misleading” because the other university’s method was different.',
            D: '“Don’t add any more charts.”',
            E: 'A “nice idea”, but it needs ethics approval and there isn’t time.',
          },
        },
      ],
    },
    {
      type: 'match-features',
      instructions:
        'Who will do each of the following tasks? Write the correct letter, A, B or C, next to questions 9 and 10.',
      optionsTitle: 'People',
      options: [
        { key: 'A', text: 'Priya' },
        { key: 'B', text: 'Jake' },
        { key: 'C', text: 'both Priya and Jake' },
      ],
      reuse: true,
      questions: [
        {
          n: 9,
          prompt: 'writing the description of how the data was collected',
          answer: 'A',
          location: { ref: 'l33', quote: 'I’ll take the method as well' },
          explanation:
            'The method section describes how the data was collected. Jake “was going to” write it, but Priya takes it over.',
          traps: { B: 'Jake planned to write the method section but hands it to Priya.' },
        },
        {
          n: 10,
          prompt: 'reporting the results to the catering manager',
          answer: 'C',
          location: { ref: 'l34', quote: 'I think we should both go' },
          explanation:
            '“Presenting our findings to the catering manager” = reporting the results; Jake says they should both go.',
          traps: { B: 'Jake suggests it, but he wants them both to present.' },
        },
      ],
    },
  ],
})
