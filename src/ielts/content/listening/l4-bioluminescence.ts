import { defineListening } from '../define'

/** Original script. Part 4 style: a marine biology lecture on how and why sea creatures produce light. */
export default defineListening({
  id: 'l4-bioluminescence',
  skill: 'listening',
  part: 4,
  use: 'practice',
  title: 'Bioluminescence in marine life',
  topic: 'Marine biology',
  context:
    'You will hear a lecturer giving a talk on bioluminescence in marine animals. First, you have some time to look at questions 1 to 10.',
  speakers: [
    { id: 'lecturer', name: 'Dr Ashworth', role: 'Lecturer', gender: 'f', accent: 'en-GB' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'lecturer',
      text: 'Good morning. Today we’re turning to one of the most remarkable features of ocean life: bioluminescence, which is simply the production of light by living organisms.',
    },
    {
      id: 'l2',
      speaker: 'lecturer',
      text: 'On land it’s fairly rare. Fireflies are the example everyone knows. But in the sea, and particularly in the deep sea, it’s the rule rather than the exception.',
    },
    {
      id: 'l3',
      speaker: 'lecturer',
      text: 'Surveys using submersibles suggest that around three-quarters of the animals living in the water column below two hundred metres can produce light of some kind.',
    },
    {
      id: 'l4',
      speaker: 'lecturer',
      text: 'What makes this light so unusual is its efficiency. An old-fashioned light bulb wastes most of its energy, but with bioluminescence hardly any energy is lost as heat. That’s why it’s often described as “cold light”.',
    },
    {
      id: 'l5',
      speaker: 'lecturer',
      text: 'So how is the light actually produced? In most cases it comes from a chemical reaction. A light-emitting compound, known generally as luciferin, combines with oxygen.',
    },
    {
      id: 'l6',
      speaker: 'lecturer',
      text: 'The reaction is speeded up by an enzyme, called luciferase, and the energy released is given off as light. The details vary enormously from one group of animals to another.',
    },
    {
      id: 'l7',
      speaker: 'lecturer',
      text: 'Not every glowing animal makes its own light, however. A number of fish and squid rely on bacteria, which they keep in special pouches called light organs.',
    },
    {
      id: 'l8',
      speaker: 'lecturer',
      text: 'The host provides the bacteria with nutrients and shelter, and in return it gets a permanent source of light. It’s a very neat partnership.',
    },
    {
      id: 'l9',
      speaker: 'lecturer',
      text: 'You might also wonder why nearly all marine light is blue. The answer lies in the physics of the ocean. Red light is absorbed within the first few metres, whereas blue light travels furthest through seawater.',
    },
    {
      id: 'l10',
      speaker: 'lecturer',
      text: 'So blue is the colour that most marine animals have evolved to see, and therefore the most useful colour to produce.',
    },
    {
      id: 'l11',
      speaker: 'lecturer',
      text: 'Moving on now to the question of why animals produce light. Biologists usually group the functions into three broad categories: defence, finding food, and communication. Let’s start with defence.',
    },
    {
      id: 'l12',
      speaker: 'lecturer',
      text: 'In the twilight zone, a little sunlight still filters down from the surface. A predator looking up from below can easily spot any animal swimming above it against that faint background light.',
    },
    {
      id: 'l13',
      speaker: 'lecturer',
      text: 'Many species solve this with a trick called counter-illumination. Light organs on the underside of the body produce a glow that matches the light from above, so the animal’s silhouette effectively disappears.',
    },
    {
      id: 'l14',
      speaker: 'lecturer',
      text: 'Other animals use light to escape once they’ve been noticed. You’ll know that squid release ink to confuse an attacker. In the dark, ink is useless, of course.',
    },
    {
      id: 'l15',
      speaker: 'lecturer',
      text: 'So certain deep-sea shrimps do something similar but brighter: they squirt out a glowing liquid, which leaves the predator snapping at empty water while the shrimp swims away.',
    },
    {
      id: 'l16',
      speaker: 'lecturer',
      text: 'A third defensive strategy has been nicknamed the burglar alarm. Some tiny plankton flash when they’re disturbed by a grazing animal.',
    },
    {
      id: 'l17',
      speaker: 'lecturer',
      text: 'The flash itself doesn’t harm the grazer. But it draws the attention of larger predators, which may then eat the animal that was feeding on the plankton.',
    },
    {
      id: 'l18',
      speaker: 'lecturer',
      text: 'Turning now to the second function, finding food. The best-known example is the anglerfish. The female has a long spine on its head, and at the tip is a glowing lure, which it dangles in front of its mouth.',
    },
    {
      id: 'l19',
      speaker: 'lecturer',
      text: 'Small fish swim towards the light, thinking it might be something to eat, and are swallowed whole.',
    },
    {
      id: 'l20',
      speaker: 'lecturer',
      text: 'An even cleverer hunter is the dragonfish. As I said, most deep-sea animals can’t detect red light. Some dragonfish, though, produce red light from organs beneath their eyes.',
    },
    {
      id: 'l21',
      speaker: 'lecturer',
      text: 'This works rather like a private searchlight. The dragonfish can see its prey, but the prey has no idea it’s being watched.',
    },
    {
      id: 'l22',
      speaker: 'lecturer',
      text: 'Finally, communication. This is the hardest function to study, because it means watching animals behave naturally in the dark. But there are some well-documented cases.',
    },
    {
      id: 'l23',
      speaker: 'lecturer',
      text: 'In shallow tropical waters, for instance, tiny crustaceans called ostracods put on light displays after sunset. The males release a series of glowing dots as they swim, and each species has its own pattern.',
    },
    {
      id: 'l24',
      speaker: 'lecturer',
      text: 'The purpose of these displays is to attract females, who can recognise a male of their own species from the spacing of the dots.',
    },
    {
      id: 'l25',
      speaker: 'lecturer',
      text: 'Next week we’ll look at how researchers have adapted the chemistry of bioluminescence for use in medicine. But for now, are there any questions?',
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'note',
      instructions: 'Complete the notes below.',
      wordLimit: { words: 1, number: false },
      title: 'Bioluminescence in marine life',
      body: [
        { kind: 'heading', text: 'Introduction' },
        {
          kind: 'bullets',
          items: [
            'Common in the deep sea: about 75% of animals below 200 m produce light',
            'Very efficient: almost no energy is lost as [[1]]',
          ],
        },
        { kind: 'heading', text: 'How the light is produced' },
        {
          kind: 'bullets',
          items: [
            'Usually a chemical reaction: luciferin combines with [[2]], helped by an enzyme',
            'Some fish and squid use [[3]] kept in light organs',
            'Light is mostly blue, because blue travels furthest through [[4]]',
          ],
        },
        { kind: 'heading', text: 'Functions: defence' },
        {
          kind: 'bullets',
          items: [
            'Counter-illumination: a glow on the underside hides the animal’s [[5]]',
            'Some shrimps release a glowing [[6]] to distract predators',
            '“Burglar alarm”: plankton flash to attract larger [[7]]',
          ],
        },
        { kind: 'heading', text: 'Functions: finding food' },
        {
          kind: 'bullets',
          items: [
            'Anglerfish: prey is attracted to a [[8]] on the fish’s head',
            'Dragonfish: produce [[9]] light, which their prey cannot see',
          ],
        },
        { kind: 'heading', text: 'Functions: communication' },
        {
          kind: 'bullets',
          items: ['Ostracods: males create patterns of light to attract [[10]]'],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['heat'],
          location: { ref: 'l4', quote: 'hardly any energy is lost as heat' },
          explanation:
            '“Hardly any” = “almost no”. This is why bioluminescence is called “cold light”.',
          distractors: ['energy'],
        },
        {
          n: 2,
          answers: ['oxygen'],
          location: { ref: 'l5', quote: 'luciferin, combines with oxygen' },
          explanation:
            'Luciferin combines with oxygen; the enzyme (luciferase) only speeds up the reaction, and the note already mentions it.',
          distractors: ['luciferase', 'enzyme'],
        },
        {
          n: 3,
          answers: ['bacteria'],
          location: { ref: 'l7', quote: 'A number of fish and squid rely on bacteria' },
          explanation:
            '“Special pouches called light organs” matches “kept in light organs”. Note the plural form “bacteria”.',
        },
        {
          n: 4,
          answers: ['seawater', 'water'],
          location: { ref: 'l9', quote: 'blue light travels furthest through seawater' },
          explanation:
            'Red light is absorbed quickly; blue travels furthest through seawater. “Sea water” as two words would break the ONE WORD limit, so write “seawater” or “water”.',
        },
        {
          n: 5,
          answers: ['silhouette'],
          location: { ref: 'l13', quote: 'so the animal’s silhouette effectively disappears' },
          explanation:
            '“Hides” paraphrases “effectively disappears”. The word must be spelled correctly: s-i-l-h-o-u-e-t-t-e.',
        },
        {
          n: 6,
          answers: ['liquid'],
          location: { ref: 'l15', quote: 'they squirt out a glowing liquid' },
          explanation:
            'Ink is what squid use, and the lecturer says it is useless in the dark. Shrimps squirt out a glowing liquid.',
          distractors: ['ink'],
        },
        {
          n: 7,
          answers: ['predators'],
          location: { ref: 'l17', quote: 'it draws the attention of larger predators' },
          explanation:
            '“Draws the attention of” = “attract”. The grazer is the animal that disturbs the plankton, not the one attracted.',
          distractors: ['grazers'],
        },
        {
          n: 8,
          answers: ['lure'],
          location: { ref: 'l18', quote: 'at the tip is a glowing lure' },
          explanation:
            'The lure sits at the tip of a spine on the head. “Spine” is the support, not what attracts the prey.',
          distractors: ['spine'],
        },
        {
          n: 9,
          answers: ['red'],
          location: { ref: 'l20', quote: 'Some dragonfish, though, produce red light' },
          explanation:
            'Most deep-sea animals cannot detect red light, so the dragonfish can see its prey without being seen. Blue is the usual colour — the distractor.',
          distractors: ['blue'],
        },
        {
          n: 10,
          answers: ['females'],
          location: { ref: 'l24', quote: 'The purpose of these displays is to attract females' },
          explanation:
            '“Patterns of light” are the glowing dots the males release. Their purpose is to attract females.',
          distractors: ['males'],
        },
      ],
    },
  ],
})
