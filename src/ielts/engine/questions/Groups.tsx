import { ArrowDown } from 'lucide-react'
import { Fragment, type ReactNode } from 'react'
import { cx } from '../../../components/styles'
import { groupNumbers, type Block, type QuestionGroup } from '../../content/schema'
import { DiagramView } from './DiagramView'
import { markTone, rangeOf, useQ, wordLimitText } from './qutils'
import { GapInput, GroupShell, OptionSelect, QNum, Verdict } from './shared'

/** Renders any question group. */
export function QuestionGroupView({ group }: { group: QuestionGroup }) {
  switch (group.type) {
    case 'tfng':
    case 'ynng':
      return <TfngGroup group={group} />
    case 'headings':
      return <HeadingsGroup group={group} />
    case 'match-info':
    case 'match-features':
    case 'match-endings':
    case 'map':
      return <MatchingGroup group={group} />
    case 'mcq':
      return <McqGroup group={group} />
    case 'mcq-multi':
      return <McqMultiGroup group={group} />
    case 'completion':
      return <CompletionGroup group={group} />
  }
}

type G<T extends QuestionGroup['type']> = Extract<QuestionGroup, { type: T }>

function TfngGroup({ group }: { group: G<'tfng' | 'ynng'> }) {
  const { answers, setAnswer, marked, onFocus } = useQ()
  const yes = group.type === 'tfng' ? 'TRUE' : 'YES'
  const no = group.type === 'tfng' ? 'FALSE' : 'NO'
  const choices = [yes, no, 'NOT GIVEN']
  const instructions =
    group.instructions ??
    (group.type === 'tfng'
      ? 'Do the following statements agree with the information in the text? Choose TRUE if the statement agrees with the information, FALSE if it contradicts the information, NOT GIVEN if there is no information on this.'
      : 'Do the following statements agree with the views/claims of the writer? Choose YES if the statement agrees with the writer’s views, NO if it contradicts them, NOT GIVEN if it is impossible to say what the writer thinks about this.')
  return (
    <GroupShell range={rangeOf(groupNumbers(group))} instructions={instructions}>
      <ol className="grid grid-cols-1 gap-4">
        {group.questions.map((q) => (
          <li key={q.n} id={`q-${q.n}`} className="scroll-mt-28">
            <fieldset>
              <legend className="flex gap-2">
                <QNum n={q.n} />
                <span className="pt-0.5">{q.statement}</span>
              </legend>
              <div className="mt-2 flex flex-wrap items-center gap-2 pl-9">
                {choices.map((c) => {
                  const active = answers[q.n] === c
                  const m = marked?.get(q.n)
                  return (
                    <label
                      key={c}
                      className={cx(
                        'flex h-9 cursor-pointer items-center rounded-xl border px-3 text-sm font-semibold transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-[var(--color-primary)]',
                        active
                          ? m
                            ? markTone(m)
                            : 'border-primary bg-primary-soft text-primary'
                          : 'border-line text-muted hover:text-ink',
                        marked && 'cursor-default',
                      )}
                    >
                      <input
                        type="radio"
                        className="sr-only"
                        name={`q${q.n}`}
                        disabled={!!marked}
                        checked={active}
                        onFocus={() => onFocus(q.n)}
                        onChange={() => setAnswer(q.n, c)}
                      />
                      {c}
                    </label>
                  )
                })}
                <Verdict n={q.n} />
              </div>
            </fieldset>
          </li>
        ))}
      </ol>
    </GroupShell>
  )
}

