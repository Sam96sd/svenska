import { ArrowRight, Check, Flame, Layers, Lock, Star, Target } from 'lucide-react'
import { type ReactNode } from 'react'
import { Link } from 'react-router'
import { cx } from '../../components/styles'
import { Avatar, Card, ProgressBar } from '../../components/ui'
import { VoiceBanner } from '../../components/VoiceBanner'
import { units } from '../../content/course'
import { BADGES, earnedBadgeIds } from '../../lib/badges'
import { courseProgress, nextUp, unitDoneCount, unitStatus } from '../../lib/courseProgress'
import { weekDayKeys } from '../../lib/dates'
import { dueCardIds } from '../../lib/learning'
import { currentStreak, dailyGoalXp, levelInfo, xpToday } from '../../lib/progress'
import { updateSettings } from '../../lib/storage/actions'
import { useProfile, useProfiles } from '../../lib/storage/hooks'
import { type Profile } from '../../lib/storage/schema'

export default function HomePage() {
  const profile = useProfile()
  const today = xpToday(profile)
  const goal = dailyGoalXp(profile)
  const streak = currentStreak(profile)
  const level = levelInfo(profile.xp)
  const due = dueCardIds(profile).length
  const next = nextUp(profile)
  const course = courseProgress(profile)

  return (
    <div className="animate-fade-up grid grid-cols-1 gap-6">
      <section>
        <p className="text-muted text-sm font-semibold tracking-wide uppercase">{greeting()}</p>
        <h1 className="font-display mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
          Hej, {profile.name}!
        </h1>
      </section>

      <VoiceBanner />

      {next && (
        <Link
          to={`/lesson/${next.lesson.id}`}
          className="bg-primary text-on-primary group rounded-card flex items-center gap-4 p-5 shadow-sm transition-transform hover:-translate-y-0.5 sm:p-6"
          data-testid="continue-lesson"
        >
          <span
            className="bg-on-primary/15 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-3xl"
            aria-hidden="true"
          >
            {next.unit.emoji}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold opacity-80">
              {course.done === 0 ? 'Start here' : 'Continue'} · Unit {next.unit.number}, lesson{' '}
              {next.index + 1}
            </span>
            <span className="block truncate text-xl font-semibold">{next.lesson.title}</span>
          </span>
          <ArrowRight
            className="shrink-0 transition-transform group-hover:translate-x-1"
            size={24}
            aria-hidden="true"
          />
        </Link>
      )}

      <section aria-label="Your progress" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat
          icon={<Flame className="text-accent-ink" size={22} />}
          value={streak}
          label="day streak"
        />
        <Card className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <Target className="text-primary" size={22} aria-hidden="true" />
            <p>
              <span className="text-2xl font-bold" data-testid="xp-today">
                {today}
              </span>
              <span className="text-muted text-sm"> / {goal} XP</span>
            </p>
          </div>
          <ProgressBar value={today / goal} label="Daily goal" tone="accent" />
          <p className="text-muted mt-1 text-xs">{today >= goal ? 'Goal reached 🎉' : 'today'}</p>
        </Card>
        <Card className="p-4">
          <div className="mb-2 flex items-center gap-2">
            <Star className="text-primary" size={22} aria-hidden="true" />
            <p className="text-2xl font-bold">Lvl {level.level}</p>
          </div>
          <ProgressBar value={level.progress} label="Level progress" />
          <p className="text-muted mt-1 text-xs">{profile.xp} XP total</p>
        </Card>
        <Link to="/review" className="group">
          <Card className="group-hover:border-primary h-full p-4 transition-colors">
            <div className="flex items-center gap-2">
              <Layers className="text-primary" size={22} aria-hidden="true" />
              <p className="text-2xl font-bold" data-testid="due-count">
                {due}
              </p>
            </div>
            <p className="text-muted text-sm">{due === 1 ? 'review due' : 'reviews due'}</p>
          </Card>
        </Link>
      </section>

      {profile.settings.showCouple && <ThisWeek profile={profile} />}

      <section aria-labelledby="units-heading">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 id="units-heading" className="text-xl font-semibold">
            Course
          </h2>
          <p className="text-muted text-sm">
            {course.done} / {course.total} lessons
          </p>
        </div>
        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {units.map((u) => {
            const s = unitStatus(u, profile)
            const done = unitDoneCount(u, profile)
            return (
              <li key={u.id}>
                <Link
                  to={`/unit/${u.id}`}
                  className={cx(
                    'bg-surface border-line rounded-card flex h-full items-center gap-4 border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md',
                    s === 'locked' && 'opacity-65',
                  )}
                >
                  <span
                    className={cx(
                      'relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl',
                      s === 'completed'
                        ? 'bg-success-soft'
                        : s === 'available'
                          ? 'bg-primary-soft'
                          : 'bg-surface-2 grayscale',
                    )}
                    aria-hidden="true"
                  >
                    {u.emoji}
                    {s !== 'available' && (
                      <span
                        className={cx(
                          'absolute -right-1 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--color-surface)]',
                          s === 'completed' ? 'bg-success text-white' : 'bg-surface-2 text-muted',
                        )}
                      >
                        {s === 'completed' ? <Check size={14} /> : <Lock size={12} />}
                      </span>
                    )}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="text-muted block text-xs font-semibold">
                      Unit {u.number} · {u.cefr}
                      {s === 'locked' && <span className="sr-only"> (locked)</span>}
                    </span>
                    <span className="block font-semibold">{u.title}</span>
                    <ProgressBar
                      value={done / u.lessons.length}
                      label={`${u.title} progress`}
                      className="mt-2 h-1.5"
                      tone="success"
                    />
                  </span>
                </Link>
              </li>
            )
          })}
        </ol>
      </section>

      <Badges profile={profile} />
    </div>
  )
}

