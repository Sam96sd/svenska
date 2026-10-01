import { describe, expect, it } from 'vitest'
import { addDays } from './dates'
import { intervalLabel, isDue, newCard, review, type Rating } from './srs'

const NOW = new Date(2026, 3, 10, 14, 30).getTime()

function run(ratings: Rating[]) {
  let card = newCard(NOW)
  let t = NOW
  for (const r of ratings) {
    card = review(card, r, t)
    t = Math.max(card.due, t)
  }
  return card
}

describe('srs', () => {
  it('schedules new cards for tomorrow, or now when requested', () => {
    expect(newCard(NOW).due).toBe(addDays(NOW, 1))
    expect(isDue(newCard(NOW), NOW)).toBe(false)
    expect(isDue(newCard(NOW, { dueNow: true }), NOW)).toBe(true)
  })

  it('follows the 1 → 3 → ~ease× ladder for Good', () => {
    expect(run(['good']).interval).toBe(1)
    expect(run(['good', 'good']).interval).toBe(3)
    expect(run(['good', 'good', 'good']).interval).toBe(8) // round(3 × 2.5)
    expect(run(['good', 'good', 'good', 'good']).interval).toBe(20)
  })

  it('makes Easy grow faster than Good and Hard slower', () => {
    const hard = run(['good', 'good', 'hard']).interval
    const good = run(['good', 'good', 'good']).interval
    const easy = run(['good', 'good', 'easy']).interval
    expect(hard).toBeLessThan(good)
    expect(easy).toBeGreaterThan(good)
  })

  it('Again resets the card, counts a lapse, lowers ease and relearns in 10 minutes', () => {
    const before = run(['good', 'good', 'good'])
    const after = review(before, 'again', NOW)
    expect(after.reps).toBe(0)
    expect(after.interval).toBe(0)
    expect(after.lapses).toBe(1)
    expect(after.ease).toBeCloseTo(before.ease - 0.2)
    expect(after.due).toBe(NOW + 10 * 60 * 1000)
  })

  it('never lets ease drop below 1.3', () => {
    let card = newCard(NOW)
    for (let i = 0; i < 20; i++) card = review(card, 'again', NOW)
    expect(card.ease).toBeCloseTo(1.3)
  })

  it('places day intervals on local midnight', () => {
    const card = review(newCard(NOW), 'good', NOW)
    expect(new Date(card.due).getHours()).toBe(0)
    expect(card.due).toBe(addDays(NOW, 1))
  })

  it('caps intervals at a year', () => {
    let card = newCard(NOW)
    let t = NOW
    for (let i = 0; i < 15; i++) {
      card = review(card, 'easy', t)
      t = card.due
    }
    expect(card.interval).toBe(365)
  })

  it('labels intervals for the rating buttons', () => {
    const c = newCard(NOW)
    expect(intervalLabel(c, 'again')).toBe('10 min')
    expect(intervalLabel(c, 'good')).toBe('1 day')
    expect(intervalLabel(c, 'easy')).toBe('4 days')
  })
})
