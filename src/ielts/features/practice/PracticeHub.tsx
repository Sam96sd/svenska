import { Link } from 'react-router'
import { Card, PageHeader } from '../../../components/ui'
import {
  LISTENING,
  MODULE_LABEL,
  READING,
  SKILL_LABEL,
  SPEAKING,
  WRITING,
  type Skill,
} from '../../examSpec'
import { Pill } from '../../components/ui'
import { useIelts } from '../../storage/hooks'
import { SKILL_ICON } from '../../components/skillIcons'

const SUMMARY: Record<Skill, string> = {
  listening: `${LISTENING.parts.length} parts · ${LISTENING.questions} questions · about ${LISTENING.minutes} min. Heard once only.`,
  reading: `${READING.questions} questions · ${READING.minutes} min. Split-screen reader with highlighting.`,
  writing: `Task 1 (${WRITING.task1.minWords}+ words) and Task 2 (${WRITING.task2.minWords}+ words) · ${WRITING.minutes} min.`,
  speaking: `Three parts · ${SPEAKING.minutes[0]}–${SPEAKING.minutes[1]} min. Cue card with a 1-minute prep timer.`,
}

export default function PracticeHub() {
  const { ielts } = useIelts()
  const module = ielts.settings.module ?? 'academic'
  return (
    <div className="animate-fade-up">
      <PageHeader title="Practice" subtitle={`IELTS ${MODULE_LABEL[module]}`} />
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {(Object.keys(SUMMARY) as Skill[]).map((skill) => {
          const Icon = SKILL_ICON[skill]
          return (
            <li key={skill}>
              <Card className="flex h-full gap-4">
                <Icon className="text-primary mt-0.5 shrink-0" size={26} aria-hidden="true" />
                <div>
                  <h2 className="flex items-center gap-2 font-semibold">
                    {SKILL_LABEL[skill]} <Pill>Coming soon</Pill>
                  </h2>
                  <p className="text-muted mt-1 text-sm">{SUMMARY[skill]}</p>
                </div>
              </Card>
            </li>
          )
        })}
      </ul>
      <p className="text-muted mt-6 text-sm">
        Practice screens arrive in the next update. Meanwhile, read{' '}
        <Link to="/ielts/format" className="text-primary font-semibold underline">
          how the test works
        </Link>
        .
      </p>
    </div>
  )
}
