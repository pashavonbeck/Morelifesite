# More Life Collective

Clean rebuild of the site, no longer tied to ChatGPT's hosting/auth
scaffold. Plain Next.js — runs and deploys anywhere (Vercel, Netlify,
your own server).

## Running it

```
npm install
npm run dev
```

Then open http://localhost:3000. For a production build:

```
npm run build
npm start
```

## Where to make common edits

Almost everything you'd want to change day-to-day lives in `content/`,
not scattered across pages:

- **`content/trips.ts`** — every trip (title, country, blurb,
  highlights, photo). Add a new object to the array to add a new trip
  — it automatically appears on the homepage, the More Trips page, and
  gets its own detail page at `/more-trips/<slug>`. No other file
  needs to change.
- **`content/faqs.ts`** — the FAQ list. Add, remove, or reorder
  question/answer pairs freely.
- **`content/site.ts`** — the nav menu, footer links, contact email,
  and tagline used across the whole site.

Page layout/copy that's specific to one page (the homepage hero copy,
the founder's story, the "Why More Life" text) lives directly in that
page's file under `app/`.

## Fonts

Set once in `app/layout.tsx`, then used everywhere via two CSS
variables in `app/globals.css`:

- `--font-display` — every heading, title, and the nav wordmark
- `--font-body` — every paragraph, label, and button

To change either font site-wide, edit the `next/font/google` imports
at the top of `app/layout.tsx` — no need to touch individual pages.

## Expression of interest (Tally)

Each trip in `content/trips.ts` has a `tallyFormUrl` field, currently
`null` for all three. Until it's set, the "Register interest" button
on that trip's page falls back to a pre-filled email. Once a trip has
its own Tally form:

1. Set `tallyFormUrl` for that trip in `content/trips.ts`.
2. If you want a popup or embed rather than a new tab, update
   `components/express-interest.tsx` — that's the only file that
   needs to change.

## What changed from the original

- Removed the ChatGPT-hosting-specific auth, Cloudflare Worker, and
  build scripts — none of that runs outside ChatGPT's platform.
- Removed the shadcn/Radix UI component library (~360KB of files) in
  favor of a small custom mobile-menu component, since it was the only
  thing using it.
- Removed a large block of dead CSS left over from an earlier version
  of the founder page.
- Replaced the inconsistent font stack (Arial in some places, Georgia
  in others, a "Cooper Black" reference that isn't a real web font and
  was silently falling back) with two actual web fonts applied
  consistently everywhere.
- Consolidated the three duplicated trip-detail page folders into one
  dynamic route driven by `content/trips.ts`.
