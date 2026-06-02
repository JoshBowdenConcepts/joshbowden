# Josh Bowden — Portfolio

Personal portfolio built with Next.js and deployed to GitHub Pages.

**Live site:** [joshbowdenconcepts.github.io/joshbowden](https://joshbowdenconcepts.github.io/joshbowden/)

Styled from the [powerpoints](https://github.com/JoshBowdenConcepts/powerpoints) presentation design system, with a WCAG 2.1 AA accessibility baseline.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build:pages` | Build static export for GitHub Pages |
| `npm run preview:pages` | Preview the `out/` folder locally |
| `npm run build` | Build static export without the `/joshbowden` base path |
| `npm run lint` | Run ESLint |
| `npm run check-contrast` | Verify design token contrast ratios |

The site uses `output: "export"` — there is no Node server in production. Use `npm run dev` while developing and `npm run preview:pages` to test the production build.

## Deployment

Every push to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the static site and publishes it to GitHub Pages.

### One-time setup

1. Open **Settings → Pages** on the repo
2. Set **Build and deployment → Source** to **GitHub Actions**

### Preview production locally

```bash
npm run build:pages
npm run preview:pages
```

Open the URL printed by `serve` (typically [http://localhost:3000/joshbowden/](http://localhost:3000/joshbowden/)).

### Custom domain

To use a root domain (e.g. `joshbowdenconcepts.com`) instead of the `github.io/joshbowden` subpath:

1. Add the domain under **Settings → Pages**
2. Remove `GITHUB_PAGES: "true"` from the deploy workflow (or run `npm run build` locally)
3. Redeploy so assets load from `/` instead of `/joshbowden/`

## Adding content

### Articles

Create a markdown file in `src/content/articles/`:

```yaml
---
title: "Your article title"
date: "2025-06-01"
excerpt: "Short summary for the homepage card"
featured: true
tags: ["design-systems"]
readTime: "5 min read"
---

Your article body in markdown…
```

Available at `/articles/your-slug` (filename without `.md`).

### Case studies

Work entries link to `/work/{company-id}/{slug}` (e.g. `/work/github/internal-asset-library-github`). Slugs map to article markdown via `src/lib/caseStudies.ts` and `src/data/portfolio.ts`.

### Profile data

Edit `src/data/portfolio.ts` for work history, skills, education, and contact info.

## Project structure

- `src/app/` — Next.js App Router pages
- `src/components/` — React components
- `src/content/articles/` — Markdown articles
- `src/data/portfolio.ts` — Career and profile data
- `src/lib/` — Article and case study helpers
- `src/styles/` — CSS modules and design tokens
- `scripts/check-contrast.mjs` — WCAG contrast validation
- `.github/workflows/deploy.yml` — GitHub Pages CI/CD
