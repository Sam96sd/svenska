# Svenska 🇸🇪

A friendly web app for learning Swedish from absolute zero (CEFR A0 → A2), with English
explanations — and a full **IELTS preparation section** (Academic and General Training) with AI
feedback. Short lessons, audio for every Swedish word through your device's Swedish voice,
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

## IELTS preparation

Switch between **Swedish | IELTS** in the header. Each learner picks Academic or General Training
and a target band (default 8) on their first visit, and can change both in IELTS settings.
Built to take learners at about Band 6.5–7 to a reliable 7.5–8+.

- **Practice for every question type**: 12 reading passages/sections, 8 listening parts,
  22 writing tasks (Task 2 essays, Academic charts/maps/processes drawn from data, GT letters)
  with Band 6, 7 and 8–9 model answers, 50 cue cards and 40 Part 1 topics. All original.
- **Computer-test style runner**: split-screen reading with highlighting and notes, a countdown,
  a question navigator with flags, a 2-minute "stuck" coach, and a review that shows where each
  answer is in the text or transcript. Listening uses the device's English voices in several
  accents (optionally Gemini voices), heard once in exam mode.
- **36 strategy lessons** with worked examples and 20 linked drills, a dictation trainer for names
  and numbers, a pronunciation trainer, 18 vocabulary decks with spaced repetition, and
  "Band 7 vs 8 vs 9" criteria cards.
- **AI feedback (Google Gemini, free tier)**: band per criterion with evidence, the top 3 changes
  for +0.5, sentence-level errors, vocabulary upgrades, task checks and a Band 8–9 rewrite of your
  own essay side by side. Speaking answers are recorded, transcribed and graded, with fluency and
  pronunciation notes (pronunciation is labelled as an AI estimate).
- **Placement diagnostic** (~45 min), a **personal study plan** (8 weeks by default, weakest skill
  first), an **error log** with "Fix my weaknesses", a **progress dashboard**, and **4 full mock
  tests** (Academic 1–2, General Training 1–2) in strict exam mode.
- **Without a key** everything except AI grading works: self-assessment checklists, annotated model
  answers and a "Copy grading prompt" button for any chatbot.

### AI keys (each learner, on each device)

1. Open [Google AI Studio → API keys](https://aistudio.google.com/apikey), create a key in a **new
   project without billing** (free tier), and paste it in **IELTS → Settings → AI**. The app picks
   the newest stable Flash model automatically (you can override it).
2. Recommended: restrict the key in Google Cloud Console to the website
   `https://sam96sd.github.io/svenska/*` and to the Generative Language API.
3. Optional **premium key** from a **separate** project with billing (e.g. funded by the Google
   Cloud credit included with Google AI Pro): used only for Pro grading of full mocks, the
   diagnostic and "Second opinion (Pro)". The app estimates the cost per call, shows the monthly
   total, and asks before each call once 80% of the soft cap (default $8) is used. Prices live in
   `src/ielts/ai/pricing.ts`. Never put the free key in a billed project: that ends its free tier.

Keys stay in that browser's local storage: they are never synced, exported, committed or logged,
and CI fails the build if anything key-shaped appears in `dist/`. On the free tier, Google may use
submitted essays and recordings to improve its products.

IELTS progress syncs between devices in the same private gist (a second file); recordings, cached
AI feedback and keys stay on the device. To add or change IELTS content, see
**[IELTS_CONTENT_GUIDE.md](IELTS_CONTENT_GUIDE.md)** and run `npm run catalog`.

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
| `npm run catalog`                 | Regenerate the IELTS content catalog after adding content                      |
| `npm run check:secrets`           | Fail if anything that looks like an API key or token is in `dist/`             |

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
  ielts/        the IELTS section:
    examSpec.ts   exam facts (timings, structure) — the single source of truth
    scoring.ts    raw-score → band tables, half-band rounding, writing weighting
    criteria.ts   paraphrased band descriptors and checklists
    content/      typed, validated content (passages, scripts, tasks, lessons, decks, mocks)
    engine/       question components, answer checker, marking, reader, timers
    ai/           Gemini client, model picking, prompts, response schemas, grading, generators
    audio/        TTS voice casting, recorder, Gemini voices
    insights/     progress statistics, study plan, error patterns
    storage/      IELTS store (own key, version, migrations), sync merge, IndexedDB
    features/     screens
e2e/            Playwright smoke tests (Swedish lesson, IELTS reading + mocked AI feedback)
```

## Tech

Vite · React · TypeScript (strict) · Tailwind CSS · React Router (hash routing for GitHub Pages) ·
Zod · vite-plugin-pwa · Web Speech API (speech synthesis and recognition) · Vitest · Playwright.

Audio uses the voices built into your device, so quality depends on the device. If the app
says no Swedish voice is installed, it shows how to add one (free) on iPhone, Android, Windows or
Mac.
