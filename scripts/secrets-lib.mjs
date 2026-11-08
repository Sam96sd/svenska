// Finds strings that look like API keys or tokens in a folder (used on dist/).
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

export const SECRET_PATTERNS = [
  { name: 'Google API key', re: /AIza[0-9A-Za-z_-]{35}/ },
  { name: 'GitHub token', re: /\b(?:ghp|gho|ghu|ghs|ghr)_[0-9A-Za-z]{36}\b/ },
  { name: 'GitHub fine-grained token', re: /\bgithub_pat_[0-9A-Za-z_]{40,}\b/ },
]

export function scan(dir) {
  const hits = []
  const walk = (d) => {
    for (const name of readdirSync(d)) {
      const path = join(d, name)
      if (statSync(path).isDirectory()) walk(path)
      else if (/\.(js|mjs|css|html|json|webmanifest|txt|map)$/.test(name)) {
        const text = readFileSync(path, 'utf8')
        for (const { name: kind, re } of SECRET_PATTERNS)
          if (re.test(text)) hits.push(`${path}: ${kind}`)
      }
    }
  }
  walk(dir)
  return hits
}
