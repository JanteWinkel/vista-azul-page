# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Informational website for the residential condominium **Terrazas de Vista Azul** (Venezuela). All user-facing text, component names, and route names are in **Spanish**; keep new content and naming consistent with that. Deployed on Vercel (`@vercel/analytics` is mounted in the root layout).

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build (also the main type-check, since there is no separate `tsc` script)
- `npm run lint` — ESLint (`next/core-web-vitals` + `next/typescript`)

There is no test suite. Both `package-lock.json` and `pnpm-lock.yaml` are committed; `pnpm-lock.yaml` is the more recently updated one.

## Architecture

Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui (`new-york` style, components in `components/ui/`), `lucide-react` icons, `next-themes` for dark mode. Path alias `@/*` maps to the repo root.

- **Layout chain:** `app/layout.tsx` → `ThemeProvider` → `app/provider.tsx`, which renders the fixed `Header` (`app/components/containers/header.tsx`) and offsets page content with `mt-20`. Pages render their own `<Footer />` (from `components/footer.tsx`) at the bottom.
- **Navigation:** the menu items live in `lib/nav.ts` and feed both the header and the footer. Adding a new top-level section means creating `app/<ruta>/page.tsx` and adding it there.
- **Section pattern:** each route (`calendario`, `contactos`, `finanzas`, `horarios`, `informes`, `normativas`) has a `page.tsx` that composes a `banner_<seccion>.tsx` plus section-specific components in a colocated `components/` (or `calendario_components/`) folder. Pages are mostly `'use client'`.
- **Content is hardcoded:** almost all data (bank accounts, debts, schedules, contacts, events, reports) lives as constants inside the components themselves, not in a database. Updating site content usually means editing the relevant `.tsx` file directly (e.g. debt totals at the top of `app/finanzas/components/deudas.tsx`).
- **Announcements on the home page:** `app/page.tsx` composes temporary notice components (from `app/convovatorias/` — note the misspelled folder name — and reusable ones like `components/anuncio-reutilizable-*.tsx`). Old announcements are toggled by commenting their import/JSX in or out rather than deleting them.
- **Static assets:** photos in `public/<topic>/`, PDFs (assembly minutes, letters, regulations) in `public/documents/`, linked directly by path.

### Auth and database (mostly dormant)

- `middleware.ts` runs `clerkMiddleware()` on all routes, and `app/auth/sign-in` / `sign-up` hold Clerk pages, but the root layout does **not** wrap the app in `<ClerkProvider>`. Any component using Clerk hooks (`useUser`, etc.) will need that added.
- Supabase: the client is `lib/supabaseClient.js` (throws if env vars are missing). A duplicate root-level `supabaseClient.js` also exists. The only consumer is `app/components/containers/cards/card-isSigned.tsx`, which queries the `propietarios` and `estado_de_cuenta` tables by the Clerk user's email; it is not currently rendered anywhere.
- Env vars (in `.env.local`): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL`.

## Design system

The visual language is derived from the logo (petrol blue, sunflower yellow, orange). When restyling, never change the displayed information (texts, amounts, phones, dates, accounts); only layout and styling.

- **Tokens:** `va-*` colors in `tailwind.config.ts` (`va-azul`, `va-abismo`, `va-noche`, `va-marea`, `va-linea`, `va-bruma`, `va-girasol`, `va-sol`, `va-senal`). Dark mode is navy, not gray: the shadcn CSS variables in `app/globals.css` are tuned to match, and `primary` maps to `--brand`.
- **Fonts:** `font-display` (Bricolage Grotesque) for headings and big numbers, `font-legible` (Atkinson Hyperlegible, the body default) for everything else. Both are loaded in `app/layout.tsx`.
- **Shared pieces:** `components/va-ui.tsx` (`PageHero` for section banners, `PageIntro`, `SectionHeader`, `btnPrimary`/`btnOutline`, `sectionWrap`, `carouselArrow`), `components/girasol.tsx` (the logo's sunflower as SVG, used in the home hero and footer), and `lib/nav.ts` (menu items for header and footer).
- **Patterns:** sections are `rounded-[28px]` panels with hairline `border-va-linea` dividers instead of nested gradient cards; notices use a thick colored left rule (`va-senal` red for sanctions, `va-sol` orange for reminders); callouts that need attention use a solid `va-girasol` or `va-abismo` panel. Avoid all-caps labels, pulse animations and decorative emojis. Every colored element needs a `dark:` variant.
