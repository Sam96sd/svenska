import { definePassage } from '../../define'

/**
 * Original text. Academic mock 2, Passage 3: an argumentative essay on the "replication crisis"
 * in science, with the writer's own views.
 */
export default definePassage({
  id: 'm-ac2-p3',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'mock',
  title: 'Is science really in crisis?',
  topic: 'Philosophy of science',
  intro:
    'Original practice passage written for this mock test; the essay and its writer are fictional.',
  minutes: 23,
  level: 3,
  texts: [
    {
      title: 'Is science really in crisis?',
      paragraphs: [
        {
          label: 'A',
          text: 'Over the past fifteen years, few phrases have done more to unsettle public faith in research than ‘the replication crisis’. The story is by now familiar: when scientists tried to repeat well-known experiments, many of the original results failed to reappear, and commentators concluded that large parts of the published literature could not be trusted. The problems the phrase refers to are real, and some of them are serious. My argument in this essay, however, is that the word ‘crisis’ has obscured as much as it has revealed. It encourages us to read a failed replication as a final verdict, to imagine a lost golden age of reliable science, and to expect a quick technical cure. All three expectations are mistaken.',
        },
        {
          label: 'B',
          text: 'The alarm was raised most loudly in psychology. In one widely discussed project, teams of researchers attempted to repeat a hundred studies published in leading journals, following the original methods as closely as they could. Fewer than half produced a clear result in the same direction as the original, and even where they did, the effects were typically smaller. Similar exercises have since been carried out in economics, medicine and cancer biology, with results that vary from field to field but are rarely reassuring. It is hardly surprising that many observers began to wonder how much of what they had been taught was true.',
        },
        {
          label: 'C',
          text: 'Nor is there much disagreement about the main causes. Journals have long preferred to publish positive findings, so studies that found nothing tended to remain in filing cabinets, leaving a published record tilted towards success. Many experiments used samples too small to detect the effects they were looking for, which, paradoxically, makes any effect they do detect more likely to be exaggerated. Most importantly, researchers enjoyed considerable freedom in how they analysed their data: which participants to exclude, which measures to report, when to stop collecting. Each choice might be defensible on its own, but together they allowed chance patterns to be presented as discoveries. Very little of this involved deliberate dishonesty; it was, for the most part, the predictable result of ordinary people responding to the incentives around them.',
        },
        {
          label: 'D',
          text: 'My first objection concerns what a failed replication actually shows. No repetition of an experiment is ever exact. The participants are different, the period is different and, in studies of human behaviour, the cultural context may have shifted considerably. When a result fails to reappear, it may be because the original finding was a fluke, but it may also be because the effect is real only under certain conditions, and discovering those conditions is itself a contribution to knowledge. I should add that this argument is easily abused. Authors whose findings have not been reproduced have sometimes appealed to unspecified differences between the studies, an explanation that, if it can be offered after any failure, protects every claim from ever being tested. The point is not that failed replications should be explained away, but that they mark the beginning of an inquiry rather than its end.',
        },
        {
          label: 'E',
          text: 'My second objection is to the history that the word implies. A crisis suggests a fall from an earlier state of health, yet there is no evidence that the findings of, say, the 1970s were more reliable than those of today. What has changed is not the quality of research but the willingness to check it. Seen in this light, the wave of failed replications is less a sign of decay than evidence that the self-correcting machinery of science, so often praised in theory, has at last begun to operate in practice.',
        },
        {
          label: 'F',
          text: 'That said, it would be complacent to treat the episode as a triumph. Correction, when it came, was slow and uneven: findings that had failed repeated attempts at replication continued to be cited approvingly for years, and some still appear in introductory textbooks. The incentives that produced the problem have also proved remarkably durable. Careers are still built on novel and striking results, and a researcher who spends two years confirming someone else’s work can expect far less recognition than one who announces something new. A system that corrects itself only when a few individuals are willing to sacrifice their own prospects can hardly be described as healthy.',
        },
        {
          label: 'G',
          text: 'The reforms proposed in response deserve a cautious welcome. Pre-registration, in which researchers record their hypotheses and planned analyses before collecting any data, makes it harder to present chance findings as predictions. Registered reports go further: a journal agrees to publish a study on the strength of its question and methods, before the results are known, which removes the incentive to produce a positive outcome. Of the two, I find the second more promising, since it changes what is rewarded rather than simply adding a procedure to be followed. Pre-registration, by contrast, risks becoming a box to be ticked, and its strictest advocates sometimes seem to regard any analysis not planned in advance as suspect. That would be a serious loss. Much of the history of science consists of unexpected observations that nobody had thought to predict.',
        },
        {
          label: 'H',
          text: 'What, then, should the rest of us conclude? Not that science is broken, but that a single study, however prestigious the journal in which it appears, rarely settles anything. Confidence in a finding should grow with the number of independent groups that have reproduced it, and journalists who report a striking new result as established fact do their readers no favours. If the replication debate leaves the public with a more patient and more discriminating attitude to research, it will have done more good than harm; if it leaves them believing that nothing scientists say can be trusted, the cure will have been worse than the disease.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'headings',
      instructions:
        'The passage has eight paragraphs, A–H. Choose the correct heading for paragraphs B–F from the list of headings below.',
      headings: [
        { key: 'i', text: 'Fraud on a larger scale than anyone expected' },
        { key: 'ii', text: 'Disappointing results from efforts to repeat experiments' },
        { key: 'iii', text: 'Familiar weaknesses with largely innocent origins' },
        { key: 'iv', text: 'Why a failed repetition should start an investigation, not end it' },
        { key: 'v', text: 'Evidence that standards have fallen since the 1970s' },
        { key: 'vi', text: 'A sign that science is working as it should' },
        { key: 'vii', text: 'Reasons not to celebrate too soon' },
        { key: 'viii', text: 'How journalists distort scientific findings' },
        { key: 'ix', text: 'Changing what journals choose to reward' },
      ],
      questions: [
        {
          n: 1,
          para: 'B',
          answer: 'ii',
          location: {
            ref: 'B',
            quote:
              'Fewer than half produced a clear result in the same direction as the original, and even where they did, the effects were typically smaller',
          },
          explanation:
            'Paragraph B describes projects that tried to repeat published studies and the disappointing outcome: fewer than half succeeded, and results in other fields were “rarely reassuring”.',
        },
        {
          n: 2,
          para: 'C',
          answer: 'iii',
          location: {
            ref: 'C',
            quote: 'Very little of this involved deliberate dishonesty',
          },
          explanation:
            'Paragraph C lists the well-known causes (publication bias, small samples, flexible analysis) on which there is little “disagreement”, and stresses that they were mostly innocent: “very little of this involved deliberate dishonesty”.',
          traps: {
            i: 'The paragraph says the opposite: the problems arose from incentives, not from fraud.',
          },
        },
        {
          n: 3,
          para: 'D',
          answer: 'iv',
          location: {
            ref: 'D',
            quote: 'they mark the beginning of an inquiry rather than its end',
          },
          explanation:
            'The writer argues that a failure to replicate may reveal the conditions under which an effect holds, so failed replications “mark the beginning of an inquiry rather than its end”.',
        },
        {
          n: 4,
          para: 'E',
          answer: 'vi',
          location: {
            ref: 'E',
            quote:
              'the self-correcting machinery of science, so often praised in theory, has at last begun to operate in practice',
          },
          explanation:
            'Paragraph E argues that the failed replications are “less a sign of decay” than evidence that science’s self-correction is finally working.',
          traps: {
            v: 'The 1970s are mentioned, but the writer says there is “no evidence” that research was more reliable then, so standards have not been shown to fall.',
          },
        },
        {
          n: 5,
          para: 'F',
          answer: 'vii',
          location: {
            ref: 'F',
            quote: 'it would be complacent to treat the episode as a triumph',
          },
          explanation:
            'Having said that the replications show self-correction, the writer warns against treating this as “a triumph”: correction was slow and the old incentives remain.',
          traps: {
            ix: 'F says the incentives have not changed; changing what is rewarded is discussed in paragraph G, as a strength of registered reports.',
          },
        },
      ],
    },
    {
      type: 'ynng',
      instructions:
        'Do the following statements agree with the claims of the writer in the reading passage? Choose YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, NOT GIVEN if it is impossible to say what the writer thinks about this.',
      questions: [
        {
          n: 6,
          statement:
            'Attempts to repeat studies in economics have been more successful than those in psychology.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'B',
            quote: 'with results that vary from field to field but are rarely reassuring',
          },
          explanation:
            'The writer says results “vary from field to field” but never says which fields did better, so there is no comparison between economics and psychology. The alarm being raised “most loudly” in psychology describes the reaction, not the results.',
        },
        {
          n: 7,
          statement:
            'Most unreliable findings were produced by researchers who intended to mislead.',
          answer: 'NO',
          location: {
            ref: 'C',
            quote: 'Very little of this involved deliberate dishonesty',
          },
          explanation:
            'The writer says “very little of this involved deliberate dishonesty”; it was mostly “the predictable result of ordinary people responding to the incentives around them”.',
        },
        {
          n: 8,
          statement:
            'Blaming unspecified differences between studies can be a way of avoiding any real test of a claim.',
          answer: 'YES',
          location: {
            ref: 'D',
            quote: 'protects every claim from ever being tested',
          },
          explanation:
            'The writer warns that appeals to “unspecified differences between the studies”, if offered after any failure, “protects every claim from ever being tested”.',
        },
        {
          n: 9,
          statement:
            'Researchers who confirm other people’s findings receive less credit than those who report new results.',
          answer: 'YES',
          location: {
            ref: 'F',
            quote: 'can expect far less recognition than one who announces something new',
          },
          explanation:
            'A researcher who spends two years confirming someone else’s work “can expect far less recognition than one who announces something new”. “Credit” paraphrases “recognition”.',
        },
        {
          n: 10,
          statement: 'Registered reports will soon be adopted by most scientific journals.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'G',
            quote: 'Of the two, I find the second more promising',
          },
          explanation:
            'The writer finds registered reports “more promising” than pre-registration, but makes no prediction about how many journals will use them, or when.',
        },
      ],
    },
    {
      type: 'match-endings',
      instructions:
        'Complete each sentence with the correct ending, A–G, below. There are more endings than sentences, so you will not use them all.',
      optionsTitle: 'List of endings',
      options: [
        { key: 'A', text: 'exaggerate the size of any effect they detect.' },
        { key: 'B', text: 'distrust any analysis that was not decided on beforehand.' },
        { key: 'C', text: 'change the kind of work that is rewarded.' },
        { key: 'D', text: 'fail to serve their readers well.' },
        { key: 'E', text: 'remove the need for exploratory research.' },
        { key: 'F', text: 'be rejected by most leading journals.' },
        { key: 'G', text: 'trust only findings that have been reproduced.' },
      ],
      questions: [
        {
          n: 11,
          prompt: 'Experiments that use very small samples are likely to',
          answer: 'A',
          location: {
            ref: 'C',
            quote: 'makes any effect they do detect more likely to be exaggerated',
          },
          explanation:
            'Samples that are too small make “any effect they do detect more likely to be exaggerated”.',
          traps: {
            F: 'Journals are said to prefer positive findings; nothing is said about rejecting small studies.',
          },
        },
        {
          n: 12,
          prompt: 'The strictest supporters of pre-registration sometimes appear to',
          answer: 'B',
          location: {
            ref: 'G',
            quote:
              'its strictest advocates sometimes seem to regard any analysis not planned in advance as suspect',
          },
          explanation:
            '“Distrust” paraphrases “regard … as suspect”, and “not decided on beforehand” paraphrases “not planned in advance”.',
          traps: {
            E: 'The writer fears this attitude would be “a serious loss” for unexpected discoveries, but nobody claims exploratory research is no longer needed.',
          },
        },
        {
          n: 13,
          prompt: 'The writer favours registered reports because they',
          answer: 'C',
          location: {
            ref: 'G',
            quote:
              'it changes what is rewarded rather than simply adding a procedure to be followed',
          },
          explanation:
            'The writer prefers registered reports “since it changes what is rewarded rather than simply adding a procedure to be followed”.',
          traps: {
            E: 'Nothing suggests registered reports make exploratory research unnecessary; the writer values unexpected observations.',
          },
        },
        {
          n: 14,
          prompt: 'Journalists who present a striking new result as established fact',
          answer: 'D',
          location: {
            ref: 'H',
            quote: 'do their readers no favours',
          },
          explanation:
            'Such journalists “do their readers no favours”, which means they do not serve their readers well.',
          traps: {
            G: 'Trusting only reproduced findings is closer to what the writer recommends; journalists who report a single result as fact are doing the opposite.',
          },
        },
      ],
    },
  ],
})
