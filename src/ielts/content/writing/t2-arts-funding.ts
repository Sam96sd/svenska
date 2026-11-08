import { defineWritingTask } from '../define'

/** Original task and model answers. */
export default defineWritingTask({
  id: 't2-arts-funding',
  skill: 'writing',
  use: 'practice',
  module: 'both',
  task: 2,
  type: 'opinion',
  topic: 'Government spending',
  title: 'Public money for the arts',
  prompt:
    'Some people believe that governments should not spend public money on the arts, such as music, theatre and painting, when that money could be used for healthcare and education instead.\n\nTo what extent do you agree or disagree?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.\n\nWrite at least 250 words.',
  planHints: [
    'How many parts does the question have? (Here: one — your opinion. But notice the hidden comparison: you must weigh the arts AGAINST healthcare and education, not just praise the arts.)',
    'Decide your position before you write: agree, disagree, or partly agree (e.g. “public services first, but not at the cost of all arts funding”). State it in the introduction and keep it to the end.',
    'Body paragraph 1: the strongest argument for the other side (limited money, urgent needs), and why it does not settle the question.',
    'Body paragraph 2: your main reason, developed with PEEL and ONE specific, realistic example (a youth orchestra, a regional theatre) — no invented figures.',
    'Conclusion: restate your position in different words. Don’t introduce a new argument.',
  ],
  models: [
    {
      band: 6,
      text: `Nowadays, many governments have a limited budget and they must decide how to spend the money. Some people think that the government should not give money to the arts and they should spend it on hospitals and schools. I agree with this opinion to some extent.

To begin with, healthcare and education are the most important things for people. If people are sick, they need a good hospital and doctors, and if children do not go to a good school they cannot have a good future. In many countries the hospitals do not have enough beds and the patients must wait a long time for an operation. So it is not fair to spend money for paintings and concerts when people are waiting in the hospital. Moreover, the arts are not necessary for life, people can live without going to the theatre.

However, the arts are also very important for the society. Music and painting make people happy and relax after work. Also, the arts are part of the culture and history of a country, and if the government do not support them, they will disappear. In addition, museums and festivals bring many tourists to the country, and the tourists spend money in hotels and restaurants. For example, in my city there is a big music festival every summer and a lot of people come from other countries.

In conclusion, I think that healthcare and education is more important, but the government should also give money to the arts because they are important for culture and tourism. Both of them are necessary for a good country.`,
      annotations: [
        {
          quote: 'I agree with this opinion to some extent.',
          note: 'The position is too vague: the reader cannot tell how far the writer agrees, and the essay then argues both ways. Task Response 6.',
        },
        {
          quote:
            'Moreover, the arts are not necessary for life, people can live without going to the theatre.',
          note: 'A comma splice. The claim also contradicts the next paragraph (“the arts are also very important”), so the position becomes unclear.',
        },
        {
          quote: 'In addition, museums and festivals bring many tourists to the country',
          note: 'Three reasons are listed with mechanical linking (However / Also / In addition), and the festival example only says people come, without showing why this justifies public money.',
        },
        {
          quote: 'if the government do not support them',
          note: 'Agreement error (the government does not). With “healthcare and education is”, “spend money for” and “make people happy and relax”, errors like this keep GRA at 6.',
        },
        {
          quote: 'Both of them are necessary for a good country.',
          note: 'A vague, general final sentence. A conclusion should restate a clear position, not end on a statement that could support either side.',
        },
      ],
    },
    {
      band: 7,
      text: `Governments have limited budgets, and some people argue that money spent on the arts would be better used to improve hospitals and schools. While I agree that healthcare and education should be the priority, I disagree that funding for the arts should be stopped completely.

It is easy to understand why many people hold this view. Public services such as hospitals and schools affect almost everyone, and in many countries they are under serious pressure. When patients have to wait months for treatment or classes are overcrowded, spending public money on an art gallery or an opera house can seem difficult to justify. In addition, many people never visit theatres or museums, so they may feel that their taxes are being used for the enjoyment of a small, often wealthy, group.

However, I believe there are strong reasons for governments to continue supporting the arts. Firstly, the arts bring important economic benefits. Theatres, festivals and museums attract visitors from other regions and countries, who spend money in local hotels, restaurants and shops. For example, a city that hosts a well-known film or music festival can become famous internationally, and this creates jobs for many local people. Secondly, the arts help to preserve a nation's identity. Traditional music, dance and crafts are part of a country's heritage, and if they are not supported, they may gradually be forgotten. Finally, cultural activities can improve people's quality of life and mental health, which may even reduce pressure on the health service in the long term.

In conclusion, although healthcare and education must come first, I do not believe that this means the arts should receive no public money. A modest but stable level of funding brings cultural and economic benefits that are worth the cost.`,
      annotations: [
        {
          quote:
            'While I agree that healthcare and education should be the priority, I disagree that funding for the arts should be stopped completely.',
          note: 'A clear partial-agreement position in the introduction, repeated in the conclusion: Task Response 7.',
        },
        {
          quote: 'It is easy to understand why many people hold this view.',
          note: 'A concession paragraph introduced with a reference to the question (“this view”): well organised, with a clear central topic.',
        },
        {
          quote: 'Firstly, the arts bring important economic benefits.',
          note: 'Three reasons (economy, identity, health) are listed in one paragraph, so each gets only two or three sentences. Band 8 would develop one reason fully.',
        },
        {
          quote:
            'a city that hosts a well-known film or music festival can become famous internationally',
          note: 'A relevant but general example; it does not show why the festival needs public money rather than private sponsors.',
        },
        {
          quote: 'which may even reduce pressure on the health service in the long term',
          note: 'A good idea that links the arts back to healthcare, but it comes in the last sentence and is not explained. Accurate relative clause (GRA 7).',
        },
      ],
    },
    {
      band: 8.5,
      text: `When hospital waiting lists lengthen and school buildings fall into disrepair, public spending on orchestras and galleries can look like an indulgence. I agree that essential services must take precedence in any budget, but I reject the idea that this justifies withdrawing public support for the arts altogether, since doing so would save relatively little while costing a great deal.

The case for redirecting arts funding rests on an understandable sense of urgency. A patient waiting in pain for surgery, or a child taught in an overcrowded classroom, has a more immediate claim on public money than a theatre audience, and politicians are right to be judged on how well they meet such basic needs. Yet the argument assumes that the two compete on equal terms. In most countries, arts budgets are modest beside what is spent on health or schooling, so eliminating them would barely register in those larger systems, while it would be devastating for the institutions that depend on them.

What would be lost is not merely entertainment for the affluent; arguably, it is the opposite. Without subsidy, the arts drift towards those who can afford full-price tickets, whereas public funding is what allows a regional theatre to offer cheap matinées to local schools, or a youth orchestra to lend instruments to children whose parents could never buy them. For a teenager in a declining industrial town, such a scheme may be the only route into a creative career, or simply the first experience of being good at something difficult. In this sense, well-targeted arts spending complements education rather than competing with it.

In conclusion, while health and education should rightly absorb the bulk of public resources, abolishing arts funding would yield negligible savings and deprive the least advantaged of cultural opportunities. A modest, carefully directed commitment to the arts is therefore entirely defensible.`,
      annotations: [
        {
          quote:
            'I agree that essential services must take precedence in any budget, but I reject the idea that this justifies withdrawing public support for the arts altogether',
          note: 'A nuanced position, clear from the introduction: the writer accepts the priority of public services but disagrees with the conclusion drawn from it.',
        },
        {
          quote: 'Yet the argument assumes that the two compete on equal terms.',
          note: 'The opposing view is treated fairly and then challenged at its weakest point. This weighing, not a list of points, is what Task Response 8+ looks like.',
        },
        {
          quote:
            'a youth orchestra to lend instruments to children whose parents could never buy them',
          note: 'Specific, realistic examples (also the regional theatre) that are explained and linked to the argument, with no invented statistics.',
        },
        {
          quote: 'What would be lost is not merely entertainment for the affluent',
          note: 'A wh-cleft topic sentence that picks up the previous paragraph’s point: cohesion through ideas, not “Moreover”. It also shows grammatical range.',
        },
        {
          quote: 'well-targeted arts spending complements education rather than competing with it',
          note: 'This sentence answers the comparison in the prompt directly. Precise vocabulary throughout (“take precedence”, “indulgence”, “yield negligible savings”): Lexical Resource 8+.',
        },
      ],
    },
  ],
})
