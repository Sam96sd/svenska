import { defineLesson } from '../define'

export default defineLesson({
  id: 'l-spelling-numbers',
  skill: 'listening',
  module: 'both',
  order: 5,
  title: 'Spelling, numbers and dates',
  summary:
    'Write spelled names, phone numbers, dates, prices and postcodes exactly, and avoid the classic teens-and-tens mistakes.',
  types: ['spelling', 'numbers'],
  minutes: 10,
  sections: [
    {
      kind: 'text',
      heading: 'Easy marks that are easy to lose',
      paragraphs: [
        'Part 1 nearly always asks you to write a name that is spelled out, a phone number, a date or a price. These are the easiest marks in the test, but **a single wrong letter or digit scores zero**. There is no half mark for “nearly right”.',
        'The good news is that the patterns are predictable. Learn how British speakers say letters and numbers, and practise until writing them is automatic.',
      ],
    },
    {
      kind: 'list',
      heading: 'How letters and numbers are spoken',
      items: [
        '**Double letters**: “double S”, “double L”. Hollis is “H, O, double L, I, S”.',
        '**Zero** is often “oh” in phone numbers: “oh one six one” = 0161.',
        '**Repeated digits**: “double seven” = 77, “triple oh” = 000.',
        '**Z** is “zed” in British English (“zee” in American English).',
        '**Letters that sound alike**: A/E/I, G/J, B/P/V, M/N, S/F, C/Z. Speakers often add “as in…” to help: “P as in Peter”.',
        '**Postcodes** come in two parts: “B, S, seven, four, Q, D” = BS7 4QD.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Teens vs tens: listen for the stress',
      headers: ['Teens (stress at the end)', 'Tens (stress at the start)'],
      rows: [
        ['thirTEEN (13)', 'THIRty (30)'],
        ['fifTEEN (15)', 'FIFty (50)'],
        ['eighTEEN (18)', 'EIGHty (80)'],
        ['the thirTEENTH (13th)', 'the THIRtieth (30th)'],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: a name and a number',
      context:
        'Form:\nSurname: ______\nMembership number: ______\n\nRecording: “It’s Abbott, A, double B, O, double T. And my membership number is four one five, oh, double eight… sorry, no, four one five, oh, double nine.”',
      question: 'Complete the surname and the membership number.',
      answer: 'Abbott; 415099',
      reasoning: [
        '“Double B” and “double T” give two letters each: A-B-B-O-T-T. Write each letter as you hear it, then count them.',
        '“Oh” is the digit 0, and “double nine” is 99.',
        'The speaker says “double eight” first, then corrects it. Only write the corrected number: 415099.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Writing numbers, dates and money correctly',
      items: [
        'Write numbers as digits (15, not fifteen): it is faster and avoids spelling mistakes.',
        'Dates can be written 3 March, March 3 or 3rd March; all are accepted. Do not write the month as a number, which can be read two ways.',
        'Times: 9.30, 9:30 or half past nine are all fine, but check whether the form already prints “am” or “pm”.',
        'Money: if the form already shows £, just write the number. Do not add “pounds” if it would break the word limit.',
        'Phone numbers: write every digit and check the length. A UK number usually has eleven digits.',
      ],
    },
    {
      kind: 'list',
      heading: 'High-frequency words that are often misspelled',
      items: [
        'accommodation (double C, double M)',
        'Wednesday, February',
        'library, restaurant, environment',
        'government, parliament',
        'necessary (one C, double S)',
        'questionnaire (double N)',
        'recommend (one C, double M)',
        'business, colleague, equipment',
        'beginning, committee, separate',
        'temperature, convenient, receipt',
      ],
    },
    {
      kind: 'trap',
      text: 'Spelling counts even when the meaning is clear. “Accomodation”, “Wensday” and “questionaire” are all marked wrong. If you are unsure of a common word, it is worth learning it now rather than hoping for the best on the day.',
    },
    {
      kind: 'tip',
      text: 'Use the app’s **number and spelling dictation trainer** for five minutes a day. Hearing letters, phone numbers and dates at speed is the fastest way to stop losing these marks.',
    },
  ],
  drills: ['drill-listen-form-spelling'],
})
