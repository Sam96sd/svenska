import { Download, RotateCcw, Sparkles } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router'
import { buttonClass } from '../../../components/styles'
import { Button, Card } from '../../../components/ui'
import { gradeSpeaking } from '../../ai/grade'
import { hasFreeKey, hasPremiumKey, useAiConfig } from '../../ai/keys'
import { copyableSpeakingPrompt, type SpeakingInput } from '../../ai/prompts'
import { type SpeakingFeedback } from '../../ai/schemas'
import { audioForGrading, recordingsFor, type Recording } from '../../audio/recorder'
import { type SpeakingItem } from '../../content/schema'
import { SPEAKING_CRITERIA, SPEAKING_CRITERIA_IDS } from '../../criteria'
import { formatClock } from '../../engine/timers'
import { formatBand, criteriaBand } from '../../scoring'
import { BandBadge, Notice, Pill } from '../../components/ui'
import { useIelts } from '../../storage/hooks'
import { applyFeedback, applySelfAssessment, startProductiveAttempt } from '../../storage/record'
import { type Attempt } from '../../storage/schema'
import {
  CopyPromptButton,
  CriteriaBands,
  FeedbackMeta,
  GradingError,
  GradingProgress,
  ProButton,
  SelfAssessment,
  Tabs,
} from '../shared/AiWidgets'
import { useGrader } from '../shared/useGrader'
import { attemptKind, type SpecialRun } from '../shared/runKind'
import { type Answer } from './SpeakingSessionPage'

const PART_LABEL = { 1: 'Part 1', 2: 'Part 2', 3: 'Part 3' } as const

export function SpeakingReview({
  special = null,
  backTo = '/ielts/practice',
  item,
  answers,
  onRetry,
}: {
  item: SpeakingItem
  answers: Answer[]
  onRetry: () => void
  special?: SpecialRun
  backTo?: string
}) {
  const groups = useMemo(() => {
    const by = new Map<1 | 2 | 3, Answer[]>()
    for (const a of answers) by.set(a.step.part, [...(by.get(a.step.part) ?? []), a])
    return [...by]
  }, [answers])

  return (
    <div className="grid gap-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-semibold">Your answers</h1>
          <p className="text-muted text-sm">Recordings are kept on this device only.</p>
        </div>
        <Button variant="ghost" onClick={onRetry}>
          <RotateCcw size={18} /> Try again
        </Button>
      </header>
      {groups.length === 0 && <Notice>No answers were recorded.</Notice>}
      {groups.map(([part, list]) => (
        <PartFeedback key={part} item={item} part={part} answers={list} special={special} />
      ))}
      <EarlierAttempts contentId={item.id} exclude={answers.map((a) => a.recording.id)} />
      <Link to={backTo} className={buttonClass('secondary', 'md') + ' justify-self-start'}>
        {backTo === '/ielts/practice' ? 'Back to practice' : 'Continue'}
      </Link>
    </div>
  )
}

