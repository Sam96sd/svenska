import { Ear } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { SpeakButtons } from '../components/Speak'
import { type ExerciseOf } from '../content/schema'
import { speak } from '../lib/audio'
import { shuffle } from '../lib/random'
import { ChoiceGrid, Instruction } from './shared'
import { useAutoplay } from './hooks'
import { type ExerciseProps } from './types'

export function MinimalPairs({
  exercise: ex,
  api,
  verdict,
}: ExerciseProps<ExerciseOf<'minimalPair'>>) {
  const options = useMemo(() => shuffle(ex.options), [ex])
  const [selected, setSelected] = useState<string | null>(null)

  useAutoplay(ex.answer)

  useEffect(() => {
    api.setAudio(() => speak(ex.answer))
  }, [api, ex])

  useEffect(() => {
    const target = ex.options.find((o) => o.sv === ex.answer)
    api.setReady(
      selected === null
        ? null
        : () => ({
            correct: selected === ex.answer,
            expected: ex.answer,
            expectedLang: 'sv',
            audio: ex.answer,
            note: target?.en ? `${ex.answer} = ${target.en}` : undefined,
          }),
    )
  }, [api, selected, ex])

  return (
    <div>
      <Instruction>Which word do you hear?</Instruction>
      <div className="mb-8 flex flex-col items-center gap-3">
        <SpeakButtons text={ex.answer} size="lg" />
        {ex.focus && (
          <p className="text-muted flex items-center gap-2 text-sm">
            <Ear size={16} aria-hidden="true" /> {ex.focus}
          </p>
        )}
      </div>
      <ChoiceGrid
        options={options.map((o) => ({
          value: o.sv,
          lang: 'sv',
          label: (
            <span>
              <span className="text-xl font-semibold">{o.sv}</span>
              {o.hint && <span className="text-muted ml-2 text-sm">{o.hint}</span>}
            </span>
          ),
        }))}
        selected={selected}
        onSelect={setSelected}
        locked={verdict !== null}
        correct={ex.answer}
        columns={2}
      />
      {verdict && (
        <div className="bg-surface-2 mt-6 rounded-2xl p-4">
          <p className="text-muted mb-3 text-sm font-semibold">Compare the sounds</p>
          <ul className="grid gap-2">
            {ex.options.map((o) => (
              <li key={o.sv} className="flex items-center gap-3">
                <SpeakButtons text={o.sv} size="sm" />
                <span lang="sv" className="font-semibold">
                  {o.sv}
                </span>
                {o.en && <span className="text-muted text-sm">{o.en}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
