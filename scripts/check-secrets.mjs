// Fails the build if anything that looks like an API key or token ended up in dist/.
// Run after `vite build` (CI does). Usage: node scripts/check-secrets.mjs [dir]
import { scan } from './secrets-lib.mjs'

const dir = process.argv[2] ?? 'dist'
const hits = scan(dir)
if (hits.length) {
  console.error(`Possible secrets found in ${dir}/:`)
  for (const hit of hits) console.error(`  ${hit}`)
  process.exit(1)
}
console.log(`No secrets found in ${dir}/.`)
