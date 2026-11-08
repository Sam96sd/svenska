import { ExternalLink } from 'lucide-react'
import { Card, PageHeader } from '../../../components/ui'

/** Official free practice material: links only, no copied content. */
const RESOURCES = [
  {
    name: 'IELTS.org — free practice tests',
    url: 'https://ielts.org/take-a-test/preparation-resources',
    what: 'The official IELTS site: sample tests for all four skills in both modules, with answers.',
  },
  {
    name: 'British Council — Take IELTS',
    url: 'https://takeielts.britishcouncil.org/take-ielts/prepare',
    what: 'Free practice tests, sample questions and the official computer-delivered test familiarisation.',
  },
  {
    name: 'IDP IELTS — prepare',
    url: 'https://ielts.idp.com/prepare',
    what: 'IDP’s free practice tests, sample questions and preparation articles and webinars.',
  },
  {
    name: 'IELTS Ready (British Council)',
    url: 'https://takeielts.britishcouncil.org/take-ielts/prepare/ielts-ready',
    what: 'Free official preparation platform with practice tests and progress tracking (free account).',
  },
  {
    name: 'Computer-delivered test familiarisation',
    url: 'https://ielts.org/take-a-test/test-types/ielts-on-computer',
    what: 'See exactly how the on-screen test looks and works before exam day.',
  },
  {
    name: 'Public band descriptors',
    url: 'https://ielts.org/take-a-test/preparation-resources/understanding-band-scores',
    what: 'The official band score explanations and the public Writing and Speaking band descriptors.',
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
