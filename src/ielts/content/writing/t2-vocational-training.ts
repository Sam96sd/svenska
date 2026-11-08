import { defineWritingTask } from '../define'

/** Original task and model answers. */
export default defineWritingTask({
  id: 't2-vocational-training',
  skill: 'writing',
  use: 'practice',
  module: 'both',
  task: 2,
  type: 'discussion',
  topic: 'Education',
  title: 'Academic study or job training?',
  prompt:
    'Some people argue that the main purpose of a university is to give students a broad academic education. Others think that universities should train students in the practical skills needed for particular careers.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'How many parts does the question have? (Here: three — the academic view, the job-training view, and your own opinion.)',
    'Give your opinion in the introduction, even though you are discussing both sides. A “discuss” question still needs a clear position from the start.',
    'Body paragraph 1: the view you agree with less — ONE main reason, developed with PEEL (point, explain, example, link), and say how far you accept it.',
    'Body paragraph 2: the view you support — ONE main reason, explained fully, with ONE specific, realistic example (a nursing degree, a history graduate who changes careers), not invented statistics.',
    'Conclusion: restate your position in new words. Don’t add a new argument or a recommendation you never discussed.',
  ],
  models: [
    {
      band: 6,
      text: `Nowadays, the role of universities is a hot topic in the society. Some people think universities should teach academic subjects, while other people believe they must prepare students for a specific job. This essay will discuss both views and give my opinion.

Firstly, some people believe that universities should focus on academic subjects such as history, philosophy and science. This is because these subjects make students to think deeply and understand the world better. Also, university is a place for research, so students need to learn the theory first. Moreover, if students only learn one job, they can have a big problem when this job disappear in the future. For example, many jobs are changing very fast because of the technology.

Secondly, other people think that universities should prepare students for the job market. Nowadays it is very hard to find a job, and companies want workers who already have practical skills. If a student study only theory for four years, he will not know how to do the real work. For example, my friend studied business in university, but when he started working in a bank he did not know how to use the software and he needed to learn everything again. In addition, students pay a lot of money for university, so they expect to get a good salary after they graduate.

In conclusion, both views have advantages and disadvantages. In my opinion, I think universities should prepare students for jobs, because the most important thing for students is to get a job with a good salary. However, academic subjects are also important and the government should give more money for universities.`,
      annotations: [
        {
          quote: 'This essay will discuss both views and give my opinion.',
          note: 'A memorised opener that announces the essay instead of answering it. The opinion only appears in the conclusion, so Task Response stays at 6.',
        },
        {
          quote: 'Firstly, some people believe',
          note: 'Mechanical linking (Firstly / Also / Moreover / Secondly / In addition) at the start of almost every sentence: typical of Coherence & Cohesion Band 6.',
        },
        {
          quote: 'For example, many jobs are changing very fast because of the technology.',
          note: 'This is another general claim, not an example. The idea about jobs disappearing is under-developed: which jobs, and why does theory help?',
        },
        {
          quote: 'make students to think deeply',
          note: 'Verb pattern error (make students think). With “this job disappear”, “a student study” and “in the society”, errors like this keep Grammatical Range & Accuracy at 6.',
        },
        {
          quote:
            'However, academic subjects are also important and the government should give more money for universities.',
          note: 'The position becomes unclear in the last sentence, and government funding is a new idea that the essay never discussed. “Give money for” should be “give money to”.',
        },
      ],
    },
    {
      band: 7,
      text: `Universities have traditionally been places of academic learning, but today many people expect them to train students for particular careers. While both views have some merit, I believe that universities should mainly provide a broad academic education, although some practical training should also be included.

On the one hand, there are good reasons why people want universities to focus on job skills. Firstly, higher education is very expensive in many countries, and students who take out large loans naturally want a degree that will lead directly to employment. Secondly, employers often complain that graduates lack practical experience, so courses that include work placements or professional training can make young people more attractive to companies. For instance, engineering students who spend a year working in industry usually find it easier to get a job after graduation.

On the other hand, I believe that a purely job-focused education would be a mistake. The main reason is that the job market changes quickly, and skills that are useful today may be out of date in ten years. Students who study academic subjects learn how to analyse information, write clearly and solve problems, and these abilities can be used in many different careers. In addition, universities play an important role in research, which depends on students learning theory and developing their own ideas. If universities only trained people for specific jobs, society might lose this source of new knowledge.

In conclusion, although practical training is useful and students understandably want good employment prospects, I believe universities should continue to focus mainly on academic subjects. The ideal solution is a combination, where academic courses also give students some experience of the workplace.`,
      annotations: [
        {
          quote: 'I believe that universities should mainly provide a broad academic education',
          note: 'A clear position in the introduction, kept to the end, and both views are discussed: this is what lifts Task Response to 7.',
        },
        {
          quote: 'Firstly, higher education is very expensive in many countries',
          note: 'Two separate reasons (cost and employers’ complaints) share one paragraph, so each is developed only briefly. Band 8 would choose one and explore it.',
        },
        {
          quote: 'engineering students who spend a year working in industry',
          note: 'A relevant, realistic example, but it describes a general group rather than showing in detail why the placement helps.',
        },
        {
          quote:
            'If universities only trained people for specific jobs, society might lose this source of new knowledge.',
          note: 'An accurate second conditional with a clear reference word (“this source”). Frequent error-free complex sentences like this support GRA 7.',
        },
        {
          quote: 'On the one hand, there are good reasons',
          note: 'Logical paragraphing, but “On the one hand / Firstly / Secondly / On the other hand / In addition” is formulaic. Band 8 links paragraphs through ideas and referencing.',
        },
      ],
    },
    {
      band: 8.5,
      text: `Whether universities exist to cultivate minds or to supply the labour market is a question that has become more pressing as tuition fees have risen. Although there is a strong case for vocational training at degree level, I believe a university's distinctive value lies in academic education, and that career preparation should complement rather than replace it.

Those who favour job-specific degrees argue, with some justification, that students are entitled to a return on a considerable financial investment. A graduate who leaves with substantial debt but no clear route into work has arguably been let down by the institution. Professions such as nursing and pharmacy show how well a vocational model can work: their courses combine theory with supervised practice, and graduates move almost seamlessly into employment. For fields with clearly defined roles of this kind, tailoring the curriculum to the job is entirely sensible.

The difficulty arises when this logic is applied to university education as a whole. Specific occupations change, merge and disappear within a single working life, whereas the capacity to evaluate evidence, construct an argument and master unfamiliar material independently does not lose its value. A history graduate, for instance, may begin a career in publishing and later move into policy work or data analysis, drawing each time on the same habits of rigorous reading and clear writing. Training tied narrowly to one employer's current needs would leave such a person far less adaptable. There is also a wider cost: research with no obvious commercial application, which often underpins later breakthroughs, depends on academic disciplines being studied for their own sake.

In short, vocational courses have a legitimate place where a profession demands specialised preparation, but universities should not reduce their purpose to job training. A broad academic education remains the better preparation for working lives that are increasingly unpredictable.`,
      annotations: [
        {
          quote: 'career preparation should complement rather than replace it',
          note: 'A nuanced position, clear from the first paragraph: the writer accepts some vocational training but argues for academic education as the core.',
        },
        {
          quote: 'argue, with some justification, that students are entitled to a return',
          note: 'The opposing view is treated fairly and then limited (“For fields with clearly defined roles of this kind”), so the paragraph still serves the writer’s position.',
        },
        {
          quote:
            'A history graduate, for instance, may begin a career in publishing and later move into policy work or data analysis',
          note: 'A specific, realistic example that is explained, not just mentioned. One main idea is developed fully (Task Response 8+), with no invented statistics.',
        },
        {
          quote:
            'The difficulty arises when this logic is applied to university education as a whole.',
          note: 'A topic sentence that refers back to the previous paragraph (“this logic”): cohesion through ideas, not “On the other hand”.',
        },
        {
          quote:
            'Specific occupations change, merge and disappear within a single working life, whereas',
          note: 'A complex contrast sentence, accurately controlled, with precise vocabulary (also “cultivate minds”, “underpins”, “tailoring the curriculum”): GRA and Lexical Resource 8+.',
        },
      ],
    },
  ],
})
