import { defineWritingTask } from '../define'

/** Original task and model answers. */
export default defineWritingTask({
  id: 't2-minority-languages',
  skill: 'writing',
  use: 'practice',
  module: 'both',
  task: 2,
  type: 'two-part',
  topic: 'Globalisation',
  title: 'Disappearing languages',
  prompt:
    "Many of the world's languages, particularly those spoken by small communities, are in danger of disappearing.\n\nWhy is this happening?\n\nIs this a positive or a negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.",
  planHints: [
    'How many parts does the question have? (Here: two direct questions — WHY is it happening, and is it POSITIVE or NEGATIVE? Give each its own body paragraph.)',
    'Answer both questions briefly in the introduction, so your position on the second question is clear from the start.',
    'Body paragraph 1: the causes — choose one or two connected reasons and explain the chain (jobs → moving to the city → children stop speaking the language at home).',
    'Body paragraph 2: your answer to the second question, developed with PEEL and ONE specific, realistic example. Mention the other side briefly and say why it is weaker.',
    'Conclusion: answer both questions again in new words. No new arguments.',
  ],
  models: [
    {
      band: 6,
      text: `In today's world, globalisation is a very big issue. Because of this, many small languages are disappearing. There are many reasons for this situation and it has positive and negative sides.

The main reason why small languages are dying is the globalisation. Nowadays, people can travel and work in other countries easily, so they need to speak international languages like English, Spanish or Chinese. Young people also watch films and use social media in English every day, so they do not use their own language too much. Another reason is that many people move from villages to cities to find a better job. In the city, everyone speak the national language, so the children of these families forget the language of their parents. For example, in my country there is a small language in the mountains, and only old people speak it now. My grandmother can speak it but my parents and me cannot.

On the one hand, it is positive because if people speak the same language, communication will be more easy. People can do business and make friends with others from different countries. On the other hand, it is negative because the language is part of the culture. When a language die, the stories, songs and traditions of the people also die.

In conclusion, there are many reasons why minority languages are disappearing, such as globalisation and moving to cities. In my opinion, this development has both good and bad effects, but I think it is a little negative, so the government should do something to save them.`,
      annotations: [
        {
          quote:
            'There are many reasons for this situation and it has positive and negative sides.',
          note: 'The introduction repeats the questions without answering either of them. The reader has no idea what the writer thinks.',
        },
        {
          quote: 'For example, in my country there is a small language in the mountains',
          note: 'A relevant personal example. The first question is answered adequately, with some development; this is the strongest part of the essay.',
        },
        {
          quote:
            'On the one hand, it is positive because if people speak the same language, communication will be more easy.',
          note: 'The second question gets a short paragraph that lists both sides without deciding. Parts of the task are covered unevenly (Task Response 6). “More easy” should be “easier”.',
        },
        {
          quote: 'everyone speak the national language',
          note: 'Subject–verb agreement error (everyone speaks). With “When a language die”, “my parents and me cannot” and “the globalisation”, errors like this keep GRA at 6.',
        },
        {
          quote:
            'but I think it is a little negative, so the government should do something to save them',
          note: 'The position is weak and appears only at the end; “do something” is vague, and “them” has no clear reference (Coherence & Cohesion 6).',
        },
      ],
    },
    {
      band: 7,
      text: `Many languages spoken by small communities are now at risk of dying out, as fewer and fewer young people learn them. In my opinion, this is mainly caused by economic pressures and the dominance of national and global languages, and I believe it is a negative development because a great deal of cultural knowledge is lost.

The main reason for this trend is economic. In most countries, good jobs, higher education and government services are only available in the national language or in English. As a result, parents often decide that their children will have better opportunities if they speak these languages at home, and the local language is used less and less. Migration also plays a role. When families move from rural areas to cities for work, their children grow up surrounded by the majority language at school and among friends, so they may understand their grandparents' language but not speak it. In addition, television, the internet and social media are dominated by a small number of major languages.

In my view, the loss of these languages is clearly negative. Firstly, a language is closely connected to a community's identity, and when it disappears, people can feel cut off from their history. Secondly, many languages contain knowledge that does not exist anywhere else, such as traditional names for local plants and their medical uses. Some people argue that fewer languages would make international communication easier. However, people can learn a global language without giving up their own, as many bilingual people show.

In conclusion, minority languages are disappearing mainly because speaking a dominant language brings economic advantages. I believe this is a negative development, and communities and governments should do more to encourage children to learn their local language alongside a national or international one.`,
      annotations: [
        {
          quote:
            'I believe it is a negative development because a great deal of cultural knowledge is lost',
          note: 'Both questions are answered in the introduction, and each has its own body paragraph: Task Response 7.',
        },
        {
          quote:
            'As a result, parents often decide that their children will have better opportunities',
          note: 'A clear cause-and-effect chain (jobs → parents’ choices → less use at home): the main idea is extended, not just stated.',
        },
        {
          quote:
            'In addition, television, the internet and social media are dominated by a small number of major languages.',
          note: 'An extra cause added in one sentence at the end of the paragraph and never developed. Band 8 would leave it out or explain it.',
        },
        {
          quote: "Firstly, a language is closely connected to a community's identity",
          note: 'Two reasons are listed with “Firstly / Secondly”, and neither has a specific example. The linking is accurate but formulaic (Coherence & Cohesion 7).',
        },
        {
          quote: 'as many bilingual people show',
          note: 'The opposing view is answered, which is good, but only briefly and in general terms. A specific case would make the rebuttal convincing.',
        },
      ],
    },
    {
      band: 8.5,
      text: `Across the world, languages spoken by small communities are falling silent as their last fluent speakers grow old. This decline is driven above all by the economic advantages of speaking a dominant language, and while it may appear to ease communication, I regard it as a largely negative development, because what disappears with a language cannot easily be recovered.

The underlying pressure today is rarely coercion but a series of rational individual choices. Where schooling, employment and public services operate almost entirely in a national language, parents understandably conclude that fluency in it is their children's surest route to prosperity. A family that moves from a coastal fishing village to the capital, for instance, may continue to speak its own language at home, but its children, educated and socialised in the majority language, soon find their parents' tongue of little use and stop speaking it. Once a single generation fails to pass a language on, its decline becomes very hard to reverse, since a language that is not spoken to infants has no future speakers.

Some would argue that this convergence is benign, even desirable, as it removes barriers between people. Yet this view assumes that languages are interchangeable tools, which they are not. Each one encodes a particular way of seeing the world, from vocabulary for local landscapes and seasons to oral histories and humour that lose much of their meaning in translation. When the last speakers in a remote mountain community die, their precise names for rock formations, weather signs and grazing routes often vanish too. Nor is the supposed benefit real: people can acquire a global language without abandoning their own, as bilingual communities everywhere demonstrate.

In conclusion, minority languages are disappearing chiefly because economic incentives favour dominant ones. This is, in my view, a regrettable loss rather than a sign of progress, since it impoverishes humanity's cultural inheritance while offering little that bilingualism could not provide.`,
      annotations: [
        {
          quote:
            'The underlying pressure today is rarely coercion but a series of rational individual choices.',
          note: 'The first question is answered with insight, not a list: the writer identifies one central cause and explains why it works.',
        },
        {
          quote: 'A family that moves from a coastal fishing village to the capital, for instance',
          note: 'A specific, realistic example followed through two generations, with no invented statistics: one main idea fully developed (Task Response 8+).',
        },
        {
          quote:
            'Yet this view assumes that languages are interchangeable tools, which they are not.',
          note: 'The counter-argument is introduced and then challenged; “this view” refers back precisely, so cohesion comes from referencing rather than “On the other hand”.',
        },
        {
          quote: 'Nor is the supposed benefit real',
          note: 'Inversion after “Nor” used naturally, alongside participle and relative clauses throughout: a wide range of structures, accurately controlled (GRA 8+).',
        },
        {
          quote: "impoverishes humanity's cultural inheritance",
          note: 'Precise, less common vocabulary used naturally (also “coercion”, “convergence is benign”, “encodes”, “socialised”): Lexical Resource 8+.',
        },
      ],
    },
  ],
})
