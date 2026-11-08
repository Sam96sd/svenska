import { definePassage } from '../../define'

/** Original opinion piece. YNNG drill: the writer’s views and claims. */
export default definePassage({
  id: 'drill-ynng-writer-view',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'YNNG drill: car parks are the wrong answer',
  topic: 'Urban planning',
  minutes: 6,
  level: 2,
  intro:
    'This is an opinion piece. The questions ask what the WRITER thinks, not what is true in the world. Watch for opinion language: “it is a mistake”, “arguably”, “I accept”, “What I object to”.',
  texts: [
    {
      title: 'Car parks are the wrong answer',
      paragraphs: [
        {
          text: 'When town centres struggle, the first response of many local councils is to build another multi-storey car park. The reasoning seems obvious: if shoppers cannot park, they will go elsewhere. Yet the evidence suggests that this belief is, at best, only partly true.',
        },
        {
          text: 'Surveys of high-street traders regularly show that shopkeepers overestimate how many of their customers arrive by car. Pedestrians and cyclists may spend less on each visit, but they tend to come more often, and over a month their spending is frequently comparable. It is a mistake, therefore, to design a town centre around the needs of drivers alone.',
        },
        {
          text: 'There is also the question of cost. A single space in a multi-storey building can cost as much to construct as a small car, and that money is spent on land that sits empty for much of the night. Arguably, the same funds would do more good if they were invested in frequent, reliable bus services, although I accept that buses only work if people trust them, and that such trust takes years to build.',
        },
        {
          text: 'None of this means that cars should be banned from town centres. Disabled visitors, tradespeople and those carrying heavy goods will always need access, and any sensible plan must protect it. What I object to is the assumption that more parking is the only way to revive a struggling high street.',
        },
        {
          text: 'Some councils have begun to experiment, turning car parks into markets or small parks at weekends. It is too early to judge these schemes, but they deserve a fair trial rather than the instant criticism they usually receive.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'ynng',
      instructions:
        'Do the following statements agree with the claims of the writer? Choose YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, NOT GIVEN if it is impossible to say what the writer thinks about this.',
      questions: [
        {
          n: 1,
          statement:
            'Drivers’ needs should be the only consideration when a town centre is planned.',
          answer: 'NO',
          location: {
            ref: 't0p1',
            quote:
              'It is a mistake, therefore, to design a town centre around the needs of drivers alone',
          },
          explanation:
            '“It is a mistake” is the writer’s judgement, and it directly rejects planning “around the needs of drivers alone”. “The only consideration” = “alone”.',
        },
        {
          n: 2,
          statement: 'Money spent on car parks could be used more effectively on public transport.',
          answer: 'YES',
          location: {
            ref: 't0p2',
            quote:
              'Arguably, the same funds would do more good if they were invested in frequent, reliable bus services',
          },
          explanation:
            '“Arguably” marks a cautious opinion, but it is still the writer’s view. “Used more effectively” = “do more good”; “public transport” = “bus services”.',
        },
        {
          n: 3,
          statement: 'Bus fares should be reduced to persuade more people to use buses.',
          answer: 'NOT GIVEN',
          location: { ref: 't0p2', quote: 'invested in frequent, reliable bus services' },
          explanation:
            'The writer wants buses to be frequent and reliable, but never mentions fares. Cheaper fares may seem a natural next step, but adding your own logic turns NOT GIVEN into a wrong YES.',
        },
        {
          n: 4,
          statement: 'A new bus service can win the confidence of the public within a short time.',
          answer: 'NO',
          location: { ref: 't0p2', quote: 'such trust takes years to build' },
          explanation:
            '“I accept that … such trust takes years to build” contradicts “win the confidence … within a short time”. Note that “I accept” introduces the writer’s own view, even though it is a concession.',
        },
        {
          n: 5,
          statement:
            'Certain groups of people will always need to be able to reach town centres by car.',
          answer: 'YES',
          location: {
            ref: 't0p3',
            quote: 'will always need access, and any sensible plan must protect it',
          },
          explanation:
            'The writer names groups (disabled visitors, tradespeople, people carrying heavy goods) who “will always need access” and says this must be protected. “Certain groups” = these groups, and in a paragraph about banning cars, “access” means access by car.',
        },
        {
          n: 6,
          statement:
            'Weekend markets held in car parks attract more visitors than the car parks did.',
          answer: 'NOT GIVEN',
          location: { ref: 't0p4', quote: 'It is too early to judge these schemes' },
          explanation:
            'The writer gives no information about visitor numbers and says it is “too early to judge”. That is not the same as saying the schemes have failed, so NO would also be wrong.',
        },
      ],
    },
  ],
})
