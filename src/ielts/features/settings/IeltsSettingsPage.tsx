import { Eye, EyeOff, ExternalLink, RotateCcw, Trash2 } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { useLocation } from 'react-router'
import { Segmented } from '../../../components/Segmented'
import { Button, PageHeader } from '../../../components/ui'
import { GeminiError } from '../../ai/gemini'
import {
  detectModels,
  forgetAiConfig,
  getAiConfig,
  looksLikeGeminiKey,
  modelFor,
  PRIVACY_NOTICE,
  updateAiConfig,
  useAiConfig,
  type AiConfig,
} from '../../ai/keys'
import { testConnection } from '../../ai/test'
import { MODULE_LABEL, type IeltsModule } from '../../examSpec'
import { proSpendThisMonth, resetIelts, updateIeltsSettings } from '../../storage/actions'
import { useIelts } from '../../storage/hooks'
import { inputClass, Notice, Section } from '../../components/ui'
import { TargetPicker } from '../shared/TargetPicker'

export default function IeltsSettingsPage() {
  const { profileId, name, ielts } = useIelts()
  const ai = useAiConfig(profileId)
  const { hash } = useLocation()
  const s = ielts.settings
  const module = s.module ?? 'academic'

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
  }, [hash])

  return (
    <div className="animate-fade-up">
      <PageHeader title="IELTS settings" subtitle={`For ${name}`} />
      <div className="grid grid-cols-1 gap-4">
        <Section title="Your test">
          <Segmented<IeltsModule>
            label="Module"
            value={module}
            onChange={(v) => updateIeltsSettings(profileId, { module: v })}
            options={[
              { value: 'academic', label: MODULE_LABEL.academic },
              { value: 'general', label: MODULE_LABEL.general },
            ]}
          />
          <p className="text-muted -mt-2 text-sm">
            Listening and Speaking are shared. Reading and Writing Task 1 switch with the module.
          </p>
          <TargetPicker
            value={s.targetBand}
            module={module}
            onChange={(v) => updateIeltsSettings(profileId, { targetBand: v })}
          />
        </Section>

        <Section
          id="ai"
          title="AI feedback (Google Gemini)"
          description="Your own keys, stored only in this browser on this device. They are never synced, exported or sent anywhere except Google."
        >
          <Notice>{PRIVACY_NOTICE}</Notice>
          <KeySlot profileId={profileId} tier="standard" config={ai} />
          <FreeKeyGuide />
          <hr className="border-line" />
          <KeySlot profileId={profileId} tier="pro" config={ai} />
          <PremiumExplainer />
          <ProBudget
            capUsd={s.proMonthlyCapUsd}
            spentUsd={proSpendThisMonth(ielts)}
            onCap={(v) => updateIeltsSettings(profileId, { proMonthlyCapUsd: v })}
          />
          {(ai.freeKey || ai.premiumKey) && (
            <Button
              variant="ghost"
              className="text-danger justify-self-start"
              onClick={() => {
                if (confirm(`Remove ${name}'s Gemini keys from this device?`))
                  forgetAiConfig(profileId)
              }}
            >
              <Trash2 size={18} /> Remove keys from this device
            </Button>
          )}
        </Section>

        <Section title="IELTS progress">
          <p className="text-muted text-sm">
            Resetting clears IELTS attempts, the error log, vocabulary reviews and the study plan.
            Your Swedish progress isn't touched.
          </p>
          <Button
            variant="secondary"
            className="justify-self-start"
            onClick={() => {
              if (confirm(`Reset all of ${name}'s IELTS progress? This can't be undone.`))
                resetIelts(profileId)
            }}
          >
            <RotateCcw size={18} /> Reset IELTS progress
          </Button>
        </Section>
      </div>
    </div>
  )
}

type Status =
  | { state: 'idle' }
  | { state: 'working'; text: string }
  | { state: 'ok'; text: string }
  | { state: 'error'; text: string }

