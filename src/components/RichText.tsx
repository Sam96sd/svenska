import { Fragment, type ReactNode } from 'react'
import { Say } from './Speak'

/**
 * Renders lesson text: blank lines separate paragraphs, single newlines break lines,
 * **bold**, *italic*, and [[Swedish]] (tappable, plays audio).
 */
export function RichText({ text, className }: { text: string; className?: string }) {
  const paragraphs = text.trim().split(/\n\s*\n/)
  return (
    <div className={className}>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-3 leading-relaxed last:mb-0">
          {p.split('\n').map((line, j) => (
            <Fragment key={j}>
              {j > 0 && <br />}
              {inline(line)}
            </Fragment>
          ))}
        </p>
      ))}
    </div>
  )
}

const TOKEN = /(\[\[[^\]]+\]\]|\*\*[^*]+\*\*|\*[^*]+\*)/g

function inline(text: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith('[[') && part.endsWith(']]')) {
      const sv = part.slice(2, -2)
      return <Say key={i} text={sv} />
    }
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{inline(part.slice(2, -2))}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}
