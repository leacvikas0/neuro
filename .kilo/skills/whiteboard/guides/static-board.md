# Static board

One SVG, a few layers that fade in, a red question at the end. Style reference: `math/windows/odd_squares.html`.

- Single file in `<subject>/windows/`. Layers fade in with `opacity` and `stroke-dashoffset` only, so the final state is the real state.
- Notes are marker-style text inside the SVG, conversational and short.
- Evolve one diagram; do not lay out several panels at once (`neuro/windows/battery_map.html` was disliked for that).
- Finish with a red question pointing at the exact blockage.
- Serve from the repo root: `python -m http.server 8765`. Reply with `http://localhost:8765/<subject>/windows/<file>.html`, one line on the question, and stop.
