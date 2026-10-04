---
name: whiteboard
description: Use when Vikas needs a spatial, visual, or story-driven explanation of a mechanism (math, ML, chemistry, biology, neuro). Builds a hand-drawn SVG board, either a quick static board or a voiced Tale with characters (ElevenLabs Eleven v4). Read this first, then only the guide for the path you pick.
---

# Whiteboard

Explain by drawing and performing, not by writing paragraphs. Notes, questions and speech live inside the SVG (Caveat handwriting, background `#f7f6f2`), never in HTML text panels.

## Always
1. **Audio is ElevenLabs Eleven v4. Never v3.** (`tts_elevenlabs.py` pins it; the API defaults to v3 if `model_id` is omitted.)
2. **Voiced lessons are performed, not read.** A cast of distinct voices, expressive tags on every line. No flat narrator.
3. **One layer at a time, drawn on the same image.** Never replace the board.
4. **End on a red question and stop.** Do not reveal what it asks him to derive.
5. **Respect the science gates** in the subject context (what must not be introduced yet).
6. **Replay-safe actions.** Space/Backspace/R rebuild earlier verses instantly, so every action must work when run instantly.
7. **Fit desktop and tablet (iPad).** Fixed `viewBox="0 0 1200 720"` scaled to the viewport, readable text. Nothing more.
8. **Trust your work.** Write it once, carefully. Vikas reports defects; fix exactly those. No proactive test rigs.

## Pick a path
| Need | Make | Read |
|---|---|---|
| Quick picture of one idea | Static board | `guides/static-board.md` |
| A new mechanism, story, characters | Tale (voiced, verse by verse) | `guides/tale.md` |
| Anything voiced | + ElevenLabs rules | `guides/elevenlabs.md` |
| Writing scene code | + engine API | `guides/engine.md` |

Pick the smallest thing that works. Words in this system: a **Tale** is a lesson, a **Verse** is one step of it (one drawn element plus its spoken lines), a **Saga** is a series of Tales.

## Everything else is advice
Cast size, drawing style, layout and reusable pieces are suggestions from past Tales. Override them when you have a better idea. Fresh drawings are welcome; if one is clearly better than what exists, keep it for the next Tale.
