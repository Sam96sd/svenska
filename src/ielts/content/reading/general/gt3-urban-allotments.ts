import { definePassage } from '../../define'

/** Original text. General Training Section 3 style: one long general-interest article. */
export default definePassage({
  id: 'gt3-urban-allotments',
  skill: 'reading',
  module: 'general',
  section: 'gt3',
  use: 'practice',
  title: 'Growing ground: the return of the city allotment',
  topic: 'Cities and community',
  minutes: 25,
  level: 3,
  texts: [
    {
      title: 'Growing ground: the return of the city allotment',
      paragraphs: [
        {
          label: 'A',
          text: 'On a Saturday morning in early spring, the Kelsall Road allotments in the northern city of Harrowby are busier than many of the shops nearby. Retired engineers dig alongside young parents, and a student from the local college is planting broad beans under the guidance of a neighbour who has kept the same plot for thirty-one years. Ten years ago, more than a third of the site’s sixty plots were empty and overgrown, and the city council was seriously considering selling the land to a housing developer. Today every plot is taken, and there are over two hundred names on the waiting list.',
        },
        {
          label: 'B',
          text: 'Kelsall Road is far from unusual. Allotments – small parcels of land rented, usually from a local authority, for growing fruit and vegetables – have a long history in Britain, but for much of the late twentieth century they were widely regarded as old-fashioned. Many sites were sold off, and those that remained were often tended by a dwindling and ageing group of enthusiasts. The renewed interest of the past two decades has taken many councils by surprise, and in some cities applicants now wait longer for a plot than it takes to complete a university degree.',
        },
        {
          label: 'C',
          text: 'The reasons usually given for this revival are easy to list: concern about the cost and origin of supermarket food, a wish to spend more time outdoors, and the popularity of television programmes about cooking and gardening. Yet when researchers at Northfield University interviewed plot-holders in four cities, food came surprisingly low on their list of motives. What most people valued above all was the chance to do something absorbing with their hands, away from screens and deadlines. Several described their plot as the only place where they were not “available” to anyone. This finding, in my view, deserves far more attention than it has so far received, because it suggests that the benefits of allotments are being measured in the wrong way.',
        },
        {
          label: 'D',
          text: 'Local authorities, under pressure to justify every square metre of public land, tend to judge allotments by how much food they produce. By this measure, they perform only modestly. A well-managed plot can supply a household with a useful proportion of its vegetables in summer, but few plot-holders come close to self-sufficiency, and many lose much of a crop to pests or to a single wet month. If allotments are seen simply as small and rather inefficient farms, it is hardly surprising that planners are tempted to replace them with homes or car parks.',
        },
        {
          label: 'E',
          text: 'The health benefits are harder to quantify but may be considerably greater. Doctors at two practices in Harrowby now refer patients recovering from depression or a long-term illness to a scheme that offers them a shared plot and weekly support from an experienced gardener. Participants are not expected to grow anything in particular; the aim is simply to get them outdoors and in regular contact with other people. Early evaluations have been encouraging, although the numbers involved are still too small for firm conclusions to be drawn, and the organisers are careful not to claim that gardening can replace conventional treatment.',
        },
        {
          label: 'F',
          text: 'There is also a social side that rarely appears in official reports. Allotment sites are among the few places in a modern city where people of very different ages, incomes and backgrounds meet regularly as equals, brought together by a shared interest rather than by work or family. Surplus produce is swapped or given away, tools are lent, and newcomers are taught – sometimes more thoroughly than they would like – the “right” way to prepare a seedbed. Disputes do arise, most often over untidy plots or the use of water during dry spells, but most sites settle them through their own elected committees, with little need for outside involvement.',
        },
        {
          label: 'G',
          text: 'None of this means that allotments are the answer for every city. Land is scarce, and a traditional plot of around 250 square metres is a generous amount of space to give a single household. Some councils have responded to long waiting lists by dividing plots in half, a change that has proved particularly popular with younger applicants, who tend to have less free time. Others have encouraged community gardens, in which a larger group shares one site and its harvest. Both approaches deserve support. What would be a mistake, I believe, is to go on treating these spaces as a luxury to be traded away whenever land values rise. Their real worth lies less in what they produce than in what they do for the people who work on them.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'match-info',
      instructions:
        'The text has seven paragraphs, A–G. Which paragraph contains the following information? You may use any letter more than once.',
      options: [
        { key: 'A', text: 'Paragraph A' },
        { key: 'B', text: 'Paragraph B' },
        { key: 'C', text: 'Paragraph C' },
        { key: 'D', text: 'Paragraph D' },
        { key: 'E', text: 'Paragraph E' },
        { key: 'F', text: 'Paragraph F' },
        { key: 'G', text: 'Paragraph G' },
      ],
      reuse: true,
      questions: [
        {
          n: 1,
          prompt: 'a change that has especially appealed to people with limited spare time',
          answer: 'G',
          location: {
            ref: 'G',
            quote:
              'a change that has proved particularly popular with younger applicants, who tend to have less free time',
          },
          explanation:
            'Dividing plots in half has been “particularly popular” with younger applicants “who tend to have less free time”. “Limited spare time” paraphrases “less free time”.',
        },
        {
          n: 2,
          prompt: 'examples of the practical ways in which plot-holders help each other',
          answer: 'F',
          location: {
            ref: 'F',
            quote:
              'Surplus produce is swapped or given away, tools are lent, and newcomers are taught',
          },
          explanation:
            'Paragraph F lists swapping and giving away produce, lending tools and teaching newcomers: all ways in which plot-holders help one another.',
          traps: {
            A: 'Paragraph A shows a neighbour guiding a student, but this is one scene, not a set of examples of mutual help.',
          },
        },
        {
          n: 3,
          prompt: 'an account of a particular site that was once at risk of disappearing',
          answer: 'A',
          location: {
            ref: 'A',
            quote:
              'the city council was seriously considering selling the land to a housing developer',
          },
          explanation:
            'Kelsall Road was half-empty ten years ago and the council was considering selling it for housing, i.e. a specific site that might have been lost.',
          traps: {
            D: 'Paragraph D says planners in general are tempted to replace allotments with homes or car parks, but it does not describe a particular site.',
            B: 'Paragraph B says many sites were sold off, but it refers to sites in general, not one particular site.',
          },
        },
        {
          n: 4,
          prompt:
            'a contrast between the reasons commonly suggested for an activity and the reasons participants themselves give',
          answer: 'C',
          location: {
            ref: 'C',
            quote: 'food came surprisingly low on their list of motives',
          },
          explanation:
            'Paragraph C first lists “the reasons usually given” for the revival, then reports that plot-holders themselves rated food low and valued absorbing work with their hands most.',
        },
        {
          n: 5,
          prompt: 'an explanation of why allotments may appear to give poor value',
          answer: 'D',
          location: {
            ref: 'D',
            quote:
              'tend to judge allotments by how much food they produce. By this measure, they perform only modestly',
          },
          explanation:
            'Paragraph D explains that when allotments are judged only by food output, they seem like “small and rather inefficient farms”, which is why planners want to replace them.',
          traps: {
            G: 'Paragraph G says a plot is a generous amount of land for one household, but it argues that allotments are worth keeping; the explanation of their apparent poor value is in D.',
          },
        },
      ],
    },
    {
      type: 'ynng',
      instructions:
        'Do the following statements agree with the views of the writer? Choose YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, NOT GIVEN if it is impossible to say what the writer thinks about this.',
      questions: [
        {
          n: 6,
          statement:
            'Television programmes have encouraged people who are not prepared to work hard to take on allotments.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'C',
            quote: 'the popularity of television programmes about cooking and gardening',
          },
          explanation:
            'Television programmes are mentioned only as one of the reasons usually given for the revival. The writer says nothing about whether they attract people who are unwilling to work hard.',
        },
        {
          n: 7,
          statement: 'The Northfield University findings have received the attention they deserve.',
          answer: 'NO',
          location: {
            ref: 'C',
            quote: 'deserves far more attention than it has so far received',
          },
          explanation:
            'The writer believes the finding deserves “far more attention than it has so far received”, which contradicts the statement.',
        },
        {
          n: 8,
          statement:
            'Most plot-holders grow enough to meet all of their household’s vegetable needs.',
          answer: 'NO',
          location: { ref: 'D', quote: 'few plot-holders come close to self-sufficiency' },
          explanation:
            'If few plot-holders even come close to self-sufficiency, most cannot meet all their vegetable needs. A plot provides only “a useful proportion” of a household’s vegetables, and only in summer.',
        },
        {
          n: 9,
          statement:
            'Disagreements on allotment sites are generally dealt with well without help from outside.',
          answer: 'YES',
          location: {
            ref: 'F',
            quote:
              'most sites settle them through their own elected committees, with little need for outside involvement',
          },
          explanation:
            '“Disagreements” paraphrases “disputes”; “generally” matches “most sites”; “without help from outside” matches “little need for outside involvement”.',
        },
        {
          n: 10,
          statement: 'Councils that divide plots into smaller units should be supported.',
          answer: 'YES',
          location: { ref: 'G', quote: 'Both approaches deserve support.' },
          explanation:
            '“Both approaches” refers to dividing plots in half and encouraging community gardens. The writer says both deserve support.',
        },
      ],
    },
    {
      type: 'completion',
      format: 'summary',
      instructions:
        'Complete the summary below. Choose NO MORE THAN TWO WORDS from the text for each answer.',
      wordLimit: { words: 2 },
      title: 'A health scheme in Harrowby',
      body: [
        {
          kind: 'text',
          text: 'Some family doctors in Harrowby now send patients who are getting over depression or a [[11]] to a scheme that provides a shared plot and weekly help. Rather than being asked to produce any particular crop, those taking part are mainly encouraged to spend time outside and to mix with [[12]]. The first results look promising, but because the [[13]] remain small, the organisers avoid presenting gardening as a substitute for standard medical care.',
        },
      ],
      questions: [
        {
          n: 11,
          answers: ['long-term illness'],
          location: {
            ref: 'E',
            quote: 'patients recovering from depression or a long-term illness',
          },
          explanation:
            '“Getting over” paraphrases “recovering from”. “Long-term” is hyphenated, so “long-term illness” counts as two words.',
        },
        {
          n: 12,
          answers: ['other people', 'people'],
          location: {
            ref: 'E',
            quote:
              'the aim is simply to get them outdoors and in regular contact with other people',
          },
          explanation:
            '“Mix with” paraphrases “in regular contact with”. The answer is “other people”.',
        },
        {
          n: 13,
          answers: ['numbers', 'numbers involved'],
          location: {
            ref: 'E',
            quote: 'the numbers involved are still too small for firm conclusions to be drawn',
          },
          explanation:
            '“Remain small” paraphrases “are still too small”; what is small is “the numbers involved”, i.e. how many people have taken part.',
          distractors: ['evaluations'],
        },
      ],
    },
  ],
})
