import { definePassage } from '../../define'

/** Original texts. General Training mock test 1, Section 1: a council notice and five shop adverts. */
export default definePassage({
  id: 'm-gt1-s1',
  skill: 'reading',
  module: 'general',
  section: 'gt1',
  use: 'mock',
  title: 'Brackford: household waste and second-hand furniture',
  topic: 'Home and community',
  intro: 'Original practice texts: the city, council services and shops described are fictional.',
  minutes: 17,
  level: 1,
  texts: [
    {
      kind: 'Notice',
      title: 'Brackford City Council: changes to your household collections',
      paragraphs: [
        {
          text: 'From Monday 3 March, Brackford City Council is changing the way household waste is collected. Every household will receive a new grey bin for general rubbish, and this will be emptied once every two weeks instead of every week. Your green box for paper and card and your blue bin for glass, cans and plastic bottles will continue to be collected weekly, on the same day as now.',
        },
        {
          text: 'A food-waste caddy will be delivered free of charge to every address during February, together with a roll of compostable liners. Food waste will be collected every week. Further rolls of liners can be ordered online at no cost, but please do not line your caddy with plastic carrier bags, as these cannot be processed at the composting plant.',
        },
        {
          text: 'Please put your bins out at the edge of your property by 7 am on your collection day, with the lids fully closed. Extra bags left beside a grey bin will not be taken. If your bin has not been emptied, report this online by the end of the following day. Households of six or more people may apply for a larger grey bin.',
        },
        {
          text: 'Large items such as sofas, wardrobes and mattresses can be collected from your home for £28 for up to three items. Residents who receive housing benefit pay half this amount. Furniture in good condition may also be accepted by local reuse shops, some of which will collect it from you (see below). The Mill Lane recycling centre is open daily from 8 am to 6 pm, except on 25 and 26 December and 1 January. Anyone arriving in a van or with a trailer must book a permit online at least 24 hours before their visit.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'A – Second Chance Furniture',
      paragraphs: [
        {
          text: 'Every sofa, table and bed we sell helps to fund Harbour House, Brackford’s hostel for homeless young people. We are happy to collect donated furniture from anywhere in the city at no charge – just phone to arrange a day. Please note that, for safety reasons, we can only accept sofas, armchairs and mattresses that still carry their original fire-safety label. Our shop on Quay Street is run entirely by volunteers and is open Tuesday to Saturday, 10 am to 4 pm.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'B – Oak & Iron',
      paragraphs: [
        {
          text: 'Oak & Iron specialises in quality furniture made before 1960, from Victorian dining tables to elegant sideboards of the 1950s. Every piece is carefully restored in our own workshop before it goes on sale. Thinking of selling? We will visit your home to give a free valuation, with no obligation to sell. Delivery is available throughout the region, with charges based on distance. Open Thursday to Sunday, or at other times by arrangement.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'C – Brackford Reuse Hub',
      paragraphs: [
        {
          text: 'Located next to the Mill Lane recycling centre, the Reuse Hub sells furniture and household goods that would otherwise have been thrown away, all cleaned and checked by our team. Prices start from just £2, and customers who show a current benefits letter receive a further 25% off. We do not offer delivery, but our small van can be hired by the hour by any customer with a full driving licence. Open seven days a week.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'D – The Mendit Collective',
      paragraphs: [
        {
          text: 'We are a not-for-profit workshop that turns unwanted furniture into something special. Our shop sells chairs, chests of drawers and bookcases that have been painted, re-covered or rebuilt by our members. On the first Thursday of every month, our free repair evening lets you bring along a wobbly chair or a sticking drawer and learn how to fix it yourself, with tools provided. Membership, which gives access to the workshop at any time, costs £40 a year.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'E – Flatpack Again',
      paragraphs: [
        {
          text: 'Moving house or refurbishing an office? Flatpack Again buys and sells nearly new self-assembly furniture, from desks and filing cabinets to bunk beds. For a fixed fee of £35, our fitters will take your purchase apart at our warehouse and put it back together in your home. Every item carries a 90-day guarantee. Our warehouse showroom on Fenton Road is open to visitors by appointment only; please book through our website, where you can also see our full stock.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'tfng',
      instructions:
        'Look at the notice “Brackford City Council: changes to your household collections”. Do the following statements agree with the information given? Choose TRUE if the statement agrees with the information, FALSE if it contradicts the information, NOT GIVEN if there is no information on this.',
      questions: [
        {
          n: 1,
          statement: 'General rubbish will be collected less often than it is at present.',
          answer: 'TRUE',
          location: {
            ref: 't0p0',
            quote: 'this will be emptied once every two weeks instead of every week',
          },
          explanation:
            'The grey bin for general rubbish will be emptied every two weeks “instead of every week”, so collections will be less frequent than now.',
        },
        {
          n: 2,
          statement: 'Paper and card will be collected on a different day from the current one.',
          answer: 'FALSE',
          location: {
            ref: 't0p0',
            quote: 'will continue to be collected weekly, on the same day as now',
          },
          explanation:
            'The green box for paper and card will be collected “on the same day as now”, which contradicts the statement.',
        },
        {
          n: 3,
          statement: 'The new grey bins are bigger than the bins they replace.',
          answer: 'NOT GIVEN',
          location: {
            ref: 't0p0',
            quote: 'Every household will receive a new grey bin for general rubbish',
          },
          explanation:
            'The notice says every household will get a new grey bin, but it never compares its size with the old bins. The “larger grey bin” in the third paragraph is larger than the standard new bin, not larger than the old one.',
        },
        {
          n: 4,
          statement: 'Residents will have to pay for any extra liners for their food-waste caddy.',
          answer: 'FALSE',
          location: {
            ref: 't0p1',
            quote: 'Further rolls of liners can be ordered online at no cost',
          },
          explanation:
            '“Extra liners” paraphrases “further rolls of liners”, and these are available “at no cost”, so residents do not pay.',
        },
        {
          n: 5,
          statement:
            'A bin that has been missed will be emptied within 24 hours of being reported.',
          answer: 'NOT GIVEN',
          location: {
            ref: 't0p2',
            quote:
              'If your bin has not been emptied, report this online by the end of the following day',
          },
          explanation:
            'The notice tells residents how soon they must report a missed bin, but says nothing about how quickly the council will then empty it. Do not confuse the deadline for reporting with the time it takes to respond.',
        },
        {
          n: 6,
          statement:
            'People who receive housing benefit can have large items taken away free of charge.',
          answer: 'FALSE',
          location: {
            ref: 't0p3',
            quote: 'Residents who receive housing benefit pay half this amount',
          },
          explanation:
            'People on housing benefit pay half of the £28 fee. Paying half is not the same as paying nothing, so the statement is contradicted.',
        },
        {
          n: 7,
          statement:
            'Anyone taking a van to the recycling centre must arrange this before the day of their visit.',
          answer: 'TRUE',
          location: {
            ref: 't0p3',
            quote:
              'Anyone arriving in a van or with a trailer must book a permit online at least 24 hours before their visit',
          },
          explanation:
            'A permit must be booked “at least 24 hours before” the visit, so the arrangement has to be made in advance, before the day itself.',
        },
      ],
    },
    {
      type: 'match-info',
      instructions:
        'Look at the five advertisements for shops that sell second-hand furniture, A–E. For which shop are the following statements true? You may use any letter more than once.',
      optionsTitle: 'Shops',
      options: [
        { key: 'A', text: 'Second Chance Furniture' },
        { key: 'B', text: 'Oak & Iron' },
        { key: 'C', text: 'Brackford Reuse Hub' },
        { key: 'D', text: 'The Mendit Collective' },
        { key: 'E', text: 'Flatpack Again' },
      ],
      reuse: true,
      questions: [
        {
          n: 8,
          prompt:
            'It will send someone to people’s homes to say how much their furniture is worth.',
          answer: 'B',
          location: { ref: 't2p0', quote: 'We will visit your home to give a free valuation' },
          explanation:
            '“Say how much their furniture is worth” paraphrases “give a free valuation”, and Oak & Iron will “visit your home” to do this.',
          traps: {
            A: 'Second Chance Furniture also comes to people’s homes, but only to collect donated furniture, not to value it.',
          },
        },
        {
          n: 9,
          prompt:
            'Some customers can pay a lower price if they provide evidence of their financial situation.',
          answer: 'C',
          location: {
            ref: 't3p0',
            quote: 'customers who show a current benefits letter receive a further 25% off',
          },
          explanation:
            'A benefits letter is evidence of a customer’s financial situation, and showing one gives “a further 25% off”, i.e. a lower price.',
        },
        {
          n: 10,
          prompt: 'It refuses certain items if they do not meet a safety requirement.',
          answer: 'A',
          location: {
            ref: 't1p0',
            quote:
              'we can only accept sofas, armchairs and mattresses that still carry their original fire-safety label',
          },
          explanation:
            'Upholstered items and mattresses are accepted “only” if they still have their fire-safety label, so items without one are refused “for safety reasons”.',
        },
        {
          n: 11,
          prompt: 'People can learn how to mend their own furniture there.',
          answer: 'D',
          location: { ref: 't4p0', quote: 'learn how to fix it yourself' },
          explanation:
            'At the Mendit Collective’s monthly repair evening, people bring a broken item and “learn how to fix it yourself”. “Mend” paraphrases “fix”.',
          traps: {
            B: 'Oak & Iron restores furniture in its own workshop, but its staff do the work; customers are not taught to do it.',
          },
        },
        {
          n: 12,
          prompt: 'Visitors cannot go there without arranging a time in advance.',
          answer: 'E',
          location: {
            ref: 't5p0',
            quote: 'Our warehouse showroom on Fenton Road is open to visitors by appointment only',
          },
          explanation: '“By appointment only” means that a visit must always be booked beforehand.',
          traps: {
            B: 'Oak & Iron can be visited at other times “by arrangement”, but it also has normal opening days (Thursday to Sunday), so an arrangement is not always necessary.',
          },
        },
        {
          n: 13,
          prompt: 'It promises to deal with problems with an item for a period after it is bought.',
          answer: 'E',
          location: { ref: 't5p0', quote: 'Every item carries a 90-day guarantee' },
          explanation:
            'A guarantee is a promise to repair or replace an item that develops a fault within a set period, here 90 days after purchase.',
        },
        {
          n: 14,
          prompt: 'Customers can pay to use a vehicle to take their purchases away themselves.',
          answer: 'C',
          location: {
            ref: 't3p0',
            quote:
              'our small van can be hired by the hour by any customer with a full driving licence',
          },
          explanation:
            'The Reuse Hub does not deliver, but customers can hire its van “by the hour”, i.e. pay to use it themselves.',
          traps: {
            B: 'Oak & Iron delivers items for a charge, but the shop does the transporting; customers do not use a vehicle themselves.',
            E: 'Flatpack Again’s fitters bring the furniture to the customer’s home; customers are not offered a vehicle.',
          },
        },
      ],
    },
  ],
})
