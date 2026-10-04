# Handoff (Oct 04) — whiteboard Tales, ElevenLabs v4

Learner: Vikas. Spatial, bottom-up, researcher-to-researcher. Read `teach/TEACHER.md`, `teach/ledger.md` and `.kilo/skills/whiteboard/SKILL.md` first.
Old handoff (Flux era): `archive/HANDOFF-2026-10-03-flux-era.md`.

## State
- Branch `hoplite/lindos-05784135`, code last pushed at `9782995`.
- Shipped: membrane Tale `neuro/windows/membrane/` (4 voiced characters, 5 verses, Eleven v4) and the `whiteboard` skill (router + 4 guides) with `engine.js` and `tts_elevenlabs.py`.
- Serve: `python teach/serve.py` (prints the URL; cloud: open that port). Membrane page: `/neuro/windows/membrane/membrane.html`.
- Audio has never been listened to by ear. Vikas has not answered verse 5 (how can inside differ from outside if the skin blocks every ion?). Do not reveal pump or K leak until he does.

## Known defects in the shipped Tale (left on purpose; do not chase)
- Water is drawn before it is named; board text paraphrases the speech; no salt-dropping animation.
- Science wording: water pulls apart ions already in the salt crystal; it does not "create" them.

## Decisions
- Audio: Eleven v4 only, never v3. Expressive tags, distinct cast, no flat narrator.
- Words: Tale = lesson, Verse = step, Saga = series. Library of reusable pieces is a menu, not a rule; only element colours/charges and replay-safety are fixed.
- Minimal skill rules, model creativity preserved, no proactive QA (Vikas reports defects). Targets: desktop + iPad.
- No specialised tools yet. Image generation is optional (new looks, hard layouts); Vikas's salty-water reference image is saved for the water-coat verse. Note: potassium does not come from table salt (NaCl); show it arriving separately.

## Next, in order
1. `GROQ_API_KEY` was added by Vikas but was not visible in the old sandbox. Check `test -n "${GROQ_API_KEY:-}"` in the new thread.
2. Extend `tts_elevenlabs.py`: keep ElevenLabs character timing (the API returns it; currently discarded), add per-line retake, terse one-line output. Test on one clip; use Groq Whisper word timestamps only if too rough.
3. Plan template: each verse as a cause -> effect list approved by Vikas before drawing; board text matches the spoken line; each thing appears on the word that names it.
4. Chronicle (concept ledger: owned / shaky / named, how taught, open why). Start with the ion gap. Decide whether the teach agent owns it.
5. First test of the new setup: ions prequel (atoms, electrons, charge, water as a magnet, why fat and water do not mix) before further membrane work.
6. Keep context small: skills are short routers, details in guides; split or archive old session logs.

## Warnings
- ElevenLabs free tier: about 6,900 of 10,000 characters left this month; no commercial use.
- `.env` is tracked in git with live keys (accepted by Vikas, private repo).

## Rework (Oct 04, cloud thread)
- New core: `teach/TEACHER.md` (one file, learner included, he drives, plan before code), `teach/ledger.md`, `teach/serve.py`; `.kilo/agent/teach.md`, `CLAUDE.md`, `AGENTS.md` are thin pointers.
- Groq ASR dropped: `tts_elevenlabs.py` now writes word timings (`words` in `timing.js`), engine has `ctx.W(turn, word)`. Unverified against the live API (no key in the cloud sandbox); check on the next real render.
- Whiteboard skill now leads with interactive sims; voice is unrationed; no reuse mandate.
