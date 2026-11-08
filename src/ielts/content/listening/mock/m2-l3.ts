import { defineListening } from '../../define'

/** Original script. Mock test 2, Part 3: two students discuss their study of office noise and concentration with their tutor. */
export default defineListening({
  id: 'm2-l3',
  skill: 'listening',
  part: 3,
  use: 'mock',
  title: 'A study of office noise and concentration',
  topic: 'Work and psychology',
  context:
    'You will hear two psychology students, Marcus and Hannah, discussing their research on workplace noise and concentration with their tutor, Dr Gallagher. First, you have some time to look at the questions.',
  speakers: [
    { id: 'gallagher', name: 'Dr Gallagher', role: 'Tutor', gender: 'f', accent: 'en-IE' },
    { id: 'marcus', name: 'Marcus', role: 'Student', gender: 'm', accent: 'en-US' },
    { id: 'hannah', name: 'Hannah', role: 'Student', gender: 'f', accent: 'en-GB' },
  ],
  lines: [
    {
      id: 'l1',
      speaker: 'gallagher',
      text: 'Right, Marcus, Hannah, let’s talk about the noise study. Before we get to your results, remind me what got you interested in this topic in the first place.',
    },
    {
      id: 'l2',
      speaker: 'hannah',
      text: 'Well, in our proposal we said it came out of the lecture on productivity. But honestly, that was just a convenient link. It really started with Marcus’s internship.',
    },
    {
      id: 'l3',
      speaker: 'marcus',
      text: 'Yeah. I spent the summer at an architecture firm that had just knocked down all its walls and gone open-plan. Within a month, everybody was wearing headphones, and the work was getting slower.',
    },
    {
      id: 'l4',
      speaker: 'marcus',
      text: 'There were plenty of articles saying open-plan offices boost teamwork, but nobody there seemed to be getting more done. So I wanted to find out what was going on.',
    },
    {
      id: 'l5',
      speaker: 'gallagher',
      text: 'And how did you measure concentration in the end? I remember you were thinking of a memory test.',
    },
    {
      id: 'l6',
      speaker: 'hannah',
      text: 'We were, with lists of words to memorise. But we realised that office workers almost never have to do that. We also tried some maths puzzles, but people’s ability varied far too much.',
    },
    {
      id: 'l7',
      speaker: 'marcus',
      text: 'So we went with a proofreading task. Participants had ten minutes to find as many errors as they could in a two-page report. It’s much closer to what people actually do at their desks.',
    },
    {
      id: 'l8',
      speaker: 'gallagher',
      text: 'Good choice. And the sound conditions?',
    },
    {
      id: 'l9',
      speaker: 'hannah',
      text: 'There were four: silence, general office noise, like printers and keyboards, background music, and a recording of two colleagues chatting. We were sure the music would be the worst.',
    },
    {
      id: 'l10',
      speaker: 'marcus',
      text: 'But it wasn’t even close. With the conversation playing, people missed almost twice as many errors as they did with the general office noise. Music came somewhere in between.',
    },
    {
      id: 'l11',
      speaker: 'hannah',
      text: 'And oddly, silence wasn’t the best condition either. The office hum gave very slightly better scores, although the difference was too small to mean much.',
    },
    {
      id: 'l12',
      speaker: 'gallagher',
      text: 'Interesting. Now, I’ve read your draft, and I want to raise a problem with the design.',
    },
    {
      id: 'l13',
      speaker: 'hannah',
      text: 'Is it the volume? We did wonder whether we’d played the recordings too loud.',
    },
    {
      id: 'l14',
      speaker: 'gallagher',
      text: 'No, the volume you used is quite standard. And using students as participants is normal at this level, so I wouldn’t worry about that either.',
    },
    {
      id: 'l15',
      speaker: 'gallagher',
      text: 'What bothers me is that each session lasted only ten minutes. Real employees put up with noise for a whole working day. Over hours, people might get used to it, or they might become exhausted.',
    },
    {
      id: 'l16',
      speaker: 'marcus',
      text: 'That’s fair. We can’t really fix that now, but we’ll discuss it. There was one more result, actually, from the questionnaire people filled in afterwards.',
    },
    {
      id: 'l17',
      speaker: 'marcus',
      text: 'Most of them said the conversation hadn’t bothered them at all. And yet their scores in that condition were the lowest. So they just didn’t realise how much it was affecting them.',
    },
    {
      id: 'l18',
      speaker: 'hannah',
      text: 'We’d also expected that people who like studying in cafés would cope better with the noise, but there was no connection. And we didn’t have enough older participants to say anything about age.',
    },
    {
      id: 'l19',
      speaker: 'gallagher',
      text: 'That self-report finding is worth highlighting. Now, you’re presenting this to the department next month. What will you recommend to employers?',
    },
    {
      id: 'l20',
      speaker: 'hannah',
      text: 'Our first thought was phone booths, those little soundproof boxes. But they’re designed for making calls, not for long periods of work.',
    },
    {
      id: 'l21',
      speaker: 'marcus',
      text: 'So we’ll suggest quiet zones: a separate area of the office where talking isn’t allowed, so people can go there when they need to focus.',
    },
    {
      id: 'l22',
      speaker: 'gallagher',
      text: 'Sensible. You might also look at sound masking. Some firms play a soft background sound to cover up speech.',
    },
    {
      id: 'l23',
      speaker: 'hannah',
      text: 'Like white noise?',
    },
    {
      id: 'l24',
      speaker: 'gallagher',
      text: 'Not white noise; most people find that irritating. The research is mostly on pink noise, which is deeper, a bit like steady rain. Hannah, perhaps you could read up on that.',
    },
    {
      id: 'l25',
      speaker: 'hannah',
      text: 'Sure. And for the presentation itself, we’d thought of opening with a video I found of a really noisy open-plan office.',
    },
    {
      id: 'l26',
      speaker: 'gallagher',
      text: 'Videos rarely work in that room; the sound system is awful. What I’d do instead is begin with a live demonstration. Give the audience a few lines to proofread while the chatting plays.',
    },
    {
      id: 'l27',
      speaker: 'marcus',
      text: 'So they feel the effect for themselves. I like that. Do you want to see our slides beforehand?',
    },
    {
      id: 'l28',
      speaker: 'gallagher',
      text: 'I don’t need the slides until the day itself. But please send me your reference list by Friday, so I can check your sources before you go public with them.',
    },
    {
      id: 'l29',
      speaker: 'hannah',
      text: 'OK. And in the written report, should we include all the questionnaire answers? There are pages of them.',
    },
    {
      id: 'l30',
      speaker: 'gallagher',
      text: 'Not in the main text. Summarise them there, and put the full set of responses in an appendix at the end. Examiners like to know the data is available.',
    },
    {
      id: 'l31',
      speaker: 'marcus',
      text: 'Great. Thanks, Dr Gallagher, that’s really helpful.',
    },
  ],
  groups: [
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B or C.',
      questions: [
        {
          n: 1,
          prompt: 'What first made the students interested in workplace noise?',
          options: [
            { key: 'A', text: 'a lecture they attended on productivity' },
            { key: 'B', text: 'a change one of them saw in a workplace' },
            { key: 'C', text: 'articles claiming open-plan offices improve teamwork' },
          ],
          answer: 'B',
          location: { ref: 'l2', quote: 'It really started with Marcus’s internship' },
          explanation:
            'The idea came from Marcus’s internship, where the firm went open-plan and work got slower.',
          traps: {
            A: 'The lecture was mentioned in their proposal, but Hannah admits “that was just a convenient link”.',
            C: 'Marcus mentions such articles, but only to contrast them with what he saw.',
          },
        },
        {
          n: 2,
          prompt: 'How did the students measure concentration?',
          options: [
            { key: 'A', text: 'by asking participants to find mistakes in a document' },
            { key: 'B', text: 'by testing how many words participants could remember' },
            { key: 'C', text: 'by giving participants mathematical problems' },
          ],
          answer: 'A',
          location: { ref: 'l7', quote: 'So we went with a proofreading task' },
          explanation:
            'Participants had to find errors in a two-page report: “find mistakes in a document”.',
          traps: {
            B: 'The memory test was considered but dropped: office workers almost never have to memorise lists.',
            C: 'Maths puzzles were tried, but ability “varied far too much”.',
          },
        },
        {
          n: 3,
          prompt: 'What did the students find about the different sound conditions?',
          options: [
            { key: 'A', text: 'Music caused the greatest number of errors.' },
            { key: 'B', text: 'Speech was more distracting than general office noise.' },
            { key: 'C', text: 'Participants performed best in complete silence.' },
          ],
          answer: 'B',
          location: {
            ref: 'l10',
            quote: 'With the conversation playing, people missed almost twice as many errors',
          },
          explanation:
            'With the conversation, people missed almost twice as many errors as with general office noise.',
          traps: {
            A: 'They “were sure the music would be the worst”, but it came “somewhere in between”.',
            C: '“Silence wasn’t the best condition either”: the office hum gave slightly better scores.',
          },
        },
        {
          n: 4,
          prompt: 'What does Dr Gallagher think is the main weakness of the study?',
          options: [
            { key: 'A', text: 'The recordings were played too loudly.' },
            { key: 'B', text: 'All the participants were students.' },
            { key: 'C', text: 'The test periods were too short.' },
          ],
          answer: 'C',
          location: { ref: 'l15', quote: 'each session lasted only ten minutes' },
          explanation:
            '“What bothers me” signals her real concern: ten-minute sessions, when real employees face noise all day.',
          traps: {
            A: 'Hannah suggests the volume, but the tutor says it is “quite standard”.',
            B: 'Using students “is normal at this level, so I wouldn’t worry about that”.',
          },
        },
        {
          n: 5,
          prompt: 'What did the questionnaire show?',
          options: [
            {
              key: 'A',
              text: 'Many participants were unaware of the effect the noise had on them.',
            },
            {
              key: 'B',
              text: 'Participants who prefer noisy places to study coped better with noise.',
            },
            { key: 'C', text: 'Older participants were more sensitive to noise.' },
          ],
          answer: 'A',
          location: {
            ref: 'l17',
            quote: 'they just didn’t realise how much it was affecting them',
          },
          explanation:
            'Most said the conversation did not bother them, yet their scores were lowest in that condition.',
          traps: {
            B: 'They expected this, but “there was no connection”.',
            C: 'They “didn’t have enough older participants to say anything about age”.',
          },
        },
      ],
    },
    {
      type: 'completion',
      format: 'sentence',
      instructions: 'Complete the sentences below.',
      wordLimit: { words: 2, number: false },
      body: [
        {
          kind: 'bullets',
          items: [
            'The students will recommend that employers provide [[6]] for staff who need to concentrate.',
            'Hannah will look at research on the use of [[7]] to hide the sound of speech.',
            'Dr Gallagher suggests starting the presentation with a [[8]] for the audience.',
            'The students must send Dr Gallagher their [[9]] by Friday.',
            'All the questionnaire responses should be included in an [[10]].',
          ],
        },
      ],
      questions: [
        {
          n: 6,
          answers: ['quiet zones'],
          location: { ref: 'l21', quote: 'So we’ll suggest quiet zones' },
          explanation:
            'Phone booths were their first thought but are designed for calls, so they will suggest quiet zones.',
          distractors: ['phone booths'],
        },
        {
          n: 7,
          answers: ['pink noise'],
          location: { ref: 'l24', quote: 'The research is mostly on pink noise' },
          explanation:
            '“Sound masking … to cover up speech” = hide the sound of speech. Hannah suggests white noise, but the tutor corrects her: pink noise.',
          distractors: ['white noise'],
        },
        {
          n: 8,
          answers: ['(live) demonstration'],
          location: { ref: 'l26', quote: 'begin with a live demonstration' },
          explanation:
            'The video is rejected because the room’s sound system is poor; the tutor suggests a live demonstration instead.',
          distractors: ['video'],
        },
        {
          n: 9,
          answers: ['reference list'],
          location: { ref: 'l28', quote: 'please send me your reference list by Friday' },
          explanation:
            'The slides are not needed “until the day itself”; the reference list is due by Friday.',
          distractors: ['slides'],
        },
        {
          n: 10,
          answers: ['appendix'],
          location: {
            ref: 'l30',
            quote: 'put the full set of responses in an appendix at the end',
          },
          explanation:
            '“The full set of responses” = all the questionnaire responses. They go in an appendix, with only a summary in the main text.',
          distractors: ['main text'],
        },
      ],
    },
  ],
})
