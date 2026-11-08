import { definePassage } from '../../define'

/** Original text. Academic Passage 1 style: descriptive popular-science article. */
export default definePassage({
  id: 'ac-urban-heat-islands',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'practice',
  title: 'Why cities run hot',
  topic: 'Environment',
  minutes: 20,
  level: 1,
  texts: [
    {
      title: 'Why cities run hot',
      paragraphs: [
        {
          label: 'A',
          text: 'On a calm, clear summer evening, a cyclist riding from the edge of a large city into its centre may notice the air growing steadily warmer, even though the sun has already set. The difference is not imagined. Meteorologists have known for well over a century that built-up areas tend to be warmer than the countryside around them, and the phenomenon now has a name: the urban heat island. In some cities the gap is modest, often less than a single degree Celsius; in others, on particularly still nights, it can exceed eight degrees.',
        },
        {
          label: 'B',
          text: 'The main cause lies in the materials from which cities are made. Asphalt, concrete, brick and stone absorb a large proportion of the sunlight that falls on them and store it as heat. Fields and woodland, by contrast, reflect more of the incoming energy and hold on to less of it. During the day the contrast between town and country can be surprisingly small, because both are being heated directly by the sun. It is after sunset that the difference becomes most pronounced: the countryside loses its warmth quickly into the night sky, while roads and walls go on releasing the energy they have accumulated for many hours, keeping the surrounding air warm well into the early morning.',
        },
        {
          label: 'C',
          text: 'Several other factors reinforce this effect. Cities have far less vegetation than rural areas, and therefore lack one of nature’s most effective cooling mechanisms: the evaporation of water from leaves and soil, which consumes energy that would otherwise raise the temperature of the air. Tall buildings set close together create what climatologists call “urban canyons”, in which heat radiated from one surface is simply absorbed by another rather than escaping upwards. Finally, cities generate heat of their own. Vehicle engines, industrial processes and, increasingly, air-conditioning units all release warmth into the streets, so that the very machines installed to cool interiors make the outdoor environment hotter.',
        },
        {
          label: 'D',
          text: 'These extra degrees are more than a curiosity. During heatwaves, high temperatures place considerable strain on the human body, and the risk is greatest for elderly people, young children and those with heart or lung conditions. Doctors point out that warm nights are particularly harmful, since the body depends on cooler hours to recover from the stresses of the day. An analysis of hospital records from one Mediterranean port city, for example, found that emergency admissions rose noticeably whenever night-time temperatures in the centre stayed above 24°C, whereas comparable nights in nearby rural districts produced no such rise.',
        },
        {
          label: 'E',
          text: 'Nor is the heat shared equally. Detailed measurements show that temperatures can vary considerably from one neighbourhood to the next, sometimes by several degrees within a single kilometre. In one recent project, volunteers fitted inexpensive temperature sensors to their bicycles and rode set routes across their city at the same hour on several summer evenings. The resulting map revealed that the warmest districts were not necessarily the most central, but those with the fewest trees and the highest proportion of paved surfaces. These were frequently lower-income areas, where residents were also less likely to own air conditioners or to have access to a garden, meaning that the people most exposed to heat often had the fewest means of escaping it.',
        },
        {
          label: 'F',
          text: 'One of the simplest responses is to change the colour of the city’s surfaces. Roofs coated with white or specially formulated reflective paint can bounce back much of the sunlight that a dark roof would absorb, lowering the temperature of the roof itself by twenty degrees or more on a sunny afternoon and reducing the heat that passes into the building below. Such “cool roofs” are relatively cheap and can be applied to existing buildings. They are not, however, a universal remedy. In cities with cold winters, a reflective roof also rejects welcome solar warmth in January, which may increase heating bills, and highly reflective pavements at street level can produce uncomfortable glare for pedestrians.',
        },
        {
          label: 'G',
          text: 'Vegetation offers a different kind of relief. A mature tree shades the ground beneath it and, through the moisture released by its leaves, cools the air around it; on a hot day the temperature beneath a large canopy may be several degrees lower than in an open car park nearby. Parks have a similar influence, and the cooler air they produce can extend into surrounding streets for a distance of a few hundred metres. Green roofs, planted with grasses or low-growing shrubs, combine some of these benefits with improved insulation. Trees take years to reach their full size, and they need regular watering while young, but planners increasingly regard them as among the most cost-effective investments a city can make.',
        },
        {
          label: 'H',
          text: 'No single measure is likely to be sufficient on its own. Researchers increasingly argue that cities should combine reflective materials, planting and changes to building design, and that they should target the districts where the need is greatest rather than spreading resources evenly. As global temperatures rise, the urban heat island will add to the warming that cities already face, and the question of how to keep them habitable during the hottest months is likely to become one of the central challenges of urban planning.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'headings',
      instructions:
        'The reading passage has eight paragraphs, A–H. Choose the correct heading for paragraphs B–G from the list of headings below. There are more headings than paragraphs, so you will not use them all.',
      headings: [
        { key: 'i', text: 'A new method of collecting temperature data' },
        { key: 'ii', text: 'Shade and moisture as natural coolers' },
        { key: 'iii', text: 'The role of construction materials in trapping heat' },
        { key: 'iv', text: 'Why tree-planting schemes rarely succeed' },
        { key: 'v', text: 'An unequal burden across the city' },
        { key: 'vi', text: 'A low-cost measure that does not suit every climate' },
        { key: 'vii', text: 'A danger to health, particularly at night' },
        { key: 'viii', text: 'The rising cost of keeping buildings cool' },
        { key: 'ix', text: 'Additional factors that intensify the warming' },
      ],
      questions: [
        {
          n: 1,
          para: 'B',
          answer: 'iii',
          location: {
            ref: 'B',
            quote: 'The main cause lies in the materials from which cities are made.',
          },
          explanation:
            'The topic sentence names the main cause – the materials cities are built from – and the rest of the paragraph explains how asphalt, concrete and brick absorb and store the sun’s energy, then release it after dark. “Construction materials” paraphrases “materials from which cities are made”.',
          traps: {
            ix: 'Paragraph B gives the MAIN cause. The “additional factors” (vegetation, urban canyons, waste heat) only begin in paragraph C, which opens with “Several other factors”.',
            vii: 'B mentions night-time, but only to explain when the temperature difference is greatest; it says nothing about health.',
          },
        },
        {
          n: 2,
          para: 'C',
          answer: 'ix',
          location: { ref: 'C', quote: 'Several other factors reinforce this effect.' },
          explanation:
            '“Several other factors reinforce this effect” is paraphrased by “additional factors that intensify the warming”. The paragraph then lists three: missing vegetation, urban canyons and heat from engines and air conditioners.',
          traps: {
            viii: 'Air conditioners are mentioned, but as a SOURCE of outdoor heat, not in terms of what they cost to run. Nothing in C is about money.',
            iii: 'Building materials were the subject of B. C deals with causes other than materials.',
          },
        },
        {
          n: 3,
          para: 'D',
          answer: 'vii',
          location: {
            ref: 'D',
            quote: 'Doctors point out that warm nights are particularly harmful',
          },
          explanation:
            'The whole paragraph is about the health effects of urban heat, with special emphasis on warm nights (the body cannot recover) and the hospital study of night-time temperatures.',
          traps: {
            v: 'D says some groups (the elderly, young children) are most at risk, which looks like “unequal”. But the unequal distribution of heat ACROSS DISTRICTS is the main idea of E, not D.',
          },
        },
        {
          n: 4,
          para: 'E',
          answer: 'v',
          location: { ref: 'E', quote: 'Nor is the heat shared equally.' },
          explanation:
            'The first sentence states the main idea, and the paragraph shows that some districts are hotter than others and that poorer residents, who are most exposed, have the fewest ways to escape the heat. “Unequal burden” paraphrases “not shared equally”.',
          traps: {
            i: 'The volunteers with bicycle sensors are only the example used to support the main idea. Headings summarise the whole paragraph, not one detail.',
          },
        },
        {
          n: 5,
          para: 'F',
          answer: 'vi',
          location: {
            ref: 'F',
            quote:
              'Such “cool roofs” are relatively cheap and can be applied to existing buildings. They are not, however, a universal remedy.',
          },
          explanation:
            '“Relatively cheap” = “low-cost”; “not a universal remedy” and the problem in “cities with cold winters” = “does not suit every climate”. The heading covers both halves of the paragraph.',
          traps: {
            viii: 'F mentions higher heating bills, so “cost” is tempting. But the paragraph is about a cheap measure and its drawbacks; it is not about the rising cost of cooling buildings.',
          },
        },
        {
          n: 6,
          para: 'G',
          answer: 'ii',
          location: {
            ref: 'G',
            quote:
              'A mature tree shades the ground beneath it and, through the moisture released by its leaves, cools the air around it',
          },
          explanation:
            'G explains how trees, parks and green roofs cool the city through shade and the moisture released by leaves. “Natural coolers” paraphrases “vegetation offers a different kind of relief”.',
          traps: {
            iv: 'G admits that trees take years to grow and need watering, but it does not say tree-planting schemes fail; in fact planners regard trees as “among the most cost-effective investments a city can make”.',
          },
        },
      ],
    },
    {
      type: 'tfng',
      instructions:
        'Do the following statements agree with the information given in the reading passage? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.',
      questions: [
        {
          n: 7,
          statement:
            'In every city, the urban heat island effect raises temperatures by at least two degrees.',
          answer: 'FALSE',
          location: {
            ref: 'A',
            quote: 'In some cities the gap is modest, often less than a single degree Celsius',
          },
          explanation:
            'The qualifiers “every” and “at least” are the trap. The text says that in some cities the gap is “often less than a single degree”, which cannot be true at the same time as “at least two degrees in every city”. The figure of eight degrees applies only to some cities on still nights.',
        },
        {
          n: 8,
          statement:
            'Natural landscapes reflect a larger proportion of sunlight than the materials used in cities.',
          answer: 'TRUE',
          location: {
            ref: 'B',
            quote:
              'Fields and woodland, by contrast, reflect more of the incoming energy and hold on to less of it.',
          },
          explanation:
            '“Natural landscapes” paraphrases “fields and woodland”, and “by contrast, reflect more” compares them with asphalt, concrete, brick and stone, which absorb a large proportion of the sunlight.',
        },
        {
          n: 9,
          statement:
            'In most cities, air-conditioning units now produce more waste heat than vehicles do.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'C',
            quote:
              'Vehicle engines, industrial processes and, increasingly, air-conditioning units all release warmth into the streets',
          },
          explanation:
            'The text lists vehicles and air conditioners as sources of heat and says air conditioners are becoming more important (“increasingly”), but it never compares how much heat each produces. “Increasingly” is not the same as “more than vehicles”.',
        },
        {
          n: 10,
          statement:
            'In the Mediterranean study, warm nights led to a similar increase in emergency admissions in nearby rural areas.',
          answer: 'FALSE',
          location: {
            ref: 'D',
            quote: 'whereas comparable nights in nearby rural districts produced no such rise',
          },
          explanation:
            'The text says the rural districts showed “no such rise”, which directly contradicts “a similar increase”.',
        },
        {
          n: 11,
          statement:
            'The bicycle project found that people living in the hottest districts had higher rates of heart disease.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'E',
            quote:
              'where residents were also less likely to own air conditioners or to have access to a garden',
          },
          explanation:
            'The project measured temperatures and linked the hottest districts with fewer trees and lower incomes. Heart conditions are mentioned in paragraph D as a general risk factor, but nothing is said about rates of heart disease in these districts.',
        },
      ],
    },
    {
      type: 'completion',
      format: 'sentence',
      instructions:
        'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
      wordLimit: { words: 2, number: false },
      body: [
        {
          kind: 'bullets',
          items: [
            'In places with cold winters, reflective roofs may lead to higher [[12]].',
            'The cooler air produced by a park can spread a few hundred metres into the [[13]].',
            'Rather than dividing resources evenly, cities should concentrate their efforts on the [[14]] that are in greatest need.',
          ],
        },
      ],
      questions: [
        {
          n: 12,
          answers: ['heating bills'],
          location: { ref: 'F', quote: 'which may increase heating bills' },
          explanation:
            'A reflective roof rejects “welcome solar warmth in January”, so buildings need more heating. “Lead to higher” paraphrases “increase”. “Glare” is a different drawback and does not fit “higher”.',
          distractors: ['glare', 'solar warmth'],
        },
        {
          n: 13,
          answers: ['surrounding streets'],
          location: {
            ref: 'G',
            quote:
              'the cooler air they produce can extend into surrounding streets for a distance of a few hundred metres',
          },
          explanation:
            '“Spread … into” paraphrases “extend into”. Both words are needed: “streets” alone does not tell us which streets.',
        },
        {
          n: 14,
          answers: ['districts'],
          location: {
            ref: 'H',
            quote:
              'target the districts where the need is greatest rather than spreading resources evenly',
          },
          explanation:
            '“Concentrate their efforts on” paraphrases “target”, and “dividing resources evenly” matches “spreading resources evenly”. The sentence already contains “the”, so write only “districts”.',
          distractors: ['cities', 'neighbourhoods'],
        },
      ],
    },
  ],
})
