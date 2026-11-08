import { defineLesson } from '../define'

export default defineLesson({
  id: 'w-cohesion-referencing',
  skill: 'writing',
  module: 'both',
  order: 13,
  title: 'Cohesion without mechanical linkers',
  summary:
    'Hold your writing together with reference words, substitution, topic sentences and contrast structures instead of a linking word at the start of every sentence.',
  types: ['opinion', 'discussion', 'line', 'complaint'],
  minutes: 10,
  sections: [
    {
      kind: 'text',
      heading: 'Linkers are not the same as cohesion',
      paragraphs: [
        'Many students believe Coherence and Cohesion means using as many linking words as possible: Firstly, Moreover, Furthermore, In addition, On the other hand. At Band 6 the examiner describes exactly this as **mechanical** linking. At Band 8 the description is that **all aspects of cohesion are well managed** — and the most important aspects are not linkers at all.',
        'Real cohesion comes from **reference** (this, these, such, which), **substitution** (one, do so, the former), **topic sentences** that connect paragraphs, and **sentence structures** that build contrast into the grammar. When these are working, you need far fewer linking words, and the ones you use stand out for the right reasons.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Reference and substitution',
      items: [
        {
          phrase: 'this + noun (this approach, this shift, this decline)',
          use: 'Points back to a whole idea. Adding a noun makes “this” unambiguous.',
        },
        {
          phrase: 'such + noun (such policies, such delays)',
          use: 'Refers to things of the type just described.',
        },
        {
          phrase: ', which …',
          use: 'A relative clause that comments on the whole previous clause: “Fares doubled, which hit commuters hardest.”',
        },
        {
          phrase: 'the former / the latter',
          use: 'Picks out one of two things just mentioned. Use sparingly.',
        },
        {
          phrase: 'one / ones',
          use: 'Avoids repeating a countable noun: “Older buses were replaced by electric ones.”',
        },
        {
          phrase: 'do so / doing so',
          use: 'Avoids repeating a verb phrase: “Staff may work from home, but those who choose to do so must…”',
        },
        {
          phrase: 'the figure for… / the same period',
          use: 'Task 1: refers back to data without repeating the full category name.',
        },
      ],
    },
    {
      kind: 'steps',
      heading: 'Topic sentences that connect',
      items: [
        '**Start each body paragraph with a sentence that names its idea** and, where possible, refers back to the previous paragraph.',
        '**Use a summarising noun** to pick up the previous paragraph: “These drawbacks, however, are temporary.”',
        '**Signal contrast with structure,** not just “On the other hand”: “The benefits, by contrast, are long-term.”',
        '**Keep the subject of the paragraph visible:** if the paragraph is about teachers, many sentences can begin with teachers, they, such staff, these professionals.',
      ],
    },
    {
      kind: 'phrases',
      heading: 'Contrast and concession structures',
      items: [
        {
          phrase: 'X…, whereas / while Y…',
          use: 'Direct contrast inside one sentence: “Rail use doubled, whereas bus use fell.”',
        },
        {
          phrase: 'Although / Even though + clause, …',
          use: 'Concession: “Although the scheme is costly, it pays for itself within a decade.”',
        },
        {
          phrase: 'Despite / In spite of + noun or -ing, …',
          use: '“Despite rising fares, passenger numbers grew.” Never “despite of”.',
        },
        {
          phrase: 'Admittedly, … . However, …',
          use: 'Conceding a point before answering it; useful in opinion essays.',
        },
        { phrase: '…; nevertheless, …', use: 'Formal contrast between two full sentences.' },
        { phrase: 'While it is true that…, …', use: 'Opening a concession in a discussion essay.' },
      ],
    },
    {
      kind: 'compare',
      heading: 'Band 7 and Band 8 cohesion',
      headers: ['Band 7', 'Band 8'],
      rows: [
        [
          'Cars cause a lot of pollution in cities. In addition, they create traffic jams, and this makes journeys slower.',
          'Private cars are a major source of urban pollution, and the congestion they create makes every journey slower, including those by bus.',
        ],
        [
          'On the other hand, there are some advantages of working from home.',
          'These costs, however, are outweighed by one clear advantage: time.',
        ],
        [
          'Sales of tea increased. Sales of coffee decreased. In contrast, sales of juice stayed the same.',
          'Tea sales rose steadily, whereas those of coffee declined; juice, meanwhile, showed little change.',
        ],
        [
          'I am writing about the heating in my flat. The heating has not worked since Monday, so my flat is very cold.',
          'I am writing about the heating in my flat, which has not worked since Monday. As a result, the temperature indoors has fallen to around ten degrees.',
        ],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: removing mechanical links',
      context:
        '“Many cities are building more cycle lanes. Firstly, cycle lanes make cycling safer. Moreover, cycle lanes encourage people to cycle. In addition, if more people cycle, there will be less traffic. However, some drivers do not like cycle lanes. This is because cycle lanes make the roads narrower.”',
      question:
        'Rewrite the passage so that cohesion comes from reference and structure rather than linkers.',
      answer:
        'Many cities are investing in cycle lanes, mainly because separating cyclists from motor traffic makes cycling far safer. This, in turn, encourages people who would never ride on a busy road to try it, and every new cyclist means one fewer car in the rush hour. Not everyone welcomes such schemes, however: some drivers resent them for narrowing the roads they rely on.',
      reasoning: [
        '“Cycle lanes” appeared five times. Reference (“this”, “such schemes”, “them”) removes the repetition.',
        '“Firstly / Moreover / In addition” are replaced by a cause-and-effect chain: safer → more people cycle → fewer cars.',
        '“This, in turn,” refers to the whole previous idea and shows that one effect leads to the next.',
        'The contrast is built into the sentence with “however” after the subject and a colon introducing the explanation, instead of two short sentences.',
        'The result has fewer linking words but stronger links between ideas: that is what “well managed” cohesion looks like.',
      ],
    },
    {
      kind: 'trap',
      text: '**Common errors with contrast words:** “Although it is expensive, **but** it is useful” (use one or the other, never both); “**Despite of** the cost” (just “despite the cost”); and “On the other hand” with no first hand — it introduces the second side of a comparison, not any contrast.',
    },
    {
      kind: 'tip',
      text: 'After writing, **circle every linking word** at the start of a sentence. If more than one sentence in three begins with one, rewrite a few using reference words or a contrast structure instead.',
    },
  ],
  drills: [],
})
