import { defineVocabDeck } from '../define'

export default defineVocabDeck({
  id: 'vb-environment',
  kind: 'topic',
  title: 'Environment',
  topic: 'Environment',
  description:
    'Precise words and collocations for Task 2 essays and Part 3 answers on climate, pollution and conservation.',
  skills: ['writing', 'speaking', 'reading'],
  cards: [
    {
      id: 'mitigate',
      term: 'mitigate (the effects of)',
      meaning: 'to make something harmful less severe',
      example:
        'Building sea walls can mitigate the effects of flooding, but it does not tackle the cause.',
      pos: 'verb',
      note: 'More formal than “reduce”. Not “mitigate against”.',
    },
    {
      id: 'curb-emissions',
      term: 'curb emissions',
      meaning: 'to limit the amount of harmful gases released into the air',
      example:
        'Stricter fuel standards for vehicles are among the quickest ways to curb emissions in cities.',
      pos: 'verb + noun',
      note: '“Curb” = restrain or limit. Also: curb consumption, curb spending.',
    },
    {
      id: 'carbon-footprint',
      term: 'carbon footprint',
      meaning: 'the total amount of greenhouse gases produced by a person, product or activity',
      example:
        'Eating less meat is one of the simplest ways for individuals to reduce their carbon footprint.',
      pos: 'noun + noun',
    },
    {
      id: 'renewable-energy',
      term: 'renewable energy (sources)',
      meaning: 'energy from sources that are not used up, such as wind, solar and tidal power',
      example:
        'Investment in renewable energy has made solar power cheaper than coal in many regions.',
      pos: 'adjective + noun',
      note: 'Also “renewables” as a noun. Opposite: non-renewable.',
    },
    {
      id: 'fossil-fuels',
      term: 'fossil fuels',
      meaning: 'fuels such as coal, oil and gas formed from ancient plants and animals',
      example:
        'Countries that depend heavily on fossil fuels face difficult choices as global demand falls.',
      pos: 'noun + noun',
      note: 'Usually plural. “Phase out / wean off fossil fuels”.',
    },
    {
      id: 'deforestation',
      term: 'deforestation',
      meaning: 'the large-scale cutting down of forests',
      example: 'Deforestation for cattle farming has destroyed vast areas of tropical rainforest.',
      pos: 'noun',
      note: 'Opposite: reforestation / afforestation.',
    },
    {
      id: 'biodiversity',
      term: 'biodiversity',
      meaning: 'the variety of plant and animal life in a particular area',
      example:
        'Intensive farming has been linked to a sharp decline in biodiversity across Europe.',
      pos: 'noun',
      note: 'Uncountable. Collocates with “loss of”, “protect”, “rich”.',
    },
    {
      id: 'habitat-loss',
      term: 'habitat loss',
      meaning: 'the destruction of the natural places where animals and plants live',
      example: 'Habitat loss, rather than hunting, is now the main threat to most wild species.',
      pos: 'noun + noun',
    },
    {
      id: 'endangered-species',
      term: 'endangered species',
      meaning: 'types of animal or plant at serious risk of disappearing',
      example:
        'Zoos argue that breeding programmes help to protect endangered species from extinction.',
      pos: 'adjective + noun',
      note: '“Species” is the same in the singular and plural.',
    },
    {
      id: 'sustainable-development',
      term: 'sustainable development',
      meaning: 'economic growth that meets present needs without damaging resources for the future',
      example:
        'Sustainable development requires governments to weigh short-term profits against long-term costs.',
      pos: 'adjective + noun',
      note: 'Noun: sustainability. Avoid using “sustainable” loosely to mean “good”.',
    },
    {
      id: 'irreversible-damage',
      term: 'irreversible damage',
      meaning: 'harm that cannot be undone',
      example:
        'Scientists warn that further warming could cause irreversible damage to coral reefs.',
      pos: 'adjective + noun',
      note: '“Damage” is uncountable here: not “damages” (which means money paid in court).',
    },
    {
      id: 'single-use-plastics',
      term: 'single-use plastics',
      meaning: 'plastic items designed to be thrown away after one use',
      example: 'Several countries have banned single-use plastics such as straws and carrier bags.',
      pos: 'adjective + noun',
    },
    {
      id: 'landfill',
      term: 'landfill (site)',
      meaning: 'a place where rubbish is buried in the ground',
      example: 'Much of the clothing donated to charity still ends up in landfill.',
      pos: 'noun',
      note: '“End up in landfill” (no article) is the natural British phrase.',
    },
    {
      id: 'deplete',
      term: 'deplete (natural resources)',
      meaning: 'to reduce the amount of something until little is left',
      example: 'Overfishing has depleted fish stocks in many parts of the ocean.',
      pos: 'verb',
      note: 'Noun: depletion (“the depletion of groundwater”).',
    },
    {
      id: 'extreme-weather-events',
      term: 'extreme weather events',
      meaning: 'unusually severe weather such as floods, heatwaves and storms',
      example: 'Extreme weather events are becoming both more frequent and more costly.',
      pos: 'adjective + noun',
    },
    {
      id: 'rising-sea-levels',
      term: 'rising sea levels',
      meaning: 'the gradual increase in the height of the sea caused by global warming',
      example: 'Rising sea levels threaten low-lying coastal cities and island nations.',
      pos: 'noun phrase',
    },
    {
      id: 'levy',
      term: 'levy (a tax on)',
      meaning: 'to officially demand payment of a tax',
      example: 'Some cities levy a charge on drivers who enter the centre during peak hours.',
      pos: 'verb',
      note: 'Formal. Also a noun: “a levy on plastic bags”. British spelling: centre.',
    },
    {
      id: 'conservation-efforts',
      term: 'conservation efforts',
      meaning: 'organised work to protect animals, plants and natural areas',
      example: 'Conservation efforts have brought several whale populations back from the brink.',
      pos: 'noun + noun',
    },
    {
      id: 'environmental-degradation',
      term: 'environmental degradation',
      meaning: 'the gradual damage of the natural environment, for example soil, air or water',
      example:
        'Rapid industrialisation often comes at the price of severe environmental degradation.',
      pos: 'adjective + noun',
      note: 'Verb: degrade. More formal and precise than “damage to nature”.',
    },
    {
      id: 'pollutant',
      term: 'pollutant',
      meaning: 'a substance that makes air, water or soil dirty or harmful',
      example:
        'Diesel engines release pollutants that are particularly harmful to children’s lungs.',
      pos: 'noun',
      note: 'Countable (pollutants); “pollution” is uncountable.',
    },
    {
      id: 'phase-out',
      term: 'phase out',
      meaning: 'to stop using something gradually over a period of time',
      example: 'The government plans to phase out petrol cars by the end of the decade.',
      pos: 'phrasal verb',
      note: 'Noun: a phase-out. Opposite: phase in.',
    },
    {
      id: 'fragile-ecosystems',
      term: 'fragile ecosystems',
      meaning: 'natural communities of living things that are easily damaged',
      example:
        'Mass tourism can put fragile ecosystems such as wetlands and reefs under serious pressure.',
      pos: 'adjective + noun',
    },
    {
      id: 'drought',
      term: 'drought',
      meaning: 'a long period with little or no rain',
      example: 'Prolonged drought has forced farmers in the region to abandon their land.',
      pos: 'noun',
      note: 'Pronounced to rhyme with “out”. Collocates with “severe”, “prolonged”.',
    },
    {
      id: 'offset',
      term: 'offset (emissions)',
      meaning:
        'to balance the harmful effect of something with an action that has the opposite effect',
      example:
        'Airlines invite passengers to offset the emissions from their flights by funding tree planting.',
      pos: 'verb',
      note: 'Noun: carbon offsetting. Often criticised as a way to avoid real cuts.',
    },
    {
      id: 'urban-sprawl',
      term: 'urban sprawl',
      meaning: 'the uncontrolled spread of a city into the surrounding countryside',
      example:
        'Urban sprawl increases car dependency because homes are built far from shops and workplaces.',
      pos: 'adjective + noun',
    },
    {
      id: 'the-onus-is-on',
      term: 'the onus is on (someone to do something)',
      meaning: 'it is the responsibility of a particular person or group',
      example:
        'The onus is on manufacturers, not consumers, to design products that can be recycled.',
      pos: 'phrase',
      note: 'Formal and useful for opinion essays. Also “place the onus on”.',
    },
    {
      id: 'eco-friendly',
      term: 'eco-friendly',
      meaning: 'not harmful to the environment',
      example:
        'Eco-friendly packaging is often more expensive, so shoppers need clear incentives to choose it.',
      pos: 'compound adjective',
      note: 'Fine for Speaking; in essays “environmentally friendly” or “low-carbon” sounds more precise.',
    },
    {
      id: 'climate-crisis',
      term: 'the climate crisis',
      meaning: 'the serious and urgent problems caused by global warming',
      example:
        'Young people have played a prominent role in raising awareness of the climate crisis.',
      pos: 'noun phrase',
      note: 'Stronger than “climate change”; choose depending on how urgent you want to sound.',
    },
    {
      id: 'poaching',
      term: 'poaching',
      meaning: 'the illegal hunting or catching of animals',
      example: 'Poaching for ivory has pushed some elephant populations close to collapse.',
      pos: 'noun',
      note: 'Verb: poach; person: poacher.',
    },
    {
      id: 'contaminate',
      term: 'contaminate (water supplies)',
      meaning: 'to make something dirty or poisonous by adding a harmful substance',
      example:
        'Chemicals from nearby factories contaminated the river that supplied the town’s drinking water.',
      pos: 'verb',
      note: 'Noun: contamination. Often passive: “The soil was contaminated with lead.”',
    },
    {
      id: 'recycling-scheme',
      term: 'recycling scheme',
      meaning: 'an organised local system for collecting and recycling waste',
      example: 'A well-run recycling scheme depends on residents sorting their waste correctly.',
      pos: 'noun + noun',
      note: '“Scheme” is neutral in British English (a plan or system), not negative.',
    },
    {
      id: 'throwaway-culture',
      term: 'a throwaway culture',
      meaning:
        'a society in which people discard things quickly instead of repairing or reusing them',
      example:
        'Cheap fashion has fuelled a throwaway culture in which clothes are worn only a few times.',
      pos: 'adjective + noun',
    },
  ],
})
