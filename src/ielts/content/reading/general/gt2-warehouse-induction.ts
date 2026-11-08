import { definePassage } from '../../define'

/** Original text. General Training Section 2 style: two workplace training texts. */
export default definePassage({
  id: 'gt2-warehouse-induction',
  skill: 'reading',
  module: 'general',
  section: 'gt2',
  use: 'practice',
  title: 'Fenmoor Distribution Centre: safety for new staff',
  topic: 'Work and safety',
  minutes: 20,
  level: 2,
  texts: [
    {
      kind: 'Staff handbook',
      title: 'Health and safety induction for new staff',
      paragraphs: [
        {
          text: 'All new employees at Fenmoor Distribution Centre, including agency workers, must complete this induction before starting work on the warehouse floor. The induction takes place on your first morning and is led by a member of the site safety team. At the end of the session you will be asked to sign a form confirming that you have understood the information, and you will not be issued with an access pass until you have done so.',
        },
        {
          text: 'Personal protective equipment (PPE) is provided free of charge. Safety boots and a high-visibility vest must be worn at all times in operational areas, even if you are only passing through. Gloves are required when handling pallets or cutting shrink-wrap, and ear defenders must be worn in the baling area, where noise levels are highest. Lost or damaged items should be reported to your team leader, who will arrange replacements.',
        },
        {
          text: 'Forklift trucks and other powered vehicles operate throughout the warehouse. Pedestrians must keep to the walkways marked in green and may cross vehicle aisles only at the designated crossing points. Never walk behind a reversing vehicle. Mobile phones may not be used while you are walking on the warehouse floor; if you need to make or take a call, step into one of the refuge areas, which are marked with yellow lines.',
        },
        {
          text: 'Contrary to what many new staff expect, most injuries at Fenmoor are caused not by vehicles but by poor manual handling. Before lifting anything, check the weight shown on its label. Any item heavier than 20 kilograms must be lifted by two people or with mechanical help, such as a pallet truck. No one may operate a forklift until they have passed the company’s own three-day training course, even if they already hold a licence from a previous employer.',
        },
        {
          text: 'The fire alarm is tested every Monday at 10 am; if it sounds at any other time, treat it as a real emergency. Leave by the nearest exit without stopping to collect personal belongings and go to the assembly point in the staff car park. Fire marshals, who can be recognised by their orange helmets, will check that everyone has left their area. Do not go back into the building until a marshal tells you it is safe.',
        },
        {
          text: 'Hot drinks and food may only be consumed in the staff canteen on the mezzanine level, although water bottles with sealed lids are permitted on the warehouse floor. A list of the site’s first aiders is displayed on the noticeboard beside the canteen entrance.',
        },
      ],
    },
    {
      kind: 'Staff handbook',
      title: 'Reporting accidents, near misses and hazards',
      paragraphs: [
        {
          text: 'At Fenmoor, we record not only accidents in which someone is hurt but also “near misses” – incidents in which nobody was injured but someone could have been. Last year, near-miss reports led to more changes in the way we work than accident reports did, so please never assume that an incident is too minor to mention.',
        },
        {
          text: 'If you are injured, however slightly, go to a first aider straight away, and make sure that the injury is entered in the accident book before the end of your shift. Your team leader must also be informed, but this can wait until you have been treated. If an injury keeps a worker away from work for more than seven days, the company is legally required to report it to the national safety regulator; your line manager will deal with this, and you do not need to contact the regulator yourself.',
        },
        {
          text: 'Near misses and hazards, such as a damaged rack or a spillage, can be reported on the paper forms kept at every workstation or through the safety app on the shared tablets. You may report anonymously if you prefer, although giving your name allows the safety team to contact you if they need more details. A spillage should always be made safe by placing a warning cone beside it before you report it.',
        },
        {
          text: 'Every report is reviewed by the safety team within two working days, and the outcome is posted on the canteen noticeboard. A summary of all reports is then discussed at the monthly safety committee, at which each shift is represented by an elected volunteer. New staff are welcome to stand for election once they have completed their probationary period.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'note',
      instructions:
        'Read the text “Health and safety induction for new staff”. Complete the notes below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.',
      wordLimit: { words: 2, number: true },
      title: 'Induction notes',
      body: [
        { kind: 'heading', text: 'Before starting' },
        {
          kind: 'bullets',
          items: ['sign the induction form – otherwise no [[1]] will be given'],
        },
        { kind: 'heading', text: 'PPE' },
        {
          kind: 'bullets',
          items: [
            '[[2]] and a high-visibility vest: required everywhere in operational areas',
            'ear defenders: required in the [[3]], because it is the noisiest part of the site',
          ],
        },
        { kind: 'heading', text: 'Vehicles and phones' },
        {
          kind: 'bullets',
          items: ['phone calls: only in the [[4]] (marked in yellow)'],
        },
        { kind: 'heading', text: 'Lifting' },
        {
          kind: 'bullets',
          items: [
            'loads over [[5]]: two people or mechanical help',
            'forklift drivers: must pass a [[6]] course run by the company, whatever their previous experience',
          ],
        },
        { kind: 'heading', text: 'Fire' },
        {
          kind: 'bullets',
          items: ['fire marshals can be identified by their [[7]]'],
        },
      ],
      questions: [
        {
          n: 1,
          answers: ['access pass'],
          location: {
            ref: 't0p0',
            quote: 'you will not be issued with an access pass until you have done so',
          },
          explanation:
            'New staff only receive an access pass once they have signed the form. “Will be given” paraphrases “issued with”.',
        },
        {
          n: 2,
          answers: ['safety boots'],
          location: {
            ref: 't0p1',
            quote:
              'Safety boots and a high-visibility vest must be worn at all times in operational areas',
          },
          explanation:
            'The vest is already in the notes; the other item required “at all times in operational areas” is safety boots. Gloves are only needed for certain tasks.',
          distractors: ['gloves'],
        },
        {
          n: 3,
          answers: ['baling area'],
          location: {
            ref: 't0p1',
            quote: 'ear defenders must be worn in the baling area, where noise levels are highest',
          },
          explanation:
            '“The noisiest part of the site” paraphrases “where noise levels are highest”. Write “baling area” (two words); “the baling area” would break the limit, and “the” is already in the notes.',
        },
        {
          n: 4,
          answers: ['refuge areas', 'refuge area'],
          location: {
            ref: 't0p2',
            quote: 'step into one of the refuge areas, which are marked with yellow lines',
          },
          explanation:
            'Calls may only be made in the refuge areas, which are marked with yellow lines. Do not write “walkways”: those are marked in green and are for walking.',
          distractors: ['walkways', 'crossing points'],
        },
        {
          n: 5,
          answers: ['20 kilograms', '20 kg', '20kg', '20'],
          location: {
            ref: 't0p3',
            quote:
              'Any item heavier than 20 kilograms must be lifted by two people or with mechanical help',
          },
          explanation:
            '“Loads over” paraphrases “any item heavier than”. The number 20 with or without the unit is correct.',
        },
        {
          n: 6,
          answers: ['three-day', '3-day', 'three-day training', '3-day training'],
          location: {
            ref: 't0p3',
            quote: 'they have passed the company’s own three-day training course',
          },
          explanation:
            'The notes need the type of course: “three-day” (a hyphenated word counts as one word). “Whatever their previous experience” paraphrases “even if they already hold a licence from a previous employer”.',
        },
        {
          n: 7,
          answers: ['orange helmets', 'helmets'],
          location: {
            ref: 't0p4',
            quote: 'Fire marshals, who can be recognised by their orange helmets',
          },
          explanation:
            '“Can be identified by” paraphrases “can be recognised by”. The answer is “orange helmets”.',
        },
      ],
    },
    {
      type: 'mcq',
      instructions:
        'Read the text “Reporting accidents, near misses and hazards”. Choose the correct letter, A, B, C or D.',
      questions: [
        {
          n: 8,
          prompt: 'Why does the text encourage staff to report near misses?',
          options: [
            { key: 'A', text: 'They happen more often than accidents.' },
            { key: 'B', text: 'The law requires every near miss to be reported.' },
            {
              key: 'C',
              text: 'Such reports have brought about more improvements than accident reports.',
            },
            { key: 'D', text: 'Minor incidents usually lead to serious accidents later.' },
          ],
          answer: 'C',
          location: {
            ref: 't1p0',
            quote:
              'near-miss reports led to more changes in the way we work than accident reports did',
          },
          explanation:
            'The reason given (“so please never assume…”) is that near-miss reports led to more changes in working practices than accident reports. “Improvements” paraphrases “changes in the way we work”.',
          traps: {
            A: 'The text compares the effect of the two kinds of report, not how often near misses and accidents happen.',
            B: 'A legal requirement is mentioned only in the next paragraph, and only for injuries that keep someone off work for more than seven days.',
            D: 'The text never says that minor incidents lead to serious ones; this is a common idea, but it is not stated.',
          },
        },
        {
          n: 9,
          prompt: 'A worker who suffers a small injury should first',
          options: [
            { key: 'A', text: 'inform their team leader.' },
            { key: 'B', text: 'write the details in the accident book.' },
            { key: 'C', text: 'see a first aider.' },
            { key: 'D', text: 'contact their line manager.' },
          ],
          answer: 'C',
          location: { ref: 't1p1', quote: 'go to a first aider straight away' },
          explanation:
            '“However slightly” covers small injuries, and the first step is to go to a first aider “straight away”. The accident book can be completed before the end of the shift, and the team leader can be told after treatment.',
          traps: {
            A: 'The team leader must be told, but “this can wait until you have been treated”, so it is not the first step.',
            B: 'The accident book entry must be made “before the end of your shift”, not immediately.',
            D: 'The line manager is mentioned only for injuries that keep someone off work for more than seven days.',
          },
        },
        {
          n: 10,
          prompt:
            'If an injury keeps a worker off work for more than a week, who reports it to the regulator?',
          options: [
            { key: 'A', text: 'the injured worker' },
            { key: 'B', text: 'the first aider who gave treatment' },
            { key: 'C', text: 'the injured worker’s line manager' },
            { key: 'D', text: 'a member of the safety team' },
          ],
          answer: 'C',
          location: {
            ref: 't1p1',
            quote:
              'your line manager will deal with this, and you do not need to contact the regulator yourself',
          },
          explanation:
            'The company must report such injuries, and the text says “your line manager will deal with this”. “More than a week” paraphrases “more than seven days”.',
          traps: {
            A: 'The text says the opposite: “you do not need to contact the regulator yourself”.',
            D: 'The safety team reviews near-miss and hazard reports, but it is not given this job.',
          },
        },
        {
          n: 11,
          prompt: 'What does the text say about reporting a hazard?',
          options: [
            { key: 'A', text: 'It must be done on a paper form.' },
            { key: 'B', text: 'The person reporting it does not have to give their name.' },
            { key: 'C', text: 'The safety team will always contact the person who reported it.' },
            { key: 'D', text: 'It should be reported to a team leader in person.' },
          ],
          answer: 'B',
          location: { ref: 't1p2', quote: 'You may report anonymously if you prefer' },
          explanation:
            '“Anonymously” means without giving your name, and staff may do this “if you prefer”.',
          traps: {
            A: 'Paper forms are one option; the safety app on the tablets is another, so it is not a requirement.',
            C: 'The team may contact you “if they need more details”, and only if you give your name, so not always.',
            D: 'Reporting in person to a team leader is not mentioned for hazards.',
          },
        },
        {
          n: 12,
          prompt: 'What should a worker do first on finding a spillage?',
          options: [
            { key: 'A', text: 'clean it up' },
            { key: 'B', text: 'report it on a tablet' },
            { key: 'C', text: 'place something beside it to warn other people' },
            { key: 'D', text: 'fill in a form at the nearest workstation' },
          ],
          answer: 'C',
          location: {
            ref: 't1p2',
            quote:
              'A spillage should always be made safe by placing a warning cone beside it before you report it',
          },
          explanation:
            'The cone is placed “before you report it”, so making the spillage safe with a cone comes first. A cone placed beside the spillage warns other people.',
          traps: {
            A: 'The text says the spillage should be “made safe”, which it explains as placing a cone beside it, not cleaning it.',
            B: 'Reporting comes after the cone has been placed.',
            D: 'Paper forms are a way of reporting, which comes second.',
          },
        },
        {
          n: 13,
          prompt: 'What do we learn about the monthly safety committee?',
          options: [
            { key: 'A', text: 'It reviews each report within two working days.' },
            { key: 'B', text: 'It includes a representative from every shift.' },
            { key: 'C', text: 'Its decisions are posted on the canteen noticeboard.' },
            { key: 'D', text: 'New employees can join it from their first week.' },
          ],
          answer: 'B',
          location: {
            ref: 't1p3',
            quote: 'each shift is represented by an elected volunteer',
          },
          explanation:
            'At the committee “each shift is represented by an elected volunteer”, so every shift has a representative.',
          traps: {
            A: 'The two-day review is carried out by the safety team, not the committee, which meets monthly.',
            C: 'It is the outcome of each report that is posted on the noticeboard; nothing is said about the committee’s decisions.',
            D: 'New staff can stand for election only “once they have completed their probationary period”.',
          },
        },
      ],
    },
  ],
})
