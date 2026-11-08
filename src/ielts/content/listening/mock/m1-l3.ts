import { defineListening } from '../../define'

/** Original script. Mock test 1, Part 3: two students and their tutor discuss dissertation fieldwork on birdsong in the city (MCQ, choose two, matching). */
export default defineListening({
  id: 'm1-l3',
  skill: 'listening',
  part: 3,
  use: 'mock',
  title: 'A dissertation on urban birdsong',
  topic: 'University study',
  context:
    'You will hear two students, Megan and Tom, talking to their tutor, Dr Hartley, about their joint dissertation research on birds in the city. First, you have some time to look at questions 1 to 10.',
  speakers: [
    { id: 'hartley', name: 'Dr Hartley', role: 'Tutor', gender: 'm', accent: 'en-GB' },
    { id: 'megan', name: 'Megan', role: 'Student', gender: 'f', accent: 'en-AU' },
    { id: 'tom', name: 'Tom', role: 'Student', gender: 'm', accent: 'en-US' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'hartley',
      text: 'Come in, both of you. So, you’re about halfway through the fieldwork for the birdsong project?',
    },
    {
      id: 'l2',
      speaker: 'megan',
      text: 'That’s right. We’ve done three weeks of recordings, so it seemed a good moment to check in.',
    },
    {
      id: 'l3',
      speaker: 'hartley',
      text: 'Good. Before we look at the data, remind me how you came to this topic.',
    },
    {
      id: 'l4',
      speaker: 'tom',
      text: 'Well, I did read a newspaper piece about city birds singing louder than country birds, but honestly, that was after we’d already made up our minds.',
    },
    {
      id: 'l5',
      speaker: 'megan',
      text: 'It really started with that guest lecture in second year, the one on noise pollution. The speaker spent about ten minutes on birds, and we both came out wanting to know more.',
    },
    {
      id: 'l6',
      speaker: 'tom',
      text: 'People assume it’s because Megan’s apartment is right by the ring road, but she’d never even noticed the birds there.',
    },
    {
      id: 'l7',
      speaker: 'hartley',
      text: 'I see. And how’s the recording going? You borrowed the department’s equipment, didn’t you?',
    },
    {
      id: 'l8',
      speaker: 'tom',
      text: 'We did, and it didn’t cost us a thing, which was great. We were worried the batteries would die halfway through a session, but with the spare packs they’ve been fine.',
    },
    {
      id: 'l9',
      speaker: 'megan',
      text: 'The real headache was the microphones. On breezy mornings the wind noise drowned out half the songs, so most of the first week’s recordings were useless.',
    },
    {
      id: 'l10',
      speaker: 'tom',
      text: 'We’ve bought those furry covers for them now, and it’s made a huge difference.',
    },
    {
      id: 'l11',
      speaker: 'hartley',
      text: 'Good. Now, your sites. You’ve got six, haven’t you? Three parks next to main roads and three quiet sites away from traffic.',
    },
    {
      id: 'l12',
      speaker: 'megan',
      text: 'Yes. The quiet ones are two small parks and the old cemetery on Hill Street.',
    },
    {
      id: 'l13',
      speaker: 'hartley',
      text: 'Six is plenty for a project of this size, so I’m not worried about numbers. And you’re recording at the same times of day at every site, which is exactly right.',
    },
    {
      id: 'l14',
      speaker: 'hartley',
      text: 'What does concern me is the cemetery. It has far more old, tall trees than any of your parks. If the birds there sing differently, you won’t know whether it’s the quiet or the trees.',
    },
    {
      id: 'l15',
      speaker: 'tom',
      text: 'Huh. We hadn’t thought of that. Could we swap it for another park?',
    },
    {
      id: 'l16',
      speaker: 'hartley',
      text: 'That would be my advice, as long as you can find one with similar planting to the others.',
    },
    {
      id: 'l17',
      speaker: 'megan',
      text: 'The other thing is the dawn recordings. We have to be on site by half past four every morning, and to be honest, we’re both exhausted.',
    },
    {
      id: 'l18',
      speaker: 'tom',
      text: 'We wondered about doing the dawn sessions only on weekends.',
    },
    {
      id: 'l19',
      speaker: 'hartley',
      text: 'I’d avoid that. There’s much less traffic at weekends, so those recordings wouldn’t be comparable. And you can’t drop dawn altogether, because that’s when most of the singing happens.',
    },
    {
      id: 'l20',
      speaker: 'megan',
      text: 'OK, so what if we take turns? I do the dawn sessions on Mondays, Wednesdays and Fridays, and Tom does the other days.',
    },
    {
      id: 'l21',
      speaker: 'hartley',
      text: 'That sounds like a sensible compromise. Now, early results. Has anything come up that you didn’t expect?',
    },
    {
      id: 'l22',
      speaker: 'tom',
      text: 'Well, the great tits near the roads are singing at a higher pitch than the ones at the quiet sites. But we were expecting that; it’s all over the literature.',
    },
    {
      id: 'l23',
      speaker: 'megan',
      text: 'What we really didn’t see coming was the robins. At two of the roadside parks, they’re singing in the middle of the night, under the street lights.',
    },
    {
      id: 'l24',
      speaker: 'tom',
      text: 'And the other big surprise is how short the songs are near traffic. The blackbirds there sing in really brief bursts, about half the length of the songs at the quiet sites.',
    },
    {
      id: 'l25',
      speaker: 'hartley',
      text: 'Interesting. And the number of birds? Are the quiet sites busier?',
    },
    {
      id: 'l26',
      speaker: 'megan',
      text: 'The counts are almost identical, actually, which is what other studies have found, so no surprise there. We haven’t looked at the number of species yet. That’s next week’s job.',
    },
    {
      id: 'l27',
      speaker: 'hartley',
      text: 'Right. Let’s talk about the write-up. I’ve read the draft sections you sent me.',
    },
    {
      id: 'l28',
      speaker: 'hartley',
      text: 'Your introduction is fine as a sketch, but I wouldn’t polish it now. Leave it until everything else is done, because only then will you know exactly what you’re introducing.',
    },
    {
      id: 'l29',
      speaker: 'megan',
      text: 'We were worried the literature review was a bit thin. Should we add more references?',
    },
    {
      id: 'l30',
      speaker: 'hartley',
      text: 'No, you’ve got plenty. If anything, the problem is the opposite. It’s nearly four thousand words, so I’d cut it by about a third.',
    },
    {
      id: 'l31',
      speaker: 'tom',
      text: 'And the methods section? I thought that one was pretty solid.',
    },
    {
      id: 'l32',
      speaker: 'hartley',
      text: 'The writing is clear, but a reader can’t picture where the sites are. You need a proper map showing all six, and a photograph of each wouldn’t hurt either.',
    },
    {
      id: 'l33',
      speaker: 'megan',
      text: 'We’ve made a start on the results too. We put all the raw measurements in the main text, so that people can check them.',
    },
    {
      id: 'l34',
      speaker: 'hartley',
      text: 'I can see why, but those long tables break up your argument. Put the raw figures at the back, in an appendix, and keep just the summary charts in the chapter.',
    },
    {
      id: 'l35',
      speaker: 'tom',
      text: 'Got it.',
    },
    {
      id: 'l36',
      speaker: 'hartley',
      text: 'As for the discussion, you’ve only drafted a page so far, but that paragraph on the robins singing at night is the most original thing you’ve written. Build the discussion around it.',
    },
  ],
  groups: [
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B or C.',
      questions: [
        {
          n: 1,
          prompt: 'What first gave the students the idea for their research topic?',
          options: [
            { key: 'A', text: 'an article in a newspaper' },
            { key: 'B', text: 'a talk by a visiting speaker' },
            { key: 'C', text: 'something one of them noticed near home' },
          ],
          answer: 'B',
          location: {
            ref: 'l5',
            quote: 'It really started with that guest lecture in second year',
          },
          explanation:
            'A “guest lecture” is a talk by a visiting speaker. That is where the idea “really started”.',
          traps: {
            A: 'Tom read the newspaper piece “after we’d already made up our minds”.',
            C: 'People assume this, but “she’d never even noticed the birds there”.',
          },
        },
        {
          n: 2,
          prompt: 'What was the main problem with the recording equipment?',
          options: [
            { key: 'A', text: 'It was more expensive to use than expected.' },
            { key: 'B', text: 'Its power supply did not last long enough.' },
            { key: 'C', text: 'The weather affected the quality of the recordings.' },
          ],
          answer: 'C',
          location: {
            ref: 'l9',
            quote: 'On breezy mornings the wind noise drowned out half the songs',
          },
          explanation:
            'Wind noise on breezy mornings spoiled the recordings: the weather affected their quality.',
          traps: {
            A: 'The equipment was borrowed and “didn’t cost us a thing”.',
            B: 'They were “worried” about the batteries, but with spare packs “they’ve been fine”.',
          },
        },
        {
          n: 3,
          prompt: 'What is Dr Hartley’s concern about the study sites?',
          options: [
            { key: 'A', text: 'There are too few of them.' },
            { key: 'B', text: 'One of them differs from the others in an important way.' },
            { key: 'C', text: 'They are not all visited at the same time of day.' },
          ],
          answer: 'B',
          location: {
            ref: 'l14',
            quote: 'It has far more old, tall trees than any of your parks',
          },
          explanation:
            'The cemetery has many more tall trees, so any difference in song there could be caused by the trees rather than the quiet.',
          traps: {
            A: '“Six is plenty… I’m not worried about numbers.”',
            C: 'They record at the same times at every site, “which is exactly right”.',
          },
        },
        {
          n: 4,
          prompt: 'What do the students decide to do about the dawn recordings?',
          options: [
            { key: 'A', text: 'make them only at weekends' },
            { key: 'B', text: 'stop making them' },
            { key: 'C', text: 'share them between the two of them' },
          ],
          answer: 'C',
          location: { ref: 'l20', quote: 'what if we take turns?' },
          explanation:
            'Megan suggests taking turns on different days, and Dr Hartley calls it “a sensible compromise”.',
          traps: {
            A: 'Their first idea, rejected because weekend traffic is lighter, so the recordings would not be comparable.',
            B: '“You can’t drop dawn altogether”, because most singing happens then.',
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
          prompt: 'Which TWO findings surprised the students?',
          options: [
            { key: 'A', text: 'Some birds sang at a higher pitch near roads.' },
            { key: 'B', text: 'Some birds sang during the hours of darkness.' },
            { key: 'C', text: 'There were more birds at the quiet sites.' },
            { key: 'D', text: 'Birds near traffic sang shorter songs.' },
            { key: 'E', text: 'Fewer species were found beside roads.' },
          ],
          answers: ['B', 'D'],
          location: { ref: 'l23', quote: 'they’re singing in the middle of the night' },
          explanation:
            'Robins singing at night (“didn’t see coming”) and the short songs of blackbirds near traffic (“the other big surprise”) were the two surprises.',
          traps: {
            A: 'The higher pitch of great tits was expected: “it’s all over the literature”.',
            C: 'The counts are “almost identical”, and that was no surprise.',
            E: 'They have not looked at the number of species yet.',
          },
        },
      ],
    },
    {
      type: 'match-features',
      instructions:
        'What comment does Dr Hartley make about each section of the dissertation? Choose FOUR answers from the box and write the correct letter, A–F, next to questions 7–10.',
      optionsTitle: 'Comments',
      options: [
        { key: 'A', text: 'It should be made shorter.' },
        { key: 'B', text: 'It needs more sources.' },
        { key: 'C', text: 'Some of it should go in an appendix.' },
        { key: 'D', text: 'It needs a visual guide to the locations.' },
        { key: 'E', text: 'It is the most original part.' },
        { key: 'F', text: 'It should be completed last.' },
      ],
      reuse: false,
      questions: [
        {
          n: 7,
          prompt: 'Introduction',
          answer: 'F',
          location: { ref: 'l28', quote: 'Leave it until everything else is done' },
          explanation:
            'He says not to polish the introduction now but to leave it until everything else is done, so it should be completed last.',
        },
        {
          n: 8,
          prompt: 'Literature review',
          answer: 'A',
          location: { ref: 'l30', quote: 'I’d cut it by about a third' },
          explanation:
            'At nearly four thousand words, it should be cut by a third, so made shorter.',
          traps: {
            B: 'Megan asks about adding references, but Dr Hartley says “No, you’ve got plenty”.',
          },
        },
        {
          n: 9,
          prompt: 'Methods',
          answer: 'D',
          location: { ref: 'l32', quote: 'You need a proper map showing all six' },
          explanation:
            'Readers cannot picture where the sites are, so a map (and photographs) are needed: a visual guide to the locations.',
        },
        {
          n: 10,
          prompt: 'Results',
          answer: 'C',
          location: { ref: 'l34', quote: 'Put the raw figures at the back, in an appendix' },
          explanation:
            'The raw measurements should move to an appendix, with only the summary charts left in the chapter.',
          traps: {
            E: '“The most original thing you’ve written” is the robins paragraph in the discussion, a section with no question here.',
          },
        },
      ],
    },
  ],
})
