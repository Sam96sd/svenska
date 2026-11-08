import { Pause, Play, RotateCcw, Volume2 } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router'
import { PageSpinner } from '../../../app/PageSpinner'
import { Segmented } from '../../../components/Segmented'
import { cx } from '../../../components/styles'
import { Button, Card } from '../../../components/ui'
import { castVoices, useEnglishVoices, useScriptPlayer, type PlayerLine } from '../../audio/tts'
import { useAudioPlayer } from '../../audio/audioPlayer'
import { geminiAudioFor, geminiTtsSupported } from '../../audio/geminiTts'
import { GeminiError } from '../../ai/gemini'
import { hasFreeKey, useAiConfig } from '../../ai/keys'
import { Notice, Toggle } from '../../components/ui'
import { loadListening } from '../../content/index'
import { type ListeningPart } from '../../content/schema'
import { ExamShell, QuestionNavigator } from '../../engine/ExamShell'
import { type MarkedQuestion } from '../../engine/marking'
import { QuestionGroupView } from '../../engine/questions/Groups'
import { QuestionContext } from '../../engine/questions/qutils'
import { findQuote } from '../../engine/reader/highlights'
import { AnswerExplanation, ResultsSummary } from '../../engine/ResultsView'
import { useExamClock } from '../../engine/timers'
import { jumpToQuestion, useQuestionSession } from '../../engine/useQuestionSession'
import { useIelts } from '../../storage/hooks'
import { recordObjectiveAttempt } from '../../storage/record'
import { attemptKind, useSpecialRun } from '../shared/runKind'
import { type RunMode } from '../reading/ReadingSessionPage'

const NARRATOR = 'narrator'
const PREVIEW_MS = { exam: 30_000, practice: 4_000 }

export default function ListeningSessionPage() {
  const { id = '' } = useParams()
  const [search] = useSearchParams()
  const { special } = useSpecialRun()
  const mode: RunMode = search.get('mode') === 'exam' || special ? 'exam' : 'practice'
  const [part, setPart] = useState<ListeningPart | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [run, setRun] = useState(0)

  useEffect(() => {
    let alive = true
    loadListening(id).then(
      (p) => alive && setPart(p),
      (e: unknown) =>
        alive && setError(e instanceof Error ? e.message : 'Could not load this recording.'),
    )
    return () => {
      alive = false
    }
  }, [id])

  if (error)
    return (
      <div className="mx-auto max-w-lg p-6">
        <Notice tone="error">{error}</Notice>
      </div>
    )
  if (!part) return <PageSpinner />
  return (
    <ListeningRun key={run} part={part} initialMode={mode} onRetry={() => setRun((r) => r + 1)} />
  )
}

