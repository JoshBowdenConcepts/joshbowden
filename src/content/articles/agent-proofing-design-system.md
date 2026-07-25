---
title: "Agent-Proofing Your Design System with Lint Rules and CI"
date: "2026-07-24"
excerpt: "AI agents don't read your docs, they obey your tooling. Here's how we governed a design system with ESLint, Stylelint, and GitHub Actions that watch the escape hatches."
featured: true
tags: ["design-systems", "ai-agents", "governance", "linting"]
readTime: "6 min read"
---

Our AI agents were shipping UI that looked great and quietly ignored our design system. Code review caught some of it. It didn't catch all of it. And the more of our frontend that agents wrote, the worse the odds got.

So we stopped relying on review and pointed the agents at a wiki. That didn't work either. Here's what did, and the one idea behind it.

## Agents don't read your docs, they obey your tooling

You can write the most beautiful design system guidelines in the world. Link them in the PR template. Pin them in Slack. An agent will nod politely and hardcode `#3B82F6` anyway.

A guideline in a wiki is a suggestion. A lint rule is a wall. If you want an agent to stay on-system, the rules have to live where the agent actually operates: the toolchain.

![Scrabble tiles on a wooden table spelling the word GUIDE](https://images.unsplash.com/photo-1740645580366-c4f1de0219dd?q=80&w=1600&auto=format&fit=crop)

_Photo by [Markus Winkler](https://unsplash.com/@markuswinkler?utm_source=josh_bowden&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=josh_bowden&utm_medium=referral)_

So we moved our design system from "documented" to "enforced."

## Encode the design system as lint rules

ESLint and Stylelint became the source of truth. A few examples:

- No raw hex values. Design tokens only.
- No arbitrary spacing or font sizes. Use the scale.
- Restricted imports, so only approved components resolve. Roll your own button and the build tells you no.

Now the constraint isn't a human remembering the rule during review. It's failing feedback the moment the code is written, whether a person or an agent wrote it.

![An electronic access card reader mounted on a concrete wall beside a closed dark door](https://images.unsplash.com/photo-1754494977436-a5c202306fe4?q=80&w=1600&auto=format&fit=crop)

_Photo by [Jakub Żerdzicki](https://unsplash.com/@jakubzerdzicki?utm_source=josh_bowden&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=josh_bowden&utm_medium=referral)_

## The hard part: we couldn't apply the rules to the whole codebase

Turn all of this on at once and you light up thousands of existing violations. Nobody's fixing that backlog before shipping the next feature, and a rule everyone ignores is worse than no rule.

So we scoped enforcement to changed code only. The lint rules run against the diff, not the whole repo. Old code with old issues is left alone. New and modified code has to meet the standard.

This was the unlock. It let us prevent future misuse on day one without holding the team hostage to a migration. The design system gets stricter with every PR instead of never.

## Govern the escape hatches

Here's the part most people miss. The moment you add a rule, you add a way to turn it off.

`eslint-disable`. `stylelint-disable`. One comment and the wall comes down, silently. Agents will reach for it, and so will humans on a deadline. If you don't watch the escape hatch, your whole system is optional.

![A metal padlock securing a dark closed gate](https://images.unsplash.com/photo-1769704653619-a0c7cc86c178?q=80&w=1600&auto=format&fit=crop)

_Photo by [Pict4life](https://unsplash.com/@pict4life?utm_source=josh_bowden&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=josh_bowden&utm_medium=referral)_

So we added a GitHub Action that scans PRs for new disable comments. When one shows up, the check flags it and tags the design system team through CODEOWNERS. You can still disable a rule. You just can't do it quietly.

## Keep a human in the loop

Enforcement without an owner turns into noise, and people get good at routing around noise. The point of tagging the design system team isn't to block, it's to keep a human in the loop when someone needs an exception.

Sometimes the rule is wrong and the token is missing. Sometimes the disable is legit. Either way it becomes a conversation instead of a silent bypass. That's what keeps the system trusted instead of resented.

![A person reviewing work on a laptop at a desk](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop)

_Photo by [John Schnobrich](https://unsplash.com/@johnishappysometimes?utm_source=josh_bowden&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=josh_bowden&utm_medium=referral)_

## The real shift: agents are a new class of user

We spent years designing guardrails for humans: review, docs, onboarding. Agents don't use any of that. They use your linters, your types, your CI. If a constraint isn't encoded there, it doesn't exist to them.

So we started treating our agents the way we'd treat a public API. Define what's allowed. Make the wrong thing hard. Watch the escape hatches. Keep a human owner for the edges.

If AI is writing part of your frontend, this is the question worth sitting with: where in your codebase can a rule be silently turned off? Because that's exactly where your design system is one confident agent away from drifting.

---

_How are you governing AI in your codebase? I'd love to hear what's working and what's slipping through. Let's connect._
