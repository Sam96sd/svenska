import { expect, test } from '@playwright/test'

/**
 * IELTS smoke test: profile → IELTS (General Training) → finish a reading test and see the
 * score → write an essay and get feedback from a mocked Gemini response (no real API calls).
 */

const FEEDBACK = {
  criteria: [
    {
      id: 'tr',
      band: 7,
      evidence: ['I believe the benefits are greater'],
      comment: 'A clear position throughout.',
    },
    { id: 'cc', band: 7, evidence: ['Firstly'], comment: 'Logical but formulaic linking.' },
    { id: 'lr', band: 6, evidence: ['a big damage'], comment: 'Some collocation errors.' },
    { id: 'gra', band: 7, evidence: ['which improves'], comment: 'Good range, a few slips.' },
  ],
  overallBand: 7,
  summary: 'A relevant, well-organised answer held back by imprecise vocabulary.',
  topChanges: [
    {
      change: 'Develop one benefit fully with a specific example',
      why: 'Depth beats breadth',
      impact: 'high',
    },
    { change: 'Use referencing instead of Firstly/Secondly', why: 'Cohesion', impact: 'medium' },
    { change: 'Fix collocations', why: 'Lexical accuracy', impact: 'medium' },
  ],
  errors: [
    {
      original: 'a big damage',
      correction: 'considerable damage',
      type: 'collocation',
      explanation: 'Damage is uncountable.',
    },
  ],
  vocabulary: { overused: ['people'], underused: ['employees'], collocations: [] },
  taskChecks: [{ check: 'All parts of the question answered', passed: true, comment: 'Yes.' }],
  memorisedPhrases: [],
  offTopic: false,
  rewrite:
    'Remote working has become routine for many office employees, and on balance it benefits society.',
}

test('IELTS: choose General Training, finish a reading test, get essay feedback', async ({
  page,
}) => {
  // Every Gemini call is answered by this mock.
  await page.route('**/generativelanguage.googleapis.com/**', (route) =>
    route.fulfill({
      contentType: 'application/json',
      body: JSON.stringify({
        candidates: [{ content: { parts: [{ text: JSON.stringify(FEEDBACK) }] } }],
        usageMetadata: {
          promptTokenCount: 2000,
          candidatesTokenCount: 1500,
          thoughtsTokenCount: 500,
        },
      }),
    }),
  )
  page.on('dialog', (d) => void d.accept())

  await page.goto('./')
  await page.getByRole('button', { name: /^Samer/ }).click()
  await page
    .getByRole('navigation', { name: 'Section' })
    .getByRole('link', { name: 'IELTS' })
    .click()

  // First visit: pick the module.
  await page.getByText('IELTS General Training').click()
  await page.getByRole('button', { name: 'Start IELTS prep' }).click()
  await expect(page.getByText(/IELTS General Training · target Band 8/)).toBeVisible()

  // Reading: a GT Section 1 practice test.
  await page.goto('./#/ielts/reading/gt1-leisure-centre')
  await page.getByRole('button', { name: 'Start' }).click()
  const questionsTab = page.getByRole('tab', { name: /^Questions/ })
  if (await questionsTab.isVisible().catch(() => false)) await questionsTab.click()
  for (const n of [1, 2, 3, 4, 5, 6, 7])
    await page.locator(`#q-${n}`).getByText('TRUE', { exact: true }).click()
  for (const n of [8, 9, 10, 11, 12, 13, 14])
    await page.getByRole('textbox', { name: `Question ${n}`, exact: true }).fill('18')
  await page.getByRole('button', { name: 'Submit' }).click()
  await expect(page.getByRole('status').filter({ hasText: /\/ 14 correct/ })).toBeVisible()
  await expect(page.getByText('Answers explained')).toBeVisible()

  // Writing: give this learner a (fake) key and an already-detected model, then submit an essay.
  await page.evaluate(() => {
    const state = JSON.parse(localStorage.getItem('svenska:state') ?? '{}') as {
      activeProfileId: string
    }
    localStorage.setItem(
      `ielts:ai:${state.activeProfileId}`,
      JSON.stringify({
        freeKey: 'AIzaTEST-not-a-real-key-000000000000000',
        premiumKey: '',
        standardOverride: null,
        proOverride: null,
        standard: {
          pick: { id: 'gemini-test-flash', warning: null },
          models: ['gemini-test-flash'],
          at: 1,
        },
        pro: null,
      }),
    )
  })
  await page.goto('./#/ielts/writing/t2-remote-work')
  await page.reload()
  await page.getByRole('button', { name: 'Start planning' }).click()
  await page.getByRole('button', { name: 'Start writing' }).click()
  const sentence =
    'Working from home gives many people more time with their families and reduces traffic in busy cities. '
  await page.getByLabel('Your answer').fill(sentence.repeat(18))
  await page.getByRole('button', { name: 'Submit' }).click()

  await expect(page.getByRole('heading', { name: 'Your feedback' })).toBeVisible()
  await expect(page.getByText(FEEDBACK.summary)).toBeVisible()
  await expect(page.getByText('Task Response')).toBeVisible()
  await expect(page.getByText('Top 3 changes for +0.5')).toBeVisible()
})
