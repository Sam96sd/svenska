import { BookOpenText, GraduationCap } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { cx } from '../../../components/styles'
import { Button, Card } from '../../../components/ui'
import { DEFAULT_TARGET_BAND, MODULE_LABEL, type IeltsModule } from '../../examSpec'
import { updateIeltsSettings } from '../../storage/actions'
import { useIelts } from '../../storage/hooks'
import { TargetPicker } from '../shared/TargetPicker'

const MODULES: Array<{
  value: IeltsModule
  icon: typeof GraduationCap
  who: string
  differs: string
}> = [
  {
    value: 'academic',
    icon: GraduationCap,
    who: 'For university study and many professional registrations.',
    differs:
      'Reading: three long academic texts. Writing Task 1: describe a chart, table, map or process.',
  },
  {
    value: 'general',
    icon: BookOpenText,
    who: 'For migration, work and training below degree level.',
    differs: 'Reading: everyday and workplace texts, then one long text. Writing Task 1: a letter.',
  },
]

export default function SetupPage() {
  const { profileId, name, ielts } = useIelts()
  const navigate = useNavigate()
  const [module, setModule] = useState<IeltsModule | null>(ielts.settings.module)
  const [target, setTarget] = useState(ielts.settings.targetBand || DEFAULT_TARGET_BAND)

  function start() {
    if (!module) return
    updateIeltsSettings(profileId, { module, targetBand: target })
    navigate('/ielts', { replace: true })
  }

  return (
    <div className="animate-fade-up mx-auto max-w-2xl">
      <h1 className="font-display text-3xl font-semibold tracking-tight">IELTS prep for {name}</h1>
      <p className="text-muted mt-2">
        Two quick choices. You can change both any time in IELTS settings. Listening and Speaking
        are the same in both modules.
      </p>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-semibold">Which test are you taking?</legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {MODULES.map(({ value, icon: Icon, who, differs }) => {
            const active = module === value
            return (
              <label
                key={value}
                className={cx(
                  'bg-surface rounded-card flex cursor-pointer flex-col gap-2 border-2 p-5 transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-[var(--color-primary)]',
                  active ? 'border-primary' : 'border-line hover:border-muted',
                )}
              >
                <input
                  type="radio"
                  name="module"
                  className="sr-only"
                  checked={active}
                  onChange={() => setModule(value)}
                />
                <Icon size={28} className="text-primary" aria-hidden="true" />
                <span className="text-lg font-semibold">IELTS {MODULE_LABEL[value]}</span>
                <span className="text-sm">{who}</span>
                <span className="text-muted text-sm">{differs}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <Card className="mt-4">
        <TargetPicker value={target} onChange={setTarget} module={module ?? 'academic'} />
      </Card>

      <div className="mt-6 flex justify-end">
        <Button size="lg" onClick={start} disabled={!module}>
          Start IELTS prep
        </Button>
      </div>
    </div>
  )
}
