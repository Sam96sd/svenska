import { lazy, Suspense, type ReactNode } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router'
import { useActiveProfile } from '../lib/storage/hooks'
import AppLayout from './AppLayout'
import { PageSpinner } from './PageSpinner'
import { ThemeController } from './ThemeController'

const ProfilePicker = lazy(() => import('../features/profiles/ProfilePicker'))
const HomePage = lazy(() => import('../features/home/HomePage'))
const SettingsPage = lazy(() => import('../features/settings/SettingsPage'))
const UnitPage = lazy(() => import('../features/home/UnitPage'))
const LessonPage = lazy(() => import('../features/lesson/LessonPage'))

function RequireProfile({ children }: { children: ReactNode }) {
  const profile = useActiveProfile()
  return profile ? children : <Navigate to="/profiles" replace />
}

export default function App() {
  return (
    <HashRouter>
      <ThemeController />
      <Suspense fallback={<PageSpinner />}>
        <Routes>
          <Route path="/profiles" element={<ProfilePicker />} />
          <Route
            element={
              <RequireProfile>
                <AppLayout />
              </RequireProfile>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="unit/:unitId" element={<UnitPage />} />
          </Route>
          <Route
            path="/lesson/:lessonId"
            element={
              <RequireProfile>
                <LessonPage />
              </RequireProfile>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
