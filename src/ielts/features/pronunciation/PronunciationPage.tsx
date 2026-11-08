import { CheckCircle2, Mic, Play, Square, Volume2 } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'
import { PageSpinner } from '../../../app/PageSpinner'
import { cx } from '../../../components/styles'
import { Button, Card, PageHeader } from '../../../components/ui'
import { recordingSupported, useRecorder } from '../../audio/recorder'
import { castVoices, speakLine, useEnglishVoices, type Casting } from '../../audio/tts'
import { loadAllPronSets, loadPronSet } from '../../content/index'
import { type PronItem, type PronSet } from '../../content/schema'
import { Notice, Pill } from '../../components/ui'
import { Rich } from '../../components/Rich'
import { markLessonDone } from '../../storage/actions'
import { useIelts } from '../../storage/hooks'

const FOCUS_LABEL: Record<PronSet['focus'], string> = {
  'word-stress': 'Word stress',
  'sentence-stress': 'Sentence stress and chunking',
  'connected-speech': 'Connected speech',
  endings: '-ed and -s endings',
  'minimal-pairs': 'Minimal pairs',
  clusters: 'Consonant clusters',
}

function useVoice(): Casting | undefined {
  const { voices } = useEnglishVoices()
  return useMemo(() => castVoices([{ id: 'v', accent: 'en-GB', gender: 'f' }], voices).v, [voices])
}

