import { defineLesson } from '../define'

export default defineLesson({
  id: 'w-gt-tone',
  skill: 'writing',
  module: 'general',
  order: 5,
  title: 'Getting the tone of a letter right',
  summary:
    'Choose formal, semi-formal or informal from the reader, then match the opening, closing, phrasing and structure to that choice.',
  types: ['complaint', 'request', 'apology', 'invitation', 'thanks', 'explanation'],
  minutes: 9,
  sections: [
    {
      kind: 'text',
      heading: 'Tone is part of Task Achievement',
      paragraphs: [
        'In General Training Task 1 the examiner checks whether the **tone suits the reader** and stays consistent from the first word to the last. A perfectly accurate letter to a friend that sounds like a legal notice loses marks, and so does a complaint to a company that opens with “Hi there!”.',
        'The task usually tells you who the reader is: a company, a manager, a neighbour, a friend. **Decide the tone before you write a word,** then let it control every choice: the opening and closing, contractions, vocabulary and how directly you ask for things.',
      ],
    },
    {
      kind: 'compare',
      heading: 'The tone matrix',
      headers: ['Feature', 'Formal', 'Semi-formal', 'Informal'],
      rows: [
        [
          'Typical reader',
          'A company, an official, someone you have never met',
          'A manager, a landlord, a neighbour or teacher you know a little',
          'A friend or family member',
        ],
        [
          'Opening',
          'Dear Sir or Madam, / Dear Mr Patel,',
          'Dear Mrs Lee, / Dear Tom,',
          'Hi Sam, / Dear Sam,',
        ],
        [
          'Closing',
          'Yours faithfully, (no name in the greeting) / Yours sincerely, (named)',
          'Kind regards, / Best regards, / Yours sincerely,',
          'Best wishes, / Take care, / See you soon,',
        ],
        [
          'Contractions',
          'None: I am, I would, it does not',
          'Few or none',
          'Yes: I’m, I’d, it’s, can’t',
        ],
        [
          'Purpose sentence',
          'I am writing to complain about…',
          'I’m writing to ask whether…',
          'Just a quick note to say…',
        ],
        [
          'Making a request',
          'I would be grateful if you could…',
          'Would it be possible to…?',
          'Could you possibly…? / Any chance you could…?',
        ],
        [
          'Vocabulary',
          'Neutral and precise: purchase, inform, assistance',
          'Polite but plain: buy, let you know, help',
          'Conversational, phrasal verbs: pick up, sort out, catch up',
        ],
        ['Sign-off name', 'Full name (Amira Haddad)', 'First name or full name', 'First name only'],
      ],
    },
    {
      kind: 'compare',
      heading: 'Opening and closing pairs',
      headers: ['You…', 'Opening', 'Closing'],
      rows: [
        ['do not know the reader’s name', 'Dear Sir or Madam,', 'Yours faithfully,'],
        [
          'know the name, formal relationship',
          'Dear Mr Smith, / Dear Ms Okafor,',
          'Yours sincerely,',
        ],
        [
          'know the person a little',
          'Dear Anna, / Dear Mr Brown,',
          'Kind regards, / Best regards,',
        ],
        ['are close to the reader', 'Hi Sam, / Dear Sam,', 'Best wishes, / Take care, / Love,'],
      ],
    },
    {
      kind: 'steps',
      heading: 'A structure that works for every tone',
      items: [
        '**Greeting** that matches the reader (see the pairs above).',
        '**Paragraph 1: the purpose,** in one or two sentences. The reader should know why you are writing before the end of the first line.',
        '**One paragraph per bullet point,** in the order given. Three bullets = three body paragraphs, each fully developed with specific details.',
        '**A closing sentence** that says what happens next or what you want: “I look forward to hearing from you.” / “Let me know what you think!”',
        '**The matching sign-off** and your name. **No addresses and no date**: they are not required and add nothing to your score.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: fixing the first paragraph',
      context:
        'Task: You bought a coffee machine online and it stopped working after two weeks. Write a letter to the company. Describe the problem, explain what you have done so far, and say what you would like the company to do. A student began: “Dear Sir, My name is Ahmed and I am writing this letter to you. I hope you are fine. I want to tell you about something.”',
      question: 'Rewrite the opening so that the tone and purpose are clear.',
      answer:
        'Dear Sir or Madam, I am writing to complain about a coffee machine that I ordered from your website on 3 March, which stopped working after only two weeks, and to request a replacement.',
      reasoning: [
        '“Dear Sir” assumes the reader is a man; **Dear Sir or Madam** is the standard formal greeting when no name is given, and it requires **Yours faithfully** at the end.',
        'Your name appears at the bottom of the letter, so “My name is…” wastes words.',
        '“I hope you are fine” is friendly small talk that does not suit a formal complaint to a company.',
        'The new sentence states the **purpose** (to complain and to request a replacement) and gives a specific detail, so the reader knows exactly what the letter is about.',
      ],
    },
    {
      kind: 'list',
      heading: 'Quick tone signals',
      items: [
        '**Formal:** full verb forms, polite modals (would, could), the passive where natural (“the item was delivered damaged”), no exclamation marks.',
        '**Semi-formal:** polite and warm, direct questions are fine, a few friendly phrases (“I hope you had a good weekend”) when you know the person.',
        '**Informal:** contractions, phrasal verbs, questions to the reader (“How’s the new job?”), an occasional exclamation mark — but still well-organised paragraphs.',
      ],
    },
    {
      kind: 'trap',
      text: '**Mixed signals.** “Dear Sir or Madam … Cheers, Ahmed”, “Hi Mr Smith”, or “Yours faithfully” after “Dear Mrs Lee” all tell the examiner your control of tone is inconsistent. The opposite trap is just as common: an informal letter to a friend that says “I am writing to inform you that I shall be visiting your city.”',
    },
    {
      kind: 'tip',
      text: 'Before you finish, **read the letter as the recipient**. Would your friend smile, or wonder why you sound like a bank? Would the company manager take you seriously? One sentence in the wrong tone is easy to fix in the last two minutes.',
    },
  ],
  drills: [],
})
