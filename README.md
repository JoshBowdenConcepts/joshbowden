# Josh Bowden — Portfolio

Personal portfolio site built with Next.js, styled from the [powerpoints](https://github.com/JoshBowdenConcepts/powerpoints) presentation design system, with WCAG 2.1 AA accessibility baseline.

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
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run check-contrast` | Verify design token contrast ratios |

## Adding articles

Create a markdown file in `src/content/articles/` with frontmatter:

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

The article is available at `/articles/your-slug` (filename without `.md`).

## Project structure

- `src/app/` — Next.js App Router pages
- `src/components/` — React components
- `src/content/articles/` — Markdown articles
- `src/data/portfolio.ts` — Career and profile data
- `src/styles/` — CSS modules and design tokens
- `scripts/check-contrast.mjs` — WCAG contrast validation

## Deploy to Vercel

1. Push this repo to GitHub (`JoshBowdenConcepts/joshbowden`)
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Use default Next.js settings (build: `npm run build`, output: default)
4. Optionally connect custom domain `joshbowdenconcepts.com`

## GitHub setup

If `gh` is not authenticated:

```bash
gh auth login
gh repo create JoshBowdenConcepts/joshbowden --public --source=. --remote=origin --push
```

Or create the repo on GitHub and:

```bash
git remote add origin https://github.com/JoshBowdenConcepts/joshbowden.git
git push -u origin main
```
