import { Check, Copy, ExternalLink, QrCode, RefreshCw, Unplug } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import { Button, Card } from '../../components/ui'
import { connect, deviceLink, disconnect, syncNow, useSyncStatus } from '../../lib/sync/engine'
import { useNow } from '../../lib/useNow'
import { SyncStatusLine } from './SyncStatusLine'

/** A classic token with only the "gist" scope, prefilled. */
const TOKEN_URL = 'https://github.com/settings/tokens/new?scopes=gist&description=Svenska%20sync'

export function SyncSection() {
  const status = useSyncStatus()
  return (
    <Card>
      <h2 className="mb-1 text-lg font-semibold">Sync between devices</h2>
      <p className="text-muted mb-4 text-sm">
        Keep both learners’ progress the same on every phone and computer. Progress is saved in a
        private Gist in your GitHub account — no other account or server needed.
      </p>
      {status.enabled && !status.needsToken ? <Connected /> : <Setup />}
    </Card>
  )
}

function Setup() {
  const status = useSyncStatus()
  const [token, setToken] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    try {
      // Accepts a token, or a whole "Add another device" link pasted from another device.
      const link = /#\/connect\?(.*)$/.exec(token.trim())
      if (link) {
        const params = new URLSearchParams(link[1])
        await connect(params.get('t') ?? '', params.get('g') ?? undefined)
      } else await connect(token)
      setToken('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Couldn’t connect.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      {status.needsToken && (
        <p role="alert" className="text-danger text-sm">
          {status.error} Paste a new token to keep syncing.
        </p>
      )}
      <ol className="grid list-decimal gap-2 pl-5 text-sm">
        <li>
          <strong>First device:</strong>{' '}
          <a
            href={TOKEN_URL}
            target="_blank"
            rel="noreferrer"
            className="text-primary inline-flex items-center gap-1 font-semibold underline"
          >
            create a GitHub token <ExternalLink size={14} aria-hidden="true" />
          </a>
          . The form is filled in for you (only the <strong>gist</strong> box is ticked). Pick{' '}
          <strong>No expiration</strong>, then <strong>Generate token</strong> and copy it.
        </li>
        <li>Paste the token below and tap Connect.</li>
        <li>
          <strong>Every other device:</strong> on a connected device, open{' '}
          <strong>Add another device</strong> and scan the code with this one. If the app is
          installed on an iPhone home screen, use <strong>Copy link</strong> instead and paste the
          link into the box below, inside the app.
        </li>
      </ol>
      <form onSubmit={onSubmit} className="flex flex-wrap gap-2">
        <label htmlFor="sync-token" className="sr-only">
          GitHub token or device link
        </label>
        <input
          id="sync-token"
          type="password"
          autoComplete="off"
          spellCheck={false}
          placeholder="Token or device link"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border-line bg-bg h-11 min-w-0 flex-1 rounded-xl border px-3 font-mono text-sm"
        />
        <Button type="submit" disabled={busy || !token.trim()}>
          {busy ? <RefreshCw size={18} className="animate-spin" /> : null}
          {busy ? 'Connecting…' : 'Connect'}
        </Button>
      </form>
      {error && (
        <p role="alert" className="text-danger text-sm">
          {error}
        </p>
      )}
      <p className="text-muted text-xs">
        The token stays on your devices and only allows reading and writing your Gists.
      </p>
    </div>
  )
}

function Connected() {
  const status = useSyncStatus()
  const [showLink, setShowLink] = useState(false)
  const now = useNow(30_000)

  return (
    <div className="grid grid-cols-1 gap-4">
      <SyncStatusLine status={status} now={now} />
      <div className="flex flex-wrap gap-2">
        <Button
          variant="secondary"
          onClick={() => void syncNow()}
          disabled={status.state === 'syncing'}
        >
          <RefreshCw size={18} className={status.state === 'syncing' ? 'animate-spin' : ''} />
          Sync now
        </Button>
        <Button variant="secondary" onClick={() => setShowLink((v) => !v)} aria-expanded={showLink}>
          <QrCode size={18} /> Add another device
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            if (
              confirm('Stop syncing on this device? Progress stays here and on your other devices.')
            )
              disconnect()
          }}
        >
          <Unplug size={18} /> Disconnect
        </Button>
      </div>
      {showLink && <DeviceLink />}
    </div>
  )
}

function DeviceLink() {
  const link = deviceLink()
  const [svg, setSvg] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!link) return
    let live = true
    void import('uqr').then(({ renderSVG }) => {
      if (live) setSvg(renderSVG(link, { border: 2 }))
    })
    return () => {
      live = false
    }
  }, [link])

  if (!link) return null
  return (
    <div className="bg-surface-2 grid grid-cols-1 gap-3 rounded-2xl p-4 sm:grid-cols-[auto_1fr] sm:items-center">
      <div
        role="img"
        aria-label="QR code that connects another device"
        className="h-44 w-44 justify-self-center rounded-xl bg-white p-1 [&>svg]:h-full [&>svg]:w-full"
        // The SVG is generated locally from the link by the QR library.
        dangerouslySetInnerHTML={svg ? { __html: svg } : undefined}
      />
      <div className="grid grid-cols-1 gap-2 text-sm">
        <p>
          On the other phone or computer, scan this code with the camera (or open the link), then
          tap <strong>Connect</strong>. Each person picks their own name afterwards.
        </p>
        <Button
          variant="secondary"
          className="justify-self-start"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(link)
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            } catch {
              prompt('Copy this link:', link)
            }
          }}
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? 'Copied' : 'Copy link'}
        </Button>
        <p className="text-muted text-xs">
          The code contains your sync token: only share it with your own devices.
        </p>
      </div>
    </div>
  )
}
