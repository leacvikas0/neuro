# ElevenLabs Eleven v4

**Always `eleven_v4`. Never v3.** `tts_elevenlabs.py` pins it and uses Text to Dialogue, one request per verse, with per-line timing for the scene.

```
T=.kilo/skills/whiteboard/tts_elevenlabs.py
python $T <tale>/lesson.json <tale>/audio --dry             # characters needed vs credits left
python $T <tale>/lesson.json <tale>/audio                   # render missing verses
python $T <tale>/lesson.json <tale>/audio --verse <id>      # retake one verse (old take goes to _takes/, delete before commit)
```
Key: `ELEVENLABS_API_KEY` in the environment or nearest `.env`. Writes `<id>.mp3`, `timing.json`, `timing.js`; every retake rewrites timing. Credits are characters, tags included (free tier 10,000/month). Max 2000 characters per request, 10 voices. Only `stability` is read (0.3 expressive; lower wilder, higher flatter).

## Prompting
- Direct delivery with lowercase natural-language tags in square brackets, before or inside the words: `[cocky, fast-talking, grinning] Easy. Watch this. [grunting, taking a run-up] Hyaaah!`
- Describe the voice or sound, not an ambiguous word: `[low, steady voice, restrained urgency]`. A noise-like tag can be rendered as a sound effect.
- Use the range: emotion (`[sarcastic]`, `[mischievously]`), reactions (`[groans]`, `[snorts]`, `[laughs]`, `[sighs]`, `[exhales]`, `[yawns]`), voice quality and conditions (`[hoarse, scratchy voice, like a sore throat]`, `[muffled, underwater voice]`, `[winded, nasal]`), accents (`[strong Scottish accent, gravelly voice]`), sounds (`[dull thud]`, `[soft whoosh]`), whispers and shouts.
- Rhythm without SSML (unsupported): `...` for weight, an em dash to cut a line off, CAPS for stress, `[pause]`, short sentences. Dialogue: `[interrupting]`, `[overlapping]`.
- Match tags to the voice (a hyped voice will not whisper well). Premade voices work on the free tier; reference them by first name in `lesson.json` (George, Charlie, Laura, Adam, ...); the tool resolves IDs.
- Numbers and symbols: write them as words in the spoken text; show the symbols in the bubble or on the board.

Docs: https://elevenlabs.io/docs/overview/capabilities/text-to-speech/best-practices#prompting-eleven-v4
