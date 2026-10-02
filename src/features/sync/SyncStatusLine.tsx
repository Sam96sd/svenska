import { CloudAlert, CloudCheck, CloudOff, RefreshCw } from 'lucide-react'
import { type SyncStatus } from '../../lib/sync/engine'

function timeAgo(then: number, now: number): string {
  const s = Math.max(0, Math.round((now - then) / 1000))
  if (s < 45) return 'just now'
  const m = Math.round(s / 60)
  if (m < 60) return `${m} min ago`
  const h = Math.round(m / 60)
  if (h < 24) return `${h} h ago`
  return new Date(then).toLocaleDateString()
}

export function SyncStatusLine({ status, now }: { status: SyncStatus; now: number }) {
  const { state, lastSyncedAt, error } = status
  const when = lastSyncedAt ? `Last synced ${timeAgo(lastSyncedAt, now)}.` : ''
  if (state === 'syncing')
    return (
      <p role="status" className="text-muted flex items-center gap-2 text-sm">
        <RefreshCw size={18} className="animate-spin" aria-hidden="true" /> Syncing…
      </p>
    )
  if (state === 'offline')
    return (
      <p role="status" className="text-muted flex items-center gap-2 text-sm">
        <CloudOff size={18} aria-hidden="true" /> Offline — changes will sync when you’re back
        online. {when}
      </p>
    )
  if (state === 'error')
    return (
      <p role="alert" className="text-danger flex items-center gap-2 text-sm">
        <CloudAlert size={18} aria-hidden="true" className="shrink-0" /> {error} {when}
      </p>
    )
  return (
    <p role="status" className="text-success flex items-center gap-2 text-sm font-semibold">
      <CloudCheck size={18} aria-hidden="true" /> Sync is on. {when}
    </p>
  )
}
