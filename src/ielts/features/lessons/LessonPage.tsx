import { CheckCircle2, Dumbbell, Lightbulb, TriangleAlert } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import { PageSpinner } from '../../../app/PageSpinner'
import { buttonClass } from '../../../components/styles'
import { Button, Card, PageHeader } from '../../../components/ui'
import { catalogItem } from '../../content/catalog'
import { loadLesson } from '../../content/index'
import { type Lesson, type LessonSection } from '../../content/schema'
import { SKILL_LABEL } from '../../examSpec'
import { Notice, Pill } from '../../components/ui'
import { Rich } from '../../components/Rich'
import { markLessonDone } from '../../storage/actions'
import { useIelts } from '../../storage/hooks'

export default function LessonPage() {
  const { id = '' } = useParams()
  const { profileId, ielts } = useIelts()
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    let alive = true
    loadLesson(id).then(
      (l) => alive && setLesson(l),
      (e: unknown) =>
        alive && setError(e instanceof Error ? e.message : 'Could not load this lesson.'),
    )
    return () => {
      alive = false
    }
  }, [id])

  if (error) return <Notice tone="error">{error}</Notice>
  if (!lesson) return <PageSpinner />
  const done = !!ielts.lessonsDone[lesson.id]

  return (
    <article className="animate-fade-up mx-auto max-w-3xl">
      <PageHeader
        title={lesson.title}
        subtitle={
          <span className="flex flex-wrap items-center gap-2">
            {SKILL_LABEL[lesson.skill]} strategy · {lesson.minutes} min
            {done && (
              <Pill tone="success">
                <CheckCircle2 size={14} aria-hidden="true" /> Done
              </Pill>
            )}
          </span>
        }
      />
      <p className="text-muted -mt-3 mb-6">{lesson.summary}</p>
      <div className="grid gap-5">
        {lesson.sections.map((s, i) => (
          <SectionView key={i} section={s} />
        ))}
      </div>

      <Card className="mt-8 grid gap-3">
        <h2 className="text-lg font-semibold">Practise it</h2>
        {lesson.drills.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {lesson.drills.map((d) => {
              const item = catalogItem(d)
              if (!item) return null
              return (
                <Link
                  key={d}
                  to={`/ielts/${item.skill}/${d}`}
                  onClick={() => markLessonDone(profileId, lesson.id)}
                  className={buttonClass('primary', 'md')}
                >
                  <Dumbbell size={18} /> {item.title} ({item.questions} questions)
                </Link>
              )
            })}
          </div>
        ) : (
          <p className="text-muted text-sm">Use this method in your next practice test.</p>
        )}
        {!done && (
          <Button
            variant="secondary"
            className="justify-self-start"
            onClick={() => markLessonDone(profileId, lesson.id)}
          >
            <CheckCircle2 size={18} /> Mark as done
          </Button>
        )}
      </Card>
      <Link
        to="/ielts/practice"
        className="text-primary mt-6 inline-block text-sm font-semibold underline"
      >
        ← Back to practice
      </Link>
    </article>
  )
}

function SectionView({ section: s }: { section: LessonSection }) {
  switch (s.kind) {
    case 'text':
      return (
        <section>
          {s.heading && <h2 className="mb-2 text-lg font-semibold">{s.heading}</h2>}
          {s.paragraphs.map((p, i) => (
            <p key={i} className="mb-3 leading-relaxed last:mb-0">
              <Rich text={p} />
            </p>
          ))}
        </section>
      )
    case 'steps':
      return (
        <section>
          <h2 className="mb-3 text-lg font-semibold">{s.heading}</h2>
          <ol className="grid gap-2">
            {s.items.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="bg-primary text-on-primary flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                  {i + 1}
                </span>
                <span className="pt-0.5 leading-relaxed">
                  <Rich text={item} />
                </span>
              </li>
            ))}
          </ol>
        </section>
      )
    case 'list':
      return (
        <section>
          {s.heading && <h2 className="mb-2 text-lg font-semibold">{s.heading}</h2>}
          <ul className="grid list-disc gap-1.5 pl-6">
            {s.items.map((item, i) => (
              <li key={i}>
                <Rich text={item} />
              </li>
            ))}
          </ul>
        </section>
      )
    case 'tip':
      return (
        <div className="bg-success-soft flex gap-3 rounded-2xl p-4">
          <Lightbulb size={20} className="text-success mt-0.5 shrink-0" aria-hidden="true" />
          <p>
            <strong>Tip: </strong>
            <Rich text={s.text} />
          </p>
        </div>
      )
    case 'trap':
      return (
        <div className="bg-danger-soft flex gap-3 rounded-2xl p-4">
          <TriangleAlert size={20} className="text-danger mt-0.5 shrink-0" aria-hidden="true" />
          <p>
            <strong>Trap: </strong>
            <Rich text={s.text} />
          </p>
        </div>
      )
    case 'example':
      return <WorkedExample s={s} />
    case 'compare':
      return (
        <section>
          <h2 className="mb-2 text-lg font-semibold">{s.heading}</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-sm">
              <thead>
                <tr>
                  {s.headers.map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="border-line bg-surface-2 border p-2 text-left font-semibold"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {s.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) => (
                      <td key={j} className="border-line border p-2 align-top">
                        <Rich text={c} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )
    case 'phrases':
      return (
        <section>
          <h2 className="mb-2 text-lg font-semibold">{s.heading}</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {s.items.map((p, i) => (
              <li key={i} className="border-line rounded-xl border p-3">
                <p className="font-semibold">“{p.phrase}”</p>
                <p className="text-muted text-sm">{p.use}</p>
              </li>
            ))}
          </ul>
        </section>
      )
  }
}

function WorkedExample({ s }: { s: Extract<LessonSection, { kind: 'example' }> }) {
  const [shown, setShown] = useState(false)
  return (
    <Card className="grid gap-3">
      <h2 className="text-lg font-semibold">{s.heading}</h2>
      <blockquote className="bg-surface-2 rounded-xl p-3 text-[15px] leading-relaxed whitespace-pre-line">
        <Rich text={s.context} />
      </blockquote>
      <p className="font-semibold">
        <Rich text={s.question} />
      </p>
      {shown ? (
        <>
          <p>
            Answer: <strong className="text-success">{s.answer}</strong>
          </p>
          <ol className="grid list-decimal gap-1.5 pl-6">
            {s.reasoning.map((r, i) => (
              <li key={i}>
                <Rich text={r} />
              </li>
            ))}
          </ol>
        </>
      ) : (
        <Button variant="secondary" className="justify-self-start" onClick={() => setShown(true)}>
          Think first, then show the answer
        </Button>
      )}
    </Card>
  )
}
