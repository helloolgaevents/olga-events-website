# TASK FOR SAM — Style the "Venues we love" marquee section
*Palette = offer.html (unchanged). Don't change content (venue names) or other sections. Homepage running line of venue names currently has no background, a stray border, and it overlaps the photo below. Make it a clean, premium, defined section.*

## Fixes
1. **Give the section a background band.** Full-width band behind the marquee, warm light surface `#faf8f5` (or beige `#efe9dd` if it looks more premium). The band defines the section so it no longer floats on the page background.
2. **Frame it subtly.** Thin top and bottom hairline `1px #e3ddd0`. Generous vertical padding (≈56–64px desktop, ≈36px mobile).
3. **Centered gold kicker** above the line: "VENUES WE LOVE" — uppercase, letter-spacing ~3px, gold `#a8854e`, small (12px). (Keep if already there, just ensure it sits on the band.)
4. **Venue names**: Cormorant Garamond, dark `#111110`, comfortable size, gold `·` separators between names. Smooth continuous scroll.
5. **Soft fade edges**: apply a left/right gradient mask (CSS mask-image / linear-gradient) so names fade in and out at the edges instead of being hard-cut by a visible border.
6. **🔴 Remove the overlap.** Remove the stray border/line that currently overlaps the photo below, and add clear spacing/margin so this marquee section does NOT touch or collide with the image/section beneath it. They must be cleanly separated.

Keep it calm and premium, consistent with offer.html. 

🔴 Self-check desktop + mobile: band visible, kicker on the band, names scroll smoothly and fade at edges, NO overlap with the section below, nothing else shifted. Then: git add -A && git commit -m "Style Venues marquee: background band, hairlines, fade edges, fix overlap" && git push. Do NOT touch the olga.events domain. Report what you deployed and that you checked.
