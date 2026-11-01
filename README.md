# Dish Proof · TikTok Local Dining concept demo

Clickable high-fidelity prototype for a TikTok product design challenge (Task 2: Innovate Local-Service Experiences).

**Idea:** tap a dish to swipe through recent videos of that exact dish, then get directions or a ride in one tap — without leaving TikTok.

Flow: For You video → place half-sheet → dish video feed (swipe up) → Guide me there / Get a ride → hand-off.

Concept prototype for a design challenge. Not an official TikTok product. Prices and times are illustrative.


## Public prototype

https://jamiechou2004.github.io/tiktok-test-demo/

## Final POI flow (v2)

Feed → place half sheet → full Overview / Dishes → full Menu (Signature, Meat, Veg, Dessert, Snacks, Soup). Find it opens the three-step getting-there guide. Back returns to the source page and scroll position. Recommendations load three additional places at a time. Existing video feed and simulated map/ride hand-offs remain available.

All UI copy is English. The v2 brief overrides Figma's older Halloween copy with Dinner for 2, and requests a titled Menu header. Exact Figma exports are stored locally in img/figma. The four Soup photos use existing dish imagery as the brief permits pending the complete asset folder; no missing image requests are required. Feed “videos” remain animated stills from the existing demo, not actual video playback. No real booking or navigation is performed.

The half sheet's available 506px content area cannot simultaneously fit the specified header, 4 dishes and three full reviews at their requested sizes. All three reviews are retained and reachable by expanding/scrolling the sheet; content is not shrunk to force it into one screen.

## Verify

Run `npm install`, `npx playwright install chromium webkit`, then `npm run dev` and `npm test` in another terminal. Tests exercise both browser engines at 390×844 and save screenshots of all screens and categories to `shots/`. Optional `PREVIEW_URL` points tests at a deployed URL.
