import { useEffect, useMemo, useState } from 'react'
import { cx } from '../components/styles'
import { type ExerciseOf } from '../content/schema'
import { speak } from '../lib/audio'
import { shuffle } from '../lib/random'
import { ChoiceGrid, Instruction } from './shared'
import { type ExerciseProps } from './types'

export function FillGap({ exercise: ex, api, verdict }: ExerciseProps<ExerciseOf<'gap'>>) {
  const choices = useMemo(() => shuffle(ex.choices), [ex])
  const [selected, setSelected] = useState<string | null>(null)
  const [before, after] = ex.text.split('___') as [string, string]
  const full = `${before}${ex.answer}${after}`

  useEffect(() => {
    api.setAudio(verdict ? () => speak(full) : null)
  }, [api, verdict, full])

  useEffect(() => {
    api.setReady(
      selected === null
        ? null
        : () => ({
            correct: selected === ex.answer,
            expected: full,
            expectedLang: 'sv',
            audio: full,
            note: ex.en,
          }),
    )
  }, [api, selected, ex, full])

  return (
    <div>
      <Instruction>{ex.question ?? 'Fill in the gap'}</Instruction>
      <p lang="sv" className="font-display mb-2 text-2xl leading-relaxed font-semibold sm:text-3xl">
        {before}
        <span
          className={cx(
            'mx-1 inline-block min-w-16 rounded-lg border-b-4 px-2 text-center transition-colors',
            !selected && 'text-transparent',
            verdict
              ? verdict.correct
                ? 'border-success text-success'
                : 'border-danger text-danger'
              : 'border-primary',
          )}
        >
          {selected ?? '___'}
        </span>
        {after}
      </p>
      {ex.en && <p className="text-muted mb-8">{ex.en}</p>}
      {!ex.en && <div className="mb-8" />}
      <ChoiceGrid
        options={choices.map((c) => ({ value: c, label: c, lang: 'sv' }))}
        selected={selected}
        onSelect={setSelected}
        locked={verdict !== null}
        correct={ex.answer}
        columns={2}
      />
    </div>
  )
}
