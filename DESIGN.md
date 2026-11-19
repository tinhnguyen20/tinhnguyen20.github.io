---
name: Tinh Nguyen
description: One-page split portfolio on green-tinted charcoal; the intro holds still while the work scrolls.
colors:
  ground: "#161a18"
  raised: "#1e2320"
  line: "#2a312d"
  line-strong: "#3a443e"
  bone: "#e9efe9"
  body: "#a3b1a8"
  muted: "#7f8c84"
  accent: "#61bc84"
  accent-hover: "#8fd3a8"
  accent-mint: "#c6ffe6"
  accent-deep: "#2e8b57"
  accent-wash: "rgb(97 188 132 / 0.1)"
  on-accent: "#0f1511"
typography:
  display:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 2rem + 2.6vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.4rem + 1.8vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    letterSpacing: "-0.02em"
  title-sm:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
  body-sm:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.96875rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Schibsted Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.14em"
  data:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.02em"
    fontFeature: "tnum"
  data-lg:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
rounded:
  focus: "4px"
  sm: "6px"
  md: "8px"
  pill: "999px"
spacing:
  gutter: "1.5rem"
  gutter-desktop: "3rem"
  column-gap: "4rem"
  row: "1.25rem"
  date-column: "8.5rem"
  section: "5rem"
  section-desktop: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.1rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.on-accent}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.1rem"
    height: "2.75rem"
  button-quiet-hover:
    textColor: "{colors.accent}"
  tag:
    backgroundColor: "{colors.accent-wash}"
    textColor: "{colors.accent}"
    typography: "{typography.data}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.7rem"
  row:
    backgroundColor: "transparent"
    rounded: "{rounded.md}"
    padding: "{spacing.row}"
  row-hover:
    backgroundColor: "{colors.raised}"
  timing-cell:
    backgroundColor: "{colors.ground}"
    padding: "1.1rem 1.25rem 1.2rem"
---

# Design System: Tinh Nguyen

## Overview

**Creative North Star: "The Pit Wall"**

A single dark page that reads like a timing screen at a track day: one green on charcoal, data in mono, everything else in a tight grotesk. The intro column holds still on the left (name, role, a short pitch, an availability line, actions, the section nav, socials) while the work scrolls past it on the right. Density is moderate. The ground is charcoal tinted toward the green, text runs from bone for names and headings to sage for prose to a muted grey-green for metadata, and the single sea-green accent marks what is live: links, availability, the active nav line, tags, lap times.

Structure comes from hairlines and type, not boxes. Rows sit flat on the ground until a pointer lands on one; then that row lifts onto the raised surface and its siblings fade back. The one bordered container in the system is the timing sheet, a hairline-gridded table for lap times and track order, where the grid is the content.

The world rejects the previous tabbed sidebar app, kav3's navy template palette, and numbered section headings.

**Key Characteristics:**
- Two-column split at 1024px and up: a sticky full-height intro at 44%, content at 56%, inside a 1180px shell.
- One green-tinted charcoal ground; one raised surface used only on hover.
- Schibsted Grotesk for everything a person reads; JetBrains Mono only for data.
- Hairline dividers (1px) instead of cards.
- Motion is a single long ease-out curve; nothing bounces.

## Colors

A near-monochrome green-tinted charcoal with one sea-green voice and a mint highlight for hover.

### Primary
- **Sea Green** (accent): links, the availability line and dot, the active scroll-spy line, organization names in row titles, tag text, lap times, track positions, focus rings, the primary button fill. Holds 7.5:1 on the ground.
- **Pale Sea Green** (accent-hover): primary button hover fill only.
- **Mint Flash** (accent-mint): link hover color. A brief highlight, never a resting color.
- **Deep Sea Green** (accent-deep): fills that carry no reading: text selection background and list markers in experience bullets. At 4.1:1 on the ground it is not a text color.
- **Green Wash** (accent-wash): the tag pill fill, 10% of the accent over the ground.
- **Pit Black** (on-accent): text and icons on accent fills (8:1 on Sea Green).

