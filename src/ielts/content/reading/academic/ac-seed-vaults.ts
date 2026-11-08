import { definePassage } from '../../define'

/** Original text. Academic Passage 1 style: seed banks and crop diversity. */
export default definePassage({
  id: 'ac-seed-vaults',
  skill: 'reading',
  module: 'academic',
  section: 'academic',
  use: 'practice',
  title: 'Saving seeds for an uncertain future',
  topic: 'Agriculture',
  minutes: 20,
  level: 1,
  texts: [
    {
      title: 'Saving seeds for an uncertain future',
      paragraphs: [
        {
          label: 'A',
          text: 'For most of the ten thousand years since farming began, the safest place to keep a crop variety was in the field. Farmers set aside part of each harvest as seed for the following season, and in doing so they quietly selected plants that suited their own soils, rainfall and tastes. The result was an astonishing range of local varieties, known to scientists as landraces. Farmers in a single mountain valley might grow several dozen distinct types of bean, each with its own colour, cooking time and tolerance of frost. Nobody planned this diversity, but it amounted to an enormous living library of genetic traits.',
        },
        {
          label: 'B',
          text: 'During the twentieth century, that library began to shrink. Commercial breeders developed high-yielding varieties that performed well when supplied with fertiliser and irrigation, and many governments encouraged farmers to adopt them. Harvests rose dramatically, yet as farmers abandoned their old seed, many landraces disappeared within a generation. Botanists who surveyed rural markets in one decade and returned thirty years later often found that once-common varieties could no longer be located at all. Because such losses are rarely recorded at the time, nobody knows exactly how much diversity has vanished, but most specialists agree that the decline has been steepest in the staple grains on which most people depend.',
        },
        {
          label: 'C',
          text: 'Why should this matter, if modern varieties produce more food? The answer lies in the unpredictability of farming. A variety that thrives today may be devastated tomorrow by a new strain of fungus, a shift in rainfall or an insect pest from another continent. When that happens, breeders search for plants that carry natural resistance, and these are frequently found among obscure landraces or the wild relatives of crops. In one case, resistance to a leaf disease that was ruining barley harvests was traced to a handful of seeds collected decades earlier from a remote hillside. The lesson drawn by many scientists is that the value of a variety cannot be judged in advance: traits that seem useless now may become vital as conditions change.',
        },
        {
          label: 'D',
          text: 'Genebanks were created to act as an insurance policy against such losses, and the basic technique is surprisingly simple. The seeds of most grain and vegetable crops, described by botanists as ‘orthodox’, can survive being dried until they contain only around five per cent moisture. Once dried, they are sealed in foil packets and kept at about minus 18 degrees Celsius, conditions under which the seeds of many species remain alive for several decades, and some for well over a century. Such collections now exist in almost every country, ranging from small university collections to national institutions holding hundreds of thousands of samples.',
        },
        {
          label: 'E',
          text: 'Not every crop cooperates, however. The seeds of many tropical trees, including cocoa and mango, are killed by drying and cannot be frozen. Seeds of this kind, known as ‘recalcitrant’, must be conserved in other ways. One option is a field genebank, in which plants are kept as living collections in orchards or plantations. Field genebanks are expensive to maintain, need large areas of land and are exposed to the same storms, droughts and diseases that threaten farms. A more recent alternative is cryopreservation: tiny shoot tips are removed from a plant and plunged into liquid nitrogen at minus 196 degrees, where all biological activity effectively stops. The method is technically demanding, and only a few laboratories can use it on a large scale, but it allows potatoes, bananas and other crops that are normally grown from cuttings rather than seed to be stored in a very small space.',
        },
        {
          label: 'F',
          text: 'Even in ideal conditions, stored seeds slowly age, so a sample cannot simply be placed in a freezer and forgotten. Staff test a few seeds from each sample at regular intervals by trying to germinate them. If the proportion that sprouts falls below a set threshold, the sample must be grown out in the field to produce fresh seed. This regeneration is the most costly part of a genebank’s work, and it carries risks of its own: plants may cross-pollinate with neighbouring crops, or be gradually altered as they adapt to conditions at the genebank’s site, which may differ greatly from those on the farm where they were first collected. Surveys have repeatedly found large backlogs of samples overdue for regeneration, simply because funds were lacking.',
        },
        {
          label: 'G',
          text: 'Partly for this reason, the idea of a central back-up collection gained support. Since 2008, duplicate samples from genebanks around the world have been deposited in a vault cut deep into a mountain in the Norwegian Arctic, where the permafrost would keep the seeds cold even if the electricity supply failed. The depositing institutions retain ownership of their seeds, and the vault’s managers do not open the boxes; in effect, it operates like a bank’s safe-deposit service. Its value was demonstrated when researchers who had been forced by conflict to abandon their genebank withdrew copies of their samples to rebuild the collection elsewhere.',
        },
        {
          label: 'H',
          text: 'Yet some critics argue that freezing seeds, however carefully, is only half a solution. A variety held in a vault is, as one agronomist puts it, ‘frozen in time’: it stops evolving alongside the pests and climate around it. Supporters of community seed banks, which are run by farmers’ groups in villages on several continents, believe that crops should also be kept in use, so that they continue to adapt. These small stores lend seed to members at planting time, and the borrower repays the loan, usually with a larger quantity, after the harvest. Most experts now regard the two approaches as complementary rather than competing: the vault preserves what exists, while the fields allow it to keep changing.',
        },
      ],
    },
  ],
  groups: [
    {
      type: 'tfng',
      instructions:
        'Do the following statements agree with the information given in the passage? Choose TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.',
      questions: [
        {
          n: 1,
          statement:
            'The loss of traditional crop varieties was carefully recorded as it took place.',
          answer: 'FALSE',
          location: { ref: 'B', quote: 'such losses are rarely recorded at the time' },
          explanation:
            '“As it took place” paraphrases “at the time”. The text says losses were “rarely recorded”, which contradicts “carefully recorded”, so the answer is FALSE, not NOT GIVEN.',
        },
        {
          n: 2,
          statement:
            'Many scientists believe it is impossible to predict which crop varieties will turn out to be valuable.',
          answer: 'TRUE',
          location: { ref: 'C', quote: 'the value of a variety cannot be judged in advance' },
          explanation:
            '“Cannot be judged in advance” means the same as “impossible to predict”, and the sentence begins “The lesson drawn by many scientists”, which matches “many scientists believe”.',
        },
        {
          n: 3,
          statement: 'Most genebanks are run by national governments.',
          answer: 'NOT GIVEN',
          location: {
            ref: 'D',
            quote: 'ranging from small university collections to national institutions',
          },
          explanation:
            'Paragraph D mentions both university collections and national institutions, but it never says how many of each there are or who runs most of them. The claim about “most” is neither confirmed nor contradicted.',
        },
        {
          n: 4,
          statement: 'Cryopreservation costs less than maintaining a field genebank.',
          answer: 'NOT GIVEN',
          location: { ref: 'E', quote: 'Field genebanks are expensive to maintain' },
          explanation:
            'We learn that field genebanks are expensive and that cryopreservation is “technically demanding”, but the cost of cryopreservation is never stated or compared. Don’t turn “difficult” into “cheap” or “expensive”: the comparison is missing.',
        },
        {
          n: 5,
          statement:
            'Seeds that are regrown at a genebank may change in response to the conditions there.',
          answer: 'TRUE',
          location: {
            ref: 'F',
            quote: 'be gradually altered as they adapt to conditions at the genebank’s site',
          },
          explanation:
            '“Change in response to the conditions” paraphrases “be gradually altered as they adapt to conditions”, and “may” in the statement matches “may” in the text.',
        },
        {
          n: 6,
          statement: 'Staff at the Arctic vault regularly inspect the seeds stored there.',
          answer: 'FALSE',
          location: { ref: 'G', quote: 'the vault’s managers do not open the boxes' },
          explanation:
            'The managers “do not open the boxes”, so they cannot regularly inspect the seeds. Testing seeds is done by the genebanks themselves (paragraph F), not by the vault.',
        },
      ],
    },
    {
      type: 'completion',
      format: 'table',
      instructions:
        'Complete the table below. Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
      wordLimit: { words: 2, number: true },
      title: 'Methods of conserving crop diversity',
      body: [
        {
          kind: 'table',
          header: ['Method', 'Used for', 'How material is stored', 'Limitations'],
          rows: [
            [
              'Cold seed storage',
              '‘orthodox’ seeds of grain and vegetable crops',
              'seeds dried to about [[7]] per cent moisture, then sealed in [[8]] and kept at −18 °C',
              'seeds slowly age and must be tested regularly',
            ],
            [
              'Field genebank',
              '‘recalcitrant’ seeds, e.g. of cocoa and mango',
              'living plants kept in orchards or [[9]]',
              'expensive; needs a lot of land; at risk from storms, droughts and [[10]]',
            ],
            [
              'Cryopreservation',
              'crops usually grown from [[11]], e.g. potatoes',
              'shoot tips kept in liquid nitrogen at −196 °C',
              'only a few laboratories can use it on a large scale',
            ],
          ],
        },
      ],
      questions: [
        {
          n: 7,
          answers: ['5'],
          location: { ref: 'D', quote: 'only around five per cent moisture' },
          explanation:
            '“Five per cent moisture” gives the answer. Write the number only, because “per cent moisture” is already in the table. Don’t confuse it with the storage temperature (18 degrees).',
          distractors: ['18'],
        },
        {
          n: 8,
          answers: ['(foil) packets', 'foil packet'],
          location: { ref: 'D', quote: 'they are sealed in foil packets' },
          explanation:
            '“Sealed in” appears in both the table and the text, so the next words, “foil packets”, are the answer.',
        },
        {
          n: 9,
          answers: ['plantations'],
          location: { ref: 'E', quote: 'living collections in orchards or plantations' },
          explanation:
            '“Orchards or” in the table points straight to “orchards or plantations” in paragraph E.',
        },
        {
          n: 10,
          answers: ['diseases'],
          location: {
            ref: 'E',
            quote: 'exposed to the same storms, droughts and diseases that threaten farms',
          },
          explanation:
            '“At risk from” paraphrases “exposed to”. The list in the text is storms, droughts and diseases; copy the plural form as it appears.',
        },
        {
          n: 11,
          answers: ['cuttings'],
          location: { ref: 'E', quote: 'normally grown from cuttings rather than seed' },
          explanation:
            '“Usually grown from” paraphrases “normally grown from”. The answer is “cuttings”, not “seed”: the text says these crops are grown from cuttings “rather than seed”.',
          distractors: ['seed', 'seeds'],
        },
      ],
    },
    {
      type: 'completion',
      format: 'short-answer',
      instructions:
        'Answer the questions below. Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.',
      wordLimit: { words: 3, number: true },
      body: [
        {
          kind: 'bullets',
          items: [
            'What is the most expensive part of a genebank’s work? [[12]]',
            'What would keep the seeds in the Arctic vault cold if the power supply stopped? [[13]]',
            'When do members repay the seed they borrow from a community seed bank? [[14]]',
          ],
        },
      ],
      questions: [
        {
          n: 12,
          answers: ['regeneration'],
          location: {
            ref: 'F',
            quote: 'This regeneration is the most costly part of a genebank’s work',
          },
          explanation:
            '“Most expensive” paraphrases “most costly”. Regeneration means growing a stored sample out in the field to produce fresh seed. Testing (germinating a few seeds) is a routine check, not the costly part.',
          distractors: ['testing'],
        },
        {
          n: 13,
          answers: ['(the) permafrost'],
          location: {
            ref: 'G',
            quote: 'the permafrost would keep the seeds cold even if the electricity supply failed',
          },
          explanation:
            '“If the power supply stopped” paraphrases “if the electricity supply failed”. The permafrost (permanently frozen ground) would keep the seeds cold.',
        },
        {
          n: 14,
          answers: ['after (the) harvest'],
          location: { ref: 'H', quote: 'usually with a larger quantity, after the harvest' },
          explanation:
            'Seed is lent “at planting time” and repaid “after the harvest”. “At planting time” is when seed is borrowed, so it is the wrong answer.',
          distractors: ['at planting time'],
        },
      ],
    },
  ],
})
