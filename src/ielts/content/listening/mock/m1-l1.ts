import { defineListening } from '../../define'

/** Original script. Mock test 1, Part 1: a phone call to rent a holiday cottage, with a spelled name, a correction, rejected options and price distractors. */
export default defineListening({
  id: 'm1-l1',
  skill: 'listening',
  part: 1,
  use: 'mock',
  title: 'Renting a holiday cottage',
  topic: 'Holidays and accommodation',
  context:
    'You will hear a woman phoning a holiday letting company to rent a cottage for a family holiday. First, you have some time to look at questions 1 to 10.',
  speakers: [
    { id: 'liam', name: 'Liam', role: 'Bookings assistant', gender: 'm', accent: 'en-AU' },
    { id: 'helen', name: 'Helen', role: 'Caller', gender: 'f', accent: 'en-GB' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'liam',
      text: 'Good afternoon, Sandpiper Holiday Cottages, Liam speaking. How can I help?',
    },
    {
      id: 'l2',
      speaker: 'helen',
      text: 'Hello. I’m ringing about renting one of your cottages in Pennock Bay this summer. I’ve been looking at them on your website.',
    },
    {
      id: 'l3',
      speaker: 'liam',
      text: 'Lovely. I’ll just take a few details first, and then we can see what’s still free. Could I have your name, please?',
    },
    { id: 'l4', speaker: 'helen', text: 'Yes, it’s Helen Marchbank.' },
    { id: 'l5', speaker: 'liam', text: 'And how do you spell your surname?' },
    { id: 'l6', speaker: 'helen', text: 'M, A, R, C, H, B, A, N, K.' },
    {
      id: 'l7',
      speaker: 'liam',
      text: 'Thanks, Helen. Now, for August we’ve only got two cottages left in Pennock Bay: Heron Cottage and Kestrel Cottage. Did you have one in mind?',
    },
    {
      id: 'l8',
      speaker: 'helen',
      text: 'Well, I really liked the photos of Heron Cottage, the one right on the harbour.',
    },
    {
      id: 'l9',
      speaker: 'liam',
      text: 'It’s gorgeous, but I should warn you it has a very steep spiral staircase, and both bedrooms are upstairs. Would that be a problem for anyone in your group?',
    },
    {
      id: 'l10',
      speaker: 'helen',
      text: 'Oh. Yes, it would, actually. My mother’s coming with us, and she really struggles with stairs. What’s the other one like?',
    },
    {
      id: 'l11',
      speaker: 'liam',
      text: 'Kestrel’s a little further up the hill, so it’s about five minutes’ walk to the beach, but it’s all on one level, and there’s a bedroom right next to the bathroom.',
    },
    {
      id: 'l12',
      speaker: 'helen',
      text: 'That sounds much more sensible. Let’s go for Kestrel, then.',
    },
    { id: 'l13', speaker: 'liam', text: 'No worries. And which week were you after?' },
    {
      id: 'l14',
      speaker: 'helen',
      text: 'We were hoping to arrive on Saturday the ninth of August.',
    },
    {
      id: 'l15',
      speaker: 'liam',
      text: 'Let me have a look… I’m sorry, Kestrel’s already booked that week. But the following Saturday, the sixteenth, is free for seven nights.',
    },
    {
      id: 'l16',
      speaker: 'helen',
      text: 'Right. Well, the children don’t go back to school until September, so the sixteenth will be fine.',
    },
    {
      id: 'l17',
      speaker: 'liam',
      text: 'Great, I’ll pencil that in. And how many people will be staying altogether?',
    },
    {
      id: 'l18',
      speaker: 'helen',
      text: 'Six. That’s me, my husband, our two boys, my mother and my sister. Oh, hang on, no. My sister’s just started a new job, so she can’t get the time off. Five, then.',
    },
    {
      id: 'l19',
      speaker: 'liam',
      text: 'Five. That’s no problem, Kestrel sleeps six. Now, the price for that week is seven hundred and forty-five pounds.',
    },
    {
      id: 'l20',
      speaker: 'helen',
      text: 'Oh, really? I’m sure the website said six hundred and ninety.',
    },
    {
      id: 'l21',
      speaker: 'liam',
      text: 'That’ll be the price for Heron Cottage. Kestrel’s quite a bit bigger, so it’s seven hundred and forty-five for the week.',
    },
    {
      id: 'l22',
      speaker: 'helen',
      text: 'I see. Well, that’s fair enough. What does that include?',
    },
    {
      id: 'l23',
      speaker: 'liam',
      text: 'All the bed linen is provided, there’s free wi-fi, and you get a basket of firewood for the stove. The one thing you’ll need to bring is towels. We stopped supplying those last year.',
    },
    {
      id: 'l24',
      speaker: 'helen',
      text: 'OK, I’ll make a note of that. We’ve also got a dog. Is that allowed?',
    },
    {
      id: 'l25',
      speaker: 'liam',
      text: 'Yes, dogs are welcome at Kestrel. The garden’s fully fenced, so he can run around out there as much as he likes. We just ask that you keep him out of the bedrooms.',
    },
    {
      id: 'l26',
      speaker: 'helen',
      text: 'That’s fine, he sleeps in the kitchen at home anyway. How do we get the key when we arrive? Is there a key safe?',
    },
    {
      id: 'l27',
      speaker: 'liam',
      text: 'There used to be one by the front door, but it was damaged in a storm. So for now you collect the key from the bakery on the harbour front. They’re open until six.',
    },
    {
      id: 'l28',
      speaker: 'helen',
      text: 'The bakery, right. We should be there by about four. And how would you like me to pay?',
    },
    {
      id: 'l29',
      speaker: 'liam',
      text: 'We take a deposit of two hundred pounds today to hold the booking, and then the rest is due six weeks before you arrive.',
    },
    { id: 'l30', speaker: 'helen', text: 'That’s fine. I can do that by card now.' },
    {
      id: 'l31',
      speaker: 'liam',
      text: 'Perfect. Oh, and one last question that we ask everyone. How did you hear about us?',
    },
    {
      id: 'l32',
      speaker: 'helen',
      text: 'Um, I thought it was an article in a travel magazine. No, actually, that was a different company. It was a colleague of mine. She stayed with you last year and recommended you.',
    },
    {
      id: 'l33',
      speaker: 'liam',
      text: 'That’s always nice to hear. Right, if you’ve got your card ready, I’ll take the deposit now.',
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'form',
      instructions: 'Complete the form below.',
      wordLimit: { words: 1, number: true },
      title: 'Sandpiper Holiday Cottages — Booking form',
      body: [
        {
          kind: 'table',
          header: ['Detail', 'Information'],
          rows: [
            ['Name', 'Helen [[1]]'],
            ['Cottage', '[[2]] Cottage, Pennock Bay'],
            ['Arrival', 'Saturday [[3]] August (seven nights)'],
            ['Number of guests', '[[4]]'],
            ['Cost', '£[[5]] for the week'],
            ['Included', 'bed linen, wi-fi, firewood'],
            ['Guests must bring', '[[6]]'],
            ['Pets', 'dog allowed, but not in the [[7]]'],
            ['Key', 'collect from the [[8]] on the harbour front'],
            ['Deposit', '£[[9]], paid by card today'],
            ['Heard about company from', 'a [[10]]'],
          ],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['Marchbank'],
          location: { ref: 'l6', quote: 'M, A, R, C, H, B, A, N, K' },
          explanation:
            'The surname is spelled out letter by letter. Write it exactly: M-A-R-C-H-B-A-N-K, with “ch” in the middle and “k” at the end.',
        },
        {
          n: 2,
          answers: ['Kestrel'],
          location: { ref: 'l12', quote: 'Let’s go for Kestrel, then' },
          explanation:
            'Helen likes Heron Cottage at first, but rejects it because of the steep staircase and her mother. She chooses Kestrel.',
          distractors: ['Heron'],
        },
        {
          n: 3,
          answers: ['16', '16th'],
          location: { ref: 'l15', quote: 'the following Saturday, the sixteenth, is free' },
          explanation:
            'She asks for the ninth, but Kestrel is already booked that week, so she takes the sixteenth instead. The first date is a rejected option.',
          distractors: ['9', '9th'],
        },
        {
          n: 4,
          answers: ['5'],
          location: { ref: 'l18', quote: 'Five, then' },
          explanation:
            'A correction: she says six, then remembers her sister cannot come (“Oh, hang on, no”), so the final number is five. “Kestrel sleeps six” is a second trap.',
          distractors: ['6'],
        },
        {
          n: 5,
          answers: ['745'],
          location: { ref: 'l21', quote: 'it’s seven hundred and forty-five for the week' },
          explanation:
            'Kestrel costs £745. The £690 Helen saw on the website is the price of Heron Cottage, the cottage she rejected.',
          distractors: ['690'],
        },
        {
          n: 6,
          answers: ['towels'],
          location: { ref: 'l23', quote: 'The one thing you’ll need to bring is towels' },
          explanation:
            'Linen, wi-fi and firewood are all provided (they are already on the form). Towels are the only thing guests must bring.',
          distractors: ['linen', 'firewood'],
        },
        {
          n: 7,
          answers: ['bedrooms', 'bedroom'],
          location: { ref: 'l25', quote: 'keep him out of the bedrooms' },
          explanation:
            'The dog may run in the fenced garden, but must be kept out of the bedrooms. The kitchen is where the dog sleeps at home, not a rule.',
          distractors: ['garden', 'kitchen'],
        },
        {
          n: 8,
          answers: ['bakery'],
          location: {
            ref: 'l27',
            quote: 'you collect the key from the bakery on the harbour front',
          },
          explanation:
            'The key safe by the front door was damaged in a storm, so the key is now collected from the bakery.',
          distractors: ['key safe'],
        },
        {
          n: 9,
          answers: ['200'],
          location: { ref: 'l29', quote: 'a deposit of two hundred pounds today' },
          explanation:
            'The deposit is £200. “Six weeks” is when the rest of the money is due, not an amount.',
          distractors: ['6', '745'],
        },
        {
          n: 10,
          answers: ['colleague'],
          location: { ref: 'l32', quote: 'It was a colleague of mine' },
          explanation:
            'She first mentions a travel magazine, then corrects herself (“No, actually, that was a different company”). A colleague recommended the company.',
          distractors: ['magazine'],
        },
      ],
    },
  ],
})
