import { definePassage } from '../../define'

/** Original text. General Training Section 1 style: five short adverts and a set of rules. */
export default definePassage({
  id: 'gt1-evening-courses',
  skill: 'reading',
  module: 'general',
  section: 'gt1',
  use: 'practice',
  title: 'Ashworth Adult Learning Centre: evening courses',
  topic: 'Education and leisure',
  minutes: 15,
  level: 1,
  texts: [
    {
      kind: 'Advertisement',
      title: 'A – Furniture Restoration',
      paragraphs: [
        {
          text: 'Give tired chairs, tables and cabinets a new lease of life. Over ten Wednesday evenings, experienced cabinet-maker Tom Reddaway will show you how to strip old finishes, repair loose joints and apply wax and French polish. From week three, you will work on a small piece of your own, so please choose something that you can carry easily. All tools, polishes and protective clothing are supplied.',
        },
        {
          text: 'The workshop is on the ground floor of our Mill Lane annexe and has step-free access throughout. Because of the machinery used, this course is not open to anyone under 18. Wednesdays, 6.30–9 pm. £145, including materials.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'B – Conversational Italian (Improvers)',
      paragraphs: [
        {
          text: 'Already know some Italian but find it hard to keep a conversation going? This twelve-week course is for people who have completed a beginners’ course or have similar knowledge. If you are not sure whether your Italian is good enough, the tutor, Giulia Marchetti, is happy to speak to you informally by phone before you enrol.',
        },
        {
          text: 'Classes are taught almost entirely in Italian and concentrate on speaking and listening rather than written grammar exercises. Tuesdays, 7–9 pm. £120 (£96 for learners aged 60 and over). The course book costs an additional £18 and will be needed from the first session.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'C – Digital Photography',
      paragraphs: [
        {
          text: 'Stop relying on automatic settings and learn to take control of your camera. Over eight weeks, you will explore exposure, composition and lighting, and on two Saturday mornings there will be an optional photo walk around the old town. You will need a camera that allows manual adjustment; unfortunately, smartphones are not suitable for this course.',
        },
        {
          text: 'Editing software is available on the centre’s computers during class. If you would like to continue editing at home, you will need to buy your own licence. Thursdays, 6.30–8.30 pm. £110.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'D – Bookkeeping for Small Businesses',
      paragraphs: [
        {
          text: 'Aimed at sole traders and anyone planning to start a business, this practical ten-week course covers recording income and expenses, preparing invoices and getting your records ready for a tax return. The course does not lead to a formal qualification, but learners who attend at least eight sessions will receive a certificate of attendance.',
        },
        {
          text: 'Please bring a laptop if you have one; a small number are available to borrow from the centre. Mondays, 6–8 pm. £95, or £47.50 for anyone receiving unemployment benefit.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'E – Garden Design',
      paragraphs: [
        {
          text: 'Whether you have a small courtyard or a large plot, this course will help you plan a garden that looks good in every season. Led by award-winning designer Priya Halloran, it combines classroom sessions with two visits to private gardens in the area; a small entrance charge is payable on each visit. By the end of the course you will have drawn a detailed plan of your own garden to scale.',
        },
        {
          text: 'No previous experience is needed. Wednesdays, 7–9 pm, for nine weeks starting on 14 January. £130.',
        },
      ],
    },
    {
      kind: 'Information',
      title: 'Enrolment and refunds',
      paragraphs: [
        {
          text: 'You can enrol online at any time, or in person at the main reception in Carlow Street, which is open from 9 am to 7 pm, Monday to Friday. We are unable to accept enrolments by telephone. Fees must normally be paid in full when you enrol, but courses costing more than £100 may be paid in two equal instalments: the first when you enrol, and the second before the fourth session.',
        },
        {
          text: 'Each course needs at least eight learners to run. If a course has to be cancelled because not enough people have enrolled, we will contact you before the start date and offer you either a full refund or a place on another course of your choice.',
        },
        {
          text: 'If you decide to withdraw from a course, you can claim a refund, minus a £10 administration charge, provided that you inform us before the second session. After this, refunds are given only in exceptional circumstances, such as serious illness, and you will be asked for supporting evidence. The cost of course books and materials cannot be refunded once they have been issued.',
        },
        {
          text: 'Please let your tutor know in advance if you are unable to attend a class. Learners who miss three sessions in a row without giving a reason may lose their place to someone on the waiting list. Free parking is available behind the main building after 5.30 pm, although spaces are limited.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'match-info',
      instructions:
        'Look at the five advertisements for evening courses, A–E. For which course are the following statements true? You may use any letter more than once.',
      optionsTitle: 'Courses',
      options: [
        { key: 'A', text: 'Furniture Restoration' },
        { key: 'B', text: 'Conversational Italian (Improvers)' },
        { key: 'C', text: 'Digital Photography' },
        { key: 'D', text: 'Bookkeeping for Small Businesses' },
        { key: 'E', text: 'Garden Design' },
      ],
      reuse: true,
      questions: [
        {
          n: 1,
          prompt:
            'Learners will have to pay extra for activities that take place away from the classroom.',
          answer: 'E',
          location: {
            ref: 't4p0',
            quote: 'a small entrance charge is payable on each visit',
          },
          explanation:
            'The Garden Design course includes two visits to private gardens, and an entrance charge is payable on each one. The photography course (C) also has activities outside the classroom (the photo walks), but no extra cost is mentioned for them.',
          traps: {
            C: 'The photo walks take place outside, but they are simply described as optional; nothing says learners must pay for them.',
          },
        },
        {
          n: 2,
          prompt: 'There is a lower fee for people in a certain age group.',
          answer: 'B',
          location: { ref: 't1p1', quote: '£96 for learners aged 60 and over' },
          explanation:
            'The Italian course costs £96 instead of £120 for learners aged 60 and over, which is a concession based on age.',
          traps: {
            D: 'Bookkeeping also offers a reduced fee, but for people receiving unemployment benefit, not for an age group.',
            A: 'Furniture Restoration mentions an age (under 18), but that is a restriction on who can join, not a cheaper price.',
          },
        },
        {
          n: 3,
          prompt: 'Learners can receive a document that shows they have attended regularly.',
          answer: 'D',
          location: {
            ref: 't3p0',
            quote:
              'learners who attend at least eight sessions will receive a certificate of attendance',
          },
          explanation:
            '“A document that shows they have attended regularly” paraphrases “a certificate of attendance” for those who come to at least eight sessions. The course does not give a formal qualification, but the question does not ask about one.',
          traps: {
            E: 'Garden Design learners finish with a plan of their own garden, but that is something they produce, not proof of attendance.',
          },
        },
        {
          n: 4,
          prompt:
            'The course is held in a place that is suitable for people who cannot use stairs.',
          answer: 'A',
          location: { ref: 't0p1', quote: 'has step-free access throughout' },
          explanation:
            '“Step-free access” means there are no steps or stairs to use, so the Mill Lane workshop suits people who cannot use stairs. No other advert describes access to its building.',
        },
        {
          n: 5,
          prompt: 'The advertisement states that a particular type of device cannot be used.',
          answer: 'C',
          location: { ref: 't2p0', quote: 'smartphones are not suitable for this course' },
          explanation:
            'The photography course needs a camera with manual settings and says smartphones are not suitable, so a particular device is ruled out.',
          traps: {
            D: 'Bookkeeping mentions laptops, but learners are invited to bring one or borrow one; no device is ruled out.',
          },
        },
        {
          n: 6,
          prompt:
            'People can find out whether their current level is high enough before they sign up.',
          answer: 'B',
          location: {
            ref: 't1p0',
            quote: 'is happy to speak to you informally by phone before you enrol',
          },
          explanation:
            'The Italian tutor will talk to anyone “not sure whether your Italian is good enough” before they enrol. “Sign up” paraphrases “enrol”.',
          traps: {
            E: 'Garden Design says no previous experience is needed, so there is no level to check.',
          },
        },
        {
          n: 7,
          prompt: 'There is a minimum age for learners.',
          answer: 'A',
          location: { ref: 't0p1', quote: 'this course is not open to anyone under 18' },
          explanation: 'Nobody under 18 can join Furniture Restoration, so 18 is the minimum age.',
          traps: {
            B: 'The Italian course mentions learners aged 60 and over, but only to give them a cheaper fee; younger people can still join.',
          },
        },
      ],
    },
    {
      type: 'tfng',
      instructions:
        'Look at the information “Enrolment and refunds”. Do the following statements agree with the information given? Choose TRUE if the statement agrees with the information, FALSE if it contradicts the information, NOT GIVEN if there is no information on this.',
      questions: [
        {
          n: 8,
          statement: 'People who prefer not to use the internet can enrol by telephone.',
          answer: 'FALSE',
          location: { ref: 't5p0', quote: 'We are unable to accept enrolments by telephone.' },
          explanation:
            'The only ways to enrol are online or in person at reception. Telephone enrolment is explicitly not accepted, so the statement contradicts the text.',
        },
        {
          n: 9,
          statement:
            'Some learners are allowed to pay part of their fee after their course has started.',
          answer: 'TRUE',
          location: {
            ref: 't5p0',
            quote: 'the first when you enrol, and the second before the fourth session',
          },
          explanation:
            'For courses over £100, the second instalment is due before the fourth session, so it can be paid after the first, second or third session, i.e. after the course has started. “Some learners” matches the condition (only courses costing more than £100).',
        },
        {
          n: 10,
          statement: 'Learners whose course is cancelled will be informed by email.',
          answer: 'NOT GIVEN',
          location: { ref: 't5p1', quote: 'we will contact you before the start date' },
          explanation:
            'The centre promises to contact learners, but it does not say how (email, phone or letter). The method is missing, so the statement is NOT GIVEN.',
        },
        {
          n: 11,
          statement:
            'Learners who withdraw from a course before the second session get all of their fee back.',
          answer: 'FALSE',
          location: { ref: 't5p2', quote: 'minus a £10 administration charge' },
          explanation:
            'They do get a refund, but £10 is deducted, so they do not get “all of their fee” back. The text contradicts the statement.',
        },
        {
          n: 12,
          statement:
            'Learners who withdraw once the second session has taken place may still receive a refund if they can provide proof of their reason.',
          answer: 'TRUE',
          location: {
            ref: 't5p2',
            quote:
              'refunds are given only in exceptional circumstances, such as serious illness, and you will be asked for supporting evidence',
          },
          explanation:
            'A late refund is possible (“may”) in exceptional circumstances, and “supporting evidence” is required, which matches “if they can prove their reason”.',
        },
        {
          n: 13,
          statement: 'Learners who miss three sessions in a row will always lose their place.',
          answer: 'FALSE',
          location: {
            ref: 't5p3',
            quote:
              'Learners who miss three sessions in a row without giving a reason may lose their place',
          },
          explanation:
            'The text says such learners “may” lose their place, and only if they give no reason. “Always” contradicts both the “may” and the condition.',
        },
        {
          n: 14,
          statement: 'Learners can reserve a parking space behind the main building.',
          answer: 'NOT GIVEN',
          location: {
            ref: 't5p3',
            quote:
              'Free parking is available behind the main building after 5.30 pm, although spaces are limited',
          },
          explanation:
            'The text mentions free parking and says spaces are limited, but nothing about whether a space can be reserved. Limited spaces do not tell us if booking is possible.',
        },
      ],
    },
  ],
})
