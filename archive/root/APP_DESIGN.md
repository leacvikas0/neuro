# The Emotional Gym — App Design Document

> "A place where strangers make each other stronger."

---

## The Problem We're Solving

### Psychology Is Broken
- **Replication crisis**: Only 36% of 100 psychology studies replicated (Open Science Collaboration, 2015)
- **WEIRD samples**: 96% of psych subjects come from 12% of the world population
- **Self-report addiction**: Most measures ask people what they *think* about themselves, not what they *do*

### EQ Tests Are Especially Broken

| Test | Type | Core Problem |
|------|------|-------------|
| EQ-i 2.0 (Bar-On) | Self-report | Least emotionally aware people overrate themselves most (Dunning-Kruger) |
| MSCEIT (Mayer-Salovey) | Ability-based | "Correct" answer = whatever most people say. That's popularity, not truth |
| SSEIT (Schutte) | Self-report | 33 Likert items. Social desirability contaminates everything |
| TEIQue (Petrides) | Self-report | Correlates r>.5 with Big Five — is it even measuring something distinct? |
| DANVA / RMET | Performance | Only measures facial emotion recognition. EQ is way more than reading faces |

**The fundamental gap**: Tests measure *declared knowledge* ("I know what EQ is") not *procedural skill* ("I can DO EQ"). Like testing swimming by questionnaire.

---

## Scientific Foundation

### The Schweizer Studies
**Paper 1**: Schweizer, Hampshire & Dalgleish (2011) — *"Extending brain-training to the affective domain"* — PLoS ONE  
**Paper 2**: Schweizer, Grahn, Hampshire, Mobbs & Dalgleish (2013) — *"Training the emotional brain"* — Journal of Neuroscience

**What they did**: Affective dual n-back — tracking emotional faces (visual) + emotional words (auditory) simultaneously.

**What they found**:
- Both emotional and neutral n-back groups improved fluid IQ and working memory
- **Only the emotional n-back group** also improved affective cognitive control (emotional Stroop) and emotion regulation
- fMRI showed enhanced efficiency in the **frontoparietal demand network**
- The brain literally got better at handling emotional interference during cognitive tasks

**Why this matters for us**: The emotional interference cost (performance delta between emotional vs neutral n-back) is an **unfakeable, behavioral measure** of emotional regulation ability.

---

## Core Concept

The platform is NOT an "EQ test app." Nobody wakes up wanting to improve their EQ score. People want to **feel seen, feel connected, feel like they matter.** The EQ improvement is the side effect.

> *"The community is the teacher. The platform is the location."*

---

## The Kindness Chain — Core Mechanic

### The Emotional Sequence

1. **You sign up** → record something kind for the next stranger who joins
   - Activates ventromedial prefrontal cortex (vmPFC) — the compassion circuit
   - You're in a warm state before the app does anything FOR you

2. **You hear what someone recorded for YOU** → a real human voice, from a stranger  
   - Voice carries prosody — emotional tone processed by superior temporal sulcus
   - Involuntary emotional response. You FEEL it whether you want to or not

3. **You're now emotionally primed** → safe, warm, connected
   - Amygdala threat response downregulated
   - Optimal state for emotional skill-building

**This sequence is scaffolded emotional regulation — a warmup for the prefrontal cortex before the workout.**

### Why Voice, Not Text
- Vocal prosody activates empathy circuits (mirror neuron system, anterior insula) in ways text cannot
- Pitch contour carries genuine emotion; breathing patterns signal calm/excitement
- Micro-laughs, pauses, hesitations = authenticity markers
- Much harder to fake sincerity in voice than text
- Both hemispheres engaged vs primarily left hemisphere for text

---

## The Story Exchange Protocol

### The Full Loop

1. **SHARE** — "Here's my day / my story / my moment"
2. **LISTEN** — Another person receives your story
3. **FIND THE GOOD** — "What's beautiful about this person? What strength do you see?"
4. **REFLECT BACK** — Record a voice note with appreciation / reframe / warmth
5. **RECEIVE** — Original storyteller hears it, rates: "Did this land?"
6. **GROW** — Both people's EQ develops based on real human feedback

### Listener Prompts (Graduated Depth)

- **Level 1 — Perception**: "What emotion do you hear in their voice?"
- **Level 2 — Understanding**: "Why might that specific thing hurt?"
- **Level 3 — Perspective**: "What might the other person in their story have been feeling?"
- **Level 4 — Response**: Record a voice note. Not advice. Just witnessing. "I heard you."

### "Find The Good" Exercises
- "What's something you appreciate about this person based on what they shared?"
- "What strength do you hear in them, even if they don't see it themselves?"
- "What's one good thing about their situation they might be missing?"

**Psychology**: Trains against negativity bias (Baumeister et al. — brain weighs negative info ~5x more than positive). Gottman's research: stable relationships need 5:1 positive-to-negative ratio. This exercise trains people to shift that ratio through practice with real humans.

### Authenticity As Data
- If someone tries to fake sincerity → listeners rate "did this feel genuine?"
- Low genuineness scores = the app coaches them
- Fakers learn they're transparent. Listeners learn to trust their gut.
- Every combination (fake/genuine × detected/missed) teaches something

---

## Self-Report — Redesigned

Traditional self-report ("I am good at managing my emotions, 1-5") is abstract and easy to inflate.

