import { ArrowLeftRight, RotateCw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { PageSpinner } from '../../app/PageSpinner'
import { SpeakButtons } from '../../components/Speak'
import { buttonClass, cx } from '../../components/styles'
import { Button } from '../../components/ui'
import { formsLine, svDisplay } from '../../content/display'
import { useCourseData, type CourseData } from '../../content/useCourse'
import { isTypingTarget } from '../../exercises/hooks'
import { speak } from '../../lib/audio'
import { vocabIdOfCard } from '../../lib/learning'
import { intervalLabel, isDue, type Rating } from '../../lib/srs'
import { awardXp, recordMistakes, reviewCard } from '../../lib/storage/actions'
import { useProfile } from '../../lib/storage/hooks'
import { GenderBadge } from '../lesson/views'
import { SessionShell } from '../practice/SessionShell'
import { reviewCardIds, type ReviewSet } from './sets'

const RATING_UI: Array<{ rating: Rating; label: string; className: string }> = [
  { rating: 'again', label: 'Again', className: 'bg-danger-soft text-danger border-danger/30' },
  { rating: 'hard', label: 'Hard', className: 'bg-accent-soft text-accent-ink border-accent/40' },
  { rating: 'good', label: 'Good', className: 'bg-success-soft text-success border-success/30' },
  { rating: 'easy', label: 'Easy', className: 'bg-primary-soft text-primary border-primary/30' },
]

export default function FlashcardsPage() {
  const course = useCourseData()
  if (!course) return <PageSpinner />
  return <Flashcards course={course} />
}

function Flashcards({ course }: { course: CourseData }) {
  const profile = useProfile()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const set = (params.get('set') as ReviewSet | null) ?? 'due'
  const [queue, setQueue] = useState<string[]>(() =>
    reviewCardIds(profile, set).filter((id) => course.byId.has(vocabIdOfCard(id))),
  )
  const [total] = useState(queue.length)
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [reverse, setReverse] = useState(false)
  const [reviewed, setReviewed] = useState(0)

  const id = queue[pos]
  const word = id ? course.byId.get(vocabIdOfCard(id)) : undefined
  const card = id ? profile.srs[id] : undefined
  const sv = word ? svDisplay(word) : ''

  // Play the Swedish side when it is visible.
  useEffect(() => {
    if (!word) return
    if (!reverse || flipped) {
      const t = setTimeout(() => speak(sv), 200)
      return () => clearTimeout(t)
    }
  }, [word, sv, reverse, flipped])

  const rate = (rating: Rating) => {
    if (!id || !card) return
    if (isDue(card)) reviewCard(profile.id, id, rating)
    else {
      awardXp(profile.id, 1)
      if (rating === 'again') recordMistakes(profile.id, [vocabIdOfCard(id)])
    }
    setReviewed((n) => n + 1)
    // Cards you forgot come back once more at the end of the session.
    if (rating === 'again' && queue.filter((x) => x === id).length < 2) setQueue((q) => [...q, id])
    setFlipped(false)
    setPos((p) => p + 1)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target) || (e.target as HTMLElement)?.tagName === 'BUTTON') return
      if (!flipped && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault()
        setFlipped(true)
      } else if (flipped) {
        const n = Number(e.key)
        if (n >= 1 && n <= 4) rate(RATING_UI[n - 1]!.rating)
        else if (e.key === ' ') {
          e.preventDefault()
          speak(sv)
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const done = pos >= queue.length
  const progress = queue.length ? pos / queue.length : 1

  return (
    <SessionShell progress={progress} onClose={() => navigate('/review')} closeLabel="Close review">
      {queue.length === 0 ? (
        <Empty />
      ) : done ? (
        <div className="animate-fade-up pt-10 text-center">
          <p className="text-5xl" aria-hidden="true">
            🎉
          </p>
          <h1 className="font-display mt-4 text-4xl font-semibold" lang="sv">
            Klart!
          </h1>
          <p className="text-muted mt-1 text-lg">
            Done! You reviewed {reviewed} {reviewed === 1 ? 'card' : 'cards'} and earned {reviewed}{' '}
            XP.
          </p>
          <Link to="/review" className={cx(buttonClass('primary', 'lg'), 'mt-8')} autoFocus>
            Back to review
          </Link>
        </div>
      ) : word && card ? (
        <div className="pt-4">
          <div className="text-muted mb-4 flex items-center justify-between text-sm">
            <span>
              Card {Math.min(pos + 1, queue.length)} of {queue.length}
              {set !== 'due' && ' · extra practice'}
              {total !== queue.length && ' (with repeats)'}
            </span>
            <button
              type="button"
              onClick={() => {
                setReverse((r) => !r)
                setFlipped(false)
              }}
              className="hover:text-ink flex items-center gap-1.5 font-semibold"
              aria-pressed={reverse}
            >
              <ArrowLeftRight size={16} /> {reverse ? 'English → Swedish' : 'Swedish → English'}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setFlipped(true)}
            disabled={flipped}
            className="bg-surface border-line rounded-card flex min-h-72 w-full flex-col items-center justify-center gap-4 border p-6 text-center shadow-sm transition-transform enabled:hover:-translate-y-0.5"
            aria-label={flipped ? 'Card' : 'Show answer'}
            data-testid="flashcard"
          >
            {!reverse || flipped ? (
              <p lang="sv" className="font-display text-4xl font-semibold">
                {sv}
              </p>
            ) : (
              <p className="font-display text-3xl font-semibold">{word.en}</p>
            )}
            {flipped && (
              <div className="animate-fade-up grid gap-2">
                {!reverse && <p className="text-2xl">{word.en}</p>}
                {word.gender && (
                  <span className="mx-auto">
                    <GenderBadge gender={word.gender} />
                  </span>
                )}
                {formsLine(word) && (
                  <p lang="sv" className="text-muted">
                    {formsLine(word)}
                  </p>
                )}
                {word.note && <p className="text-muted text-sm">{word.note}</p>}
              </div>
            )}
            {!flipped && (
              <span className="text-muted mt-2 flex items-center gap-1.5 text-sm">
                <RotateCw size={14} aria-hidden="true" /> Tap or press Space to flip
              </span>
            )}
          </button>
          {(!reverse || flipped) && (
            <div className="mt-3 flex justify-center">
              <SpeakButtons text={sv} />
            </div>
          )}

          <div className="bg-surface/95 border-line fixed inset-x-0 bottom-0 border-t pb-[env(safe-area-inset-bottom)] backdrop-blur">
            <div className="mx-auto max-w-2xl px-5 py-4">
              {flipped ? (
                <div
                  className="grid grid-cols-4 gap-2"
                  role="group"
                  aria-label="How well did you remember?"
                >
                  {RATING_UI.map((r, i) => (
                    <button
                      key={r.rating}
                      type="button"
                      onClick={() => rate(r.rating)}
                      className={cx(
                        'flex h-16 flex-col items-center justify-center rounded-2xl border font-semibold',
                        r.className,
                      )}
                    >
                      <span>
                        <kbd className="mr-1 hidden text-xs opacity-60 sm:inline">{i + 1}</kbd>
                        {r.label}
                      </span>
                      <span className="text-xs font-medium opacity-75">
                        {isDue(card)
                          ? intervalLabel(card, r.rating)
                          : r.rating === 'again'
                            ? 'repeat'
                            : '—'}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <Button size="lg" className="w-full" onClick={() => setFlipped(true)}>
                  Show answer
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </SessionShell>
  )
}

function Empty() {
  return (
    <div className="pt-10 text-center">
      <h1 className="font-display text-3xl font-semibold">Nothing to review</h1>
      <p className="text-muted mt-2">There are no cards in this set right now.</p>
      <Link to="/review" className={cx(buttonClass('primary', 'lg'), 'mt-8')}>
        Back to review
      </Link>
    </div>
  )
}
