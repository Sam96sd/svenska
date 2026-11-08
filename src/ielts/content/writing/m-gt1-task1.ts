import { defineWritingTask } from '../define'

/** Original task and model answers. General Training mock test 1, Task 1: formal request. */
export default defineWritingTask({
  id: 'm-gt1-task1',
  skill: 'writing',
  use: 'mock',
  module: 'general',
  task: 1,
  type: 'request',
  tone: 'formal',
  topic: 'Community and local services',
  title: 'Asking the council about a community garden',
  prompt:
    'There is an area of unused land near your home which belongs to the local council. You and some of your neighbours would like to turn it into a community garden.\n\nWrite a letter to the local council. In your letter',
  bullets: [
    'describe the piece of land and what it is like at the moment',
    'explain how a community garden would benefit local residents',
    'ask for permission and for information about what you need to do next',
  ],
  planHints: [
    'Who is the reader? An official at the council whose name you don’t know → formal: “Dear Sir or Madam … Yours faithfully”.',
    'Paragraph 1: the purpose in one sentence: you are writing to ask for permission to use the land as a community garden.',
    'Bullet 1: say exactly where the land is and describe its present state (overgrown, full of litter, fenced off) with invented details.',
    'Bullet 2: two concrete benefits for residents, each with a reason. Bullet 3: a polite request for permission plus one or two specific questions (forms, fees, insurance).',
    'Don’t write any addresses. Aim for 160–190 words.',
  ],
  models: [
    {
      band: 6,
      text: `Dear Sir or Madam,

I am writing this letter for asking about the empty land in Elm Road which is near my house. Me and my neighbours want to make a garden there.

The land is between the bus stop and the car park of the supermarket. Now it is not used for many years and it is very dirty. There are a lot of rubbish and long grass everywhere, and sometimes young people sit there in the night and make noise.

I think a community garden will be very good for the residents. People can grow vegetables and fruits and they can meet each other. Also the area will be more beautiful and more safe.

So we want your permission to use this land. Can you tell me what we must do? Do we need to pay some money for it? Please answer me as soon as possible because we want to start in the spring.

Thank you very much for your help.

Best wishes,
Karim Nasser`,
      annotations: [
        {
          quote: 'Best wishes,',
          note: '“Dear Sir or Madam” must be paired with “Yours faithfully”. “Best wishes” is for friends, so the opening and closing don’t match, and this affects Task Achievement.',
        },
        {
          quote: 'I am writing this letter for asking about',
          note: 'The purpose is clear, but “for asking” (to ask), “Me and my neighbours”, “There are a lot of rubbish” and “it is not used for many years” (it has not been used) are typical Band 6 errors in GRA.',
        },
        {
          quote: 'People can grow vegetables and fruits and they can meet each other.',
          note: 'Bullet 2 is covered, but the benefits are only listed. There is no reason why residents need a garden (for example, that they live in flats), so the point stays underdeveloped.',
        },
        {
          quote: 'Please answer me as soon as possible',
          note: 'Too direct for a request to a council. A polite indirect form (“I would be grateful if you could…”) would keep the formal tone consistent.',
        },
      ],
    },
    {
      band: 7,
      text: `Dear Sir or Madam,

I am writing on behalf of a group of residents in Elm Road to ask whether we could use a piece of council land near our homes as a community garden.

The land is a small rectangular plot between the bus stop and the supermarket car park. As far as I know, it has been empty for at least five years. At the moment it is covered in long grass and weeds, and people often leave rubbish there, so it looks neglected.

We believe a garden would benefit the area in several ways. Firstly, residents, many of whom live in flats without gardens, could grow their own vegetables. Secondly, it would give neighbours a place to meet and get to know each other. It would also make the street look much more attractive.

I would be grateful if you could tell me whether the council would give us permission to use the land. Could you also let me know what forms we need to complete and whether there is a fee?

I look forward to hearing from you.

Yours faithfully,
Karim Nasser`,
      annotations: [
        {
          quote:
            'to ask whether we could use a piece of council land near our homes as a community garden',
          note: 'The purpose is clear in the first sentence, and the indirect question (“whether we could”) is polite and accurate. Opening and closing match.',
        },
        {
          quote: 'so it looks neglected',
          note: 'Bullet 1 is covered with a clear location and description, and “neglected” is a precise word choice (LR 7).',
        },
        {
          quote:
            'Firstly, residents, many of whom live in flats without gardens, could grow their own vegetables.',
          note: 'An accurate non-defining relative clause gives a reason for the benefit. However, the three benefits are listed with Firstly / Secondly / also and each gets one sentence, so bullet 2 is less developed than at Band 8.',
        },
        {
          quote:
            'Could you also let me know what forms we need to complete and whether there is a fee?',
          note: 'Bullet 3 is fully addressed with two clear, polite questions, and the formal register is kept throughout (Task Achievement 7).',
        },
      ],
    },
    {
      band: 8.5,
      text: `Dear Sir or Madam,

I am writing on behalf of Elm Road residents to request permission to turn the disused plot of council land at the end of our street into a community garden.

The plot, which lies between the bus stop and the Fairway car park, has been fenced off and untouched for as long as anyone can remember. It is now thick with brambles and nettles, and it has become a dumping ground for everything from shopping trolleys to old mattresses.

A garden would transform it into something the whole street could share. Since most of us live in flats with no outdoor space, it would give families somewhere to grow vegetables and children a chance to learn where food comes from. Just as importantly, it would bring together neighbours who barely know each other’s names.

Twelve households have already agreed to share the work of clearing and maintaining the site. I would be grateful if you could confirm whether the council would consider our request and, if so, explain the application process, including whether we would need our own insurance.

I look forward to hearing from you.

Yours faithfully,
Karim Nasser`,
      annotations: [
        {
          quote:
            'to request permission to turn the disused plot of council land at the end of our street into a community garden',
          note: 'The purpose is stated precisely in the first sentence, with formal, exact vocabulary (“disused plot”, “request permission”).',
        },
        {
          quote:
            'it has become a dumping ground for everything from shopping trolleys to old mattresses',
          note: 'Vivid, specific detail makes bullet 1 fully developed. “Dumping ground” and “thick with brambles and nettles” show precise, natural collocation (LR 8+).',
        },
        {
          quote: 'Since most of us live in flats with no outdoor space',
          note: 'Each benefit comes with the reason it matters, and “Just as importantly” links the second benefit naturally rather than mechanically (CC 8+).',
        },
        {
          quote:
            'Twelve households have already agreed to share the work of clearing and maintaining the site.',
          note: 'The writer answers the council’s likely concern (who will do the work?) before asking, which makes the request more persuasive. This is what full Task Achievement looks like.',
        },
        {
          quote: 'including whether we would need our own insurance',
          note: 'Bullet 3 ends with a specific, realistic question inside an accurate complex sentence with a conditional (“and, if so, explain…”): GRA 8+.',
        },
      ],
    },
  ],
})
