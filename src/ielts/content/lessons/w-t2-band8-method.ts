import { defineLesson } from '../define'

export default defineLesson({
  id: 'w-t2-band8-method',
  skill: 'writing',
  module: 'both',
  order: 11,
  title: 'The Band 8 essay method',
  summary:
    'A ten-step method for Task 2: analyse, plan, take a clear position, develop one idea per paragraph in depth, and proofread against a checklist.',
  types: ['opinion', 'discussion', 'adv-disadv', 'problem-solution', 'two-part'],
  minutes: 12,
  sections: [
    {
      kind: 'text',
      heading: 'Depth beats breadth',
      paragraphs: [
        'Students at Band 6.5–7 usually know enough English for Band 8. What holds them back is **method**: too many ideas, each mentioned briefly; a position that drifts; linking words that do the work ideas should do. The examiner’s Band 8 description for Task Response asks for a **clear, well-developed position** and ideas that are **extended and well supported**. Two ideas explained fully do that better than five ideas listed.',
        'The method below works for every essay type. It assumes 40 minutes: about **5 to plan, 30 to write and 5 to check**.',
      ],
    },
    {
      kind: 'steps',
      heading: 'The method',
      items: [
        '**Analyse the prompt and count its parts.** Identify the type, underline every question and instruction, and note the exact topic (causes or effects? society or individuals?).',
        '**Plan for five minutes.** Decide your position, choose ONE main idea per body paragraph and the specific example that will support each one. Do not start writing until you know how the essay ends.',
        '**Introduction (2–3 sentences):** paraphrase the prompt in your own words and **state a clear position** (or, for a two-part question, a short answer to both questions).',
        '**Body paragraph 1 and 2: one idea each, developed with PEEL** — Point, Explain, Example, Link. Spend four or five sentences on that one idea instead of adding new ones.',
        '**Use specific, realistic examples:** a type of person, place or situation (“a nurse working night shifts”, “a small coastal town that depends on tourism”). **Never invent statistics** or research.',
        '**Conclusion (1–2 sentences):** restate your position in fresh words and sum up the main reasons. No new ideas.',
        '**Write naturally, not from templates.** Avoid memorised openers (“In this day and age…”), clichés (“a double-edged sword”) and show-off idioms (“every cloud has a silver lining”).',
        '**Build cohesion with ideas, not just linkers.** Use reference (this approach, such policies), substitution and topic sentences, not only Firstly / Moreover / In conclusion.',
        '**Proofread for 3–5 minutes against a checklist** (below). Look for your personal error patterns, not only random mistakes.',
        '**Aim for about 260–300 words.** Enough to develop two ideas; short enough to leave time to check. Much longer essays tend to contain more errors, not more marks.',
      ],
    },
    {
      kind: 'compare',
      heading: 'Your 40 minutes',
      headers: ['Minutes', 'What you do', 'Why'],
      rows: [
        [
          '0–5',
          'Analyse the prompt, decide position, plan two ideas and two examples.',
          'Prevents drifting off-topic and changing your mind halfway.',
        ],
        ['5–10', 'Introduction.', 'A precise paraphrase and position set up the whole essay.'],
        [
          '10–30',
          'Two body paragraphs (about ten minutes each).',
          'This is where Task Response is won: depth and support.',
        ],
        ['30–35', 'Conclusion.', 'Short, consistent with the introduction.'],
        [
          '35–40',
          'Proofread against your checklist.',
          'Fixes the slips that keep accuracy at Band 7.',
        ],
      ],
    },
    {
      kind: 'example',
      heading: 'Worked example: from template to clear position',
      context:
        'Prompt: “Some people think that governments should spend more on public libraries, while others think the money is better spent on digital services. Discuss both views and give your own opinion.” A student’s introduction: “In this day and age, technology is a double-edged sword. Some people think libraries are important, while other people think digital services are more important. This essay will discuss both views before reaching a conclusion.”',
      question: 'Rewrite the introduction for Band 8.',
      answer:
        'Opinion is divided over whether public funding should go to traditional libraries or to online public services. While digital provision clearly reaches more people at lower cost, I believe libraries deserve a greater share of investment, because they offer free study space and support that many households cannot find elsewhere.',
      reasoning: [
        '“In this day and age” and “a double-edged sword” are memorised phrases that examiners see in every batch; they add no meaning.',
        'The original copies the prompt’s words (“some people think”, “digital services”). The rewrite paraphrases: public funding, online public services, traditional libraries.',
        '“This essay will discuss both views” delays the opinion the question asks for. The rewrite states a **clear position** at once.',
        'The concession (“While digital provision clearly reaches…”) shows the writer has weighed both views, which sets up the discussion structure.',
        'The reason given (“free study space and support”) previews the main idea of the second body paragraph.',
      ],
    },
    {
      kind: 'list',
      heading: 'The proofreading checklist',
      items: [
        'Does my introduction state a position, and does my conclusion repeat the same one?',
        'Does each body paragraph start with a topic sentence and stay on ONE idea?',
        'Is every example specific and realistic, with no invented figures?',
        'Articles (a / an / the), plurals and subject–verb agreement.',
        'No comma splices: two complete sentences need a full stop, a semicolon or a linking word.',
        'Tense consistency, and the words I most often misspell.',
      ],
    },
    {
      kind: 'trap',
      text: '**“Studies show that 78% of people…”** An invented statistic does not impress the examiner; it reads as unsupported and can make your argument look less credible. Use a realistic example instead: “A student without a quiet room at home, for instance, depends on the library to revise for exams.”',
    },
    {
      kind: 'tip',
      text: 'If you are short of time, cut a whole idea, not the development of the ones you have. A finished essay with two well-supported points scores higher than an unfinished one with four.',
    },
  ],
  drills: [],
})
