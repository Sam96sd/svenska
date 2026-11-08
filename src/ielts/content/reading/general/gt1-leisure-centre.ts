import { definePassage } from '../../define'

/** Original text. General Training Section 1 style: two short everyday texts. */
export default definePassage({
  id: 'gt1-leisure-centre',
  skill: 'reading',
  module: 'general',
  section: 'gt1',
  title: 'Riverside Leisure Centre',
  topic: 'Leisure and sport',
  minutes: 15,
  level: 1,
  texts: [
    {
      kind: 'Information leaflet',
      title: 'Membership options',
      paragraphs: [
        {
          text: 'Riverside Leisure Centre offers three types of membership. All members receive a photo card, which must be shown at reception on every visit. Cards that are lost can be replaced for a fee of £5.',
        },
        {
          text: 'Off-Peak membership (£24 per month) gives access to the gym and pool on weekdays between 10 am and 4 pm, and all day on Sundays. Off-Peak members may book fitness classes, but only up to two days in advance.',
        },
        {
          text: 'Standard membership (£35 per month) includes unlimited use of the gym, pool and sauna at any time the centre is open. Standard members can book classes up to seven days ahead and bring one guest per month free of charge.',
        },
        {
          text: 'Family membership (£62 per month) covers two adults and up to three children under 16 living at the same address. Children under 8 must be accompanied by an adult in the pool at all times. The sauna is for adults only.',
        },
        {
          text: 'There is no joining fee for anyone who signs up online. Members who join at reception pay a one-off fee of £15. All memberships can be cancelled with one month’s notice; however, members who cancel within the first three months will be asked to pay for the remaining weeks of that period.',
        },
      ],
    },
    {
      kind: 'Notice',
      title: 'Adult Swim Confidence course',
      paragraphs: [
        {
          text: 'Never learned to swim, or feel nervous in deep water? Our Adult Swim Confidence course is designed for complete beginners aged 18 and over. Groups are small – no more than six learners – and every session is led by a qualified instructor.',
        },
        {
          text: 'The course runs for eight weeks, with one 45-minute session each Tuesday evening at 7.30 pm. All sessions take place in the learner pool, where the water is just 1.2 metres deep, so you can stand up at any time.',
        },
        {
          text: 'The full course costs £48 for members and £72 for non-members, payable when you book. Please bring a swimming cap; goggles can be borrowed from reception if you do not have your own.',
        },
        {
          text: 'Places are limited and usually fill quickly. To reserve a place, speak to a member of staff at reception or call 01632 960 418. If you have a medical condition, you will be asked to complete a short health form before your first session.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'tfng',
      instructions:
        'Look at the leaflet “Membership options”. Do the following statements agree with the information given? Choose TRUE if the statement agrees with the information, FALSE if it contradicts the information, NOT GIVEN if there is no information on this.',
      questions: [
        {
          n: 1,
          statement: 'Members need to show their card each time they come to the centre.',
          answer: 'TRUE',
          location: { ref: 't0p0', quote: 'must be shown at reception on every visit' },
          explanation:
            '“Each time they come” is a paraphrase of “on every visit”, and “must be shown” matches “need to show”.',
        },
        {
          n: 2,
          statement: 'Off-Peak members can use the pool on Saturday mornings.',
          answer: 'FALSE',
          location: {
            ref: 't0p1',
            quote: 'on weekdays between 10 am and 4 pm, and all day on Sundays',
          },
          explanation:
            'The leaflet lists exactly when Off-Peak members have access: weekdays 10–4 and Sundays. Saturday is not included, so the statement contradicts the text.',
        },
        {
          n: 3,
          statement: 'Standard members can use the sauna at no extra cost.',
          answer: 'TRUE',
          location: { ref: 't0p2', quote: 'includes unlimited use of the gym, pool and sauna' },
          explanation:
            'The sauna is “included” in the £35 Standard fee, so there is no extra cost. “Includes” is the key word.',
        },
        {
          n: 4,
          statement: 'Standard members may bring a guest for free every week.',
          answer: 'FALSE',
          location: { ref: 't0p2', quote: 'bring one guest per month free of charge' },
          explanation:
            'The text says one free guest per MONTH, not per week. The frequency contradicts the statement.',
        },
        {
          n: 5,
          statement: 'Children under 16 are not allowed to use the gym.',
          answer: 'NOT GIVEN',
          location: {
            ref: 't0p3',
            quote: 'Children under 8 must be accompanied by an adult in the pool',
          },
          explanation:
            'The leaflet gives rules for children in the pool and the sauna, but says nothing about children in the gym. Don’t assume a rule that isn’t there.',
        },
        {
          n: 6,
          statement: 'Membership prices are likely to go up next year.',
          answer: 'NOT GIVEN',
          location: {
            ref: 't0p4',
            quote: 'All memberships can be cancelled with one month’s notice',
          },
          explanation:
            'Prices are given, but there is no information about future price changes anywhere in the leaflet.',
        },
        {
          n: 7,
          statement: 'People who become members online do not pay a joining fee.',
          answer: 'TRUE',
          location: {
            ref: 't0p4',
            quote: 'There is no joining fee for anyone who signs up online',
          },
          explanation:
            '“Become members online” paraphrases “signs up online”; “no joining fee” matches directly.',
        },
      ],
    },
    {
      type: 'completion',
      format: 'note',
      instructions: 'Look at the notice “Adult Swim Confidence course”. Complete the notes below.',
      wordLimit: { words: 1, number: true },
      title: 'Adult Swim Confidence course',
      body: [
        {
          kind: 'bullets',
          items: [
            'suitable for beginners aged [[8]] or older',
            'maximum number of learners in a group: [[9]]',
            'the course lasts [[10]] weeks',
            'sessions are on [[11]] evenings',
            'price for people who are not members: £[[12]]',
            'learners must bring a [[13]]',
            'people with a medical condition must fill in a [[14]] form',
          ],
        },
      ],
      questions: [
        {
          n: 8,
          answers: ['18'],
          location: { ref: 't1p0', quote: 'complete beginners aged 18 and over' },
          explanation:
            '“Aged 18 or older” = “aged 18 and over”. Write the number only: the words are already in the notes.',
        },
        {
          n: 9,
          answers: ['6'],
          location: { ref: 't1p0', quote: 'no more than six learners' },
          explanation: '“Maximum” paraphrases “no more than”. “6” and “six” are both correct.',
        },
        {
          n: 10,
          answers: ['8'],
          location: { ref: 't1p1', quote: 'The course runs for eight weeks' },
          explanation:
            '“Lasts” paraphrases “runs for”. Don’t confuse it with the 45-minute session length.',
          distractors: ['45'],
        },
        {
          n: 11,
          answers: ['Tuesday', 'Tuesdays'],
          location: { ref: 't1p1', quote: 'each Tuesday evening at 7.30 pm' },
          explanation:
            'The notes ask for the day. The time (7.30 pm) is not needed and would break the word limit.',
        },
        {
          n: 12,
          answers: ['72'],
          location: { ref: 't1p2', quote: '£72 for non-members' },
          explanation:
            '“People who are not members” = “non-members”. £48 is the price for members — a typical trap that sits right next to the answer.',
          distractors: ['48'],
        },
        {
          n: 13,
          answers: ['cap'],
          location: { ref: 't1p2', quote: 'Please bring a swimming cap' },
          explanation:
            'The limit is ONE WORD, so write “cap” (“swimming cap” is two words). Goggles can be borrowed, so they are not something learners must bring.',
          distractors: ['goggles'],
        },
        {
          n: 14,
          answers: ['health'],
          location: { ref: 't1p3', quote: 'complete a short health form' },
          explanation: '“Fill in” paraphrases “complete”. The word before “form” is the answer.',
        },
      ],
    },
  ],
})
