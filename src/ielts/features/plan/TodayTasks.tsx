import { CheckCircle2, Circle } from 'lucide-react'
import { Link } from 'react-router'
import { cx } from '../../../components/styles'
import { isTaskDone } from '../../insights/plan'
import { type PlanDayView } from '../../insights/usePlan'
import { setPlanTaskDone } from '../../storage/actions'
import { type IeltsProfile } from '../../storage/schema'

/** A day's plan tasks with tick boxes; tasks done in the app tick themselves. */
export function TodayTasks({
  profileId,
  ielts,
  view,
}: {
  profileId: string
  ielts: IeltsProfile
  view: PlanDayView
}) {
  const plan = ielts.plan!
  const total = view.tasks.reduce((n, t) => n + t.minutes, 0)
  return (
    <div className="grid gap-2">
      <p className="text-muted text-sm">About {total} minutes</p>
      <ul className="grid gap-2">
        {view.tasks.map((t) => {
          const done = isTaskDone(t, view.day, plan, ielts)
          return (
            <li key={t.key} className="flex items-center gap-3">
              <button
                type="button"
                aria-pressed={done}
                aria-label={done ? `Mark “${t.title}” as not done` : `Mark “${t.title}” as done`}
                onClick={() => setPlanTaskDone(profileId, view.day, t.key, !done)}
                className={cx('shrink-0', done ? 'text-success' : 'text-muted hover:text-ink')}
              >
                {done ? <CheckCircle2 size={24} /> : <Circle size={24} />}
              </button>
              <Link
                to={t.to}
                className={cx(
                  'border-line hover:border-primary flex min-w-0 flex-1 items-center justify-between gap-3 rounded-2xl border p-3 transition-colors',
                  done && 'opacity-60',
                )}
              >
                <span className="min-w-0">
                  <span className={cx('block font-semibold', done && 'line-through')}>
                    {t.title}
                  </span>
                  <span className="text-muted text-xs capitalize">
                    {t.kind === 'practice' || t.kind === 'lesson'
                      ? `${t.skill} · ${t.kind}`
                      : t.kind}
                  </span>
                </span>
                <span className="text-muted shrink-0 text-sm tabular-nums">{t.minutes} min</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
