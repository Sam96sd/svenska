import { definePassage } from '../../define'

/** Original text. Drill for lesson r-completion: summary with a word bank. */
export default definePassage({
  id: 'drill-summary-word-bank',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'The return of the night train',
  topic: 'Travel and transport',
  minutes: 7,
  level: 2,
  texts: [
    {
      title: 'The return of the night train',
      paragraphs: [
        {
          text: 'For much of the late twentieth century, sleeper trains seemed to be heading for extinction. Low-cost airlines offered fares that rail operators could not match, and it was hard to justify the expense of carriages that were used for only one journey every twenty-four hours. One by one, overnight routes across Europe were withdrawn.',
        },
        {
          text: 'In the past decade, however, demand has begun to recover. Part of the explanation is environmental: a growing number of travellers want to avoid flying, and a train journey of the same distance produces only a fraction of the emissions. But operators say that convenience matters just as much. A passenger who boards at ten in the evening and arrives in another capital at eight the next morning saves the cost of a hotel room and arrives in the city centre rather than at a distant airport.',
        },
        {
          text: 'The revival has not been easy. Sleeper carriages are expensive to build, and because each bed is occupied by one person for the whole night, a sleeper train carries far fewer passengers than a daytime train of the same length. As a result, tickets remain expensive compared with those of budget airlines. Some operators have experimented with simpler designs, such as private sleeping pods that cost less than full cabins but offer more comfort than a reclining seat.',
        },
        {
          text: 'Crossing borders creates further difficulties. Each country has its own safety rules and its own charges for using the railway, and a delay on one network can disrupt the entire journey. Several governments now offer financial support, arguing that night trains help them meet climate targets, but campaigners warn that without long-term funding, the current growth may not last.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'summary',
      instructions: 'Complete the summary using the list of words, A–K, below.',
      wordBank: [
        { key: 'A', text: 'accommodation' },
        { key: 'B', text: 'capacity' },
        { key: 'C', text: 'comfort' },
        { key: 'D', text: 'entire' },
        { key: 'E', text: 'environmental' },
        { key: 'F', text: 'faster' },
        { key: 'G', text: 'inexpensive' },
        { key: 'H', text: 'lasting' },
        { key: 'I', text: 'regulations' },
        { key: 'J', text: 'temporary' },
        { key: 'K', text: 'luggage' },
      ],
      title: 'Night trains',
      body: [
        {
          kind: 'text',
          text: 'Overnight rail services declined largely because of competition from [[1]] air travel, and because each carriage made only one journey a day. Recently, demand has started to grow again. Many travellers have [[2]] reasons for avoiding planes, but sleepers also offer practical benefits: passengers save money on [[3]] and arrive in the city centre. However, a sleeper train has a limited [[4]], so tickets remain costly. International journeys are complicated because each country has its own [[5]] and track charges, and a delay on one network can affect the [[6]] trip. Although some governments provide money, campaigners believe that [[7]] funding is needed if the growth is to continue.',
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['G'],
          location: {
            ref: 't0p0',
            quote: 'Low-cost airlines offered fares that rail operators could not match',
          },
          explanation:
            '“Inexpensive air travel” paraphrases “low-cost airlines”. “Faster” (F) also fits the grammar, but the text never mentions the speed of flying.',
          distractors: ['F'],
        },
        {
          n: 2,
          answers: ['E'],
          location: { ref: 't0p1', quote: 'Part of the explanation is environmental' },
          explanation:
            'Travellers want to avoid flying because of emissions: “environmental reasons”. The gap needs an adjective before “reasons”.',
        },
        {
          n: 3,
          answers: ['A'],
          location: { ref: 't0p1', quote: 'saves the cost of a hotel room' },
          explanation:
            '“Accommodation” is the general word for “a hotel room”. Luggage (K) fits the grammar but is never mentioned.',
          distractors: ['K'],
        },
        {
          n: 4,
          answers: ['B'],
          location: {
            ref: 't0p2',
            quote:
              'a sleeper train carries far fewer passengers than a daytime train of the same length',
          },
          explanation:
            '“Limited capacity” = carries far fewer passengers, and “As a result, tickets remain expensive” gives the cause-and-effect link in the summary (“so tickets remain costly”). Comfort (C) is discussed in connection with pods, but it is not why tickets are costly.',
          distractors: ['C'],
        },
        {
          n: 5,
          answers: ['I'],
          location: { ref: 't0p3', quote: 'Each country has its own safety rules' },
          explanation:
            '“Regulations” paraphrases “safety rules”. The gap needs a plural noun to pair with “track charges”.',
        },
        {
          n: 6,
          answers: ['D'],
          location: { ref: 't0p3', quote: 'a delay on one network can disrupt the entire journey' },
          explanation:
            '“Affect the entire trip” = “disrupt the entire journey”. Here the word bank keeps the text’s own word; the paraphrase is in “trip” and “affect”.',
        },
        {
          n: 7,
          answers: ['H'],
          location: {
            ref: 't0p3',
            quote: 'without long-term funding, the current growth may not last',
          },
          explanation:
            '“Lasting funding” = “long-term funding”. “Temporary” (J) fits the grammar but means the opposite — a classic word-bank trap.',
          distractors: ['J'],
        },
      ],
    },
  ],
})
