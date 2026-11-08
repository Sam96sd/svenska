import { defineWritingTask } from '../define'

/** Original task and model answers. Academic Task 1, two maps. The town is fictional. */
export default defineWritingTask({
  id: 'a1-map-harbour-redevelopment',
  skill: 'writing',
  use: 'practice',
  module: 'academic',
  task: 1,
  type: 'map',
  topic: 'Towns and development',
  title: 'Harbour redevelopment',
  prompt:
    'The maps below show the harbour area of Fernhaven, a coastal town, in 2005 and at present.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
  chart: {
    kind: 'map',
    title: 'Fernhaven harbour area, 2005 and now',
    maps: [
      {
        label: '2005',
        diagram: {
          width: 520,
          height: 360,
          north: true,
          description:
            'Fernhaven harbour in 2005. The Coast Road runs from west to east across the north of the area. A railway line comes from the north, crosses the Coast Road and ends at a goods yard just north of the harbour. On the west side of the harbour there are warehouses in the north-west and a fish market beside the water. The whole east side is taken up by a large shipyard. The harbour opens south onto the sea, and a lighthouse stands at the end of a short pier on the east side of the harbour mouth.',
          items: [
            { shape: 'rect', x: 0, y: 290, w: 520, h: 70, tone: 'water' },
            { shape: 'text', x: 240, y: 340, text: 'Sea', size: 14 },
            { shape: 'rect', x: 190, y: 180, w: 140, h: 116, tone: 'water', label: 'Harbour' },
            { shape: 'path', d: 'M0,70 L520,70', tone: 'road' },
            { shape: 'text', x: 20, y: 56, text: 'Coast Road', anchor: 'start', size: 12 },
            { shape: 'line', x1: 260, y1: 0, x2: 260, y2: 95, dashed: true },
            { shape: 'text', x: 268, y: 40, text: 'Railway', anchor: 'start', size: 11 },
            { shape: 'rect', x: 195, y: 95, w: 135, h: 60, tone: 'soft', label: 'Goods yard' },
            { shape: 'rect', x: 30, y: 100, w: 140, h: 60, label: 'Warehouses' },
            { shape: 'rect', x: 40, y: 200, w: 130, h: 60, label: 'Fish market' },
            { shape: 'rect', x: 350, y: 100, w: 140, h: 160, tone: 'soft', label: 'Shipyard' },
            { shape: 'rect', x: 338, y: 288, w: 10, h: 38 },
            { shape: 'circle', cx: 343, cy: 334, r: 8 },
            { shape: 'text', x: 358, y: 338, text: 'Lighthouse', anchor: 'start', size: 11 },
          ],
        },
      },
      {
        label: 'Now',
        diagram: {
          width: 520,
          height: 360,
          north: true,
          description:
            'Fernhaven harbour today. The Coast Road is unchanged. The railway line and the goods yard have gone: in their place are a hotel (west) and a car park (east), with a new access road between them leading south from the Coast Road. The warehouses in the north-west have been converted into apartments, and the fish market has been replaced by restaurants. The shipyard has been replaced by a maritime museum in the north-east and a park to its south. The harbour is now a marina, and a promenade runs along the waterfront and around the marina. A new ferry pier extends into the sea from the western shore, and the lighthouse on the east side remains.',
          items: [
            { shape: 'rect', x: 0, y: 290, w: 520, h: 70, tone: 'water' },
            { shape: 'text', x: 240, y: 340, text: 'Sea', size: 14 },
            { shape: 'rect', x: 190, y: 180, w: 140, h: 116, tone: 'water', label: 'Marina' },
            { shape: 'path', d: 'M0,70 L520,70', tone: 'road' },
            { shape: 'text', x: 20, y: 56, text: 'Coast Road', anchor: 'start', size: 12 },
            { shape: 'path', d: 'M260,77 L260,166', tone: 'road' },
            { shape: 'rect', x: 195, y: 95, w: 55, h: 60, label: 'Hotel' },
            { shape: 'rect', x: 270, y: 95, w: 60, h: 60, tone: 'soft', label: 'Car park' },
            { shape: 'rect', x: 30, y: 100, w: 140, h: 60, label: 'Apartments' },
            { shape: 'rect', x: 40, y: 200, w: 130, h: 60, label: 'Restaurants' },
            { shape: 'rect', x: 350, y: 100, w: 140, h: 70, label: 'Maritime museum' },
            { shape: 'rect', x: 350, y: 180, w: 140, h: 80, tone: 'green', label: 'Park' },
            {
              shape: 'path',
              d: 'M30,280 L184,280 L184,172 L336,172 L336,280 L495,280',
              tone: 'line',
            },
            { shape: 'text', x: 100, y: 274, text: 'Promenade', size: 11 },
            { shape: 'rect', x: 110, y: 288, w: 12, h: 46 },
            { shape: 'text', x: 130, y: 326, text: 'Ferry pier', anchor: 'start', size: 11 },
            { shape: 'rect', x: 338, y: 288, w: 10, h: 38 },
            { shape: 'circle', cx: 343, cy: 334, r: 8 },
            { shape: 'text', x: 358, y: 338, text: 'Lighthouse', anchor: 'start', size: 11 },
          ],
        },
      },
    ],
  },
  planHints: [
    'Overview first, with no detail: what kind of place was it in 2005, what kind of place is it now, and what has stayed the same? This one sentence is the Band 7→8 difference on map tasks.',
    'Group the changes by area (west side, east side, north of the harbour) instead of going through the map item by item.',
    'Use compass directions (to the west of, in the north-east), not “on the left” or “at the top”.',
    'Vary the language of change, mostly in the present perfect passive: “has been converted into”, “has made way for”, “was demolished”, “has been replaced by”, “remains”.',
    'No opinions or reasons: don’t say the area is “nicer” now or that it was redeveloped “for tourists” unless the maps show it.',
  ],
  models: [
    {
      band: 6,
      text: `The maps shows the harbour of Fernhaven in 2005 and now. There are many changes in this years.

In 2005 there was a Coast Road in the north and a railway was going to the goods yard. Next to the harbour on the left there was warehouses and fish market. On the right there was a shipyard which was very big. There was also a lighthouse in the sea.

Now the warehouses changed to apartments and the fish market changed to restaurants. The shipyard is not there anymore and there is a museum and a park. The railway is also removed and now there is a hotel and a car park, I think this is because more tourists come to the town now. The harbour is a marina now and there is a promenade around it. There is a new ferry pier on the east side.

To conclude, the harbour is very different now, it is more modern and nicer for people than in 2005.`,
      annotations: [
        {
          quote: 'Next to the harbour on the left there was warehouses and fish market.',
          note: 'Lexical Resource and Grammatical Range & Accuracy: “on the left” instead of “to the west”, and “there was warehouses” (there were). Map tasks need compass directions.',
        },
        {
          quote: 'There is a new ferry pier on the east side.',
          note: 'Task Achievement: inaccurate. The ferry pier is on the west side of the harbour mouth; the lighthouse is on the east.',
        },
        {
          quote: 'I think this is because more tourists come to the town now',
          note: 'Task Achievement: an invented reason. The maps show what changed, not why.',
        },
        {
          quote: 'it is more modern and nicer for people than in 2005',
          note: 'Task Achievement: the only overview is an opinion at the end. A Band 7+ overview says what kind of area it was and has become, and what stayed the same.',
        },
      ],
    },
    {
      band: 7,
      text: `The maps show the harbour area of Fernhaven in 2005 and how it looks now.

Overall, the area has changed from an industrial place to a place for tourists and residents. Most of the old buildings have been replaced, but the Coast Road and the lighthouse are still there.

In 2005, there were warehouses and a fish market on the west side of the harbour. Now the warehouses have become apartments and the fish market has been replaced by restaurants. On the east side there was a big shipyard, but it has been removed and now there is a maritime museum and a park in this area.

In the north, the railway and the goods yard have been removed, and a hotel and a car park have been built there. There is also a new road between them which connects to the Coast Road. The harbour has become a marina, and a promenade has been built along the waterfront. In addition, a ferry pier has been added on the west side, going out into the sea.`,
      annotations: [
        {
          quote:
            'Overall, the area has changed from an industrial place to a place for tourists and residents.',
          note: 'Task Achievement: a clear overview of the overall change, plus what stayed the same. Repeating “place” is a small Lexical Resource weakness.',
        },
        {
          quote: 'the fish market has been replaced by restaurants',
          note: 'Grammatical Range & Accuracy: the present perfect passive is used accurately throughout to describe changes up to now.',
        },
        {
          quote: 'it has been removed and now there is a maritime museum and a park in this area',
          note: 'Task Achievement: accurate, but less precise than it could be. Where are they? (The museum is in the north and the park in the south of the former shipyard.)',
        },
        {
          quote: 'In addition, a ferry pier has been added',
          note: 'Coherence & Cohesion: the last paragraph mixes the north of the area with the waterfront, and “In addition” is a little mechanical. Grouping is logical but not tight.',
        },
      ],
    },
    {
      band: 8.5,
      text: `The two maps illustrate the transformation of the harbour area in Fernhaven between 2005 and the present day.

Overall, the harbour has changed from a working industrial port into an area devoted to housing, tourism and leisure. Virtually all of the original buildings have been replaced or converted, although the basic layout, including the Coast Road and the lighthouse, remains the same.

The most dramatic changes have taken place on either side of the harbour. To the west, the warehouses have been converted into apartments, and the fish market by the water has made way for restaurants. On the eastern side, the large shipyard that once occupied the whole area has been demolished, and its site is now shared by a maritime museum in the north and a park to the south.

North of the harbour, the railway line and goods yard have disappeared entirely. In their place, a hotel and a car park have been built, separated by a new access road leading from the Coast Road. Finally, the harbour itself has been turned into a marina, lined by a waterfront promenade, while a new ferry pier now juts out into the sea from the western shore.`,
      annotations: [
        {
          quote:
            'the harbour has changed from a working industrial port into an area devoted to housing, tourism and leisure',
          note: 'Task Achievement: the overview sums up the character of the whole change in one sentence, with no detail, and then states what has stayed the same.',
        },
        {
          quote: 'has made way for restaurants',
          note: 'Lexical Resource: a wide range of language for change (“has been converted into”, “has made way for”, “has disappeared entirely”, “juts out”), with no repetition.',
        },
        {
          quote: 'The most dramatic changes have taken place on either side of the harbour.',
          note: 'Coherence & Cohesion: each body paragraph covers one area, signposted with compass directions (“To the west”, “On the eastern side”, “North of the harbour”).',
        },
        {
          quote: 'its site is now shared by a maritime museum in the north and a park to the south',
          note: 'Task Achievement: precise locations for the new features, not just a list of what was built.',
        },
        {
          quote: 'separated by a new access road leading from the Coast Road',
          note: 'Grammatical Range & Accuracy: participle phrases (“separated by…”, “leading from…”, “lined by…”) pack detail into accurate, complex sentences.',
        },
      ],
    },
  ],
})