Our self-report is **momentary and concrete**:
- "Right now, after hearing that story, I feel ___"
- About THIS moment, not general traits
- Over time, builds a MAP of your emotional patterns
- "I notice I always feel anxious when people talk about family conflict"
- This is interoception training happening naturally (Damasio's somatic marker hypothesis)

---

## EQ Training Games

| Game | What It Trains | Mechanic |
|------|---------------|----------|
| 🎭 Emotion Match | Perception (Mayer-Salovey branch 1) | Hear a voice clip, identify nuanced emotion ("relieved or content?") |
| 🧘 The Pause Game | Regulation (branch 4) | Provocative stimulus appears, must WAIT before responding. Measures impulse control |
| 🎵 Emotional N-Back | Cognitive control under affect | Dual n-back with emotional faces + words. Tracks interference cost over time |
| 💬 Perspective Shift | Theory of mind + empathy accuracy | Read scenario from Person A's view, answer from Person B's view |
| 🫀 Body Signal | Interoception / emotional awareness | "What are you feeling? Tap where you feel it in your body" |

---

## Progression System — Seasons, Not Levels

| Season | Duration | Focus | Unlocks |
|--------|----------|-------|---------|
| 🌱 WARMTH | Weeks 1-2 | Give and receive short kind wishes only. Training wheels for emotional safety | Emotion recognition basics |
| 👂 LISTENING | Weeks 3-4 | Receive others' small stories. Practice identifying what they feel | Emotional n-back |
| 🗣️ SHARING | Weeks 5-6 | Share your own small moments. Hear strangers reflect your strengths back | Perspective-taking challenges |
| 👁️ SEEING | Weeks 7-8+ | Full story exchange. "Find the good." See your own emotional patterns over time | Full analytics, deeper shares |

**Each season EARNS trust for the next one. You can't jump ahead. The app slowly opens the door wider.**

---

## Safety & Moderation

### LLM Content Gate
- Every voice note transcribed → sent through LLM abuse detection
- Must pass before delivery to recipient
- Rejection message is itself coaching: "Try again, with more heart"
- Even the moderation step is an EQ training mechanism

### Layered Defense
1. LLM pre-screen on transcript
2. Human flag/report button for recipients
3. Async audio-to-text sentiment analysis
4. Season gating prevents new users from accessing deep features

### Preventing Failure Modes

| Failure Mode | Defense |
|-------------|---------|
| Trauma dumping | Structured prompts guide WHAT to share ("a small moment," not "your deepest pain") |
| Parasocial attachment | No profiles, no usernames, mandatory rotation — never hear the same person twice (early on) |
| Performative kindness | "Did this feel genuine?" rating keeps people honest; low scores trigger coaching |
| Ghosting / drop-off | Morning voice note is the hook — costs nothing to receive; giving back is optional but nudged |
| Content slipping through | LLM pre-screen + human flag + async sentiment analysis |

---

## Privacy Architecture

### Why Voice Data Is High-Stakes
From 5 seconds of audio, you can extract: gender, approximate age, regional accent/location, emotional state, health markers (depression has vocal biomarkers), and with AI — actual identity via voice fingerprinting. Our app asks people to be vulnerable. Betraying that trust even once = app death.

### The Privacy Flow

```
User records voice note
     │
     ▼
Audio transcribed ON-DEVICE (not on server)
     │
     ├──▶ Transcript sent to server for LLM moderation
     │    (text only, no voice, no identity attached)
     │         │
     │         ├── PASS → voice-modified audio uploaded (encrypted)
     │         │          delivered to recipient
     │         │          deleted from server in 24h
     │         │
     │         └── FAIL → user notified on-device
     │                    "try again with more kindness"
     │                    nothing leaves the phone
     │
     └──▶ Voice modification applied on-device before upload
          (subtle pitch shift + formant adjustment)
          (humans can't detect it, AI fingerprinting fails)
```

### Identity Model — Minimum Viable Identity

**We know**: they're real (not a bot), language preference, rough timezone, season/progression, anonymized interaction history.

**We do NOT know**: real name, email, age, gender, location, photo, social connections.

**Radical option**: Device-bound identity only. No accounts. No email. No phone. You ARE your device key. "We don't know who our users are. By design."

### The Trust Contract (shown on first open)

> 🔒 We don't know your name.  
> 🔒 We never store your raw voice.  
> 🔒 Your voice is modified before anyone hears it.  
> 🔒 Messages are checked for safety, then the text is deleted.  
> 🔒 There are no accounts. No profiles. No way to find you.  
>  
> This is a place where you can be honest without being exposed.

### Research Data Ethics

**We can keep** (anonymized): emotion labels, aggregate patterns, EQ game scores, interaction quality scores.

**We cannot keep**: raw audio tied to identifiers, voice fingerprints, precise location, transcripts with identifying details.

**The rule**: If you can trace a data point back to a specific human being, you don't keep it.

---

## Progress Visualization — The Garden

No scores. No leaderboards. A **living garden** that grows:
- Every genuine interaction = a seed
- Every "I felt understood" from someone = it blooms  
- Every story you listen to fully = roots deepen
- After 30 days: a meadow. After 90 days: a forest.
- Growth is REAL — made of actual human moments, not points

---

## Open Design Questions

1. **Voice modification tradeoff** — subtle enough to preserve emotional impact but sufficient to defeat fingerprinting? Or give users the choice (real voice vs modified)?
2. **Multi-modal kindness** — always voice? Or some days "draw something for the next person" / "pick a song for them"?
3. **Gamification balance** — how to make progress rewarding WITHOUT making it competitive?
4. **The name** — needs to feel warm, not clinical. A place you'd want to go.
5. **Mirror mode** — replaying your OWN old stories and asking "can you find the good in your situation now, with distance?" (self-compassion training via Kristin Neff's framework)
