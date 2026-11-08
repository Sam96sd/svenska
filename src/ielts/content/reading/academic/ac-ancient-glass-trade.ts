import { definePassage } from '../../define'

/**
 * Original text. Academic Passage 3 style: what the chemistry of ancient glass reveals about
 * trade. Kessar and Mira Okonedo are invented for this passage.
 */
export default definePassage({
  id: 'ac-ancient-glass-trade',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'practice',
  title: 'Reading the recipe',
  topic: 'Archaeology',
  intro: 'Original practice passage: the researchers and sites described are fictional.',
  minutes: 20,
  level: 3,
  texts: [
    {
      title: 'Reading the recipe: what ancient glass reveals about trade',
      paragraphs: [
        {
          label: 'A',
          text: 'Glass beads, bowls and bottles turn up at archaeological sites across Europe and Asia, often far from any known glassworks. For much of the twentieth century, specialists tried to establish where such objects had come from by studying their shape, colour and decoration. The approach had appeal, but it rested on a fragile assumption. A fashionable style could be imitated by any competent craftsman, and a bowl made in one city might be indistinguishable from a copy produced in another. Appearance, in short, revealed what was popular, but not necessarily where the glass had been made.',
        },
        {
          label: 'B',
          text: 'The difficulty was compounded by the way the industry was organised. Excavated furnaces suggest that, for much of antiquity, glass was produced in two quite separate stages. At a few primary workshops, sand and other ingredients were melted together in large tank furnaces, some producing several tonnes of glass at a time. Once cool, the solid slab was broken into chunks, which were traded, sometimes over great distances, to secondary workshops, where craftsmen remelted and shaped them into finished objects. Cargoes of raw glass recovered from ancient shipwrecks confirm that this trade was well established. As a result, the place where an object was shaped and the place where its glass was made may lie in different countries.',
        },
        {
          label: 'C',
          text: 'The key to tracing that journey lies in the raw materials. Ancient glass was made by melting sand with a flux, a substance that lowers the melting point of silica to a temperature early furnaces could reach. Two very different fluxes were used. In much of the Near East, glassmakers burned salt-tolerant desert plants and used the ash, which is rich in magnesium and potassium. In the Roman world, by contrast, the flux was natron, a naturally occurring mineral soda scooped from the dry beds of a few lakes in northern Egypt, which contains very little of either element. Measuring magnesium and potassium therefore separates the two traditions almost at a glance. The sand itself adds a further layer of information, since the proportions of minor elements such as aluminium, titanium and zirconium vary from one deposit to another.',
        },
        {
          label: 'D',
          text: 'A second line of evidence comes from isotopes, forms of the same element that differ slightly in weight. The strontium isotope ratio of glass is governed largely by the lime in its sand, which in coastal deposits often derives from crushed shells and so tends to resemble the ratio found in seawater. Neodymium is more revealing. It enters the glass from the heavier mineral grains in the sand, and its isotope ratio reflects the age and type of the rocks from which those grains were eroded. Crucially, this ratio is not altered by melting, colouring or working the glass, so it survives every later stage of an object’s life.',
        },
        {
          label: 'E',
          text: 'The potential of these techniques is illustrated by a recent study of Kessar, a hilltop trading settlement of the first millennium BCE. A team led by the geochemist Mira Okonedo analysed 214 beads from the site. As expected, most fell into two groups: plant-ash glass with a composition typical of Mesopotamian sources, and a smaller number of beads made with natron. Glass waste showed that some beads had been shaped at Kessar itself. What nobody had anticipated was a group of nineteen cobalt-blue beads. The cobalt used to colour them carried a distinctive combination of trace metals that had previously been linked only with workshops in Egypt, more than a thousand kilometres away. None of the written sources from the region mentions contact with Egypt during this period.',
        },
        {
          label: 'F',
          text: 'Chemistry is not infallible, however. Glass, then as now, was valuable enough to recycle, and broken vessels were routinely collected and remelted alongside fresh raw glass. Whenever glass from different sources was mixed, its chemical signature became blurred, rather as mixing two paints produces a colour that resembles neither. Analysts look for signs of reuse, such as traces of copper, lead or antimony, elements added to colour glass or make it clear, in pieces that are otherwise plain. By this measure, some researchers estimate that in certain later periods most glass in circulation contained some recycled material. Where that is the case, a composition that appears to point to a single source may in fact be an average of several.',
        },
        {
          label: 'G',
          text: 'A further obstacle has been practical. Until recently, chemical analysis required a sample to be drilled or cut from an object and dissolved, and curators were understandably reluctant to see museum pieces damaged. Two developments have eased this tension. Laser ablation, in which a fine beam vaporises a speck of glass for analysis, leaves a crater narrower than a human hair. Portable X-ray instruments go further, causing no damage at all, and can be carried into museum storerooms. However, they analyse only the outermost layer. Centuries of burial often leach some elements out of the surface of glass, so that the skin of a bead may differ markedly from its core, and a reading taken there can suggest a recipe that the glassmaker never used.',
        },
        {
          label: 'H',
          text: 'Despite these difficulties, chemistry is beginning to fill gaps that other evidence cannot. Ancient writers had much to say about luxury goods but were largely silent about bulk commodities such as raw glass. Okonedo is nonetheless careful about what her results can show. ‘A chemical match tells us where the glass began its journey and where it ended up,’ she says. ‘It tells us nothing about the route in between, or how many hands it passed through. Two sites that share the same glass may never have been in direct contact.’ The Kessar beads, in other words, prove a connection with Egypt, but not necessarily a visit by Egyptian traders.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'headings',
      instructions:
        'The passage has eight paragraphs, A–H. Choose the correct heading for paragraphs A–F from the list of headings below.',
      headings: [
        { key: 'i', text: 'The limits of classifying glass by its appearance' },
        { key: 'ii', text: 'Why ancient writers ignored the glass trade' },
        { key: 'iii', text: 'A division of labour that separates making from shaping' },
        { key: 'iv', text: 'The high cost of producing coloured glass' },
        { key: 'v', text: 'Ingredients that point to a regional tradition' },
        { key: 'vi', text: 'Shipwrecks as the best evidence of long-distance trade' },
        { key: 'vii', text: 'A chemical marker that survives the craftsman’s work' },
        { key: 'viii', text: 'An unexpected link revealed at a single site' },
        { key: 'ix', text: 'How the reuse of old glass confuses the evidence' },
      ],
      questions: [
        {
          n: 1,
          para: 'A',
          answer: 'i',
          location: {
            ref: 'A',
            quote:
              'Appearance, in short, revealed what was popular, but not necessarily where the glass had been made',
          },
          explanation:
            'Paragraph A explains that specialists judged origin by “shape, colour and decoration”, and that this failed because styles could be copied. The summary sentence “Appearance, in short …” confirms heading i.',
        },
        {
          n: 2,
          para: 'B',
          answer: 'iii',
          location: { ref: 'B', quote: 'glass was produced in two quite separate stages' },
          explanation:
            'The paragraph is about primary workshops (making raw glass) and secondary workshops (shaping objects), and its last sentence says the two places “may lie in different countries”.',
          traps: {
            vi: 'Shipwrecks are mentioned in one sentence as confirmation of the trade in raw glass. They support the main idea; they are not the topic, and the text never calls them the “best” evidence.',
          },
        },
        {
          n: 3,
          para: 'C',
          answer: 'v',
          location: {
            ref: 'C',
            quote:
              'Measuring magnesium and potassium therefore separates the two traditions almost at a glance',
          },
          explanation:
            'Paragraph C shows that the flux (plant ash or natron) and the minor elements in the sand differ by region, so the ingredients reveal which tradition and deposit the glass came from.',
          traps: {
            vii: 'The marker that survives every later stage is neodymium, in paragraph D. Paragraph C is about the basic ingredients, not about durability.',
          },
        },
        {
          n: 4,
          para: 'D',
          answer: 'vii',
          location: {
            ref: 'D',
            quote: 'this ratio is not altered by melting, colouring or working the glass',
          },
          explanation:
            'The key point of D is that the neodymium isotope ratio is “not altered by melting, colouring or working the glass”, so it “survives every later stage”: a marker that survives the craftsman’s work.',
          traps: {
            v: 'Paragraph D also links glass to regions, but through isotopes in the sand rather than through the ingredients chosen by glassmakers. Heading v fits paragraph C better.',
          },
        },
        {
          n: 5,
          para: 'E',
          answer: 'viii',
          location: {
            ref: 'E',
            quote: 'What nobody had anticipated was a group of nineteen cobalt-blue beads',
          },
          explanation:
            'Paragraph E describes the Kessar study, whose surprising result was cobalt linked to Egyptian workshops: an unexpected link found at one site.',
          traps: {
            ii: 'E notes that written sources do not mention contact with Egypt, but it does not explain why writers ignored the glass trade. Paragraph H mentions writers’ silence, and neither paragraph is mainly about it.',
            iv: 'Cobalt is a colouring material, but the paragraph says nothing about the cost of coloured glass.',
          },
        },
        {
          n: 6,
          para: 'F',
          answer: 'ix',
          location: {
            ref: 'F',
            quote:
              'Whenever glass from different sources was mixed, its chemical signature became blurred',
          },
          explanation:
            'F is about recycling: mixing glass from different sources “blurred” its chemical signature, so a composition may be “an average of several” sources.',
          traps: {
            iv: 'Colouring elements (copper, lead, antimony) are mentioned only as signs of recycling, not in connection with cost.',
          },
        },
      ],
    },
    {
      type: 'completion',
      format: 'summary',
      instructions:
        'Complete the summary using the list of words, A–J, below. Write the correct letter, A–J.',
      title: 'Chemical clues in ancient glass',
      wordBank: [
        { key: 'A', text: 'proportions' },
        { key: 'B', text: 'plants' },
        { key: 'C', text: 'mineral' },
        { key: 'D', text: 'geology' },
        { key: 'E', text: 'temperature' },
        { key: 'F', text: 'shells' },
        { key: 'G', text: 'colour' },
        { key: 'H', text: 'seawater' },
        { key: 'I', text: 'climate' },
        { key: 'J', text: 'furnaces' },
      ],
      body: [
        {
          kind: 'text',
          text: 'Glassmakers combined sand with a flux so that it would melt at a lower temperature. In the Near East, the flux was the ash of [[7]] that grow in salty desert soils, whereas Roman glass relied on natron, a [[8]] gathered from Egyptian lake beds. Because these two fluxes contain different amounts of magnesium and potassium, they are easy to tell apart. Further clues come from the sand, as the [[9]] of minor elements it contains are not the same in every deposit. Isotopes add more detail: strontium mainly reflects lime, which on coasts often comes from crushed [[10]], while neodymium records the [[11]] of the area where the sand was collected and is not changed by any later work on the glass.',
        },
      ],
      questions: [
        {
          n: 7,
          answers: ['B'],
          location: {
            ref: 'C',
            quote: 'glassmakers burned salt-tolerant desert plants and used the ash',
          },
          explanation:
            '“Grow in salty desert soils” paraphrases “salt-tolerant desert plants”, and the ash of these plants was the flux.',
        },
        {
          n: 8,
          answers: ['C'],
          location: {
            ref: 'C',
            quote: 'a naturally occurring mineral soda scooped from the dry beds of a few lakes',
          },
          explanation:
            'Natron is described as “a naturally occurring mineral soda”. “Gathered from Egyptian lake beds” paraphrases “scooped from the dry beds of a few lakes in northern Egypt”.',
        },
        {
          n: 9,
          answers: ['A'],
          location: {
            ref: 'C',
            quote:
              'the proportions of minor elements such as aluminium, titanium and zirconium vary from one deposit to another',
          },
          explanation:
            '“Are not the same in every deposit” paraphrases “vary from one deposit to another”. The plural verb “are” also tells you the answer is a plural noun: proportions.',
        },
        {
          n: 10,
          answers: ['F'],
          location: { ref: 'D', quote: 'in coastal deposits often derives from crushed shells' },
          explanation:
            '“On coasts often comes from crushed” matches “in coastal deposits often derives from crushed shells”. “Seawater” is a trap: the strontium ratio resembles that of seawater, but lime cannot be crushed seawater.',
        },
        {
          n: 11,
          answers: ['D'],
          location: {
            ref: 'D',
            quote:
              'its isotope ratio reflects the age and type of the rocks from which those grains were eroded',
          },
          explanation:
            'The neodymium ratio reflects “the age and type of the rocks” the sand grains came from, that is, the geology of the area. Nothing in the passage links it to climate.',
        },
      ],
    },
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B, C or D.',
      questions: [
        {
          n: 12,
          prompt: 'What was surprising about the cobalt-blue beads found at Kessar?',
          options: [
            { key: 'A', text: 'They were made from plant-ash glass rather than natron glass.' },
            {
              key: 'B',
              text: 'The material that coloured them was associated with a distant region.',
            },
            { key: 'C', text: 'They had been shaped by craftsmen at the settlement itself.' },
            { key: 'D', text: 'They were much older than the other beads at the site.' },
          ],
          answer: 'B',
          location: {
            ref: 'E',
            quote:
              'had previously been linked only with workshops in Egypt, more than a thousand kilometres away',
          },
          explanation:
            'The surprise (“What nobody had anticipated”) was that the cobalt carried trace metals “previously been linked only with workshops in Egypt, more than a thousand kilometres away”.',
          traps: {
            A: 'Plant-ash and natron glass were the two groups the team “expected”; the passage does not say which glass the blue beads were made of.',
            C: 'Glass waste shows that some beads were shaped at Kessar, but this is not presented as surprising, and it is not said of the blue beads.',
            D: 'The age of the blue beads is never mentioned.',
          },
        },
        {
          n: 13,
          prompt:
            'According to the writer, the main drawback of portable X-ray instruments is that',
          options: [
            { key: 'A', text: 'they are too expensive for most museums to buy.' },
            { key: 'B', text: 'they leave a small mark on the surface of the object.' },
            { key: 'C', text: 'their results may not represent the glass as it was made.' },
            { key: 'D', text: 'they cannot be used outside a laboratory.' },
          ],
          answer: 'C',
          location: {
            ref: 'G',
            quote: 'a reading taken there can suggest a recipe that the glassmaker never used',
          },
          explanation:
            'The instruments analyse only the surface, which burial may have changed, so “a reading taken there can suggest a recipe that the glassmaker never used”: the result may not reflect the original glass.',
          traps: {
            A: 'Cost is never mentioned.',
            B: 'It is laser ablation that leaves a tiny crater; the X-ray instruments cause “no damage at all”.',
            D: 'They “can be carried into museum storerooms”, so they are not limited to a laboratory.',
          },
        },
        {
          n: 14,
          prompt: 'What is the main point Okonedo makes in the final paragraph?',
          options: [
            { key: 'A', text: 'Chemical analysis cannot show where a piece of glass was made.' },
            { key: 'B', text: 'Written records remain more reliable than scientific data.' },
            { key: 'C', text: 'Shared glass is not proof that two places traded directly.' },
            { key: 'D', text: 'Egyptian merchants must have visited Kessar at some point.' },
          ],
          answer: 'C',
          location: {
            ref: 'H',
            quote: 'Two sites that share the same glass may never have been in direct contact',
          },
          explanation:
            'Okonedo says a chemical match shows the start and end of the journey but “nothing about the route in between”, and that sites sharing the same glass “may never have been in direct contact”.',
          traps: {
            A: 'The opposite: she says a match “tells us where the glass began its journey”.',
            B: 'The paragraph says ancient writers were “largely silent” about raw glass, so chemistry fills gaps that texts leave.',
            D: 'The writer concludes the beads prove a connection “but not necessarily a visit by Egyptian traders”.',
          },
        },
      ],
    },
  ],
})
