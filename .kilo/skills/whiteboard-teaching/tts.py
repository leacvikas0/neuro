"""Generate per-segment voice clips for a whiteboard board.

Usage:  python tts.py <script.json> <out_dir>

script.json shape:
  {"voices": {"narrator": "flux-hannah-en", ...},
   "segments": [{"id": "s1a", "voice": "narrator", "text": "..."}, ...]}

Uses Deepgram Flux TTS (/v2/speak) by default. For Aura-2 voices
(aura-2-...-en), the v1 endpoint is used automatically.
Reads DEEPGRAM_API_KEY from the environment or the nearest .env file upward.
Writes <out_dir>/<id>.mp3 for every segment.
"""
import json
import os
import pathlib
import sys
import urllib.request


def api_key() -> str:
    if os.environ.get("DEEPGRAM_API_KEY"):
        return os.environ["DEEPGRAM_API_KEY"]
    here = pathlib.Path.cwd().resolve()
    for d in [here, *here.parents]:
        env = d / ".env"
        if env.exists():
            for line in env.read_text().splitlines():
                if line.startswith("DEEPGRAM_API_KEY="):
                    return line.split("=", 1)[1].strip()
    sys.exit("DEEPGRAM_API_KEY not found")


def speak(text: str, model: str, key: str) -> bytes:
    # Flux TTS lives on /v2/speak; Aura/Aura-2 on /v1/speak. Both accept encoding=mp3.
    version = "v2" if model.startswith("flux-") else "v1"
    url = f"https://api.deepgram.com/{version}/speak?model={model}&encoding=mp3"
    req = urllib.request.Request(
        url,
        data=json.dumps({"text": text}).encode(),
        headers={"Authorization": f"Token {key}", "Content-Type": "application/json"},
    )
    return urllib.request.urlopen(req).read()


def main() -> None:
    script = json.loads(pathlib.Path(sys.argv[1]).read_text(encoding="utf-8"))
    out = pathlib.Path(sys.argv[2])
    out.mkdir(parents=True, exist_ok=True)
    key = api_key()
    for seg in script["segments"]:
        model = script["voices"][seg["voice"]]
        (out / f"{seg['id']}.mp3").write_bytes(speak(seg["text"], model, key))
        print(f"{seg['id']:>5}  {model:<22} {seg['text'][:60]}")


if __name__ == "__main__":
    main()
