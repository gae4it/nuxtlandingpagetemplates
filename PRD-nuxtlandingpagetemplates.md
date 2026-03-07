# 🚀 PRD: Nuxt Landing Page Templates (Study Project)

## 1. Project Overview

**NuxtLandingPageTemplates** is a professional-grade study project built with **Nuxt 4**.
The goal is to create a **Design System + Local CMS + Page Builder** that allows generating 12 distinct landing pages from shared components.

### 🎯 Key Objectives:

- **Educational Purpose**: Showcase clean architecture and modern Nuxt patterns.
- **Language**: Strictly **English** (all code, comments, and public-facing content).
- **Speed to Market**: Use structured TypeScript data instead of a database for maximum performance and simplicity.

---

## 2. Technical Stack (Simplified)

- **Framework**: Nuxt 4 (latest)
- **Styling**: Tailwind CSS
- **UI Library**: Nuxt UI 4.5
- **Media**: Nuxt Image (for optimized placeholders)
- **Type Safety**: Strict TypeScript (no external validation libraries like Zod for simplicity)

---

## 3. Core Principles

### 3.1 Architecture: Pure Props

- The project uses **explicit Prop Drilling** for clarity.
- The `theme` object is passed from the `Renderer` to components and sub-components.
- _Rationale_: Makes it easier to trace data flow for junior developers.

### 3.2 Content Strategy (AI-Driven)

- **Text**: All copy (titles, descriptions, testimonials) will be generated in professional English.
- **Images**: High-quality placeholders using `NuxtImg`.
  - _Sources_: Unsplash, Picsum, or AI-generated via `generate_image`.
- **Storage**: All content lives in `/cms/[template]/index.ts` exported as TypeScript constants.

---

## 4. Professional Features (What makes it "Final")

To ensure this looks like a production-ready project:

### 4.1 SEO & Meta Systems

- Every template has a corresponding `seo.ts` file.
- Dynamic management of `title`, `description`, `og:image`, and `favicon`.
- Automated JSON-LD for "SoftwareApplication" or "Services" schemas.

### 4.2 Accessibility (A11y)

- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`).
- ARIA labels for interactive elements.
- Proper color contrast (enforced by the Theme System).

### 4.3 Performance

- **Nuxt Image**: Lazy loading and responsive sizes by default.
- **Vite Bundle Optimization**: Components are split to minimize initial load.

---

## 5. Directory Structure (Nuxt 4)

```text
/cms/[template-name]/
  ├── index.ts      <-- Full page structure & content
  └── seo.ts        <-- SEO & Meta tags
/components/sections/
  ├── Hero.vue
  ├── Features.vue
  └── ...
/types/
  ├── page.ts
  └── sections.ts
/pages/
  ├── index.vue              <-- Gallery of templates
  └── templates/[name].vue  <-- The Dynamic Builder
```

---

## 6. Study Project Disclaimers

### 6.1 Policy Pages (Privacy & Terms)

The Privacy Policy and Terms of Service pages will include a clear banner:

> **Note**: This is a study project for portfolio purposes. No real data is collected, and no services are actually being sold.

---

## 7. Development Guidelines

- **No Placeholders**: Never use "Lorem Ipsum". Use context-aware English text.
- **Single Palette**: Each theme uses one primary color to maintain visual punch.
- **Nuxt 4 Conventions**: Use the `app/` directory if configured, or the modern root-level folders.

---

## 🔥 Next Step: Content Generation

When we start building the templates, I (the AI) will generate English copy for:

1. **SaaS** (Productivity Tool)
2. **Agency** (Creative Marketing)
3. **Portfolio** (Freelance Developer)
4. ...and 9 others.

All texts will be placed directly into the TypeScript CMS files.
