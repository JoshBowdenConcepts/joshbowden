---
title: "Building Components That Work Across 3 Themes and Multiple Color Modes"
date: "2024-11-01"
excerpt: "What we learned building one component library for three product themes."
featured: true
tags: ["design-systems", "react"]
readTime: "6 min read"
---

When you're building a design system that needs to serve three separate products, each with their own visual identity, how do you avoid duplicating components just because the styles are different? That was the challenge we faced at American Express as we built a design system for the Global Dining Team.

## The Problem

We had three separate themes for three separate products, but they all shared the same front-end framework: React and CSS. The challenge was clear: how do we support all these separate needs without creating three separate component libraries?

We realized pretty quickly that, other than design, the functional needs were largely the same. Components that functioned as expected. Components that were accessible. Components that let developers build applications quickly. When you get into programming, you learn about DRY programming—Don't Repeat Yourself. In the absolute nature of that idea, we thought: why copy components into each of these systems just because the styles are slightly different? Instead, let's create one set of functional components that could be designed to a user's needs.

## The Token System

This is where it got complicated. We wanted tokens that were based in CSS but were also type-safe. We wanted them to respect color modes as well as responsivity, like you might see with text on desktop versus mobile.

We used a TypeScript object to store and create the rules around tokens, which generated a CSS token file. Then we backwards-referenced those tokens from a TypeScript type so that JavaScript would return the exactly correct component token in type. Basically, we achieved a relatively type-safe approach to CSS tokens with some logic and structure.

The result? Two different consumption patterns. Our CSS-in-JS team gets full type safety, which makes monitoring and maintenance easier. The CSS team references tokens directly but doesn't have that type safety, which requires more work on our end when tokens change. It's not perfect, but it works for both teams.

## Making Components Theme-Aware

The key insight was token naming. Token names are the same across all themes. This makes it easy to have theme awareness. The downside is that some tokens that one theme doesn't need might still need to be loaded, but that's a really small inefficiency compared to the value of having components that become theme-aware just by where they're loaded.

The main token CSS is loaded into each application separately and in different ways that our team manages. Components automatically adapt based on which CSS file is loaded. No special logic needed—just consistent naming.

## Color Mode Support

All teams receive color mode support at once. This is specific to color tokens because other tokens don't need awareness of color modes. Specifically, we assign a light and dark color for each color token and include them in the generated CSS token file so they're easy to switch between.

We use data-attributes for the switching mechanism. This is nice because if you want a reversed section on the page, you can write some basic logic to do so. That way you could have a reversed dark mode section on a light page, and the reverse when the themes change. It gives you granular control where you need it.

## The Biggest Challenge

The biggest challenge was the algorithm that turned an object we could understand into consumable tokens that components could understand. It ended up being more straightforward once we looked at the problem for a while, but when you don't know where to start, it's a bit overwhelming.

The solution was iteration. Whenever I write an algorithm, I take the smallest part to solve first and then add in complexity. That's exactly what I did here. When you have three layers of logic at the end, things start to get tricky, but code comments always make life better when writing algorithms. Starting small and building up complexity layer by layer made it manageable.

## What Worked Really Well

The way tokens are created for different contexts like feature flags and breakpoints was the biggest win. Now we can easily apply these to small sections or larger features without much of any issue, using data-attributes as the switch. Rebranding has never been easier to toggle on and off.

This flexibility means we can experiment with new themes or variations without rebuilding entire components. A feature flag can switch token sets, and suddenly you're looking at a completely different visual treatment of the same functional component.

## What I'd Do Differently

Ideally, I would have started fresh. We actually took two already somewhat built systems and made this one look and act almost like a mix of both. I think that was a mistake. We should have started fresh and updated features as we went.

Old code isn't necessarily good code—it just already exists, which can feel like a win in the moment. But merging two systems created complexity and technical debt that we're still dealing with. Starting with a clean slate would have been better, even if it meant rebuilding some features.

## The Key Takeaway

Figure out tokens first. That is so important. Your system is still a system before it's in code. You need to have really clear design principles and structural ideas. And you need buy-in. Make sure both design and engineering are on board, otherwise things quickly go sideways.

The token system is the foundation. Get that right, and everything else becomes easier. Get it wrong, and you'll be fighting it for the life of the system. We learned this the hard way, but it's a lesson that applies to any design system work.

## Looking Back

Building a multi-theme, multi-color mode system isn't just about the code. It's about the architecture, the naming conventions, the consumption patterns, and most importantly, the collaboration between design and engineering. When those pieces align, you get components that work seamlessly across different visual treatments without duplicating functionality.

The system we built isn't perfect, but it serves three products with three themes and multiple color modes, all from one set of components. That's the power of getting the foundation right.

---

_What's your experience building multi-theme design systems? Have you found patterns that work well, or learned lessons the hard way? I'd love to hear your stories._

