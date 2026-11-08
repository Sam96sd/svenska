import { definePassage } from '../../define'

/** Original text. Paraphrase drill: every correct match uses different words from the text. */
export default definePassage({
  id: 'drill-paraphrase-match',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'Paraphrase drill: what are city trees for?',
  topic: 'Environment',
  minutes: 7,
  level: 2,
  intro:
    'None of the statements repeats the researcher’s own words. Look for the same idea expressed differently, and be suspicious of options that simply share a word with the statement.',
  texts: [
    {
      title: 'What are city trees for?',
      paragraphs: [
        {
          text: 'City councils plant trees for many reasons, but researchers disagree about which benefits matter most. Four specialists explain their views.',
        },
        {
          text: 'Dr Mira Okafor, an urban climate scientist, has spent a decade measuring temperatures in city streets. She found that pavements beneath a full canopy were often several degrees cooler on summer afternoons than nearby streets with no cover. “Shade is the cheapest air conditioning a city will ever buy,” she says. However, she warns that young trees provide little cooling for their first ten to fifteen years, so councils should protect mature trees rather than relying on new planting.',
        },
        {
          text: 'Professor Lars Brandt, an economist, is less interested in temperature than in money. His study of 3,000 house sales found that homes on tree-lined streets sold for noticeably more than similar homes elsewhere. He admits that the effect is hard to separate from other factors, since leafy streets tend to be in wealthier districts anyway. Even so, he argues that the extra tax income from higher property values could pay for most street planting.',
        },
        {
          text: 'For Dr Sofia Reyes, a public health researcher, the main benefit is psychological. Patients in her hospital study who could see trees from their windows asked for fewer painkillers than those facing a brick wall. She is cautious about air quality, though: some species release chemicals that can actually add to pollution on hot days, and she believes planting decisions are too often made without considering this.',
        },
        {
          text: 'Dr Tomas Halvorsen, an ecologist, points out that most city trees belong to just a handful of species. In his view, this lack of variety is a hidden danger, because a single disease could destroy a large share of a city’s trees within a few years. He would like every council to set a limit on how many trees of any one kind can be planted.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'match-features',
      instructions:
        'Look at the following statements and the list of researchers below. Match each statement with the correct researcher, A–D. You may use any letter more than once.',
      optionsTitle: 'List of researchers',
      options: [
        { key: 'A', text: 'Dr Mira Okafor' },
        { key: 'B', text: 'Professor Lars Brandt' },
        { key: 'C', text: 'Dr Sofia Reyes' },
        { key: 'D', text: 'Dr Tomas Halvorsen' },
      ],
      reuse: true,
      questions: [
        {
          n: 1,
          prompt: 'Trees can make the ground below them significantly less hot.',
          answer: 'A',
          location: {
            ref: 't0p1',
            quote: 'pavements beneath a full canopy were often several degrees cooler',
          },
          explanation:
            '“The ground below them” = “pavements beneath a full canopy”; “significantly less hot” = “several degrees cooler”. Every key word has been changed.',
          traps: {
            B: 'Brandt mentions “temperature”, but only to say he is less interested in it. A shared word is not a shared idea.',
            C: 'Reyes mentions “hot days”, but in connection with pollution, not cooling.',
          },
        },
        {
          n: 2,
          prompt: 'Older trees deserve more protection than newly planted ones.',
          answer: 'A',
          location: {
            ref: 't0p1',
            quote: 'councils should protect mature trees rather than relying on new planting',
          },
          explanation:
            '“Older” = “mature”; “deserve more protection than” = “protect … rather than relying on”. Okafor gives the reason too: young trees cool very little at first.',
          traps: {
            D: 'Halvorsen also wants councils to control planting, but his concern is the number of species, not the age of trees.',
          },
        },
        {
          n: 3,
          prompt: 'A financial gain could cover the cost of putting trees along streets.',
          answer: 'B',
          location: {
            ref: 't0p2',
            quote:
              'the extra tax income from higher property values could pay for most street planting',
          },
          explanation:
            '“A financial gain” = “extra tax income”; “cover the cost of” = “pay for”; “putting trees along streets” = “street planting”.',
          traps: {
            A: 'Okafor calls shade “the cheapest air conditioning”, which is about value for money, but she does not say any income would pay for planting.',
          },
        },
        {
          n: 4,
          prompt: 'The researcher’s results may partly reflect how rich an area is.',
          answer: 'B',
          location: {
            ref: 't0p2',
            quote: 'leafy streets tend to be in wealthier districts anyway',
          },
          explanation:
            '“How rich an area is” = “wealthier districts”; “may partly reflect” paraphrases “the effect is hard to separate from other factors”. Brandt admits a weakness in his own study.',
          traps: {
            A: 'Okafor compares streets with and without cover, but says nothing about wealth.',
          },
        },
        {
          n: 5,
          prompt: 'Seeing greenery may reduce people’s need for medication.',
          answer: 'C',
          location: {
            ref: 't0p3',
            quote: 'who could see trees from their windows asked for fewer painkillers',
          },
          explanation:
            '“Seeing greenery” = “could see trees from their windows”; “reduce … need for medication” = “asked for fewer painkillers”.',
          traps: {
            A: 'Okafor’s work is about physical comfort (cooling), not health treatment.',
          },
        },
        {
          n: 6,
          prompt: 'Certain trees can make the atmosphere dirtier when temperatures are high.',
          answer: 'C',
          location: {
            ref: 't0p3',
            quote: 'some species release chemicals that can actually add to pollution on hot days',
          },
          explanation:
            '“Certain trees” = “some species”; “make the atmosphere dirtier” = “add to pollution”; “when temperatures are high” = “on hot days”.',
          traps: {
            A: 'Okafor mentions “air conditioning”. The word “air” matches, but her point is about cooling, not pollution.',
          },
        },
        {
          n: 7,
          prompt: 'Depending on too few types of tree puts a city at risk.',
          answer: 'D',
          location: { ref: 't0p4', quote: 'this lack of variety is a hidden danger' },
          explanation:
            '“Too few types” = “lack of variety” (and “just a handful of species”); “puts a city at risk” = “a hidden danger”.',
          traps: {
            A: 'Okafor “warns” about something, but her warning is about young trees, not variety.',
          },
        },
        {
          n: 8,
          prompt: 'Rules should restrict how much of a single species is planted.',
          answer: 'D',
          location: {
            ref: 't0p4',
            quote: 'set a limit on how many trees of any one kind can be planted',
          },
          explanation:
            '“Rules should restrict” = “set a limit on”; “a single species” = “any one kind”.',
          traps: {
            C: 'Reyes criticises how planting decisions are made, but she does not propose a limit.',
          },
        },
      ],
    },
  ],
})
