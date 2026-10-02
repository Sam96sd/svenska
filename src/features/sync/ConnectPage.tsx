import { CloudCheck, RefreshCw } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { Button, Card } from '../../components/ui'
import { connect } from '../../lib/sync/engine'

/** Opened from the "Add another device" QR code or link: connects this device to sync. */
export default function ConnectPage() {
  const [params] = useSearchParams()
  // Keep the token out of the address bar and history once we've read it.
  const [link] = useState(() => {
    const value = { token: params.get('t') ?? '', gistId: params.get('g') ?? '' }
    history.replaceState(null, '', `${location.pathname}${location.search}#/connect`)
    return value
  })
  const navigate = useNavigate()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const valid = link.token && link.gistId

  async function onConnect() {
    setBusy(true)
    setError(null)
    try {
      await connect(link.token, link.gistId)
      navigate('/profiles', { replace: true })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Couldn’t connect.')
      setBusy(false)
    }
  }

  return (
    <main className="mx-auto grid min-h-dvh max-w-md place-items-center px-5 py-10">
      <Card className="animate-fade-up grid w-full grid-cols-1 gap-4 text-center">
        <CloudCheck size={40} className="text-primary justify-self-center" aria-hidden="true" />
        <h1 className="font-display text-2xl font-semibold">Sync this device</h1>
        {valid ? (
          <>
            <p className="text-muted text-sm">
              Connect to your Svenska sync to see everyone’s progress here. Anything already learned
              on this device is kept and merged in.
            </p>
            <Button onClick={onConnect} disabled={busy}>
              {busy && <RefreshCw size={18} className="animate-spin" />}
              {busy ? 'Connecting…' : 'Connect'}
            </Button>
            <p className="text-muted text-xs">
              Using the app from your iPhone home screen? It doesn’t share data with Safari: paste
              the link into Settings → Sync inside the app instead.
            </p>
          </>
        ) : (
          <p className="text-muted text-sm">
            This link is incomplete. Open <strong>Settings → Sync between devices</strong> on a
            connected device and use <strong>Add another device</strong> again.
          </p>
        )}
        {error && (
          <p role="alert" className="text-danger text-sm">
            {error}
          </p>
        )}
        <Link to="/" className="text-muted text-sm underline">
          Not now
        </Link>
      </Card>
    </main>
  )
}
