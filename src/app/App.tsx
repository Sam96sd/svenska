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

// IELTS section: every screen is its own chunk, so Swedish learners never download it.
const IeltsGate = lazy(() => import('../ielts/features/IeltsGate'))
const IeltsHome = lazy(() => import('../ielts/features/home/IeltsHome'))
const IeltsSetup = lazy(() => import('../ielts/features/setup/SetupPage'))
const IeltsPractice = lazy(() => import('../ielts/features/practice/PracticeHub'))
const IeltsProgress = lazy(() => import('../ielts/features/progress/ProgressPage'))
const IeltsSettings = lazy(() => import('../ielts/features/settings/IeltsSettingsPage'))
const IeltsExamFormat = lazy(() => import('../ielts/features/exam/ExamFormatPage'))
const IeltsReading = lazy(() => import('../ielts/features/reading/ReadingSessionPage'))
const IeltsListening = lazy(() => import('../ielts/features/listening/ListeningSessionPage'))
const IeltsWriting = lazy(() => import('../ielts/features/writing/WritingTaskPage'))
const IeltsSpeaking = lazy(() => import('../ielts/features/speaking/SpeakingSessionPage'))

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
            <Route path="ielts/setup" element={<IeltsSetup />} />
            <Route path="ielts/settings" element={<IeltsSettings />} />
            <Route path="ielts/format" element={<IeltsExamFormat />} />
            <Route path="ielts" element={<IeltsGate />}>
              <Route index element={<IeltsHome />} />
              <Route path="practice" element={<IeltsPractice />} />
              <Route path="progress" element={<IeltsProgress />} />
            </Route>
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
          <Route
            path="/ielts/reading/:id"
            element={
              <RequireProfile>
                <IeltsReading />
              </RequireProfile>
            }
          />
          <Route
            path="/ielts/listening/:id"
            element={
              <RequireProfile>
                <IeltsListening />
              </RequireProfile>
            }
          />
          <Route
            path="/ielts/writing/:id"
            element={
              <RequireProfile>
                <IeltsWriting />
              </RequireProfile>
            }
          />
          <Route
            path="/ielts/speaking/:id"
            element={
              <RequireProfile>
                <IeltsSpeaking />
              </RequireProfile>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
