import { definePassage } from '../../define'

/** Original text. Academic Passage 2 style: hydrothermal vents and the life around them. */
export default definePassage({
  id: 'ac-hydrothermal-vents',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'practice',
  title: 'Life without sunlight',
  topic: 'Marine science',
  minutes: 20,
  level: 2,
  texts: [
    {
      title: 'Life without sunlight: the hydrothermal vents of the deep ocean',
      paragraphs: [
        {
          label: 'A',
          text: 'In the late 1970s, geologists in a small research submersible went looking for hot springs along a volcanic ridge in the eastern Pacific. They found the springs, but what surrounded them was astonishing. At a depth of some 2,500 metres, where no sunlight has ever penetrated, they came upon dense clusters of giant clams, pale crabs and worms longer than a person’s arm. Biologists had assumed that the deep ocean floor supported only a thin scattering of animals, surviving on organic particles that drift down from the surface. Here, by contrast, was a community as crowded as a coral reef.',
        },
        {
          label: 'B',
          text: 'Hydrothermal vents occur where the plates that make up the Earth’s crust are pulling apart, or where volcanic activity brings molten rock close to the seafloor. Cold seawater, at around two degrees Celsius, seeps down through cracks in the crust. As it approaches the magma chamber beneath the ridge, the water is heated to temperatures that can exceed 400 degrees. It does not boil, because of the immense pressure of the overlying ocean. Instead, the superheated water reacts with the surrounding rock: it loses its oxygen and dissolves metals such as iron, copper and zinc, together with large quantities of hydrogen sulphide. Lighter than the surrounding water, the fluid then rises rapidly back to the seafloor.',
        },
        {
          label: 'C',
          text: 'What happens next gives vents their most famous feature. When fluid at 350 degrees or more meets the near-freezing water of the deep sea, the dissolved minerals can no longer remain in solution. Calcium sulphate, or anhydrite, is usually the first to separate out, forming a fragile tube around the jet of hot fluid. Metal sulphides then crystallise on the inner surface of this tube, gradually strengthening it into a chimney. The fine sulphide particles that escape from the top darken the water, so that the vent seems to belch black smoke; hence the name ‘black smokers’. Chimneys can grow by as much as 30 centimetres in a day, and some reach the height of a fifteen-storey building before collapsing under their own weight.',
        },
        {
          label: 'D',
          text: 'The animals that crowd around vents depend, ultimately, not on sunlight but on chemistry. Certain bacteria can obtain energy by combining hydrogen sulphide from the vent fluid with oxygen from seawater, and use this energy to turn carbon dioxide into sugars, a process known as chemosynthesis. Some animals graze on mats of these bacteria, but the most successful vent species live in partnership with them. The giant tube worm, which can grow to two metres in length, has neither a mouth nor a digestive system as an adult. Instead, a spongy organ inside its body is packed with billions of bacteria. The worm’s bright red plume absorbs sulphide and oxygen from the water and delivers both to its bacterial partners, which in return supply the worm with all of its food.',
        },
        {
          label: 'E',
          text: 'Because conditions change sharply within a few metres of a vent, its inhabitants are arranged in distinct zones. Closest to the vent opening, where water temperatures fluctuate and sulphide levels are highest, grow the tube worms, anchored in cracks in the rock. Slightly further out, mussels and clams form dense beds; they, too, host bacteria, but in their gills rather than in a special organ. At the outer edge of the community, where the water is barely warmer than the surrounding sea, crabs, shrimp and fish move in to scavenge or to prey on the animals nearer the centre.',
        },
        {
          label: 'F',
          text: 'Vent communities are far from permanent. A volcanic eruption along the ridge can bury an entire community under fresh lava, and scientists who have reached a site soon after such an event have watched a new community assemble almost from nothing. Within days of one eruption, the seafloor was coated in white mats of bacteria. Within a year, a small, fast-growing species of tube worm had settled around the openings. It was soon overtaken by the giant tube worm, which can grow more than a metre and a half in under two years. Mussels typically arrive later still, and once established they gradually take over, partly because their own feeding reduces the amount of sulphide reaching the worms. Eventually, sometimes after only a few decades, the flow of fluid weakens or is diverted, and the community collapses, leaving empty shells and dead tubes to be picked over by scavengers.',
        },
        {
          label: 'G',
          text: 'How vent animals find new homes is one of the enduring puzzles of the field. Because a vent may last only a few decades, every species must send its young to new sites, sometimes hundreds of kilometres away. Most vent animals produce larvae that drift in deep-ocean currents, and the larvae of some species appear to rise hundreds of metres above the seafloor, where currents are faster, before sinking again. Genetic studies suggest that populations along a continuous stretch of ridge are well connected, but that where a ridge is broken by a large fault, populations on either side can be surprisingly distinct. Exactly how a larva recognises a suitable vent remains unclear.',
        },
        {
          label: 'H',
          text: 'Vents now face a threat of a different kind. The chimneys, and the mounds of collapsed chimney material beneath them, are rich in copper, zinc and sometimes gold, and several mining companies have applied for permission to extract them. Supporters argue that mining should target only inactive sites, where the fluid has stopped flowing and the dense communities have gone. Critics respond that inactive vents are far from lifeless: they are colonised by corals, sponges and other animals, some of which may occur nowhere else. They also warn that clouds of sediment stirred up by mining machinery could drift for kilometres and smother active vents nearby.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'diagram',
      instructions:
        'Label the diagram below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
      wordLimit: { words: 2, number: false },
      title: 'Cross-section of a black smoker vent',
      body: [
        {
          kind: 'diagram',
          diagram: {
            width: 640,
            height: 380,
            description:
              'Cross-section of a black smoker hydrothermal vent. Cold seawater (about 2 °C) seeps down through cracks in the ocean crust towards a heat source deep below the seafloor (gap 1). Hot fluid (over 350 °C) rises through the crust and out of a mineral chimney; the first layer of the chimney wall is gap 2. Black “smoke” made of fine gap 3 pours from the top of the chimney. On the seafloor around the base of the chimney are three zones of animals: zone 1, nearest the vent, is gap 4; zone 2 is mussels and clams, with bacteria living in their gap 5; zone 3, on the outer edge, is crabs, shrimp and fish.',
            items: [
              { shape: 'rect', x: 0, y: 0, w: 640, h: 200, tone: 'water' },
              { shape: 'rect', x: 0, y: 200, w: 640, h: 125, tone: 'soft' },
              {
                shape: 'text',
                x: 630,
                y: 20,
                text: 'cold deep seawater (about 2 °C)',
                size: 12,
                anchor: 'end',
              },
              { shape: 'text', x: 590, y: 300, text: 'ocean crust', size: 12 },
              // Heat source
              { shape: 'rect', x: 200, y: 330, w: 240, h: 44, tone: 'plain' },
              { shape: 'text', x: 190, y: 356, text: 'heat source', size: 12, anchor: 'end' },
              { shape: 'gap', x: 320, y: 352, n: 1 },
              // Seawater sinking through cracks, hot fluid rising
              { shape: 'line', x1: 150, y1: 205, x2: 230, y2: 318, dashed: true, arrow: true },
              { shape: 'line', x1: 500, y1: 205, x2: 420, y2: 318, dashed: true, arrow: true },
              {
                shape: 'text',
                x: 20,
                y: 222,
                text: 'seawater seeps down',
                size: 11,
                anchor: 'start',
              },
              { shape: 'text', x: 20, y: 236, text: 'through cracks', size: 11, anchor: 'start' },
              { shape: 'line', x1: 320, y1: 328, x2: 320, y2: 210, arrow: true },
              { shape: 'text', x: 332, y: 280, text: 'hot fluid rises', size: 11, anchor: 'start' },
              { shape: 'text', x: 332, y: 294, text: '(over 350 °C)', size: 11, anchor: 'start' },
              // Animal zones on the seafloor
              { shape: 'rect', x: 40, y: 186, w: 560, h: 14, tone: 'plain' },
              { shape: 'rect', x: 150, y: 186, w: 340, h: 14, tone: 'soft' },
              { shape: 'rect', x: 250, y: 186, w: 140, h: 14, tone: 'green' },
              {
                shape: 'text',
                x: 45,
                y: 178,
                text: 'zone 3: crabs, shrimp, fish',
                size: 11,
                anchor: 'start',
              },
              // Chimney and plume
              { shape: 'rect', x: 300, y: 90, w: 40, h: 110, tone: 'soft' },
              { shape: 'line', x1: 320, y1: 198, x2: 320, y2: 94, dashed: true },
              {
                shape: 'path',
                d: 'M318 90 C 305 72, 295 58, 278 42 M322 90 C 335 72, 345 58, 362 42',
              },
              { shape: 'text', x: 170, y: 30, text: 'black ‘smoke’ of fine', size: 12 },
              { shape: 'gap', x: 170, y: 52, n: 3 },
              { shape: 'line', x1: 216, y1: 52, x2: 282, y2: 52, arrow: true },
              { shape: 'text', x: 490, y: 62, text: 'first layer of chimney wall', size: 12 },
              { shape: 'gap', x: 490, y: 84, n: 2 },
              { shape: 'line', x1: 444, y1: 90, x2: 342, y2: 122, arrow: true },
              { shape: 'text', x: 130, y: 112, text: 'zone 1 (nearest vent)', size: 12 },
              { shape: 'gap', x: 130, y: 134, n: 4 },
              { shape: 'line', x1: 176, y1: 140, x2: 268, y2: 188, arrow: true },
              { shape: 'text', x: 540, y: 122, text: 'zone 2: mussels and clams,', size: 12 },
              { shape: 'text', x: 540, y: 138, text: 'bacteria live in their', size: 12 },
              { shape: 'gap', x: 540, y: 160, n: 5 },
              { shape: 'line', x1: 494, y1: 166, x2: 455, y2: 188, arrow: true },
            ],
          },
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['magma chamber', 'molten rock'],
          location: { ref: 'B', quote: 'As it approaches the magma chamber beneath the ridge' },
          explanation:
            'The seawater is heated as it “approaches the magma chamber beneath the ridge”, so the magma chamber is the heat source at the bottom of the diagram. “Molten rock” (also in paragraph B) describes the same thing and is accepted.',
        },
        {
          n: 2,
          answers: ['anhydrite', 'calcium sulphate', 'calcium sulfate'],
          location: {
            ref: 'C',
            quote:
              'Calcium sulphate, or anhydrite, is usually the first to separate out, forming a fragile tube',
          },
          explanation:
            'Anhydrite (calcium sulphate) is “the first to separate out”, forming the tube that becomes the chimney wall. Metal sulphides come later, on the inner surface, so they are not the first layer.',
          distractors: ['metal sulphides', 'sulphides'],
        },
        {
          n: 3,
          answers: ['(sulphide) particles'],
          location: {
            ref: 'C',
            quote: 'The fine sulphide particles that escape from the top darken the water',
          },
          explanation:
            'The black “smoke” is made of the fine sulphide particles escaping from the top of the chimney. The label already contains “fine”, so write “sulphide particles”.',
        },
        {
          n: 4,
          answers: ['tube worms', 'tube worm'],
          location: {
            ref: 'E',
            quote:
              'Closest to the vent opening, where water temperatures fluctuate and sulphide levels are highest, grow the tube worms',
          },
          explanation:
            '“Nearest vent” paraphrases “Closest to the vent opening … grow the tube worms”. “Giant tube worms” would break the two-word limit.',
        },
        {
          n: 5,
          answers: ['gills'],
          location: { ref: 'E', quote: 'but in their gills rather than in a special organ' },
          explanation:
            'Mussels and clams host bacteria “in their gills”. The “special organ” is where the tube worm keeps its bacteria, so it does not fit zone 2.',
        },
      ],
    },
    {
      type: 'mcq-multi',
      instructions: 'Choose TWO letters, A–E.',
      questions: [
        {
          n: 6,
          n2: 7,
          prompt: 'Which TWO statements about the giant tube worm are made in the passage?',
          options: [
            { key: 'A', text: 'It filters food particles from the surrounding water.' },
            { key: 'B', text: 'It depends on bacteria inside its body for all of its nutrition.' },
            { key: 'C', text: 'Its plume collects substances that its bacteria need.' },
            { key: 'D', text: 'It is the first animal to settle at a newly formed vent.' },
            { key: 'E', text: 'It lives on the outer edge of the vent community.' },
          ],
          answers: ['B', 'C'],
          location: {
            ref: 'D',
            quote:
              'The worm’s bright red plume absorbs sulphide and oxygen from the water and delivers both to its bacterial partners, which in return supply the worm with all of its food',
          },
          explanation:
            'B: the bacteria “supply the worm with all of its food”. C: the plume “absorbs sulphide and oxygen” and “delivers both to its bacterial partners”, i.e. it collects what the bacteria need.',
          traps: {
            A: 'The adult worm has “neither a mouth nor a digestive system”, so it cannot filter or eat particles. Feeding on drifting particles is what biologists once assumed deep-sea animals did (paragraph A).',
            D: 'Paragraph F says a small, fast-growing species of tube worm arrives first; the giant tube worm overtakes it later. Bacterial mats appear even earlier.',
            E: 'Paragraph E places tube worms “closest to the vent opening”; crabs, shrimp and fish live at the outer edge.',
          },
        },
        {
          n: 8,
          n2: 9,
          prompt: 'Which TWO points do critics of vent mining make?',
          options: [
            {
              key: 'A',
              text: 'Some of the animals at inactive vents may be found in no other place.',
            },
            { key: 'B', text: 'Material disturbed by mining could harm active vents.' },
            { key: 'C', text: 'The metal deposits are too small to be worth extracting.' },
            { key: 'D', text: 'Mining companies have not yet received permission to begin.' },
            { key: 'E', text: 'Mining would release harmful chemicals from the vent fluid.' },
          ],
          answers: ['A', 'B'],
          location: {
            ref: 'H',
            quote: 'some of which may occur nowhere else',
          },
          explanation:
            'A: critics say inactive vents host animals “some of which may occur nowhere else”. B: they warn that “clouds of sediment stirred up by mining machinery could drift for kilometres and smother active vents nearby”.',
          traps: {
            C: 'The deposits are described as “rich in copper, zinc and sometimes gold”; nobody says they are too small.',
            D: 'The companies “have applied for permission”, so it may be true that they have none yet, but this is a fact about the process, not a point made by critics.',
            E: 'Critics mention sediment smothering vents, not chemicals being released.',
          },
        },
      ],
    },
    {
      type: 'completion',
      format: 'flowchart',
      instructions:
        'Complete the flow-chart below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
      wordLimit: { words: 2, number: false },
      title: 'The life of a vent community',
      body: [
        {
          kind: 'flow',
          steps: [
            'A volcanic eruption buries the existing community under fresh [[10]]',
            'Within days: the seafloor is covered by white [[11]] of bacteria',
            'Within a year: a small, [[12]] species of tube worm settles around the openings',
            'The giant tube worm takes over, growing more than 1.5 metres in under two years',
            'Mussels arrive and reduce the amount of [[13]] available to the worms',
            'The fluid flow weakens or moves; the community collapses and its remains are eaten by [[14]]',
          ],
        },
      ],
      questions: [
        {
          n: 10,
          answers: ['lava'],
          location: { ref: 'F', quote: 'bury an entire community under fresh lava' },
          explanation:
            '“Buries … under fresh” matches “bury an entire community under fresh lava”. The word “fresh” is already in the flow-chart.',
        },
        {
          n: 11,
          answers: ['mats'],
          location: { ref: 'F', quote: 'the seafloor was coated in white mats of bacteria' },
          explanation:
            '“Covered by” paraphrases “coated in”; the gap needs the noun before “of bacteria”: mats.',
        },
        {
          n: 12,
          answers: ['fast-growing', 'fast growing'],
          location: { ref: 'F', quote: 'a small, fast-growing species of tube worm' },
          explanation:
            '“Fast-growing” is hyphenated, so it counts as one word. Don’t write “giant”: the giant tube worm arrives after this species.',
          distractors: ['giant'],
        },
        {
          n: 13,
          answers: ['sulphide', 'sulfide'],
          location: { ref: 'F', quote: 'reduces the amount of sulphide reaching the worms' },
          explanation:
            '“Available to the worms” paraphrases “reaching the worms”. The mussels’ feeding reduces the sulphide the worms’ bacteria need.',
        },
        {
          n: 14,
          answers: ['scavengers'],
          location: {
            ref: 'F',
            quote: 'leaving empty shells and dead tubes to be picked over by scavengers',
          },
          explanation:
            '“Its remains are eaten by” paraphrases “empty shells and dead tubes … picked over by scavengers”.',
        },
      ],
    },
  ],
})