### Neutral
- **Charcoal Ground** (ground): page background, timing-sheet cells, and (at 94% opacity with a 10px blur) the sticky mobile section heading.
- **Raised Charcoal** (raised): the hovered row surface. Nothing rests on it.
- **Hairline** (line): every divider: timing-sheet grid, table rows, track-order rows, notes list, the contact top rule, the mobile sticky heading's bottom edge.
- **Strong Hairline** (line-strong): the quiet button border and the scrollbar thumb.
- **Bone** (bone): the name, headings, row titles, table row heads, strong text in prose.
- **Sage** (body): running prose.
- **Lichen** (muted): metadata: dates, locations, nav labels at rest, socials at rest, group labels, footer, table detail cells. 5:1 on the ground, 4.5:1 on the raised surface; it is the floor for readable text, so nothing dimmer carries words.

### Named Rules
**The One Green Rule.** Sea Green is the only hue. Every other color is a tint of the charcoal or a step of the same green. A second hue does not enter this world.

**The Deep Green Fills Rule.** Deep Sea Green is for fills and markers only (selection, bullet markers). Text in green is always Sea Green or lighter.

## Typography

**Display Font:** Schibsted Grotesk (with ui-sans-serif, system-ui)
**Body Font:** Schibsted Grotesk
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SF Mono, Menlo)

**Character:** A compact, slightly condensed newsroom grotesk carries the voice at every size, from an 800-weight name with tight tracking down to 0.75rem nav labels. The mono appears only where a number or token is being reported, the way a timing screen prints splits.

Both faces are self-hosted woff2, latin subset, variable weight (Schibsted 400-900 roman and italic, JetBrains Mono 400-600), `font-display: swap`; the roman grotesk is preloaded.

### Hierarchy
- **Display** (800, clamp 2.75-3.6rem, 1.0): the name in the intro column. Once per page.
- **Headline** (800, clamp 1.9-2.6rem, 1.08, balanced wrap): the contact close, max 30rem wide.
- **Title** (700, 1.5rem): section headings on desktop. On mobile the same heading becomes a sticky bar at 0.8125rem, 700, uppercase, 0.14em tracking.
- **Title Small** (600, 1.0625rem, 1.4): row titles and subheads. Intro role line sits between Title and Title Small (500, 1.3rem).
- **Body** (400, 1.0625rem, 1.7): prose, capped at 38rem; intro pitch capped at 23rem. `text-wrap: pretty`.
- **Body Small** (400, 0.96875rem, 1.65): row descriptions and bullets.
- **Label** (700, 0.75rem, 0.14em, uppercase): scroll-spy nav labels only.
- **Data** (JetBrains Mono 500, 0.75rem, 1.6, tabular numerals): row dates (uppercase, 0.02em) and tags.
- **Data Large** (JetBrains Mono 600, 1.5rem, 1.2, -0.02em): lap times, right-aligned. Track positions use mono 600 at 0.8125rem.

### Named Rules
**The Data-Only Mono Rule.** JetBrains Mono sets dates, tags, lap times, and track positions. It never sets a heading, a sentence, or a button.

**The Tight Top Rule.** Large grotesk tightens as it grows: -0.035em at display, -0.03em at headline, -0.02em at title. Small uppercase labels open up to 0.14em.

## Layout

A one-page split. Below 1024px everything stacks in a single column with a 1.5rem gutter: the intro (4.5rem top padding) with its actions visible, then the sections. At 1024px and up the gutter becomes 3rem and the 1180px shell turns into a flex row with a 4rem gap: the intro takes 44%, is sticky at full viewport height (`100dvh`), and spreads its content top-to-bottom with socials pinned at the foot; content takes 56% with 6rem top padding. The scroll-spy nav appears only at this width.

Sections are separated by bottom padding (5rem mobile, 7rem desktop), not rules. Experience rows use a two-column grid from 640px: an 8.5rem date column and the body. Project rows are a flush single-column variant that starts at the content edge. Rows bleed 1.25rem past the column on each side so the hover surface has room without shifting text. The notes list uses a 10rem term column from 640px. The timing sheet splits 1.15fr / 1fr from 640px with a full-width cars cell on top.

### Named Rules
**The Still Intro Rule.** On desktop the intro column never scrolls away. Who Tinh is and how to reach out stay in view while the work moves.

## Elevation & Depth

Flat by default. Depth appears only as a response to pointer intent: a hovered row lifts onto the raised surface with one soft, low shadow while its siblings drop to 55% opacity. The only other layering is the mobile sticky section heading, which sits over content on a 94% ground with a 10px backdrop blur and a hairline bottom edge.

### Shadow Vocabulary
- **Row lift** (`box-shadow: 0 14px 32px -18px rgb(0 0 0 / 0.75)`): hovered experience and project rows, desktop with hover-capable pointers only.

