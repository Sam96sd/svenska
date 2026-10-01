import { Pencil, Plus } from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { Avatar, Button, Card } from '../../components/ui'
import { currentStreak } from '../../lib/progress'
import {
  addProfile,
  ensureDefaultProfiles,
  renameProfile,
  setActiveProfile,
} from '../../lib/storage/actions'
import { useProfiles } from '../../lib/storage/hooks'
import { AVATAR_COLORS, type Profile } from '../../lib/storage/schema'

export default function ProfilePicker() {
  const profiles = useProfiles()
  const navigate = useNavigate()
  const [editing, setEditing] = useState<Profile | 'new' | null>(null)

  useEffect(() => ensureDefaultProfiles(), [])

  function choose(id: string) {
    setActiveProfile(id)
    navigate('/')
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-5 py-10">
      <div className="mb-10 text-center">
        <img
          src={`${import.meta.env.BASE_URL}favicon.svg`}
          alt=""
          className="mx-auto mb-5 h-16 w-16"
        />
        <h1 className="font-display text-4xl font-semibold tracking-tight">Välkommen!</h1>
        <p className="text-muted mt-2">Welcome to Svenska. Who's learning today?</p>
      </div>

      {editing ? (
        <ProfileForm
          profile={editing === 'new' ? null : editing}
          usedColors={profiles.map((p) => p.color)}
          onDone={() => setEditing(null)}
        />
      ) : (
        <>
          <ul className="grid grid-cols-1 gap-3">
            {profiles.map((p) => (
              <li key={p.id} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => choose(p.id)}
                  className="bg-surface border-line hover:border-primary flex flex-1 items-center gap-4 rounded-2xl border p-4 text-left transition-colors"
                >
                  <Avatar name={p.name} color={p.color} size={48} />
                  <span className="flex-1">
                    <span className="block text-lg font-semibold">{p.name}</span>
                    <span className="text-muted text-sm">
                      {p.xp} XP · {currentStreak(p)} day streak
                    </span>
                  </span>
                </button>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label={`Edit ${p.name}`}
                  onClick={() => setEditing(p)}
                  className="h-12 w-12 px-0"
                >
                  <Pencil size={18} />
                </Button>
              </li>
            ))}
          </ul>
          <Button variant="secondary" className="mt-4" onClick={() => setEditing('new')}>
            <Plus size={18} /> Add a learner
          </Button>
        </>
      )}
    </main>
  )
}

function ProfileForm({
  profile,
  usedColors,
  onDone,
}: {
  profile: Profile | null
  usedColors: string[]
  onDone: () => void
}) {
  const [name, setName] = useState(profile?.name ?? '')
  const [color, setColor] = useState(
    profile?.color ?? AVATAR_COLORS.find((c) => !usedColors.includes(c)) ?? AVATAR_COLORS[0],
  )

  function save(e: FormEvent) {
    e.preventDefault()
    if (!name.trim()) return
    if (profile) renameProfile(profile.id, name, color)
    else addProfile(name, color)
    onDone()
  }

  return (
    <Card className="animate-fade-up">
      <form onSubmit={save} className="grid grid-cols-1 gap-5">
        <h2 className="text-lg font-semibold">{profile ? 'Edit learner' : 'New learner'}</h2>
        <div className="flex items-center gap-4">
          <Avatar name={name || '?'} color={color} size={56} />
          <label className="flex-1">
            <span className="text-muted mb-1 block text-sm font-medium">Name</span>
            <input
              autoFocus
              value={name}
              maxLength={40}
              onChange={(e) => setName(e.target.value)}
              className="border-line bg-bg focus:border-primary h-12 w-full rounded-xl border px-3 text-base outline-none"
            />
          </label>
        </div>
        <fieldset>
          <legend className="text-muted mb-2 text-sm font-medium">Colour</legend>
          <div className="flex flex-wrap gap-3">
            {AVATAR_COLORS.map((c) => (
              <button
                key={c}
                type="button"
                aria-label={`Colour ${c}`}
                aria-pressed={c === color}
                onClick={() => setColor(c)}
                className="h-10 w-10 rounded-full ring-offset-2 ring-offset-[var(--color-surface)] aria-pressed:ring-3 aria-pressed:ring-[var(--color-ink)]"
                style={{ background: c }}
              />
            ))}
          </div>
        </fieldset>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onDone}>
            Cancel
          </Button>
          <Button type="submit" disabled={!name.trim()}>
            Save
          </Button>
        </div>
      </form>
    </Card>
  )
}
