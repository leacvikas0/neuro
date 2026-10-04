/* Whiteboard engine: hand-drawn strokes, left-to-right text reveal, marker pen cursor,
 * and a verse controller (Space / Backspace / R) that syncs actions to per-turn audio timing.
 * Plain script (no modules) so boards also open from file://. Scene files use window.WB.
 */
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const INK = '#2b2b2b';
  const WB = (window.WB = { instant: false, INK });

  const linear = (t) => t;
  const inOut = (t) => (t < 0.5 ? 2 * t * t : 1 - 2 * (1 - t) * (1 - t));
  const outBack = (t) => 1 + 2.4 * Math.pow(t - 1, 3) + 1.4 * Math.pow(t - 1, 2);
  WB.ease = { linear, inOut, outBack };

  WB.rng = (a) => () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  WB.el = (name, attrs, parent) => {
    const e = document.createElementNS(NS, name);
    for (const k in attrs || {}) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };

  // ---- tweens -------------------------------------------------------------
  const tweens = new Set();
  let looping = false;
  function loop(now) {
    for (const tw of [...tweens]) {
      const p = Math.min(1, (now - tw.t0) / tw.ms);
      tw.update(tw.ease(p));
      if (p >= 1) { tweens.delete(tw); tw.res(); }
    }
    if (tweens.size) requestAnimationFrame(loop); else looping = false;
  }
  WB.tween = (ms, update, ease = inOut) =>
    new Promise((res) => {
      if (WB.instant || ms <= 0) { update(1); res(); return; }
      tweens.add({ t0: performance.now(), ms, update, ease, res });
      if (!looping) { looping = true; requestAnimationFrame(loop); }
    });
  WB.finishTweens = () => { for (const tw of [...tweens]) { tw.update(1); tweens.delete(tw); tw.res(); } };
  WB.dropTweens = () => tweens.clear();
  WB.hasTweens = () => tweens.size > 0;

  // ---- marker pen ---------------------------------------------------------
  WB.pen = (x, y, color) => {
    const pen = document.getElementById('pen');
    pen.style.display = 'block';
    pen.setAttribute('transform', `translate(${x},${y})`);
    pen.firstElementChild.setAttribute('stroke', color || INK);
  };
  WB.penHide = () => { const p = document.getElementById('pen'); if (p) p.style.display = 'none'; };

  // ---- hand-drawn paths ---------------------------------------------------
  WB.catmull = (pts, closed) => {
    const n = pts.length;
    const g = (i) => (closed ? pts[(i + n) % n] : pts[Math.max(0, Math.min(n - 1, i))]);
    const f = (v) => v.toFixed(1);
    let d = `M${f(pts[0][0])},${f(pts[0][1])}`;
    for (let i = 0; i < (closed ? n : n - 1); i++) {
      const p0 = g(i - 1), p1 = g(i), p2 = g(i + 1), p3 = g(i + 2);
      d += ` C${f(p1[0] + (p2[0] - p0[0]) / 6)},${f(p1[1] + (p2[1] - p0[1]) / 6)}` +
           ` ${f(p2[0] - (p3[0] - p1[0]) / 6)},${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])},${f(p2[1])}`;
    }
    return closed ? d + 'Z' : d;
  };
  WB.jitter = (pts, amt, seed) => {
    const r = WB.rng(seed);
    return pts.map(([x, y]) => [x + (r() - 0.5) * 2 * amt, y + (r() - 0.5) * 2 * amt]);
  };

  /** Draws a jittered Catmull-Rom stroke with draw-in animation and the pen following the tip. */
  WB.stroke = async (layer, pts, o = {}) => {
    const { color = INK, w = 3, closed = false, ms = 900, jit = 1.2, seed = 1, dash = null, fillColor = null, opacity = 1 } = o;
    const d = WB.catmull(WB.jitter(pts, jit, seed), closed);
    const fill = fillColor ? WB.el('path', { d, fill: fillColor, stroke: 'none', opacity: WB.instant ? opacity : 0 }, layer) : null;
    const p = WB.el('path', { d, fill: 'none', stroke: color, 'stroke-width': w, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity }, layer);
    const finish = () => { p.style.strokeDasharray = dash || 'none'; p.style.strokeDashoffset = 0; if (fill) fill.setAttribute('opacity', opacity); };
    if (WB.instant) { finish(); return p; }
    const len = p.getTotalLength();
    p.style.strokeDasharray = len; p.style.strokeDashoffset = len;
    await WB.tween(ms, (t) => {
      p.style.strokeDashoffset = len * (1 - t);
      const pt = p.getPointAtLength(len * t);
      if (o.cursor !== false) WB.pen(pt.x, pt.y, color);
      if (fill) fill.setAttribute('opacity', t * opacity);
    });
    finish(); WB.penHide();
    return p;
  };

  /** Stroke plus a hand-drawn arrowhead at its end. */
  WB.arrow = async (layer, pts, o = {}) => {
    const p = await WB.stroke(layer, pts, o);
    const len = p.getTotalLength();
    const e = p.getPointAtLength(len), b = p.getPointAtLength(Math.max(0, len - 10));
    const ang = Math.atan2(e.y - b.y, e.x - b.x), h = o.head || 13;
    for (const s of [0.5, -0.5]) {
      const a = ang + Math.PI - s;
      WB.el('path', { d: `M${e.x},${e.y} l${Math.cos(a) * h},${Math.sin(a) * h}`, stroke: o.color || INK, 'stroke-width': o.w || 3, 'stroke-linecap': 'round', fill: 'none' }, layer);
    }
    return p;
  };

  /** Writes text left to right (clip reveal) with the pen riding the leading edge. */
  WB.write = async (layer, x, y, str, o = {}) => {
    const { size = 30, fill = INK, weight = 500, anchor = 'start', ms = null } = o;
    const t = WB.el('text', { x, y, 'font-size': size, 'font-weight': weight, fill, 'text-anchor': anchor }, layer);
    t.textContent = str;
    if (WB.instant) return t;
    const bb = t.getBBox();
    const id = 'clip' + (WB._uid = (WB._uid || 0) + 1);
    const cp = WB.el('clipPath', { id }, document.getElementById('clips'));
    const r = WB.el('rect', { x: bb.x - 4, y: bb.y - 4, width: 0, height: bb.height + 8 }, cp);
    t.setAttribute('clip-path', `url(#${id})`);
    await WB.tween(ms ?? Math.max(500, str.length * 55), (p) => {
      r.setAttribute('width', (bb.width + 8) * p);
      WB.pen(bb.x + bb.width * p, y - size * 0.2, fill);
    }, linear);
    t.removeAttribute('clip-path'); cp.remove(); WB.penHide();
    return t;
  };

  // ---- verse controller ----------------------------------------------------
  /** cfg: { verses:[{id, build(ctx)}], audioDir, reset(), speak(turn,on), hud(status,cur,n), onStart() } */
  WB.controller = (cfg) => {
    let cur = -1, token = 0, audio = null, status = 'idle', busy = false, pending = [], finish = null;
    const last = cfg.verses.length - 1;
    const flush = () => new Promise((r) => setTimeout(r, 0));
    const safe = (fn) => { try { const r = fn(); if (r && r.catch) r.catch(console.error); } catch (e) { console.error(e); } };
    // Instant replays await each action so async actions land in time order (z-order stays correct).
    const safeAwait = async (fn) => { try { await fn(); } catch (e) { console.error(e); } };
    const stopAudio = () => { if (audio) { audio.pause(); audio = null; } };

    function build(i) {
      const b = cfg.verses[i];
      const tm = (window.LESSON_TIMING || {})[b.id] || { turns: [], duration: 8 };
      const acts = [];
      const ctx = {
        turns: tm.turns,
        // Time of the nth spoken occurrence of `word` in turn k (falls back to the turn start).
        W: (k, word, nth = 0, off = 0) => {
          const w = (tm.words || []).filter((x) => x.turn === k && x.w === String(word).toLowerCase().replace(/[^a-z0-9]/g, ''))[nth];
          return (w ? w.s : tm.turns[k] && tm.turns[k].start != null ? tm.turns[k].start : 0) + off;
        },
        at: (t, fn) => acts.push({ t, fn }),
        T: (k, off = 0) => (tm.turns[k] && tm.turns[k].start != null ? tm.turns[k].start : 0) + off,
      };
      b.build(ctx);
      return { acts, tm };
    }

    async function play(i) {
      const my = token;
      cur = i; status = 'playing'; cfg.hud(status, cur, cfg.verses.length);
      const { acts, tm } = build(i);
      tm.turns.forEach((turn) => {
        if (turn.start == null) return;
        acts.push({ t: turn.start, fn: () => cfg.speak(turn, true) });
        acts.push({ t: Math.max(turn.start, turn.end - 0.05), fn: () => cfg.speak(turn, false) });
      });
      acts.sort((a, b) => a.t - b.t);
      pending = acts;
      audio = new Audio(`${cfg.audioDir}/${cfg.verses[i].id}.mp3`);
      let t0 = performance.now();
      try { await audio.play(); t0 = performance.now(); } catch (e) { console.warn('audio blocked', e); }
      if (my !== token) return;
      const total = tm.duration + 0.5;
      await new Promise((resolve) => {
        let alive = true;
        finish = () => { alive = false; resolve(); };
        const tick = () => {
          if (!alive) return;
          if (my !== token) { alive = false; return resolve(); }
          if (busy) return requestAnimationFrame(tick);
          const t = (performance.now() - t0) / 1000;
          while (pending.length && pending[0].t <= t) safe(pending.shift().fn);
          if (t >= total && !pending.length && !WB.hasTweens()) { alive = false; return resolve(); }
          requestAnimationFrame(tick);
        };
        tick();
      });
      if (my !== token) return;
      status = i === last ? 'end' : 'done';
      cfg.hud(status, cur, cfg.verses.length);
    }

    async function jump(i) {
      if (busy) return;
      busy = true; token++; stopAudio(); WB.dropTweens(); cfg.reset();
      if (cfg.onStart) cfg.onStart();
      WB.instant = true;
      for (let j = 0; j < i; j++) for (const a of build(j).acts.sort((x, y) => x.t - y.t)) await safeAwait(a.fn);
      WB.finishTweens(); await flush();
      WB.instant = false; busy = false;
      return play(i);
    }

    async function skip() {
      if (status !== 'playing' || busy) return;
      busy = true; stopAudio(); WB.instant = true;
      WB.finishTweens(); await flush();
      for (const a of pending.splice(0)) await safeAwait(a.fn);
      WB.finishTweens(); await flush();
      WB.instant = false; busy = false; WB.penHide();
      if (finish) finish();
    }

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (status === 'idle') jump(0);
        else if (status === 'playing') skip();
        else if (status === 'done') jump(cur + 1);
      } else if (e.code === 'Backspace') {
        e.preventDefault();
        if (cur >= 0) jump(Math.max(0, cur - 1));
      } else if (e.code === 'KeyR') {
        if (cur >= 0) jump(cur);
      }
    });
    cfg.hud(status, cur, cfg.verses.length);
  };
})();
