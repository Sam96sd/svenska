import { dayKey, previousDayKey } from './dates'
import { XP_PER_MINUTE, type Profile } from './storage/schema'

/** Returns a copy of the profile with XP added and today's activity counted toward the streak. */
export function addXp(profile: Profile, amount: number, now = Date.now()): Profile {
  const today = dayKey(now)
  const gained = Math.max(0, Math.round(amount))
  const { streak } = profile

  let current = streak.current
  if (streak.lastDay !== today) {
    current = streak.lastDay === previousDayKey(today) ? streak.current + 1 : 1
  }

  return {
    ...profile,
    xp: profile.xp + gained,
    xpByDay: { ...profile.xpByDay, [today]: (profile.xpByDay[today] ?? 0) + gained },
    streak: { current, longest: Math.max(streak.longest, current), lastDay: today },
  }
}

/** The streak as it stands now: it is broken if neither today nor yesterday had activity. */
export function currentStreak(profile: Profile, now = Date.now()): number {
  const today = dayKey(now)
  const { lastDay, current } = profile.streak
  return lastDay === today || lastDay === previousDayKey(today) ? current : 0
}

export function xpToday(profile: Profile, now = Date.now()): number {
  return profile.xpByDay[dayKey(now)] ?? 0
}

export function dailyGoalXp(profile: Profile): number {
  return profile.settings.dailyGoalMinutes * XP_PER_MINUTE
}

/** Total XP needed to reach `level` (level 1 starts at 0): 0, 100, 250, 450, 700, … */
export function xpForLevel(level: number): number {
  return 25 * (level - 1) * (level + 2)
}

export function levelInfo(xp: number) {
  let level = 1
  while (xp >= xpForLevel(level + 1)) level++
  const floor = xpForLevel(level)
  const ceil = xpForLevel(level + 1)
  return {
    level,
    intoLevel: xp - floor,
    levelSize: ceil - floor,
    progress: (xp - floor) / (ceil - floor),
  }
}
