import { defineLesson } from '../define'

export default defineLesson({
  id: 'w-a1-maps-process',
  skill: 'writing',
  module: 'academic',
  order: 4,
  title: 'Maps and processes',
  summary:
    'Describe where things are and how they changed with location language and the passive, and walk through a process stage by stage with clear sequencing.',
  types: ['map', 'process'],
  minutes: 10,
  sections: [
    {
      kind: 'text',
      heading: 'No trends, but still an overview',
      paragraphs: [
        'Maps and process diagrams have no rising or falling lines, but the rule is the same: **an overview of the main features, then the detail**. For a map, the overview is the overall transformation (what kind of place it became). For a process, it is the **number of stages**, where the process starts and ends, and whether it is a cycle.',
        'Both task types rely heavily on the **passive voice**, because what matters is what happened to the buildings or materials, not who did it. “The factory was demolished” is more natural here than “They demolished the factory”.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Location language for maps',
      items: [
        {
          phrase: 'in the north-east corner / to the south of the river',
          use: 'Use compass points, not “at the top” or “on the left”.',
        },
        {
          phrase: 'adjacent to / next to / alongside',
          use: 'Two features side by side: “a car park adjacent to the station”.',
        },
        {
          phrase: 'opposite / across the road from',
          use: 'Features facing each other across a road or square.',
        },
        {
          phrase: 'on the outskirts of the town / on the edge of',
          use: 'Near the boundary of the area shown.',
        },
        { phrase: 'running parallel to / leading from X to Y', use: 'Roads, railways and paths.' },
        {
          phrase: 'set back from the road / overlooking the lake',
          use: 'More precise positioning for Band 8 range.',
        },
      ],
    },
    {
      kind: 'phrases',
      heading: 'Language for changes (past passive)',
      items: [
        { phrase: 'was demolished / was knocked down', use: 'A building that no longer exists.' },
        {
          phrase: 'was replaced by / made way for',
          use: 'One feature took the place of another: “The orchard made way for a supermarket.”',
        },
        { phrase: 'was extended / was enlarged', use: 'The same building, made bigger.' },
        {
          phrase: 'was converted into',
          use: 'Same building, new use: “The mill was converted into flats.”',
        },
        { phrase: 'was relocated to', use: 'Moved to a different place on the map.' },
        { phrase: 'was widened / was pedestrianised', use: 'Changes to roads and streets.' },
        {
          phrase: 'remained unchanged / was retained',
          use: 'Important features that stayed the same; mention them briefly.',
        },
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: a map overview and opening detail',
      context:
        'Two maps show the fictional coastal village of Kelmouth in 2000 and today. In 2000: a fishing harbour in the south, warehouses along the quay, one road running north to south, farmland to the east and a small primary school in the north-west. Today: the harbour is a marina for leisure boats, the warehouses are flats and restaurants, the road has been widened with a roundabout at its centre, a housing estate covers the former farmland, and the school has a new extension.',
      question: 'Write the overview and the first two sentences of the first body paragraph.',
      answer:
        'Overall, Kelmouth has been transformed from a working fishing village into a residential and leisure destination, with considerably more housing and improved road access, although its basic layout around the harbour has been retained. The most significant changes have taken place along the waterfront. The fishing harbour in the south has been converted into a marina for leisure boats, and the warehouses that once lined the quay have been redeveloped as flats and restaurants.',
      reasoning: [
        'The overview names the **overall change in character** (fishing → residential and leisure) and one thing that stayed the same.',
        'Because the second map is “today”, the **present perfect passive** (has been converted) is natural; for two past dates, use the past simple passive (was converted).',
        'The body paragraph is grouped **by area** (the waterfront first), not by listing changes in random order.',
        'Location language (in the south, along the quay) is precise and uses compass points.',
        'Nothing is evaluated: no “sadly” or “this is better for tourists”.',
      ],
    },
    {
      kind: 'steps',
      heading: 'Writing up a process',
      items: [
        '**Find the start and the end** and count the stages. Decide whether it is linear or a cycle, natural (the life cycle of a frog) or man-made (making glass).',
        '**Write the overview** with the number of stages, the start and end points and, if it applies, the fact that it is cyclical.',
        '**Split the stages into two body paragraphs,** usually at a natural break (e.g. preparation vs production, or the first half vs the second half).',
        '**Use the present simple passive** for man-made processes: the clay *is mixed*, the bricks *are fired*. Natural processes are often active: the larva *develops* into a pupa.',
        '**Link the stages** with varied sequencing, including clauses such as “Once the beans have been roasted, they are…”.',
        '**Include every stage** on the diagram, using its key words, but turn the labels into full sentences.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Sequencing a process',
      items: [
        {
          phrase: 'The process begins with / At the first stage',
          use: 'Opening the first body paragraph.',
        },
        {
          phrase: 'Once X has been …, it is …',
          use: 'Joins two stages and shows complex grammar.',
        },
        {
          phrase: 'After being …, the X is …',
          use: 'A passive participle clause: “After being washed, the fruit is sorted by size.”',
        },
        {
          phrase: 'At this point / Following this / Subsequently',
          use: 'Middle stages; vary them instead of repeating “then”.',
        },
        { phrase: 'In the final stage / Finally', use: 'The last step.' },
        { phrase: 'whereupon the cycle begins again', use: 'Ending a cyclical process.' },
      ],
    },
    {
      kind: 'compare',
      heading: 'Band 7 and Band 8 process sentences',
      headers: ['Band 7', 'Band 8'],
      rows: [
        [
          'First, they collect the glass. Then they take it to a factory.',
          'Used glass is first collected from recycling banks and then transported to a processing plant.',
        ],
        [
          'Then the glass is washed. After that it is crushed.',
          'Once it has been washed to remove labels, the glass is crushed into small fragments known as cullet.',
        ],
        [
          'The last step is the glass goes to shops.',
          'In the final stage, the new bottles are filled, sealed and distributed to shops, where the cycle begins again.',
        ],
      ],
    },
    {
      kind: 'trap',
      text: '**Tense mix-ups on maps.** Two past dates (1990 and 2010) need the past simple passive: “was built”. A past date and “now” or “present day” need the present perfect: “has been built”. And avoid invented details: if the map does not say why the factory closed, neither do you.',
    },
    {
      kind: 'tip',
      text: 'For a process, the overview can be one sentence: “Overall, the production of recycled paper involves seven stages, beginning with the collection of waste paper and ending with the delivery of new rolls to manufacturers.”',
    },
  ],
  drills: [],
})
