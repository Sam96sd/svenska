import { defineWritingTask } from '../define'

/** Original task and model answers. */
export default defineWritingTask({
  id: 't2-ai-tutors',
  skill: 'writing',
  use: 'practice',
  module: 'both',
  task: 2,
  type: 'adv-disadv',
  topic: 'Technology',
  title: 'AI tutors in schools',
  prompt:
    'In many schools, tutoring software that uses artificial intelligence (AI) is now being used to help children learn subjects such as mathematics and foreign languages.\n\nDo the advantages of this development outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'How many parts does the question have? (Here: one direct question — do the advantages OUTWEIGH the disadvantages? You must weigh the two sides, not just list them.)',
    'Answer the question in the introduction (e.g. “the advantages outweigh the disadvantages, provided that…”) and keep that answer to the end.',
    'Body paragraph 1: the most serious disadvantage, explained with PEEL, and then why it matters less than the benefits (or can be managed).',
    'Body paragraph 2: the main advantage, developed fully with ONE specific, realistic classroom example. No invented statistics.',
    'Conclusion: say again which side is heavier and why, in new words. Don’t add new points.',
  ],
  models: [
    {
      band: 6,
      text: `Today, technology is developing very fast and it is used in every part of our life. One example is AI tutors, which many schools are using now for teaching students. This essay will look at the advantages and disadvantages of this.

There are many advantages of using AI tutors in schools. Firstly, the software can give each student exercises for his level, so a weak student can practise easy questions and a good student can do more difficult ones. Secondly, it is available all the time, students can use it at home in the evening when the teacher is not there. Moreover, the children enjoy to use computers and tablets, so they are more motivated to study. For example, my little brother use a maths app and he likes it more than his textbook.

However, there are also some disadvantages. Firstly, children spend too much time in front of screens, which is bad for their eyes and their health. Secondly, the AI sometimes give wrong answers and the students cannot know that it is wrong. Also, some families are poor and they do not have a good internet or a computer at home, so this is not fair for them. Finally, if computers teach the students, maybe in the future we will not need teachers, and many teachers will lose their jobs.

In conclusion, AI tutors have both advantages and disadvantages. I think the advantages are more than the disadvantages because students can learn in their own level and they enjoy it. But schools must be careful and use it together with the teacher.`,
      annotations: [
        {
          quote: 'This essay will look at the advantages and disadvantages of this.',
          note: 'The question asks whether the advantages OUTWEIGH the disadvantages, but the introduction gives no answer. Listing both sides without weighing them limits Task Response to 6.',
        },
        {
          quote: 'it is available all the time, students can use it at home',
          note: 'A comma splice: two sentences joined by a comma. Use a full stop, or “so students can use it at home”.',
        },
        {
          quote:
            'Finally, if computers teach the students, maybe in the future we will not need teachers',
          note: 'Four disadvantages in one paragraph, each in a single sentence. None is developed or evaluated, and this last one is speculation, not an argument.',
        },
        {
          quote: 'the children enjoy to use computers',
          note: 'Verb pattern error (enjoy using). With “my little brother use”, “the AI sometimes give” and “a good internet”, these errors keep GRA at 6.',
        },
        {
          quote: 'I think the advantages are more than the disadvantages',
          note: 'The answer finally appears in the conclusion, in an unnatural phrase. The prompt’s own verb (“outweigh”) or “are more significant than” would be more precise.',
        },
      ],
    },
    {
      band: 7,
      text: `AI tutoring software, which adapts lessons to each pupil, is becoming common in schools in many countries. Although this technology has some drawbacks, I believe that its advantages clearly outweigh them, as long as it is used to support teachers rather than replace them.

The most obvious disadvantage is that pupils may become too dependent on screens. Children already spend many hours on phones and tablets outside school, and adding more screen time in the classroom could affect their concentration and reduce face-to-face interaction with classmates. Another concern is accuracy, because AI systems sometimes produce answers that sound convincing but are wrong, and young learners may not be able to notice this. There are also worries about privacy, since these tools collect a large amount of data about pupils' performance.

However, I believe these problems can be managed, and the benefits are more significant. The main advantage is personalised learning. In a large class, a teacher cannot always give individual attention, but AI software can identify exactly which topics a child finds difficult and give them extra practice. For example, a pupil who keeps confusing the past simple and the present perfect in English can be given more exercises on this point until they understand it, while a more confident classmate moves on to new grammar. This also helps teachers, because the software can show them which pupils need help, so they can use lesson time more effectively. In addition, pupils can use these tools at home, which is useful when they are revising for exams.

In conclusion, although AI tutors raise concerns about screen time, accuracy and privacy, I believe that the benefits of personalised learning are greater. Schools should therefore use this technology, but teachers should remain in control of the learning process.`,
      annotations: [
        {
          quote: 'I believe that its advantages clearly outweigh them',
          note: 'A direct answer to the question in the introduction, with a sensible condition, kept to the conclusion: Task Response 7.',
        },
        {
          quote: 'There are also worries about privacy',
          note: 'Three disadvantages are listed, and privacy is raised in one sentence but never evaluated. Band 8 would deal with fewer drawbacks in more depth.',
        },
        {
          quote: 'However, I believe these problems can be managed',
          note: 'The essay does weigh the two sides, but this is only asserted: it never explains HOW screen time or accuracy problems would be managed.',
        },
        {
          quote: 'a pupil who keeps confusing the past simple and the present perfect in English',
          note: 'A specific, realistic example that shows what “personalised learning” means in practice: good Band 7 support.',
        },
        {
          quote: 'personalised learning',
          note: 'Accurate topic vocabulary (also “face-to-face interaction”, “revising for exams”), though most of the language is common rather than precise: Lexical Resource 7.',
        },
      ],
    },
    {
      band: 8.5,
      text: `Software that uses artificial intelligence to tutor children individually is rapidly finding its way into classrooms. Its critics raise legitimate concerns, but I would argue that, provided teachers remain in charge of how it is used, the benefits of this technology substantially outweigh its drawbacks.

The most serious objection is not, as is often claimed, the extra screen time, but the risk that pupils will outsource their thinking. A child who can request a hint the moment a problem becomes difficult may never experience the productive struggle through which genuine understanding is built. There is also the question of reliability: these systems can present a flawed explanation with complete confidence, and a ten-year-old is poorly placed to detect the error. Both risks, however, stem from how the software is deployed rather than from the technology itself. A teacher who limits hints, asks pupils to explain their reasoning aloud and checks what the software has recommended can neutralise much of the danger.

What such tools offer in return is something that even the most dedicated teacher cannot provide unaided: continuous, individual feedback. Consider a teacher with twenty-eight pupils working through a unit on fractions. Within a single lesson, some will grasp equivalent fractions immediately, while others are still unsure what the denominator represents. An adaptive tutor can diagnose each of these misconceptions as it arises and adjust the next question accordingly, so that no pupil is either left behind or held back. Just as importantly, it gives the teacher a precise picture of who is struggling and why, freeing class time for the targeted explanation and discussion that machines handle poorly.

In conclusion, the dangers of over-reliance and inaccuracy are real but manageable through careful classroom practice. The capacity of AI tutors to tailor learning to every child, by contrast, addresses a limitation that has always constrained mass education, which is why I believe their advantages prevail.`,
      annotations: [
        {
          quote:
            'provided teachers remain in charge of how it is used, the benefits of this technology substantially outweigh its drawbacks',
          note: 'A clear answer to the question, qualified by a condition that the essay then develops: a nuanced, consistent position (Task Response 8+).',
        },
        {
          quote:
            'Both risks, however, stem from how the software is deployed rather than from the technology itself.',
          note: 'The disadvantages are evaluated, not just listed, and the next sentence explains how they can be managed. This weighing is exactly what an “outweigh” question requires.',
        },
        {
          quote: 'Consider a teacher with twenty-eight pupils working through a unit on fractions.',
          note: 'A specific, realistic scenario developed over several sentences, with no invented statistics: one main idea, fully extended.',
        },
        {
          quote: 'What such tools offer in return',
          note: 'The topic sentence links back to the previous paragraph through referencing (“such tools”, “in return”): cohesion without “On the other hand”.',
        },
        {
          quote: 'outsource their thinking',
          note: 'Precise, less common vocabulary used naturally (also “productive struggle”, “misconceptions”, “neutralise”, “constrained mass education”): Lexical Resource 8+.',
        },
      ],
    },
  ],
})
