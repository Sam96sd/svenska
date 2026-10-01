import { useEffect, useState } from 'react'
import { type ExerciseOf } from '../content/schema'
import { checkAnswer } from '../lib/answer'
import { speak } from '../lib/audio'
import { Instruction, Prompt, TextAnswer } from './shared'
import { useAutoplay } from './hooks'
import { type ExerciseProps, type Verdict } from './types'

export function TypeAnswer({ exercise: ex, api, verdict }: ExerciseProps<ExerciseOf<'type'>>) {
  const [value, setValue] = useState('')

  useAutoplay(ex.promptLang === 'sv' ? ex.prompt : null)

  useEffect(() => {
    api.setAudio(ex.promptLang === 'sv' ? () => speak(ex.prompt) : null)
  }, [api, ex])

  useEffect(() => {
    api.setReady(
      value.trim() === ''
        ? null
        : (): Verdict => {
            const r = checkAnswer(value, [ex.answer, ...(ex.accept ?? [])], {
              strict: ex.strict,
              reject: ex.reject,
              lang: ex.answerLang,
            })
            return {
              correct: r.status !== 'wrong',
              almost: r.status === 'almost' ? r.reason : undefined,
              expected: r.status === 'correct' ? undefined : ex.answer,
              expectedLang: ex.answerLang,
              audio: ex.answerLang === 'sv' ? ex.answer : ex.prompt,
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
      <Instruction>
        {ex.question ??
          (ex.answerLang === 'sv' ? 'Write this in Swedish' : 'Write this in English')}
      </Instruction>
      <Prompt text={ex.prompt} lang={ex.promptLang} />
      <TextAnswer
        value={value}
        onChange={setValue}
        locked={verdict !== null}
        status={status}
        lang={ex.answerLang}
        placeholder={ex.answerLang === 'sv' ? 'Type in Swedish' : 'Type in English'}
      />
      {ex.hint && !verdict && <p className="text-muted mt-3 text-sm">Hint: {ex.hint}</p>}
    </div>
  )
}
