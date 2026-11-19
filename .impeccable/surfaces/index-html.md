---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: portfolio home (index.html)

Scope: the single portfolio page (`index.html` + `js/` + `styles.css`). Mode: Persuade (visitor decides whether to reach out). `hien/` is out of scope.

Audience and job: hiring managers and recruiters skimming in under a minute. Action: email Tinh (link shown once an address is set), download the resume, or open GitHub. Proof: quantified Cisco bullets, named projects, track-day lap times. Constraints: static GitHub Pages, no build step, user-pinned layout reference kav3.com, keep the charcoal + sea-green identity.

## Direction contract

THESIS: A one-page split layout. The left column stays put (who Tinh is, what Tinh is looking for, how to get in touch) while the work scrolls on the right. Refuses the old tabbed sidebar app that hid Experience behind a click, kav3's borrowed navy/mint template palette, numbered section headings, and greeting kickers.

OWN-WORLD: green-tinted charcoal ground (#161a18) with a raised surface (#1f2421); bone text (#e9efe9); sage body text (#a3b1a8); sea-green accent #61bc84, with #2E8B57 for fills and selection. Schibsted Grotesk for headings and prose, JetBrains Mono only for data: dates, tags, lap times. Hairline rules, no cards-as-structure, a timing-sheet table for lap times.

STORY: Visitors learn that Tinh builds platforms for other engineers (LLM agents, RAG, GPU infrastructure) and is open to a next role. The specifics make that credible, and they email Tinh or grab the resume.

FIRST VIEWPORT: Desktop has two columns at max 1180px. The left column is sticky at full viewport height: the name in display type at about 3.5rem, the role line, a two-sentence pitch, an availability line in the accent color, Email/Resume actions, then the scroll-spy nav (a line plus a label, and the line extends on the active item), with social icons at the bottom. The right column opens directly on the About prose. On mobile the intro stacks first, actions stay visible, and section headings stick as you scroll.

FORM: pinned by the user (kav3.com split sticky layout); no concept-seed roll, so there is no seed key. Code-led because no image generation is available.

Signature interaction: the scroll-spy indicator line grows on the active section. Hovering an Experience or Project row dims its sibling rows and lifts the row's surface.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
