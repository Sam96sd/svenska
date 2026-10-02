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
const ReviewPage = lazy(() => import('../features/review/ReviewPage'))
const FlashcardsPage = lazy(() => import('../features/review/FlashcardsPage'))
const ReviewPracticePage = lazy(() => import('../features/review/ReviewPracticePage'))
const DictionaryPage = lazy(() => import('../features/dictionary/DictionaryPage'))
const PlacementPage = lazy(() => import('../features/placement/PlacementPage'))
const ConnectPage = lazy(() => import('../features/sync/ConnectPage'))

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
          <Route path="/connect" element={<ConnectPage />} />
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
            <Route path="review" element={<ReviewPage />} />
            <Route path="words" element={<DictionaryPage />} />
          </Route>
          <Route
            path="/lesson/:lessonId"
            element={
              <RequireProfile>
                <LessonPage />
              </RequireProfile>
            }
          />
          <Route
            path="/review/cards"
            element={
              <RequireProfile>
                <FlashcardsPage />
              </RequireProfile>
            }
          />
          <Route
            path="/review/practice"
            element={
              <RequireProfile>
                <ReviewPracticePage />
              </RequireProfile>
            }
          />
          <Route
            path="/placement/:unitId"
            element={
              <RequireProfile>
                <PlacementPage />
              </RequireProfile>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
