(function () {
  'use strict';

  /* ---------------- icons (exported from Figma components) ---------------- */
  const G = (id, a, b) => `<linearGradient id="${id}" x1="12" y1="${a}" x2="12" y2="${b}" gradientUnits="userSpaceOnUse"><stop stop-color="#EA4359"/><stop offset="1" stop-color="#EC9EEB"/></linearGradient>`;
  const ICON = {
    walk: `<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Icon/Walk">
<path id="Vector" d="M13.5 6.5C14.6046 6.5 15.5 5.60457 15.5 4.5C15.5 3.39543 14.6046 2.5 13.5 2.5C12.3954 2.5 11.5 3.39543 11.5 4.5C11.5 5.60457 12.3954 6.5 13.5 6.5Z" fill="#161823"/>
<path id="Vector_2" d="M9 21L11 15.5M11 15.5L13.5 17.5V21M11 15.5L12 10M17 13.5L14.5 12.5L12 10L9 11.5V14.5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" stroke="#161823"/>
</g>
</svg>
`,
    heart: '<svg width="18" height="18" viewBox="0 0 24 24" fill="#FE2C55"><path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.7 4.5c2 0 3.6 1.1 5.3 3 1.7-1.9 3.3-3 5.3-3 3.7 0 5.8 3.8 4.3 7.2C19.5 16.4 12 21 12 21z"/></svg>',
    phoneDark: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#161823"><path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>',
    car: `<svg preserveAspectRatio="none" overflow="visible" style="display: block;" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Icon/Car">
<path id="Vector" d="M5.2 9.5L6.6 5.6C6.9 4.7 7.7 4.2 8.6 4.2H15.4C16.3 4.2 17.1 4.7 17.4 5.6L18.8 9.5C20 9.9 20.8 11 20.8 12.3V17.5C20.8 18.3 20.1 19 19.3 19H18C17.2 19 16.5 18.3 16.5 17.5V17H7.5V17.5C7.5 18.3 6.8 19 6 19H4.7C3.9 19 3.2 18.3 3.2 17.5V12.3C3.2 11 4 9.9 5.2 9.5Z" fill="#161823"/>
<path id="Vector_2" d="M7.6 11.6H6.6C6.04772 11.6 5.6 12.0477 5.6 12.6C5.6 13.1523 6.04772 13.6 6.6 13.6H7.6C8.15228 13.6 8.6 13.1523 8.6 12.6C8.6 12.0477 8.15228 11.6 7.6 11.6Z" fill="white"/>
<path id="Vector_3" d="M17.4 11.6H16.4C15.8477 11.6 15.4 12.0477 15.4 12.6C15.4 13.1523 15.8477 13.6 16.4 13.6H17.4C17.9523 13.6 18.4 13.1523 18.4 12.6C18.4 12.0477 17.9523 11.6 17.4 11.6Z" fill="white"/>
</g>
</svg>
`,
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
    hourglass: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 3.5H18M6 20.5H18" stroke="#2E8B8B" stroke-width="2" stroke-linecap="round"/><path d="M7.5 3.5V7C7.5 8.5 9 9.8 10.4 10.9L12 12L13.6 10.9C15 9.8 16.5 8.5 16.5 7V3.5M7.5 20.5V17C7.5 15.5 9 14.2 10.4 13.1L12 12L13.6 13.1C15 14.2 16.5 15.5 16.5 17V20.5" stroke="#2E8B8B" stroke-width="2" stroke-linejoin="round"/></svg>',
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
    { name: 'Mala Dry Pot', price: '$18.95', n: '412 ordered', img: 'img/mala-full.jpg' },
    { name: 'Spicy Frog', price: '$22.95', n: '186 ordered', img: 'img/frog-full.jpg', feed: true },
    { name: 'Hot Pot', price: '$32.95', n: '275 ordered', img: 'img/hotpot.jpg' },
    { name: 'Lunch Special', price: '$12.95', n: '130 ordered', img: 'img/lunch.jpg' }
  ];
  const COMBOS = [
    { who: 'For 2', items: 'Mala Dry Pot · Spicy Frog · Rice', price: '$46', n: '1,208 ordered', imgs: ['img/mala-full.jpg', 'img/frog-full.jpg'] },
    { who: 'For 4', items: 'Hot Pot · Spicy Frog · Cumin Lamb · Dan Dan Noodles', price: '$98', n: '640 ordered', imgs: ['img/hotpot.jpg', 'img/lamb.jpg'] },
    { who: 'Solo lunch', items: 'Lunch Special · Tea', price: '$14', n: '2,310 ordered', imgs: ['img/lunch.jpg', 'img/dandan.jpg'] }
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
    { who: 'Eaternally Happy', av: 'img/figma/5c293.png', date: 'Jun 21, 2026 · Post', pin: true,
      text: 'Good Harvest - Doraville, GA&nbsp; They specializes in authentic Sichuan hot pots, dry pots, and traditional Chinese cuisine. Food was very good!&nbsp; We ord… more',
      media: [{ v: 'img/figma/38771.png' }] },
    { who: 'Lil Nisa', av: 'img/figma/da16b.png', date: 'Sep 27, 2026 · Review', lv: ['Lv.1', '#FFF4DA', '#C98A1B'], stars: 5,
      text: 'This was my first time trying K-pot style food &amp; boy was is amazing!!! me and my friend made a hour trip and were not disappointed whatsoever! with a… more',
      media: [{ p: 'img/figma/54c43.png' }, { p: 'img/figma/4354b.png' }] },
    { who: 'Vanesa Beltran', av: 'img/figma/dcbac.png', date: 'Jun 12, 2026 · Post',
      text: 'Tried a new spot ! Recommend 9/10 need to come back and try out more from their menu', media: [{ v: 'img/figma/7b8a2.png' }] },
    { who: 'averysabile', av: 'img/a_avery.jpg', date: 'Oct 5, 2026 · Post',
      text: 'Dinner at Good Harvest in Doraville', media: [{ v: 'img/lamb.jpg' }] },
    { who: 'tray | chicago foodie', av: 'img/a_tray.jpg', date: 'Jan 14, 2026 · Review', lv: ['Lv.5', '#FFEBDD', '#E0661B'], stars: 5,
      text: 'I’ve been here so many times and that alone says everything. They seriously have some of the best frog and charpati around. The pineapple charpati w… more' }
  ];
  const FEED = [
    { img: 'img/frog-full.jpg', av: 'img/a_atl.jpg', user: 'atl_eats', when: '2 days ago', cap: 'the spicy frog here is no joke 🌶️ go hungry #doraville #atlantafood', counts: ['24.1K', '812', '3,204', '1,206'], played: 40 },
    { img: 'img/closeup-full.jpg', av: 'img/figma/da16b.png', user: 'lilnisa', when: '5 days ago', cap: 'came back for the frog and it’s still this good. get it extra spicy #doraville #sichuanfood', counts: ['8,931', '204', '1,120', '388'], played: 96 },
    { img: 'img/frog2-full.jpg', av: 'img/a_tray.jpg', user: 'tray.eats', when: '1 week ago', cap: 'the spicy frog at Good Harvest is worth the drive #atlantafood #doraville', counts: ['41.2K', '1,503', '6,870', '2,114'], paid: true, played: 150 }
  ];

  const rail = (av, c) => `
    <div class="creator"><img src="${av}" alt=""><span class="follow">${ICON.plus}</span></div>
    <div class="act like">${ICON.like}<span class="cnt">${c[0]}</span></div>
    <div class="act">${ICON.comment}${c[1]}</div>
    <div class="act">${ICON.fav}${c[2]}</div>
    <div class="act">${ICON.share2}${c[3]}</div>
    <div class="disc"></div>`;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // 01 rail
  const r01 = $('#feed .rail');
  r01.innerHTML = rail(r01.dataset.avatar, ['24.1K', '812', '3,204', '1,206']);

  // Compact recommendations; photo opens the existing video feed, text opens Menu.
  const recommendationNames = ['Dry Pot Lotus Root', 'Spicy Frog', 'Boiled Fish in Chili Oil', 'Garlic Pork Belly'];
  const recommendationPhotos = ['1e55b.png', 'a7cbf.png', '984b6.png', 'ae0c8.png'];
  $('#dishRow').innerHTML = recommendationNames.map((name, i) => `<div class="dish"><button class="ph" data-photo="${i}" aria-label="Watch ${name}" style="background-image:url(img/figma/${recommendationPhotos[i]})"><span>TOP·${i+1}</span></button><button data-act="menu" class="dish-name">${name}</button><span>${[63,33,53,33][i]} recs</span></div>`).join('');
  $('#comboRow').innerHTML = COMBOS.map(c => `
    <div class="combo">
      <div class="pics">${c.imgs.map(i => `<div style="background-image:url(${i})"></div>`).join('')}</div>
      <div class="top"><b>${c.who}</b><b>${c.price}</b></div>
      <p>${c.items}</p><span>${c.n}</span>
    </div>`).join('');

  // video grid
  document.createElement('div').innerHTML = VIDEOS.map((v, i) => `
    <div class="vtile" data-vid="${i}" style="background-image:url(${v.img})">
      ${v.paid ? '<span class="chip">Paid partnership</span>' : ''}
      <span class="meta">${ICON.playw}${v.when}</span>
    </div>`).join('');

  // reviews
  $('#reviews').innerHTML = REVIEWS.slice(0, 3).map(r => `
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

  /* ======================================================================
     Interaction + motion layer
     ====================================================================== */
  const phone = $('#phone');
  const IOS = 'cubic-bezier(.32,.72,0,1)';          // iOS sheet curve
  const OUT = 'cubic-bezier(.2,.8,.2,1)';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const D = ms => reduce ? 1 : ms;

  const fit = () => {
    const pad = window.innerWidth >= 600 ? 0.9 : 1;
    const s = Math.min(window.innerWidth / 390, window.innerHeight / 844) * pad;
    phone.style.transform = `scale(${s})`;
  };
  window.addEventListener('resize', fit); fit();
  const scale = () => phone.getBoundingClientRect().height / 844;
  const local = el => { const p = phone.getBoundingClientRect(), r = el.getBoundingClientRect(), k = scale();
    return { x: (r.left - p.left) / k, y: (r.top - p.top) / k, w: r.width / k, h: r.height / k }; };
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const anim = (el, frames, opts) => el.animate(frames, Object.assign({ fill: 'forwards' }, opts, { duration: D(opts.duration) })).finished;

  /* ---------------- state ---------------- */
  const S = { screen: 'feed', mode: 'half', remember: true, choice: { dir: null, ride: null }, sheet: null, from: 'place', busy: false };
  const place = $('#place'), sheet = $('#sheet'), scroller = $('#sheetScroll'), morph = $('#morph');
  const HALF = 228, FULL = 100;

  function show(id) {
    $$('.screen').forEach(s => s.classList.toggle('on', s.id === id));
    S.screen = id;
    syncChrome();
  }
  function syncChrome() {
    const lightBg = ['place','menu','guide'].includes(S.screen) || !!S.sheet;
    $('#statusbar').classList.toggle('dark-text', S.screen === 'menu' || (S.screen === 'place' && place.classList.contains('dishes-mode')));
    $('#homeInd').classList.toggle('dark', lightBg);
  }

  /* ---------- sheet position (single source of truth) ---------- */
  let sheetY = 844;
  function setSheet(y, ms, ease) {
    sheetY = y;
    sheet.style.transition = ms ? `transform ${D(ms)}ms ${ease || IOS}` : 'none';
    sheet.style.transform = `translateY(${y - FULL}px)`;
    // progress 0 (half) → 1 (full) drives the cross-fade of header/mini video
    const p = Math.max(0, Math.min(1, (HALF - y) / (HALF - FULL)));
    place.style.setProperty('--p', p.toFixed(3));
    place.style.setProperty('--pt', ms ? `${D(ms)}ms` : '0ms');
  }
  function setMode(m, ms = 460) {
    S.mode = m;
    place.classList.toggle('full', m === 'full');
    if (m === 'half') { showPlaceBody(false); scroller.scrollTop = 0; setTab('overview', true); }
    setSheet(m === 'full' ? FULL : HALF, ms);
  }

  /* ---------- 01 → 02: video shrinks into the top, sheet rises ---------- */
  async function openPlace() {
    if (S.busy) return; S.busy = true;
    setMode('half', 0); setSheet(844, 0);
    place.classList.add('on', 'entering');           // keep feed visible underneath
    S.screen = 'place'; syncChrome();
    const img = morph.querySelector('img'); img.src = $('#feed .cover').src;
    Object.assign(morph.style, { display: 'block', left: '0px', top: '0px', width: '390px', height: '844px', borderRadius: '0px' });
    $('#feed .feed-ui').animate([{ opacity: 1 }, { opacity: 0 }], { duration: D(180), fill: 'forwards' });
    requestAnimationFrame(() => setSheet(HALF, 520));
    await anim(morph, [{ left: '0px', top: '0px', width: '390px', height: '844px' }, { left: '122px', top: '0px', width: '147px', height: '228px' }], { duration: 520, easing: IOS });
    place.classList.remove('entering');
    morph.style.display = 'none'; morph.getAnimations().forEach(a => a.cancel());
    $('#feed').classList.remove('on'); $('#feed .feed-ui').getAnimations().forEach(a => a.cancel());
    S.busy = false;
  }
  async function closePlace() {
    if (S.busy) return; S.busy = true;
    if (S.mode === 'full') { setMode('half', 300); await wait(D(300)); }
    $('#feed').classList.add('on');
    place.classList.add('entering');
    const img = morph.querySelector('img'); img.src = $('#feed .cover').src;
    Object.assign(morph.style, { display: 'block', left: '122px', top: '0px', width: '147px', height: '228px' });
    setSheet(844, 420);
    const ui = $('#feed .feed-ui'); ui.style.opacity = 0;
    await anim(morph, [{ left: '122px', top: '0px', width: '147px', height: '228px' }, { left: '0px', top: '0px', width: '390px', height: '844px' }], { duration: 440, easing: IOS });
    ui.animate([{ opacity: 0 }, { opacity: 1 }], { duration: D(200) }); ui.style.opacity = '';
    morph.style.display = 'none'; morph.getAnimations().forEach(a => a.cancel());
    place.classList.remove('on', 'entering'); S.screen = 'feed'; syncChrome();
    S.busy = false;
  }

  /* ---------- sheet drag with velocity + rubber band ---------- */
  let drag = null;
  const track = (d, y) => { const t = performance.now(); d.pts.push([t, y]); while (d.pts.length > 5) d.pts.shift(); };
  const velocity = d => { const a = d.pts[0], b = d.pts[d.pts.length - 1]; return b && a && b[0] !== a[0] ? (b[1] - a[1]) / (b[0] - a[0]) : 0; };
  const rubber = (y) => y < FULL ? FULL - (FULL - y) * 0.25 : y;

  sheet.addEventListener('pointerdown', e => {
    if (e.pointerType !== 'mouse' && S.mode === 'full') return;        // touch in full mode → native scroll (see touch handler)
    drag = { x: e.clientX, y: e.clientY, base: sheetY, startTop: scroller.scrollTop, moved: false, pts: [] };
  });
  window.addEventListener('pointermove', e => {
    if (!drag) return;
    const k = scale(), dy = (e.clientY - drag.y) / k, dx = (e.clientX - drag.x) / k;
    if (!drag.moved && Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) { drag = null; return; }
    if (!drag.moved && Math.abs(dy) < 6) return;
    if (S.mode === 'full' && !(drag.startTop <= 0 && dy > 0)) { drag = null; return; } // let content scroll
    drag.moved = true; track(drag, e.clientY / k);
    setSheet(rubber(drag.base + dy), 0);
  });
  window.addEventListener('pointerup', () => {
    if (!drag) return;
    const d = drag; drag = null;
    if (!d.moved) return;
    suppressClick(); settle(velocity(d));
  });
  window.addEventListener('pointercancel', () => { if (drag && drag.moved) settle(0); drag = null; });

  function settle(v) {                                  // v in px/ms (positive = downward)
    const y = sheetY;
    if (S.mode === 'half') {
      if (v < -0.45 || y < HALF - 70) return setMode('full', 420);
      if (v > 0.6 || y > HALF + 110) return closePlace();
      return setSheet(HALF, 380);
    }
    if (v > 0.5 || y > FULL + 90) return setMode('half', 420);
    setSheet(FULL, 360);
  }

  // touch: pulling down at the top of the full sheet drags the sheet instead of over-scrolling
  let tdrag = null;
  scroller.addEventListener('touchstart', e => { if (S.mode === 'full') tdrag = { y: e.touches[0].clientY, active: false, pts: [] }; }, { passive: true });
  scroller.addEventListener('touchmove', e => {
    if (!tdrag) return;
    const k = scale(), dy = (e.touches[0].clientY - tdrag.y) / k;
    if (!tdrag.active && scroller.scrollTop <= 0 && dy > 6) tdrag.active = true;
    if (tdrag.active) { e.preventDefault(); track(tdrag, e.touches[0].clientY / k); setSheet(FULL + Math.max(0, dy), 0); }
  }, { passive: false });
  scroller.addEventListener('touchend', () => { if (tdrag && tdrag.active) settle(velocity(tdrag)); tdrag = null; });

  // wheel / trackpad
  let wheelLock = 0, wheelAcc = 0;
  sheet.addEventListener('wheel', e => {
    if (Date.now() < wheelLock || S.busy) return;
    if (S.mode === 'half') {
      wheelAcc += e.deltaY;
      if (wheelAcc > 30) { wheelLock = Date.now() + 600; wheelAcc = 0; setMode('full', 460); }
      else if (wheelAcc < -40) { wheelLock = Date.now() + 600; wheelAcc = 0; closePlace(); }
    } else if (scroller.scrollTop <= 0 && e.deltaY < -40) { wheelLock = Date.now() + 600; setMode('half', 460); }
  }, { passive: true });

  /* ---------- tabs: sliding ink + scrollspy ---------- */
  const ink = $('#tabInk');
  function setTab(sec, instant) {
    let on;
    $$('#tabs button').forEach(b => { const a = b.dataset.sec === sec; b.classList.toggle('on', a); if (a) on = b; });
    if (!on) return;
    ink.style.transition = instant ? 'none' : `transform ${D(320)}ms ${IOS}`;
    ink.style.transform = `translateX(${on.offsetLeft + on.offsetWidth / 2 - 13}px)`;
  }
  let spyLock = 0;
  $('#tabs').addEventListener('click', e => { const b=e.target.closest('button'); if(b) navigateTab(b.dataset.sec); });
  scroller.addEventListener('scroll', () => {
    if (S.mode !== 'full' || place.classList.contains('dishes-mode') || Date.now() < spyLock) return;
    let cur='overview'; const y=scroller.scrollTop+60;
    ['combos','reviews','nearby'].forEach(id=>{if($('#sec-'+id).offsetTop<=y) cur=id==='nearby'?'more':id;});
    setTab(cur);
  }, {passive:true});

  /* ---------- dish → feed: thumbnail expands into the video ---------- */
  const df = $('#dfScroll'), dfEl = $('#dishfeed');
  let feedSource = null;
  async function openFeed(fromEl) {
    if (S.busy) return; S.busy = true;
    S.from = S.screen; feedSource = fromEl || null;
    df.scrollTop = 0; updateFeedTitle(true);
    const r = fromEl ? local(fromEl) : { x: 0, y: 0, w: 390, h: 772 };
    const img = morph.querySelector('img'); img.src = FEED[0].img;
    Object.assign(morph.style, { display: 'block', left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px', borderRadius: '10px' });
    dfEl.classList.add('on', 'entering');
    await anim(morph, [{ left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px', borderRadius: '10px' },
                       { left: '0px', top: '0px', width: '390px', height: '772px', borderRadius: '0px' }], { duration: 480, easing: IOS });
    $('#'+S.from).classList.remove('on'); S.screen = 'dishfeed'; syncChrome();
    dfEl.classList.remove('entering');
    morph.style.display = 'none'; morph.getAnimations().forEach(a => a.cancel());
    startPlayback();
    dfEl.classList.remove('peek'); void dfEl.offsetWidth; dfEl.classList.add('peek');
    S.busy = false;
  }
  async function closeFeed() {
    if (S.busy) return; S.busy = true;
    const back = S.from === 'dishfeed' ? 'place' : S.from;
    const i = Math.round(df.scrollTop / 696);
    $('#'+back).classList.add('on'); S.screen = back; syncChrome();
    if (feedSource && feedSource.isConnected) {
      const r = local(feedSource);
      const img = morph.querySelector('img'); img.src = FEED[i].img;
      Object.assign(morph.style, { display: 'block', left: '0px', top: '0px', width: '390px', height: '772px', borderRadius: '0px' });
      dfEl.classList.add('leaving');
      await anim(morph, [{ left: '0px', top: '0px', width: '390px', height: '772px', borderRadius: '0px', opacity: 1 },
                         { left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px', borderRadius: '10px', opacity: 1 }], { duration: 420, easing: IOS });
      morph.style.display = 'none'; morph.getAnimations().forEach(a => a.cancel());
    }
    dfEl.classList.remove('on', 'leaving', 'peek');
    S.busy = false;
  }
  function updateFeedTitle(instant) {
    const i = Math.round(df.scrollTop / 696), el = $('#dfIdx'), txt = (i + 1) + ' / 18 · Good Harvest';
    if (el.textContent === txt) return;
    if (instant || reduce) { el.textContent = txt; return; }
    el.animate([{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-4px)' }], { duration: 120 }).finished
      .then(() => { el.textContent = txt; el.animate([{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 160 }); });
  }
  let lastIdx = 0;
  df.addEventListener('scroll', () => {
    updateFeedTitle();
    const i = Math.round(df.scrollTop / 696);
    if (i !== lastIdx && Math.abs(df.scrollTop - i * 696) < 4) { lastIdx = i; startPlayback(); }
  }, { passive: true });
  // mouse drag → page by page
  let fdrag = null;
  df.addEventListener('pointerdown', e => { if (e.pointerType === 'mouse') fdrag = { y: e.clientY, top: df.scrollTop }; });
  window.addEventListener('pointerup', e => {
    if (!fdrag) return;
    const dy = (e.clientY - fdrag.y) / scale(), start = fdrag.top; fdrag = null;
    if (Math.abs(dy) > 40) { const i = Math.round(start / 696) + (dy < 0 ? 1 : -1); df.scrollTo({ top: Math.max(0, Math.min(2, i)) * 696, behavior: 'smooth' }); suppressClick(); }
  });

  /* ---------- "video" playback: slow push-in + progress ---------- */
  function startPlayback() {
    const i = Math.round(df.scrollTop / 696);
    $$('.df-item').forEach((it, k) => {
      const bar = it.querySelector('.track i'), im = it.querySelector(':scope > img');
      bar.getAnimations().forEach(a => a.cancel()); im.getAnimations().forEach(a => a.cancel());
      if (k !== i || reduce) return;
      const from = FEED[k].played;
      bar.animate([{ width: from + 'px' }, { width: '364px' }], { duration: 9000, easing: 'linear', fill: 'forwards' });
      im.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.07)' }], { duration: 12000, easing: 'ease-out', fill: 'forwards' });
    });
  }

  /* ---------- likes: tap + double-tap heart burst ---------- */
  function burst(host, x, y) {
    const h = document.createElement('div'); h.className = 'burst';
    h.innerHTML = '<svg viewBox="0 0 34 34" width="96" height="96"><path d="M18.58 29.17C18.58 29.17 9.5 22.01 5.96 15.35C3.69 10.68 6.39 5.15 11.63 5.15C14.6 5.15 16.44 6.71 17.29 8.13C18.14 6.71 19.99 5.15 22.96 5.15C28.2 5.15 30.89 10.68 28.63 15.35C22.96 24.02 18.58 29.17 18.58 29.17Z" fill="#FE2C55"/></svg>';
    const rot = (Math.random() * 30 - 15).toFixed(0);
    h.style.left = (x - 48) + 'px'; h.style.top = (y - 60) + 'px';
    phone.appendChild(h);
    h.animate([
      { transform: `rotate(${rot}deg) scale(.2)`, opacity: 0 },
      { transform: `rotate(${rot}deg) scale(1.15)`, opacity: 1, offset: .25 },
      { transform: `rotate(${rot}deg) scale(.95)`, opacity: 1, offset: .4 },
      { transform: `rotate(${rot}deg) scale(1)`, opacity: 1, offset: .7 },
      { transform: `rotate(${rot}deg) translateY(-80px) scale(1.4)`, opacity: 0 }
    ], { duration: D(900), easing: 'ease-out' }).finished.then(() => h.remove());
    const like = host.querySelector('.act.like'); if (like) setLiked(like, true);
  }
  function setLiked(el, on) {
    if (el.classList.contains('liked') === on) return;
    el.classList.toggle('liked', on);
    const n = el.querySelector('.cnt'); const base = el.dataset.base || n.textContent; el.dataset.base = base;
    n.textContent = on ? bump(base) : base;
    el.querySelector('svg').animate([{ transform: 'scale(1)' }, { transform: 'scale(1.3)' }, { transform: 'scale(.92)' }, { transform: 'scale(1)' }], { duration: D(380), easing: OUT });
  }
  const bump = s => /K$/.test(s) ? s : (parseInt(s.replace(/,/g, ''), 10) + 1).toLocaleString('en-US');
  let lastTap = { t: 0, x: 0, y: 0 };
  function videoTap(e, host) {
    if (e.target.closest('button,.act,.anchor,.rail,.place-bar,.df-top,.tabbar,.feed-top')) return false;
    const now = performance.now(), p = local({ getBoundingClientRect: () => ({ left: e.clientX, top: e.clientY, width: 0, height: 0 }) });
    if (now - lastTap.t < 320 && Math.hypot(p.x - lastTap.x, p.y - lastTap.y) < 40) { burst(host, p.x, p.y); lastTap.t = 0; return true; }
    lastTap = { t: now, x: p.x, y: p.y }; return false;
  }

  /* ---------- hand-off ---------- */
  function paintRemembered() {
    const d = S.choice.dir, r = S.choice.ride;
    $$('.gsub').forEach(e => e.textContent = d ? '18 min drive · ' + d : '18 min drive');
    $$('.rsub').forEach(e => e.textContent = r ? (r === 'Lyft' ? '$20 · Lyft' : '$22 · Uber') : 'from $20 · Uber / Lyft');
  }
  function openSheet(kind, btn) {
    if (S.busy) return;
    if (S.choice[kind]) { launch(kind, S.choice[kind], btn); return; }
    S.sheet = kind;
    const el = $(kind === 'dir' ? '#sheetDir' : '#sheetRide');
    el.classList.toggle('unchecked', !S.remember);
    $('#dim').classList.add('on'); el.classList.add('on');
    if (!reduce) $$('.app-row, .route, .ps-sub, .ps-note, .remember', el).forEach((r, i) =>
      r.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 360, delay: 90 + i * 45, easing: OUT, fill: 'backwards' }));
    syncChrome();
  }
  function closeSheet() {
    if (!S.sheet) return Promise.resolve();
    $('#dim').classList.remove('on'); $$('.psheet').forEach(p => p.classList.remove('on'));
    S.sheet = null; syncChrome();
    return wait(D(240));
  }
  const BRAND = { 'Google Maps': '#FFFFFF', 'Apple Maps': '#FFFFFF', 'Waze': '#33CCFF', 'Lyft': '#FF00BF', 'Uber': '#000000' };
  const LOGO = { 'Google Maps': 'img/logo_gmaps.jpg', 'Apple Maps': 'img/logo_amaps.jpg', 'Waze': 'img/logo_waze.jpg', 'Lyft': 'img/logo_lyft.jpg', 'Uber': 'img/logo_uber.jpg' };
  async function launch(kind, app, fromEl) {
    if (S.busy) return; S.busy = true;
    const L = $('#launch'), logo = L.querySelector('img');
    const r = fromEl ? local(fromEl) : { x: 173, y: 400, w: 44, h: 44 };
    logo.src = LOGO[app];
    L.style.background = BRAND[app];
    L.classList.toggle('dark', BRAND[app] !== '#FFFFFF');
    $('#launchText').textContent = 'Opening ' + app;
    Object.assign(L.style, { display: 'flex', left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px', borderRadius: Math.min(r.h / 2, 24) + 'px' });
    L.dataset.from = JSON.stringify(r);
    logo.animate([{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(1)' }], { duration: D(380), delay: D(120), easing: OUT, fill: 'both' });
    await anim(L, [{ left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px', borderRadius: Math.min(r.h / 2, 24) + 'px' },
                   { left: '0px', top: '0px', width: '390px', height: '844px', borderRadius: '48px', offset: .85 },
                   { left: '0px', top: '0px', width: '390px', height: '844px', borderRadius: '0px' }], { duration: 520, easing: IOS });
    await wait(D(650));
    const end = $('#end');
    $('#endTitle').textContent = kind === 'dir' ? 'Good Harvest is set as your destination' : 'Pickup and drop-off are filled in';
    $('#endBody').textContent = kind === 'dir'
      ? app + ' opens with directions ready. About 18 min by car.'
      : app + ' opens with your location as pickup and Good Harvest as drop-off. You confirm and pay in ' + app + '.';
    $('#endNote').textContent = S.choice[kind] ? 'Next time, this button goes straight to ' + app + '.' : '';
    end.classList.add('on');
    S.busy = false;
  }
  async function unlaunch() {
    const L = $('#launch'), r = JSON.parse(L.dataset.from || '{"x":173,"y":400,"w":44,"h":44}');
    $('#end').classList.remove('on');
    L.querySelector('img').animate([{ opacity: 1 }, { opacity: 0 }], { duration: D(150), fill: 'forwards' });
    await anim(L, [{ left: '0px', top: '0px', width: '390px', height: '844px', borderRadius: '0px', opacity: 1 },
                   { left: r.x + 'px', top: r.y + 'px', width: r.w + 'px', height: r.h + 'px', borderRadius: '24px', opacity: 0 }], { duration: 420, easing: IOS });
    L.style.display = 'none'; L.getAnimations().forEach(a => a.cancel()); L.querySelector('img').getAnimations().forEach(a => a.cancel());
    paintRemembered();
  }

  function hint(t) {
    const h = $('#hint'); h.textContent = t; h.classList.remove('on'); void h.offsetWidth; h.classList.add('on');
    clearTimeout(hint.t); hint.t = setTimeout(() => h.classList.remove('on'), 1600);
  }

  /* ---------- click routing ---------- */
  let blockClick = false;
  function suppressClick() { blockClick = true; setTimeout(() => blockClick = false, 80); }
  const ACT = {
    async start() {
      const intro = $('#intro');
      await anim(intro, [{ opacity: 1 }, { opacity: 0 }], { duration: 260, easing: 'ease' });
      intro.classList.remove('on'); intro.getAnimations().forEach(a => a.cancel());
    },
    openPlace, closePlace,
    collapse() { setMode('half'); },
    dishes() { navigateTab('dishes'); },
    menu() { openMenu(); }, guide() { pushPage('guide'); }, pop() { popPage(); },
    reviews() { navigateTab('reviews'); }, combos() { navigateTab('combos'); },
    demo() { hint('Not in this demo'); }, restaurant() { hint('Showing the restaurant’s guide'); },
    dfBack: closeFeed,
    closeSheet,
    toggleRemember() {
      S.remember = !S.remember;
      $$('.psheet').forEach(p => p.classList.toggle('unchecked', !S.remember));
      if (!reduce) $$('.psheet.on .box').forEach(b => b.animate([{ transform: 'scale(1)' }, { transform: 'scale(.82)' }, { transform: 'scale(1.08)' }, { transform: 'scale(1)' }], { duration: 300, easing: OUT }));
    },
    restart() { location.href = location.pathname; },
    async again() { await unlaunch(); }
  };
  phone.addEventListener('click', async e => {
    if (blockClick) return;
    if(e.target.closest('[data-category],[data-page-tab],[data-sec]')) return;
    const pick = e.target.closest('[data-pick]');
    if (pick) {
      const kind = S.sheet, app = pick.dataset.pick, icon = pick.querySelector('img');
      const r = local(icon);
      if (S.remember) S.choice[kind] = app;
      closeSheet();
      launch(kind, app, { getBoundingClientRect: () => { const p = phone.getBoundingClientRect(), k = scale(); return { left: p.left + r.x * k, top: p.top + r.y * k, width: r.w * k, height: r.h * k }; } });
      return;
    }
    const go = e.target.closest('[data-act="dir"],[data-act="ride"]');
    if (go) { openSheet(go.dataset.act, go); return; }
    const photo = e.target.closest('[data-photo]');
    if(photo) { if(Number(photo.dataset.photo)===1) openFeed(photo); else hint('Not in this demo'); return; }
    const dish = e.target.closest('[data-dish]');
    if (dish) { DISHES[dish.dataset.dish].feed ? openFeed(dish.querySelector('.ph')) : nudge(dish); return; }
    const vid = e.target.closest('[data-vid]');
    if (vid) { VIDEOS[vid.dataset.vid].feed !== undefined ? openFeed(vid) : nudge(vid); return; }
    const like = e.target.closest('.act.like');
    if (like) { setLiked(like, !like.classList.contains('liked')); return; }
    const a = e.target.closest('[data-act]');
    if (a && ACT[a.dataset.act]) { ACT[a.dataset.act](); return; }
    if(e.target.closest('button,a,.act,.head-actions .ic,.feed-top,.tabbar')) { hint('Not in this demo'); return; }
    if (S.screen === 'feed' && !S.busy) videoTap(e, $('#feed'));
    else if (S.screen === 'dishfeed') { const i = Math.round(df.scrollTop / 696); videoTap(e, $$('.df-item')[i]); }
  });
  function nudge(el) {
    if (!reduce) el.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }], { duration: 260 });
    hint('In this demo, try Spicy Frog');
  }
  // swiping up on 01 is not part of the task: nudge toward the place tag
  let f01 = null;
  $('#feed').addEventListener('pointerdown', e => f01 = e.clientY);
  $('#feed').addEventListener('pointerup', e => {
    if (f01 !== null && (f01 - e.clientY) / scale() > 60) {
      hint('Tap the place tag to see this restaurant');
      if (!reduce) $('#feed .anchor').animate([{ transform: 'scale(1)' }, { transform: 'scale(1.08)' }, { transform: 'scale(1)' }], { duration: 500, iterations: 2 });
    }
    f01 = null;
  });
  // swipe down on hand-off sheets closes them
  let ps = null;
  $$('.psheet').forEach(p => {
    p.addEventListener('pointerdown', e => ps = e.clientY);
    p.addEventListener('pointerup', e => { if (ps !== null && (e.clientY - ps) / scale() > 60) { suppressClick(); closeSheet(); } ps = null; });
  });

  /* ---------- desktop: touch-style cursor ---------- */
  const dot = $('#touchDot');
  if (window.matchMedia('(pointer: fine)').matches) {
    document.body.classList.add('mouse');
    phone.addEventListener('pointermove', e => { const p = local({ getBoundingClientRect: () => ({ left: e.clientX, top: e.clientY, width: 0, height: 0 }) }); dot.style.transform = `translate(${p.x - 18}px, ${p.y - 18}px)`; dot.classList.add('on'); });
    phone.addEventListener('pointerleave', () => dot.classList.remove('on'));
    phone.addEventListener('pointerdown', () => dot.classList.add('down'));
    window.addEventListener('pointerup', () => dot.classList.remove('down'));
  }
  window.addEventListener('keydown', e => { if (e.key === 'r' || e.key === 'R') ACT.restart(); });

  /* ---------- 01 ambient playback ---------- */
  if (!reduce) $('#feed .cover').animate([{ transform: 'scale(1.0)' }, { transform: 'scale(1.06)' }], { duration: 14000, direction: 'alternate', iterations: Infinity, easing: 'ease-in-out' });

  // init
  setMode('half', 0); setSheet(844, 0);
  requestAnimationFrame(() => setTab('overview', true));
  if (/[?&]skip=1/.test(location.search)) { $('#intro').classList.remove('on'); }
  paintRemembered();

  /* Final POI screens: shared rows, page history and six menu categories. */
  const MENU = {"Signature": [{"name": "Dry Pot Lotus Root", "price": "$18.95", "recs": 1861, "quote": "Crispy outside, tender inside, house secret spice", "img": "img/figma/5e87c.png", "tag": "Signature"}, {"name": "Spicy Frog", "price": "$22.95", "recs": 128, "quote": "Numbing-hot, fresh frog, stir-fried on high heat", "img": "img/figma/cd38e.png", "tag": "Signature"}, {"name": "Boiled Fish in Chili Oil", "price": "$32.95", "recs": 87, "quote": "Layered chili broth, fresh fish, made to order", "img": "img/figma/6e48f.png", "tag": "Signature"}, {"name": "Garlic Pork Belly", "price": "$12.95", "recs": 36, "quote": "Thin-sliced, garlic sauce, cold starter", "img": "img/figma/29847.png", "tag": "Signature"}, {"name": "Mapo Beef Rib", "price": "$24.95", "recs": 14, "quote": "Rich, beef rib, slow-braised", "img": "img/figma/fb44f.png", "tag": "Signature"}, {"name": "Cold Sesame Noodles", "price": "$9.95", "recs": 10, "quote": "Nutty, chewy, hand-pulled", "img": "img/figma/2a11a.png", "tag": "Signature"}], "Meat": [{"name": "Twice-Cooked Pork", "price": "$16.95", "tag": "Popular", "recs": 412, "quote": "Smoky, fatty-lean belly, leek", "img": "img/figma/56e03.png"}, {"name": "Peppercorn Duck", "price": "$21.95", "tag": "Spicy", "recs": 233, "quote": "Numbing Sichuan pepper, crispy skin", "img": "img/figma/93b8e.png"}, {"name": "Char Siu Beef", "price": "$19.95", "tag": "", "recs": 188, "quote": "Sweet glaze, sliced thin", "img": "img/figma/51ee4.png"}, {"name": "Braised Pigeon Legs", "price": "$15.95", "tag": "", "recs": 96, "quote": "Fall-off-the-bone, soy braise", "img": "img/figma/a1903.png"}, {"name": "Mushroom Duck Stew", "price": "$22.95", "tag": "", "recs": 74, "quote": "Slow-cooked, earthy broth", "img": "img/figma/8376c.png"}], "Veg": [{"name": "Dry Pot Lotus Root", "price": "$18.95", "tag": "Popular", "recs": 1861, "quote": "Crispy outside, tender inside", "img": "img/figma/2ad1d.png"}, {"name": "Garlic Edamame", "price": "$6.95", "tag": "", "recs": 305, "quote": "Salted, garlic, cold starter", "img": "img/figma/3b23f.png"}, {"name": "Celery & Lily Bulb Stir-fry", "price": "$10.95", "tag": "", "recs": 142, "quote": "Light, crunchy, not spicy", "img": "img/figma/0b961.png"}, {"name": "Mapo Tofu", "price": "$12.95", "tag": "Spicy", "recs": 527, "quote": "Silky tofu, chili bean paste", "img": "img/figma/8d056.png"}], "Dessert": [{"name": "Egg Tart", "price": "$5.95", "tag": "Popular", "recs": 388, "quote": "Flaky crust, warm custard", "img": "img/figma/1f671.png"}, {"name": "Sesame Bun", "price": "$6.95", "tag": "", "recs": 204, "quote": "Soft, black-sesame filling", "img": "img/figma/f332f.png"}, {"name": "Osmanthus Pastry", "price": "$5.95", "tag": "", "recs": 119, "quote": "Crumbly, floral, light sweet", "img": "img/figma/03e0f.png"}, {"name": "Bird's Nest Pudding", "price": "$8.95", "tag": "", "recs": 67, "quote": "Chilled, coconut milk", "img": "img/figma/8116f.png"}], "Snacks": [{"name": "Cold Sesame Noodles", "price": "$9.95", "tag": "Popular", "recs": 10, "quote": "Nutty, chewy, hand-pulled", "img": "img/figma/2c717.png"}, {"name": "Garlic Edamame", "price": "$6.95", "tag": "", "recs": 305, "quote": "Salted, garlic, cold starter", "img": "img/figma/3b23f.png"}, {"name": "Claypot Rice", "price": "$13.95", "tag": "", "recs": 156, "quote": "Crispy bottom, sausage", "img": "img/figma/b7455.png"}, {"name": "Garlic Crayfish (small)", "price": "$14.95", "tag": "Spicy", "recs": 221, "quote": "Shell-on, garlic butter", "img": "img/figma/21f33.png"}], "Soup": [{"name": "Yellow Croaker Soup", "price": "$18.95", "tag": "Popular", "recs": 173, "quote": "Milky broth, pickled veg", "img": "img/figma/6e48f.png"}, {"name": "Pickled Fish Soup", "price": "$19.95", "tag": "Spicy", "recs": 342, "quote": "Sour-hot, tender fish", "img": "img/figma/6e48f.png"}, {"name": "Stone Frog Soup", "price": "$22.95", "tag": "", "recs": 88, "quote": "Clear broth, ginger", "img": "img/figma/cd38e.png"}, {"name": "Crab & Tofu Soup", "price": "$16.95", "tag": "", "recs": 59, "quote": "Sweet crab, soft tofu", "img": "img/hotpot.jpg"}]};
  const pageStack=[]; let category='Signature';
  const listMarkup=(items, menu=false)=>items.map((d,i)=>`<article class="menu-dish"><button class="menu-photo" data-photo="${d.name==='Spicy Frog'?1:0}" aria-label="Watch ${d.name}"><img src="${d.img}" alt="${d.name}"></button><button class="menu-dish-info" ${menu?'data-act="demo"':'data-act="menu"'}><div class="dish-title"><b>${d.name}</b><strong>${d.price}</strong></div><div class="dish-tags">${d.tag?`<span class="dish-tag ${d.tag==='Spicy'?'spicy':''}">${d.tag}</span>`:''}<span class="recommend ${d.recs>=100?'popular':''}">${d.recs} recommend</span></div><p>“${d.quote}”</p></button></article>`).join('');
  function showPlaceBody(dishes) {
    place.classList.toggle('dishes-mode',dishes);
    $('#dishesTab').hidden=!dishes;
    if(dishes) $('#dishesList').innerHTML=listMarkup(MENU.Signature);
    syncChrome();
  }
  function navigateTab(tab) {
    const section = tab === 'more' ? 'nearby' : tab;
    if(S.screen==='menu') { pageStack.length=0; show('place'); }
    if(S.mode!=='full') setMode('full');
    showPlaceBody(tab==='dishes');
    spyLock=Date.now()+800; setTab(tab);
    if(tab==='dishes') scroller.scrollTop=0;
    else scroller.scrollTo({top:tab==='overview'?0:$('#sec-'+section).offsetTop-12,behavior:reduce?'auto':'smooth'});
  }
  function pushPage(id) {
    if(S.busy) return;
    pageStack.push({screen:S.screen,top:scroller.scrollTop,category});
    show(id); const el=$('#'+id);
    el.animate(reduce?[{opacity:0},{opacity:1}]:[{transform:'translateX(100%)'},{transform:'translateX(0)'}],{duration:D(320),easing:IOS});
    if(id==='guide') $('.guide-scroll').scrollTop=0;
  }
  async function popPage() {
    if(S.busy) return; const prev=pageStack.pop(); if(!prev) return show('place');
    S.busy=true; const el=$('#'+S.screen);
    await anim(el,reduce?[{opacity:1},{opacity:0}]:[{transform:'translateX(0)'},{transform:'translateX(100%)'}],{duration:320,easing:IOS});
    show(prev.screen); el.getAnimations().forEach(a=>a.cancel());scroller.scrollTop=prev.top;S.busy=false;
  }
  function openMenu() { category='Signature'; renderCategory(); pushPage('menu'); $('.menu-scroll').scrollTop=0; }
  function renderCategory() {
    $('.category-chips').innerHTML=Object.keys(MENU).map(c=>`<button data-category="${c}" class="${c===category?'on':''}" aria-pressed="${c===category}">${c}</button>`).join('');
    $('#menuList').innerHTML=listMarkup(MENU[category],true);
    $('#menuList').animate([{opacity:0},{opacity:1}],{duration:D(180)});
  }
  $('.category-chips').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;category=b.dataset.category;renderCategory();$('.menu-scroll').scrollTop=0;$(`[data-category="${category}"]`).scrollIntoView({block:'nearest',inline:'nearest',behavior:reduce?'auto':'smooth'});});
  // main section tabs removed from the menu page (Figma 6b): header shows back + 'Dishes' only
  $('.menu-scroll').addEventListener('scroll',()=>$('.menu-sticky').classList.toggle('scrolled',$('.menu-scroll').scrollTop>0),{passive:true});
  const NEARBY=[['Masterpiece','Sichuan · Duluth · $$','4.6 (812)','6.2 mi','Also does dry pot','f4a8d.png'],["Gu’s Kitchen",'Sichuan · Chamblee · $$','4.4 (355)','2.3 mi','Closer · open now','a7c8c.png'],['Chong Qing Hot Pot','Hot pot · Duluth · $$$','4.5 (240)','7.8 mi','Group-friendly','09f0c.png'],['Tasty China II','Sichuan · Norcross · $$','4.3 (510)','8.9 mi','Famous for whole fish','984b6.png'],['Northern China Eatery','Dongbei · Doraville · $','4.5 (1200)','0.4 mi','Walkable · dumplings','09bf9.png'],['Bo Bo Garden','Cantonese · Doraville · $$','4.4 (430)','0.9 mi','Late night','f0bfd.png']];
  let nearbyCount=0,loading=false;
  function addNearby(n){for(let i=0;i<n;i++){const d=NEARBY[nearbyCount++%NEARBY.length];$('#nearbyRows').insertAdjacentHTML('beforeend',`<button class="nearby-row" data-act="demo"><img src="img/figma/${d[5]}" alt="${d[0]}"><div><b>${d[0]}</b><p>${d[1]}</p><p>${ICON.star} ${d[2]} · ${d[3]}</p><small>${d[4]}</small></div><span>›</span></button>`);}}
  addNearby(6);
  new IntersectionObserver(entries=>{if(!entries[0].isIntersecting||loading||S.screen!=='place'||S.mode!=='full')return;loading=true;setTimeout(()=>{addNearby(3);loading=false;},600);},{root:scroller}).observe($('#nearbyLoading'));
  // Mark decorative action-looking controls as actionable for usability testing.
  $$('.head-actions .ic').forEach(el=>{el.setAttribute('role','button');el.tabIndex=0;el.dataset.act='demo';});
  $$('.sec-head .all').forEach(el=>{if(!el.dataset.act)el.dataset.act='demo';});
  document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches('[role="button"]'))e.target.click();if(e.key==='Escape'&&pageStack.length)popPage();});
  document.addEventListener('error',e=>{if(e.target instanceof HTMLImageElement&&!e.target.dataset.fallback){e.target.dataset.fallback='true';e.target.src='img/mala-full.jpg';}},true);
  paintIcons(document);
})();
