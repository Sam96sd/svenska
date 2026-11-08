import { defineListening } from '../../define'

/** Original script. Mock test 2, Part 2: a local radio talk about a new city cycle-hire scheme (Carlford and Carlford Pedal are fictional). */
export default defineListening({
  id: 'm2-l2',
  skill: 'listening',
  part: 2,
  use: 'mock',
  title: 'A new cycle-hire scheme',
  topic: 'Transport',
  context:
    'You will hear the manager of a new cycle-hire scheme talking on a local radio programme. First, you have some time to look at the questions.',
  speakers: [
    { id: 'host', name: 'Tom', role: 'Radio presenter', gender: 'm', accent: 'en-GB' },
    { id: 'kirsty', name: 'Kirsty Dunmore', role: 'Scheme manager', gender: 'f', accent: 'en-AU' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'host',
      text: 'And now, with the city’s new cycle-hire scheme opening in September, I’m joined by its manager, Kirsty Dunmore. Kirsty, over to you.',
    },
    {
      id: 'l2',
      speaker: 'kirsty',
      text: 'Thanks, Tom. Carlford Pedal launches on the first of September with four hundred bikes, and I’d like to explain what makes it different, where you’ll find the bikes, and how you can get involved.',
    },
    {
      id: 'l3',
      speaker: 'kirsty',
      text: 'Let me start with the bikes themselves. A lot of listeners will have tried hire bikes in other cities and found them heavy and slow. Ours are quite different.',
    },
    {
      id: 'l4',
      speaker: 'kirsty',
      text: 'Every single one has a small electric motor that helps you as you pedal. In a city with hills as steep as ours, we felt that was essential, not a luxury.',
    },
    {
      id: 'l5',
      speaker: 'kirsty',
      text: 'You may have read that the first half hour of every ride would be free. That was in the original proposal, I’m afraid, but the council decided it couldn’t afford it.',
    },
    {
      id: 'l6',
      speaker: 'kirsty',
      text: 'Some people asked whether they could leave a bike anywhere once they’d finished. We’ve decided against that. In other cities, bikes dumped on pavements caused problems, so ours must be returned to a docking station.',
    },
    {
      id: 'l7',
      speaker: 'kirsty',
      text: 'What we have done is make it easy to get started. You don’t need a smartphone or an account: you simply tap a contactless bank card on the lock and the bike is released.',
    },
    {
      id: 'l8',
      speaker: 'kirsty',
      text: 'And yes, I know families have been asking for cargo bikes that can carry young children. We’d love to add those, but realistically that won’t be until next year at the earliest.',
    },
    {
      id: 'l9',
      speaker: 'kirsty',
      text: 'Now let me turn to the docking stations. There are twelve in all, but I’ll just mention the five main ones.',
    },
    {
      id: 'l10',
      speaker: 'kirsty',
      text: 'Many people assume the railway station will have the most bikes, but actually it doesn’t. What’s special about it is that the bikes are parked in a two-level stand with a roof over it, so they stay dry.',
    },
    {
      id: 'l11',
      speaker: 'kirsty',
      text: 'Cathedral Square is the stand most visitors will use. But because of the repaving work on the square, it won’t be ready on day one. We expect it to open about six weeks after the others.',
    },
    {
      id: 'l12',
      speaker: 'kirsty',
      text: 'Up at the university, we’d hoped to include a small training area for nervous beginners, but there simply wasn’t the space. It does, though, have seventy-five bikes, more than any other station, because student demand is so high.',
    },
    {
      id: 'l13',
      speaker: 'kirsty',
      text: 'Down at Riverside Market, we’d planned to make rides from that stand free on Sundays, when the market’s busiest, but sadly the sponsor pulled out.',
    },
    {
      id: 'l14',
      speaker: 'kirsty',
      text: 'The good news there is that the stand is right next door to a bike workshop, so if your chain comes off or you get a puncture, there’s a mechanic on hand to sort it out.',
    },
    {
      id: 'l15',
      speaker: 'kirsty',
      text: 'And finally, at the hospital, as well as the standard bikes, we have four adapted tricycles for people who have problems with balance or mobility. We think that’s a first for a scheme of this kind.',
    },
    {
      id: 'l16',
      speaker: 'kirsty',
      text: 'So, what will it cost? A single ride of up to thirty minutes is one pound fifty. We deliberately set that below the price of a single bus ticket, so for most short trips cycling is cheaper.',
    },
    {
      id: 'l17',
      speaker: 'kirsty',
      text: 'People keep asking me whether prices will go up after the first year. They won’t; the council has fixed them for two years. And there’s no student discount, I’m afraid, though some employers may pay for staff membership.',
    },
    {
      id: 'l18',
      speaker: 'kirsty',
      text: 'Before the full launch, we’re running a trial during August with five hundred volunteers. Now, people tend to assume this is to test the bikes, but they’ve already been tested in far hillier places than Carlford.',
    },
    {
      id: 'l19',
      speaker: 'kirsty',
      text: 'And our staff finished their training in July. What we really need is information on the routes people actually ride, so that we know where the next docking stations should go.',
    },
    {
      id: 'l20',
      speaker: 'kirsty',
      text: 'If you’d like to be a volunteer, you’ll ride free for the whole month. Oh, actually, I should correct that: rides during the trial are half price, not free.',
    },
    {
      id: 'l21',
      speaker: 'kirsty',
      text: 'But in return for filling in a short weekly survey, every volunteer will be given a helmet to keep. Other schemes have offered cheaper annual membership to volunteers, but we felt safety came first.',
    },
    {
      id: 'l22',
      speaker: 'kirsty',
      text: 'You can sign up on our website from today. Thanks, Tom.',
    },
  ],
  groups: [
    {
      type: 'mcq-multi',
      instructions: 'Choose TWO letters, A–E.',
      questions: [
        {
          n: 1,
          n2: 2,
          prompt: 'Which TWO features will the Carlford Pedal scheme have when it opens?',
          options: [
            { key: 'A', text: 'bikes that can be left anywhere after use' },
            { key: 'B', text: 'power assistance on all of the bikes' },
            { key: 'C', text: 'free use for the first thirty minutes' },
            { key: 'D', text: 'payment without registering in advance' },
            { key: 'E', text: 'bikes designed to carry small children' },
          ],
          answers: ['B', 'D'],
          location: { ref: 'l4', quote: 'Every single one has a small electric motor' },
          explanation:
            'B: every bike has an electric motor that helps you pedal. D: you need no smartphone or account — you just tap a contactless bank card on the lock.',
          traps: {
            A: 'Rejected: bikes “must be returned to a docking station” because dumped bikes caused problems elsewhere.',
            C: 'The free half hour was in the original proposal, but the council “couldn’t afford it”.',
            E: 'Cargo bikes for children will not come until “next year at the earliest”.',
          },
        },
      ],
    },
    {
      type: 'match-features',
      instructions:
        'What does the speaker say about each of the following docking stations? Choose FIVE answers from the box and write the correct letter, A–G.',
      optionsTitle: 'Comments',
      options: [
        { key: 'A', text: 'It has the largest number of bikes.' },
        { key: 'B', text: 'It will open later than the others.' },
        { key: 'C', text: 'Repairs can be carried out nearby.' },
        { key: 'D', text: 'The bikes are protected from the rain.' },
        { key: 'E', text: 'It has an area where beginners can practise.' },
        { key: 'F', text: 'Rides from it are free on certain days.' },
        { key: 'G', text: 'It has bikes for people with physical difficulties.' },
      ],
      questions: [
        {
          n: 3,
          prompt: 'Railway station',
          answer: 'D',
          location: {
            ref: 'l10',
            quote:
              'the bikes are parked in a two-level stand with a roof over it, so they stay dry',
          },
          explanation: '“A roof over it, so they stay dry” = protected from the rain.',
          traps: {
            A: 'People “assume the railway station will have the most bikes, but actually it doesn’t”.',
          },
        },
        {
          n: 4,
          prompt: 'Cathedral Square',
          answer: 'B',
          location: {
            ref: 'l11',
            quote: 'We expect it to open about six weeks after the others',
          },
          explanation:
            'Because of the repaving work it “won’t be ready on day one” and opens about six weeks after the others.',
        },
        {
          n: 5,
          prompt: 'University',
          answer: 'A',
          location: { ref: 'l12', quote: 'seventy-five bikes, more than any other station' },
          explanation: '“More than any other station” = the largest number of bikes.',
          traps: {
            E: 'A training area for beginners was planned, “but there simply wasn’t the space”.',
          },
        },
        {
          n: 6,
          prompt: 'Riverside Market',
          answer: 'C',
          location: { ref: 'l14', quote: 'the stand is right next door to a bike workshop' },
          explanation:
            'A bike workshop next door with “a mechanic on hand” = repairs can be carried out nearby.',
          traps: {
            F: 'Free Sunday rides were planned, but “the sponsor pulled out”.',
          },
        },
        {
          n: 7,
          prompt: 'Hospital',
          answer: 'G',
          location: {
            ref: 'l15',
            quote: 'four adapted tricycles for people who have problems with balance or mobility',
          },
          explanation:
            '“Problems with balance or mobility” is paraphrased as “physical difficulties”.',
        },
      ],
    },
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B or C.',
      questions: [
        {
          n: 8,
          prompt: 'What does the speaker say about the price of a single ride?',
          options: [
            { key: 'A', text: 'It is lower than the cost of a bus journey.' },
            { key: 'B', text: 'It is likely to increase after the first year.' },
            { key: 'C', text: 'It is reduced for students.' },
          ],
          answer: 'A',
          location: {
            ref: 'l16',
            quote: 'We deliberately set that below the price of a single bus ticket',
          },
          explanation: 'The ride price was set “below the price of a single bus ticket”.',
          traps: {
            B: 'Prices will not go up: the council “has fixed them for two years”.',
            C: '“There’s no student discount, I’m afraid.”',
          },
        },
        {
          n: 9,
          prompt: 'What is the main purpose of the trial in August?',
          options: [
            { key: 'A', text: 'to check how the bikes perform on hills' },
            { key: 'B', text: 'to give staff practical training' },
            { key: 'C', text: 'to help decide where to put new docking stations' },
          ],
          answer: 'C',
          location: {
            ref: 'l19',
            quote: 'so that we know where the next docking stations should go',
          },
          explanation:
            'The real aim is information on the routes people ride, to decide where the next docking stations should go.',
          traps: {
            A: 'People “tend to assume” it is to test the bikes, but they have already been tested in hillier places.',
            B: 'Staff “finished their training in July”, before the trial.',
          },
        },
        {
          n: 10,
          prompt: 'What will volunteers in the trial receive?',
          options: [
            { key: 'A', text: 'free rides for a month' },
            { key: 'B', text: 'a piece of safety equipment' },
            { key: 'C', text: 'cheaper annual membership' },
          ],
          answer: 'B',
          location: { ref: 'l21', quote: 'every volunteer will be given a helmet to keep' },
          explanation:
            'A helmet is a piece of safety equipment, given in return for filling in a weekly survey.',
          traps: {
            A: 'She corrects herself: rides during the trial are “half price, not free”.',
            C: 'Cheaper membership is what “other schemes” have offered, not Carlford.',
          },
        },
      ],
    },
  ],
})
