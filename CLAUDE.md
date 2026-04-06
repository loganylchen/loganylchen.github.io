# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server with HMR
npm run build     # Type-check (tsc -b) then build for production
npm run lint      # Run ESLint
npm run preview   # Preview production build locally
```

No test framework is configured.

## Architecture

This is a single-page CV/portfolio app. `src/App.tsx` renders a vertical stack of section components in order: Navbar → Hero → About → Education → Publications → Research → Awards → Contact → Footer.

**`src/sections/`** — One file per page section. Each section is self-contained and handles its own layout and data.

**`src/components/ui/`** — 55+ shadcn/ui components built on Radix UI primitives. These are pre-generated and generally shouldn't be modified directly — use them via import.

**Styling** — Tailwind CSS with a custom HSL-based color theme (`tailwind.config.js`). Dark mode is class-based. Use `cn()` from `src/lib/utils.ts` for conditional class merging (`clsx` + `tailwind-merge`).

**Path alias** — `@/` resolves to `src/`. Use this for all internal imports.

**Animations** — GSAP 3 via `@gsap/react`. Import `useGSAP` for scroll/entry animations in section components.

**Forms** — React Hook Form + Zod for validation. See the Contact section for reference usage.
