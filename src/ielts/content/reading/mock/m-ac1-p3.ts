import { definePassage } from '../../define'

/**
 * Original text. Mock Academic 1, Passage 3: an argumentative article in which the writer gives
 * their own views, so it supports YES/NO/NOT GIVEN. The researchers and studies are fictional.
 */
export default definePassage({
  id: 'm-ac1-p3',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'mock',
  title: 'The measured life',
  topic: 'Technology and health',
  intro: 'Original practice passage: the researchers and studies described are fictional.',
  minutes: 23,
  level: 3,
  texts: [
    {
      title: 'The measured life',
      paragraphs: [
        {
          label: 'A',
          text: 'Not long ago, the only numbers most people knew about their own bodies were their height and their weight. Today a wristband can report how many steps its wearer has taken, how long and how deeply they slept, and how their heart rate rose during a meeting. Enthusiasts of what has been called the “quantified self” see in these devices the promise of a new kind of self-knowledge: by recording our behaviour precisely, they argue, we can discover what makes us healthy and happy, and change our lives accordingly. It is an appealing idea, and I have no wish to dismiss it. But I am increasingly convinced that the benefits of self-tracking have been overstated, and that some of its costs have barely been noticed.',
        },
        {
          label: 'B',
          text: 'The case in favour rests largely on a simple psychological principle: what gets measured tends to improve. There is some truth in this. When people are given feedback on their behaviour, they often adjust it, and studies of activity trackers have generally found that wearers walk somewhat more, at least at first. What is less often reported is how quickly the effect fades. In a two-year study by the health researcher Julia Brennan, nearly a third of participants had abandoned their devices within six months, and among those who continued, daily step counts had drifted back towards their original level by the end of the first year. The novelty of a number, it seems, wears off rather faster than the habit it was supposed to create.',
        },
        {
          label: 'C',
          text: 'Defenders of tracking might reply that a temporary benefit is better than none, and that is fair as far as it goes. My concern is with what measurement does to the activity being measured. Once a walk has been converted into a figure on a screen, it becomes very easy to value the figure rather than the walk. The sociologist Henrik Lindgren interviewed people who had used fitness trackers for more than a year, and many described a subtle change in their motivation: activities they had once enjoyed for their own sake had become tasks to be completed. One woman told him that she had given up swimming, which she loved, because her tracker recorded it inaccurately. It would be hard to find a clearer example of a measure displacing the very thing it was meant to serve.',
        },
        {
          label: 'D',
          text: 'There is also the question of accuracy. Independent tests have repeatedly found that consumer devices are better at some measurements than others. Step counts are usually reasonable; estimates of calories burned can be wrong by a wide margin, and sleep scores are calculated from movement and heart rate rather than from the brain activity that actually defines the stages of sleep. None of this would matter greatly if users treated the numbers as rough guides. The difficulty is that a figure displayed to one decimal place carries an air of authority that a vague impression lacks, and people are inclined to trust it over their own sense of how they feel.',
        },
        {
          label: 'E',
          text: 'This last point seems to me the most important. Psychologists have long known that the way people interpret their bodily state can influence that state, and self-tracking appears to provide a striking illustration. In an experiment conducted by the psychologist Rafael Moreno, volunteers who had slept normally were told, falsely, that their trackers showed a poor night’s sleep; on a series of tests the next morning they performed worse, and reported feeling more tired, than volunteers told that they had slept well. I would not want to build too much on a single experiment, but it suggests that the information we gather about ourselves is not neutral: it can shape the very experience it claims merely to record.',
        },
        {
          label: 'F',
          text: 'Then there is the matter of who else sees the data. Most tracking devices send their readings to servers owned by the companies that make them, and the terms under which this information may be passed on are rarely read and often vague. Some employers and insurers already offer rewards to people who agree to share their activity records, which sounds harmless until one considers that those who decline, or whose health makes high step counts impossible, may in effect be penalised. I do not believe that these schemes are part of some sinister plan; most are probably well intentioned. But a technology adopted for personal reasons can quietly become a means by which others judge us.',
        },
        {
          label: 'G',
          text: 'None of this means that self-tracking is worthless. For people managing particular medical conditions, such as diabetes, continuous measurement can be genuinely transformative, allowing them to respond to changes before they become dangerous. And for some healthy users, a brief period of tracking may reveal patterns – the effect of late-evening coffee on sleep, perhaps – that they would not otherwise have noticed. The value here lies in using the data to answer a specific question and then, very often, putting the device away. What I question is the assumption that more data, collected continuously and indefinitely, will automatically lead to better lives.',
        },
        {
          label: 'H',
          text: 'Perhaps the deepest problem is that self-tracking offers a particular picture of what it means to know oneself. It treats the self as a set of quantities to be optimised, and it encourages us to consult a screen rather than attend to our own sensations. Yet the things that matter most in a life – the quality of a friendship, the satisfaction of work well done – resist measurement altogether. A tracker can tell us how far we walked; it cannot tell us whether the walk was worth taking. That judgement, for now at least, remains our own.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'ynng',
      instructions:
        'Do the following statements agree with the claims of the writer in the reading passage? Choose YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, NOT GIVEN if it is impossible to say what the writer thinks about this.',
      questions: [
        {
          n: 1,
          statement: 'The advantages of self-tracking have been exaggerated.',
          answer: 'YES',
          location: {
            ref: 'A',
            quote:
              'I am increasingly convinced that the benefits of self-tracking have been overstated',
          },
          explanation:
            '“Advantages” paraphrases “benefits” and “exaggerated” paraphrases “overstated”. The writer states this as their own view (“I am increasingly convinced”).',
        },
        {
          n: 2,
          statement: 'Most people who use fitness trackers lose their enjoyment of exercise.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'C',
            quote:
              'many described a subtle change in their motivation: activities they had once enjoyed for their own sake had become tasks to be completed',
          },
          explanation:
            'The writer reports that “many” of Lindgren’s interviewees described this change, but “many” is not “most”, and the interviewees were only long-term users, not all users. The writer neither claims nor denies that most users lose their enjoyment, so the answer is NOT GIVEN rather than YES.',
        },
        {
          n: 3,
          statement: 'The step counts recorded by consumer devices are generally unreliable.',
          answer: 'NO',
          location: {
            ref: 'D',
            quote: 'Step counts are usually reasonable',
          },
          explanation:
            'The writer criticises calorie estimates and sleep scores, but says step counts “are usually reasonable”, which contradicts “generally unreliable”. Don’t let the critical tone of the paragraph carry over to every measurement.',
        },
        {
          n: 4,
          statement:
            'People tend to place more trust in precise-looking figures than they deserve.',
          answer: 'YES',
          location: {
            ref: 'D',
            quote:
              'a figure displayed to one decimal place carries an air of authority that a vague impression lacks, and people are inclined to trust it over their own sense of how they feel',
          },
          explanation:
            'The writer has just shown that many figures can be “wrong by a wide margin”, and calls it “the difficulty” that people trust a number displayed “to one decimal place” over their own feelings. That is trusting such figures more than they deserve.',
        },
        {
          n: 5,
          statement:
            'Employers who reward staff for sharing their activity data are deliberately trying to deceive them.',
          answer: 'NO',
          location: {
            ref: 'F',
            quote:
              'I do not believe that these schemes are part of some sinister plan; most are probably well intentioned.',
          },
          explanation:
            'The writer worries about the effects of these schemes but explicitly rejects the idea of a “sinister plan” and thinks most are “well intentioned”, which contradicts “deliberately trying to deceive”.',
        },
      ],
    },
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B, C or D.',
      questions: [
        {
          n: 6,
          prompt: 'What does the writer say about Julia Brennan’s study?',
          options: [
            { key: 'A', text: 'It showed that trackers have no effect on how much people walk.' },
            { key: 'B', text: 'It found that the early benefits of tracking did not last.' },
            {
              key: 'C',
              text: 'It was the first study to follow tracker users for more than a year.',
            },
            {
              key: 'D',
              text: 'It found that most participants gave up their devices within six months.',
            },
          ],
          answer: 'B',
          location: {
            ref: 'B',
            quote:
              'daily step counts had drifted back towards their original level by the end of the first year',
          },
          explanation:
            'The study is introduced to show “how quickly the effect fades”: step counts drifted back towards their original level. So the early benefit did not last.',
          traps: {
            A: 'Too strong: wearers “walk somewhat more, at least at first”. The effect exists but fades.',
            C: 'The study lasted two years, but the writer never says it was the first of its kind.',
            D: '“Nearly a third” gave up within six months – not most.',
          },
        },
        {
          n: 7,
          prompt: 'The writer mentions the woman who gave up swimming in order to',
          options: [
            {
              key: 'A',
              text: 'show that trackers measure some activities less accurately than others.',
            },
            {
              key: 'B',
              text: 'illustrate how a measurement can come to matter more than the activity itself.',
            },
            {
              key: 'C',
              text: 'suggest that people should choose activities that trackers can record.',
            },
            {
              key: 'D',
              text: 'show that most of Lindgren’s interviewees were unhappy with their devices.',
            },
          ],
          answer: 'B',
          location: {
            ref: 'C',
            quote:
              'It would be hard to find a clearer example of a measure displacing the very thing it was meant to serve.',
          },
          explanation:
            'The writer’s concern in C is that people “value the figure rather than the walk”. The woman stopped an activity she loved because it did not produce a good number, which the writer calls a clear example of “a measure displacing the very thing it was meant to serve”.',
          traps: {
            A: 'The tracker did record swimming inaccurately, but that is a detail of the story, not the reason the writer tells it. Accuracy is the topic of paragraph D.',
            C: 'The writer is criticising what happened, not recommending it.',
            D: 'The writer says many interviewees described a change in motivation, not that most were unhappy with their devices.',
          },
        },
        {
          n: 8,
          prompt: 'What is the writer’s main point in paragraph E?',
          options: [
            { key: 'A', text: 'Trackers are particularly poor at measuring sleep.' },
            {
              key: 'B',
              text: 'The data people receive about themselves can influence how they feel and perform.',
            },
            { key: 'C', text: 'People who sleep badly should not be allowed to use trackers.' },
            {
              key: 'D',
              text: 'Moreno’s experiment provides conclusive evidence about the effects of tracking.',
            },
          ],
          answer: 'B',
          location: {
            ref: 'E',
            quote:
              'the information we gather about ourselves is not neutral: it can shape the very experience it claims merely to record',
          },
          explanation:
            'Volunteers given false bad sleep data performed worse and felt more tired. The writer concludes that self-tracking information “can shape the very experience it claims merely to record”.',
          traps: {
            A: 'Sleep scores are criticised in paragraph D. In E the data were false on purpose: the point is their effect, not their accuracy.',
            C: 'Nothing of the kind is suggested. The experiment shows an effect of the data; it does not lead to any recommendation about who may use trackers.',
            D: 'The writer is cautious: “I would not want to build too much on a single experiment”.',
          },
        },
        {
          n: 9,
          prompt:
            'According to the writer, healthy people are most likely to benefit from tracking if they',
          options: [
            {
              key: 'A',
              text: 'measure themselves continuously so that they can respond to changes quickly.',
            },
            { key: 'B', text: 'use it for a limited time to investigate a particular question.' },
            { key: 'C', text: 'share the information they collect with a doctor.' },
            { key: 'D', text: 'collect as much data as possible over a long period.' },
          ],
          answer: 'B',
          location: {
            ref: 'G',
            quote:
              'The value here lies in using the data to answer a specific question and then, very often, putting the device away.',
          },
          explanation:
            'For “some healthy users”, the writer says “a brief period of tracking” can reveal patterns, and that the value lies in answering “a specific question” and then putting the device away.',
          traps: {
            A: 'Continuous measurement is described as transformative for people with medical conditions such as diabetes, not for healthy users.',
            C: 'Doctors are not mentioned in G.',
            D: 'The opposite: the writer questions the assumption that “more data, collected continuously and indefinitely” leads to better lives.',
          },
        },
      ],
    },
    {
      type: 'completion',
      format: 'summary',
      instructions:
        'Complete the summary using the list of words, A–K, below. Choose the correct letter for each answer.',
      title: 'The hidden costs of self-tracking',
      wordBank: [
        { key: 'A', text: 'neutral' },
        { key: 'B', text: 'useful' },
        { key: 'C', text: 'feedback' },
        { key: 'D', text: 'medication' },
        { key: 'E', text: 'sharing' },
        { key: 'F', text: 'accuracy' },
        { key: 'G', text: 'disadvantage' },
        { key: 'H', text: 'advantage' },
        { key: 'I', text: 'quantities' },
        { key: 'J', text: 'sensations' },
        { key: 'K', text: 'habits' },
      ],
      body: [
        {
          kind: 'text',
          text: 'The writer argues that the information produced by trackers is not [[10]], because it can change the experience it records. In one experiment, volunteers who received false [[11]] about how they had slept did worse on tests the following day. The writer is also concerned about the [[12]] of personal data: people who refuse to pass their records on to employers or insurers may find themselves at a [[13]]. Finally, self-tracking encourages people to think of themselves as a collection of [[14]], even though many of the most important aspects of life cannot be measured.',
        },
      ],
      questions: [
        {
          n: 10,
          answers: ['A'],
          location: {
            ref: 'E',
            quote: 'the information we gather about ourselves is not neutral',
          },
          explanation:
            'The writer says the information “is not neutral: it can shape the very experience it claims merely to record”. “Useful” (B) is a trap: in G the writer says self-tracking is not “worthless”, and “not useful” would not explain why the information changes experience.',
        },
        {
          n: 11,
          answers: ['C'],
          location: {
            ref: 'E',
            quote:
              'volunteers who had slept normally were told, falsely, that their trackers showed a poor night’s sleep',
          },
          explanation:
            'The volunteers were “told, falsely” what their trackers showed – that is, they received false feedback about their sleep. Nobody was given medication (D).',
        },
        {
          n: 12,
          answers: ['E'],
          location: {
            ref: 'F',
            quote:
              'Some employers and insurers already offer rewards to people who agree to share their activity records',
          },
          explanation:
            'Paragraph F is about “who else sees the data” and people who “agree to share their activity records”, so the concern is the sharing of data. “Accuracy” (F) is the topic of paragraph D and does not fit the rest of this sentence.',
        },
        {
          n: 13,
          answers: ['G'],
          location: {
            ref: 'F',
            quote:
              'those who decline, or whose health makes high step counts impossible, may in effect be penalised',
          },
          explanation:
            '“Refuse to pass their records on” paraphrases “decline”, and being “at a disadvantage” paraphrases being “penalised”. “Advantage” (H) is the opposite: the rewards go to those who DO share.',
        },
        {
          n: 14,
          answers: ['I'],
          location: {
            ref: 'H',
            quote: 'It treats the self as a set of quantities to be optimised',
          },
          explanation:
            '“A collection of quantities” paraphrases “a set of quantities”. “Sensations” (J) is a trap: the writer says tracking draws attention AWAY from our sensations.',
        },
      ],
    },
  ],
})
