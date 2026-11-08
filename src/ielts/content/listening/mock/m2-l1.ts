import { defineListening } from '../../define'

/** Original script. Mock test 2, Part 1: a parent registers her son for a summer activity camp (Harbridge is fictional). */
export default defineListening({
  id: 'm2-l1',
  skill: 'listening',
  part: 1,
  use: 'mock',
  title: 'Registering for a summer activity camp',
  topic: 'Leisure and children',
  context:
    'You will hear a woman phoning a leisure centre to register her son for a summer activity camp. First, you have some time to look at the questions.',
  speakers: [
    {
      id: 'martin',
      name: 'Martin',
      role: 'Leisure centre receptionist',
      gender: 'm',
      accent: 'en-GB',
    },
    { id: 'laura', name: 'Laura', role: 'Parent', gender: 'f', accent: 'en-CA' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'martin',
      text: 'Good morning, Harbridge Leisure Centre, Martin speaking. How can I help you?',
    },
    {
      id: 'l2',
      speaker: 'laura',
      text: 'Hi there. I’m calling about the summer activity camp. I’d like to register my son, if there are still places.',
    },
    {
      id: 'l3',
      speaker: 'martin',
      text: 'There should be, and I can do that over the phone for you now. Could I start with your son’s name?',
    },
    {
      id: 'l4',
      speaker: 'laura',
      text: 'Sure. His first name’s Owen. Now, my surname is Pearce, but Owen has his dad’s surname, which is Halloran.',
    },
    {
      id: 'l5',
      speaker: 'martin',
      text: 'So it’s Halloran I need for the register. How do you spell that?',
    },
    { id: 'l6', speaker: 'laura', text: 'H, A, double L, O, R, A, N.' },
    { id: 'l7', speaker: 'martin', text: 'Thank you. And how old is Owen?' },
    {
      id: 'l8',
      speaker: 'laura',
      text: 'He’s nine. He’ll be ten in October, so he’s still nine for the whole summer.',
    },
    {
      id: 'l9',
      speaker: 'martin',
      text: 'That puts him in our Explorers group, which is for eight- to ten-year-olds. Which week were you hoping for?',
    },
    {
      id: 'l10',
      speaker: 'laura',
      text: 'Ideally the week beginning Monday the fourth of August. That’s when I go back to work full-time.',
    },
    {
      id: 'l11',
      speaker: 'martin',
      text: 'Let me check… I’m afraid the Explorers are full that week. I can offer the week after, starting on the eleventh, or the last week, which starts on the twenty-fifth.',
    },
    {
      id: 'l12',
      speaker: 'laura',
      text: 'The twenty-fifth is no good, we’re visiting my parents in Toronto then. OK, let’s go with the eleventh. My neighbour can help out the first week.',
    },
    {
      id: 'l13',
      speaker: 'martin',
      text: 'Lovely, I’ll put him down for that. Now, can I take your home address?',
    },
    {
      id: 'l14',
      speaker: 'laura',
      text: 'It’s fourteen Larch Avenue, Harbridge, and the postcode is R, D, seven, three, F, J.',
    },
    { id: 'l15', speaker: 'martin', text: 'R, D, seven, three… sorry, was that S or F?' },
    { id: 'l16', speaker: 'laura', text: 'F, as in Freddie. And then J.' },
    {
      id: 'l17',
      speaker: 'martin',
      text: 'Got it. Does Owen have any medical conditions or allergies we should know about?',
    },
    {
      id: 'l18',
      speaker: 'laura',
      text: 'No conditions, and he’s fine with nuts, which is what everyone asks. But he does react badly to eggs, so he can’t have anything with egg in it.',
    },
    {
      id: 'l19',
      speaker: 'martin',
      text: 'I’ll flag that for the staff, although the children bring their own lunch. And who should we contact in an emergency?',
    },
    {
      id: 'l20',
      speaker: 'laura',
      text: 'Well, normally that would be his dad, but he works on an oil rig and often can’t be reached. Could you put down my sister instead? She’s Owen’s aunt, and she lives five minutes away.',
    },
    { id: 'l21', speaker: 'martin', text: 'Of course. Can I take her mobile number?' },
    {
      id: 'l22',
      speaker: 'laura',
      text: 'It’s oh seven nine six two, four four eight, one oh five.',
    },
    {
      id: 'l23',
      speaker: 'martin',
      text: 'Thank you. Now, let me tell you about the day itself. Drop-off is from nine o’clock. Collection used to be at three, but this year we’ve moved it to half past three.',
    },
    {
      id: 'l24',
      speaker: 'laura',
      text: 'Half past three. That actually works better for me. And what does the week cost?',
    },
    {
      id: 'l25',
      speaker: 'martin',
      text: 'It’s one hundred and forty-five pounds… oh, hang on, I’m reading from last year’s leaflet. Sorry about that. It’s gone up to one hundred and fifty-five this year.',
    },
    {
      id: 'l26',
      speaker: 'laura',
      text: 'OK, one fifty-five. Is there any kind of care before the camp starts? I need to be at work by half past eight.',
    },
    {
      id: 'l27',
      speaker: 'martin',
      text: 'Yes, we run a breakfast club in the café from eight o’clock. It’s four pounds a day, and they get toast, cereal and juice.',
    },
    {
      id: 'l28',
      speaker: 'laura',
      text: 'Perfect, I’ll book that for all five days. What sort of activities do they do?',
    },
    {
      id: 'l29',
      speaker: 'martin',
      text: 'Mostly outdoor games, kayaking on the lake, and some arts and crafts. And on the Friday there’s a trip.',
    },
    {
      id: 'l30',
      speaker: 'martin',
      text: 'We used to take the Explorers to the zoo, but the children said it felt like a school outing. So now they go to an indoor climbing centre instead.',
    },
    {
      id: 'l31',
      speaker: 'laura',
      text: 'Oh, he’ll love that. Is the trip included in the price?',
    },
    {
      id: 'l32',
      speaker: 'martin',
      text: 'It is, apart from lunch that day, which they buy at the centre. So send him with about eight pounds.',
    },
    {
      id: 'l33',
      speaker: 'laura',
      text: 'Fine. And is there anything he needs to bring with him every day?',
    },
    {
      id: 'l34',
      speaker: 'martin',
      text: 'A packed lunch and a water bottle. The old leaflet mentions swimming, but the pool’s closed for repairs, so he won’t need a swimming costume.',
    },
    {
      id: 'l35',
      speaker: 'martin',
      text: 'What he really must have is a waterproof jacket, because we go outside whatever the weather.',
    },
    { id: 'l36', speaker: 'laura', text: 'Very sensible. Great. So how do I pay?' },
    {
      id: 'l37',
      speaker: 'martin',
      text: 'I’ll email you a payment link this afternoon, and the place is held for forty-eight hours. Is there anything else I can help with?',
    },
    { id: 'l38', speaker: 'laura', text: 'No, that’s everything. Thanks so much for your help.' },
  ],
  groups: [
    {
      type: 'completion',
      format: 'note',
      instructions: 'Complete the notes below.',
      wordLimit: { words: 2, number: true },
      title: 'Harbridge Summer Activity Camp — registration',
      body: [
        {
          kind: 'bullets',
          items: [
            'Child’s name: Owen [[1]]',
            'Age: 9 (Explorers group, 8–10 years)',
            'Week booked: beginning Monday [[2]] August',
            'Address: 14 Larch Avenue, Harbridge',
            'Postcode: [[3]]',
            'Allergic to: [[4]]',
            'Emergency contact: Owen’s [[5]] (mobile 07962 448105)',
          ],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['Halloran'],
          location: { ref: 'l6', quote: 'H, A, double L, O, R, A, N' },
          explanation:
            'The form asks for the child’s name. Owen has his father’s surname, Halloran, not his mother’s (Pearce). “Double L” means two Ls.',
          distractors: ['Pearce', 'Haloran'],
        },
        {
          n: 2,
          answers: ['11', '11th'],
          location: { ref: 'l12', quote: 'let’s go with the eleventh' },
          explanation:
            'Laura wants the fourth, but that week is full. She rejects the twenty-fifth and chooses the eleventh.',
          distractors: ['4', '4th', '25', '25th'],
        },
        {
          n: 3,
          answers: ['RD7 3FJ', 'RD73FJ'],
          location: { ref: 'l16', quote: 'F, as in Freddie. And then J.' },
          explanation:
            'The postcode is R, D, seven, three, F, J. The receptionist checks whether the letter was S or F, and Laura confirms F.',
          distractors: ['RD7 3SJ'],
        },
        {
          n: 4,
          answers: ['eggs', 'egg'],
          location: { ref: 'l18', quote: 'he does react badly to eggs' },
          explanation:
            '“React badly to” is a paraphrase of “allergic to”. Nuts are mentioned only because people usually ask about them; Owen is fine with nuts.',
          distractors: ['nuts'],
        },
        {
          n: 5,
          answers: ['aunt'],
          location: { ref: 'l20', quote: 'She’s Owen’s aunt' },
          explanation:
            'His father is the usual contact but often cannot be reached, so Laura gives her sister, who is Owen’s aunt. The notes say “Owen’s…”, so “sister” does not fit.',
          distractors: ['dad', 'father', 'sister'],
        },
      ],
    },
    {
      type: 'completion',
      format: 'table',
      instructions: 'Complete the table below.',
      wordLimit: { words: 1, number: true },
      title: 'The camp week',
      body: [
        {
          kind: 'table',
          header: ['Item', 'Details', 'Cost'],
          rows: [
            ['Camp day', 'drop-off from 9.00; collection at [[6]]', '£[[7]] per week'],
            ['[[8]] club', 'in the café from 8.00', '£4 per day'],
            ['Friday trip', 'to an indoor [[9]] centre', 'included (bring about £8 for lunch)'],
            ['Bring every day', 'packed lunch, water bottle and a [[10]] jacket', '—'],
          ],
        },
      ],
      questions: [
        {
          n: 6,
          answers: ['3.30', '3:30', '15.30', '15:30', '3.30 pm', '3:30 pm'],
          location: { ref: 'l23', quote: 'this year we’ve moved it to half past three' },
          explanation:
            'Collection “used to be at three” — the old time is the distractor. This year it is half past three.',
          distractors: ['3', '3.00', '3 pm'],
        },
        {
          n: 7,
          answers: ['155'],
          location: { ref: 'l25', quote: 'It’s gone up to one hundred and fifty-five this year' },
          explanation:
            'A price with a correction: £145 is last year’s price from the old leaflet. The current price is £155.',
          distractors: ['145'],
        },
        {
          n: 8,
          answers: ['breakfast'],
          location: { ref: 'l27', quote: 'we run a breakfast club in the café from eight o’clock' },
          explanation:
            'Laura asks about care “before the camp starts”; the answer is the breakfast club, which opens at eight.',
        },
        {
          n: 9,
          answers: ['climbing'],
          location: { ref: 'l30', quote: 'now they go to an indoor climbing centre instead' },
          explanation:
            'The zoo was the old trip (“we used to take the Explorers to the zoo”). The trip now goes to an indoor climbing centre.',
          distractors: ['zoo'],
        },
        {
          n: 10,
          answers: ['waterproof'],
          location: { ref: 'l35', quote: 'What he really must have is a waterproof jacket' },
          explanation:
            'A swimming costume is not needed because the pool is closed. The essential item is a waterproof jacket.',
          distractors: ['swimming'],
        },
      ],
    },
  ],
})
