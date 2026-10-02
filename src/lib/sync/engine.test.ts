import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { makeProfile } from '../storage/actions'
import { addXp } from '../progress'
import { serializeDoc, toDoc } from './merge'
import { SYNC_FILE } from './github'
import { defaultState } from '../storage/schema'

/** A tiny in-memory stand-in for the GitHub Gists API. */
function fakeGitHub(token = 'tok') {
  const gists = new Map<string, string>()
  const calls: string[] = []
  let status = 200
  const fetch = vi.fn(async (url: string, init: RequestInit = {}) => {
    const method = init.method ?? 'GET'
    const path = url.replace('https://api.github.com', '')
    calls.push(`${method} ${path}`)
    const auth = (init.headers as Record<string, string>).Authorization
    if (status !== 200 || auth !== `Bearer ${token}`) return new Response('{}', { status: 401 })
    const json = (v: unknown) => new Response(JSON.stringify(v), { status: 200 })
    const files = (id: string) => (gists.has(id) ? { [SYNC_FILE]: { content: gists.get(id) } } : {})
    if (method === 'GET' && path.startsWith('/gists?'))
      return json([...gists.keys()].map((id) => ({ id, files: files(id) })))
    if (method === 'POST' && path === '/gists') {
      const body = JSON.parse(init.body as string)
      gists.set('g1', body.files[SYNC_FILE].content)
      return json({ id: 'g1', files: files('g1') })
    }
    const id = path.split('/')[2]!
    if (!gists.has(id)) return new Response('{}', { status: 404 })
    if (method === 'GET') return json({ id, files: files(id) })
    if (method === 'PATCH') {
      gists.set(id, JSON.parse(init.body as string).files[SYNC_FILE].content)
      return json({ id, files: files(id) })
    }
    return new Response('{}', { status: 405 })
  })
  return { gists, calls, fetch, fail: () => (status = 401) }
}

async function freshApp() {
  vi.resetModules()
  const engine = await import('./engine')
  const { store } = await import('../storage/store')
  return { engine, store }
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
})
