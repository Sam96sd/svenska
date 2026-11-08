import { defineListening } from '../define'

/** Original script. Part 4 style: a history lecture on how city maps changed in the nineteenth century (Ashbury is fictional). */
export default defineListening({
  id: 'l4-history-of-maps',
  skill: 'listening',
  part: 4,
  use: 'practice',
  title: 'How city maps changed in the nineteenth century',
  topic: 'History',
  context:
    'You will hear part of a lecture on the history of city maps. First, you have some time to look at questions 1 to 10.',
  speakers: [
    { id: 'lecturer', name: 'Professor Reyes', role: 'Lecturer', gender: 'm', accent: 'en-US' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'lecturer',
      text: 'Good afternoon, everyone. In today’s session on the history of cartography, I want to look at city maps, and in particular at how dramatically they changed during the nineteenth century.',
    },
    {
      id: 'l2',
      speaker: 'lecturer',
      text: 'If you look at a typical city map from the seventeen hundreds, the first thing you notice is that it isn’t really trying to be accurate. Streets are often the wrong width, and important buildings are drawn far too large.',
    },
    {
      id: 'l3',
      speaker: 'lecturer',
      text: 'That’s because these maps were mainly decorative. They were bought by well-off families to hang on the wall, and their real purpose was to show off the city’s wealth to visitors and rival towns.',
    },
    {
      id: 'l4',
      speaker: 'lecturer',
      text: 'Many were also drawn from an imaginary viewpoint high above the city, as if the artist were a bird, so you saw the fronts of buildings rather than a true plan.',
    },
    {
      id: 'l5',
      speaker: 'lecturer',
      text: 'So what changed? I’d point to three main forces. The first was technological. Until around eighteen twenty, most maps were printed from engraved copper plates, which was slow and expensive.',
    },
    {
      id: 'l6',
      speaker: 'lecturer',
      text: 'The spread of lithography, which involved drawing directly onto a flat stone, cut the cost of printing dramatically. Suddenly a map was something an ordinary shopkeeper could afford.',
    },
    {
      id: 'l7',
      speaker: 'lecturer',
      text: 'The second force was growth. Industrial towns were expanding so fast that mapmakers simply couldn’t keep up. Take the mill town of Ashbury, which we’ll come back to later.',
    },
    {
      id: 'l8',
      speaker: 'lecturer',
      text: 'One Ashbury publisher had planned to bring out a new edition every two years. But in a letter from eighteen forty-six, he complained that his maps were out of date within eighteen months of printing.',
    },
    {
      id: 'l9',
      speaker: 'lecturer',
      text: 'The third force, and perhaps the most important, was that city authorities discovered maps could be tools for solving problems, rather than just pictures.',
    },
    {
      id: 'l10',
      speaker: 'lecturer',
      text: 'Public health is the clearest example. When cholera swept through many European cities in eighteen forty-nine, officials began marking each death on a street plan.',
    },
    {
      id: 'l11',
      speaker: 'lecturer',
      text: 'Once the deaths were plotted, clusters appeared around particular wells and drains. That evidence helped persuade councils to invest in clean water and proper sewers.',
    },
    {
      id: 'l12',
      speaker: 'lecturer',
      text: 'Later in the century, maps were also used for social research. Investigators walked every street, then colored each one according to the typical income of the households living there.',
    },
    {
      id: 'l13',
      speaker: 'lecturer',
      text: 'Their critics complained that these were really maps of social class. But the investigators insisted they were measuring something far more objective.',
    },
    {
      id: 'l14',
      speaker: 'lecturer',
      text: 'Insurance companies were another major user. Before covering a building against fire, an insurer wanted to know what materials it was made of, because a timber warehouse was a far greater risk than a brick one.',
    },
    {
      id: 'l15',
      speaker: 'lecturer',
      text: 'OK. For the rest of today, I want to focus on how one of these new practical maps was actually produced, using the Ashbury town survey of the eighteen sixties as an example.',
    },
    {
      id: 'l16',
      speaker: 'lecturer',
      text: 'The work began by dividing the town into twelve districts, and each one was given to a small team of surveyors.',
    },
    {
      id: 'l17',
      speaker: 'lecturer',
      text: 'Traditionally, surveyors measured distance with a chain made of metal links. But chains stretch and tangle, so the Ashbury teams used steel tapes instead, which were far more accurate.',
    },
    {
      id: 'l18',
      speaker: 'lecturer',
      text: 'Next, they had to measure angles from fixed points that could be seen across the whole town. The town hall clock tower was the obvious choice, but by then it was hidden behind mill chimneys.',
    },
    {
      id: 'l19',
      speaker: 'lecturer',
      text: 'So in the end they used the church spires, of which Ashbury had seven, as their fixed points.',
    },
    {
      id: 'l20',
      speaker: 'lecturer',
      text: 'Once the measurements were complete, the field drawings from all twelve districts were combined into a single draft map at a very large scale.',
    },
    {
      id: 'l21',
      speaker: 'lecturer',
      text: 'This draft was then put on display in the town hall for a month, so that residents could check their own streets and point out any mistakes. The surveyors expected very few, but they received over three hundred.',
    },
    {
      id: 'l22',
      speaker: 'lecturer',
      text: 'Finally, printing. Interestingly, the master version wasn’t produced by lithography at all. It was engraved on copper, because a copper plate could be stored and corrected for decades.',
    },
    {
      id: 'l23',
      speaker: 'lecturer',
      text: 'The cheaper copies sold in shops were then printed from stone. So the old technology and the new one actually worked side by side.',
    },
    {
      id: 'l24',
      speaker: 'lecturer',
      text: 'Next week, we’ll see how photography changed surveying all over again. Thanks, everyone.',
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'note',
      instructions: 'Complete the notes below.',
      wordLimit: { words: 2, number: true },
      title: 'Nineteenth-century city maps',
      body: [
        { kind: 'heading', text: 'City maps before 1800' },
        {
          kind: 'bullets',
          items: [
            'Mainly decorative: intended to display a city’s [[1]]',
            'Often drawn from an imaginary high viewpoint',
          ],
        },
        { kind: 'heading', text: 'Reasons for change' },
        {
          kind: 'bullets',
          items: [
            'Printing: [[2]] made maps much cheaper',
            'Rapid growth: one publisher’s maps were out of date within [[3]]',
            'City authorities began to see maps as practical tools',
          ],
        },
        { kind: 'heading', text: 'New uses' },
        {
          kind: 'bullets',
          items: [
            'Public health: deaths from [[4]] marked on street plans',
            'Social research: streets coloured by the typical [[5]] of households',
            'Fire insurance: maps showed the [[6]] of each building',
          ],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['wealth'],
          location: { ref: 'l3', quote: 'their real purpose was to show off the city’s wealth' },
          explanation:
            '“Show off” = “display”. The maps were decorative and meant to impress visitors and rival towns with the city’s wealth.',
        },
        {
          n: 2,
          answers: ['lithography'],
          location: {
            ref: 'l6',
            quote:
              'The spread of lithography, which involved drawing directly onto a flat stone, cut the cost of printing dramatically',
          },
          explanation:
            'Engraved copper plates were the old, expensive method. Lithography “cut the cost of printing”.',
          distractors: ['copper', 'engraving'],
        },
        {
          n: 3,
          answers: ['18 months'],
          location: { ref: 'l8', quote: 'his maps were out of date within eighteen months' },
          explanation:
            'Two years was how often he “had planned” to publish; the maps actually went out of date within eighteen months.',
          distractors: ['2 years', 'two years'],
        },
        {
          n: 4,
          answers: ['cholera'],
          location: { ref: 'l10', quote: 'When cholera swept through many European cities' },
          explanation:
            'Officials marked each cholera death on a street plan; clusters then pointed to wells and drains.',
        },
        {
          n: 5,
          answers: ['income', 'incomes'],
          location: { ref: 'l12', quote: 'the typical income of the households living there' },
          explanation:
            'Streets were coloured by household income. “Social class” is what the critics called it — the investigators rejected that description.',
          distractors: ['class', 'social class'],
        },
        {
          n: 6,
          answers: ['(building) materials'],
          location: {
            ref: 'l14',
            quote: 'an insurer wanted to know what materials it was made of',
          },
          explanation:
            'Timber and brick are examples of the materials; the general word the notes need is “materials”.',
          distractors: ['timber', 'brick'],
        },
      ],
    },
    {
      type: 'completion',
      format: 'flowchart',
      instructions: 'Complete the flow chart below.',
      wordLimit: { words: 1, number: false },
      title: 'Producing the Ashbury town survey (1860s)',
      body: [
        {
          kind: 'flow',
          steps: [
            'The town was divided into twelve districts, one for each team of surveyors.',
            'Distances were measured with steel [[7]] rather than chains.',
            'Angles were measured from church [[8]], which could be seen across the town.',
            'Field drawings were combined into one large-scale draft.',
            'The draft was displayed in the town hall so that [[9]] could point out errors.',
            'The master version was engraved on [[10]]; cheaper copies were printed by lithography.',
          ],
        },
      ],
      questions: [
        {
          n: 7,
          answers: ['tapes'],
          location: { ref: 'l17', quote: 'the Ashbury teams used steel tapes instead' },
          explanation:
            'Chains were the traditional tool, rejected because they stretch and tangle. Note the plural: “tapes”.',
          distractors: ['chains', 'chain'],
        },
        {
          n: 8,
          answers: ['spires'],
          location: { ref: 'l19', quote: 'they used the church spires' },
          explanation:
            'The town hall clock tower was “the obvious choice” but was hidden by mill chimneys, so the church spires were used.',
          distractors: ['tower', 'towers', 'chimneys'],
        },
        {
          n: 9,
          answers: ['residents'],
          location: {
            ref: 'l21',
            quote: 'so that residents could check their own streets and point out any mistakes',
          },
          explanation:
            '“Point out errors” = “point out any mistakes”. The surveyors drew the map; the residents checked it.',
          distractors: ['surveyors'],
        },
        {
          n: 10,
          answers: ['copper'],
          location: { ref: 'l22', quote: 'It was engraved on copper' },
          explanation:
            'The master version was engraved on copper so it could be kept and corrected; only the cheap copies were printed from stone.',
          distractors: ['stone'],
        },
      ],
    },
  ],
})
