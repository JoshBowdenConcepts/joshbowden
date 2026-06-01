---
title: "3 Themes, Dozens of Combinations, Zero Regressions: Why We Built Custom Visual Testing Instead of Buying SaaS"
date: "2025-02-01"
excerpt: "How we built CI-integrated visual regression testing for a multi-theme design system at American Express."
featured: true
tags: ["design-systems", "testing", "accessibility"]
readTime: "7–9 min read"
---

When you're building a design system that supports multiple themes and color modes, how do you ensure a single code change doesn't break something visually across dozens of combinations? That was the challenge we faced at American Express as we built a new design system for the Global Dining Team from the ground up.

## The Problem

We were starting fresh with a multi-theme, multi-color mode design system. We're supporting three themes with the ability to add more if needed, and every component needed to work across all these visual configurations. We needed a way to catch unintended visual changes quickly. Our engineers and designers needed confidence when making changes, especially when those changes could affect the UI across multiple entire products.

The challenge was clear: manually testing visual changes across many theme and color mode combinations is impossible. With three themes (and potentially more), the number of combinations grows quickly. We needed automation, and we needed it to be part of our workflow from day one. Starting a new design system meant we had the opportunity to get testing infrastructure right from the beginning, rather than retrofitting it later.

## The Decision Point

We already had a third-party SaaS visual regression service in place, but it didn't meet our needs. Here's the critical issue: the platform didn't hook into our CI pipeline. Developers could still merge pull requests without checking whether design changes were correct or not. Without CI integration, it was just a nice visual tool, but it lacked the safety rails we desperately needed.

Why do safety rails matter so much? Our design system affects the UI for multiple entire products. Visual regressions can't slip through. A single unintended change could impact thousands of users across different applications.

We didn't want to go out and buy another tool when we were already paying for one that wasn't working. So we explored our options: could we build something custom that would actually meet our requirements?

The "aha" moment came when we realized we could leverage Jest and jest-image-snapshot, an American Express package we already had in our toolkit. We could build exactly what we needed, using tools we already understood.

## Why Custom Won

The decision to build custom wasn't just about cost, though using existing tooling was certainly a factor. The real differentiator was CI integration. Unlike the SaaS platform, we could build CI checks that actually block PRs with unreviewed visual changes. This was the missing piece from the commercial solution.

But CI integration wasn't the only advantage. Our custom solution provided real-time visibility of changes, which was critical for our designer review workflow. It also had better support for our multi-theme and color mode requirements. We had full control to build exactly what we needed, including the safety rails critical for a system affecting multiple products.

The custom approach prevented merging PRs before designer review, something that was built directly into our CI pipeline. This wasn't just a nice-to-have; it was essential for maintaining quality across products that depend on our design system.

## The Build

We built our solution on Jest and jest-image-snapshot, integrating seamlessly with Storybook. The tool automatically tests all theme and color mode combinations across our three themes (with the flexibility to add more as needed), but it's smart enough to skip combinations when they're not needed for a particular component.

Engineers can see visual changes locally when they run the tests, which gives them immediate feedback during development. But if they forget to build the snapshots locally, the CI will automatically generate them and provide them in the PR. This prevents any mistakes from slipping through and ensures that visual changes are always captured and reviewed.

The CI integration blocks PRs with unreviewed visual changes, ensuring that nothing slips through without proper review. When a visual change is detected, developers see it immediately in their PR, and designers can review the snapshots and rendered Storybook without ever looking at code.

## The Unexpected Challenge

Creating image snapshots was actually the straightforward part. The real challenge? Making sure developers actually see and review those snapshots. The CI setup complexity was something I didn't fully anticipate. We needed it to be restrictive enough to catch issues, but not so annoying that people would find ways around it.

This taught me a crucial lesson: technical correctness isn't enough. The tool must be visible and easy to use, or it won't be used at all. If developers can't easily see what changed and why their PR is blocked, they'll either ignore it or find workarounds. We needed to make the visual changes impossible to miss, but also easy to understand and act upon.

## How We Rolled It Out

We started small. I built the tool and tested it on a single component, then we reviewed the approach as a team. Everyone loved it. From there, we expanded to all our existing components, and now every new component gets visual tests by default.

The rollout was smooth because the tool solved a real problem the team was feeling. Engineers could focus on building components, knowing that visual testing would happen automatically. Designers could review changes without diving into code. The workflow improvement was immediate and obvious.

## The Impact

The team really loved the tool. But more importantly, it transformed how we work. Designers now review snapshots and Storybook instead of code, which is faster and more intuitive. We can make large-scale changes, like design token updates, with confidence, knowing that testing across many components with many themes and color modes happens automatically.

Engineers can focus on what they do best: building components. Visual testing is handled automatically, so there's no additional cognitive load. Compared to other design systems I've worked on without these tools, we've seen far fewer complaints about unexpected visual changes.

The impact goes beyond just catching bugs. It's about velocity and confidence. When you can make large changes to design tokens and immediately see how they affect every component across every theme and color mode, you can move faster and with more certainty.

## What I'd Do Differently

If I were to rebuild this today, I'd still take mostly the same approach, but I'd focus more on performance optimizations from the start. The CI integration was harder than expected, and I learned the hard way that making tools visible and usable is just as important as making them technically correct.

The good news? We can still optimize performance now. As our component library grows, we're monitoring build times and looking for opportunities to make the tests run faster. But starting with performance in mind would have been smarter.

## Key Takeaways

If you're building a design system or working on visual testing infrastructure, here's what I learned:

1. **Start with testing infrastructure early** - Establishing proper testing at the beginning of a design system prevents headaches later. Don't wait until you have hundreds of components to retrofit testing.

2. **Make CI integration visible** - Visual changes must be easy to see and review, or they'll be ignored. If developers can't quickly understand what changed and why their PR is blocked, your tool won't be effective.

3. **Custom can be better than SaaS** - When existing tools don't meet your specific needs, building custom can provide better fit and cost savings. Don't assume commercial solutions will solve your unique problems.

4. **User experience matters for dev tools too** - Technical correctness isn't enough. Tools must be easy to use, visible, and integrated into workflows naturally. If people have to go out of their way to use your tool, they won't.

## Looking Forward

We're continuing to optimize the tool as our component library grows. Performance improvements are on the roadmap, and we're monitoring how build times scale. If the company decides to add more color modes, we're ready to support that too.

The tool has become a foundational part of how we build components. Every new component gets visual tests by default, and the team has embraced it completely. That's the real measure of success: when a tool becomes so integrated into your workflow that you can't imagine working without it.

---

_What's your experience with visual regression testing? Have you built custom tools when commercial solutions didn't fit, or found creative ways to integrate testing into your CI pipeline? I'd love to hear your stories._
