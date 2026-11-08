import { CheckCircle2, Wand2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { buttonClass } from '../../../components/styles'
import { Button, Card, PageHeader } from '../../../components/ui'
import { SKILL_LABEL, type Skill } from '../../examSpec'
import { categoryLabel, reasonLabel, remedyFor } from '../../insights/remedy'
import { errorPatterns } from '../../insights/stats'
import { Notice, Pill } from '../../components/ui'
import { resolveError } from '../../storage/actions'
import { useIelts } from '../../storage/hooks'
import { Tabs } from '../shared/AiWidgets'

export default function ErrorLogPage() {
  const { profileId, ielts } = useIelts()
  const module = ielts.settings.module ?? 'academic'
  const [skill, setSkill] = useState<'all' | Skill>('all')
  const [fixing, setFixing] = useState(false)
  const patterns = useMemo(() => errorPatterns(ielts), [ielts])
  const shown = patterns.filter((p) => skill === 'all' || p.skill === skill)
  const top3 = patterns.slice(0, 3)

  return (
    <div className="animate-fade-up">
      <PageHeader title="Error log" subtitle="Every mistake, grouped into patterns you can fix" />
      {patterns.length === 0 ? (
        <Notice>
          No errors logged yet. Wrong answers in practice, and errors the AI finds in your writing
          and speaking, appear here.
        </Notice>
      ) : (
        <div className="grid gap-5">
          <Card className="grid gap-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">Your top 3 patterns</h2>
                <p className="text-muted text-sm">Fix these first: they cost you the most marks.</p>
              </div>
              <Button onClick={() => setFixing((v) => !v)}>
                <Wand2 size={18} /> Fix my weaknesses
              </Button>
            </div>
            <ol className="grid gap-2">
              {top3.map((p, i) => (
                <li key={p.key} className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="bg-primary text-on-primary flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
                    {i + 1}
                  </span>
                  <strong>{categoryLabel(p)}</strong>
                  <Pill tone="accent">{reasonLabel(p.reason)}</Pill>
                  <span className="text-muted">
                    {p.count}× · {SKILL_LABEL[p.skill]}
                  </span>
                </li>
              ))}
            </ol>
            {fixing && (
              <div className="grid gap-3 md:grid-cols-3">
                {top3.map((p) => {
                  const r = remedyFor(p, module)
                  return (
                    <div
                      key={p.key}
                      className="bg-surface-2 grid content-start gap-2 rounded-2xl p-3 text-sm"
                    >
                      <p className="font-semibold">
                        {categoryLabel(p)} · {reasonLabel(p.reason)}
                      </p>
                      {r.lesson && (
                        <Link
                          to={`/ielts/lessons/${r.lesson.id}`}
                          className="text-primary font-semibold underline"
                        >
                          1. Review: {r.lesson.title}
                        </Link>
                      )}
                      {r.practice ? (
                        <Link
                          to={`/ielts/${r.practice.skill}/${r.practice.id}`}
                          className={buttonClass('primary', 'sm')}
                        >
                          {r.lesson ? '2. ' : ''}Drill: {r.practice.title}
                        </Link>
                      ) : (
                        <p className="text-muted">
                          {p.skill === 'writing' || p.skill === 'speaking'
                            ? 'Write or speak again and check these points before you submit.'
                            : 'More drills for this type are coming.'}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </Card>

          <Tabs
            label="Skill"
            value={skill}
            onChange={setSkill}
            tabs={[
              { value: 'all', label: 'All' },
              { value: 'listening', label: 'Listening' },
              { value: 'reading', label: 'Reading' },
              { value: 'writing', label: 'Writing' },
              { value: 'speaking', label: 'Speaking' },
            ]}
          />

          <ul className="grid gap-3">
            {shown.map((p) => (
              <li key={p.key}>
                <Card className="grid gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <strong>{categoryLabel(p)}</strong>
                    <Pill tone="accent">{reasonLabel(p.reason)}</Pill>
                    <span className="text-muted text-sm">
                      {p.count}× · {SKILL_LABEL[p.skill]} · last{' '}
                      {new Date(p.lastAt).toLocaleDateString()}
                    </span>
                  </div>
                  <ul className="grid gap-1 text-sm">
                    {p.examples.slice(0, 4).map((e) => (
                      <li key={e.id} className="flex flex-wrap items-center gap-2">
                        <span>
                          <span className="text-danger">{e.detail || '—'}</span> →{' '}
                          <strong className="text-success">{e.correction}</strong>
                        </span>
                        <button
                          type="button"
                          onClick={() => resolveError(profileId, e.id)}
                          className="text-muted hover:text-success inline-flex items-center gap-1 text-xs"
                        >
                          <CheckCircle2 size={14} aria-hidden="true" /> I’ve got this
                        </button>
                      </li>
                    ))}
                  </ul>
                  {p.count > 4 && <p className="text-muted text-xs">and {p.count - 4} more</p>}
                </Card>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
