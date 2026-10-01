import { GraduationCap } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router'
import { PageSpinner } from '../../app/PageSpinner'
import { buttonClass, cx } from '../../components/styles'
import { Button } from '../../components/ui'
import { findUnit, units } from '../../content/course'
import { type Exercise } from '../../content/schema'
import { useCourseData, type CourseData } from '../../content/useCourse'
import { shuffle } from '../../lib/random'
import { unlockUnit } from '../../lib/storage/actions'
import { useProfile } from '../../lib/storage/hooks'
import { PracticeSession, type PracticeOutcome } from '../practice/PracticeSession'
import { SessionShell } from '../practice/SessionShell'

const QUESTIONS = 12
const PASS_MARK = 0.8
const TESTABLE: Exercise['type'][] = ['mcq', 'gap', 'build', 'dialogueReply', 'listen', 'type']

/** Exercises from the units before `unitNumber`, weighted towards the most recent ones. */
function pickQuestions(course: CourseData, unitNumber: number): Exercise[] {
  const earlier = course.units.filter((u) => u.meta.number < unitNumber)
  const recent = earlier.slice(-2)
  const pool = (list: typeof earlier) =>
    shuffle(
      list.flatMap((u) =>
        u.lessons.flatMap((l) => l.exercises.filter((e) => TESTABLE.includes(e.type))),
      ),
    )
  const fromRecent = pool(recent).slice(0, Math.ceil(QUESTIONS * 0.6))
  const rest = pool(earlier).filter((e) => !fromRecent.includes(e))
  return shuffle([...fromRecent, ...rest.slice(0, QUESTIONS - fromRecent.length)])
}

export default function PlacementPage() {
  const { unitId = '' } = useParams()
  const unit = findUnit(unitId)
  const course = useCourseData()
  if (!unit || unit.number === 1) return <Navigate to="/" replace />
  if (!course) return <PageSpinner />
  return <Placement unitId={unit.id} unitNumber={unit.number} course={course} />
}

function Placement({
  unitId,
  unitNumber,
  course,
}: {
  unitId: string
  unitNumber: number
  course: CourseData
}) {
  const profile = useProfile()
  const navigate = useNavigate()
  const [started, setStarted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [outcome, setOutcome] = useState<PracticeOutcome | null>(null)
  const exercises = useMemo(() => pickQuestions(course, unitNumber), [course, unitNumber])
  const words = useMemo(() => course.vocab, [course])
  const unit = findUnit(unitId)!

  const finish = (o: PracticeOutcome) => {
    setOutcome(o)
    if (o.total > 0 && o.correct / o.total >= PASS_MARK) {
      for (const u of units) if (u.number <= unitNumber) unlockUnit(profile.id, u.id)
    }
  }

  const passed = outcome ? outcome.total > 0 && outcome.correct / outcome.total >= PASS_MARK : false

  return (
    <SessionShell
      progress={outcome ? 1 : started ? progress : 0}
      onClose={() => navigate(`/unit/${unitId}`)}
      closeLabel="Close test"
    >
      {!started ? (
        <div className="animate-fade-up pt-8 text-center">
          <GraduationCap className="text-primary mx-auto" size={56} aria-hidden="true" />
          <h1 className="font-display mt-4 text-3xl font-semibold">
            Skip ahead to Unit {unitNumber}?
          </h1>
          <p className="text-muted mx-auto mt-2 max-w-md">
            Answer {exercises.length} questions from the earlier units. Get{' '}
            {Math.round(PASS_MARK * 100)}% right and{' '}
            <strong className="text-ink">{unit.title}</strong> unlocks. Wrong answers won't come
            back, so take your time.
          </p>
          <Button size="lg" className="mt-8" onClick={() => setStarted(true)} autoFocus>
            Start the test
          </Button>
        </div>
      ) : outcome ? (
        <div className="animate-fade-up pt-10 text-center">
          <p className="text-5xl" aria-hidden="true">
            {passed ? '🎓' : '💪'}
          </p>
          <h1 className="font-display mt-4 text-3xl font-semibold">
            {passed ? 'Unit unlocked!' : 'Not quite yet'}
          </h1>
          <p className="text-muted mt-2 text-lg">
            You got {outcome.correct} of {outcome.total} right (
            {Math.round((outcome.correct / Math.max(1, outcome.total)) * 100)}
            %).
          </p>
          <p className="text-muted mt-1">
            {passed
              ? `Unit ${unitNumber} and everything before it are open.`
              : 'The earlier units will get you there. You can try again any time.'}
          </p>
          <Link
            to={passed ? `/unit/${unitId}` : '/'}
            className={cx(buttonClass('primary', 'lg'), 'mt-8')}
            autoFocus
          >
            {passed ? `Go to Unit ${unitNumber}` : 'Back to the course'}
          </Link>
        </div>
      ) : (
        <PracticeSession
          exercises={exercises}
          words={words}
          requeueWrong={false}
          onProgress={setProgress}
          onFinish={finish}
        />
      )}
    </SessionShell>
  )
}
