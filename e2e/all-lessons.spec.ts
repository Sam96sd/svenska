import { expect, test } from '@playwright/test'

/** Opens every lesson's intro, words and dialogue screens and checks nothing crashes. */
test('every lesson renders without errors', async ({ page }) => {
  test.setTimeout(300_000)
  const errors: string[] = []
  page.on('pageerror', (e) => errors.push(e.message))
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(m.text())
  })

  await page.goto('./')
  await page.getByRole('button', { name: /^Samer/ }).click()
  await expect(page.getByRole('heading', { name: /Hej, Samer!/ })).toBeVisible()

  const ids: string[] = []
  for (let u = 1; u <= 11; u++) {
    await page.goto(`./#/unit/unit-${String(u).padStart(2, '0')}`)
    await expect(page.locator('h1')).toBeVisible()
    const n = await page.locator('ol > li').count()
    for (let l = 1; l <= n; l++)
      ids.push(`u${String(u).padStart(2, '0')}-l${String(l).padStart(2, '0')}`)
  }
  expect(ids.length).toBeGreaterThanOrEqual(57)

  for (const id of ids) {
    await page.goto(`./#/lesson/${id}`)
    await expect(page.locator('main h1'), id).toBeVisible()
    // Step through the intro screens to the first exercise.
    for (let i = 0; i < 3; i++) {
      const next = page.getByRole('button', { name: /^(Continue|Start practice)/ })
      if (!(await next.isVisible().catch(() => false))) break
      await next.click()
    }
    await expect(page.locator('main h2').first(), id).toBeVisible()
  }
  expect(errors).toEqual([])
})
