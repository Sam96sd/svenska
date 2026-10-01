import { Search } from 'lucide-react'
import { useDeferredValue, useMemo, useState } from 'react'
import { PageSpinner } from '../../app/PageSpinner'
import { Segmented } from '../../components/Segmented'
import { SpeakButtons } from '../../components/Speak'
import { cx } from '../../components/styles'
import { Card, PageHeader } from '../../components/ui'
import { units } from '../../content/course'
import { formsLine, POS_LABEL, svDisplay } from '../../content/display'
import { useCourseData } from '../../content/useCourse'
import { normalize, stripAccents } from '../../lib/answer'
import { cardId } from '../../lib/learning'
import { isMature } from '../../lib/srs'
import { useProfile } from '../../lib/storage/hooks'
import { GenderBadge } from '../lesson/views'

type Scope = 'mine' | 'weak' | 'all'

const fold = (s: string) => stripAccents(normalize(s, 'en'))

export default function DictionaryPage() {
  const profile = useProfile()
  const course = useCourseData()
  const [scope, setScope] = useState<Scope>('mine')
  const [unitId, setUnitId] = useState('')
  const [query, setQuery] = useState('')
  const q = useDeferredValue(query)

  const results = useMemo(() => {
    if (!course) return []
    const needle = fold(q)
    return course.vocab.filter((w) => {
      if (scope === 'mine' && !profile.srs[cardId(w.id)]) return false
      if (scope === 'weak' && !profile.mistakes[w.id]) return false
      if (unitId && w.unitId !== unitId) return false
      if (!needle) return true
      return [w.sv, svDisplay(w), w.en, ...Object.values(w.forms ?? {})].some((s) =>
        fold(s).includes(needle),
      )
    })
  }, [course, q, scope, unitId, profile])

  const learned = course ? course.vocab.filter((w) => profile.srs[cardId(w.id)]).length : 0

  return (
    <div className="animate-fade-up">
      <PageHeader
        title="Words"
        subtitle={
          course ? `${learned} of ${course.vocab.length} course words learned` : 'Your dictionary'
        }
      />

      <div className="mb-5 grid grid-cols-1 gap-4">
        <label className="relative block">
          <span className="sr-only">Search words</span>
          <Search
            className="text-muted pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
            size={20}
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search in Swedish or English"
            className="border-line bg-surface focus:border-primary h-12 w-full rounded-2xl border pr-4 pl-12 text-base outline-none"
          />
        </label>
        <div className="flex flex-wrap items-end gap-4">
          <Segmented<Scope>
            label="Show"
            value={scope}
            onChange={setScope}
            options={[
              { value: 'mine', label: 'My words' },
              { value: 'weak', label: 'Weak' },
              { value: 'all', label: 'All' },
            ]}
          />
          <label className="grid gap-2">
            <span className="text-sm font-semibold">Unit</span>
            <select
              value={unitId}
              onChange={(e) => setUnitId(e.target.value)}
              className="border-line bg-surface h-12 rounded-2xl border px-3 text-sm font-semibold"
            >
              <option value="">All units</option>
              {units.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.number}. {u.title}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {!course ? (
        <PageSpinner />
      ) : results.length === 0 ? (
        <Card className="text-muted text-center">
          {scope === 'mine' && learned === 0
            ? 'Words you learn in lessons will appear here.'
            : scope === 'weak'
              ? 'No weak words here. Nice!'
              : 'No words match your search.'}
        </Card>
      ) : (
        <>
          <p className="text-muted mb-2 text-sm" aria-live="polite">
            {results.length} {results.length === 1 ? 'word' : 'words'}
          </p>
          <ul className="bg-surface border-line rounded-card divide-line divide-y border">
            {results.map((w) => {
              const card = profile.srs[cardId(w.id)]
              const forms = formsLine(w)
              return (
                <li
                  key={w.id}
                  className={cx(
                    'flex items-start gap-3 px-4 py-3',
                    !card && scope === 'all' && 'opacity-60',
                  )}
                >
                  <SpeakButtons text={svDisplay(w)} size="sm" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span lang="sv" className="text-lg font-semibold">
                        {svDisplay(w)}
                      </span>
                      {w.gender ? (
                        <GenderBadge gender={w.gender} />
                      ) : (
                        <span className="text-muted text-xs">{POS_LABEL[w.pos]}</span>
                      )}
                    </div>
                    <p>{w.en}</p>
                    {forms && (
                      <p lang="sv" className="text-muted text-sm">
                        {forms}
                      </p>
                    )}
                  </div>
                  <Strength
                    learned={!!card}
                    mature={card ? isMature(card) : false}
                    weak={!!profile.mistakes[w.id]}
                  />
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}

function Strength({ learned, mature, weak }: { learned: boolean; mature: boolean; weak: boolean }) {
  const label = !learned ? 'Not learned yet' : weak ? 'Weak' : mature ? 'Strong' : 'Learning'
  const tone = !learned
    ? 'bg-surface-2 text-muted'
    : weak
      ? 'bg-danger-soft text-danger'
      : mature
        ? 'bg-success-soft text-success'
        : 'bg-primary-soft text-primary'
  return (
    <span className={cx('shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold', tone)}>
      {label}
    </span>
  )
}
