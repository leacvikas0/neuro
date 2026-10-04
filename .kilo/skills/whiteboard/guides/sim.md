# Interactive sim

The default for anything with moving parts. He predicts, then manipulates, then sees.

- One self-contained HTML file in `<subject>/windows/<name>/` (plain JS, canvas or SVG, no build step, works from the repo server).
- **One open question**, zero to three controls, and a readout that makes the hidden quantity visible. The sim shows the blockage, not the whole map.
- Start in a state where his current model predicts something. Let him commit a prediction (click, slider, or chat) before running.
- Honest labels: toy, equation-based, or empirical. A moving picture is not evidence.
- Keep the whiteboard look (`#f7f6f2`, Caveat) unless a better look fits; voice can be layered via `engine.js` and `tts_elevenlabs.py` when characters help.
- Touch-friendly on iPad. Serve with `python teach/serve.py`; reply with the URL, the one question, and stop.
