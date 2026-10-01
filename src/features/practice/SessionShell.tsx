import { X } from 'lucide-react'
import { type ReactNode } from 'react'
import { ProgressBar } from '../../components/ui'

/** Full-screen layout for lessons, reviews and tests: close button + progress bar. */
export function SessionShell({
  progress,
  onClose,
  closeLabel = 'Close',
  children,
}: {
  progress: number
  onClose: () => void
  closeLabel?: string
  children: ReactNode
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="bg-bg/90 sticky top-0 z-20 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-2xl items-center gap-4 px-5">
          <button
            type="button"
            onClick={onClose}
            aria-label={closeLabel}
            className="text-muted hover:bg-surface-2 hover:text-ink -ml-2 rounded-full p-2"
          >
            <X size={24} />
          </button>
          <ProgressBar value={progress} label="Progress" className="flex-1" tone="success" />
        </div>
      </header>
      <main className="mx-auto w-full max-w-2xl flex-1 px-5 pt-2 pb-40">{children}</main>
    </div>
  )
}
