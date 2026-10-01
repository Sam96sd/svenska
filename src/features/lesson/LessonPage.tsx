import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { PageSpinner } from '../../app/PageSpinner'
import { loadLesson } from '../../content/course'
import { type Lesson, type Vocab } from '../../content/schema'
import { LessonPlayer } from './LessonPlayer'

export default function LessonPage() {
  const { lessonId = '' } = useParams()
  const [state, setState] = useState<
    { lessonId: string; lesson: Lesson; pool: Vocab[] } | { lessonId: string; error: string } | null
  >(null)

  useEffect(() => {
    let cancelled = false
    loadLesson(lessonId)
      .then(({ unit, lesson }) => {
        if (!cancelled) setState({ lessonId, lesson, pool: unit.lessons.flatMap((l) => l.vocab) })
      })
      .catch((e: unknown) => {
        if (!cancelled) setState({ lessonId, error: e instanceof Error ? e.message : String(e) })
      })
    return () => {
      cancelled = true
    }
  }, [lessonId])

  if (!state || state.lessonId !== lessonId) return <PageSpinner />
  if ('error' in state) {
    return (
      <div className="mx-auto max-w-md p-8 text-center">
        <p className="mb-4 text-lg font-semibold">This lesson couldn't be loaded.</p>
        <p className="text-muted mb-6 text-sm">{state.error}</p>
        <Link to="/" className="text-primary font-semibold">
          Back home
        </Link>
      </div>
    )
  }
  return <LessonPlayer key={lessonId} lesson={state.lesson} pool={state.pool} />
}
