import { CalendarClock, Dumbbell, Layers, PartyPopper, TriangleAlert } from 'lucide-react'
import { Link } from 'react-router'
import { SpeakButtons } from '../../components/Speak'
import { buttonClass } from '../../components/styles'
import { Card, PageHeader } from '../../components/ui'
import { svDisplay } from '../../content/display'
import { useCourseData } from '../../content/useCourse'
import { addDays } from '../../lib/dates'
import { cardId, dueCardIds, weakVocabIds } from '../../lib/learning'
import { useProfile } from '../../lib/storage/hooks'
import { useNow } from '../../lib/useNow'

export default function ReviewPage() {
  const profile = useProfile()
  const course = useCourseData()
  const now = useNow()
  const due = dueCardIds(profile, now).length
  const deck = Object.keys(profile.srs).length
  const weak = weakVocabIds(profile)
  const cards = Object.values(profile.srs)
  const tomorrowEnd = addDays(now, 2)
  const weekEnd = addDays(now, 8)
  const dueTomorrow = cards.filter((c) => c.due > now && c.due < tomorrowEnd).length
  const dueWeek = cards.filter((c) => c.due > now && c.due < weekEnd).length
  const nextDue = cards.filter((c) => c.due > now).sort((a, b) => a.due - b.due)[0]?.due

  return (
    <div className="animate-fade-up">
      <PageHeader title="Review" subtitle="A few minutes a day keeps every word fresh." />

      <section className="mb-6 grid grid-cols-3 gap-3">
        <Stat label="due now" value={due} highlight={due > 0} />
        <Stat label="in your deck" value={deck} />
        <Stat label="weak words" value={weak.length} />
      </section>

      {deck === 0 ? (
        <Card className="text-center">
          <Layers className="text-primary mx-auto mb-3" size={36} aria-hidden="true" />
          <h2 className="text-lg font-semibold">Your review deck is empty</h2>
          <p className="text-muted mt-1 mb-4">Finish a lesson and its words will show up here.</p>
          <Link to="/" className={buttonClass('primary')}>
            Go to lessons
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {due > 0 ? (
            <Card className="bg-primary-soft border-transparent">
              <h2 className="text-lg font-semibold">
                {due} {due === 1 ? 'word is' : 'words are'} ready for review
              </h2>
              <p className="text-muted mt-1 mb-4">
                Flip through flashcards, or practise them as exercises.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/review/cards"
                  className={buttonClass('primary', 'lg')}
                  data-testid="start-review"
                >
                  <Layers size={20} /> Flashcards
                </Link>
                <Link to="/review/practice" className={buttonClass('secondary', 'lg')}>
                  <Dumbbell size={20} /> Mixed practice
                </Link>
              </div>
            </Card>
          ) : (
            <Card>
              <div className="flex items-start gap-3">
                <PartyPopper className="text-accent-ink shrink-0" size={28} aria-hidden="true" />
                <div>
                  <h2 className="text-lg font-semibold">All caught up!</h2>
                  <p className="text-muted mt-1">
                    {nextDue ? `Next review ${relative(nextDue, now)}.` : 'Nothing scheduled.'} Want
                    to keep going anyway?
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link to="/review/cards?set=all" className={buttonClass('secondary')}>
                      <Layers size={18} /> Flashcards
                    </Link>
                    <Link to="/review/practice?set=all" className={buttonClass('secondary')}>
                      <Dumbbell size={18} /> Mixed practice
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          )}

          <Card>
            <div className="flex items-center gap-3">
              <CalendarClock className="text-primary" size={22} aria-hidden="true" />
              <p>
                <span className="font-semibold">{dueTomorrow}</span> due by tomorrow ·{' '}
                <span className="font-semibold">{dueWeek}</span> in the next 7 days
              </p>
            </div>
          </Card>

          <Card>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <TriangleAlert className="text-accent-ink" size={20} aria-hidden="true" /> Weak
                words
              </h2>
              {weak.length > 0 && (
                <Link to="/review/practice?set=weak" className={buttonClass('secondary', 'sm')}>
                  <Dumbbell size={16} /> Practise these
                </Link>
              )}
            </div>
            {weak.length === 0 ? (
              <p className="text-muted">
                No weak words right now. Words you get wrong will show up here.
              </p>
            ) : !course ? (
              <p className="text-muted">Loading…</p>
            ) : (
              <ul className="divide-line divide-y">
                {weak.slice(0, 15).map((id) => {
                  const w = course.byId.get(id)
                  if (!w) return null
                  const card = profile.srs[cardId(id)]
                  return (
                    <li key={id} className="flex items-center gap-3 py-2.5">
                      <SpeakButtons text={svDisplay(w)} size="sm" slow={false} />
                      <span className="min-w-0 flex-1">
                        <span lang="sv" className="block font-semibold">
                          {svDisplay(w)}
                        </span>
                        <span className="text-muted block truncate text-sm">{w.en}</span>
                      </span>
                      <span className="text-muted shrink-0 text-xs">
                        {profile.mistakes[id]?.count ?? 0}× missed
                        {card && card.due <= now ? ' · due' : ''}
                      </span>
                    </li>
                  )
                })}
              </ul>
            )}
          </Card>
        </div>
      )}
    </div>
  )
}

function Stat({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <Card className={highlight ? 'border-primary p-4 text-center' : 'p-4 text-center'}>
      <p
        className={highlight ? 'text-primary text-3xl font-bold' : 'text-3xl font-bold'}
        data-testid={`review-${label.replace(/\s/g, '-')}`}
      >
        {value}
      </p>
      <p className="text-muted text-sm">{label}</p>
    </Card>
  )
}

function relative(time: number, now: number): string {
  const mins = Math.round((time - now) / 60000)
  if (mins < 60) return `in ${Math.max(1, mins)} min`
  const hours = Math.round(mins / 60)
  if (hours < 24) return `in ${hours} h`
  const days = Math.round(hours / 24)
  return days === 1 ? 'tomorrow' : `in ${days} days`
}
