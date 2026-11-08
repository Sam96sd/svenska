// Regenerates src/ielts/content/catalog.generated.json from the content files.
import { spawnSync } from 'node:child_process'

const r = spawnSync('npx', ['vitest', 'run', 'src/ielts/content/catalog.test.ts'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, UPDATE_CATALOG: '1' },
})
process.exit(r.status ?? 1)
