import { Check, Play, RotateCcw, X } from 'lucide-react'
import { useMemo, useRef, useState, type FormEvent } from 'react'
import { Segmented } from '../../../components/Segmented'
import { Button, Card, PageHeader } from '../../../components/ui'
import { castVoices, speakLine, stopAll, useEnglishVoices } from '../../audio/tts'
import { type Accent } from '../../content/schema'
import { checkText } from '../../engine/answerCheck'
import { type Marked } from '../../engine/marking'
import { Notice } from '../../components/ui'
import { useIelts } from '../../storage/hooks'
import { recordObjectiveAttempt } from '../../storage/record'
import { makeItem, MODE_LABEL, type DictationItem, type DictationMode } from './dictation'

const ROUND = 10
const ACCENTS: Accent[] = ['en-GB', 'en-AU', 'en-US', 'en-CA', 'en-NZ']

interface Result {
  item: DictationItem
  given: string
  correct: boolean
}

export default function DictationTrainerPage() {
  const { profileId, ielts } = useIelts()
  const { voices, supported } = useEnglishVoices()
  const [mode, setMode] = useState<DictationMode>('spelling')
  const [accent, setAccent] = useState<Accent | 'mix'>('mix')
  const [items, setItems] = useState<DictationItem[]>([])
  const [index, setIndex] = useState(0)
  const [given, setGiven] = useState('')
  const [results, setResults] = useState<Result[]>([])
  const [checked, setChecked] = useState<Result | null>(null)
  const input = useRef<HTMLInputElement>(null)
  const startedAt = useRef(0)

  const available = useMemo(() => new Set(voices.map((v) => v.lang.replace('_', '-'))), [voices])
  const item = items[index]

  function play(it: DictationItem | undefined = item, i = index) {
    if (!it) return
    const a = accent === 'mix' ? ACCENTS[i % ACCENTS.length]! : accent
    const cast = castVoices([{ id: 'x', accent: a, gender: i % 2 ? 'm' : 'f' }], voices).x
    stopAll()
    speakLine(it.say, cast, 0.95, () => input.current?.focus())
  }

  function start() {
    const fresh = Array.from({ length: ROUND }, () => makeItem(mode))
    setItems(fresh)
    setIndex(0)
    setResults([])
    setChecked(null)
    setGiven('')
    startedAt.current = Date.now()
    play(fresh[0], 0)
  }

  function check(e: FormEvent) {
    e.preventDefault()
    if (!item || checked) return
    const r = { item, given, correct: checkText(given, item.accept).correct }
    setChecked(r)
    setResults((rs) => [...rs, r])
  }

  function next() {
    const i = index + 1
    setIndex(i)
    setChecked(null)
    setGiven('')
    if (i < items.length) play(items[i], i)
    else finish([...results])
  }

  function finish(all: Result[]) {
    const marked: Marked = {
      questions: all.map((r, i) => ({
        n: i + 1,
        type: mode === 'spelling' || mode === 'postcode' ? 'spelling' : 'numbers',
        correct: r.correct,
        given: r.given,
        expected: r.item.answer,
        reason: r.correct ? null : r.given.trim() ? 'spelling' : 'blank',
        explanation: r.item.say,
        location: { ref: 'l1', quote: r.item.say },
        trapNote: null,
      })),
      correct: all.filter((r) => r.correct).length,
      total: all.length,
    }
    recordObjectiveAttempt(profileId, {
      skill: 'listening',
      contentId: `dictation-${mode}`,
      module: ielts.settings.module ?? 'academic',
      kind: 'drill',
      startedAt: startedAt.current,
      durationMs: Date.now() - startedAt.current,
      marked,
      times: {},
    })
  }

  const done = items.length > 0 && index >= items.length
  const score = results.filter((r) => r.correct).length

  return (
    <div className="animate-fade-up mx-auto max-w-2xl">
      <PageHeader
        title="Dictation trainer"
        subtitle="Names, numbers and dates — the Part 1 essentials"
      />
      {!supported && (
        <Notice tone="error">This browser can’t play speech. Try Chrome, Edge or Safari.</Notice>
      )}

      {items.length === 0 || done ? (
        <Card className="grid gap-5">
          {done && (
            <div role="status" className="grid gap-2">
              <p className="font-display text-2xl font-semibold">
                {score} / {results.length} correct
              </p>
              <ul className="grid gap-1 text-sm">
                {results
                  .filter((r) => !r.correct)
                  .map((r, i) => (
                    <li key={i}>
                      <span className="text-danger">{r.given || '—'}</span> →{' '}
                      <strong>{r.item.answer}</strong>
                    </li>
                  ))}
              </ul>
            </div>
          )}
          <Segmented<DictationMode>
            label="What to practise"
            value={mode}
            onChange={setMode}
            options={(Object.keys(MODE_LABEL) as DictationMode[]).map((m) => ({
              value: m,
              label: MODE_LABEL[m],
            }))}
          />
          <Segmented<Accent | 'mix'>
            label="Accent"
            value={accent}
            onChange={setAccent}
            options={[
              { value: 'mix', label: 'Mixed' },
              ...ACCENTS.map((a) => ({
                value: a,
                label: `${a.slice(3)}${available.has(a) ? '' : ' *'}`,
              })),
            ]}
          />
          <p className="text-muted text-xs">
            * No voice for this accent on this device; the nearest English voice is used.
          </p>
          <Button size="lg" onClick={start} disabled={!supported}>
            {done ? <RotateCcw size={18} /> : <Play size={18} />}{' '}
            {done ? 'Another round' : `Start ${ROUND} items`}
          </Button>
        </Card>
      ) : (
        <Card className="grid gap-4">
          <p className="text-muted text-sm">
            {MODE_LABEL[mode]} · item {index + 1} of {items.length} · {score} correct so far
          </p>
          <Button variant="secondary" className="justify-self-start" onClick={() => play()}>
            <Play size={18} /> Play again
          </Button>
          <form onSubmit={check} className="flex flex-wrap gap-2">
            <label htmlFor="dictation" className="sr-only">
              Your answer
            </label>
            <input
              id="dictation"
              ref={input}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              value={given}
              readOnly={!!checked}
              onChange={(e) => setGiven(e.target.value)}
              className="border-line bg-bg focus:border-primary h-12 min-w-0 flex-1 rounded-xl border px-3 text-lg outline-none"
              placeholder="Type what you hear"
            />
            {!checked && <Button type="submit">Check</Button>}
          </form>
          {checked && (
            <div className="grid gap-3">
              <p
                role="status"
                className={
                  checked.correct ? 'text-success font-semibold' : 'text-danger font-semibold'
                }
              >
                {checked.correct ? (
                  <Check className="mr-1 inline" size={18} />
                ) : (
                  <X className="mr-1 inline" size={18} />
                )}
                {checked.correct ? 'Correct' : `Answer: ${checked.item.answer}`}
              </p>
              <p className="text-muted text-sm">You heard: “{checked.item.say}”</p>
              <Button className="justify-self-start" onClick={next} autoFocus>
                {index + 1 < items.length ? 'Next' : 'See results'}
              </Button>
            </div>
          )}
        </Card>
      )}
    </div>
  )
}
