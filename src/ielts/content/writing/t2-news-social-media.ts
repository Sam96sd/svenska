import { defineWritingTask } from '../define'

/** Original task and model answers. */
export default defineWritingTask({
  id: 't2-news-social-media',
  skill: 'writing',
  use: 'practice',
  module: 'both',
  task: 2,
  type: 'opinion',
  topic: 'Media',
  title: 'News from social media',
  prompt:
    'Nowadays, many people get most of their news from social media rather than from newspapers, television or radio.\n\nIs this a positive or negative development?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'How many parts does the question have? (Here: one — is the change positive or negative? You may say “largely negative”, but you must decide.)',
    'State your position in the introduction and keep the same view in every paragraph and in the conclusion. This is not a “discuss both sides” essay.',
    'Body paragraph 1: the strongest argument on the other side (speed, free access, eyewitness videos), then why it matters less than your main point.',
    'Body paragraph 2: your main reason, built with PEEL — point, explanation, ONE specific, realistic example (e.g. a false rumour shared during an emergency), link back to the question.',
    'Conclusion: restate your position in fresh words, without a new idea or a recommendation you have not discussed.',
  ],
  models: [
    {
      band: 6,
      text: `In this day and age, social media is a part of everyone's life. Many people read the news on Facebook, Twitter or Instagram instead of buying a newspaper or watching the news on TV. In this essay I will talk about the positive and negative sides of this.

Firstly, there are some positive things about social media news. It is very fast, when something happens in the world people can know about it in few minutes. Also it is free, so people do not have to pay money for a newspaper, and they can read it on their phone everywhere. Moreover, normal people can share videos and photos of events. For example, when there was a flood in my city, people put videos on social media before the TV news arrive.

However, there are also many negative points. The biggest problem is fake news. Anybody can write anything on the internet and many people believe it without checking if it is true. For example, during the coronavirus many people shared wrong informations about medicines and some of them became sick. In addition, social media shows people only the news that they like, so they do not see other opinions and they become more extreme. Furthermore, the journalists in newspapers lose their jobs because people do not buy newspapers anymore.

In conclusion, getting news from social media has positive and negative sides. In my opinion it is more negative than positive because of fake news. People should check the news before they share it and the government should control social media more strictly.`,
      annotations: [
        {
          quote: "In this day and age, social media is a part of everyone's life.",
          note: 'A memorised opener that over-generalises (“everyone”). Examiners recognise phrases like this and give them no credit.',
        },
        {
          quote: 'In this essay I will talk about the positive and negative sides of this.',
          note: 'The question asks whether the change is positive or negative, but the essay is written as a “both sides” discussion and the answer only comes in the conclusion (Task Response 6).',
        },
        {
          quote:
            'It is very fast, when something happens in the world people can know about it in few minutes.',
          note: 'A comma splice, and “in few minutes” needs “a”. Errors like this, “before the TV news arrive” and “wrong informations” (information is uncountable) keep GRA at 6.',
        },
        {
          quote:
            'many people shared wrong informations about medicines and some of them became sick',
          note: 'A relevant example, but stated in one line with no explanation of why social media made the problem worse. “wrong informations” should be “false information”.',
        },
        {
          quote: 'the government should control social media more strictly',
          note: 'A new idea in the conclusion that the essay never discussed. Mechanical linking (Firstly / Also / Moreover / However / In addition / Furthermore) runs through the body (Coherence & Cohesion 6).',
        },
      ],
    },
    {
      band: 7,
      text: `These days, a growing number of people rely on social media platforms rather than traditional newspapers or television bulletins to find out what is happening in the world. Although this change has some benefits, I believe that it is mainly a negative development.

It is true that social media has made news more accessible. Information spreads extremely quickly, so people can learn about important events, such as elections or storms, within minutes. In addition, most of this content is free, which means that people who cannot afford a newspaper subscription can still stay informed. Social media also allows ordinary people to share photos and videos of events as they happen, which can give a more complete picture than professional reports alone.

However, I believe these advantages are outweighed by the disadvantages. The most serious problem is that much of the information on social media is not checked before it is published. Unlike journalists, who are trained to confirm facts with reliable sources, ordinary users can post rumours or false stories, which are then shared thousands of times. For example, during a natural disaster, false reports about which roads are closed could put people in danger. Another problem is that social media algorithms tend to show users stories that match their existing views, so they may become less open to other opinions. Finally, as fewer people buy newspapers, many local papers are closing down, and fewer journalists are investigating important local issues.

In conclusion, although social media makes news faster and cheaper to access, I believe that the spread of false information and the narrowing of people's views make this a negative development overall.`,
      annotations: [
        {
          quote:
            'Although this change has some benefits, I believe that it is mainly a negative development.',
          note: 'The question is answered directly in the introduction, and the conclusion repeats the same view: a clear position throughout (Task Response 7).',
        },
        {
          quote: 'It is true that social media has made news more accessible.',
          note: 'A concession paragraph with a clear central topic, which suits an opinion essay. It lists the benefits, though, without saying why they matter less.',
        },
        {
          quote:
            'during a natural disaster, false reports about which roads are closed could put people in danger',
          note: 'A realistic, relevant example, but it gets one sentence before the writer moves on to two more problems, so the main idea is extended rather than fully developed.',
        },
        {
          quote: 'Another problem is that social media algorithms tend to show users stories',
          note: '“The most serious problem… Another problem… Finally” turns the main paragraph into a list of three. Clear, but formulaic (Coherence & Cohesion 7).',
        },
        {
          quote: 'Unlike journalists, who are trained to confirm facts with reliable sources',
          note: 'An accurate complex structure (“Unlike…” plus a relative clause), with good topic vocabulary such as “subscription”, “rumours” and “algorithms” (GRA and Lexical Resource 7).',
        },
      ],
    },
    {
      band: 8.5,
      text: `For a growing share of people, the morning news no longer arrives on the doormat or through a radio but in a feed, between friends' holiday photographs and advertisements. Although this shift has made information faster and more open, I consider it a largely negative development, because it weakens the means by which the public distinguishes reliable reporting from rumour.

The case in favour deserves to be taken seriously. Social media has removed the cost of staying informed and allowed eyewitnesses to report events before professional crews can reach them; footage filmed on a phone has repeatedly exposed incidents that official accounts would otherwise have obscured. Yet these gains depend on someone verifying what is shared, and that is precisely the function social platforms are not designed to perform.

Their design rewards content that provokes a reaction, not content that is accurate. A traditional newsroom, whatever its biases, requires a reporter to confirm a claim with sources and an editor to approve it before publication. On social media, a post can reach a vast audience in the time it would take a journalist to make a single phone call. Imagine a rumour, circulated during a severe flood, that a particular bridge has collapsed: within an hour, residents might abandon the safest evacuation route, while the correction, being less dramatic, travels far more slowly than the original falsehood. Over time, a steady stream of such material can also leave readers sceptical of all sources, including trustworthy ones, which is arguably more corrosive than any single false story.

In short, social media has democratised the distribution of news but not the discipline of checking it. Until platforms and readers value accuracy above speed, its rise as the main source of news is a change I regard with concern rather than optimism.`,
      annotations: [
        {
          quote:
            'I consider it a largely negative development, because it weakens the means by which the public distinguishes reliable reporting from rumour',
          note: 'The question is answered in the first paragraph, with the main reason attached. “Largely” makes the position nuanced without making it unclear (Task Response 8+).',
        },
        {
          quote:
            'Yet these gains depend on someone verifying what is shared, and that is precisely the function social platforms are not designed to perform.',
          note: 'The opposing view is credited fairly and then turned into the writer’s own argument, which leads directly into the next paragraph.',
        },
        {
          quote:
            'Their design rewards content that provokes a reaction, not content that is accurate.',
          note: '“Their” refers back to “social platforms” in the previous sentence: the paragraphs are linked by referencing, not by “However” or “Moreover” (Coherence & Cohesion 8+).',
        },
        {
          quote:
            'Imagine a rumour, circulated during a severe flood, that a particular bridge has collapsed',
          note: 'One specific, realistic scenario, followed through to its consequence (residents avoiding the safest route). No statistics are invented to make the point.',
        },
        {
          quote:
            'social media has democratised the distribution of news but not the discipline of checking it',
          note: 'Precise, less common vocabulary used naturally (also “obscured”, “falsehood”, “sceptical”, “corrosive”) in a balanced sentence that restates the position: Lexical Resource 8+.',
        },
      ],
    },
  ],
})
