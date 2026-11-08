import { CheckCircle2, Circle, Clock, FileText } from 'lucide-react'
import { useMemo } from 'react'
import { Link, useParams } from 'react-router'
import { buttonClass, cx } from '../../../components/styles'
import { Button, Card, PageHeader } from '../../../components/ui'
import { hasPremiumKey, useAiConfig } from '../../ai/keys'
import { MOCKS, mocksFor, type MockTest } from '../../content/mocks'
import { MODULE_LABEL, SKILL_LABEL, SKILLS, type Skill } from '../../examSpec'
import { formatBand, overallBand, rawToBand, roundBand, writingBand } from '../../scoring'
import { BandBadge, Notice } from '../../components/ui'
import { newId, saveAttempt } from '../../storage/actions'
import { useIelts } from '../../storage/hooks'
import { type Attempt, type IeltsProfile } from '../../storage/schema'

/** All mock tests for the learner's module. */
export function MockListPage() {
  const { ielts } = useIelts()
  const module = ielts.settings.module ?? 'academic'
  const done = (m: MockTest) =>
    Object.values(ielts.attempts)
      .filter((a) => a.kind === 'mock' && a.contentId === m.id)
      .sort((a, b) => b.finishedAt - a.finishedAt)[0]
  return (
    <div className="animate-fade-up mx-auto max-w-3xl">
      <PageHeader
        title="Full mock tests"
        subtitle={`IELTS ${MODULE_LABEL[module]} · about 2 hours 45 minutes each`}
      />
      <Notice className="mb-5">
        Strict exam conditions: Listening is heard once, Reading and Writing are timed, and Speaking
        follows the three parts in order. You can take the sections on different days.
      </Notice>
      <ul className="grid gap-3">
        {mocksFor(module).map((m) => {
          const last = done(m)
          return (
            <li key={m.id}>
              <Link
                to={`/ielts/mock/${m.id}`}
                className="bg-surface border-line hover:border-primary flex items-center gap-3 rounded-2xl border p-4"
              >
                <FileText className="text-primary" size={24} aria-hidden="true" />
                <span className="flex-1 font-semibold">{m.title}</span>
                {last && (
                  <span className="text-muted text-sm">Last: Band {formatBand(last.band)}</span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

interface SectionDef {
  key: 'listening' | 'reading' | 'task1' | 'task2' | 'speaking'
  skill: Skill
  title: string
  minutes: string
  to: string
  contentId: string
}

function sectionsOf(m: MockTest): SectionDef[] {
  const back = encodeURIComponent(`/ielts/mock/${m.id}`)
  const q = `kind=mock&back=${back}`
  return [
    {
      key: 'listening',
      skill: 'listening',
      title: 'Listening (4 parts, 40 questions)',
      minutes: '30',
      to: `/ielts/mock/${m.id}/listening?${q}`,
      contentId: `${m.id}-listening`,
    },
    {
      key: 'reading',
      skill: 'reading',
      title: 'Reading (3 sections, 40 questions)',
      minutes: '60',
      to: `/ielts/mock/${m.id}/reading?${q}`,
      contentId: `${m.id}-reading`,
    },
    {
      key: 'task1',
      skill: 'writing',
      title: 'Writing Task 1',
      minutes: '20',
      to: `/ielts/writing/${m.writing.task1}?${q}`,
      contentId: m.writing.task1,
    },
    {
      key: 'task2',
      skill: 'writing',
      title: 'Writing Task 2',
      minutes: '40',
      to: `/ielts/writing/${m.writing.task2}?${q}`,
      contentId: m.writing.task2,
    },
    {
      key: 'speaking',
      skill: 'speaking',
      title: 'Speaking (Parts 1–3)',
      minutes: '11–14',
      to: `/ielts/speaking/${m.speaking.cue}?${q}&part1=${m.speaking.part1}`,
      contentId: m.speaking.cue,
    },
  ]
}

/** Latest mock attempts per section since this mock was last completed. */
function sectionAttempts(p: IeltsProfile, m: MockTest) {
  const attempts = Object.values(p.attempts)
  const since = attempts
    .filter((a) => a.kind === 'mock' && a.contentId === m.id)
    .reduce((t, a) => Math.max(t, a.finishedAt), 0)
  const after = attempts.filter((a) => a.kind === 'mock' && a.finishedAt > since)
  const out = {} as Record<SectionDef['key'], Attempt[]>
  for (const s of sectionsOf(m))
    out[s.key] = after
      .filter((a) => a.contentId === s.contentId)
      .sort((a, b) => b.updatedAt - a.updatedAt)
  return { out, since }
}

function mockBands(p: IeltsProfile, m: MockTest): Record<Skill, number | null> {
  const { out } = sectionAttempts(p, m)
  const latest = (k: SectionDef['key']) => out[k][0] ?? null
  const l = latest('listening')
  const r = latest('reading')
  const t1 = latest('task1')
  const t2 = latest('task2')
  // Speaking: one graded attempt per part; the band is their mean.
  const speakingBands = [1, 2, 3]
    .map((part) => out.speaking.find((a) => a.task === part && a.band !== null)?.band)
    .filter((b): b is number => typeof b === 'number')
  return {
    listening: l && l.correct !== null ? rawToBand(l.correct, 'listening', m.module) : null,
    reading: r && r.correct !== null ? rawToBand(r.correct, 'reading', m.module) : null,
    writing: t1?.band != null && t2?.band != null ? writingBand(t1.band, t2.band) : null,
    speaking: speakingBands.length
      ? roundBand(speakingBands.reduce((a, b) => a + b, 0) / speakingBands.length)
      : null,
  }
}

export default function MockTestPage() {
  const { id = '' } = useParams()
  const { profileId, ielts } = useIelts()
  const ai = useAiConfig(profileId)
  const mock = MOCKS.find((m) => m.id === id)
  const status = useMemo(() => (mock ? sectionAttempts(ielts, mock) : null), [ielts, mock])
  const bands = useMemo(() => (mock ? mockBands(ielts, mock) : null), [ielts, mock])
  if (!mock || !status || !bands) return <Notice tone="error">This mock test doesn’t exist.</Notice>

  const last = Object.values(ielts.attempts)
    .filter((a) => a.kind === 'mock' && a.contentId === mock.id)
    .sort((a, b) => b.finishedAt - a.finishedAt)[0]
  const complete = SKILLS.every((s) => bands[s] !== null)
  const anyStarted = Object.values(status.out).some((l) => l.length > 0)

  function finish() {
    const b = bands as Record<Skill, number>
    const now = Date.now()
    saveAttempt(profileId, {
      id: newId('a'),
      kind: 'mock',
      skill: null,
      contentId: mock!.id,
      module: mock!.module,
      startedAt: Math.min(
        ...Object.values(status!.out)
          .flat()
          .map((a) => a.startedAt),
      ),
      finishedAt: now,
      updatedAt: now,
      durationMs: Object.values(status!.out)
        .flat()
        .reduce((n, a) => n + a.durationMs, 0),
      correct: null,
      total: null,
      band: overallBand(b),
      bands: b,
      questions: [],
      criteria: {},
      text: null,
      task: null,
      feedbackKey: null,
      gradedBy: null,
    })
  }

  return (
    <div className="animate-fade-up mx-auto max-w-3xl">
      <PageHeader
        title={mock.title}
        subtitle={`IELTS ${MODULE_LABEL[mock.module]} · strict exam mode`}
      />
      {last && !anyStarted && (
        <Card className="mb-5 grid gap-3">
          <h2 className="text-lg font-semibold">
            Your result ({new Date(last.finishedAt).toLocaleDateString()})
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            {SKILLS.map((s) => (
              <BandBadge key={s} band={formatBand(last.bands[s])} label={SKILL_LABEL[s]} />
            ))}
            <span className="ml-auto">
              Overall <strong className="font-display text-2xl">{formatBand(last.band)}</strong>
            </span>
          </div>
          <p className="text-muted text-sm">Start any section again to retake the test.</p>
        </Card>
      )}
      <Notice className="mb-5">
        {hasPremiumKey(ai)
          ? 'Writing and Speaking are graded by the Pro model (premium key), with a cost check near your monthly cap.'
          : 'Writing and Speaking are graded by Gemini Flash (add a premium key for Pro grading), or by self-assessment without a key.'}{' '}
        Listening and Reading bands use the approximate raw-score tables.
      </Notice>
      <ol className="grid gap-3">
        {sectionsOf(mock).map((s) => {
          const a = status.out[s.key][0]
          const graded =
            s.key === 'speaking'
              ? status.out.speaking.some((x) => x.band !== null)
              : a && (a.band !== null || a.correct !== null)
          return (
            <li key={s.key}>
              <Card className="flex flex-wrap items-center gap-3">
                <span className={cx('shrink-0', graded ? 'text-success' : 'text-muted')}>
                  {graded ? <CheckCircle2 size={26} /> : <Circle size={26} />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{s.title}</p>
                  <p className="text-muted flex items-center gap-1 text-sm">
                    <Clock size={14} aria-hidden="true" /> {s.minutes} min
                    {a?.correct != null && ` · ${a.correct}/${a.total}`}
                    {a?.band != null &&
                      s.key !== 'listening' &&
                      s.key !== 'reading' &&
                      ` · Band ${formatBand(a.band)}`}
                  </p>
                  {a && !graded && (
                    <p className="text-accent-ink text-sm">
                      Not graded yet: open it again to get feedback or self-assess.
                    </p>
                  )}
                </div>
                <Link to={s.to} className={buttonClass(graded ? 'ghost' : 'primary', 'md')}>
                  {graded ? 'Redo' : a ? 'Open' : 'Start'}
                </Link>
              </Card>
            </li>
          )
        })}
      </ol>
      {complete && anyStarted && (
        <Card className="mt-5 grid gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {SKILLS.map((s) => (
              <BandBadge key={s} band={formatBand(bands[s])} label={SKILL_LABEL[s]} />
            ))}
            <span className="ml-auto">
              Overall{' '}
              <strong className="font-display text-2xl">
                {formatBand(overallBand(bands as Record<Skill, number>))}
              </strong>
            </span>
          </div>
          <Button size="lg" onClick={finish}>
            Save my mock result
          </Button>
        </Card>
      )}
    </div>
  )
}
