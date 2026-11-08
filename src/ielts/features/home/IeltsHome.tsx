import { KeyRound, Sparkles } from 'lucide-react'
import { Link } from 'react-router'
import { buttonClass } from '../../../components/styles'
import { Card, PageHeader } from '../../../components/ui'
import { useAiConfig, hasFreeKey, modelFor } from '../../ai/keys'
import { MODULE_LABEL, SKILL_LABEL, type Skill } from '../../examSpec'
import { formatBand } from '../../scoring'
import { useIelts } from '../../storage/hooks'
import { Notice, Pill } from '../../components/ui'
import { SKILL_ICON } from '../../components/skillIcons'
import { TargetArithmetic } from '../shared/TargetPicker'

export default function IeltsHome() {
  const { profileId, name, ielts } = useIelts()
  const ai = useAiConfig(profileId)
  const module = ielts.settings.module ?? 'academic'
  const target = ielts.settings.targetBand

  return (
    <div className="animate-fade-up">
      <PageHeader
        title={`Hi ${name}`}
        subtitle={
          <span className="flex flex-wrap items-center gap-2">
            IELTS {MODULE_LABEL[module]} · target Band {formatBand(target)}
            <Pill tone="accent">Beta</Pill>
          </span>
        }
      />

      <div className="grid grid-cols-1 gap-4">
        <Notice tone="info">
          The IELTS section is being built in stages. Practice tests, AI feedback, the diagnostic,
          your study plan and full mock tests arrive over the next updates.
        </Notice>

        {!hasFreeKey(ai) ? (
          <Card className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <KeyRound className="text-primary shrink-0" size={28} aria-hidden="true" />
            <div className="flex-1">
              <h2 className="font-semibold">Add a free Gemini key for AI feedback</h2>
              <p className="text-muted text-sm">
                Essays and speaking answers are graded by Google Gemini on its free tier. It takes
                about two minutes to set up. Without a key you still get model answers and
                self-assessment checklists.
              </p>
            </div>
            <Link to="/ielts/settings#ai" className={buttonClass('primary', 'md')}>
              Set up AI
            </Link>
          </Card>
        ) : (
          <Card className="flex items-center gap-3">
            <Sparkles className="text-primary shrink-0" size={24} aria-hidden="true" />
            <p className="text-sm">
              AI feedback is on{modelFor(ai, 'standard') ? ` (${modelFor(ai, 'standard')})` : ''}.
            </p>
          </Card>
        )}

        <Card>
          <h2 className="mb-3 text-lg font-semibold">Your target</h2>
          <TargetArithmetic target={target} module={module} />
        </Card>

        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="mb-3 text-lg font-semibold">
            The four skills
          </h2>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {(Object.keys(SKILL_ICON) as Skill[]).map((skill) => {
              const Icon = SKILL_ICON[skill]
              return (
                <li key={skill}>
                  <Link
                    to="/ielts/practice"
                    className="bg-surface border-line rounded-card hover:border-primary flex h-full flex-col gap-2 border p-4 transition-colors"
                  >
                    <Icon className="text-primary" size={24} aria-hidden="true" />
                    <span className="font-semibold">{SKILL_LABEL[skill]}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>

        <Link to="/ielts/format" className="text-primary text-sm font-semibold underline">
          How the IELTS test works →
        </Link>
      </div>
    </div>
  )
}
