import { defineListening } from '../define'

/** Original script. Part 1 style: a phone call to book a room, with spelling, numbers and a correction. */
export default defineListening({
  id: 'l1-hall-booking',
  skill: 'listening',
  part: 1,
  title: 'Booking a community hall',
  topic: 'Events and bookings',
  context:
    'You will hear a man phoning a community hall to book a room for a party. First, you have some time to look at questions 1 to 10.',
  speakers: [
    { id: 'jenny', name: 'Jenny', role: 'Receptionist', gender: 'f', accent: 'en-AU' },
    { id: 'daniel', name: 'Daniel', role: 'Caller', gender: 'm', accent: 'en-GB' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'jenny',
      text: 'Good morning, Hillside Community Hall. Jenny speaking. How can I help?',
    },
    {
      id: 'l2',
      speaker: 'daniel',
      text: 'Oh, hello. I’d like to book a room for a party next month, if you have anything available.',
    },
    {
      id: 'l3',
      speaker: 'jenny',
      text: 'Of course. Let me just take a few details. Can I have your name, please?',
    },
    { id: 'l4', speaker: 'daniel', text: 'Yes, it’s Daniel Whitcombe.' },
    { id: 'l5', speaker: 'jenny', text: 'Could you spell your surname for me?' },
    { id: 'l6', speaker: 'daniel', text: 'Sure. W, H, I, T, C, O, M, B, E.' },
    { id: 'l7', speaker: 'jenny', text: 'Thank you. And a contact number?' },
    {
      id: 'l8',
      speaker: 'daniel',
      text: 'My mobile is oh seven seven oh oh, nine one three, five six two.',
    },
    {
      id: 'l9',
      speaker: 'jenny',
      text: 'Oh seven seven oh oh, nine one three, five six two. Lovely. What date were you thinking of?',
    },
    {
      id: 'l10',
      speaker: 'daniel',
      text: 'Saturday the fourteenth of June. Oh, wait – no, sorry, I’ve got that wrong. The fourteenth is my sister’s wedding. It needs to be Saturday the twenty-first.',
    },
    {
      id: 'l11',
      speaker: 'jenny',
      text: 'The twenty-first of June… yes, that’s free. What sort of event is it?',
    },
    {
      id: 'l12',
      speaker: 'daniel',
      text: 'It’s a fortieth birthday party for my wife, so mainly adults, but a few children too.',
    },
    { id: 'l13', speaker: 'jenny', text: 'And roughly how many guests are you expecting?' },
    {
      id: 'l14',
      speaker: 'daniel',
      text: 'We’ve invited about sixty, but I’d say fifty-five will probably come.',
    },
    {
      id: 'l15',
      speaker: 'jenny',
      text: 'Then I’d recommend the Garden Room rather than the Main Hall. The Main Hall holds two hundred, which would feel rather empty. The Garden Room takes up to seventy and opens onto the patio.',
    },
    { id: 'l16', speaker: 'daniel', text: 'That sounds perfect. How much is it?' },
    {
      id: 'l17',
      speaker: 'jenny',
      text: 'On a Saturday evening it’s thirty-eight pounds an hour, and there’s a minimum booking of four hours.',
    },
    { id: 'l18', speaker: 'daniel', text: 'Right. Does that include tables and chairs?' },
    {
      id: 'l19',
      speaker: 'jenny',
      text: 'Yes, those are included. If you want to use the kitchen, that’s an extra twenty pounds, and you’d need to bring your own plates and glasses. We only provide the cooker and the fridge.',
    },
    {
      id: 'l20',
      speaker: 'daniel',
      text: 'We’ll need the kitchen, I think. What about music? We were hoping to have a DJ.',
    },
    {
      id: 'l21',
      speaker: 'jenny',
      text: 'That’s fine, but all music has to stop by eleven o’clock because of the neighbours. And you’ll need to be completely out of the building by half past eleven.',
    },
    { id: 'l22', speaker: 'daniel', text: 'OK. Is there parking?' },
    {
      id: 'l23',
      speaker: 'jenny',
      text: 'There’s a small car park behind the hall with space for about twenty cars, and it’s free after six. If that’s full, there’s a public car park on Mill Lane, five minutes’ walk away.',
    },
    { id: 'l24', speaker: 'daniel', text: 'Great. And how do I pay?' },
    {
      id: 'l25',
      speaker: 'jenny',
      text: 'We ask for a deposit of fifty pounds to secure the booking. You’ll get that back after the event, as long as the room’s left clean and nothing’s damaged. The rest is paid on the day.',
    },
    { id: 'l26', speaker: 'daniel', text: 'That’s fine. Can I pay the deposit now, by card?' },
    {
      id: 'l27',
      speaker: 'jenny',
      text: 'Of course. I’ll just put you through to our bookings office.',
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'form',
      instructions: 'Complete the form below.',
      wordLimit: { words: 1, number: true },
      title: 'Hillside Community Hall — Room booking',
      body: [
        {
          kind: 'table',
          header: ['Detail', 'Information'],
          rows: [
            ['Name', 'Daniel [[1]]'],
            ['Phone', '[[2]]'],
            ['Date', 'Saturday [[3]] June'],
            ['Type of event', '[[4]] party'],
            ['Expected number of guests', '[[5]]'],
            ['Room', 'the [[6]] Room'],
            ['Cost', '£[[7]] per hour (minimum four hours)'],
            ['Kitchen', '£20 extra; bring own plates and [[8]]'],
            ['Music', 'must stop by [[9]] pm'],
            ['Deposit', '£[[10]] (returned if the room is left clean)'],
          ],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['Whitcombe'],
          location: { ref: 'l6', quote: 'W, H, I, T, C, O, M, B, E' },
          explanation:
            'Names that are spelled out must be spelled exactly. Listen for each letter and watch “C-O-M-B-E” at the end.',
        },
        {
          n: 2,
          answers: ['07700 913 562', '07700913562'],
          location: { ref: 'l8', quote: 'oh seven seven oh oh, nine one three, five six two' },
          explanation:
            'British speakers say “0” as “oh” and group the digits. Write the digits as you hear them; the receptionist repeats the number to confirm.',
        },
        {
          n: 3,
          answers: ['21', '21st'],
          location: { ref: 'l10', quote: 'It needs to be Saturday the twenty-first' },
          explanation:
            'A classic correction: he says the fourteenth first, then corrects himself (“no, sorry, I’ve got that wrong”). The final answer is the twenty-first.',
          distractors: ['14', '14th'],
        },
        {
          n: 4,
          answers: ['birthday', '40th birthday'],
          location: { ref: 'l12', quote: 'It’s a fortieth birthday party' },
          explanation:
            'The form already says “party”, so the answer is the word before it: “birthday”.',
        },
        {
          n: 5,
          answers: ['55'],
          location: { ref: 'l14', quote: 'I’d say fifty-five will probably come' },
          explanation:
            '“Expected” guests are those who will probably come: 55. Sixty is the number invited — the distractor.',
          distractors: ['60'],
        },
        {
          n: 6,
          answers: ['Garden'],
          location: {
            ref: 'l15',
            quote: 'I’d recommend the Garden Room rather than the Main Hall',
          },
          explanation:
            'Both rooms are mentioned, but the Main Hall is rejected (“rather than”, “would feel rather empty”).',
          distractors: ['Main'],
        },
        {
          n: 7,
          answers: ['38'],
          location: { ref: 'l17', quote: 'it’s thirty-eight pounds an hour' },
          explanation:
            '“Per hour” = “an hour”. “Four hours” is the minimum booking, not the price.',
          distractors: ['4'],
        },
        {
          n: 8,
          answers: ['glasses'],
          location: { ref: 'l19', quote: 'bring your own plates and glasses' },
          explanation:
            'The form gives “plates” already; the missing item is “glasses”. The cooker and fridge are provided.',
        },
        {
          n: 9,
          answers: ['11', '11 pm', '11.00', '11:00', '11 o’clock'],
          location: { ref: 'l21', quote: 'all music has to stop by eleven o’clock' },
          explanation:
            'Music stops at 11. Half past eleven is when everyone must leave the building — a distractor that comes straight after.',
          distractors: ['11.30', '11:30', 'half past eleven'],
        },
        {
          n: 10,
          answers: ['50'],
          location: { ref: 'l25', quote: 'a deposit of fifty pounds' },
          explanation: 'The deposit is £50, refundable if the room is left clean.',
          distractors: ['20'],
        },
      ],
    },
  ],
})
