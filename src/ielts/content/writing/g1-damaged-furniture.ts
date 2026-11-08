import { defineWritingTask } from '../define'

/** Original task and model answers. General Training Task 1, formal complaint. */
export default defineWritingTask({
  id: 'g1-damaged-furniture',
  skill: 'writing',
  module: 'general',
  task: 1,
  type: 'complaint',
  tone: 'formal',
  topic: 'Shopping and services',
  title: 'Late, damaged delivery',
  prompt:
    'You recently bought a piece of furniture from a shop, but it was delivered late and it was damaged when it arrived.\n\nWrite a letter to the manager of the shop. In your letter',
  bullets: [
    'describe what you bought and what happened when it was delivered',
    'explain how this has affected you',
    'say what you would like the shop to do',
  ],
  planHints: [
    'Who is the reader? A manager you don’t know → formal: “Dear Sir or Madam … Yours faithfully”.',
    'Paragraph 1: the purpose in one sentence (“I am writing to complain about…”).',
    'One paragraph per bullet point. Invent precise details: dates, the item, the price.',
    'Bullet 3: a clear, reasonable request (replace, refund, compensation) with a time limit.',
    'Don’t write any addresses. Aim for 160–190 words.',
  ],
  models: [
    {
      band: 6,
      text: `Dear Manager,

I write this letter because I am very angry about the table I buy from your shop.

I bought a dinning table in your shop in March. The shop told me that it will come on 12 March but it came on 21 March, that is very late. When it came the table had a big scratch and one leg was broken. I was really shocked!!

Because of this I had a lot of problems. I didn't go to work one day for waiting the delivery and nobody came. Also we could not eat together with my family because there was no table, it was very bad for us.

I want you to do something about this problem quickly. Please call me as soon as possible because I am very disappointed with your service and I will not buy from your shop again if you do not help me.

Thanks a lot,
Laila`,
      annotations: [
        {
          quote: 'Dear Manager,',
          note: '“Dear Manager” with “Thanks a lot, Laila” mixes formal and informal. A formal letter to an unknown reader needs “Dear Sir or Madam … Yours faithfully”.',
        },
        {
          quote: 'I was really shocked!!',
          note: 'Double exclamation marks and emotional language are too informal for a complaint to a manager (tone affects Task Achievement).',
        },
        {
          quote: 'I want you to do something about this problem quickly.',
          note: 'Bullet 3 is vague: what exactly should the shop do? An unclear request keeps Task Achievement at 6.',
        },
        {
          quote: 'I buy from your shop',
          note: 'Tense errors (“I buy”, “it will come”), “for waiting”, and the misspelling “dinning” limit GRA and LR to 6.',
        },
      ],
    },
    {
      band: 7,
      text: `Dear Sir or Madam,

I am writing to complain about a table that I bought from your shop last month.

On 3 March I ordered a wooden dining table from your store, and the sales assistant told me it would be delivered on 12 March. Unfortunately, it arrived more than a week late, on 21 March. Moreover, when I opened the box, I found that the table was damaged. There was a long scratch on the top and one of the legs was broken.

This situation has caused me a lot of problems. I took a day off work without pay to wait for the delivery on the first date, but nobody came. Also, I had to cancel a dinner with my family because we did not have a table to eat at.

I would like you to replace the table with a new one as soon as possible and collect the damaged one from my house. I also think it would be fair if you paid me for the day I missed at work.

I hope to hear from you soon.

Yours faithfully,
Laila Haddad`,
      annotations: [
        {
          quote: 'I am writing to complain about a table that I bought from your shop last month.',
          note: 'The purpose is clear in the first line, and the formal opening and closing match. Good Task Achievement.',
        },
        {
          quote: 'I would like you to replace the table with a new one as soon as possible',
          note: 'A clear request covers bullet 3. Adding a time limit (“within seven days”) would make it more precise.',
        },
        {
          quote: 'This situation has caused me a lot of problems.',
          note: '“A lot of problems” is general. Band 8 would be more precise: “considerable inconvenience”, with the cost spelled out.',
        },
        {
          quote: 'Moreover, when I opened the box',
          note: '“Moreover” and “Also” are a little mechanical, but the paragraphing follows the bullets logically (CC 7).',
        },
      ],
    },
    {
      band: 8.5,
      text: `Dear Sir or Madam,

I am writing to complain about a dining table I ordered from your Kingsway branch, which arrived nine days late and in a damaged condition.

When I placed the order on 3 March, I was assured that the table, an oak extending model costing £640, would be delivered on 12 March. However, it did not arrive until 21 March, and only after I had phoned your customer service team three times. To make matters worse, when the delivery staff unwrapped it, I noticed a deep scratch across the surface and a split in one of the legs.

This has caused me considerable inconvenience. I had taken a day’s unpaid leave to wait in for the original delivery, and I was forced to cancel a family dinner I had arranged for the following weekend, as we had nowhere to sit together.

I would therefore like you to collect the damaged table and replace it with an undamaged one within the next seven days. I would also appreciate some compensation for the day’s wages I lost.

I look forward to your prompt reply.

Yours faithfully,
Laila Haddad`,
      annotations: [
        {
          quote: 'an oak extending model costing £640',
          note: 'Precise, invented details make bullet 1 fully developed. Examiners reward specific information over general statements.',
        },
        {
          quote: 'only after I had phoned your customer service team three times',
          note: 'The past perfect shows the order of events accurately: a wide range of structures used naturally (GRA 8+).',
        },
        {
          quote: 'within the next seven days',
          note: 'The request is specific and reasonable, with a deadline: bullet 3 is fully covered.',
        },
        {
          quote: 'This has caused me considerable inconvenience.',
          note: 'A short topic sentence opens bullet 2’s paragraph and the details follow. Tone and register stay formal throughout.',
        },
      ],
    },
  ],
})
