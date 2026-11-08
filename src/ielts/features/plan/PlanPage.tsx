import { RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { Segmented } from '../../../components/Segmented'
import { Button, Card, PageHeader, ProgressBar } from '../../../components/ui'
import { planLengthDays, STAGE_LABEL } from '../../insights/plan'
import { usePlanDays } from '../../insights/usePlan'
import { weakestSkills } from '../../insights/stats'
import { SKILL_LABEL } from '../../examSpec'
import { Notice } from '../../components/ui'
import { startPlan, updatePlan } from '../../storage/actions'
import { useIelts } from '../../storage/hooks'
import { TodayTasks } from './TodayTasks'

const WEEKS = [4, 6, 8, 10, 12]
const MINUTES = [30, 45, 60, 90]

export default function PlanPage() {
  const { profileId, ielts } = useIelts()
  const days = usePlanDays(ielts, 7)
  const [weeks, setWeeks] = useState(ielts.plan?.weeks ?? 8)
  const [minutes, setMinutes] = useState(ielts.plan?.dailyMinutes ?? 45)
  const weakest = weakestSkills(ielts)
  const plan = ielts.plan

  if (!plan || !days)
    return (
      <div className="animate-fade-up mx-auto max-w-2xl">
        <PageHeader title="Your study plan" subtitle="Self-paced: no exam date needed" />
        <Card className="grid gap-5">
          <p>
            The plan runs in three stages: first <strong>diagnose and learn the strategy</strong>{' '}
            for every question type, then <strong>build skills</strong> with daily vocabulary and
            timed sections, then <strong>full mocks and error-log review</strong>. Your weakest
            skill gets the most practice.
          </p>
          <Segmented<number>
            label="Length"
            value={weeks}
            onChange={setWeeks}
            options={WEEKS.map((w) => ({ value: w, label: `${w} weeks` }))}
          />
          <Segmented<number>
            label="Time per day"
            value={minutes}
            onChange={setMinutes}
            options={MINUTES.map((m) => ({ value: m, label: `${m} min` }))}
          />
          <Button size="lg" onClick={() => startPlan(profileId, weeks, minutes)}>
            Start my plan today
          </Button>
        </Card>
      </div>
    )

  const today = days[0]!
  const length = planLengthDays(plan)
  const finished = today.day >= length

  return (
    <div className="animate-fade-up">
      <PageHeader
        title="Your study plan"
        subtitle={
          finished
            ? 'Plan complete — keep going with mocks and your error log'
            : `Week ${Math.floor(today.day / 7) + 1} of ${plan.weeks} · ${STAGE_LABEL[today.stage]}`
        }
      />
      <div className="grid gap-5">
        <ProgressBar value={Math.min(1, today.day / length)} label="Plan progress" />
        <p className="text-muted text-sm">
          Focus order (weakest first): {weakest.map((s) => SKILL_LABEL[s]).join(' → ')}
        </p>
        <Card className="grid gap-3">
          <h2 className="text-lg font-semibold">Today</h2>
          <TodayTasks profileId={profileId} ielts={ielts} view={today} />
        </Card>
        <Card className="grid gap-3">
          <h2 className="text-lg font-semibold">The next few days</h2>
          <ol className="grid gap-3">
            {days.slice(1).map((d) => (
              <li key={d.day} className="text-sm">
                <p className="font-semibold">
                  {new Date(d.date).toLocaleDateString(undefined, {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'short',
                  })}
                </p>
                <p className="text-muted">{d.tasks.map((t) => t.title).join(' · ')}</p>
              </li>
            ))}
          </ol>
        </Card>
        <Card className="grid gap-4">
          <h2 className="text-lg font-semibold">Adjust the plan</h2>
          <Segmented<number>
            label="Length"
            value={plan.weeks}
            onChange={(w) => updatePlan(profileId, { weeks: w })}
            options={WEEKS.map((w) => ({ value: w, label: `${w} weeks` }))}
          />
          <Segmented<number>
            label="Time per day"
            value={plan.dailyMinutes}
            onChange={(m) => updatePlan(profileId, { dailyMinutes: m })}
            options={MINUTES.map((m) => ({ value: m, label: `${m} min` }))}
          />
          <Notice>
            Your weakest skill is worked out again every day from your latest results.
          </Notice>
          <Button
            variant="ghost"
            className="justify-self-start"
            onClick={() =>
              confirm('Restart the plan from today? Ticked tasks are cleared.') &&
              startPlan(profileId, plan.weeks, plan.dailyMinutes)
            }
          >
            <RotateCcw size={18} /> Restart from today
          </Button>
        </Card>
      </div>
    </div>
  )
}
