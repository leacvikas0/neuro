#!/usr/bin/env bash
# Gallery: put images + slides.json ([{img,title,sub}]) in stage/, then: board.sh gallery
# Usage: board.sh <image-url|image-file|page.html> [caption]   |   board.sh --serve
# Updates the live whiteboard; the open Preview reloads itself.
set -euo pipefail
cd "$(dirname "$0")"
S=stage; mkdir -p $S
if [ "${1:-}" = "--serve" ]; then
  pkill -f "[b]oard/server.py" 2>/dev/null || true
  nohup python3 "$PWD/server.py" 3000 >/tmp/board.log 2>&1 &
  echo "serving on :3000"; exit 0
fi
src="${1:?need url, file or html}"; cap="${2:-}"
case "$src" in
  *.html) cp "$src" $S/index.html; exit 0;;
  gallery) cp gallery.html $S/index.html; exit 0;;
  http*) curl -sSfL -o "$S/board.png" "$src";;
  *) [ "$(realpath "$src")" = "$(realpath "$S/board.png")" ] || cp "$src" "$S/board.png";;
esac
cat > $S/index.html <<HTML
<!doctype html><meta charset=utf-8><title>Vikas board</title>
<body style="margin:0;background:#fff;font:20px system-ui"><img src="board.png?$(date +%s)" style="width:100%;display:block">
<p style="margin:12px 20px;color:#333">$cap</p></body>
HTML
