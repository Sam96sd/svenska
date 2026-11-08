import { CheckCircle2, Circle, Clock } from 'lucide-react'
import { useMemo } from 'react'
import { Link } from 'react-router'
import { buttonClass, cx } from '../../../components/styles'
import { Button, Card, PageHeader } from '../../../components/ui'
import { hasFreeKey, hasPremiumKey, useAiConfig } from '../../ai/keys'
import { catalogItem } from '../../content/catalog'
import { DIAGNOSTIC } from '../../content/diagnostic'
import { SKILL_LABEL, SKILLS, type Skill } from '../../examSpec'
import { overallBand, formatBand } from '../../scoring'
import { BandBadge, Notice } from '../../components/ui'
import { newId, saveAttempt } from '../../storage/actions'
import { useIelts } from '../../storage/hooks'
import { type Attempt } from '../../storage/schema'

const MINUTES: Record<Skill, number> = { listening: 8, reading: 20, writing: 40, speaking: 4 }

export default function DiagnosticPage() {
  const { profileId, ielts } = useIelts()
  const ai = useAiConfig(profileId)
  const module = ielts.settings.module ?? 'academic'
  const ids: Record<Skill, string> = {
    listening: DIAGNOSTIC.listening,
    reading: DIAGNOSTIC.reading[module],
    writing: DIAGNOSTIC.writing,
    speaking: DIAGNOSTIC.speaking,
  }

  const attempts = Object.values(ielts.attempts)
  const lastSummary = attempts
    .filter((a) => a.kind === 'diagnostic' && a.contentId === 'diagnostic')
    .sort((a, b) => b.finishedAt - a.finishedAt)[0]

  // Parts done since the last completed diagnostic (so it can be retaken later).
  const parts = useMemo(() => {
    const since = lastSummary?.finishedAt ?? 0
    const out = {} as Record<Skill, Attempt | null>
    for (const s of SKILLS)
      out[s] =
        attempts
          .filter((a) => a.kind === 'diagnostic' && a.contentId === ids[s] && a.finishedAt > since)
          .sort((a, b) => b.updatedAt - a.updatedAt)[0] ?? null
    return out
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ielts.attempts, lastSummary, module])

  const allBanded = SKILLS.every((s) => parts[s]?.band !== null && parts[s]?.band !== undefined)

  function finish() {
    const bands = Object.fromEntries(SKILLS.map((s) => [s, parts[s]!.band!])) as Record<
      Skill,
      number
    >
    const now = Date.now()
    saveAttempt(profileId, {
      id: newId('a'),
      kind: 'diagnostic',
      skill: null,
      contentId: 'diagnostic',
      module,
      startedAt: Math.min(...SKILLS.map((s) => parts[s]!.startedAt)),
      finishedAt: now,
      updatedAt: now,
      durationMs: SKILLS.reduce((n, s) => n + parts[s]!.durationMs, 0),
      correct: null,
      total: null,
      band: overallBand(bands),
      bands,
      questions: [],
      criteria: {},
      text: null,
      task: null,
      feedbackKey: null,
      gradedBy: null,
    })
  }

  const showResult = lastSummary && !SKILLS.some((s) => parts[s])

  return (
    <div className="animate-fade-up mx-auto max-w-3xl">
      <PageHeader
        title="Placement diagnostic"
        subtitle="About 45 minutes · an estimated band for each skill"
      />
      {showResult ? (
        <Card className="grid gap-4">
          <h2 className="text-lg font-semibold">Your diagnostic result</h2>
          <div className="flex flex-wrap items-center gap-3">
            {SKILLS.map((s) => (
              <BandBadge key={s} band={formatBand(lastSummary.bands[s])} label={SKILL_LABEL[s]} />
            ))}
            <span className="ml-auto">
              Overall ≈{' '}
              <strong className="font-display text-2xl">{formatBand(lastSummary.band)}</strong>
            </span>
          </div>
          <p className="text-muted text-sm">
            Taken {new Date(lastSummary.finishedAt).toLocaleDateString()}. Short sections give rough
            estimates: treat them as a starting point, not a prediction.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link to="/ielts/plan" className={buttonClass('primary', 'md')}>
              {ielts.plan ? 'Back to my plan' : 'Make my study plan'}
            </Link>
            <p className="text-muted self-center text-sm">To retake it, start any section below.</p>
          </div>
        </Card>
      ) : (
        <Notice>
          Do the four parts in any order, in one sitting or across a day. Each is timed like the
          exam.
          {hasPremiumKey(ai)
            ? ' Writing and Speaking are graded by the Pro model (premium key).'
            : hasFreeKey(ai)
              ? ' Writing and Speaking are graded by Gemini Flash.'
              : ' Without a Gemini key, you self-assess Writing and Speaking with a checklist.'}
        </Notice>
      )}

      <ol className="mt-5 grid gap-3">
        {SKILLS.map((s, i) => {
          const a = parts[s]
          const item = catalogItem(ids[s])
          const done = a?.band !== null && a?.band !== undefined
          const needsGrade = a && !done
          return (
            <li key={s}>
              <Card className="flex flex-wrap items-center gap-3">
                <span className={cx('shrink-0', done ? 'text-success' : 'text-muted')}>
                  {done ? <CheckCircle2 size={26} /> : <Circle size={26} />}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">
                    {i + 1}. {SKILL_LABEL[s]}{' '}
                    {done && (
                      <span className="text-muted font-normal">· Band {formatBand(a!.band)}</span>
                    )}
                  </p>
                  <p className="text-muted flex items-center gap-1 text-sm">
                    <Clock size={14} aria-hidden="true" /> {MINUTES[s]} min ·{' '}
                    {item?.title ?? ids[s]}
                    {s === 'speaking' && ' (Part 2 cue card)'}
                  </p>
                  {needsGrade && (
                    <p className="text-accent-ink text-sm">
                      Recorded but not graded yet: open it again to get feedback or self-assess.
                    </p>
                  )}
                </div>
                {!done && (
                  <Link
                    to={`/ielts/${s}/${ids[s]}?kind=diagnostic`}
                    className={buttonClass(needsGrade ? 'secondary' : 'primary', 'md')}
                  >
                    {needsGrade ? 'Open' : 'Start'}
                  </Link>
                )}
              </Card>
            </li>
          )
        })}
      </ol>

      {allBanded && (
        <Button size="lg" className="mt-5 w-full" onClick={finish}>
          See my bands
        </Button>
      )}
    </div>
  )
}
