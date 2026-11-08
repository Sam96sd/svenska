import { definePassage } from '../../define'

/** Original text with fictional people and places. General Training Section 3 style. */
export default definePassage({
  id: 'gt3-lighthouse-keepers',
  skill: 'reading',
  module: 'general',
  section: 'gt3',
  use: 'practice',
  title: 'Keepers of the light',
  topic: 'History',
  intro: 'Original practice passage: the people and places described are fictional.',
  minutes: 25,
  level: 3,
  texts: [
    {
      title: 'Keepers of the light',
      paragraphs: [
        {
          label: 'A',
          text: 'For more than two centuries, the safety of ships approaching the coast depended on a small number of people whom sailors rarely saw. Lighthouse keepers lived in some of the most isolated places in the country, on bare rocks far out to sea or at the ends of headlands reached only by rough tracks. Their task sounds simple – to keep a light burning from sunset to sunrise – but until well into the twentieth century it demanded constant attention, considerable skill and an unusual tolerance for monotony.',
        },
        {
          label: 'B',
          text: 'The earliest lights were little more than open coal fires on top of towers, and many were run by private owners who collected fees from passing ships. A good number were badly maintained. The historian Dr Nell Farrant has found records of sailors complaining that certain lights were “more often dark than lit”, and she argues that owners had little reason to spend money on lights that earned the same fees whether they burned brightly or not. It was largely in response to such complaints that the Coastal Lights Board was established in 1806 and given responsibility for every light around the coast.',
        },
        {
          label: 'C',
          text: 'The Board introduced a level of discipline that would not have been out of place on a naval ship. Keepers wore uniforms, followed a detailed rule book and recorded the weather and any passing vessels in a logbook every few hours. Inspectors arrived without warning, and a keeper whose brass fittings were dull or whose lamp glass was smeared could be fined or transferred to a less desirable station. Captain Hugh Ardley, who inspected stations on the west coast in the 1850s, wrote that he judged a keeper “not by the brightness of his light, which any fool may manage on a calm night, but by the state of his storeroom”.',
        },
        {
          label: 'D',
          text: 'Technological change transformed the work several times. Coal fires gave way to oil lamps placed in front of polished metal reflectors, and these in turn were replaced by large glass lenses that concentrated the light into a narrow beam. The engineer Elias Penrose, who designed many of the Board’s towers, was among the first to argue that each light should flash in its own distinctive pattern, so that sailors could tell one lighthouse from another at night. This was an important advance, but it also made the keeper’s job more demanding, because the clockwork mechanism that turned the lens had to be wound by hand at regular intervals throughout the night.',
        },
        {
          label: 'E',
          text: 'Life at the most remote stations was hard. Rock lighthouses were usually staffed by three men working in rotation, so that one was always on watch while the others slept or carried out maintenance. Relief boats bringing fresh supplies and replacement crews were supposed to arrive every four weeks, but winter storms could delay them for much longer; in 1871 one keeper on Gannet Rock recorded that he and his companions had survived for nine weeks on reduced rations. Families were not permitted to live on rock stations, although they often lived with keepers at lighthouses on the mainland, where wives and children frequently helped with the work without being paid for it.',
        },
        {
          label: 'F',
          text: 'Women occasionally held the post of keeper in their own right, most often after a husband or father had died in service. Martha Quine took over the light at Skerrow Point in 1889 following her husband’s death and ran it for twenty-two years. Her logbooks, which survive in the Board’s archive, are remarkable for their careful observations of seabirds, a subject on which she later wrote several articles for a natural history society. Yet her appointment was always officially described as temporary, and she was paid less than the man who replaced her when she retired.',
        },
        {
          label: 'G',
          text: 'From the 1950s onwards, automation steadily removed the need for people. Electric lamps that changed their own bulbs, and later remote monitoring from a central control room, meant that a light could run for months without a visit. The last keepers left Skerrow Point in 1996. Samuel Tregear, one of that final group, has said that what he missed most was not the sea or the solitude but the feeling of being responsible for other people’s lives. Many former stations are now holiday cottages or museums, and their logbooks have become a valuable source for scientists studying long-term changes in weather and wildlife.',
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
          prompt: 'According to Dr Farrant, why were some early privately owned lights unreliable?',
          options: [
            { key: 'A', text: 'Their owners did not understand how to maintain them.' },
            { key: 'B', text: 'Their owners’ income did not depend on how well they worked.' },
            { key: 'C', text: 'Coal for the fires was too expensive to buy regularly.' },
            { key: 'D', text: 'Many sailors refused to pay the fees that were charged.' },
          ],
          answer: 'B',
          location: {
            ref: 'B',
            quote:
              'owners had little reason to spend money on lights that earned the same fees whether they burned brightly or not',
          },
          explanation:
            'Farrant argues that a light earned the same fees whether it burned brightly or not, so owners’ income did not depend on its performance and they had no reason to spend money on it.',
          traps: {
            A: 'Nothing is said about the owners’ knowledge; the problem was a lack of motivation to spend money.',
            C: 'Spending money is mentioned, but the text does not say coal was too expensive; it says owners had no reason to spend.',
            D: 'Sailors complained about the lights, but the text does not say they refused to pay.',
          },
        },
        {
          n: 2,
          prompt: 'What does the writer say about the Board’s inspections?',
          options: [
            { key: 'A', text: 'They were carried out according to a fixed timetable.' },
            { key: 'B', text: 'They were usually conducted by former naval officers.' },
            { key: 'C', text: 'Keepers who performed badly could be moved elsewhere.' },
            { key: 'D', text: 'They concentrated mainly on the keepers’ logbooks.' },
          ],
          answer: 'C',
          location: {
            ref: 'C',
            quote: 'could be fined or transferred to a less desirable station',
          },
          explanation:
            'A keeper with dull brass or smeared glass could be “transferred to a less desirable station”, i.e. moved elsewhere.',
          traps: {
            A: 'The opposite: inspectors “arrived without warning”.',
            B: 'The Board’s discipline is compared to a naval ship, and Ardley was a captain, but the text does not say inspectors were usually former naval officers.',
            D: 'Logbooks are mentioned as part of the keeper’s duties, but the inspections described focus on brass, lamp glass and, for Ardley, the storeroom.',
          },
        },
        {
          n: 3,
          prompt: 'What was the effect of giving each light its own pattern of flashes?',
          options: [
            { key: 'A', text: 'It was strongly opposed by many sailors.' },
            { key: 'B', text: 'It meant that keepers had more to do during the night.' },
            { key: 'C', text: 'It removed the need for a clockwork mechanism.' },
            { key: 'D', text: 'It allowed lights to be seen from a greater distance.' },
          ],
          answer: 'B',
          location: {
            ref: 'D',
            quote:
              'it also made the keeper’s job more demanding, because the clockwork mechanism that turned the lens had to be wound by hand',
          },
          explanation:
            'Flashing patterns made the job “more demanding” because the clockwork had to be wound by hand at intervals “throughout the night”.',
          traps: {
            A: 'Sailors benefited – they could tell one lighthouse from another; no opposition is mentioned.',
            C: 'The opposite: the clockwork mechanism had to be wound regularly.',
            D: 'The lenses concentrated the light into a narrow beam, but the text does not link flashing patterns to distance.',
          },
        },
        {
          n: 4,
          prompt: 'What do we learn about life on rock lighthouses?',
          options: [
            { key: 'A', text: 'All three keepers were on duty at the same time.' },
            { key: 'B', text: 'Relief boats always arrived every four weeks.' },
            { key: 'C', text: 'Keepers were sometimes accompanied by their families.' },
            { key: 'D', text: 'Food could run short when the weather was bad.' },
          ],
          answer: 'D',
          location: {
            ref: 'E',
            quote:
              'winter storms could delay them for much longer; in 1871 one keeper on Gannet Rock recorded that he and his companions had survived for nine weeks on reduced rations',
          },
          explanation:
            'Storms delayed the relief boats that brought supplies, and the Gannet Rock keepers had to live on reduced rations, so food could run short in bad weather.',
          traps: {
            A: 'The keepers worked “in rotation”: one was on watch while the others slept or did maintenance.',
            B: 'Boats were “supposed to” arrive every four weeks, but storms could delay them, so not always.',
            C: 'Families were not permitted on rock stations; they lived with keepers only at mainland lighthouses.',
          },
        },
      ],
    },
    {
      type: 'match-features',
      instructions:
        'Look at the following statements and the list of people below. Match each statement with the correct person, A–E. You may use any letter more than once.',
      optionsTitle: 'List of people',
      options: [
        { key: 'A', text: 'Nell Farrant' },
        { key: 'B', text: 'Hugh Ardley' },
        { key: 'C', text: 'Elias Penrose' },
        { key: 'D', text: 'Martha Quine' },
        { key: 'E', text: 'Samuel Tregear' },
      ],
      reuse: true,
      questions: [
        {
          n: 5,
          prompt: 'wrote for others about a subject unconnected with lighthouses',
          answer: 'D',
          location: {
            ref: 'F',
            quote:
              'a subject on which she later wrote several articles for a natural history society',
          },
          explanation:
            'Martha Quine observed seabirds and later wrote several articles about them for a natural history society, a subject unconnected with lighthouses.',
          traps: {
            A: 'Farrant is a historian who writes about her research, but her subject is the history of lighthouses themselves.',
          },
        },
        {
          n: 6,
          prompt: 'valued the responsibility of the job more than its surroundings',
          answer: 'E',
          location: {
            ref: 'G',
            quote:
              'what he missed most was not the sea or the solitude but the feeling of being responsible for other people’s lives',
          },
          explanation:
            'Tregear missed being responsible for others more than “the sea or the solitude”, i.e. the surroundings.',
        },
        {
          n: 7,
          prompt:
            'believed that a keeper’s quality was best shown by something other than the light',
          answer: 'B',
          location: {
            ref: 'C',
            quote:
              'not by the brightness of his light, which any fool may manage on a calm night, but by the state of his storeroom',
          },
          explanation:
            'Ardley judged keepers by the state of their storeroom rather than by the brightness of their light.',
        },
        {
          n: 8,
          prompt: 'suggested a way of helping sailors to identify individual lighthouses',
          answer: 'C',
          location: {
            ref: 'D',
            quote:
              'each light should flash in its own distinctive pattern, so that sailors could tell one lighthouse from another',
          },
          explanation:
            'Penrose argued for distinctive flashing patterns “so that sailors could tell one lighthouse from another”.',
        },
        {
          n: 9,
          prompt: 'was treated less favourably than the person who took over from them',
          answer: 'D',
          location: {
            ref: 'F',
            quote: 'she was paid less than the man who replaced her when she retired',
          },
          explanation:
            'Martha Quine was paid less than her successor, and her post was always called temporary. “The person who took over from them” paraphrases “the man who replaced her”.',
          traps: {
            E: 'Tregear was one of the last keepers; nobody took over from him, and no comparison of treatment is made.',
          },
        },
      ],
    },
    {
      type: 'completion',
      format: 'sentence',
      instructions:
        'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the text for each answer.',
      wordLimit: { words: 2 },
      body: [
        {
          kind: 'bullets',
          items: [
            'Under the Board’s rules, keepers had to note weather conditions and ships they saw in a [[10]] several times a day.',
            'Lenses were eventually developed which focused the light into a [[11]].',
            'In 1871, bad weather left the keepers on Gannet Rock living on [[12]] for several weeks.',
            'Researchers now consult the logbooks of former stations for evidence of long-term changes in climate and [[13]].',
          ],
        },
      ],
      questions: [
        {
          n: 10,
          answers: ['logbook', 'log book'],
          location: {
            ref: 'C',
            quote: 'recorded the weather and any passing vessels in a logbook every few hours',
          },
          explanation:
            '“Several times a day” paraphrases “every few hours”; “ships they saw” paraphrases “passing vessels”.',
          distractors: ['rule book'],
        },
        {
          n: 11,
          answers: ['narrow beam'],
          location: {
            ref: 'D',
            quote: 'large glass lenses that concentrated the light into a narrow beam',
          },
          explanation: '“Focused” paraphrases “concentrated”. The answer is “narrow beam”.',
        },
        {
          n: 12,
          answers: ['reduced rations'],
          location: {
            ref: 'E',
            quote: 'he and his companions had survived for nine weeks on reduced rations',
          },
          explanation:
            '“Living on” paraphrases “survived … on”, and “bad weather” refers to the winter storms that delayed the relief boats. The answer is “reduced rations”.',
        },
        {
          n: 13,
          answers: ['wildlife'],
          location: {
            ref: 'G',
            quote:
              'a valuable source for scientists studying long-term changes in weather and wildlife',
          },
          explanation:
            '“Climate” in the sentence replaces “weather”, so the missing word is the other thing scientists study: “wildlife”.',
        },
      ],
    },
  ],
})
