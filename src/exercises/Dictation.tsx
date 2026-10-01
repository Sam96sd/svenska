import { useEffect, useState } from 'react'
import { SpeakButtons } from '../components/Speak'
import { type ExerciseOf } from '../content/schema'
import { checkAnswer } from '../lib/answer'
import { speak } from '../lib/audio'
import { Instruction, TextAnswer } from './shared'
import { useAutoplay } from './hooks'
import { type ExerciseProps, type Verdict } from './types'

export function Dictation({ exercise: ex, api, verdict }: ExerciseProps<ExerciseOf<'dictation'>>) {
  const [value, setValue] = useState('')

  useAutoplay(ex.audio)

  useEffect(() => {
    api.setAudio(() => speak(ex.audio))
  }, [api, ex])

  useEffect(() => {
    api.setReady(
      value.trim() === ''
        ? null
        : (): Verdict => {
            const r = checkAnswer(value, [ex.audio, ...(ex.accept ?? [])])
            return {
              correct: r.status !== 'wrong',
              almost: r.status === 'almost' ? r.reason : undefined,
              expected: ex.audio,
              expectedLang: 'sv',
              note: ex.en,
              audio: ex.audio,
            }
          },
    )
  }, [api, value, ex])

  const status = verdict
    ? verdict.almost
      ? 'almost'
      : verdict.correct
        ? 'correct'
        : 'wrong'
    : undefined

  return (
    <div>
      <Instruction>Type what you hear</Instruction>
      <div className="mb-8 flex justify-center">
        <SpeakButtons text={ex.audio} size="lg" />
      </div>
      <TextAnswer
        value={value}
        onChange={setValue}
        locked={verdict !== null}
        status={status}
        lang="sv"
        placeholder="Type in Swedish"
        multiline
      />
    </div>
  )
}
