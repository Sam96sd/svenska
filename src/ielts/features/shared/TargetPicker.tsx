import { Segmented } from '../../../components/Segmented'
import { type IeltsModule } from '../../examSpec'
import { formatBand, overallBand, rawNeeded, RAW_TABLE_NOTE } from '../../scoring'

const TARGET_CHOICES = [6.5, 7, 7.5, 8, 8.5, 9] as const

export function TargetPicker({
  value,
  onChange,
  module,
}: {
  value: number
  onChange: (band: number) => void
  module: IeltsModule
}) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Segmented<number>
        label="Target overall band"
        value={value}
        onChange={onChange}
        options={TARGET_CHOICES.map((b) => ({ value: b, label: formatBand(b) }))}
      />
      <TargetArithmetic target={value} module={module} />
    </div>
  )
}

/** "What does Band X take?": the raw scores and criterion bands that add up to the target. */
export function TargetArithmetic({ target, module }: { target: number; module: IeltsModule }) {
  const listening = rawNeeded(target, 'listening', module)
  const reading = rawNeeded(target, 'reading', module)
  const productive = Math.max(4, target - 0.5)
  const example = overallBand({
    listening: target,
    reading: target,
    writing: productive,
    speaking: productive,
  })
  const avg = (target * 2 + productive * 2) / 4

  return (
    <div className="bg-surface-2 rounded-2xl p-4 text-sm">
      <p className="font-semibold">What Band {formatBand(target)} takes</p>
      <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        <li>
          <span className="text-muted">Listening:</span> <strong>{listening ?? '–'}/40</strong> or
          more
        </li>
        <li>
          <span className="text-muted">
            Reading ({module === 'academic' ? 'Academic' : 'General'}):
          </span>{' '}
          <strong>{reading ?? '–'}/40</strong> or more
        </li>
        <li className="sm:col-span-2">
          <span className="text-muted">Writing and Speaking:</span>{' '}
          <strong>Band {formatBand(productive)}+</strong> on <em>all four</em> criteria
        </li>
      </ul>
      <p className="text-muted mt-3">
        The overall band is the average of the four skills, rounded to the nearest half (.25 rounds
        up to .5, .75 up to the next band). For example {formatBand(target)} + {formatBand(target)}{' '}
        + {formatBand(productive)} + {formatBand(productive)} = average {avg.toFixed(2)} →{' '}
        <strong className="text-ink">Band {formatBand(example)}</strong>.
      </p>
      <p className="text-muted mt-1 text-xs">Raw-score bands: {RAW_TABLE_NOTE.toLowerCase()}</p>
    </div>
  )
}
