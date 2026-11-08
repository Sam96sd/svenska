import { definePassage } from '../../define'

/** Original text. Drill for lesson r-diagram-short-answer: diagram labelling + short answers. */
export default definePassage({
  id: 'drill-diagram-label',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'The solar still',
  topic: 'Technology and water',
  minutes: 6,
  level: 1,
  texts: [
    {
      title: 'Clean water from sunlight: the solar still',
      paragraphs: [
        {
          text: 'In dry regions where clean water is scarce, a solar still offers a cheap way to make salty or dirty water safe to drink. The device has no moving parts and needs no fuel other than sunlight, so it can be used far from any electricity supply.',
        },
        {
          text: 'The still consists of a shallow, waterproof basin, painted black on the inside so that it absorbs as much heat as possible. Untreated water is poured into the basin to a depth of a few centimetres through an inlet pipe on one side.',
        },
        {
          text: 'The basin is covered by a sheet of glass, which is set at an angle and sealed at the edges to keep the warm air inside. As the sun heats the water, it evaporates, leaving salt and other impurities behind. The vapour rises until it meets the cooler underside of the glass, where it condenses into droplets.',
        },
        {
          text: 'Because the glass slopes, the droplets run down its lower surface instead of falling back into the basin. At the lowest edge, they drip into a narrow collection channel, which carries the clean water to a storage container outside the still.',
        },
        {
          text: 'A still with a surface of one square metre can produce three to four litres of water on a sunny day, which is roughly enough for one person’s drinking needs. Its main weakness is maintenance: the basin must be cleaned every few weeks to remove the salt that builds up on the bottom.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'diagram',
      instructions: 'Label the diagram below. Choose words from the text for each answer.',
      wordLimit: { words: 2 },
      title: 'A solar still (side view)',
      body: [
        {
          kind: 'diagram',
          diagram: {
            width: 520,
            height: 320,
            description:
              'Side view of a solar still. The sun shines onto a sloping cover above a shallow container of untreated water. Box 1 points to the container that holds the water, box 2 to the pipe on its left side, box 3 to the sloping cover, box 4 to the small dots under the cover, and box 5 to the trough at the lower edge of the cover. A pipe leads from the trough to a labelled storage container.',
            items: [
              { shape: 'circle', cx: 40, cy: 40, r: 18, label: 'sun' },
              { shape: 'line', x1: 60, y1: 55, x2: 148, y2: 98, dashed: true, arrow: true },
              { shape: 'line', x1: 110, y1: 90, x2: 400, y2: 190 },
              { shape: 'line', x1: 110, y1: 90, x2: 110, y2: 200 },
              { shape: 'line', x1: 400, y1: 190, x2: 400, y2: 200 },
              { shape: 'rect', x: 110, y: 200, w: 290, h: 60, tone: 'soft' },
              {
                shape: 'rect',
                x: 118,
                y: 222,
                w: 274,
                h: 30,
                tone: 'water',
                label: 'untreated water',
              },
              { shape: 'rect', x: 50, y: 208, w: 60, h: 10 },
              { shape: 'line', x1: 190, y1: 220, x2: 190, y2: 126, dashed: true, arrow: true },
              { shape: 'line', x1: 280, y1: 220, x2: 280, y2: 156, dashed: true, arrow: true },
              { shape: 'text', x: 235, y: 190, text: 'vapour', size: 12 },
              { shape: 'circle', cx: 330, cy: 172, r: 3, tone: 'water' },
              { shape: 'circle', cx: 350, cy: 179, r: 3, tone: 'water' },
              { shape: 'circle', cx: 370, cy: 186, r: 3, tone: 'water' },
              { shape: 'rect', x: 380, y: 186, w: 46, h: 14, tone: 'soft' },
              { shape: 'line', x1: 426, y1: 200, x2: 452, y2: 240, arrow: true },
              { shape: 'rect', x: 420, y: 242, w: 90, h: 50, tone: 'water', label: 'clean water' },
              { shape: 'text', x: 465, y: 310, text: 'storage container', size: 11 },
              { shape: 'line', x1: 250, y1: 282, x2: 250, y2: 262, arrow: true },
              { shape: 'line', x1: 55, y1: 237, x2: 65, y2: 220, arrow: true },
              { shape: 'line', x1: 200, y1: 73, x2: 200, y2: 118, arrow: true },
              { shape: 'line', x1: 340, y1: 113, x2: 345, y2: 170, arrow: true },
              { shape: 'line', x1: 440, y1: 163, x2: 420, y2: 186, arrow: true },
              { shape: 'gap', x: 250, y: 295, n: 1 },
              { shape: 'gap', x: 55, y: 250, n: 2 },
              { shape: 'gap', x: 200, y: 60, n: 3 },
              { shape: 'gap', x: 340, y: 100, n: 4 },
              { shape: 'gap', x: 470, y: 150, n: 5 },
            ],
          },
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['(waterproof) basin'],
          location: { ref: 't0p1', quote: 'The still consists of a shallow, waterproof basin' },
          explanation:
            'Box 1 points to the container that holds the untreated water. The text calls it a “basin”, painted black inside to absorb heat. Write the noun, not a description such as “black”.',
        },
        {
          n: 2,
          answers: ['inlet pipe', 'inlet'],
          location: { ref: 't0p1', quote: 'through an inlet pipe on one side' },
          explanation:
            'The pipe on the side of the basin is where untreated water is poured in: the “inlet pipe”. It comes in the text straight after the basin, following the order of the description.',
        },
        {
          n: 3,
          answers: ['glass'],
          location: { ref: 't0p2', quote: 'The basin is covered by a sheet of glass' },
          explanation:
            'The sloping cover is “a sheet of glass”. With NO MORE THAN TWO WORDS, write “glass”: “sheet of glass” is three words, so it breaks the limit.',
        },
        {
          n: 4,
          answers: ['droplets'],
          location: { ref: 't0p2', quote: 'where it condenses into droplets' },
          explanation:
            'The dots under the glass are the vapour after it condenses: “droplets”. Not “vapour”, which is already labelled and is the gas rising from the water.',
          distractors: ['vapour'],
        },
        {
          n: 5,
          answers: ['(collection) channel'],
          location: { ref: 't0p3', quote: 'they drip into a narrow collection channel' },
          explanation:
            'At the lowest edge of the glass, the droplets drip into a “collection channel”, which leads to the labelled storage container. “Channel” alone is also accepted.',
        },
      ],
    },
    {
      type: 'completion',
      format: 'short-answer',
      instructions: 'Answer the questions below. Choose words from the text for each answer.',
      wordLimit: { words: 3 },
      body: [
        { kind: 'text', text: 'What is the only source of energy that the still needs? [[6]]' },
        { kind: 'text', text: 'What has to be removed from the basin every few weeks? [[7]]' },
      ],
      questions: [
        {
          n: 6,
          answers: ['sunlight'],
          location: { ref: 't0p0', quote: 'needs no fuel other than sunlight' },
          explanation:
            '“What” asks for a thing (a noun). “No fuel other than sunlight” = sunlight is the only energy source. “Electricity” is mentioned only to say the still does not need it.',
          distractors: ['electricity'],
        },
        {
          n: 7,
          answers: ['(the) salt'],
          location: {
            ref: 't0p4',
            quote:
              'the basin must be cleaned every few weeks to remove the salt that builds up on the bottom',
          },
          explanation:
            '“Every few weeks” locates the sentence; what is removed is “the salt”. Keep the answer short: “salt” is complete and safely within the limit.',
        },
      ],
    },
  ],
})
