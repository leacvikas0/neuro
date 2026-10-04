---
name: whiteboard
description: Use when Vikas needs a visual or story-driven explanation of a mechanism (math, ML, chemistry, biology, neuro). Builds an interactive sim, a hand-drawn SVG board, or a voiced Tale with characters (ElevenLabs Eleven v4). Read this first, then only the guide for the path you pick.
---

# Visuals and voice

The teaching rules live in `teach/TEACHER.md`; this skill is the build side. Notes, questions and speech live inside the picture (Caveat handwriting, background `#f7f6f2` for boards), never in HTML text panels.

## Always
1. **Audio is ElevenLabs Eleven v4. Never v3.** `tts_elevenlabs.py` pins it; the API defaults to v3 if `model_id` is omitted.
2. **Voiced lessons are performed, not read.** Distinct voices, expressive tags on every line, humour welcome. No flat narrator.
3. **One layer at a time, on the same picture.** Never replace the board or sim.
4. **End on a red question and stop.** Do not reveal what it asks him to derive.
5. **Respect the science gates** in the subject context.
6. **Replay-safe actions** (boards): Space/Backspace/R rebuild earlier verses instantly, so every action must work when run instantly.
7. **Fit desktop and tablet (iPad).** Readable text, touch-friendly controls.
8. **Plan before code.** Approved plan first (see `guides/tale.md`), then build once, carefully. Vikas reports defects; fix exactly those.
9. **Serve with `python teach/serve.py`.** It prints the URL for local or cloud. Never hardcode a port.

## Pick a path
| Need | Make | Read |
|---|---|---|
| Moving parts, dials, he predicts then tests | Interactive sim (default) | `guides/sim.md` |
| Quick picture of one idea | Static board | `guides/static-board.md` |
| Mechanism as a story with characters | Tale (voiced, verse by verse) | `guides/tale.md` |
| Anything voiced | + voice rules | `guides/elevenlabs.md` |
| Board scene code | + engine API | `guides/engine.md` |

A **Tale** is a lesson, a **Verse** is one step (one drawn element plus its spoken lines), a **Saga** is a series. Sims and Tales combine: a Tale verse can embed a sim he operates.

## Delegation (tokens go to code, spend them carefully)
You are the teacher and planner. Decide target, cast, cause to effect per verse, script and tags yourself. Delegate the heavy code, in parallel.
- **Visual and scene code goes to the strongest coding model available.** Pass the model explicitly if the environment supports it.
- **Audio stays with you**: write the script, run `tts_elevenlabs.py` (one command). Models cannot hear audio.
- **Parallel children get disjoint files** (for example one file per verse).
- **Prompts are self-contained**: plan, guide paths, cue words from `audio/timing.js`, owned files, "be efficient". Children cannot ask questions.
- **Reports are 10 lines or fewer**, a useful summary for the teacher. Review reports, not whole files.
- Do not delegate an edit smaller than its prompt.

## Everything else is advice
Cast size, style, layout and old pieces are suggestions from past Tales. There is no reuse mandate: build fresh when it is better, and keep a drawing for later only when it is clearly better than what exists. Fixed: element colours and charges, replay-safety.
