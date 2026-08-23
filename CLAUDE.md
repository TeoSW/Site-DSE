# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Public website of the Department of Statistics and Econometrics (DSE), ASE Bucharest / CSIE. React 18 + TypeScript + Vite 6 SPA, originally exported from Figma, deployed as a static site to GitHub Pages.

- Canonical repo: `dse-ase/Site-DSE`, live at **https://dse-ase.github.io/Site-DSE/**.
- `package.json` still carries `"homepage": "https://TeoSW.github.io/Site-DSE"` from an earlier personal repo; that URL 404s. Don't trust it as the deploy target.

All UI copy is Romanian (with diacritics); code comments are mixed Romanian/English.

## Commands

```bash
npm install --force
```

```bash
npm run dev
```

```bash
npm run build
```

- `dev` runs Vite on port 3000 and opens a browser.
- `build` emits to `build/` (not `dist/`), target `esnext`.
- `npm run deploy` (`gh-pages -d build`) exists but is a manual fallback — CI already publishes on push.
- **No test suite and no linter.** Don't look for them.
- **No typecheck script either, and `build` never runs `tsc`** — `build` is plain `vite build`, so type errors do not fail the build or CI. `tsconfig.json` is nonetheless strict (`strict`, `noUnusedLocals`, `noUnusedParameters`). The tree currently typechecks clean, so this is worth wiring into CI:

```bash
npx tsc --noEmit -p tsconfig.json
```

Use that form, **not `tsc -b`** — see the gotcha below about it emitting `vite.config.js`.

- CI (`.github/workflows/static.yml`) on push to `main`: Node 20, `rm -rf node_modules package-lock.json && npm install --force`, `npm run build`, publish `build/` to Pages. Dependency resolution is expected to need `--force`.

## Architecture

### Hand-rolled hash router

No react-router. [src/router.tsx](src/router.tsx) listens to `hashchange` and looks the hash up in a plain `Record<string, JSX.Element>`; unknown hashes fall through to `HomePage`. `main.tsx` → `App.tsx` (wraps `DarkModeProvider`) → `Router`.

Adding a page means three edits: create it in `src/pages/`, register the `#/slug` key in the `routes` map, add the link to **both** the desktop and mobile menus in [src/components/Header.tsx](src/components/Header.tsx) (the nav markup is duplicated for the two breakpoints).

The router also carries behavior beyond lookup, so read it before changing navigation:
- Home-page section anchors (`#acasa`, `#noutati`, `#cercetare`, `#contact`) scroll to top, then `scrollIntoView` after a 100 ms delay.
- Several hashes are aliases of one page and scroll to a section id inside it: `#/icas`, `#/jses`, `#/centrul-sondaje` → `CercetarePage`; `#/activitati-viitoare`, `#/evenimente-trecute` → `ActivitatePage`.
- `#/orar` is not a page — it opens the CSIE timetable in a new tab and resets the hash to `#/`.

### Professor pages

`#/profesor/<slug>` is handled separately, before the routes map. [src/pages/profesori/ProfesorRouter.tsx](src/pages/profesori/ProfesorRouter.tsx) maps slug → component; a slug not in that map falls through to `HomePage`.

Each `src/pages/profesori/<slug>.tsx` is data, not layout: it builds a `data` object (name, initials, photo import, role, email, `activitateDidactica`, `domeniiCercetare`, `tezeDoctorat`, `publicatiiRelevante`, `proiecteCercetare`, `cvProfiluri`) and hands it to [ProfesorProfile](src/components/ProfesorProfile.tsx), which owns all rendering. `ProfesorProfile` accepts both string and object shapes for publications, theses and CV links, and hides sections whose entries are empty or placeholders (`"Va urma"`, `"De completat"`, `"—"`, `"-"`). For a professor without content, register `ProfesorComingSoon` in the map instead of writing a stub page.

### Page composition

Full pages use `Header` + `Footer`; profile and secondary pages use `SimpleHeader` + `Footer`. The home page is a stack of section components (`HeroSection`, `CardsSection`, `ProgramSection`, `MasterPrograms`, `DoctoralProgram`, `Contact`) whose element ids are the scroll targets used by the router.

### Dark mode

[src/contexts/DarkModeContext.tsx](src/contexts/DarkModeContext.tsx) toggles the `dark` class on `<html>` and persists to `localStorage`. Class-based, not media-query based — every colored element needs explicit `dark:` variants, and the existing code does this consistently.

## Styling: Tailwind v4, compiled at build time

`src/index.css` is a real Tailwind **source** file (~680 lines), not a compiled artifact. `@tailwindcss/vite` compiles it during `dev` and `build`, so any utility class works — including new arbitrary values.

It was not always so: until the pipeline was restored, `index.css` was a ~4,200-line **precompiled** stylesheet with no compiler in the project, and a class that wasn't already in the file silently did nothing. If you find advice (or an old commit) that says to grep `index.css` before using a class, it is out of date.

Structure of the file, in order:
- `@import "tailwindcss"` and `@source "./**/*.{ts,tsx}"`. **The `@source` line is required** — automatic content detection found no classes in this project and emitted a utility-free stylesheet, which fails silently and looks like an unstyled site.
- `@custom-variant dark (&:where(.dark, .dark *))`. **Also required.** Dark mode here is class-based (`.dark` on `<html>`, set by `DarkModeContext`), but Tailwind v4 defaults `dark:` to `prefers-color-scheme`. Without this line every `dark:` class on the site breaks.
- `@theme` — brand palette as `--color-brand-*`, so `bg-brand-purple` and friends generate.
- `:root` / `.dark` — shadcn tokens plus the legacy `--color-*` brand vars and `--font-size: 20px`, which `html` consumes.
- Hand-written blocks: `:focus-visible` outlines, `prefers-reduced-motion`, `.custom-scrollbar`, `.dse-search-*`, and the `width <= 440px` mobile overrides that use `!important`.

