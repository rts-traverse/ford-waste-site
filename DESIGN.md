# Design System — Ford Waste

## Product Context
- **What this is:** Public marketing website for Ford Waste — junk removal, cleanouts, construction-debris hauling, and roll-off dumpster rental.
- **Who it's for:** Upstate SC homeowners and commercial customers who want fast, reliable, trustworthy local hauling and an easy path to a quote.
- **Space/industry:** Waste hauling / junk removal / roll-off (Greenville & the Upstate, SC). Crowded, template/franchise-heavy field (In & Out Trash, Junk King, Bin There Dump That, WasteAway).
- **Project type:** Static marketing site (HTML + Tailwind), conversion-focused.
- **Memorable thing (PLACEHOLDER — confirm with Jordan Ford before copy locks):** "the Upstate's reliable hauler who makes it effortless."

## Aesthetic Direction
- **Direction:** Dispatch Yard — industrial vernacular (stenciled container placards, weigh-tickets, dispatch route-cards, hi-vis safety paint).
- **Decoration level:** intentional — structural baseline grid + a single oversized ghosted container-stencil mark; texture, never stock photography.
- **Mood:** Serious, local, operational, honest. Looks like well-maintained equipment, not a brochure. The deliberate opposite of the category's bubbly franchise templates.
- **Reference sites:** competitor scan only (no direct visual lift): inandouttrash.com, junk-king.com, bintheredumpthat.com, wasteawayindustries.com.

## Typography
- **Display/Hero:** **Archivo** (expanded cut, weights 700–900) — squared, signage-grade; all-caps, tight tracking, no letterspacing inflation. Sells "read from across the street."
- **Body:** **Newsreader** (serif) — running copy reads like a long-standing local institution, not a gig app. **Min size floor 16px; never used for forms, buttons, or data.** *(Headline risk — swap to a humanist sans like Hanken Grotesk if a crisper feel is wanted.)*
- **UI/Labels & Data:** **IBM Plex Mono** — phone number, quote-form field labels, container specs (10/20/30/40 yd), zip/town tags, weigh-ticket line items. Monospace = receipts/dispatch/machinery.
- **Code:** IBM Plex Mono.
- **Loading:** Google Fonts / Bunny Fonts `<link>` (Archivo, Newsreader, IBM Plex Mono).
- **Scale (rem):** hero 3.5–4.5 · h1 2.5 · h2 1.75 · h3 1.25 · body 1.0 (16px floor) · small 0.875 · mono-label 0.8125.

## Color
- **Approach:** restrained — paper + ink + yard-green, with ONE loud accent kept scarce.
- **Background:** `#F4F1EA` — kraft / weigh-ticket paper (warm off-white, not pure white).
- **Surface:** `#FBFAF6` raised · `#E7E2D6` inset/secondary panels.
- **Primary text (ink):** `#1A1C1A` — near-black with a green-asphalt cast.
- **Muted text:** `#6B6A60` — faded ink.
- **Structural (deep yard green):** `#1F3B2C` — rules, dispatch bar, footer.
- **Accent (hi-vis equipment orange):** `#FF5B19` — the roll-off container color; owns the primary CTA. Used scarcely so it always means "act here."
- **Semantic:** success `#2E7D4F` · warning `#E0A11B` · error `#C2371F` (deliberately distinct from the accent so a form error never reads as a CTA).
- **Dark mode:** not required for v1 (light, paper-based). If added later: deep asphalt surfaces, orange held, saturation reduced ~15%.

## Spacing
- **Base unit:** 8px.
- **Density:** comfortable-tight; heavy baseline grid (placard feel).
- **Scale (px):** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64).

## Layout
- **Approach:** hybrid — editorial/poster for the hero + marketing sections, disciplined grid for the quote/data.
- **Hero:** two-column dispatch placard — left ≈60% giant Archivo statement ("WE HAUL THE UPSTATE.") + mono subhead; right ≈40% weigh-ticket quote card with photo-upload front and center. Thin persistent dispatch bar (phone click-to-call + service-area town ticker) pinned on scroll.
- **Grid:** 12-col desktop / single-col mobile.
- **Max content width:** 1120px (max-w-5xl-ish), generous side margins.
- **Border radius:** small and squared — sm:2px, md:4px (placards aren't bubbly). full:9999px only for pill town-tags. **No uniform bubble-radius.**

## Motion
- **Approach:** minimal-functional.
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out).
- **Duration:** micro(80ms) short(180ms) medium(300ms).
- **Patterns:** dispatch bar pins on scroll; service-area town ticker; subtle section reveals. No scroll choreography, no gradient/parallax flourishes.

## Anti-slop guardrails (enforce in QA)
- No purple/violet gradients. No 3-column icon-in-circle feature grid. No centered-everything. No uniform bubble radius. No gradient CTA buttons. No generic stock-photo hero. No `system-ui` as display/body. The accent orange stays scarce.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-30 | Initial design system created ("Dispatch Yard") | /design-consultation; Claude main + independent Claude subagent (Codex unavailable). Industrial-vernacular direction to differentiate from franchise-template competitors. |
| 2026-05-30 | Stack = static HTML + Tailwind | Marty; matches chief-security-solutions-site + la-vida-landscapes-site. |
| 2026-05-30 | Serif body (Newsreader) flagged as headline risk | Differentiator vs. trades-sans norm; swap to Hanken Grotesk if crisper feel wanted. Revisit after Jordan confirms the "memorable thing." |
