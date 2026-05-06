@AGENTS.md

# Notes for Claude — No Boundaries Dance Foundation site

**Read this before editing anything.** Also read `AGENTS.md` (referenced above) — it warns that this is Next.js 16, which has breaking changes vs older training data.

## What this project is

A Next.js 16 (App Router, React 19, TypeScript) marketing site for the No Boundaries Dance Foundation (NBDF), with sponsorship proposal pages still to come (see "Outstanding work" below).

The user originally generated the design in Claude Design (claude.ai/design) as a one-page HTML/CSS/JS prototype, then chose to rebuild it on Next.js for room to grow (member portal, donation flow, dynamic events, etc.).

Director: Suzi Zuppardo. Location: Moreno Valley, CA.

## Where things live

```
app/
  layout.tsx              Root layout — fonts (next/font), <CustomCursor>, <ScrollEffects>
  page.tsx                Composes the marketing-page sections
  globals.css             Verbatim port of the prototype's CSS (with token swaps)
  _components/
    Nav, Hero, StatBar, Mission, ParallaxBanner, HelpCards,
    Events, Contact, Footer       — content sections, mostly server components
    CustomCursor, ScrollEffects   — client components (mounted in layout.tsx)
public/
  uploads/                Logos, hero/mission photos, sponsorship PDFs (renamed)
design-source/            FROZEN reference of the original Claude Design handoff
                          — do not edit. Source of truth for layout, color, copy.
```

## Component conventions

- **Default to server components.** Only mark `"use client"` when you need state, effects, browser APIs, or event handlers (`onClick`, `onSubmit`, etc.).
- **Two client components mounted globally** in `app/layout.tsx`: `CustomCursor` (renders dot+ring) and `ScrollEffects` (no DOM, runs scroll/parallax/reveal/smooth-scroll handlers). They locate elements by ID/class so the rest of the tree can stay server-rendered.
- **`<img>` tags use eslint-disable comments** rather than `next/image` for the initial port. Swap to `next/image` as a follow-up perf optimization (will need explicit width/height or `fill` + sized container).
- **Class names match the prototype exactly** — `className="hero-headline"`, etc. — so `design-source/NBDF Website.html` stays a 1:1 reference.

## Brand tokens

In `app/globals.css`:

```css
:root {
  --mint:        #3fffc8;
  --mint-dark:   #00c49a;
  --dark:        #0e0e0e;
  --dark2:       #1a1a1a;
  --cream:       #f5f3ef;
  --warm-white:  #fafaf8;
  --mid:         #444;
  --subtle:      #888;
  --rule:        #e0ddd8;
}
```

Fonts via `next/font/google` in `app/layout.tsx`, exposed as CSS vars:

- `--font-barlow` — body text (300, 400, 500, 600, 700; italic 300, 400)
- `--font-dm-serif` — headlines (DM Serif Display, regular + italic)
- `--font-barlow-condensed` — stat numbers and small caps labels (700, 800)

Italic + mint is the recurring accent treatment for headline emphasis.

## Asset paths

Originals had cryptic filenames from the design tool. Cleaned in `public/uploads/`:

| In `public/uploads/`            | Was in `design-source/uploads/`                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| `hero-dancers.jpg`              | `werghjkjhgf.jpg`                                                                    |
| `mission-dancers.jpg`           | `wfwqafwewwe-wwgroup-of-female-kids-practicing-at-2023-11-27-04-55-25-utc.jpg`       |
| `nbdf-logo-square.png`          | `NBDF LOGO V2_SIDEWAYS@4x_square.png`                                                |
| `nbdf-logo-horizontal.png`      | `NBDF LOGO HOR@4x-0a31fb11.png`                                                      |
| `dancer-sponsorship.pdf`        | `Dancer sponsorship letter-ba095d7e.pdf`                                             |
| `show-sponsorship.pdf`          | `Show sponsorship letter-5fe912ab.pdf`                                               |
| `show-sponsorship-v2.pdf`       | `Show sponsorship letter-b69b88f3.pdf` (different version — confirm with user which is current) |

## Section anatomy of `app/page.tsx`

In order: Nav · Hero (parallax bg) · StatBar · Mission · ParallaxBanner · HelpCards · Events · Contact · Footer.

Anchor links for the nav: `#mission`, `#help`, `#events`, `#contact`. Smooth-scroll with 72px nav offset is handled by `ScrollEffects`.

## Outstanding work

- **Contact form:** preventDefault only — no backend wired. Three sensible options: API route at `app/api/contact/route.ts` + email service (Resend, etc.), Netlify Forms (requires Netlify hosting), or Formspree.
- **Donate button:** all "Donate" / "Support a Dancer" CTAs link to `#contact`. Payment processor not chosen (Donorbox, Stripe Checkout, PayPal Giving Fund are typical nonprofit options).
- **Sponsorship pages:** four prototype HTML files exist in `design-source/` (Dancer + Show, each web + print). Not yet ported to Next routes (`app/sponsor/dancer/page.tsx`, etc.). Decide whether to add a "Sponsorships" link in the nav.
- **Events:** 3 of 4 are "Date TBA". Events are currently hardcoded JSX in `app/_components/Events.tsx`. Could be promoted to a JSON file + map() if Suzi will be editing without a developer.
- **Mobile responsiveness:** prototype is desktop-first, no media queries. Needs a breakpoint pass before shipping.
- **Custom cursor:** desktop only. Verify it no-ops cleanly on touch and consider a `prefers-reduced-motion` opt-out for the parallax + reveal animations.
- **`<img>` → `<Image>`:** swap to `next/image` for srcset/lazy/CLS prevention. Background-image parallax bgs in CSS will stay as-is.
- **Accessibility pass:** alt text, focus styles, color contrast (especially `rgba(255,255,255,0.4)` greys), reduced-motion fallback.
- **SEO + favicon:** `app/favicon.ico` is the create-next-app placeholder. Need real NBDF favicon, Open Graph image, sitemap, robots.txt.
- **Analytics:** none wired (Plausible, Fathom, GA4, etc.).
- **Hosting:** Vercel is the assumed target (native Next.js host). If switching to Netlify, contact form can use Netlify Forms instead of an API route.

## Working style

- Keep edits surgical. The prototype is the design contract — match it visually unless the user explicitly asks for a change.
- For visual changes, reuse existing patterns (token vars, clamp scales, reveal animations) rather than introducing new approaches.
- For larger architectural changes (router restructure, CMS, payment integration), ask first.
- When porting more sections from `design-source/`, mirror the existing component pattern: server by default, client only if needed, IDs/classes match the prototype.
