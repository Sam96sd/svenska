import { defineListening } from '../define'

/** Original script. Part 2 style: a guide introduces a refurbished riverside museum, then walks through the new ground-floor plan. */
export default defineListening({
  id: 'l2-river-museum',
  skill: 'listening',
  part: 2,
  use: 'practice',
  title: 'The new layout of a riverside museum',
  topic: 'Tourism and museums',
  context:
    'You will hear a guide talking to a group of visitors at a riverside museum that has recently reopened. First, you have some time to look at questions 1 to 4.',
  speakers: [{ id: 'guide', name: 'Hemi', role: 'Museum guide', gender: 'm', accent: 'en-NZ' }],
  lines: [
    {
      id: 'l1',
      speaker: 'guide',
      text: 'Kia ora, everyone, and welcome to the Ferrybank Museum. My name’s Hemi, and I’ll be showing you around this morning. As some of you know, we only reopened last month, after being closed for nearly two years.',
    },
    {
      id: 'l2',
      speaker: 'guide',
      text: 'People often assume we shut because of the flood three winters ago. It’s true that the basement took in some water, but that was all cleaned up within a fortnight.',
    },
    {
      id: 'l3',
      speaker: 'guide',
      text: 'The real problem came to light during a routine inspection. The engineers found that the upper floors of this old wool store were no longer strong enough to meet current safety standards for large groups.',
    },
    {
      id: 'l4',
      speaker: 'guide',
      text: 'So the whole building had to be strengthened. We’ve ended up with a bit more display space as a result, which is a nice bonus, but that was never the purpose of the work.',
    },
    {
      id: 'l5',
      speaker: 'guide',
      text: 'Now, a few practical things. Entry is still free for anyone living in the district, and that isn’t going to change.',
    },
    {
      id: 'l6',
      speaker: 'guide',
      text: 'What is new is that every ticket now includes a twenty-minute trip on our restored ferry, the Kōtuku. You can book online if you want to, but there’s really no need. There’s usually plenty of room.',
    },
    {
      id: 'l7',
      speaker: 'guide',
      text: 'I’m often asked which exhibit is the best. Well, the steam crane in the main gallery is certainly the biggest, and the harbour model took our volunteers six years to build.',
    },
    {
      id: 'l8',
      speaker: 'guide',
      text: 'But according to our visitor survey, the display people enjoy most is actually one of the smallest: the collection of woven eel traps, with recordings of the fishermen who made them.',
    },
    {
      id: 'l9',
      speaker: 'guide',
      text: 'Just a couple of requests before we set off. You’re welcome to keep your bags with you. The lockers by the door are really only for large items, like suitcases.',
    },
    {
      id: 'l10',
      speaker: 'guide',
      text: 'And you can take photos anywhere you like, but please switch off the flash in the textile room. Strong light fades the old fabrics very quickly.',
    },
    {
      id: 'l11',
      speaker: 'guide',
      text: 'Parents, don’t worry about the riverside terrace. There’s a high glass barrier all the way along, so it’s perfectly safe for children.',
    },
    {
      id: 'l12',
      speaker: 'guide',
      text: 'Right, if you look at the plan of the ground floor, you’ll see we’re standing in the entrance hall, which you came into from Wharf Street, on the north side of the building.',
    },
    {
      id: 'l13',
      speaker: 'guide',
      text: 'The room immediately to the west of this hall is the gift shop. Most museums put the shop by the exit, but we wanted people to be able to pop in without buying a ticket.',
    },
    {
      id: 'l14',
      speaker: 'guide',
      text: 'If you head east instead, the first room you come to used to be the café, but it’s now our staff office.',
    },
    {
      id: 'l15',
      speaker: 'guide',
      text: 'The café has moved further along, into the north-east corner, where it gets the morning sun through windows on two sides.',
    },
    {
      id: 'l16',
      speaker: 'guide',
      text: 'Moving on, straight ahead of us to the south is the main gallery. That’s where you’ll find the steam crane.',
    },
    {
      id: 'l17',
      speaker: 'guide',
      text: 'If you leave the gallery by the door in its east wall, you’ll be in the textile room. It’s kept quite dark, for the reason I mentioned earlier.',
    },
    {
      id: 'l18',
      speaker: 'guide',
      text: 'Directly opposite that, on the west side of the gallery, is the children’s discovery room. It sits between the gift shop and the corner room at the back, so families can find it easily.',
    },
    {
      id: 'l19',
      speaker: 'guide',
      text: 'The southern part of the building faces the river. In the middle is the riverside hall, which we hire out for weddings and concerts.',
    },
    {
      id: 'l20',
      speaker: 'guide',
      text: 'Our boat-building workshop was originally going to be in the south-west corner, but the light there was poor. So in the end it went into the room on the eastern side of the riverside hall.',
    },
    {
      id: 'l21',
      speaker: 'guide',
      text: 'You can watch the boat builders through a glass wall. At the moment they’re restoring an old rowing boat that was found in the mud last summer.',
    },
    {
      id: 'l22',
      speaker: 'guide',
      text: 'Finally, the ferry. Go out through the riverside hall onto the terrace. Ignore the old wooden jetty straight in front of you, because it’s closed.',
    },
    {
      id: 'l23',
      speaker: 'guide',
      text: 'The ferry leaves from the new landing at the eastern end of the terrace. The next trip is at eleven, so you’ve got time to look around first. Right, follow me into the main gallery.',
    },
  ],
  groups: [
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B or C.',
      questions: [
        {
          n: 1,
          prompt: 'Why did the museum close for nearly two years?',
          options: [
            { key: 'A', text: 'A flood had damaged part of the building.' },
            { key: 'B', text: 'The building did not meet safety requirements.' },
            { key: 'C', text: 'The collection needed more display space.' },
          ],
          answer: 'B',
          location: {
            ref: 'l3',
            quote: 'no longer strong enough to meet current safety standards',
          },
          explanation:
            '“The real problem” signals the answer: the upper floors were not strong enough to meet safety standards.',
          traps: {
            A: 'The flood is what people “assume”, but the water was cleaned up within a fortnight.',
            C: 'More space was a “bonus”, “never the purpose of the work”.',
          },
        },
        {
          n: 2,
          prompt: 'What is new about museum tickets?',
          options: [
            { key: 'A', text: 'They are free for local residents.' },
            { key: 'B', text: 'They must be booked in advance.' },
            { key: 'C', text: 'They include a boat trip.' },
          ],
          answer: 'C',
          location: {
            ref: 'l6',
            quote: 'every ticket now includes a twenty-minute trip on our restored ferry',
          },
          explanation: '“What is new” introduces the answer: a ferry trip is now included.',
          traps: {
            A: 'Free entry for local people is true, but it is “still” the case, not new.',
            B: 'You “can” book online, but there is “really no need”.',
          },
        },
        {
          n: 3,
          prompt: 'According to the visitor survey, which exhibit do people like most?',
          options: [
            { key: 'A', text: 'the steam crane' },
            { key: 'B', text: 'the model of the harbour' },
            { key: 'C', text: 'the eel traps' },
          ],
          answer: 'C',
          location: {
            ref: 'l8',
            quote: 'the display people enjoy most is actually one of the smallest',
          },
          explanation:
            '“But according to our visitor survey” marks the answer: the woven eel traps are enjoyed most.',
          traps: {
            A: 'The crane is “the biggest”, not the most popular.',
            B: 'The harbour model “took six years to build” — impressive, but not the survey favourite.',
          },
        },
        {
          n: 4,
          prompt: 'What does the guide ask visitors to do?',
          options: [
            { key: 'A', text: 'leave their bags in a locker' },
            { key: 'B', text: 'avoid using flash photography in one room' },
            { key: 'C', text: 'keep children off the riverside terrace' },
          ],
          answer: 'B',
          location: { ref: 'l10', quote: 'please switch off the flash in the textile room' },
          explanation:
            'The only real request is to switch off the flash in the textile room, because light damages the fabrics.',
          traps: {
            A: 'Visitors are “welcome to keep” their bags; lockers are only for suitcases.',
            C: 'The terrace is “perfectly safe for children” because of the glass barrier.',
          },
        },
      ],
    },
    {
      type: 'map',
      instructions: 'Label the plan below. Write the correct letter, A–H, next to questions 5–10.',
      optionsTitle: 'Ferrybank Museum — ground floor',
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
        height: 400,
        north: true,
        description:
          'Plan of the Ferrybank Museum ground floor, with north at the top. Wharf Street runs along the north side, and the entrance in the north wall leads into the entrance hall, top centre. To the west of the entrance hall is room A; to the east are room B and then room C in the north-east corner. Below the entrance hall is the main gallery, with room D to its west and room E to its east. Along the south side are room F in the south-west corner, the riverside hall in the middle and room G in the south-east corner. South of the building is the riverside terrace, with point H at its eastern end, and beyond it the Mill River.',
        items: [
          { shape: 'path', d: 'M 0 28 L 540 28', tone: 'road' },
          { shape: 'text', x: 90, y: 52, text: 'Wharf Street', size: 12 },
          { shape: 'line', x1: 250, y1: 36, x2: 250, y2: 58, arrow: true },
          { shape: 'text', x: 300, y: 52, text: 'Entrance', size: 11 },
          { shape: 'rect', x: 40, y: 60, w: 130, h: 90 },
          { shape: 'rect', x: 170, y: 60, w: 160, h: 90, label: 'Entrance hall', tone: 'soft' },
          { shape: 'rect', x: 330, y: 60, w: 110, h: 90 },
          { shape: 'rect', x: 440, y: 60, w: 120, h: 90 },
          { shape: 'rect', x: 40, y: 150, w: 130, h: 80 },
          { shape: 'rect', x: 170, y: 150, w: 270, h: 80, label: 'Main gallery', tone: 'soft' },
          { shape: 'rect', x: 440, y: 150, w: 120, h: 80 },
          { shape: 'rect', x: 40, y: 230, w: 160, h: 80 },
          { shape: 'rect', x: 200, y: 230, w: 180, h: 80, label: 'Riverside hall', tone: 'soft' },
          { shape: 'rect', x: 380, y: 230, w: 180, h: 80 },
          {
            shape: 'rect',
            x: 40,
            y: 318,
            w: 520,
            h: 32,
            label: 'Riverside terrace',
            tone: 'green',
          },
          { shape: 'path', d: 'M 0 372 L 600 372', tone: 'water' },
          { shape: 'text', x: 300, y: 395, text: 'Mill River', size: 12 },
          { shape: 'marker', x: 105, y: 105, letter: 'A' },
          { shape: 'marker', x: 385, y: 105, letter: 'B' },
          { shape: 'marker', x: 500, y: 105, letter: 'C' },
          { shape: 'marker', x: 105, y: 190, letter: 'D' },
          { shape: 'marker', x: 500, y: 190, letter: 'E' },
          { shape: 'marker', x: 120, y: 270, letter: 'F' },
          { shape: 'marker', x: 470, y: 270, letter: 'G' },
          { shape: 'marker', x: 520, y: 334, letter: 'H' },
        ],
      },
      questions: [
        {
          n: 5,
          prompt: 'Gift shop',
          answer: 'A',
          location: {
            ref: 'l13',
            quote: 'The room immediately to the west of this hall is the gift shop',
          },
          explanation: 'The visitors are in the entrance hall; the room directly west of it is A.',
          traps: { D: 'D is west of the main gallery, not of the entrance hall.' },
        },
        {
          n: 6,
          prompt: 'Café',
          answer: 'C',
          location: {
            ref: 'l15',
            quote: 'The café has moved further along, into the north-east corner',
          },
          explanation:
            'The first room east (B) “used to be the café” but is now an office. The café has moved to the north-east corner: C.',
          traps: { B: 'B was the old café and is now the staff office.' },
        },
        {
          n: 7,
          prompt: 'Textile room',
          answer: 'E',
          location: {
            ref: 'l17',
            quote: 'leave the gallery by the door in its east wall, you’ll be in the textile room',
          },
          explanation: 'The room through the east wall of the main gallery is E.',
          traps: { C: 'C is the café in the north-east corner; it does not open off the gallery.' },
        },
        {
          n: 8,
          prompt: 'Children’s discovery room',
          answer: 'D',
          location: {
            ref: 'l18',
            quote: 'on the west side of the gallery, is the children’s discovery room',
          },
          explanation:
            '“Directly opposite” the textile room, on the west side of the gallery, between the gift shop (A) and the corner room (F): D.',
          traps: { F: 'F is the corner room at the back that the discovery room sits next to.' },
        },
        {
          n: 9,
          prompt: 'Boat-building workshop',
          answer: 'G',
          location: {
            ref: 'l20',
            quote: 'it went into the room on the eastern side of the riverside hall',
          },
          explanation:
            'The south-west corner (F) was the original plan but was rejected because of poor light. The workshop is east of the riverside hall: G.',
          traps: { F: 'F, the south-west corner, was “originally going to be” the workshop.' },
        },
        {
          n: 10,
          prompt: 'Ferry landing',
          answer: 'H',
          location: {
            ref: 'l23',
            quote: 'The ferry leaves from the new landing at the eastern end of the terrace',
          },
          explanation:
            'The old jetty straight in front of the riverside hall is closed. The new landing is at the eastern end of the terrace: H.',
        },
      ],
    },
  ],
})
