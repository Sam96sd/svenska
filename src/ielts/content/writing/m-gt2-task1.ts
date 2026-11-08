import { defineWritingTask } from '../define'

/** Original task and model answers. General Training mock test 2, Task 1: semi-formal explanation. */
export default defineWritingTask({
  id: 'm-gt2-task1',
  skill: 'writing',
  use: 'mock',
  module: 'general',
  task: 1,
  type: 'explanation',
  tone: 'semi-formal',
  topic: 'Home and neighbours',
  title: 'Telling a neighbour about building work',
  prompt:
    'Your family is going to have some building work done on your house next month. The work will be noisy and may cause some problems for your neighbours.\n\nWrite a letter to your next-door neighbour. In your letter',
  bullets: [
    'explain what building work is going to be done and why',
    'describe how the work might affect your neighbour',
    'say what you will do to reduce the disturbance',
  ],
  planHints: [
    'Who is the reader? A neighbour you know by name but who is not a close friend → semi-formal: “Dear Mrs Lambert … Kind regards / Best wishes”. Polite and friendly, contractions allowed, but no slang.',
    'Paragraph 1: the purpose at once: you are writing to let them know about the work before it starts.',
    'Bullet 1: what the work is, when it starts and how long it will take, and the reason for it.',
    'Bullet 2: be honest and specific about the disruption (noise, working hours, parking, dust). Bullet 3: two or three practical steps, plus a way for the neighbour to tell you about any problem.',
    'Don’t write any addresses. Aim for 160–190 words.',
  ],
  models: [
    {
      band: 6,
      text: `Dear Mrs Lambert,

I am writing to you because I want to tell you about some building work in our house next month. I hope it will not be a big problem for you.

As you know our family is getting bigger, so we decided to build a new room at the back of the house. The builders will start on 3 May and they will finish after about six weeks.

I am sorry but there will be a lot of noise during the day, especially at the beginning when they will destroy the old wall. Also there will be a big lorry in the street sometimes and maybe it is difficult for you to park your car. There can be some dust in your garden too.

We will try to make the problems less. I told the builders that they cannot start before 8 o'clock and they must clean everyday. If there is any problem you can call me on my mobile.

Thank you for your understanding.

Yours faithfully,
Rania`,
      annotations: [
        {
          quote: 'Yours faithfully,',
          note: '“Yours faithfully” is only used after “Dear Sir or Madam”. A letter to a neighbour you know by name needs “Kind regards” or “Best wishes”, so the closing doesn’t match the opening.',
        },
        {
          quote: 'when they will destroy the old wall',
          note: '“Destroy” is the wrong word for planned building work (“knock down”), and “will” is not used after “when” for the future (“when they knock down”). These limit LR and GRA to 6.',
        },
        {
          quote: 'maybe it is difficult for you to park your car',
          note: 'The meaning is clear, but a modal is needed (“it might be difficult”), and “There can be some dust” has the same problem.',
        },
        {
          quote: 'We will try to make the problems less.',
          note: 'Bullet 3 is covered, but thinly and awkwardly (“keep the disruption to a minimum”). “Clean everyday” should be “every day”, and the mobile number is not given.',
        },
      ],
    },
    {
      band: 7,
      text: `Dear Mrs Lambert,

I hope you and your husband are well. I’m writing to let you know that we are going to have some building work done on our house next month, and I wanted to warn you before it starts.

Now that the twins are older, we need more space, so we are building an extension at the back of the house with a new bedroom and a small bathroom. The work is due to begin on 3 May and should take about six weeks.

Unfortunately, it will be quite noisy, particularly in the first week when the builders knock down the old garden wall. There will also be a skip outside our house, which may make parking in the street more difficult, and there might be some dust in your garden.

We will do our best to keep the disruption to a minimum. The builders have agreed to work only between 8 am and 5 pm on weekdays, and they will clean the pavement every evening. If anything bothers you, please don’t hesitate to call me on 07700 900432.

Many thanks for your patience.

Kind regards,
Rania Saleh`,
      annotations: [
        {
          quote:
            'I’m writing to let you know that we are going to have some building work done on our house next month',
          note: 'The purpose is clear at once, and the causative (“have some building work done”) is used accurately. “Dear Mrs Lambert … Kind regards” and the contractions set a consistent semi-formal tone.',
        },
        {
          quote: 'when the builders knock down the old garden wall',
          note: 'The right phrasal verb and the right tense after “when”: compare the Band 6 “when they will destroy the old wall”.',
        },
        {
          quote: 'there might be some dust in your garden',
          note: 'Bullet 2 is covered honestly with three effects, but each is mentioned briefly. A Band 8 answer would say when the worst noise will end or how often parking will be a problem.',
        },
        {
          quote: 'We will do our best to keep the disruption to a minimum.',
          note: 'A clear topic sentence with a natural collocation, followed by concrete steps and a contact number: bullet 3 is fully addressed (Task Achievement 7).',
        },
      ],
    },
    {
      band: 8.5,
      text: `Dear Mrs Lambert,

I hope you’re both keeping well. I wanted to let you know in good time that we’re having some building work done next month, as I’m afraid it will affect you more than anyone else on the street.

With the twins now sharing a bedroom they have well and truly outgrown, we’ve decided to build a single-storey extension at the back to give them a room each. Work starts on Monday 3 May and should take around six weeks.

I won’t pretend it will be quiet. The first fortnight, when the old garden wall comes down and the foundations are dug, will be the noisiest, and there will be a skip outside throughout, which may occasionally make parking harder for you. Some dust may also drift into your garden on windy days.

To keep the inconvenience to a minimum, the team will work only from 8 am to 5 pm on weekdays and sweep the pavement every evening. If there are particular days when you need peace and quiet, just let me know and I’ll ask the builders to work around them.

Thanks for bearing with us.

Kind regards,
Rania`,
      annotations: [
        {
          quote: 'as I’m afraid it will affect you more than anyone else on the street',
          note: 'The purpose comes with a tactful acknowledgement of the neighbour’s position: exactly the right tone for a semi-formal letter to someone you know.',
        },
        {
          quote: 'they have well and truly outgrown',
          note: 'A natural idiomatic phrase that makes the reason for bullet 1 specific and personal (LR 8+).',
        },
        {
          quote: 'I won’t pretend it will be quiet.',
          note: 'A short, honest topic sentence that opens bullet 2. The details that follow say when the noise will be worst and how long the skip will stay.',
        },
        {
          quote: 'when the old garden wall comes down and the foundations are dug',
          note: 'A natural mix of active and passive forms inside a complex sentence, all accurate (GRA 8+).',
        },
        {
          quote:
            'If there are particular days when you need peace and quiet, just let me know and I’ll ask the builders to work around them.',
          note: 'Bullet 3 goes beyond rules for the builders and invites the neighbour’s input, so it is fully developed. “Bearing with us” in the next line closes the letter warmly.',
        },
      ],
    },
  ],
})
