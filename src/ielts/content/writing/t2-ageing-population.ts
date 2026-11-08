import { defineWritingTask } from '../define'

/** Original task and model answers. */
export default defineWritingTask({
  id: 't2-ageing-population',
  skill: 'writing',
  use: 'practice',
  module: 'both',
  task: 2,
  type: 'adv-disadv',
  topic: 'Health',
  title: 'Living longer',
  prompt:
    'Thanks to improvements in healthcare and living conditions, people in many countries are now living much longer than they did in the past.\n\nDo the advantages of this development for society outweigh the disadvantages?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'How many parts does the question have? (Here: the advantages, the disadvantages AND a judgement on which outweighs the other.)',
    'Decide which side outweighs before you write, say so in the introduction, and keep the same judgement to the end.',
    'Body paragraph 1: the weaker side. Develop ONE main disadvantage (e.g. the cost of pensions and care), then explain why it can be managed.',
    'Body paragraph 2: the stronger side, built with PEEL — point, explanation, ONE specific, realistic example (a grandparent providing childcare, a retired nurse volunteering), link back to society.',
    'Keep the focus on society — families, public services, the economy — not on how individuals feel. Conclusion: restate your judgement, with no new ideas.',
  ],
  models: [
    {
      band: 6,
      text: `It is a fact that people today live longer than before because of the modern medicine and better food. This situation has both advantages and disadvantages for the society, which I will discuss in this essay.

To begin with, there are many advantages of living longer. Old people have a lot of experience and knowledge, so they can teach the young generation about life and work. Also, grandparents can take care of their grandchildren when the parents are working, this help the family to save money. In addition, many old people are still healthy and they can continue to work after sixty-five. For example, my grandfather is seventy-two years old and he still work in his shop every day, and the customers like to talk with him.

On the other hand, there are also some disadvantages. The most important problem is that the government must pay pensions for more years, and this is very expensive. Furthermore, old people need more medical care, so hospitals become very crowded and young people must wait a long time to see a doctor. Moreover, if old people continue working, there are less jobs for young people. Some old people also feel lonely because their children are busy and do not visit them, so they need more help from social workers.

In conclusion, people living longer has advantages and disadvantages, and both of them are important for the society. In my opinion, the advantages are a little more than the disadvantages, because old people help their families. The government should make a plan to solve these problems in the future.`,
      annotations: [
        {
          quote:
            'This situation has both advantages and disadvantages for the society, which I will discuss in this essay.',
          note: 'The question asks which side outweighs, but the introduction gives no judgement. It only appears in the last paragraph, so the position is unclear for most of the essay (Task Response 6).',
        },
        {
          quote: 'To begin with, there are many advantages of living longer.',
          note: 'Each body paragraph is a list of four points joined by Also / In addition / Furthermore / Moreover. Every idea is relevant but none is explained (Coherence & Cohesion 6).',
        },
        {
          quote: 'this help the family to save money',
          note: 'A comma splice (“…are working, this help…”) and a subject–verb agreement error (helps). “he still work” has the same problem; errors like these limit GRA to 6.',
        },
        {
          quote: 'there are less jobs for young people',
          note: '“fewer jobs” (countable). The claim is also simply asserted, with no explanation of why it would happen.',
        },
        {
          quote: 'the advantages are a little more than the disadvantages',
          note: 'An unnatural way to express the judgement (“slightly outweigh”), supported by a single short reason. The final sentence then adds a vague new idea about a government plan.',
        },
      ],
    },
    {
      band: 7,
      text: `Over the last century, life expectancy has risen considerably in most countries as a result of better healthcare, nutrition and living standards. Although this trend creates some serious challenges for society, particularly for governments, I believe that its advantages are greater than its disadvantages.

The main disadvantage of an ageing population is the financial pressure it puts on governments. As people live longer, they receive pensions for more years, while the number of working-age people paying taxes may be falling. In addition, elderly people usually need more medical treatment and long-term care, which increases the cost of public health services. If these problems are not managed carefully, governments may have to raise taxes or increase the retirement age, which would be unpopular.

However, longer lives also bring important benefits. Firstly, many older people remain healthy and active for years after they retire, so they can continue to contribute to society. For instance, a large number of retired people work as volunteers in hospitals, charities and schools, where they provide help that would otherwise be expensive. Secondly, grandparents often look after their grandchildren, which allows parents to go to work and reduces childcare costs for families. Thirdly, older workers have valuable experience and skills that they can pass on to younger colleagues if they choose to work for longer.

In conclusion, although an ageing population puts pressure on pensions and health services, these problems can be reduced through careful planning, such as gradually raising the retirement age. In my opinion, the contribution that older people make to their families and communities means that the advantages of longer life expectancy outweigh the disadvantages.`,
      annotations: [
        {
          quote: 'I believe that its advantages are greater than its disadvantages.',
          note: 'The judgement the question asks for is given in the introduction and repeated in the conclusion: a clear position throughout (Task Response 7).',
        },
        {
          quote:
            'The main disadvantage of an ageing population is the financial pressure it puts on governments.',
          note: 'A clear topic sentence, and the whole paragraph stays on this one idea, explaining it step by step. This is the best-developed paragraph in the essay.',
        },
        {
          quote: 'Firstly, many older people remain healthy and active',
          note: 'The advantages paragraph lists three benefits (Firstly / Secondly / Thirdly) in one or two sentences each. The side the writer supports is therefore less developed than the side they reject.',
        },
        {
          quote:
            'a large number of retired people work as volunteers in hospitals, charities and schools',
          note: 'A relevant but general example. A Band 8 example would be one specific, realistic case and would show what the volunteering actually gives society.',
        },
        {
          quote:
            'If these problems are not managed carefully, governments may have to raise taxes or increase the retirement age, which would be unpopular.',
          note: 'A complex sentence (conditional, passive and relative clause) used accurately, with topic collocations such as “life expectancy” and “long-term care” (GRA and Lexical Resource 7).',
        },
      ],
    },
    {
      band: 8.5,
      text: `Rising life expectancy is one of the quieter triumphs of modern medicine and public health, but it also obliges societies to rethink how they fund retirement and care. While the economic strain is real, I would argue that the gains of longer lives clearly outweigh the costs, provided that institutions adapt.

The most serious drawback is fiscal. Pension systems in many countries were designed when retirement typically lasted a decade or so; when it stretches to two or three decades, the arithmetic changes. A shrinking proportion of working-age taxpayers must support a growing number of retirees, many of whom will eventually need expensive long-term care. Left unaddressed, this imbalance could force painful choices between higher taxes and reduced services. It is, however, a problem of policy design rather than an inevitable crisis: linking the state pension age to life expectancy and encouraging flexible, part-time work for people in their sixties would ease the burden considerably.

Against this, longer lives represent an enormous reservoir of experience and goodwill. Older people already carry out much of the unpaid work on which communities quietly depend. A retired nurse who spends two mornings a week at a local hospice, or a grandmother who collects her grandchildren from school so that both parents can work full-time, is making a contribution that never appears in economic figures yet saves families and public services a great deal. Extended lifespans also mean that more children grow up knowing their grandparents, which strengthens the bonds between generations.

Overall, an ageing population poses a genuine financial challenge, but one that sensible reform can contain. The social and economic value that older citizens add, much of it invisible, makes increased longevity a development that societies should welcome rather than fear.`,
      annotations: [
        {
          quote:
            'While the economic strain is real, I would argue that the gains of longer lives clearly outweigh the costs, provided that institutions adapt.',
          note: 'A clear judgement with a concession and a condition (“provided that…”): a nuanced position that the whole essay then supports (Task Response 8+).',
        },
        {
          quote: 'It is, however, a problem of policy design rather than an inevitable crisis',
          note: 'The disadvantage is explained fully and then evaluated, with concrete remedies, so the paragraph about the weaker side still argues for the writer’s judgement.',
        },
        {
          quote:
            'Against this, longer lives represent an enormous reservoir of experience and goodwill.',
          note: 'A topic sentence that weighs the new paragraph against the previous one. “Against this” does the work of “On the other hand” but is tied to the argument (Coherence & Cohesion 8+).',
        },
        {
          quote: 'A retired nurse who spends two mornings a week at a local hospice',
          note: 'Specific, realistic examples rather than invented statistics, linked explicitly to society (“saves families and public services a great deal”).',
        },
        {
          quote: 'The most serious drawback is fiscal.',
          note: 'Precise, less common vocabulary used naturally (also “the arithmetic changes”, “imbalance”, “longevity”, “sensible reform can contain”): Lexical Resource 8+.',
        },
      ],
    },
  ],
})
