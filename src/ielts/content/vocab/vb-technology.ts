import { defineVocabDeck } from '../define'

export default defineVocabDeck({
  id: 'vb-technology',
  kind: 'topic',
  title: 'Technology',
  topic: 'Technology',
  description:
    'Precise words and collocations for Task 2 essays and Part 3 answers on the internet, automation and digital life.',
  skills: ['writing', 'speaking', 'reading'],
  cards: [
    {
      id: 'digital-literacy',
      term: 'digital literacy',
      meaning: 'the ability to use digital devices and judge online information sensibly',
      example:
        'Digital literacy should be taught alongside reading and writing, since so much information now arrives through screens.',
      pos: 'adjective + noun',
    },
    {
      id: 'automation',
      term: 'automation',
      meaning: 'the use of machines or software to do work previously done by people',
      example:
        'Automation has already replaced many routine factory jobs and is now spreading to office work.',
      pos: 'noun',
      note: 'Verb: automate; adjective: automated (automated checkouts).',
    },
    {
      id: 'obsolete',
      term: 'obsolete',
      meaning: 'no longer used because something newer and better exists',
      example: 'Many skills that were valuable twenty years ago have become obsolete.',
      pos: 'adjective',
      note: 'Collocates with “become” and “render”: render a device obsolete.',
    },
    {
      id: 'cutting-edge',
      term: 'cutting-edge (technology)',
      meaning: 'the newest and most advanced',
      example:
        'Hospitals in wealthy cities can afford cutting-edge equipment that rural clinics cannot.',
      pos: 'compound adjective',
      note: 'Hyphenated before a noun. Noun use: “at the cutting edge of research”.',
    },
    {
      id: 'surveillance',
      term: 'surveillance',
      meaning: 'the careful watching of people, especially by governments or companies',
      example:
        'The growth of online surveillance raises serious questions about who controls personal information.',
      pos: 'noun',
      note: 'Uncountable. Often “mass surveillance”, “under surveillance”.',
    },
    {
      id: 'data-breach',
      term: 'a data breach',
      meaning: 'an incident in which private information is stolen or exposed',
      example: 'A single data breach can expose the bank details of millions of customers.',
      pos: 'noun + noun',
    },
    {
      id: 'digital-divide',
      term: 'the digital divide',
      meaning: 'the gap between people who have access to modern technology and those who do not',
      example:
        'Moving public services online risks deepening the digital divide between young and elderly citizens.',
      pos: 'noun phrase',
      note: 'Collocates with bridge, close, deepen, widen.',
    },
    {
      id: 'screen-time',
      term: 'screen time',
      meaning: 'the amount of time spent looking at phones, computers or televisions',
      example: 'Many parents set strict limits on screen time, especially before bed.',
      pos: 'noun + noun',
      note: 'Uncountable: “too much screen time”, not “too many screen times”.',
    },
    {
      id: 'addictive-by-design',
      term: 'addictive',
      meaning: 'making people want to keep using something, often against their interests',
      example:
        'Some social media platforms are deliberately addictive, rewarding users for constant scrolling.',
      pos: 'adjective',
      note: 'Addictive = causes addiction (an app). Addicted = suffering from it (a person is addicted to something).',
    },
    {
      id: 'disrupt',
      term: 'disrupt (an industry)',
      meaning: 'to change an industry completely by introducing a new way of doing things',
      example:
        'Streaming services have disrupted the music industry, changing how artists earn money.',
      pos: 'verb',
      note: 'Noun: disruption; adjective: disruptive technology.',
    },
    {
      id: 'harness',
      term: 'harness (the potential of)',
      meaning: 'to control and use something in order to gain its benefits',
      example:
        'Governments should harness the potential of technology to make public services more efficient.',
      pos: 'verb',
      note: 'Also: harness solar power, harness data.',
    },
    {
      id: 'drive-innovation',
      term: 'drive innovation',
      meaning: 'to be the main force that causes new ideas and products to develop',
      example: 'Fierce competition between tech firms tends to drive innovation and lower prices.',
      pos: 'verb + noun',
      note: 'Also “stifle innovation” (the opposite).',
    },
    {
      id: 'labour-saving-devices',
      term: 'labour-saving devices',
      meaning: 'machines that reduce the effort needed for everyday tasks',
      example:
        'Labour-saving devices such as washing machines transformed domestic life in the twentieth century.',
      pos: 'adjective + noun',
      note: 'British spelling: labour.',
    },
    {
      id: 'intuitive',
      term: 'intuitive',
      meaning: 'easy to understand and use without instructions',
      example:
        'Older users are more likely to adopt new apps if the design is simple and intuitive.',
      pos: 'adjective',
      note: 'More precise than “user-friendly” in formal writing.',
    },
    {
      id: 'misinformation',
      term: 'misinformation',
      meaning: 'false or inaccurate information, especially when it spreads widely',
      example:
        'During a health crisis, misinformation can spread faster online than official advice.',
      pos: 'noun',
      note: 'Uncountable. “Disinformation” means false information spread deliberately.',
    },
    {
      id: 'algorithm',
      term: 'algorithm',
      meaning: 'a set of rules a computer follows, for example to decide what content to show',
      example:
        'Recommendation algorithms may trap users in a bubble of opinions they already hold.',
      pos: 'noun',
      note: 'Adjective: algorithmic.',
    },
    {
      id: 'tech-savvy',
      term: 'tech-savvy',
      meaning: 'knowing a lot about modern technology and using it confidently',
      example: 'My grandmother is surprisingly tech-savvy and video-calls us every weekend.',
      pos: 'compound adjective',
      note: 'Fairly informal: good for Speaking; in essays prefer “digitally literate”.',
    },
    {
      id: 'keep-pace-with',
      term: 'keep pace with',
      meaning: 'to change or develop as fast as something else',
      example: 'Laws on privacy have struggled to keep pace with the rapid growth of social media.',
      pos: 'verb phrase',
    },
    {
      id: 'supersede',
      term: 'supersede',
      meaning: 'to replace something older or less effective',
      example: 'Paper tickets have largely been superseded by digital passes on smartphones.',
      pos: 'verb',
      note: 'Often passive. Spelled with -sede, not -cede.',
    },
    {
      id: 'artificial-intelligence',
      term: 'artificial intelligence (AI)',
      meaning: 'computer systems that perform tasks normally requiring human thinking',
      example: 'Artificial intelligence is already used to detect diseases in medical scans.',
      pos: 'adjective + noun',
      note: 'Write it in full the first time in an essay, then “AI”.',
    },
    {
      id: 'harvest-personal-data',
      term: 'harvest personal data',
      meaning:
        'to collect large amounts of information about users, often without their full awareness',
      example:
        'Free apps often make money by harvesting personal data and selling it to advertisers.',
      pos: 'verb + noun',
      note: '“Data” is usually uncountable: “data is collected” is acceptable in most contexts.',
    },
    {
      id: 'cybersecurity',
      term: 'cybersecurity',
      meaning: 'the protection of computer systems and networks from attack',
      example: 'Banks invest heavily in cybersecurity to protect customers’ savings from hackers.',
      pos: 'noun',
      note: 'Also written “cyber security”. Related: cyberattack, cybercrime.',
    },
    {
      id: 'over-reliance',
      term: 'over-reliance on',
      meaning: 'depending on something too much',
      example:
        'An over-reliance on calculators may weaken pupils’ ability to do mental arithmetic.',
      pos: 'noun + preposition',
      note: 'Preposition is “on”, not “to”. Verb: over-rely on.',
    },
    {
      id: 'anonymity',
      term: 'anonymity',
      meaning: 'the state of not having your name or identity known',
      example:
        'The anonymity of online forums encourages some users to behave in ways they never would face to face.',
      pos: 'noun',
      note: 'Adjective: anonymous. Stress: a-no-NYM-i-ty.',
    },
    {
      id: 'breakthrough',
      term: 'a breakthrough (in)',
      meaning: 'an important discovery or development that solves a problem',
      example: 'Recent breakthroughs in battery technology could make electric cars far cheaper.',
      pos: 'noun',
      note: 'Collocates with “major”, “significant”; “achieve / make a breakthrough”.',
    },
    {
      id: 'face-to-face-interaction',
      term: 'face-to-face interaction',
      meaning: 'communication in which people meet in person',
      example:
        'Some psychologists worry that children are losing the skills that come from face-to-face interaction.',
      pos: 'adjective + noun',
      note: 'Hyphenated before a noun; no hyphens as an adverb (“meet face to face”).',
    },
    {
      id: 'streamline',
      term: 'streamline (a process)',
      meaning: 'to make a system simpler and more efficient',
      example:
        'Online booking systems have streamlined the process of making a doctor’s appointment.',
      pos: 'verb',
    },
    {
      id: 'invasion-of-privacy',
      term: 'an invasion of privacy',
      meaning: 'an unwelcome intrusion into someone’s private life',
      example:
        'Many employees regard the monitoring of their personal messages as an invasion of privacy.',
      pos: 'noun phrase',
      note: 'Also “invade someone’s privacy”. British pronunciation: PRIV-acy (short i).',
    },
    {
      id: 'regulate',
      term: 'regulate',
      meaning: 'to control an activity by means of rules or laws',
      example:
        'There is growing pressure on governments to regulate large technology companies more strictly.',
      pos: 'verb',
      note: 'Noun: regulation; “a regulatory body”.',
    },
    {
      id: 'unprecedented',
      term: 'unprecedented',
      meaning: 'never having happened or existed before',
      example: 'The internet has given ordinary people unprecedented access to information.',
      pos: 'adjective',
      note: 'Overused in journalism; use it only when something truly is new.',
    },
  ],
})
