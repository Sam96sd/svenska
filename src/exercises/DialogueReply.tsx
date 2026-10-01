import { useEffect, useMemo, useState } from 'react'
import { SpeakButtons } from '../components/Speak'
import { cx } from '../components/styles'
import { type ExerciseOf } from '../content/schema'
import { speak } from '../lib/audio'
import { shuffle } from '../lib/random'
import { ChoiceGrid, Instruction } from './shared'
import { useAutoplay } from './hooks'
import { type ExerciseProps } from './types'

export function DialogueReply({
  exercise: ex,
  api,
  verdict,
}: ExerciseProps<ExerciseOf<'dialogueReply'>>) {
  const choices = useMemo(() => shuffle(ex.choices), [ex])
  const [selected, setSelected] = useState<string | null>(null)
  const last = ex.lines[ex.lines.length - 1]!

  useAutoplay(last.sv)

  useEffect(() => {
    api.setAudio(() => speak(last.sv))
  }, [api, last])

  useEffect(() => {
    api.setReady(
      selected === null
        ? null
        : () => ({
            correct: selected === ex.answer,
            expected: ex.answer,
            expectedLang: 'sv',
            audio: ex.answer,
          }),
    )
  }, [api, selected, ex])

  const choose = (v: string) => {
    setSelected(v)
    speak(v)
  }

  return (
    <div>
      <Instruction>{ex.question ?? 'Choose the best reply'}</Instruction>
      <ol className="mb-6 grid gap-3">
        {ex.lines.map((line, i) => (
          <li key={i} className="flex items-start gap-2">
            <SpeakButtons text={line.sv} size="sm" slow={false} />
            <div className="bg-surface-2 rounded-2xl rounded-tl-sm px-4 py-2.5">
              <p className="text-muted text-xs font-semibold">{line.speaker}</p>
              <p lang="sv" className="text-lg font-medium">
                {line.sv}
              </p>
              <p className="text-muted text-sm">{line.en}</p>
            </div>
          </li>
        ))}
        <li className="flex justify-end">
          <div
            className={cx(
              'min-w-24 rounded-2xl rounded-tr-sm border-2 border-dashed px-4 py-2.5 text-lg font-medium',
              selected ? 'border-primary bg-primary-soft' : 'border-line text-muted',
            )}
            lang="sv"
          >
            <p className="text-muted text-xs font-semibold">You</p>
            {selected ?? '…'}
          </div>
        </li>
      </ol>
      <ChoiceGrid
        options={choices.map((c) => ({ value: c, label: c, lang: 'sv' }))}
        selected={selected}
        onSelect={choose}
        locked={verdict !== null}
        correct={ex.answer}
      />
    </div>
  )
}
