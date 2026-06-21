# TASK FOR SAM — Venues band: make it slimmer + add spacing below
*Follow-up on the "Venues we love" marquee. Palette = offer.html. Don't change content or other sections. Two small fixes:*

1. **Make the venues band slimmer.** Reduce the vertical padding of the "Venues we love" band so it's a thinner horizontal strip (e.g. ~36–40px top/bottom instead of the current larger padding). Keep the gold kicker + scrolling names, just less tall.

2. **Separate it from the photo/section below.** Right now the image block directly under the band touches/overlaps the band's bottom edge. Push that next block DOWN and add clear spacing so there is a visible gap between the venues band and the section beneath it (e.g. margin/padding ~48–56px between them). The band and the photo must NOT touch.

🔴 Self-check desktop + mobile: band is slimmer, gold kicker + names still scroll, clear gap between the band and the block below, nothing overlapping, nothing else shifted. Then: git add -A && git commit -m "Venues band: slimmer height + spacing from section below" && git push. Do NOT touch the olga.events domain. Report what you deployed and that you checked.
