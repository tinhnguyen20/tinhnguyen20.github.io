# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers, recruiters, and engineers evaluating Tinh Nguyen for a role. They arrive from a resume, LinkedIn, or GitHub link, usually skim on a laptop or phone in under a minute, and decide whether to reach out.

## Product Purpose

A personal portfolio at tinhnguyen20.github.io. It explains who Tinh is, what Tinh has built, and that Tinh is looking for a next team. Success means a qualified visitor understands Tinh's focus (applied LLM, agent infrastructure, platform engineering) and reaches out.

## Positioning

Tinh builds platforms other engineers build on top of: a no-code LLM workflow platform (AgentOS), GPU-backed LLM infrastructure, and a plugin/extension platform at Cisco. Tinh also builds side projects (rootedbranches.app, Frontier) and does HPDE track days, car maintenance, home renovation, and gardening.

## Operating Context

Static GitHub Pages site with no build step. Plain HTML, CSS, and ES-module JavaScript. Content lives in `js/sections/*.js` modules, and adding a module to `js/sections/index.js` adds a section. The `hien/` directory is a separate personal page and is out of scope for portfolio work.

## Capabilities and Constraints

- Must run as static files on GitHub Pages; local preview with `python3 -m http.server`.
- Sections: About, Experience, Projects, Hobbies, plus a contact close.
- Contact: GitHub (github.com/tinhnguyen20), email (set in `js/site.js`; the site hides email links when it is empty), and a resume download (disabled for now; the code is commented out in `js/site.js` and `js/app.js`).
- LinkedIn link: not included for now.

## Brand Commitments

- Keep the existing dark charcoal and sea-green color identity.
- Layout reference the user chose: kav3.com's split layout, with a sticky intro and section nav on the left and the content scrolling on the right as one page. Follow the structure without copying kav3's template palette.
- Voice: plain, first person, dry humor ("who the limiting factor is"), no hype.

## Evidence on Hand

- Work history and quantified bullets in `js/sections/experience.js` (Cisco 2020–2025, Accenture, Unity).
- Project descriptions for AgentOS, Colligo, Frontier, and rootedbranches.app in the About copy.
- HPDE facts: 30+ track days since 2021, '99 NB and '21 ND Miatas, best laps of 1:58 at Sonoma (both cars), 1:28 at Thunderhill West, 1:49 at Laguna Seca, and 2:10 at Buttonwillow.
- Absent, so never fabricate: testimonials, metrics beyond those listed, project screenshots, LinkedIn URL.

## Product Principles

1. Lead with the job search: what Tinh does and how to reach out should be visible without scrolling.
2. Show, with specifics: real numbers and real project names beat adjectives.
3. Keep the owner's voice: edit for layout, not for tone.
4. Static and fast: no framework or build step.
