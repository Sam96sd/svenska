import { defineListening } from '../define'

/** Original script. Part 1 style: enrolling on an evening language course, with spelling, a postcode, a date and a price correction. */
export default defineListening({
  id: 'l1-language-course',
  skill: 'listening',
  part: 1,
  use: 'practice',
  title: 'Enrolling on a language course',
  topic: 'Education and courses',
  context:
    'You will hear a woman phoning a language school to enrol on an evening course. First, you have some time to look at questions 1 to 10.',
  speakers: [
    { id: 'paul', name: 'Paul', role: 'Receptionist', gender: 'm', accent: 'en-CA' },
    { id: 'margaret', name: 'Margaret', role: 'Caller', gender: 'f', accent: 'en-GB' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'paul',
      text: 'Good afternoon, Harbour Lane Language School, Paul speaking. How can I help you?',
    },
    {
      id: 'l2',
      speaker: 'margaret',
      text: 'Oh, hello. I’m calling about your evening classes. I’d like to enrol on a course, if there’s still room.',
    },
    { id: 'l3', speaker: 'paul', text: 'Sure. Which language were you interested in?' },
    {
      id: 'l4',
      speaker: 'margaret',
      text: 'Well, I’d originally planned to do Italian. But my company has just told me I’ll be working in Lisbon for a few months next year, so it really has to be Portuguese.',
    },
    { id: 'l5', speaker: 'paul', text: 'OK, Portuguese. And have you studied it at all before?' },
    {
      id: 'l6',
      speaker: 'margaret',
      text: 'Not a word, I’m afraid. I did a bit of Spanish at school, but that was a very long time ago.',
    },
    {
      id: 'l7',
      speaker: 'paul',
      text: 'That’s fine. The beginners’ group would be right for you, then. Let me take a few details. What’s your name?',
    },
    { id: 'l8', speaker: 'margaret', text: 'Margaret Thwaites.' },
    { id: 'l9', speaker: 'paul', text: 'Could you spell the last name for me?' },
    { id: 'l10', speaker: 'margaret', text: 'Of course. It’s T, H, W, A, I, T, E, S.' },
    {
      id: 'l11',
      speaker: 'paul',
      text: 'T, H, W, A, I, T, E, S. Thank you. And your address?',
    },
    { id: 'l12', speaker: 'margaret', text: 'It’s forty-one Kestrel Road, in Redland.' },
    { id: 'l13', speaker: 'paul', text: 'And the postcode?' },
    { id: 'l14', speaker: 'margaret', text: 'B, S, six, then seven, Q, L.' },
    { id: 'l15', speaker: 'paul', text: 'Seven, G, L?' },
    {
      id: 'l16',
      speaker: 'margaret',
      text: 'No, Q. Q for queen. So that’s B, S, six, seven, Q, L.',
    },
    {
      id: 'l17',
      speaker: 'paul',
      text: 'Got it. And can I ask what you do for a living? We try to put people with similar goals in the same group.',
    },
    {
      id: 'l18',
      speaker: 'margaret',
      text: 'I used to be a primary school teacher, but for the last six years I’ve been working as a translator, mostly from French and German.',
    },
    {
      id: 'l19',
      speaker: 'paul',
      text: 'A translator! You’ll probably pick it up quickly, then. Now, the next beginners’ course starts on Monday the sixth of March.',
    },
    {
      id: 'l20',
      speaker: 'margaret',
      text: 'Ah, the sixth. I’m away on a training course that week, unfortunately. Is there a later start?',
    },
    {
      id: 'l21',
      speaker: 'paul',
      text: 'There’s a second group starting two weeks after that, so that would be Monday the twentieth.',
    },
    {
      id: 'l22',
      speaker: 'margaret',
      text: 'The twentieth of March would be perfect. Let’s go for that one.',
    },
    {
      id: 'l23',
      speaker: 'paul',
      text: 'Great. Now, normally all our classes are in the main building on Harbour Lane. But while that’s being renovated, the beginners’ groups are meeting in the public library, just across the road.',
    },
    {
      id: 'l24',
      speaker: 'margaret',
      text: 'Oh, that’s handy. There’s a car park right next to the library.',
    },
    {
      id: 'l25',
      speaker: 'paul',
      text: 'Is there anything in particular you’d like to focus on? Some students want lots of grammar, others mostly want to chat.',
    },
    {
      id: 'l26',
      speaker: 'margaret',
      text: 'Reading and writing can wait, honestly. What worries me most is understanding people when they speak. So it’s my listening I really need to work on.',
    },
    {
      id: 'l27',
      speaker: 'margaret',
      text: 'Oh, and one more thing before I forget. How much is the course?',
    },
    {
      id: 'l28',
      speaker: 'paul',
      text: 'The ten-week course, two evenings a week, is two hundred and forty pounds. Oh, sorry, hang on, I’m looking at last year’s price list. It went up in January. It’s two hundred and sixty-five.',
    },
    {
      id: 'l29',
      speaker: 'margaret',
      text: 'That’s still reasonable. Is the course book included?',
    },
    {
      id: 'l30',
      speaker: 'paul',
      text: 'No, that’s extra. It’s eighteen pounds. You can’t get it in bookshops, because it’s our own book, so you’ll need to collect it from reception on your first evening.',
    },
    {
      id: 'l31',
      speaker: 'margaret',
      text: 'OK. And I saw something on your website about a conversation club?',
    },
    {
      id: 'l32',
      speaker: 'paul',
      text: 'Yes, that’s free for all our students. It used to be on Wednesday evenings, but so few people came that we’ve moved it to Saturday mornings, ten till twelve.',
    },
    {
      id: 'l33',
      speaker: 'margaret',
      text: 'Saturday mornings. I could manage that. How do I pay?',
    },
    {
      id: 'l34',
      speaker: 'paul',
      text: 'I’ll email you a payment link this afternoon. As soon as you’ve paid, your place is confirmed.',
    },
    { id: 'l35', speaker: 'margaret', text: 'Lovely. Thank you so much for your help.' },
  ],
  groups: [
    {
      type: 'completion',
      format: 'note',
      instructions: 'Complete the notes below.',
      wordLimit: { words: 2, number: true },
      title: 'Harbour Lane Language School — enrolment',
      body: [
        { kind: 'heading', text: 'Course' },
        { kind: 'bullets', items: ['Language: [[1]] (beginners’ group, evenings)'] },
        { kind: 'heading', text: 'Student details' },
        {
          kind: 'bullets',
          items: [
            'Name: Margaret [[2]]',
            'Address: 41 Kestrel Road, Redland',
            'Postcode: [[3]]',
            'Occupation: [[4]]',
          ],
        },
        { kind: 'heading', text: 'Course details' },
        {
          kind: 'bullets',
          items: [
            'Start date: Monday [[5]]',
            'Classes held in the [[6]] while the main building is renovated',
            'Main skill she wants to improve: [[7]]',
          ],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['Portuguese'],
          location: { ref: 'l4', quote: 'so it really has to be Portuguese' },
          explanation:
            'She first mentions Italian, but that was her original plan. The job in Lisbon means the course she wants now is Portuguese.',
          distractors: ['Italian', 'Spanish'],
        },
        {
          n: 2,
          answers: ['Thwaites'],
          location: { ref: 'l10', quote: 'T, H, W, A, I, T, E, S' },
          explanation:
            'Spelled names must be copied letter by letter. Note the “W” after “TH” and the “-AITES” ending.',
        },
        {
          n: 3,
          answers: ['BS6 7QL', 'BS67QL'],
          location: { ref: 'l16', quote: 'So that’s B, S, six, seven, Q, L' },
          explanation:
            'The receptionist mishears “Q” as “G”, and she corrects him: “Q for queen”. The confirmed postcode is BS6 7QL.',
          distractors: ['BS6 7GL'],
        },
        {
          n: 4,
          answers: ['translator'],
          location: { ref: 'l18', quote: 'I’ve been working as a translator' },
          explanation:
            '“What you do for a living” asks about her job now. “Used to be a primary school teacher” is her past job — the distractor.',
          distractors: ['teacher', 'primary school teacher'],
        },
        {
          n: 5,
          answers: ['20 March'],
          location: { ref: 'l22', quote: 'The twentieth of March would be perfect' },
          explanation:
            'The sixth of March is offered first but rejected because she is away that week. She chooses the second group, starting on the twentieth.',
          distractors: ['6 March'],
        },
        {
          n: 6,
          answers: ['(public) library'],
          location: {
            ref: 'l23',
            quote: 'the beginners’ groups are meeting in the public library',
          },
          explanation:
            'Classes are “normally” in the main building, but during the renovation they are in the library across the road.',
          distractors: ['main building'],
        },
        {
          n: 7,
          answers: ['listening', 'listening skills'],
          location: { ref: 'l26', quote: 'it’s my listening I really need to work on' },
          explanation:
            '“Main skill she wants to improve” paraphrases “what I really need to work on”. Reading and writing are mentioned only to be put aside (“can wait”).',
          distractors: ['reading', 'writing', 'grammar'],
        },
      ],
    },
    {
      type: 'completion',
      format: 'table',
      instructions: 'Complete the table below.',
      wordLimit: { words: 2, number: true },
      body: [
        {
          kind: 'table',
          header: ['Item', 'Details', 'Cost'],
          rows: [
            ['Ten-week course', 'two evenings a week', '£[[8]]'],
            ['Course book', 'collect from [[9]] on the first evening', '£18'],
            ['Conversation club', 'every [[10]] morning, 10 am to 12 noon', 'free for students'],
          ],
        },
      ],
      questions: [
        {
          n: 8,
          answers: ['265'],
          location: { ref: 'l28', quote: 'It’s two hundred and sixty-five' },
          explanation:
            'A price correction: £240 is from last year’s price list. The current price, after the January increase, is £265.',
          distractors: ['240'],
        },
        {
          n: 9,
          answers: ['reception'],
          location: { ref: 'l30', quote: 'you’ll need to collect it from reception' },
          explanation:
            'Bookshops are mentioned only to say the book is not sold there. “Collect” is in both the table and the recording.',
          distractors: ['bookshop', 'bookshops'],
        },
        {
          n: 10,
          answers: ['Saturday', 'Saturdays'],
          location: { ref: 'l32', quote: 'we’ve moved it to Saturday mornings' },
          explanation:
            'The club “used to be” on Wednesday evenings; it has moved to Saturday mornings. The table already gives “morning”.',
          distractors: ['Wednesday', 'Wednesdays'],
        },
      ],
    },
  ],
})
