import { defineListening } from '../../define'

/** Original script. Part 4 style drill: a short lecture with signposted sections and ONE WORD ONLY notes. */
export default defineListening({
  id: 'drill-lecture-notes',
  skill: 'listening',
  part: 4,
  use: 'drill',
  title: 'Green roofs',
  topic: 'Environment',
  context:
    'You will hear part of a lecture about green roofs in cities. First, you have some time to look at questions 1 to 8.',
  speakers: [{ id: 'cole', name: 'Dr Cole', role: 'Lecturer', gender: 'f', accent: 'en-US' }],
  lines: [
    {
      id: 'l1',
      speaker: 'cole',
      text: 'Good morning, everyone. Today I’m going to talk about green roofs, that is, roofs covered with soil and plants, and why more cities are encouraging them.',
    },
    {
      id: 'l2',
      speaker: 'cole',
      text: 'Let’s start with the two main types. The first is called an extensive roof. The soil is thin, usually just a few centimetres, so the plants have to be tough.',
    },
    {
      id: 'l3',
      speaker: 'cole',
      text: 'You might expect grass, but grass dries out too quickly up there. Instead, these roofs are planted mostly with succulents, which store water in their leaves.',
    },
    {
      id: 'l4',
      speaker: 'cole',
      text: 'The second type is the intensive roof. Here the soil is much deeper, so you can grow shrubs and even small trees. It’s essentially a garden in the sky.',
    },
    {
      id: 'l5',
      speaker: 'cole',
      text: 'The drawback is that intensive roofs need constant care. Someone has to water, prune and feed the plants, so the maintenance costs are high.',
    },
    {
      id: 'l6',
      speaker: 'cole',
      text: 'Moving on to the benefits. The best-known one is that green roofs soak up rain. Less water rushes into the drains during storms, which lowers the risk of flooding.',
    },
    {
      id: 'l7',
      speaker: 'cole',
      text: 'They also insulate the building. People often assume the main saving is on heating in winter. In fact, the bigger saving is on cooling, because the plants block the summer heat.',
    },
    {
      id: 'l8',
      speaker: 'cole',
      text: 'The third benefit is for wildlife. Birds visit, of course, but the real winners are insects, such as bees and butterflies, which find food and shelter up there.',
    },
    {
      id: 'l9',
      speaker: 'cole',
      text: 'Now, the problems. Many people think cost is the main barrier. Green roofs certainly aren’t cheap, but the bigger obstacle is weight. Wet soil is extremely heavy, and many older roofs simply can’t carry it.',
    },
    {
      id: 'l10',
      speaker: 'cole',
      text: 'Leaks are another headache. Usually it isn’t the rain that causes them, but roots, which can push down through the waterproof layer underneath.',
    },
    {
      id: 'l11',
      speaker: 'cole',
      text: 'That’s why a good design always includes a strong root barrier, and why regular inspections matter so much.',
    },
    {
      id: 'l12',
      speaker: 'cole',
      text: 'Finally, a word on what’s coming next. Next week, we’ll look at rooftop farming, where roofs are used to grow food on a commercial scale. Please read chapter six before then.',
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'note',
      instructions: 'Complete the notes below.',
      wordLimit: { words: 1, number: false },
      title: 'Green roofs',
      body: [
        { kind: 'heading', text: 'Types' },
        {
          kind: 'bullets',
          items: [
            'Extensive: thin soil; planted mainly with [[1]]',
            'Intensive: deeper soil, shrubs and trees; high [[2]] costs',
          ],
        },
        { kind: 'heading', text: 'Benefits' },
        {
          kind: 'bullets',
          items: [
            'absorb rain, so less risk of [[3]]',
            'insulation: largest saving is on [[4]]',
            'wildlife: mainly helps [[5]]',
          ],
        },
        { kind: 'heading', text: 'Problems' },
        {
          kind: 'bullets',
          items: ['main obstacle: the [[6]] of wet soil', 'leaks usually caused by [[7]]'],
        },
        { kind: 'heading', text: 'Next lecture' },
        { kind: 'text', text: 'rooftop [[8]]' },
      ],
      questions: [
        {
          n: 1,
          answers: ['succulents'],
          location: { ref: 'l3', quote: 'these roofs are planted mostly with succulents' },
          explanation:
            'Grass is mentioned first and rejected (“grass dries out too quickly”). “Instead” signals the answer: succulents.',
          distractors: ['grass'],
        },
        {
          n: 2,
          answers: ['maintenance'],
          location: { ref: 'l5', quote: 'so the maintenance costs are high' },
          explanation:
            'The notes say “high … costs”; the speaker says “the maintenance costs are high”. Watering and pruning are examples of maintenance, not the cost type.',
        },
        {
          n: 3,
          answers: ['flooding', 'floods', 'flood'],
          location: { ref: 'l6', quote: 'which lowers the risk of flooding' },
          explanation:
            '“Moving on to the benefits” signals the new heading. “Soak up rain” = absorb rain; “lowers the risk” = less risk.',
        },
        {
          n: 4,
          answers: ['cooling'],
          location: { ref: 'l7', quote: 'the bigger saving is on cooling' },
          explanation:
            'Heating is what people “often assume”; “In fact” introduces the real answer: cooling.',
          distractors: ['heating'],
        },
        {
          n: 5,
          answers: ['insects'],
          location: { ref: 'l8', quote: 'the real winners are insects' },
          explanation:
            '“The real winners” = the ones it mainly helps. Birds visit, but the contrast word “but” moves on to insects.',
          distractors: ['birds', 'bees'],
        },
        {
          n: 6,
          answers: ['weight'],
          location: { ref: 'l9', quote: 'the bigger obstacle is weight' },
          explanation:
            'Cost is what “many people think” is the main barrier; the speaker says the bigger obstacle is weight.',
          distractors: ['cost'],
        },
        {
          n: 7,
          answers: ['roots'],
          location: {
            ref: 'l10',
            quote: 'but roots, which can push down through the waterproof layer',
          },
          explanation: '“It isn’t the rain … but roots” rejects rain and gives the cause: roots.',
          distractors: ['rain'],
        },
        {
          n: 8,
          answers: ['farming'],
          location: { ref: 'l12', quote: 'we’ll look at rooftop farming' },
          explanation:
            '“Finally” and “next week” signal the last heading. The notes already give “rooftop”, so the one missing word is “farming”.',
          distractors: ['food'],
        },
      ],
    },
  ],
})
