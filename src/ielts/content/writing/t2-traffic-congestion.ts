import { defineWritingTask } from '../define'

/** Original task and model answers. */
export default defineWritingTask({
  id: 't2-traffic-congestion',
  skill: 'writing',
  use: 'practice',
  module: 'both',
  task: 2,
  type: 'problem-solution',
  topic: 'Cities',
  title: 'Traffic congestion in cities',
  prompt:
    'Traffic congestion is becoming a serious problem in many large cities around the world.\n\nWhat are the main causes of this problem, and what measures could be taken to reduce it?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'How many parts does the question have? (Here: two — the causes AND the measures. Give them roughly equal space.)',
    'In the introduction, name your main cause and your main measure in one sentence, so the examiner sees your answer straight away.',
    'Body paragraph 1: the causes — one or two connected causes explained with PEEL (why does this lead to more traffic?), not a list of five.',
    'Body paragraph 2: the measures — each measure should answer a cause you gave. Support it with ONE specific, realistic example (a congestion charge, a new tram line), without invented figures.',
    'Conclusion: restate the link between cause and solution and say which measure matters most. No new ideas.',
  ],
  models: [
    {
      band: 6,
      text: `Nowadays, traffic jam is one of the biggest problem in big cities. Every day millions of people spend hours in their cars and they are late for work. In this essay I will explain the causes of this problem and suggest some solutions.

There are many causes of traffic congestion. The first cause is that the population of cities is increasing very fast, because many people move from the countryside to find jobs. The second cause is that cars are cheaper than before, so most families have one or two cars. Also, public transport in many cities is not good, the buses are always late and crowded, so people prefer to use their own car. Another reason is that many roads are old and narrow and they were not built for so much cars.

There are several solutions to solve this problem. Firstly, the government should improve the public transport, for example build more metro lines and buy new buses. If public transport will be better, people will leave their cars at home. Secondly, the government can make the petrol more expensive or make drivers pay money for driving in the city centre. Thirdly, companies can let their workers to start work in different times, so not everybody is on the road at the same time. For example in my city the traffic is very bad at eight o'clock in the morning.

In conclusion, traffic congestion has many causes such as population and bad public transport. The government and companies must work together to solve this problem, otherwise it will become more worse in the future.`,
      annotations: [
        {
          quote:
            'In this essay I will explain the causes of this problem and suggest some solutions.',
          note: 'A memorised sentence that repeats the task instead of answering it. Band 7+ names the main cause and solution in the introduction.',
        },
        {
          quote: 'public transport in many cities is not good, the buses are always late',
          note: 'A comma splice in the middle of a list of four causes. Each cause gets one sentence, so none is properly developed (Task Response 6).',
        },
        {
          quote: 'If public transport will be better, people will leave their cars at home.',
          note: 'Conditional error: no “will” after “if” (If public transport is better…). With “let their workers to start” and “in different times”, this limits GRA to 6.',
        },
        {
          quote: "For example in my city the traffic is very bad at eight o'clock in the morning.",
          note: 'This example describes the problem again; it does not show that flexible hours would help. Examples must support the point they follow.',
        },
        {
          quote: 'so much cars',
          note: '“Cars” is countable, so “so many cars”. With “one of the biggest problem”, “solutions to solve” and “more worse”, these slips keep Lexical Resource at 6.',
        },
      ],
    },
    {
      band: 7,
      text: `Many large cities now suffer from serious traffic congestion, which wastes time and increases air pollution. In my view, the main causes are the rising number of private cars and the poor quality of public transport, and the most effective solution is to make public transport a better choice than driving.

One major cause of congestion is the growth in car ownership. As people's incomes rise, many families buy cars, and they often use them even for short journeys that could be made on foot or by bicycle. At the same time, cities have grown outwards, so more people live in suburbs far from their workplaces and have to drive into the centre every day. A second cause is that public transport in many cities is unreliable or does not reach the areas where people live. When buses are crowded and often late, it is not surprising that commuters prefer to drive, even if they then sit in traffic.

There are several measures that governments could take to deal with this problem. The most important is to invest in public transport, for example by building new tram or metro lines and introducing bus lanes so that buses are not delayed by other traffic. Another useful measure is a congestion charge, where drivers pay a fee to enter the city centre at busy times. Cities such as London and Singapore have introduced road charges of this kind, and they encourage people to change their travel habits. Finally, employers could allow flexible working hours or working from home, which would reduce the number of people travelling at rush hour.

In conclusion, traffic congestion is mainly caused by the increasing use of private cars and inadequate public transport. Governments should therefore improve public transport and discourage unnecessary car journeys.`,
      annotations: [
        {
          quote:
            'the main causes are the rising number of private cars and the poor quality of public transport',
          note: 'Both parts of the question are answered in the introduction, and the essay follows this plan: Task Response 7.',
        },
        {
          quote: 'At the same time, cities have grown outwards',
          note: 'The cause is extended with a second, linked reason (suburbs far from workplaces): relevant development, clearly organised.',
        },
        {
          quote:
            'There are several measures that governments could take to deal with this problem.',
          note: 'Three measures follow in one paragraph, so each is explained briefly. Band 8 would develop the main measure in depth and show how it tackles the causes.',
        },
        {
          quote: 'Cities such as London and Singapore have introduced road charges of this kind',
          note: 'A real, relevant example used without invented figures, but it is only named: the essay does not explain what changed or why it worked.',
        },
        {
          quote: 'Finally, employers could allow flexible working hours',
          note: '“One major cause / A second cause / The most important / Another / Finally” is clear but formulaic sequencing: Coherence & Cohesion 7.',
        },
      ],
    },
    {
      band: 8.5,
      text: `Gridlock now defines daily life in many large cities, wasting commuters' time and degrading the air they breathe. Its roots lie less in population growth itself than in urban planning that has made the private car the only practical option for many journeys; the remedy, therefore, is to make alternatives genuinely competitive rather than simply to build more roads.

Much of today's congestion can be traced to decisions about where people live and work. When new housing is built on the edge of a city, far from rail lines and with no shops or schools within walking distance, residents have little choice but to drive for almost every errand. Every trip, however short, adds to the volume on roads that funnel into the centre. Attempts to relieve the pressure by widening those roads tend to backfire: the extra capacity makes driving briefly more attractive, encourages yet more car journeys and, within a few years, the new lanes are as clogged as the old ones.

It follows that lasting solutions must reduce the need to drive rather than accommodate it. The most effective approach combines a price on road space at peak times with reliable alternatives. A congestion charge on its own can seem punitive, but when the revenue is visibly spent on frequent buses with dedicated lanes, safe cycle routes and new tram lines, motorists are offered a reason to change their habits instead of merely a penalty. Stockholm's experience is instructive in this respect: its charge was initially unpopular, yet public support grew once residents saw quieter streets and better services. In the longer term, planners can also require new housing developments to be built around public transport links.

In conclusion, congestion is largely the product of car-dependent planning, and neither road-building nor charging alone will solve it. Pricing peak-time driving while investing heavily in attractive alternatives offers the most realistic path to freer-flowing cities.`,
      annotations: [
        {
          quote: 'Its roots lie less in population growth itself than in urban planning',
          note: 'Both parts of the question are answered in the introduction with an arguable, nuanced position, not just a list of causes.',
        },
        {
          quote: 'Attempts to relieve the pressure by widening those roads tend to backfire',
          note: 'The cause is developed by explaining a process step by step, which also prepares the argument against simply building roads: depth rather than breadth (Task Response 8+).',
        },
        {
          quote:
            'It follows that lasting solutions must reduce the need to drive rather than accommodate it.',
          note: 'A topic sentence that ties the solutions directly to the causes: cohesion through logic and referencing, not “Firstly / Secondly”.',
        },
        {
          quote: "Stockholm's experience is instructive in this respect",
          note: 'A specific, real example used accurately and without statistics, and it is explained (why support grew), not just named.',
        },
        {
          quote:
            'motorists are offered a reason to change their habits instead of merely a penalty',
          note: 'Precise, natural vocabulary (also “punitive”, “funnel into”, “clogged”, “car-dependent planning”) within accurate complex sentences: Lexical Resource and GRA 8+.',
        },
      ],
    },
  ],
})
