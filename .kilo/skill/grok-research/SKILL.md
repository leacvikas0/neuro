---
name: grok-research
description: Live-web research engine via the Grok CLI. Use ONLY when Vikas explicitly asks to research, verify, update, or find the latest findings with sources. Returns cited, primary-source briefs. Never trigger on your own.
---

# Grok Research

The `grok` CLI (on PATH, authenticated) runs a full agentic research session — web search, browsing, source reading — and prints the final answer to stdout. This is the lab's window into **current** knowledge: papers and findings that postdate any model's training.

## The Iron Rule: Only When Asked

**Never research proactively.** Do not fire Grok because you feel unsure, because a topic "might have updates," or mid-lesson to check yourself. Teach from what you know. The ONLY trigger is Vikas explicitly asking: *"research this", "look up the latest", "verify that", "find sources", "is that still true", "update me on X"*.

If he asks a question you genuinely cannot answer, say so — and offer research as an option. He decides.

## The Core Pattern

```powershell
$r = grok -p "<research task>" --always-approve --output-format json | ConvertFrom-Json
$r.text        # the brief (markdown)
$r.sessionId   # save this for follow-ups
```

- `-p` = single headless shot: full tools (web search, browse), answer on stdout, process exits.
- `--always-approve` = mandatory. Without it, tool runs wait for a human click that never comes.
- `--output-format json` = parseable. Plain text is the default, but JSON gives you `sessionId` for multi-turn.
- **Timeout: research takes minutes.** Set the shell timeout to 600000ms or more. A killed call returns nothing.

## Building the Research Prompt

The prompt is the quality control. A good research task has all five:

1. **The question**, narrow. One topic per call beats a shotgun.
2. **Date window.** "2024 through 2026" or "latest as of <today's date>".
3. **Primary sources demanded.** "Name the papers, authors, journals, DOIs. Prioritize peer-reviewed primary sources over blogs and reviews."
4. **Verification demanded.** "Separate established consensus from new or contested claims. Flag anything that contradicts the standard textbook view."
5. **Output shape.** "Structured brief, concise but complete, source list at the end."

Template:

```
Research <topic> - newest findings (<year-window>). Specifically: <sub-questions>.
Prioritize primary sources: papers, authors, journals, DOIs.
Separate established consensus from new or contested claims.
Flag contradictions with the standard view.
Structured brief with a source list at the end.
```

## Follow-ups (multi-turn)

Each `grok -p` starts a fresh session. To continue a previous one:

```powershell
$r2 = grok -p "Expand section 2 with two more primary sources" --resume $r.sessionId --always-approve --output-format json | ConvertFrom-Json
```

## Saving the Brief (containment)

Research output is a lab asset — it lives in the active subject's folder: `<subject>/research/`. Have Grok write the file itself (avoids PowerShell redirect encoding quirks):

```powershell
grok -p "<task>. Write the final brief to <subject>/research/<yyyy-MM-dd>-<slug>.md" --always-approve
```

Then READ the file before teaching from it.

## After the Research: Integrate, Then Teach

1. **Read the brief.** Check the sources are real and dated. If Grok returned vague claims without citations, send one follow-up: "Cite the primary source for claim X."
2. **Reconcile** with what the lab already derived. If new evidence contradicts the current mental model, that is gold — per the teaching rules, you hand HIM the breaking evidence, not the answer.
3. **Teach from the verified brief**, not from stale memory.
4. **Log it.** If findings change the subject's state, update `<subject>/context.md` at session end.

## Gotchas

- Windows PowerShell 5.1: `>` redirect writes UTF-16. Fine for reading back in PowerShell, but prefer variable capture or letting Grok write files itself.
- Each call costs minutes and a few cents. Batch sub-questions into ONE well-built prompt instead of many small calls.
- `--max-turns <N>` bounds a runaway session if needed.
- Long prompts: write them to a file and use `--prompt-file <PATH>`.
- Never pass `--disable-web-search` — live sources are the entire point.
