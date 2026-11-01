(function () {
  'use strict';

  /* ---------------- icons (exported from Figma components) ---------------- */
  const G = (id, a, b) => `<linearGradient id="${id}" x1="12" y1="${a}" x2="12" y2="${b}" gradientUnits="userSpaceOnUse"><stop stop-color="#EA4359"/><stop offset="1" stop-color="#EC9EEB"/></linearGradient>`;
  const ICON = {
    back: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 4.5L7.5 12L15 19.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    bookmark: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 3H17C17.83 3 18.5 3.67 18.5 4.5V20.3C18.5 20.71 18.03 20.95 17.7 20.7L12 16.5L6.3 20.7C5.97 20.95 5.5 20.71 5.5 20.3V4.5C5.5 3.67 6.17 3 7 3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    share: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13.6 4.2L21 11.4L13.6 18.6V14.5C8.2 14.5 5.2 16.4 3 19.6C3.5 13.7 7.4 9.6 13.6 8.9V4.2Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    more: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><circle cx="5.5" cy="12" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="18.5" cy="12" r="1.9"/></svg>',
    star: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3.3L14.4 8.2L19.8 9L15.9 12.8L16.8 18.2L12 15.6L7.2 18.2L8.1 12.8L4.2 9L9.6 8.2L12 3.3Z" fill="#E94359" stroke="#E94359" stroke-width="2.6" stroke-linejoin="round"/><path d="M9.3 11.6C10.8 12.9 13.2 12.9 14.7 11.6" stroke="white" stroke-width="1.6" stroke-linecap="round"/></svg>',
    chev: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 5.5L15.5 12L9 18.5" stroke="#8A8B91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    pin: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs><linearGradient id="gpin" x1="4" y1="3" x2="20" y2="20" gradientUnits="userSpaceOnUse"><stop stop-color="#4A96DB"/><stop offset=".35" stop-color="#59BC6B"/><stop offset=".7" stop-color="#F2C230"/><stop offset="1" stop-color="#DB5F77"/></linearGradient></defs><path fill-rule="evenodd" d="M12 2C7.8 2 4.4 5.4 4.4 9.6C4.4 15 10.7 21.3 11.4 22C11.73 22.33 12.27 22.33 12.6 22C13.3 21.3 19.6 15 19.6 9.6C19.6 5.4 16.2 2 12 2ZM12 6.2C13.88 6.2 15.4 7.72 15.4 9.6C15.4 11.48 13.88 13 12 13C10.12 13 8.6 11.48 8.6 9.6C8.6 7.72 10.12 6.2 12 6.2Z" fill="url(#gpin)"/></svg>',
    website: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs>${G('gw', 4, 20)}</defs><path d="M10.5 13.5C11.9 14.9 14.2 14.9 15.6 13.5L18.7 10.4C20.1 9 20.1 6.7 18.7 5.3C17.3 3.9 15 3.9 13.6 5.3L12.7 6.2M13.5 10.5C12.1 9.1 9.8 9.1 8.4 10.5L5.3 13.6C3.9 15 3.9 17.3 5.3 18.7C6.7 20.1 9 20.1 10.4 18.7L11.3 17.8" stroke="url(#gw)" stroke-width="2.6" stroke-linecap="round"/><path d="M10 14L14 10" stroke="url(#gw)" stroke-width="2.6" stroke-linecap="round"/></svg>`,
    map: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs>${G('gm', 2.5, 21)}</defs><path fill-rule="evenodd" d="M12 2.5C8.96 2.5 6.5 4.96 6.5 8C6.5 11.5 10.3 15.4 11.5 16.6C11.8 16.9 12.2 16.9 12.5 16.6C13.7 15.4 17.5 11.5 17.5 8C17.5 4.96 15.04 2.5 12 2.5ZM12 5.9C13.16 5.9 14.1 6.84 14.1 8C14.1 9.16 13.16 10.1 12 10.1C10.84 10.1 9.9 9.16 9.9 8C9.9 6.84 10.84 5.9 12 5.9Z" fill="url(#gm)"/><path d="M6.4 13.6H8.3C9.4 15.2 10.7 16.5 11.2 17C11.6 17.4 12.4 17.4 12.8 17C13.3 16.5 14.6 15.2 15.7 13.6H17.6C18.1 13.6 18.5 13.9 18.6 14.4L20 19.8C20.2 20.4 19.7 21 19.1 21H4.9C4.3 21 3.8 20.4 4 19.8L5.4 14.4C5.5 13.9 5.9 13.6 6.4 13.6Z" fill="url(#gm)"/></svg>`,
    call: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs>${G('gc', 2.7, 21.1)}</defs><path d="M7.4 2.9C8.3 2.4 9.4 2.7 9.9 3.6L11.6 6.6C12 7.4 11.9 8.3 11.3 8.9L9.9 10.3C10.9 12.5 12.7 14.3 14.9 15.3L16.3 13.9C16.9 13.3 17.8 13.2 18.6 13.6L21.6 15.3C22.5 15.8 22.8 16.9 22.3 17.8L21.4 19.4C20.6 20.8 19 21.4 17.5 21C10.9 19.3 5.4 13.8 3.7 7.2C3.3 5.7 3.9 4.1 5.3 3.3L7.4 2.9Z" fill="url(#gc)"/></svg>`,
    review: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><defs>${G('gr', 3.4, 21)}</defs><path d="M14.3 6.6L17.4 9.7L9.5 17.6C8.5 18.6 7.2 19.2 5.8 19.4L4.2 19.6L4.4 18C4.6 16.6 5.2 15.3 6.2 14.3L14.3 6.6Z" fill="url(#gr)"/><path d="M15.7 5.2L17.1 3.8C17.68 3.23 18.62 3.23 19.2 3.8L20.2 4.8C20.77 5.38 20.77 6.32 20.2 6.9L18.8 8.3L15.7 5.2Z" fill="url(#gr)"/><path d="M11.5 20H19.5" stroke="url(#gr)" stroke-width="2" stroke-linecap="round"/></svg>`,
    playw: '<svg width="12" height="12" viewBox="0 0 24 24"><path d="M7.5 6.2C7.5 5.1 8.7 4.4 9.7 5L18.3 10.4C19.2 11 19.2 12.3 18.3 12.9L9.7 18.3C8.7 18.9 7.5 18.2 7.5 17.1V6.2Z" fill="#fff"/></svg>',
    close: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M18 6L6 18" stroke="#161823" stroke-width="2.2" stroke-linecap="round"/></svg>',
    check: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5.5 12.5L10 17L18.5 7.5" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    arrow: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4.5 12H19M13 18L19 12L13 6" stroke="#8A8B91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    like: '<svg width="34" height="34" viewBox="0 0 34 34" style="filter:drop-shadow(0 1px 1.5px rgba(0,0,0,.3))"><path d="M18.58 29.17C18.58 29.17 9.5 22.01 5.96 15.35C3.69 10.68 6.39 5.15 11.63 5.15C14.6 5.15 16.44 6.71 17.29 8.13C18.14 6.71 19.99 5.15 22.96 5.15C28.2 5.15 30.89 10.68 28.63 15.35C22.96 24.02 18.58 29.17 18.58 29.17Z" fill="white"/></svg>',
    comment: '<svg width="34" height="34" viewBox="0 0 34 34" style="filter:drop-shadow(0 1px 1.5px rgba(0,0,0,.3))"><path d="M17 4.25C9.21 4.25 2.83 9.35 2.83 15.58C2.83 18.98 4.68 21.96 7.65 24.08L6.38 29.75L12.61 26.63C14.03 27.06 15.44 27.2 17 27.2C24.79 27.2 31.17 22.1 31.17 15.73C31.17 9.35 24.79 4.25 17 4.25Z" fill="white"/></svg>',
    fav: '<svg width="34" height="34" viewBox="0 0 34 34" style="filter:drop-shadow(0 1px 1.5px rgba(0,0,0,.3))"><path d="M8.5 3.54H25.5C26.28 3.54 26.92 4.18 26.92 4.96V29.75L17 23.8L7.08 29.75V4.96C7.08 4.18 7.72 3.54 8.5 3.54Z" fill="white"/></svg>',
    share2: '<svg width="34" height="34" viewBox="0 0 34 34" style="filter:drop-shadow(0 1px 1.5px rgba(0,0,0,.3))"><path d="M18.42 5.67L31.17 17L18.42 28.33V21.25C9.92 21.25 4.96 24.08 2.83 28.33C3.54 19.83 8.5 13.46 18.42 12.75V5.67Z" fill="white"/></svg>',
    music: '<svg width="13" height="13" viewBox="0 0 13 13"><path fill-rule="evenodd" d="M4.88 9.75C4.89 10.63 4.17 11.36 3.29 11.38C2.41 11.4 1.66 10.7 1.63 9.82C1.6 8.94 2.29 8.2 3.16 8.15C3.38 8.14 3.59 8.17 3.79 8.23V2.71L10.29 1.63V7.58C10.3 8.46 9.58 9.19 8.7 9.21C7.82 9.23 7.07 8.53 7.04 7.65C7.01 6.77 7.7 6.03 8.57 5.98C8.79 5.97 9 6 9.21 6.07V3.52L4.88 4.23V9.75Z" fill="white"/></svg>',
    plus: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3.5V10.5M3.5 7H10.5" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>',
    home: '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M3 10.5L12 3L21 10.5V21H15V15H9V21H3V10.5Z" fill="white"/></svg>',
    friends: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g opacity=".7"><path d="M2.5 20C3 16.5 5.7 14 9 14C12.3 14 15 16.5 15.5 20M16 4.5C17.66 4.5 19 5.84 19 7.5C19 9.16 17.66 10.5 16 10.5M18 14C20 14.6 21.3 16.6 21.5 19M9 11C10.93 11 12.5 9.43 12.5 7.5C12.5 5.57 10.93 4 9 4C7.07 4 5.5 5.57 5.5 7.5C5.5 9.43 7.07 11 9 11Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
    create: '<svg width="44" height="30" viewBox="0 0 44 30" fill="none"><rect width="44" height="30" rx="8" fill="white"/><path d="M22 10.5V19.5M17.5 15H26.5" stroke="black" stroke-width="3" stroke-linecap="round"/></svg>',
    inbox: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g opacity=".7"><path d="M4 5H20V16H14L12 19L10 16H4V5Z" stroke="white" stroke-width="1.8" stroke-linejoin="round"/></g></svg>',
    profile: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><g opacity=".7"><path d="M4 21C4.8 17 8 14.5 12 14.5C16 14.5 19.2 17 20 21M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" stroke="white" stroke-width="1.8" stroke-linecap="round"/></g></svg>',
    search: '<svg width="25" height="26" viewBox="0 0 25 26" fill="none" style="filter:drop-shadow(0 1px 1.5px rgba(0,0,0,.3))"><path d="M20.6 20.5L16.1 16M11.1 4C7.23 4 4.1 7.13 4.1 11C4.1 14.87 7.23 18 11.1 18C14.97 18 18.1 14.87 18.1 11C18.1 7.13 14.97 4 11.1 4Z" stroke="white" stroke-width="2.2" stroke-linecap="round"/></svg>',
    live: '<svg width="26" height="24" viewBox="0 0 26 24" fill="none"><path d="M9.43 1.46L12.9 4.74M16.41 1.46L13.42 4.74" stroke="white" stroke-width="1.36" stroke-linecap="round"/><path d="M2.95 7.46V5.94C2.95 5.45 3.34 5.06 3.82 5.06H22.02C22.5 5.06 22.89 5.45 22.89 5.94V7.46M2.95 19.78V21.5C2.95 21.99 3.34 22.38 3.82 22.38H22.02C22.5 22.38 22.89 21.99 22.89 21.5V19.78" stroke="white" stroke-width="1.36" stroke-linecap="round"/><path d="M2.62 11.22V16.86H6.19M8.46 11.22V16.86M10.5 11.22L13.19 16.86L15.89 11.22M23.38 11.22H18.58V16.86H23.38M18.58 14.04H22.73" stroke="white" stroke-width="1.82" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    anchor: '<svg width="19" height="19" viewBox="0 0 19 19" fill="none"><rect width="19" height="19" rx="4" fill="#33B873"/><path d="M9.5 14.38C9.5 14.38 12.75 11.34 12.75 8.69C12.75 6.89 11.3 5.44 9.5 5.44C7.7 5.44 6.25 6.89 6.25 8.69C6.25 11.34 9.5 14.38 9.5 14.38Z" stroke="white" stroke-width="2.2"/><circle cx="9.5" cy="8.69" r="1.19" fill="white"/></svg>',
    redpin: '<svg width="12" height="12" viewBox="0 0 12 12"><path d="M6 1C4.07 1 2.5 2.57 2.5 4.5C2.5 7.13 6 11 6 11C6 11 9.5 7.13 9.5 4.5C9.5 2.57 7.93 1 6 1Z" fill="#E8323C"/></svg>',
    signal: '<svg width="18" height="12" viewBox="0 0 18 12" fill="white"><rect x="0" y="7.5" width="3" height="4.5" rx="1"/><rect x="5" y="5" width="3" height="7" rx="1"/><rect x="10" y="2.5" width="3" height="9.5" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>',
    wifi: '<svg width="16" height="12" viewBox="0 0 16 12" fill="white"><path d="M8 2.3c2.3 0 4.4.9 6 2.4l1.1-1.2C13.2 1.6 10.7.6 8 .6S2.8 1.6.9 3.5L2 4.7c1.6-1.5 3.7-2.4 6-2.4zm0 3.4c1.4 0 2.6.5 3.6 1.4l1.1-1.2C11.4 4.7 9.8 4 8 4s-3.4.7-4.7 1.9l1.1 1.2c1-.9 2.2-1.4 3.6-1.4zm0 3.4c.5 0 1 .2 1.3.5L8 11.4 6.7 9.6c.3-.3.8-.5 1.3-.5z"/></svg>',
    battery: '<svg width="27" height="13" viewBox="0 0 27 13" fill="none"><rect x=".5" y=".5" width="22" height="12" rx="3.5" stroke="white" opacity=".4"/><rect x="2" y="2" width="19" height="9" rx="2" fill="white"/><path d="M24 4.5v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2z" fill="white" opacity=".4"/></svg>'
  };

  // rounded review star (same geometry as the Figma "Icon/Review star" component)
  function starPath() {
    const cx = 6.5, cy = 7, R = 6, r = R * 0.48, dO = 1.5, dI = 0.55, v = [];
    for (let i = 0; i < 10; i++) { const a = (-90 + i * 36) * Math.PI / 180, rr = i % 2 ? r : R; v.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)]); }
    let p = '';
    for (let i = 0; i < 10; i++) {
      const c = v[i], pr = v[(i + 9) % 10], nx = v[(i + 1) % 10], d = i % 2 ? dI : dO;
      const l1 = Math.hypot(pr[0] - c[0], pr[1] - c[1]), l2 = Math.hypot(nx[0] - c[0], nx[1] - c[1]);
      const a = [c[0] + (pr[0] - c[0]) * d / l1, c[1] + (pr[1] - c[1]) * d / l1], b = [c[0] + (nx[0] - c[0]) * d / l2, c[1] + (nx[1] - c[1]) * d / l2];
      p += (i ? 'L' : 'M') + a[0].toFixed(2) + ' ' + a[1].toFixed(2) + 'Q' + c[0].toFixed(2) + ' ' + c[1].toFixed(2) + ' ' + b[0].toFixed(2) + ' ' + b[1].toFixed(2);
    }
    return p + 'Z';
  }
  const STAR = `<svg width="13" height="13" viewBox="0 0 13 13"><path d="${starPath()}" fill="#F7B500"/></svg>`;
  const stars = n => `<div class="stars">${STAR.repeat(n)}</div>`;

  const paintIcons = (root) => root.querySelectorAll('.ic[data-i]').forEach(el => { if (!el.firstChild) el.innerHTML = ICON[el.dataset.i] || ''; });

  /* ---------------- content ---------------- */
  const DISHES = [
    { name: 'Mala Dry Pot', n: 41, img: 'img/mala-full.jpg' },
    { name: 'Spicy Frog', n: 18, img: 'img/frog-full.jpg', feed: true },
    { name: 'Hot Pot', n: 27, img: 'img/hotpot.jpg' },
    { name: 'Lunch Special', n: 12, img: 'img/lunch.jpg' }
  ];
  const VIDEOS = [
    { img: 'img/frog-full.jpg', when: '2 days ago', feed: 0 },
    { img: 'img/mala-full.jpg', when: '3 days ago', paid: true },
    { img: 'img/hotpot.jpg', when: '5 days ago' },
    { img: 'img/lunch.jpg', when: '1 week ago' },
    { img: 'img/dandan.jpg', when: '1 week ago' },
    { img: 'img/lamb.jpg', when: '2 weeks ago' }
  ];
  const REVIEWS = [
    { who: 'Eaternally Happy', av: 'img/a_eat.jpg', date: 'Jun 21, 2026 · Post', pin: true,
      text: 'Good Harvest - Doraville, GA&nbsp; They specializes in authentic Sichuan hot pots, dry pots, and traditional Chinese cuisine. Food was very good!&nbsp; We ord… more',
      media: [{ v: 'img/dandan.jpg' }] },
    { who: 'Lil Nisa', av: 'img/a_nisa.jpg', date: 'Sep 27, 2026 · Review', lv: ['Lv.1', '#FFF4DA', '#C98A1B'], stars: 5,
      text: 'This was my first time trying K-pot style food &amp; boy was is amazing!!! me and my friend made a hour trip and were not disappointed whatsoever! with a… more',
      media: [{ p: 'img/table.jpg' }, { p: 'img/closeup-thumb.jpg' }] },
    { who: 'Vanesa Beltran', av: 'img/a_van.jpg', date: 'Jun 12, 2026 · Post',
      text: 'Tried a new spot ! Recommend 9/10 need to come back and try out more from their menu', media: [{ v: 'img/hotpot.jpg' }] },
    { who: 'averysabile', av: 'img/a_avery.jpg', date: 'Oct 5, 2026 · Post',
      text: 'Dinner at Good Harvest in Doraville', media: [{ v: 'img/lamb.jpg' }] },
    { who: 'tray | chicago foodie', av: 'img/a_tray.jpg', date: 'Jan 14, 2026 · Review', lv: ['Lv.5', '#FFEBDD', '#E0661B'], stars: 5,
      text: 'I’ve been here so many times and that alone says everything. They seriously have some of the best frog and charpati around. The pineapple charpati w… more' }
  ];
  const FEED = [
    { img: 'img/frog-full.jpg', av: 'img/a_atl.jpg', user: 'atl_eats', when: '2 days ago', cap: 'the spicy frog here is no joke 🌶️ go hungry #doraville #atlantafood', counts: ['24.1K', '812', '3,204', '1,206'], played: 40 },
    { img: 'img/closeup-full.jpg', av: 'img/a_nisa.jpg', user: 'lilnisa', when: '5 days ago', cap: 'came back for the frog and it’s still this good. get it extra spicy #doraville #sichuanfood', counts: ['8,931', '204', '1,120', '388'], played: 96 },
    { img: 'img/frog2-full.jpg', av: 'img/a_tray.jpg', user: 'tray.eats', when: '1 week ago', cap: 'the spicy frog at Good Harvest is worth the drive #atlantafood #doraville', counts: ['41.2K', '1,503', '6,870', '2,114'], paid: true, played: 150 }
  ];

  const rail = (av, c) => `
    <div class="creator"><img src="${av}" alt=""><span class="follow">${ICON.plus}</span></div>
    <div class="act">${ICON.like}${c[0]}</div>
    <div class="act">${ICON.comment}${c[1]}</div>
    <div class="act">${ICON.fav}${c[2]}</div>
    <div class="act">${ICON.share2}${c[3]}</div>
    <div class="disc"></div>`;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // 01 rail
  const r01 = $('#feed .rail');
  r01.innerHTML = rail(r01.dataset.avatar, ['24.1K', '812', '3,204', '1,206']);

  // dishes
  $('#dishRow').innerHTML = DISHES.map((d, i) => `
    <div class="dish${i === 0 ? ' current' : ''}" data-dish="${i}">
      <div class="ph" style="background-image:url(${d.img})"></div>
      <b>${d.name}</b><span>${d.n} videos</span>
    </div>`).join('');

  // video grid
  $('#vgrid').innerHTML = VIDEOS.map((v, i) => `
    <div class="vtile" data-vid="${i}" style="background-image:url(${v.img})">
      ${v.paid ? '<span class="chip">Paid partnership</span>' : ''}
      <span class="meta">${ICON.playw}${v.when}</span>
    </div>`).join('');

  // reviews
  $('#reviews').innerHTML = REVIEWS.map(r => `
    <div class="review">
      <div class="rv-head"><img src="${r.av}" alt="">
        <div><div class="rv-name">${r.who}${r.lv ? `<span class="lv" style="background:${r.lv[1]};color:${r.lv[2]}">${r.lv[0]}</span>` : ''}</div><div class="rv-date">${r.date}</div></div>
      </div>
      ${r.stars ? stars(r.stars) : ''}
      <div class="rv-text">${r.pin ? ICON.redpin : ''}<span>${r.text}</span></div>
      ${r.media ? `<div class="rv-media">${r.media.map(m => m.v ? `<div class="v" style="background-image:url(${m.v})"><span class="ic">${ICON.playw}</span></div>` : `<div class="p" style="background-image:url(${m.p})"></div>`).join('')}</div>` : ''}
    </div>`).join('');

  // dish feed
  $('#dfScroll').innerHTML = FEED.map(f => `
    <div class="df-item">
      <img src="${f.img}" alt="">
      <div class="grad"></div>
      <div class="info">
        <div class="user">${f.user} <span class="when">· ${f.when}</span></div>
        <p class="caption">${f.cap}</p>
        ${f.paid ? '<span class="paid">Paid partnership</span>' : ''}
        <div class="sound">${ICON.music}original sound - ${f.user}</div>
      </div>
      <div class="rail">${rail(f.av, f.counts)}</div>
      <div class="track"><i style="width:${f.played}px"></i></div>
    </div>`).join('');

  paintIcons(document);

  /* ---------------- phone scaling ---------------- */
  const phone = $('#phone');
  const fit = () => {
    const pad = window.innerWidth >= 600 ? 0.92 : 1;
    const s = Math.min(window.innerWidth / 390, window.innerHeight / 844) * pad;
    phone.style.transform = `scale(${s})`;
  };
  window.addEventListener('resize', fit); fit();
  const scale = () => phone.getBoundingClientRect().height / 844;

  /* ---------------- state ---------------- */
  const S = { screen: 'feed', mode: 'half', remember: true, choice: { dir: null, ride: null }, sheet: null, from: 'place' };
  const place = $('#place'), sheet = $('#sheet'), scroller = $('#sheetScroll');

  function show(id) {
    $$('.screen').forEach(s => s.classList.toggle('on', s.id === id));
    S.screen = id;
    $('#homeInd').classList.toggle('dark', id === 'place' || !!S.sheet);
  }
  function setMode(m) {
    S.mode = m;
    place.classList.toggle('full', m === 'full');
    sheet.style.top = '';
    scroller.scrollTop = 0;
    setTab('overview');
  }
  function openPlace() {
    setMode('half');
    show('place');
    sheet.classList.add('dragging'); sheet.style.top = '844px';
    requestAnimationFrame(() => requestAnimationFrame(() => { sheet.classList.remove('dragging'); sheet.style.top = ''; }));
  }
  function closePlace() {
    sheet.style.top = '844px';
    setTimeout(() => { show('feed'); sheet.style.top = ''; }, 300);
  }

  /* sheet drag (half mode) + pull-down (full mode at top) */
  let drag = null;
  sheet.addEventListener('pointerdown', e => {
    drag = { x: e.clientX, y: e.clientY, t0: sheet.getBoundingClientRect().top, startTop: scroller.scrollTop, moved: false };
  });
  window.addEventListener('pointermove', e => {
    if (!drag) return;
    const dy = (e.clientY - drag.y) / scale(), dx = (e.clientX - drag.x) / scale();
    if (!drag.moved && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) { drag = null; return; }
    if (Math.abs(dy) > 6) drag.moved = true;
    if (S.mode === 'half' && drag.moved) {
      sheet.classList.add('dragging');
      sheet.style.top = Math.max(100, Math.min(844, 228 + dy)) + 'px';
    }
  });
  window.addEventListener('pointerup', e => {
    if (!drag) return;
    const dy = (e.clientY - drag.y) / scale(), d = drag; drag = null;
    sheet.classList.remove('dragging');
    if (!d.moved) { sheet.style.top = ''; return; }
    suppressClick();
    if (S.mode === 'half') {
      if (dy < -50) { sheet.style.top = ''; setMode('full'); }
      else if (dy > 90) closePlace();
      else sheet.style.top = '';
    } else if (d.startTop <= 0 && scroller.scrollTop <= 0 && dy > 70) {
      setMode('half');
    }
  });
  window.addEventListener('pointercancel', () => { if (drag && S.mode==='half') sheet.style.top=''; drag = null; sheet.classList.remove('dragging'); });
  // wheel / trackpad: expand in half mode, collapse when pulled at top in full mode
  let wheelLock = 0;
  sheet.addEventListener('wheel', e => {
    if (Date.now() < wheelLock) return;
    if (S.mode === 'half' && e.deltaY > 12) { wheelLock = Date.now() + 500; setMode('full'); }
    else if (S.mode === 'half' && e.deltaY < -12) { wheelLock = Date.now() + 500; closePlace(); }
    else if (S.mode === 'full' && scroller.scrollTop <= 0 && e.deltaY < -30) { wheelLock = Date.now() + 500; setMode('half'); }
  }, { passive: true });

  /* tabs + scrollspy */
  function setTab(sec) { $$('#tabs button').forEach(b => b.classList.toggle('on', b.dataset.sec === sec)); }
  $('#tabs').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const target = $('#sec-' + b.dataset.sec);
    scroller.scrollTo({ top: b.dataset.sec === 'overview' ? 0 : target.offsetTop - 4, behavior: 'smooth' });
    setTab(b.dataset.sec);
  });
  scroller.addEventListener('scroll', () => {
    if (S.mode !== 'full') return;
    const y = scroller.scrollTop + 60;
    let cur = 'overview';
    ['dishes', 'videos', 'reviews'].forEach(s => { if ($('#sec-' + s).offsetTop <= y) cur = s; });
    if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 4) cur = 'reviews';
    setTab(cur);
  });

  /* dish feed */
  const df = $('#dfScroll');
  function openFeed(i) {
    S.from = S.screen;
    show('dishfeed');
    df.scrollTop = (i || 0) * 696;
    updateFeedTitle();
    const f = $('#dishfeed'); f.classList.remove('peek'); void f.offsetWidth; if (!i) f.classList.add('peek');
  }
  function updateFeedTitle() {
    const i = Math.round(df.scrollTop / 696);
    $('#dfIdx').textContent = (i + 1) + ' / 18 · Good Harvest';
  }
  df.addEventListener('scroll', updateFeedTitle, { passive: true });
  // mouse drag support for desktop testers
  let fdrag = null;
  df.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') fdrag = { y: e.clientY, top: df.scrollTop }; });
  window.addEventListener('pointerup', e => {
    if (!fdrag) return;
    const dy = (e.clientY - fdrag.y) / scale(); const start = fdrag.top; fdrag = null;
    if (Math.abs(dy) > 40) { const i = Math.round(start / 696) + (dy < 0 ? 1 : -1); df.scrollTo({ top: Math.max(0, Math.min(2, i)) * 696, behavior: 'smooth' }); suppressClick(); }
  });

  /* hand-off */
  function paintRemembered() {
    const d = S.choice.dir, r = S.choice.ride;
    $$('.gsub').forEach(e => e.textContent = d ? '18 min drive · ' + d : '18 min drive');
    $$('.rsub').forEach(e => e.textContent = r ? (r === 'Lyft' ? '$20 · Lyft' : '$22 · Uber') : 'from $20 · Uber / Lyft');
  }
  function openSheet(kind) {
    if (S.choice[kind]) { handoff(kind, S.choice[kind]); return; }
    S.sheet = kind;
    const el = $(kind === 'dir' ? '#sheetDir' : '#sheetRide');
    el.classList.toggle('unchecked', !S.remember);
    $('#dim').classList.add('on'); el.classList.add('on');
    $('#homeInd').classList.add('dark');
  }
  function closeSheet(cb) {
    if (!S.sheet) { cb && cb(); return; }
    $('#dim').classList.remove('on'); $$('.psheet').forEach(p => p.classList.remove('on'));
    S.sheet = null;
    $('#homeInd').classList.toggle('dark', S.screen === 'place');
    setTimeout(() => cb && cb(), 260);
  }
  function handoff(kind, app) {
    $('#toastText').textContent = 'Opening ' + app + '…';
    $('#toast').classList.add('on');
    setTimeout(() => {
      $('#toast').classList.remove('on');
      $('#endTitle').textContent = 'Handing off to ' + app;
      $('#endBody').textContent = kind === 'dir'
        ? app + ' opens with Good Harvest already set as the destination. About 18 min by car.'
        : app + ' opens with pickup at your location and Good Harvest as the drop-off. You confirm and pay in ' + app + '.';
      $('#end').classList.add('on');
    }, 1400);
  }
  function hint(t) {
    const h = $('#hint'); h.textContent = t; h.classList.add('on');
    clearTimeout(hint.t); hint.t = setTimeout(() => h.classList.remove('on'), 1400);
  }

  /* click routing */
  let blockClick = false;
  function suppressClick() { blockClick = true; setTimeout(() => blockClick = false, 60); }
  const ACT = {
    start() { $('#intro').classList.remove('on'); show('feed'); },
    openPlace, closePlace,
    collapse() { setMode('half'); },
    dfBack() { show(S.from === 'dishfeed' ? 'place' : S.from); },
    dir() { openSheet('dir'); },
    ride() { openSheet('ride'); },
    closeSheet() { closeSheet(); },
    toggleRemember() { S.remember = !S.remember; $$('.psheet').forEach(p => p.classList.toggle('unchecked', !S.remember)); },
    restart() { $('#end').classList.remove('on'); S.choice = { dir: null, ride: null }; S.remember = true; paintRemembered(); setMode('half'); show('feed'); $('#intro').classList.add('on'); },
    again() { $('#end').classList.remove('on'); paintRemembered(); }
  };
  phone.addEventListener('click', e => {
    if (blockClick) return;
    const pick = e.target.closest('[data-pick]');
    if (pick) { const kind = S.sheet, app = pick.dataset.pick; if (S.remember) S.choice[kind] = app; closeSheet(() => handoff(kind, app)); return; }
    const dish = e.target.closest('[data-dish]');
    if (dish) { DISHES[dish.dataset.dish].feed ? openFeed(0) : hint('In this demo, try Spicy Frog'); return; }
    const vid = e.target.closest('[data-vid]');
    if (vid) { VIDEOS[vid.dataset.vid].feed !== undefined ? openFeed(0) : hint('In this demo, try Spicy Frog'); return; }
    const a = e.target.closest('[data-act]');
    if (a && ACT[a.dataset.act]) ACT[a.dataset.act]();
  });
  // swipe up on feed (01) is not part of the task: nudge toward the tag
  let f01 = null;
  $('#feed').addEventListener('pointerdown', e => f01 = e.clientY);
  $('#feed').addEventListener('pointerup', e => { if (f01 !== null && (f01 - e.clientY) / scale() > 60) hint('Tap the place tag to see this restaurant'); f01 = null; });

  // swipe down on hand-off sheets closes them
  let ps = null;
  $$('.psheet').forEach(p => {
    p.addEventListener('pointerdown', e => ps = e.clientY);
    p.addEventListener('pointerup', e => { if (ps !== null && (e.clientY - ps) / scale() > 60) { suppressClick(); closeSheet(); } ps = null; });
  });

  if (/[?&]skip=1/.test(location.search)) ACT.start();
  paintRemembered();
})();
