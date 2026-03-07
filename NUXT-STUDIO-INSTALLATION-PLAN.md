# Nuxt Studio Installation Plan (Vercel)

This document describes a safe, production-friendly approach to adding **Nuxt Studio** to this repository (Nuxt 4 + Nuxt Content v3) while keeping **Production** clean and stable on **Vercel**.

## Goals

- Enable a smooth **content editing workflow** for `content/` (Docs/Blog/Changelog/Templates/Home/Pricing).
- Use **Preview Deployments** (or a dedicated staging environment) for editing and review.
- Ensure **Production deployments remain secure, fast, and unaffected** by editor-only features.

## Current project facts (baseline)

- Nuxt **4.x** with `@nuxt/content` **v3** and collections defined in `content.config.ts`.
- Deploy target: **Vercel** (`nitro.preset = 'vercel'`).
- Pages are **content-driven** (`content/` → `app/pages/**`) and already include schema metadata such as `.editor(...)` in `content.config.ts`.

## Recommended environment model

- **Production**: `main` branch → Vercel **Production Deployment**
  - No editor UI/features.
  - Strict caching rules and security headers.
- **Preview**: PR branches → Vercel **Preview Deployments**
  - Studio enabled (or enabled via an environment flag).
  - Used by editors to preview and validate changes before merging.

## Step-by-step plan

### 0) Preconditions (do this first)

- Ensure Vercel project is connected to the repo.
- Decide whether content changes will be:
  - committed to the repo (Git workflow), or
  - managed externally (if you later add a remote content source).

### 1) Add Nuxt Studio dependency (development-focused)

- **Status**: `nuxt-studio` is already installed (via `npx nuxt module add nuxt-studio`) and added to `modules` in `nuxt.config.ts`.
- Next steps:
  - Configure Nuxt Studio according to the official Nuxt Studio docs (Git provider + OAuth).
  - Keep any **production publishing** behavior clearly separated via environment variables (OAuth credentials only on environments where you want to allow publishing).

**Rule of thumb**: anything related to “editing” must be enabled only when an explicit flag is set.

### 2) Add environment flags (Preview vs Production)

Create an environment toggle that clearly separates runtime behavior:

- `NUXT_STUDIO_ENABLED=true` in **Preview** (and optionally in local dev)
- `NUXT_STUDIO_ENABLED=false` (or unset) in **Production**

On Vercel, set environment variables per environment:

- **Preview Environment Variables**: enable Studio
- **Production Environment Variables**: disable Studio

### 3) Keep Production runtime clean

Do a small hardening pass so production is predictable:

- Disable dev-only tooling in prod:
  - `devtools.enabled` is now **tied to** `NODE_ENV === 'development'`.
  - `@nuxt/eslint` is only loaded when `NODE_ENV === 'development'`.
- Confirm the deployment runtime is **Node** (not Edge) if any native dependencies are required.

### 4) Define caching and security expectations

On Vercel, you’ll usually get the best experience if you make caching explicit:

- Add `routeRules` for:
  - marketing pages (aggressive SWR),
  - docs/blog/changelog (moderate SWR),
  - any authenticated/editor-only routes (no cache).

Also add basic security headers (especially if any preview/edit UI exists).

### 5) Content workflow (editor → preview → merge)

Recommended content flow:

- Editor works on **Preview Deployment** (Studio enabled).
- Reviewer validates:
  - broken links,
  - SEO metadata present,
  - images render,
  - docs navigation/search works.
- Merge to `main` → Production deploy (Studio disabled).

### 6) Verification checklist (before enabling Studio broadly)

Use this checklist after Studio is installed:

- Preview deployment:
  - Studio loads correctly
  - Editing works for:
    - `content/0.index.yml`
    - `content/1.docs/**`
    - `content/3.blog/**`
    - `content/templates/*`
  - No build errors on Vercel preview
- Production deployment:
  - No editor UI present
  - No extra routes exposed
  - Performance unchanged (TTFB/LCP)
  - No caching regressions

### 7) UX alignment: Template switcher & auth pages

While enabling Studio and preview workflows, keep the front-end UX consistent:

- **Template switcher (`TemplateSwitcher.vue`)**
  - Keep it as the **primary control to switch between templates**.
  - Align its internal logic with the actual routes:
    - Ensure it correctly detects the **current template** based on the active route (e.g. `/templates/saas`, `/templates/agency`, `/templates/portfolio`), not on non-existent route params.
    - Ensure the list of templates (`saas`, `agency`, `portfolio`, etc.) stays in sync with:
      - `content/templates/*`
      - `app/pages/templates/*.vue`
  - Make the switcher visible on the routes where template switching matters (home + template pages), without removing the component.

- **Login / signup pages**
  - Decide whether these pages are:
    - **Marketing/demo only** (just UI stubs), or
    - Backed by a **real authentication flow** (Nuxt Auth / OAuth provider / custom backend).
  - Reflect that decision in copy and navigation:
    - If they are stubs, make it clear in the UI or reduce their prominence.
    - If they are real, integrate them with an auth provider and verify the behavior on Preview and Production.

## Risks & mitigations

- **Accidentally exposing editor tooling in prod**
  - Mitigation: require `NUXT_STUDIO_ENABLED=true` and default to disabled.
- **Build/runtime differences between Preview and Production**
  - Mitigation: keep the same Node version; only change env flags.
- **Native dependencies**
  - If the project relies on native modules, ensure Vercel runtime is compatible (Node runtime, not Edge).

## Deliverables (what “done” looks like)

- Nuxt Studio installed and usable on **Preview deployments**.
- Production deployments remain unaffected (Studio disabled).
- A documented workflow for editors and reviewers.

