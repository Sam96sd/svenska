import { Fragment, type ReactNode } from 'react'

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*)/g

/** Inline **bold** and *italic* for lesson text. */
export function Rich({ text }: { text: string }) {
  return <>{inline(text)}</>
}

function inline(text: string): ReactNode[] {
  return text.split(TOKEN).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4)
      return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2)
      return <em key={i}>{part.slice(1, -1)}</em>
    return <Fragment key={i}>{part}</Fragment>
  })
}
