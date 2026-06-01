---
title: "Case Study: Migrating from MUI to a Custom Design System"
date: "2023-05-01"
excerpt: "Why we moved off Material-UI to give designers full control of brand identity."
featured: true
tags: ["design-systems", "migration"]
readTime: "8 min read"
---

We were at a point in our company where we were starting to develop a stronger brand identity. Design was a really critical part of our business, and we needed to give our brand and system designers the ability to create this identity. The problem? We were building on Material-UI (MUI), and it was holding us back.

## Why MUI Wasn't Working

Since we were building our brand identity on top of Googles brand identity we needed to overrides lots of styles and behaviors extensively to achieve what we were looking for. We fought the component API to achieve our design. Not only was this sometimes a developers nightmare but it was also not how MUI was intended. We had all these downsides and we also would inherit breaking changes and upgrade risk.

But the issues ran deeper.

### Design Tokens Are Second-Class in a Skinned System

MUI themes were not designed for multi-brand scaling, deep semantic tokens, or cross-platform parity across web, native, and marketing sites. In practice, tokens leak into component overrides. Designers and engineers don't share a single source of truth. You end up with hard-coded values "just this once."

A custom system lets you build semantic tokens first, support themes, brands, density modes, and accessibility variants cleanly, and use tokens consistently across components, docs, Figma, and tooling. This is foundational if you're serious about long-term scale.

### You're Locked Into MUI's Mental Model

MUI decisions affect you even when they don't align with your product. Slot-based customization complexity, opinionated layout, spacing, and interaction patterns, component behaviors that are hard to change without hacks.

Over time, teams stop asking "What's the right UX for our users?" and instead ask "What's the least painful way to get MUI to do this?"

A custom system encodes your UX decisions, produces simpler, purpose-built APIs, and reduces cognitive load for product teams.

### The Accessibility Trade-Off

Accessibility is always a large driver of using a system like MUI over creating your own, and it is a really valid use case. This is a big trade-off. Do you trust that your engineers can handle this task for your company over a large company like Google who creates MUI? This is something you need to know for yourself.

MUI has accessibility built in. They've tested components with screen readers, keyboard navigation, ARIA attributes, and more. When you build your own system, you're taking on that responsibility. You need to ensure proper focus management, keyboard interactions, screen reader support, and WCAG compliance.

This isn't a decision to make lightly. You need to have confidence in your team's ability to build accessible components, or you need a plan to get there. Whether that's hiring accessibility experts, training your team, or establishing clear accessibility standards and testing processes, you can't skip this.

For us, we had the expertise and commitment to make accessibility a first-class concern in our custom system. But that's not true for every organization. If accessibility isn't something your team can handle well, staying with MUI might be the right choice.

### Your Product Velocity Is Slower Than It Should Be

This sounds counterintuitive, but it's usually true. In skinned MUI systems, every new pattern equals a MUI component plus overrides plus exceptions. Edge cases accumulate rapidly. Engineers must understand both your system and MUI internals.

A custom system starts slower but scales faster. Once established, components match real product use cases. Engineers ship faster with fewer escape hatches. Design reviews focus on UX, not "is this possible in MUI?"

### You Can't Truly Support Multiple Products or Brands Cleanly

Skinned systems struggle with divergent brand expressions, product-specific interaction patterns, and long-term theming complexity. You end up with conditional styles, theme branching, and "don't use this component in Product X" rules.

A custom system enables shared foundations with product-specific layers, supports controlled divergence, and makes ownership boundaries clear. This matters a lot as orgs scale beyond one flagship app.

### The Migration Cost Only Goes Up Over Time

This is the uncomfortable truth. The deeper MUI is embedded, the harder it is to unwind. Teams build features assuming MUI behaviors. Design debt compounds.

Moving now limits long-term risk, allows gradual opt-in adoption, and lets you keep MUI as a dependency temporarily, not forever.

## The Tipping Point

It became quite apparent when we were trying to achieve the new design direction with the components that MUI gave us. We were overriding styles, slots, and behaviors extensively, and fighting the component API to achieve our design. These things really hindered our development and made what is inherently a strong system when it isn't changed into a brittle system to fit our design goals.

The breaking point came when we wanted to change the design of the radio and checkbox components. MUI has really opinionated ways of styling these since you are in essence creating a shadow component that is controlled by a native HTML input. Unfortunately, there was a lot of overriding important flagged CSS with ugly nested class declarations. Both of which I would preach to avoid in regular development and would even protect against via linting rules. But we had to when this was the system we were working in.

That's when we knew it was time for a change.

## The Migration Approach

Design systems are built on foundations, so we naturally started from the ground up. First, we created the "design system" as in the design rules and concepts that exist in and out of code. Then we created our ideal token structure for this fresh system. Next, we had to map the old system to the new tokens and remove the bloat. Then we built the new token system in code and replaced the old with the new.

Then we started building out components one by one, replacing the MUI ones with the ones we had built. We started with the most used components and went down from there to have the largest effect and to prevent more rework. Because at the same time people are still developing—if we leave button for the end, there could be 50 new buttons by the time we finish, and that makes it that much harder.

## The Biggest Challenge

Replacing components that we shifted the API dramatically for was the hardest part. We were really intentional when creating the new components to ensure feature parity, but we didn't always agree with how it was achieved from MUI. So when these cases arose, we needed to do some product development to ensure they slotted in as expected.

We worked with product teams on this. We did most of the work since we saw that the onus of this particular project was on us, but we made sure that the changes worked for the teams that it affected.

## What Worked Really Well

I think keeping the new components in feature parity with the old made it smoother. Our plan for features we eventually wanted to remove was to mark them as deprecated even in the new system, which we could thankfully do now that we controlled the code. Another reason that building your own system can be ideal.

## What I'd Do Differently

It is really hard to replace all instances of a design system. I might have made more components closer to their predecessors to start and then align them over time. It would have been slightly less bumpy.

Sometimes gradual change is better than big API shifts all at once, even when you're building something new. The migration itself is a product development effort, and treating it that way might have made the transition smoother.

## The Impact

We saw better brand alignment, less unintended use cases for components, and overall less variation of visual patterns. When developing brand identity and improving user experience, consistency is key. The custom system gave us that in a way that MUI never could.

## The Key Takeaway

I would say that when you know it is time, it has probably been time for quite a while, so get it started. I would also say that communication is really important. Not just the why of it all, but how you are going to do it so that teams can prepare. These changes affect everything in the UI, so you want the whole org to be on board or at least in the know.

Migrating from MUI to a custom system isn't just a technical decision, it's an organizational one. It requires buy-in, planning, and patience. But when brand identity and design flexibility matter, the investment is worth it.

The question isn't whether you can make MUI work. It's whether you should. When you find yourself fighting the framework more than building your product, it's probably time to build your own.

---

_What's your experience with migrating from a framework-based design system to a custom one? Have you faced similar challenges with MUI or other component libraries? I'd love to hear your stories._
