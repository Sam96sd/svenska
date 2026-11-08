import { defineWritingTask } from '../define'

/** Original task and model answers. General Training mock test 2, Task 2: advantages and disadvantages. */
export default defineWritingTask({
  id: 'm-gt2-task2',
  skill: 'writing',
  use: 'mock',
  module: 'general',
  task: 2,
  type: 'adv-disadv',
  topic: 'Shopping and consumer habits',
  title: 'Shopping mostly online',
  prompt:
    'These days, many people buy most of the things they need, from food to clothes and furniture, on the internet rather than in shops.\n\nDo the advantages of this trend outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    '“Do the advantages outweigh the disadvantages?” asks for a judgement, not just two lists. Decide which side is stronger and say so in the introduction.',
    'Choose the strongest one or two points on each side: for shoppers (time, price, choice) and, if you like, for town centres and local shops.',
    'Body paragraph 1: the main advantages, each explained with a realistic example. Body paragraph 2: the main disadvantages (for example, items that cannot be checked before buying, or empty high streets).',
    'Make the weighing explicit: say why one side matters more (for example, one problem can be managed, while the benefits are hard to get any other way).',
    'Conclusion: repeat your judgement in new words. No new ideas.',
  ],
  models: [
    {
      band: 6,
      text: `Nowadays, online shopping is becoming very popular and a lot of people buy everything on the internet. This trend has both advantages and disadvantages. In this essay I will discuss both sides and give my opinion.

There are many advantages of online shopping. First of all, it is very convenient because you can buy things at any time, even in the middle of the night, and you don't need to go out of your house. This is very good for busy people and old people who can not walk easily. Another advantage is the price. On the internet the products are often more cheap than in the shops, and you can compare prices in different websites quickly. Moreover, there are more choice online than in a small shop.

However, online shopping has also some disadvantages. The first one is that you can not see or touch the product before you buy it. For example, I bought a jacket online last year and when it arrived the colour was different and it was too small, so I had to send it back and it took a long time. In addition, many small shops in the city centre are closing because people do not go to them any more, so the streets become empty. Also people go out less and they don't meet other people.

In conclusion, online shopping has advantages and disadvantages. In my opinion, the advantages are more than the disadvantages because it saves time and money, which are very important in modern life. But people should also try to visit local shops sometimes.`,
      annotations: [
        {
          quote: 'In this essay I will discuss both sides and give my opinion.',
          note: 'A template sentence that announces the essay instead of answering the question. The writer’s judgement only appears in the conclusion, which limits Task Response to 6.',
        },
        {
          quote: 'On the internet the products are often more cheap than in the shops',
          note: 'Comparative error (“cheaper”), like “there are more choice” (there is) and “has also some disadvantages” (also has). The meaning is clear, so GRA stays at 6.',
        },
        {
          quote: 'For example, I bought a jacket online last year',
          note: 'A relevant personal example that is followed through to its result. This is the best-developed point in the essay.',
        },
        {
          quote: "Also people go out less and they don't meet other people.",
          note: 'A new idea added at the end of the paragraph in one sentence and never explained: listing rather than developing (CC and TR 6).',
        },
        {
          quote: 'the advantages are more than the disadvantages',
          note: 'An unnatural way to say “outweigh”, and the judgement is asserted, not argued: the essay never explains why time and money matter more than empty streets.',
        },
      ],
    },
    {
      band: 7,
      text: `Over the past decade, it has become normal for people to order their weekly shopping, their clothes and even their furniture online instead of visiting shops. In my opinion, although this trend has some drawbacks, its advantages are greater.

The most obvious benefit is convenience. Online shoppers can order whatever they need at any time of day and have it delivered to their door, which saves a great deal of time for people with busy jobs or young children. It is also a lifeline for elderly or disabled people who find it difficult to travel to shops. Furthermore, the internet makes it easy to compare prices from different sellers in a few minutes, so consumers can often find the same product for less than they would pay on the high street.

On the other hand, there are some disadvantages. When people shop online, they cannot try on clothes or check the quality of a product before buying it, and returning unsuitable items can be time-consuming. A more serious problem is the effect on town centres. As more people shop from home, many independent shops lose customers and are forced to close, which leaves high streets looking empty and reduces the number of local jobs.

Nevertheless, I believe that these problems are less important than the benefits. Most online retailers now offer free returns, which reduces the risk of buying the wrong item, and town centres can attract visitors in other ways, for example with cafés, markets and leisure facilities.

In conclusion, buying most things online has some negative effects, especially on local shops, but the time and money it saves for ordinary people mean that, overall, the advantages outweigh the disadvantages.`,
      annotations: [
        {
          quote: 'although this trend has some drawbacks, its advantages are greater',
          note: 'A clear judgement in the introduction, which answers the “outweigh” question directly and is kept to the end (Task Response 7).',
        },
        {
          quote: 'It is also a lifeline for elderly or disabled people',
          note: '“A lifeline for” is a precise, natural collocation (LR 7), but the point gets only one sentence: a Band 8 answer would explain why it matters to them.',
        },
        {
          quote: 'Most online retailers now offer free returns',
          note: 'An over-generalisation presented as fact. The weighing argument depends on it, so a more careful claim (“many retailers”) would be stronger. Over-generalising is typical of Task Response 7.',
        },
        {
          quote:
            'Nevertheless, I believe that these problems are less important than the benefits.',
          note: 'A separate paragraph that weighs the two sides is exactly what the question needs. The linking (Furthermore / On the other hand / Nevertheless) is accurate but predictable (CC 7).',
        },
      ],
    },
    {
      band: 8.5,
      text: `For a growing number of households, the weekly supermarket trip and the Saturday afternoon on the high street have been replaced by a few minutes on a phone. While this shift has real costs, particularly for the character of our towns, I would argue that for most people its benefits are considerably greater.

The chief advantage is that online shopping gives time back to people who have little of it. A parent working full-time can order groceries during a lunch break and have them delivered that evening, rather than spending an hour in traffic and queues. For those with limited mobility, or who live far from a well-stocked shop, the change is more than a convenience: it restores a degree of independence. Online platforms also put information in the buyer’s hands, since prices, specifications and other customers’ reviews can be compared in moments, which makes it far harder for any one seller to overcharge.

The disadvantages are not trivial. Clothes that cannot be tried on and sofas that cannot be sat on are bought partly on trust, and the cycle of ordering, returning and reordering wastes both time and fuel. More significantly, every purchase moved online is one taken away from a local shop, and the empty units in many town centres show how quickly a high street can lose its life.

Yet these problems are, to a large extent, ones that can be managed. Town centres that have reinvented themselves around cafés, services and events show that a high street need not depend on retail alone, whereas the time and choice that online shopping offers individuals would be difficult to provide in any other way.

On balance, then, the convenience, independence and transparency of buying online outweigh its drawbacks, provided that communities adapt their town centres instead of simply mourning the shops they have lost.`,
      annotations: [
        {
          quote: 'I would argue that for most people its benefits are considerably greater',
          note: 'A clear judgement that already admits the strongest counter-argument (“real costs … for the character of our towns”), so the reader knows the essay’s line of argument from the start.',
        },
        {
          quote: 'online shopping gives time back to people who have little of it',
          note: 'The topic sentence states an idea, not just a label (“convenience”), and the next sentence develops it with a realistic example (Task Response 8+).',
        },
        {
          quote:
            'Clothes that cannot be tried on and sofas that cannot be sat on are bought partly on trust',
          note: 'Parallel relative clauses with passive forms, controlled with complete accuracy: a wide range of structures used naturally (GRA 8+).',
        },
        {
          quote: 'Yet these problems are, to a large extent, ones that can be managed.',
          note: 'The weighing paragraph explains why one side wins (the problems can be solved, the benefits cannot easily be replaced) instead of simply saying it does (CC and TR 8+).',
        },
        {
          quote: 'instead of simply mourning the shops they have lost',
          note: 'Precise, less common vocabulary (“mourning”, “transparency”, “restores a degree of independence”) used naturally and appropriately (LR 8+).',
        },
      ],
    },
  ],
})
