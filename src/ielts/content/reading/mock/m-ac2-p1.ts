import { definePassage } from '../../define'

/** Original text. Academic mock 2, Passage 1: how Japanese hand-made paper (washi) is made. */
export default definePassage({
  id: 'm-ac2-p1',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'mock',
  title: 'Paper from the mulberry',
  topic: 'Traditional crafts',
  intro: 'Original practice passage written for this mock test.',
  minutes: 17,
  level: 1,
  texts: [
    {
      title: 'Paper from the mulberry: the craft of Japanese washi',
      paragraphs: [
        {
          label: 'A',
          text: 'In the conservation studios of major museums, from London to Washington, one material is used more than almost any other to mend torn manuscripts and fragile prints: a thin, almost transparent paper made by hand in Japan. Known as washi, it is prized because it combines two qualities that rarely go together. A sheet can be light enough to see through and yet strong enough to resist tearing. Both qualities result from a process that has changed little in more than a thousand years.',
        },
        {
          label: 'B',
          text: 'Papermaking was invented in China, and the technique is thought to have reached Japan early in the seventh century, carried, according to tradition, by a Buddhist monk from Korea. At first, Japanese papermakers followed Chinese methods closely and used hemp, among other fibres. Hemp paper, however, was coarse and time-consuming to prepare, and over the following centuries craftsmen turned increasingly to local plants with longer, finer fibres. Demand grew steadily, driven first by the copying of religious texts and later by the government’s need for records.',
        },
        {
          label: 'C',
          text: 'Three plants came to dominate. The most widely used is kozo, a shrub related to the mulberry, whose fibres can reach a centimetre or more in length, many times longer than those in the wood pulp used for ordinary paper today. Kozo is easy to grow and produces a tough, slightly rough sheet. Mitsumata, another cultivated shrub, yields a softer, glossier paper that is still used in Japanese banknotes. The third plant, gampi, gives the smoothest paper of all, but it has never been successfully cultivated on a large scale and must be gathered from wild plants growing on mountain slopes.',
        },
        {
          label: 'D',
          text: 'Work on kozo begins in winter, after the shrubs have lost their leaves. The stems are cut, tied in bundles and steamed in large covered vats for two or three hours, until the bark can be pulled away from the wood in long strips. The strips can be dried and stored at this stage. When they are needed, they are soaked in water, and the dark outer skin is scraped away with a knife, leaving only the pale inner bark that contains the useful fibre. In some regions the strips are then spread out on snow for several days, where sunlight reflected from the snow bleaches them naturally.',
        },
        {
          label: 'E',
          text: 'The inner bark is next cooked for two hours or more in an alkaline solution, traditionally made from wood ash mixed with water. Many workshops now use soda ash, which is quicker, although some makers believe that stronger chemicals produce a less durable paper. After rinsing, the bark is placed in a tray of cold, running water, and every remaining speck of dirt is picked out by hand: the slowest and, for many workers, the most tedious stage of the whole process. Finally, the fibres are beaten with wooden mallets on a flat stone or board until they separate into a loose mass rather like cotton wool.',
        },
        {
          label: 'F',
          text: 'What most clearly distinguishes Japanese papermaking from its Chinese ancestor is the use of neri, a thick, slippery liquid extracted from the roots of a plant related to the hibiscus. Stirred into a vat of water and fibre, it slows the rate at which water drains through the mould and keeps the fibres evenly suspended. This allowed Japanese craftsmen to develop a method in which the mould, a screen of fine bamboo strips in a wooden frame, is dipped into the vat and rocked backwards and forwards, so that the fibres settle in many thin, criss-crossing layers. A skilled papermaker may repeat this several times for one sheet, and it is this interlocking of long fibres that gives washi its strength.',
        },
        {
          label: 'G',
          text: 'Each new sheet is laid directly on top of the one before, so that a stack of several hundred wet sheets builds up during the day. Remarkably, the neri prevents the sheets from sticking together, so there is no need to place a cloth between them, as there is in European hand papermaking. The stack is left to drain overnight and is then pressed gently for several hours. Finally, the sheets are peeled away one at a time and brushed onto wooden boards, which are traditionally set out in the sun, or onto heated metal plates.',
        },
        {
          label: 'H',
          text: 'For centuries, washi was used for far more than writing. It covered the sliding screens and lanterns of Japanese houses and was even woven into clothing. Its decline began in the late nineteenth century, when machine-made paper arrived from the West. In the early twentieth century, tens of thousands of households still made paper by hand, most of them farming families who worked at the craft during the winter months; today only a few hundred workshops remain. Even so, in 2014 the techniques of three papermaking communities were added to UNESCO’s list of intangible cultural heritage, and demand from conservators and artists abroad has encouraged some younger makers to take up the trade.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'tfng',
      instructions:
        'Do the following statements agree with the information given in the passage? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.',
      questions: [
        {
          n: 1,
          statement: 'Washi is used by museums outside Japan to repair damaged documents.',
          answer: 'TRUE',
          location: {
            ref: 'A',
            quote:
              'In the conservation studios of major museums, from London to Washington, one material is used more than almost any other to mend torn manuscripts and fragile prints',
          },
          explanation:
            '“Museums outside Japan” paraphrases “major museums, from London to Washington”, and “repair damaged documents” paraphrases “mend torn manuscripts and fragile prints”. The material is washi, as the next sentence makes clear.',
        },
        {
          n: 2,
          statement:
            'The earliest Japanese papermakers used methods that were quite different from those used in China.',
          answer: 'FALSE',
          location: {
            ref: 'B',
            quote: 'At first, Japanese papermakers followed Chinese methods closely',
          },
          explanation:
            'The passage says the opposite: “At first, Japanese papermakers followed Chinese methods closely.” The differences (such as neri, paragraph F) developed later.',
        },
        {
          n: 3,
          statement: 'Paper made from hemp was more expensive than paper made from other plants.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'B',
            quote: 'Hemp paper, however, was coarse and time-consuming to prepare',
          },
          explanation:
            'The passage gives two drawbacks of hemp paper: it was coarse and took a long time to prepare. It never mentions its price or compares the cost of different papers. Don’t assume that “time-consuming” means “expensive”.',
        },
        {
          n: 4,
          statement: 'Kozo fibres are longer than the fibres in modern wood-pulp paper.',
          answer: 'TRUE',
          location: {
            ref: 'C',
            quote: 'many times longer than those in the wood pulp used for ordinary paper today',
          },
          explanation:
            'Kozo fibres “can reach a centimetre or more in length, many times longer than those in the wood pulp used for ordinary paper today”.',
        },
        {
          n: 5,
          statement: 'Gampi is now grown on farms in several parts of Japan.',
          answer: 'FALSE',
          location: {
            ref: 'C',
            quote:
              'it has never been successfully cultivated on a large scale and must be gathered from wild plants',
          },
          explanation:
            'Gampi “has never been successfully cultivated on a large scale and must be gathered from wild plants”, which contradicts the idea that it is farmed in several regions. It is kozo and mitsumata that are cultivated.',
        },
        {
          n: 6,
          statement: 'Bark that has been bleached on snow makes stronger paper than other bark.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'D',
            quote:
              'In some regions the strips are then spread out on snow for several days, where sunlight reflected from the snow bleaches them naturally',
          },
          explanation:
            'Snow bleaching is described, but the passage says nothing about how it affects the strength of the paper. Durability is mentioned only in connection with soda ash (paragraph E), and strength only in connection with the interlocking fibres (paragraph F).',
        },
        {
          n: 7,
          statement:
            'In the early twentieth century, most hand papermakers in Japan also worked in agriculture.',
          answer: 'TRUE',
          location: {
            ref: 'H',
            quote: 'most of them farming families who worked at the craft during the winter months',
          },
          explanation:
            '“Also worked in agriculture” paraphrases “farming families”. The households “worked at the craft during the winter months”, so papermaking was combined with farming.',
        },
      ],
    },
    {
      type: 'completion',
      format: 'flowchart',
      instructions:
        'Complete the flow-chart below. Choose ONE WORD ONLY from the passage for each answer.',
      wordLimit: { words: 1, number: false },
      title: 'Making a sheet of kozo washi',
      body: [
        {
          kind: 'flow',
          steps: [
            'Kozo stems are cut in winter and [[8]] in covered vats until the bark comes away from the wood',
            'The bark is soaked and its dark outer [[9]] is scraped off with a knife',
            'The inner bark is cooked in an alkaline solution, traditionally made from wood [[10]] and water',
            'Specks of dirt are picked out by hand, and the fibres are beaten with wooden [[11]]',
            'The fibres are mixed in a vat with water and neri, a liquid taken from the [[12]] of a plant',
            'The mould is rocked so that the fibres settle in thin layers; the wet sheets are stacked and pressed',
            'The sheets are brushed onto wooden boards or heated metal [[13]] to dry',
          ],
        },
      ],
      questions: [
        {
          n: 8,
          answers: ['steamed'],
          location: { ref: 'D', quote: 'steamed in large covered vats for two or three hours' },
          explanation:
            'The stems are “steamed in large covered vats … until the bark can be pulled away from the wood”. “Comes away from the wood” paraphrases “pulled away from the wood”.',
          distractors: ['soaked'],
        },
        {
          n: 9,
          answers: ['skin'],
          location: { ref: 'D', quote: 'the dark outer skin is scraped away with a knife' },
          explanation:
            '“The dark outer skin is scraped away with a knife”. The pale inner bark is what remains, so “bark” alone does not fit.',
        },
        {
          n: 10,
          answers: ['ash'],
          location: {
            ref: 'E',
            quote: 'traditionally made from wood ash mixed with water',
          },
          explanation:
            'The solution was “traditionally made from wood ash mixed with water”. “Wood” is already in the flow-chart. Soda ash is the modern alternative, not the traditional one.',
          distractors: ['soda'],
        },
        {
          n: 11,
          answers: ['mallets'],
          location: { ref: 'E', quote: 'the fibres are beaten with wooden mallets' },
          explanation:
            '“The fibres are beaten with wooden mallets on a flat stone or board”. The plural is needed, as in the text.',
        },
        {
          n: 12,
          answers: ['roots'],
          location: {
            ref: 'F',
            quote:
              'a thick, slippery liquid extracted from the roots of a plant related to the hibiscus',
          },
          explanation:
            'Neri is “extracted from the roots of a plant related to the hibiscus”. “Taken from” paraphrases “extracted from”.',
        },
        {
          n: 13,
          answers: ['plates'],
          location: {
            ref: 'G',
            quote:
              'brushed onto wooden boards, which are traditionally set out in the sun, or onto heated metal plates',
          },
          explanation:
            'The sheets are brushed “onto wooden boards … or onto heated metal plates”. “Boards” is already given in the flow-chart.',
          distractors: ['boards'],
        },
      ],
    },
  ],
})
