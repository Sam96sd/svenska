import { definePassage } from '../../define'

/**
 * Original text. Academic Passage 3 style: an argumentative article in which the writer gives
 * their own views, so it supports YES/NO/NOT GIVEN. The researchers and studies are fictional.
 */
export default definePassage({
  id: 'ac-procrastination-research',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'practice',
  title: 'Rethinking procrastination',
  topic: 'Psychology',
  intro: 'Original practice passage: the researchers and studies described are fictional.',
  minutes: 20,
  level: 3,
  texts: [
    {
      title: 'Rethinking procrastination',
      paragraphs: [
        {
          label: 'A',
          text: 'Almost everyone procrastinates at some point, yet few behaviours provoke such a curious mixture of guilt and indulgence. We joke about tidying a desk to avoid writing a report, while privately berating ourselves for the hours lost. For a long time, the standard explanation treated procrastination as a failure of time management: people delayed because they planned badly, underestimated how long tasks would take or simply lacked discipline. The remedy, accordingly, was better organisation – to-do lists, wall planners and, more recently, a flood of productivity applications. I want to suggest that this account, while not entirely wrong, misunderstands what is actually going on.',
        },
        {
          label: 'B',
          text: 'The difficulty with the time-management explanation is that it does not fit what procrastinators themselves report. In surveys, chronic delayers are often perfectly able to estimate how long a task will take, and many keep meticulous lists. What distinguishes them is not ignorance of the clock but their response to particular tasks. When the psychologist Owen Gallagher asked participants to rate assignments they had postponed, the strongest predictor of delay was neither the difficulty of the work nor the time available, but how tedious or anxiety-provoking the task felt. Procrastination, on this view, is less a problem of scheduling than of mood: we put things off to escape the discomfort they arouse, and the relief we feel when we turn away rewards the very habit we are trying to break.',
        },
        {
          label: 'C',
          text: 'This reframing, it seems to me, explains a puzzle that the older model could not. If delay were merely a question of poor planning, we would expect it to decline as people grew more experienced. Yet many highly capable professionals procrastinate as much in their fifties as they did as students. Experience improves our estimates of time; it does little, by itself, to change how we cope with unpleasant feelings. The emotional account also explains why so many productivity tools disappoint. An application that breaks a project into neat steps is useful to someone who lacks a plan, but it offers little to someone who has a plan and cannot bring themselves to begin.',
        },
        {
          label: 'D',
          text: 'One encouraging finding from this line of research concerns self-forgiveness. Lena Hartmann followed a group of doctoral students over an academic year, asking them each month how they had responded to any delays in their writing. Those who had treated themselves with understanding rather than harsh criticism tended to report fewer delays the following month. Hartmann’s interpretation is that self-criticism adds to the negative emotion surrounding a task, making it more aversive still, whereas forgiveness allows people to approach it afresh. The finding has attracted considerable attention, and it is, I think, genuinely important. But it is worth being cautious about what it shows. The study measured an association; it did not ask anyone to forgive themselves, and it is possible that students who were less anxious to begin with found it easier both to forgive themselves and to start work.',
        },
        {
          label: 'E',
          text: 'Not all researchers accept that delay is necessarily harmful. Priya Raman distinguishes between people who put work off because they cannot face it and those who, in her phrase, practise “purposeful delay”, postponing a task deliberately because they believe they work better under pressure. In her surveys, purposeful delayers reported being as satisfied with their results as people who seldom put anything off. I find the distinction less persuasive than its popularity suggests. Satisfaction is not the same as performance, and people who rely on last-minute effort have every reason to believe that it serves them well. It would be more convincing to compare the quality of the work itself, judged by assessors who did not know how it had been produced.',
        },
        {
          label: 'F',
          text: 'Research on planning offers a further perspective. A team led by Kwame Asante followed several hundred adults enrolled on a twelve-week online language course. One group received a daily reminder to study; a second was asked at the start of each week to name the exact days and times at which they would do so; a third received neither. The reminders made almost no difference. Those who had named specific times, however, completed significantly more lessons than either of the other groups, although their advantage was greatest in the first month and had narrowed considerably by the end of the course. Deciding in advance when to start, it seems, removes one opportunity to bargain with discomfort; yet the fading effect suggests that no single technique works indefinitely.',
        },
        {
          label: 'G',
          text: 'What, then, should a chronic procrastinator do? The emotional account suggests that the most useful strategies are those that reduce the discomfort of starting rather than those that merely organise the work. Committing to work on a task for only ten minutes, for example, lowers the emotional cost of beginning, and once they have started, many people find that the task is less unpleasant than they had feared. Equally, a task can sometimes be made less aversive by changing the circumstances in which it is done – by working alongside others, for instance. None of these techniques is a cure, and I am sceptical of any book or course that promises one.',
        },
        {
          label: 'H',
          text: 'There is also a broader lesson. Procrastination is often treated as a moral weakness, evidence of laziness or a lack of character. The research of the past two decades points to something closer to the opposite: it is frequently the people who care most about the outcome, and who fear failing at it, who find a task hardest to begin. Recognising this will not, on its own, make anyone more productive. But it may at least replace self-reproach with understanding – which, if Hartmann is right, is itself a step towards change.',
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
          statement: 'The traditional explanation of procrastination is entirely without merit.',
          answer: 'NO',
          location: {
            ref: 'A',
            quote:
              'this account, while not entirely wrong, misunderstands what is actually going on',
          },
          explanation:
            'The writer says the time-management account is “not entirely wrong” – so it has some merit. “Entirely without merit” contradicts this. The trap is the strong qualifier “entirely”: the writer criticises the account but does not reject it completely.',
        },
        {
          n: 2,
          statement: 'Experience alone is unlikely to cure a tendency to procrastinate.',
          answer: 'YES',
          location: {
            ref: 'C',
            quote: 'it does little, by itself, to change how we cope with unpleasant feelings',
          },
          explanation:
            '“Alone” paraphrases “by itself”, and “unlikely to cure” matches “does little … to change”. The example of professionals who procrastinate “as much in their fifties as they did as students” supports the same view.',
        },
        {
          n: 3,
          statement:
            'Hartmann’s study is the most significant piece of research on procrastination carried out so far.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'D',
            quote:
              'The finding has attracted considerable attention, and it is, I think, genuinely important.',
          },
          explanation:
            'The writer calls the finding “genuinely important”, but never compares it with other research. “Important” is not the same as “the most significant”, so the writer’s view on this comparison cannot be known.',
        },
        {
          n: 4,
          statement:
            'Hartmann’s study proves that forgiving oneself leads to less procrastination.',
          answer: 'NO',
          location: {
            ref: 'D',
            quote: 'The study measured an association; it did not ask anyone to forgive themselves',
          },
          explanation:
            'The writer warns that we should be “cautious about what it shows”: the study found only an association, and another explanation (less anxious students find it easier both to forgive and to start) is possible. So the writer does not think the study proves cause and effect.',
        },
        {
          n: 5,
          statement:
            'People who delay deliberately generally produce work of lower quality than other people.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'E',
            quote: 'It would be more convincing to compare the quality of the work itself',
          },
          explanation:
            'The writer doubts Raman’s evidence (satisfaction is “not the same as performance”) and says the quality of the work should be compared – which means the writer does not know how good the work is. Doubting a claim of equal quality is not the same as claiming lower quality. A NO answer would need the writer to say their work is as good as or better than others’.',
        },
      ],
    },
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B, C or D.',
      questions: [
        {
          n: 6,
          prompt:
            'According to the writer, Gallagher’s research showed that people were most likely to delay a task when',
          options: [
            { key: 'A', text: 'they regarded it as particularly difficult.' },
            { key: 'B', text: 'they found it dull or stressful.' },
            { key: 'C', text: 'they had a long time in which to complete it.' },
            { key: 'D', text: 'they had underestimated how long it would take.' },
          ],
          answer: 'B',
          location: {
            ref: 'B',
            quote: 'but how tedious or anxiety-provoking the task felt',
          },
          explanation:
            'The strongest predictor was “how tedious or anxiety-provoking the task felt”. “Dull” paraphrases “tedious” and “stressful” paraphrases “anxiety-provoking”.',
          traps: {
            A: 'The text says the strongest predictor was NOT the difficulty of the work (“neither the difficulty of the work…”).',
            C: 'The time available is also ruled out: “nor the time available”.',
            D: 'Underestimating time belongs to the old explanation in A, and B says chronic delayers are often “perfectly able to estimate how long a task will take”.',
          },
        },
        {
          n: 7,
          prompt: 'Why does the writer mention “highly capable professionals” in paragraph C?',
          options: [
            { key: 'A', text: 'to show that successful people rarely procrastinate' },
            {
              key: 'B',
              text: 'to support the argument that procrastination is not mainly a planning problem',
            },
            {
              key: 'C',
              text: 'to suggest that experienced workers need more advanced productivity tools',
            },
            {
              key: 'D',
              text: 'to demonstrate that people become better at estimating time as they get older',
            },
          ],
          answer: 'B',
          location: {
            ref: 'C',
            quote:
              'If delay were merely a question of poor planning, we would expect it to decline as people grew more experienced.',
          },
          explanation:
            'The writer argues that if procrastination were just poor planning, it would decrease with experience; the professionals who still procrastinate in their fifties show that it does not. This supports the emotional account against the planning (time-management) account.',
          traps: {
            A: 'The opposite: the professionals procrastinate “as much in their fifties as they did as students”.',
            C: 'The writer says productivity tools disappoint people who already have a plan; there is no suggestion that more advanced tools are needed.',
            D: 'The writer does say “experience improves our estimates of time”, but that is a step in the argument, not the reason for mentioning the professionals.',
          },
        },
        {
          n: 8,
          prompt:
            'What does the writer report about the participants in Asante’s study who named specific study times?',
          options: [
            {
              key: 'A',
              text: 'They kept the same lead over the other groups throughout the course.',
            },
            { key: 'B', text: 'Their advantage over the other groups became smaller over time.' },
            { key: 'C', text: 'They benefited mainly from the daily reminders they received.' },
            { key: 'D', text: 'They were more likely than the others to finish the whole course.' },
          ],
          answer: 'B',
          location: {
            ref: 'F',
            quote:
              'their advantage was greatest in the first month and had narrowed considerably by the end of the course',
          },
          explanation:
            '“Became smaller over time” paraphrases “had narrowed considerably by the end of the course”.',
          traps: {
            A: 'Contradicted: the advantage was greatest at the start and then narrowed.',
            C: 'The reminders went to a different group, and they “made almost no difference”.',
            D: 'They completed more LESSONS; the text says nothing about who finished the whole course.',
          },
        },
        {
          n: 9,
          prompt: 'What is the writer’s view of the strategies described in paragraph G?',
          options: [
            { key: 'A', text: 'They can eliminate procrastination if they are used consistently.' },
            { key: 'B', text: 'They are helpful but do not offer a complete solution.' },
            { key: 'C', text: 'They are less effective than methods for organising work.' },
            { key: 'D', text: 'They are suitable only for people who work in teams.' },
          ],
          answer: 'B',
          location: {
            ref: 'G',
            quote:
              'None of these techniques is a cure, and I am sceptical of any book or course that promises one.',
          },
          explanation:
            'The writer calls them “the most useful strategies” but adds that “none of these techniques is a cure” – useful, but not a complete solution.',
          traps: {
            A: 'Contradicted by “None of these techniques is a cure”.',
            C: 'The opposite: the writer prefers strategies that reduce discomfort to those that “merely organise the work”.',
            D: 'Working alongside others is only one example (“for instance”); the ten-minute strategy can be used alone.',
          },
        },
      ],
    },
    {
      type: 'match-endings',
      instructions:
        'Complete each sentence with the correct ending, A–H, below. There are more endings than sentences, so you will not use them all.',
      optionsTitle: 'List of endings',
      options: [
        { key: 'A', text: 'produce better work than those who plan ahead.' },
        { key: 'B', text: 'are rewarded by a feeling of relief that strengthens the habit.' },
        { key: 'C', text: 'recommend tools for organising work more efficiently.' },
        { key: 'D', text: 'become less likely to delay as they gain experience.' },
        { key: 'E', text: 'make the work they are avoiding even less appealing.' },
        {
          key: 'F',
          text: 'feel just as content with what they achieve as those who rarely delay.',
        },
        { key: 'G', text: 'lack the self-discipline needed to succeed.' },
        { key: 'H', text: 'are especially concerned about the result.' },
      ],
      questions: [
        {
          n: 10,
          prompt: 'Supporters of the time-management explanation of procrastination typically',
          answer: 'C',
          location: {
            ref: 'A',
            quote: 'The remedy, accordingly, was better organisation',
          },
          explanation:
            'The old explanation led to “better organisation – to-do lists, wall planners and … productivity applications”, i.e. tools for organising work.',
          traps: {
            G: 'The time-management view did say people “lacked discipline”, but that describes procrastinators, not what the supporters of the theory did.',
          },
        },
        {
          n: 11,
          prompt: 'According to the emotional account, people who turn away from unpleasant tasks',
          answer: 'B',
          location: {
            ref: 'B',
            quote:
              'the relief we feel when we turn away rewards the very habit we are trying to break',
          },
          explanation:
            'The relief of escaping the task “rewards the very habit”, so the habit is strengthened. “A feeling of relief” paraphrases “the relief we feel”.',
        },
        {
          n: 12,
          prompt: 'Hartmann suggests that people who criticise themselves harshly',
          answer: 'E',
          location: {
            ref: 'D',
            quote:
              'self-criticism adds to the negative emotion surrounding a task, making it more aversive still',
          },
          explanation:
            '“Making it more aversive still” is paraphrased by “make the work … even less appealing”.',
        },
        {
          n: 13,
          prompt: 'Raman’s surveys indicate that people who delay on purpose',
          answer: 'F',
          location: {
            ref: 'E',
            quote:
              'purposeful delayers reported being as satisfied with their results as people who seldom put anything off',
          },
          explanation:
            '“Feel just as content with what they achieve” paraphrases “as satisfied with their results”; “rarely delay” paraphrases “seldom put anything off”.',
          traps: {
            A: 'Purposeful delayers BELIEVE they work better under pressure, and the surveys measured only satisfaction, not the quality of their work.',
          },
        },
        {
          n: 14,
          prompt:
            'The writer suggests that people who find it hardest to begin a task are frequently those who',
          answer: 'H',
          location: {
            ref: 'H',
            quote:
              'it is frequently the people who care most about the outcome, and who fear failing at it, who find a task hardest to begin',
          },
          explanation:
            '“Especially concerned about the result” paraphrases “care most about the outcome”.',
          traps: {
            G: 'Lack of character or laziness is the popular “moral weakness” view that the writer rejects (“something closer to the opposite”).',
          },
        },
      ],
    },
  ],
})
