import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { PageSpinner } from '../../../app/PageSpinner'
import { loadListening, loadPassage } from '../../content/index'
import { mergeListening, mergeReading } from '../../content/merge'
import { MOCKS } from '../../content/mocks'
import { type ListeningPart, type Passage } from '../../content/schema'
import { Notice } from '../../components/ui'
import { ListeningRun } from '../listening/ListeningSessionPage'
import { ReadingRun } from '../reading/ReadingSessionPage'

/** The Listening or Reading section of a full mock: all parts merged and numbered 1–40. */
export default function MockSectionPage() {
  const { id = '', section = '' } = useParams()
  const mock = MOCKS.find((m) => m.id === id)
  const [listening, setListening] = useState<ListeningPart | null>(null)
  const [reading, setReading] = useState<Passage | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!mock) return
    let alive = true
    const fail = (e: unknown) =>
      alive && setError(e instanceof Error ? e.message : 'Could not load this test.')
    if (section === 'listening')
      Promise.all(mock.listening.map(loadListening)).then(
        (parts) =>
          alive &&
          setListening(mergeListening(`${mock.id}-listening`, `${mock.title}: Listening`, parts)),
        fail,
      )
    else if (section === 'reading')
      Promise.all(mock.reading.map(loadPassage)).then(
        (ps) =>
          alive && setReading(mergeReading(`${mock.id}-reading`, `${mock.title}: Reading`, ps)),
        fail,
      )
    return () => {
      alive = false
    }
  }, [mock, section])

  if (!mock || (section !== 'listening' && section !== 'reading'))
    return <Notice tone="error">This mock test section doesn’t exist.</Notice>
  if (error) return <Notice tone="error">{error}</Notice>
  if (section === 'listening')
    return listening ? (
      <ListeningRun part={listening} initialMode="exam" onRetry={() => {}} />
    ) : (
      <PageSpinner />
    )
  return reading ? (
    <ReadingRun passage={reading} initialMode="exam" onRetry={() => {}} />
  ) : (
    <PageSpinner />
  )
}
