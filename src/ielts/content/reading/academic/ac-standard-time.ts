import { definePassage } from '../../define'

/**
 * Original text. Academic Passage 2 style: a historical account with modern historians’ views.
 * The historians (Achebe, Calloway, Lindqvist, Mehta, Osei) are fictional; the broad historical
 * outline (local solar time, railway time in Britain, the 1883 North American zones, the 1884
 * Washington conference) follows the generally accepted record.
 */
export default definePassage({
  id: 'ac-standard-time',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'practice',
  title: 'Keeping the same time',
  topic: 'History',
  intro:
    'The historical outline is accurate, but the historians quoted in this practice passage are fictional.',
  minutes: 20,
  level: 2,
  texts: [
    {
      title: 'Keeping the same time: how the clock was standardised',
      paragraphs: [
        {
          label: 'A',
          text: 'For most of human history, time was a local matter. Noon was the moment when the sun stood highest in the sky, and because the sun appears to travel from east to west, noon arrived at slightly different moments in different places. A town lying to the west of another would reach its noon a little later; in Britain, for instance, clocks in Bristol, set by the sun, ran roughly ten minutes behind those in London. For centuries this caused almost no difficulty. A journey between the two cities by stagecoach took the best part of a day, and a traveller who arrived to find the church clock showing a different hour from his own watch could simply adjust it, if he noticed at all.',
        },
        {
          label: 'B',
          text: 'The railways changed this. Trains travelled several times faster than the fastest coach and, unlike coaches, they had to run to published timetables. A company whose line passed through a dozen towns faced an awkward choice: either print a timetable listing each departure in the local time of every station, or adopt a single time for the whole route. Passengers were frequently confused, and missed connections were common. More seriously, on lines where trains travelling in opposite directions shared a single track, a discrepancy of a few minutes between the clocks at two stations could have fatal consequences. The transport historian Miriam Calloway argues that it was this danger, far more than the complaints of passengers, that finally persuaded railway managers to act.',
        },
        {
          label: 'C',
          text: 'In Britain, the solution adopted by most companies during the 1840s was to run all their services according to London time, which was itself based on observations made at the Royal Observatory in Greenwich. Station clocks were set to this “railway time”, and guards carried watches that were checked against it. The arrival of the electric telegraph made the system far more reliable. From the early 1850s, signals sent along telegraph wires allowed clocks across the country to be corrected against Greenwich every day. Anders Lindqvist, who has written widely on the history of communications, goes further: in his view, the railways created the demand for a common time, but it was the telegraph that made one possible, since clocks inevitably drift and there would otherwise have been no practical way of keeping hundreds of them in agreement.',
        },
        {
          label: 'D',
          text: 'Not every community welcomed the change. A number of towns kept their own time for civic purposes long after the local station had adopted London’s, and for a while residents had to live with two hours at once. Some public clocks were even fitted with two minute hands, one showing local time and the other railway time. Fiona Achebe, who has examined local newspapers of the period, notes that the objections she found were seldom about practical inconvenience; what troubled writers was the idea that the town’s own time, measured by its own sun, was being taken away. In the end, however, the convenience of a single standard proved difficult to resist, and by the mid-1850s the great majority of public clocks in Britain showed Greenwich time. Parliament did not make it the legal standard until 1880.',
        },
        {
          label: 'E',
          text: 'The problem was far greater in North America, where distances were vast and dozens of railway companies each kept their own time, usually that of a major city on their network. Large stations sometimes displayed several clocks side by side, each serving a different company. A single national time was impractical: the sun rises some three hours earlier on the Atlantic coast than on the Pacific. Proposals therefore turned to the idea of dividing the continent into broad zones, within each of which all clocks would show the same time, with the hour changing by a whole unit at each boundary.',
        },
        {
          label: 'F',
          text: 'It was the railway companies themselves that eventually put this idea into effect. On a single day in November 1883, stations across the United States and Canada reset their clocks to one of a small number of zone times, an occasion sometimes remembered as “the day of two noons”, because in towns near the eastern edge of a zone the clocks struck twelve, were put back, and then struck twelve again. As in Britain, governments were slow to follow, and the zones were used for business and travel for many years before they were given legal force. For the economic historian Rahul Mehta, this sequence – private agreement first, legislation decades later – is the most revealing feature of the whole story. Standard time, he argues, was essentially created by commerce; the state merely confirmed it.',
        },
        {
          label: 'G',
          text: 'The question of a worldwide system was taken up at an international conference held in Washington in 1884, attended by delegates from twenty-five countries. The meeting recommended that the meridian passing through Greenwich should serve as the starting point for measuring longitude, partly because most of the world’s shipping already used charts based on it. The decision was not unanimous. France, which had its own meridian running through Paris, declined to support it and went on using Paris time for many years. Daniel Osei has pointed out that the conference had no power to compel any nation to act on its recommendations, so that the eventual success of the Greenwich system depended on the separate decisions of individual governments, which were taken gradually and unevenly over the following decades.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'match-info',
      instructions:
        'The reading passage has seven paragraphs, A–G. Which paragraph contains the following information? You may use any letter more than once.',
      options: [
        { key: 'A', text: 'Paragraph A' },
        { key: 'B', text: 'Paragraph B' },
        { key: 'C', text: 'Paragraph C' },
        { key: 'D', text: 'Paragraph D' },
        { key: 'E', text: 'Paragraph E' },
        { key: 'F', text: 'Paragraph F' },
        { key: 'G', text: 'Paragraph G' },
      ],
      reuse: true,
      questions: [
        {
          n: 1,
          prompt: 'a reference to a single device designed to display two different times',
          answer: 'D',
          location: {
            ref: 'D',
            quote:
              'Some public clocks were even fitted with two minute hands, one showing local time and the other railway time.',
          },
          explanation:
            'One clock with two minute hands showed local time and railway time at once. Paragraph E describes SEVERAL clocks side by side, one per company – that is several devices, not a single one.',
          traps: {
            E: 'E mentions several clocks displayed together, each for a different company – not one device showing two times.',
          },
        },
        {
          n: 2,
          prompt: 'an explanation of why one time could not be used across an entire continent',
          answer: 'E',
          location: {
            ref: 'E',
            quote:
              'A single national time was impractical: the sun rises some three hours earlier on the Atlantic coast than on the Pacific.',
          },
          explanation:
            '“Could not be used” paraphrases “was impractical”, and the reason follows the colon: the three-hour difference in sunrise between the two coasts.',
        },
        {
          n: 3,
          prompt: 'an indication of how long a journey took before the railway age',
          answer: 'A',
          location: {
            ref: 'A',
            quote: 'A journey between the two cities by stagecoach took the best part of a day',
          },
          explanation:
            'The stagecoach journey from Bristol to London took “the best part of a day”. Paragraph B compares the speed of trains and coaches but gives no journey time.',
          traps: {
            B: 'B says trains were “several times faster” than coaches, but it does not say how long any journey took.',
          },
        },
        {
          n: 4,
          prompt: 'a practical reason for choosing a particular reference line for the whole world',
          answer: 'G',
          location: {
            ref: 'G',
            quote: 'partly because most of the world’s shipping already used charts based on it',
          },
          explanation:
            'The Greenwich meridian was recommended partly because most shipping already used charts based on it – a practical reason. “Reference line” paraphrases “meridian … starting point for measuring longitude”.',
        },
        {
          n: 5,
          prompt: 'a description of the danger posed by clocks that did not agree',
          answer: 'B',
          location: {
            ref: 'B',
            quote:
              'a discrepancy of a few minutes between the clocks at two stations could have fatal consequences',
          },
          explanation:
            '“Clocks that did not agree” paraphrases “a discrepancy … between the clocks”, and “danger” matches “fatal consequences” on single-track lines. Paragraph C mentions that clocks drift, but not that this was dangerous.',
          traps: {
            C: 'C says clocks “inevitably drift”, but the point there is how they were kept in agreement, not the danger of disagreement.',
          },
        },
      ],
    },
    {
      type: 'match-features',
      instructions:
        'Look at the following statements and the list of historians below. Match each statement with the correct historian. You may use any letter more than once.',
      optionsTitle: 'List of historians',
      options: [
        { key: 'A', text: 'Fiona Achebe' },
        { key: 'B', text: 'Miriam Calloway' },
        { key: 'C', text: 'Anders Lindqvist' },
        { key: 'D', text: 'Rahul Mehta' },
        { key: 'E', text: 'Daniel Osei' },
      ],
      reuse: true,
      questions: [
        {
          n: 6,
          prompt:
            'Concern about accidents, rather than public dissatisfaction, was what made railway companies change their practice.',
          answer: 'B',
          location: {
            ref: 'B',
            quote:
              'it was this danger, far more than the complaints of passengers, that finally persuaded railway managers to act',
          },
          explanation:
            'Calloway contrasts “this danger” (the risk of fatal collisions) with “the complaints of passengers”. “Public dissatisfaction” paraphrases the complaints; “concern about accidents” paraphrases the danger.',
        },
        {
          n: 7,
          prompt:
            'A shared time across a whole country depended on a way of regularly correcting clocks.',
          answer: 'C',
          location: {
            ref: 'C',
            quote: 'it was the telegraph that made one possible, since clocks inevitably drift',
          },
          explanation:
            'Lindqvist argues that the telegraph “made one [a common time] possible” because clocks drift and there was otherwise “no practical way” of keeping them in agreement. That is a means of regular correction.',
        },
        {
          n: 8,
          prompt: 'Objections to the new time were mainly symbolic in nature.',
          answer: 'A',
          location: {
            ref: 'D',
            quote: 'the objections she found were seldom about practical inconvenience',
          },
          explanation:
            'Achebe found that objections were “seldom about practical inconvenience”; writers were troubled by the idea that “the town’s own time” was being taken away – a matter of identity and symbolism, not practicality.',
        },
        {
          n: 9,
          prompt: 'Governments played only a secondary role in creating standard time.',
          answer: 'D',
          location: {
            ref: 'F',
            quote:
              'Standard time, he argues, was essentially created by commerce; the state merely confirmed it.',
          },
          explanation:
            'Mehta says commerce created standard time and the state “merely confirmed it” – a secondary role. Osei (E) also mentions governments, but he says the success of the Greenwich system DEPENDED on their decisions, which gives them an important role, not a secondary one.',
          traps: {
            E: 'Osei mentions “individual governments”, but he says the Greenwich system’s success depended on them – the opposite of a minor role.',
          },
        },
      ],
    },
    {
      type: 'completion',
      format: 'summary',
      instructions:
        'Complete the summary below. Choose NO MORE THAN TWO WORDS from the passage for each answer.',
      wordLimit: { words: 2, number: false },
      title: 'Railway time in Britain',
      body: [
        {
          kind: 'text',
          text: 'During the 1840s, most British railway companies began to run their trains according to London time, which depended on observations carried out at the [[10]]. This time was displayed on station clocks, and [[11]] were given watches that were regularly checked against it. From the early 1850s, signals sent by the [[12]] meant that clocks all over the country could be adjusted daily. Not everyone approved: certain towns held on to their own local time for [[13]], so that two different hours were in use at the same time. Nevertheless, by the middle of the decade, almost all the [[14]] in Britain were showing Greenwich time, although this did not become the legal standard until 1880.',
        },
      ],
      questions: [
        {
          n: 10,
          answers: ['Royal Observatory'],
          location: {
            ref: 'C',
            quote: 'based on observations made at the Royal Observatory in Greenwich',
          },
          explanation:
            '“Observations carried out at” paraphrases “observations made at”. “Greenwich” alone does not fit after “the”, and “Royal Observatory” is the name of the place.',
          distractors: ['Greenwich'],
        },
        {
          n: 11,
          answers: ['guards'],
          location: {
            ref: 'C',
            quote: 'guards carried watches that were checked against it',
          },
          explanation:
            'The guards carried the watches. Passengers are mentioned in paragraph B, but nothing says they were given watches.',
          distractors: ['passengers'],
        },
        {
          n: 12,
          answers: ['telegraph', 'electric telegraph', 'telegraph wires'],
          location: {
            ref: 'C',
            quote:
              'signals sent along telegraph wires allowed clocks across the country to be corrected against Greenwich every day',
          },
          explanation:
            '“Adjusted daily” paraphrases “corrected … every day”. The signals travelled by the (electric) telegraph, along telegraph wires; any of these answers fits the gap and the word limit.',
        },
        {
          n: 13,
          answers: ['civic purposes'],
          location: {
            ref: 'D',
            quote: 'A number of towns kept their own time for civic purposes',
          },
          explanation:
            '“Held on to” paraphrases “kept”. The gap comes after “for”, exactly as in the text: “for civic purposes”.',
        },
        {
          n: 14,
          answers: ['public clocks'],
          location: {
            ref: 'D',
            quote:
              'by the mid-1850s the great majority of public clocks in Britain showed Greenwich time',
          },
          explanation:
            '“Almost all” paraphrases “the great majority of”. Station clocks had already been set to railway time in the 1840s; the point in D is that PUBLIC clocks in general followed by the mid-1850s.',
          distractors: ['station clocks', 'clocks'],
        },
      ],
    },
  ],
})
