# Design System — Fords Waste

## Product Context
- **What this is:** Public marketing website for **Fords Waste** (`@fordswaste_`) — **roll-off dumpster rental** (residential + commercial), plus junk removal / cleanouts.
- **Who it's for:** Upstate SC homeowners, contractors, and property managers who need a dumpster dropped or junk hauled, fast, with an easy path to a quote.
- **Space/industry:** Roll-off dumpster rental / waste hauling (Greenville & the Upstate, SC). Crowded, template/franchise-heavy field (In & Out Trash, Junk King, Bin There Dump That, WasteAway).
- **Project type:** Static marketing site (HTML + Tailwind), conversion-focused.
- **Real details:** phone **864-371-9361**; domain **fordswaste.com** (registered, not yet live). Logo = bold black "FORDS" over a red "WASTE" banner.
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
- **Approach:** the real brand — **paper + black ink + white**, with the **brand RED** as the one loud accent (from the `@fordswaste_` logo + red roll-off containers). Kept scarce.
- **Background:** `#F4F1EA` — warm off-white (paper), not pure white.
- **Surface:** `#FBFAF6` raised · `#E7E2D6` inset/secondary panels.
- **Primary text / structural (ink):** `#1A1C1A` — near-black; rules, dispatch bar, footer.
- **Muted text:** `#6B6A60`.
- **Accent (brand RED):** `#C8202E` — the logo's "WASTE" banner and the red containers; owns the primary CTA. Used scarcely so it always means "act here."
- **Semantic:** success `#2E7D4F` · warning `#E0A11B` · error `#8C1D13` (deep brick — kept distinct from the brand red so a form error never reads as a CTA).
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
- No purple/violet gradients. No 3-column icon-in-circle feature grid. No centered-everything. No uniform bubble radius. No gradient CTA buttons. No generic stock-photo hero. No `system-ui` as display/body. The brand red stays scarce.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-05-30 | Initial design system created ("Dispatch Yard") | /design-consultation; Claude main + independent Claude subagent (Codex unavailable). Industrial-vernacular direction to differentiate from franchise-template competitors. |
| 2026-05-30 | Stack = static HTML + Tailwind | Marty; matches chief-security-solutions-site + la-vida-landscapes-site. |
| 2026-05-30 | Serif body (Newsreader) flagged as headline risk | Differentiator vs. trades-sans norm; swap to Hanken Grotesk if crisper feel wanted. Revisit after Jordan confirms the "memorable thing." |
| 2026-05-30 | Rebrand to real brand from IG @fordswaste_ | Name "Fords Waste"; accent orange → brand **red #C8202E**; structural green → black (matches logo: black FORDS / red WASTE on white); positioning → roll-off-dumpster-forward (+ junk removal); real phone 864-371-9361; domain fordswaste.com. |
