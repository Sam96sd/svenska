import { ExternalLink } from 'lucide-react'
import { Card, PageHeader } from '../../../components/ui'

/** Official free practice material: links only, no copied content. */
const RESOURCES = [
  {
    name: 'IELTS.org — sample test questions',
    url: 'https://ielts.org/take-a-test/preparation-resources/sample-test-questions',
    what: 'Official free practice papers for Academic and General Training, all four skills, with answers.',
  },
  {
    name: 'IELTS.org — IELTS Trial Test',
    url: 'https://ielts.org/take-a-test/preparation-resources/ielts-trial-test',
    what: 'An official full trial test under timed conditions, to check you are ready before booking.',
  },
  {
    name: 'IDP IELTS — free practice tests',
    url: 'https://ielts.idp.com/prepare/all-test-types/all-skills/practice-test',
    what: 'IDP’s practice tests, including the computer-delivered familiarisation tests for Listening, Reading and Writing.',
  },
  {
    name: 'IDP IELTS — preparation library',
    url: 'https://ielts.idp.com/prepare',
    what: 'Free and paid official preparation: articles, webinars, sample answers and Speaking audio.',
  },
  {
    name: 'British Council — Take IELTS: prepare',
    url: 'https://takeielts.britishcouncil.org/take-ielts/prepare',
    what: 'Free practice tests, sample questions and the British Council’s preparation courses.',
  },
  {
    name: 'British Council — IELTS Ready',
    url: 'https://takeielts.britishcouncil.org/take-ielts/prepare/ielts-ready',
    what: 'Free official preparation platform with practice tests and progress tracking (free account).',
  },
  {
    name: 'IELTS.org — scoring in detail',
    url: 'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail',
    what: 'How each skill is scored, including the public Writing and Speaking band descriptors.',
  },
]

export default function ResourcesPage() {
  return (
    <div className="animate-fade-up mx-auto max-w-3xl">
      <PageHeader
        title="Free official resources"
        subtitle="Real test material from the IELTS partners — use it for your final mocks"
      />
      <ul className="grid gap-3">
        {RESOURCES.map((r) => (
          <li key={r.url}>
            <Card className="flex gap-3">
              <div className="flex-1">
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-primary inline-flex items-center gap-1.5 font-semibold underline"
                >
                  {r.name} <ExternalLink size={14} aria-hidden="true" />
                </a>
                <p className="text-muted mt-1 text-sm">{r.what}</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
      <p className="text-muted mt-6 text-sm">
        Links can move when the sites are redesigned. If one breaks, search the site’s name plus
        “free practice test”.
      </p>
    </div>
  )
}
