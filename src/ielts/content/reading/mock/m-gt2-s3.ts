import { definePassage } from '../../define'

/** Original text with fictional people and places. General Training Section 3 style. */
export default definePassage({
  id: 'm-gt2-s3',
  skill: 'reading',
  module: 'general',
  section: 'gt3',
  use: 'mock',
  title: 'Pressing on: the revival of letterpress printing',
  topic: 'Arts and crafts',
  intro: 'Original practice passage: the people, places and organisations described are fictional.',
  minutes: 23,
  level: 3,
  texts: [
    {
      title: 'Pressing on: the revival of letterpress printing',
      paragraphs: [
        {
          label: 'A',
          text: 'Walk into Clara Venn’s workshop in the market town of Hallbridge and the first thing you notice is the smell: a mixture of ink, oil and old paper. The second is the noise of a cast-iron press, more than a hundred years old, thumping steadily as Venn feeds sheets of thick cotton card into it one at a time. She produces wedding invitations, business cards and limited-edition posters, and new customers currently face a wait of around four months. Ten years ago, she says, most people she spoke to had never heard of letterpress; today, they arrive knowing exactly what they want.',
        },
        {
          label: 'B',
          text: 'Letterpress is the oldest form of printing with movable type. Individual metal or wooden letters are arranged by hand into lines of text, locked into a frame, inked and then pressed against paper. For roughly five centuries it was the principal way in which books, newspapers and posters were produced. From the 1960s, however, it was rapidly overtaken by offset lithography and later by digital printing, both of which were faster and far cheaper. Printing firms sold their presses for scrap or simply abandoned them, and compositors who had spent years learning to set type by hand found that their skills were no longer in demand.',
        },
        {
          label: 'C',
          text: 'That the craft survived at all is largely thanks to a handful of enthusiasts who rescued equipment that would otherwise have been destroyed. Gordon Ashby, a retired newspaper compositor, spent much of the 1980s touring the country in a borrowed van, collecting presses and cases of type from print shops that were closing down. “People thought I’d lost my mind,” he recalls. “Nobody could imagine that anyone would want this stuff again.” Much of what he saved now forms the core of the collection at the Hallbridge Print Museum, which runs weekend courses for beginners and lends equipment to newly established studios.',
        },
        {
          label: 'D',
          text: 'Ironically, the feature that today’s customers value most was once regarded as a fault. Traditional printers took great care to “kiss” the paper, applying just enough pressure to transfer the ink without marking the surface; a visible dent was a sign of poor workmanship. Many modern letterpress printers, by contrast, deliberately press hard into soft, heavy paper so that the letters sit in a slight hollow that can be felt with the fingertips. Venn admits that some older printers disapprove. “They tell me I’m doing it wrong,” she says, “and by their standards I am. But that impression is what people are paying for.”',
        },
        {
          label: 'E',
          text: 'Why should an obsolete technology appeal to a generation that grew up with screens? Dr Imogen Hart, a sociologist who has interviewed more than sixty letterpress customers and hobbyists, believes the answer lies partly in a desire for physical objects that show evidence of human effort. “When almost everything we read can be deleted in a second, something that has been made slowly, by hand, carries a different kind of value,” she argues. She is careful to add, however, that cost plays a part too: for most of the people she spoke to, letterpress is an occasional luxury, reserved for important events rather than part of everyday life.',
        },
        {
          label: 'F',
          text: 'The revival has not been entirely smooth. Because no new metal type has been cast in large quantities for decades, printers often struggle to find complete sets of letters, and worn or damaged pieces are hard to replace. Some studios have responded by having printing plates made from photopolymer, a light-sensitive plastic, which allows designs created on a computer to be printed on a traditional press. Purists complain that this is not “real” letterpress, but Rajiv Mehta, who runs a studio in a former bakery in the city of Darnford, sees no contradiction. “The press doesn’t care where the plate came from,” he says. “What matters is the care you take when you print.”',
        },
        {
          label: 'G',
          text: 'Whether the revival will last remains uncertain. Ashby worries that the number of people able to repair old presses is shrinking, and that when a vital part breaks there may soon be nobody left who knows how to make a replacement. Younger printers tend to be more optimistic. Mehta now offers a two-year apprenticeship, and Venn has begun recording short videos that explain the basics of press maintenance. “Ten years ago, I was the one learning from people in their seventies,” she says. “Now I’m the one being asked the questions.”',
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
          prompt: 'What does the writer suggest about Clara Venn’s business in paragraph A?',
          options: [
            { key: 'A', text: 'Most of its work is for weddings.' },
            { key: 'B', text: 'There is more demand than it can meet straight away.' },
            { key: 'C', text: 'It has recently moved to larger premises.' },
            { key: 'D', text: 'Its customers usually need the process explained to them.' },
          ],
          answer: 'B',
          location: {
            ref: 'A',
            quote: 'new customers currently face a wait of around four months',
          },
          explanation:
            'A four-month wait for new customers shows that demand is greater than Venn can satisfy immediately.',
          traps: {
            A: 'Wedding invitations are only one of three products listed; nothing says they make up most of her work.',
            C: 'The workshop is described, but nothing is said about a move or its size.',
            D: 'The opposite: customers now “arrive knowing exactly what they want”. Ten years ago people had not heard of letterpress, but that describes the past.',
          },
        },
        {
          n: 2,
          prompt: 'According to paragraph B, why did letterpress decline?',
          options: [
            { key: 'A', text: 'Customers came to dislike the way it looked.' },
            { key: 'B', text: 'Too few compositors were available to set type.' },
            { key: 'C', text: 'Other methods were quicker and less expensive.' },
            { key: 'D', text: 'Presses became too costly to repair.' },
          ],
          answer: 'C',
          location: {
            ref: 'B',
            quote: 'both of which were faster and far cheaper',
          },
          explanation:
            'Letterpress was overtaken by offset lithography and digital printing because they were “faster and far cheaper”: quicker and less expensive.',
          traps: {
            A: 'Nothing in paragraph B mentions customers’ opinions of how letterpress looked.',
            B: 'Compositors lost their jobs because their skills were no longer in demand; this was a result of the decline, not its cause, and there was no shortage of them.',
            D: 'Presses were sold for scrap or abandoned, but the text does not say this was because of repair costs.',
          },
        },
        {
          n: 3,
          prompt: 'What does the writer say about the dent that letters leave in the paper?',
          options: [
            { key: 'A', text: 'Printers in the past tried hard to prevent it.' },
            { key: 'B', text: 'It can only be produced on a modern press.' },
            { key: 'C', text: 'It works best on thin, smooth paper.' },
            { key: 'D', text: 'Older printers have begun to copy it.' },
          ],
          answer: 'A',
          location: {
            ref: 'D',
            quote:
              'applying just enough pressure to transfer the ink without marking the surface; a visible dent was a sign of poor workmanship',
          },
          explanation:
            'Traditional printers “took great care” to avoid marking the paper, because a dent showed poor workmanship. They tried hard to prevent it.',
          traps: {
            B: 'Modern printers make the dent, but on the same old presses; nothing says a modern press is needed.',
            C: 'The opposite: printers press into “soft, heavy paper”.',
            D: 'The opposite: some older printers “disapprove” of the practice.',
          },
        },
        {
          n: 4,
          prompt: 'Dr Hart found that, for most of the people she interviewed, letterpress',
          options: [
            { key: 'A', text: 'is something they buy only for special occasions.' },
            { key: 'B', text: 'helps them to spend less time looking at screens.' },
            { key: 'C', text: 'reminds them of the books they read as children.' },
            { key: 'D', text: 'is a hobby they would like to take up themselves.' },
          ],
          answer: 'A',
          location: {
            ref: 'E',
            quote:
              'letterpress is an occasional luxury, reserved for important events rather than part of everyday life',
          },
          explanation:
            '“Reserved for important events” and “an occasional luxury” mean they buy it only for special occasions.',
          traps: {
            B: 'Screens are mentioned to explain why hand-made objects feel valuable, but nobody says letterpress reduces their screen time.',
            C: 'The people grew up with screens; nothing is said about childhood books.',
            D: 'Some of her interviewees were already hobbyists, but no one is said to want to take it up.',
          },
        },
        {
          n: 5,
          prompt: 'Why have some studios started using photopolymer plates?',
          options: [
            { key: 'A', text: 'They make a deeper impression in the paper.' },
            { key: 'B', text: 'It is difficult to obtain full sets of metal type.' },
            { key: 'C', text: 'Customers prefer designs that are created on a computer.' },
            { key: 'D', text: 'They cost less than traditional metal type.' },
          ],
          answer: 'B',
          location: {
            ref: 'F',
            quote: 'printers often struggle to find complete sets of letters',
          },
          explanation:
            'Studios “have responded” to the problem of finding complete sets of letters, and damaged pieces being hard to replace, by using photopolymer plates.',
          traps: {
            A: 'Paragraph F says nothing about the depth of the impression.',
            C: 'Photopolymer allows computer designs to be printed, but the text does not say customers prefer them.',
            D: 'Cost is not compared anywhere in the paragraph.',
          },
        },
      ],
    },
    {
      type: 'match-features',
      instructions:
        'Look at the following statements and the list of people below. Match each statement with the correct person, A–D. You may use any letter more than once.',
      optionsTitle: 'List of people',
      options: [
        { key: 'A', text: 'Clara Venn' },
        { key: 'B', text: 'Gordon Ashby' },
        { key: 'C', text: 'Imogen Hart' },
        { key: 'D', text: 'Rajiv Mehta' },
      ],
      reuse: true,
      questions: [
        {
          n: 6,
          prompt: 'was not taken seriously by others when starting a particular project',
          answer: 'B',
          location: {
            ref: 'C',
            quote: 'People thought I’d lost my mind',
          },
          explanation:
            'When Ashby began collecting old presses in the 1980s, people thought he had “lost his mind” because nobody imagined the equipment would be wanted again.',
          traps: {
            A: 'Older printers tell Venn she is doing it wrong, but that is criticism of her technique, not of her starting a project.',
          },
        },
        {
          n: 7,
          prompt: 'accepts that their way of working breaks traditional rules',
          answer: 'A',
          location: {
            ref: 'D',
            quote: 'and by their standards I am',
          },
          explanation:
            'Venn agrees that, by older printers’ standards, pressing a deep impression is “doing it wrong”.',
          traps: {
            D: 'Mehta uses a method that purists criticise, but he “sees no contradiction”, so he does not accept that he is breaking the rules.',
          },
        },
        {
          n: 8,
          prompt: 'bases their views on discussions with a large number of people',
          answer: 'C',
          location: {
            ref: 'E',
            quote: 'has interviewed more than sixty letterpress customers and hobbyists',
          },
          explanation:
            'Hart’s explanation comes from interviews with more than sixty customers and hobbyists.',
        },
        {
          n: 9,
          prompt: 'believes the printer’s care matters more than where the materials come from',
          answer: 'D',
          location: {
            ref: 'F',
            quote: 'The press doesn’t care where the plate came from',
          },
          explanation:
            'Mehta says it does not matter where the plate came from; “what matters is the care you take when you print”.',
          traps: {
            B: 'Ashby is concerned about skills (repairing presses), but he says nothing about where materials come from.',
          },
        },
      ],
    },
    {
      type: 'completion',
      format: 'sentence',
      instructions:
        'Complete the sentences below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
      wordLimit: { words: 2 },
      body: [
        {
          kind: 'bullets',
          items: [
            'In letterpress, the letters are put into lines and fixed in a [[10]] before the ink is applied.',
            'Beginners can learn letterpress on [[11]] organised by the Hallbridge Print Museum.',
            'Photopolymer is a type of [[12]] that reacts to light.',
            'To pass on her knowledge, Clara Venn has started to make [[13]] about looking after presses.',
          ],
        },
      ],
      questions: [
        {
          n: 10,
          answers: ['frame'],
          location: {
            ref: 'B',
            quote: 'locked into a frame, inked and then pressed against paper',
          },
          explanation:
            '“Fixed in” paraphrases “locked into”, and “before the ink is applied” matches the order “locked into a frame, inked”.',
        },
        {
          n: 11,
          answers: ['weekend courses', 'courses'],
          location: {
            ref: 'C',
            quote: 'which runs weekend courses for beginners',
          },
          explanation:
            '“Organised by” paraphrases “runs”. The museum runs weekend courses for beginners.',
        },
        {
          n: 12,
          answers: ['plastic'],
          location: {
            ref: 'F',
            quote: 'photopolymer, a light-sensitive plastic',
          },
          explanation:
            '“Reacts to light” paraphrases “light-sensitive”, so photopolymer is a type of plastic.',
          distractors: ['printing plates', 'plates'],
        },
        {
          n: 13,
          answers: ['short videos', 'videos'],
          location: {
            ref: 'G',
            quote:
              'Venn has begun recording short videos that explain the basics of press maintenance',
          },
          explanation:
            '“Looking after presses” paraphrases “press maintenance”, and “started to make” paraphrases “begun recording”.',
          distractors: ['apprenticeship'],
        },
      ],
    },
  ],
})
