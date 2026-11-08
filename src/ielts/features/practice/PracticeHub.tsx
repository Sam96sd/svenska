import {
  AudioLines,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Ear,
  ExternalLink,
  FileText,
  Layers,
  Scale,
  Sparkles,
} from 'lucide-react'
import { type ReactNode } from 'react'
import { Link } from 'react-router'
import { PageHeader } from '../../../components/ui'
import { catalogFor, lessonsFor, type CatalogItem, type LessonMeta } from '../../content/catalog'
import { QUESTION_TYPE_LABEL } from '../../content/schema'
import { MODULE_LABEL, SKILL_LABEL, type Skill } from '../../examSpec'
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
  task1: 'Task 1',
  task2: 'Task 2',
}

const TYPE_LABEL: Record<string, string> = {
  opinion: 'Opinion essay',
  discussion: 'Discussion essay',
  'adv-disadv': 'Advantages / disadvantages',
  'problem-solution': 'Problem / solution',
  'two-part': 'Two-part question',
  complaint: 'Complaint letter',
  request: 'Request letter',
  apology: 'Apology letter',
  invitation: 'Invitation letter',
  thanks: 'Thank-you letter',
  explanation: 'Explanation letter',
  line: 'Line graph',
  bar: 'Bar chart',
  pie: 'Pie chart',
  table: 'Table',
  mixed: 'Mixed charts',
  map: 'Maps',
  process: 'Process',
  part1: 'Part 1',
  part2: 'Part 2 cue card',
  part3: 'Part 3 discussion',
}

/** Best result so far: "11/14" for reading/listening, the band for writing/speaking. */
function best(ielts: IeltsProfile, id: string): { label: string; band: number | null } | null {
  let top: { score: number; label: string; band: number | null } | null = null
  for (const a of Object.values(ielts.attempts)) {
    if (a.contentId !== id) continue
    if (a.correct !== null && a.total) {
      const score = a.correct / a.total
      if (!top || score > top.score) top = { score, label: `${a.correct}/${a.total}`, band: a.band }
    } else if (a.band !== null && (!top || a.band / 9 > top.score))
      top = { score: a.band / 9, label: `Band ${formatBand(a.band)}`, band: a.band }
  }
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
                  {SECTION_LABEL[c.section] ?? c.section}
                  {c.skill === 'reading' || c.skill === 'listening'
                    ? ` · ${c.questions} questions`
                    : ''}{' '}
                  · {c.minutes} min
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {c.types.map((t) => (
                    <Pill key={t}>{QUESTION_TYPE_LABEL[t] ?? TYPE_LABEL[t] ?? t}</Pill>
                  ))}
                </div>
              </div>
              {b && (
                <span className="text-right text-sm">
                  <span className="block font-semibold tabular-nums">{b.label}</span>
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

function LessonList({ lessons, ielts }: { lessons: LessonMeta[]; ielts: IeltsProfile }) {
  if (lessons.length === 0) return null
  return (
    <details
      className="bg-surface-2 rounded-2xl p-3"
      open={lessons.some((l) => !ielts.lessonsDone[l.id])}
    >
      <summary className="cursor-pointer text-sm font-semibold">
        Strategy lessons ({lessons.filter((l) => ielts.lessonsDone[l.id]).length}/{lessons.length}{' '}
        done)
      </summary>
      <ul className="mt-2 grid gap-1 sm:grid-cols-2">
        {lessons.map((l) => (
          <li key={l.id}>
            <Link
              to={`/ielts/lessons/${l.id}`}
              className="hover:bg-surface flex items-start gap-2 rounded-xl p-2 text-sm transition-colors"
            >
              {ielts.lessonsDone[l.id] ? (
                <CheckCircle2
                  size={18}
                  className="text-success mt-0.5 shrink-0"
                  aria-label="Done"
                />
              ) : (
                <BookOpen size={18} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
              )}
              <span>
                <span className="font-semibold">{l.title}</span>
                <span className="text-muted block text-xs">{l.summary}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  )
}

function Tools() {
  const tools = [
    {
      to: '/ielts/mock',
      icon: FileText,
      title: 'Full mock tests',
      text: 'All four skills, exam conditions',
    },
    {
      to: '/ielts/vocab',
      icon: Layers,
      title: 'Vocabulary',
      text: 'Language banks with spaced repetition',
    },
    {
      to: '/ielts/pronunciation',
      icon: AudioLines,
      title: 'Pronunciation',
      text: 'Stress, endings, tricky sounds',
    },
    {
      to: '/ielts/generate',
      icon: Sparkles,
      title: 'Generate with AI',
      text: 'Extra questions and your error drill',
    },
    {
      to: '/ielts/drills/dictation',
      icon: Ear,
      title: 'Dictation trainer',
      text: 'Names, numbers, postcodes, dates',
    },
    {
      to: '/ielts/criteria',
      icon: Scale,
      title: 'Band 7 vs 8 vs 9',
      text: 'What each criterion rewards',
    },
    {
      to: '/ielts/format',
      icon: BookOpen,
      title: 'How the test works',
      text: 'Timings, parts and scoring',
    },
    {
      to: '/ielts/resources',
      icon: ExternalLink,
      title: 'Official free tests',
      text: 'Links to real practice material',
    },
  ]
  return (
    <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {tools.map(({ to, icon: Icon, title, text }) => (
        <li key={to}>
          <Link
            to={to}
            className="bg-surface border-line hover:border-primary flex h-full flex-col gap-1 rounded-2xl border p-3 transition-colors"
          >
            <Icon size={20} className="text-primary" aria-hidden="true" />
            <span className="text-sm font-semibold">{title}</span>
            <span className="text-muted text-xs">{text}</span>
          </Link>
        </li>
      ))}
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
        <Tools />
        <SkillSection skill="listening">
          <LessonList lessons={lessonsFor('listening', module)} ielts={ielts} />
          <ItemList items={catalogFor('listening', module)} ielts={ielts} />
        </SkillSection>
        <SkillSection skill="reading">
          <LessonList lessons={lessonsFor('reading', module)} ielts={ielts} />
          <ItemList items={catalogFor('reading', module)} ielts={ielts} />
        </SkillSection>
        <SkillSection skill="writing">
          <LessonList lessons={lessonsFor('writing', module)} ielts={ielts} />
          <ItemList items={catalogFor('writing', module)} ielts={ielts} />
        </SkillSection>
        <SkillSection skill="speaking">
          <LessonList lessons={lessonsFor('speaking', module)} ielts={ielts} />
          <ItemList items={catalogFor('speaking', module)} ielts={ielts} />
        </SkillSection>
      </div>
    </div>
  )
}
