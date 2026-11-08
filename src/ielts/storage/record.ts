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

const CRITERION_FOR_ERROR: Record<string, string> = {
  grammar: 'gra',
  tense: 'gra',
  agreement: 'gra',
  article: 'gra',
  preposition: 'gra',
  punctuation: 'gra',
  'word-form': 'lr',
  vocabulary: 'lr',
  collocation: 'lr',
  spelling: 'lr',
  register: 'lr',
  cohesion: 'cc',
}

export interface ProductiveFeedback {
  criteria: Array<{ id: string; band: number }>
  overallBand: number
  errors: Array<{ original: string; correction: string; type: string }>
}

/** A new writing or speaking attempt, before grading. */
export function startProductiveAttempt(
  profileId: string,
  a: {
    skill: 'writing' | 'speaking'
    contentId: string
    module: IeltsModule
    kind: Attempt['kind']
    task: number
    text: string
    startedAt: number
    durationMs: number
  },
): Attempt {
  const now = Date.now()
  const attempt: Attempt = {
    id: newId('a'),
    kind: a.kind,
    skill: a.skill,
    contentId: a.contentId,
    module: a.module,
    startedAt: a.startedAt,
    finishedAt: now,
    updatedAt: now,
    durationMs: a.durationMs,
    correct: null,
    total: null,
    band: null,
    bands: {},
    questions: [],
    criteria: {},
    text: a.text,
    task: a.task,
    feedbackKey: null,
    gradedBy: null,
  }
  return saveAttempt(profileId, attempt)
}

/**
 * Stores a grading result on the attempt and logs the errors by criterion. Called again for a
 * Pro second opinion: the newest grade wins, and errors aren't logged twice.
 */
export function applyFeedback(
  profileId: string,
  attempt: Attempt,
  fb: ProductiveFeedback,
  meta: { key: string; model: string },
): Attempt {
  const updated = saveAttempt(profileId, {
    ...attempt,
    criteria: Object.fromEntries(fb.criteria.map((c) => [c.id, c.band])),
    band: fb.overallBand,
    feedbackKey: meta.key,
    gradedBy: meta.model,
  })
  if (!attempt.gradedBy) {
    const now = Date.now()
    addErrors(
      profileId,
      fb.errors.slice(0, 25).map((e, i) => ({
        id: `${attempt.id}-e${i}`,
        at: now,
        updatedAt: now,
        skill: attempt.skill ?? 'writing',
        attemptId: attempt.id,
        contentId: attempt.contentId,
        qid: null,
        category: CRITERION_FOR_ERROR[e.type] ?? 'gra',
        reason: e.type,
        detail: e.original,
        correction: e.correction,
        resolvedAt: null,
      })),
    )
  }
  return updated
}

/** Self-assessed bands (offline mode). */
export function applySelfAssessment(
  profileId: string,
  attempt: Attempt,
  criteria: Record<string, number>,
  band: number,
) {
  return saveAttempt(profileId, { ...attempt, criteria, band, gradedBy: 'self' })
}
