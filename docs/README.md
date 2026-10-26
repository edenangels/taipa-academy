# Taipa Academy — by Rafael Lopes

A rammed-earth (taipa) building school on the academy template (same core as the EdenRise and Belong academies).

## State (26 Oct 2026, taipa2)
- **Guest-only preview.** Firebase is a placeholder in `brands/taipa/brand.js`; accounts, cloud progress and the Team console turn on once Rafael's own Firebase project is wired (academy-template `docs/PROVISIONING.md`, phase 2).
- **Seven courses, nothing filmed yet.** Every lesson is `type:'soon'` and the storefront says so. Replace each with `{ type:'vimeo', id, h }` as the footage lands, then run the transcript → quiz → knowledge pipeline (`scripts/`).
- Curriculum, in the order a wall is built: Welcome · Earth as a Material · Formwork & Ramming · Foundations, Plinths & Water · Earth Plasters & Finishes · Repairing Heritage Taipa · Designing & Building Legally. Titles, outcomes and descriptions are drafts for Rafael to correct; nothing claims a credential.
- Learners pick what they do (self-builder, architect, builder, heritage, student) and a goal (Build My First Wall, Master the Craft, Design with Earth, Restore Old Taipa, Finish Like a Master). Two journeys: The Builder's Journey, The Restorer's Path. Three field missions (jar test, test block, survey an old wall). One role-play (the sceptical client).
- Brand: umber ground `#1b130d`, ochre accent `#d9893f`, sand `#e6c79a`, fired clay `#b5553a`. Fraunces + Figtree, self-hosted. Covers are generated SVG strata (no stock photos, no faces) — `media/covers/`.

## Deploy
- GitHub: `edenangels/taipa-academy` (Pages workflow in `.github/workflows/pages.yml`, serves at edenangels.github.io/taipa-academy).
- Cloudflare Pages project `taipa-academy` → https://taipa-academy.pages.dev (build from a scratch dist: rsync → esbuild minify → `wrangler pages deploy`).
- Bump `?v=taipaN` in index.html and `VERSION` in sw.js together on every release.

## Open
- Rafael: correct course titles/outcomes, record the lessons, a photo for the educator card, confirm "Rammed-earth builder and teacher".
- Wire Firebase + superadmin (Rafael's email) for accounts and the Team console.
- Portuguese copy is a draft (the whole UI is EN + PT).
