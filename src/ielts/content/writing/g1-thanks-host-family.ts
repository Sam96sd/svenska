import { defineWritingTask } from '../define'

/** Original task and model answers. General Training Task 1, informal letter of thanks. */
export default defineWritingTask({
  id: 'g1-thanks-host-family',
  skill: 'writing',
  use: 'practice',
  module: 'general',
  task: 1,
  type: 'thanks',
  tone: 'informal',
  topic: 'Travel and study abroad',
  title: 'Thanking a host family',
  prompt:
    'You recently took a language course in another country and stayed with a local family while you were there.\n\nWrite a letter to the family. In your letter',
  bullets: [
    'thank them for having you to stay',
    'describe something you particularly enjoyed doing with them',
    'explain how the experience has helped you since you returned home',
  ],
  planHints: [
    'Who is the reader? A family you lived with for several weeks, who will have asked you to use their first names → informal: “Dear Margaret and Peter … With love / Best wishes”. Keep it warm but polite: they are older than you and were your hosts, so avoid slang.',
    'Why not semi-formal? “Dear Mr and Mrs Bennett … Yours sincerely” would sound cold after living in their home. A semi-formal letter is only right if you hardly knew them.',
    'Paragraph 1: the thanks straight away, saying what they did that made a difference.',
    'Bullet 2: one specific occasion (where, who, what happened), not a list of everything. Bullet 3: one or two concrete results, such as a job interview or more confidence when speaking.',
    'Don’t write any addresses. Aim for 160–190 words.',
  ],
  models: [
    {
      band: 6,
      text: `Dear Mr and Mrs Bennett,

I am writing to say thank you very much for everything you did for me when I stayed in your house during my English course in Bristol. You were very kind with me and I felt like at home.

I enjoyed many things with you. For example the trips at weekends were very nice and the food was delicious. I also liked to watch TV with you in the evenings.

Now I am back in Osaka and I can see that the experience help me a lot. My English is much more better than before, and last month I passed an interview for a job in a travel company, the manager was surprised that I can speak so fluently. Also I am more confident to talk with foreigners now and I am not shy like before.

I hope you are both well and Biscuit the dog too. Please say hello to Emma for me. If you come to Japan one day you can stay with my family.

See ya!
Keiko`,
      annotations: [
        {
          quote: 'See ya!',
          note: 'Text-message slang that doesn’t match the polite “Dear Mr and Mrs Bennett” opening. The tone is inconsistent, which holds Task Achievement at 6.',
        },
        {
          quote: 'For example the trips at weekends were very nice and the food was delicious.',
          note: 'Bullet 2 asks for one thing she particularly enjoyed, but this is a vague list with no specific occasion or detail, so the bullet is underdeveloped.',
        },
        {
          quote: 'My English is much more better than before',
          note: 'Errors such as “much more better”, “the experience help me” and “kind with me” keep GRA at 6. They rarely make the meaning unclear.',
        },
        {
          quote: 'last month I passed an interview for a job in a travel company',
          note: 'Bullet 3 has a relevant, concrete result, which is a strength. The sentence then runs on with a comma splice, a common Band 6 punctuation problem.',
        },
      ],
    },
    {
      band: 7,
      text: `Dear Margaret and Peter,

I hope you are both well. Now that I am back home in Osaka, I wanted to write and thank you for looking after me so well during my six weeks in Bristol. You made me feel like part of the family from the very first day.

One thing I really enjoyed was our day trip to the coast in Devon. I will never forget walking along the cliffs with you and Biscuit, and then eating fish and chips on the beach even though it was raining. It was a typical British day, and I loved it!

The experience has helped me a lot since I came back. Because I spoke English with you every evening, I feel much more confident now, and last month I passed an interview for a job at a travel agency. My new manager was impressed with my English and said I would be able to deal with foreign customers.

If you ever visit Japan, please come and stay with my family. We would love to show you around.

With best wishes,
Keiko`,
      annotations: [
        {
          quote: 'Dear Margaret and Peter,',
          note: 'First names and “With best wishes” suit a family she lived with. The tone is warm and polite throughout, and the purpose is clear in paragraph 1.',
        },
        {
          quote: 'One thing I really enjoyed was our day trip to the coast in Devon.',
          note: 'Bullet 2 focuses on one specific occasion with supporting details, which is exactly what the task asks for.',
        },
        {
          quote: 'The experience has helped me a lot since I came back.',
          note: 'A clear topic sentence for bullet 3, but “helped me a lot” is general. Band 8 would be more precise about how she has changed.',
        },
        {
          quote: 'Because I spoke English with you every evening, I feel much more confident now',
          note: 'Accurate complex sentences with a good range of tenses (GRA 7). Vocabulary is appropriate but fairly safe (“really enjoyed”, “loved it”).',
        },
      ],
    },
    {
      band: 8.5,
      text: `Dear Margaret and Peter,

It’s been almost a month since I flew home, and I still catch myself putting the kettle on at four o’clock every afternoon! I wanted to thank you properly for opening your home to me. You treated me like a daughter rather than a paying guest, and that meant the world to me.

Of everything we did together, our day in Devon stands out. Walking the cliff path with Biscuit tugging at his lead, then huddling under an umbrella with our fish and chips while the rain poured down – I’ve told that story to everyone here, and they all think the British are slightly mad.

More importantly, those evenings chatting round your kitchen table have made a real difference since I got back. I no longer rehearse sentences in my head before I speak, and last month I was offered a job at a travel agency, partly, I suspect, because I came across as so relaxed in an interview held entirely in English.

Do let me know if you’re ever tempted to visit Osaka. My parents are already planning the menu.

With love and many thanks,
Keiko`,
      annotations: [
        {
          quote: 'I still catch myself putting the kettle on at four o’clock every afternoon!',
          note: 'A personal, humorous detail that shows how much the stay affected her before she says thank you: a natural informal opening, not a formula.',
        },
        {
          quote: 'You treated me like a daughter rather than a paying guest',
          note: 'The thanks are specific: she says exactly what the family did that mattered. The tone is warm but respectful throughout, right for older hosts.',
        },
        {
          quote:
            'Walking the cliff path with Biscuit tugging at his lead, then huddling under an umbrella',
          note: 'Participle phrases build a vivid picture of one occasion, and vocabulary such as “tugging at his lead” and “huddling” is precise and natural (LR 8+).',
        },
        {
          quote: 'I no longer rehearse sentences in my head before I speak',
          note: 'Bullet 3 shows exactly how she has changed rather than saying “my English is better”, then supports it with a concrete result. “More importantly” links the paragraphs smoothly (CC 8+).',
        },
      ],
    },
  ],
})
