import { PageHeader } from '../../../components/ui'
import { Notice } from '../../components/ui'

export default function ProgressPage() {
  return (
    <div className="animate-fade-up">
      <PageHeader title="Progress" />
      <Notice>
        Band trends per skill, accuracy per question type, writing and speaking criterion trends and
        your error log will appear here once you start practising.
      </Notice>
    </div>
  )
}
