import { defineWritingTask } from '../define'

/** Original task and model answers. */
export default defineWritingTask({
  id: 't2-plastic-waste',
  skill: 'writing',
  use: 'practice',
  module: 'general',
  task: 2,
  type: 'problem-solution',
  topic: 'Environment',
  title: 'Single-use plastic',
  prompt:
    'Many everyday items, such as shopping bags, drinks bottles and food packaging, are made of plastic and thrown away after being used only once.\n\nWhat problems does this cause?\n\nWhat can individuals and governments do to reduce the amount of single-use plastic?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'How many parts does the question have? (Here: two — the problems AND the solutions, and the solutions must cover both individuals and governments.)',
    'Say in the introduction what the main problem is and which kind of solution you think works best, so your position is clear from the start.',
    'Body paragraph 1: the problems. Choose one main effect (e.g. plastic reaching the sea and harming wildlife) and follow it step by step with a specific, realistic example instead of listing five effects.',
    'Body paragraph 2: the solutions, built with PEEL — point, explanation, example, link. Connect each solution to the problem, and give both what governments can do and what individuals can do.',
    'Conclusion: restate the main problem and the most effective solution in one or two sentences. No new ideas.',
  ],
  models: [
    {
      band: 6,
      text: `Nowadays, plastic is everywhere in our life. We use plastic bags, plastic bottles and plastic boxes every day and then we throw them in the rubbish. This essay will discuss the problems of this and some solutions.

There are many problems caused by single-use plastic. Firstly, plastic takes hundreds of years to disappear, so it stays in the nature for a long time. Secondly, a lot of plastic goes into the sea and the fish and the birds eat it and die. I saw on TV a programme about a turtle which had a plastic straw in his nose, it was very sad. Thirdly, when people burn the plastic it make a smoke which is dangerous for our health. Also the streets and beaches become dirty and ugly, and this is bad for the tourism because tourists do not want to visit.

There are some solutions for this problem. The government should make a law that shops can not give free plastic bags. In my country the supermarkets now take money for every bag, so people bring their own bags from home and there is less bags in the streets. Also the government can put more recycling bins in the streets and teach the children in school about the environment. People also should use less plastic in their daily life.

In conclusion, single-use plastic causes a lot of problems for the environment and for the people. I think the government is the most important because people will not change if there is no law. If everybody work together, we can make the world more clean.`,
      annotations: [
        {
          quote: 'This essay will discuss the problems of this and some solutions.',
          note: 'A template sentence that announces the essay instead of answering it. The writer’s view (that government action matters most) only appears in the conclusion.',
        },
        {
          quote: 'Firstly, plastic takes hundreds of years to disappear',
          note: 'Four problems listed with Firstly / Secondly / Thirdly / Also, each in one sentence. The ideas are relevant but none is developed (Coherence & Cohesion 6).',
        },
        {
          quote:
            'I saw on TV a programme about a turtle which had a plastic straw in his nose, it was very sad.',
          note: 'A personal example that ends in a feeling (“very sad”) rather than an explanation. It is also a comma splice, and the word order would be clearer as “I saw a programme on TV…”.',
        },
        {
          quote: 'People also should use less plastic in their daily life.',
          note: 'The question asks what individuals can do, and this one vague sentence is the whole answer. Covering one part much less fully than the others is typical of Task Response 6.',
        },
        {
          quote: 'If everybody work together, we can make the world more clean.',
          note: 'Agreement (works) and comparative (cleaner) errors, like “it make a smoke” and “in the nature”, plus a general, empty closing line (GRA 6).',
        },
      ],
    },
    {
      band: 7,
      text: `Plastic bags, bottles and food containers have become a normal part of daily life, but most of them are used for only a few minutes before they are thrown away. In my view, this habit causes serious damage to the environment, and the problem can only be solved if governments and individuals both take action.

The most obvious problem is pollution. Because plastic does not break down naturally, it remains in landfill sites for many years, and a great deal of it ends up in rivers and oceans. Sea animals such as turtles and seabirds often mistake plastic for food, which can kill them. In addition, plastic litter makes streets, parks and beaches look dirty, which affects people's quality of life and can damage tourism in coastal areas. There are also concerns that tiny pieces of plastic are now entering the food we eat.

There are several ways to deal with this issue. Governments can introduce a charge for plastic bags or ban some single-use items completely, such as plastic straws and cutlery. They could also require companies to use less packaging and make it easier for people to recycle by providing more collection points. At the same time, individuals can make simple changes to their habits. For example, they can carry a reusable water bottle and shopping bag, and choose products with less packaging when they go shopping.

In conclusion, single-use plastic pollutes the land and the sea and harms wildlife. Although individuals can make a difference by changing their daily habits, I believe that government action, such as charges and bans, is the most effective solution because it changes the behaviour of everyone at the same time.`,
      annotations: [
        {
          quote: 'the problem can only be solved if governments and individuals both take action',
          note: 'A clear position in the introduction that already points to both parts of the question (problems and solutions) and both groups (Task Response 7).',
        },
        {
          quote:
            'Governments can introduce a charge for plastic bags or ban some single-use items completely',
          note: 'Every part of the question is covered, but the solutions are listed one after another. None is explained in terms of why it would work, which Band 8 would do.',
        },
        {
          quote:
            'There are also concerns that tiny pieces of plastic are now entering the food we eat.',
          note: 'A potentially strong idea added at the end of the paragraph and left undeveloped: the paragraph loses some focus (Task Response 7, not 8).',
        },
        {
          quote:
            'Because plastic does not break down naturally, it remains in landfill sites for many years',
          note: 'Accurate complex sentence with natural topic collocations (“break down”, “landfill sites”, “mistake plastic for food”): Lexical Resource and GRA 7.',
        },
        {
          quote: 'There are several ways to deal with this issue.',
          note: 'A safe but formulaic topic sentence. Linking (In addition / At the same time / For example) is accurate but a little predictable (Coherence & Cohesion 7).',
        },
      ],
    },
    {
      band: 8.5,
      text: `Much of the plastic we handle each day, from the wrapping on a sandwich to the cup that holds a takeaway coffee, is designed to be used for minutes and then discarded. This convenience comes at a considerable environmental cost, and in my view it can only be reduced if government regulation and changes in individual habits work together.

The central problem is that disposable plastic outlasts its usefulness by centuries. Only a fraction of it is recycled; the rest is buried, burnt or simply dropped, and much of what is dropped is carried by wind and rain into rivers and eventually the sea. There it breaks into fragments small enough to be swallowed by fish and seabirds, and those fragments can find their way back into the food chain. Anyone who has walked along a beach after a storm and seen the tideline strewn with bottle tops and torn packets will recognise how visible the damage has become.

Since the root of the problem is a culture of convenience, the most effective remedies make the wasteful choice the less convenient one. Governments are best placed to do this: a modest charge on carrier bags has shown in a number of countries that a small price can change shopping habits almost overnight, and similar measures could be applied to disposable cups and cutlery. Manufacturers can also be required to take responsibility for the packaging they produce. Individuals, meanwhile, can reinforce these policies by carrying a refillable bottle, buying loose fruit and vegetables rather than pre-packed ones, and simply refusing items they do not need.

In short, single-use plastic pollutes the environment long after it has served its brief purpose. Legislation can shift behaviour on a large scale, but it works best when individuals adopt the same habits willingly, turning a rule into a norm.`,
      annotations: [
        {
          quote:
            'in my view it can only be reduced if government regulation and changes in individual habits work together',
          note: 'A clear position that answers both questions and names both groups from the first paragraph. The conclusion restates it in new words (“turning a rule into a norm”).',
        },
        {
          quote: 'the most effective remedies make the wasteful choice the less convenient one',
          note: 'The solution paragraph grows out of the cause identified in the problem paragraph, so the essay reads as one argument rather than two lists (Coherence & Cohesion 8+).',
        },
        {
          quote: 'seen the tideline strewn with bottle tops and torn packets',
          note: 'A specific, realistic image that any reader can check against experience, used instead of invented statistics (Task Response 8+).',
        },
        {
          quote:
            'a modest charge on carrier bags has shown in a number of countries that a small price can change shopping habits almost overnight',
          note: 'Real-world support stated carefully, without made-up numbers, and explained: it shows why a government measure works, not just that it exists.',
        },
        {
          quote: 'outlasts its usefulness by centuries',
          note: 'Precise, less common vocabulary used naturally (also “discarded”, “fragments”, “reinforce these policies”, “pre-packed”): Lexical Resource 8+.',
        },
      ],
    },
  ],
})
