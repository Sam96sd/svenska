import { Flame, Star, Target } from 'lucide-react'
import { Card, ProgressBar } from '../../components/ui'
import { currentStreak, dailyGoalXp, levelInfo, xpToday } from '../../lib/progress'
import { useProfile } from '../../lib/storage/hooks'

export default function HomePage() {
  const profile = useProfile()
  const today = xpToday(profile)
  const goal = dailyGoalXp(profile)
  const streak = currentStreak(profile)
  const level = levelInfo(profile.xp)

  return (
    <div className="animate-fade-up grid gap-6">
      <section>
        <p className="text-muted text-sm font-semibold tracking-wide uppercase">{greeting()}</p>
        <h1 className="font-display mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Hej, {profile.name}!
        </h1>
      </section>

      <section aria-label="Today" className="grid gap-3 sm:grid-cols-3">
        <Card className="flex items-center gap-4">
          <Flame className="text-accent-ink" size={28} aria-hidden="true" />
          <div>
            <p className="text-2xl font-bold">{streak}</p>
            <p className="text-muted text-sm">day streak</p>
          </div>
        </Card>
        <Card>
          <div className="mb-3 flex items-center gap-3">
            <Target className="text-primary" size={24} aria-hidden="true" />
            <p>
              <span className="text-2xl font-bold">{today}</span>
              <span className="text-muted text-sm"> / {goal} XP today</span>
            </p>
          </div>
          <ProgressBar value={today / goal} label="Daily goal progress" tone="accent" />
        </Card>
        <Card>
          <div className="mb-3 flex items-center gap-3">
            <Star className="text-primary" size={24} aria-hidden="true" />
            <p>
              <span className="text-2xl font-bold">Level {level.level}</span>
              <span className="text-muted text-sm"> · {profile.xp} XP</span>
            </p>
          </div>
          <ProgressBar value={level.progress} label="Level progress" />
        </Card>
      </section>

      <Card className="bg-primary-soft border-transparent">
        <h2 className="text-lg font-semibold">Lessons are on the way</h2>
        <p className="text-muted mt-1">
          The course is being built. Soon you'll find 11 units here, from the Swedish sounds to
          getting around Sweden.
        </p>
      </Card>
    </div>
  )
}

function greeting(hour = new Date().getHours()): string {
  if (hour < 11) return 'God morgon · Good morning'
  if (hour < 18) return 'Hej hej · Hello'
  return 'God kväll · Good evening'
}
