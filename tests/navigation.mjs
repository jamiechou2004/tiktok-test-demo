import {chromium,webkit} from 'playwright';
import assert from 'node:assert/strict';
for(const engine of [chromium,webkit]) {
const b=await engine.launch(); const p=await b.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
await p.goto((process.env.PREVIEW_URL||'http://127.0.0.1:5193/')+'?skip=1');
await p.locator('[data-act="openPlace"]').click();await p.waitForTimeout(100);
await p.locator('#sec-dishes .all').click();await p.locator('#place.full.dishes-mode').waitFor();
assert.equal(await p.locator('#dishesList .menu-dish').count(),6);
assert.equal(await p.locator('#menu.on').count(),0);
await p.locator('#tabs [data-sec="more"]').click();await p.waitForTimeout(100);
assert.equal(await p.locator('#tabs [data-sec="more"]').getAttribute('class'),'on');
assert.ok(await p.locator('#sec-nearby').evaluate(e=>{const r=e.getBoundingClientRect();return r.top>=90&&r.top<200}));
await p.locator('#tabs [data-sec="overview"]').click();await p.locator('#sec-dishes .all').click();await p.locator('#dishesList .menu-dish-info').first().click();
await p.locator('#menu.on').waitFor();await p.locator('#menu [data-page-tab="more"]').click();await p.locator('#place.on').waitFor();
assert.equal(await p.locator('#tabs [data-sec="more"]').getAttribute('class'),'on');
console.log(engine.name(),'navigation passed');await b.close();
}
