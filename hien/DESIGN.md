---
name: Hiền
description: A luxe stationery set laid out on a strawberry-red desk.
colors:
  strawberry-ground: "#c93a4d"
  strawberry-deep: "#ad2f43"
  strawberry-lit: "#cf4357"
  cream: "#fff4ef"
  blush-type: "#ffd9de"
  berry-ink: "#4a1d2a"
  cotton: "#fffaf7"
  blush-paper: "#f6d9dc"
  blush-wax: "#b5263c"
  blush-mark: "#d4697a"
  sage-paper: "#dbe5d2"
  sage-wax: "#56704a"
  sage-mark: "#85a274"
  butter-paper: "#f4e5bd"
  butter-wax: "#b07a22"
  butter-mark: "#cf9f4c"
  powder-paper: "#d9e4f0"
  powder-wax: "#3e5c92"
  powder-mark: "#7d97c4"
typography:
  display:
    fontFamily: "Prata, 'Times New Roman', serif"
    fontSize: "clamp(2.3rem, 10.5vw, 5.2rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  script-display:
    fontFamily: "'Imperial Script', Prata, cursive"
    fontSize: "clamp(5.4rem, 29vw, 11rem)"
    fontWeight: 400
    lineHeight: 0.95
  script-headline:
    fontFamily: "'Imperial Script', Prata, cursive"
    fontSize: "clamp(4.4rem, 20vw, 6rem)"
    fontWeight: 400
    lineHeight: 1
  script-title:
    fontFamily: "'Imperial Script', Prata, cursive"
    fontSize: "3.1rem"
    fontWeight: 400
    lineHeight: 1.1
  body:
    fontFamily: "Petrona, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 380
    lineHeight: 1.62
  caption:
    fontFamily: "Petrona, Georgia, serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: "'Be Vietnam Pro', system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 500
    letterSpacing: "0.12em"
    fontFeature: "tnum"
rounded:
  paper: "2px"
  fold: "3px"
  envelope: "5px"
  focus: "6px"
  seal: "50%"
spacing:
  desk-gutter: "16px"
  sheet-pad: "44px 30px 52px"
  sheet-pad-wide: "52px 56px 60px"
  print-border: "14px"
  section-step: "clamp(84px, 14svh, 140px)"
  section-step-lg: "clamp(96px, 16svh, 160px)"
components:
  letter-sheet:
    backgroundColor: "{colors.cotton}"
    textColor: "{colors.berry-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.paper}"
    padding: "{spacing.sheet-pad}"
  envelope-blush:
    backgroundColor: "{colors.blush-paper}"
    rounded: "{rounded.envelope}"
    width: "min(350px, 88vw)"
  envelope-sage:
    backgroundColor: "{colors.sage-paper}"
    rounded: "{rounded.envelope}"
    width: "min(350px, 88vw)"
  envelope-butter:
    backgroundColor: "{colors.butter-paper}"
    rounded: "{rounded.envelope}"
    width: "min(350px, 88vw)"
  envelope-powder:
    backgroundColor: "{colors.powder-paper}"
    rounded: "{rounded.envelope}"
    width: "min(350px, 88vw)"
  wax-seal:
    backgroundColor: "{colors.blush-wax}"
    rounded: "{rounded.seal}"
    size: "76px"
  instant-print:
    backgroundColor: "{colors.cotton}"
    textColor: "{colors.berry-ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.paper}"
    padding: "{spacing.print-border}"
  counter-label:
    textColor: "{colors.cream}"
    typography: "{typography.label}"
---

# Design System: Hiền

## Overview

**Creative North Star: "The Boutique Letter Set"**

A single column of fine stationery laid on a strawberry-red desk. Everything on the page is a physical paper object: tinted envelopes with printed liners, embossed wax seals, cotton letter sheets folded in half, an instant print taped down with washi, a stack of prints you can shuffle. The desk itself is a warm red field lit from above and shaded at the foot, with a fine grain laid over everything so no surface reads as flat screen color.

The system is polished and elevated but cute in its small details: the motifs (bunny, flower, carrot, sparkle, strawberry, heart) are tiny filled marks used like a stationer's brand, pressed into wax, printed on liners, or set above a letter's first line. Type does the emotional work: a classical display serif for the greeting, a formal copperplate script for her name and the hand-written moments, a soft text serif for the letters, and a small tracked sans only for counters and dates.

Motion is paper physics. Things settle onto the desk as they arrive, a seal lifts away when broken, a flap folds back, the letter rises out of its pocket with a slight spring and then unfolds on its center crease. It explicitly rejects the flat, hand-drawn clip-art look and the generic pink e-card.

