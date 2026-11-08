import { describe, expect, it } from 'vitest'
import { type CatalogItem, type LessonMeta } from '../content/catalogBuild'
import {
  defaultIeltsProfile,
  type Attempt,
  type IeltsProfile,
  type StudyPlan,
} from '../storage/schema'
import { planDay, planDayIndex, stageOf, type PlanInputs } from './plan'
import {
  accuracyByType,
  currentBands,
  errorPatterns,
  estimatedOverall,
  weakestSkills,
} from './stats'

const DAY = 86_400_000
const T0 = new Date(2026, 10, 2, 9).getTime()

const attempt = (a: Partial<Attempt>): Attempt => ({
  id: Math.random().toString(36),
  kind: 'practice',
  skill: 'reading',
  contentId: 'x',
  module: 'academic',
  startedAt: 0,
  finishedAt: T0,
  updatedAt: 0,
  durationMs: 0,
  correct: null,
  total: null,
  band: null,
  bands: {},
  questions: [],
  criteria: {},
  text: null,
  task: null,
  feedbackKey: null,
  gradedBy: null,
  ...a,
})

function profile(attempts: Attempt[]): IeltsProfile {
  const p = defaultIeltsProfile()
  p.settings.targetBand = 8
  p.attempts = Object.fromEntries(attempts.map((a) => [a.id, a]))
  return p
}

describe('progress statistics', () => {
  it('estimates each skill from recent results, mocks counting double', () => {
    const p = profile([
      attempt({ skill: 'reading', band: 6, total: 13, finishedAt: T0 }),
      attempt({ skill: 'reading', band: 7, total: 13, finishedAt: T0 + DAY }),
      attempt({ skill: 'reading', band: 7.5, total: 40, kind: 'mock', finishedAt: T0 + 2 * DAY }),
      attempt({ skill: 'listening', band: 9, total: 4, finishedAt: T0 }), // too short to count
      attempt({ skill: 'writing', band: 6.5, finishedAt: T0 }),
      attempt({
        kind: 'diagnostic',
        skill: null,
        bands: { speaking: 6, listening: 7 },
        finishedAt: T0,
      }),
    ])
    const b = currentBands(p)
    expect(b.reading).toBe(7) // (6 + 7 + 7.5×2) / 4 = 7
    expect(b.listening).toBe(7)
    expect(b.writing).toBe(6.5)
    expect(b.speaking).toBe(6)
    expect(estimatedOverall(b)).toBe(6.5) // 6.625
    expect(weakestSkills(p)[0]).toBe('speaking')
  })

  it('reports accuracy and time per question type', () => {
    const p = profile([
      attempt({
        questions: [
          { qid: 'a#1', type: 'tfng', correct: true, given: '', timeMs: 30_000, reason: null },
          {
            qid: 'a#2',
            type: 'tfng',
            correct: false,
            given: '',
            timeMs: 90_000,
            reason: 'ng-vs-false',
          },
          { qid: 'a#3', type: 'headings', correct: true, given: '', timeMs: 0, reason: null },
        ],
      }),
    ])
    const s = accuracyByType(p)
    expect(s[0]).toMatchObject({
      type: 'tfng',
      right: 1,
      total: 2,
      accuracy: 0.5,
      avgTimeMs: 60_000,
    })
  })

  it('groups unresolved errors into patterns', () => {
    const p = profile([])
    const e = (id: string, reason: string, resolvedAt: number | null = null) => ({
      id,
      at: T0,
      updatedAt: T0,
      skill: 'reading' as const,
      attemptId: null,
      contentId: 'c',
      qid: null,
      category: 'tfng',
      reason,
      detail: '',
      correction: '',
      resolvedAt,
    })
    p.errors = {
      a: e('a', 'ng-vs-false'),
      b: e('b', 'ng-vs-false'),
      c: e('c', 'paraphrase'),
      d: e('d', 'ng-vs-false', T0),
    }
    const pats = errorPatterns(p)
    expect(pats[0]).toMatchObject({ category: 'tfng', reason: 'ng-vs-false', count: 2 })
    expect(pats).toHaveLength(2)
  })
})

describe('study plan', () => {
  const plan: StudyPlan = { weeks: 8, dailyMinutes: 45, startedAt: T0, updatedAt: T0, done: {} }
  const item = (id: string, skill: CatalogItem['skill'], minutes = 15): CatalogItem => ({
    id,
    skill,
    module: 'both',
    title: id,
    topic: 't',
    section: skill === 'writing' ? 'task2' : 'part1',
    minutes,
    questions: 10,
    types: [],
    use: 'practice',
    level: 1,
  })
  const lesson = (id: string, skill: LessonMeta['skill'], order: number): LessonMeta => ({
    id,
    skill,
    module: 'both',
    order,
    title: id,
    summary: 's',
    types: [],
    minutes: 8,
    drills: [],
  })
  const inputs: PlanInputs = {
    plan,
    module: 'academic',
    weakest: ['writing', 'speaking', 'reading', 'listening'],
    catalog: [
      item('r1', 'reading'),
      item('r2', 'reading'),
      item('l1', 'listening'),
      item('w1', 'writing', 40),
      item('s1', 'speaking'),
    ],
    lessons: [
      lesson('r-a', 'reading', 1),
      lesson('w-a', 'writing', 1),
      lesson('w-b', 'writing', 2),
    ],
    attempted: new Set(['r1']),
    hasDiagnostic: false,
    hasMocks: true,
  }

  it('moves through the three stages', () => {
    expect(stageOf(plan, 0)).toBe(1)
    expect(stageOf(plan, 13)).toBe(1)
    expect(stageOf(plan, 14)).toBe(2)
    expect(stageOf(plan, 35)).toBe(3)
    expect(planDayIndex(plan, T0 + 3 * DAY + 5000)).toBe(3)
  })

  it('starts with the diagnostic and lessons for the weakest skill', () => {
    const day0 = planDay(inputs, 0, {})
    expect(day0[0]?.kind).toBe('diagnostic')
    const day1 = planDay({ ...inputs, hasDiagnostic: true }, 1, {})
    expect(day1.filter((t) => t.kind === 'lesson').map((t) => t.kind === 'lesson' && t.id)).toEqual(
      ['w-a', 'w-b'],
    )
  })

  it('is deterministic and prefers material not yet attempted', () => {
    const a = planDay({ ...inputs, hasDiagnostic: true }, 20, {})
    const b = planDay({ ...inputs, hasDiagnostic: true }, 20, {})
    expect(a).toEqual(b)
    expect(a.some((t) => t.kind === 'vocab')).toBe(true)
    const reading = planDay(
      { ...inputs, hasDiagnostic: true, weakest: ['reading', 'writing', 'speaking', 'listening'] },
      16,
      {},
    )
    expect(reading.find((t) => t.kind === 'practice' && t.skill === 'reading')).toMatchObject({
      id: 'r2',
    })
  })

  it('schedules full mocks in the last stage', () => {
    const days = Array.from({ length: 21 }, (_, i) =>
      planDay({ ...inputs, hasDiagnostic: true }, 35 + i, {}),
    )
    expect(days.filter((d) => d.some((t) => t.kind === 'mock')).length).toBeGreaterThanOrEqual(4)
  })
})
