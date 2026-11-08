import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { makeProfile } from '../storage/actions'
import { addXp } from '../progress'
import { serializeDoc, toDoc } from './merge'
import { IELTS_SYNC_FILE, SYNC_FILE } from './github'
import { defaultState } from '../storage/schema'

/** A tiny in-memory stand-in for the GitHub Gists API. */
function fakeGitHub(token = 'tok') {
  /** Main sync file per gist (most tests only look at this one). */
  const gists = new Map<string, string>()
  /** Any other files per gist, e.g. the IELTS sync file. */
  const others = new Map<string, Record<string, string>>()
  const calls: string[] = []
  let status = 200
  const files = (id: string) => {
    const out: Record<string, { content: string }> = {}
    if (gists.has(id)) out[SYNC_FILE] = { content: gists.get(id)! }
    for (const [name, content] of Object.entries(others.get(id) ?? {})) out[name] = { content }
    return out
  }
  const save = (id: string, body: { files: Record<string, { content: string }> }) => {
    for (const [name, f] of Object.entries(body.files)) {
      if (name === SYNC_FILE) gists.set(id, f.content)
      else others.set(id, { ...others.get(id), [name]: f.content })
    }
  }
  const fetch = vi.fn(async (url: string, init: RequestInit = {}) => {
    const method = init.method ?? 'GET'
    const path = url.replace('https://api.github.com', '')
    calls.push(`${method} ${path}`)
    const auth = (init.headers as Record<string, string>).Authorization
    if (status !== 200 || auth !== `Bearer ${token}`) return new Response('{}', { status: 401 })
    const json = (v: unknown) => new Response(JSON.stringify(v), { status: 200 })
    if (method === 'GET' && path.startsWith('/gists?'))
      return json([...gists.keys()].map((id) => ({ id, files: files(id) })))
    if (method === 'POST' && path === '/gists') {
      save('g1', JSON.parse(init.body as string))
      return json({ id: 'g1', files: files('g1') })
    }
    const id = path.split('/')[2]!
    if (!gists.has(id)) return new Response('{}', { status: 404 })
    if (method === 'GET') return json({ id, files: files(id) })
    if (method === 'PATCH') {
      save(id, JSON.parse(init.body as string))
      return json({ id, files: files(id) })
    }
    return new Response('{}', { status: 405 })
  })
  return { gists, others, calls, fetch, fail: () => (status = 401) }
}

async function freshApp() {
  vi.resetModules()
  const engine = await import('./engine')
  const { store } = await import('../storage/store')
  const { ieltsStore } = await import('../../ielts/storage/store')
  return { engine, store, ieltsStore }
}

beforeEach(() => localStorage.clear())
afterEach(() => vi.unstubAllGlobals())

describe('sync engine', () => {
  it('creates the gist on first connect, then pulls the other learner’s progress', async () => {
    const gh = fakeGitHub()
    vi.stubGlobal('fetch', gh.fetch)
    const { engine, store } = await freshApp()
    const samer = makeProfile('Samer', '#000')
    store.replace({ ...defaultState(), profiles: [samer] })

    await engine.connect('tok')
    expect(gh.calls).toContain('POST /gists')
    expect(gh.gists.get('g1')).toContain('Samer')

    // Another device adds Partner's progress to the gist.
    const partner = addXp(makeProfile('Partner', '#111'), 25, Date.now(), 'phone')
    gh.gists.set('g1', serializeDoc(toDoc({ ...defaultState(), profiles: [samer, partner] })))

    await engine.syncNow()
    const names = store.get().profiles.map((p) => `${p.name}:${p.xp}`)
    expect(names).toEqual(['Samer:0', 'Partner:25'])
    expect(engine.deviceLink()).toContain('#/connect?t=tok&g=g1')
  })

  it('only writes when something changed', async () => {
    const gh = fakeGitHub()
    vi.stubGlobal('fetch', gh.fetch)
    const { engine, store } = await freshApp()
    store.replace({ ...defaultState(), profiles: [makeProfile('Samer', '#000')] })
    await engine.connect('tok')
    gh.calls.length = 0

    await engine.syncNow()
    expect(gh.calls).toEqual(['GET /gists/g1'])
  })

  it('reports a rejected token so the user can paste a new one', async () => {
    const gh = fakeGitHub()
    vi.stubGlobal('fetch', gh.fetch)
    const { engine } = await freshApp()
    await engine.connect('tok')
    gh.fail()
    await engine.syncNow()

    const { renderHook } = await import('@testing-library/react')
    const { result } = renderHook(() => engine.useSyncStatus())
    expect(result.current).toMatchObject({ state: 'error', needsToken: true })
  })

  it('finds the existing gist when another device connects with the same token', async () => {
    const gh = fakeGitHub()
    gh.gists.set('g1', serializeDoc({ profiles: [makeProfile('Sara', '#111')], deleted: {} }))
    vi.stubGlobal('fetch', gh.fetch)
    const { engine, store } = await freshApp()
    store.replace({
      ...defaultState(),
      profiles: [makeProfile('Samer', '#000'), makeProfile('Partner', '#111')],
    })

    await engine.connect('tok')
    expect(gh.calls).not.toContain('POST /gists')
    // The untouched default profiles were replaced by the synced one.
    expect(store.get().profiles.map((p) => p.name)).toEqual(['Sara'])
  })

  it('syncs IELTS progress in a second file and follows profile id changes', async () => {
    const gh = fakeGitHub()
    // Device A already synced "Samer" (id remote-samer) with an IELTS module choice.
    const remoteSamer = { ...makeProfile('Samer', '#000'), id: 'remote-samer' }
    gh.gists.set('g1', serializeDoc({ profiles: [remoteSamer], deleted: {} }))
    const { serializeIeltsDoc } = await import('../../ielts/storage/merge')
    const { defaultIeltsProfile } = await import('../../ielts/storage/schema')
    const remoteIelts = defaultIeltsProfile()
    remoteIelts.settings.module = 'general'
    remoteIelts.settingsAt = 100
    gh.others.set('g1', {
      [IELTS_SYNC_FILE]: serializeIeltsDoc({ profiles: { 'remote-samer': remoteIelts } }),
    })
    vi.stubGlobal('fetch', gh.fetch)

    // Device B has its own local "Samer" with a different id and a lesson read.
    const { engine, store, ieltsStore } = await freshApp()
    const localSamer = makeProfile('Samer', '#000')
    store.replace({ ...defaultState(), profiles: [localSamer], activeProfileId: localSamer.id })
    const localIelts = defaultIeltsProfile()
    localIelts.lessonsDone = { 'tfng-basics': 5 }
    ieltsStore.replace({ version: 1, profiles: { [localSamer.id]: localIelts } })

    await engine.connect('tok')
    const mine = ieltsStore.get().profiles['remote-samer']
    expect(mine?.settings.module).toBe('general')
    expect(mine?.lessonsDone).toEqual({ 'tfng-basics': 5 })
    expect(ieltsStore.get().profiles[localSamer.id]).toBeUndefined()
    expect(gh.others.get('g1')?.[IELTS_SYNC_FILE]).toContain('tfng-basics')
  })
})