**Key Characteristics:**
- Strawberry-red ground with top light, foot shade, and a multiply grain over the whole page.
- Four tinted envelope families (blush, sage, butter, powder), each with its own liner print, wax, and mark tone.
- Cotton paper for every sheet and print; berry ink for all text on paper.
- Layered, tinted shadows that read as paper resting on a desk, never as UI cards.
- Small filled-silhouette motifs, embossed or printed, never illustrated scenes.
- Every object sits at a slight hand-placed tilt.

## Colors

A saturated strawberry desk carrying soft tinted papers, with deep wax tones as the only other saturated notes.

### Primary
- **Strawberry Ground**: the desk. Page background, browser theme color, and the base of the body gradient.
- **Strawberry Deep**: the shaded foot of the desk (bottom radial), scrollbar thumb, and text-selection ink.
- **Strawberry Lit**: the top light on the desk (top radial). Only ever used as a lighting gradient, never as a fill.

### Secondary
- **Blush Wax**, **Sage Wax**, **Butter Wax**, **Powder Wax**: the seal for each envelope family. The seal's rim, glint, and embossed motif are all derived from the family's wax with `color-mix` (darker for the impression, lighter for the raised edge). Blush Wax also inks the script salutation on the first letter.
- **Blush Mark**, **Sage Mark**, **Butter Mark**, **Powder Mark**: the printed tone of each family: the motif above a letter's text and the "for Hiền" script on the folded back of the sheet.

### Tertiary
- **Blush Paper**, **Sage Paper**, **Butter Paper**, **Powder Paper**: envelope stock. Each family also carries lighter side, bottom, flap, and liner tints of the same hue (component-local, see the sidecar) so the pocket, flap, and inside liner read as one folded sheet catching light differently.

### Neutral
- **Cream**: all type set directly on the desk (the greeting, the hint, the counter, the sign-off date) and the focus ring.
- **Blush Type**: the script name and the "us" heading on the desk. A pink-tinted cream that keeps script lettering soft against the red.
- **Cotton**: letter sheets, the keepsake print, and the photo prints.
- **Berry Ink**: every word printed on paper.

