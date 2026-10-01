export function PageSpinner() {
  return (
    <div role="status" className="flex min-h-[40vh] items-center justify-center">
      <span className="border-primary-soft border-t-primary h-9 w-9 animate-spin rounded-full border-4" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}
