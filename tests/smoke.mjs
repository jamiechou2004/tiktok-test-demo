import {chromium,webkit} from 'playwright';
import assert from 'node:assert/strict';
const base=process.env.PREVIEW_URL||'http://127.0.0.1:5193/';
for(const [name,engine] of [['desktop',chromium],['mobile',webkit]]) {
 const b=await engine.launch();const p=await b.newPage({viewport:{width:390,height:844},isMobile:name==='mobile',hasTouch:name==='mobile'});const errors=[];p.on('pageerror',e=>errors.push(e.message));
 await p.goto(base+'?skip=1');await p.locator('#feed.on').waitFor();
 const shot=async title=>{await p.evaluate(()=>Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))));await p.mouse.move(-10,-10);await p.waitForTimeout(220);await p.screenshot({path:`shots/${name}-${title}.png`});};
 await shot('01-feed');await p.locator('[data-act="openPlace"]').click();await p.waitForTimeout(600);await shot('02-half');
 assert.equal(await p.locator('#reviews .review').count(),3);
 await p.locator('#dishRow .dish-name').first().click();await p.locator('#dish.on').waitFor();await p.waitForTimeout(400);await shot('07-dish');
 await p.locator('#dish [data-act="pop"]').click();await p.waitForTimeout(400);
 await p.locator('#sec-dishes .all').click();await p.locator('#menu.on').waitFor();await p.waitForTimeout(350);
 for(const [cat,n] of [['Signature',6],['Meat',5],['Veg',3],['Dessert',4],['Snacks',2],['Soup',4]]){await p.locator(`[data-category="${cat}"]`).click();await p.waitForTimeout(600);assert.equal(await p.locator(`#m-${cat} .menu-dish`).count(),n);assert.equal(await p.locator('.category-chips .on').textContent(),cat);await shot('05-menu-'+cat.toLowerCase());}
 await p.locator('#menu [data-act="pop"]').click();await p.waitForTimeout(350);await p.locator('#place.on:not(.full)').waitFor();
 await p.locator('#sheet').dispatchEvent('wheel',{deltaY:90});await p.waitForTimeout(550);await p.locator('#place.full').waitFor();await shot('03-overview');
 await p.locator('#tabs [data-sec="dishes"]').click();await p.waitForTimeout(900);assert.equal(await p.locator('#dishesTab').isHidden(),true);assert.equal(await p.locator('#place.dishes-mode').count(),0);await shot('04-dishes');
 await p.locator('#tabs [data-sec="overview"]').click();await p.locator('[data-act="guide"]').click();await p.waitForTimeout(350);await shot('06-guide');assert.equal(await p.locator('.guide-steps li').count(),3);
 await p.locator('.guide-scroll').evaluate(el=>el.scrollTop=el.scrollHeight);await shot('06-guide-bottom');await p.locator('.guide-scroll').evaluate(el=>el.scrollTop=0);await p.locator('#guide [data-act="pop"]').click();await p.waitForTimeout(350);
 await p.locator('#sheetScroll').evaluate(el=>el.scrollTop=el.scrollHeight);await p.waitForTimeout(900);assert.ok(await p.locator('.nearby-row').count()>=9);await shot('03-nearby');
 await p.locator('#place .action-bar [data-act="ride"]').click();await p.locator('#sheetRide.on').waitFor();await p.locator('#sheetRide [data-act="closeSheet"]').click();
 assert.deepEqual(errors,[]);assert.equal(await p.locator('img[data-fallback]').count(),0);assert.equal(await p.locator('#menuList').evaluate(el=>el.scrollWidth<=390),true);console.log(name,'passed');await b.close();
}
