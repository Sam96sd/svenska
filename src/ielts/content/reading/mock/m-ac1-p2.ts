import { definePassage } from '../../define'

/**
 * Original text. Mock Academic 1, Passage 2: lettered paragraphs for matching headings and
 * matching features. The researchers and studies are fictional.
 */
export default definePassage({
  id: 'm-ac1-p2',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'mock',
  title: 'Listening to the wild',
  topic: 'Ecology',
  intro: 'Original practice passage: the researchers and studies described are fictional.',
  minutes: 20,
  level: 2,
  texts: [
    {
      title: 'Listening to the wild',
      paragraphs: [
        {
          label: 'A',
          text: 'For most of the history of ecology, counting animals has meant seeing them. Field biologists walked set routes through forests and grasslands, noting every bird, frog or monkey they encountered, or laid traps and returned days later to inspect the contents. Such surveys remain valuable, but they are expensive, they depend heavily on the skill of the individual observer, and they inevitably disturb the creatures being studied. Over the past two decades, a growing number of researchers have turned to a different sense altogether. Rather than looking for wildlife, they listen to it.',
        },
        {
          label: 'B',
          text: 'The basic equipment is surprisingly modest. A weatherproof recorder no larger than a paperback book can be strapped to a tree trunk and left for months, switching itself on at programmed intervals to capture a few minutes of sound. Because the devices are cheap and need nobody to operate them, a research team can scatter dozens across a landscape and collect recordings from places that people rarely visit, such as flooded swamps, steep ravines or the forest canopy at night. The result is an enormous archive: a single project can produce more audio in one season than a person could listen to in a lifetime.',
        },
        {
          label: 'C',
          text: 'That abundance created a problem of its own. In the early years, students were employed to listen to recordings and identify calls by ear, a slow and tiring task that could cover only a tiny sample of the material collected. The solution has come from computing. Software trained on thousands of labelled examples can now pick out the calls of particular species automatically, and according to Dr Aiko Sato, who has developed such programs for tropical frogs, the best systems already rival experienced human listeners for some groups of animals, although they still struggle when several species call at once. Other researchers have taken a different approach, using so-called acoustic indices – mathematical measures that summarise the overall complexity of a recording without identifying any individual sound.',
        },
        {
          label: 'D',
          text: 'The thinking behind these indices is that a healthy ecosystem tends to sound busy. Dr Maren Holt, an ecologist who has made recordings on three continents, compares an undisturbed rainforest to an orchestra in which each group of animals has come to occupy its own range of frequencies, so that insects, birds and frogs can all be heard without drowning one another out. In a damaged or simplified habitat, she argues, gaps appear in this spectrum. Holt’s studies of logged forests found that acoustic diversity remained lower than in neighbouring untouched forest for more than fifteen years after the trees had been felled, even in places where the vegetation looked, to the human eye, as though it had fully recovered.',
        },
        {
          label: 'E',
          text: 'Not everyone is convinced that a recording can stand in for a count. Professor Daniel Okafor, a statistician who has examined dozens of acoustic studies, points out that a single noisy species – a colony of cicadas, for example – can make a degraded site sound richer than it really is, while heavy rain or a nearby road can mask the calls of everything else. In his view, acoustic indices are best treated as an early warning that a site deserves closer attention, not as a substitute for traditional surveys. He also notes that silent animals, from most reptiles to many mammals, are simply invisible to a microphone.',
        },
        {
          label: 'F',
          text: 'Sound is not only being used to monitor ecosystems; in some cases it is helping to repair them. Coral reefs are noisy places, filled with the crackle of shrimps and the grunts and clicks of fish, and young fish drifting in open water are thought to use these sounds to find somewhere to settle. Tomás Ferreira, a marine biologist, placed underwater loudspeakers on patches of damaged reef and played recordings of healthy reefs through them. Over six weeks, those patches attracted almost twice as many young fish as silent patches nearby. Ferreira stresses that sound alone cannot restore a reef, but he believes it may speed up recovery in places where other conditions, such as water quality, have already improved.',
        },
        {
          label: 'G',
          text: 'Recordings also preserve something that conventional surveys do not: a permanent record of how a place sounded at a particular moment. A list of species seen in 2010 cannot be re-examined with new questions in mind, but a recording can. Holt describes her archive as a “library of landscapes” and expects that future researchers, equipped with better software, will find information in it that she herself cannot yet extract. Some recordings already have historical value, capturing the calls of populations that have since declined sharply or disappeared.',
        },
        {
          label: 'H',
          text: 'There are, inevitably, practical difficulties. Recorders are sometimes stolen, damaged by animals or flooded, and storing and processing vast quantities of sound requires computing power that many institutions in poorer countries – often those responsible for the most biologically diverse regions – cannot afford. Sato has called for shared international databases so that recordings made in one country can be analysed anywhere. If such obstacles can be overcome, the humble microphone may become one of the most important tools in conservation.',
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
        { key: 'i', text: 'Capturing the present for the benefit of the future' },
        { key: 'ii', text: 'Inexpensive devices that work without supervision' },
        { key: 'iii', text: 'Using sound to help a damaged habitat' },
        { key: 'iv', text: 'Automated ways of handling vast amounts of material' },
        { key: 'v', text: 'Reasons for caution in judging a habitat by its sound' },
        { key: 'vi', text: 'Evidence that acoustic surveys are more accurate than visual ones' },
        { key: 'vii', text: 'How the variety of sounds reflects the condition of a habitat' },
        { key: 'viii', text: 'The high cost of training expert listeners' },
        { key: 'ix', text: 'Protecting recording equipment in harsh conditions' },
      ],
      questions: [
        {
          n: 1,
          para: 'B',
          answer: 'ii',
          location: {
            ref: 'B',
            quote: 'Because the devices are cheap and need nobody to operate them',
          },
          explanation:
            'B describes the recorders: “cheap” = “inexpensive”, and they switch themselves on and “need nobody to operate them” = “work without supervision”. The paragraph ends with the huge amount of audio they collect.',
          traps: {
            ix: 'The recorder is “weatherproof”, but that is one detail. Damage to recorders (theft, animals, floods) is discussed in H, not B.',
            iv: 'The “enormous archive” at the end of B leads into C, but handling that material is the subject of C.',
          },
        },
        {
          n: 2,
          para: 'C',
          answer: 'iv',
          location: {
            ref: 'C',
            quote:
              'Software trained on thousands of labelled examples can now pick out the calls of particular species automatically',
          },
          explanation:
            'C explains how the “problem” of too many recordings was solved by computing: software that identifies calls “automatically”, and acoustic indices that summarise a whole recording. Both are automated ways of handling the material.',
          traps: {
            viii: 'Students who listened by ear are mentioned, but the paragraph says the task was slow and covered only a small sample. Nothing is said about the cost of training them.',
            vi: 'Software “rivals” human listeners for some animals; this compares computers with human listeners, not acoustic surveys with visual ones.',
          },
        },
        {
          n: 3,
          para: 'D',
          answer: 'vii',
          location: {
            ref: 'D',
            quote:
              'The thinking behind these indices is that a healthy ecosystem tends to sound busy.',
          },
          explanation:
            'D explains that a healthy habitat fills the whole range of frequencies, while a damaged one has “gaps” in the spectrum, as in the logged forests. The variety of sound therefore reflects the condition of the habitat.',
          traps: {
            iii: 'The logged forests are damaged habitats, but D uses sound to measure the damage, not to repair it. Repair is the subject of F.',
          },
        },
        {
          n: 4,
          para: 'E',
          answer: 'v',
          location: {
            ref: 'E',
            quote: 'Not everyone is convinced that a recording can stand in for a count.',
          },
          explanation:
            'E gives Okafor’s doubts: noisy species and rain can mislead, indices should be only an “early warning”, and silent animals are missed. These are reasons for caution.',
          traps: {
            vi: 'E argues the opposite: acoustic indices are “not … a substitute for traditional surveys”.',
          },
        },
        {
          n: 5,
          para: 'F',
          answer: 'iii',
          location: {
            ref: 'F',
            quote:
              'Sound is not only being used to monitor ecosystems; in some cases it is helping to repair them.',
          },
          explanation:
            'Ferreira plays healthy-reef sounds on damaged reef to attract young fish and speed up recovery. “Help a damaged habitat” paraphrases “helping to repair them”.',
          traps: {
            vii: 'Reefs are described as noisy, but the paragraph is about using sound to aid recovery, not about measuring a habitat’s condition from the variety of its sounds.',
          },
        },
        {
          n: 6,
          para: 'G',
          answer: 'i',
          location: {
            ref: 'G',
            quote: 'a permanent record of how a place sounded at a particular moment',
          },
          explanation:
            'G says recordings keep a permanent record that future researchers can re-examine with better software. “Capturing the present for the benefit of the future” sums this up.',
          traps: {
            iv: 'G mentions “better software”, but only as a future possibility; the main idea is the lasting value of the archive.',
          },
        },
      ],
    },
    {
      type: 'match-features',
      instructions:
        'Look at the following statements and the list of researchers below. Match each statement with the correct researcher, A–D. You may use any letter more than once.',
      optionsTitle: 'List of researchers',
      reuse: true,
      options: [
        { key: 'A', text: 'Aiko Sato' },
        { key: 'B', text: 'Maren Holt' },
        { key: 'C', text: 'Daniel Okafor' },
        { key: 'D', text: 'Tomás Ferreira' },
      ],
      questions: [
        {
          n: 7,
          prompt:
            'Playing sounds is not enough, by itself, to bring a damaged habitat back to health.',
          answer: 'D',
          location: {
            ref: 'F',
            quote: 'Ferreira stresses that sound alone cannot restore a reef',
          },
          explanation:
            '“Not enough, by itself” paraphrases “sound alone cannot”, and “bring a damaged habitat back to health” paraphrases “restore a reef”. Ferreira adds that sound may only speed up recovery where other conditions have already improved.',
          traps: {
            B: 'Holt studies recovery too (logged forests), but she says nothing about the conditions needed for sound to help recovery.',
          },
        },
        {
          n: 8,
          prompt:
            'Computer programs perform less well when several animals are calling at the same time.',
          answer: 'A',
          location: {
            ref: 'C',
            quote: 'although they still struggle when several species call at once',
          },
          explanation:
            'Sato says the best software rivals human listeners “although they still struggle when several species call at once”. “Perform less well” = “struggle”; “at the same time” = “at once”.',
          traps: {
            C: 'Okafor also discusses sounds that hide other calls (rain, roads, cicadas), but he is talking about acoustic indices being misled, not about software identifying species.',
          },
        },
        {
          n: 9,
          prompt: 'Some kinds of animal cannot be detected by acoustic methods at all.',
          answer: 'C',
          location: {
            ref: 'E',
            quote:
              'silent animals, from most reptiles to many mammals, are simply invisible to a microphone',
          },
          explanation:
            'Okafor notes that silent animals “are simply invisible to a microphone”, i.e. they cannot be detected by recording.',
        },
        {
          n: 10,
          prompt:
            'Existing recordings are likely to provide more information in future than can be obtained from them today.',
          answer: 'B',
          location: {
            ref: 'G',
            quote:
              'expects that future researchers, equipped with better software, will find information in it that she herself cannot yet extract',
          },
          explanation:
            'Holt expects future researchers to “find information in it that she herself cannot yet extract”. Note that Holt appears in two paragraphs (D and G); this idea is in G.',
          traps: {
            A: 'Sato develops software and calls for shared databases, but the idea that future software will find more in old recordings belongs to Holt.',
          },
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
            'The results of traditional wildlife surveys rely to a great extent on the [[11]] of the person carrying them out.',
            'Okafor suggests that acoustic indices should serve as an [[12]] that a particular location needs to be investigated further.',
            'Many institutions in poorer countries cannot pay for the [[13]] needed to store and analyse large numbers of recordings.',
          ],
        },
      ],
      questions: [
        {
          n: 11,
          answers: ['skill'],
          location: {
            ref: 'A',
            quote: 'they depend heavily on the skill of the individual observer',
          },
          explanation:
            '“Rely to a great extent on” paraphrases “depend heavily on”, and “the person carrying them out” paraphrases “the individual observer”.',
          distractors: ['individual observer'],
        },
        {
          n: 12,
          answers: ['early warning'],
          location: {
            ref: 'E',
            quote:
              'acoustic indices are best treated as an early warning that a site deserves closer attention',
          },
          explanation:
            '“Serve as” paraphrases “are best treated as”, and “needs to be investigated further” paraphrases “deserves closer attention”. The article “an” before the gap fits “early warning”.',
          distractors: ['substitute'],
        },
        {
          n: 13,
          answers: ['computing power'],
          location: {
            ref: 'H',
            quote:
              'storing and processing vast quantities of sound requires computing power that many institutions in poorer countries',
          },
          explanation:
            '“Cannot pay for” paraphrases “cannot afford”, and “store and analyse large numbers of recordings” paraphrases “storing and processing vast quantities of sound”.',
          distractors: ['databases', 'software'],
        },
      ],
    },
  ],
})
