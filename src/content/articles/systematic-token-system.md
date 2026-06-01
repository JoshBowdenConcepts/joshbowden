---
title: "Building a Token System and the Semantic vs. Explicit Naming Debate"
date: "2024-06-01"
excerpt: "Lessons from building a multi-brand token system at American Express."
featured: true
tags: ["design-systems", "tokens"]
readTime: "6 min read"
---

Token systems define the design logic for entire companies. When we were building our token system at American Express, we needed to support three different brands and two different color modes. We wanted usability to be forefront—engineers and designers should be able to quickly switch between products with different themes but still be able to effectively use and understand the design system. More importantly, they should be able to use the tokens the same way in both places, without having to learn different patterns or conventions depending on which product they're working on.

Now, creating token systems has been done many times over, and there are a lot of standards in the industry. But I wanted to share my take on how it went for us and the considerations we made.

## The Great Debate: Semantic vs. Explicit

Our biggest struggle was that we had a difference of opinion on how to write tokens. I wanted them to be purely semantic—I wanted designers to think less about the value they reflected and more about their specific use case. Another team member thought the opposite.

This was the crux of our challenges. It's a fundamental question: do you name tokens based on what they're used for (semantic), or based on what they represent (explicit)?

We ended up finding a middle ground. Some tokens were semantic, and others were explicit. It seemed like a reasonable compromise at the time.

## When Explicit Tokens Break

Shortly after releasing, we came to an issue with using the explicit tokens that I had been expecting. This was regarding spacing specifically. We had the idea that using a multiple of the base value for the token name—say `space-100` for 4px and `space-200` for 8px—would make it easier for designers.

But then a product came along that didn't follow a token system with an even scale but had to use the same values. Now we lost connection between the explicit naming depending on the product you were working on.

The explicit naming broke down. Even if `space-100` was 4px in both products, `space-200` might be 8px in one product but 6px in another. The number in the name no longer reflected a consistent scale, which defeated the purpose of explicit naming in the first place.

Ultimately, I tried to avoid this before, but that wasn't the decision we made. Now we decided to leave it, which causes some context switching and understanding when designers and engineers switch products. The explicit naming that was supposed to make things easier actually made them harder when products diverged.

## What I'd Do Differently

I would have pushed for it to be more semantic and teach people that from the beginning. It's hard because designers and engineers don't think semantically. It's a mental effort they need to make to change, so the big question remains: is it better to train them in the beginning, or when and if it breaks like it did in our case?

Is the former not worth the effort, or is the latter more confusing in the long run? Which is worse? I'll let the readers decide because I still am not sure.

There's a real tension here. Semantic tokens require more mental overhead upfront—you have to learn what `spacing-sm` means rather than just seeing `space-100` and knowing it's a small increment. But semantic tokens are more flexible and maintain their meaning across different products and contexts.

## What Worked Really Well

I think most of the decisions we made were great. We focused on semantic naming for lots of colors, so you would have your primary, secondary, button, and link colors. But you would also have your layer colors for when things were layered on top of one another and needed a visual identity.

The semantic approach for colors worked because color usage is inherently contextual. A "primary" color means something specific in the context of a design system, regardless of what the actual hex value is. That semantic meaning carries across products.

## The Documentation Challenge

Of course, you can't stop there. We focused really hard on documentation. And not only just Storybook documentation, but written documentation in multiple places. I intend to include video documentation in the future for people who prefer that.

It's important to provide docs in different formats for people that prefer them. Although it's extra work, you will end up doing it anyway if people ignore your docs altogether. When documentation is hard to find or in a format people don't like, they'll either ask you directly or make up their own patterns. Both are more work than just providing good documentation upfront.

Documentation isn't just about having it—it's about making it accessible, discoverable, and in formats that match how different people learn and work.

## The Key Takeaway

Alignment is key. Regardless of the decision you make, after you make it, everyone needs to be on board to support it. You can always decide to change it down the line, but if you don't support it together, then your users will have a bad experience.

This applies to the semantic vs. explicit debate, to documentation strategies, to naming conventions—everything. Once you make a decision, the team needs to commit to it. Inconsistency in how tokens are used or understood creates confusion and undermines the whole system.

Token systems are foundational. They affect every component, every design decision, every product. Getting alignment on how they work isn't just nice to have—it's essential.

## Looking Back

Building a token system isn't just about the technical implementation. It's about making decisions that work for your team, your products, and your constraints. Sometimes those decisions are compromises. Sometimes they're bets on what will work long-term.

The spacing token issue we ran into? That's the kind of problem that only shows up when you scale. And by then, you're living with the decision. The question is whether you'd rather train people upfront on semantic thinking, or deal with the confusion when explicit naming breaks down.

I don't have a definitive answer. But I know that alignment and documentation matter more than the specific approach you choose. Get those right, and you can adapt. Get them wrong, and you'll be fighting the system forever.

---

_What's your experience with token systems? Have you found semantic or explicit naming works better for your team? How do you handle documentation and alignment? I'd love to hear your stories._
