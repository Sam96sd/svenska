import { useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { PageSpinner } from '../../app/PageSpinner'
import { buttonClass, cx } from '../../components/styles'
import { useCourseData, type CourseData } from '../../content/useCourse'
import { generateExercises } from '../../lib/generate'
import { cardId, vocabIdOfCard } from '../../lib/learning'
import { isDue } from '../../lib/srs'
import { awardXp, recordMistakes, reviewCard } from '../../lib/storage/actions'
import { useProfile } from '../../lib/storage/hooks'
import { store } from '../../lib/storage/store'
import { PracticeSession, type PracticeOutcome } from '../practice/PracticeSession'
import { scoreHeadline } from '../practice/score'
import { SessionShell } from '../practice/SessionShell'
import { reviewCardIds, type ReviewSet } from './sets'

const MAX_WORDS = 10

export default function ReviewPracticePage() {
  const course = useCourseData()
  if (!course) return <PageSpinner />
  return <ReviewPractice course={course} />
}

function ReviewPractice({ course }: { course: CourseData }) {
  const profile = useProfile()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const set = (params.get('set') as ReviewSet | null) ?? 'due'
  const [progress, setProgress] = useState(0)
  const [outcome, setOutcome] = useState<PracticeOutcome | null>(null)

  // Fixed for the whole session, even as cards get rescheduled.
  const [words] = useState(() =>
    reviewCardIds(profile, set)
      .slice(0, MAX_WORDS)
      .map((id) => course.byId.get(vocabIdOfCard(id)))
      .filter((w) => w !== undefined),
  )
  const exercises = useMemo(() => {
    const g = generateExercises(words, course.vocab, Math.min(14, Math.max(6, words.length * 2)))
    return [...g.recognition, ...g.production]
  }, [words, course.vocab])

  const onAnswer = ({
    correct,
    firstAttempt,
    vocab,
  }: {
    correct: boolean
    firstAttempt: boolean
    vocab: string[]
  }) => {
    if (!firstAttempt) return
    const p = store.get().profiles.find((x) => x.id === profile.id)
    if (!p) return
    for (const vid of vocab) {
      const card = p.srs[cardId(vid)]
      if (card && isDue(card)) reviewCard(profile.id, cardId(vid), correct ? 'good' : 'again')
      else if (!correct) recordMistakes(profile.id, [vid])
    }
    if (correct && !vocab.some((vid) => p.srs[cardId(vid)] && isDue(p.srs[cardId(vid)]!)))
      awardXp(profile.id, 1)
  }

  if (words.length === 0) {
    return (
      <SessionShell progress={1} onClose={() => navigate('/review')}>
        <div className="pt-10 text-center">
          <h1 className="font-display text-3xl font-semibold">Nothing to practise</h1>
          <p className="text-muted mt-2">There are no words in this set right now.</p>
          <Link to="/review" className={cx(buttonClass('primary', 'lg'), 'mt-8')}>
            Back to review
          </Link>
        </div>
      </SessionShell>
    )
  }

  const score = outcome && outcome.total ? outcome.correct / outcome.total : 1
  const headline = scoreHeadline(score)

  return (
    <SessionShell
      progress={outcome ? 1 : progress}
      onClose={() => {
        if (outcome || confirm('Stop practising? Answers so far are already saved.'))
          navigate('/review')
      }}
      closeLabel="Close practice"
    >
      {outcome ? (
        <div className="animate-fade-up pt-10 text-center">
          <h1 className="font-display text-4xl font-semibold" lang="sv">
            {headline.sv}
          </h1>
          <p className="text-muted mt-1 text-lg">{headline.en}</p>
          <p className="mt-6 text-lg">
            {outcome.correct} of {outcome.total} right on the first try.
          </p>
          <Link to="/review" className={cx(buttonClass('primary', 'lg'), 'mt-8')} autoFocus>
            Back to review
          </Link>
        </div>
      ) : (
        <PracticeSession
          exercises={exercises}
          words={words}
          onProgress={setProgress}
          onAnswer={onAnswer}
          onFinish={setOutcome}
        />
      )}
    </SessionShell>
  )
}
