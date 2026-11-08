import { definePassage } from '../../define'

/** Original text. General Training Section 2 style: a workplace policy and an FAQ. */
export default definePassage({
  id: 'gt2-flexible-working',
  skill: 'reading',
  module: 'general',
  section: 'gt2',
  use: 'practice',
  title: 'Calder & Moss: flexible working',
  topic: 'Work',
  minutes: 20,
  level: 2,
  texts: [
    {
      kind: 'Company policy',
      title: 'Calder & Moss Insurance – Flexible working policy',
      paragraphs: [
        {
          label: 'A',
          text: 'Any employee with a permanent contract may apply for flexible working once they have completed 26 weeks of continuous service with the company. Employees may make one formal request in any twelve-month period, so it is worth thinking carefully about exactly what you want before you apply. Staff who have not yet reached 26 weeks are still welcome to discuss small informal adjustments with their manager, but such discussions will not be treated as a formal application under this policy.',
        },
        {
          label: 'B',
          text: 'Flexible working can take many forms. Some employees choose to reduce their hours, either by working fewer days or by working shorter days. Others keep the same total hours but work them over fewer days – for example, four longer days instead of five. Staggered hours, where an employee starts and finishes earlier or later than usual, are popular with parents, while a combination of office and home working suits many roles in our claims and finance teams. Job sharing, in which two people divide one full-time post between them, is also possible in some departments.',
        },
        {
          label: 'C',
          text: 'Every request will be considered seriously, and managers are expected to look for ways of agreeing to it, even if not in exactly the form requested. There are, however, situations in which a request cannot be approved. These include cases where the change would lead to unacceptable extra costs, where it would harm the quality of service to customers, or where the work cannot be reorganised among other members of the team. If a request is refused, the manager must explain in writing which of these reasons applies.',
        },
        {
          label: 'D',
          text: 'Where a manager is uncertain whether a new arrangement will work in practice, they may agree to it for a trial period, normally of three months. During the trial, the employee and manager should meet at least once a month to discuss how things are going. At the end of the trial, the arrangement will either be confirmed as a permanent change to the employee’s contract or, if it has caused difficulties that cannot be solved, the employee will go back to their previous working pattern.',
        },
        {
          label: 'E',
          text: 'Employees who reduce their hours will have their salary, holiday entitlement and pension contributions adjusted in proportion to the hours they work. For example, an employee who moves from five days a week to four will receive 80 per cent of their previous salary. Changes that do not reduce total hours, such as staggered start times or compressed hours, have no effect on pay. Employees are advised to check how a change might affect any state benefits or tax credits they receive before applying.',
        },
        {
          label: 'F',
          text: 'An employee who is unhappy with the outcome of their request may appeal within 14 days of receiving the decision. Appeals should be sent to the HR department and will be heard by a senior manager who was not involved in the original decision. The employee may bring a colleague or a trade union representative to the appeal meeting. The decision made at appeal is final.',
        },
      ],
    },
    {
      kind: 'Frequently asked questions',
      title: 'Flexible working: your questions answered',
      paragraphs: [
        {
          text: 'How do I apply? Download the flexible working application form from the HR section of the intranet. On the form, describe the working pattern you would like, your preferred start date and how you think any effects on your team could be managed. Send the completed form to your line manager rather than to HR, and keep a copy for your own records.',
        },
        {
          text: 'What happens next? Your manager will confirm that they have received your application within five working days and arrange a meeting with you, which should take place within four weeks. You are entitled to bring a colleague to this meeting. If you would find it difficult to attend in person – for example, because you are on leave or based at another site – the meeting can be held by video call.',
        },
        {
          text: 'When will I hear the decision? You will be told the outcome in writing within two weeks of the meeting. If your request is approved, HR will send you a contract variation letter, which you must sign and return before the new arrangement begins. If it is approved for a trial period only, the letter will also give the date of your final review.',
        },
        {
          text: 'Can I change my mind? Yes. You can withdraw your application at any time before a decision is made by emailing your manager. Once a new pattern has been confirmed as permanent, however, you cannot return to your old one unless your manager agrees, and asking to do so would count as your one formal request for the year.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'headings',
      instructions:
        'The policy has six sections, A–F. Choose the correct heading for each section from the list of headings below. There are more headings than sections.',
      headings: [
        { key: 'i', text: 'Reasons why a request may not be accepted' },
        { key: 'ii', text: 'Reaching a compromise with your manager' },
        { key: 'iii', text: 'Different ways of arranging working time' },
        { key: 'iv', text: 'The advantages of working from home' },
        { key: 'v', text: 'Who may apply, and how often' },
        { key: 'vi', text: 'Support for employees who have just joined' },
        { key: 'vii', text: 'Trying out a change before it is confirmed' },
        { key: 'viii', text: 'Returning to a former working pattern' },
        { key: 'ix', text: 'How a change affects earnings and entitlements' },
        { key: 'x', text: 'Asking for a decision to be reconsidered' },
        { key: 'xi', text: 'The role of trade union representatives' },
      ],
      questions: [
        {
          n: 1,
          para: 'A',
          answer: 'v',
          location: {
            ref: 'A',
            quote: 'Employees may make one formal request in any twelve-month period',
          },
          explanation:
            'Section A sets out who is eligible (permanent staff with 26 weeks’ service) and how often they may apply (once in twelve months).',
          traps: {
            vi: 'Newer staff are mentioned, but only to say they can have informal discussions; there is no description of support for them, and this is not the main idea.',
          },
        },
        {
          n: 2,
          para: 'B',
          answer: 'iii',
          location: { ref: 'B', quote: 'Flexible working can take many forms.' },
          explanation:
            'Section B lists the forms flexible working can take: reduced hours, compressed hours, staggered hours, home working and job sharing.',
          traps: {
            iv: 'Home working is only one of five options, and the section says which roles it suits rather than describing its advantages.',
          },
        },
        {
          n: 3,
          para: 'C',
          answer: 'i',
          location: {
            ref: 'C',
            quote: 'There are, however, situations in which a request cannot be approved.',
          },
          explanation:
            'Most of section C lists the grounds for refusing a request (cost, customer service, the work cannot be reorganised) and says the reason must be given in writing.',
          traps: {
            ii: 'Managers should look for ways to agree “even if not in exactly the form requested”, but this is a single opening point; the section is mainly about refusal.',
          },
        },
        {
          n: 4,
          para: 'D',
          answer: 'vii',
          location: { ref: 'D', quote: 'they may agree to it for a trial period' },
          explanation:
            'Section D is about trial periods: how long they last, monthly reviews and what happens at the end.',
          traps: {
            viii: 'Going back to the previous pattern is only one possible result at the end of a trial, so it is a detail, not the main idea.',
          },
        },
        {
          n: 5,
          para: 'E',
          answer: 'ix',
          location: {
            ref: 'E',
            quote:
              'will have their salary, holiday entitlement and pension contributions adjusted in proportion',
          },
          explanation:
            'Section E explains the effect of a change on salary, holiday and pension, i.e. earnings and entitlements.',
          traps: {
            iii: 'Staggered and compressed hours are named, but only to explain that they do not affect pay.',
          },
        },
        {
          n: 6,
          para: 'F',
          answer: 'x',
          location: {
            ref: 'F',
            quote: 'An employee who is unhappy with the outcome of their request may appeal',
          },
          explanation:
            'Section F describes the appeal process: an appeal is a request for a decision to be reconsidered by someone else.',
          traps: {
            xi: 'A union representative may attend the meeting, but this is one detail of the appeal process.',
          },
        },
      ],
    },
    {
      type: 'completion',
      format: 'flowchart',
      instructions:
        'Read “Flexible working: your questions answered”. Complete the flow-chart below. Choose NO MORE THAN TWO WORDS from the text for each answer.',
      wordLimit: { words: 2 },
      title: 'Applying for flexible working',
      body: [
        {
          kind: 'flow',
          steps: [
            'Download the application form from the HR section of the [[7]].',
            'Complete the form: give details of the pattern you want, your preferred [[8]] and how any effects on your team could be managed.',
            'Send the form to your [[9]] and keep a copy.',
            'Receipt is confirmed within five working days.',
            'Meeting (within four weeks): you may bring a [[10]]. If attending in person is difficult, the meeting can be held by [[11]].',
            'Written decision within two weeks of the meeting.',
            'If approved: sign and return the [[12]] letter before the new arrangement begins. If approved for a trial only: the letter states the date of your [[13]].',
          ],
        },
      ],
      questions: [
        {
          n: 7,
          answers: ['intranet'],
          location: {
            ref: 't1p0',
            quote:
              'Download the flexible working application form from the HR section of the intranet',
          },
          explanation: 'The form is downloaded from the HR section of the intranet.',
        },
        {
          n: 8,
          answers: ['start date'],
          location: { ref: 't1p0', quote: 'your preferred start date' },
          explanation:
            'The form asks for the working pattern, “your preferred start date” and how effects on the team could be managed.',
        },
        {
          n: 9,
          answers: ['line manager', 'manager'],
          location: {
            ref: 't1p0',
            quote: 'Send the completed form to your line manager rather than to HR',
          },
          explanation:
            'The form goes to your line manager. HR is a trap: the text says “rather than to HR”.',
          distractors: ['HR'],
        },
        {
          n: 10,
          answers: ['colleague'],
          location: {
            ref: 't1p1',
            quote: 'You are entitled to bring a colleague to this meeting.',
          },
          explanation:
            '“You may bring” paraphrases “you are entitled to bring”. A trade union representative is mentioned only for appeal meetings, in the policy.',
          distractors: ['trade union representative', 'union representative'],
        },
        {
          n: 11,
          answers: ['video call'],
          location: { ref: 't1p1', quote: 'the meeting can be held by video call' },
          explanation:
            '“If attending in person is difficult” paraphrases “If you would find it difficult to attend in person”.',
        },
        {
          n: 12,
          answers: ['contract variation'],
          location: {
            ref: 't1p2',
            quote: 'HR will send you a contract variation letter, which you must sign and return',
          },
          explanation:
            'The word “letter” is already in the flow-chart, so the answer is “contract variation”.',
        },
        {
          n: 13,
          answers: ['final review'],
          location: {
            ref: 't1p2',
            quote: 'the letter will also give the date of your final review',
          },
          explanation:
            '“States the date of” paraphrases “give the date of”. The answer is “final review”.',
        },
      ],
    },
  ],
})
