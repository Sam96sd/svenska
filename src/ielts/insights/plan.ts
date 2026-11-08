import { addDays, startOfDay } from '../../lib/dates'
import { type CatalogItem, type LessonMeta } from '../content/catalogBuild'
import { type IeltsModule, type Skill, SKILLS } from '../examSpec'
import { type IeltsProfile, type StudyPlan } from '../storage/schema'

/*
 * The personal study plan. Deterministic: the same plan, day and progress always give the same
 * tasks, on every device. Three stages scaled to the plan's length (8 weeks by default):
 *   1. Diagnose and learn the strategy for each question type (first quarter: weeks 1–2)
 *   2. Skill building: daily vocabulary and timed sections (weeks 3–5)
 *   3. Full mocks and error-log review (weeks 6–8)
 * The weakest skill (furthest below target) gets the most practice.
 */

export type PlanTask =
  | { key: string; kind: 'diagnostic'; title: string; minutes: number; to: string }
  | {
      key: string
      kind: 'lesson'
      id: string
      skill: Skill
      title: string
      minutes: number
      to: string
    }
  | {
      key: string
      kind: 'practice'
      id: string
      skill: Skill
      title: string
      minutes: number
      to: string
      timed: boolean
    }
  | { key: string; kind: 'vocab'; title: string; minutes: number; to: string }
  | { key: string; kind: 'dictation'; title: string; minutes: number; to: string }
  | { key: string; kind: 'errors'; title: string; minutes: number; to: string }
  | { key: string; kind: 'mock'; title: string; minutes: number; to: string }

export type Stage = 1 | 2 | 3

export const STAGE_LABEL: Record<Stage, string> = {
  1: 'Diagnose and learn the strategies',
  2: 'Build skills: vocabulary and timed sections',
  3: 'Full mocks and error review',
}

export function planDayIndex(plan: StudyPlan, now = Date.now()): number {
  return Math.round((startOfDay(now) - startOfDay(plan.startedAt)) / 86_400_000)
}

export function planLengthDays(plan: StudyPlan): number {
  return plan.weeks * 7
}

export function stageOf(plan: StudyPlan, day: number): Stage {
  const f = day / planLengthDays(plan)
  return f < 0.25 ? 1 : f < 0.625 ? 2 : 3
}

export function dayDate(plan: StudyPlan, day: number): number {
  return addDays(plan.startedAt, day)
}

export interface PlanInputs {
  plan: StudyPlan
  module: IeltsModule
  /** Skills ordered weakest first. */
  weakest: Skill[]
  catalog: CatalogItem[]
  lessons: LessonMeta[]
  /** Content ids already attempted (before this day), to prefer fresh material. */
  attempted: Set<string>
  hasDiagnostic: boolean
  hasMocks: boolean
}

/** A repeating rotation in which the weakest skill appears most often (4:3:2:1). */
function skillRotation(weakest: Skill[]): Skill[] {
  const order = weakest.length === 4 ? weakest : SKILLS
  const weights = [4, 3, 2, 1]
  const slots: Skill[] = []
  // Interleave so the same skill isn't scheduled on consecutive days more than needed.
  for (let round = 0; round < 4; round++)
    order.forEach((s, i) => round < weights[i]! && slots.push(s))
  return slots
}

const PRACTICE_MINUTES: Record<Skill, number> = {
  listening: 10,
  reading: 20,
  writing: 40,
  speaking: 15,
}

function practiceFor(
  inputs: PlanInputs,
  skill: Skill,
  day: number,
  timed: boolean,
): PlanTask | null {
  const items = inputs.catalog.filter(
    (c) =>
      c.skill === skill &&
      c.use === 'practice' &&
      (c.module === 'both' || c.module === inputs.module),
  )
  if (items.length === 0) return null
  // Fresh items first, in a stable order; cycle through by day.
  const fresh = items.filter((c) => !inputs.attempted.has(c.id))
  const pool = fresh.length ? fresh : items
  const item = pool[day % pool.length]!
  return {
    key: `p:${item.id}`,
    kind: 'practice',
    id: item.id,
    skill,
    title: `${timed ? 'Timed: ' : ''}${item.title}`,
    minutes:
      skill === 'writing'
        ? item.section === 'task1'
          ? 20
          : 40
        : Math.round(Math.max(item.minutes, PRACTICE_MINUTES[skill] / 2)),
    to: `/ielts/${skill}/${item.id}${timed ? '?mode=exam' : ''}`,
    timed,
  }
}

