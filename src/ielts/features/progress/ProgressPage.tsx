import { useMemo } from 'react'
import { Link } from 'react-router'
import { Card, PageHeader } from '../../../components/ui'
import { catalogItem } from '../../content/catalog'
import { QUESTION_TYPE_LABEL } from '../../content/schema'
import { SPEAKING_CRITERIA, WRITING_CRITERIA } from '../../criteria'
import { SKILL_LABEL, SKILLS } from '../../examSpec'
import {
  accuracyByType,
  bandHistory,
  criterionTrends,
  currentBands,
  estimatedOverall,
} from '../../insights/stats'
import { formatBand } from '../../scoring'
import { BandBadge, Notice, Pill } from '../../components/ui'
import { useIelts } from '../../storage/hooks'
import { PercentBars, TrendChart } from './TrendChart'

export default function ProgressPage() {
  const { ielts } = useIelts()
  const target = ielts.settings.targetBand
  const bands = useMemo(() => currentBands(ielts), [ielts])
  const overall = estimatedOverall(bands)
  const history = useMemo(() => bandHistory(ielts), [ielts])
  const types = useMemo(() => accuracyByType(ielts), [ielts])
  const writing = useMemo(() => criterionTrends(ielts, 'writing'), [ielts])
  const speaking = useMemo(() => criterionTrends(ielts, 'speaking'), [ielts])
  const recent = useMemo(
    () =>
      Object.values(ielts.attempts)
        .sort((a, b) => b.finishedAt - a.finishedAt)
        .slice(0, 10),
    [ielts.attempts],
  )

  if (recent.length === 0)
    return (
      <div className="animate-fade-up">
        <PageHeader title="Progress" />
        <Notice>
          Your band trends, accuracy per question type and writing and speaking criterion trends
          appear here once you start practising. The{' '}
          <Link to="/ielts/diagnostic" className="text-primary font-semibold underline">
            placement diagnostic
          </Link>{' '}
          is the quickest way to start.
        </Notice>
      </div>
    )

  return (
    <div className="animate-fade-up">
      <PageHeader title="Progress" subtitle={`Target: Band ${formatBand(target)}`} />
      <div className="grid gap-5">
        <Card className="grid gap-4">
          <h2 className="text-lg font-semibold">Where you are now</h2>
          <div className="flex flex-wrap items-center gap-3">
            {SKILLS.map((s) => (
              <div key={s} className="grid justify-items-center gap-1">
                <BandBadge band={formatBand(bands[s])} label={SKILL_LABEL[s]} />
                {bands[s] !== null && bands[s]! < target && (
                  <span className="text-muted text-xs">−{formatBand(target - bands[s]!)}</span>
                )}
              </div>
            ))}
            <div className="border-line ml-auto grid justify-items-center gap-1 border-l pl-4">
              <BandBadge band={formatBand(overall)} label="Overall" />
              <span className="text-muted text-xs">estimate</span>
            </div>
          </div>
          <p className="text-muted text-sm">
            Estimates use your last three results per skill (full mocks and the diagnostic count
            double). “–” means not enough data yet.
          </p>
        </Card>

        <Card className="grid gap-3">
          <h2 className="text-lg font-semibold">Band trend</h2>
          <TrendChart
            label="Band per skill over time"
            target={target}
            series={SKILLS.map((s) => ({ name: SKILL_LABEL[s], points: history[s] }))}
          />
        </Card>

        {types.length > 0 && (
          <Card className="grid gap-3">
            <h2 className="text-lg font-semibold">Accuracy by question type</h2>
            <p className="text-muted text-sm">
              Weakest first. For Band 8 you need about 88% in Listening and Reading.
            </p>
            <PercentBars
              rows={types.map((t) => ({
                label: `${QUESTION_TYPE_LABEL[t.type] ?? t.type} (${SKILL_LABEL[t.skill].toLowerCase()})`,
                value: t.accuracy,
                note: `${t.right}/${t.total}${t.avgTimeMs ? ` · ${Math.round(t.avgTimeMs / 1000)} s per question` : ''}`,
              }))}
            />
          </Card>
        )}

        {Object.keys(writing).length > 0 && (
          <Card className="grid gap-3">
            <h2 className="text-lg font-semibold">Writing criteria</h2>
            <TrendChart
              label="Writing band per criterion over time"
              target={target}
              series={Object.entries(writing).map(([id, points]) => ({
                name: WRITING_CRITERIA[id as keyof typeof WRITING_CRITERIA]?.name ?? id,
                points,
              }))}
            />
          </Card>
        )}

        {Object.keys(speaking).length > 0 && (
          <Card className="grid gap-3">
            <h2 className="text-lg font-semibold">Speaking criteria</h2>
            <TrendChart
              label="Speaking band per criterion over time"
              target={target}
              series={Object.entries(speaking).map(([id, points]) => ({
                name: SPEAKING_CRITERIA[id as keyof typeof SPEAKING_CRITERIA]?.name ?? id,
                points,
              }))}
            />
            <p className="text-muted text-xs">
              Pronunciation is an AI estimate, less reliable than a human examiner.
            </p>
          </Card>
        )}

        <Card className="grid gap-3">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Recent activity</h2>
            <Link to="/ielts/errors" className="text-primary text-sm font-semibold underline">
              Error log →
            </Link>
          </div>
          <ul className="grid gap-2 text-sm">
            {recent.map((a) => (
              <li key={a.id} className="flex flex-wrap items-center justify-between gap-2">
                <span>
                  <span className="text-muted">{new Date(a.finishedAt).toLocaleDateString()}</span>{' '}
                  · {catalogItem(a.contentId)?.title ?? a.contentId}{' '}
                  {a.kind !== 'practice' && <Pill>{a.kind}</Pill>}
                </span>
                <span className="font-semibold tabular-nums">
                  {a.correct !== null && a.total ? `${a.correct}/${a.total} · ` : ''}
                  {a.band !== null ? `Band ${formatBand(a.band)}` : ''}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  )
}
