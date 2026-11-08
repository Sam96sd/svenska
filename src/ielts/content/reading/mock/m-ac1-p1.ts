import { definePassage } from '../../define'

/** Original text. Mock Academic 1, Passage 1: a descriptive history of a material. */
export default definePassage({
  id: 'm-ac1-p1',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'mock',
  title: 'The floor that came back',
  topic: 'Materials and design',
  minutes: 17,
  level: 1,
  texts: [
    {
      title: 'The floor that came back',
      paragraphs: [
        {
          label: 'A',
          text: 'For much of the twentieth century, a floor covering made largely from vegetable oil could be found in kitchens, schools and hospital corridors across Europe and beyond. Linoleum, or “lino” as it was usually called in Britain, was hard-wearing, easy to clean and relatively inexpensive. Yet having dominated the market for decades, it came close to disappearing altogether, before finding a new following for reasons its inventor could hardly have imagined.',
        },
        {
          label: 'B',
          text: 'The material owes its existence to a chance observation. In the early 1860s, an English manufacturer named Frederick Walton noticed that a tough, rubbery skin had formed on the surface of a tin of oil-based paint that had been left open. The skin was the result of linseed oil – pressed from the seeds of the flax plant – reacting slowly with oxygen in the air. Walton saw that this substance might be put to practical use, and he soon patented a method of producing it in large quantities. He also invented a name for his product, combining the Latin words linum, meaning flax, and oleum, meaning oil.',
        },
        {
          label: 'C',
          text: 'Early production was a slow and laborious business. In the original process, linseed oil was poured over thin sheets of cotton cloth hung from the roofs of tall sheds, and new layers were added daily over a period of months until the coating had become thick enough to be removed. This oxidised oil was then heated and mixed with tree resin to create a sticky paste, known in the trade as “cement”. Ground cork, powdered wood and chalk were added, together with pigments to give the material its colour, and the mixture was pressed onto a backing of woven jute. Even then, the product was not ready. The sheets were hung in heated drying rooms, where they remained for several weeks while the material slowly hardened. Later manufacturers found quicker ways of oxidising the oil, but the long final drying stage has never been eliminated.',
        },
        {
          label: 'D',
          text: 'One curious feature of the drying stage is that it alters the appearance of the material. Because the oil goes on reacting in the dark drying rooms, a yellowish film forms on the surface, so that a pale blue floor, for instance, may look distinctly green when it leaves the factory. Customers are sometimes alarmed by this, but the effect is temporary: once the floor is exposed to daylight, the film fades within a few weeks and the intended colour appears.',
        },
        {
          label: 'E',
          text: 'Demand grew rapidly in the decades that followed. Walton’s factory near London was soon joined by competitors, and the Scottish town of Kirkcaldy became so closely associated with the industry that travellers were said to know they had arrived by the smell of linseed oil. When Walton tried to prevent other firms from calling their products linoleum, a court decided that the word described a type of material rather than one company’s brand, and he lost the right to its exclusive use. Manufacturers competed partly on design. Cheaper versions had a pattern printed on the surface, which gradually wore away with use; more expensive “inlaid” linoleum had colours that ran through the full thickness of the sheet, so that the design lasted as long as the floor itself. Thick, plain linoleum was also fitted to the decks of warships, where its resilience was highly valued.',
        },
        {
          label: 'F',
          text: 'The decline began after the Second World War, when floor coverings made from vinyl, a type of plastic, became widely available. Vinyl was cheaper to produce, could be made in a far greater range of bright colours and was easier to lay, and by the 1970s it had replaced linoleum in most homes. Factory after factory closed, and in many countries linoleum came to be seen as old-fashioned – a material associated with draughty kitchens and institutional buildings. Production did not stop completely, but it shrank to a fraction of its former size.',
        },
        {
          label: 'G',
          text: 'The revival, when it came, was driven by environmental concerns. From the 1980s onwards, architects and builders began to look for materials with a smaller ecological footprint, and linoleum turned out to have several advantages. Its main ingredients are renewable: flax and jute can be grown each year, and cork is harvested from the bark of living trees, which are not cut down. A well-maintained linoleum floor can last for thirty years or more, and at the end of its life the material will break down naturally, unlike most plastics. Linoleum also has a mild antibacterial quality, which has made it popular once again in hospitals and nurseries.',
        },
        {
          label: 'H',
          text: 'Linoleum has not regained its former dominance, and it remains more expensive than vinyl. Nevertheless, it now occupies a secure place in the market. It has enjoyed a second life in the art room, too: because it is soft enough to carve but firm enough to hold a sharp edge, artists and schoolchildren have long used blocks of lino to make prints. A material discovered by accident in a forgotten tin of paint has, it seems, proved remarkably hard to forget.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'tfng',
      instructions:
        'Do the following statements agree with the information given in the reading passage? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.',
      questions: [
        {
          n: 1,
          statement:
            'Walton was the first person to notice that linseed oil forms a skin when it is exposed to air.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'B',
            quote:
              'Frederick Walton noticed that a tough, rubbery skin had formed on the surface of a tin of oil-based paint that had been left open',
          },
          explanation:
            'The text says Walton noticed the skin and saw that it could be put to practical use, but it never says whether anyone had noticed it before him. “The first person” is the qualifier that cannot be checked, so the answer is NOT GIVEN.',
        },
        {
          n: 2,
          statement: 'The name “linoleum” was created from two words in Latin.',
          answer: 'TRUE',
          location: {
            ref: 'B',
            quote: 'combining the Latin words linum, meaning flax, and oleum, meaning oil',
          },
          explanation:
            '“Created from two words in Latin” paraphrases “combining the Latin words linum … and oleum”. Walton “invented a name”, so the name was made up from these two words.',
        },
        {
          n: 3,
          statement:
            'In the original process, a usable layer of oxidised oil could be produced in just a few days.',
          answer: 'FALSE',
          location: {
            ref: 'C',
            quote:
              'new layers were added daily over a period of months until the coating had become thick enough to be removed',
          },
          explanation:
            'The coating took “a period of months” to become thick enough to remove, which contradicts “just a few days”. Do not be misled by “daily”: a new layer was added every day, but the whole process took months.',
        },
        {
          n: 4,
          statement:
            'Newly made linoleum may appear to be a different colour from the one that was intended.',
          answer: 'TRUE',
          location: {
            ref: 'D',
            quote:
              'a pale blue floor, for instance, may look distinctly green when it leaves the factory',
          },
          explanation:
            'The yellowish film from the drying rooms makes a blue floor look green when it leaves the factory; the “intended colour” appears only after a few weeks in daylight. This matches the statement.',
        },
        {
          n: 5,
          statement:
            'Walton succeeded in stopping other manufacturers from using the name “linoleum”.',
          answer: 'FALSE',
          location: {
            ref: 'E',
            quote: 'and he lost the right to its exclusive use',
          },
          explanation:
            'Walton tried to prevent other firms from using the name, but the court decided against him and “he lost the right to its exclusive use”. The statement says the opposite.',
        },
        {
          n: 6,
          statement: 'Inlaid linoleum sold in greater quantities than printed linoleum.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'E',
            quote:
              'more expensive “inlaid” linoleum had colours that ran through the full thickness of the sheet',
          },
          explanation:
            'The text compares the price and durability of the two kinds (inlaid was more expensive and its pattern lasted longer), but it says nothing about which sold more. A higher price or better quality does not tell us about sales.',
        },
        {
          n: 7,
          statement: 'By the 1970s, the manufacture of linoleum had stopped altogether.',
          answer: 'FALSE',
          location: {
            ref: 'F',
            quote:
              'Production did not stop completely, but it shrank to a fraction of its former size.',
          },
          explanation:
            'Vinyl had replaced linoleum “in most homes” by the 1970s, but the text says production “did not stop completely”, which contradicts “stopped altogether”.',
        },
      ],
    },
    {
      type: 'completion',
      format: 'note',
      instructions:
        'Complete the notes below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
      wordLimit: { words: 2, number: false },
      title: 'Linoleum',
      body: [
        { kind: 'heading', text: 'The original production process' },
        {
          kind: 'bullets',
          items: [
            'linseed oil poured repeatedly over sheets of [[8]] in tall sheds',
            'oxidised oil heated and mixed with [[9]] to make a paste called “cement”',
            'cork, wood and chalk added, plus [[10]] to provide colour',
            'mixture pressed onto a backing made of [[11]]',
            'sheets left to harden for several weeks in heated drying rooms',
          ],
        },
        { kind: 'heading', text: 'Uses' },
        {
          kind: 'bullets',
          items: [
            'homes, schools and hospitals',
            'thick, plain linoleum on the decks of [[12]]',
            'today: popular again in hospitals and [[13]] because it is mildly antibacterial',
          ],
        },
      ],
      questions: [
        {
          n: 8,
          answers: ['(cotton) cloth', 'cotton'],
          location: {
            ref: 'C',
            quote:
              'linseed oil was poured over thin sheets of cotton cloth hung from the roofs of tall sheds',
          },
          explanation:
            'The oil was poured over “thin sheets of cotton cloth”. “Cotton cloth” fits the two-word limit; “thin cotton cloth” is three words and breaks it.',
          distractors: ['thin cotton cloth'],
        },
        {
          n: 9,
          answers: ['(tree) resin'],
          location: {
            ref: 'C',
            quote:
              'This oxidised oil was then heated and mixed with tree resin to create a sticky paste',
          },
          explanation:
            '“Heated and mixed with tree resin to create a sticky paste, known in the trade as ‘cement’”. Cork and chalk are added later, to the paste, so they are not the answer.',
          distractors: ['cork', 'chalk'],
        },
        {
          n: 10,
          answers: ['pigments'],
          location: { ref: 'C', quote: 'together with pigments to give the material its colour' },
          explanation:
            '“To provide colour” paraphrases “to give the material its colour”. The notes already list cork, wood and chalk, so the missing ingredient is pigments.',
        },
        {
          n: 11,
          answers: ['(woven) jute'],
          location: { ref: 'C', quote: 'the mixture was pressed onto a backing of woven jute' },
          explanation:
            'The mixture was pressed onto “a backing of woven jute”. Both “jute” and “woven jute” fit the limit.',
          distractors: ['cotton cloth'],
        },
        {
          n: 12,
          answers: ['warships'],
          location: {
            ref: 'E',
            quote: 'Thick, plain linoleum was also fitted to the decks of warships',
          },
          explanation:
            'The notes repeat “thick, plain linoleum” and “the decks of”, so you only need to scan for the word that follows: warships, where its resilience was valued.',
        },
        {
          n: 13,
          answers: ['nurseries'],
          location: {
            ref: 'G',
            quote:
              'Linoleum also has a mild antibacterial quality, which has made it popular once again in hospitals and nurseries.',
          },
          explanation:
            '“Mildly antibacterial” paraphrases “a mild antibacterial quality”, and “popular again in hospitals and …” matches the text word for word. Schools are mentioned only in paragraph A, as a past use.',
          distractors: ['schools'],
        },
      ],
    },
  ],
})
