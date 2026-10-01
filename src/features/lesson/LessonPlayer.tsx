import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router'
import { SpeakButtons } from '../../components/Speak'
import { Button } from '../../components/ui'
import { VoiceBanner } from '../../components/VoiceBanner'
import { nextLessonRef } from '../../content/course'
import { svDisplay } from '../../content/display'
import { type Lesson, type Vocab } from '../../content/schema'
import { stopSpeaking } from '../../lib/audio'
import { lessonXp } from '../../lib/learning'
import { recognitionSupported } from '../../lib/recognition'
import { sfx } from '../../lib/sfx'
import { type Badge } from '../../lib/badges'
import { levelInfo } from '../../lib/progress'
import { claimBadges, completeLesson } from '../../lib/storage/actions'
import { store } from '../../lib/storage/store'
import { useProfile } from '../../lib/storage/hooks'
import { PracticeSession, type PracticeOutcome } from '../practice/PracticeSession'
import { scoreHeadline } from '../practice/score'
import { SessionShell } from '../practice/SessionShell'
import { buildSession } from './session'
import { Confetti, DialogueView, SectionView, WordCard } from './views'

type Stage = 'learn' | 'words' | 'dialogue' | 'practice' | 'summary'

export function LessonPlayer({ lesson, pool }: { lesson: Lesson; pool: Vocab[] }) {
  const profile = useProfile()
  const navigate = useNavigate()
  const stages = useMemo<Stage[]>(
    () =>
      [
        'learn',
        lesson.vocab.length ? 'words' : null,
        lesson.dialogue ? 'dialogue' : null,
        'practice',
        'summary',
      ].filter(Boolean) as Stage[],
    [lesson],
  )
  const [stage, setStage] = useState<Stage>('learn')
  const [practiceProgress, setPracticeProgress] = useState(0)
  const [result, setResult] = useState<LessonRun | null>(null)
  const exercises = useMemo(
    () => buildSession(lesson, pool, { canSpeak: recognitionSupported() }),
    [lesson, pool],
  )
  const words = useMemo(() => [...lesson.vocab, ...pool], [lesson, pool])

  // Captured once: completing the lesson must not turn this run into a "replay".
  const [alreadyDone] = useState(() => !!profile.lessons[lesson.id])

  // Stop audio when leaving a stage or the lesson.
  useEffect(() => () => stopSpeaking(), [stage])

  const next = () => {
    const i = stages.indexOf(stage)
    setStage(stages[i + 1] ?? 'summary')
    window.scrollTo({ top: 0 })
  }

  const progress =
    stage === 'practice'
      ? 0.15 + 0.85 * practiceProgress
      : stage === 'summary'
        ? 1
        : (stages.indexOf(stage) / (stages.length - 1)) * 0.15

  const leave = () => {
    if (stage === 'practice' && !confirm('Leave this lesson? Your progress in it will be lost.'))
      return
    navigate(`/unit/${lesson.unitId}`)
  }

  return (
    <SessionShell progress={progress} onClose={leave} closeLabel="Close lesson">
      {stage === 'learn' && (
        <IntroStage
          eyebrow={
            lesson.kind === 'culture' ? 'Culture' : lesson.kind === 'sounds' ? 'Sounds' : 'Learn'
          }
          title={lesson.title}
          subtitle={lesson.goal}
        >
          <VoiceBanner className="mb-6" />
          <div className="grid grid-cols-1 gap-4">
            {lesson.learn.map((s, i) => (
              <SectionView key={i} section={s} />
            ))}
            {lesson.culture && <SectionView section={lesson.culture} tone="culture" />}
          </div>
        </IntroStage>
      )}

      {stage === 'words' && (
        <IntroStage
          eyebrow="New words"
          title={`${lesson.vocab.length} new words`}
          subtitle="Listen to each one. Tap 🐢 to hear it slowly."
        >
          <div className="grid grid-cols-1 gap-3">
            {lesson.vocab.map((w) => (
              <WordCard key={w.id} word={w} showPron={profile.settings.showPronunciation} />
            ))}
          </div>
        </IntroStage>
      )}

      {stage === 'dialogue' && lesson.dialogue && (
        <IntroStage
          eyebrow="Dialogue"
          title={lesson.dialogue.title ?? 'Listen to the conversation'}
        >
          <DialogueView dialogue={lesson.dialogue} />
        </IntroStage>
      )}

      {stage === 'practice' && (
        <PracticeSession
          exercises={exercises}
          words={words}
          onProgress={setPracticeProgress}
          onFinish={(o) => {
            setResult(saveLesson(profile.id, lesson, o, alreadyDone))
            setStage('summary')
          }}
        />
      )}

      {stage === 'summary' && result && <Summary lesson={lesson} result={result} />}

      {stage !== 'practice' && stage !== 'summary' && (
        <footer className="bg-surface/95 border-line fixed inset-x-0 bottom-0 border-t pb-[env(safe-area-inset-bottom)] backdrop-blur">
          <div className="mx-auto flex max-w-2xl items-center justify-between gap-3 px-5 py-4">
            {alreadyDone ? (
              <Button variant="ghost" onClick={() => setStage('practice')}>
                Skip to practice
              </Button>
            ) : (
              <span />
            )}
            <Button size="lg" onClick={next} autoFocus>
              {stages[stages.indexOf(stage) + 1] === 'practice' ? 'Start practice' : 'Continue'}
              <ArrowRight size={20} />
            </Button>
          </div>
        </footer>
      )}
    </SessionShell>
  )
}

