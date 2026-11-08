import { Navigate, Outlet } from 'react-router'
import { useIelts } from '../storage/hooks'

/** IELTS screens need a module (Academic or General Training); ask for it on the first visit. */
export default function IeltsGate() {
  const { ielts } = useIelts()
  if (!ielts.settings.module) return <Navigate to="/ielts/setup" replace />
  return <Outlet />
}
