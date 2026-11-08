import { defineListening } from '../../define'

/** Original script. Mock test 1, Part 4: a lecture on the history of glassmaking techniques, with signposted sections and ONE WORD ONLY notes. */
export default defineListening({
  id: 'm1-l4',
  skill: 'listening',
  part: 4,
  use: 'mock',
  title: 'The history of glassmaking techniques',
  topic: 'History of technology',
  context:
    'You will hear a lecture on the history of glassmaking techniques. First, you have some time to look at questions 1 to 10.',
  speakers: [
    { id: 'lecturer', name: 'Dr Fiona Marsh', role: 'Lecturer', gender: 'f', accent: 'en-GB' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'lecturer',
      text: 'Good morning. Today I’m going to look at the history of glass, not as a story of beautiful objects, but of techniques: how people learned to shape glass, and how each new method changed what glass could be used for.',
    },
    {
      id: 'l2',
      speaker: 'lecturer',
      text: 'I’ll take four stages in turn: the earliest glass, the invention of glassblowing, the Venetian industry, and finally the methods that gave us modern window glass.',
    },
    {
      id: 'l3',
      speaker: 'lecturer',
      text: 'So, let’s begin with the earliest glass. Glassy coatings, which we call glazes, were being applied to stone and pottery long before anyone made a solid glass object.',
    },
    {
      id: 'l4',
      speaker: 'lecturer',
      text: 'But the first things we know of that were made entirely of glass are beads. They date from around two thousand five hundred BC and come from Mesopotamia, in what is now Iraq.',
    },
    {
      id: 'l5',
      speaker: 'lecturer',
      text: 'About a thousand years later, craftsmen in Egypt and Mesopotamia developed a technique known as core-forming. A core, usually of clay, was shaped on the end of a metal rod, and hot glass was wound around it.',
    },
    {
      id: 'l6',
      speaker: 'lecturer',
      text: 'When the glass had cooled, the core was scraped out, leaving a hollow vessel. It was slow, delicate work, and the vessels it produced were tiny.',
    },
    {
      id: 'l7',
      speaker: 'lecturer',
      text: 'You might picture them on a dinner table, but they were far too small to drink from. Almost all of them were made to hold perfume, a luxury valuable enough to justify such a costly container.',
    },
    {
      id: 'l8',
      speaker: 'lecturer',
      text: 'That brings me to the second stage, and the most important single invention in the history of glass: blowing. It appeared in the first century BC, somewhere on the eastern coast of the Mediterranean.',
    },
    {
      id: 'l9',
      speaker: 'lecturer',
      text: 'The idea is simple. A worker gathers molten glass on the end of a hollow pipe and blows into it, forming a bubble that can be shaped in seconds. A simple cup now took minutes rather than days.',
    },
    {
      id: 'l10',
      speaker: 'lecturer',
      text: 'The result was a dramatic fall in price. Wealthy Romans went on drinking from silver, as they always had, but in ordinary homes, glass cups and bowls began to replace pottery.',
    },
    {
      id: 'l11',
      speaker: 'lecturer',
      text: 'The Romans also made the first window glass. It was thick and greenish, and you couldn’t see much through it, so at first it was rarely used in private houses.',
    },
    {
      id: 'l12',
      speaker: 'lecturer',
      text: 'Instead, it was fitted mainly in public baths, where the aim was to let in daylight while keeping the warm, damp air inside.',
    },
    {
      id: 'l13',
      speaker: 'lecturer',
      text: 'Moving on now to Venice. By the thirteenth century, Venice was the leading centre of European glassmaking, and in twelve ninety-one the city ordered all its glass furnaces to move to the nearby island of Murano.',
    },
    {
      id: 'l14',
      speaker: 'lecturer',
      text: 'You’ll often read that this was done to protect trade secrets. That may have been a useful side effect, but the official reason given was the danger of fire in a crowded city with many wooden buildings.',
    },
    {
      id: 'l15',
      speaker: 'lecturer',
      text: 'In the fifteenth century, Murano produced cristallo, the clearest glass Europe had yet seen. The secret was purity. Most glass is made from sand, but sand contains iron, which gives glass a green tint.',
    },
    {
      id: 'l16',
      speaker: 'lecturer',
      text: 'So the Venetians used crushed white pebbles from rivers in northern Italy instead, and combined them with plant ash imported from Syria.',
    },
    {
      id: 'l17',
      speaker: 'lecturer',
      text: 'The third stage takes us to England in the sixteen seventies, and a merchant called George Ravenscroft, who wanted to produce an English rival to Venetian glass.',
    },
    {
      id: 'l18',
      speaker: 'lecturer',
      text: 'His first attempts looked fine when they left the furnace, but over the following months they developed what was known as crizzling: a network of fine cracks spreading through the glass.',
    },
    {
      id: 'l19',
      speaker: 'lecturer',
      text: 'Ravenscroft solved the problem by adding lead oxide. The new lead glass was heavier and more brilliant than cristallo, and it was also soft enough for deep patterns to be cut into its surface.',
    },
    {
      id: 'l20',
      speaker: 'lecturer',
      text: 'That made it perfect for decorative cutting, and for the next two centuries, cut lead crystal was the most fashionable glass in Europe.',
    },
    {
      id: 'l21',
      speaker: 'lecturer',
      text: 'Finally, flat glass for windows. For centuries, large clear windows were extremely expensive. The best quality was plate glass, which was made by pouring molten glass onto an iron table.',
    },
    {
      id: 'l22',
      speaker: 'lecturer',
      text: 'Because this left both surfaces rough and uneven, every sheet then had to be ground and polished, which took enormous amounts of time and labour.',
    },
    {
      id: 'l23',
      speaker: 'lecturer',
      text: 'The breakthrough came in the nineteen fifties, when the British engineer Alastair Pilkington developed what is called the float process.',
    },
    {
      id: 'l24',
      speaker: 'lecturer',
      text: 'Molten glass is poured onto a shallow bath of liquid tin. The glass floats on the metal and spreads out into a perfectly flat sheet, with both surfaces smooth enough to need no further finishing.',
    },
    {
      id: 'l25',
      speaker: 'lecturer',
      text: 'Today, the great majority of the world’s flat glass, from shop windows to car windscreens, is made in this way.',
    },
    {
      id: 'l26',
      speaker: 'lecturer',
      text: 'Next week, we’ll look at how glass is being reinvented for the future, from self-cleaning windows to glass that generates electricity.',
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'note',
      instructions: 'Complete the notes below.',
      wordLimit: { words: 1 },
      title: 'The history of glassmaking techniques',
      body: [
        { kind: 'heading', text: 'The earliest glass' },
        {
          kind: 'bullets',
          items: [
            'Glazes on stone and pottery came first',
            'First objects made entirely of glass: [[1]] (c. 2500 BC, Mesopotamia)',
            'Core-forming: hot glass wound around a clay core; vessels were tiny and mostly held [[2]]',
          ],
        },
        { kind: 'heading', text: 'Glassblowing (1st century BC)' },
        {
          kind: 'bullets',
          items: [
            'Much faster, so prices fell sharply',
            'In ordinary homes, glass began to replace [[3]]',
            'First window glass: thick, hard to see through; used mainly in public [[4]]',
          ],
        },
        { kind: 'heading', text: 'Venice' },
        {
          kind: 'bullets',
          items: [
            '1291: furnaces moved to Murano, officially because of the risk of [[5]]',
            'Cristallo: very clear because it used crushed river [[6]] instead of sand',
          ],
        },
        { kind: 'heading', text: 'Lead crystal (England, 1670s)' },
        {
          kind: 'bullets',
          items: [
            'Ravenscroft’s first glass gradually developed fine [[7]] (“crizzling”)',
            'Lead oxide made glass heavier and brighter; ideal for decorative [[8]]',
          ],
        },
        { kind: 'heading', text: 'Flat glass' },
        {
          kind: 'bullets',
          items: [
            'Plate glass: both surfaces had to be ground and [[9]], so very expensive',
            'Float process (1950s): molten glass floats on a bath of liquid [[10]]',
          ],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['beads'],
          location: { ref: 'l4', quote: 'made entirely of glass are beads' },
          explanation:
            'Glazes came earlier, but they were only coatings on stone and pottery. The first objects made entirely of glass were beads.',
          distractors: ['glazes'],
        },
        {
          n: 2,
          answers: ['perfume', 'perfumes'],
          location: { ref: 'l7', quote: 'Almost all of them were made to hold perfume' },
          explanation:
            '“Mostly held” = “almost all of them were made to hold”. The dinner table and drinking are mentioned only to be rejected: the vessels were too small.',
        },
        {
          n: 3,
          answers: ['pottery'],
          location: { ref: 'l10', quote: 'glass cups and bowls began to replace pottery' },
          explanation:
            'Wealthy Romans kept using silver, so silver is the distractor. In ordinary homes, glass replaced pottery.',
          distractors: ['silver'],
        },
        {
          n: 4,
          answers: ['baths'],
          location: { ref: 'l12', quote: 'it was fitted mainly in public baths' },
          explanation:
            'The early window glass was rarely used in private houses; it went mainly into public baths, to let in light and keep in warm air.',
          distractors: ['houses'],
        },
        {
          n: 5,
          answers: ['fire'],
          location: { ref: 'l14', quote: 'the official reason given was the danger of fire' },
          explanation:
            'Protecting trade secrets is what “you’ll often read”, and may have been a side effect. The notes ask for the official reason: fire.',
          distractors: ['secrets', 'secrecy'],
        },
        {
          n: 6,
          answers: ['pebbles'],
          location: {
            ref: 'l16',
            quote: 'used crushed white pebbles from rivers in northern Italy instead',
          },
          explanation:
            'Sand contains iron, which tints glass green, so the Venetians used crushed river pebbles instead. The plant ash from Syria is a different ingredient.',
          distractors: ['sand', 'ash'],
        },
        {
          n: 7,
          answers: ['cracks'],
          location: { ref: 'l18', quote: 'a network of fine cracks spreading through the glass' },
          explanation:
            '“Gradually developed” = “over the following months they developed”. Crizzling is the name for a network of fine cracks.',
        },
        {
          n: 8,
          answers: ['cutting'],
          location: { ref: 'l20', quote: 'That made it perfect for decorative cutting' },
          explanation:
            'Lead glass was soft enough for deep patterns to be cut, so it was “perfect for decorative cutting” (= ideal for).',
        },
        {
          n: 9,
          answers: ['polished'],
          location: { ref: 'l22', quote: 'every sheet then had to be ground and polished' },
          explanation:
            '“Ground” is already in the notes; the missing word is the second process, “polished”.',
        },
        {
          n: 10,
          answers: ['tin'],
          location: {
            ref: 'l24',
            quote: 'Molten glass is poured onto a shallow bath of liquid tin',
          },
          explanation:
            'In the float process, the molten glass floats on a bath of liquid tin and spreads into a flat sheet.',
        },
      ],
    },
  ],
})
