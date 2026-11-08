/// <reference types="node" />
import { existsSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
// @ts-expect-error plain JS build script without type declarations
import { scan } from '../../scripts/secrets-lib.mjs'

describe('no secrets in the build output', () => {
  it('detects key-like strings', () => {
    const dir = mkdtempSync(join(tmpdir(), 'secrets-'))
    try {
      writeFileSync(join(dir, 'ok.js'), 'const x = "AIza…placeholder"')
      expect(scan(dir)).toEqual([])
      writeFileSync(join(dir, 'bad.js'), `const k = "AIza${'x'.repeat(35)}"`)
      expect(scan(dir)).toHaveLength(1)
    } finally {
      rmSync(dir, { recursive: true, force: true })
    }
  })

  it.skipIf(!existsSync('dist'))('dist/ contains no API keys or tokens', () => {
    expect(scan('dist')).toEqual([])
  })
})
