import { defineWritingTask } from '../define'

/** Original task and model answers. General Training Task 1, informal invitation. */
export default defineWritingTask({
  id: 'g1-invitation-reunion',
  skill: 'writing',
  use: 'practice',
  module: 'general',
  task: 1,
  type: 'invitation',
  tone: 'informal',
  topic: 'Friends and social life',
  title: 'Inviting a classmate to a school reunion',
  prompt:
    'You are organising a reunion for the people who were in your class at secondary school.\n\nWrite a letter to an old classmate. In your letter',
  bullets: [
    'give details of the reunion',
    'explain why you would especially like this classmate to come',
    'ask them to help you with something for the event',
  ],
  planHints: [
    'Who is the reader? An old school friend → informal: “Hi Daniel” or “Dear Daniel … Best wishes / All the best / Hope to see you there”. Friendly and relaxed, but avoid text-message slang such as “wanna”.',
    'Paragraph 1: the purpose at once: you are organising a reunion and you want them to come.',
    'Bullet 1: the key facts a guest needs (date, time, place, cost, who else is coming), plus one personal touch.',
    'Bullet 2: a real, specific reason linked to your shared past, not just “we were friends”. Bullet 3: one clear task, and why they are the right person for it.',
    'Don’t write any addresses. Aim for 160–190 words.',
  ],
  models: [
    {
      band: 6,
      text: `Dear Daniel,

How are you? It is long time since we didn’t speak. I am pleased to inform you that I am organising a reunion for our class from Westbrook School, because this year is fifteen years since we finished.

The reunion will be on Saturday 14 June in the Red Lion pub near the school, from seven o’clock in the evening. There will be food and music and I already invited most of the class, about twenty people said yes. The ticket costs £15 for one person and it includes the dinner.

I really wanna see you there because you were my best friend in school and we had a lot of fun together.

Also I need your help. You were always good with computers so maybe you can help me with something for the party, like the music or the photos. Please tell me if you can do it.

I am waiting for your answer.

Best regards,
Ahmed`,
      annotations: [
        {
          quote: 'I am pleased to inform you that',
          note: 'A formal phrase from a business letter, while “I really wanna see you” is slang. The tone swings between too formal and too casual, which limits Task Achievement to 6.',
        },
        {
          quote: 'you were my best friend in school and we had a lot of fun together.',
          note: 'Bullet 2 is underdeveloped: one general sentence with no specific memory or reason why this friend matters now.',
        },
        {
          quote:
            'maybe you can help me with something for the party, like the music or the photos.',
          note: 'Bullet 3 is vague: Daniel can’t tell what he is being asked to do. Band 7 needs one clear request.',
        },
        {
          quote: 'It is long time since we didn’t speak.',
          note: 'Errors such as this, “I already invited” (present perfect needed) and the comma splice in “about twenty people said yes” keep GRA at 6, though the message is clear.',
        },
      ],
    },
    {
      band: 7,
      text: `Hi Daniel,

I hope you’re doing well. I don’t know if you’ve heard, but I’m organising a reunion for our old class from Westbrook School, as it’s fifteen years since we left, and I’d love you to come.

It’s going to be on Saturday 14 June at the Red Lion, the pub opposite the school gates, starting at seven. Tickets are £15 each, which includes a buffet dinner, and there’ll be a DJ later in the evening. So far about twenty people have said they’re coming, including Mr Harris, our old maths teacher!

I’d especially like you to be there because we were so close at school, but we lost touch after you moved to Edinburgh. It would be great to catch up properly and hear all about your new job.

I was also wondering if you could help me with something. You always took lots of photos back then, so could you put together a slideshow of old pictures to show on the night? I think everyone would enjoy it.

Let me know if you can make it.

Best wishes,
Ahmed`,
      annotations: [
        {
          quote:
            'I’m organising a reunion for our old class from Westbrook School, as it’s fifteen years since we left, and I’d love you to come.',
          note: 'The purpose is clear in the first paragraph, and the tone is friendly and consistent, with a matching opening and closing (“Hi Daniel … Best wishes”).',
        },
        {
          quote: 'Tickets are £15 each, which includes a buffet dinner',
          note: 'Bullet 1 gives every detail a guest needs: date, place, time, cost and who is coming. The relative clause is used accurately (GRA 7).',
        },
        {
          quote: 'It would be great to catch up properly and hear all about your new job.',
          note: 'Bullet 2 is covered with a clear reason, though it stays a little general. A Band 8 answer would add a specific shared memory.',
        },
        {
          quote: 'could you put together a slideshow of old pictures to show on the night?',
          note: 'A clear request with a reason (“You always took lots of photos”): bullet 3 is fully addressed. Natural phrasal verbs (“put together”, “catch up”) suit the informal tone.',
        },
      ],
    },
    {
      band: 8.5,
      text: `Hi Daniel,

Can you believe it’s been fifteen years since we walked out of Westbrook for the last time? To mark the occasion, I’ve taken it upon myself to organise a class reunion, and it wouldn’t be the same without you.

It’s on Saturday 14 June at the Red Lion – yes, the pub opposite the school gates that we were far too young to go into back then. Things kick off at seven with a buffet, and Hannah’s brother will DJ afterwards. Tickets are £15 a head, and around twenty of us have already signed up, Mr Harris included.

I’m especially keen for you to come because, if I’m honest, I’ve always regretted letting our friendship drift after you moved to Edinburgh. You were the one who got me through those dreadful chemistry exams, and I’d love to catch up properly.

While I’m at it, could I ask a favour? You were never without your camera at school, so if you still have those photos, would you be willing to put together a short slideshow for the evening? It would be the perfect icebreaker.

Hope you can make it!

All the best,
Ahmed`,
      annotations: [
        {
          quote:
            'Can you believe it’s been fifteen years since we walked out of Westbrook for the last time?',
          note: 'An engaging, personal opening that leads straight into the purpose in the next sentence. This is natural informal style, not a memorised formula.',
        },
        {
          quote:
            'yes, the pub opposite the school gates that we were far too young to go into back then',
          note: 'The practical details of bullet 1 are all there, and this aside adds shared humour. The tone is consistently warm and relaxed.',
        },
        {
          quote: 'I’ve always regretted letting our friendship drift after you moved to Edinburgh',
          note: 'Bullet 2 is fully developed with a specific, honest reason and a shared memory (“those dreadful chemistry exams”). “Let a friendship drift” is a precise, natural collocation (LR 8+).',
        },
        {
          quote:
            'You were never without your camera at school, so if you still have those photos, would you be willing to put together a short slideshow',
          note: 'A complex sentence with a conditional and an indirect request, used accurately and naturally: the favour is clear and it is obvious why Daniel is the right person (GRA 8+).',
        },
      ],
    },
  ],
})
