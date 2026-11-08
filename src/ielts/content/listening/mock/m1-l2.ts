import { defineListening } from '../../define'

/** Original script. Mock test 1, Part 2: a centre manager introduces a new community sports centre (MCQ and plan labelling). */
export default defineListening({
  id: 'm1-l2',
  skill: 'listening',
  part: 2,
  use: 'mock',
  title: 'A new community sports centre',
  topic: 'Sport and leisure',
  context:
    'You will hear the manager of a new sports centre talking to a group of local residents at an open evening. First, you have some time to look at questions 1 to 10.',
  speakers: [
    { id: 'kirsty', name: 'Kirsty Hamilton', role: 'Centre manager', gender: 'f', accent: 'en-NZ' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'kirsty',
      text: 'Good evening, everyone, and thanks so much for coming along. I’m Kirsty Hamilton, and I’m the manager of the new Ferndale Community Sports Centre, which opens to the public on the first of March.',
    },
    {
      id: 'l2',
      speaker: 'kirsty',
      text: 'I’ll start with a little background, then I’ll say something about membership, and finally I’ll take you through the layout of the building, so you know where everything is.',
    },
    {
      id: 'l3',
      speaker: 'kirsty',
      text: 'So, first, the site. Many people assume we’ve built the centre where the old swimming baths used to be. In fact, the baths were on the other side of the river, and that land is now housing.',
    },
    {
      id: 'l4',
      speaker: 'kirsty',
      text: 'We’re actually standing on what used to be the city’s bus depot. When the buses moved out to the new garage by the motorway, the council bought the land, and building work started two years ago.',
    },
    {
      id: 'l5',
      speaker: 'kirsty',
      text: 'Now, we’re really proud of how little energy the building uses. Early on there was a lot of talk about solar panels, but the roof is shaded by the hill for most of the day, so that idea was dropped.',
    },
    {
      id: 'l6',
      speaker: 'kirsty',
      text: 'Instead, almost all our heating comes from a ground-source heat pump. Pipes buried deep under the car park take warmth from the earth, and that heats both the pool and the sports hall.',
    },
    {
      id: 'l7',
      speaker: 'kirsty',
      text: 'The windows are triple-glazed as well, which helps to keep the heat in, but it’s really the heat pump that makes the difference to our bills.',
    },
    {
      id: 'l8',
      speaker: 'kirsty',
      text: 'Right, moving on to membership. There are three types: full, off-peak and junior. Full membership lets you use the centre whenever it’s open, which is from six in the morning until ten at night, seven days a week.',
    },
    {
      id: 'l9',
      speaker: 'kirsty',
      text: 'Off-peak membership is a good deal cheaper, and it covers Monday to Friday up until four in the afternoon. People often expect it to include weekends as well, but I’m afraid it doesn’t, and evenings aren’t included either.',
    },
    {
      id: 'l10',
      speaker: 'kirsty',
      text: 'Junior membership is for anyone under sixteen, and it comes with one free swimming lesson a week during term time.',
    },
    {
      id: 'l11',
      speaker: 'kirsty',
      text: 'Before I go on, some of you have asked how you can help. We’ve had very kind offers from people who’d like to volunteer as coaches, but at the moment we actually have all the staff we need.',
    },
    {
      id: 'l12',
      speaker: 'kirsty',
      text: 'And the café already has a name, which was chosen in a competition at the local primary school.',
    },
    {
      id: 'l13',
      speaker: 'kirsty',
      text: 'What I would ask is this. Please don’t leave your cars in the streets around the centre. Use our car park instead; it has two hundred spaces. People on Totara Street have already put up with two years of building work.',
    },
    {
      id: 'l14',
      speaker: 'kirsty',
      text: 'OK, now let’s look at the plan of the ground floor. You come in through the main entrance on Matai Road, on the south side of the building, and reception is straight ahead of you.',
    },
    {
      id: 'l15',
      speaker: 'kirsty',
      text: 'If you turn left at reception, heading west, the first room you come to is the café. Its north side is a big glass wall, so parents can sit with a coffee and watch their children swim.',
    },
    {
      id: 'l16',
      speaker: 'kirsty',
      text: 'Carry on past the café and you reach the room in the south-west corner. That’s the first-aid room, and it has its own outside door, so an ambulance can get right up to it.',
    },
    {
      id: 'l17',
      speaker: 'kirsty',
      text: 'Now go back to reception and turn right instead. There you’ll find the fitness suite. It’s the long room that runs along the south side of the building, all the way to the east wall.',
    },
    {
      id: 'l18',
      speaker: 'kirsty',
      text: 'Directly behind the fitness suite, on its north side, there are two smaller rooms. The one against the east wall is just a storeroom for equipment, so it’s staff only.',
    },
    {
      id: 'l19',
      speaker: 'kirsty',
      text: 'The other one, the room nearer to reception, is our crèche. You can leave children under five there for up to two hours while you exercise.',
    },
    {
      id: 'l20',
      speaker: 'kirsty',
      text: 'Next, the changing rooms. They’re directly behind the reception desk, so if you walk straight ahead from the entrance, you’ll go right into them. Doors lead into the pool on one side and the sports hall on the other.',
    },
    {
      id: 'l21',
      speaker: 'kirsty',
      text: 'Keep going through the changing rooms and out of the far side, and you’ll come to the community room, right at the northern end of the building. Local groups can book it for meetings and classes.',
    },
    {
      id: 'l22',
      speaker: 'kirsty',
      text: 'And last of all, the climbing wall. The original plan was to put it inside the sports hall, but the ceiling turned out not to be high enough.',
    },
    {
      id: 'l23',
      speaker: 'kirsty',
      text: 'So it’s outdoors, along the northern edge of the site, directly behind the sports hall. It’s floodlit, so you can climb until nine in the evening. Right, are there any questions so far?',
    },
  ],
  groups: [
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B or C.',
      questions: [
        {
          n: 1,
          prompt: 'Before the sports centre was built, the site was used as',
          options: [
            { key: 'A', text: 'a public swimming pool.' },
            { key: 'B', text: 'a base for the city’s buses.' },
            { key: 'C', text: 'an area of housing.' },
          ],
          answer: 'B',
          location: { ref: 'l4', quote: 'what used to be the city’s bus depot' },
          explanation:
            'A depot is where buses are kept, so the site was “a base for the city’s buses”.',
          traps: {
            A: 'People “assume” it was the old swimming baths, but the baths were on the other side of the river.',
            C: 'Housing is now on the site of the old baths, not on this site.',
          },
        },
        {
          n: 2,
          prompt: 'Most of the centre’s heating is provided by',
          options: [
            { key: 'A', text: 'panels on the roof.' },
            { key: 'B', text: 'a system beneath the car park.' },
            { key: 'C', text: 'specially designed windows.' },
          ],
          answer: 'B',
          location: {
            ref: 'l6',
            quote: 'almost all our heating comes from a ground-source heat pump',
          },
          explanation:
            'The heat pump uses pipes “buried deep under the car park” = a system beneath the car park.',
          traps: {
            A: 'Solar panels were discussed but dropped because the roof is shaded by the hill.',
            C: 'The triple-glazed windows help to keep heat in, but “it’s really the heat pump that makes the difference”.',
          },
        },
        {
          n: 3,
          prompt: 'Off-peak members can use the centre',
          options: [
            { key: 'A', text: 'at weekends only.' },
            { key: 'B', text: 'during the day from Monday to Friday.' },
            { key: 'C', text: 'at any time except weekday evenings.' },
          ],
          answer: 'B',
          location: {
            ref: 'l9',
            quote: 'it covers Monday to Friday up until four in the afternoon',
          },
          explanation:
            'Off-peak covers weekdays until 4 pm, which is “during the day from Monday to Friday”.',
          traps: {
            A: 'People “expect it to include weekends”, but it does not include them at all.',
            C: 'Weekends are excluded too, so it is not “any time except weekday evenings”.',
          },
        },
        {
          n: 4,
          prompt: 'What does the speaker ask local residents to do?',
          options: [
            { key: 'A', text: 'offer their services as sports coaches' },
            { key: 'B', text: 'suggest a name for the café' },
            { key: 'C', text: 'avoid parking in nearby streets' },
          ],
          answer: 'C',
          location: {
            ref: 'l13',
            quote: 'Please don’t leave your cars in the streets around the centre',
          },
          explanation:
            '“What I would ask is this”: residents should use the car park rather than the streets around the centre.',
          traps: {
            A: 'Offers to coach were kind, but “we actually have all the staff we need”.',
            B: 'The café already has a name, chosen in a school competition.',
          },
        },
      ],
    },
    {
      type: 'map',
      instructions: 'Label the plan below. Write the correct letter, A–H, next to questions 5–10.',
      optionsTitle: 'Ferndale Community Sports Centre — ground floor',
      options: [
        { key: 'A', text: 'A' },
        { key: 'B', text: 'B' },
        { key: 'C', text: 'C' },
        { key: 'D', text: 'D' },
        { key: 'E', text: 'E' },
        { key: 'F', text: 'F' },
        { key: 'G', text: 'G' },
        { key: 'H', text: 'H' },
      ],
      diagram: {
        width: 600,
        height: 420,
        north: true,
        description:
          'Plan of the sports centre ground floor, with north at the top. Matai Road runs along the south side, and the main entrance in the south wall leads into reception, bottom centre. The swimming pool fills the north-west of the building. Along the south side, west of reception, are room G next to reception and room F in the south-west corner. North of reception is room B, and north of that, at the northern end of the building, is room A. The sports hall is in the north-east. Below the sports hall are two smaller rooms: C, nearer reception, and D, against the east wall. Below those, a long room, E, runs along the south side from reception to the east wall. Outside, a strip of open ground runs along the northern edge of the site, with point H behind the sports hall.',
        items: [
          { shape: 'rect', x: 40, y: 22, w: 480, h: 30, tone: 'green' },
          { shape: 'text', x: 130, y: 42, text: 'Open ground', size: 11 },
          { shape: 'rect', x: 40, y: 60, w: 180, h: 160, label: 'Swimming pool', tone: 'water' },
          { shape: 'rect', x: 40, y: 220, w: 90, h: 100 },
          { shape: 'rect', x: 130, y: 220, w: 90, h: 100 },
          { shape: 'rect', x: 220, y: 60, w: 140, h: 80 },
          { shape: 'rect', x: 220, y: 140, w: 140, h: 80 },
          { shape: 'rect', x: 220, y: 220, w: 140, h: 100, label: 'Reception', tone: 'soft' },
          { shape: 'rect', x: 360, y: 60, w: 200, h: 120, label: 'Sports hall', tone: 'soft' },
          { shape: 'rect', x: 360, y: 180, w: 100, h: 70 },
          { shape: 'rect', x: 460, y: 180, w: 100, h: 70 },
          { shape: 'rect', x: 360, y: 250, w: 200, h: 70 },
          { shape: 'line', x1: 290, y1: 352, x2: 290, y2: 326, arrow: true },
          { shape: 'text', x: 350, y: 346, text: 'Main entrance', size: 11 },
          { shape: 'path', d: 'M 0 380 L 600 380', tone: 'road' },
          { shape: 'text', x: 300, y: 408, text: 'Matai Road', size: 12 },
          { shape: 'marker', x: 290, y: 100, letter: 'A' },
          { shape: 'marker', x: 290, y: 180, letter: 'B' },
          { shape: 'marker', x: 410, y: 215, letter: 'C' },
          { shape: 'marker', x: 510, y: 215, letter: 'D' },
          { shape: 'marker', x: 460, y: 285, letter: 'E' },
          { shape: 'marker', x: 85, y: 270, letter: 'F' },
          { shape: 'marker', x: 175, y: 270, letter: 'G' },
          { shape: 'marker', x: 460, y: 37, letter: 'H' },
        ],
      },
      questions: [
        {
          n: 5,
          prompt: 'Café',
          answer: 'G',
          location: {
            ref: 'l15',
            quote:
              'If you turn left at reception, heading west, the first room you come to is the café',
          },
          explanation:
            'Turning left (west) from reception, the first room is G, which looks north into the pool.',
          traps: { F: 'F, in the south-west corner beyond the café, is the first-aid room.' },
        },
        {
          n: 6,
          prompt: 'Fitness suite',
          answer: 'E',
          location: {
            ref: 'l17',
            quote:
              'the long room that runs along the south side of the building, all the way to the east wall',
          },
          explanation:
            'Turning right (east) from reception, the long room along the south side to the east wall is E.',
          traps: {
            D: 'D is against the east wall too, but it is a small room, not the long one on the south side.',
          },
        },
        {
          n: 7,
          prompt: 'Crèche',
          answer: 'C',
          location: { ref: 'l19', quote: 'the room nearer to reception, is our crèche' },
          explanation:
            'Of the two small rooms north of the fitness suite, the one nearer reception is C.',
          traps: { D: 'D, the room against the east wall, is the equipment storeroom.' },
        },
        {
          n: 8,
          prompt: 'Changing rooms',
          answer: 'B',
          location: { ref: 'l20', quote: 'They’re directly behind the reception desk' },
          explanation:
            'Walking straight ahead (north) from the entrance, past reception, takes you into B, between the pool and the sports hall.',
          traps: {
            A: 'A is also between the pool and the sports hall, but it is further north, beyond the changing rooms.',
          },
        },
        {
          n: 9,
          prompt: 'Community room',
          answer: 'A',
          location: { ref: 'l21', quote: 'right at the northern end of the building' },
          explanation:
            'Going through the changing rooms (B) and out of the far side brings you to A, at the northern end of the building.',
          traps: {
            B: 'B is the changing rooms, which you pass through to reach the community room.',
          },
        },
        {
          n: 10,
          prompt: 'Climbing wall',
          answer: 'H',
          location: {
            ref: 'l23',
            quote:
              'it’s outdoors, along the northern edge of the site, directly behind the sports hall',
          },
          explanation:
            'The wall was planned for the sports hall but the ceiling was too low, so it is outside, on the open ground behind the sports hall: H.',
          traps: {
            A: 'A is at the northern end of the building, but it is indoors and is the community room.',
          },
        },
      ],
    },
  ],
})