function KeySlot({
  profileId,
  tier,
  config,
}: {
  profileId: string
  tier: 'standard' | 'pro'
  config: AiConfig
}) {
  const id = useId()
  const stored = tier === 'standard' ? config.freeKey : config.premiumKey
  const [draft, setDraft] = useState(stored)
  const [show, setShow] = useState(false)
  const [status, setStatus] = useState<Status>({ state: 'idle' })
  const detected = tier === 'standard' ? config.standard : config.pro
  const override = tier === 'standard' ? config.standardOverride : config.proOverride
  const model = modelFor(config, tier)

  // Keep the field in step when keys are removed or changed in another tab.
  const [seen, setSeen] = useState(stored)
  if (seen !== stored) {
    setSeen(stored)
    setDraft(stored)
  }

  async function saveAndTest() {
    const key = draft.trim()
    updateAiConfig(profileId, tier === 'standard' ? { freeKey: key } : { premiumKey: key })
    if (!key) {
      updateAiConfig(profileId, tier === 'standard' ? { standard: null } : { pro: null })
      setStatus({ state: 'idle' })
      return
    }
    try {
      setStatus({ state: 'working', text: 'Finding the best model for this key…' })
      const found = await detectModels(profileId, tier)
      const chosen = modelFor(getAiConfig(profileId), tier)
      if (!chosen) {
        setStatus({ state: 'error', text: 'This key has no Gemini text models available.' })
        return
      }
      setStatus({ state: 'working', text: `Testing ${chosen}…` })
      const r = await testConnection(key, chosen)
      setStatus({
        state: 'ok',
        text: `Working: ${r.model} answered in ${(r.ms / 1000).toFixed(1)} s — “${r.reply}”${
          found.pick?.warning ? ` · ${found.pick.warning}` : ''
        }`,
      })
    } catch (e) {
      setStatus({
        state: 'error',
        text: e instanceof GeminiError ? e.message : 'Something went wrong while testing the key.',
      })
    }
  }

  const label = tier === 'standard' ? 'Free key (required)' : 'Premium key (optional)'
  const formatWarning = draft.trim() && !looksLikeGeminiKey(draft)

  return (
    <div className="grid grid-cols-1 gap-3">
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        <div className="relative min-w-0 flex-1 basis-60">
          <input
            id={id}
            type={show ? 'text' : 'password'}
            autoComplete="off"
            spellCheck={false}
            value={draft}
            placeholder="AIza…"
            onChange={(e) => setDraft(e.target.value)}
            className={`${inputClass} pr-11 font-mono text-sm`}
          />
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            aria-label={show ? 'Hide key' : 'Show key'}
            className="text-muted hover:text-ink absolute top-0 right-0 flex h-11 w-11 items-center justify-center"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <Button onClick={saveAndTest} disabled={status.state === 'working'}>
          {draft.trim() ? 'Save and test' : stored ? 'Remove' : 'Save'}
        </Button>
      </div>
      {formatWarning && (
        <p className="text-accent-ink text-sm">
          That doesn’t look like a Gemini key (they usually start with “AIza”). Check it was copied
          in full.
        </p>
      )}
      {status.state !== 'idle' && (
        <p
          role="status"
          className={
            status.state === 'error'
              ? 'text-danger text-sm'
              : status.state === 'ok'
                ? 'text-success text-sm'
                : 'text-muted text-sm'
          }
        >
          {status.text}
        </p>
      )}
      {stored && detected && (
        <div className="grid grid-cols-1 gap-1">
          <label htmlFor={`${id}-model`} className="text-sm font-semibold">
            {tier === 'standard' ? 'Model for everyday grading' : 'Pro model'}
          </label>
          <select
            id={`${id}-model`}
            value={override ?? ''}
            onChange={(e) =>
              updateAiConfig(
                profileId,
                tier === 'standard'
                  ? { standardOverride: e.target.value || null }
                  : { proOverride: e.target.value || null },
              )
            }
            className={`${inputClass} text-sm`}
          >
            <option value="">Automatic ({detected.pick?.id ?? 'none found'})</option>
            {detected.models.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          {detected.pick?.warning && !override && (
            <p className="text-accent-ink text-sm">{detected.pick.warning}</p>
          )}
          {model && (
            <p className="text-muted text-xs">
              Using <span className="font-mono">{model}</span>. Models checked{' '}
              {new Date(detected.at).toLocaleDateString()}; “Save and test” checks again.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

function FreeKeyGuide() {
  const site = `${location.origin}${import.meta.env.BASE_URL}*`
  return (
    <details className="bg-surface-2 rounded-2xl p-4 text-sm">
      <summary className="cursor-pointer font-semibold">How to get a free key (2 minutes)</summary>
      <ol className="mt-3 grid list-decimal gap-2 pl-5">
        <li>
          Open{' '}
          <a
            href="https://aistudio.google.com/apikey"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary inline-flex items-center gap-1 font-semibold underline"
          >
            Google AI Studio → API keys <ExternalLink size={14} aria-hidden="true" />
          </a>{' '}
          and sign in with your Google account.
        </li>
        <li>
          Tap <strong>Create API key</strong>. When it asks for a project, create a{' '}
          <strong>new project</strong> (e.g. “ielts-free”). Don’t turn on billing for it: that keeps
          it on the free tier.
        </li>
        <li>
          Copy the key (it starts with <code>AIza</code>), paste it above and tap{' '}
          <strong>Save and test</strong>. The app picks the best Flash model automatically.
        </li>
        <li>
          Recommended: in{' '}
          <a
            href="https://console.cloud.google.com/apis/credentials"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary font-semibold underline"
          >
            Google Cloud Console → Credentials
          </a>
          , open the key and set <strong>Application restrictions → Websites</strong> to{' '}
          <code className="break-all">{site}</code>, and <strong>API restrictions</strong> to
          “Generative Language API”. Then a copied key is useless on other websites.
        </li>
        <li>
          Each learner can paste their own key, so each gets their own free quota. Keys are saved
          per learner and per device: paste them once on each phone or computer.
        </li>
      </ol>
    </details>
  )
}

function PremiumExplainer() {
  return (
    <details className="bg-surface-2 rounded-2xl p-4 text-sm">
      <summary className="cursor-pointer font-semibold">
        What the premium key is for (and how to keep it cheap)
      </summary>
      <div className="mt-3 grid gap-2">
        <p>
          The premium key is only used for a Pro model in three places: grading the Writing and
          Speaking parts of <strong>full mock tests</strong>, the <strong>diagnostic</strong>, and
          the <strong>“Second opinion (Pro)”</strong> button on any graded answer. Everything else
          uses the free key.
        </p>
        <p>
          Create it in a <strong>separate Google Cloud project with billing enabled</strong>. The
          monthly Google Cloud credit included with a Google AI Pro subscription can pay for it:
          claim it on the Google Developer Program <strong>My Benefits</strong> page and apply it to
          that billing account.
        </p>
        <Notice tone="warn">
          The two keys must come from <strong>different projects</strong>. Turning on billing for a
          project removes its free tier, so if the free key lived there too, every Flash call would
          become a paid call.
        </Notice>
        <p>
          Also set a <strong>budget and spend limit</strong> in Google Cloud Billing (Budgets &
          alerts) or AI Studio’s billing settings. The cap below is only the app’s estimate.
        </p>
      </div>
    </details>
  )
}

function ProBudget({
  capUsd,
  spentUsd,
  onCap,
}: {
  capUsd: number
  spentUsd: number
  onCap: (usd: number) => void
}) {
  const id = useId()
  return (
    <div className="grid grid-cols-1 gap-2">
      <label htmlFor={id} className="text-sm font-semibold">
        Soft monthly cap for Pro calls (US$)
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step={1}
          value={capUsd}
          onChange={(e) => {
            const v = Number(e.target.value)
            if (Number.isFinite(v) && v >= 0) onCap(v)
          }}
          className={`${inputClass} w-28`}
        />
        <span className="text-sm">
          ≈ <strong>${spentUsd.toFixed(2)}</strong> used this month
        </span>
      </div>
      <p className="text-muted text-xs">
        From 80% of the cap, the app asks before each Pro call. Costs are estimated from token
        counts and the prices in <code>src/ielts/ai/pricing.ts</code>.
      </p>
    </div>
  )
}
