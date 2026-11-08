import { defineVocabDeck } from '../define'

export default defineVocabDeck({
  id: 'vb-health',
  kind: 'topic',
  title: 'Health',
  topic: 'Health',
  description:
    'Precise words and collocations for Task 2 essays and Part 3 answers on lifestyle, diet and healthcare systems.',
  skills: ['writing', 'speaking', 'reading'],
  cards: [
    {
      id: 'sedentary-lifestyle',
      term: 'a sedentary lifestyle',
      meaning: 'a way of life that involves a lot of sitting and very little physical activity',
      example: 'Office work and long commutes have pushed many adults into a sedentary lifestyle.',
      pos: 'adjective + noun',
      note: 'Also “sedentary jobs / behaviour”.',
    },
    {
      id: 'obesity',
      term: 'obesity',
      meaning: 'the condition of being very overweight in a way that harms health',
      example:
        'Childhood obesity rates have more than doubled in some countries over the past thirty years.',
      pos: 'noun',
      note: 'Adjective: obese. Common pattern: “obesity rates”, “tackle obesity”.',
    },
    {
      id: 'preventive-medicine',
      term: 'preventive medicine',
      meaning: 'healthcare that aims to stop illness before it starts',
      example:
        'Spending more on preventive medicine could save health services money in the long run.',
      pos: 'adjective + noun',
      note: '“Preventative” is also correct and common in British English.',
    },
    {
      id: 'life-expectancy',
      term: 'life expectancy',
      meaning: 'the average number of years a person can expect to live',
      example:
        'Life expectancy has risen steadily thanks to cleaner water and better medical care.',
      pos: 'noun + noun',
      note: 'Life expectancy “rises / falls”, it does not “grow longer”.',
    },
    {
      id: 'chronic-illness',
      term: 'chronic illness',
      meaning: 'an illness that lasts a long time or keeps coming back',
      example:
        'Managing chronic illness such as diabetes accounts for a large share of healthcare spending.',
      pos: 'adjective + noun',
      note: 'Chronic = long-lasting; acute = sudden and severe. “Chronic” does not mean “very bad”.',
    },
    {
      id: 'mental-well-being',
      term: 'mental well-being',
      meaning: 'a person’s psychological and emotional health',
      example: 'Regular time outdoors appears to have a positive effect on mental well-being.',
      pos: 'adjective + noun',
      note: 'Also spelled “wellbeing”. Uncountable.',
    },
    {
      id: 'healthcare-provision',
      term: 'healthcare provision',
      meaning: 'the supply of medical services to a population',
      example:
        'Healthcare provision in remote areas often depends on a handful of overworked doctors.',
      pos: 'noun + noun',
      note: 'Formal. Verb: provide; “state provision”, “private provision”.',
    },
    {
      id: 'balanced-diet',
      term: 'a balanced diet',
      meaning: 'a diet containing the right amounts of different kinds of food',
      example:
        'Schools can promote a balanced diet by replacing vending machines with fresh fruit.',
      pos: 'adjective + noun',
    },
    {
      id: 'processed-food',
      term: 'processed food',
      meaning: 'food that has been changed industrially, often with added salt, sugar or fat',
      example: 'Heavily processed food tends to be cheap, convenient and low in nutrients.',
      pos: 'adjective + noun',
      note: 'Also “ultra-processed food” for the most heavily changed products.',
    },
    {
      id: 'nutritious',
      term: 'nutritious',
      meaning: 'containing the substances the body needs to stay healthy',
      example:
        'Free school lunches guarantee that every child receives at least one nutritious meal a day.',
      pos: 'adjective',
      note: 'Noun: nutrition; “nutritional value”.',
    },
    {
      id: 'prone-to',
      term: 'prone to',
      meaning: 'likely to suffer from something, usually something bad',
      example: 'People who sleep fewer than six hours a night are more prone to illness.',
      pos: 'adjective + preposition',
      note: 'Followed by a noun or “-ing”. Also compounds: injury-prone.',
    },
    {
      id: 'outbreak',
      term: 'an outbreak (of)',
      meaning: 'the sudden start of a disease spreading among people',
      example: 'Poor sanitation in crowded camps can quickly lead to an outbreak of cholera.',
      pos: 'noun',
      note: 'Phrasal verb: a disease “breaks out”.',
    },
    {
      id: 'contagious',
      term: 'contagious',
      meaning: 'spread from one person to another by direct contact',
      example:
        'Children with contagious illnesses should stay at home to avoid infecting their classmates.',
      pos: 'adjective',
      note: 'Close to “infectious”. Also used figuratively: contagious laughter.',
    },
    {
      id: 'ageing-population',
      term: 'an ageing population',
      meaning: 'a population in which the proportion of older people is increasing',
      example: 'An ageing population will place growing demands on hospitals and care homes.',
      pos: 'adjective + noun',
      note: 'British spelling: ageing (American: aging).',
    },
    {
      id: 'strain-on',
      term: 'strain on (resources)',
      meaning: 'pressure that makes a system struggle to cope',
      example: 'Winter flu puts enormous strain on emergency departments.',
      pos: 'noun + preposition',
      note: '“Put / place a strain on”, “under strain”. Preposition: on.',
    },
    {
      id: 'waiting-lists',
      term: 'waiting lists',
      meaning: 'lists of patients waiting for treatment',
      example:
        'Long waiting lists for routine operations push some patients towards private hospitals.',
      pos: 'noun + noun',
      note: 'British. You are “on” a waiting list.',
    },
    {
      id: 'sugary-drinks',
      term: 'sugary drinks',
      meaning: 'drinks containing a lot of added sugar',
      example:
        'A tax on sugary drinks has encouraged manufacturers to reduce the sugar in their products.',
      pos: 'adjective + noun',
    },
    {
      id: 'public-health-campaign',
      term: 'a public health campaign',
      meaning:
        'an organised effort by authorities to improve people’s health, for example through advertising',
      example:
        'A public health campaign on the dangers of smoking helped to halve the number of young smokers.',
      pos: 'noun phrase',
      note: '“Public health” = the health of the population as a whole.',
    },
    {
      id: 'contribute-to',
      term: 'contribute to',
      meaning: 'to be one of the causes of something',
      example: 'Air pollution is thought to contribute to asthma and heart disease.',
      pos: 'verb + preposition',
      note: 'More cautious than “cause”: useful for academic hedging. Followed by a noun or “-ing”.',
    },
    {
      id: 'take-regular-exercise',
      term: 'take regular exercise',
      meaning: 'to do physical activity often',
      example:
        'Doctors advise older adults to take regular exercise to protect their joints and memory.',
      pos: 'verb + noun',
      note: 'British “take exercise”; “do exercise” is also common. Not “make exercise”.',
    },
    {
      id: 'underlying-condition',
      term: 'an underlying condition',
      meaning: 'an existing health problem that makes other illnesses more dangerous',
      example:
        'Patients with an underlying condition such as asthma were advised to get vaccinated first.',
      pos: 'adjective + noun',
      note: 'Also “underlying cause” (the real cause behind a problem).',
    },
    {
      id: 'vaccination-programme',
      term: 'vaccination programme',
      meaning: 'an organised plan to vaccinate a population against a disease',
      example:
        'A national vaccination programme eliminated measles from the country for over a decade.',
      pos: 'noun + noun',
      note: 'British spelling: programme (but a computer program).',
    },
    {
      id: 'alleviate-symptoms',
      term: 'alleviate symptoms',
      meaning: 'to make the signs of an illness less severe',
      example: 'Gentle stretching can alleviate symptoms of back pain for many office workers.',
      pos: 'verb + noun',
      note: 'Formal. Also: alleviate poverty, alleviate congestion.',
    },
    {
      id: 'stress-related',
      term: 'stress-related (illness)',
      meaning: 'caused or made worse by stress',
      example: 'Stress-related absences now cost employers more than physical injuries do.',
      pos: 'compound adjective',
    },
    {
      id: 'sleep-deprivation',
      term: 'sleep deprivation',
      meaning: 'not getting enough sleep over a period of time',
      example: 'Chronic sleep deprivation affects concentration as much as drinking alcohol does.',
      pos: 'noun + noun',
      note: 'Adjective: sleep-deprived.',
    },
    {
      id: 'detrimental-to',
      term: 'detrimental (to)',
      meaning: 'causing harm or damage',
      example: 'Excessive screen use late at night may be detrimental to teenagers’ health.',
      pos: 'adjective',
      note: 'Formal. Preposition: to. Similar: harmful to, damaging to.',
    },
    {
      id: 'eradicate',
      term: 'eradicate (a disease)',
      meaning: 'to get rid of something completely',
      example: 'Smallpox is the only human disease that has been completely eradicated.',
      pos: 'verb',
      note: 'Noun: eradication. Stronger than “reduce” or “control”.',
    },
    {
      id: 'free-at-the-point-of-use',
      term: 'free at the point of use',
      meaning: 'paid for through taxes, so patients pay nothing when they receive treatment',
      example:
        'Supporters of a national health service insist that care should remain free at the point of use.',
      pos: 'phrase',
      note: 'Precise way to describe tax-funded healthcare; better than “free healthcare”.',
    },
    {
      id: 'malnutrition',
      term: 'malnutrition',
      meaning: 'poor health caused by not eating enough or not eating the right food',
      example:
        'Malnutrition can occur in wealthy countries too, among people living on cheap, unhealthy food.',
      pos: 'noun',
      note: 'Covers undernourishment and unhealthy diets. Adjective: malnourished.',
    },
    {
      id: 'cut-down-on',
      term: 'cut down on',
      meaning: 'to reduce the amount of something you eat, drink or do',
      example:
        'Most people know they should cut down on salt but find it hard to change their habits.',
      pos: 'phrasal verb',
      note: 'Neutral to informal. Formal equivalent: reduce one’s intake of.',
    },
    {
      id: 'holistic-approach',
      term: 'a holistic approach',
      meaning: 'treating the whole person, including mind and lifestyle, not just the symptoms',
      example:
        'A holistic approach to mental health combines therapy, exercise and social support.',
      pos: 'adjective + noun',
    },
    {
      id: 'substance-abuse',
      term: 'substance abuse',
      meaning: 'the harmful use of drugs or alcohol',
      example:
        'Early education about substance abuse is more effective than punishing young users.',
      pos: 'noun + noun',
      note: 'Formal. Also “drug misuse”.',
    },
  ],
})
