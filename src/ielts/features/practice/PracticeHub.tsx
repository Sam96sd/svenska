import { ChevronRight } from 'lucide-react'
import { type ReactNode } from 'react'
import { Link } from 'react-router'
import { Card, PageHeader } from '../../../components/ui'
import { catalogFor, type CatalogItem } from '../../content/catalog'
import { QUESTION_TYPE_LABEL } from '../../content/schema'
import { MODULE_LABEL, SKILL_LABEL, SPEAKING, WRITING, type Skill } from '../../examSpec'
import { formatBand } from '../../scoring'
import { Pill } from '../../components/ui'
import { SKILL_ICON } from '../../components/skillIcons'
import { useIelts } from '../../storage/hooks'
import { type IeltsProfile } from '../../storage/schema'

const SECTION_LABEL: Record<string, string> = {
  academic: 'Academic passage',
  gt1: 'Section 1',
  gt2: 'Section 2',
  gt3: 'Section 3',
  part1: 'Part 1',
  part2: 'Part 2',
  part3: 'Part 3',
  part4: 'Part 4',
}

function best(ielts: IeltsProfile, id: string) {
  let top: { correct: number; total: number; band: number | null } | null = null
  for (const a of Object.values(ielts.attempts))
    if (a.contentId === id && a.correct !== null && a.total)
      if (!top || a.correct / a.total > top.correct / top.total)
        top = { correct: a.correct, total: a.total, band: a.band }
  return top
}

function ItemList({ items, ielts }: { items: CatalogItem[]; ielts: IeltsProfile }) {
  if (items.length === 0) return <p className="text-muted text-sm">More practice is on its way.</p>
  return (
    <ul className="grid gap-2">
      {items.map((c) => {
        const b = best(ielts, c.id)
        return (
          <li key={c.id}>
            <Link
              to={`/ielts/${c.skill}/${c.id}`}
              className="bg-surface border-line hover:border-primary flex items-center gap-3 rounded-2xl border p-4 transition-colors"
            >
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{c.title}</p>
                <p className="text-muted text-sm">
                  {SECTION_LABEL[c.section] ?? c.section} · {c.questions} questions · {c.minutes}{' '}
                  min
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {c.types.map((t) => (
                    <Pill key={t}>{QUESTION_TYPE_LABEL[t] ?? t}</Pill>
                  ))}
                </div>
              </div>
              {b && (
                <span className="text-right text-sm">
                  <span className="block font-semibold tabular-nums">
                    {b.correct}/{b.total}
                  </span>
                  <span className="text-muted text-xs">best · ≈{formatBand(b.band)}</span>
                </span>
              )}
              <ChevronRight size={18} className="text-muted shrink-0" aria-hidden="true" />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function SkillSection({ skill, children }: { skill: Skill; children: ReactNode }) {
  const Icon = SKILL_ICON[skill]
  return (
    <section aria-labelledby={`h-${skill}`} className="grid gap-3">
      <h2 id={`h-${skill}`} className="flex items-center gap-2 text-lg font-semibold">
        <Icon size={22} className="text-primary" aria-hidden="true" /> {SKILL_LABEL[skill]}
      </h2>
      {children}
    </section>
  )
}

export default function PracticeHub() {
  const { ielts } = useIelts()
  const module = ielts.settings.module ?? 'academic'
  return (
    <div className="animate-fade-up">
      <PageHeader title="Practice" subtitle={`IELTS ${MODULE_LABEL[module]}`} />
      <div className="grid gap-8">
        <SkillSection skill="listening">
          <ItemList items={catalogFor('listening', module)} ielts={ielts} />
        </SkillSection>
        <SkillSection skill="reading">
          <ItemList items={catalogFor('reading', module)} ielts={ielts} />
        </SkillSection>
        <SkillSection skill="writing">
          <Card className="text-sm">
            Task 1 ({WRITING.task1.minWords}+ words) and Task 2 ({WRITING.task2.minWords}+ words)
            with AI feedback. <Pill>Coming soon</Pill>
          </Card>
        </SkillSection>
        <SkillSection skill="speaking">
          <Card className="text-sm">
            Parts 1–3 with an examiner voice and a {SPEAKING.part2.prepSeconds}-second cue-card
            timer. <Pill>Coming soon</Pill>
          </Card>
        </SkillSection>
      </div>
    </div>
  )
}
