import { definePassage } from '../../define'

/** Original text. Matching headings drill with a detail trap and a word-reuse trap. */
export default definePassage({
  id: 'drill-headings',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'Headings drill: farming on the roof',
  topic: 'Food and cities',
  minutes: 8,
  level: 2,
  intro:
    'Read each paragraph before you look at the headings, and sum up its main idea in a few words of your own. Two headings are not needed: one matches only a detail, and one reuses words from the text with a different meaning.',
  texts: [
    {
      title: 'Farming on the roof',
      paragraphs: [
        {
          label: 'A',
          text: 'Twenty years ago, a vegetable garden on top of an office block would have been seen as an eccentric hobby. Today, hundreds of commercial rooftop farms operate in cities around the world, and new projects are announced almost every month. Planning authorities that once rejected such schemes now actively encourage them, and some cities even require large new buildings to include green roofs.',
        },
        {
          label: 'B',
          text: 'The first question any engineer asks is not what will grow, but what the roof can carry. Wet soil is extremely heavy, and many older buildings were never designed for such loads. Growers therefore often use lightweight substitutes, such as coconut fibre, or grow plants in water rather than soil. Even so, strengthening a roof can add months to a project.',
        },
        {
          label: 'C',
          text: 'Conditions on a roof are harsher than at ground level. Wind dries plants out quickly, and there is little shade in summer. For this reason, most rooftop farmers avoid tall crops such as maize, which can be blown over, and concentrate on low-growing salad leaves, herbs and strawberries. Bees kept in hives on some roofs also seem to thrive.',
        },
        {
          label: 'D',
          text: 'Fresh produce grown a few metres from the restaurants that buy it can be sold at a high price. Yet very few rooftop farms survive on vegetable sales alone. Most of the successful ones earn a large part of their income in other ways: running workshops, hosting private events, or charging building owners a fee for looking after their roofs.',
        },
        {
          label: 'E',
          text: 'Supporters argue that the value of these farms cannot be measured in vegetables. A planted roof absorbs rainwater that would otherwise flood drains, keeps the floors below it cooler in summer and gives office workers a green space to visit at lunchtime. For many city councils, it is these advantages, rather than the food, that justify their support.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'headings',
      instructions:
        'The text has five paragraphs, A–E. Choose the correct heading for each paragraph from the list of headings below.',
      headings: [
        { key: 'i', text: 'The rapid spread of an idea once seen as odd' },
        { key: 'ii', text: 'Keeping bees above the city streets' },
        { key: 'iii', text: 'Dealing with the problem of weight' },
        { key: 'iv', text: 'Choosing crops for difficult conditions' },
        { key: 'v', text: 'Restaurants on the roof' },
        { key: 'vi', text: 'Why selling vegetables is rarely enough' },
        { key: 'vii', text: 'Benefits that go beyond food' },
      ],
      questions: [
        {
          n: 1,
          para: 'A',
          answer: 'i',
          location: {
            ref: 'A',
            quote: 'Today, hundreds of commercial rooftop farms operate in cities around the world',
          },
          explanation:
            'The paragraph contrasts the past (“an eccentric hobby”) with today (hundreds of farms, new projects every month, official encouragement). “Once seen as odd” = “eccentric”; “rapid spread” sums up the rest.',
          traps: {
            vii: 'Green roofs are mentioned, but only as an example of how widespread the idea has become, not to explain their benefits.',
          },
        },
        {
          n: 2,
          para: 'B',
          answer: 'iii',
          location: { ref: 'B', quote: 'not what will grow, but what the roof can carry' },
          explanation:
            'Every sentence is about load: heavy soil, buildings not designed for it, lightweight substitutes, strengthening roofs. The controlling idea is signalled by “not X, but Y”: the paragraph is about Y.',
          traps: {
            iv: 'The paragraph opens with “what will grow” but immediately says this is NOT the first question. Growing plants in water is a way to reduce weight, not a choice of crop.',
          },
        },
        {
          n: 3,
          para: 'C',
          answer: 'iv',
          location: {
            ref: 'C',
            quote:
              'most rooftop farmers avoid tall crops such as maize, which can be blown over, and concentrate on low-growing salad leaves',
          },
          explanation:
            'The paragraph describes harsh conditions (wind, little shade) and then how farmers choose crops to suit them. “For this reason” links the two halves, and that link is the main idea.',
          traps: {
            ii: 'The detail trap. Bees are mentioned in the last sentence only, as an extra detail. A heading must cover the whole paragraph.',
          },
        },
        {
          n: 4,
          para: 'D',
          answer: 'vi',
          location: {
            ref: 'D',
            quote: 'Yet very few rooftop farms survive on vegetable sales alone',
          },
          explanation:
            'The first sentence is background; “Yet” introduces the real point, that vegetable sales alone rarely keep a farm going. The rest of the paragraph lists the other sources of income.',
          traps: {
            v: 'The word-reuse trap. “Restaurants” and “roofs” both appear, but the restaurants buy the produce; nothing suggests restaurants are on the roof.',
          },
        },
        {
          n: 5,
          para: 'E',
          answer: 'vii',
          location: {
            ref: 'E',
            quote: 'the value of these farms cannot be measured in vegetables',
          },
          explanation:
            'The paragraph lists advantages other than food (less flooding, cooler buildings, green space) and ends by saying these, “rather than the food”, matter most to councils.',
          traps: {
            i: 'Council support is mentioned, but the paragraph explains why councils support the farms, not how quickly the idea has spread.',
          },
        },
      ],
    },
  ],
})
