import { describe, expect, it } from 'vitest'
import { makeProfile } from './storage/actions'
import { addXp, currentStreak, levelInfo, xpForLevel, xpToday } from './progress'

const at = (y: number, m: number, d: number, h = 12) => new Date(y, m - 1, d, h).getTime()

describe('xp and streaks', () => {
  it('adds XP to the total and to today', () => {
    let p = makeProfile('A', '#000')
    p = addXp(p, 30, at(2026, 3, 1))
    p = addXp(p, 20, at(2026, 3, 1, 20))
    expect(p.xp).toBe(50)
    expect(xpToday(p, at(2026, 3, 1))).toBe(50)
    expect(p.streak.current).toBe(1)
  })

  it('extends the streak on consecutive days, across month ends', () => {
    let p = makeProfile('A', '#000')
    p = addXp(p, 10, at(2026, 2, 27))
    p = addXp(p, 10, at(2026, 2, 28))
    p = addXp(p, 10, at(2026, 3, 1))
    expect(p.streak.current).toBe(3)
    expect(p.streak.longest).toBe(3)
  })

  it('restarts the streak after a missed day but keeps the longest', () => {
    let p = makeProfile('A', '#000')
    p = addXp(p, 10, at(2026, 5, 1))
    p = addXp(p, 10, at(2026, 5, 2))
    p = addXp(p, 10, at(2026, 5, 4))
    expect(p.streak.current).toBe(1)
    expect(p.streak.longest).toBe(2)
  })

  it('reports a broken streak as 0 until the next activity', () => {
    let p = makeProfile('A', '#000')
    p = addXp(p, 10, at(2026, 5, 1))
    expect(currentStreak(p, at(2026, 5, 2))).toBe(1)
    expect(currentStreak(p, at(2026, 5, 3))).toBe(0)
  })
})

describe('levels', () => {
  it('uses growing thresholds', () => {
    expect([1, 2, 3, 4].map(xpForLevel)).toEqual([0, 100, 250, 450])
    expect(levelInfo(0).level).toBe(1)
    expect(levelInfo(99).level).toBe(1)
    expect(levelInfo(100).level).toBe(2)
    expect(levelInfo(175).progress).toBeCloseTo(0.5)
  })
})
