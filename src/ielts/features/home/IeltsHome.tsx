import { ClipboardList, KeyRound, ListChecks, Sparkles } from 'lucide-react'
import { useMemo } from 'react'
import { Link } from 'react-router'
import { buttonClass } from '../../../components/styles'
import { Card, PageHeader } from '../../../components/ui'
import { hasFreeKey, modelFor, useAiConfig } from '../../ai/keys'
import { MODULE_LABEL, SKILL_LABEL, SKILLS } from '../../examSpec'
import { categoryLabel, reasonLabel } from '../../insights/remedy'
import { currentBands, errorPatterns, estimatedOverall } from '../../insights/stats'
import { usePlanDays } from '../../insights/usePlan'
import { formatBand } from '../../scoring'
import { useIelts } from '../../storage/hooks'
import { BandBadge } from '../../components/ui'
import { TodayTasks } from '../plan/TodayTasks'
import { TargetArithmetic } from '../shared/TargetPicker'

export default function IeltsHome() {
  const { profileId, name, ielts } = useIelts()
  const ai = useAiConfig(profileId)
  const module = ielts.settings.module ?? 'academic'
  const target = ielts.settings.targetBand
  const days = usePlanDays(ielts, 1)
  const bands = useMemo(() => currentBands(ielts), [ielts])
  const overall = estimatedOverall(bands)
  const topPattern = useMemo(() => errorPatterns(ielts)[0] ?? null, [ielts])
  const hasDiagnostic = Object.values(ielts.attempts).some((a) => a.kind === 'diagnostic')
  const anyBand = SKILLS.some((s) => bands[s] !== null)

  return (
    <div className="animate-fade-up">
      <PageHeader
        title={`Hi ${name}`}
        subtitle={
          <span className="flex flex-wrap items-center gap-2">
            IELTS {MODULE_LABEL[module]} · target Band {formatBand(target)}
          </span>
        }
      />

      <div className="grid gap-4">
        {!hasFreeKey(ai) && (
          <Card className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <KeyRound className="text-primary shrink-0" size={28} aria-hidden="true" />
            <div className="flex-1">
              <h2 className="font-semibold">Add a free Gemini key for AI feedback</h2>
              <p className="text-muted text-sm">
                Essays and speaking answers are graded by Google Gemini on its free tier. It takes
                about two minutes. Without a key you still get model answers and self-assessment
                checklists.
              </p>
            </div>
            <Link to="/ielts/settings#ai" className={buttonClass('primary', 'md')}>
              Set up AI
            </Link>
          </Card>
        )}

        {days ? (
          <Card className="grid gap-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <ListChecks size={22} className="text-primary" aria-hidden="true" /> Today’s plan
              </h2>
              <Link to="/ielts/plan" className="text-primary text-sm font-semibold underline">
                Whole plan →
              </Link>
            </div>
            <TodayTasks profileId={profileId} ielts={ielts} view={days[0]!} />
          </Card>
        ) : (
          <Card className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ClipboardList className="text-primary shrink-0" size={28} aria-hidden="true" />
            <div className="flex-1">
              <h2 className="font-semibold">
                {hasDiagnostic ? 'Make your study plan' : 'Start with the placement diagnostic'}
              </h2>
              <p className="text-muted text-sm">
                {hasDiagnostic
                  ? 'A self-paced 8-week plan (you choose the length and daily time) that works on your weakest skill most.'
                  : 'About 45 minutes: short Listening and Reading sections, one essay and one cue card. You get a band estimate for each skill.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {!hasDiagnostic && (
                <Link to="/ielts/diagnostic" className={buttonClass('primary', 'md')}>
                  Take the diagnostic
                </Link>
              )}
              <Link
                to="/ielts/plan"
                className={buttonClass(hasDiagnostic ? 'primary' : 'secondary', 'md')}
              >
                {hasDiagnostic ? 'Make my plan' : 'Skip to the plan'}
              </Link>
            </div>
          </Card>
        )}

        {anyBand && (
          <Card className="grid gap-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">Your bands now</h2>
              <Link to="/ielts/progress" className="text-primary text-sm font-semibold underline">
                Progress →
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {SKILLS.map((s) => (
                <BandBadge key={s} band={formatBand(bands[s])} label={SKILL_LABEL[s]} />
              ))}
              <span className="text-muted ml-auto text-sm">
                Overall ≈ <strong className="text-ink">{formatBand(overall)}</strong>
              </span>
            </div>
          </Card>
        )}

        {topPattern && (
          <Card className="flex flex-wrap items-center gap-3">
            <Sparkles className="text-accent-ink shrink-0" size={22} aria-hidden="true" />
            <p className="min-w-0 flex-1 text-sm">
              Your most frequent mistake: <strong>{categoryLabel(topPattern)}</strong> —{' '}
              {reasonLabel(topPattern.reason).toLowerCase()} ({topPattern.count}×).
            </p>
            <Link to="/ielts/errors" className={buttonClass('secondary', 'sm')}>
              Fix it
            </Link>
          </Card>
        )}

        <Card>
          <h2 className="mb-3 text-lg font-semibold">Your target</h2>
          <TargetArithmetic target={target} module={module} />
        </Card>

        {hasFreeKey(ai) && (
          <p className="text-muted text-xs">
            AI feedback is on{modelFor(ai, 'standard') ? ` (${modelFor(ai, 'standard')})` : ''}.
          </p>
        )}
      </div>
    </div>
  )
}
