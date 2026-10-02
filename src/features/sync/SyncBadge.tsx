import { CloudAlert, CloudCheck, CloudOff, RefreshCw } from 'lucide-react'
import { Link } from 'react-router'
import { cx } from '../../components/styles'
import { useSyncStatus } from '../../lib/sync/engine'

/** A small header icon showing the sync state; links to the sync settings. */
export function SyncBadge({ className }: { className?: string }) {
  const { enabled, state } = useSyncStatus()
  if (!enabled) return null
  const [Icon, label, tone] =
    state === 'syncing'
      ? [RefreshCw, 'Syncing', 'text-muted']
      : state === 'error'
        ? [CloudAlert, 'Sync problem — open settings', 'text-danger']
        : state === 'offline'
          ? [CloudOff, 'Offline — will sync later', 'text-muted']
          : [CloudCheck, 'Synced', 'text-muted']
  return (
    <Link
      to="/settings"
      title={label}
      aria-label={label}
      className={cx(
        'hover:bg-surface-2 grid h-10 w-10 place-items-center rounded-full',
        tone,
        className,
      )}
    >
      <Icon size={20} aria-hidden="true" className={state === 'syncing' ? 'animate-spin' : ''} />
    </Link>
  )
}
