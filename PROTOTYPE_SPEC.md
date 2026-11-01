# Good Harvest · TikTok POI prototype — build spec (v2)

> 给实现原型的 agent 看的。目标：把现有 HTML demo（`index.html` / `styles.css` / `app.js`）更新成 Figma 最终稿 `main flow(final)` 的样子。所有 UI 文案用英文；视觉是 TikTok 调性（TikTok Sans，黑 #161823，红 #FE2C55，灰 #8A8B91，浅灰底 #F1F1F2）。
>
> Figma file: `https://www.figma.com/design/fK9g5YdtVEbv2SlOFunPKf` · section **main flow(final)** (node `140:4545`).
> Repo: `jamiechou2004/tiktok-test-demo` (hand-written HTML/CSS/JS, no framework, 390×844 phone stage scaled to viewport, deployed via GitHub Pages).

---

## 0. What the prototype is for

Design-challenge concept: *"Help users decide whether a restaurant is worth going to, right where they got interested — faster and with more confidence than today's POI page."*
Flow in three words: **看 · 点 · 查** — see the video → tap the place tag → check the details (dishes, price, distance, wait) without leaving the video.

Scope = **decision stage only**. Departure (ride / navigation hand-off) stays as the existing bottom buttons but is not the point; don't add new flows for it.

It will be used in a 5-person usability test, so every tappable element shown in the Figma must do *something* (navigate, expand, or at least a toast).

---

## 1. Screen map (keep the names in code)

| # | Screen | Figma node | Entry | Exit |
|---|---|---|---|---|
| 01 | **Feed** (For You, video with place tag) | `140:4546` "7" | start | tap place tag → 02 |
| 02 | **Half sheet** (video keeps playing on top) | `140:4787` "B" | 01 | swipe/scroll up → 03 · swipe down → 01 |
| 03 | **Full POI page** (Overview) | `140:4910` "5 · Full length" | 02 | tabs · back → 02 |
| 04 | **Dishes tab** (sticky 2-level nav) | `140:5260` "6a" | 03 tab "Dishes" | other tabs → 03 |
| 05 | **Menu detail page** + category chips (6 states) | `140:5389` "6b" + `161:13/169/319/469/619` | 03/02 "View all" on Recommended dishes, or dish row | back → where it came from |
| 06 | **Getting there guide** (3 steps, full length) | `164:25` | "Find it ›" in Overview | back → 03 |
| — | Hand-off sheets (Get directions / Ride) + app launch + end card | existing in repo | bottom buttons | keep as is |

The existing **03 · Dish feed** (`#dishfeed`, vertical video feed opened from a dish tile) can stay as the action for tapping a dish *photo*; it is not in the Figma final but is already built and harmless.

---

## 2. Screen contents (exact copy)

### 01 · Feed — unchanged
Keep current feed. Place tag reads **Good Harvest · Atlanta** (green pin). Creator `spicyfoodie_atl`.

### 02 · Half sheet (sheet top at y=228, video 147×228 centred above)

Grabber, then **white cards on #F1F1F2** with 16px side margins, radius 16, inner padding 16, 12px between cards.

1. **Place header** (inside first card)
   - avatar 28 (store photo) · **Good Harvest** (17 semibold) · sub `Sichuan · $20–50 · Doraville` (13.5, grey)
   - right: share / bookmark / more icons (dark)
