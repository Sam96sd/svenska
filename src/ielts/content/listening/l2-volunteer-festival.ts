import { defineListening } from '../define'

/** Original script. Part 2 style: an organiser briefs festival volunteers on their tasks and on practical arrangements. */
export default defineListening({
  id: 'l2-volunteer-festival',
  skill: 'listening',
  part: 2,
  use: 'practice',
  title: 'Briefing for festival volunteers',
  topic: 'Volunteering and events',
  context:
    'You will hear the volunteer coordinator of a summer festival talking to a group of new and returning volunteers. First, you have some time to look at questions 1 to 5.',
  speakers: [
    { id: 'bronwyn', name: 'Bronwyn', role: 'Volunteer coordinator', gender: 'f', accent: 'en-AU' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'bronwyn',
      text: 'Morning, everyone, and thanks so much for signing up. I’m Bronwyn, and I’m coordinating the volunteers for this year’s Riverbend Festival. There are nearly two hundred of you, which is a record.',
    },
    {
      id: 'l2',
      speaker: 'bronwyn',
      text: 'I’ll start by running through the different areas and what you’ll actually be doing in each one, because the jobs have changed quite a bit since last year.',
    },
    {
      id: 'l3',
      speaker: 'bronwyn',
      text: 'First, the main gate. Bag searches will be done by the professional security company, so please don’t get involved in that.',
    },
    {
      id: 'l4',
      speaker: 'bronwyn',
      text: 'What we need from the gate team is numbers. You’ll each have a little hand counter, and you’ll click it for every person who comes through, so we know when the site is getting close to capacity.',
    },
    {
      id: 'l5',
      speaker: 'bronwyn',
      text: 'Next, the food court. The stallholders handle all their own sales, so you won’t be touching any money there.',
    },
    {
      id: 'l6',
      speaker: 'bronwyn',
      text: 'Instead, you’ll be stationed at the waste points. People mean well, but they get confused by the three different bins, so you’ll be showing them where their compost, recycling and general rubbish should go.',
    },
    {
      id: 'l7',
      speaker: 'bronwyn',
      text: 'Moving on to the riverside stage. Last year we had volunteers selling programmes down there, but it was just too crowded to move.',
    },
    {
      id: 'l8',
      speaker: 'bronwyn',
      text: 'This year the stage team has one job, and that’s keeping the audience cool. It gets very hot at the front, so you’ll be walking along the barrier handing out cups of free water.',
    },
    {
      id: 'l9',
      speaker: 'bronwyn',
      text: 'The children’s area is always popular with volunteers. The face painting and the craft tables are run by professional entertainers, though, so that’s not you, I’m afraid.',
    },
    {
      id: 'l10',
      speaker: 'bronwyn',
      text: 'Your job there is safety. When a family arrives, you’ll write a parent’s mobile number on a paper band and put it round each child’s wrist, so that if anyone gets lost, we can ring straight away.',
    },
    {
      id: 'l11',
      speaker: 'bronwyn',
      text: 'And lastly, the car park. People assume the volunteers there will be waving cars into spaces, but the council is providing its own trained traffic staff.',
    },
    {
      id: 'l12',
      speaker: 'bronwyn',
      text: 'So the car park is where the programmes will be sold this year. You’ll catch people as they get out of their cars, before they even reach the gate. Every cent goes to the rescue helicopter.',
    },
    {
      id: 'l13',
      speaker: 'bronwyn',
      text: 'Right, a few general points. Training is on Thursday evening at the town hall, not online like last year.',
    },
    {
      id: 'l14',
      speaker: 'bronwyn',
      text: 'Those of you who’ve volunteered before keep asking if you really need to come. In the past it was just for newcomers, but the insurance rules have changed, so this year every single volunteer must attend.',
    },
    {
      id: 'l15',
      speaker: 'bronwyn',
      text: 'On the day itself, please don’t bring food. Lunch is provided in the volunteers’ tent, and there’s always far too much of it.',
    },
    {
      id: 'l16',
      speaker: 'bronwyn',
      text: 'There’ll be sunscreen at every station, so you don’t need to worry about that either. But the festival has gone plastic-free, so the one thing you must bring is a bottle you can refill.',
    },
    {
      id: 'l17',
      speaker: 'bronwyn',
      text: 'If you start to feel unwell, and it does happen in the heat, the first-aid tent is right next to the main gate.',
    },
    {
      id: 'l18',
      speaker: 'bronwyn',
      text: 'But please don’t just walk off. Tell your team leader before you do anything else, so they can get someone to cover your spot. They’ll take you to first aid themselves if you need it.',
    },
    {
      id: 'l19',
      speaker: 'bronwyn',
      text: 'My own number is on the back of your badge, but please keep that for real emergencies.',
    },
    {
      id: 'l20',
      speaker: 'bronwyn',
      text: 'Now, rewards. Everyone gets a festival T-shirt, though that’s really your uniform. And if you need a written reference for a job or a course, any of you can ask me for one.',
    },
    {
      id: 'l21',
      speaker: 'bronwyn',
      text: 'For those of you doing two shifts or more, there’s something extra on top of that: a free pass for next year’s festival.',
    },
    {
      id: 'l22',
      speaker: 'bronwyn',
      text: 'Finally, be ready for questions from the public. You’d expect most of them to be about the toilets, and there’ll certainly be plenty of those.',
    },
    {
      id: 'l23',
      speaker: 'bronwyn',
      text: 'But last year, by far the most common question was what time the fireworks start. So learn this: half past ten, over the river. And the toilets are behind the food court!',
    },
    {
      id: 'l24',
      speaker: 'bronwyn',
      text: 'OK, any questions before we split into teams?',
    },
  ],
  groups: [
    {
      type: 'match-features',
      instructions:
        'What will volunteers do in each area of the festival? Choose FIVE answers from the box and write the correct letter, A–G, next to questions 1–5.',
      optionsTitle: 'Volunteers’ tasks',
      options: [
        { key: 'A', text: 'giving out drinks' },
        { key: 'B', text: 'checking what visitors are carrying' },
        { key: 'C', text: 'advising on the disposal of waste' },
        { key: 'D', text: 'selling a printed guide' },
        { key: 'E', text: 'keeping track of visitor numbers' },
        { key: 'F', text: 'managing vehicles' },
        { key: 'G', text: 'recording parents’ contact details' },
      ],
      questions: [
        {
          n: 1,
          prompt: 'main gate',
          answer: 'E',
          location: { ref: 'l4', quote: 'you’ll click it for every person who comes through' },
          explanation:
            'Gate volunteers use a hand counter for every person entering, so the organisers know how full the site is.',
          traps: {
            B: 'Bag searches at the gate are done by the security company, not volunteers.',
          },
        },
        {
          n: 2,
          prompt: 'food court',
          answer: 'C',
          location: {
            ref: 'l6',
            quote: 'showing them where their compost, recycling and general rubbish should go',
          },
          explanation:
            'Volunteers stand at the waste points and show people which bin to use — advising on waste disposal.',
          traps: {
            D: 'Stallholders handle all the sales; volunteers won’t be “touching any money”.',
          },
        },
        {
          n: 3,
          prompt: 'riverside stage',
          answer: 'A',
          location: { ref: 'l8', quote: 'handing out cups of free water' },
          explanation: '“Handing out cups of free water” is paraphrased as “giving out drinks”.',
          traps: { D: 'Programmes were sold at the stage “last year”, but not this year.' },
        },
        {
          n: 4,
          prompt: 'children’s area',
          answer: 'G',
          location: { ref: 'l10', quote: 'you’ll write a parent’s mobile number on a paper band' },
          explanation:
            'Writing a parent’s mobile number on each child’s band = recording parents’ contact details. Face painting and crafts are run by professionals.',
        },
        {
          n: 5,
          prompt: 'car park',
          answer: 'D',
          location: {
            ref: 'l12',
            quote: 'the car park is where the programmes will be sold this year',
          },
          explanation:
            'A programme is a printed guide to the festival. Directing cars is done by the council’s traffic staff.',
          traps: {
            F: 'The council is “providing its own trained traffic staff”, so volunteers won’t manage vehicles.',
          },
        },
      ],
    },
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B or C.',
      questions: [
        {
          n: 6,
          prompt: 'What does Bronwyn say about the training session?',
          options: [
            { key: 'A', text: 'All volunteers have to attend it.' },
            { key: 'B', text: 'It is mainly intended for new volunteers.' },
            { key: 'C', text: 'It will take place online.' },
          ],
          answer: 'A',
          location: { ref: 'l14', quote: 'this year every single volunteer must attend' },
          explanation:
            'Because of new insurance rules, every volunteer, including returning ones, must attend.',
          traps: {
            B: 'It was “just for newcomers” in the past, not this year.',
            C: 'Training was online “last year”; this year it is at the town hall.',
          },
        },
        {
          n: 7,
          prompt: 'What are volunteers asked to bring on the day?',
          options: [
            { key: 'A', text: 'their own lunch' },
            { key: 'B', text: 'a reusable water bottle' },
            { key: 'C', text: 'sun cream' },
          ],
          answer: 'B',
          location: {
            ref: 'l16',
            quote: 'the one thing you must bring is a bottle you can refill',
          },
          explanation: '“A bottle you can refill” is a reusable water bottle.',
          traps: {
            A: 'Lunch is provided, and she asks them not to bring food.',
            C: 'Sunscreen (sun cream) will be at every station.',
          },
        },
        {
          n: 8,
          prompt: 'If volunteers feel ill, what should they do first?',
          options: [
            { key: 'A', text: 'go to the first-aid tent' },
            { key: 'B', text: 'inform their team leader' },
            { key: 'C', text: 'phone Bronwyn' },
          ],
          answer: 'B',
          location: { ref: 'l18', quote: 'Tell your team leader before you do anything else' },
          explanation: '“Before you do anything else” matches “first” in the question.',
          traps: {
            A: 'The first-aid tent is mentioned first, but she says “don’t just walk off” — the team leader takes you there if needed.',
            C: 'Her number is “for real emergencies” only.',
          },
        },
        {
          n: 9,
          prompt: 'What is offered only to volunteers who work more than one shift?',
          options: [
            { key: 'A', text: 'a festival T-shirt' },
            { key: 'B', text: 'a reference letter' },
            { key: 'C', text: 'free entry to next year’s festival' },
          ],
          answer: 'C',
          location: { ref: 'l21', quote: 'a free pass for next year’s festival' },
          explanation:
            '“Two shifts or more” = more than one shift; “something extra” is a free pass to next year’s festival.',
          traps: {
            A: '“Everyone gets a festival T-shirt.”',
            B: '“Any of you” can ask for a reference, so it is not only for people doing two shifts.',
          },
        },
        {
          n: 10,
          prompt: 'According to Bronwyn, what did visitors ask about most often last year?',
          options: [
            { key: 'A', text: 'where the toilets were' },
            { key: 'B', text: 'when the fireworks would begin' },
            { key: 'C', text: 'how to get to the car park' },
          ],
          answer: 'B',
          location: {
            ref: 'l23',
            quote: 'by far the most common question was what time the fireworks start',
          },
          explanation:
            '“You’d expect” the toilets, “but” the most common question was the time of the fireworks.',
          traps: {
            A: 'Toilet questions are expected and frequent, but not the most common.',
          },
        },
      ],
    },
  ],
})
