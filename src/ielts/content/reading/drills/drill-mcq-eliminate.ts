import { definePassage } from '../../define'

/** Original text. Drill for lesson r-mcq: every wrong option is labelled with its trap type. */
export default definePassage({
  id: 'drill-mcq-eliminate',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'Bringing buried rivers back to light',
  topic: 'Environment',
  minutes: 8,
  level: 2,
  texts: [
    {
      title: 'Bringing buried rivers back to light',
      paragraphs: [
        {
          text: 'In the nineteenth century, many towns covered over their small rivers. Streams that had become polluted with household waste were diverted into brick tunnels and built over with roads and car parks. The aim was mainly to protect public health, although the new land was also valuable to developers.',
        },
        {
          text: 'Today, a growing number of cities are reversing this process, a practice known as “daylighting”. The best-known schemes involve removing concrete to return a stream to the open air, but engineers stress that the term covers a range of projects. In some places, the water is simply brought to the surface for a short stretch through a park; in others, a channel is rebuilt along its original route for several kilometres.',
        },
        {
          text: 'Supporters point first to flood control. A river in a tunnel can carry only a fixed volume of water, and during heavy rain, blocked tunnels often overflow into the streets. An open channel with gently sloping banks can hold far more water and releases it more slowly. Wildlife also benefits: within two years of one stream being uncovered in a northern English town, surveys recorded fish and dragonflies that had been absent for decades. Yet the engineers involved insist that the ecological gains, while welcome, were not the reason the project was funded.',
        },
        {
          text: 'The schemes are not without critics. Daylighting is expensive, and because it removes roads or buildings, it can take years to win public approval. Some residents worry that open water will attract litter or put children at risk. Interestingly, studies of completed projects suggest that these concerns tend to fade once people have seen the result: house prices near restored streams have generally risen, and local opposition is rarely heard after the first year.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B, C or D.',
      questions: [
        {
          n: 1,
          prompt:
            'According to the first paragraph, why were urban streams originally covered over?',
          options: [
            { key: 'A', text: 'to create land for building' },
            { key: 'B', text: 'mainly to reduce risks to health' },
            { key: 'C', text: 'to make towns easier to travel through' },
            { key: 'D', text: 'to stop them from flooding' },
          ],
          answer: 'B',
          location: { ref: 't0p0', quote: 'The aim was mainly to protect public health' },
          explanation:
            'Predict: “for health reasons”. B matches: “reduce risks to health” = “protect public health”, and “mainly” appears in both.',
          traps: {
            A: 'Mentioned but not the answer: the land was “also valuable to developers” — a side benefit, not the main aim.',
            C: 'Not stated: roads were built over the streams, but the text never says the aim was easier travel.',
            D: 'Mentioned but not the answer: flood control is the modern argument for uncovering streams (paragraph 3), not the original reason for covering them.',
          },
        },
        {
          n: 2,
          prompt: 'What does the writer say about the term “daylighting”?',
          options: [
            { key: 'A', text: 'It refers only to removing concrete from rivers.' },
            { key: 'B', text: 'It can be used for any work on urban rivers.' },
            { key: 'C', text: 'It was first used by engineers.' },
            { key: 'D', text: 'It includes projects of very different sizes.' },
          ],
          answer: 'D',
          location: {
            ref: 't0p1',
            quote: 'engineers stress that the term covers a range of projects',
          },
          explanation:
            '“Covers a range of projects”, from “a short stretch through a park” to “several kilometres” = projects of very different sizes.',
          traps: {
            A: 'Too narrow: removing concrete is only “the best-known” kind of scheme; the term covers others too.',
            B: 'Too broad: the term covers bringing buried streams to the surface, not “any work” on rivers.',
            C: 'Mentioned but not the answer: engineers “stress” what the term means; the text does not say who first used it.',
          },
        },
        {
          n: 3,
          prompt: 'According to the writer, open channels help to control floods because they',
          options: [
            { key: 'A', text: 'can hold more water and let it go gradually.' },
            { key: 'B', text: 'carry water away from towns more quickly.' },
            { key: 'C', text: 'stop tunnels from becoming blocked.' },
            { key: 'D', text: 'cost less to maintain than tunnels.' },
          ],
          answer: 'A',
          location: {
            ref: 't0p2',
            quote:
              'An open channel with gently sloping banks can hold far more water and releases it more slowly',
          },
          explanation:
            '“Hold far more water” = “hold more water”; “releases it more slowly” = “let it go gradually”.',
          traps: {
            B: 'Reversed relationship: the text says open channels release water more slowly, not more quickly.',
            C: 'Mentioned but not the answer: blocked tunnels are the problem described, but open channels do not stop tunnels becoming blocked.',
            D: 'Not stated: maintenance costs are never compared; the last paragraph says daylighting is expensive.',
          },
        },
        {
          n: 4,
          prompt: 'What does the writer say about the wildlife in the northern English town?',
          options: [
            { key: 'A', text: 'It was the main reason the project was paid for.' },
            { key: 'B', text: 'It included species that had never lived in the area.' },
            { key: 'C', text: 'It returned within a fairly short time.' },
            { key: 'D', text: 'It persuaded other towns to uncover their streams.' },
          ],
          answer: 'C',
          location: {
            ref: 't0p2',
            quote:
              'within two years of one stream being uncovered in a northern English town, surveys recorded fish and dragonflies that had been absent for decades',
          },
          explanation:
            'Fish and dragonflies that had been absent came back “within two years” of the stream being uncovered = returned within a fairly short time.',
          traps: {
            A: 'Reversed: the engineers insist the ecological gains “were not the reason the project was funded”.',
            B: 'Contradicted: “absent for decades” means the species had lived there before — they returned rather than arriving for the first time.',
            D: 'Not stated: other towns are not mentioned in connection with this project.',
          },
        },
        {
          n: 5,
          prompt: 'What point does the writer make about local opposition to daylighting?',
          options: [
            { key: 'A', text: 'It usually prevents schemes from going ahead.' },
            { key: 'B', text: 'It is mainly caused by worries about cost.' },
            { key: 'C', text: 'It grows stronger as house prices rise.' },
            { key: 'D', text: 'It rarely lasts long once a scheme is complete.' },
          ],
          answer: 'D',
          location: { ref: 't0p3', quote: 'local opposition is rarely heard after the first year' },
          explanation:
            'Studies of completed projects show concerns “tend to fade”, and opposition “is rarely heard after the first year” = it rarely lasts long once a scheme is complete.',
          traps: {
            A: 'Too broad: winning approval “can take years”, but the text never says opposition usually stops schemes.',
            B: 'Too narrow: cost is one criticism, but residents’ worries named in the text are litter and children’s safety.',
            C: 'Reversed relationship: house prices rise and opposition fades — the two move in opposite directions.',
          },
        },
      ],
    },
  ],
})
