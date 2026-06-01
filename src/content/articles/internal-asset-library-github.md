---
title: "Case Study: Building an Internal Asset Library at GitHub"
date: "2024-01-15"
excerpt: "A private, governed asset system in an open-source-first organization."
featured: true
tags: ["design-systems", "github"]
readTime: "5 min read"
---

At GitHub, we needed a way to source assets that we created internally, but unlike the majority of our projects which are available open source, we wanted this library to be private. Mainly because the assets were ours to use only, and they are specifically licensed to us.

This created an interesting challenge: how do you build a private, governed asset system in an organization that's built on open source principles?

## The Challenge

First, we needed to determine where we were going to host this package. Since we had all the resources of GitHub, we decided to make a private GitHub Package, which was an option at the time.

Second, we needed a way to have these assets provide strong advice and governance about how they should be used. We didn't want people outside of the branding team to use these assets in unintended or unsupported ways.

Governance is hard in engineering because there's nothing out of the box in React components that says "don't use this thing unless you know what you're doing". If you see it in a codebase you're working in, you can quite easily pick it up and use it yourself.

## The Governance Approach

We discussed a few approaches. We considered marking everything as deprecated so that it provided intellisense that it wasn't something that should be used. We discussed providing strong linting rules that applied warnings when using these assets.

But ultimately, we ended up sticking with just strong documentation and using intellisense as JSDoc to provide notes that we hoped our users would be thoughtful enough to read when they used the custom assets.

It was a bet on developer responsibility and good documentation. Not the strictest approach, but one that balanced governance with usability.

## Working Across the Organization

Beyond the technical governance approach, we also worked closely with engineering leaders from around the organization and legal to ensure we did all we could to ensure correct usage of third-party icons. This wasn't just about our internal assets. It was about making sure that when we used licensed icons from external sources, we were using them correctly and within the bounds of their licenses.

The collaboration with legal was crucial. They helped us understand licensing requirements and ensure our documentation and governance aligned with what was actually required. Engineering leaders helped us understand how assets were being used across different teams and where we might have blind spots.

This cross-functional work ensured that our governance wasn't just technically sound, but also legally compliant and organizationally aware. You can't build good governance in a vacuum. It requires understanding the legal constraints, the organizational context, and the actual usage patterns.

## How It Worked Out

Luckily, we were still in early adoption, and these assets, as intended, were not used everywhere, so we had very little issue with misuse. Especially with the larger assets.

Icons could still be an issue, however. Users might see a specific branded icon used in their codebase and think of other ways they might use it. We did have really strong public documentation for icons that used metadata to try and prevent this, but no governance system is perfect.

The reality is that when something is available in your codebase, people will use it. The question is whether your governance approach catches misuse before it becomes a problem.

## What Worked Really Well

I think for one, just having it separate from the other icons was really useful. It was harder to find if you didn't actually intend to use it. And we could write code to track usage of components within separate from the main asset package.

Separation created a natural barrier. If you had to go looking for branded assets in a separate package, you were more likely to be intentional about using them. And the ability to track usage separately gave us visibility into how assets were being used across the organization.

## The Biggest Challenge

The biggest challenge was putting all the governance together. Figuring out what parts worked and what was overkill. Also assuming some failure points but recognizing what was a win overall.

Governance isn't a one-size-fits-all solution. What works for one type of asset might be overkill for another. What prevents misuse in one context might create friction in another. Finding the right balance required iteration and acceptance that some things would slip through.

## The Key Takeaway

Figure out what level of control you need first, then look towards what you want, and then ensure you train people to look out for your weak areas and plan yearly audits if necessary.

Start with the minimum viable governance that meets your actual needs, not your theoretical worst-case scenarios. Then build from there. Train your team to recognize when assets are being used incorrectly, and build in regular checkpoints to audit usage.

Governance isn't a set-it-and-forget-it system. It's an ongoing process that requires attention, iteration, and sometimes acceptance that perfect control isn't possible or desirable.

## Looking Back

Building an internal asset library in an open-source-first organization taught us that governance is as much about culture as it is about tooling. You can't prevent all misuse with code alone. Documentation, separation, tracking, and training all play a role.

The system we built wasn't perfect, but it worked for our needs. It gave the branding team control over proprietary assets while still making them accessible to the teams that needed them. And it did so without creating so much friction that people would work around the system entirely.

Sometimes the right level of governance is the one that works, not the one that's theoretically perfect.

---

_What's your experience with internal asset libraries or governance systems? Have you found approaches that balance control with usability? I'd love to hear your stories._
