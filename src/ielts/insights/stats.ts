import { type Skill, SKILLS } from '../examSpec'
import { overallBand, roundBand } from '../scoring'
import { type Attempt, type ErrorEntry, type IeltsProfile } from '../storage/schema'

/*
 * Progress statistics from attempts and the error log. Pure functions, so the dashboard, the
 * study plan and "Fix my weaknesses" all agree.
 */

export interface BandPoint {
  at: number
  band: number
  kind: Attempt['kind']
  contentId: string
}

/** Attempts that say something reliable about a skill band. */
function bandPoints(attempts: Attempt[], skill: Skill): BandPoint[] {
  const out: BandPoint[] = []
  for (const a of attempts) {
    const fromBands = a.bands[skill]
    if (fromBands !== undefined) {
      out.push({ at: a.finishedAt, band: fromBands, kind: a.kind, contentId: a.contentId })
      continue
    }
    if (a.skill !== skill || a.band === null) continue
    // Individual diagnostic sections are counted through the diagnostic's summary instead.
    if (a.kind === 'diagnostic') continue
    // Short drills (< 6 questions) and self-assessments are too noisy for the trend.
    if (a.total !== null && a.total < 6) continue
    if (a.kind === 'drill') continue
    out.push({ at: a.finishedAt, band: a.band, kind: a.kind, contentId: a.contentId })
  }
  return out.sort((x, y) => x.at - y.at)
}

export function bandHistory(p: IeltsProfile): Record<Skill, BandPoint[]> {
  const attempts = Object.values(p.attempts)
  return Object.fromEntries(SKILLS.map((s) => [s, bandPoints(attempts, s)])) as Record<
    Skill,
    BandPoint[]
  >
}

/**
 * Current estimate per skill: the mean of the last three data points, with full mocks and the
 * diagnostic counting double. Null when there's no data yet.
 */
export function currentBands(p: IeltsProfile): Record<Skill, number | null> {
  const hist = bandHistory(p)
  return Object.fromEntries(
    SKILLS.map((s) => {
      const recent = hist[s].slice(-3)
      if (recent.length === 0) return [s, null]
      let sum = 0
      let weight = 0
      for (const r of recent) {
        const w = r.kind === 'mock' || r.kind === 'diagnostic' || r.kind === 'exam' ? 2 : 1
        sum += r.band * w
        weight += w
      }
      return [s, roundBand(sum / weight)]
    }),
  ) as Record<Skill, number | null>
}

export function estimatedOverall(bands: Record<Skill, number | null>): number | null {
  if (SKILLS.some((s) => bands[s] === null)) return null
  return overallBand(bands as Record<Skill, number>)
}

/** The weakest skill relative to the target (ties: the one with least data). */
export function weakestSkills(p: IeltsProfile): Skill[] {
  const bands = currentBands(p)
  const target = p.settings.targetBand
  const hist = bandHistory(p)
  return [...SKILLS].sort((a, b) => {
    const ga = target - (bands[a] ?? target - 1)
    const gb = target - (bands[b] ?? target - 1)
    if (ga !== gb) return gb - ga
    return hist[a].length - hist[b].length
  })
}

export interface TypeStats {
  type: string
  skill: Skill
  right: number
  total: number
  accuracy: number
  avgTimeMs: number
}

/** Accuracy and average time per question type (reading and listening). */
export function accuracyByType(p: IeltsProfile, since = 0): TypeStats[] {
  const map = new Map<string, TypeStats & { timeTotal: number; timed: number }>()
  for (const a of Object.values(p.attempts)) {
    if (a.finishedAt < since || !a.skill || (a.skill !== 'reading' && a.skill !== 'listening'))
      continue
    for (const q of a.questions) {
      const key = `${a.skill}:${q.type}`
      const s = map.get(key) ?? {
        type: q.type,
        skill: a.skill,
        right: 0,
        total: 0,
        accuracy: 0,
        avgTimeMs: 0,
        timeTotal: 0,
        timed: 0,
      }
      s.total++
      if (q.correct) s.right++
      if (q.timeMs > 0) {
        s.timeTotal += q.timeMs
        s.timed++
      }
      map.set(key, s)
    }
  }
  return [...map.values()]
    .map(({ timeTotal, timed, ...s }) => ({
      ...s,
      accuracy: s.total ? s.right / s.total : 0,
      avgTimeMs: timed ? timeTotal / timed : 0,
    }))
    .sort((a, b) => a.accuracy - b.accuracy)
}

/** Band per criterion over time for writing or speaking. */
export function criterionTrends(
  p: IeltsProfile,
  skill: 'writing' | 'speaking',
): Record<string, Array<{ at: number; band: number }>> {
  const out: Record<string, Array<{ at: number; band: number }>> = {}
  const attempts = Object.values(p.attempts)
    .filter((a) => a.skill === skill && Object.keys(a.criteria).length > 0)
    .sort((a, b) => a.finishedAt - b.finishedAt)
  for (const a of attempts)
    for (const [id, band] of Object.entries(a.criteria))
      (out[id] ??= []).push({ at: a.finishedAt, band })
  return out
}

export interface ErrorPattern {
  key: string
  skill: ErrorEntry['skill']
  category: string
  reason: string
  count: number
  lastAt: number
  examples: ErrorEntry[]
}

/** Unresolved errors grouped by skill + category + reason, biggest and most recent first. */
export function errorPatterns(p: IeltsProfile, opts: { since?: number } = {}): ErrorPattern[] {
  const map = new Map<string, ErrorPattern>()
  for (const e of Object.values(p.errors)) {
    if (e.resolvedAt || e.at < (opts.since ?? 0)) continue
    const key = `${e.skill}|${e.category}|${e.reason}`
    const g = map.get(key) ?? {
      key,
      skill: e.skill,
      category: e.category,
      reason: e.reason,
      count: 0,
      lastAt: 0,
      examples: [],
    }
    g.count++
    g.lastAt = Math.max(g.lastAt, e.at)
    g.examples.push(e)
    map.set(key, g)
  }
  for (const g of map.values()) g.examples.sort((a, b) => b.at - a.at)
  // Recent errors weigh more: a pattern from last week matters more than one from two months ago.
  const score = (g: ErrorPattern) => g.count + (Date.now() - g.lastAt < 14 * 86_400_000 ? 2 : 0)
  return [...map.values()].sort((a, b) => score(b) - score(a))
}

/** Gap from the current estimate to the target, per skill (positive = still to go). */
export function gapToTarget(p: IeltsProfile): Record<Skill, number | null> {
  const bands = currentBands(p)
  return Object.fromEntries(
    SKILLS.map((s) => [
      s,
      bands[s] === null ? null : Math.max(0, p.settings.targetBand - (bands[s] as number)),
    ]),
  ) as Record<Skill, number | null>
}
