import { definePassage } from '../../define'

/** Original text. Drill for lesson r-match-features. */
export default definePassage({
  id: 'drill-match-features',
  skill: 'reading',
  module: 'both',
  section: 'drill',
  use: 'drill',
  title: 'What makes people walk?',
  topic: 'Cities and transport',
  minutes: 8,
  level: 2,
  texts: [
    {
      title: 'What makes people walk?',
      paragraphs: [
        {
          text: 'For decades, planners measured how “walkable” a neighbourhood was by counting things: pavements, pedestrian crossings and shops within ten minutes of home. As the planning consultant Ruth Abiodun puts it, “a map can show you a pavement, but not whether anyone wants to use it.” Researchers are now trying to discover what actually makes people choose to walk.',
        },
        {
          text: 'Dr Hana Okafor, an urban geographer, spent two years following residents of three districts that had almost identical numbers of shops and crossings. Walking rates differed by nearly half. The key factor, she concluded, was not distance but interest: people walked further along streets where shop fronts changed every few metres than beside blank walls, even when the blank route was shorter.',
        },
        {
          text: 'Professor Luis Barreto accepts these findings but believes Okafor underestimates the role of fear. In his surveys, older residents and parents of young children rarely mentioned dull streets; their main worry was the speed of traffic. A street can be lively and still feel dangerous to cross, he points out, and reducing speed limits is the cheapest way to get more people walking.',
        },
        {
          text: 'Okafor herself has since found that trees matter more than she first assumed. In a follow-up study, streets with continuous shade in summer attracted noticeably more pedestrians than otherwise similar streets without it, a result she has called the most unexpected of her career.',
        },
        {
          text: 'The transport engineer Mirela Stan argues that walking is too often studied in isolation. Most walks, she notes, begin or end at a bus stop or a station, so a frequent bus service may do more for walking than any improvement to the street itself. She is also critical of studies that rely on what people say about their habits, preferring phone-location data, which shows where people really go.',
        },
        {
          text: 'Not every expert believes that design is the main issue. The economist Tomas Lindqvist has suggested that the price of parking explains most of the difference between cities: where parking is cheap and easy, even attractive streets stay empty. He admits, however, that his conclusions are based on only a handful of cities.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'match-features',
      instructions:
        'Look at the following statements and the list of people below. Match each statement with the correct person, A–E. You may use any letter more than once.',
      optionsTitle: 'List of people',
      options: [
        { key: 'A', text: 'Hana Okafor' },
        { key: 'B', text: 'Luis Barreto' },
        { key: 'C', text: 'Mirela Stan' },
        { key: 'D', text: 'Tomas Lindqvist' },
        { key: 'E', text: 'Ruth Abiodun' },
      ],
      reuse: true,
      questions: [
        {
          n: 1,
          prompt: 'Slowing down vehicles would be a low-cost way to increase walking.',
          answer: 'B',
          location: {
            ref: 't0p2',
            quote: 'reducing speed limits is the cheapest way to get more people walking',
          },
          explanation:
            '“Slowing down vehicles” = “reducing speed limits”; “low-cost” = “cheapest”. Lindqvist (D) also uses the word “cheap”, but about parking, not traffic speed.',
          traps: {
            D: 'Lindqvist says parking is “cheap”, but he is not proposing a low-cost way to increase walking.',
          },
        },
        {
          n: 2,
          prompt: 'Good public transport can encourage people to walk.',
          answer: 'C',
          location: {
            ref: 't0p4',
            quote:
              'a frequent bus service may do more for walking than any improvement to the street itself',
          },
          explanation:
            'Stan links walking to buses and stations: “a frequent bus service” = “good public transport”, and “may do more for walking” = “can encourage people to walk”.',
        },
        {
          n: 3,
          prompt: 'The results of one study came as a surprise.',
          answer: 'A',
          location: {
            ref: 't0p3',
            quote: 'a result she has called the most unexpected of her career',
          },
          explanation:
            'This is Okafor’s second mention, two paragraphs after her first. “Unexpected” = “came as a surprise”; the study is her follow-up on shade. If you read only around her first mention, you miss this answer.',
        },
        {
          n: 4,
          prompt: 'Asking people about their behaviour does not give accurate evidence.',
          answer: 'C',
          location: {
            ref: 't0p4',
            quote:
              'She is also critical of studies that rely on what people say about their habits',
          },
          explanation:
            '“What people say about their habits” = asking people about their behaviour. Stan prefers phone data “which shows where people really go”, implying that what people say is not accurate. Barreto uses surveys, but he never criticises them.',
          traps: {
            B: 'Barreto’s evidence comes from surveys, but he does not say they are unreliable — Stan does.',
          },
        },
        {
          n: 5,
          prompt: 'People will walk a longer distance if a street is visually interesting.',
          answer: 'A',
          location: {
            ref: 't0p1',
            quote: 'people walked further along streets where shop fronts changed every few metres',
          },
          explanation:
            '“Walk a longer distance” = “walked further”; “visually interesting” = shop fronts that change every few metres. Barreto “accepts these findings”, but accepting someone’s finding is not making it — the finding is Okafor’s.',
          traps: {
            B: 'Barreto “accepts these findings”: he is reporting Okafor’s result, not his own.',
          },
        },
        {
          n: 6,
          prompt: 'One expert admits that the evidence for their own claim is limited.',
          answer: 'D',
          location: { ref: 't0p5', quote: 'his conclusions are based on only a handful of cities' },
          explanation:
            'Lindqvist “admits” a weakness in his own claim about parking: “the evidence … is limited” = his conclusions are based on “only a handful of cities”. Okafor also studied a small number of districts (three), but neither she nor the writer describes her evidence as limited.',
          traps: {
            A: 'Okafor studied three districts, but nobody says her evidence is too limited — only Lindqvist admits this about his own work.',
          },
        },
        {
          n: 7,
          prompt: 'Certain groups worry more about safety than about how interesting a street is.',
          answer: 'B',
          location: {
            ref: 't0p2',
            quote:
              'older residents and parents of young children rarely mentioned dull streets; their main worry was the speed of traffic',
          },
          explanation:
            '“Certain groups” = older residents and parents of young children; “safety” = the speed of traffic and streets that “feel dangerous”. Abiodun (E) is never matched: her comment is about the limits of maps, not any of these statements.',
        },
      ],
    },
  ],
})