/** List of pronunciation sets, grouped by focus. */
export function PronunciationListPage() {
  const { ielts } = useIelts()
  const [sets, setSets] = useState<PronSet[] | null>(null)
  useEffect(() => {
    let alive = true
    void loadAllPronSets().then((s) => alive && setSets(s))
    return () => {
      alive = false
    }
  }, [])
  if (!sets) return <PageSpinner />
  const focuses = Object.keys(FOCUS_LABEL) as PronSet['focus'][]
  return (
    <div className="animate-fade-up">
      <PageHeader
        title="Pronunciation trainer"
        subtitle="Clarity over accent: stress, rhythm, endings and tricky sounds"
      />
      <Notice className="mb-5">
        Use headphones. The model voice is your device’s text-to-speech, which is good for stress
        and sounds but less natural than a real speaker. Record yourself in the repeat exercises and
        compare.
      </Notice>
      <div className="grid gap-6">
        {focuses.map((f) => {
          const list = sets.filter((s) => s.focus === f)
          if (list.length === 0) return null
          return (
            <section key={f}>
              <h2 className="mb-2 text-lg font-semibold">{FOCUS_LABEL[f]}</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {list.map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/ielts/pronunciation/${s.id}`}
                      className="bg-surface border-line hover:border-primary flex items-center gap-3 rounded-2xl border p-4 transition-colors"
                    >
                      {ielts.lessonsDone[`pron:${s.id}`] ? (
                        <CheckCircle2
                          size={20}
                          className="text-success shrink-0"
                          aria-label="Done"
                        />
                      ) : (
                        <Volume2 size={20} className="text-primary shrink-0" aria-hidden="true" />
                      )}
                      <span className="flex-1 font-semibold">{s.title}</span>
                      <span className="text-muted text-sm">{s.items.length}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </div>
    </div>
  )
}

export default function PronunciationSetPage() {
  const { id = '' } = useParams()
  const [set, setSet] = useState<PronSet | null>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    let alive = true
    loadPronSet(id).then(
      (s) => alive && setSet(s),
      (e: unknown) =>
        alive && setError(e instanceof Error ? e.message : 'Could not load this set.'),
    )
    return () => {
      alive = false
    }
  }, [id])
  if (error) return <Notice tone="error">{error}</Notice>
  if (!set) return <PageSpinner />
  return <Trainer key={set.id} set={set} />
}

function Trainer({ set }: { set: PronSet }) {
  const { profileId } = useIelts()
  const voice = useVoice()
  const [index, setIndex] = useState(-1)
  const [score, setScore] = useState(0)
  const say = (text: string, rate = 0.9) => speakLine(text, voice, rate, () => {})

  if (index === -1)
    return (
      <div className="animate-fade-up mx-auto max-w-2xl">
        <PageHeader title={set.title} subtitle={FOCUS_LABEL[set.focus]} />
        <Card className="grid gap-3">
          {set.intro.map((p, i) => (
            <p key={i} className="leading-relaxed">
              <Rich text={p} />
            </p>
          ))}
          <Button size="lg" onClick={() => setIndex(0)}>
            Start ({set.items.length} items)
          </Button>
        </Card>
      </div>
    )

  if (index >= set.items.length) {
    const scored = set.quiz !== 'listen-repeat'
    return (
      <div className="animate-fade-up mx-auto max-w-2xl">
        <PageHeader title={set.title} />
        <Card className="grid gap-3 text-center">
          <p className="font-display text-2xl font-semibold" role="status">
            {scored ? `${score} / ${set.items.length} correct` : 'Well done'}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant="secondary"
              onClick={() => {
                setScore(0)
                setIndex(0)
              }}
            >
              Again
            </Button>
            <Link
              to="/ielts/pronunciation"
              className="bg-primary text-on-primary inline-flex h-11 items-center rounded-2xl px-4 font-semibold"
            >
              All sets
            </Link>
          </div>
        </Card>
      </div>
    )
  }

  const item = set.items[index]!
  const next = (correct: boolean) => {
    if (correct) setScore((s) => s + 1)
    if (index + 1 >= set.items.length) markLessonDone(profileId, `pron:${set.id}`)
    setIndex(index + 1)
  }

  return (
    <div className="mx-auto grid max-w-2xl gap-4">
      <p className="text-muted text-sm">
        {set.title} · {index + 1} / {set.items.length}
      </p>
      {set.quiz === 'listen-repeat' ? (
        <RepeatItem key={index} item={item} say={say} onNext={() => next(true)} />
      ) : (
        <ChoiceItem key={index} item={item} quiz={set.quiz} say={say} onNext={next} />
      )}
    </div>
  )
}

function ChoiceItem({
  item,
  quiz,
  say,
  onNext,
}: {
  item: PronItem
  quiz: PronSet['quiz']
  say: (text: string, rate?: number) => void
  onNext: (correct: boolean) => void
}) {
  const [picked, setPicked] = useState<string | null>(null)
  const spoken = item.say ?? (quiz === 'which-word' ? item.answer! : item.text)
  useEffect(() => {
    const t = setTimeout(() => say(spoken, 0.85), 300)
    return () => clearTimeout(t)
  }, [say, spoken])
  const prompt =
    quiz === 'stress'
      ? 'Which syllable is stressed?'
      : quiz === 'which-word'
        ? 'Which word do you hear?'
        : 'How is the ending pronounced?'
  return (
    <Card className="grid gap-4 text-center">
      <p className="text-muted text-sm">{prompt}</p>
      {quiz !== 'which-word' && <p className="font-display text-3xl font-semibold">{item.text}</p>}
      <Button variant="secondary" className="justify-self-center" onClick={() => say(spoken, 0.8)}>
        <Volume2 size={18} /> Listen again
      </Button>
      <div className="flex flex-wrap justify-center gap-2">
        {item.options!.map((o, i) => {
          const isAnswer = o === item.answer
          return (
            <button
              key={`${o}-${i}`}
              type="button"
              disabled={!!picked}
              onClick={() => setPicked(o)}
              className={cx(
                'min-w-20 rounded-2xl border px-4 py-3 text-lg font-semibold transition-colors',
                !picked && 'border-line hover:border-primary',
                picked && isAnswer && 'border-success bg-success-soft text-success',
                picked === o && !isAnswer && 'border-danger bg-danger-soft text-danger',
                picked && !isAnswer && picked !== o && 'border-line opacity-60',
              )}
            >
              {quiz === 'stress' ? o.toUpperCase() : o}
            </button>
          )
        })}
      </div>
      {picked && (
        <div className="grid gap-3" role="status">
          <p
            className={
              picked === item.answer ? 'text-success font-semibold' : 'text-danger font-semibold'
            }
          >
            {picked === item.answer ? 'Correct' : `It’s “${item.answer}”`}
          </p>
          {item.note && (
            <p className="text-muted text-sm">
              <Rich text={item.note} />
            </p>
          )}
          <Button
            className="justify-self-center"
            autoFocus
            onClick={() => onNext(picked === item.answer)}
          >
            Next
          </Button>
        </div>
      )}
    </Card>
  )
}

function RepeatItem({
  item,
  say,
  onNext,
}: {
  item: PronItem
  say: (text: string, rate?: number) => void
  onNext: () => void
}) {
  const recorder = useRecorder({ maxMs: 20_000 })
  const url = useMemo(
    () => (recorder.result ? URL.createObjectURL(recorder.result.blob) : null),
    [recorder.result],
  )
  useEffect(
    () => () => {
      if (url) URL.revokeObjectURL(url)
    },
    [url],
  )
  const spoken = (item.say ?? item.text).replace(/\|/g, ',')
  return (
    <Card className="grid gap-4">
      <p className="font-display text-center text-2xl leading-snug font-semibold">
        {item.text.split('|').map((chunk, i) => (
          <span key={i}>
            {i > 0 && <span className="text-primary mx-1">|</span>}
            {chunk.trim()}
          </span>
        ))}
      </p>
      {item.note && (
        <p className="text-muted text-center text-sm">
          <Rich text={item.note} />
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-2">
        <Button variant="secondary" onClick={() => say(spoken, 0.9)}>
          <Play size={18} /> Model
        </Button>
        <Button variant="ghost" onClick={() => say(spoken, 0.7)}>
          Slowly
        </Button>
        {recordingSupported() &&
          (recorder.state === 'recording' ? (
            <Button onClick={recorder.stop}>
              <Square size={18} /> Stop
            </Button>
          ) : (
            <Button onClick={() => void recorder.start()}>
              <Mic size={18} /> Record yourself
            </Button>
          ))}
      </div>
      {recorder.error && <Notice tone="error">{recorder.error}</Notice>}
      {url && (
        <div className="grid justify-items-center gap-2">
          <audio controls src={url} className="h-10 w-full max-w-sm" />
          <p className="text-muted text-xs">
            Compare: are the stressed words and the chunks the same as the model?
          </p>
        </div>
      )}
      <div className="flex justify-center gap-2">
        <Pill>Not scored</Pill>
        <Button className="justify-self-center" onClick={onNext}>
          Next
        </Button>
      </div>
    </Card>
  )
}
