import { definePassage } from '../../define'

/**
 * Original text. Academic mock 2, Passage 2: the social psychology of queuing. Helena Varga and
 * Daniel Achterberg, and their studies, are invented for this passage.
 */
export default definePassage({
  id: 'm-ac2-p2',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'mock',
  title: 'The hidden rules of the queue',
  topic: 'Social psychology',
  intro: 'Original practice passage: the researchers and studies described are fictional.',
  minutes: 20,
  level: 2,
  texts: [
    {
      title: 'The hidden rules of the queue',
      paragraphs: [
        {
          label: 'A',
          text: 'Few experiences are as universal, or as widely resented, as waiting in line. Economists have long treated the queue as a straightforward cost: time spent standing still is time that could have been used for work or leisure. Over the past three decades, however, social psychologists have argued that this view misses something important. How people feel about a wait, they have found, depends only partly on how long it lasts. Two waits of identical length can leave one customer content and another furious, and the difference often lies in details that cost very little to change.',
        },
        {
          label: 'B',
          text: 'The first detail is what people are doing while they wait. In a study of post offices, a team led by the social psychologist Helena Varga timed more than 1,500 customers without their knowledge and then asked each of them how long they thought they had waited. On average, the estimates exceeded the real figure by about a third. The error was largest among people who had nothing to occupy them, and smallest among those who had been given a form to fill in or could watch a news screen. Occupied time, Varga concludes, passes more quickly than empty time.',
        },
        {
          label: 'C',
          text: 'Uncertainty matters just as much. A wait of unknown length feels longer than one whose end is in sight, which is why so many organisations now display expected waiting times. Varga’s team found that such displays reduced complaints even when the wait itself was long. Some businesses go further and deliberately overstate the wait, so that customers are pleasantly surprised when they are served early. Varga warns that this tactic carries a risk: customers who notice that the estimates are always too high soon stop believing them, and an estimate that nobody believes is worse than no estimate at all.',
        },
        {
          label: 'D',
          text: 'A third factor is fairness. In shops with several checkouts, each with its own line, customers spend much of their time watching the line next to them, and the sight of someone who arrived later being served first is a powerful source of irritation. A single line feeding several counters removes this problem, since everyone is served in order of arrival, and customers consistently rate it as fairer even when it moves no faster. It does, however, have a drawback of its own. Because one long line looks more daunting than several short ones, some potential customers decide not to join it at all.',
        },
        {
          label: 'E',
          text: 'Queues are also small social systems with rules of their own. When Varga’s team observed people waiting overnight for concert tickets, they found that the crowd quickly organised itself. Lists of names were drawn up, regular roll calls were held, and a person could leave for a short time without losing their place, provided someone nearby agreed to keep it for them. To test how firmly such rules are enforced, the researchers then sent volunteers to push into ordinary daytime queues at railway stations and cinemas. In fewer than half of the cases did anyone object. Objections were roughly twice as likely in short queues as in long ones, and an intruder who apologised was challenged far less often than one who said nothing at all.',
        },
        {
          label: 'F',
          text: 'It is often claimed that some nations are naturally better at queuing than others. Varga is sceptical. In her observations, the same people who waited patiently at a bus stop would, a few minutes later, crowd around a bar without any apparent sense of order. What seemed to matter was not national character but how clearly a situation signalled that a queue was expected: a rope, a line painted on the floor or a simple sign was enough to make an orderly line form. Where such signals were missing, people of every nationality behaved in much the same way.',
        },
        {
          label: 'G',
          text: 'A more controversial question is whether people should be allowed to pay to avoid waiting. Many economists see no difficulty: if some customers value their time more highly than others, letting them buy a place at the front can make everyone better off, since the extra revenue can be used to shorten waits for all. Critics reply that the queue is one of the few places in which wealth confers no advantage, and that selling places in it weakens a widely shared idea of equal treatment. In a survey of 2,000 adults by the economist Daniel Achterberg, a large majority accepted priority lanes at airports and theme parks, but most objected to the idea of paying for a quicker appointment with a doctor.',
        },
        {
          label: 'H',
          text: 'The newest development removes the line altogether. In a virtual queue, customers register on arrival and are handed a buzzer, or sent a text message, when their turn approaches, leaving them free to wander off in the meantime. People generally prefer this arrangement, and Varga’s own data suggest that it reduces the perceived length of a wait more than any other single change. Yet it has costs. Without a physical line, customers lose the most reassuring signal of all: the sight of themselves moving forward. Many respond by checking their phones every few minutes, and some, wandering too far, miss their turn entirely. Businesses can lose out too. A long line outside a restaurant is a powerful advertisement of its popularity, and some owners reported that passers-by stopped less often once the crowd had gone.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'match-info',
      instructions:
        'The reading passage has eight paragraphs, A–H. Which paragraph contains the following information? You may use any letter more than once.',
      options: [
        { key: 'A', text: 'Paragraph A' },
        { key: 'B', text: 'Paragraph B' },
        { key: 'C', text: 'Paragraph C' },
        { key: 'D', text: 'Paragraph D' },
        { key: 'E', text: 'Paragraph E' },
        { key: 'F', text: 'Paragraph F' },
        { key: 'G', text: 'Paragraph G' },
        { key: 'H', text: 'Paragraph H' },
      ],
      reuse: true,
      questions: [
        {
          n: 1,
          prompt:
            'evidence that behaviour in queues depends more on the situation than on people’s nationality',
          answer: 'F',
          location: {
            ref: 'F',
            quote:
              'What seemed to matter was not national character but how clearly a situation signalled that a queue was expected',
          },
          explanation:
            'Paragraph F rejects the idea that some nations queue better: the same people behaved differently at a bus stop and at a bar, and “what seemed to matter was not national character” but the signals in the situation.',
        },
        {
          n: 2,
          prompt: 'a reason why some people may be put off joining a queue',
          answer: 'D',
          location: {
            ref: 'D',
            quote: 'Because one long line looks more daunting than several short ones',
          },
          explanation:
            'A single long line “looks more daunting than several short ones”, so some potential customers “decide not to join it at all”. Being “put off” paraphrases this.',
          traps: {
            H: 'Paragraph H mentions passers-by who “stopped less often”, but that is because there was no visible queue, not because a queue put them off.',
          },
        },
        {
          n: 3,
          prompt: 'a description of how people waiting in a queue can leave it temporarily',
          answer: 'E',
          location: {
            ref: 'E',
            quote:
              'a person could leave for a short time without losing their place, provided someone nearby agreed to keep it for them',
          },
          explanation:
            'In the overnight ticket queues, “a person could leave for a short time without losing their place” if someone agreed to keep it. “Temporarily” paraphrases “for a short time”.',
          traps: {
            H: 'In a virtual queue people can go for a walk, but there is no physical queue to leave, and this is not an arrangement made by the people waiting.',
          },
        },
        {
          n: 4,
          prompt:
            'a comparison between how long people believed they had waited and the real length of their wait',
          answer: 'B',
          location: {
            ref: 'B',
            quote: 'On average, the estimates exceeded the real figure by about a third',
          },
          explanation:
            'Varga’s team timed customers and asked them “how long they thought they had waited”; “the estimates exceeded the real figure by about a third”.',
        },
        {
          n: 5,
          prompt:
            'a warning about a possible long-term effect of exaggerating how long a wait will be',
          answer: 'C',
          location: {
            ref: 'C',
            quote:
              'customers who notice that the estimates are always too high soon stop believing them',
          },
          explanation:
            'Some businesses “deliberately overstate the wait”; Varga warns that customers who notice this “soon stop believing” the estimates, which is worse than no estimate.',
        },
      ],
    },
    {
      type: 'mcq-multi',
      instructions: 'Choose TWO letters, A–E.',
      questions: [
        {
          n: 6,
          n2: 7,
          prompt:
            'Which TWO findings about people pushing into queues are reported in the passage?',
          options: [
            {
              key: 'A',
              text: 'Most people who pushed in were challenged by someone in the queue.',
            },
            { key: 'B', text: 'People objected more often when the queue was short.' },
            { key: 'C', text: 'Intruders who apologised were challenged less often.' },
            {
              key: 'D',
              text: 'Queues at railway stations were defended more firmly than those at cinemas.',
            },
            {
              key: 'E',
              text: 'Overnight queues were better protected against intruders than daytime ones.',
            },
          ],
          answers: ['B', 'C'],
          location: {
            ref: 'E',
            quote:
              'Objections were roughly twice as likely in short queues as in long ones, and an intruder who apologised was challenged far less often than one who said nothing at all',
          },
          explanation:
            'B: objections were “roughly twice as likely in short queues as in long ones”. C: “an intruder who apologised was challenged far less often than one who said nothing at all”.',
          traps: {
            A: 'The opposite: “In fewer than half of the cases did anyone object.”',
            D: 'Railway stations and cinemas are both named as test sites, but they are never compared.',
            E: 'The researchers pushed into daytime queues only; the overnight queues were observed, not tested, so no comparison is possible.',
          },
        },
        {
          n: 8,
          n2: 9,
          prompt: 'Which TWO points are made about paying to avoid waiting?',
          options: [
            { key: 'A', text: 'Some economists argue that it can benefit all customers.' },
            {
              key: 'B',
              text: 'Opponents say queues are among the few places where being rich brings no benefit.',
            },
            {
              key: 'C',
              text: 'Most people in a survey disapproved of priority lanes at airports.',
            },
            {
              key: 'D',
              text: 'The money it raises is normally spent on shortening everyone’s wait.',
            },
            {
              key: 'E',
              text: 'Paying for a quicker doctor’s appointment is becoming more common.',
            },
          ],
          answers: ['A', 'B'],
          location: {
            ref: 'G',
            quote:
              'Critics reply that the queue is one of the few places in which wealth confers no advantage',
          },
          explanation:
            'A: many economists say letting people buy a place at the front “can make everyone better off”. B: critics say the queue “is one of the few places in which wealth confers no advantage”.',
          traps: {
            C: 'The opposite: “a large majority accepted priority lanes at airports and theme parks”.',
            D: 'Economists say the extra revenue “can be used” to shorten waits; the passage does not say this normally happens.',
            E: 'Most people “objected to the idea” of paying for a quicker appointment; nothing is said about how common it is.',
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
      title: 'Virtual queues',
      body: [
        {
          kind: 'text',
          text: 'In a virtual queue, customers register when they arrive and are later given a [[10]] or a text message telling them that their turn is near. People generally prefer this system, and Varga’s research indicates that it shortens the [[11]] length of a wait more effectively than any other single change. There are disadvantages, however. Customers can no longer see themselves [[12]], so many keep checking their phones, and some go too far away and miss their turn. Businesses may suffer as well, because a long line outside a restaurant shows passers-by its [[13]].',
        },
      ],
      questions: [
        {
          n: 10,
          answers: ['buzzer'],
          location: { ref: 'H', quote: 'customers register on arrival and are handed a buzzer' },
          explanation:
            'Customers “are handed a buzzer, or sent a text message, when their turn approaches”. “Given” paraphrases “handed”.',
        },
        {
          n: 11,
          answers: ['perceived'],
          location: {
            ref: 'H',
            quote: 'it reduces the perceived length of a wait more than any other single change',
          },
          explanation:
            'Varga’s data suggest a virtual queue “reduces the perceived length of a wait more than any other single change”. It changes how long the wait feels, not how long it actually is.',
          distractors: ['real'],
        },
        {
          n: 12,
          answers: ['moving forward'],
          location: { ref: 'H', quote: 'the sight of themselves moving forward' },
          explanation:
            'Without a physical line, customers lose “the sight of themselves moving forward”, which is why they check their phones.',
        },
        {
          n: 13,
          answers: ['popularity'],
          location: {
            ref: 'H',
            quote: 'A long line outside a restaurant is a powerful advertisement of its popularity',
          },
          explanation:
            'A long line is “a powerful advertisement of its popularity”, so it shows passers-by that the restaurant is popular. “Advertisement” does not fit after “shows passers-by its”.',
          distractors: ['advertisement'],
        },
      ],
    },
  ],
})