function OptionBox({
  title,
  options,
}: {
  title?: string
  options: Array<{ key: string; text: string }>
}) {
  return (
    <div className="bg-surface-2 rounded-2xl p-4">
      {title && <p className="mb-2 text-sm font-semibold">{title}</p>}
      <ul className="grid gap-1.5 text-sm">
        {options.map((o) => (
          <li key={o.key} className="flex gap-2">
            <span className="w-8 shrink-0 font-bold">{o.key}</span>
            <span>{o.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function HeadingsGroup({ group }: { group: G<'headings'> }) {
  return (
    <GroupShell
      range={rangeOf(groupNumbers(group))}
      instructions={
        group.instructions ??
        'The text has several paragraphs. Choose the correct heading for each paragraph from the list of headings below. There are more headings than paragraphs.'
      }
    >
      <OptionBox title="List of headings" options={group.headings} />
      <ol className="grid gap-3">
        {group.questions.map((q) => (
          <li key={q.n} id={`q-${q.n}`} className="flex scroll-mt-28 flex-wrap items-center gap-2">
            <QNum n={q.n} />
            <span className="w-24 shrink-0 font-semibold">Paragraph {q.para}</span>
            <OptionSelect
              n={q.n}
              options={group.headings}
              label={`Question ${q.n}: heading for paragraph ${q.para}`}
            />
            <Verdict n={q.n} />
          </li>
        ))}
      </ol>
    </GroupShell>
  )
}

const MATCH_DEFAULTS: Record<
  G<'match-info' | 'match-features' | 'match-endings' | 'map'>['type'],
  string
> = {
  'match-info': 'Which paragraph contains the following information? Choose the correct letter.',
  'match-features': 'Match each statement with the correct option. Choose the correct letter.',
  'match-endings': 'Complete each sentence with the correct ending. Choose the correct letter.',
  map: 'Label the map or plan. Choose the correct letter.',
}

function MatchingGroup({
  group,
}: {
  group: G<'match-info' | 'match-features' | 'match-endings' | 'map'>
}) {
  const showBox = group.type !== 'match-info' && group.type !== 'map'
  return (
    <GroupShell
      range={rangeOf(groupNumbers(group))}
      instructions={
        <>
          {group.instructions ?? MATCH_DEFAULTS[group.type]}
          {group.reuse && ' You may use any letter more than once.'}
        </>
      }
    >
      {group.diagram && <DiagramView diagram={group.diagram} />}
      {showBox && <OptionBox title={group.optionsTitle} options={group.options} />}
      <ol className="grid gap-3">
        {group.questions.map((q) => (
          <li key={q.n} id={`q-${q.n}`} className="flex scroll-mt-28 flex-wrap items-center gap-2">
            <QNum n={q.n} />
            <span className="min-w-0 flex-1 basis-48">{q.prompt}</span>
            <OptionSelect
              n={q.n}
              options={
                group.type === 'match-info' || group.type === 'map'
                  ? group.options.map((o) => ({ key: o.key, text: '' }))
                  : group.options
              }
              label={`Question ${q.n}: ${q.prompt}`}
            />
            <Verdict n={q.n} />
          </li>
        ))}
      </ol>
    </GroupShell>
  )
}

function ChoiceList({
  n,
  options,
  multiple,
  selected,
  onToggle,
}: {
  n: number
  options: Array<{ key: string; text: string }>
  multiple: boolean
  selected: string[]
  onToggle: (key: string) => void
}) {
  const { marked, onFocus } = useQ()
  return (
    <div className="mt-2 grid gap-2 pl-9">
      {options.map((o) => {
        const active = selected.includes(o.key)
        return (
          <label
            key={o.key}
            className={cx(
              'flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-[15px] transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-[var(--color-primary)]',
              active ? 'border-primary bg-primary-soft' : 'border-line hover:border-muted',
              marked && 'cursor-default',
            )}
          >
            <input
              type={multiple ? 'checkbox' : 'radio'}
              name={`q${n}`}
              className="mt-1 accent-[var(--color-primary)]"
              disabled={!!marked}
              checked={active}
              onFocus={() => onFocus(n)}
              onChange={() => onToggle(o.key)}
            />
            <span className="w-5 shrink-0 font-bold">{o.key}</span>
            <span>{o.text}</span>
          </label>
        )
      })}
    </div>
  )
}

function McqGroup({ group }: { group: G<'mcq'> }) {
  const { answers, setAnswer } = useQ()
  return (
    <GroupShell
      range={rangeOf(groupNumbers(group))}
      instructions={group.instructions ?? 'Choose the correct letter, A, B, C or D.'}
    >
      <ol className="grid gap-5">
        {group.questions.map((q) => (
          <li key={q.n} id={`q-${q.n}`} className="scroll-mt-28">
            <fieldset>
              <legend className="flex gap-2">
                <QNum n={q.n} />
                <span className="pt-0.5">{q.prompt}</span>
              </legend>
              <ChoiceList
                n={q.n}
                options={q.options}
                multiple={false}
                selected={answers[q.n] ? [answers[q.n]!] : []}
                onToggle={(k) => setAnswer(q.n, k)}
              />
              <div className="mt-1 pl-9">
                <Verdict n={q.n} />
              </div>
            </fieldset>
          </li>
        ))}
      </ol>
    </GroupShell>
  )
}

function McqMultiGroup({ group }: { group: G<'mcq-multi'> }) {
  const { answers, setAnswer } = useQ()
  return (
    <GroupShell
      range={rangeOf(groupNumbers(group))}
      instructions={group.instructions ?? 'Choose TWO letters.'}
    >
      <ol className="grid gap-5">
        {group.questions.map((q) => {
          const selected = (answers[q.n] ?? '').split(',').filter(Boolean)
          const toggle = (k: string) => {
            const next = selected.includes(k)
              ? selected.filter((s) => s !== k)
              : [...selected, k].slice(-2)
            setAnswer(q.n, next.sort().join(','))
          }
          return (
            <li key={q.n} id={`q-${q.n}`} className="scroll-mt-28">
              <fieldset>
                <legend className="flex gap-2">
                  <span className="flex gap-1">
                    <QNum n={q.n} />
                    <QNum n={q.n2} />
                  </span>
                  <span className="pt-0.5">
                    {q.prompt} <span className="text-muted text-sm">(choose two)</span>
                  </span>
                </legend>
                <ChoiceList
                  n={q.n}
                  options={q.options}
                  multiple
                  selected={selected}
                  onToggle={toggle}
                />
                <div className="mt-1 pl-9">
                  <Verdict n={q.n2} />
                </div>
              </fieldset>
            </li>
          )
        })}
      </ol>
    </GroupShell>
  )
}

/** Text with [[n]] gaps turned into inputs (or word-bank selects). */
function GapText({ text, bank }: { text: string; bank?: Array<{ key: string; text: string }> }) {
  const parts = text.split(/(\[\[\d+\]\])/)
  return (
    <>
      {parts.map((p, i) => {
        const m = /^\[\[(\d+)\]\]$/.exec(p)
        if (!m) return <Fragment key={i}>{p}</Fragment>
        const n = Number(m[1])
        if (bank)
          return (
            <span
              key={i}
              id={`q-${n}`}
              className="inline-flex scroll-mt-28 items-center gap-1 align-middle"
            >
              <QNum n={n} />
              <OptionSelect n={n} options={bank} label={`Question ${n}`} />
              <Verdict n={n} />
            </span>
          )
        return <GapInput key={i} n={n} />
      })}
    </>
  )
}

function BlockView({ block, bank }: { block: Block; bank?: Array<{ key: string; text: string }> }) {
  const { answers } = useQ()
  switch (block.kind) {
    case 'heading':
      return (
        <p className="font-semibold">
          <GapText text={block.text} bank={bank} />
        </p>
      )
    case 'text':
      return (
        <p className="leading-9">
          <GapText text={block.text} bank={bank} />
        </p>
      )
    case 'bullets':
      return (
        <ul className="grid list-disc gap-2 pl-5 leading-9">
          {block.items.map((t, i) => (
            <li key={i}>
              <GapText text={t} bank={bank} />
            </li>
          ))}
        </ul>
      )
    case 'table':
      return (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-sm">
            <thead>
              <tr>
                {block.header.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="border-line bg-surface-2 border p-2 text-left font-semibold"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c} className="border-line border p-2 align-top leading-9">
                      <GapText text={cell} bank={bank} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'flow':
      return (
        <ol className="grid gap-1">
          {block.steps.map((s, i) => (
            <li key={i} className="grid justify-items-center gap-1">
              <div className="border-line bg-surface w-full rounded-xl border p-3 text-center leading-9">
                <GapText text={s} bank={bank} />
              </div>
              {i < block.steps.length - 1 && (
                <ArrowDown size={18} className="text-muted" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      )
    case 'diagram': {
      const gaps = block.diagram.items
        .flatMap((it) => (it.shape === 'gap' ? [it.n] : []))
        .sort((a, b) => a - b)
      return (
        <div className="grid gap-3">
          <DiagramView diagram={block.diagram} answered={answers} />
          <div className="flex flex-wrap gap-3">
            {gaps.map((n) => (
              <GapInput key={n} n={n} />
            ))}
          </div>
        </div>
      )
    }
  }
}

function CompletionGroup({ group }: { group: G<'completion'> }) {
  const limit = wordLimitText(group.wordLimit)
  const defaults: Record<string, string> = {
    sentence: 'Complete the sentences below.',
    summary: 'Complete the summary below.',
    note: 'Complete the notes below.',
    table: 'Complete the table below.',
    flowchart: 'Complete the flow-chart below.',
    form: 'Complete the form below.',
    'short-answer': 'Answer the questions below.',
    diagram: 'Label the diagram below.',
  }
  const instructions: ReactNode = (
    <>
      {group.instructions ?? defaults[group.format]}{' '}
      {group.wordBank
        ? 'Choose the correct letter from the box.'
        : limit && <strong className="text-ink">{limit}</strong>}
    </>
  )
  return (
    <GroupShell range={rangeOf(groupNumbers(group))} instructions={instructions}>
      {group.wordBank && <OptionBox options={group.wordBank} />}
      <div
        className={cx(
          'grid gap-3 text-[15px]',
          (group.format === 'note' || group.format === 'form' || group.format === 'summary') &&
            'border-line rounded-2xl border p-4',
        )}
      >
        {group.title && <p className="text-center font-semibold">{group.title}</p>}
        {group.body.map((b, i) => (
          <BlockView key={i} block={b} bank={group.wordBank} />
        ))}
      </div>
    </GroupShell>
  )
}
