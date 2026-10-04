# Engine (`engine.js`, global `WB`)

Load with a plain script tag (works from `file://`). Needs `<g id="pen">`, `<defs id="clips">`, `<g id="world">`, `<g id="speech">` in the SVG (copy from `membrane.html`).

- `WB.stroke(layer, pts, {color, w, closed, ms, jit, seed, fillColor, dash, cursor})` hand-drawn Catmull-Rom path, draw-in, pen on the tip
- `WB.arrow(layer, pts, opts)` stroke plus arrowhead
- `WB.write(layer, x, y, text, {size, fill, weight, anchor, ms})` left-to-right reveal with the pen
- `WB.tween(ms, update, ease)`, `WB.ease.{linear,inOut,outBack}`, `WB.el`, `WB.rng`, `WB.catmull`, `WB.jitter`
- `WB.controller({verses, audioDir, reset, speak, hud, onStart})` handles Space (advance or finish), Backspace (back one verse), R (replay), audio, cue scheduling. Each verse: `{ id, build(ctx) }`, `id` = the mp3 name. In `build`, `ctx.at(time, fn)` schedules, `ctx.T(turn, off)` is a turn start, `ctx.W(turn, 'word', nth, off)` is the time that word is spoken.
- Scene supplies `reset()`, `speak(turn, on)` (talking animation, bubble from `turn.bubble`), `hud(status, cur, n)` (last status `end` should tell the user to answer in chat).

## Replay-safety (the usual bug source)
Backspace and R rebuild earlier verses by running every action with `WB.instant = true`, awaiting each in time order. So each action must create its elements synchronously or through `WB.*`, keep state in the scene state (cleared by `reset`), and never rely on `setTimeout` for anything that must persist.

`neuro/windows/membrane/membrane.js` has working faces, speech bubbles, ions, a wall, bursts and shakes to copy or improve.
