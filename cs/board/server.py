#!/usr/bin/env python3
"""CS whiteboard server: no-cache, /__version for change polling, auto-reload injected into HTML."""
import os, sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "stage")
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
# Pages containing the marker skip auto-reload (e.g. simulations holding state).
SNIPPET = b"""<script>(function(){var v;setInterval(function(){fetch('__version',{cache:'no-store'}).then(function(r){return r.text()}).then(function(t){if(v&&v!==t)location.reload();v=t}).catch(function(){})},1000)})()</script>"""

def version():
    m = 0
    for d, _, fs in os.walk(ROOT):
        for f in fs:
            m = max(m, os.stat(os.path.join(d, f)).st_mtime_ns)
    return str(m).encode()

class H(SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=ROOT, **k)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self):
        if self.path.split("?")[0] == "/__version":
            b = version()
            self.send_response(200); self.send_header("Content-Length", str(len(b))); self.end_headers()
            self.wfile.write(b); return
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            path = os.path.join(path, "index.html")
        if path.endswith(".html") and os.path.isfile(path):
            b = open(path, "rb").read()
            if b"data-noreload" not in b:
                b += SNIPPET
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(b)))
            self.end_headers(); self.wfile.write(b); return
        super().do_GET()

    def log_message(self, *a): pass

ThreadingHTTPServer(("0.0.0.0", PORT), H).serve_forever()
