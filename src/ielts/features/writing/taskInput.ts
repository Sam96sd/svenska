import { type WritingTaskInput } from '../../ai/prompts'
import { type Chart, type SimpleChart, type WritingTask } from '../../content/schema'

/** The visual as plain text, so the grader can check the learner's figures. */
export function chartAsText(chart: Chart): string {
  if (chart.kind === 'mixed') return [chart.title, ...chart.charts.map(simple)].join('\n\n')
  return simple(chart)
}

function simple(c: SimpleChart): string {
  const u = (v: number | string, unit = '') =>
    `${v}${unit && typeof v === 'number' ? (unit === '%' ? '%' : ` ${unit}`) : ''}`
  switch (c.kind) {
    case 'line':
      return [
        `${c.title} (line graph; y: ${c.yLabel})`,
        ...c.series.map(
          (s) =>
            `${s.name}: ${c.xLabels.map((x, i) => `${x}=${u(s.values[i] ?? '–', c.unit)}`).join(', ')}`,
        ),
      ].join('\n')
    case 'bar':
      return [
        `${c.title} (bar chart; ${c.yLabel})`,
        ...c.series.map(
          (s) =>
            `${s.name}: ${c.categories.map((x, i) => `${x}=${u(s.values[i] ?? '–', c.unit)}`).join(', ')}`,
        ),
      ].join('\n')
    case 'pie':
      return [
        `${c.title} (pie chart${c.pies.length > 1 ? 's' : ''})`,
        ...c.pies.map(
          (p) => `${p.label}: ${p.slices.map((s) => `${s.name} ${s.value}%`).join(', ')}`,
        ),
      ].join('\n')
    case 'table':
      return [
        `${c.title} (table${c.unit ? `, ${c.unit}` : ''})`,
        `| ${c.columns.join(' | ')} |`,
        ...c.rows.map((r) => `| ${r.label} | ${r.values.join(' | ')} |`),
      ].join('\n')
    case 'map':
      return [
        `${c.title} (maps)`,
        ...c.maps.map((m) => `${m.label}: ${m.diagram.description}`),
      ].join('\n')
    case 'process':
      return [
        `${c.title} (${c.cycle ? 'cycle' : 'process'} diagram)`,
        ...c.steps.map((s, i) => `${i + 1}. ${s.label}${s.detail ? ` — ${s.detail}` : ''}`),
      ].join('\n')
  }
}

export function taskInput(task: WritingTask, module: 'academic' | 'general'): WritingTaskInput {
  return {
    module: task.module === 'both' ? module : task.module,
    task: task.task,
    type: task.type,
    prompt: task.prompt,
    bullets: task.bullets,
    chartData: task.chart ? chartAsText(task.chart) : undefined,
  }
}