function PartFeedback({
  item,
  part,
  answers,
  special,
}: {
  item: SpeakingItem
  part: 1 | 2 | 3
  answers: Answer[]
  special: SpecialRun
}) {
  const { profileId, ielts } = useIelts()
  const ai = useAiConfig(profileId)
  const grader = useGrader<SpeakingFeedback>(profileId)
  const [attempt, setAttempt] = useState<Attempt | null>(null)
  const [tab, setTab] = useState<'feedback' | 'transcript' | 'pron' | 'band8' | 'self'>('feedback')
  const [self, setSelf] = useState<Record<string, boolean>>({})
  const seconds = answers.reduce((s, a) => s + a.recording.durationMs / 1000, 0)
  const input: SpeakingInput = { part, questions: answers.map((a) => a.step.question), seconds }
  const fb = grader.state.status === 'done' ? grader.state.result : null
  // The diagnostic and full mocks use the Pro model when a premium key is set.
  const firstTier = special && hasPremiumKey(ai) ? 'pro' : 'standard'

  function ensureAttempt(): Attempt {
    if (attempt) return attempt
    const a = startProductiveAttempt(profileId, {
      skill: 'speaking',
      contentId: item.id,
      module: ielts.settings.module ?? 'academic',
      kind: attemptKind(special, false),
      task: part,
      text: '',
      startedAt: answers[0]?.recording.createdAt ?? Date.now(),
      durationMs: seconds * 1000,
    })
    setAttempt(a)
    return a
  }

  async function grade(tier: 'standard' | 'pro') {
    const a = ensureAttempt()
    const result = await grader.grade(tier, async (ctx) => {
      const audios = await Promise.all(answers.map((x) => audioForGrading(x.recording.blob)))
      return gradeSpeaking(ctx, input, audios)
    })
    if (!result) return
    const errors = result.data.upgrades.map((u) => ({
      original: u.original,
      correction: u.better,
      type: /tense|grammar|article|preposition|agreement|verb/i.test(u.why)
        ? 'grammar'
        : 'vocabulary',
    }))
    setAttempt(
      applyFeedback(
        profileId,
        { ...a, text: result.data.transcript },
        { ...result.data, errors },
        { key: result.key, model: result.model },
      ),
    )
  }

  const tabs = fb
    ? ([
        { value: 'feedback', label: 'Feedback' },
        { value: 'transcript', label: 'Transcript' },
        { value: 'pron', label: 'Pronunciation' },
        { value: 'band8', label: 'Band 8 version' },
        { value: 'self', label: 'Self-check' },
      ] as const)
    : ([{ value: 'self', label: 'Self-check' }] as const)
  const current = tabs.some((t) => t.value === tab) ? tab : tabs[0]!.value

  return (
    <Card className="grid gap-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">
          {PART_LABEL[part]}{' '}
          <span className="text-muted text-sm font-normal">
            · {formatClock(seconds * 1000)} recorded
          </span>
        </h2>
        <div className="flex flex-wrap gap-2">
          {!fb && (hasFreeKey(ai) || firstTier === 'pro') && grader.state.status !== 'working' && (
            <Button onClick={() => void grade(firstTier)}>
              <Sparkles size={18} /> Get AI feedback
            </Button>
          )}
          {fb && hasPremiumKey(ai) && fb.tier !== 'pro' && (
            <ProButton onClick={() => void grade('pro')} />
          )}
          <CopyPromptButton text={copyableSpeakingPrompt(input)} />
        </div>
      </div>

      <ol className="grid gap-3">
        {answers.map((a, i) => (
          <RecordingRow
            key={a.recording.id}
            rec={a.recording}
            label={part === 2 ? 'Your talk' : `${i + 1}. ${a.step.question}`}
          />
        ))}
      </ol>

      {!hasFreeKey(ai) && (
        <Notice>
          Add a free Gemini key in IELTS settings → AI for a transcript, band estimates and
          pronunciation notes. Meanwhile, use the self-check, or download your recording and paste
          the grading prompt into any chatbot that accepts audio.
        </Notice>
      )}

      <GradingProgress state={grader.state} onCancel={grader.cancel} />
      {grader.state.status === 'error' && (
        <GradingError
          message={grader.state.message}
          retryable={grader.state.retryable}
          onRetry={() => void grade('standard')}
        />
      )}

      {fb && (
        <div className="flex flex-wrap items-center gap-4">
          <BandBadge band={formatBand(fb.data.overallBand)} label={PART_LABEL[part]} />
          <p className="min-w-0 flex-1">{fb.data.summary}</p>
        </div>
      )}
      {fb && <FeedbackMeta fb={fb} />}

      <Tabs
        label="Speaking feedback"
        value={current}
        onChange={(v) => setTab(v)}
        tabs={[...tabs]}
      />

      {current === 'feedback' && fb && (
        <div className="grid gap-4">
          <CriteriaBands items={fb.data.criteria} criteria={SPEAKING_CRITERIA} />
          <Notice tone="warn">
            Pronunciation band: AI estimate, less reliable than a human examiner (and affected by
            your microphone).
          </Notice>
          <section>
            <h3 className="mb-2 font-semibold">Fluency</h3>
            <ul className="grid gap-1 text-sm">
              {fb.data.fluency.pauses && <li>Pauses: {fb.data.fluency.pauses}</li>}
              {fb.data.fluency.fillers.length > 0 && (
                <li>Fillers: {fb.data.fluency.fillers.join(', ')}</li>
              )}
              <li>Self-corrections: {fb.data.fluency.selfCorrections}</li>
              {fb.data.fluency.development && <li>Development: {fb.data.fluency.development}</li>}
            </ul>
          </section>
          <section>
            <h3 className="mb-2 font-semibold">Top 3 changes for +0.5</h3>
            <ol className="grid list-decimal gap-1 pl-5 text-sm">
              {fb.data.topChanges.map((c, i) => (
                <li key={i}>
                  <strong>{c.change}</strong> {c.why}
                </li>
              ))}
            </ol>
          </section>
          {fb.data.upgrades.length > 0 && (
            <section>
              <h3 className="mb-2 font-semibold">Grammar and vocabulary upgrades</h3>
              <ul className="grid gap-2 text-sm">
                {fb.data.upgrades.map((u, i) => (
                  <li key={i}>
                    <span className="text-danger line-through">{u.original}</span> →{' '}
                    <strong className="text-success">{u.better}</strong>
                    {u.why && <span className="text-muted"> · {u.why}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
      {current === 'transcript' && fb && (
        <p className="text-[15px] leading-7 whitespace-pre-wrap">{fb.data.transcript}</p>
      )}
      {current === 'pron' && fb && (
        <div className="grid gap-3">
          <Notice tone="warn">AI estimate — less reliable than a human examiner.</Notice>
          {fb.data.pronunciation.length === 0 ? (
            <p className="text-sm">No specific pronunciation issues noted.</p>
          ) : (
            <ul className="grid gap-2">
              {fb.data.pronunciation.map((p, i) => (
                <li key={i} className="border-line rounded-2xl border p-3 text-sm">
                  <Pill tone="accent">{p.issue.replace('-', ' ')}</Pill>{' '}
                  <strong>{p.example}</strong>
                  <p className="text-muted mt-1">{p.tip}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {current === 'band8' && fb && (
        <p className="text-[15px] leading-7 whitespace-pre-wrap">{fb.data.band8Version}</p>
      )}
      {current === 'self' && (
        <div className="grid gap-3">
          <SelfAssessment
            criteria={SPEAKING_CRITERIA_IDS.map((id) => SPEAKING_CRITERIA[id])}
            value={self}
            onChange={setSelf}
          />
          <Button
            className="justify-self-start"
            onClick={() => {
              const bands = Object.fromEntries(
                SPEAKING_CRITERIA_IDS.map((id) => {
                  const list = SPEAKING_CRITERIA[id].checklist
                  const ratio = list.filter((_, i) => self[`${id}:${i}`]).length / list.length
                  return [id, ratio >= 0.9 ? 8 : ratio >= 0.7 ? 7 : ratio >= 0.45 ? 6 : 5]
                }),
              )
              applySelfAssessment(
                profileId,
                ensureAttempt(),
                bands,
                criteriaBand(Object.values(bands)),
              )
              alert('Saved your self-assessment to your progress.')
            }}
          >
            Save my self-assessment
          </Button>
        </div>
      )}
    </Card>
  )
}

function RecordingRow({ rec, label }: { rec: Recording; label: string }) {
  const url = useMemo(() => URL.createObjectURL(rec.blob), [rec.blob])
  useEffect(() => () => URL.revokeObjectURL(url), [url])
  const ext = rec.mimeType.includes('mp4') ? 'm4a' : rec.mimeType.includes('ogg') ? 'ogg' : 'webm'
  return (
    <li className="grid gap-1">
      <p className="text-sm font-semibold">{label}</p>
      <div className="flex flex-wrap items-center gap-2">
        <audio controls src={url} className="h-10 max-w-full min-w-0 flex-1" />
        <a
          href={url}
          download={`ielts-${rec.contentId}-${rec.id}.${ext}`}
          className="text-primary flex items-center gap-1 text-sm font-semibold"
        >
          <Download size={16} aria-hidden="true" /> Download
        </a>
      </div>
    </li>
  )
}

/** Earlier recordings of the same topic, to hear progress over time. */
function EarlierAttempts({ contentId, exclude }: { contentId: string; exclude: string[] }) {
  const [list, setList] = useState<Recording[]>([])
  const excludeKey = exclude.join(',')
  useEffect(() => {
    let alive = true
    void recordingsFor(contentId).then((all) => {
      if (alive) setList(all.filter((r) => !excludeKey.split(',').includes(r.id)))
    })
    return () => {
      alive = false
    }
  }, [contentId, excludeKey])
  if (list.length === 0) return null
  return (
    <Card className="grid gap-3">
      <h2 className="text-lg font-semibold">Compare with earlier attempts</h2>
      <ol className="grid gap-3">
        {list.slice(0, 10).map((r) => (
          <RecordingRow
            key={r.id}
            rec={r}
            label={`${new Date(r.createdAt).toLocaleDateString()} · Part ${r.part} · ${formatClock(r.durationMs)}`}
          />
        ))}
      </ol>
    </Card>
  )
}
