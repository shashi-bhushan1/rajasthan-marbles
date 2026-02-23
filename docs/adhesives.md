# Adhesives Section – Detailed Plan

## Overview

The Adhesives section will mirror the existing **Granite** section: a listing page with a card grid (no filters) and a detail page for each adhesive with specs and an "Explore Similar" carousel. The header and footer already link to `/adhesives`; this document is the spec and data-gathering guide before implementation.

---

## Routes

| Route | Purpose |
|-------|---------|
| `/adhesives` | Listing: hero + grid of adhesive cards. Responsive columns (1 → 2 → 3 → 4). Only adhesive **name** on each card. |
| `/adhesives/[adhesiveSlug]` | Detail: two-column layout (image left, content right), breadcrumbs, share, title, specs grid, description, "Where to Buy" CTA, and "Explore Similar Adhesives" carousel. |

---

## UI / Layout (aligned with Granite)

- **Listing page:** Same hero style as `/granite` (full-width image, overlay, title "Adhesives", breadcrumb Home / Adhesives). One line: "X adhesives available". Grid: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`. No sidebar, no filters.
- **Detail page:** Same two-column layout as `/granite/[graniteSlug]`: image with modal on the left; right column: breadcrumbs (Home / Adhesives / [Name]), Share button, product name, type line (e.g. "Adhesive | Tile"), specs grid, optional description, "Where to Buy" button. Bottom: "Explore Similar Adhesives" horizontal carousel with arrows.

---

## Data Model: Adhesive

Suggested shape for each adhesive (adjust after you have real product info):

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | string | Yes | Unique id | `"a1"` |
| `name` | string | Yes | Display name | `"Tile Adhesive Plus"` |
| `slug` | string | Yes | URL segment (lowercase, hyphenated) | `"tile-adhesive-plus"` |
| `image` | string | Yes | Image path | `"/images/adhesives/tile-adhesive-plus.webp"` |
| `type` | string | Yes | Category / product type | `"Tile Adhesive"`, `"Grout"` |
| `coverage` | string | No | Coverage per unit | `"4–5 kg/m²"`, `"~3 sq m per 20 kg bag"` |
| `dryingTime` | string | No | Curing / drying | `"24 hours"`, `"2–4 hours"` |
| `application` | string | No | Use case | `"Interior wall & floor tiles"` |
| `packSize` | string | No | Pack size | `"20 kg bag"`, `"5 kg bucket"` |
| `description` | string | No | Short product description | Paragraph for detail page |

Optional fields you may add later: `color`, `brand`, `datasheetUrl`, etc.

---

## Data to Gather (before implementation)

Use the table below to collect real adhesive products. Fill one row per product; then we can turn this into `data/adhesives.ts`.

| Name | Slug | Image path | Type | Coverage | Drying time | Application | Pack size | Description |
|------|------|------------|------|----------|-------------|-------------|------------|-------------|
|      |      |            |      |          |             |             |            |             |
|      |      |            |      |          |             |             |            |             |

- **Slug:** lowercase, spaces → hyphens (e.g. "EZY Fix" → `ezy-fix`).
- **Image:** decide folder (e.g. `/public/images/adhesives/`) and naming (e.g. `[slug].webp`). Placeholders can use existing site images until real assets exist.

---

## Implementation Checklist

After data is ready:

- [ ] **Data layer:** Create `data/adhesives.ts`
  - `Adhesive` interface (fields above).
  - `ADHESIVES` array (sample or real data).
  - `getAllAdhesives()`, `getAdhesiveBySlug(slug)`, `getSimilarAdhesives(adhesive, limit?)`.
- [ ] **Components:**
  - [ ] `components/AdhesiveCard.tsx` – card with image + **name only**, link to `/adhesives/[slug]`.
  - [ ] `components/ExploreSimilarAdhesives.tsx` – horizontal carousel with arrows, uses `AdhesiveCard`.
- [ ] **Pages:**
  - [ ] `app/adhesives/page.tsx` – listing (hero + grid, no filters).
  - [ ] `app/adhesives/[adhesiveSlug]/page.tsx` – detail (two columns, specs grid, Explore Similar).

---

## Detail Page Specs Grid (suggested)

On the adhesive detail page, show a small grid of specs (same style as Granite detail). Suggested columns:

- **Type** (e.g. Tile Adhesive)
- **Coverage** (e.g. 4–5 kg/m²)
- **Drying time** (e.g. 24 hours)
- **Application** (e.g. Interior wall & floor)
- **Pack size** (e.g. 20 kg bag)

Omit any field that is empty; layout can be 2 or 3 columns depending on how many specs you have.

---

## Reference Files (Granite – copy pattern from)

- `data/granite.ts` – type, array, helpers.
- `components/GraniteCard.tsx` – card with name only.
- `components/ExploreSimilarGranites.tsx` – similar carousel.
- `app/granite/page.tsx` – listing page.
- `app/granite/[graniteSlug]/page.tsx` – detail page.

Once the adhesive data and any final field names are decided, implementation can follow this plan and the granite code structure.
