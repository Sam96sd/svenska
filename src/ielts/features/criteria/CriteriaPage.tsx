import { useState } from 'react'
import { Card, PageHeader } from '../../../components/ui'
import { SPEAKING_CRITERIA, WRITING_CRITERIA, type Criterion } from '../../criteria'
import { BandBadge } from '../../components/ui'
import { Tabs } from '../shared/AiWidgets'

/** "7 vs 8 vs 9" cards for every Writing and Speaking criterion. */
export default function CriteriaPage() {
  const [skill, setSkill] = useState<'writing' | 'speaking'>('writing')
  const list: Criterion[] = Object.values(
    skill === 'writing' ? WRITING_CRITERIA : SPEAKING_CRITERIA,
  )
  return (
    <div className="animate-fade-up">
      <PageHeader
        title="What each band looks like"
        subtitle="Paraphrased from the public descriptors, with short examples"
      />
      <Tabs
        label="Skill"
        value={skill}
        onChange={setSkill}
        tabs={[
          { value: 'writing', label: 'Writing' },
          { value: 'speaking', label: 'Speaking' },
        ]}
      />
      <div className="mt-5 grid gap-5">
        {list.map((c) => (
          <Card key={c.id} className="grid gap-3">
            <div>
              <h2 className="text-lg font-semibold">
                {c.name} <span className="text-muted text-sm font-normal">({c.short})</span>
              </h2>
              <p className="text-muted text-sm">{c.focus}</p>
            </div>
            <ol className="grid gap-3 md:grid-cols-3">
              {c.levels
                .filter((l) => l.band >= 7)
                .map((l) => (
                  <li
                    key={l.band}
                    className="border-line grid content-start gap-2 rounded-2xl border p-3"
                  >
                    <BandBadge band={String(l.band)} />
                    <p className="text-sm">{l.summary}</p>
                    <p className="bg-surface-2 rounded-xl p-2 text-sm italic">{l.example}</p>
                  </li>
                ))}
            </ol>
            <details className="text-sm">
              <summary className="text-primary cursor-pointer font-semibold">
                Band 6, for comparison
              </summary>
              <p className="mt-2">{c.levels.find((l) => l.band === 6)?.summary}</p>
              <p className="bg-surface-2 mt-1 rounded-xl p-2 italic">
                {c.levels.find((l) => l.band === 6)?.example}
              </p>
            </details>
          </Card>
        ))}
      </div>
    </div>
  )
}
