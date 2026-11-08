import { type IeltsModule } from '../examSpec'
import { type Marked } from '../engine/marking'
import { scaledBand } from '../scoring'
import { addErrors, newId, saveAttempt } from './actions'
import { type Attempt, type ErrorEntry } from './schema'

export interface ObjectiveResult {
  skill: 'reading' | 'listening'
  contentId: string
  module: IeltsModule
  kind: Attempt['kind']
  startedAt: number
  durationMs: number
  marked: Marked
  /** Time spent per question number, in ms. */
  times: Record<number, number>
}

/** Saves a reading/listening attempt and logs every wrong answer in the error log. */
export function recordObjectiveAttempt(profileId: string, r: ObjectiveResult): Attempt {
  const now = Date.now()
  const id = newId('a')
  const attempt: Attempt = {
    id,
    kind: r.kind,
    skill: r.skill,
    contentId: r.contentId,
    module: r.module,
    startedAt: r.startedAt,
    finishedAt: now,
    updatedAt: now,
    durationMs: r.durationMs,
    correct: r.marked.correct,
    total: r.marked.total,
    band: scaledBand(r.marked.correct, r.marked.total, r.skill, r.module),
    bands: {},
    questions: r.marked.questions.map((q) => ({
      qid: `${r.contentId}#${q.n}`,
      type: q.type,
      correct: q.correct,
      given: q.given,
      timeMs: Math.round(r.times[q.n] ?? 0),
      reason: q.reason,
    })),
    criteria: {},
    text: null,
    task: null,
    feedbackKey: null,
    gradedBy: null,
  }
  saveAttempt(profileId, attempt)

  const errors: ErrorEntry[] = r.marked.questions
    .filter((q) => !q.correct)
    .map((q) => ({
      id: `${id}-${q.n}`,
      at: now,
      updatedAt: now,
      skill: r.skill,
      attemptId: id,
      contentId: r.contentId,
      qid: `${r.contentId}#${q.n}`,
      category: q.type,
      reason: q.reason ?? 'other',
      detail: q.given,
      correction: q.expected,
      resolvedAt: null,
    }))
  addErrors(profileId, errors)
  return attempt
}