/** The tasks for one day of the plan. */
export function planDay(
  inputs: PlanInputs,
  day: number,
  lessonsDone: Record<string, number>,
): PlanTask[] {
  const { plan } = inputs
  const budget = plan.dailyMinutes
  const stage = stageOf(plan, day)
  const tasks: PlanTask[] = []
  let used = 0
  const add = (t: PlanTask | null) => {
    if (!t || tasks.some((x) => x.key === t.key)) return
    tasks.push(t)
    used += t.minutes
  }
  const rotation = skillRotation(inputs.weakest)
  const skillToday = rotation[day % rotation.length]!
  const secondSkill = rotation[(day + 3) % rotation.length]!

  if (day === 0 && !inputs.hasDiagnostic)
    add({
      key: 'diagnostic',
      kind: 'diagnostic',
      title: 'Placement diagnostic',
      minutes: 45,
      to: '/ielts/diagnostic',
    })

  if (stage === 1) {
    // Two strategy lessons a day, weakest skill first, in each skill's teaching order.
    const order = inputs.weakest.length ? inputs.weakest : SKILLS
    const pending = [...inputs.lessons]
      .filter((l) => l.module === 'both' || l.module === inputs.module)
      .sort((a, b) => order.indexOf(a.skill) - order.indexOf(b.skill) || a.order - b.order)
      .filter((l) => !lessonsDone[l.id])
    for (const l of pending.slice(0, 2))
      if (used + l.minutes <= budget || tasks.length === 0)
        add({
          key: `l:${l.id}`,
          kind: 'lesson',
          id: l.id,
          skill: l.skill,
          title: l.title,
          minutes: l.minutes,
          to: `/ielts/lessons/${l.id}`,
        })
    if (used < budget) add(practiceFor(inputs, skillToday, day, false))
    if (day % 3 === 1 && used + 10 <= budget)
      add({
        key: 'dictation',
        kind: 'dictation',
        title: 'Dictation trainer: names and numbers',
        minutes: 10,
        to: '/ielts/drills/dictation',
      })
  }

  if (stage === 2) {
    add({
      key: 'vocab',
      kind: 'vocab',
      title: 'Vocabulary review',
      minutes: 10,
      to: '/ielts/vocab',
    })
    add(practiceFor(inputs, skillToday, day, true))
    if (used + PRACTICE_MINUTES[secondSkill] <= budget)
      add(practiceFor(inputs, secondSkill, day + 1, false))
    if (day % 4 === 0 && used + 10 <= budget)
      add({
        key: 'errors',
        kind: 'errors',
        title: 'Review your error log',
        minutes: 10,
        to: '/ielts/errors',
      })
  }

  if (stage === 3) {
    const mockDay = (day - Math.ceil(planLengthDays(plan) * 0.625)) % 5 === 0
    if (mockDay && inputs.hasMocks)
      add({
        key: 'mock',
        kind: 'mock',
        title: 'Full mock test (about 2 h 45 min)',
        minutes: 165,
        to: '/ielts/mock',
      })
    else {
      add({
        key: 'errors',
        kind: 'errors',
        title: 'Fix your weaknesses (error log)',
        minutes: 15,
        to: '/ielts/errors',
      })
      add(practiceFor(inputs, skillToday, day, true))
      if (used + 10 <= budget)
        add({
          key: 'vocab',
          kind: 'vocab',
          title: 'Vocabulary review',
          minutes: 10,
          to: '/ielts/vocab',
        })
    }
  }

  // Fill any remaining time with the weakest skill.
  if (used + 10 <= budget) add(practiceFor(inputs, inputs.weakest[0] ?? skillToday, day + 7, false))
  return tasks
}

/** Has this task been done on that day (ticked by hand, or done in the app)? */
export function isTaskDone(task: PlanTask, day: number, plan: StudyPlan, p: IeltsProfile): boolean {
  if (plan.done[`${day}:${task.key}`]) return true
  const from = dayDate(plan, day)
  const to = dayDate(plan, day + 1)
  const attempts = Object.values(p.attempts).filter(
    (a) => a.finishedAt >= from && a.finishedAt < to,
  )
  switch (task.kind) {
    case 'lesson':
      return !!p.lessonsDone[task.id]
    case 'practice':
      return attempts.some((a) => a.contentId === task.id)
    case 'diagnostic':
      return Object.values(p.attempts).some((a) => a.kind === 'diagnostic')
    case 'mock':
      return attempts.some((a) => a.kind === 'mock')
    case 'dictation':
      return attempts.some((a) => a.contentId.startsWith('dictation-'))
    case 'vocab':
      return Object.values(p.srs).some((c) => c.last !== null && c.last >= from && c.last < to)
    case 'errors':
      return Object.values(p.errors).some(
        (e) => e.resolvedAt !== null && e.resolvedAt >= from && e.resolvedAt < to,
      )
  }
}