### Named Rules
**The Desk and Paper Rule.** Type is either on the desk (Cream or Blush Type) or on paper (Berry Ink or a family's wax/mark). Nothing else carries text.

**The Family Rule.** An envelope's paper, liner, seal, letter mark, and sheet-back script all come from one family. Never mix a sage seal onto a blush envelope.

## Typography

**Display Font:** Prata (with Times New Roman, serif)
**Script Font:** Imperial Script (with Prata, cursive)
**Body Font:** Petrona (with Georgia, serif)
**Label Font:** Be Vietnam Pro (with system-ui, sans-serif)

**Character:** A high-contrast classical serif and a formal copperplate script give the set its boutique-stationer polish; Petrona's warm, slightly calligraphic text serif keeps the letters intimate rather than formal. All four faces carry Vietnamese diacritics.

### Hierarchy
- **Display** (Prata 400, clamp 2.3–5.2rem, 1.05, -0.015em): the "Happy Birthday," greeting only.
- **Script Display** (Imperial Script 400, clamp 5.4–11rem, 0.95): her name beneath the greeting, overlapping it slightly (-0.06em), with a soft berry text-shadow.
- **Script Headline** (Imperial Script 400, clamp 4.4–6rem, 1): a section heading on the desk ("us").
- **Script Title** (Imperial Script 400, 3.1rem, 4rem at 760px and up, 1.1): the salutation at the top of a letter, inked in the family wax.
- **Body** (Petrona 380, 1.0625rem, 1.25rem at 760px and up, 1.62): letter text, centered, `text-wrap: pretty`, paragraphs spaced 0.5em.
- **Caption** (Petrona italic, 1.05–1.15rem, 1.35): the keepsake caption and the "tap the seal to open" hint. Italic marks a handwritten aside.
- **Label** (Be Vietnam Pro 500, 0.8rem, 0.12em tracking, tabular numerals): the photo counter. The sign-off date uses the same face at 0.75rem with 0.3em tracking.

### Named Rules
**The Script Is for Her Rule.** Imperial Script is reserved for her name, salutations, and short hand-lettered words. It never sets a sentence.

**The Quiet Sans Rule.** Be Vietnam Pro appears only at label size, for numerals and dates. It is never a heading.

## Layout

A single centered column (the desk) with 16px side gutters and a bottom pad that respects the safe area. Every object is centered and individually tilted (about -2.5° to +2.5°). Envelopes are `min(350px, 88vw)` wide on phones and 540px from 760px up, with height locked to 0.72 of the width. Large vertical gaps separate objects so each one arrives alone: section steps of clamp(84px, 14svh, 140px) and clamp(96px, 16svh, 160px), fixed at 96–110px on wide screens. The hero starts clamp(40px, 11svh, 104px) below the top safe area and the first envelope sits close beneath it so the greeting and the first seal share the first viewport.

When a letter opens, its envelope grows padding above itself equal to the letter's height minus the tucked part, and the page scrolls with it so the letter and envelope land fully in view. The single breakpoint is 760px.

## Elevation & Depth

Depth is physical: paper resting on a desk under soft overhead light. Every shadow is tinted berry-brown (never neutral black), layered as a tight contact shadow, a mid shadow, and a long soft fall. Seals sit higher than paper and use a doubled drop-shadow that follows their organic outline. Paper surfaces carry their own lighting (a faint top sheen on the flap, a crease highlight on the sheet, shade inside the envelope) and a multiply grain.

### Shadow Vocabulary
- **Paper** (`0 1px 1px rgba(70,8,22,.18), 0 6px 12px -4px rgba(70,8,22,.22), 0 22px 40px -14px rgba(70,8,22,.42)`): envelopes, letter sheets, the keepsake, and every photo print.
- **Wax** (`drop-shadow(0 2px 2px rgba(60,10,20,.35)) drop-shadow(0 8px 10px rgba(60,10,20,.25))`): seals; the smaller sign-off monogram uses a slightly shorter second layer.
- **Tape** (`0 1px 2px rgba(70,8,22,.18)`): washi tape lying almost flat.

### Named Rules
**The Tinted Shadow Rule.** Shadows are always a berry tone over the red desk. A grey shadow on this ground reads as dirt.

**The Grain Rule.** The desk and every paper surface carry the fractal-noise grain at low opacity (7–12%, multiply). Flat fills look like a screen; grain makes them paper.

## Shapes

Paper is nearly square-cornered: 2px on sheets and prints, 3px on the folded back, 5px on envelopes. Envelope geometry is drawn: a pointed flap with a softly rounded tip, and side and bottom pocket panels meeting at a curved center, with a thin white edge on the bottom panel. Seals are not circles: they are an irregular, poured-wax blob mask with a pressed inner disc and raised rim. Washi tape has torn, zig-zag ends and faint stripes. Motifs are filled silhouettes on a 40-unit grid.

## Components

### Envelope
Tinted stock in one of four families. A back panel with inside shade, a pocket of side and bottom panels, and a flap whose inside face is the printed liner (strawberries for blush, white flowers for sage, gingham for butter, confetti dots for powder). Opening folds the flap back over 0.75s on the fold curve.

### Wax Seal
The only control on an envelope: a 76px button (92px at 760px and up) centered on the flap tip, embossed with the family motif and swept by a slow light glint every few seconds. Hover lifts it slightly (scale 1.05, -4°); press squashes it (0.94). Breaking it lifts it away up and out while it fades. The sign-off monogram is a 54px static seal in a deeper strawberry wax with no glint.

### Letter Sheet
Cotton paper folded in half on a visible center crease, tucked into the envelope. When opened it rises out of the pocket on the paper spring, then the lower half unfolds on the crease, then becomes one flat sheet with no seam. Berry-ink body text, centered, under either a script salutation or a small family-tone motif. Its folded back reads "for Hiền" in family-mark script.

### Instant Print (Keepsake)
A cotton print with a 14px border and deeper caption foot, tilted and held down by a strip of pink washi tape. The image is the bear-kiss GIF; the caption is an italic line under a small strawberry mark.

### Photo Stack
A pile of instant prints (5:6, 12px border) with staggered tilts and a few pixels of lift per layer. Tapping flicks the top print off to the right and slides it back under the pile. Placeholders are family-tinted squares with a pale motif; real photos replace them in order. Movies sit in the pile as prints too: the top one plays silently in view (never under reduced motion), a tap gives it sound before the next tap turns it, and it pauses once it leaves the top or the screen. A cream tracked counter sits beneath.

### Hint
One italic cream line under the first envelope. It fades up and away once the first seal is broken.

## Do's and Don'ts

### Do:
- **Do** build every new object as a paper thing on the desk: cotton or tinted stock, 2–5px corners, the Paper shadow, grain.
- **Do** pick one envelope family per object and draw seal, liner, mark, and script from it.
- **Do** set type on the desk in Cream or Blush Type and type on paper in Berry Ink or the family wax.
- **Do** tilt each object slightly and give it its own vertical step of at least clamp(84px, 14svh, 140px).
- **Do** move things like paper: settle in on the ease-out curve, rise on the soft spring, fold on the fold curve, and collapse all of it under reduced motion.
- **Do** keep motifs as small filled marks (about 18–32px on paper, about 46% of a seal).

### Don't:
- **Don't** draw hand-drawn, clip-art, or scene illustration; the flat dollhouse look was rejected.
- **Don't** let it read as a generic pink e-card: no flat pink fills, no stock hearts-and-balloons ornament.
- **Don't** use neutral grey or black shadows on the red ground.
- **Don't** set sentences in Imperial Script or headings in Be Vietnam Pro.
- **Don't** fill the screen with motion: a handful of paper hearts on the final letter is the ceiling, never confetti.
