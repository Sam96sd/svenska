import { useEffect, useMemo, useState } from 'react'
import { cx } from '../components/styles'
import { type ExerciseOf } from '../content/schema'
import { normalize } from '../lib/answer'
import { speak } from '../lib/audio'
import { shuffle } from '../lib/random'
import { Instruction, Prompt } from './shared'
import { tokenize } from './tokenize'
import { type ExerciseProps } from './types'

interface Tile {
  id: number
  word: string
}

export function BuildSentence({ exercise: ex, api, verdict }: ExerciseProps<ExerciseOf<'build'>>) {
  const tiles = useMemo<Tile[]>(
    () =>
      shuffle([...tokenize(ex.answer), ...(ex.distractors ?? [])]).map((word, id) => ({
        id,
        word,
      })),
    [ex],
  )
  const [placed, setPlaced] = useState<number[]>([])
  const locked = verdict !== null

  useEffect(() => {
    api.setAudio(null)
  }, [api])

  useEffect(() => {
    const sentence = placed.map((id) => tiles[id]!.word).join(' ')
    api.setReady(
      placed.length === 0
        ? null
        : () => {
            const accepted = [ex.answer, ...(ex.accept ?? [])].map((a) => normalize(a))
            return {
              correct: accepted.includes(normalize(sentence)),
              expected: ex.answer,
              expectedLang: 'sv',
              audio: ex.answer,
            }
          },
    )
  }, [api, placed, tiles, ex])

  const add = (id: number) => {
    if (locked) return
    setPlaced((p) => [...p, id])
    speak(tiles[id]!.word)
  }
  const remove = (id: number) => {
    if (locked) return
    setPlaced((p) => p.filter((x) => x !== id))
  }

  return (
    <div>
      <Instruction>Build the sentence in Swedish</Instruction>
      <Prompt text={ex.prompt} lang="en" />

      <div
        aria-label="Your answer"
        className={cx(
          'mb-6 flex min-h-[4.5rem] flex-wrap content-start gap-2 border-b-2 pb-3',
          verdict ? (verdict.correct ? 'border-success' : 'border-danger') : 'border-line',
        )}
      >
        {placed.map((id) => (
          <TileButton
            key={id}
            word={tiles[id]!.word}
            onClick={() => remove(id)}
            disabled={locked}
            label="Remove"
          />
        ))}
      </div>

      <div aria-label="Word tiles" className="flex flex-wrap justify-center gap-2">
        {tiles.map((t) =>
          placed.includes(t.id) ? (
            <span
              key={t.id}
              aria-hidden="true"
              className="bg-surface-2 h-12 rounded-xl px-4 text-transparent"
            >
              {t.word}
            </span>
          ) : (
            <TileButton
              key={t.id}
              word={t.word}
              onClick={() => add(t.id)}
              disabled={locked}
              label="Add"
            />
          ),
        )}
      </div>
    </div>
  )
}

function TileButton({
  word,
  onClick,
  disabled,
  label,
}: {
  word: string
  onClick: () => void
  disabled: boolean
  label: string
}) {
  return (
    <button
      type="button"
      lang="sv"
      onClick={onClick}
      disabled={disabled}
      aria-label={`${label} “${word}”`}
      className="border-line bg-surface hover:border-primary/50 animate-pop h-12 rounded-xl border-2 border-b-4 px-4 text-lg font-medium transition-colors active:translate-y-px disabled:opacity-80"
    >
      {word}
    </button>
  )
}
