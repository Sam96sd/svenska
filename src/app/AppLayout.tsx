import { BookOpen, House, Layers, Settings as SettingsIcon } from 'lucide-react'
import { Suspense } from 'react'
import { Link, NavLink, Outlet } from 'react-router'
import { cx } from '../components/styles'
import { Avatar } from '../components/ui'
import { useProfile } from '../lib/storage/hooks'
import { PageSpinner } from './PageSpinner'

const NAV = [
  { to: '/', label: 'Learn', icon: House, end: true },
  { to: '/review', label: 'Review', icon: Layers, end: false },
  { to: '/words', label: 'Words', icon: BookOpen, end: false },
  { to: '/settings', label: 'Settings', icon: SettingsIcon, end: false },
]

export default function AppLayout() {
  const profile = useProfile()

  return (
    <div className="min-h-dvh pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <button
        type="button"
        onClick={() => document.getElementById('main')?.focus()}
        className="bg-primary text-on-primary sr-only rounded-xl px-4 py-2 focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50"
      >
        Skip to content
      </button>
      <header className="bg-bg/85 border-line sticky top-0 z-30 border-b backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center gap-6 px-5">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Svenska home">
            <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" className="h-8 w-8" />
            <span className="font-display text-xl font-semibold tracking-tight">Svenska</span>
          </Link>
          <nav aria-label="Main" className="hidden flex-1 gap-1 md:flex">
            {NAV.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cx(
                    'rounded-xl px-3 py-2 text-sm font-semibold transition-colors',
                    isActive ? 'bg-primary-soft text-primary' : 'text-muted hover:text-ink',
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <Link
            to="/profiles"
            className="hover:bg-surface-2 ml-auto flex items-center gap-2 rounded-full py-1 pr-3 pl-1 transition-colors"
            aria-label={`Switch learner (current: ${profile.name})`}
          >
            <Avatar name={profile.name} color={profile.color} size={32} />
            <span className="text-sm font-semibold">{profile.name}</span>
          </Link>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="mx-auto max-w-5xl px-5 pt-6 pb-10">
        <Suspense fallback={<PageSpinner />}>
          <Outlet />
        </Suspense>
      </main>

      <nav
        aria-label="Main"
        className="bg-surface/95 border-line fixed inset-x-0 bottom-0 z-30 border-t pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden"
      >
        <ul className="mx-auto grid max-w-md grid-cols-4">
          {NAV.map(({ to, label, icon: Icon, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  cx(
                    'flex h-16 flex-col items-center justify-center gap-1 text-xs font-semibold transition-colors',
                    isActive ? 'text-primary' : 'text-muted',
                  )
                }
              >
                <Icon size={22} aria-hidden="true" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
