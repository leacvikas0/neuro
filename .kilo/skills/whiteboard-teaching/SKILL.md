---
name: whiteboard-teaching
description: Use when the user needs spatial, physical, or visual reasoning to understand Math, ML, or Neuroscience bottlenecks instead of heavy text. Builds a hand-drawn SVG whiteboard, optionally as a beat-by-beat voiced lesson with characters (ElevenLabs Eleven v4 audio).
---

# Whiteboard Teaching

## Overview
When the user hits a conceptual bottleneck, stop explaining with abstract text. Draw a minimal, spatial whiteboard in HTML/SVG and write your notes directly on the canvas as if using a marker. Two modes:

- **Static board:** one SVG, a few layers fading in (see `math/windows/odd_squares.html`).
- **Beat-built lesson:** one element per beat, drawn live on the same image, voiced by a small cast of characters, ending on a question that waits for the user (see `neuro/windows/membrane/`).

## When to Use
- Abstract "what's the point" questions about architecture or mechanisms.
- Terminology is drowning the idea; a shape, layout, or moving scene clarifies it.
- The user shows friction or fatigue with long text.

## Core Rules
1. **Playful, integrated narrative.** No dry textbook prose. Text is part of the drawing, not an essay beside it.
2. **No UI text panels.** Notes, questions, and speech bubbles live inside the SVG, in Caveat (`<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap" rel="stylesheet">`, `font-family: 'Caveat', cursive`).
3. **Continuous mutation.** One consistent image. Each step adds to it; never replace it with a new layout.
4. **End on a color-coded question** (red) that points at the exact blockage the user must solve. Then stop and wait for his answer.
5. **Science gates.** Do not reveal what the question is meant to make the user derive.

## Layout (correct by construction)
1. **Canvas:** `<svg viewBox="0 0 1200 720">`, `width:100vw; height:100vh`, background `#f7f6f2`. Keep everything inside x 40-1160, y 40-690.
2. **Zone plan comment before the SVG:** every block as `name: x1-x2, y1-y2`; no intersections; at least 20px between blocks.
3. **Text width:** Caveat width ~ characters x font-size x 0.4 (bold ~0.42). Shorten or split lines that exceed their zone.
4. **Spacing:** baseline-to-baseline at least 1.3 x font-size. Sizes: notes 24-30, headline 44-52, final question 32-38.
5. **Final state is the real state:** animate only opacity, stroke-dashoffset, and transforms so every element ends fully visible in its planned place.

## Beat-build workflow
Files (copy the membrane lesson as a template):
```
<subject>/windows/<lesson>/
  <lesson>.html     markup, CSS, zone plan, loads audio/timing.js, engine.js, <lesson>.js
  <lesson>.js       scene: layers, characters, one build(ctx) function per beat
  lesson.json       cast + voiced turns (the audio script)
  audio/            <beat id>.mp3, timing.json, timing.js  (generated)
.kilo/skills/whiteboard-teaching/engine.js          shared engine (strokes, text reveal, pen, controller)
.kilo/skills/whiteboard-teaching/tts_elevenlabs.py  audio generator
```
Rules:
- **Space** advances; during a beat it finishes the beat instantly and stops audio. **Backspace** goes back one beat (instantly rebuilds earlier beats, replays that one). **R** replays the current beat. Show "press space" on load (browsers block audio autoplay until a key press).
- **One element per beat**, drawn on top of the existing board. Reveal text left to right; pen follows the stroke tip; hand-drawn jittered Catmull-Rom paths.
- **Cue by speech, not by guess:** `ctx.at(ctx.T(turn, offsetSeconds), fn)`. Turn start/end come from the real audio (`timing.js`). Characters get a bubble and a talking animation automatically from each turn's `who` and `bubble`.
- Actions must be re-runnable instantly (rebuilds call them with `WB.instant = true`): create elements synchronously, animate through `WB.tween/stroke/write`, keep state in the scene's `S` object, and avoid raw `setTimeout` for anything that must persist.
- **Last beat poses the question and stops.** The HUD tells the user to answer in chat; the next step depends on that answer.
- Beat copy: one or two narrator sentences carry the explanation; characters react, joke, and embody the mechanism. They never state what the question asks the user to derive.

## Voice: ElevenLabs Eleven v4 only
Never use Eleven v3 (the Text to Dialogue API silently defaults to it). `tts_elevenlabs.py` pins `model_id = "eleven_v4"`, renders one Text to Dialogue request per beat, and writes `timing.js`.

```
python .kilo/skills/whiteboard-teaching/tts_elevenlabs.py <lesson.json> <out_dir>            # missing beats only
python .kilo/skills/whiteboard-teaching/tts_elevenlabs.py <lesson.json> <out_dir> --beat ID  # retake one beat (old take kept in _takes/)
python .kilo/skills/whiteboard-teaching/tts_elevenlabs.py <lesson.json> <out_dir> --dry      # character count and credits left
```
Key: `ELEVENLABS_API_KEY` in the environment or the nearest `.env`. Credits count characters, tags included, so plan the script and retakes against `--dry`. Limits: 2000 characters per request (keep each beat under it), 10 unique voices, only `stability` is read (0.3 gives more expressive takes; lower is wilder, higher is flatter).

### Prompting guide (from the official v4 docs and what verified in practice)
- **Cast by contrast:** different accent, pitch, age, and energy per character. Premade voices work on every plan (library voices may need a paid plan). A narrator who is a person (warm, dry, conspiratorial) beats a neutral announcer.
- **Directions are inline `[square-bracket]` tags**, placed before or inside the words they affect, in lowercase natural language. They stack and can shift mid-line: `[cocky, fast-talking, grinning] Easy. Watch this. [grunting, taking a run-up] Hyaaah!`
- **Describe the voice or the sound, not an ambiguous word.** `[low, steady voice, restrained urgency]` is safe; a tag that sounds like a noise may be rendered as a sound effect. Sound tags that rendered correctly here: `[soft whoosh]`, `[dull thud]`, `[exhales]`, `[groans]`, `[grunts]`, `[snorts]`, `[laughs]`, `[yawns]`, `[whispers]`.
- **Voice quality and accent are tags too:** `[hoarse, scratchy voice, like a sore throat, wheezing]`, `[muffled, underwater voice]`, `[strong Scottish accent, gravelly voice]`. Tags land best when the voice can plausibly do it; test the ones you rely on.
- **Rhythm without SSML (not supported):** ellipses `...` for weight and trailing off, an em dash to cut a line off, CAPS for stress, `[pause]` for a beat, short sentences.
- **Interplay:** short turns, interruptions (`[interrupting]`, `[overlapping]`), reactions ("Hey!") between explanation blocks. Give each character a want and a running gag.
- **Test, then retake:** tags are guidance, not guarantees. Run speech-to-text (`scribe_v1` with `tag_audio_events=true`) over each clip: tags that were performed show up as `[yawns]` and the like, tags read aloud show up as plain words. Retake only the beat that failed.
- Details: https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices#prompting-eleven-v4

## Delivery
1. Write files into `<subject>/windows/<lesson>/`.
2. Serve from the project root: `python -m http.server 8765` (port busy means it is already running).
3. Reply with `http://localhost:8765/<subject>/windows/<lesson>/<lesson>.html`, a one-line pointer to the final question, and stop.

## QA
The user is the QA pass; fix exactly the defects he reports. When he is unavailable, one headless smoke run for JavaScript errors and layout (puppeteer-core with the installed Chrome, started from a temp directory outside the repo) is acceptable; do not iterate on taste.
