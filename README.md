# No Boundaries Dance Foundation

Marketing site for the [No Boundaries Dance Foundation](#) (NBDF), a non-profit expanding access to dance education for youth in Moreno Valley and the Inland Empire.

Built on **Next.js 16** (App Router, React 19, TypeScript). Originally designed in Claude Design — see `design-source/` for the frozen design contract.

## Develop

```sh
npm install
npm run dev
# open http://localhost:3000
```

## Build

```sh
npm run build
npm run start    # serve the production build
```

## Project layout

```
app/
  layout.tsx              Root layout (fonts, CustomCursor, ScrollEffects)
  page.tsx                Composes the marketing page
  globals.css             Stylesheet ported from the prototype
  _components/            Section components (Nav, Hero, StatBar, …)
public/
  uploads/                Logos, photos, sponsorship PDFs
design-source/            FROZEN reference of the original Claude Design handoff
CLAUDE.md                 Notes for AI coding sessions — read first
AGENTS.md                 Next.js-version warning from create-next-app
```

## Deploy

Vercel is the assumed target — push to a connected repo and it auto-deploys. Netlify, Cloudflare Pages, etc. also work.

## Outstanding work

See [CLAUDE.md](CLAUDE.md) for the full list. Headlines:

- Contact form has no backend yet
- Donate button has no payment processor wired
- Sponsorship proposal pages not yet ported from `design-source/`
- Mobile responsiveness, accessibility, SEO basics
