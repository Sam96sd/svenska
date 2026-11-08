import { Card, PageHeader } from '../../../components/ui'
import {
  FORMAT_NOTE,
  LISTENING,
  READING,
  SPEAKING,
  WRITING,
  type IeltsModule,
} from '../../examSpec'
import {
  ACADEMIC_READING_TABLE,
  formatBand,
  GENERAL_READING_TABLE,
  LISTENING_TABLE,
  RAW_TABLE_NOTE,
} from '../../scoring'
import { Notice } from '../../components/ui'
import { useIelts } from '../../storage/hooks'

function rows(table: ReadonlyArray<readonly [number, number]>, max = 40) {
  return table
    .filter(([, band]) => band >= 5)
    .map(([min, band], i, all) => {
      const top = i === 0 ? max : all[i - 1]![0] - 1
      return { range: top === min ? String(min) : `${min}–${top}`, band }
    })
}

export default function ExamFormatPage() {
  const { ielts } = useIelts()
  const module: IeltsModule = ielts.settings.module ?? 'academic'
  const reading = module === 'academic' ? READING.academic : READING.general

  return (
    <div className="animate-fade-up">
      <PageHeader title="How the test works" subtitle="IELTS Academic and General Training" />
      <div className="grid grid-cols-1 gap-4">
        <Notice>{FORMAT_NOTE}</Notice>

        <Card>
          <h2 className="text-lg font-semibold">Listening · about {LISTENING.minutes} min</h2>
          <p className="text-muted text-sm">
            {LISTENING.questions} questions in {LISTENING.parts.length} parts. The same test for
            Academic and General Training. You hear each recording <strong>once only</strong>.
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            {LISTENING.parts.map((p) => (
              <li key={p.title}>
                <strong>{p.title}:</strong> {p.description}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">
            Reading · {READING.minutes} min (
            {module === 'academic' ? 'Academic' : 'General Training'})
          </h2>
          <p className="text-muted text-sm">
            {READING.questions} questions in three sections. On computer there is no extra time to
            transfer answers. A sensible split is {READING.suggestedSplit.join(' / ')} minutes.
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            {reading.map((p) => (
              <li key={p.title}>
                <strong>{p.title}:</strong> {p.description}
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">Writing · {WRITING.minutes} min</h2>
          <ul className="mt-2 grid gap-2 text-sm">
            <li>
              <strong>Task 1</strong> (at least {WRITING.task1.minWords} words, about{' '}
              {WRITING.task1.suggestedMinutes} min):{' '}
              {module === 'academic' ? WRITING.task1.academic : WRITING.task1.general}
            </li>
            <li>
              <strong>Task 2</strong> (at least {WRITING.task2.minWords} words, about{' '}
              {WRITING.task2.suggestedMinutes} min): {WRITING.task2.description} Task 2 counts{' '}
              <strong>twice as much</strong> as Task 1.
            </li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">
            Speaking · {SPEAKING.minutes[0]}–{SPEAKING.minutes[1]} min, face to face
          </h2>
          <ul className="mt-2 grid gap-2 text-sm">
            <li>
              <strong>{SPEAKING.part1.title}</strong> ({SPEAKING.part1.minutes.join('–')} min):{' '}
              {SPEAKING.part1.description}
            </li>
            <li>
              <strong>{SPEAKING.part2.title}</strong>: {SPEAKING.part2.description}
            </li>
            <li>
              <strong>{SPEAKING.part3.title}</strong> ({SPEAKING.part3.minutes.join('–')} min):{' '}
              {SPEAKING.part3.description}
            </li>
          </ul>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold">From raw score to band</h2>
          <p className="text-muted text-sm">{RAW_TABLE_NOTE}</p>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { title: 'Listening', table: LISTENING_TABLE },
              { title: 'Academic Reading', table: ACADEMIC_READING_TABLE },
              { title: 'General Reading', table: GENERAL_READING_TABLE },
            ].map(({ title, table }) => (
              <table key={title} className="w-full text-sm">
                <caption className="mb-1 text-left font-semibold">{title}</caption>
                <thead>
                  <tr className="text-muted text-left">
                    <th scope="col" className="py-1 font-medium">
                      Correct
                    </th>
                    <th scope="col" className="py-1 font-medium">
                      Band
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows(table).map((r) => (
                    <tr key={r.range} className="border-line border-t">
                      <td className="py-1 tabular-nums">{r.range}</td>
                      <td className="py-1 font-semibold tabular-nums">{formatBand(r.band)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ))}
          </div>
          <p className="text-muted mt-3 text-sm">
            The overall band is the mean of the four skill bands, rounded to the nearest half band:
            6.25 becomes 6.5, 6.75 becomes 7, and 6.1 stays 6.
          </p>
        </Card>
      </div>
    </div>
  )
}
