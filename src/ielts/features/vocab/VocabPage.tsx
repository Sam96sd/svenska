import { Layers, Plus, Volume2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { PageSpinner } from '../../../app/PageSpinner'
import { cx } from '../../../components/styles'
import { Button, Card, PageHeader, ProgressBar } from '../../../components/ui'
import { useNow } from '../../../lib/useNow'
import { intervalLabel, isDue, isMature, RATINGS, type Rating } from '../../../lib/srs'
import { castVoices, speakLine, useEnglishVoices } from '../../audio/tts'
import { loadAllDecks } from '../../content/index'
import { type VocabCard, type VocabDeck } from '../../content/schema'
import { Notice, Pill } from '../../components/ui'
import { addVocabCards, reviewVocabCard } from '../../storage/actions'
import { useIelts } from '../../storage/hooks'

const NEW_BATCH = 10
const cardKey = (deck: string, card: string) => `v:${deck}:${card}`

const RATING_UI: Record<Rating, { label: string; className: string }> = {
  again: { label: 'Again', className: 'bg-danger-soft text-danger' },
  hard: { label: 'Hard', className: 'bg-accent-soft text-accent-ink' },
  good: { label: 'Good', className: 'bg-success-soft text-success' },
  easy: { label: 'Easy', className: 'bg-primary-soft text-primary' },
}

const KIND_LABEL: Record<VocabDeck['kind'], string> = {
  topic: 'Topic vocabulary',
  collocations: 'Collocations',
  hedging: 'Hedging',
  linking: 'Linking',
  structures: 'Complex structures',
  'academic-words': 'Academic words',
}

export default function VocabPage() {
  const [decks, setDecks] = useState<VocabDeck[] | null>(null)
  useEffect(() => {
    let alive = true
    void loadAllDecks().then(
      (d) => alive && setDecks(d.sort((a, b) => a.title.localeCompare(b.title))),
    )
    return () => {
      alive = false
    }
  }, [])
  if (!decks) return <PageSpinner />
  return <Vocab decks={decks} />
}

function Vocab({ decks }: { decks: VocabDeck[] }) {
  const { profileId, ielts } = useIelts()
  const now = useNow()
  const [session, setSession] = useState<string[] | null>(null)
  const byKey = useMemo(() => {
    const m = new Map<string, { deck: VocabDeck; card: VocabCard }>()
    for (const deck of decks)
      for (const card of deck.cards) m.set(cardKey(deck.id, card.id), { deck, card })
    return m
  }, [decks])
  const due = [...byKey.keys()].filter((k) => ielts.srs[k] && isDue(ielts.srs[k]!, now))

  if (session)
    return (
      <Review
        queue={session}
        byKey={byKey}
        onRate={(k, r) => reviewVocabCard(profileId, k, r)}
        onDone={() => setSession(null)}
      />
    )

  const groups = Object.entries(KIND_LABEL)
    .map(([kind, label]) => ({ label, decks: decks.filter((d) => d.kind === kind) }))
    .filter((g) => g.decks.length)

  return (
    <div className="animate-fade-up">
      <PageHeader
        title="Vocabulary"
        subtitle="Language banks for Band 8, reviewed with spaced repetition"
      />
      <Card className="mb-6 flex flex-wrap items-center gap-3">
        <Layers className="text-primary" size={24} aria-hidden="true" />
        <p className="flex-1">
          <strong>{due.length}</strong> card{due.length === 1 ? '' : 's'} due for review
        </p>
        <Button disabled={due.length === 0} onClick={() => setSession(due.slice(0, 50))}>
          Review now
        </Button>
      </Card>
      {decks.length === 0 && <Notice>Vocabulary decks are coming soon.</Notice>}
      <div className="grid gap-6">
        {groups.map((g) => (
          <section key={g.label}>
            <h2 className="mb-3 text-lg font-semibold">{g.label}</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {g.decks.map((d) => {
                const keys = d.cards.map((c) => cardKey(d.id, c.id))
                const learning = keys.filter((k) => ielts.srs[k])
                const fresh = keys.filter((k) => !ielts.srs[k])
                const mature = learning.filter((k) => isMature(ielts.srs[k]!)).length
                return (
                  <li key={d.id}>
                    <Card className="grid h-full content-start gap-3">
                      <div>
                        <p className="font-semibold">{d.title}</p>
                        <p className="text-muted text-sm">{d.description}</p>
                      </div>
                      <ProgressBar
                        value={mature / keys.length}
                        label={`${d.title}: learned`}
                        tone="success"
                      />
                      <p className="text-muted text-xs">
                        {learning.length}/{keys.length} started · {mature} learned
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {fresh.length > 0 && (
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => {
                              const batch = fresh.slice(0, NEW_BATCH)
                              addVocabCards(profileId, batch)
                              setSession(batch)
                            }}
                          >
                            <Plus size={16} /> Learn {Math.min(NEW_BATCH, fresh.length)} new
                          </Button>
                        )}
                        {d.skills.map((s) => (
                          <Pill key={s}>{s}</Pill>
                        ))}
                      </div>
                    </Card>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

function Review({
  queue: initial,
  byKey,
  onRate,
  onDone,
}: {
  queue: string[]
  byKey: Map<string, { deck: VocabDeck; card: VocabCard }>
  onRate: (key: string, r: Rating) => void
  onDone: () => void
}) {
  const { ielts } = useIelts()
  const { voices } = useEnglishVoices()
  const voice = useMemo(
    () => castVoices([{ id: 'v', accent: 'en-GB', gender: 'f' }], voices).v,
    [voices],
  )
  const [queue, setQueue] = useState(initial)
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const key = queue[pos]
  const entry = key ? byKey.get(key) : undefined
  const srs = key ? ielts.srs[key] : undefined

  if (!entry || !key || !srs)
    return (
      <Card className="mx-auto grid max-w-lg gap-4 text-center">
        <p className="font-display text-2xl font-semibold">Done for now</p>
        <p className="text-muted">
          You reviewed {pos} card{pos === 1 ? '' : 's'}.
        </p>
        <Button onClick={onDone}>Back to decks</Button>
      </Card>
    )

  const rate = (r: Rating) => {
    onRate(key, r)
    if (r === 'again') setQueue((q) => [...q, key])
    setPos((p) => p + 1)
    setFlipped(false)
  }

  return (
    <div className="mx-auto grid max-w-xl gap-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted">
          {pos + 1} / {queue.length} · {entry.deck.title}
        </span>
        <button type="button" className="text-primary font-semibold underline" onClick={onDone}>
          Stop
        </button>
      </div>
      <Card className="grid min-h-64 content-center gap-3 text-center">
        <p className="font-display text-2xl font-semibold">{entry.card.term}</p>
        {entry.card.pos && <p className="text-muted text-sm">{entry.card.pos}</p>}
        <Button
          variant="ghost"
          size="sm"
          className="justify-self-center"
          onClick={() => speakLine(entry.card.term.replace(/\(|\)|…/g, ''), voice, 0.95, () => {})}
        >
          <Volume2 size={16} /> Listen
        </Button>
        {flipped ? (
          <div className="border-line grid gap-2 border-t pt-3 text-left">
            <p>
              <strong>Meaning:</strong> {entry.card.meaning}
            </p>
            <p className="italic">“{entry.card.example}”</p>
            {entry.card.note && <p className="text-muted text-sm">{entry.card.note}</p>}
          </div>
        ) : (
          <p className="text-muted text-sm">
            Say the meaning and use it in a sentence, then check.
          </p>
        )}
      </Card>
      {flipped ? (
        <div className="grid grid-cols-4 gap-2">
          {RATINGS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => rate(r)}
              className={cx('grid rounded-2xl p-2 text-sm font-semibold', RATING_UI[r].className)}
            >
              {RATING_UI[r].label}
              <span className="text-xs font-normal opacity-80">{intervalLabel(srs, r)}</span>
            </button>
          ))}
        </div>
      ) : (
        <Button size="lg" onClick={() => setFlipped(true)}>
          Show answer
        </Button>
      )}
    </div>
  )
}
