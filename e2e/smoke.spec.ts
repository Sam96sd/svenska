import { expect, test, type Page } from '@playwright/test'

/**
 * Smoke test: pick a profile → complete lesson 1 → XP updates → review queue is populated.
 * Exercises are answered generically (first choice, all tiles, brute-force pairs), so some
 * answers are wrong; the lesson still finishes because retries are capped.
 */

async function solveExercise(page: Page) {
  const main = page.locator('main')
  const heading =
    (await main
      .locator('h2')
      .first()
      .textContent()
      .catch(() => '')) ?? ''

  if (heading.includes('Match the pairs')) {
    const columns = main.locator('.grid-cols-2 > div')
    const left = columns.nth(0).locator('button')
    const right = columns.nth(1).locator('button')
    const n = await left.count()
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (await left.nth(i).isDisabled()) break
        if (await right.nth(j).isDisabled()) continue
        await left.nth(i).click()
        await right.nth(j).click()
        await page.waitForTimeout(650)
      }
    }
    return
  }

  const skipSpeaking = page.getByRole('button', { name: "Can't speak right now" })
  if (await skipSpeaking.isVisible().catch(() => false)) {
    await skipSpeaking.click()
    return
  }

  const radios = main.getByRole('radio')
  const textbox = main.locator('input[type=text], textarea')
  const tiles = main.getByLabel('Word tiles').getByRole('button')

  if ((await radios.count()) > 0) await radios.first().click()
  else if ((await textbox.count()) > 0) await textbox.first().fill('tack')
  else if ((await tiles.count()) > 0) {
    while ((await tiles.count()) > 0) await tiles.first().click()
  }
  await page.getByRole('button', { name: 'Check', exact: true }).click()
}

test('pick a profile, finish lesson 1, earn XP and fill the review deck', async ({ page }) => {
  await page.goto('./')
  await expect(page.getByRole('heading', { name: 'Välkommen!' })).toBeVisible()
  await page.getByRole('button', { name: /^Samer/ }).click()

  await expect(page.getByRole('heading', { name: /Hej, Samer!/ })).toBeVisible()
  await expect(page.getByTestId('xp-today')).toHaveText('0')
  await expect(page.getByTestId('due-count')).toHaveText('0')

  await page.getByTestId('continue-lesson').click()
  await expect(page.getByRole('heading', { name: 'The Swedish alphabet' })).toBeVisible()

  // Learn → words → dialogue → practice
  await page.getByRole('button', { name: 'Continue' }).click()
  await page.getByRole('button', { name: 'Continue' }).click()
  await page.getByRole('button', { name: 'Start practice' }).click()

  for (let step = 0; step < 80; step++) {
    if (
      await page
        .getByTestId('lesson-xp')
        .isVisible()
        .catch(() => false)
    )
      break
    const cont = page.getByRole('button', { name: /^Continue/ })
    if (await cont.isVisible().catch(() => false)) {
      await cont.click()
      continue
    }
    await solveExercise(page)
  }

  const xpText = await page.getByTestId('lesson-xp').textContent()
  const xp = Number(xpText?.replace(/\D/g, ''))
  expect(xp).toBeGreaterThan(0)
  await expect(page.getByText(/words added to your review deck/)).toBeVisible()

  await page.getByRole('link', { name: 'Back to unit' }).click()
  await page.getByRole('link', { name: 'All units' }).click()
  await expect(page.getByTestId('xp-today')).toHaveText(String(xp))
  await expect(page.getByTestId('continue-lesson')).toContainText('Long and short vowels')

  await page.getByRole('link', { name: 'Review' }).first().click()
  await expect(page.getByTestId('review-in-your-deck')).toHaveText('11')
})
