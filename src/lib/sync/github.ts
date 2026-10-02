/**
 * The sync data lives in one secret GitHub Gist in the learner's own account, read and
 * written straight from the browser with a personal access token (Gists permission only).
 */

const API = 'https://api.github.com'
export const SYNC_FILE = 'svenska-sync.json'
const DESCRIPTION = 'Svenska — learning progress (synced by the app)'

export type SyncErrorKind = 'auth' | 'notFound' | 'rateLimit' | 'network' | 'other'

export class SyncError extends Error {
  readonly kind: SyncErrorKind
  constructor(kind: SyncErrorKind, message: string) {
    super(message)
    this.kind = kind
  }
}

interface GistFile {
  content?: string
  truncated?: boolean
  raw_url?: string
}
interface Gist {
  id: string
  files: Record<string, GistFile | null>
}

async function request(token: string, path: string, init: RequestInit = {}): Promise<Response> {
  let res: Response
  try {
    res = await fetch(`${API}${path}`, {
      ...init,
      cache: 'no-store',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
        ...(init.body ? { 'Content-Type': 'application/json' } : {}),
      },
    })
  } catch {
    throw new SyncError('network', 'You seem to be offline.')
  }
  if (res.ok) return res
  if (res.status === 401)
    throw new SyncError(
      'auth',
      'GitHub didn’t accept the token. It may have expired or been revoked.',
    )
  if (res.status === 403 || res.status === 429) {
    if (res.headers.get('x-ratelimit-remaining') === '0')
      throw new SyncError('rateLimit', 'GitHub’s rate limit was reached. Sync will retry later.')
    throw new SyncError(
      'auth',
      'The token isn’t allowed to use Gists. Create one with the “gist” box ticked.',
    )
  }
  if (res.status === 404) throw new SyncError('notFound', 'The sync data wasn’t found on GitHub.')
  throw new SyncError('other', `GitHub answered with an error (${res.status}).`)
}

async function fileContent(file: GistFile): Promise<string> {
  if (!file.truncated && typeof file.content === 'string') return file.content
  if (!file.raw_url) throw new SyncError('other', 'The sync file could not be read.')
  try {
    const res = await fetch(file.raw_url, { cache: 'no-store' })
    if (!res.ok) throw new Error()
    return await res.text()
  } catch {
    throw new SyncError('network', 'The sync file could not be downloaded.')
  }
}

/** The id of the user's existing Svenska gist, if there is one. */
export async function findGist(token: string): Promise<string | null> {
  for (let page = 1; page <= 10; page++) {
    const res = await request(token, `/gists?per_page=100&page=${page}`)
    const gists = (await res.json()) as Gist[]
    const hit = gists.find((g) => g.files[SYNC_FILE])
    if (hit) return hit.id
    if (gists.length < 100) return null
  }
  return null
}

export async function createGist(token: string, content: string): Promise<string> {
  const res = await request(token, '/gists', {
    method: 'POST',
    body: JSON.stringify({
      description: DESCRIPTION,
      public: false,
      files: { [SYNC_FILE]: { content } },
    }),
  })
  return ((await res.json()) as Gist).id
}

/** The sync file's text, or null when the gist exists but has no sync file yet. */
export async function readGist(token: string, id: string): Promise<string | null> {
  const res = await request(token, `/gists/${encodeURIComponent(id)}`)
  const file = ((await res.json()) as Gist).files[SYNC_FILE]
  return file ? fileContent(file) : null
}

export async function writeGist(token: string, id: string, content: string): Promise<void> {
  await request(token, `/gists/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    body: JSON.stringify({ files: { [SYNC_FILE]: { content } } }),
  })
}
