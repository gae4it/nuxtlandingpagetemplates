# Nuxt Landing Page Templates (Nuxt 4)

This repository is a **Nuxt 4** project designed as a **multi-template landing site** with **Docs, Blog, Changelog, Pricing** and a set of **template pages** powered by **Nuxt Content v3**.

## What this project contains

- **Nuxt 4 + Nitro (Vercel preset)**: the app is configured for deployment on **Vercel** via `nitro.preset = 'vercel'`.
- **Content-driven pages** (via `@nuxt/content` v3):
  - **Home**: `content/0.index.yml` → `app/pages/index.vue`
  - **Docs**: `content/1.docs/**` → `app/pages/docs/[...slug].vue` (with sidebar navigation)
  - **Pricing**: `content/2.pricing.yml` → `app/pages/pricing.vue`
  - **Blog**:
    - Blog landing: `content/3.blog.yml` → `app/pages/blog/index.vue`
    - Posts: `content/3.blog/**` → `app/pages/blog/[slug].vue`
  - **Changelog**:
    - Changelog landing: `content/4.changelog.yml` → `app/pages/changelog/index.vue`
    - Versions: `content/4.changelog/**`
  - **Templates**: `content/templates/*.{yml,md}` → `app/pages/templates/*.vue`
- **UI kit**: `@nuxt/ui` provides most layout/components (header, footer, page sections, docs layout).
- **Images**: `@nuxt/image` is available for optimized images.
- **OG images**: `nuxt-og-image` is used to generate/define OpenGraph images for social previews.

## Repository structure (high level)

- **`app/`**: Nuxt App Directory (pages, layouts, components, composables, styles).
- **`content/`**: Nuxt Content sources (YAML/Markdown) used to render pages.
- **`content.config.ts`**: Content collections and schemas (also includes `.editor(...)` hints for editor tooling).
- **`nuxt.config.ts`**: Nuxt modules + Vercel Nitro preset + route rules.
- **`vercel.json`**: Vercel build command (currently `npm run build`).

## Runtime model (SSR / hybrid)

The project is set up as a **server-rendered (SSR) Nuxt app** suitable for Vercel. Some parts are client-only by design (for example, the docs search UI is loaded inside `<ClientOnly>`).

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