`@layer base` at the end carries the Figma export's default heading sizes, which apply only to elements with no `text-*` class. Keep that quirk in mind when a heading ignores the size you expect.

## Visual language

The DSE brand hues stay (`#7209B7` purple, `#4361EE` blue, `#4CC9F0` cyan, `#3A0CA3` deep purple, `#F72585` pink), addressed as arbitrary hex in classNames. What was removed is the uniform decoration that used to sit on top of them:

- **No gradients.** There were 162 `bg-gradient-*` uses plus 8 inline `linear-gradient` styles; all are now flat fills. A gradient is not the house style — do not reintroduce one for an ordinary card, button, badge, or heading.
- **No hover lift.** `hover:scale-*` and `hover:shadow-lg/xl` were removed everywhere. Hover feedback should be a colour or border change.
- **Calm elevation and radius.** `shadow-sm` and `rounded-xl` on cards, not `shadow-lg` / `rounded-2xl`.
- **No gradient text.** `bg-clip-text text-transparent` headings are now solid `text-[#3A0CA3] dark:text-[#4CC9F0]`.

Dark mode is class-based, so every colour needs an explicit `dark:` counterpart; the codebase does this consistently.

### Contrast-safe colour pairs

The palette was audited against WCAG AA across every route in both themes at 375 / 1024 / 1280. Several brand hues are **too light to be text on white** and too dark to be text on the dark surfaces, so each has a light/dark pair. Reuse these rather than inventing new combinations:

| Role | Light mode | Dark mode |
|---|---|---|
| Purple text | `text-[#7209B7]` | `dark:text-[#DDB8FF]` |
| Blue text | `text-[#4361EE]` | `dark:text-[#A5B8FF]` |
| Cyan / light-blue text | `text-[#4361EE]` | `dark:text-[#4CC9F0]` / `dark:text-[#4895EF]` |
| Pink text | `text-[#B5179E]` | `dark:text-[#F72585]` |
| Green text | `text-[#047857]` | `dark:text-[#34D399]` |
| Amber text | `text-[#B45309]` | `dark:text-[#F59E0B]` |

For **white text on a brand fill**, only these clear 4.5:1 — `bg-[#7209B7]`, `bg-[#4361EE]`, `bg-[#B5179E]`, `bg-[#047857]`, `bg-[#3F37C9]`. Never put white text on `#4CC9F0`, `#4895EF`, `#F72585`, `#10B981` or `#FF9F1C`; those need dark text or a darker fill.

Two traps that produced real bugs:

- A heading with only a size class (`className="text-3xl mb-6"`) inherits black and **disappears on dark backgrounds**. Give every text element an explicit colour with a `dark:` variant, unless it sits inside a permanently-coloured card and should inherit white.
- A `dark:text-*` variant on an element whose background is `bg-white` **with no `dark:bg-*`** makes it worse, not better — the card stays white in dark mode. Check the surface before adding the variant.

Touch targets: `index.css` gives `a`/`button` with `.inline-flex` or `.flex` a `min-height: 44px` below 640px, and expands the slideshow dots' hit area via `::after`. Inline links inside prose are intentionally exempt.

## Conventions and gotchas

- **`npx tsc -b` writes files.** `tsconfig.node.json` is a composite project, so `tsc -b` emits `vite.config.js` next to `vite.config.ts`. Vite resolves `.js` first, so that stale copy silently shadows the real config — which once cost an afternoon of "why is the Tailwind plugin not running". An `outDir` under `node_modules/.tmp` now contains the output. **Prefer `npx tsc --noEmit -p tsconfig.json` for typechecking.**
- **The project is ESM** (`"type": "module"` in `package.json`), because `@tailwindcss/vite` is ESM-only and Node 20 cannot `require()` it. `vite.config.ts` therefore has no `__dirname`; paths resolve via `fileURLToPath(new URL(...))`.

- **Base path**: `vite.config.ts` sets `base: '/Site-DSE/'`. Any absolute URL you add must keep that prefix or it breaks on Pages while looking fine locally.
- **Known bug — the favicon 404s in production.** `index.html` requests `/Site-DSE/favicon.ico`, but `publicDir: 'public'` points at a root `public/` directory that does not exist; the icon actually lives at `src/public/favicon.ico` and is never copied into `build/`. Fix by moving the file to a root `public/` or importing it as a module.
- **Vite aliases**: only `@` → `./src` and `@assets` → `./src/assets`. The Figma export's version-suffixed aliases and the `src/components/ui` kit that needed them have both been deleted.
- **Assets** are ES-module imports from `src/assets/` — professor photos in `src/assets/Poze Profesori/`, CVs in `src/assets/cv/`. Filenames contain spaces and Romanian diacritics; that is load-bearing for existing imports, so don't rename them casually. Rollup flattens them into `build/assets/[name]-[hash][ext]`.
- **Animation/icons**: `motion/react` (the `motion` package) and `lucide-react`.
- `build/`, `dist/` and `node_modules/` are gitignored; the deployed bundle is produced by CI, so don't commit `build/`.
- `.hintrc` (webhint) has ignores for the compiled `oklch`/`color-mix` values — expect to extend that list if you add new modern-color CSS.
- `README.md` is untouched Figma-export boilerplate; it is not a description of this site.
