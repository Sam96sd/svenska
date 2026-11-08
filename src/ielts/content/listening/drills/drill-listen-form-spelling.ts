import { defineListening } from '../../define'

/** Original script. Part 1 style drill: spelled names, a username, a postcode, a phone number and a date. */
export default defineListening({
  id: 'drill-listen-form-spelling',
  skill: 'listening',
  part: 1,
  use: 'drill',
  title: 'Joining the local library',
  topic: 'Local services',
  context:
    'You will hear a woman joining a public library. First, you have some time to look at questions 1 to 7.',
  speakers: [
    { id: 'ben', name: 'Ben', role: 'Library assistant', gender: 'm', accent: 'en-AU' },
    { id: 'marta', name: 'Marta', role: 'New member', gender: 'f', accent: 'en-GB' },
  ],
  lines: [
    { id: 'l1', speaker: 'ben', text: 'Hello, welcome to Moorside Library. Are you here to join?' },
    {
      id: 'l2',
      speaker: 'marta',
      text: 'Yes, please. I’ve just moved to the area, and I’d like cards for me and my son.',
    },
    {
      id: 'l3',
      speaker: 'ben',
      text: 'No problem. I’ll fill in the form on screen for you. Your surname first?',
    },
    { id: 'l4', speaker: 'marta', text: 'It’s Lindqvist. L, I, N, D, Q, V, I, S, T.' },
    { id: 'l5', speaker: 'ben', text: 'L, I, N, D, Q… was that a W after the Q?' },
    {
      id: 'l6',
      speaker: 'marta',
      text: 'No, V for Victor. Q, V, I, S, T. Everyone gets that bit wrong.',
    },
    { id: 'l7', speaker: 'ben', text: 'Got it. And your address?' },
    {
      id: 'l8',
      speaker: 'marta',
      text: 'Fourteen Wrenfield Road. That’s W, R, E, N, F, I, E, L, D.',
    },
    { id: 'l9', speaker: 'ben', text: 'And the postcode?' },
    { id: 'l10', speaker: 'marta', text: 'L, S, six, then two, P, Z.' },
    { id: 'l11', speaker: 'ben', text: 'Two, P, C?' },
    { id: 'l12', speaker: 'marta', text: 'No, Z, as in zebra. L, S, six, two, P, Z.' },
    {
      id: 'l13',
      speaker: 'ben',
      text: 'Thanks. Is there a phone number we can reach you on?',
    },
    {
      id: 'l14',
      speaker: 'marta',
      text: 'My mobile’s new and I can never remember it, so let’s use the home number. Oh one one three, four nine six, oh two double seven.',
    },
    { id: 'l15', speaker: 'ben', text: 'Oh one one three, four nine six, oh two seven seven.' },
    { id: 'l16', speaker: 'marta', text: 'That’s right.' },
    { id: 'l17', speaker: 'ben', text: 'And your date of birth?' },
    { id: 'l18', speaker: 'marta', text: 'The thirteenth of August, nineteen ninety-one.' },
    { id: 'l19', speaker: 'ben', text: 'The thirtieth of August…' },
    { id: 'l20', speaker: 'marta', text: 'No, the thirteenth. One, three. Thirteen.' },
    {
      id: 'l21',
      speaker: 'ben',
      text: 'Sorry about that. Now, for the online account you’ll need a username. Most people use the first part of their email address, before the at sign.',
    },
    {
      id: 'l22',
      speaker: 'marta',
      text: 'Then it’s marta dot lind, L, I, N, D, seventy-four. All lower case, no spaces.',
    },
    {
      id: 'l23',
      speaker: 'ben',
      text: 'Lovely. And for your son’s card, is his surname Lindqvist too?',
    },
    {
      id: 'l24',
      speaker: 'marta',
      text: 'No, he has his father’s name. It’s Pennock. P, E, double N, O, C, K.',
    },
    {
      id: 'l25',
      speaker: 'ben',
      text: 'Great. Both cards will be ready on Thursday, and we’ll send you a text when they are.',
    },
    { id: 'l26', speaker: 'marta', text: 'Perfect. Thank you.' },
  ],
  groups: [
    {
      type: 'completion',
      format: 'form',
      instructions: 'Complete the form below.',
      wordLimit: { words: 2, number: true },
      title: 'Moorside Library — new member form',
      body: [
        {
          kind: 'table',
          header: ['Detail', 'Information'],
          rows: [
            ['First name', 'Marta'],
            ['Surname', '[[1]]'],
            ['Address', '14 [[2]] Road'],
            ['Postcode', '[[3]]'],
            ['Home phone', '[[4]]'],
            ['Date of birth', '[[5]] 1991'],
            ['Online username', '[[6]]'],
            ['Second card (son): surname', '[[7]]'],
          ],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['Lindqvist'],
          location: { ref: 'l4', quote: 'L, I, N, D, Q, V, I, S, T' },
          explanation:
            'Write the letters exactly as spelled. The assistant asks about a W, but Marta confirms it is V for Victor: Q, V, I, S, T.',
          distractors: ['Lindqwist', 'Linqvist'],
        },
        {
          n: 2,
          answers: ['Wrenfield'],
          location: { ref: 'l8', quote: 'W, R, E, N, F, I, E, L, D' },
          explanation:
            'The street name is spelled out. Note the silent W at the start and “-field” (I before E).',
          distractors: ['Renfield', 'Wrenfeild'],
        },
        {
          n: 3,
          answers: ['LS6 2PZ', 'LS62PZ'],
          location: { ref: 'l12', quote: 'L, S, six, two, P, Z' },
          explanation:
            'The assistant mishears the last letter as C; Marta corrects him: “Z, as in zebra”. UK postcodes have two parts, here LS6 and 2PZ.',
          distractors: ['LS6 2PC'],
        },
        {
          n: 4,
          answers: ['0113 496 0277', '01134960277'],
          location: { ref: 'l14', quote: 'Oh one one three, four nine six, oh two double seven' },
          explanation:
            '“Oh” = 0 and “double seven” = 77. The mobile number is rejected; the form asks for the home number.',
          distractors: ['0113 496 027', '0113 496 0207'],
        },
        {
          n: 5,
          answers: ['13 August', '13th August'],
          location: { ref: 'l20', quote: 'No, the thirteenth. One, three.' },
          explanation:
            'Teens versus tens: the assistant repeats “thirtieth”, and Marta corrects him with the digits, one and three.',
          distractors: ['30 August', '30th August'],
        },
        {
          n: 6,
          answers: ['marta.lind74'],
          location: { ref: 'l22', quote: 'marta dot lind, L, I, N, D, seventy-four' },
          explanation:
            '“Dot” is written “.”, and the name and number are joined with no spaces: marta.lind74. The at sign and the rest of the email address are not part of it.',
          distractors: ['marta.lindqvist74', 'marta lind 74'],
        },
        {
          n: 7,
          answers: ['Pennock'],
          location: { ref: 'l24', quote: 'P, E, double N, O, C, K' },
          explanation:
            'Her son has a different surname from Marta. “Double N” means two Ns: P-E-N-N-O-C-K.',
          distractors: ['Penock', 'Lindqvist'],
        },
      ],
    },
  ],
})
