import { ArrowLeft, Check, Lock, Play } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router'
import { cx } from '../../components/styles'
import { ProgressBar } from '../../components/ui'
import { findUnit } from '../../content/course'
import { lessonStatus, unitDoneCount, unitStatus } from '../../lib/courseProgress'
import { useProfile } from '../../lib/storage/hooks'

const KIND_LABEL = { lesson: null, sounds: 'Sounds', culture: 'Culture', review: 'Review' } as const

export default function UnitPage() {
  const { unitId = '' } = useParams()
  const profile = useProfile()
  const unit = findUnit(unitId)
  if (!unit) return <Navigate to="/" replace />

  const status = unitStatus(unit, profile)
  const done = unitDoneCount(unit, profile)

  return (
    <div className="animate-fade-up">
      <Link
        to="/"
        className="text-muted hover:text-ink mb-4 inline-flex items-center gap-1 text-sm font-semibold"
      >
        <ArrowLeft size={16} /> All units
      </Link>
      <header className="mb-6 flex items-start gap-4">
        <span
          className="bg-primary-soft flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl"
          aria-hidden="true"
        >
          {unit.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-muted text-sm font-semibold">
            Unit {unit.number} · {unit.cefr}
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight">{unit.title}</h1>
          <p lang="sv" className="text-primary font-medium">
            {unit.titleSv}
          </p>
          <p className="text-muted mt-2">{unit.description}</p>
          <ProgressBar
            value={done / unit.lessons.length}
            label="Unit progress"
            className="mt-4 max-w-xs"
            tone="success"
          />
          <p className="text-muted mt-1 text-xs">
            {done} of {unit.lessons.length} lessons done
          </p>
        </div>
      </header>

      {status === 'locked' && (
        <div className="bg-accent-soft mb-6 rounded-2xl p-4 text-sm">
          This unit unlocks when you finish the previous one.{' '}
          <Link to={`/placement/${unit.id}`} className="text-accent-ink font-semibold underline">
            Already know this? Take a quick test to skip ahead.
          </Link>
        </div>
      )}

      <ol className="grid grid-cols-1 gap-3">
        {unit.lessons.map((lesson, i) => {
          const s = lessonStatus(unit, i, profile)
          const kind = KIND_LABEL[lesson.kind]
          const body = (
            <>
              <span
                className={cx(
                  'flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold',
                  s === 'completed' && 'bg-success dark:text-bg text-white',
                  s === 'available' && 'bg-primary text-on-primary',
                  s === 'locked' && 'bg-surface-2 text-muted',
                )}
              >
                {s === 'completed' ? (
                  <Check size={22} />
                ) : s === 'locked' ? (
                  <Lock size={18} />
                ) : (
                  <Play size={20} className="ml-0.5" />
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-lg font-semibold">{lesson.title}</span>
                  {kind && (
                    <span className="bg-accent-soft text-accent-ink rounded-full px-2 py-0.5 text-xs font-bold">
                      {kind}
                    </span>
                  )}
                </span>
                {lesson.titleSv && (
                  <span lang="sv" className="text-primary block text-sm font-medium">
                    {lesson.titleSv}
                  </span>
                )}
                <span className="text-muted block text-sm">{lesson.goal}</span>
              </span>
            </>
          )
          return (
            <li key={lesson.id}>
              {s === 'locked' ? (
                <div
                  className="bg-surface/60 border-line flex items-center gap-4 rounded-2xl border p-4 opacity-70"
                  aria-disabled="true"
                >
                  {body}
                  <span className="sr-only">Locked</span>
                </div>
              ) : (
                <Link
                  to={`/lesson/${lesson.id}`}
                  className={cx(
                    'bg-surface flex items-center gap-4 rounded-2xl border p-4 transition-all hover:-translate-y-0.5 hover:shadow-md',
                    s === 'available' ? 'border-primary/50 ring-primary/10 ring-4' : 'border-line',
                  )}
                >
                  {body}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