function Stat({ icon, value, label }: { icon: ReactNode; value: number; label: string }) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2">
        <span aria-hidden="true">{icon}</span>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <p className="text-muted text-sm">{label}</p>
    </Card>
  )
}

function Badges({ profile }: { profile: Profile }) {
  const earned = new Set(earnedBadgeIds(profile))
  return (
    <Card>
      <div className="mb-4 flex items-baseline justify-between">
        <h2 className="text-lg font-semibold">Badges</h2>
        <p className="text-muted text-sm">
          {earned.size} of {BADGES.length}
        </p>
      </div>
      <ul className="grid grid-cols-4 gap-3 sm:grid-cols-7">
        {BADGES.map((b) => {
          const has = earned.has(b.id)
          return (
            <li key={b.id} className="text-center" title={b.description}>
              <span
                className={cx(
                  'mx-auto flex h-12 w-12 items-center justify-center rounded-full text-2xl',
                  has ? 'bg-accent-soft' : 'bg-surface-2 opacity-40 grayscale',
                )}
                aria-hidden="true"
              >
                {b.emoji}
              </span>
              <span
                className={cx(
                  'mt-1 block text-[11px] leading-tight font-semibold',
                  !has && 'text-muted',
                )}
              >
                {b.title}
              </span>
              <span className="sr-only">
                {has ? 'Earned' : 'Not earned yet'}: {b.description}
              </span>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

function weekXp(p: Profile, days: string[]): number {
  return days.reduce((sum, d) => sum + (p.xpByDay[d] ?? 0), 0)
}

/** Friendly weekly XP comparison between the learners on this device. */
function ThisWeek({ profile }: { profile: Profile }) {
  const profiles = useProfiles()
  if (profiles.length < 2) return null
  const days = weekDayKeys()
  const rows = profiles.map((p) => ({ p, xp: weekXp(p, days) })).sort((a, b) => b.xp - a.xp)
  const max = Math.max(1, ...rows.map((r) => r.xp))
  const total = rows.reduce((s, r) => s + r.xp, 0)

  return (
    <Card>
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h2 className="text-lg font-semibold">This week</h2>
        <button
          type="button"
          className="text-muted hover:text-ink text-xs font-semibold"
          onClick={() => updateSettings(profile.id, { showCouple: false })}
        >
          Hide
        </button>
      </div>
      <ul className="grid grid-cols-1 gap-3">
        {rows.map(({ p, xp }) => (
          <li key={p.id} className="flex items-center gap-3">
            <Avatar name={p.name} color={p.color} size={32} />
            <span className="w-20 truncate text-sm font-semibold">{p.name}</span>
            <span className="bg-surface-2 h-3 flex-1 overflow-hidden rounded-full">
              <span
                className="block h-full rounded-full transition-[width] duration-500"
                style={{ width: `${(xp / max) * 100}%`, background: p.color }}
              />
            </span>
            <span className="w-16 text-right text-sm tabular-nums">{xp} XP</span>
          </li>
        ))}
      </ul>
      <p className="text-muted mt-3 text-sm">
        {total === 0
          ? 'A fresh week — who starts first?'
          : `Together: ${total} XP. Heja er! (Go, team!)`}
      </p>
    </Card>
  )
}

function greeting(hour = new Date().getHours()): string {
  if (hour < 11) return 'God morgon · Good morning'
  if (hour < 18) return 'Hej hej · Hello'
  return 'God kväll · Good evening'
}
