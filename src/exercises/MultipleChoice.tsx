import { useEffect, useMemo, useState } from 'react'
import { type ExerciseOf } from '../content/schema'
import { speak } from '../lib/audio'
import { shuffle } from '../lib/random'
import { ChoiceGrid, Instruction, Prompt } from './shared'
import { useAutoplay } from './hooks'
import { type ExerciseProps } from './types'

export function MultipleChoice({ exercise: ex, api, verdict }: ExerciseProps<ExerciseOf<'mcq'>>) {
  const choices = useMemo(() => shuffle(ex.choices), [ex])
  const [selected, setSelected] = useState<string | null>(null)
  const choiceLang = ex.promptLang === 'sv' ? 'en' : 'sv'

  useAutoplay(ex.promptLang === 'sv' ? ex.prompt : null)

  useEffect(() => {
    api.setAudio(ex.promptLang === 'sv' ? () => speak(ex.prompt) : null)
  }, [api, ex])

  useEffect(() => {
    api.setReady(
      selected === null
        ? null
        : () => ({
            correct: selected === ex.answer,
            expected: ex.answer,
            expectedLang: choiceLang,
            audio: ex.promptLang === 'sv' ? ex.prompt : ex.answer,
          }),
    )
  }, [api, selected, ex, choiceLang])

  const choose = (value: string) => {
    setSelected(value)
    if (choiceLang === 'sv') speak(value)
  }

  return (
    <div>
      <Instruction>
        {ex.question ?? (ex.promptLang === 'sv' ? 'What does this mean?' : 'Choose the Swedish')}
      </Instruction>
      <Prompt text={ex.prompt} lang={ex.promptLang} />
      <ChoiceGrid
        options={choices.map((c) => ({ value: c, label: c, lang: choiceLang }))}
        selected={selected}
        onSelect={choose}
        locked={verdict !== null}
        correct={ex.answer}
      />
    </div>
  )
}
