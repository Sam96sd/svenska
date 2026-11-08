import { definePassage } from '../../define'

/** Original texts. General Training mock test 1, Section 2: two workplace texts from a café chain. */
export default definePassage({
  id: 'm-gt1-s2',
  skill: 'reading',
  module: 'general',
  section: 'gt2',
  use: 'mock',
  title: 'Copperleaf Cafés: information for new team members',
  topic: 'Work and food',
  intro: 'Original practice texts: the company described is fictional.',
  minutes: 20,
  level: 2,
  texts: [
    {
      kind: 'Staff handbook',
      title: 'Rotas, shift swaps and breaks',
      paragraphs: [
        {
          text: 'Rotas for every Copperleaf branch are published on the staff app each Thursday and cover the week beginning on the Monday after next. Branch managers aim to give everyone at least ten days’ notice of their shifts, although this is not always possible. Once a rota has been published, your shifts will not be changed without your agreement.',
        },
        {
          text: 'If there are days or times when you are regularly unable to work – because of study or childcare, for example – record them in the “My availability” section of the app. Any change to your availability must be submitted at least three weeks before it is due to take effect. Requests for annual leave should also be made through the app. No more than two people from the same branch may be on leave in any one week.',
        },
        {
          text: 'You may swap a shift with a colleague, provided that they have been trained for the same role as you. Both of you must confirm the swap in the app, after which it must be approved by the duty manager. Swaps arranged only in conversation will not be recognised: if the shift is then not covered, the person originally on the rota will be recorded as absent.',
        },
        {
          text: 'Anyone working more than six hours is entitled to an unpaid break of 30 minutes, which must be taken away from the counter. Staff working more than eight hours receive an additional paid break of 15 minutes. Team members under 18 must take a 30-minute break if their shift is longer than four and a half hours. Breaks are planned by the shift leader at the start of each shift and may not be taken in the first or last hour of a shift.',
        },
        {
          text: 'Please arrive early enough to be in uniform and ready to work at the time your shift begins. Clock in on the tablet beside the staff-room door; clocking in on a personal phone is not allowed. If you are going to be late or cannot work, phone the branch at least two hours before your shift is due to start. Text messages and messages sent through the app are not accepted, as they may not be seen in time.',
        },
        {
          text: 'Closing shifts end 30 minutes after the café closes, to allow time for cleaning. If your shift finishes after 10 pm, you can claim back the cost of a taxi home, up to £15, by giving the receipt to your branch manager.',
        },
      ],
    },
    {
      kind: 'Training notes',
      title: 'Food safety: what every new team member needs to know',
      paragraphs: [
        {
          text: 'Good hand hygiene is the most effective way to prevent food poisoning. Wash your hands with soap and warm water for at least 20 seconds at the start of every shift, after a break, and after handling raw eggs, rubbish or cleaning chemicals. Always use the small basin marked “Hands only”: the large sink is for washing equipment, and using it for your hands could contaminate items that have already been cleaned. Hand gel is useful between tasks, but it is not a substitute for washing.',
        },
        {
          text: 'Our menu includes dishes containing all fourteen of the major allergens. Every branch keeps an allergen folder listing the ingredients of each item we sell. If a customer asks whether something is safe for them, never rely on your memory or guess from the name of the dish: go through the folder together with the customer, and if you are still unsure, ask the shift leader. Customers with a severe nut allergy should be told that we cannot guarantee any item to be completely free from nuts, because our bakery supplier also uses them.',
        },
        {
          text: 'Fridge and display-counter temperatures are checked when the café opens and again at 2 pm, and the readings are written on the chart inside the kitchen door. Chilled food must be kept at 5°C or below. If a reading is above 8°C, tell the shift leader immediately; any food that has been above this temperature for more than four hours will have to be thrown away. Hot food such as soup must be kept above 63°C and must never be reheated a second time.',
        },
        {
          text: 'When a delivery arrives, put the new stock behind older stock of the same product, so that the older items are used first. Sandwiches made on the premises may only be sold on the day they are made. At closing time, any that remain, along with unsold cakes that are still within date, are collected by FairPlate, a local charity that passes surplus food on to people in need. Staff may not take unsold food home, and anything past its date must go in the food-waste caddy.',
        },
        {
          text: 'If you have had vomiting or diarrhoea, you must not come to work until 48 hours after your symptoms have stopped, even if you feel well. Phone your manager to explain the reason; absences of this kind are not counted against your attendance record. Cuts on your hands must be covered with one of the blue waterproof plasters kept in the first-aid box. These are used because their colour makes them easy to spot if one comes off and falls into food.',
        },
        {
          text: 'Clean as you go: wipe surfaces as soon as you have finished each task. Cloths are colour-coded – green for food preparation areas, blue for the customer seating area and red for the toilets – so that germs are not carried from one area to another. All new team members must complete an online food hygiene course within their first four weeks. The company pays for the course, and you will be paid for the time it takes.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'completion',
      format: 'note',
      instructions:
        'Read the text “Rotas, shift swaps and breaks”. Complete the notes below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.',
      wordLimit: { words: 2, number: true },
      title: 'Rota rules: key points',
      body: [
        { kind: 'heading', text: 'Rotas and availability' },
        {
          kind: 'bullets',
          items: [
            'rotas appear on the staff app every [[1]]',
            'changes to availability: must be submitted at least [[2]] in advance',
          ],
        },
        { kind: 'heading', text: 'Shift swaps' },
        {
          kind: 'bullets',
          items: [
            'the colleague must be trained for the same [[3]]',
            'each swap must be approved by the [[4]]',
          ],
        },
        { kind: 'heading', text: 'Breaks' },
        { kind: 'bullets', items: ['breaks are not allowed in the first or [[5]] of a shift'] },
        { kind: 'heading', text: 'Lateness and absence' },
        {
          kind: 'bullets',
          items: ['contact the branch by [[6]] (texts and app messages are not accepted)'],
        },
        { kind: 'heading', text: 'Late finishes' },
        { kind: 'bullets', items: ['to claim taxi costs (up to £15), hand in the [[7]]'] },
      ],
      questions: [
        {
          n: 1,
          answers: ['Thursday', 'Thursdays'],
          location: { ref: 't0p0', quote: 'published on the staff app each Thursday' },
          explanation:
            '“Appear” paraphrases “are published”. Rotas are published every Thursday; Monday is the day the rota week begins, not the day it is published.',
          distractors: ['Monday'],
        },
        {
          n: 2,
          answers: ['three weeks'],
          location: {
            ref: 't0p1',
            quote:
              'Any change to your availability must be submitted at least three weeks before it is due to take effect',
          },
          explanation:
            '“In advance” paraphrases “before it is due to take effect”. Do not write “ten days”: that is the notice managers aim to give staff about their shifts.',
          distractors: ['ten days'],
        },
        {
          n: 3,
          answers: ['role'],
          location: {
            ref: 't0p2',
            quote: 'provided that they have been trained for the same role as you',
          },
          explanation:
            'A swap is only possible if the colleague “has been trained for the same role”. The answer is the single word “role”.',
        },
        {
          n: 4,
          answers: ['duty manager'],
          location: { ref: 't0p2', quote: 'it must be approved by the duty manager' },
          explanation:
            'After both staff confirm the swap in the app, it “must be approved by the duty manager”. The shift leader plans breaks, not swaps.',
          distractors: ['shift leader', 'branch manager'],
        },
        {
          n: 5,
          answers: ['last hour'],
          location: { ref: 't0p3', quote: 'may not be taken in the first or last hour of a shift' },
          explanation:
            '“Are not allowed” paraphrases “may not be taken”. The words “first or” are already in the notes, so the answer is “last hour”.',
        },
        {
          n: 6,
          answers: ['phone'],
          location: {
            ref: 't0p4',
            quote: 'phone the branch at least two hours before your shift is due to start',
          },
          explanation:
            'Staff must “phone the branch”, so the method of contact is “phone”. Texts and app messages are not accepted because they may not be seen in time.',
          distractors: ['text', 'app'],
        },
        {
          n: 7,
          answers: ['receipt'],
          location: { ref: 't0p5', quote: 'by giving the receipt to your branch manager' },
          explanation:
            '“Hand in” paraphrases “giving … to your branch manager”. What must be handed in is the receipt.',
        },
      ],
    },
    {
      type: 'mcq',
      instructions:
        'Read the text “Food safety: what every new team member needs to know”. Choose the correct letter, A, B, C or D.',
      questions: [
        {
          n: 8,
          prompt: 'Staff should not wash their hands in the large sink because',
          options: [
            { key: 'A', text: 'it does not have warm water.' },
            { key: 'B', text: 'it is used for preparing food.' },
            { key: 'C', text: 'this could make clean equipment dirty again.' },
            { key: 'D', text: 'it is reserved for staff handling chemicals.' },
          ],
          answer: 'C',
          location: {
            ref: 't1p0',
            quote: 'using it for your hands could contaminate items that have already been cleaned',
          },
          explanation:
            'The large sink is for washing equipment, and washing hands there “could contaminate items that have already been cleaned”, i.e. make clean equipment dirty again.',
          traps: {
            A: 'Warm water is mentioned for handwashing in general; nothing suggests the large sink lacks it.',
            B: 'The large sink is “for washing equipment”, not for preparing food.',
            D: 'Handling chemicals is one of the times when staff must wash their hands, not a use of the large sink.',
          },
        },
        {
          n: 9,
          prompt:
            'If a customer asks whether a dish is safe for them to eat, a team member should first',
          options: [
            { key: 'A', text: 'look at the ingredients information with the customer.' },
            { key: 'B', text: 'ask the shift leader for advice.' },
            { key: 'C', text: 'check the name of the dish on the menu.' },
            { key: 'D', text: 'explain that no item can be guaranteed to be safe.' },
          ],
          answer: 'A',
          location: { ref: 't1p1', quote: 'go through the folder together with the customer' },
          explanation:
            'The first step is to go through the allergen folder, which lists the ingredients of every item, “together with the customer”. Only if the team member is still unsure should they ask the shift leader.',
          traps: {
            B: 'The shift leader is asked only “if you are still unsure” after checking the folder, so this is a second step.',
            C: 'The notes say never to “guess from the name of the dish”.',
            D: 'The warning about traces of nuts is for customers with a severe nut allergy, and it concerns nuts only, not all items or allergens.',
          },
        },
        {
          n: 10,
          prompt: 'What must happen if a fridge reading is higher than 8°C?',
          options: [
            { key: 'A', text: 'All the food in the fridge must be thrown away.' },
            { key: 'B', text: 'The temperature must be checked again at 2 pm.' },
            { key: 'C', text: 'The food must be moved to the display counter.' },
            { key: 'D', text: 'A more senior colleague must be told at once.' },
          ],
          answer: 'D',
          location: {
            ref: 't1p2',
            quote: 'If a reading is above 8°C, tell the shift leader immediately',
          },
          explanation:
            'The shift leader is senior to a team member, and “at once” paraphrases “immediately”.',
          traps: {
            A: 'Food is thrown away only if it has been above 8°C “for more than four hours”, not automatically.',
            B: 'The 2 pm check is the normal routine, not the action to take after a high reading.',
            C: 'The display counter is also checked for temperature; moving food there is never suggested.',
          },
        },
        {
          n: 11,
          prompt: 'What happens to sandwiches that have not been sold by closing time?',
          options: [
            { key: 'A', text: 'They are put in the food-waste caddy.' },
            { key: 'B', text: 'They are given to an organisation that helps people.' },
            { key: 'C', text: 'Staff are allowed to take them home.' },
            { key: 'D', text: 'They are sold the following morning.' },
          ],
          answer: 'B',
          location: {
            ref: 't1p3',
            quote:
              'are collected by FairPlate, a local charity that passes surplus food on to people in need',
          },
          explanation:
            'Sandwiches left at closing time are collected by FairPlate, a charity that passes surplus food on to people in need.',
          traps: {
            A: 'Only food that is “past its date” goes in the food-waste caddy; sandwiches are always within date on the day they are made.',
            C: 'The text says the opposite: “Staff may not take unsold food home.”',
            D: 'Sandwiches “may only be sold on the day they are made”.',
          },
        },
        {
          n: 12,
          prompt: 'Why do staff use blue plasters?',
          options: [
            { key: 'A', text: 'They stay on when they get wet.' },
            { key: 'B', text: 'They are the only plasters in the first-aid box.' },
            { key: 'C', text: 'They protect cuts from infection better than others.' },
            { key: 'D', text: 'They can be seen easily if they drop into food.' },
          ],
          answer: 'D',
          location: {
            ref: 't1p4',
            quote: 'their colour makes them easy to spot if one comes off and falls into food',
          },
          explanation:
            'The reason for the colour is stated directly: it makes the plasters “easy to spot” if one falls into food.',
          traps: {
            A: 'The plasters are waterproof, but the text gives their colour, not their waterproofing, as the reason they are used.',
            B: 'The plasters are kept in the first-aid box, but the text does not say they are the only ones there, and this is not given as the reason.',
            C: 'Infection is not mentioned.',
          },
        },
        {
          n: 13,
          prompt: 'What is said about the food hygiene course?',
          options: [
            { key: 'A', text: 'It must be finished within a set period after starting work.' },
            { key: 'B', text: 'Staff pay for it and then claim the money back.' },
            { key: 'C', text: 'It has to be done outside working hours.' },
            { key: 'D', text: 'It is only for staff who prepare food.' },
          ],
          answer: 'A',
          location: {
            ref: 't1p5',
            quote: 'must complete an online food hygiene course within their first four weeks',
          },
          explanation:
            'The course must be completed “within their first four weeks”, which is a set period after starting the job.',
          traps: {
            B: '“The company pays for the course”; nothing is said about staff paying first and claiming it back.',
            C: 'Staff “will be paid for the time it takes”, so it is treated as working time.',
            D: '“All new team members” must take it, not only those who prepare food.',
          },
        },
      ],
    },
  ],
})
