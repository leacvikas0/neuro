---
name: whiteboard
description: Use when Vikas needs a visual for a lesson: an interactive sim, a drawn board, or a voiced Tale. The teacher decides what the scene needs; this skill holds only the few hard rules and points to optional guides.
---

# Visuals and voice

The teaching method lives in `teach.md` and the subject's own protocol. This skill is the build side. You decide what each scene needs: form, look, layout, voice.

## Hard rules
1. **Build iteratively.** Add to the scene as the conversation grows per topic, and plan smartly beforehand. Change or replace anything that is holding the lesson back.
2. **Build fast and good.** These are one-off creations for one specific purpose. Prefer speed without losing quality.
3. **Fit desktop and tablet (iPad).** Readable text, touch-friendly controls.
4. **Respect the subject's own rules.** Accuracy first. Label toys and approximations honestly.
5. **No build step.** One self-contained HTML file per scene, in `<subject>/windows/<name>/`.
6. **Serving.** On Hoplite (a `HOPLITE_*` env var is set, or `sandbox_control` exists), use the managed Preview on port 3000: run script `python teach/serve.py 3000`, start it with `preview_start`, and hand off the returned `agent-preview:` reference. Edit pages in place; a refresh shows changes. Locally, run `python teach/serve.py` and share the URL it prints.
7. **Replay-safe actions** for scenes that have replay (Tales): every action must work when run instantly. See `guides/engine.md`.

## Optional guides
Read only what the scene needs.
| Need | Read |
|---|---|
| Moving parts he can play with | `guides/sim.md` |
| A drawn picture of one idea | `guides/static-board.md` |
| A voiced story with characters | `guides/tale.md`, `guides/elevenlabs.md`, `guides/engine.md` |

These guides describe past habits (Caveat font, `#f7f6f2` background, ElevenLabs v4, verse-by-verse Tales, delegating code to child agents). They are advice, not requirements. Voice engine is a per-subject choice. Build fresh when it is better.

The previous, stricter version is in `archive/skills/whiteboard-SKILL.old.md`.