export function ListeningRun({
  part,
  initialMode,
  onRetry,
}: {
  part: ListeningPart
  initialMode: RunMode
  onRetry: () => void
}) {
  const navigate = useNavigate()
  const { profileId, ielts } = useIelts()
  const module = ielts.settings.module ?? 'academic'
  const { special, back } = useSpecialRun()
  const partLabel = part.id.endsWith('-listening') ? 'Parts 1–4' : `Part ${part.part}`
  const [mode, setMode] = useState<RunMode>(initialMode)
  const [phase, setPhase] = useState<'intro' | 'running' | 'done'>('intro')
  const [rate, setRate] = useState(1)
  const [showScript, setShowScript] = useState(false)
  const [startedAt, setStartedAt] = useState(0)
  const [duration, setDuration] = useState(0)
  const [focusLoc, setFocusLoc] = useState<{ ref: string; quote: string } | null>(null)
  const { voices, loaded, supported } = useEnglishVoices()

  // Speakers in different parts of a full test never talk together, so each part gets the
  // best voices afresh; within a part, speakers get distinct voices.
  const casting = useMemo(() => {
    const groups = new Map<string, ListeningPart['speakers']>()
    for (const sp of part.speakers) {
      const g = /^p\d+-/.exec(sp.id)?.[0] ?? ''
      groups.set(g, [...(groups.get(g) ?? []), sp])
    }
    const out: ReturnType<typeof castVoices> = {}
    for (const list of groups.values())
      Object.assign(
        out,
        castVoices(
          list.map((sp) => ({ id: sp.id, accent: sp.accent, gender: sp.gender })),
          voices,
        ),
      )
    Object.assign(out, castVoices([{ id: NARRATOR, accent: 'en-GB', gender: 'm' }], voices))
    return out
  }, [part.speakers, voices])
  const lines: PlayerLine[] = useMemo(
    () => [
      {
        speaker: NARRATOR,
        text: `Part ${part.part}. ${part.context}`,
        pauseAfterMs: PREVIEW_MS[mode],
      },
      ...part.lines.map((l) => ({
        speaker: l.speaker,
        text: l.text,
        // Reading time between parts: full length in exam mode, short in practice.
        pauseAfterMs: l.pause ? (mode === 'exam' ? l.pause * 1000 : 3000) : undefined,
      })),
      {
        speaker: NARRATOR,
        text: `That is the end of Part ${part.part}. You now have half a minute to check your answers.`,
      },
    ],
    [part, mode],
  )
  const devicePlayer = useScriptPlayer(lines, casting, rate)
  // Optional: Gemini voices (pre-rendered with the free key) for parts with up to two speakers.
  const ai = useAiConfig(profileId)
  const canGemini = hasFreeKey(ai) && geminiTtsSupported(part)
  const [engine, setEngine] = useState<'device' | 'gemini'>('device')
  const [preparing, setPreparing] = useState<string | null>(null)
  const geminiPlayer = useAudioPlayer(
    useMemo(() => part.lines.map((l) => l.text.length), [part.lines]),
    rate,
    PREVIEW_MS[mode],
  )
  const player = engine === 'gemini' ? geminiPlayer : devicePlayer
  const session = useQuestionSession(part.groups, {
    running: phase === 'running',
    stuckAfterMs: 10 * 60_000,
  })
  const clock = useExamClock(null, { running: phase === 'running' })
  const audioDone = player.state.status === 'done'
  const scriptLine = player.state.line - 1 // index into part.lines

  function finish() {
    if (phase !== 'running') return
    player.stop()
    const { marked, times } = session.submit()
    setDuration(clock.elapsedMs)
    recordObjectiveAttempt(profileId, {
      skill: 'listening',
      contentId: part.id,
      module,
      kind: attemptKind(special, mode === 'exam'),
      startedAt,
      durationMs: clock.elapsedMs,
      marked,
      times,
    })
    setShowScript(true)
    setPhase('done')
  }

  function submit() {
    if (mode === 'exam' && !audioDone && !confirm('The recording is still playing. Submit now?'))
      return
    const left = session.numbers.length - session.answered.size
    if (
      left > 0 &&
      !confirm(`${left} question${left === 1 ? ' is' : 's are'} unanswered. Submit anyway?`)
    )
      return
    finish()
  }

  function exit() {
    if (phase === 'running' && !confirm('Leave this test? Your answers will be lost.')) return
    player.stop()
    navigate(back)
  }

  const ctx = useMemo(
    () => ({
      answers: session.answers,
      setAnswer: session.setAnswer,
      marked: session.markedMap,
      onFocus: session.focus,
      flagged: session.flagged,
    }),
    [session.answers, session.setAnswer, session.markedMap, session.focus, session.flagged],
  )

  if (phase === 'intro')
    return (
      <ExamShell
        title={part.title}
        subtitle={`Listening · ${partLabel}`}
        clock={null}
        onExit={exit}
      >
        <div className="h-full overflow-y-auto">
          <Card className="mx-auto my-6 grid max-w-xl gap-4">
            <h1 className="font-display text-2xl font-semibold">{part.title}</h1>
            <p className="text-muted text-sm">
              {partLabel} · {session.numbers.length} questions · {part.topic}
            </p>
            {!supported ? (
              <Notice tone="error">
                This browser can’t play speech. Try Chrome, Edge or Safari.
              </Notice>
            ) : loaded && voices.length === 0 ? (
              <Notice tone="warn">
                No English voice is installed on this device, so the recording can’t play.
              </Notice>
            ) : (
              <div className="bg-surface-2 rounded-2xl p-3 text-sm">
                <p className="mb-1 font-semibold">Voices on this device</p>
                <ul className="grid gap-0.5">
                  {part.speakers.map((s) => (
                    <li key={s.id}>
                      {s.name} ({s.role.toLowerCase()}, {s.accent}):{' '}
                      <span className="text-muted">
                        {casting[s.id]?.voice?.name ?? 'default voice'}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted mt-2 text-xs">
                  Browser voices are robotic compared with the real recordings, but the questions,
                  traps and timing work the same way.
                </p>
              </div>
            )}
            {!special && (
              <fieldset className="grid gap-2">
                <legend className="mb-1 text-sm font-semibold">Mode</legend>
                {(['practice', 'exam'] as const).map((m) => (
                  <label
                    key={m}
                    className={cx(
                      'flex cursor-pointer gap-3 rounded-2xl border p-3 text-sm',
                      mode === m ? 'border-primary bg-primary-soft' : 'border-line',
                    )}
                  >
                    <input
                      type="radio"
                      name="mode"
                      checked={mode === m}
                      onChange={() => setMode(m)}
                      className="accent-[var(--color-primary)]"
                    />
                    <span>
                      <strong>{m === 'practice' ? 'Practice' : 'Exam (heard once)'}</strong>
                      <span className="text-muted block">
                        {m === 'practice'
                          ? 'Pause, replay, slow down to 0.75× and read the transcript.'
                          : 'You hear the recording once, with 30 seconds to read the questions first — like the real test.'}
                      </span>
                    </span>
                  </label>
                ))}
              </fieldset>
            )}
            {canGemini && (
              <Toggle
                label="Use Gemini voices (more natural)"
                description="Renders this part once with your free Gemini key and keeps the audio on this device. The live transcript highlight is approximate."
                checked={engine === 'gemini'}
                onChange={(v) => setEngine(v ? 'gemini' : 'device')}
              />
            )}
            {preparing && (
              <p role="status" className="text-muted text-sm">
                {preparing}
              </p>
            )}
            <Button
              size="lg"
              disabled={(!supported && engine === 'device') || !!preparing}
              onClick={() => {
                if (engine === 'gemini') {
                  setPreparing('Preparing Gemini voices… (about 20–60 seconds the first time)')
                  geminiAudioFor(profileId, part).then(
                    (blob) => {
                      setPreparing(null)
                      setStartedAt(Date.now())
                      setPhase('running')
                      geminiPlayer.start(URL.createObjectURL(blob))
                    },
                    (e: unknown) => {
                      setPreparing(null)
                      setEngine('device')
                      alert(
                        `${e instanceof GeminiError ? e.message : 'Gemini voices failed.'} Using device voices instead.`,
                      )
                    },
                  )
                  return
                }
                setStartedAt(Date.now())
                setPhase('running')
                player.play()
              }}
            >
              <Volume2 size={20} /> {preparing ? 'Preparing…' : 'Start the recording'}
            </Button>
          </Card>
        </div>
      </ExamShell>
    )

  const done = phase === 'done'
  const showInScript = (q: MarkedQuestion) => {
    setShowScript(true)
    setFocusLoc({ ...q.location })
  }

  return (
    <QuestionContext.Provider value={ctx}>
      <ExamShell
        title={part.title}
        subtitle={`Listening · ${partLabel}${mode === 'exam' ? ' · exam mode' : ''}`}
        clock={done ? null : { ms: clock.elapsedMs, countdown: false }}
        onExit={exit}
        action={
          !done && (
            <Button size="sm" onClick={submit}>
              Submit
            </Button>
          )
        }
        footer={
          <QuestionNavigator
            numbers={session.numbers}
            answered={session.answered}
            flagged={session.flagged}
            marked={session.markedMap}
            current={session.current}
            onToggleFlag={session.toggleFlag}
            onJump={(n) => {
              session.focus(n)
              jumpToQuestion(n)
            }}
          />
        }
      >
        <div className="h-full overflow-y-auto px-5 py-5">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6">
            {!done && (
              <Card className="grid gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span aria-live="polite" className="flex-1 text-sm font-semibold">
                    {player.state.status === 'playing'
                      ? player.state.line === 0
                        ? 'Look at the questions now…'
                        : player.state.line > part.lines.length
                          ? 'Check your answers.'
                          : 'Recording playing'
                      : player.state.status === 'paused'
                        ? 'Paused'
                        : audioDone
                          ? 'The recording has finished. Check your answers, then submit.'
                          : 'Ready'}
                  </span>
                  {mode === 'practice' && (
                    <div className="flex gap-2">
                      {player.state.status === 'playing' ? (
                        <Button variant="secondary" size="sm" onClick={player.pause}>
                          <Pause size={16} /> Pause
                        </Button>
                      ) : (
                        <Button variant="secondary" size="sm" onClick={player.play}>
                          <Play size={16} /> {player.state.status === 'paused' ? 'Resume' : 'Play'}
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" onClick={player.restart}>
                        <RotateCcw size={16} /> From the start
                      </Button>
                    </div>
                  )}
                </div>
                <div className="bg-surface-2 h-1.5 overflow-hidden rounded-full" aria-hidden="true">
                  <div
                    className="bg-primary h-full transition-[width] duration-500"
                    style={{
                      width: `${audioDone ? 100 : Math.max(0, (player.state.line / lines.length) * 100)}%`,
                    }}
                  />
                </div>
                {mode === 'practice' && (
                  <div className="flex flex-wrap items-center gap-6">
                    <Segmented<number>
                      label="Speed"
                      value={rate}
                      onChange={setRate}
                      options={[
                        { value: 1, label: '1×' },
                        { value: 0.75, label: '0.75×' },
                      ]}
                    />
                    <div className="min-w-56 flex-1">
                      <Toggle
                        label="Show transcript"
                        checked={showScript}
                        onChange={setShowScript}
                      />
                    </div>
                  </div>
                )}
              </Card>
            )}

            {done && session.marked && (
              <ResultsSummary
                backTo={back}
                marked={session.marked}
                skill="listening"
                module={module}
                durationMs={duration}
                onRetry={onRetry}
              />
            )}

            {part.groups.map((g, i) => (
              <QuestionGroupView key={i} group={g} />
            ))}

            {done && session.marked && (
              <section aria-label="Explanations">
                <h2 className="mb-3 text-lg font-semibold">Answers explained</h2>
                <ol className="grid gap-3">
                  {session.marked.questions.map((q) => (
                    <AnswerExplanation
                      key={q.n}
                      q={q}
                      onShow={showInScript}
                      showLabel="Show in transcript"
                    />
                  ))}
                </ol>
              </section>
            )}

            {showScript && (
              <Transcript part={part} current={done ? -1 : scriptLine} focus={focusLoc} />
            )}
          </div>
        </div>
      </ExamShell>
    </QuestionContext.Provider>
  )
}

function Transcript({
  part,
  current,
  focus,
}: {
  part: ListeningPart
  current: number
  focus: { ref: string; quote: string } | null
}) {
  const names = Object.fromEntries(part.speakers.map((s) => [s.id, s.name]))
  const box = useRef<HTMLOListElement>(null)
  useEffect(() => {
    if (!focus) return
    box.current
      ?.querySelector(`[data-line="${focus.ref}"]`)
      ?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, [focus])
  return (
    <section aria-label="Transcript">
      <h2 className="mb-3 text-lg font-semibold">Transcript</h2>
      <ol ref={box} className="grid gap-2 text-[15px]">
        {part.lines.map((l, i) => {
          const hit = focus?.ref === l.id ? findQuote(l.text, focus.quote) : null
          return (
            <li
              key={l.id}
              data-line={l.id}
              className={cx(
                'scroll-mt-24 rounded-xl px-3 py-2',
                i === current ? 'bg-primary-soft' : '',
              )}
            >
              <span className="mr-2 font-semibold">{names[l.speaker] ?? l.speaker}:</span>
              {hit ? (
                <>
                  {l.text.slice(0, hit[0])}
                  <mark className="bg-success-soft ring-success text-ink rounded-sm ring-1">
                    {l.text.slice(hit[0], hit[1])}
                  </mark>
                  {l.text.slice(hit[1])}
                </>
              ) : (
                l.text
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
