import { Download, LogOut, RotateCcw, Trash2, Upload, Volume2 } from 'lucide-react'
import { useRef, useState, type ChangeEvent, type ReactNode } from 'react'
import { useNavigate } from 'react-router'
import { Segmented } from '../../components/Segmented'
import { Button, Card, PageHeader } from '../../components/ui'
import {
  deleteProfile,
  resetProfile,
  setActiveProfile,
  updateSettings,
} from '../../lib/storage/actions'
import { speak, useSwedishVoices } from '../../lib/audio'
import { downloadBackup, parseBackup, restoreBackup } from '../../lib/storage/backup'
import { useProfile } from '../../lib/storage/hooks'
import { type DailyGoal } from '../../lib/storage/schema'
import { store } from '../../lib/storage/store'

export default function SettingsPage() {
  const profile = useProfile()
  const navigate = useNavigate()
  const fileInput = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<{ tone: 'ok' | 'error'; text: string } | null>(null)
  const set = (patch: Parameters<typeof updateSettings>[1]) => updateSettings(profile.id, patch)
  const s = profile.settings

  async function onImport(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    try {
      const state = parseBackup(await file.text())
      const names = state.profiles.map((p) => p.name).join(', ')
      if (!confirm(`Replace ALL progress on this device with the backup (${names})?`)) return
      restoreBackup(state)
      setMessage({ tone: 'ok', text: `Restored progress for ${names}.` })
      navigate('/profiles')
    } catch (err) {
      setMessage({ tone: 'error', text: err instanceof Error ? err.message : 'Import failed.' })
    }
  }

  return (
    <div className="animate-fade-up">
      <PageHeader title="Settings" subtitle={`For ${profile.name}`} />

      <div className="grid grid-cols-1 gap-4">
        <Section title="Learning">
          <Segmented<DailyGoal>
            label="Daily goal"
            value={s.dailyGoalMinutes}
            onChange={(v) => set({ dailyGoalMinutes: v })}
            options={[
              { value: 5, label: '5 min · Casual' },
              { value: 10, label: '10 min · Regular' },
              { value: 20, label: '20 min · Serious' },
            ]}
          />
          <Toggle
            label="Show pronunciation hints"
            description="English-friendly spelling under new words, e.g. sju → “hwoo”."
            checked={s.showPronunciation}
            onChange={(v) => set({ showPronunciation: v })}
          />
        </Section>

        <Section title="Audio">
          <VoicePicker value={s.voiceURI} onChange={(voiceURI) => set({ voiceURI })} />
          <label className="grid grid-cols-1 gap-2">
            <span className="text-sm font-semibold">
              Speaking speed{' '}
              <span className="text-muted font-normal">({s.audioRate.toFixed(2)}×)</span>
            </span>
            <input
              type="range"
              min={0.6}
              max={1.2}
              step={0.05}
              value={s.audioRate}
              onChange={(e) => set({ audioRate: Number(e.target.value) })}
              className="accent-[var(--color-primary)]"
            />
          </label>
          <Toggle
            label="Sound effects"
            description="A soft chime for correct answers."
            checked={s.soundEffects}
            onChange={(v) => set({ soundEffects: v })}
          />
        </Section>

        <Section title="Appearance">
          <Segmented
            label="Theme"
            value={s.theme}
            onChange={(v) => set({ theme: v })}
            options={[
              { value: 'auto', label: 'Auto' },
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
            ]}
          />
          <Toggle
            label="Show “This week” card"
            description="Compare XP with the other learners on this device."
            checked={s.showCouple}
            onChange={(v) => set({ showCouple: v })}
          />
        </Section>

        <Section title="Backup">
          <p className="text-muted text-sm">
            Save everyone's progress to a file, then import it on another device (for example from
            your phone to your laptop). Importing replaces the progress on that device.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={downloadBackup}>
              <Download size={18} /> Export progress
            </Button>
            <Button variant="secondary" onClick={() => fileInput.current?.click()}>
              <Upload size={18} /> Import progress
            </Button>
            <input
              ref={fileInput}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={onImport}
            />
          </div>
          {message && (
            <p
              role="status"
              className={message.tone === 'ok' ? 'text-success text-sm' : 'text-danger text-sm'}
            >
              {message.text}
            </p>
          )}
          {store.persistFailed() && (
            <p className="text-danger text-sm">
              This browser is blocking storage, so progress won't be saved after you close the app.
              Export a backup to keep it.
            </p>
          )}
        </Section>

        <Section title="Learner">
          <div className="flex flex-wrap gap-2">
            <Button
              variant="secondary"
              onClick={() => {
                setActiveProfile(null)
                navigate('/profiles')
              }}
            >
              <LogOut size={18} /> Switch learner
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                if (confirm(`Reset all of ${profile.name}'s progress? This can't be undone.`))
                  resetProfile(profile.id)
              }}
            >
              <RotateCcw size={18} /> Reset progress
            </Button>
            <Button
              variant="ghost"
              className="text-danger"
              onClick={() => {
                if (
                  confirm(`Delete ${profile.name} and all their progress? This can't be undone.`)
                ) {
                  deleteProfile(profile.id)
                  navigate('/profiles')
                }
              }}
            >
              <Trash2 size={18} /> Delete learner
            </Button>
          </div>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <div className="grid grid-cols-1 gap-5">{children}</div>
    </Card>
  )
}

function Toggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string
  description?: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4">
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        {description && <span className="text-muted block text-sm">{description}</span>}
      </span>
      <input
        type="checkbox"
        role="switch"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="bg-line checked:bg-primary relative mt-0.5 h-7 w-12 shrink-0 cursor-pointer appearance-none rounded-full transition-colors before:absolute before:top-1 before:left-1 before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform checked:before:translate-x-5"
      />
    </label>
  )
}

function VoicePicker({
  value,
  onChange,
}: {
  value: string | null
  onChange: (voiceURI: string | null) => void
}) {
  const { voices, loaded, supported } = useSwedishVoices()
  const best = voices[0]
  if (!supported) {
    return (
      <p className="text-muted text-sm">
        This browser can't play speech. Try Chrome, Edge or Safari.
      </p>
    )
  }
  if (loaded && voices.length === 0) {
    return (
      <p className="text-muted text-sm">
        No Swedish voice is installed on this device. The app shows how to add one on the home
        screen.
      </p>
    )
  }
  return (
    <div className="grid grid-cols-1 gap-2">
      <label htmlFor="voice" className="text-sm font-semibold">
        Swedish voice
      </label>
      <div className="flex flex-wrap items-center gap-2">
        <select
          id="voice"
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value || null)}
          className="border-line bg-bg h-11 min-w-0 flex-1 rounded-xl border px-3 text-sm"
        >
          <option value="">Automatic{best ? ` (${best.name})` : ''}</option>
          {voices.map((v) => (
            <option key={v.voiceURI} value={v.voiceURI}>
              {v.name}
              {v.localService ? '' : ' · online'}
            </option>
          ))}
        </select>
        <Button variant="secondary" onClick={() => speak('Hej! Välkommen till svenska.')}>
          <Volume2 size={18} /> Test
        </Button>
      </div>
      <p className="text-muted text-xs">
        {voices.length} Swedish {voices.length === 1 ? 'voice' : 'voices'} on this device. Voices
        marked “online” need an internet connection.
      </p>
    </div>
  )
}
