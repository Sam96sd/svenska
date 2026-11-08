import { definePassage } from '../../define'

/** Original text. General Training mock test 1, Section 3: one long general-interest article. */
export default definePassage({
  id: 'm-gt1-s3',
  skill: 'reading',
  module: 'general',
  section: 'gt3',
  use: 'mock',
  title: 'Books for all: the long road to the public library',
  topic: 'History',
  intro:
    'Original practice passage: Hadleigh Cross, its library and the people described are fictional, and the national history is simplified.',
  minutes: 23,
  level: 3,
  texts: [
    {
      title: 'Books for all: the long road to the public library',
      paragraphs: [
        {
          label: 'A',
          text: 'On a weekday morning, the public library in Hadleigh Cross, a former mill town in the north of England, is rarely quiet. A group of toddlers and their carers are singing in the children’s corner, a retired man is being shown how to renew his bus pass online, and at the long tables by the window several students are revising for exams. Few of them are borrowing books. The library’s founders, who opened its doors in 1868, would be puzzled by much of this. Yet the arguments that surrounded its birth – about who a library is for, and who should pay for it – have never entirely gone away.',
        },
        {
          label: 'B',
          text: 'Long before councils ran libraries, books could be borrowed by those who were able to pay. In the eighteenth century, subscription libraries were set up in many towns: members paid an entrance fee and an annual charge, jointly owned the collection, and chose new titles by a vote of the membership. Their members were mostly merchants, doctors and clergymen. Commercial circulating libraries, often run from the back of a bookshop, lent popular novels for a few pence a volume. Working people had fewer options. Some joined mechanics’ institutes, which offered lectures and reading rooms, but the fees and the opening hours put them beyond the reach of many labourers.',
        },
        {
          label: 'C',
          text: 'In 1850, Parliament passed a law allowing larger towns to fund a free library from the local rates, a tax paid by the occupiers of property, who were known as ratepayers. The idea was fiercely contested. Opponents objected to paying for other people’s reading, and some warned that free books would spread dangerous political ideas among the poor. Supporters replied that a warm, well-lit reading room would tempt working men away from the public house and make them better citizens. A library could only be established if the town’s ratepayers voted in favour, and many towns rejected the proposal, some more than once. Even where it was accepted, the money could at first be spent on buildings and staff but not on books, so early collections depended heavily on donations.',
        },
        {
          label: 'D',
          text: 'Hadleigh Cross was one of the reluctant towns. Its ratepayers turned the proposal down in 1864 and again in 1866, largely because they feared that the tax would rise year after year. The deadlock was broken by Josiah Penhallow, the owner of the town’s largest cotton mill, who offered to pay for a building himself on condition that the council covered the running costs. He attached two further conditions: that the newspaper room should stay open until ten o’clock at night, so that people could visit after their shifts, and that nobody should be refused entry because of their clothes. A third vote was held, and this time the proposal was passed by a comfortable margin.',
        },
        {
          label: 'E',
          text: 'Visitors to the new library could not simply walk up to the shelves. Hadleigh Cross used a closed-access system: the books were kept behind a long counter, and readers had to find a title in a printed catalogue and then ask an assistant to fetch it. Since the catalogue was often out of date, borrowers frequently left with a book they had not wanted, or with nothing at all. The system was designed to protect the collection from theft and damage, but it also prevented the browsing that many readers enjoyed. When libraries began to experiment with open access in the 1890s, critics predicted that the shelves would quickly be stripped bare. In practice, losses proved to be modest, and borrowing rose sharply. Hadleigh Cross removed its counter in 1907, and its loans doubled within three years.',
        },
        {
          label: 'F',
          text: 'For several decades the public library was very much an adult space. Many refused to admit anyone under the age of fourteen, believing that children would be noisy and treat the books carelessly. At Hadleigh Cross, younger borrowers were accepted from the age of twelve, but only if a ratepayer signed a form promising to pay for any book that was lost or damaged. Attitudes changed in the early twentieth century, when separate children’s rooms began to appear, furnished with low shelves and small tables. Librarians introduced weekly story hours and paid regular visits to local schools. By the 1950s, children’s books accounted for almost half of all loans at Hadleigh Cross.',
        },
        {
          label: 'G',
          text: 'The past two decades have been more difficult. Reductions in council budgets have led to shorter opening hours and, in some places, closures. The arrival of e-books and online shopping led some commentators to predict that libraries would soon disappear. Instead, many have reinvented themselves as community hubs, offering free internet access, help with official forms and simply a warm place to sit for people who cannot afford to heat their homes. Hadleigh Cross now lends fewer books than it did in 1990, but it welcomes more visitors. Whether local taxpayers should fund such services is once again a matter of debate, and the case for the library is still being made, much as it was in the 1860s.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'headings',
      instructions:
        'The text has seven paragraphs, A–G. Choose the correct heading for paragraphs B–G from the list of headings below. There are more headings than paragraphs.',
      headings: [
        { key: 'i', text: 'Borrowing for those who could afford it' },
        { key: 'ii', text: 'A divided response to paying for libraries from taxes' },
        { key: 'iii', text: 'A local employer finds a way forward' },
        { key: 'iv', text: 'The success of the commercial lending library' },
        { key: 'v', text: 'From the counter to the open shelf' },
        { key: 'vi', text: 'Making room for younger readers' },
        { key: 'vii', text: 'New roles, old arguments' },
        { key: 'viii', text: 'Keeping working men out of the public house' },
        { key: 'ix', text: 'Measures to prevent the theft of books' },
        { key: 'x', text: 'The decline of book borrowing' },
      ],
      questions: [
        {
          n: 1,
          para: 'B',
          answer: 'i',
          location: {
            ref: 'B',
            quote:
              'Long before councils ran libraries, books could be borrowed by those who were able to pay.',
          },
          explanation:
            'Paragraph B describes the paid ways of borrowing books before public libraries existed – subscription libraries, circulating libraries and mechanics’ institutes – and notes that fees kept many working people out.',
          traps: {
            iv: 'Circulating libraries are only one of three examples, and the paragraph says nothing about their success.',
          },
        },
        {
          n: 2,
          para: 'C',
          answer: 'ii',
          location: { ref: 'C', quote: 'The idea was fiercely contested.' },
          explanation:
            'Paragraph C sets out the 1850 law allowing libraries to be funded from the rates and the arguments of opponents and supporters, and says many towns voted against it.',
          traps: {
            viii: 'Drawing men away from the public house is only one argument used by supporters, not the main idea of the paragraph.',
          },
        },
        {
          n: 3,
          para: 'D',
          answer: 'iii',
          location: {
            ref: 'D',
            quote:
              'The deadlock was broken by Josiah Penhallow, the owner of the town’s largest cotton mill',
          },
          explanation:
            'After two rejected votes, a mill owner (an employer) offered to pay for the building, and the third vote succeeded. “Finds a way forward” paraphrases “the deadlock was broken”.',
        },
        {
          n: 4,
          para: 'E',
          answer: 'v',
          location: {
            ref: 'E',
            quote:
              'Hadleigh Cross removed its counter in 1907, and its loans doubled within three years.',
          },
          explanation:
            'Paragraph E describes the change from closed access, with books kept behind a counter, to open access, which let readers browse the shelves themselves.',
          traps: {
            ix: 'Protection from theft is given as the reason for the closed-access system, but the paragraph is about how that system was replaced, and losses under open access proved modest.',
          },
        },
        {
          n: 5,
          para: 'F',
          answer: 'vi',
          location: {
            ref: 'F',
            quote:
              'separate children’s rooms began to appear, furnished with low shelves and small tables',
          },
          explanation:
            'Paragraph F explains how libraries, at first closed to most children, began to provide rooms, story hours and school visits for them. “Making room” is meant both literally and figuratively.',
        },
        {
          n: 6,
          para: 'G',
          answer: 'vii',
          location: {
            ref: 'G',
            quote: 'many have reinvented themselves as community hubs',
          },
          explanation:
            'Paragraph G describes libraries’ new roles (internet access, help with forms, a warm place to sit) and says the old debate about who should pay has returned “much as it was in the 1860s”.',
          traps: {
            x: 'Hadleigh Cross lends fewer books than in 1990, but it welcomes more visitors, and the paragraph is about libraries adapting, not simply declining.',
          },
        },
      ],
    },
    {
      type: 'tfng',
      instructions:
        'Do the following statements agree with the information given in the text? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.',
      questions: [
        {
          n: 7,
          statement:
            'Members of subscription libraries had a say in which books were added to the collection.',
          answer: 'TRUE',
          location: { ref: 'B', quote: 'chose new titles by a vote of the membership' },
          explanation:
            'New titles were chosen “by a vote of the membership”, so members did have a say. “Books added to the collection” paraphrases “new titles”.',
        },
        {
          n: 8,
          statement:
            'When libraries were first funded from the rates, the money could be used to buy books.',
          answer: 'FALSE',
          location: {
            ref: 'C',
            quote: 'the money could at first be spent on buildings and staff but not on books',
          },
          explanation:
            'At first the money could be spent “not on books”, which is why early collections depended on donations. The statement contradicts this.',
        },
        {
          n: 9,
          statement: 'Josiah Penhallow had worked in a cotton mill before he became an owner.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'D',
            quote: 'Josiah Penhallow, the owner of the town’s largest cotton mill',
          },
          explanation:
            'The text tells us that Penhallow owned the largest mill and what conditions he set, but nothing about his earlier life or whether he had ever worked in a mill.',
        },
        {
          n: 10,
          statement: 'After open access was introduced, large numbers of books went missing.',
          answer: 'FALSE',
          location: { ref: 'E', quote: 'In practice, losses proved to be modest' },
          explanation:
            'Critics predicted that the shelves would be “stripped bare”, but in fact losses were “modest”, i.e. small. The statement repeats the critics’ prediction, which the text says was wrong.',
        },
      ],
    },
    {
      type: 'completion',
      format: 'summary',
      instructions:
        'Complete the summary below. Choose NO MORE THAN TWO WORDS from the text for each answer.',
      wordLimit: { words: 2 },
      title: 'Children and the public library',
      body: [
        {
          kind: 'text',
          text: 'For many years, public libraries were intended mainly for adults, and children were often turned away because they were expected to be noisy and careless with books. At Hadleigh Cross, children could borrow from the age of twelve, as long as a [[11]] agreed to cover the cost of any book that was lost or damaged. In the early twentieth century, special rooms for children were created, containing [[12]] and small tables. Librarians began holding weekly story hours and regularly went into [[13]].',
        },
      ],
      questions: [
        {
          n: 11,
          answers: ['ratepayer'],
          location: {
            ref: 'F',
            quote:
              'only if a ratepayer signed a form promising to pay for any book that was lost or damaged',
          },
          explanation:
            '“Agreed to cover the cost” paraphrases “signed a form promising to pay”. The person who had to sign was a ratepayer (a local taxpayer, as explained in paragraph C).',
          distractors: ['parent'],
        },
        {
          n: 12,
          answers: ['low shelves'],
          location: {
            ref: 'F',
            quote: 'furnished with low shelves and small tables',
          },
          explanation:
            '“Containing” paraphrases “furnished with”. “Small tables” is already in the summary, so the answer is “low shelves”.',
        },
        {
          n: 13,
          answers: ['local schools', 'schools'],
          location: { ref: 'F', quote: 'paid regular visits to local schools' },
          explanation:
            '“Regularly went to” paraphrases “paid regular visits to”. Both “local schools” and “schools” fit the gap.',
        },
      ],
    },
  ],
})
