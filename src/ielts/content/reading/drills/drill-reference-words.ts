import { definePassage } from '../../define'

/** Original text. Reference-word drill: tracking this/which/such/those/the former/the latter. */
export default definePassage({
  id: 'drill-reference-words',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'Reference drill: the return of the night train',
  topic: 'Transport',
  minutes: 6,
  level: 2,
  intro:
    'For each question, find the word in the paragraph, then look back (usually to the previous clause or sentence) for the noun or idea it replaces. Test your choice by putting it in place of the reference word.',
  texts: [
    {
      title: 'Why night trains are coming back',
      paragraphs: [
        {
          label: 'A',
          text: 'For much of the late twentieth century, overnight rail services across Europe were in decline. Cheap flights could carry passengers between capital cities in a couple of hours, and many operators concluded that sleeper carriages, which were expensive to staff and maintain, no longer made commercial sense. By 2015, several long-established routes had been withdrawn altogether.',
        },
        {
          label: 'B',
          text: 'Since then, however, the picture has changed. A growing number of travellers want to reduce the carbon cost of their journeys, and this has encouraged rail companies to reconsider the overnight market. Two kinds of passenger are especially important: business travellers and families on holiday. The former value arriving in a city centre in time for a morning meeting; the latter appreciate not having to pay for a hotel on the first night.',
        },
        {
          label: 'C',
          text: 'Running a sleeper service is not simple, though. Trains often cross several national borders, and each country has its own rules on safety, staffing and track charges. Such differences can add hours to a timetable. Operators also face a shortage of suitable carriages, since few have been built in the last thirty years. Those that remain in service are frequently old and need costly refurbishment.',
        },
        {
          label: 'D',
          text: 'Supporters argue that governments should help. One proposal is to reduce the fees that operators pay to use the tracks at night, when lines are otherwise quiet. That would lower ticket prices without requiring large new subsidies. Critics reply that it treats rail more generously than coach travel, which also has a relatively low carbon footprint. The argument seems likely to continue for some time.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'mcq',
      instructions: 'Choose the correct letter, A, B, C or D.',
      questions: [
        {
          n: 1,
          prompt: 'In paragraph A, “which” refers to',
          options: [
            { key: 'A', text: 'overnight rail services.' },
            { key: 'B', text: 'cheap flights.' },
            { key: 'C', text: 'sleeper carriages.' },
            { key: 'D', text: 'operators.' },
          ],
          answer: 'C',
          location: {
            ref: 'A',
            quote: 'sleeper carriages, which were expensive to staff and maintain',
          },
          explanation:
            'A relative pronoun after a comma usually refers to the noun directly before it. Test it: “sleeper carriages were expensive to staff and maintain” makes sense.',
          traps: {
            D: '“Operators” is the subject of the sentence, but operators are not something you “staff and maintain”.',
            A: 'Overnight services are the general topic, but “which” sits right after “sleeper carriages” and describes them.',
          },
        },
        {
          n: 2,
          prompt: 'In paragraph B, “this” refers to',
          options: [
            { key: 'A', text: 'the change in the situation since 2015.' },
            { key: 'B', text: 'many travellers’ wish to cut the carbon cost of travel.' },
            { key: 'C', text: 'the overnight market.' },
            { key: 'D', text: 'the withdrawal of long-established routes.' },
          ],
          answer: 'B',
          location: {
            ref: 'B',
            quote:
              'A growing number of travellers want to reduce the carbon cost of their journeys, and this has encouraged',
          },
          explanation:
            '“This” here refers to a whole idea in the clause before it: travellers wanting to reduce carbon. Test it: “travellers’ wish to cut carbon has encouraged rail companies to reconsider” makes sense.',
          traps: {
            A: 'The change is the result, not the cause. “This” is what encouraged the companies, which is the travellers’ wish.',
            C: '“The overnight market” comes after “this”, so it cannot be what “this” points back to.',
          },
        },
        {
          n: 3,
          prompt: 'In paragraph B, “The former” refers to',
          options: [
            { key: 'A', text: 'business travellers.' },
            { key: 'B', text: 'families on holiday.' },
            { key: 'C', text: 'rail companies.' },
            { key: 'D', text: 'travellers in general.' },
          ],
          answer: 'A',
          location: {
            ref: 'B',
            quote:
              'business travellers and families on holiday. The former value arriving in a city centre',
          },
          explanation:
            '“The former” is the first of two things just mentioned: business travellers. The meaning confirms it, since they need to be in time for a morning meeting.',
          traps: {
            B: 'Families are “the latter”, the second of the pair.',
          },
        },
        {
          n: 4,
          prompt: 'In paragraph B, “the latter” refers to',
          options: [
            { key: 'A', text: 'business travellers.' },
            { key: 'B', text: 'families on holiday.' },
            { key: 'C', text: 'hotels.' },
            { key: 'D', text: 'morning meetings.' },
          ],
          answer: 'B',
          location: { ref: 'B', quote: 'the latter appreciate not having to pay for a hotel' },
          explanation:
            '“The latter” is the second of the pair “business travellers and families on holiday”. Saving the cost of a hotel suits families on holiday.',
          traps: {
            C: '“Hotel” comes after “the latter”, so it cannot be the word it refers back to.',
          },
        },
        {
          n: 5,
          prompt: 'In paragraph C, “Such differences” refers to differences in',
          options: [
            { key: 'A', text: 'the number of borders each train crosses.' },
            { key: 'B', text: 'the regulations of each country.' },
            { key: 'C', text: 'the length of timetables.' },
            { key: 'D', text: 'the age of carriages.' },
          ],
          answer: 'B',
          location: {
            ref: 'C',
            quote:
              'each country has its own rules on safety, staffing and track charges. Such differences',
          },
          explanation:
            '“Such” sums up a type of thing just described: each country having its own rules. “Regulations” paraphrases “rules”.',
          traps: {
            A: 'Borders are mentioned in the same sentence, but the differences are between countries’ rules, not between numbers of borders.',
            C: 'Timetables are what the differences affect (“add hours to a timetable”), not what the differences are.',
          },
        },
        {
          n: 6,
          prompt: 'In paragraph C, “Those” refers to',
          options: [
            { key: 'A', text: 'operators.' },
            { key: 'B', text: 'suitable carriages.' },
            { key: 'C', text: 'the last thirty years.' },
            { key: 'D', text: 'national borders.' },
          ],
          answer: 'B',
          location: {
            ref: 'C',
            quote: 'few have been built in the last thirty years. Those that remain in service',
          },
          explanation:
            '“Few have been built” already refers back to “suitable carriages”, and “Those that remain in service … need costly refurbishment” only makes sense for carriages.',
          traps: {
            A: 'Operators “face a shortage”, but operators are not “in service” or “refurbished”.',
          },
        },
        {
          n: 7,
          prompt: 'In paragraph D, “That” refers to',
          options: [
            { key: 'A', text: 'government help in general.' },
            { key: 'B', text: 'lines being quiet at night.' },
            { key: 'C', text: 'cutting the charges for using the tracks at night.' },
            { key: 'D', text: 'large new subsidies.' },
          ],
          answer: 'C',
          location: {
            ref: 'D',
            quote:
              'One proposal is to reduce the fees that operators pay to use the tracks at night',
          },
          explanation:
            '“That” refers to the proposal in the previous sentence. Test it: “cutting track fees would lower ticket prices” is exactly the logic of the paragraph.',
          traps: {
            B: 'Quiet lines are the reason night-time fees could be cut; quiet lines on their own would not lower ticket prices.',
            D: 'Large subsidies are what the proposal avoids (“without requiring large new subsidies”).',
          },
        },
        {
          n: 8,
          prompt: 'In paragraph D, “it” (in “it treats rail more generously”) refers to',
          options: [
            { key: 'A', text: 'coach travel.' },
            { key: 'B', text: 'the plan to reduce track fees.' },
            { key: 'C', text: 'the carbon footprint.' },
            { key: 'D', text: 'ticket prices.' },
          ],
          answer: 'B',
          location: {
            ref: 'D',
            quote: 'Critics reply that it treats rail more generously than coach travel',
          },
          explanation:
            'The critics are replying to the supporters’ proposal, so “it” is the plan to cut track fees. A plan can “treat” one kind of transport more generously than another.',
          traps: {
            A: 'Coach travel comes after “it” and is what rail is compared with, so it cannot be what “it” means.',
            D: 'Ticket prices cannot “treat” anything generously; the action belongs to the plan.',
          },
        },
      ],
    },
  ],
})
