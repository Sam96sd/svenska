import { defineWritingTask } from '../define'

/** Original task and model answers. General Training Task 1, semi-formal request. */
export default defineWritingTask({
  id: 'g1-request-reference',
  skill: 'writing',
  use: 'practice',
  module: 'general',
  task: 1,
  type: 'request',
  tone: 'semi-formal',
  topic: 'Work',
  title: 'Asking a former manager for a reference',
  prompt:
    'You have applied for a new job, and the company has asked for a reference from a previous employer.\n\nWrite a letter to a manager you used to work for. In your letter',
  bullets: [
    'remind the manager of the work you did for them',
    'describe the job you have applied for',
    'explain what the reference should include and when it is needed',
  ],
  planHints: [
    'Who is the reader? A former manager you know, but someone senior to you → semi-formal: “Dear Mrs Clarke … Yours sincerely” or “Kind regards”. Polite and friendly, but no slang.',
    'Paragraph 1: the purpose straight away (“I am writing to ask whether you would be willing to give me a reference…”).',
    'One paragraph per bullet point. Invent specific details: your old job title, the years, one achievement, the name of the new company and role.',
    'Bullet 3: say exactly what the reference should cover (duties, reliability, teamwork), who it goes to and the deadline.',
    'Don’t write any addresses. Aim for 160–190 words.',
  ],
  models: [
    {
      band: 6,
      text: `Dear Mrs Clarke,

How are you? I hope everything is fine in the office. I am writing because I need a reference from you for a new job.

As you know I worked in your team at Harlow Logistics from 2019 until 2022 as a warehouse supervisor. I was responsible for the night shift and I organised the deliveries. I think you was happy with my work because I was never late and I always finished my tasks.

Now I applied for a job of Operations Coordinator in a big company called Brightway Foods. This job has more responsibility than my old job and I will plan the transport for all their shops in the north. I am very exciting about it because it is a good chance for my career.

The company need the reference quickly. Please write something about my work and send it to them, I will give you the details later. It would be really great if you can help me with this!

Thanks a million and see you,
Tomasz`,
      annotations: [
        {
          quote: 'Thanks a million and see you,',
          note: 'The opening “Dear Mrs Clarke” is right, but this closing is far too casual for a former manager and doesn’t match it. Use “Yours sincerely” or “Kind regards” (tone is part of Task Achievement).',
        },
        {
          quote:
            'Please write something about my work and send it to them, I will give you the details later.',
          note: 'Bullet 3 is vague: no deadline and no idea of what the reference should cover. The comma splice (two sentences joined by a comma) is also a GRA error.',
        },
        {
          quote: 'I think you was happy with my work',
          note: 'Errors such as “you was”, “Now I applied” (present perfect needed), “a job of” and “The company need” keep GRA at 6, though the meaning is still clear.',
        },
        {
          quote: 'I am very exciting about it',
          note: 'A word-formation error (“exciting” for “excited”). Vocabulary is adequate for the task but rather basic (“a big company”, “a good chance”), so LR stays at 6.',
        },
      ],
    },
    {
      band: 7,
      text: `Dear Mrs Clarke,

I hope you are well. I am writing to ask whether you would be willing to give me a reference for a job I have recently applied for.

As you may remember, I worked as a warehouse supervisor in your department at Harlow Logistics from 2019 to 2022. During that time I managed a night-shift team of twelve people, and I was responsible for making sure that all deliveries left on time.

The position I have applied for is Operations Coordinator at Brightway Foods. It involves planning delivery routes for their shops in the north of England and managing a small team of drivers. I believe the experience I gained in your department has prepared me well for this role.

The company would like the reference to describe my main duties, my reliability and how well I worked with other people. They need to receive it by 15 May, and it should be sent by email to their HR department. I will forward you the details.

Thank you very much for your help.

Yours sincerely,
Tomasz Nowak`,
      annotations: [
        {
          quote: 'I am writing to ask whether you would be willing to give me a reference',
          note: 'The purpose is clear in the first paragraph, and the indirect question (“whether you would be willing”) sets a polite, semi-formal tone that suits a former manager.',
        },
        {
          quote: 'They need to receive it by 15 May',
          note: 'Bullet 3 is fully covered: content, deadline and who it goes to. All three bullets have their own paragraph (CC 7).',
        },
        {
          quote:
            'I believe the experience I gained in your department has prepared me well for this role.',
          note: 'Accurate but rather general. A Band 8 answer would link one specific achievement to the new job, giving the manager something concrete to write about.',
        },
        {
          quote: 'I managed a night-shift team of twelve people',
          note: 'A specific detail that lifts bullet 1. Grammar is accurate throughout, with a mix of relative clauses and complex sentences (GRA 7).',
        },
      ],
    },
    {
      band: 8.5,
      text: `Dear Mrs Clarke,

I hope this finds you well. I am writing to ask whether you would be kind enough to act as a referee for me, as I have reached the final interview stage for a new post.

You may recall that I worked under you at Harlow Logistics for three years, first as a warehouse operative and then, from 2020, as night-shift supervisor. It was with your encouragement that I introduced the revised loading schedule, which almost halved late departures.

The role I have applied for is Operations Coordinator at Brightway Foods, where I would be planning routes for their forty stores across northern England. Since the job calls for precisely the kind of scheduling and team management I did in your department, your view of my work would carry real weight.

Brightway have asked for a brief reference covering my responsibilities, my reliability and the way I handled pressure, ideally by Friday 15 May. If it would help, I would be happy to send you a short summary of my duties to refresh your memory.

Thank you in advance; I realise how busy you must be.

Kind regards,
Tomasz Nowak`,
      annotations: [
        {
          quote: 'whether you would be kind enough to act as a referee for me',
          note: 'Polite, natural phrasing for a semi-formal request to someone senior whom you know: respectful without being stiff. “Act as a referee” is a precise collocation (LR 8+).',
        },
        {
          quote: 'It was with your encouragement that I introduced the revised loading schedule',
          note: 'A cleft sentence (“It was … that …”) puts the focus on the manager’s role, reminding her of a concrete achievement she can mention: bullet 1 fully developed.',
        },
        {
          quote:
            'Since the job calls for precisely the kind of scheduling and team management I did in your department',
          note: 'This links the new job (bullet 2) back to the reader, so the paragraph explains why her reference matters, not just what the job is.',
        },
        {
          quote:
            'If it would help, I would be happy to send you a short summary of my duties to refresh your memory.',
          note: 'A thoughtful offer that makes the request easier to grant, with the deadline and content already given: bullet 3 is covered precisely and the tone stays considerate.',
        },
      ],
    },
  ],
})
