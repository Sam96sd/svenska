import { defineWritingTask } from '../define'

/** Original task and model answers. */
export default defineWritingTask({
  id: 't2-remote-work',
  skill: 'writing',
  module: 'both',
  task: 2,
  type: 'opinion',
  topic: 'Work',
  title: 'Remote working',
  prompt:
    'Some people believe that the growth of remote working will do more harm than good to society.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'How many parts does the question have? (Here: one — your opinion on “more harm than good”.)',
    'Decide your position before you write: agree, disagree, or partly agree. Keep it the same to the end.',
    'Body paragraph 1: the strongest point against your view, and why it is less important (concession).',
    'Body paragraph 2: your main reason, developed with ONE specific, realistic example.',
    'Society, not just individuals: who else is affected (towns, the environment, families)?',
  ],
  models: [
    {
      band: 6,
      text: `In the modern world, many people are working from home because of the technology. Some people think this is bad for the society, but other people think it is good. In this essay I will discuss both side and give my opinion.

Firstly, working from home has some disadvantages. People do not meet their colleagues so they can feel alone. Also, if a company has a new worker, it is difficult for him to learn the job because nobody is near him to help. Moreover, shops and restaurants in the city lose money because the workers do not come to the city anymore. This is a big problem for the economy of the city. Some people also find it hard to stop working in the evening, because their office is in their house.

Secondly, working from home has also many advantages. People can save money and time because they do not need to drive to the office. Also there is less traffic in the roads and less pollution in the air, this is good for everybody. In addition, people who live in the village can work for a company in the capital city. For example, my cousin works for a company in another city and he never go to the office, so he can stay near our family.

In conclusion, working from home has advantages and disadvantages. In my opinion, it is more good than bad for the society, because people have more free time and there is less pollution. The government should help the companies to make the remote working better.`,
      annotations: [
        {
          quote: 'In this essay I will discuss both side and give my opinion.',
          note: 'This is an opinion question (“To what extent…”), not a discussion question, and the position only appears in the conclusion. That keeps Task Response at 6.',
        },
        {
          quote: 'Firstly, working from home has some disadvantages.',
          note: 'Mechanical linking (Firstly / Also / Moreover / Secondly / In addition): typical of Coherence & Cohesion Band 6.',
        },
        {
          quote: 'less pollution in the air, this is good for everybody',
          note: 'A comma splice: two sentences joined with a comma. Use a full stop or “which is good for everybody”.',
        },
        {
          quote: 'he never go to the office',
          note: 'Subject–verb agreement error (goes). Errors like this, “both side” and “the society” limit GRA to 6.',
        },
        {
          quote: 'The government should help the companies to make the remote working better.',
          note: 'A new idea in the conclusion that the essay never developed. Conclusions should only restate your position.',
        },
      ],
    },
    {
      band: 7,
      text: `Nowadays, more and more people work from home instead of going to an office every day. Some people think that this trend will harm society. Personally, I disagree with this view, because I believe the advantages of remote working are greater than the disadvantages.

On the one hand, there are some negative effects of working from home. The main problem is that employees spend less time with their colleagues, so they may feel lonely and it is more difficult for new workers to learn from experienced staff. For example, a young employee who only meets their manager online may not get enough support. Furthermore, restaurants and shops in city centres have lost many customers because fewer people travel to work.

On the other hand, I believe remote working brings more important benefits to society. Firstly, it gives more people the chance to get a good job. People who live far from big cities or who need to look after children can work for companies that they could not reach before. Secondly, it is better for the environment, since fewer cars on the roads means less pollution and traffic jams. Finally, workers can save the time they used to spend travelling and use it to rest or to be with their families, which can improve their health.

In conclusion, although working from home has some drawbacks, such as loneliness and less business for city shops, I believe that these problems are not as serious as the benefits. Therefore, I disagree that remote working will do more harm than good to society.`,
      annotations: [
        {
          quote: 'Personally, I disagree with this view',
          note: 'A clear position in the introduction, kept to the end: this is what lifts Task Response to 7.',
        },
        {
          quote: 'Firstly, it gives more people the chance to get a good job.',
          note: 'Three benefits in one paragraph means each is developed only briefly. Band 8 would develop ONE main benefit in depth with a specific example.',
        },
        {
          quote: 'a young employee who only meets their manager online may not get enough support',
          note: 'A relevant, realistic example that supports the point: good Band 7 development.',
        },
        {
          quote: 'which can improve their health',
          note: 'A relative clause used accurately. There are a good number of error-free complex sentences (GRA 7).',
        },
        {
          quote: 'On the one hand, there are some negative effects',
          note: 'Clear paragraphing, but “On the one hand / On the other hand / Firstly / Secondly / Finally” feels formulaic. Band 8 uses referencing and topic sentences instead.',
        },
      ],
    },
    {
      band: 8.5,
      text: `Since the pandemic, working from home has shifted from a rare perk to a routine arrangement for millions of office employees. While I accept that this change carries real social costs, I disagree that its overall effect is harmful; on balance, it benefits society more than it damages it.

Critics are right to point out that remote work can weaken the informal ties that make workplaces productive and humane. Junior staff, in particular, learn a great deal simply by overhearing how experienced colleagues handle a difficult client or a tight deadline, and this kind of tacit knowledge is hard to pass on over a video call. City-centre cafés and shops that once depended on commuters have also lost trade. These drawbacks are genuine, but they are largely problems of transition that employers and local councils can address, for instance through regular mentoring days in the office or by converting empty office blocks into housing.

The benefits, by contrast, are structural and far-reaching. Most importantly, remote work widens access to skilled employment. A qualified accountant caring for an elderly parent, or a talented engineer living in a small town with few local employers, can now compete for roles that were once open only to people able to commute into a major city every day. Fewer daily journeys also mean less congestion and lower transport emissions, a gain shared even by those who never work from home.

In conclusion, although remote working has undeniable downsides for workplace learning and urban businesses, these can be managed, whereas its contribution to fairer access to jobs and a cleaner environment is lasting. For these reasons, I believe it does considerably more good than harm.`,
      annotations: [
        {
          quote:
            'While I accept that this change carries real social costs, I disagree that its overall effect is harmful',
          note: 'The position is nuanced and clear from the first paragraph: concession plus a firm view. This is “a clear, well-developed position”.',
        },
        {
          quote: 'These drawbacks are genuine, but they are largely problems of transition',
          note: 'The concession paragraph doesn’t just list problems: it evaluates them, which keeps the essay arguing for its position.',
        },
        {
          quote:
            'A qualified accountant caring for an elderly parent, or a talented engineer living in a small town',
          note: 'Specific, realistic examples, not invented statistics. One main idea is developed fully (Task Response 8+).',
        },
        {
          quote: 'The benefits, by contrast, are structural and far-reaching.',
          note: 'A topic sentence that links back to the previous paragraph: cohesion through ideas, not “On the other hand”.',
        },
        {
          quote: 'tacit knowledge',
          note: 'Precise, less common vocabulary used naturally (also “perk”, “commute”, “congestion”, “undeniable downsides”): Lexical Resource 8+.',
        },
      ],
    },
  ],
})
