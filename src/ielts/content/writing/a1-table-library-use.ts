import { defineWritingTask } from '../define'

/** Original task and model answers. Academic Task 1, table. All data is fictional. */
export default defineWritingTask({
  id: 'a1-table-library-use',
  skill: 'writing',
  use: 'practice',
  module: 'academic',
  task: 1,
  type: 'table',
  topic: 'Culture and reading',
  title: 'Public library use in five cities',
  prompt:
    'The table below gives information about the use of public libraries in five cities in 2024.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nWrite at least 150 words.',
  chart: {
    kind: 'table',
    title: 'Use of public libraries in five cities, 2024 (average per resident)',
    columns: [
      'City',
      'Library visits',
      'Books borrowed',
      'Digital downloads (e-books and audiobooks)',
    ],
    rows: [
      { label: 'Calderport', values: [6.8, 5.9, 1.2] },
      { label: 'Brenmouth', values: [4.1, 3.2, 3.8] },
      { label: 'Hollinbridge', values: [2.5, 1.9, 0.6] },
      { label: 'Westvale', values: [5.2, 2.4, 4.9] },
      { label: 'Dunmere', values: [3.3, 4.6, 1.1] },
    ],
    unit: 'average per resident per year',
  },
  planHints: [
    'A table has no lines to “see”, so find the pattern yourself before writing: who is highest and lowest in each column, and do any cities break the pattern? Put this in a number-free overview, the key Band 7→8 step.',
    'Never describe the table row by row. Group the cities (e.g. those where downloads beat book loans, and those where they don’t) and compare them.',
    'Choose a few figures to support each point: the top and bottom of each column and any striking exceptions are enough.',
    'Use comparison language: “well ahead of”, “the second highest”, “roughly double”, “barely a fifth”, “trailed on both measures”.',
    'Don’t explain the figures. The table doesn’t say why Dunmere borrows so much, so any reason would be invented.',
  ],
  models: [
    {
      band: 6,
      text: `The table shows the library use in five city in 2024, it shows the visits, books borrowed and digital downloads.

Calderport has 6.8 visits, 5.9 books borrowed and 1.2 digital downloads. Brenmouth has 4.1 visits, 3.2 books and 3.8 downloads. Hollinbridge has 2.5 visits, 1.9 books and 0.6 downloads, this is the lowest. Westvale has 5.2 visits, 2.4 books and 4.9 downloads. Dunmere has 3.3 visits, 4.6 books and 1.1 downloads.

As we can see, Calderport is the best city for libraries because the people visit a lot and borrow many books. Westvale have the most downloads, it is five times more than Calderport. Dunmere people visit not many times but they borrow a lot of books, maybe because the library is far from their house.

In Brenmouth and Westvale the downloads are more than the books, but in the other cities the books are more popular than downloads. Overall, the people use the libraries in different ways and Calderport is the most.`,
      annotations: [
        {
          quote: 'Calderport has 6.8 visits, 5.9 books borrowed and 1.2 digital downloads.',
          note: 'Task Achievement: the second paragraph copies the table row by row. Nothing is selected or compared, so this paragraph earns very little.',
        },
        {
          quote: 'it is five times more than Calderport',
          note: 'Task Achievement: inaccurate. 4.9 is about four times 1.2, not five. Check any multiple before you write it.',
        },
        {
          quote: 'Calderport is the best city for libraries',
          note: 'Task Achievement: “the best” is an opinion, and the reason given for Dunmere (“maybe because the library is far”) is invented.',
        },
        {
          quote: 'In Brenmouth and Westvale the downloads are more than the books',
          note: 'Task Achievement: this is a key feature, but it is buried in the last paragraph. The vague closing overview (“Calderport is the most”) keeps TA at 6.',
        },
      ],
    },
    {
      band: 7,
      text: `The table shows the average number of library visits, books borrowed and digital downloads per resident in five cities in 2024.

Overall, Calderport had the highest number of visits and books borrowed, while Westvale had the most digital downloads. Hollinbridge had the lowest figures for all three types of library use.

People in Calderport visited libraries 6.8 times a year, which was the highest figure, and Westvale came second with 5.2 visits. Brenmouth and Dunmere had 4.1 and 3.3 visits respectively, and Hollinbridge had only 2.5. For books borrowed, Calderport was again first with 5.9 per resident, followed by Dunmere with 4.6. However, the figures for Brenmouth, Westvale and Hollinbridge were lower, at 3.2, 2.4 and 1.9.

Digital downloads were more popular in Westvale and Brenmouth, at 4.9 and 3.8 per person, and in these two cities people downloaded more items than they borrowed books. In the other three cities, downloads were much lower, at 1.2 in Calderport, 1.1 in Dunmere and just 0.6 in Hollinbridge.`,
      annotations: [
        {
          quote: 'Hollinbridge had the lowest figures for all three types of library use.',
          note: 'Task Achievement: a clear overview with the main highs and lows, all accurate.',
        },
        {
          quote:
            'Brenmouth and Dunmere had 4.1 and 3.3 visits respectively, and Hollinbridge had only 2.5.',
          note: 'Task Achievement: the third paragraph reports nearly every figure in the first two columns. Band 8 selects fewer numbers and compares more.',
        },
        {
          quote: 'However, the figures for Brenmouth, Westvale and Hollinbridge were lower',
          note: 'Coherence & Cohesion: “However” is not needed here, because there is no real contrast with the sentence before. Linking is generally clear but sometimes mechanical.',
        },
        {
          quote: 'in these two cities people downloaded more items than they borrowed books',
          note: 'Task Achievement: a key comparison across columns, well selected. It could also appear in the overview.',
        },
      ],
    },
    {
      band: 8.5,
      text: `The table provides data on how intensively residents of five cities used their public libraries in 2024, measured by visits, book loans and digital downloads per person.

Overall, Calderport had the most active library users in terms of both visits and borrowing, while Hollinbridge recorded the lowest figures in every category. A clear divide is also apparent between cities where printed books remained the main form of borrowing and those where digital downloads had overtaken them.

Calderport residents visited a library 6.8 times on average, well ahead of Westvale (5.2), and they borrowed 5.9 books each, comfortably the highest rate. Dunmere presents a notable contrast: although its residents made only 3.3 visits, their loan rate of 4.6 books was the second highest. Hollinbridge trailed on both measures, with 2.5 visits and fewer than two books per person (1.9).

Digital use followed a quite different pattern. Westvale led with 4.9 downloads per resident, roughly double its rate of book borrowing, and Brenmouth’s figure of 3.8 also exceeded its book loans (3.2). In the other three cities, downloads were far less common, ranging from just 0.6 in Hollinbridge to 1.2 in Calderport, barely a fifth of that city’s book loans.`,
      annotations: [
        {
          quote:
            'A clear divide is also apparent between cities where printed books remained the main form of borrowing and those where digital downloads had overtaken them.',
          note: 'Task Achievement: the overview finds a pattern across columns (books versus downloads), not just the highest and lowest values, and contains no numbers.',
        },
        {
          quote: 'Dunmere presents a notable contrast: although its residents made only 3.3 visits',
          note: 'Task Achievement: an exception is selected and explained through the data alone, with no invented reason.',
        },
        {
          quote: 'roughly double its rate of book borrowing',
          note: 'Lexical Resource: accurate approximations (4.9 is about twice 2.4; 1.2 is about a fifth of 5.9) show the relationship instead of repeating raw figures.',
        },
        {
          quote: 'Digital use followed a quite different pattern.',
          note: 'Coherence & Cohesion: the body is organised by type of use (physical, then digital), so each paragraph compares all five cities.',
        },
        {
          quote: 'Hollinbridge trailed on both measures',
          note: 'Lexical Resource: precise, less common comparison verbs (“trailed”, “led”, “exceeded”) used naturally.',
        },
      ],
    },
  ],
})
