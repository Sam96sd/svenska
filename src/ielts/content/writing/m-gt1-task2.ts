import { defineWritingTask } from '../define'

/** Original task and model answers. General Training mock test 1, Task 2: opinion. */
export default defineWritingTask({
  id: 'm-gt1-task2',
  skill: 'writing',
  use: 'mock',
  module: 'general',
  task: 2,
  type: 'opinion',
  topic: 'Family and children',
  title: 'Children and household tasks',
  prompt:
    'In many families today, parents do almost all of the housework themselves. Some people believe that children should be given regular household tasks, such as tidying their rooms, washing up and helping to prepare meals, from an early age.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'Decide your position before you write: agree, disagree, or agree with a condition (for example, only tasks suited to the child’s age). State it clearly in the introduction and keep it the same to the end.',
    'Notice the key words “regular” and “from an early age”. An essay that only talks about teenagers, or about helping now and then, misses part of the question.',
    'Body paragraphs: one main reason each, explained step by step and supported by a realistic example from family life, not invented statistics.',
    'Give the opposing view (for example, homework pressure or the need to play) its own paragraph or a clear part of one, and explain why it does not change your overall position.',
    'Conclusion: restate your position in new words in one or two sentences. No new ideas.',
  ],
  models: [
    {
      band: 6,
      text: `Nowadays, many parents do all the housework at home and children do not help them. In my opinion, I agree that children should have household tasks from young age, because it has many benefits.

Firstly, doing housework teach children to be responsible. If a child must clean his room every day, he will learn that he has duties and not only rights. For example, my younger brother had to wash the dishes after dinner when he was eight years old, and now he is very organised person. Also, when children grow up they will live alone, for example at university, and they need to know how to cook and clean. If they never did it at home, they will have many problems.

Secondly, housework help the family. Parents today are very busy because both of them are working, so they are tired when they come home. If children help, the parents have more time to rest and the family can spend more time together. This makes the relationship in the family more strong.

On the other hand, some people think children should only study because school is very important for their future. They say that children have a lot of homework and they don't have time for housework. However, I think small tasks like make the bed only take few minutes, so it is not a big problem.

In conclusion, I strongly believe that children should help in the house from early age, because it teach them responsibility and help the parents. Parents should give them easy tasks first and then more difficult tasks when they are older.`,
      annotations: [
        {
          quote: 'In my opinion, I agree that',
          note: 'The position is clear from the start, which is good, but “In my opinion, I agree” says the same thing twice. “I agree that…” alone is enough.',
        },
        {
          quote: 'Firstly, doing housework teach children to be responsible.',
          note: 'Subject–verb agreement errors (“teach”, “help” for teaches, helps) recur through the essay. The paragraphs are linked mechanically: Firstly / Also / Secondly / On the other hand (CC 6).',
        },
        {
          quote: 'and now he is very organised person',
          note: 'A relevant personal example, but it doesn’t show how washing dishes made the brother organised, and the article is missing (“a very organised person”).',
        },
        {
          quote: 'This makes the relationship in the family more strong.',
          note: 'The idea is stated, not explained, and the comparative is wrong (“stronger”). Ideas like this are relevant but underdeveloped, which is typical of Task Response 6.',
        },
        {
          quote:
            'However, I think small tasks like make the bed only take few minutes, so it is not a big problem.',
          note: 'The opposing view is answered in one sentence with two errors (“like making the bed”, “a few minutes”). The rebuttal needs a reason, not just “it is not a big problem”.',
        },
      ],
    },
    {
      band: 7,
      text: `It is increasingly common for parents to take on all the housework while their children concentrate on school and leisure. I believe, however, that children should be given regular household tasks from an early age, as long as these tasks are suitable for their age.

The main reason is that housework teaches practical skills that everyone needs as an adult. A child who has helped to prepare meals and wash clothes for years will find it much easier to look after themselves when they leave home. In contrast, many young people who move away to study or work have never cooked a proper meal, and they end up relying on takeaways or expensive ready meals.

Another benefit is that regular chores help children to develop a sense of responsibility. When a task such as feeding a pet or setting the table is their job every day, they learn that other people depend on them and that their actions have consequences. This attitude is likely to help them later at school and in the workplace.

Some people argue that children are already under pressure from homework and exams, and that they also need time to play. This is a reasonable concern, but most daily tasks take only ten or fifteen minutes. Moreover, young children often enjoy helping adults, so housework does not have to feel like a burden if parents make it part of the family routine.

In conclusion, I agree that children should do household tasks from a young age because this gives them useful skills and teaches them responsibility. However, parents should choose tasks that match their child’s age and should not let chores take the place of study or play.`,
      annotations: [
        {
          quote: 'as long as these tasks are suitable for their age',
          note: 'A clear, qualified position in the introduction, kept consistently to the conclusion (Task Response 7).',
        },
        {
          quote: 'they end up relying on takeaways or expensive ready meals',
          note: 'The first reason is extended with a realistic contrast, and the collocations (“end up relying on”, “ready meals”) are natural (LR 7).',
        },
        {
          quote: 'This attitude is likely to help them later at school and in the workplace.',
          note: 'A relevant idea left general: the essay doesn’t show how a sense of responsibility helps at work. Band 8 would develop this step.',
        },
        {
          quote:
            'This is a reasonable concern, but most daily tasks take only ten or fifteen minutes.',
          note: 'The opposing view is acknowledged fairly and answered with a reason. Linking is accurate but a little predictable (Another benefit / Moreover / In conclusion), which fits CC 7.',
        },
      ],
    },
    {
      band: 8.5,
      text: `In many households, the division of labour has quietly shifted: parents cook, clean and tidy, while children are left free to study or relax. Although this is usually done with the best of intentions, I firmly believe that children benefit from being given regular household responsibilities from an early age, provided the tasks are matched to what they can reasonably manage.

The most compelling argument is that housework is a form of education that school cannot provide. A six-year-old who sorts the laundry into colours, or a ten-year-old who helps to prepare the evening meal, is gradually acquiring the competence to run a home. Young adults who have never been expected to do these things often discover the gap at the worst possible moment, when they move into shared accommodation and find themselves unable to cook rice or work a washing machine.

Equally important is what regular chores teach about belonging to a family. When a child knows that the table will not be laid unless they lay it, the household becomes something they contribute to rather than a service they receive. This sense of being needed tends to build both self-esteem and consideration for others, qualities that carry over into friendships and, later, working life.

Critics rightly point out that today’s children face heavy academic demands and need unstructured time to play. Yet the tasks in question rarely take more than a few minutes a day, and the habits of planning and finishing a job are, if anything, an asset in study. The real risk lies not in chores themselves but in overloading a child, which is a matter of judgement for parents.

In short, regular household tasks equip children with practical skills and a sense of shared responsibility, and as long as they are proportionate to a child’s age, these gains far outweigh the cost.`,
      annotations: [
        {
          quote: 'provided the tasks are matched to what they can reasonably manage',
          note: 'A clear position with a precise condition, signalled from the first paragraph and echoed in the conclusion (“proportionate to a child’s age”). Task Response 8+.',
        },
        {
          quote:
            'when they move into shared accommodation and find themselves unable to cook rice or work a washing machine',
          note: 'A specific, realistic example that any reader can recognise, used instead of invented statistics to support the first reason.',
        },
        {
          quote:
            'the household becomes something they contribute to rather than a service they receive',
          note: 'The idea is developed by explaining how chores change a child’s attitude, not just stating that they do. The precise contrast is a feature of Lexical Resource 8+.',
        },
        {
          quote: 'Critics rightly point out',
          note: 'The concession is handled naturally and answered with “Yet”, so the opposing view strengthens rather than weakens the argument (CC 8+).',
        },
        {
          quote: 'The real risk lies not in chores themselves but in overloading a child',
          note: 'A “not … but” structure that turns the counter-argument back into support for the writer’s condition: a wide range of structures used with full control (GRA 8+).',
        },
      ],
    },
  ],
})
