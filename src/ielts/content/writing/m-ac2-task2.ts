import { defineWritingTask } from '../define'

/** Original task and model answers for Academic mock test 2. Task 2, problem–solution essay. */
export default defineWritingTask({
  id: 'm-ac2-task2',
  skill: 'writing',
  use: 'mock',
  module: 'academic',
  task: 2,
  type: 'problem-solution',
  topic: 'Health',
  title: 'Waiting to see a doctor',
  prompt:
    'In many countries, people now have to wait several weeks for an appointment with their family doctor.\n\nWhat are the causes of this problem?\n\nWhat measures could be taken to solve it?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'Two questions, two body paragraphs: causes, then measures. Answer both fully — a short list of solutions at the end is not enough.',
    'Think supply and demand: why are there too few family doctors, and why do patients need more of their time?',
    'Choose one or two causes and explain them, rather than listing five. Each measure should clearly match a cause you have given.',
    'Be specific about who acts and how (governments, health services, patients), and say what difference the measure would make.',
    'No invented statistics (“40% of doctors will retire by…”). A realistic example of a typical patient or practice is more convincing.',
  ],
  models: [
    {
      band: 6,
      text: `Nowadays in many countries it is very difficult to see a doctor, and people must wait many weeks for appointment. This is a serious problem because some people become more sick while they are waiting. This essay will discuss the causes of this problem and some solutions.

There are many causes for this problem. The first cause is that there are not enough doctors. Many doctors are retiring and the young doctors prefer to work in hospitals or in other countries where the salary is more higher. Another cause is that the population is getting older and old people need to see the doctor more often. Also, many people go to the doctor for small problems like a cold, so the doctors are very busy and the people who are really sick can not get appointment.

There are some solutions for this problem. Firstly, the government should train more doctors and give them better salary, so they stay in the country. Secondly, people should go to the pharmacy for small illness, because the pharmacist can give them advice and medicine. For example, in my country when I had a sore throat I asked the pharmacist and he gave me medicine and I did not need to see the doctor. Thirdly, the doctors can use video calls for some patients, this will save time.

In conclusion, there are many causes of waiting for the doctor such as not enough doctors and old people. The government and the people should work together to solve this problem, and in the future the situation will be better.`,
      annotations: [
        {
          quote: 'There are many causes for this problem. The first cause is',
          note: 'Coherence & Cohesion: clear paragraphs, but the ideas are listed (The first cause / Another cause / Also; Firstly / Secondly / Thirdly) rather than linked into an argument.',
        },
        {
          quote: 'the doctors can use video calls for some patients, this will save time',
          note: 'Task Response: an idea that is mentioned but not explained (how would it save time, and for whom?). It is also a comma splice. Several points like this keep TR at 6.',
        },
        {
          quote: 'where the salary is more higher',
          note: 'Grammatical Range & Accuracy: a double comparative (higher). Errors such as “for appointment”, “better salary” and “small illness” (missing articles and plurals) are frequent but do not block meaning.',
        },
        {
          quote: 'For example, in my country when I had a sore throat I asked the pharmacist',
          note: 'Task Response: a relevant personal example — good — but it is told as a story rather than used to support the argument.',
        },
        {
          quote: 'and in the future the situation will be better',
          note: 'Task Response: a vague, unsupported prediction. The conclusion should restate the main causes and the most important solution.',
        },
      ],
    },
    {
      band: 7,
      text: `In many countries, patients now have to wait several weeks before they can see a family doctor, even when they are worried about their health. This situation has several causes, but there are practical steps that governments and patients can take to improve it.

The main reason for long waiting times is a shortage of family doctors. Training a doctor takes many years, and in some countries the number of new doctors has not kept up with the number who retire. In addition, many young doctors choose to specialise in hospital medicine, which is often seen as more prestigious and better paid. At the same time, demand has increased because people are living longer and more of them have long-term conditions such as diabetes, which require regular check-ups.

To reduce waiting times, governments could make general practice a more attractive career, for example by offering higher salaries or paying off the student loans of doctors who work in areas with the greatest shortages. However, this would only help in the long term. A quicker solution would be to make better use of other health professionals. Pharmacists could treat minor illnesses such as coughs and skin infections, and specialist nurses could manage routine check-ups for patients with chronic conditions. This would leave doctors with more time for complex cases, such as patients with several serious illnesses.

In conclusion, long waits to see a family doctor are mainly caused by too few doctors and rising demand from older patients. Although training more doctors is essential, sharing routine work with pharmacists and nurses would bring faster improvements.`,
      annotations: [
        {
          quote: 'The main reason for long waiting times is a shortage of family doctors.',
          note: 'Task Response: a clear topic sentence, and the paragraph explains two causes (supply and demand) with reasons. Both parts of the question are answered (TR 7).',
        },
        {
          quote: 'However, this would only help in the long term.',
          note: 'Task Response: the writer evaluates the solution instead of just listing it, which leads naturally to the second, quicker measure.',
        },
        {
          quote: 'Pharmacists could treat minor illnesses such as coughs and skin infections',
          note: 'Lexical Resource: accurate topic vocabulary (“chronic conditions”, “routine check-ups”, “general practice”), though less precise and varied than Band 8.',
        },
        {
          quote: 'In addition, many young doctors choose to specialise',
          note: 'Coherence & Cohesion: logical progression, but linking still relies on standard connectors (In addition / At the same time / However). The causes paragraph covers several points briefly rather than developing one fully.',
        },
      ],
    },
    {
      band: 8.5,
      text: `In many countries, securing an appointment with a family doctor has become a test of patience, with routine requests often taking weeks to be met. This delay stems from a mismatch between a shrinking supply of doctors and steadily rising demand, and addressing it requires changes both to who delivers primary care and to how it is organised.

On the supply side, general practice has become an increasingly unappealing career. Family doctors typically face heavy caseloads, mounting paperwork and the financial burden of running a practice, so many newly qualified doctors gravitate towards hospital specialties instead, while experienced practitioners retire early or reduce their hours. Demand, meanwhile, has grown more complex. A patient in their seventies managing heart disease, arthritis and diabetes needs far more frequent and lengthy consultations than the typical patient of a generation ago, and each such appointment removes several shorter ones from the diary.

The most effective remedy would be to stop treating the family doctor as the only point of entry to the health system. Many consultations concern conditions that a pharmacist or an experienced nurse is fully qualified to handle, from minor infections to the monitoring of blood pressure. If patients could book directly with these professionals, and if they were given the authority to prescribe a limited range of medicines, doctors would be free to concentrate on cases that genuinely require their expertise. Alongside this, reducing administrative work, for instance by employing practice managers to handle forms and referrals, would make the role more sustainable and encourage doctors to remain in it.

In short, long waits reflect both too few family doctors and an outdated model of care. Redistributing routine work and lightening doctors’ administrative load would shorten queues far more quickly than training alone.`,
      annotations: [
        {
          quote:
            'This delay stems from a mismatch between a shrinking supply of doctors and steadily rising demand',
          note: 'Task Response: the introduction gives the essay’s whole analysis in one sentence, so both questions are clearly framed from the start.',
        },
        {
          quote: 'A patient in their seventies managing heart disease, arthritis and diabetes',
          note: 'Task Response: a specific, realistic example that explains how demand has changed (longer, more frequent appointments), with no invented statistics.',
        },
        {
          quote:
            'The most effective remedy would be to stop treating the family doctor as the only point of entry to the health system.',
          note: 'Task Response and Coherence & Cohesion: one main solution, stated in a topic sentence and fully developed (what changes, who does it, what it achieves), instead of a list of three.',
        },
        {
          quote:
            'If patients could book directly with these professionals, and if they were given the authority to prescribe',
          note: 'Grammatical Range & Accuracy: a second conditional with two coordinated if-clauses, used accurately to explain how the solution would work.',
        },
        {
          quote: 'gravitate towards hospital specialties',
          note: 'Lexical Resource: precise, natural collocations (also “heavy caseloads”, “mounting paperwork”, “point of entry”, “lightening doctors’ administrative load”): Band 8+.',
        },
      ],
    },
  ],
})
