import { definePassage } from '../../define'

/** Original text. Drill for lesson r-match-info. */
export default definePassage({
  id: 'drill-match-info',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'Borrowing instead of buying',
  topic: 'Community and environment',
  minutes: 7,
  level: 2,
  texts: [
    {
      title: 'Borrowing instead of buying: the tool library',
      paragraphs: [
        {
          label: 'A',
          text: 'In a converted shop on a quiet street in the market town of Halbury, a woman returns a floor sander and leaves with a ladder and a pressure washer. This is the Halbury Tool Library, which lends household and garden equipment to its 600 members. Members pay an annual subscription, the amount of which they choose themselves according to what they can afford, and may borrow up to three items a week.',
        },
        {
          label: 'B',
          text: 'The founders say the idea came from a simple observation: most households own equipment that they hardly ever use. A hedge trimmer, for instance, may sit in a garage for fifty weeks of the year. Sharing such items, they argue, saves members money and storage space, and it also reduces the demand for new products made from metal and plastic, which require large amounts of energy to manufacture.',
        },
        {
          label: 'C',
          text: 'Unlike a hire shop, which charges by the day and assumes that customers already know what they need, the library offers advice. Its volunteers, many of them retired builders and electricians, explain which tool suits a particular job and how to use it safely. In this respect, the library has more in common with a traditional book library, where staff might recommend a title, than with a commercial business.',
        },
        {
          label: 'D',
          text: 'Not everything has gone smoothly. In the first year, roughly one item in twenty came back damaged, and several expensive machines were never returned at all. The library responded by introducing a short safety session for all new members and a refundable deposit for anything worth more than £100. Since then, losses have fallen sharply.',
        },
        {
          label: 'E',
          text: 'The model is now spreading. Groups in four other towns have asked for help in setting up their own schemes, and the founders have written a free guide that covers insurance, record-keeping and recruiting volunteers. Their long-term aim is to connect the libraries, so that an unusual item held in one town could be reserved by a member in another.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'match-info',
      instructions:
        'The text has five paragraphs, A–E. Which paragraph contains the following information? You may use any letter more than once.',
      options: [
        { key: 'A', text: 'Paragraph A' },
        { key: 'B', text: 'Paragraph B' },
        { key: 'C', text: 'Paragraph C' },
        { key: 'D', text: 'Paragraph D' },
        { key: 'E', text: 'Paragraph E' },
      ],
      reuse: true,
      questions: [
        {
          n: 1,
          prompt: 'a description of steps taken to solve a problem',
          answer: 'D',
          location: {
            ref: 'D',
            quote:
              'The library responded by introducing a short safety session for all new members',
          },
          explanation:
            'Information type: a solution. D first names the problem (damaged and missing items), then “responded by introducing” a safety session and a deposit — the steps taken. E also mentions help and a guide, but no problem is being solved there.',
        },
        {
          n: 2,
          prompt: 'a reference to an environmental advantage',
          answer: 'B',
          location: {
            ref: 'B',
            quote: 'reduces the demand for new products made from metal and plastic',
          },
          explanation:
            'Fewer new metal and plastic products that “require large amounts of energy to manufacture” is a benefit to the environment. The word “environment” never appears — you have to recognise the type of information.',
        },
        {
          n: 3,
          prompt: 'information about the working background of some advisers',
          answer: 'C',
          location: { ref: 'C', quote: 'many of them retired builders and electricians' },
          explanation:
            '“Advisers” = the volunteers who “explain which tool suits a particular job”; their working background = “retired builders and electricians”. The detail sits in the middle of C, not in its first sentence.',
        },
        {
          n: 4,
          prompt: 'an explanation of how the cost of membership is decided',
          answer: 'A',
          location: {
            ref: 'A',
            quote: 'the amount of which they choose themselves according to what they can afford',
          },
          explanation:
            'The subscription is set by each member “according to what they can afford”. D also mentions money (a £100 deposit), but a deposit on expensive items is not the cost of membership.',
        },
        {
          n: 5,
          prompt: 'a plan to allow equipment to be shared between different places',
          answer: 'E',
          location: {
            ref: 'E',
            quote:
              'so that an unusual item held in one town could be reserved by a member in another',
          },
          explanation:
            '“Long-term aim” signals a plan; an item “held in one town” and “reserved by a member in another” = shared between different places.',
        },
        {
          n: 6,
          prompt: 'an example of an item that is rarely used',
          answer: 'B',
          location: {
            ref: 'B',
            quote: 'A hedge trimmer, for instance, may sit in a garage for fifty weeks of the year',
          },
          explanation:
            '“For instance” signals the example, and sitting unused for fifty weeks = rarely used. A names several items (a sander, a ladder, a pressure washer), but only as things being borrowed — it says nothing about how often they are used. B is the second answer for this paragraph, which is why reuse is allowed.',
        },
        {
          n: 7,
          prompt: 'a contrast between the library and a profit-making organisation',
          answer: 'C',
          location: { ref: 'C', quote: 'Unlike a hire shop, which charges by the day' },
          explanation:
            '“Unlike” signals the contrast; a hire shop that “charges by the day” — and later “a commercial business” — is the profit-making organisation. C also compares the library with a book library, which is a similarity, not the contrast asked for here.',
        },
      ],
    },
  ],
})
