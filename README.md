# Svenska 🇸🇪

A friendly web app for learning Swedish from absolute zero (CEFR A0 → A2), with English explanations.
Short lessons, real audio through your device's Swedish voice, and spaced-repetition review.
It is built for a couple learning together: every learner gets their own profile and progress.

**Live app:** https://sam96sd.github.io/svenska/

- Works offline after the first visit and can be installed on your phone's home screen (PWA)
- No accounts, no servers, no tracking: progress stays in your browser (`localStorage`)
- Export/import progress as a JSON file to move between devices

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/svenska/
```

| Command                           | What it does                       |
| --------------------------------- | ---------------------------------- |
| `npm run dev`                     | Start the dev server               |
| `npm run build`                   | Type-check and build to `dist/`    |
| `npm run preview`                 | Serve the production build         |
| `npm test`                        | Unit tests (Vitest)                |
| `npm run test:e2e`                | End-to-end smoke test (Playwright) |
| `npm run lint` / `npm run format` | ESLint / Prettier                  |

Pushing to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`.

## Tech

Vite · React · TypeScript (strict) · Tailwind CSS · React Router (hash routing for GitHub Pages) ·
Zod · vite-plugin-pwa · Web Speech API (speech synthesis + recognition).
