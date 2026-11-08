import { definePassage } from '../../define'

/** Original text. General Training Section 2 style: a volunteer guide and an expenses policy. */
export default definePassage({
  id: 'm-gt2-s2',
  skill: 'reading',
  module: 'general',
  section: 'gt2',
  use: 'mock',
  title: 'Harrowfield Community Hospital: volunteering',
  topic: 'Work',
  intro: 'Original practice material: the hospital and people described are fictional.',
  minutes: 20,
  level: 2,
  texts: [
    {
      kind: 'Staff guide',
      title: 'Harrowfield Community Hospital – A guide for new volunteers',
      paragraphs: [
        {
          label: 'A',
          text: 'Before your first shift, you will attend a half-day induction session at the hospital’s Education Centre. This covers fire safety, hand hygiene and what to do in an emergency, and you will be given your photo identity badge at the end of it. For your first three shifts, you will be paired with an experienced volunteer, who will show you around your ward or department and introduce you to the staff you will be working with. If at any point you feel unsure about a task, please ask: nobody expects you to know everything straight away.',
        },
        {
          label: 'B',
          text: 'Volunteers make a huge difference to patients’ experience of hospital, but some tasks must be left to qualified staff. You must never help a patient to get out of bed or up from a chair, however light the patient may seem, as this requires specialist training. Do not give patients anything to eat or drink without first checking with a nurse, because some patients are on restricted diets or are waiting for an operation. Finally, if a patient asks you about their illness or treatment, politely explain that you are not able to advise them and fetch a member of the nursing team.',
        },
        {
          label: 'C',
          text: 'During your time at the hospital, you are likely to see or overhear details about patients, and all such information must be treated as confidential. Do not discuss patients with anyone outside the hospital, including your own family, and avoid talking about them in lifts, corridors and other public areas where you might be overheard. Photographs must never be taken on wards, even of fellow volunteers, in case a patient appears in the background. If someone you know is admitted while you are on duty, do not tell others that they are in hospital unless they have asked you to.',
        },
        {
          label: 'D',
          text: 'You will be issued with two blue volunteer tabards, which should be worn over your own clothes on every shift and washed at home at a high temperature. Please wear comfortable, flat shoes that cover the whole foot, since you may be standing for long periods. For reasons of hygiene, jewellery should be kept to a minimum: a plain ring and small earrings are acceptable, but watches and bracelets must not be worn on wards. Long hair should be tied back.',
        },
        {
          label: 'E',
          text: 'Shifts usually last three or four hours, and we ask volunteers to commit to at least one shift a week for a minimum of six months. You can choose your shifts using the online rota, which is updated every Friday for the following fortnight. If you are unable to attend a shift, please let the Volunteer Services team know at least 24 hours in advance so that cover can be found. Volunteers who reach 100 hours of service are invited to an annual celebration evening and presented with a certificate.',
        },
        {
          label: 'F',
          text: 'Hospital patients are often more vulnerable to infection than other people, so it is important that you do not come in when you are unwell. If you have had sickness or diarrhoea, you must stay away until you have been free of symptoms for 48 hours. Volunteers are also offered a free flu vaccination each autumn through the Staff Health Service, and we strongly encourage you to accept it. If you injure yourself while volunteering, however minor the injury, report it to the nurse in charge before you leave.',
        },
        {
          label: 'G',
          text: 'If you see anything that worries you – for example, a patient who seems distressed and is not receiving attention, or a hazard such as a wet floor – tell the nurse in charge of the ward straight away. If you do not feel comfortable doing this, or you think your concern has not been dealt with, contact the Volunteer Services Manager, Diane Okafor, who will treat what you say in confidence. You will never be criticised for raising a genuine concern, even if it turns out that there was no problem.',
        },
      ],
    },
    {
      kind: 'Policy',
      title: 'Volunteer expenses policy',
      paragraphs: [
        {
          text: 'Harrowfield Community Hospital does not want anyone to be out of pocket as a result of volunteering. Volunteers may therefore claim back reasonable expenses that they have paid while carrying out their role, as described below. Expenses are a repayment of costs, not a payment for your time, so every claim must be supported by evidence wherever possible.',
        },
        {
          text: 'Travel. If you drive to the hospital, you can claim 30p per mile for the journey between your home and the hospital, up to a maximum of 20 miles each way. Journeys made for any other purpose, such as calling at a shop on the way, cannot be included. If you travel by bus or train, the full cost of a standard-class fare will be repaid, but you must attach your tickets to the claim form. Taxi fares are repaid only in exceptional cases, for example when a shift ends late at night, and must be agreed in advance with the Volunteer Services Manager.',
        },
        {
          text: 'Parking. Volunteers can park free of charge in Car Park C, the staff car park beside the Outpatients building. To do so, you will need a volunteer parking permit, which you can collect from the main reception desk on showing your identity badge. The permit must be displayed clearly on the dashboard, and vehicles without one may be fined. Charges paid in the visitor car parks will not be refunded.',
        },
        {
          text: 'Meals. Volunteers who work a shift of more than four hours are entitled to a meal voucher worth £6, which can be used in the staff restaurant on the ground floor. Vouchers are handed out by the ward or department coordinator at the start of the shift. They cannot be exchanged for cash, and food bought elsewhere cannot be claimed.',
        },
        {
          text: 'Making a claim. Claim forms are available from the Volunteer Services office or can be downloaded from the hospital website. Complete one form for each calendar month, listing the date of each shift and the costs involved, and hand it in, together with your receipts, no later than six weeks after the end of the month concerned. Late claims will not normally be accepted. Payment is made by bank transfer, usually within ten working days of the claim being approved; we are unable to pay expenses in cash.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'headings',
      instructions:
        'The guide for new volunteers has seven sections, A–G. Choose the correct heading for each section from the list of headings below. There are more headings than sections.',
      headings: [
        { key: 'i', text: 'Learning the basics with help from others' },
        { key: 'ii', text: 'Activities that volunteers are not allowed to carry out' },
        { key: 'iii', text: 'Keeping what you learn about patients to yourself' },
        { key: 'iv', text: 'Clothing and personal appearance' },
        { key: 'v', text: 'Organising when you work' },
        { key: 'vi', text: 'What to do if something seems wrong' },
        { key: 'vii', text: 'Preventing the spread of illness, and other health matters' },
        { key: 'viii', text: 'Rewards for long service' },
        { key: 'ix', text: 'How volunteering can lead to paid employment' },
        { key: 'x', text: 'The range of roles available to volunteers' },
        { key: 'xi', text: 'Training in how to move patients safely' },
      ],
      questions: [
        {
          n: 1,
          para: 'A',
          answer: 'i',
          location: {
            ref: 'A',
            quote: 'For your first three shifts, you will be paired with an experienced volunteer',
          },
          explanation:
            'Section A describes how new volunteers start: an induction session covering the essentials, and three shifts working with an experienced volunteer. That is learning the basics with help from others.',
          traps: {
            x: 'The section mentions “your ward or department”, but it does not describe the different roles volunteers can choose.',
          },
        },
        {
          n: 2,
          para: 'B',
          answer: 'ii',
          location: { ref: 'B', quote: 'some tasks must be left to qualified staff' },
          explanation:
            'Section B lists things volunteers must not do: help patients out of bed or up from a chair, give food or drink without checking, or advise patients about their treatment.',
          traps: {
            xi: 'Moving patients “requires specialist training”, but volunteers are told never to do it; the section does not offer that training.',
          },
        },
        {
          n: 3,
          para: 'C',
          answer: 'iii',
          location: {
            ref: 'C',
            quote: 'all such information must be treated as confidential',
          },
          explanation:
            'Every point in Section C is about not passing on information about patients: not discussing them outside, not being overheard, not taking photographs and not telling others who has been admitted.',
          traps: {
            ii: 'The section contains several “do not” rules, but they are all about patient information, not about tasks volunteers may not carry out. Heading ii fits Section B.',
          },
        },
        {
          n: 4,
          para: 'D',
          answer: 'iv',
          location: {
            ref: 'D',
            quote: 'which should be worn over your own clothes on every shift',
          },
          explanation:
            'Section D covers tabards, shoes, jewellery and hair: what volunteers should wear and how they should look.',
          traps: {
            vii: 'Hygiene is given as the reason for the jewellery rule, but the section as a whole is about clothing and appearance.',
          },
        },
        {
          n: 5,
          para: 'E',
          answer: 'v',
          location: {
            ref: 'E',
            quote: 'You can choose your shifts using the online rota',
          },
          explanation:
            'Section E explains how long shifts are, the minimum commitment, how to choose shifts on the rota and what to do if you cannot attend, all about organising when you work.',
          traps: {
            viii: 'The certificate for 100 hours is a detail in the final sentence, not the main idea of the section.',
          },
        },
        {
          n: 6,
          para: 'F',
          answer: 'vii',
          location: {
            ref: 'F',
            quote: 'it is important that you do not come in when you are unwell',
          },
          explanation:
            'Section F is about health: staying away when ill so that vulnerable patients are not infected, the flu vaccination and reporting injuries.',
          traps: {
            vi: 'Reporting an injury is mentioned, but this is about the volunteer’s own health; reporting concerns about patients is the subject of Section G.',
          },
        },
        {
          n: 7,
          para: 'G',
          answer: 'vi',
          location: {
            ref: 'G',
            quote: 'If you see anything that worries you',
          },
          explanation:
            'Section G tells volunteers who to tell if they notice a problem, such as a distressed patient or a hazard, and promises they will not be criticised for raising a concern.',
          traps: {
            iii: 'The manager will treat what you say “in confidence”, but this is about protecting the volunteer who reports a problem, not about keeping patient information private.',
          },
        },
      ],
    },
    {
      type: 'completion',
      format: 'table',
      instructions:
        'Read the “Volunteer expenses policy”. Complete the table below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.',
      wordLimit: { words: 2, number: true },
      title: 'Volunteer expenses',
      body: [
        {
          kind: 'table',
          header: ['Expense', 'What is paid', 'Conditions'],
          rows: [
            [
              'Car travel',
              '30p per mile',
              'Only for journeys between home and the hospital, up to [[8]] miles each way',
            ],
            [
              'Bus or train',
              'The full standard-class fare',
              'Tickets must be attached to the [[9]]',
            ],
            ['Parking', 'Free in Car Park C', 'A [[10]] must be shown on the dashboard'],
            [
              'Meals',
              'A £6 voucher for the staff [[11]]',
              'Only for shifts of more than four hours',
            ],
            [
              'Claims',
              'One form per calendar month',
              'Hand in with receipts within [[12]] of the end of the month',
            ],
            ['Payment', 'By [[13]]', 'Usually within ten working days of approval'],
          ],
        },
      ],
      questions: [
        {
          n: 8,
          answers: ['20'],
          location: {
            ref: 't1p1',
            quote: 'up to a maximum of 20 miles each way',
          },
          explanation:
            '“Up to … miles each way” matches “up to a maximum of 20 miles each way”. 30p is the rate per mile, which is already in the table.',
          distractors: ['30'],
        },
        {
          n: 9,
          answers: ['claim form'],
          location: {
            ref: 't1p1',
            quote: 'you must attach your tickets to the claim form',
          },
          explanation: 'Bus and train tickets must be attached to the claim form.',
        },
        {
          n: 10,
          answers: ['parking permit', 'permit'],
          location: {
            ref: 't1p2',
            quote: 'The permit must be displayed clearly on the dashboard',
          },
          explanation:
            '“Shown” paraphrases “displayed”. The text calls it a “volunteer parking permit”; “parking permit” fits the two-word limit. The identity badge is only shown at reception to collect the permit.',
          distractors: ['identity badge', 'badge', 'ID badge'],
        },
        {
          n: 11,
          answers: ['restaurant'],
          location: {
            ref: 't1p3',
            quote: 'which can be used in the staff restaurant on the ground floor',
          },
          explanation:
            'The meal voucher can be used in the staff restaurant. The word “staff” is already in the table, so the answer is “restaurant”.',
        },
        {
          n: 12,
          answers: ['six weeks'],
          location: {
            ref: 't1p4',
            quote: 'no later than six weeks after the end of the month concerned',
          },
          explanation:
            '“Within six weeks of the end of the month” paraphrases “no later than six weeks after the end of the month concerned”. Ten working days is how long payment takes, not the deadline for claims.',
          distractors: ['ten working days', '10 working days'],
        },
        {
          n: 13,
          answers: ['bank transfer'],
          location: {
            ref: 't1p4',
            quote: 'Payment is made by bank transfer',
          },
          explanation:
            'Expenses are paid by bank transfer. Cash is a trap: the policy says “we are unable to pay expenses in cash”.',
          distractors: ['cash'],
        },
      ],
    },
  ],
})