function IntroStage({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <div className="animate-fade-up">
      <p className="text-primary mb-1 text-sm font-semibold tracking-wide uppercase">{eyebrow}</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight">{title}</h1>
      {subtitle ? (
        <p className="text-muted mt-2 mb-6 text-[17px]">{subtitle}</p>
      ) : (
        <div className="mb-6" />
      )}
      {children}
    </div>
  )
}

interface LessonRun {
  score: number
  xp: number
  badges: Badge[]
  levelUp: number | null
}

/** Saves the finished lesson and works out what to celebrate. */
function saveLesson(
  profileId: string,
  lesson: Lesson,
  o: PracticeOutcome,
  replay: boolean,
): LessonRun {
  const before = store.get().profiles.find((p) => p.id === profileId)
  const levelBefore = levelInfo(before?.xp ?? 0).level
  const score = o.total ? o.correct / o.total : 1
  const xp = lessonXp(o.correct, o.total, replay)
  completeLesson(profileId, {
    lessonId: lesson.id,
    score,
    xp,
    vocabIds: lesson.vocab.map((v) => v.id),
    mistakeVocabIds: o.mistakeVocab,
  })
  const badges = claimBadges(profileId)
  const after = store.get().profiles.find((p) => p.id === profileId)
  const levelAfter = levelInfo(after?.xp ?? 0).level
  sfx.complete()
  return { score, xp, badges, levelUp: levelAfter > levelBefore ? levelAfter : null }
}

function Summary({ lesson, result }: { lesson: Lesson; result: LessonRun }) {
  const navigate = useNavigate()
  const { score, xp } = result
  const next = nextLessonRef(lesson.id)

  const headline = scoreHeadline(score)

  return (
    <div className="animate-fade-up pt-6 text-center">
      <Confetti />
      <div className="bg-accent-soft mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full">
        <Sparkles className="text-accent-ink" size={40} aria-hidden="true" />
      </div>
      <h1 className="font-display text-4xl font-semibold tracking-tight" lang="sv">
        {headline.sv}
      </h1>
      <p className="text-muted mt-1 text-lg">{headline.en}</p>

      <dl className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-3">
        <div className="bg-surface border-line rounded-card border p-4">
          <dt className="text-muted text-sm">XP earned</dt>
          <dd className="text-primary text-3xl font-bold" data-testid="lesson-xp">
            +{xp}
          </dd>
        </div>
        <div className="bg-surface border-line rounded-card border p-4">
          <dt className="text-muted text-sm">Accuracy</dt>
          <dd className="text-3xl font-bold">{Math.round(score * 100)}%</dd>
        </div>
      </dl>

      {(result.levelUp || result.badges.length > 0) && (
        <section aria-label="Rewards" className="mx-auto mt-6 grid max-w-sm gap-2">
          {result.levelUp && (
            <p className="bg-primary-soft text-primary animate-pop rounded-2xl px-4 py-3 font-semibold">
              ⭐ Level up! You are now level {result.levelUp}.
            </p>
          )}
          {result.badges.map((b) => (
            <p key={b.id} className="bg-accent-soft animate-pop rounded-2xl px-4 py-3 text-left">
              <span className="mr-2 text-2xl" aria-hidden="true">
                {b.emoji}
              </span>
              <span className="font-semibold">New badge: {b.title}</span>
              <span className="text-muted block text-sm">{b.description}</span>
            </p>
          ))}
        </section>
      )}

      {lesson.vocab.length > 0 && (
        <section className="mt-8 text-left">
          <h2 className="mb-3 font-semibold">
            {lesson.vocab.length} words added to your review deck
          </h2>
          <ul className="flex flex-wrap gap-2">
            {lesson.vocab.map((w) => (
              <li
                key={w.id}
                className="bg-surface border-line flex items-center gap-1 rounded-full border py-1 pr-3 pl-1"
              >
                <SpeakButtons text={svDisplay(w)} size="sm" slow={false} />
                <span lang="sv" className="font-medium">
                  {svDisplay(w)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        {next && (
          <Button size="lg" onClick={() => navigate(`/lesson/${next.lesson.id}`)} autoFocus>
            Next lesson <ArrowRight size={20} />
          </Button>
        )}
        <Link
          to={`/unit/${lesson.unitId}`}
          className="text-muted hover:text-ink inline-flex h-14 items-center justify-center rounded-2xl px-6 font-semibold"
        >
          Back to unit
        </Link>
      </div>
    </div>
  )
}
