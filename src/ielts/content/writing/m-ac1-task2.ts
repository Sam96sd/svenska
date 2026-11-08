import { defineWritingTask } from '../define'

/** Original task and model answers for Academic mock test 1. Task 2, discussion essay. */
export default defineWritingTask({
  id: 'm-ac1-task2',
  skill: 'writing',
  use: 'mock',
  module: 'academic',
  task: 2,
  type: 'discussion',
  topic: 'Science',
  title: 'Paying for space exploration',
  prompt:
    'Some people believe that governments should continue to spend large sums of money on space exploration. Others think this money would be better spent on solving problems here on Earth.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'Three parts to answer: view 1 (keep funding space), view 2 (spend it on Earth), and YOUR opinion. Missing your opinion, or hiding it until the last line, limits Task Response.',
    'State your position in the introduction and keep it to the end. A partial view (“continue, but with conditions”) is fine if it is clear.',
    'Give each view its own paragraph and develop it with a reason and a realistic example. Explain the opposing view fairly before you answer it.',
    'Look for a link between the two views: does space research itself help with problems on Earth (weather, climate, disasters)? That link can carry your opinion.',
    'No invented statistics (“space agencies spend 40% of…”). General, realistic examples are stronger and safer.',
  ],
  models: [
    {
      band: 6,
      text: `Nowadays, space exploration is a very popular topic in many countries. Some people think the governments should spend a lot of money for space programmes, but other people think it is better to use this money for the problems on Earth like poverty. In this essay I will discuss both views and give my opinion.

On the one hand, space exploration has many benefits. Firstly, scientists can learn new informations about the planets and the universe. Secondly, many new technologies was invented because of space research, for example satellites which we use for mobile phones and weather forecast. This technologies are very useful for everybody in the daily life. Moreover, it makes the country famous and strong, and young people become interested in science.

On the other hand, there are many problems on Earth which need money. For example, in many countries people do not have clean water or enough food and the hospitals are not good. If the government spend billions on rockets, these people will not get help. Also, climate change is a big problem and we need money to stop it. For example, the government can build more solar panels and plant more trees. Some people say it is not fair to send people to Mars when children are hungry.

In conclusion, both views have good points. In my opinion, I think the governments should spend money on both things, but the problems on Earth are more important so they should get more money. Also private companies can pay for the space travel instead of the government.`,
      annotations: [
        {
          quote: 'In this essay I will discuss both views and give my opinion.',
          note: 'Task Response: the introduction announces an opinion but never gives one, so the position only appears in the conclusion. This is typical of Band 6.',
        },
        {
          quote:
            'Moreover, it makes the country famous and strong, and young people become interested in science.',
          note: 'Task Response: two separate ideas squeezed into one sentence and neither is developed or explained. The body paragraphs are lists of points rather than arguments.',
        },
        {
          quote: 'many new technologies was invented',
          note: 'Grammatical Range & Accuracy: subject–verb agreement (were). Other errors — “new informations”, “spend money for”, “the government spend” — are frequent, though the meaning stays clear (GRA 6).',
        },
        {
          quote: 'On the one hand, space exploration has many benefits. Firstly,',
          note: 'Coherence & Cohesion: mechanical linking (On the one hand / Firstly / Secondly / Moreover / On the other hand / Also). Paragraphing is clear, but the linking is formulaic.',
        },
        {
          quote: 'Also private companies can pay for the space travel instead of the government.',
          note: 'Task Response: a new idea in the conclusion that the essay never discussed. A conclusion should sum up your position, not introduce a fresh argument.',
        },
      ],
    },
    {
      band: 7,
      text: `Space exploration has always been funded with public money, but in difficult economic times many people question whether it is still worth the cost. While some argue that governments should keep paying for space programmes, others believe the money should go to more urgent needs. In my view, a smaller but continued investment in space research is justified.

Those who support space spending point to its practical benefits. Many technologies that are now part of everyday life, such as satellite navigation and accurate weather forecasting, came from space research. In addition, space programmes inspire young people to study science and engineering, which helps a country’s economy in the long term. For instance, a successful mission to Mars can encourage many students to choose physics or engineering at university.

On the other hand, opponents argue that it is wrong to spend billions on rockets while millions of people lack basic services. The money used for a single mission could build schools, hospitals or clean water systems in poorer regions. They also claim that the benefits of space research are uncertain and may take decades to appear, whereas poverty and disease need solutions now.

In my opinion, both sides make valid points, but the two goals are not completely opposed. Space research has produced tools that help to solve problems on Earth, such as satellites that monitor droughts, floods and forest fires. Therefore, governments should not stop funding it, although they should give health and education a higher priority and expect private companies to share the cost of very expensive projects.

In conclusion, although urgent problems on Earth deserve most public money, I believe a smaller, carefully chosen space budget is still a sensible investment.`,
      annotations: [
        {
          quote: 'In my view, a smaller but continued investment in space research is justified.',
          note: 'Task Response: a clear position in the introduction, and the essay keeps to it. This is the main step up from Band 6.',
        },
        {
          quote:
            'For instance, a successful mission to Mars can encourage many students to choose physics or engineering at university.',
          note: 'Task Response: a relevant example, but it is quite general. Band 8 would explain how the effect happens rather than just state it.',
        },
        {
          quote: 'whereas poverty and disease need solutions now',
          note: 'Grammatical Range & Accuracy: a range of complex sentences (contrast with “whereas”, relative clauses, “although”) used with very few errors.',
        },
        {
          quote:
            'In my opinion, both sides make valid points, but the two goals are not completely opposed.',
          note: 'Task Response: a separate opinion paragraph that answers the question well. The idea that space research helps solve earthly problems is good but could be developed with more detail.',
        },
        {
          quote: 'On the other hand, opponents argue',
          note: 'Coherence & Cohesion: logical paragraphs, but the linking is a little predictable (In addition / For instance / On the other hand / Therefore). Band 8 links paragraphs through ideas.',
        },
      ],
    },
    {
      band: 8.5,
      text: `Few areas of public spending provoke as much debate as space exploration. Critics see rockets and probes as an extravagance while people go hungry, whereas supporters regard them as an investment in knowledge and technology. I believe that space research deserves continued funding, provided it is judged by what it contributes to life on Earth.

The case for redirecting this money is easy to understand. A government’s budget is finite, and the sums required for a crewed mission could instead train nurses, upgrade rural hospitals or bring clean water to communities that still lack it. These needs are immediate and the benefits of meeting them are visible, while the rewards of exploring distant planets are speculative and may not materialise for generations. From this perspective, ambitious space projects can look more like a matter of national prestige than of public good.

However, this argument rests on a false choice, because a great deal of space spending is directed at earthly problems. Earth-observation satellites allow scientists to track shrinking ice sheets, warn farmers of approaching droughts and coordinate relief after floods; such information is now indispensable to governments responding to climate change. Moreover, the engineering challenges of spaceflight have repeatedly produced technologies with everyday uses, from water purification systems to lightweight medical equipment. Abandoning this research would therefore weaken some of the very tools needed to tackle poverty and environmental damage.

In my view, the sensible course is neither to cut space budgets entirely nor to protect them unconditionally, but to favour missions with clear scientific or practical value over symbolic achievements such as planting a flag on another world. Space exploration and human welfare are complementary rather than competing priorities, and a well-directed programme can serve both.`,
      annotations: [
        {
          quote:
            'I believe that space research deserves continued funding, provided it is judged by what it contributes to life on Earth.',
          note: 'Task Response: a nuanced position stated at the start, with a condition (“provided…”) that the rest of the essay explains and defends.',
        },
        {
          quote: 'The case for redirecting this money is easy to understand.',
          note: 'Task Response: the opposing view is presented fairly and fully developed (finite budgets, immediate versus speculative benefits) before it is answered.',
        },
        {
          quote: 'However, this argument rests on a false choice',
          note: 'Coherence & Cohesion: the topic sentence refers back to the previous paragraph (“this argument”) and states what the paragraph will prove. The essay moves forward through ideas, not linking words.',
        },
        {
          quote: 'warn farmers of approaching droughts and coordinate relief after floods',
          note: 'Task Response and Lexical Resource: specific, realistic examples without invented statistics, expressed with precise collocations (“Earth-observation satellites”, “shrinking ice sheets”).',
        },
        {
          quote: 'complementary rather than competing priorities',
          note: 'Lexical Resource: precise, less common vocabulary used naturally (also “extravagance”, “speculative”, “materialise”, “unconditionally”): Band 8+.',
        },
      ],
    },
  ],
})
