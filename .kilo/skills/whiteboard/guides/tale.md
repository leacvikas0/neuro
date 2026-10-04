# Tale (voiced, verse by verse)

Reference build: `neuro/windows/membrane/` (`membrane.html`, `membrane.js`, `lesson.json`, `audio/`). Copy and adapt it. Engine: `engine.js`; audio tool: `tts_elevenlabs.py`.

## Steps
1. **Plan.** The one model change this Tale makes; what must not be revealed; 4-6 verses, one layer each; the last verse is the question. Ground each surprise in the real mechanism and let a character feel it.
2. **Cast.** Narrator plus 2-3 characters, different in accent, pitch and energy, each with a want. The narrator carries the explanation in short blocks; characters embody and react. They never state the answer to the question.
3. **Script `lesson.json`.** `cast` (name + premade voice first name), `settings.stability` (0.3), `verses[]` each with `id` and `turns[]` (`who`, `text` with tags, optional `bubble` caption shown in the speech bubble). Max 2000 characters per verse.
4. **Audio.** Follow `guides/elevenlabs.md`. Check credits with `--dry` first.
5. **Scene `<tale>.js`.** One `build(ctx)` per verse registering `ctx.at(ctx.T(turn, offsetSeconds), fn)` so drawings land on the spoken words. Provide `reset`, `speak`, `hud`. See `guides/engine.md`.
6. **Close.** Update `<subject>/context.md` (Status / Progress / Open loops / Next) and one line in `context/global_context.md`. Commit and push.
7. **Reply** with the link `http://localhost:8765/<subject>/windows/<tale>/<tale>.html` (serve with `python -m http.server 8765`), the cast, credits left, and that you could not hear the audio. Stop at the question.

## Lessons from the first Tale
- Characters are the mechanism: Nate (Na+) rams the fat skin and bounces, the Wall states the rule in one line, the narrator gives the physical why (water coat). Humor between explanations kept it alive.
- Cues inside a long turn are estimated offsets from that turn's start; if sync is reported off, adjust the offset (the API also returns word-level `alignment`).
- Do not mention the pump or leak before the learner answers the question; science gates live in the subject context.
