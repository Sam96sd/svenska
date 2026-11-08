import { definePassage } from '../../define'

/** Original text. General Training Section 1 style: four day-trip adverts and a guest information sheet. */
export default definePassage({
  id: 'm-gt2-s1',
  skill: 'reading',
  module: 'general',
  section: 'gt1',
  use: 'mock',
  title: 'Larchmere Holiday Park: day trips and guest information',
  topic: 'Leisure and travel',
  intro: 'Original practice material: the park, places and people described are fictional.',
  minutes: 17,
  level: 1,
  texts: [
    {
      kind: 'Advertisement',
      title: 'A – Ellery Island Cruise',
      paragraphs: [
        {
          text: 'Leave the car behind and spend a relaxed morning on Larchmere Water. Our covered launch departs from the park’s own jetty at 9.45 am and stops for ninety minutes at Ellery Island, where you can follow a waymarked trail through ancient oak woodland or visit the small exhibition in the former boathouse. Hot drinks and snacks are sold on board, but there is no café on the island, so you may wish to bring a packed lunch.',
        },
        {
          text: 'Tuesdays and Fridays, April to October. Adults £16, children (5–15) £8, under-fives free. Sailings may be cancelled at short notice in high winds; if this happens, you will be offered a seat on the next available sailing or your money back. Dogs are welcome on board but must be kept on a lead.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'B – Brantley Steam Railway and Coldwell Market',
      paragraphs: [
        {
          text: 'Travel back in time on one of the region’s oldest heritage railways. A coach collects guests from the park entrance at 10 am and takes them to Upper Brantley station, from where a restored steam train carries you along the river valley to the market town of Coldwell. You will have three hours to explore Coldwell’s Thursday market, famous for its local cheeses and handmade crafts, before the return journey.',
        },
        {
          text: 'Thursdays only. Adults £24, children £12, including coach and train fares. A family ticket for two adults and up to three children costs £65. Please note that the train carriages are not accessible to wheelchair users, although the coach is fitted with a lift.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'C – Guided Walk: Hawkscar Ridge',
      paragraphs: [
        {
          text: 'Enjoy the finest views in the district on this challenging full-day walk led by qualified mountain leader Owen Pritchard. The route covers about 14 kilometres and includes some steep, rocky sections, so it is suitable only for regular walkers with a good level of fitness. Walking boots and waterproof clothing are essential; walking poles can be borrowed free of charge from reception.',
        },
        {
          text: 'Wednesdays and Saturdays, 8.30 am–5 pm. £30 per person; minimum age 12. Groups are limited to ten walkers, and places must be booked at least 48 hours in advance. If the weather forecast is poor, Owen will lead a shorter route at a lower level instead.',
        },
      ],
    },
    {
      kind: 'Advertisement',
      title: 'D – Hillside Pottery Workshop',
      paragraphs: [
        {
          text: 'Get your hands dirty at Ruth Calloway’s pottery studio, just a ten-minute drive from the park. In this two-hour session, Ruth will show you how to make a simple bowl or mug on the potter’s wheel, and you can then decorate it with coloured glazes. No previous experience is needed, and the session is ideal for a rainy afternoon.',
        },
        {
          text: 'Mondays and Wednesdays, 2–4 pm. £22 per person, including all materials. Because pieces must be fired in a kiln, they will not be ready to take home on the day; they can be collected from the studio after five days or posted to your home address for an extra £6. Children under eight must be accompanied by an adult.',
        },
      ],
    },
    {
      kind: 'Information sheet',
      title: 'Welcome to Larchmere Holiday Park',
      paragraphs: [
        {
          text: 'Lodges are available from 4 pm on the day of arrival and must be vacated by 10 am on the day of departure. If you expect to arrive after 8 pm, when reception closes, please telephone in advance so that we can leave your keys in the secure key box beside the main entrance. Each lodge comes with a parking permit for one vehicle, which must be displayed at all times. Any additional vehicles should be left in the overflow car park next to the tennis courts.',
        },
        {
          text: 'The indoor swimming pool is open from 8 am to 8 pm daily. For safety reasons, children under 14 must be supervised by an adult in the water at all times. Swimming is free for guests, but at busy times, especially during school holidays, you may need to book a time slot at reception. The games room, launderette and small shop are located in the Clubhouse. The shop stocks basic groceries, newspapers and fishing permits for the lake.',
        },
        {
          text: 'Please sort your rubbish into the coloured bins at the end of each row of lodges: green for glass, blue for paper and cans, and black for everything else. Dogs are permitted only in lodges marked with a paw symbol on the park map, at a charge of £5 per dog per night. They are not allowed in the Clubhouse or in the children’s play area, and owners are expected to clean up after them.',
        },
        {
          text: 'Out of consideration for other guests, please keep noise to a minimum between 10.30 pm and 7.30 am. Barbecues may be used on the paved patio outside your lodge, but never on wooden decking or indoors. Wi-Fi is available free of charge throughout the park, although the signal may be weak in the lodges furthest from the Clubhouse; reception staff can provide details of a paid high-speed service. All of the day trips shown in this pack can be booked at reception.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'match-info',
      instructions:
        'Look at the four advertisements for day trips, A–D. For which day trip are the following statements true? You may use any letter more than once.',
      optionsTitle: 'Day trips',
      options: [
        { key: 'A', text: 'Ellery Island Cruise' },
        { key: 'B', text: 'Brantley Steam Railway and Coldwell Market' },
        { key: 'C', text: 'Guided Walk: Hawkscar Ridge' },
        { key: 'D', text: 'Hillside Pottery Workshop' },
      ],
      reuse: true,
      questions: [
        {
          n: 1,
          prompt: 'Visitors may need to take their own food with them.',
          answer: 'A',
          location: {
            ref: 't0p0',
            quote: 'there is no café on the island, so you may wish to bring a packed lunch',
          },
          explanation:
            'There is nowhere to buy a meal on Ellery Island, so the advert suggests bringing a packed lunch. “Take their own food” paraphrases “bring a packed lunch”.',
          traps: {
            B: 'Coldwell market is famous for local cheeses, but that is food on sale; nothing suggests visitors need to bring any.',
          },
        },
        {
          n: 2,
          prompt: 'There is a special price for a group of people travelling together.',
          answer: 'B',
          location: {
            ref: 't1p1',
            quote: 'A family ticket for two adults and up to three children costs £65.',
          },
          explanation:
            'The railway trip offers a family ticket, a single price for a group of two adults and up to three children.',
          traps: {
            A: 'The cruise has cheaper prices for children and free travel for under-fives, but these are individual prices, not a price for a group.',
            C: 'The walk mentions groups, but only to say they are limited to ten walkers; there is no group price.',
          },
        },
        {
          n: 3,
          prompt: 'If the weather is bad, participants may do an easier version of the activity.',
          answer: 'C',
          location: {
            ref: 't2p1',
            quote:
              'If the weather forecast is poor, Owen will lead a shorter route at a lower level instead.',
          },
          explanation:
            'In poor weather the walk is not cancelled; Owen leads “a shorter route at a lower level”, which is an easier version of the same activity.',
          traps: {
            A: 'The cruise may be cancelled in high winds, but guests are offered the next sailing or a refund, not a different version of the trip.',
            D: 'The pottery session is “ideal for a rainy afternoon”, but the activity itself does not change with the weather.',
          },
        },
        {
          n: 4,
          prompt: 'Participants can borrow some of the equipment they need without paying.',
          answer: 'C',
          location: {
            ref: 't2p0',
            quote: 'walking poles can be borrowed free of charge from reception',
          },
          explanation:
            'Walkers can borrow walking poles “free of charge”, so this equipment costs nothing extra.',
          traps: {
            D: 'The pottery price includes all materials, but these are used up and paid for as part of the £22 fee; nothing is lent free of charge.',
          },
        },
        {
          n: 5,
          prompt: 'Participants can arrange for something they have made to be delivered to them.',
          answer: 'D',
          location: {
            ref: 't3p1',
            quote: 'posted to your home address for an extra £6',
          },
          explanation:
            'Pottery pieces cannot be taken home on the day, but they can be posted to the participant’s home address for £6. “Delivered” paraphrases “posted”.',
        },
      ],
    },
    {
      type: 'completion',
      format: 'sentence',
      instructions:
        'Look again at the advertisements A–C. Complete the sentences below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.',
      wordLimit: { words: 2, number: true },
      body: [
        {
          kind: 'bullets',
          items: [
            'On Ellery Island there is an exhibition inside an old [[6]].',
            'As well as cheese, the market at Coldwell is well known for its [[7]].',
            'People who want to join the Hawkscar Ridge walk must book a place no less than [[8]] beforehand.',
          ],
        },
      ],
      questions: [
        {
          n: 6,
          answers: ['boathouse', 'boat house', '(former) boathouse'],
          location: {
            ref: 't0p0',
            quote: 'visit the small exhibition in the former boathouse',
          },
          explanation:
            '“An old boathouse” paraphrases “the former boathouse”. The oak woodland is where the trail goes, not where the exhibition is.',
          distractors: ['woodland', 'oak woodland', 'jetty'],
        },
        {
          n: 7,
          answers: ['handmade crafts', 'crafts'],
          location: {
            ref: 't1p0',
            quote: 'famous for its local cheeses and handmade crafts',
          },
          explanation:
            '“Well known for” paraphrases “famous for”. Cheese is already in the sentence, so the answer is the other thing the market is famous for: handmade crafts.',
        },
        {
          n: 8,
          answers: ['48 hours'],
          location: {
            ref: 't2p1',
            quote: 'places must be booked at least 48 hours in advance',
          },
          explanation:
            '“No less than” paraphrases “at least”, and “beforehand” paraphrases “in advance”. You need the unit: “48” alone does not complete the sentence.',
          distractors: ['ten', '12'],
        },
      ],
    },
    {
      type: 'tfng',
      instructions:
        'Look at the information sheet “Welcome to Larchmere Holiday Park”. Do the following statements agree with the information given? Choose TRUE if the statement agrees with the information, FALSE if it contradicts the information, NOT GIVEN if there is no information on this.',
      questions: [
        {
          n: 9,
          statement:
            'Guests who arrive after reception has closed cannot get their keys until the next morning, even if they have phoned in advance.',
          answer: 'FALSE',
          location: {
            ref: 't4p0',
            quote:
              'please telephone in advance so that we can leave your keys in the secure key box beside the main entrance',
          },
          explanation:
            'Late arrivals who phone ahead can collect their keys from the key box by the main entrance, so they do not have to wait until the morning. The text contradicts the statement.',
        },
        {
          n: 10,
          statement: 'Guests with a second car must pay to use the overflow car park.',
          answer: 'NOT GIVEN',
          location: {
            ref: 't4p0',
            quote:
              'Any additional vehicles should be left in the overflow car park next to the tennis courts.',
          },
          explanation:
            'The sheet says where extra vehicles should be parked, but says nothing about whether there is a charge for this. Whether guests pay is missing, so the answer is NOT GIVEN.',
        },
        {
          n: 11,
          statement: 'Lifeguards are on duty at the swimming pool whenever it is open.',
          answer: 'NOT GIVEN',
          location: {
            ref: 't4p1',
            quote: 'children under 14 must be supervised by an adult in the water at all times',
          },
          explanation:
            'The only safety rule given is that an adult must supervise children under 14. Lifeguards are not mentioned at all, so we cannot tell whether they are present.',
        },
        {
          n: 12,
          statement: 'At certain times, guests may have to reserve a time to go swimming.',
          answer: 'TRUE',
          location: {
            ref: 't4p1',
            quote:
              'at busy times, especially during school holidays, you may need to book a time slot at reception',
          },
          explanation:
            '“At certain times” matches “at busy times”, and “reserve a time” paraphrases “book a time slot”.',
        },
        {
          n: 13,
          statement: 'Dogs may stay in any lodge on the park if their owners pay the extra charge.',
          answer: 'FALSE',
          location: {
            ref: 't4p2',
            quote: 'Dogs are permitted only in lodges marked with a paw symbol on the park map',
          },
          explanation:
            'Dogs are allowed “only” in lodges marked with a paw symbol, not in any lodge. Paying the £5 charge does not change which lodges they can stay in.',
        },
        {
          n: 14,
          statement: 'Barbecues are permitted outside the lodges, but only on certain surfaces.',
          answer: 'TRUE',
          location: {
            ref: 't4p3',
            quote:
              'Barbecues may be used on the paved patio outside your lodge, but never on wooden decking or indoors.',
          },
          explanation:
            'Barbecues may be used outside, on the paved patio, but never on wooden decking (or indoors). So they are allowed outside, but only on certain surfaces.',
        },
      ],
    },
  ],
})
