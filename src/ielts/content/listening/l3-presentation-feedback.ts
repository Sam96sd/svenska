import { defineListening } from '../define'

/** Original script. Part 3 style: two students go through their tutor’s feedback on a presentation about coastal erosion. */
export default defineListening({
  id: 'l3-presentation-feedback',
  skill: 'listening',
  part: 3,
  use: 'practice',
  title: 'Feedback on a presentation about coastal erosion',
  topic: 'Geography and study skills',
  context:
    'You will hear two geography students, Hannah and Marcus, discussing their tutor’s feedback on a presentation they gave about coastal erosion. First, you have some time to look at questions 1 to 5.',
  speakers: [
    { id: 'hannah', name: 'Hannah', role: 'Student', gender: 'f', accent: 'en-GB' },
    { id: 'marcus', name: 'Marcus', role: 'Student', gender: 'm', accent: 'en-AU' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'hannah',
      text: 'So, have you had a chance to read Dr Price’s feedback on our coastal erosion presentation?',
    },
    {
      id: 'l2',
      speaker: 'marcus',
      text: 'Yeah, I read it on the bus this morning. Overall it’s pretty positive, I reckon. Sixty-eight is a decent mark.',
    },
    {
      id: 'l3',
      speaker: 'hannah',
      text: 'It is, although I was hoping we’d scrape a seventy. Shall we go through it section by section? Then we can work out what to do differently next time.',
    },
    {
      id: 'l4',
      speaker: 'marcus',
      text: 'Sure. She starts with the introduction. She says it was clear, but I actually thought it dragged on. We spent nearly four minutes on definitions before we got to anything interesting.',
    },
    {
      id: 'l5',
      speaker: 'hannah',
      text: 'Hmm, I don’t agree. The audience were first-years, and half of them didn’t know what a wave-cut platform was. Without those definitions, they’d have been lost.',
    },
    {
      id: 'l6',
      speaker: 'marcus',
      text: 'Fair enough. What about the case study? I thought Wrenshaw Bay was the highlight. The photos of the houses that had to be abandoned really grabbed people.',
    },
    {
      id: 'l7',
      speaker: 'hannah',
      text: 'Absolutely. You could see everyone sit up when the picture of the old lifeboat station came on. That was definitely our strongest section.',
    },
    {
      id: 'l8',
      speaker: 'marcus',
      text: 'Then there are the slides. She says some of them were a bit crowded.',
    },
    {
      id: 'l9',
      speaker: 'hannah',
      text: 'I think she’s being kind. They had far too much text on them. I could see people trying to read and listen at the same time, and managing neither.',
    },
    {
      id: 'l10',
      speaker: 'marcus',
      text: 'I’m not so sure. A few people I talked to afterwards said they liked having the full points written down, so they could copy them into their notes.',
    },
    {
      id: 'l11',
      speaker: 'hannah',
      text: 'Well, let’s agree to cut them down a little, anyway. Next is the section on coastal defences.',
    },
    {
      id: 'l12',
      speaker: 'marcus',
      text: 'That’s where she’s most critical. She says we presented sea walls as if they were the only solution, and hardly mentioned managed retreat.',
    },
    {
      id: 'l13',
      speaker: 'hannah',
      text: 'She’s got a point, hasn’t she? We spent ages on the engineering and gave just one slide to letting the coastline retreat naturally.',
    },
    {
      id: 'l14',
      speaker: 'marcus',
      text: 'Yeah, I have to admit she’s right. It did come across as one-sided.',
    },
    {
      id: 'l15',
      speaker: 'hannah',
      text: 'And then the questions at the end. I don’t think that part went well at all. I handled the one about insurance terribly. My mind just went blank.',
    },
    {
      id: 'l16',
      speaker: 'marcus',
      text: 'Rubbish, you were fine. Actually, I thought the questions went really well. It felt like a proper discussion, and people stayed on afterwards to keep talking.',
    },
    {
      id: 'l17',
      speaker: 'hannah',
      text: 'OK. She’s also made some specific suggestions. The first is about our explanation of longshore drift. She says it was confusing because we described it without any visuals.',
    },
    {
      id: 'l18',
      speaker: 'marcus',
      text: 'Fair. I was waving my arms around trying to show which way the waves were moving. A simple diagram would have done the job.',
    },
    {
      id: 'l19',
      speaker: 'hannah',
      text: 'She also says the graph of cliff retreat was hard to read from the back of the room. She suggests using aerial photographs from different decades instead, so people can actually see the coastline moving.',
    },
    {
      id: 'l20',
      speaker: 'marcus',
      text: 'That’s a great idea. The county archive has a set going back to the nineteen-forties.',
    },
    {
      id: 'l21',
      speaker: 'hannah',
      text: 'Then there’s timing. We went five minutes over, and she’s taken marks off for it.',
    },
    {
      id: 'l22',
      speaker: 'marcus',
      text: 'Which is fair. We never actually ran through the whole thing with a stopwatch. We only practised our own parts separately.',
    },
    {
      id: 'l23',
      speaker: 'hannah',
      text: 'So next time we rehearse it together, at least twice, from start to finish. My flatmates have offered to sit through it, and they’ll be honest.',
    },
    {
      id: 'l24',
      speaker: 'marcus',
      text: 'Good plan. She also says our referencing on the slides was inconsistent. Sometimes we gave the author and the year, and sometimes just a website address.',
    },
    {
      id: 'l25',
      speaker: 'hannah',
      text: 'That’s an easy fix. We’ll just follow the department’s style guide.',
    },
    {
      id: 'l26',
      speaker: 'marcus',
      text: 'Last thing. She wants us to finish with a clear recommendation, not just a summary. The audience should leave knowing what we would actually do about Wrenshaw Bay.',
    },
    {
      id: 'l27',
      speaker: 'hannah',
      text: 'Right. So we’d argue for managed retreat at the northern end, and keep the sea wall in front of the village?',
    },
    {
      id: 'l28',
      speaker: 'marcus',
      text: 'That’s what the evidence supports. OK, let’s write all this down before we forget it.',
    },
  ],
  groups: [
    {
      type: 'match-features',
      instructions:
        'Who expresses each of the following opinions about the presentation? Write the correct letter, A, B or C, next to questions 1–5.',
      optionsTitle: 'People',
      options: [
        { key: 'A', text: 'Hannah only' },
        { key: 'B', text: 'Marcus only' },
        { key: 'C', text: 'both Hannah and Marcus' },
      ],
      reuse: true,
      questions: [
        {
          n: 1,
          prompt: 'The opening section went on for too long.',
          answer: 'B',
          location: { ref: 'l4', quote: 'I actually thought it dragged on' },
          explanation:
            'Marcus thinks the introduction “dragged on”; Hannah disagrees (“I don’t agree”) because the definitions were needed.',
          traps: { C: 'Hannah explicitly disagrees, so it is not both.' },
        },
        {
          n: 2,
          prompt: 'The case study was the most effective part.',
          answer: 'C',
          location: { ref: 'l7', quote: 'That was definitely our strongest section' },
          explanation:
            'Marcus calls Wrenshaw Bay “the highlight”, and Hannah agrees (“Absolutely … our strongest section”).',
        },
        {
          n: 3,
          prompt: 'The slides contained too many words.',
          answer: 'A',
          location: { ref: 'l9', quote: 'They had far too much text on them' },
          explanation:
            'Hannah says the slides had “far too much text”. Marcus is “not so sure” — some people liked the full points.',
          traps: {
            C: 'They agree to cut the slides down, but Marcus does not share the opinion that there was too much text.',
          },
        },
        {
          n: 4,
          prompt: 'The section on coastal defences lacked balance.',
          answer: 'C',
          location: { ref: 'l14', quote: 'It did come across as one-sided' },
          explanation:
            'Hannah says the tutor has “got a point”, and Marcus admits it was “one-sided” — both agree.',
        },
        {
          n: 5,
          prompt: 'Answering the audience’s questions was successful.',
          answer: 'B',
          location: { ref: 'l16', quote: 'I thought the questions went really well' },
          explanation:
            'Marcus thinks the questions went well; Hannah thinks she handled one “terribly”.',
          traps: { A: 'Hannah is negative about her own answers.' },
        },
      ],
    },
    {
      type: 'completion',
      format: 'sentence',
      instructions: 'Complete the sentences below.',
      wordLimit: { words: 2, number: false },
      body: [
        { kind: 'text', text: 'The tutor found their explanation of [[6]] difficult to follow.' },
        {
          kind: 'text',
          text: 'In place of the graph, she suggests showing [[7]] taken in different decades.',
        },
        {
          kind: 'text',
          text: 'Before the next presentation, they will rehearse in front of Hannah’s [[8]].',
        },
        { kind: 'text', text: 'They need to make the [[9]] on their slides consistent.' },
        { kind: 'text', text: 'The presentation should end with a [[10]] rather than a summary.' },
      ],
      questions: [
        {
          n: 6,
          answers: ['longshore drift'],
          location: { ref: 'l17', quote: 'our explanation of longshore drift' },
          explanation:
            '“Confusing” in the recording becomes “difficult to follow”. The topic explained was longshore drift.',
        },
        {
          n: 7,
          answers: ['(aerial) photographs', 'aerial photos'],
          location: {
            ref: 'l19',
            quote: 'She suggests using aerial photographs from different decades instead',
          },
          explanation:
            '“Instead” of the graph, the tutor suggests aerial photographs. A “diagram” is Marcus’s idea for longshore drift, not for the cliff retreat.',
          distractors: ['diagram', 'graph'],
        },
        {
          n: 8,
          answers: ['flatmates', 'flat mates', 'flat-mates'],
          location: { ref: 'l23', quote: 'My flatmates have offered to sit through it' },
          explanation:
            'Hannah’s flatmates will watch the rehearsal. The sentence already gives “Hannah’s”, so write only “flatmates”.',
        },
        {
          n: 9,
          answers: ['referencing', 'references'],
          location: { ref: 'l24', quote: 'our referencing on the slides was inconsistent' },
          explanation:
            'The tutor says the referencing was inconsistent, so it needs to be made consistent.',
        },
        {
          n: 10,
          answers: ['(clear) recommendation'],
          location: { ref: 'l26', quote: 'finish with a clear recommendation, not just a summary' },
          explanation:
            '“Finish with” = “end with”; “not just a summary” = “rather than a summary”, so “summary” cannot be the answer.',
          distractors: ['summary'],
        },
      ],
    },
  ],
})
