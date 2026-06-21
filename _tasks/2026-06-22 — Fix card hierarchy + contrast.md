# TASK FOR SAM — Fix step/feature card sections
*Palette = offer.html (unchanged). Do NOT change layout/text/SEO. Two fixes, apply to ALL similar card sections sitewide (start with "How it works" 01–04 on the homepage).*

## 1) Text hierarchy (currently inverted — description looks bigger than the title)
Inside each card:
- Number (01, 02…): gold `#a8854e`, small accent on top (keep).
- Title (Consultation / Choose your path / Design / Your day): THIS IS THE MAIN element — Cormorant Garamond, weight 500, LARGE **26–28px**, colour `#111110`. Clearly bigger than the description.
- Description (Vision, culture, guests, budget. etc.): secondary — Inter, **15px, weight 400**, colour `#5b574e`. NOT bold, NOT bigger than the title.

## 2) Cards must stand out from the background (they currently blend in)
- Card background: white `#ffffff` (page stays ivory `#f4f1ea`).
- Border 1px `#e3ddd0`, radius 16px, shadow `box-shadow: 0 10px 28px rgba(80,64,40,.10)`, padding 28–32px.
- Cards should read as raised blocks, not flat against the background.

🔴 Self-check desktop + mobile across every such card section. Then: git add -A && git commit -m "Fix card sections: title-dominant hierarchy + cards stand out" && git push. Do NOT touch the olga.events domain. Report what you deployed and that you checked.