### Named Rules
**The Lift on Intent Rule.** Surfaces are flat at rest. The raised color and the row shadow appear together, on hover, at 1024px and up with `(hover: hover)`. Touch layouts never show them.

## Shapes

Small, consistent radii on a flat, hairline-ruled page. Focus rings round at 4px; buttons and the skip link at 6px; rows, row link hit areas, and the timing sheet at 8px; tags are full pills (999px); the status dot is a circle. Borders are always 1px. The timing sheet draws its grid with a 1px gap over a hairline-colored background, clipped by its radius.

## Components

### Buttons
Compact and direct; one filled, one outlined.
- **Shape:** gently rounded (6px), min height 2.75rem, 0.55rem icon gap, 600 weight at 0.9375rem.
- **Primary:** Sea Green fill, Pit Black text. Used for the first available action (Email when an address is set, otherwise Resume).
- **Hover / Focus:** primary fill steps to Pale Sea Green; quiet button border and text turn Sea Green. Press nudges 1px down. Focus is the global 2px Sea Green outline at 3px offset. Transitions 0.25s on the ease-out curve.
- **Quiet:** transparent with a Strong Hairline border and Bone text.
- **Icons:** inline stroke SVGs on a 24px grid at 1.75 stroke (Lucide-derived), sized ~1.05rem in buttons.

### Chips (tags)
- **Style:** Green Wash pill, Sea Green text in Data mono, 0.35rem / 0.7rem padding, 0.45rem gaps. Static labels, not filters.

### Rows (signature)
The list unit for Experience and Projects.
- **Structure:** date column (Data, Lichen, uppercase) beside a body of Title Small, a Lichen sub-line, Body Small paragraphs or bullets with Deep Sea Green markers, and tags. Project rows use the flush variant with no date column.
- **Titles:** Bone, with the organization in Sea Green at 500. Linked titles stretch an invisible 8px-radius hit area over the whole row; an up-right arrow nudges 2px on hover. Status ("Live", "In progress") follows in Lichen at 0.875rem.
- **Hover:** see Elevation. Focus draws the 2px Sea Green ring around the whole row.

### Navigation (scroll-spy)
- **Style:** Label type, Lichen at rest, a 1px line (2rem) before each label.
- **States:** hover turns the label Bone and grows the line to 3rem; the active section's line grows to 4.5rem and turns Sea Green (0.45s ease-out). Desktop only; mobile relies on the sticky section headings.
- **Socials:** Lichen icon + label links at 0.875rem with 2.75rem hit height, Sea Green on hover.

### Timing Sheet (signature)
A hairline-gridded table for track-day data. Cells sit on the ground inside a 1px Hairline border at 8px radius. Each cell opens with a Lichen 600 label at 0.8125rem; table rows divide with hairlines; track names in Bone, details in Lichen; lap times in Data Large Sea Green, right-aligned; track order counts P1, P2... in Sea Green mono. An italic Sage caption may follow.

### Availability line
A Sea Green line at 0.9375rem led by an 0.5rem Sea Green dot. Appears once, in the intro.

## Do's and Don'ts

### Do:
- **Do** keep every color on the charcoal-and-sea-green ramp in the frontmatter; add a step of the same green before adding a hue.
- **Do** use JetBrains Mono with tabular numerals for dates, tags, lap times, and positions, and nowhere else.
- **Do** separate content with 1px Hairline rules and section padding (5rem / 7rem), not containers.
- **Do** keep row hover to the full set: raised surface, row-lift shadow, siblings at 0.55 opacity, desktop hover pointers only.
- **Do** use the single ease-out curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for every transition, and honor reduced motion.
- **Do** keep hit targets at 2.75rem minimum for buttons and social links.

### Don't:
- **Don't** wrap sections or rows in resting cards; the raised surface is a hover state, and the timing sheet is the only bordered container.
- **Don't** number section headings or put a kicker or eyebrow line above them. (Track-order positions P1, P2... are data and stay.)
- **Don't** set text in Deep Sea Green, or in any neutral dimmer than Lichen.
- **Don't** bring back the tabbed sidebar layout or a navy ground borrowed from kav3.
- **Don't** set headings, prose, or buttons in mono.
- **Don't** use icon fonts or glyph characters as icons; icons are inline stroke SVG at 1.75.
