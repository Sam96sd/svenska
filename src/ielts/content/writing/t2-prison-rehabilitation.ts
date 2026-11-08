import { defineWritingTask } from '../define'

/** Original task and model answers. */
export default defineWritingTask({
  id: 't2-prison-rehabilitation',
  skill: 'writing',
  use: 'practice',
  module: 'both',
  task: 2,
  type: 'discussion',
  topic: 'Crime',
  title: 'Prison sentences or rehabilitation',
  prompt:
    'Some people believe that the best way to reduce crime is to give offenders long prison sentences. Others think that it is better to offer them education and training programmes while they are in prison.\n\nDiscuss both these views and give your own opinion.\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'How many parts does the question have? (Here: three — the case for long sentences, the case for education and training, AND your own opinion.)',
    'Put your opinion in the introduction, e.g. which approach does more to reduce crime and for which offenders, and keep it the same to the end.',
    'Body paragraph 1: why some people favour long sentences. Choose one main reason (protecting the public or deterrence), explain it fully, then say where it falls short.',
    'Body paragraph 2: the case for education and training, built with PEEL — point, explanation, ONE specific, realistic example (a prisoner who learns a trade), and a link back to reducing crime.',
    'Conclusion: one sentence on both views, then restate your opinion in fresh words. No new ideas.',
  ],
  models: [
    {
      band: 6,
      text: `Nowadays, crime is a very serious problem in many countries all over the world. Some people believe that criminals should stay in prison for a long time, while others think that prisons should give them education and training. This essay will discuss both views.

Firstly, there are many reasons why long prison sentences are a good idea. When a criminal is in prison, he can not hurt other people, so the society is more safe. Also, if people know that they will go to prison for many years, they will be afraid to commit a crime. For example, in some countries the punishment for stealing is very hard and there is not much crimes there. Moreover, the victims and their families want that the criminal is punished, because it is fair.

Secondly, other people think that education is better for prisoners. Many criminals did not finish school and they have not any skills, so when they leave the prison they can not find a job. If they learn a skill in prison, for example cooking or computer, they can find a work and they do not need to steal again. In addition, it is cheaper for the government, because keeping people in prison for long time cost a lot of money. However, some people say it is not fair that criminals get free education when poor people have to pay for it.

In conclusion, both views have advantages and disadvantages. In my opinion, I think that education programmes are more important, but also dangerous criminals must stay in prison for long time. The government should also build more modern prisons.`,
      annotations: [
        {
          quote: 'Nowadays, crime is a very serious problem in many countries all over the world.',
          note: 'A memorised, general opener that could start any crime essay. The introduction never gives an opinion, so the reader only learns the writer’s view in the last paragraph (Task Response 6).',
        },
        {
          quote: 'Firstly, there are many reasons why long prison sentences are a good idea.',
          note: 'Mechanical linking (Firstly / Also / Moreover / Secondly / In addition / However) at the start of almost every sentence: typical of Coherence & Cohesion Band 6.',
        },
        {
          quote:
            'in some countries the punishment for stealing is very hard and there is not much crimes there',
          note: 'A vague, unsupported example (which countries? does the punishment cause the low crime?). “very hard” should be “harsh” or “severe”, and “not much crimes” should be “little crime” (Lexical Resource 6).',
        },
        {
          quote: 'the victims and their families want that the criminal is punished',
          note: 'Wrong verb pattern: “want the criminal to be punished”. Together with “can not”, “more safe”, “have not any skills” and “cost a lot” (costs), errors like this keep GRA at 6.',
        },
        {
          quote: 'The government should also build more modern prisons.',
          note: 'A new idea in the conclusion that the essay never discussed. The opinion just before it is also blurred by “In my opinion, I think… but also…”.',
        },
      ],
    },
    {
      band: 7,
      text: `Crime is a concern in every society, and there is disagreement about how prisons should deal with offenders. While some people argue that long sentences are the most effective way to reduce crime, others believe that education and training programmes work better. In my opinion, although long sentences are necessary for violent criminals, rehabilitation is the better approach for most prisoners.

On the one hand, there are several reasons why people support long prison sentences. Firstly, they protect the public, because dangerous criminals cannot commit more crimes while they are locked up. Secondly, the threat of a long sentence may deter people from breaking the law in the first place. In addition, many victims feel that a long punishment is the only fair response to a serious crime, and they may lose trust in the justice system if offenders are released too early.

On the other hand, I believe that education and training programmes are more effective in the long term. The main reason is that most prisoners will eventually be released, and if they have no qualifications or skills, they are likely to return to crime. For example, a young man who learns to work as an electrician while he is in prison has a much better chance of finding a job afterwards. Furthermore, these programmes can help prisoners to develop discipline and self-respect. Finally, reducing reoffending saves money, as prisons are very expensive for taxpayers.

In conclusion, both long sentences and rehabilitation have a role to play in reducing crime. However, I believe that education and training should be the main focus for most offenders, because they address the reasons why people commit crimes, while long sentences should be kept for those who are a real danger to society.`,
      annotations: [
        {
          quote:
            'In my opinion, although long sentences are necessary for violent criminals, rehabilitation is the better approach for most prisoners.',
          note: 'A clear, qualified opinion in the introduction, kept to the end, and both views are discussed: all three parts of the question are answered (Task Response 7).',
        },
        {
          quote: 'Firstly, they protect the public',
          note: 'Three reasons in one paragraph, one sentence each. They are relevant, but none is examined; Band 8 would explain one reason fully and then evaluate it.',
        },
        {
          quote:
            'a young man who learns to work as an electrician while he is in prison has a much better chance of finding a job afterwards',
          note: 'A realistic, relevant example. It stops short of the final link (a job gives him a reason not to reoffend), and two more points follow straight after it, so the idea is extended rather than fully developed.',
        },
        {
          quote:
            'On the one hand, there are several reasons why people support long prison sentences.',
          note: 'Clear paragraphing with one topic per paragraph, but “On the one hand / Firstly / Secondly / In addition / On the other hand / Finally” is formulaic (Coherence & Cohesion 7).',
        },
        {
          quote: 'they may lose trust in the justice system if offenders are released too early',
          note: 'An accurate conditional with a passive. Most sentences are error-free, and collocations such as “deter people from breaking the law” are natural (GRA and Lexical Resource 7).',
        },
      ],
    },
    {
      band: 8.5,
      text: `How a society treats the people it has convicted reveals what it believes prison is for. Some argue that long sentences are the surest way to cut crime, while others maintain that education and vocational training achieve more. In my view, lengthy incarceration has a place for the small number of offenders who pose a lasting danger, but for the majority it is rehabilitation that offers the public genuine protection.

The appeal of long sentences is easy to understand. A burglar who is behind bars cannot break into homes, and the prospect of years in a cell may make a would-be offender think twice. Victims, too, often see a severe sentence as an acknowledgement of the harm they have suffered. Yet deterrence rests on the assumption that offenders weigh up consequences rationally, whereas many crimes are committed impulsively, under the influence of drugs or out of desperation. Incapacitation, meanwhile, lasts only as long as the sentence itself.

That limitation is precisely why rehabilitation matters. Almost every prisoner is eventually released, and someone who leaves with no qualifications, no work history and a criminal record faces a labour market with little room for them. Consider an inmate who spends the final two years of his sentence training as a welder and leaves with a recognised certificate and a contact at a local firm. He returns to his community with a reason to stay out of trouble, which a longer stay in an overcrowded cell would never have given him. Each such case means fewer future victims and less money spent on repeated trials and imprisonment.

In short, while long sentences remain justified for those who are genuinely dangerous, for most offenders they postpone reoffending rather than prevent it. Education and training tackle the circumstances that lead people back to crime, and for that reason I believe they do far more to make society safer.`,
      annotations: [
        {
          quote:
            'In my view, lengthy incarceration has a place for the small number of offenders who pose a lasting danger, but for the majority it is rehabilitation that offers the public genuine protection.',
          note: 'A nuanced position (who each approach suits) stated in the introduction, with a cleft sentence (“it is rehabilitation that…”) for emphasis. The conclusion restates exactly this view.',
        },
        {
          quote:
            'Yet deterrence rests on the assumption that offenders weigh up consequences rationally',
          note: 'The opposing view is presented fairly and then evaluated, not just listed: the essay keeps arguing for its position even in the paragraph about the other side (Task Response 8+).',
        },
        {
          quote: 'That limitation is precisely why rehabilitation matters.',
          note: '“That limitation” points back to the last sentence of the previous paragraph, so the two body paragraphs are joined by an idea, not by “On the other hand” (Coherence & Cohesion 8+).',
        },
        {
          quote:
            'training as a welder and leaves with a recognised certificate and a contact at a local firm',
          note: 'One specific, realistic example, followed through to its effect on crime (“fewer future victims”). No statistics are invented to support it.',
        },
        {
          quote: 'Incapacitation, meanwhile, lasts only as long as the sentence itself.',
          note: 'Precise, less common vocabulary used naturally (also “incarceration”, “vocational training”, “reoffending”, “postpone… rather than prevent”): Lexical Resource 8+.',
        },
      ],
    },
  ],
})
