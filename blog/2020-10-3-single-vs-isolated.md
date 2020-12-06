---
slug: single-vs-isolated
title: Single vs Isolated
author: Christian Ryan Macarse
author_title: Full Stack Developer / DevOps
author_url: https://github.com/crrmacarse
author_image_url: /img/team-christian.svg
tags: [Single, Isolated, Comaprison]
---

## Single

- DX experience due to ease of access
- Needs better work machine due to high processor use (i.e. slowdowns, lags, which may result in doubling of work due to unexpected wait/ delayed changes to code)
- This is where redux will shine
- “I think you should avoid a separate app. Duplicating all the model validation/domain logic that you’ve already built is a painful, error-prone task.”
- Current project is set up to scale (we handle it in the “container” folder and we strict implement this folder structuring:

## Isolated setup

- Easy to add independent functions in cases where a client request a simple feature change (i.e changed name of a label, a simple modal, alerts maybe)
- In mobile perspective, it’s good, but it will result in higher app size.
- Isolated if bugs slipped through. (could be countered with preventive measures such as pipelines and better deployment model)
- "I hire contractors frequently, and giving them access to ALL of the source code doesn’t make sense, and isn’t secure. Having multiple repositories makes it easy to give access to subsets of repositories on a “need to code” basis."
- This is where bit will shine

Edit the page if you’ve anything to add
