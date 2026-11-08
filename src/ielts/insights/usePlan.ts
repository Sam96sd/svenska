import { useMemo } from 'react'
import { startOfDay } from '../../lib/dates'
import { useNow } from '../../lib/useNow'
import { CATALOG, LESSONS } from '../content/catalog'
import { mocksFor } from '../content/mocks'
import { type IeltsProfile } from '../storage/schema'
import { dayDate, planDay, planDayIndex, stageOf, type PlanInputs, type PlanTask } from './plan'
import { weakestSkills } from './stats'

export interface PlanDayView {
  day: number
  date: number
  stage: ReturnType<typeof stageOf>
  tasks: PlanTask[]
}

/** Tasks for today and the next few days of the learner's plan (null without a plan). */
export function usePlanDays(p: IeltsProfile, count = 1): PlanDayView[] | null {
  // Refreshes once a minute, so the plan moves on to the next day at midnight.
  const today = startOfDay(useNow())
  return useMemo(() => {
    const plan = p.plan
    if (!plan) return null
    const module = p.settings.module ?? 'academic'
    const start = planDayIndex(plan, today)
    const attempts = Object.values(p.attempts)
    const inputs = (day: number): PlanInputs => {
      const dayStart = dayDate(plan, day)
      return {
        plan,
        module,
        weakest: weakestSkills(p),
        catalog: CATALOG,
        lessons: LESSONS,
        attempted: new Set(attempts.filter((a) => a.finishedAt < dayStart).map((a) => a.contentId)),
        hasDiagnostic: attempts.some((a) => a.kind === 'diagnostic'),
        hasMocks: mocksFor(module).length > 0,
      }
    }
    // Lessons done before today stay done; for the days ahead, assume the lessons scheduled on
    // earlier days get done, so the preview moves on through the course.
    const assumed: Record<string, number> = Object.fromEntries(
      Object.entries(p.lessonsDone).filter(([, at]) => at < dayDate(plan, Math.max(0, start))),
    )
    return Array.from({ length: count }, (_, i) => {
      const day = Math.max(0, start + i)
      const tasks = planDay(inputs(day), day, { ...assumed })
      for (const t of tasks) if (t.kind === 'lesson') assumed[t.id] = dayDate(plan, day)
      return { day, date: dayDate(plan, day), stage: stageOf(plan, day), tasks }
    })
  }, [p, today, count])
}
