/* Membrane lesson scene. Five verses; every action is cued to the per-turn audio timing
 * (audio/timing.js, written by tts_elevenlabs.py), so drawings land on the spoken words.
 */
(function () {
  const { el, tween, write, stroke, arrow, ease } = WB;
  const C = { na: '#f08a3c', k: '#8a55c4', fat: '#e8c45a', fatDark: '#b98d1c', ink: '#2b2b2b', red: '#d23a3a', water: '#e3eef9', grey: '#9aa3ad', note: '#8a8a8a' };
  const E = { cx: 380, cy: 345, rx: 160, ry: 105 };
  const POOL = [60, 125, 700, 560];
  const WALL_AT = [230, 309];
  const R = 19;
  const NAMES = { nate: 'Nate (Na+)', kay: 'Kay (K+)', wall: 'The Wall' };

  // t: na | k. First six sit inside the skin (drawn in verse 3); same mix inside and out on purpose.
  const IONS = [
    { t: 'k', x: 385, y: 332, name: 'kay' },
    { t: 'k', x: 320, y: 345 },
    { t: 'na', x: 450, y: 335 },
    { t: 'k', x: 410, y: 395 },
    { t: 'na', x: 350, y: 395 },
    { t: 'na', x: 475, y: 392 },
    { t: 'na', x: 125, y: 345, name: 'nate' },
    { t: 'k', x: 110, y: 255 },
    { t: 'na', x: 250, y: 170 },
    { t: 'k', x: 310, y: 165 },
    { t: 'na', x: 430, y: 170 },
    { t: 'k', x: 545, y: 190 },
    { t: 'na', x: 640, y: 262 },
    { t: 'k', x: 615, y: 372 },
    { t: 'na', x: 655, y: 445 },
    { t: 'k', x: 630, y: 515 },
    { t: 'k', x: 170, y: 475 },
    { t: 'na', x: 110, y: 430 },
    { t: 'na', x: 250, y: 525 },
  ];
  const rnd = WB.rng(5);
  const ORDER = IONS.map((_, i) => i).sort(() => rnd() - 0.5);
  const idxOf = (t) => IONS.map((s, i) => (s.t === t ? i : -1)).filter((i) => i >= 0);
  const NA = [6, ...idxOf('na').filter((i) => i !== 6)];
  const K = [0, ...idxOf('k').filter((i) => i !== 0)];

  let L = {}, S = {};

  function reset() {
    for (const id of ['world', 'speech', 'clips']) document.getElementById(id).innerHTML = '';
    const world = document.getElementById('world');
    L = {};
    for (const k of ['pool', 'memb', 'ions', 'wall', 'notes', 'fx']) L[k] = el('g', {}, world);
    S = { ions: [], chars: {} };
    WB.penHide();
  }
  const W = (x, y, s, o) => write(L.notes, x, y, s, o);

  // ---------- ions & faces ----------
  function place(ion, x, y) { ion.x = x; ion.y = y; ion.g.setAttribute('transform', `translate(${x},${y})`); }

  function makeIon(spec, idx) {
    const g = el('g', { transform: `translate(${spec.x},${spec.y})` }, L.ions);
    const pop = el('g', {}, g);
    const jig = el('g', { class: 'jig' }, pop);
    const rr = WB.rng(100 + idx);
    jig.style.setProperty('--dx', `${(rr() * 8 - 4).toFixed(1)}px`);
    jig.style.setProperty('--dy', `${(rr() * 8 - 4).toFixed(1)}px`);
    jig.style.animationDuration = `${(2.8 + rr() * 2.4).toFixed(1)}s`;
    jig.style.animationDelay = `-${(rr() * 3).toFixed(1)}s`;
    const talk = el('g', { class: 'talk' }, jig);
    const pts = [...Array(10)].map((_, i) => {
      const a = (i / 10) * Math.PI * 2, rad = R + (rr() - 0.5) * 2;
      return [Math.cos(a) * rad, Math.sin(a) * rad];
    });
    const body = el('path', { d: WB.catmull(pts, true), fill: C.grey, stroke: C.ink, 'stroke-width': 2.4, class: 'body' }, talk);
    const ion = { spec, g, pop, jig, talk, body, x: spec.x, y: spec.y, r: R, faced: !!spec.name, anchor: () => [ion.x, ion.y] };
    if (spec.name) S.chars[spec.name] = ion;
    if (spec.name === 'nate') setFace(ion, 'sleepy');
    if (!WB.instant) {
      pop.setAttribute('transform', 'scale(0.001)');
      tween(380, (t) => pop.setAttribute('transform', `scale(${Math.max(t, 0.001)})`), ease.outBack);
    }
    S.ions[idx] = ion;
    return ion;
  }

  function recolor(ion, type) {
    ion.type = type;
    ion.body.style.transition = WB.instant ? 'none' : '';
    ion.body.style.fill = type === 'na' ? C.na : C.k;
    if (!ion.faced && !ion.label) {
      ion.label = el('text', { x: 0, y: 6, 'text-anchor': 'middle', 'font-size': 17, 'font-weight': 700, fill: '#fff' }, ion.talk);
      ion.label.textContent = type === 'na' ? 'Na' : 'K';
    }
  }

  function badge(ion) {
    if (ion.badge) return;
    const b = el('g', { transform: `translate(${R * 0.78},${-R * 0.78})` }, ion.talk);
    el('circle', { r: 8.5, fill: '#fff', stroke: C.ink, 'stroke-width': 1.8 }, b);
    const t = el('text', { x: 0, y: 5.5, 'text-anchor': 'middle', 'font-size': 17, 'font-weight': 700, fill: C.ink }, b);
    t.textContent = '+';
    ion.badge = b;
    if (!WB.instant) {
      b.style.transformBox = 'fill-box'; b.style.transformOrigin = 'center';
      tween(300, (v) => { b.style.transform = `translate(${R * 0.78}px,${-R * 0.78}px) scale(${Math.max(v, 0.001)})`; }, ease.outBack);
    }
  }

  function setFace(ion, mood) {
    if (ion.face) ion.face.remove();
    const f = el('g', {}, ion.talk);
    ion.face = f;
    const line = { stroke: C.ink, 'stroke-width': 1.8, 'stroke-linecap': 'round', fill: 'none' };
    const P = (d, extra) => el('path', { d, ...line, ...extra }, f);
    const eye = (x, px = 0, py = 0, rr = 4.8) => {
      el('circle', { cx: x, cy: -5, r: rr, fill: '#fff', stroke: C.ink, 'stroke-width': 1.6 }, f);
      el('circle', { cx: x + px, cy: -5 + py, r: 2.2, fill: C.ink }, f);
    };
    const rest = (d) => P(d, { class: 'mouth-rest' });
    switch (mood) {
      case 'sleepy': [-7, 7].forEach((x) => P(`M${x - 4.5},-5 q4.5,4.5 9,0`)); rest('M-4,8 h8'); break;
      case 'open': eye(-7); eye(7); rest('M-5,7 q5,4 10,0'); break;
      case 'smug':
        eye(-7, 1.5, 1.5); eye(7, 1.5, 1.5);
        [-7, 7].forEach((x) => el('path', { d: `M${x - 5.2},-5 a5.2,5.2 0 0 1 10.4,0 z`, fill: ion.body.style.fill || C.k, stroke: C.ink, 'stroke-width': 1.6 }, f));
        rest('M-5,8 q6,3 10,-2'); break;
      case 'cocky': eye(-7, 1.5, 0); eye(7, 1.5, 0); P('M-12,-12 l9,3'); P('M3,-10 l9,-3'); rest('M-5,8 q5,4 10,-1'); break;
      case 'shout': eye(-7, 0, 0, 5.4); eye(7, 0, 0, 5.4); P('M-12,-13 l8,3'); P('M4,-10 l8,-3'); rest('M-4,8 h8'); break;
      case 'dazed': [-7, 7].forEach((x) => { P(`M${x - 3.5},-8.5 l7,7`); P(`M${x + 3.5},-8.5 l-7,7`); }); rest('M-6,8 q3,-3 6,0 t6,0'); break;
      case 'side': eye(-7, 2.4, 0); eye(7, 2.4, 0); P('M-12,-12 l9,-2'); rest('M-4,8 h8'); break;
    }
    el('ellipse', { cx: 0, cy: 8, rx: 4.5, ry: 3.6, fill: C.ink, class: 'mouth-open' }, f);
  }

  function stars(ion, on) {
    if (ion.stars) { ion.stars.remove(); ion.stars = null; }
    if (!on) return;
    const g = el('g', { transform: `translate(0,${-R - 16})` }, ion.pop);
    const orbit = el('g', { class: 'stars' }, g);
    [0, 120, 240].forEach((deg) => {
      const a = (deg * Math.PI) / 180;
      el('path', { d: 'M0,-6 L1.8,-1.8 L6,0 L1.8,1.8 L0,6 L-1.8,1.8 L-6,0 L-1.8,-1.8Z', transform: `translate(${Math.cos(a) * 14},${Math.sin(a) * 14})`, fill: '#f2c230', stroke: C.ink, 'stroke-width': 1.2 }, orbit);
    });
    ion.stars = g;
  }

  // ---------- speech bubbles ----------
  function wrap(text, max) {
    const lines = []; let cur = '';
    for (const w of text.split(' ')) {
      if (cur && (cur + ' ' + w).length > max) { lines.push(cur); cur = w; } else cur = (cur ? cur + ' ' : '') + w;
    }
    if (cur) lines.push(cur);
    return lines;
  }
  function showBubble(ch, text, name) {
    const [ax, ay] = ch.anchor();
    const lines = wrap(text, 22), size = 26;
    const w = Math.max(90, Math.max(...lines.map((l) => l.length)) * size * 0.42 + 30);
    const h = lines.length * 30 + 34;
    const bx = Math.max(70, Math.min(690 - w, ax - w / 2));
    let by = ay - ch.r - 26 - h, below = false;
    if (by < 132) { by = ay + ch.r + 26; below = true; }
    const g = el('g', { class: 'bubble' }, document.getElementById('speech'));
    const tx = Math.max(bx + 26, Math.min(bx + w - 26, ax));
    el('rect', { x: bx, y: by, width: w, height: h, rx: 16, fill: '#fff', stroke: C.ink, 'stroke-width': 2.5 }, g);
    const edge = below ? by : by + h;
    const tip = below ? ay + ch.r + 3 : ay - ch.r - 3;
    el('path', { d: `M${tx - 10},${edge} L${ax},${tip} L${tx + 10},${edge}`, fill: '#fff', stroke: C.ink, 'stroke-width': 2.5, 'stroke-linejoin': 'round' }, g);
    el('path', { d: `M${tx - 8.5},${edge} H${tx + 8.5}`, stroke: '#fff', 'stroke-width': 4 }, g);
    const nm = el('text', { x: bx + 14, y: by + 22, 'font-size': 18, 'font-weight': 700, fill: C.note }, g);
    nm.textContent = name;
    lines.forEach((l, i) => {
      const t = el('text', { x: bx + 14, y: by + 50 + i * 30, 'font-size': size, fill: C.ink }, g);
      t.textContent = l;
    });
    return g;
  }
  function speak(turn, on) {
    const ch = S.chars[turn.who];
    if (!ch) return;
    if (on) {
      if (WB.instant) return;
      ch.talk.classList.add('speaking');
      if (turn.bubble) ch.bubble = showBubble(ch, turn.bubble, NAMES[turn.who]);
    } else {
      ch.talk.classList.remove('speaking');
      const b = ch.bubble; ch.bubble = null;
      if (!b) return;
      if (WB.instant) b.remove();
      else { setTimeout(() => b.classList.add('out'), 350); setTimeout(() => b.remove(), 700); }
    }
  }

  // ---------- effects ----------
  const restart = (node, cls, ms) => { node.classList.remove(cls); void node.getBoundingClientRect(); node.classList.add(cls); setTimeout(() => node.classList.remove(cls), ms); };
  function burst(x, y) {
    if (WB.instant) return;
    const g = el('g', {}, L.fx);
    [-50, -25, 0, 25, 50].forEach((a) => {
      const r = ((180 + a) * Math.PI) / 180;
      el('path', { d: `M${x + Math.cos(r) * 10},${y + Math.sin(r) * 10} L${x + Math.cos(r) * 34},${y + Math.sin(r) * 34}`, stroke: C.red, 'stroke-width': 4, 'stroke-linecap': 'round' }, g);
    });
    setTimeout(() => g.remove(), 800);
  }
  const shake = () => { if (!WB.instant) restart(document.getElementById('world'), 'shake', 400); };
  const pulse = () => { if (!WB.instant) restart(L.memb, 'pulse', 700); };

  // ---------- scene pieces ----------
  async function pool() {
    const [x0, y0, x1, y1] = POOL, cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, a = (x1 - x0) / 2, b = (y1 - y0) / 2;
    const pts = [];
    for (let deg = 200; deg < 560; deg += 18) { // superellipse: a rounded drop-shaped tank
      const r = (deg * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r);
      pts.push([cx + a * Math.sign(c) * Math.pow(Math.abs(c), 0.57), cy + b * Math.sign(s) * Math.pow(Math.abs(s), 0.57)]);
    }
    await stroke(L.pool, pts, { closed: true, fillColor: C.water, w: 3.5, ms: 2600, seed: 7, jit: 2 });
  }

  function ring(k) {
    const pts = [];
    for (let a = 180; a < 540; a += 20) { const r = (a * Math.PI) / 180; pts.push([E.cx + (E.rx + k) * Math.cos(r), E.cy + (E.ry + k) * Math.sin(r)]); }
    return pts;
  }
  async function membrane() {
    await Promise.all([
      stroke(L.memb, ring(0), { color: C.fat, w: 19, closed: true, ms: 3400, seed: 10, jit: 1.2 }),
      stroke(L.memb, ring(10), { color: C.ink, w: 2.2, closed: true, ms: 3400, seed: 11, jit: 1.2, cursor: false }),
      stroke(L.memb, ring(-10), { color: C.ink, w: 2.2, closed: true, ms: 3400, seed: 12, jit: 1.2, cursor: false }),
    ]);
  }

  function makeWall() {
    const g = el('g', { transform: `translate(${WALL_AT[0]},${WALL_AT[1]})` }, L.wall);
    const drop = el('g', {}, g);
    const talk = el('g', { class: 'talk' }, drop);
    const art = el('g', { transform: 'scale(1.35)' }, talk);
    const ink = { fill: C.ink };
    el('rect', { x: -27, y: -9, width: 23, height: 15, rx: 5, ...ink, stroke: '#fff', 'stroke-width': 1.5 }, art);
    el('rect', { x: 4, y: -9, width: 23, height: 15, rx: 5, ...ink, stroke: '#fff', 'stroke-width': 1.5 }, art);
    el('path', { d: 'M-4,-4 h8', stroke: C.ink, 'stroke-width': 3 }, art);
    el('path', { d: 'M-23,-6 h5 M8,-6 h5', stroke: '#fff', 'stroke-width': 1.8, 'stroke-linecap': 'round' }, art);
    el('path', { d: 'M-29,-15 l23,6 M29,-15 l-23,6', stroke: C.ink, 'stroke-width': 4, 'stroke-linecap': 'round' }, art);
    el('path', { d: 'M-10,17 h20', stroke: C.ink, 'stroke-width': 3.5, 'stroke-linecap': 'round', class: 'mouth-rest' }, art);
    el('rect', { x: -8, y: 13, width: 16, height: 8, rx: 3, ...ink, class: 'mouth-open' }, art);
    S.chars.wall = { talk, anchor: () => WALL_AT, r: 40 };
    if (!WB.instant) {
      drop.setAttribute('transform', 'translate(0,-90)');
      tween(600, (t) => drop.setAttribute('transform', `translate(0,${-90 * (1 - t)})`), ease.outBack).then(() => { shake(); pulse(); });
    }
  }

  function magnet() {
    const g = el('g', {}, L.notes);
    el('path', { d: 'M1036,108 v16 a16,16 0 0 0 32,0 v-16', stroke: C.ink, 'stroke-width': 7, fill: 'none', 'stroke-linecap': 'round' }, g);
    el('path', { d: 'M1036,108 v8', stroke: C.red, 'stroke-width': 7, 'stroke-linecap': 'round' }, g);
    el('path', { d: 'M1068,108 v8', stroke: '#3d7cc9', 'stroke-width': 7, 'stroke-linecap': 'round' }, g);
  }

  function legend(y, type, txt) {
    const d = el('circle', { cx: 762, cy: y - 9, r: 11, fill: type === 'na' ? C.na : C.k, stroke: C.ink, 'stroke-width': 2 }, L.notes);
    if (!WB.instant) {
      d.style.transformBox = 'fill-box'; d.style.transformOrigin = 'center';
      tween(300, (t) => { d.style.transform = `scale(${Math.max(t, 0.001)})`; }, ease.outBack);
    }
    return W(785, y, txt, { size: 32, weight: 700 });
  }

  // hydration shell: oxygen (blue) faces the cation, hydrogens point away
  const COAT = [830, 598];
  function coatIon() {
    const g = el('g', { transform: `translate(${COAT[0]},${COAT[1]})` }, L.notes);
    const rr = WB.rng(77);
    const pts = [...Array(10)].map((_, i) => { const a = (i / 10) * Math.PI * 2, r = 24 + (rr() - 0.5) * 2; return [Math.cos(a) * r, Math.sin(a) * r]; });
    el('path', { d: WB.catmull(pts, true), fill: C.na, stroke: C.ink, 'stroke-width': 2.4 }, g);
    const t = el('text', { x: 0, y: 7, 'text-anchor': 'middle', 'font-size': 22, 'font-weight': 700, fill: '#fff' }, g);
    t.textContent = 'Na';
    el('circle', { cx: 18, cy: -18, r: 8.5, fill: '#fff', stroke: C.ink, 'stroke-width': 1.8 }, g);
    const p = el('text', { x: 18, y: -12.5, 'text-anchor': 'middle', 'font-size': 17, 'font-weight': 700, fill: C.ink }, g);
    p.textContent = '+';
    if (!WB.instant) { g.style.opacity = 0; tween(350, (v) => { g.style.opacity = v; }); }
  }
  function waterMolecule(k) {
    const a = ((k * 60 + 30) * Math.PI) / 180, r = 50;
    const ox = COAT[0] + Math.cos(a) * r, oy = COAT[1] + Math.sin(a) * r;
    const g = el('g', {}, L.notes);
    for (const s of [-40, 40]) {
      const h = a + (s * Math.PI) / 180;
      el('circle', { cx: ox + Math.cos(h) * 10, cy: oy + Math.sin(h) * 10, r: 3.6, fill: '#fff', stroke: C.ink, 'stroke-width': 1.2 }, g);
    }
    el('circle', { cx: ox, cy: oy, r: 8.5, fill: '#9cc7ee', stroke: C.ink, 'stroke-width': 1.6 }, g);
    if (!WB.instant) { g.style.opacity = 0; tween(300, (v) => { g.style.opacity = v; }); }
  }

  // ---------- verses ----------
  function verse1(c) {
    const { at, T } = c;
    at(T(0, 0.3), () => write(L.notes, 60, 92, 'Inside one drop of salty water', { size: 44, weight: 700, ms: 1900 }));
    at(T(0, 2.6), pool);
    ORDER.forEach((idx, n) => at(T(1, 0.1) + n * 0.52, () => makeIon(IONS[idx], idx)));
    at(T(1, 0.3), () => W(740, 112, 'salt + water', { size: 36, weight: 700 }));
    at(T(1, 2.2), () => { magnet(); return W(740, 152, 'water = tiny magnets', { size: 30 }); });
    at(T(1, 4.4), () => W(740, 188, 'they rip salt into charged bits', { size: 30 }));
    at(T(1, 8.6), async () => {
      await W(740, 250, 'charged bits =', { size: 40, weight: 700, ms: 900 });
      const ions = await W(990, 250, 'IONS', { size: 48, weight: 700, fill: C.red, ms: 600 });
      await stroke(L.notes, [[985, 262], [1030, 266], [1078, 259]], { color: C.red, w: 3, ms: 350 });
      await arrow(L.notes, [[734, 262], [700, 262], [666, 262]], { color: C.red, w: 3, ms: 400 });
      return ions;
    });
    at(T(2, 0.3), () => setFace(S.chars.nate, 'open'));
  }

  function verse2(c) {
    const { at, T } = c;
    at(T(1, 0.3), () => setFace(S.chars.nate, 'cocky'));
    NA.forEach((i, n) => at(T(1, 0.5) + n * 0.33, () => recolor(S.ions[i], 'na')));
    at(T(1, 1.2), () => legend(305, 'na', 'Na+  sodium'));
    at(T(2, 0.2), () => setFace(S.chars.kay, 'smug'));
    K.forEach((i, n) => at(T(2, 0.9) + n * 0.4, () => recolor(S.ions[i], 'k')));
    at(T(2, 1.6), () => legend(348, 'k', 'K+  potassium'));
    at(T(3, 0), () => setFace(S.chars.nate, 'shout'));
    IONS.forEach((_, n) => at(T(4, 0.3) + n * 0.09, () => badge(S.ions[n])));
    at(T(4, 1.2), () => W(740, 398, 'both +1 = one electron missing', { size: 28 }));
    at(T(4, 6.0), () => W(740, 446, '(negative ions: off-stage for now)', { size: 24, fill: C.note }));
  }

  function verse3(c) {
    const { at, T } = c;
    at(T(0, 1.6), membrane);
    at(T(1, 2.2), () => W(380, 286, 'inside', { size: 24, anchor: 'middle', weight: 700 }));
    at(T(1, 4.6), () => W(112, 205, 'outside', { size: 30, weight: 700 }));
    at(T(2, 0.1), () => setFace(S.chars.kay, 'sleepy'));
    at(T(3, 0.1), () => setFace(S.chars.nate, 'shout'));
    at(T(4, 0.9), async () => {
      await W(300, 525, 'fat skin (lipid)', { size: 30, fill: C.fatDark, weight: 700 });
      await arrow(L.notes, [[400, 498], [398, 482], [396, 468]], { color: C.fatDark, w: 3, ms: 400, head: 11 });
    });
    at(T(5, 0), makeWall);
  }

  function verse4(c) {
    const { at, T } = c, N = () => S.chars.nate;
    at(T(1, 0.3), () => setFace(N(), 'cocky'));
    at(T(1, 2.3), () => tween(800, (t) => place(N(), 125 - 27 * t, 345)));
    at(T(1, 3.2), () => tween(780, (t) => place(N(), 98 + 90 * t * t, 345), ease.linear));
    at(T(2, 0), () => {
      burst(208, 345); shake(); pulse();
      setFace(N(), 'dazed'); stars(N(), true); N().jig.setAttribute('class', 'dizzy');
      return tween(650, (t) => place(N(), 188 - 40 * t, 345), ease.outBack);
    });
    at(T(4, 0), () => setFace(S.chars.kay, 'open'));
    // the why: the hydration coat
    at(T(6, 0.6), () => W(745, 500, 'ion + its water coat', { size: 28, weight: 700 }));
    at(T(6, 2.0), coatIon);
    for (let k = 0; k < 6; k++) at(T(6, 4.0) + k * 0.6, () => waterMolecule(k));
    at(T(6, 9.0), async () => {
      await arrow(L.notes, [[905, 590], [930, 584], [958, 580]], { color: C.ink, w: 3, ms: 500, head: 11 });
      const slab = [[975, 555], [1062, 552], [1150, 555], [1152, 580], [1150, 605], [1062, 608], [975, 605], [973, 580]];
      await stroke(L.notes, slab, { color: C.fatDark, w: 3, closed: true, fillColor: C.fat, ms: 900, seed: 21 });
      await W(992, 588, 'fat', { size: 28, weight: 700, fill: C.fatDark, ms: 300 });
    });
    at(T(6, 12.0), async () => {
      await stroke(L.notes, [[1075, 558], [1125, 602]], { color: C.red, w: 5, ms: 220 });
      await stroke(L.notes, [[1125, 558], [1075, 602]], { color: C.red, w: 5, ms: 220 });
    });
    at(T(6, 12.2), () => W(975, 645, "fat can't keep", { size: 26, fill: C.red, weight: 700, ms: 700 }));
    at(T(6, 12.9), () => W(975, 676, 'the coat on', { size: 26, fill: C.red, weight: 700, ms: 600 }));
    at(T(7, 3.9), () => { pulse(); });
  }

  function verse5(c) {
    const { at, T } = c;
    at(T(0, 0), () => {
      stars(S.chars.nate, false); S.chars.nate.jig.setAttribute('class', 'jig');
      setFace(S.chars.nate, 'side'); setFace(S.chars.kay, 'side');
    });
    at(T(1, 0.1), () => write(L.notes, 60, 625, 'If this skin blocks every ion... how could the', { size: 32, weight: 700, fill: C.red, ms: 3200 }));
    at(T(1, 3.4), () => write(L.notes, 60, 668, 'inside ever end up different from the outside?', { size: 32, weight: 700, fill: C.red, ms: 3000 }));
    at(T(1, 6.5), () => arrow(L.notes, [[570, 588], [576, 515], [512, 438]], { color: C.red, w: 3, ms: 700, head: 14 }));
  }

  const verses = [
    { id: 'b1_drop', build: verse1 },
    { id: 'b2_meet', build: verse2 },
    { id: 'b3_skin', build: verse3 },
    { id: 'b4_bounce', build: verse4 },
    { id: 'b5_puzzle', build: verse5 },
  ];

  function hud(status, cur, n) {
    const dots = document.getElementById('hud-dots');
    dots.innerHTML = '';
    for (let i = 0; i < n; i++) el('circle', { cx: 740 + i * 22, cy: 48, r: 6, fill: i <= cur ? C.ink : 'none', stroke: C.note, 'stroke-width': 1.6 }, dots);
    const t = document.getElementById('hud-text');
    t.setAttribute('fill', status === 'end' ? C.red : C.note);
    t.textContent = { idle: '', playing: 'space: skip · backspace: back · R: replay', done: 'space: next · backspace: back · R: replay', end: 'your turn: answer in chat' }[status];
  }

  reset();
  WB.controller({ verses, audioDir: 'audio', reset, speak, hud, onStart: () => { const i = document.getElementById('intro'); if (i) i.remove(); } });
})();
