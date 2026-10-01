import { useEffect, useMemo, useState } from 'react'
import { SpeakButtons } from '../components/Speak'
import { type ExerciseOf } from '../content/schema'
import { speak } from '../lib/audio'
import { shuffle } from '../lib/random'
import { ChoiceGrid, Instruction } from './shared'
import { useAutoplay } from './hooks'
import { type ExerciseProps } from './types'

export function ListenChoose({ exercise: ex, api, verdict }: ExerciseProps<ExerciseOf<'listen'>>) {
  const choices = useMemo(() => shuffle(ex.choices), [ex])
  const [selected, setSelected] = useState<string | null>(null)

  useAutoplay(ex.audio)

  useEffect(() => {
    api.setAudio(() => speak(ex.audio))
  }, [api, ex])

  useEffect(() => {
    api.setReady(
      selected === null
        ? null
        : () => ({
            correct: selected === ex.answer,
            expected: ex.answer,
            expectedLang: 'en',
            note: `You heard: ${ex.audio}`,
            audio: ex.audio,
          }),
    )
  }, [api, selected, ex])

  return (
    <div>
      <Instruction>{ex.question ?? 'Listen and choose the meaning'}</Instruction>
      <div className="mb-8 flex flex-col items-center gap-3">
        <SpeakButtons text={ex.audio} size="lg" />
        <p className="text-muted text-sm">
          {verdict ? (
            <span lang="sv" className="text-ink text-lg font-semibold">
              {ex.audio}
            </span>
          ) : (
            'Press Space to replay'
          )}
        </p>
      </div>
      <ChoiceGrid
        options={choices.map((c) => ({ value: c, label: c, lang: 'en' }))}
        selected={selected}
        onSelect={setSelected}
        locked={verdict !== null}
        correct={ex.answer}
      />
    </div>
  )
}
