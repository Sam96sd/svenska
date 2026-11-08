import { Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { buttonClass } from '../../../components/styles'
import { Button, Card, PageHeader } from '../../../components/ui'
import { GeminiError } from '../../ai/gemini'
import { saveGenerated, useGenerated } from '../../ai/generatedStore'
import {
  generateErrorDrill,
  generateLetter,
  generateSpeakingSet,
  generateTask2,
  type GeneratedDrill,
  type GeneratedLetter,
} from '../../ai/generators'
import { hasFreeKey, PRIVACY_NOTICE, useAiConfig } from '../../ai/keys'
import { TASK2_TYPES } from '../../content/schema'
import { Notice, Pill, inputClass } from '../../components/ui'
import { newId } from '../../storage/actions'
import { useIelts } from '../../storage/hooks'
import { Tabs } from '../shared/AiWidgets'

type Tab = 'task2' | 'letter' | 'speaking' | 'drill'

const TOPICS = [
  'Education',
  'Technology',
  'Environment',
  'Health',
  'Crime',
  'Work',
  'Cities',
  'Globalisation',
  'Media',
  'Government spending',
  'Culture',
  'Transport',
  'Family',
  'Science',
  'Tourism',
  'Sport',
]
const TYPE_LABEL: Record<(typeof TASK2_TYPES)[number], string> = {
  opinion: 'Opinion (agree/disagree)',
  discussion: 'Discuss both views',
  'adv-disadv': 'Advantages / disadvantages',
  'problem-solution': 'Problem / solution',
  'two-part': 'Two-part question',
}

export default function GeneratePage() {
  const { profileId, ielts } = useIelts()
  const ai = useAiConfig(profileId)
  const items = useGenerated(profileId)
  const [tab, setTab] = useState<Tab>('task2')
  const [topic, setTopic] = useState('Technology')
  const [type, setType] = useState<(typeof TASK2_TYPES)[number]>('discussion')
  const [letterType, setLetterType] = useState<GeneratedLetter['type']>('complaint')
  const [tone, setTone] = useState<GeneratedLetter['tone']>('formal')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [drill, setDrill] = useState<GeneratedDrill | null>(null)

  const writingErrors = useMemo(
    () =>
      Object.values(ielts.errors)
        .filter(
          (e) => (e.skill === 'writing' || e.skill === 'speaking') && !e.resolvedAt && e.detail,
        )
        .sort((a, b) => b.at - a.at)
        .map((e) => ({ type: e.reason, original: e.detail, correction: e.correction })),
    [ielts.errors],
  )

  async function run(fn: () => Promise<void>) {
    setBusy(true)
    setError(null)
    try {
      await fn()
    } catch (e) {
      setError(e instanceof GeminiError ? e.message : 'Generation failed. Try again.')
    } finally {
      setBusy(false)
    }
  }

  if (!hasFreeKey(ai))
    return (
      <div className="animate-fade-up mx-auto max-w-2xl">
        <PageHeader title="Generate practice with AI" />
        <Notice>
          Add a free Gemini key in{' '}
          <Link to="/ielts/settings#ai" className="text-primary font-semibold underline">
            IELTS settings → AI
          </Link>{' '}
          to generate extra questions. The hand-written practice works without one.
        </Notice>
      </div>
    )

  return (
    <div className="animate-fade-up mx-auto max-w-3xl">
      <PageHeader
        title="Generate practice with AI"
        subtitle="Extra questions on demand — labelled as AI-generated, checked against a schema"
      />
      <Notice className="mb-4">
        Hand-written practice comes first: it has model answers and reviewed answer keys. Use these
        for extra variety. {PRIVACY_NOTICE}
      </Notice>
      <Tabs
        label="What to generate"
        value={tab}
        onChange={setTab}
        tabs={[
          { value: 'task2', label: 'Task 2 question' },
          { value: 'letter', label: 'GT letter' },
          { value: 'speaking', label: 'Speaking set' },
          { value: 'drill', label: 'My error drill' },
        ]}
      />
      <Card className="mt-4 grid gap-4">
        {(tab === 'task2' || tab === 'speaking') && (
          <label className="grid gap-1 text-sm font-semibold">
            Topic
            <select value={topic} onChange={(e) => setTopic(e.target.value)} className={inputClass}>
              {TOPICS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
        )}
        {tab === 'task2' && (
          <label className="grid gap-1 text-sm font-semibold">
            Essay type
            <select
              value={type}
              onChange={(e) => setType(e.target.value as typeof type)}
              className={inputClass}
            >
              {TASK2_TYPES.map((t) => (
                <option key={t} value={t}>
                  {TYPE_LABEL[t]}
                </option>
              ))}
            </select>
          </label>
        )}
        {tab === 'letter' && (
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-1 text-sm font-semibold">
              Letter type
              <select
                value={letterType}
                onChange={(e) => setLetterType(e.target.value as typeof letterType)}
                className={inputClass}
              >
                {(
                  [
                    'complaint',
                    'request',
                    'apology',
                    'invitation',
                    'thanks',
                    'explanation',
                  ] as const
                ).map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-1 text-sm font-semibold">
              Tone
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value as typeof tone)}
                className={inputClass}
              >
                {(['formal', 'semi-formal', 'informal'] as const).map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>
        )}
        {tab === 'drill' && (
          <p className="text-sm">
            {writingErrors.length >= 3
              ? `Builds 8 correction exercises from your ${writingErrors.length} logged writing and speaking errors.`
              : 'Get at least 3 writing or speaking answers graded first: the drill is built from the errors the AI finds.'}
          </p>
        )}
        {error && <Notice tone="error">{error}</Notice>}
        <Button
          disabled={busy || (tab === 'drill' && writingErrors.length < 3)}
          onClick={() =>
            run(async () => {
              const id = newId('ai')
              if (tab === 'task2')
                saveGenerated(profileId, {
                  id,
                  kind: 'task2',
                  createdAt: Date.now(),
                  data: await generateTask2(profileId, { topic, type }),
                })
              else if (tab === 'letter')
                saveGenerated(profileId, {
                  id,
                  kind: 'letter',
                  createdAt: Date.now(),
                  data: await generateLetter(profileId, { type: letterType, tone }),
                })
              else if (tab === 'speaking')
                saveGenerated(profileId, {
                  id,
                  kind: 'speaking',
                  createdAt: Date.now(),
                  data: await generateSpeakingSet(profileId, topic),
                })
              else setDrill(await generateErrorDrill(profileId, writingErrors))
            })
          }
        >
          <Sparkles size={18} /> {busy ? 'Generating…' : 'Generate'}
        </Button>
      </Card>

      {tab === 'drill' && drill && <DrillView drill={drill} />}

      {tab !== 'drill' && items.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-3 text-lg font-semibold">Your generated practice (on this device)</h2>
          <ul className="grid gap-2">
            {items
              .filter((g) => g.kind === tab)
              .map((g) => (
                <li key={g.id}>
                  <Card className="flex flex-wrap items-center gap-3">
                    <div className="min-w-0 flex-1 text-sm">
                      <Pill tone="accent">AI</Pill>{' '}
                      {g.kind === 'task2'
                        ? `${TYPE_LABEL[g.data.type]} · ${g.data.topic}: ${g.data.prompt.slice(0, 110)}…`
                        : g.kind === 'letter'
                          ? `${g.data.type}, ${g.data.tone}: ${g.data.situation.slice(0, 110)}…`
                          : `${g.data.title}: ${g.data.cue.prompt}`}
                    </div>
                    <Link
                      to={
                        g.kind === 'speaking' ? `/ielts/speaking/${g.id}` : `/ielts/writing/${g.id}`
                      }
                      className={buttonClass('primary', 'sm')}
                    >
                      {g.kind === 'speaking' ? 'Speak' : 'Write'}
                    </Link>
                  </Card>
                </li>
              ))}
          </ul>
        </section>
      )}
    </div>
  )
}

function DrillView({ drill }: { drill: GeneratedDrill }) {
  const [shown, setShown] = useState<Record<number, boolean>>({})
  const [answers, setAnswers] = useState<Record<number, string>>({})
  return (
    <section className="mt-6 grid gap-3">
      <h2 className="text-lg font-semibold">{drill.title}</h2>
      <p className="text-muted text-sm">
        Each sentence has one error like yours. Rewrite it correctly, then check.
      </p>
      {drill.items.map((it, i) => (
        <Card key={i} className="grid gap-2">
          <p className="font-semibold">
            {i + 1}. {it.sentence}
          </p>
          <textarea
            rows={2}
            aria-label={`Your correction for sentence ${i + 1}`}
            value={answers[i] ?? ''}
            onChange={(e) => setAnswers({ ...answers, [i]: e.target.value })}
            className="border-line bg-bg focus:border-primary rounded-xl border p-2 text-sm outline-none"
          />
          {shown[i] ? (
            <div className="text-sm">
              <p>
                <strong className="text-success">{it.correction}</strong>
              </p>
              <p className="text-muted">{it.explanation}</p>
            </div>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              className="justify-self-start"
              onClick={() => setShown({ ...shown, [i]: true })}
            >
              Check
            </Button>
          )}
        </Card>
      ))}
    </section>
  )
}
