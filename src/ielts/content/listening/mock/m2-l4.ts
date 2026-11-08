import { defineListening } from '../../define'

/** Original script. Mock test 2, Part 4: an economics lecture on urban street markets (no real studies or people are cited). */
export default defineListening({
  id: 'm2-l4',
  skill: 'listening',
  part: 4,
  use: 'mock',
  title: 'The economics of urban street markets',
  topic: 'Economics',
  context:
    'You will hear part of a lecture on the economics of street markets in cities. First, you have some time to look at the questions.',
  speakers: [
    { id: 'lecturer', name: 'Dr Harland', role: 'Lecturer', gender: 'f', accent: 'en-NZ' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'lecturer',
      text: 'Good morning. Today I want to look at something most of you will have walked through without a second thought: the urban street market.',
    },
    {
      id: 'l2',
      speaker: 'lecturer',
      text: 'Markets are often treated as charming survivals from the past, something for tourists. Economists, however, increasingly see them as surprisingly efficient systems, and I want to explain why.',
    },
    {
      id: 'l3',
      speaker: 'lecturer',
      text: 'I’ll begin with the traders themselves. The most obvious advantage of a stall is cost. A pitch typically costs a trader a small fraction of what they would pay in rent for even the smallest shop.',
    },
    {
      id: 'l4',
      speaker: 'lecturer',
      text: 'There’s no long lease to sign, either, so if an idea fails, the trader can simply stop. That makes the market a low-risk place to experiment.',
    },
    {
      id: 'l5',
      speaker: 'lecturer',
      text: 'For this reason, economists describe markets as business incubators. But the effect isn’t spread evenly. Clothing traders, for instance, rarely grow beyond their stall.',
    },
    {
      id: 'l6',
      speaker: 'lecturer',
      text: 'Where the incubator effect is really striking is with food businesses. A remarkable number of cafés and restaurants in our cities began life as a single stall selling one dish.',
    },
    {
      id: 'l7',
      speaker: 'lecturer',
      text: 'Now, what about shoppers? You might expect market prices to be low simply because traders have low costs. That’s part of it, but it isn’t the whole story.',
    },
    {
      id: 'l8',
      speaker: 'lecturer',
      text: 'Market managers usually place stalls selling similar goods side by side. A shopper can compare five fruit stalls in two minutes, and that clustering intensifies competition far more than in a high street, where shops are spread out.',
    },
    {
      id: 'l9',
      speaker: 'lecturer',
      text: 'The relationship works in the other direction, too. A trader talks to hundreds of customers face to face every week, so they get immediate feedback on what sells and what doesn’t.',
    },
    {
      id: 'l10',
      speaker: 'lecturer',
      text: 'A supermarket spends a fortune on market research to learn the same things. A stallholder simply changes what’s on the table the following week.',
    },
    {
      id: 'l11',
      speaker: 'lecturer',
      text: 'Let’s move on to the wider effects on a neighbourhood. Shopkeepers often oppose new markets because they fear the stalls will steal their customers.',
    },
    {
      id: 'l12',
      speaker: 'lecturer',
      text: 'In practice, the opposite usually happens. A busy market raises footfall, the number of people passing along the street, and many of those people go on to spend money in nearby shops and cafés.',
    },
    {
      id: 'l13',
      speaker: 'lecturer',
      text: 'The hardest benefit to put a figure on is a social one. For many older residents, a weekly trip to the market may be their main conversation of the week, so markets can reduce isolation.',
    },
    {
      id: 'l14',
      speaker: 'lecturer',
      text: 'That has real value, but it’s very difficult to measure in money, which is one reason it tends to be ignored when councils make decisions.',
    },
    {
      id: 'l15',
      speaker: 'lecturer',
      text: 'And that brings me to the final part of today’s lecture: how a market can go into decline, often without anyone intending it. It tends to follow a fairly predictable sequence.',
    },
    {
      id: 'l16',
      speaker: 'lecturer',
      text: 'Very often it starts when the council decides to raise pitch fees. The usual reason is not security, which is generally covered by police budgets, but the cost of cleaning.',
    },
    {
      id: 'l17',
      speaker: 'lecturer',
      text: 'Clearing the streets after a busy market day is surprisingly expensive, and councils want traders to pay for it.',
    },
    {
      id: 'l18',
      speaker: 'lecturer',
      text: 'Higher fees don’t affect all traders equally. The first to leave are those working on the thinnest margins, typically the fruit and vegetable sellers, who make only a few pence on each item.',
    },
    {
      id: 'l19',
      speaker: 'lecturer',
      text: 'As those stalls disappear, the market offers less variety. Shoppers who came for a full week’s food now find they also need to visit a supermarket, so they come less often.',
    },
    {
      id: 'l20',
      speaker: 'lecturer',
      text: 'With fewer visitors, more traders give up, and the council’s income from fees falls even further. Ironically, the fee rise ends up reducing the money it was meant to raise.',
    },
    {
      id: 'l21',
      speaker: 'lecturer',
      text: 'Finally, faced with a half-empty market, the council starts to wonder what else the land could be used for. Occasionally a market is moved to another site, but far more often the council considers selling the land to developers.',
    },
    {
      id: 'l22',
      speaker: 'lecturer',
      text: 'So how can this cycle be broken? Next week we’ll look at some cities that have done exactly that, for example by offering cheaper pitches to new traders.',
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'note',
      instructions: 'Complete the notes below.',
      wordLimit: { words: 1, number: false },
      title: 'The economics of urban street markets',
      body: [
        { kind: 'heading', text: 'Benefits for traders' },
        {
          kind: 'bullets',
          items: [
            'A pitch costs far less than the [[1]] of a small shop.',
            'Markets act as business incubators, particularly for [[2]] businesses.',
          ],
        },
        { kind: 'heading', text: 'Benefits for shoppers' },
        {
          kind: 'bullets',
          items: [
            'Similar stalls are grouped together, which increases [[3]].',
            'Traders receive [[4]] from customers directly and can respond quickly.',
          ],
        },
        { kind: 'heading', text: 'Effects on the neighbourhood' },
        {
          kind: 'bullets',
          items: [
            'Local shops gain from higher [[5]] in the area.',
            'Markets help to reduce [[6]] among older people, but this is hard to measure.',
          ],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['rent'],
          location: {
            ref: 'l3',
            quote: 'what they would pay in rent for even the smallest shop',
          },
          explanation:
            '“A small fraction of what they would pay in rent” = costs far less than the rent of a small shop.',
        },
        {
          n: 2,
          answers: ['food'],
          location: {
            ref: 'l6',
            quote: 'Where the incubator effect is really striking is with food businesses',
          },
          explanation:
            '“Particularly” matches “really striking”. Clothing traders are the contrast: they “rarely grow beyond their stall”.',
          distractors: ['clothing'],
        },
        {
          n: 3,
          answers: ['competition'],
          location: { ref: 'l8', quote: 'that clustering intensifies competition' },
          explanation:
            '“Grouped together” = placed side by side, clustering; “increases” = intensifies. Low costs are “part of it”, but the point here is competition.',
        },
        {
          n: 4,
          answers: ['feedback'],
          location: { ref: 'l9', quote: 'they get immediate feedback on what sells' },
          explanation:
            'Traders talk to customers face to face, so they get immediate feedback; “changes what’s on the table the following week” = respond quickly.',
        },
        {
          n: 5,
          answers: ['footfall'],
          location: { ref: 'l12', quote: 'A busy market raises footfall' },
          explanation:
            'Footfall (the number of people passing along a street) rises, and shoppers then spend money in nearby shops. Shopkeepers fear the opposite, but it rarely happens.',
          distractors: ['customers'],
        },
        {
          n: 6,
          answers: ['isolation'],
          location: { ref: 'l13', quote: 'markets can reduce isolation' },
          explanation:
            '“Older residents” = older people; “the hardest benefit to put a figure on” = hard to measure.',
        },
      ],
    },
    {
      type: 'completion',
      format: 'flowchart',
      instructions: 'Complete the flow chart below.',
      wordLimit: { words: 1, number: false },
      title: 'How a street market can decline',
      body: [
        {
          kind: 'flow',
          steps: [
            'The council raises pitch fees, mainly to pay for [[7]].',
            'Traders with the smallest profit [[8]], such as fruit and vegetable sellers, leave first.',
            'There is less [[9]], so shoppers visit less often.',
            'More traders leave and the council’s income from fees falls.',
            'The council considers [[10]] the land to developers.',
          ],
        },
      ],
      questions: [
        {
          n: 7,
          answers: ['cleaning'],
          location: { ref: 'l16', quote: 'but the cost of cleaning' },
          explanation:
            'The reason is “not security”, which police budgets cover, “but the cost of cleaning”.',
          distractors: ['security'],
        },
        {
          n: 8,
          answers: ['margins'],
          location: {
            ref: 'l18',
            quote: 'The first to leave are those working on the thinnest margins',
          },
          explanation:
            '“Thinnest margins” = smallest profit margins. The gap needs a plural noun after “profit”.',
        },
        {
          n: 9,
          answers: ['variety'],
          location: { ref: 'l19', quote: 'the market offers less variety' },
          explanation:
            'When the fruit and vegetable stalls go, there is less variety, so shoppers “come less often”.',
        },
        {
          n: 10,
          answers: ['selling'],
          location: {
            ref: 'l21',
            quote: 'the council considers selling the land to developers',
          },
          explanation:
            'Moving the market to another site happens only “occasionally”; “far more often” the council considers selling the land.',
          distractors: ['moving'],
        },
      ],
    },
  ],
})
