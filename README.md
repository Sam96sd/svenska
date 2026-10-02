# Svenska 🇸🇪

A friendly web app for learning Swedish from absolute zero (CEFR A0 → A2), with English
explanations. Short lessons, audio for every Swedish word through your device's Swedish voice,
speaking practice and spaced-repetition review. It is built for a couple learning together:
every learner has their own profile and progress on the same device.

**Live app:** https://sam96sd.github.io/svenska/

## What's inside

- **11 units, 57 lessons**: sounds and alphabet → greetings → numbers and time → nouns → verbs →
  word order → food and fika → family and home → adjectives and plurals → past and future →
  getting around Sweden. Culture lessons on the du-reform, midsommar, lagom, fika and
  allemansrätten.
- **Every lesson**: a short _Learn_ card, new words with audio and forms, a dialogue with a
  translation toggle, and 10–15 mixed exercises. Wrong answers come back at the end.
- **10 exercise types**: multiple choice, listen and choose, type the answer (with å ä ö keys and
  typo tolerance), dictation, build the sentence, match pairs, fill in the gap, minimal pairs,
  speak the sentence, dialogue replies.
- **Review**: SM-2 spaced repetition with flashcards (Again/Hard/Good/Easy) or mixed exercises,
  a weak-words list, and a searchable dictionary.
- **Motivation**: XP, daily goal, streaks, levels, badges, and a friendly "This week" card
  comparing learners.
- **Sync between devices** (optional): both learners' progress on every phone and computer,
  stored in a private GitHub Gist in your own account. No other account or server.
- **Installable PWA** that works offline. No tracking. Without sync, progress stays in your
  browser and can be exported/imported as a JSON file.

## Sync between devices

1. On one device, open **Settings → Sync between devices** and follow the link to create a GitHub
   token. The form comes pre-filled with only the `gist` scope; choose _No expiration_.
2. Paste the token and tap **Connect**. The app creates a private gist named
   `svenska-sync.json` (or finds the existing one).
3. On each other device, tap **Add another device** on a connected device and scan the QR code
   (or paste the link into the same box; needed for apps installed on an iPhone home screen,
   which don't share storage with Safari).

The app syncs on start, a few seconds after each change, when it comes back to the foreground
and every minute while open. Merging is conflict-free: XP is counted per device and added up,
the most recent review of each card wins, lessons keep their best score, and deletes and
resets carry over. Voice and theme stay per device. The code is in `src/lib/sync/`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/svenska/
```

| Command                           | What it does                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------ |
| `npm run dev`                     | Start the dev server                                                           |
| `npm run build`                   | Type-check and build to `dist/`                                                |
| `npm run preview`                 | Serve the production build                                                     |
| `npm test`                        | Unit tests and content validation (Vitest)                                     |
| `npm run test:e2e`                | End-to-end smoke test (Playwright; run `npx playwright install chromium` once) |
| `npm run lint` / `npm run format` | ESLint / Prettier                                                              |

Pushing to `main` runs lint, tests and the build, then deploys to GitHub Pages
(`.github/workflows/deploy.yml`). The Playwright test runs in a separate workflow.

## Add or change lessons

All course content is plain, typed data in `src/content/units/` — no React code needed.
See **[CONTENT_GUIDE.md](CONTENT_GUIDE.md)** for how to add a lesson or a unit (there's a template
in `templates/`), and **[CURRICULUM.md](CURRICULUM.md)** for the scope and sequence. `npm test`
validates every lesson against the schema, so broken content never gets deployed.

## Project structure

```
src/
  app/          routing, layout, theme
  components/   shared UI (buttons, audio buttons, rich text, voice banner)
  content/      schema (Zod), course loader, units/unit-XX/{meta,index,lesson-YY}.ts
  exercises/    the 10 exercise components
  features/     home, lesson player, practice engine, review, dictionary, placement, settings
  lib/          audio, speech recognition, answer checker, SRS, progress, storage (+ migrations)
e2e/            Playwright smoke test
```

## Tech

Vite · React · TypeScript (strict) · Tailwind CSS · React Router (hash routing for GitHub Pages) ·
Zod · vite-plugin-pwa · Web Speech API (speech synthesis and recognition) · Vitest · Playwright.

Audio uses the voices built into your device, so quality depends on the device. If the app
says no Swedish voice is installed, it shows how to add one (free) on iPhone, Android, Windows or
Mac.
