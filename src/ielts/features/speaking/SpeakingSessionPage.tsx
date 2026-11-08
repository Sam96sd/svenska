import { Mic, Square, Volume2 } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { PageSpinner } from '../../../app/PageSpinner'
import { cx } from '../../../components/styles'
import { Button, Card } from '../../../components/ui'
import { castVoices, speakLine, stopAll, useEnglishVoices } from '../../audio/tts'
import {
  recordingSupported,
  saveRecording,
  useRecorder,
  type Recording,
} from '../../audio/recorder'
import { loadSpeaking } from '../../content/index'
import { type CueCard, type SpeakingItem } from '../../content/schema'
import { ExamShell } from '../../engine/ExamShell'
import { formatClock, useExamClock } from '../../engine/timers'
import { SPEAKING } from '../../examSpec'
import { Notice } from '../../components/ui'
import { newId } from '../../storage/actions'
import { cueText } from './cue'
import { SpeakingReview } from './SpeakingReview'

export interface Step {
  part: 1 | 2 | 3
  question: string
  cue?: CueCard
}

export interface Answer {
  step: Step
  recording: Recording
}

export default function SpeakingSessionPage() {
  const { id = '' } = useParams()
  const [item, setItem] = useState<SpeakingItem | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [run, setRun] = useState(0)
  useEffect(() => {
    let alive = true
    loadSpeaking(id).then(
      (x) => alive && setItem(x),
      (e: unknown) =>
        alive && setError(e instanceof Error ? e.message : 'Could not load this topic.'),
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
  if (!item) return <PageSpinner />
  return <SpeakingRun key={run} item={item} onRetry={() => setRun((r) => r + 1)} />
}

const INTRO_PART2 =
  'Now, I’m going to give you a topic, and I’d like you to talk about it for one to two minutes. Before you talk, you’ll have one minute to think about what you’re going to say. You can make some notes if you wish.'
const START_PART2 =
  'All right? Remember, you have one to two minutes for this, so don’t worry if I stop you. I’ll tell you when the time is up. Can you start speaking now, please?'

function SpeakingRun({ item, onRetry }: { item: SpeakingItem; onRetry: () => void }) {
  const navigate = useNavigate()
  const { voices } = useEnglishVoices()
  const examiner = useMemo(
    () => castVoices([{ id: 'examiner', accent: 'en-GB', gender: 'f' }], voices).examiner,
    [voices],
  )
  const [withPart3, setWithPart3] = useState(true)
  const [phase, setPhase] = useState<'intro' | 'running' | 'review'>('intro')
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Answer[]>([])

  const steps: Step[] = useMemo(() => {
    if (item.kind === 'part1') return item.questions.map((q) => ({ part: 1 as const, question: q }))
    const s: Step[] = [{ part: 2, question: cueText(item), cue: item }]
    if (withPart3) s.push(...item.part3.map((q) => ({ part: 3 as const, question: q })))
    return s
  }, [item, withPart3])

  const title =
    item.kind === 'part1'
      ? `Speaking Part 1 · ${item.topic}`
      : `Speaking Part 2${withPart3 ? '–3' : ''} · ${item.theme}`

  function exit() {
    if (phase === 'running' && !confirm('Leave? Answers recorded so far are kept on this device.'))
      return
    stopAll()
    navigate('/ielts/practice')
  }

  if (phase === 'intro')
    return (
      <ExamShell title={title} clock={null} onExit={exit}>
        <div className="h-full overflow-y-auto px-4">
          <Card className="mx-auto my-6 grid max-w-xl gap-4">
            <h1 className="font-display text-2xl font-semibold">
              {item.kind === 'part1' ? item.topic : item.theme}
            </h1>
            <p className="text-muted text-sm">
              {item.kind === 'part1'
                ? `${item.questions.length} Part 1 questions. Answer each in 2–4 sentences: answer, reason, example.`
                : `A cue card with a 1-minute preparation timer, then up to 2 minutes of speaking${withPart3 ? `, followed by ${item.part3.length} Part 3 questions` : ''}.`}
            </p>
            {!recordingSupported() && (
              <Notice tone="error">
                This browser can’t record audio. Try Chrome, Edge or Safari.
              </Notice>
            )}
            {item.kind === 'cue-card' && (
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  checked={withPart3}
                  onChange={(e) => setWithPart3(e.target.checked)}
                  className="accent-[var(--color-primary)]"
                />
                Continue with the linked Part 3 discussion
              </label>
            )}
            <Notice>
              The examiner’s questions are read aloud. Your answers are recorded and kept on this
              device so you can listen again and compare attempts. Use headphones if you can.
            </Notice>
            <Button size="lg" disabled={!recordingSupported()} onClick={() => setPhase('running')}>
              <Mic size={20} /> Start
            </Button>
          </Card>
        </div>
      </ExamShell>
    )

  if (phase === 'review')
    return (
      <ExamShell title={title} clock={null} onExit={() => navigate('/ielts/practice')}>
        <div className="h-full overflow-y-auto px-4 py-6">
          <div className="mx-auto max-w-4xl">
            <SpeakingReview item={item} answers={answers} onRetry={onRetry} />
          </div>
        </div>
      </ExamShell>
    )

  const step = steps[index]!
  return (
    <ExamShell
      title={title}
      subtitle={`Question ${index + 1} of ${steps.length}`}
      clock={null}
      onExit={exit}
    >
      <div className="h-full overflow-y-auto px-4 py-6">
        <div className="mx-auto max-w-2xl">
          <StepView
            key={index}
            step={step}
            examiner={examiner}
            onDone={async (rec) => {
              const recording: Recording = {
                id: newId('rec'),
                createdAt: Date.now(),
                contentId: item.id,
                part: step.part,
                question: step.question,
                mimeType: rec.mimeType,
                durationMs: rec.durationMs,
                blob: rec.blob,
                attemptId: null,
              }
              await saveRecording(recording)
              setAnswers((a) => [...a, { step, recording }])
              if (index + 1 < steps.length) setIndex(index + 1)
              else {
                speakLine(
                  'Thank you. That is the end of the speaking practice.',
                  examiner,
                  1,
                  () => {},
                )
                setPhase('review')
              }
            }}
            onSkip={() => (index + 1 < steps.length ? setIndex(index + 1) : setPhase('review'))}
          />
        </div>
      </div>
    </ExamShell>
  )
}

type StepPhase = 'asking' | 'prep' | 'recording' | 'nudge'

function StepView({
  step,
  examiner,
  onDone,
  onSkip,
}: {
  step: Step
  examiner: ReturnType<typeof castVoices>[string] | undefined
  onDone: (rec: { blob: Blob; mimeType: string; durationMs: number }) => void
  onSkip: () => void
}) {
  const isCue = step.part === 2 && step.cue
  const maxMs = (isCue ? SPEAKING.part2.maxSpeakSeconds : 90) * 1000
  const recorder = useRecorder({ maxMs })
  const [phase, setPhase] = useState<StepPhase>('asking')
  const [notes, setNotes] = useState('')
  const prep = useExamClock(SPEAKING.part2.prepSeconds, {
    running: phase === 'prep',
    onExpire: () => beginSpeaking(),
  })
  const startRecording = recorder.start

  // Ask the question (or introduce the cue card). The flag ignores the "end" event fired when
  // speech is cancelled on unmount (and React's dev double-run).
  useEffect(() => {
    let cancelled = false
    const text = isCue ? INTRO_PART2 : step.question
    speakLine(text, examiner, 1, () => {
      if (cancelled) return
      if (isCue) setPhase('prep')
      else {
        setPhase('recording')
        void startRecording()
      }
    })
    return () => {
      cancelled = true
      stopAll()
    }
  }, [examiner, isCue, step.question, startRecording])

  const alive = useRef(true)
  useEffect(() => {
    alive.current = true
    return () => {
      alive.current = false
    }
  }, [])

  function beginSpeaking() {
    if (phase !== 'prep') return
    setPhase('recording')
    // Never open the microphone after the learner has left this question.
    speakLine(START_PART2, examiner, 1, () => alive.current && void startRecording())
  }

  // When recording stops (by the learner or the time limit), hand it over.
  const handedOver = useRef(false)
  useEffect(() => {
    if (recorder.state === 'stopped' && recorder.result && !handedOver.current) {
      handedOver.current = true
      onDone(recorder.result)
    }
  }, [recorder.state, recorder.result, onDone])

  function stop() {
    if (
      isCue &&
      recorder.elapsedMs < SPEAKING.part2.nudgeBeforeSeconds * 1000 &&
      phase !== 'nudge'
    ) {
      setPhase('nudge')
      return
    }
    recorder.stop()
  }

  return (
    <div className="grid gap-5">
      {isCue ? (
        <Card className="grid gap-2">
          <p className="text-muted text-xs font-semibold tracking-wide uppercase">
            Part 2 · Cue card
          </p>
          <p className="text-lg font-semibold">{step.cue!.prompt}</p>
          <p className="text-sm">You should say:</p>
          <ul className="grid list-disc gap-1 pl-6">
            {step.cue!.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p>{step.cue!.explain}</p>
        </Card>
      ) : (
        <Card className="flex items-start gap-3">
          <Volume2 className="text-primary mt-0.5 shrink-0" size={22} aria-hidden="true" />
          <div>
            <p className="text-muted text-xs font-semibold tracking-wide uppercase">
              Part {step.part}
            </p>
            <p className="text-lg font-semibold">{step.question}</p>
          </div>
        </Card>
      )}

      {phase === 'asking' && (
        <p className="text-muted text-center text-sm" aria-live="polite">
          The examiner is speaking…
        </p>
      )}

      {phase === 'prep' && (
        <div className="grid gap-3">
          <p className="text-center font-semibold" aria-live="polite">
            Preparation time:{' '}
            <span className="font-mono tabular-nums">{formatClock(prep.remainingMs ?? 0)}</span>
          </p>
          <label className="grid gap-1">
            <span className="text-sm font-semibold">Notes (keywords only)</span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={5}
              className="border-line bg-bg focus:border-primary rounded-2xl border p-3 outline-none"
              placeholder="who / what / when / why it was useful"
            />
          </label>
          <Button variant="secondary" className="justify-self-center" onClick={beginSpeaking}>
            I’m ready to speak
          </Button>
        </div>
      )}

      {(phase === 'recording' || phase === 'nudge') && (
        <div className="grid justify-items-center gap-3">
          {notes && (
            <div className="bg-surface-2 w-full rounded-2xl p-3 text-sm whitespace-pre-wrap">
              <span className="font-semibold">Your notes: </span>
              {notes}
            </div>
          )}
          {recorder.state === 'error' ? (
            <Notice tone="error">
              {recorder.error}
              <button
                type="button"
                className="text-primary mt-2 block font-semibold underline"
                onClick={() => void startRecording()}
              >
                Try again
              </button>
            </Notice>
          ) : (
            <>
              <p className="flex items-center gap-2 font-semibold" aria-live="polite">
                <span
                  className={cx(
                    'h-3 w-3 rounded-full',
                    recorder.state === 'recording' ? 'bg-danger animate-pulse' : 'bg-line',
                  )}
                  aria-hidden="true"
                />
                {recorder.state === 'recording'
                  ? 'Recording'
                  : recorder.state === 'requesting'
                    ? 'Allow the microphone…'
                    : 'Get ready…'}
                <span className="font-mono tabular-nums">
                  {formatClock(recorder.elapsedMs)} / {formatClock(maxMs)}
                </span>
              </p>
              {phase === 'nudge' && (
                <Notice tone="warn">
                  You’ve spoken for {formatClock(recorder.elapsedMs)}. In the exam, keep going for
                  close to two minutes: add an example, a feeling, or what you would do differently.
                  <div className="mt-2 flex gap-3">
                    <button
                      type="button"
                      className="text-primary font-semibold underline"
                      onClick={() => setPhase('recording')}
                    >
                      Keep going
                    </button>
                    <button
                      type="button"
                      className="font-semibold underline"
                      onClick={() => recorder.stop()}
                    >
                      Stop anyway
                    </button>
                  </div>
                </Notice>
              )}
              <Button size="lg" onClick={stop} disabled={recorder.state !== 'recording'}>
                <Square size={18} /> I’ve finished
              </Button>
            </>
          )}
          <button type="button" className="text-muted text-sm underline" onClick={onSkip}>
            Skip this question
          </button>
        </div>
      )}
    </div>
  )
}
