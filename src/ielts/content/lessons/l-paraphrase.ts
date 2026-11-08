import { defineLesson } from '../define'

export default defineLesson({
  id: 'l-paraphrase',
  skill: 'listening',
  module: 'both',
  order: 4,
  title: 'Hear the paraphrase',
  summary:
    'Match the words in the question to the different words speakers use, especially in multiple choice and matching.',
  types: ['paraphrase'],
  minutes: 9,
  sections: [
    {
      kind: 'text',
      heading: 'Same meaning, different words',
      paragraphs: [
        'The question paper and the recording rarely use the same words. In Parts 2 and 3, the right option in a multiple-choice or matching question is almost always a **paraphrase** of what the speaker says, while the wrong options often repeat words you actually hear.',
        'So the skill is not “find the option with the word I heard”. It is “find the option that means what the speaker meant”.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Question words vs what speakers say',
      headers: ['On the question paper', 'What the speaker might say'],
      rows: [
        ['was surprised by', 'I really didn’t see that coming / I never expected…'],
        ['is concerned about', 'what’s bothering me is… / my worry is…'],
        ['short of time', 'in a rush / have to dash off / pushed for time'],
        ['inexpensive', 'it won’t break the bank / it’s a fraction of the price'],
        ['the most effective', 'what would make the biggest difference'],
        ['disagree with', 'I’m not sure I’d go along with that'],
        ['make public', 'put it up where everyone can see it'],
        ['at the end of the day', 'after the evening session / once everything closes'],
      ],
    },
    {
      kind: 'steps',
      heading: 'A method for multiple choice',
      items: [
        'In the reading time, underline the key idea in the question stem (“What surprised Lucas…?”) and think how a speaker might say it.',
        'Read the options and note how they differ. Usually only one or two words separate them.',
        'Listen for the idea, not the word. When you hear an option’s exact words, ask: did the speaker agree, reject it, or just mention it?',
        'Choose the option that matches the speaker’s final view, then move on straight away.',
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: a Part 3 discussion',
      context:
        'Question: What does Hana say about the library’s new opening hours?\nA They are too short.\nB They are better for students who work.\nC They are similar to last year’s.\n\nRecording:\nHANA: Some people said the hours were too short, but I don’t agree. Staying open until ten means people with evening jobs can finally get in after their shifts.',
      question: 'Which option is correct?',
      answer: 'B',
      reasoning: [
        'Option A repeats the exact words “too short”, but Hana says “I don’t agree”, so it is the view she rejects.',
        '“People with evening jobs can finally get in” is a paraphrase of “better for students who work”.',
        'Option C is not mentioned at all: there is no comparison with last year.',
      ],
    },
    {
      kind: 'trap',
      text: '**Word matching** is the biggest trap in Parts 2 and 3. If an option contains the same word you heard, be suspicious: check whether the speaker agreed with it, rejected it, or was describing someone else’s opinion.',
    },
    {
      kind: 'tip',
      text: 'In matching questions with two or three speakers, notice **who** says what. A man may suggest an idea and the woman may reject it. The answer is usually the view the speakers end up agreeing on, or the one the question names.',
    },
    {
      kind: 'phrases',
      heading: 'Phrases that show agreement or rejection',
      items: [
        {
          phrase: 'That’s exactly what I thought / Absolutely',
          use: 'Agreement: the idea is confirmed.',
        },
        {
          phrase: 'I’m not convinced / I’m not so sure',
          use: 'Doubt: the idea is probably not the answer.',
        },
        { phrase: 'That’s a nice idea, but…', use: 'Polite rejection: the idea is ruled out.' },
        { phrase: 'What really matters is…', use: 'The speaker’s main point follows.' },
      ],
    },
  ],
  drills: ['drill-listen-paraphrase-mcq'],
})
