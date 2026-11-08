import { defineListening } from '../../define'

/** Original script. Part 1 style drill: every answer comes after a correction, a rejected option or a changed plan. */
export default defineListening({
  id: 'drill-listen-distractors',
  skill: 'listening',
  part: 1,
  use: 'drill',
  title: 'Signing up for a pottery class',
  topic: 'Hobbies and courses',
  context:
    'You will hear a man phoning a pottery studio to book a place on a course. First, you have some time to look at questions 1 to 8.',
  speakers: [
    { id: 'aroha', name: 'Aroha', role: 'Studio receptionist', gender: 'f', accent: 'en-NZ' },
    { id: 'tom', name: 'Tom', role: 'Caller', gender: 'm', accent: 'en-GB' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'aroha',
      text: 'Good afternoon, Riverside Pottery Studio, Aroha speaking. How can I help?',
    },
    {
      id: 'l2',
      speaker: 'tom',
      text: 'Hi. I picked up your leaflet about the beginners’ classes, and I’d like to book a place.',
    },
    {
      id: 'l3',
      speaker: 'aroha',
      text: 'Great. We’ve got two beginners’ groups this term, one on Tuesday evenings and one on Thursday evenings. Which suits you?',
    },
    {
      id: 'l4',
      speaker: 'tom',
      text: 'Tuesday, I think. Oh, no, hang on. I play five-a-side football on Tuesdays. Better make it Thursday.',
    },
    {
      id: 'l5',
      speaker: 'aroha',
      text: 'No problem. So the Thursday class starts at seven. Oh, sorry, I’m looking at last term’s timetable. This term it starts at a quarter to seven.',
    },
    { id: 'l6', speaker: 'tom', text: 'A quarter to seven is fine. I finish work at six.' },
    {
      id: 'l7',
      speaker: 'aroha',
      text: 'The leaflet says the course lasts ten weeks, but that’s out of date, I’m afraid. We’ve cut it to eight weeks this term.',
    },
    { id: 'l8', speaker: 'tom', text: 'Eight weeks. And what does it cost?' },
    {
      id: 'l9',
      speaker: 'aroha',
      text: 'The full price is a hundred and forty pounds. But there’s an early-booking discount until Friday, which brings it down to a hundred and fifteen.',
    },
    {
      id: 'l10',
      speaker: 'tom',
      text: 'Then I’ll book today and pay the lower price, please. Do I need to bring anything?',
    },
    {
      id: 'l11',
      speaker: 'aroha',
      text: 'Most people turn up with an apron, but to be honest, an apron doesn’t protect much. We’d suggest an old shirt with long sleeves instead.',
    },
    {
      id: 'l12',
      speaker: 'tom',
      text: 'Good to know. Is there anywhere to park? I’ll be driving straight from work.',
    },
    {
      id: 'l13',
      speaker: 'aroha',
      text: 'That’s changed recently. There used to be space in the yard behind the studio, but builders are using it now. At first we told people to park on the street.',
    },
    { id: 'l14', speaker: 'tom', text: 'The street’s fine for me.' },
    {
      id: 'l15',
      speaker: 'aroha',
      text: 'Ah, but then the council brought in residents’ permits, so you can’t park there any more. Your best option is the supermarket car park opposite. It’s free in the evenings.',
    },
    {
      id: 'l16',
      speaker: 'tom',
      text: 'The supermarket, right. And who’s teaching the Thursday group?',
    },
    {
      id: 'l17',
      speaker: 'aroha',
      text: 'It was going to be Ruth Calder, but she’s moved to the Saturday group. So you’ll have Simon Ferris. That’s F, E, double R, I, S.',
    },
    { id: 'l18', speaker: 'tom', text: 'Great. Can I pay by card now?' },
    {
      id: 'l19',
      speaker: 'aroha',
      text: 'Normally, yes, but our card machine’s broken this week. So it would have to be a bank transfer. I’ll email you the details.',
    },
    { id: 'l20', speaker: 'tom', text: 'That’s fine. Thanks very much.' },
  ],
  groups: [
    {
      type: 'completion',
      format: 'note',
      instructions: 'Complete the notes below.',
      wordLimit: { words: 2, number: true },
      title: 'Riverside Pottery Studio — beginners’ course',
      body: [
        {
          kind: 'bullets',
          items: [
            'Day: [[1]] evenings',
            'Start time: [[2]] pm',
            'Length of course: [[3]] weeks',
            'Price to pay: £[[4]]',
            'Bring: an old [[5]] to cover clothes',
            'Parking: use the [[6]] car park',
            'Tutor: Simon [[7]]',
            'Payment method: [[8]]',
          ],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['Thursday', 'Thursdays'],
          location: { ref: 'l4', quote: 'Better make it Thursday.' },
          explanation:
            'Tom says Tuesday first, then rejects it (“Oh, no, hang on”) because of football. The final choice is Thursday.',
          distractors: ['Tuesday', 'Tuesdays'],
        },
        {
          n: 2,
          answers: ['6.45', '6:45'],
          location: { ref: 'l5', quote: 'This term it starts at a quarter to seven.' },
          explanation:
            'Seven o’clock is last term’s time; the receptionist corrects herself. A quarter to seven = 6.45.',
          distractors: ['7', '7.00', '7:00'],
        },
        {
          n: 3,
          answers: ['8'],
          location: { ref: 'l7', quote: 'We’ve cut it to eight weeks this term.' },
          explanation:
            'Ten weeks is printed on the old leaflet (“that’s out of date”). The course now lasts eight weeks.',
          distractors: ['10'],
        },
        {
          n: 4,
          answers: ['115'],
          location: { ref: 'l9', quote: 'which brings it down to a hundred and fifteen' },
          explanation:
            'Two prices: £140 is the full price, but Tom books today, before the Friday deadline, so he pays the discounted £115.',
          distractors: ['140'],
        },
        {
          n: 5,
          answers: ['shirt'],
          location: { ref: 'l11', quote: 'We’d suggest an old shirt with long sleeves instead.' },
          explanation:
            'An apron is mentioned first but rejected (“doesn’t protect much”). “Instead” signals the real answer: a shirt.',
          distractors: ['apron'],
        },
        {
          n: 6,
          answers: ['supermarket'],
          location: { ref: 'l15', quote: 'Your best option is the supermarket car park opposite.' },
          explanation:
            'A changed plan: the yard is no longer available, and the street was suggested “at first”, but “then” permits were introduced. Only the supermarket car park is left.',
          distractors: ['street', 'yard'],
        },
        {
          n: 7,
          answers: ['Ferris'],
          location: { ref: 'l17', quote: 'F, E, double R, I, S' },
          explanation:
            'Ruth Calder “was going to be” the tutor but has moved. The tutor is Simon Ferris, with a double R.',
          distractors: ['Calder', 'Feris'],
        },
        {
          n: 8,
          answers: ['(bank) transfer'],
          location: { ref: 'l19', quote: 'So it would have to be a bank transfer.' },
          explanation:
            'Card payment is normally possible, but not this week because the machine is broken, so Tom must pay by bank transfer.',
          distractors: ['card'],
        },
      ],
    },
  ],
})
