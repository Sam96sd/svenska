import { useCallback, useEffect, useRef, useState } from 'react'
import { GeminiError } from '../../ai/gemini'
import { type GradeContext, type StoredFeedback, type Tier } from '../../ai/grade'

export type GradeState<T> =
  | { status: 'idle' }
  | { status: 'working'; tier: Tier; waitUntil: number | null; message: string | null }
  | { status: 'done'; result: StoredFeedback<T> }
  | { status: 'error'; message: string; retryable: boolean; daily: boolean }

/**
 * Runs a grading call with a visible retry countdown, cancellation on unmount, and a friendly
 * error. `run` gets a GradeContext (profile, tier, callbacks) to pass to gradeWriting/gradeSpeaking.
 */
export function useGrader<T>(profileId: string) {
  const [state, setState] = useState<GradeState<T>>({ status: 'idle' })
  const abort = useRef<AbortController | null>(null)

  useEffect(() => () => abort.current?.abort(), [])

  const grade = useCallback(
    async (
      tier: Tier,
      run: (ctx: GradeContext) => Promise<StoredFeedback<T>>,
    ): Promise<StoredFeedback<T> | null> => {
      abort.current?.abort()
      const ctrl = new AbortController()
      abort.current = ctrl
      setState({ status: 'working', tier, waitUntil: null, message: null })
      try {
        const result = await run({
          profileId,
          tier,
          signal: ctrl.signal,
          onWait: (ms, _attempt, message) =>
            setState({ status: 'working', tier, waitUntil: Date.now() + ms, message }),
          confirmPro: ({ spentUsd, capUsd, estimateUsd }) =>
            confirm(
              `You've used about $${spentUsd.toFixed(2)} of your $${capUsd.toFixed(2)} monthly Pro cap.\n` +
                `This call will cost roughly $${estimateUsd.toFixed(2)}. Continue?`,
            ),
        })
        if (ctrl.signal.aborted) return null
        setState({ status: 'done', result })
        return result
      } catch (e) {
        if (ctrl.signal.aborted || (e instanceof DOMException && e.name === 'AbortError'))
          return null
        const ge = e instanceof GeminiError ? e : null
        setState({
          status: 'error',
          message: ge?.message ?? 'Something went wrong while grading.',
          retryable: ge ? ge.kind !== 'auth' && ge.kind !== 'referrer' && !ge.daily : true,
          daily: ge?.daily ?? false,
        })
        return null
      }
    },
    [profileId],
  )

  return {
    state,
    grade,
    cancel: () => {
      abort.current?.abort()
      setState({ status: 'idle' })
    },
    reset: () => setState({ status: 'idle' }),
  }
}
