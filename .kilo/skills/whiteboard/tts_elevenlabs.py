"""Render a whiteboard lesson with ElevenLabs Eleven v4 (Text to Dialogue).

Usage:  python tts_elevenlabs.py <lesson.json> <out_dir> [--verse ID ...] [--force] [--dry]

lesson.json: {"cast": {key: {"voice": "<premade voice first name>"}}, "settings": {"stability": ...},
              "verses": [{"id": ..., "turns": [{"who": key, "text": "[tag] line", "bubble": "optional caption"}]}]}

Writes <out_dir>/<verse id>.mp3 and <out_dir>/timing.js (per-turn start/end seconds for syncing drawings).
Eleven v4 only: the model id is pinned below. The API default is v3, so it is always sent explicitly.
Existing clips are skipped unless --force or --verse is given; replaced clips are kept in <out_dir>/_takes/.
"""
import base64
import json
import os
import pathlib
import shutil
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

MODEL = "eleven_v4"
API = "https://api.elevenlabs.io"
MAX_CHARS_PER_REQUEST = 2000


def api_key() -> str:
    if os.environ.get("ELEVENLABS_API_KEY"):
        return os.environ["ELEVENLABS_API_KEY"]
    here = pathlib.Path.cwd().resolve()
    for d in [here, *here.parents]:
        env = d / ".env"
        if env.exists():
            for line in env.read_text().splitlines():
                if line.startswith("ELEVENLABS_API_KEY="):
                    return line.split("=", 1)[1].strip().strip("\"'")
    sys.exit("ELEVENLABS_API_KEY not found")


def call(path: str, key: str, body: dict | None = None) -> dict:
    req = urllib.request.Request(
        API + path,
        data=json.dumps(body).encode() if body is not None else None,
        headers={"xi-api-key": key, "Content-Type": "application/json"},
    )
    try:
        return json.loads(urllib.request.urlopen(req, timeout=180).read())
    except urllib.error.HTTPError as e:
        sys.exit(f"HTTP {e.code}: {e.read().decode()[:600]}")


def resolve_voice(first_name: str, key: str) -> str:
    q = urllib.parse.urlencode({"search": first_name, "voice_type": "default", "page_size": 50})
    for v in call(f"/v2/voices?{q}", key)["voices"]:
        if v["name"].split(" ")[0].strip(",-").lower() == first_name.lower() and v.get("category") == "premade":
            return v["voice_id"]
    sys.exit(f"premade voice '{first_name}' not found")


def render_verse(verse: dict, voices: dict, settings: dict, key: str) -> tuple[bytes, list[dict]]:
    inputs = [{"text": t["text"], "voice_id": voices[t["who"]]} for t in verse["turns"]]
    body = {"inputs": inputs, "model_id": MODEL, "settings": settings}
    assert body["model_id"] == "eleven_v4"
    res = call("/v1/text-to-dialogue/with-timestamps?output_format=mp3_44100_128", key, body)
    spans: dict[int, list[float]] = {}
    for seg in res["voice_segments"]:
        s = spans.setdefault(seg["dialogue_input_index"], [seg["start_time_seconds"], seg["end_time_seconds"]])
        s[0] = min(s[0], seg["start_time_seconds"])
        s[1] = max(s[1], seg["end_time_seconds"])
    turns = []
    for i, t in enumerate(verse["turns"]):
        start, end = spans.get(i, [None, None])
        turns.append({"who": t["who"], "start": start, "end": end, "bubble": t.get("bubble")})
    return base64.b64decode(res["audio_base64"]), turns


def main() -> None:
    args = sys.argv[1:]
    force, dry = "--force" in args, "--dry" in args
    only = {args[i + 1] for i, a in enumerate(args) if a == "--verse"}
    pos = [a for i, a in enumerate(args) if not a.startswith("--") and (i == 0 or args[i - 1] != "--verse")]
    lesson = json.loads(pathlib.Path(pos[0]).read_text(encoding="utf-8"))
    out = pathlib.Path(pos[1])
    out.mkdir(parents=True, exist_ok=True)
    timing_path = out / "timing.json"
    timing = json.loads(timing_path.read_text()) if timing_path.exists() else {}
    key = api_key()

    todo = [b for b in lesson["verses"]
            if (not only or b["id"] in only) and (force or only or not (out / f"{b['id']}.mp3").exists())]
    need = 0
    for b in todo:
        n = sum(len(t["text"]) for t in b["turns"])
        assert n <= MAX_CHARS_PER_REQUEST, f"{b['id']} has {n} chars (max {MAX_CHARS_PER_REQUEST})"
        need += n
    sub = call("/v1/user/subscription", key)
    left = sub["character_limit"] - sub["character_count"]
    print(f"model={MODEL}  verses={[b['id'] for b in todo]}  chars={need}  credits_left={left}")
    if dry:
        return
    if need > left:
        sys.exit("not enough credits")

    voices = {k: resolve_voice(c["voice"], key) for k, c in lesson["cast"].items()}
    for b in todo:
        mp3 = out / f"{b['id']}.mp3"
        if mp3.exists():
            (out / "_takes").mkdir(exist_ok=True)
            shutil.move(mp3, out / "_takes" / f"{b['id']}.{int(time.time())}.mp3")
        audio, turns = render_verse(b, voices, lesson.get("settings", {}), key)
        mp3.write_bytes(audio)
        timing[b["id"]] = {"turns": turns, "duration": max(t["end"] or 0 for t in turns)}
        print(f"{b['id']}: {len(audio) // 1024} KB, {timing[b['id']]['duration']:.1f}s")
        timing_path.write_text(json.dumps(timing, indent=1))
        (out / "timing.js").write_text("window.LESSON_TIMING = " + json.dumps(timing) + ";\n")


if __name__ == "__main__":
    main()
