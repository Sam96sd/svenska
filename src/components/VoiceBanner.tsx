import { Info, X } from 'lucide-react'
import { useState } from 'react'
import { useSwedishVoices } from '../lib/audio'
import { cx } from './styles'

type Platform = 'ios' | 'android' | 'windows' | 'mac' | 'other'

function detectPlatform(): Platform {
  const ua = navigator.userAgent
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1))
    return 'ios'
  if (/Android/.test(ua)) return 'android'
  if (/Windows/.test(ua)) return 'windows'
  if (/Macintosh/.test(ua)) return 'mac'
  return 'other'
}

const STEPS: Record<Platform, string> = {
  ios: 'Settings → Accessibility → Spoken Content → Voices → Swedish → download a voice (Alva or Klara). Then reopen this app.',
  android:
    'Settings → System → Languages → Text-to-speech output → Google engine settings (⚙) → Install voice data → Swedish (Sverige). Then reopen this app.',
  windows:
    'Settings → Time & language → Speech → Manage voices → Add voices → Swedish (Sweden). Microsoft Edge also has natural Swedish voices built in.',
  mac: 'System Settings → Accessibility → Spoken Content → System voice → Manage Voices… → Swedish → download Alva, Klara or Oskar. Then restart the browser.',
  other:
    "Install a Swedish (sv-SE) text-to-speech voice in your device's settings, or open the app in Chrome or Edge.",
}

const DISMISS_KEY = 'svenska:voice-banner-dismissed'

/** Shown when this device has no Swedish voice, with steps to install one. */
export function VoiceBanner({ className }: { className?: string }) {
  const { voices, loaded, supported } = useSwedishVoices()
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem(DISMISS_KEY) === '1'
    } catch {
      return false
    }
  })

  if (!loaded || voices.length > 0 || dismissed) return null

  const dismiss = () => {
    setDismissed(true)
    try {
      sessionStorage.setItem(DISMISS_KEY, '1')
    } catch {
      // ignore
    }
  }

  return (
    <div
      role="note"
      className={cx(
        'bg-accent-soft border-accent/40 relative rounded-2xl border p-4 pr-12',
        className,
      )}
    >
      <div className="flex gap-3">
        <Info className="text-accent-ink mt-0.5 shrink-0" size={20} aria-hidden="true" />
        <div className="text-sm">
          <p className="font-semibold">
            {supported ? 'No Swedish voice found on this device' : "This browser can't play speech"}
          </p>
          <p className="text-muted mt-1">
            {supported
              ? `Audio is a big part of learning Swedish. To install a free Swedish voice: ${STEPS[detectPlatform()]}`
              : 'Try Chrome, Edge or Safari to hear Swedish audio.'}
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss"
        className="text-muted hover:bg-surface absolute top-2 right-2 rounded-full p-2"
      >
        <X size={18} />
      </button>
    </div>
  )
}
