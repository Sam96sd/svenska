import { defineWritingTask } from '../define'

/** Original task and model answers. General Training Task 1, formal explanation. */
export default defineWritingTask({
  id: 'g1-explanation-late-rent',
  skill: 'writing',
  use: 'practice',
  module: 'general',
  task: 1,
  type: 'explanation',
  tone: 'formal',
  topic: 'Housing',
  title: 'A late rent payment',
  prompt:
    'You rent a flat through a letting agency. This month you will not be able to pay your rent on the date it is due.\n\nWrite a letter to the letting agency. In your letter',
  bullets: [
    'explain why your payment will be late',
    'say when you will be able to pay the full amount',
    'suggest an arrangement to stop this happening again',
  ],
  planHints: [
    'Who is the reader? Staff at an agency you don’t know personally → formal: “Dear Sir or Madam … Yours faithfully”. Stay calm and responsible: no emotional language, no blaming.',
    'Paragraph 1: the purpose in one sentence: your rent will be late, and you are writing to explain and propose a solution.',
    'Bullet 1: one clear, believable reason with specific details (what changed, when). Bullet 2: an exact date and the amount, and how you will pay.',
    'Bullet 3: a precise, reasonable proposal (e.g. a new payment date), supported by your good record as a tenant.',
    'Don’t write any addresses. Aim for 160–190 words.',
  ],
  models: [
    {
      band: 6,
      text: `Dear Sir or Madam,

I am writing about my rent for the flat 4B on Carlton Road. Unfortunately I cannot pay the rent on the 1st of this month like usually, I am really sorry about this.

The problem is that my company changed the system for paying salaries. Before we got paid on the last day of the month but from this month they pay on the 10th. Nobody told us before so I did not have time to prepare and I don’t have enough money in my account now. It is not my fault.

I will pay the full rent of £950 on 11 October, one day after I recieve my salary. I promise it will not be later than this date.

Maybe in the future we can change the date of payment to make it easier for me. Please let me know what do you think about this.

Thank you for understanding and sorry again!

Best wishes,
Daniel Osei`,
      annotations: [
        {
          quote: 'Best wishes,',
          note: 'The letter correctly opens with “Dear Sir or Madam” but closes informally. A formal letter to an unknown reader needs “Yours faithfully”.',
        },
        {
          quote: 'It is not my fault.',
          note: 'This sounds defensive, and “sorry again!” sounds casual. Both slip out of the calm, formal tone the reader expects, which limits Task Achievement.',
        },
        {
          quote: 'Maybe in the future we can change the date of payment to make it easier for me.',
          note: 'Bullet 3 is vague: which date? Why should the agency agree? The suggestion is there but not developed.',
        },
        {
          quote: 'Please let me know what do you think about this.',
          note: 'Word order in indirect questions (“what you think”), “like usually”, the comma splice in paragraph 1 and the spelling “recieve” keep GRA and LR at 6.',
        },
      ],
    },
    {
      band: 7,
      text: `Dear Sir or Madam,

I am writing to inform you that my rent payment for Flat 4B on Carlton Road will be late this month, and to explain why.

Recently, my employer changed the date on which salaries are paid. Until now, we have been paid on the last day of the month, but from October we will be paid on the 10th. As my rent is due on the 1st, I will not have enough money to pay it on time.

I will be able to pay the full amount of £950 on 11 October, the day after I receive my salary. I will pay by bank transfer as usual and send you a confirmation.

To avoid this problem in the future, I would like to suggest changing my payment date from the 1st to the 12th of each month. I have always paid my rent on time during the two years I have lived in the flat, so I hope this will be possible.

I apologise for any inconvenience and look forward to hearing from you.

Yours faithfully,
Daniel Osei`,
      annotations: [
        {
          quote:
            'I am writing to inform you that my rent payment for Flat 4B on Carlton Road will be late this month',
          note: 'The purpose is stated at once, and the tone is formal and consistent, with a correctly matched opening and closing.',
        },
        {
          quote: 'I will be able to pay the full amount of £950 on 11 October',
          note: 'Bullet 2 is answered precisely: the amount, the date and the method of payment.',
        },
        {
          quote:
            'I would like to suggest changing my payment date from the 1st to the 12th of each month.',
          note: 'A clear proposal supported by a reason (his good record), so bullet 3 is fully covered. The language is accurate but fairly plain (LR 7).',
        },
        {
          quote: 'Recently, my employer changed the date on which salaries are paid.',
          note: 'A relative clause with a preposition (“on which”) and a passive are used accurately. The explanation is clear, if a little general: when and why did the company change?',
        },
      ],
    },
    {
      band: 8.5,
      text: `Dear Sir or Madam,

I am writing to inform you that my rent for Flat 4B, Carlton Road, due on 1 October, will be paid a few days late, and to propose an arrangement that would prevent this from happening again.

The delay results from a change to my employer’s payroll system. Following a restructuring, staff are now paid on the 10th of each month rather than on the last working day, and we were given only two weeks’ notice. As a result, my September salary will not arrive until 10 October, leaving me unable to cover the full £950 on the due date.

I can, however, assure you that the rent will be transferred in full on 11 October, and I will forward you the bank confirmation the same day. Should it be helpful, I could also make a part-payment of £300 immediately.

Since this change is permanent, I would be grateful if you could consider moving my payment date to the 12th of each month. As I have paid promptly throughout my two-year tenancy, I trust you will consider this a reasonable request.

Thank you for your understanding.

Yours faithfully,
Daniel Osei`,
      annotations: [
        {
          quote: 'and to propose an arrangement that would prevent this from happening again',
          note: 'The opening states both purposes of the letter, the explanation and the proposal, so the reader knows exactly what to expect.',
        },
        {
          quote: 'leaving me unable to cover the full £950 on the due date',
          note: 'A participle clause links cause and effect concisely. The explanation is specific (restructuring, two weeks’ notice) and stays calm, with no blaming (GRA and TA 8+).',
        },
        {
          quote: 'Should it be helpful, I could also make a part-payment of £300 immediately.',
          note: 'An inverted conditional used naturally in a formal context, and a constructive offer that shows good faith: the tone is consistently responsible.',
        },
        {
          quote: 'As I have paid promptly throughout my two-year tenancy',
          note: 'Precise, register-appropriate vocabulary (“tenancy”, “payroll”, “part-payment”) supports a reasonable proposal, fully covering bullet 3 (LR 8+).',
        },
      ],
    },
  ],
})
