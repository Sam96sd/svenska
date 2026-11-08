import { defineWritingTask } from '../define'

/** Original task and model answers. General Training Task 1, informal apology. */
export default defineWritingTask({
  id: 'g1-apology-missed-event',
  skill: 'writing',
  use: 'practice',
  module: 'general',
  task: 1,
  type: 'apology',
  tone: 'informal',
  topic: 'Friends and social life',
  title: 'Missing a friend’s housewarming',
  prompt:
    'A friend recently invited you to a party to celebrate moving into their new home, but you did not go.\n\nWrite a letter to your friend. In your letter',
  bullets: [
    'apologise for missing the party',
    'explain why you could not go',
    'suggest a way of making it up to your friend',
  ],
  planHints: [
    'Who is the reader? A close friend → informal: “Hi Jess” or “Dear Jess … Love / Best wishes / See you soon”. Contractions and friendly phrases are right here; “I am writing to inform you” is not.',
    'Paragraph 1: the apology straight away, in a warm, personal way (“I’m so sorry I missed…”).',
    'Paragraph 2: one clear reason, told as a short story with specific details: the time, what went wrong, why you couldn’t let them know.',
    'Paragraph 3: a concrete plan to make up for it (a day, a place, what you will do), not just “let’s meet some time”.',
    'Don’t write any addresses. Aim for 160–190 words.',
  ],
  models: [
    {
      band: 6,
      text: `Dear Jess,

I am writing this letter to inform you that I am really sorry because I did not come to your housewarming party on Saturday. I know you was waiting for me and I feel very bad about it.

The reason is my car. On Saturday afternoon I was driving to your new flat but on the motorway the car stopped suddenly and it did not start again. I had to wait the recovery service for more than three hours on the side of the road, and my phone battery was died so I could not call you. When I arrived home it was already eleven o’clock and I was very tired.

I hope the party was great and many people came. I saw some photos on Instagram and your flat looks amazing, specially the kitchen.

Anyway, I would like to see you soon. Maybe we can meet some time and you can show me the flat.

Yours sincerely,
Marco`,
      annotations: [
        {
          quote: 'I am writing this letter to inform you that I am really sorry',
          note: 'This formal business phrase sounds cold in a letter to a close friend, and “Yours sincerely” clashes with “Dear Jess, … Marco”. The tone isn’t consistent, which limits Task Achievement.',
        },
        {
          quote: 'Maybe we can meet some time and you can show me the flat.',
          note: 'Bullet 3 is underdeveloped: there is no real plan to make it up to Jess. A specific suggestion (day, place, activity) is needed for Band 7.',
        },
        {
          quote: 'I had to wait the recovery service',
          note: 'Errors like “wait the recovery service” (wait for), “was died”, “you was” and “specially” keep GRA and LR at 6, although Jess would still understand everything.',
        },
        {
          quote: 'The reason is my car.',
          note: 'Bullet 2 is the best-developed part, with clear details in a logical order. Linking is simple (“but”, “and”, “so”), which is typical of CC 6.',
        },
      ],
    },
    {
      band: 7,
      text: `Hi Jess,

I’m so sorry I missed your housewarming party on Saturday. I was really looking forward to it, and I feel terrible that I didn’t even manage to let you know.

What happened was that my car broke down on the motorway on the way to your place. I had to wait nearly three hours for the recovery van, and by then my phone had run out of battery, so I couldn’t call or message you. By the time I got home it was almost midnight, and I thought it was too late to ring.

I’d love to make it up to you. How about I come round next weekend and bring dinner with me? I could cook that Thai curry you liked so much, and you could give me a proper tour of the new flat. Let me know which day suits you best.

Sorry again, and I hope the party went well. I saw a few photos online and your new garden looks lovely!

Lots of love,
Marco`,
      annotations: [
        {
          quote: 'I’m so sorry I missed your housewarming party on Saturday.',
          note: 'The apology comes first and the tone is right for a friend: contractions, warm phrases and a matching opening and closing (“Hi Jess … Lots of love”).',
        },
        {
          quote: 'How about I come round next weekend and bring dinner with me?',
          note: 'A clear, natural suggestion that fully covers bullet 3. “Next weekend” is a little general; naming the day would make it more precise.',
        },
        {
          quote: 'by then my phone had run out of battery',
          note: 'The past perfect and “by the time” show the order of events accurately. Sentences are mostly error-free, with some complex structures (GRA 7).',
        },
        {
          quote: 'I feel terrible that I didn’t even manage to let you know.',
          note: 'Natural, idiomatic informal language (“feel terrible”, “come round”, “ring”). The range is good but not especially wide, which fits LR 7.',
        },
      ],
    },
    {
      band: 8.5,
      text: `Hi Jess,

I owe you a huge apology. I can’t believe I missed your housewarming on Saturday, especially after you’d gone to all the trouble of sending me directions and saving me a slice of your famous lemon cake.

Here’s what happened. I set off at five, but about twenty miles out of town the car started making a horrible grinding noise and then died completely on the hard shoulder. The recovery van took nearly three hours to turn up, and to make matters worse, my phone had given up too, so I had no way of letting you know. By the time I’d been towed home it was gone eleven, and I didn’t want to ring and spoil your evening.

So, can I make it up to you? I was thinking I could come over next Saturday with a takeaway from that Lebanese place you love – my treat – and you could give me the grand tour. If that doesn’t work, just name a day and I’ll be there, car permitting!

Once again, I’m really sorry. I hope you all had a brilliant night.

Love,
Marco`,
      annotations: [
        {
          quote: 'especially after you’d gone to all the trouble of sending me directions',
          note: 'The apology is personal and specific: it shows Marco understands what Jess did for him. The past perfect is used naturally (GRA 8+).',
        },
        {
          quote: 'died completely on the hard shoulder',
          note: 'Precise, natural vocabulary (“grinding noise”, “hard shoulder”, “towed home”, “gone eleven”) makes the explanation vivid and believable: LR 8+.',
        },
        {
          quote: 'next Saturday with a takeaway from that Lebanese place you love – my treat –',
          note: 'Bullet 3 is a concrete plan with a day, an activity and a fallback option. The aside “my treat” adds warmth that suits an informal letter.',
        },
        {
          quote: 'If that doesn’t work, just name a day and I’ll be there, car permitting!',
          note: 'Light humour closes the paragraph naturally. The tone is consistently informal but never careless, and each paragraph has one clear job (CC 8+).',
        },
      ],
    },
  ],
})
