"""Serve the repo root and print the URL. Usage: python teach/serve.py [port]

Picks the first free port from 8765 (or the one given), so it works the same locally and in a cloud
workspace (open that port as the preview).
"""
import functools
import http.server
import pathlib
import socket
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent


def free_port(start: int) -> int:
    for port in range(start, start + 50):
        with socket.socket() as s:
            if s.connect_ex(("127.0.0.1", port)) != 0:
                return port
    sys.exit("no free port")


def main() -> None:
    port = free_port(int(sys.argv[1]) if len(sys.argv) > 1 else 8765)
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(ROOT))
    print(f"serving {ROOT} at http://localhost:{port}/  (e.g. /neuro/windows/membrane/membrane.html)", flush=True)
    http.server.ThreadingHTTPServer(("0.0.0.0", port), handler).serve_forever()


if __name__ == "__main__":
    main()