2. **Stats capsule** (same card, directly under header, 3 columns separated by 1×30 #E6E6E8 dividers)
   - `18 reviews` (11 grey) / ♥ **4.6 Excellent** (15 semibold, red heart)
   - `Hours` / `12–11 PM`
   - `Per person` / **$35**
3. **Recommended by diners (6)** card — title 16 bold, right link `View all ›` (13 grey) → opens 05
   - 4 tiles 74×74 radius 10, badge top-left `TOP·1…TOP·4` (12 semibold white on rgba(0,0,0,.6), radius 6)
   - name 13 semibold, 2 lines max; count `63 recs` 11 orange #FE6A2C
   - data: Dry Pot Lotus Root 63 · Spicy Frog 33 · Boiled Fish in Chili Oil 53 · Garlic Pork Belly 33
4. **What people say** card — title 16 bold, `View all ›`
   - exactly **3** reviews (existing data: Eaternally Happy / Lil Nisa / Vanesa Beltran), text 14/20
   - centred `View all ›` at bottom
5. **Bottom action bar** (fixed): `Get a ride` (from $20 · Uber / Lyft) + `Guide me there` (18 min drive) — existing.

### 03 · Full POI page (Overview)

Sticky header: status bar + nav (back circle, bookmark/share/more circles) on dark gradient → below it **Section tabs** on white: `Overview · Dishes · Combos · Reviews · More` (17; active = #161823 bold + 26×3 red underline; inactive #999). Tabs: Overview/Combos/Reviews = scrollspy within this page; **Dishes = switches to screen 04**; More = toast "Not in this demo".

Sheet bg #F1F1F2, cards as in 02:

1. **Overview card** = "general info · merged v2" (Figma `162:41`)
   - Place header (same as 02) — sub `Sichuan · $20–50 · Doraville`
   - row: ★ **4.6** Excellent (18) ··· right `Open · until 11 PM ›` (Open in green #0BB07B)
   - divider
   - row: `18 min drive │ No wait now ›` (15 medium, teal #2E8B8B), under it `Busy Fri–Sat 6–8 PM` (13.5 grey)
   - address with map pin aligned to first line: `5150 Buford Hwy NE C-120, Doraville, GA 30340` (13.5), right chevron
   - `Find it ›` (13, walk icon) → opens 06
   - on the right of the address block: two 40px circles **Ride** / **Call** with labels
   - pill row: `Website · Map · Call · Review` (32h, 1px border, 13 semibold, gradient icons) — equally spaced
2. **Recommended by diners (6)** — identical to 02 card
3. **Popular combos · 3** card — `View all ›`; horizontal scroll of 232×170 cards (#F8F8F8, r10): two 104×72 pics, `For 2` … `$46`, items line, `1,208 ordered`. Existing COMBOS data.
4. **What people say** — 3 reviews + `View all ›`
5. **You may also like** card — **infinite feed**: rows 72×72 thumb · name 16 semibold · `Sichuan · Duluth · $$` grey · ★ 4.6 (812) · 6.2 mi · grey tag chip · chevron. 6 rows, then a spinner + `Loading more nearby…`. On reaching bottom, append 3 more rows (loop the data) to feel infinite. Data:
   - Masterpiece · Sichuan · Duluth · $$ · 4.6 (812) · 6.2 mi · "Also does dry pot"
   - Gu's Kitchen · Sichuan · Chamblee · $$ · 4.4 (355) · 2.3 mi · "Closer · open now"
   - Chong Qing Hot Pot · Hot pot · Duluth · $$$ · 4.5 (240) · 7.8 mi · "Group-friendly"
   - Tasty China II · Sichuan · Norcross · $$ · 4.3 (510) · 8.9 mi · "Famous for whole fish"
   - Northern China Eatery · Dongbei · Doraville · $ · 4.5 (1200) · 0.4 mi · "Walkable · dumplings"
   - Bo Bo Garden · Cantonese · Doraville · $$ · 4.4 (430) · 0.9 mi · "Late night"
6. Bottom action bar — keep (same as 02).

### 04 · Dishes tab (Figma 6a)

Same sticky header + Section tabs with **Dishes** active. No category chips here. Content (white bg):

1. **Combo card from the owner** — small grey line `From the owner · Updated 2 days ago`, then a 358×200 image card (radius 16, dark gradient from left) with: chip `COMBO` (red), title **Dinner for 2 · $46** (22 bold white), sub `Dry pot + fish + 2 sides · save $12`, link `See all combos ›`. Image: `img/event.jpg`.
2. **Dish list** — 6 rows, each 128h: circular photo 96 (3px #F0F0F2 ring) · name 18 bold (wraps) · price 17 semibold right · tags row: `Signature` (black chip, white 12) + `1861 recommend` (orange chip #FFF1E8/#FE6A2C if ≥100, else grey #F2F2F4/#5E5F66) · quote 14 grey, 1 line ellipsis. 1px #F0F0F2 dividers.

| name | price | recs | quote | img |
|---|---|---|---|---|
| Dry Pot Lotus Root | $18.95 | 1861 | "Crispy outside, tender inside, house secret spice" | d/garlic-pork-belly.jpg |
| Spicy Frog | $22.95 | 128 | "Numbing-hot, fresh frog, stir-fried on high heat" | d/stone-frog.jpg |
| Boiled Fish in Chili Oil | $32.95 | 87 | "Layered chili broth, fresh fish, made to order" | d/marble-goby.jpg |
| Garlic Pork Belly | $12.95 | 36 | "Thin-sliced, garlic sauce, cold starter" | d/twice-cooked-pork.jpg |
| Mapo Beef Rib | $24.95 | 14 | "Rich, beef rib, slow-braised" | d/mapo-beef-rib.jpg |
| Cold Sesame Noodles | $9.95 | 10 | "Nutty, chewy, hand-pulled" | d/cold-noodles.jpg |

3. Bottom action bar — keep.

### 05 · Menu detail page (Figma 6b) — six category states

Full-screen page (not a sheet). Header: back chevron · title **Good Harvest · Menu** (17 semibold) centred. Then **Section tabs** `Overview · Dishes(active) · Combos · Reviews · More` and directly under them the **category chips** `Signature · Meat · Veg · Dessert · Snacks · Soup` (14; active = black pill #161823 white text, others #F1F1F2) — the two bars are one sticky block with a soft shadow (this is the Google-Maps two-level nav; the chips must *stick* under the tabs when the list scrolls). Below: dish rows exactly like 04. Tapping a chip swaps the list (no page change) and animates the pill.

Category data (same row format; tag column: `Popular` black, `Spicy` red #FE2C55, blank = no tag):

**Signature** = the 6 rows from 04 (tag `Signature`).

**Meat**
- Twice-Cooked Pork · $16.95 · Popular · 412 · "Smoky, fatty-lean belly, leek" · d/twice-cooked-pork.jpg
- Peppercorn Duck · $21.95 · Spicy · 233 · "Numbing Sichuan pepper, crispy skin" · d/peppercorn-duck.jpg
- Char Siu Beef · $19.95 · — · 188 · "Sweet glaze, sliced thin" · d/charsiu-beef.jpg
- Braised Pigeon Legs · $15.95 · — · 96 · "Fall-off-the-bone, soy braise" · d/pigeon-legs.jpg
- Mushroom Duck Stew · $22.95 · — · 74 · "Slow-cooked, earthy broth" · d/mushroom-duck.jpg

**Veg**
- Dry Pot Lotus Root · $18.95 · Popular · 1861 · "Crispy outside, tender inside" · d/garlic-pork-belly.jpg
- Garlic Edamame · $6.95 · — · 305 · "Salted, garlic, cold starter" · d/edamame.jpg
- Celery & Lily Bulb Stir-fry · $10.95 · — · 142 · "Light, crunchy, not spicy" · d/sea-cucumber-celery.jpg
- Mapo Tofu · $12.95 · Spicy · 527 · "Silky tofu, chili bean paste" · d/mapo-beef-rib.jpg

**Dessert**
- Egg Tart · $5.95 · Popular · 388 · "Flaky crust, warm custard" · d/foie-gras-tart.jpg
- Sesame Bun · $6.95 · — · 204 · "Soft, black-sesame filling" · d/sesame-bun.jpg
- Osmanthus Pastry · $5.95 · — · 119 · "Crumbly, floral, light sweet" · d/pastry.jpg
- Bird's Nest Pudding · $8.95 · — · 67 · "Chilled, coconut milk" · d/birdsnest-tower.jpg

**Snacks**
- Cold Sesame Noodles · $9.95 · Popular · 10 · "Nutty, chewy, hand-pulled" · d/cold-noodles.jpg
- Garlic Edamame · $6.95 · — · 305 · "Salted, garlic, cold starter" · d/edamame.jpg
- Claypot Rice · $13.95 · — · 156 · "Crispy bottom, sausage" · d/claypot-rice.jpg
- Garlic Crayfish (small) · $14.95 · Spicy · 221 · "Shell-on, garlic butter" · d/garlic-crayfish.jpg

**Soup**
- Yellow Croaker Soup · $18.95 · Popular · 173 · "Milky broth, pickled veg" · d/yellow-croaker.jpg
- Pickled Fish Soup · $19.95 · Spicy · 342 · "Sour-hot, tender fish" · d/marble-goby.jpg
- Stone Frog Soup · $22.95 · — · 88 · "Clear broth, ginger" · d/stone-frog.jpg
- Crab & Tofu Soup · $16.95 · — · 59 · "Sweet crab, soft tofu" · d/drunken-crab.jpg

Bottom action bar — keep.

### 06 · Getting there guide (Figma `164:25`)

Full page. Top: storefront hero photo 390×300 with dark scrim, back + share circles. White sheet (radius 20 top) from y=284:
- **Good Harvest** (24 bold) · `5150 Buford Hwy NE C-120, Doraville, GA 30340` (13.5 grey) + map pin right
- tabs `Restaurant` (active, red underline) · `Visitors` · right `Report` (grey) — 1px divider under
- 3 steps, each: red numbered badge 22 (white number), text 16 (2 lines), then photo 326×214 radius 12 indented 32; a 2px #E6E6E8 vertical connector runs from badge ① to ② and ② to ③ (timeline).
  1. `Take Exit 32 (Chamblee Tucker Rd) off I-285, head toward Buford Hwy` — img/route/exit-32.jpg
  2. `Turn into the Asian Square plaza — look for the tall pylon sign on Buford Hwy` — img/route/plaza-sign.jpg
  3. `Good Harvest is at the far end, suite C-120, under the blue tile roof` — img/route/storefront.jpg
- page scrolls; home indicator at bottom.

---

## 3. Interactions / motion (keep what exists, add the new)

- Keep: 01→02 shared-element morph (video shrinks to 147×228), sheet drag with velocity (half ↔ full ↔ close), wheel support, tab ink slide, scrollspy, hand-off sheets, app launch, "remember my choice", touch-dot cursor on desktop, `?skip=1` to skip intro, `R` to restart.
- **Tabs**: `Dishes` tab → crossfade sheet body to screen 04 (keep sticky header, ink slides to Dishes). Other tabs from 04 → back to 03 body and scroll to section.
- **Recommended "View all ›" / dish row tap** → push screen 05 (slide in from right, 320ms iOS curve). Back → pop.
- **Category chips** → swap list with 180ms fade; active pill animates; chips bar scrolls horizontally if overflow.
- **Sticky two-level nav** on 05: tabs + chips are `position: sticky; top: 0` inside the page scroller, with `box-shadow 0 2px 6px rgba(0,0,0,.06)` once scrolled.
- **"Find it ›"** → push screen 06. Back → pop.
- **Infinite feed**: IntersectionObserver on the spinner row; on intersect, wait 600ms, append 3 rows.
- Everything else tappable but not specified → `hint('Not in this demo')` toast.
- Respect `prefers-reduced-motion`.

---

## 4. Assets

Already in `img/`: feed video stills, review photos, avatars, logos, `store.jpg`.
Already in `img/d/`: `garlic-pork-belly.jpg`, `stone-frog.jpg` (110px, low-res — replace when the full set arrives).

**Needed (Jamie will drop a folder in):** export from Figma Assets page (`21:100`):
- `meituan/*` 26 dish images → save as `img/d/<name>.jpg` at 1x (240×180 is fine; display is ≤96px)
- `route/exit-32`, `route/plaza-sign`, `route/storefront` → `img/route/*.jpg` at 2x
- `event/halloween-week` → `img/event.jpg` at 2x

Until they arrive, fall back to existing `img/*.jpg` so the build is never broken.

Icons: all inline SVG (there is an `ICON` map in `app.js`; add: heart, hourglass, walk, car, phone, mall, store, thumbs-up, pin-multicolor). No emoji as UI.

---

## 5. Visual tokens

```
font: "TikTok Sans", -apple-system, sans-serif (Google Fonts link already in index.html)
ink #161823 · sub #8A8B91 · name #5C5C66 · line #E3E3E4 · fill2 #F1F1F2 · sheet-bg #F1F1F2
brand #FE2C55 · orange #FE6A2C (recs) · green #0BB07B (Open) · teal #2E8B8B (drive / wait)
card: white, radius 16, padding 16, gap 12 between cards, 16 side margin
section title 16 bold · "View all ›" 13 regular grey · body 14/20 · meta 12–13 grey
```

---

## 6. Done = 

- [ ] All 6 screens reachable from the flow above; back always returns to where you came from
- [ ] Half sheet shows capsule + 4 tiles + 3 reviews above the fold (390×844)
- [ ] Dishes tab, Menu page × 6 categories, Guide page match the Figma frames side by side
- [ ] No horizontal overflow at 390; nothing clipped at the right edge
- [ ] Works with mouse (drag/wheel) and touch; Playwright screenshot of each screen committed to `shots/`
- [ ] `index.html` opens from GitHub Pages: `https://jamiechou2004.github.io/tiktok-test-demo/`
- [ ] Commit with a clear message; don't delete the old 03 dish feed code (just unused paths are fine)
