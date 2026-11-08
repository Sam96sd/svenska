import { lazy, Suspense } from 'react'
import { type WritingTask } from '../../content/schema'

const ChartView = lazy(() => import('../../charts/ChartView'))

/** The task as it appears on the test: prompt text, bullets, and the visual for Academic Task 1. */
export function TaskPrompt({ task }: { task: WritingTask }) {
  return (
    <div className="grid grid-cols-1 gap-3 text-[15px]">
      <p className="whitespace-pre-line">{task.prompt}</p>
      {task.bullets && (
        <ul className="grid list-disc gap-1 pl-6">
          {task.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      {task.module === 'general' && task.task === 1 && (
        <p className="text-muted text-sm">
          Write at least 150 words. You do NOT need to write any addresses. Begin your letter as
          follows:{' '}
          <em>
            {task.tone === 'informal'
              ? 'Dear …,'
              : task.tone === 'semi-formal'
                ? 'Dear Mr/Ms …,'
                : 'Dear Sir or Madam,'}
          </em>
        </p>
      )}
      {task.chart && (
        <Suspense fallback={<div className="bg-surface-2 h-64 animate-pulse rounded-2xl" />}>
          <ChartView chart={task.chart} />
        </Suspense>
      )}
    </div>
  )
}
