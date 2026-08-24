# Why a sphere of “upward rockets” does not explode Earth

**Visualization research brief**
Date: 2026-08-20
Window: established GR (1911–1916) through pedagogy and popularizations current as of 2026
Learner: 21-year-old spatial thinker. Already has the closed-box equivalence principle, the exploding-Earth paradox, a guess that “it’s curved,” and the equator-to-pole sphere-walkers.

This brief is for a visualization designer. It is not a lecture. Every picture choice is scored against one question: **does it resolve the paradox without smuggling Newtonian gravity back in?**

---

## Frame

| Lock | Content |
|------|---------|
| **Decision** | Which pictures to build (and which to ban) so the learner *feels* why “everyone accelerating outward” is compatible with a planet of constant radius, and why spacetime curvature replaces a gravitational force. |
| **In** | Proper vs coordinate acceleration; local “up”; geodesics vs hovering; time-curvature vs space-curvature; Rindler vs Schwarzschild; tides; Beat A–E; harmful metaphors; existing media audit. |
| **Out** | Quantum gravity, gravitons, black-hole interiors as the main story, “what is spacetime made of,” full tensor machinery. |
| **Success** | A spatial thinker can retell the resolution in his own pictures, without saying “Earth is expanding,” “Earth is flying up through space,” or “mass pulls on a rubber sheet.” |
| **Angles used** | Primary textbooks and papers; technical geometry (proper acceleration, geodesic deviation); physicist pedagogy (Physics Forums Insights, Einstein Online, AJP); popular-media audit; education research on rubber-sheet harm. |

---

## Executive take

The floor really does push you. An accelerometer on your feet reads ~9.8 m/s² *up*. That is **proper acceleration**: deviation from a geodesic. In GR, a geodesic is free-fall, not “sitting still.”

The planet does not explode because **“up” is local**. There is no single Euclidean direction that every person on Earth is accelerating into. Proper acceleration is a local arrow. The arrows around a sphere do not add up to a balloon inflating.

That is possible only because **spacetime is curved**. In flat spacetime, a family of observers all accelerating “outward” would recede from one another. On a curved spacetime (Schwarzschild outside Earth), you can have a whole sphere of hoverers, each with an outward accelerometer reading, at *constant* radius. The canonical spatial analogy: two latitude lines on a globe, constantly turning *away* from each other, yet staying a fixed distance apart.

The sphere-walkers he already has (meeting at the pole) are a *different* geometric fact: **tidal** curvature, geodesic deviation. Do not use that picture as the exploding-Earth answer. Use it as Beat A/E. Use the latitude-line picture as Beat C.

Near Earth, the curvature that makes apples *start* to fall is almost entirely **curvature of time** (clocks run slower deeper in the well). Spatial curvature is real but tiny for slow motion. Rubber sheets and 3D funnels show the wrong slice.

**Beat D warning (do not ship the naive version):** a flat paper diagram with time up and radius sideways makes “standing still” look like a straight vertical line and free-fall look curved. That is a *map distortion*. Relativists treat “straight on the paper” as untrustworthy. Draw geodesics as locally straight *on a curved surface*, or say out loud that the paper is a Mercator-style lie.

---

## 1. Precise resolution of the exploding-Earth paradox

### 1.1 Two meanings of “acceleration” (never mix them)

| Word | What it is | What measures it | Standing on Earth | Falling apple |
|------|------------|------------------|-------------------|---------------|
| **Proper acceleration** | How much your worldline bends away from a geodesic | Accelerometer / felt weight | ~g *up* | **zero** |
| **Coordinate acceleration** | How a chosen map’s numbers change | Calculator in some coordinates | zero in “Earth rest” coordinates (constant r) | “downward” in those coordinates |

Consensus (Dale 2015 Insights; Physics.SE benrg 2020; Carroll lecture notes / *Spacetime and Geometry*; Hartle *Gravity*):

- An **inertial** observer is one whose accelerometer reads zero. In GR that means **free-fall**. The ISS is (approximately) inertial. You in a chair are not.
- Gravity is not a force on the accelerometer. The only real force on a standing person is the electromagnetic contact force of the floor (Pauli exclusion + electrostatic repulsion of electron clouds). That force is what the accelerometer records.
- “The ground accelerates up into the apple” is true **in the local inertial frame of the falling apple**. It is not a statement that the Earth’s radius is increasing.

### 1.2 Local “up” is not a global Euclidean arrow

Draw Earth. At every point on the crust, “up” is **outward along the local radial direction**.

```
          ^ up
          |
    <-----+----->     arrows are LOCAL
          |           they do not share one Euclidean "up"
          v
```

If you treat those arrows as displacements in a single flat 3-space, you get the balloon: the surface should inflate at 9.8 m/s². That inference **assumes Euclidean geometry of space, and a global inertial frame**. Both are false.

Hawking’s colorful line (quoted in Physics Forums, 2014 thread on sphericity vs equivalence): if you tried to apply the elevator story to the *whole* Earth at once, people on opposite sides would have to recede. Einstein’s move was not “the Earth is expanding.” It was: **spacetime is curved, so the local elevator stories glue together without recession.**

PeterDonis (same thread): the equivalence principle is **local**. Opposite sides of Earth are not in one elevator. Tidal gravity is not negligible across a diameter.

Dale, one sentence that should be on a title card:

> The surface of the Earth is accelerating upwards at 1 g proper acceleration. The Earth is not expanding. Those two statements are compatible because the spacetime around the Earth is curved.

### 1.3 Standing still is *not* a geodesic; falling *is*

Worldline = the curve a person traces through spacetime (one dimension of time + space).

- **Geodesic** = locally straightest possible worldline = free-fall = accelerometer 0.
- **Hovering / standing** = being held at constant radius. The floor continuously kicks you off the geodesic. Accelerometer reads g.

Picture in words:

- Drop an apple. Its worldline is a geodesic. It is “doing nothing.”
- The ground’s worldline is *forced*. The crust is a stack of layers, each electromagnetic-repelled by the layer below, all prevented from falling inward along geodesics.

If Earth were a cloud of dust with no pressure, every bit would follow a geodesic toward (and through) the center. Solidity is what produces proper acceleration. Solidity does **not** produce a Euclidean explosion, because the geodesics the crust is *avoiding* are not “inward in flat space.” They are the straightest paths of a curved spacetime whose “inward” does not enlarge the sphere.

### 1.4 Why constant radius is compatible with outward proper acceleration

**The geometry, not the slogan.**

Take Schwarzschild spacetime (excellent approximation outside a non-rotating spherical Earth; Taylor–Wheeler *Exploring Black Holes* Ch. 3; Hartle; Carroll). The crust sits at constant circumferential radius r (the r such that a hoop around Earth has circumference 2πr). Each person has a worldline of constant r, θ, φ. That worldline is **not** geodesic. Its proper acceleration points toward increasing r.

In **flat** spacetime you cannot have a closed sphere of such hoverers at constant mutual distance. In **curved** spacetime you can.

**Canonical analogy (benrg, Physics.SE, Oct 2020, highest-voted resolution of this exact paradox; independently Dale 2015):**

Imagine Earth as a globe (this globe is a *model of spacetime*, not of the planet).

- Walk east along 5° N latitude. To stay on that parallel you must **constantly turn left** (northward). That path is not a geodesic (geodesics are great circles).
- Walk east along 5° S. You must constantly turn right (southward).
- The two walkers are turning **away from each other** the whole time.
- Their distance stays constant.

That is impossible on a flat table. It is cheap on a sphere.

Map:

| Globe | Spacetime near Earth |
|-------|----------------------|
| Direction of walking | Time (aging into the future) |
| Constant turning off a great circle | Proper acceleration (floor push) |
| Latitude lines staying a fixed distance | People on opposite sides of Earth remaining a diameter apart |
| Great circles | Free-fall worldlines |

```
   N
   |   walker A: always turning LEFT to stay on 5N
5N =====>  =====>  =====>
   |
eq =====================================   (geodesic: equator)
   |
5S =====>  =====>  =====>
   |   walker B: always turning RIGHT to stay on 5S
   S

Distance A--B constant.
Turning "outward" does not increase distance.
Curvature eats the would-be expansion.
```

This is the exploding-Earth paradox in one picture. **Build this. Lead with this.**

### 1.5 What *is* curvature, operationally (tides)

Einstein Online (Pössel, 2005, AEI): locally, gravity can be transformed away by falling. What cannot be transformed away is **tidal** difference: two dropped balls converge because they fall toward one point, not along parallel Euclidean down-arrows.

Baez & Bunn, “The Meaning of Einstein’s Equation” (AJP 2005 / math.ucr.edu): a small ball of freely falling test particles, initially at rest relative to each other, begins to change volume. That shrinkage *is* what the Einstein equation says mass-energy does. Curvature is not a mood. It is geodesic deviation.

Carroll (notes, Newtonian limit): in a small enough region you can always pick coordinates so the metric looks Minkowski and first derivatives vanish (local inertial frame). Second derivatives — tides — cannot be removed. That remainder is curvature.

So:

- **Felt weight** = not curvature. It is being kicked off a geodesic. Locally identical to a rocket in flat space (Rindler).
- **Measurable gravity that survives free-fall** = tides = curvature.
- **Why a globe of hoverers doesn’t inflate** = the same curvature, now constraining *accelerated* worldlines to keep constant r.

Pössel’s split is the honest slogan (better than PBS’s “gravity is an illusion”):

> In part, gravity is an observer artefact. In part, it is curvature.

The artefact is the uniform g you feel in a small room. The curvature is why opposite sides of Earth can both feel “up” without flying apart, and why two apples converge.

### 1.6 There is no global inertial frame for the whole Earth

Carroll, Equivalence Principle section: you can build a local freely-falling frame; you cannot extend it over the planet. Relative velocity of distant free-fallers is not even a well-defined single number independent of path (parallel transport on a curved manifold).

Beat E is this fact, made spatial: you cannot draw one set of inertial xyz axes for “the Earth.” You can draw a patch the size of a room, for a short time.

---

## 2. Metaphors relativists actually recommend (and which slice they show)

### 2.1 Two sphere pictures — do not fuse them

The learner already has sphere-walkers meeting at the pole. That is **geodesic deviation**. It is the right shape for *tides* and for *dropped apples converging*. It is the **wrong** primary picture for “why don’t we explode.”

| Picture | Geometry | Physics analog | Use for |
|---------|----------|----------------|---------|
| Two ants walk due north from equator, meet at pole. Never steer. | Two geodesics, initially parallel, converge | Two free-fallers / two dropped apples | Beat A, Beat E (tides) |
| Two people walk due east on 5°N and 5°S, constantly steering, distance fixed | Two *accelerated* curves, turning away, distance constant | Two hoverers on opposite sides of Earth | Beat C (exploding-Earth) |
| Same two geodesic tracks plotted on a Mercator map look like they were pulled together | Map lie | Fake “force of gravity” on a flat diagram | Beat B |

If you only show the pole-meeting ants, a smart spatial thinker will still ask: “OK, but those ants aren’t accelerating. I *am*. Why doesn’t my acceleration enlarge the planet?” You need the latitude-line picture for that.

### 2.2 Gravity near Earth is mostly *time* curvature

**Consensus, quantitative enough to design with:**

Carroll’s Newtonian limit (lecture notes §4, same argument in the textbook): for slow motion, weak field, static metric, the geodesic equation reduces to Newtonian gravity from **one metric component**, g₀₀ ≈ −(1 + 2Φ/c²). Spatial metric pieces do not enter at this order. Falling apples are “rolling downhill in time.”

Gravity Probe B outreach (Overduin, 2007) states the exploding-Earth objection and answers it the same way:

> On earth … nearly all of our weight arises due to the warping of *time*, rather than space.

Gould, *Am. J. Phys.* 84, 396 (2016), “Why does a ball fall?”: Einstein’s model distorts both time and space, but ordinary slow objects travel mostly through time, so their motion is dominated by gravitational time dilation. He uses great-circle air travel vs straight lines on maps as the qualitative picture.

Pössel (arXiv:2001.00229, 2019): “Newtonian gravity can be interpreted as a distortion of time only (Gould 2016), and cannot capture the contributions from the distortion of space.” For **light** deflection and Shapiro delay, time-warp and space-warp contribute about equally (the famous extra factor of 2). For **apples**, spatial curvature is a rounding error.

Taylor–Wheeler *Exploring Black Holes* Ch. 3: the Schwarzschild metric’s (1 − 2M/r) on the *dt²* term is the time-warp; the matching factor on *dr²* is the space-warp. Funnel diagrams (Flamm paraboloid) visualize **only the space slice**. Query 2B in that chapter: a worldline **cannot** lie on the embedding diagram. That is a textbook veto of “falling down the funnel.”

**Design rule:** if the picture has no clocks, it cannot explain why a dropped pen starts moving. A warped *space* sheet under a bowling ball does not make a stationary marble begin to roll unless you cheat with Earth’s real gravity.

### 2.3 Worldlines: hoverer bent, faller straight

Dale Insights, in one stack:

- Accelerometer 0 ↔ worldline geodesic (“straight”).
- Accelerometer g ↔ worldline forced off geodesic (“bent”).
- Two inertial apples on opposite sides of Earth: worldlines start parallel (relative rest) and later meet (relative speed). Straight lines that meet ⇒ the spacetime they live in is curved. Same logic as longitude lines on a globe.

**Do not** encode this as “vertical line on graph paper = standing still = actually bent.” See Beat D.

### 2.4 Rindler wedge vs Schwarzschild hoverers

This is the professional distinction. Use it as a two-panel, not as math class.

**Rindler (flat spacetime):**

- Minkowski space, no curvature, no mass.
- A uniformly accelerated observer has a hyperbolic worldline.
- Feels proper acceleration. Has a Rindler horizon (signals from far enough “below” never catch up).
- A *family* of Rindler observers at different heights have *different* proper accelerations (larger “lower down”).
- Locally, a lab on Earth is indistinguishable from a Rindler lab (equivalence principle / Fermi–Normal coordinates; PAllen on the Dale Insights comments).
- Globally, Rindler observers all accelerate along **one** axis in a flat space. They do not form a closed sphere. If you tried to wrap Rindler “up” around a ball in flat space, the ball would have to expand.

**Schwarzschild hoverers (curved spacetime):**

- Observers at constant r outside a mass.
- Also feel proper acceleration (diverges as you approach a horizon; at Earth’s surface it is just g).
- Locally look like Rindler.
- Globally close into a **sphere** of hoverers at constant r, which Rindler cannot do.
- The extra ingredient is curvature.

A.T. (Physics Forums, 2014): locally, surface gravity does not require *intrinsic* curvature — accelerating coordinates in flat spacetime suffice (a cone-like Rindler patch). **To make all the little patches fit around a globe, spacetime must be intrinsically curved** (cannot be rolled out flat without distortion).

```
LOCAL (one room, short time)
  Rindler patch  ≅  Earth lab
  curvature not needed
  "floor accelerating up" is this

GLOBAL (whole Earth)
  you cannot tile the sphere with Rindler patches
    without leftover expansion
  curvature is the leftover
  "planet doesn't inflate" is this
```

### 2.5 Tides = north-walkers = the curvature you can measure

Einstein Online giant-elevator animation: two spheres in a huge falling elevator drift together because each falls toward Earth’s center.

Baez: a ball of free-fallers shrinks.

Hartle *Gravity*, Schutz *First Course*, MTW *Gravitation*: geodesic deviation *is* the tidal field; Riemann curvature is that relative acceleration.

Same shape as the ants meeting at the pole. Ship this as “here is how you *know* spacetime is curved, even while floating.”

### 2.6 What relativists do *not* recommend as the explanation of falling

- Rubber sheet with bowling ball (uses gravity to explain gravity; shows space not spacetime; Overduin, Kersting, WannabeNewton).
- Flamm funnel as a thing you fall down (Taylor–Wheeler: worldlines cannot live there; extra axis is fake).
- “Space is flowing into Earth” / river model as the exploding-Earth answer. Hamilton & Lisle, *AJP* 76, 519 (2008) is a legitimate Painlevé–Gullstrand rewriting for black holes. It is **contested as a picture of standing on Earth**: it reifies a coordinate flow, and “space falling in while you hover” is easy to hear as Earth expanding or as a substance current. Do not lead with it for this learner.

---

## 3. Beat-by-beat visual design

Target: one sitting, ~8–12 minutes, or a 5-beat interactive. Spatial, not verbal. Each beat has a **feel**, a **do-not**, and a **pass test**.

### Beat A — Ants on a globe (geodesics, no force)

**Feel:** Straightest walking can still make two travelers meet.

**Picture:** Physical globe (preferred: he likes real objects) or a 3D sphere. Two ants at the equator, 20° of longitude apart. Both walk due north, never turning. They meet at the pole.

On-screen caption: *No sideways force. The ground is curved. “Straight” is a great circle.*

**Pass test:** He can say “they met because of the shape, not because something pulled them together.”

**Do not:** Call this the exploding-Earth answer. Not yet.

### Beat B — The same paths on a flat map (fake force)

**Feel:** A map can invent a force that isn’t there.

**Picture:** Split screen. Left: globe from Beat A. Right: Mercator (or any rectangular lat-long grid). The two northbound tracks on the map look like they curve toward each other. Overlay a cartoon “attractive force” on the map, then cross it out.

Caption: *The force lives on the map. It does not live on the globe.*

**Pass test:** He distrusts “straight on paper.” That distrust is the whole point of Beat D later.

**This is Gould’s air-travel analogy, and the standard cartography lesson Taylor–Wheeler use for Schwarzschild coordinates.**

### Beat C — Sphere of local rockets (the paradox dies here)

**Feel:** Every “up” is real and local. They do not agree. The planet is not a balloon.

**Picture 1 — arrows:** Earth as a sphere. At 8–12 points, a tiny rocket nozzle pointing local-outward. Animate a gentle flicker of thrust. Radius of the sphere **does not change**. A Euclidean “sum of arrows” ghost tries to inflate the sphere and fails.

**Picture 2 — latitude dual (the actual geometry):** Switch the globe’s meaning. Now the globe is **spacetime**, walking is **time**. Two walkers on 5°N and 5°S, steering away from each other, distance locked. Superimpose: “this turning = the floor pushing you.”

**Picture 3 — prevented geodesics:** Ghost dotted worldlines of free-fall (inward, meeting-ish). Solid worldlines of the crust, held at constant r by contact forces. Caption: *Each person is being stopped from falling. “Falling” is the geodesic. Standing is the forced path.*

**Pass test:** He can point at two opposite people and say “their ups are not the same direction, and curvature is why their distance doesn’t grow.”

**Do not:**

- One giant arrow labeled “Earth accelerating.”
- Animate the radius growing even “just for illustration.”
- Draw all rockets parallel (that’s a flat Earth / Rindler slab).

**Optional tactile:** styrofoam sphere, toothpicks as local ups. Ask: “which way is the sphere going?” There isn’t one.

### Beat D — Worldlines: flag the textbook trap, then draw the honest picture

**User asked:** standing still looks like a straight vertical line on paper but is the bent path; free-fall looks curved on paper but is the geodesic. **OR flag if textbooks say this is misleading.**

**Verdict: flag it. Do not ship the naive paper diagram as the truth.**

Why:

- Taylor–Wheeler Ch. 3: Schwarzschild (t, r) is a *map*. Map separations are not measurements. “Never confuse a global map coordinate separation with the local inertial frame measurement.”
- Same chapter, embedding diagrams: worldlines cannot lie on the Flamm funnel. The extra axis is fake.
- Dale Insights uses (t, z) paper diagrams carefully, but only after defining “straight” as geodesic, not as “looks straight in these coordinates.”
- In Schwarzschild coordinates, a hoverer *is* a vertical line (constant r). A radial faller *looks* curved. That is the same lie as Beat B’s Mercator.

**Honest replacements (pick one, or sequence them):**

**D1 — Curved surface spacetime (recommended).**
A 2D surface whose “up” the page is time-ish and “across” is radial. Mass makes the surface’s geometry such that:

- Geodesics (free-fall) are locally straight *on the surface* (string pulled taut, or a short laser on the surface).
- Hovering (constant r) is a curve that must be steered — like the latitude line.

This is A.T.’s adamtoons construction and the spirit of Einstein Online’s sphere-vs-plane. ScienceClic’s shrinking grid is a time-animation cousin: the “straight” inertial lattice bunches as time passes.

**D2 — Epstein-style (Relativity Visualized).**
Vertical = proper time (wristwatch). Euclidean length on the page ≈ coordinate time. Slow objects take the path that maximizes proper time; near a mass, that path leans toward the mass because clocks run slower there. Contested as a full GR visualization (it’s a clever SR-ish diagram), but it correctly privileges **time**.

**D3 — If you must use (t, r) graph paper:**
Draw it as a *bad map* on purpose. Same tracks as Beat B. Caption: *This paper is Mercator. The vertical line is “not moving on the map.” It is not “not accelerating.”*

```
BAD MAP (don't treat as geometry)

 t ^     hoverer = vertical  = FORCED (accelerometer screams)
   |     faller  = leaning   = GEODETIC (accelerometer silent)
   |        /
   |       /
   |      /
   |     |
   +-------------> r

GOOD SURFACE (do this)

   taut string on a curved sheet = fall
   steered path holding "height" = stand
```

**Pass test:** He does not believe “straight on my screen = inertial.”

### Beat E — Direction is local; no one inertial frame for Earth

**Feel:** You can have a truthful “no gravity” room. You cannot have a truthful “no gravity” planet.

**Picture:**

1. A small falling cabin: pens float, parallel. Caption: *local inertial frame. Equivalence lives here.*
2. Widen the cabin to Earth-scale: two pens on opposite sides. They drift together (tides). Caption: *the leftover is curvature. Same shape as the ants.*
3. Try to draw one xyz triad covering the whole Earth. It tears. Many little triads, each free-falling, rotate relative to each other. Caption: *no global inertial frame.*

Carroll’s two-box figure (particles in a rocket all fall the same way; particles around Earth converge) is the academic original. Einstein Online’s giant elevator is the public version.

**Pass test:** He can say why the closed-box story is true *and* why it does not apply to people in India and Argentina at once.

---

## 4. Visualization mistakes — which are actively harmful

Education research (Kersting & Steier, *Science & Education* 2018; Kersting, *Physics Education* 2019) plus working relativists (WannabeNewton, Overduin, Taylor–Wheeler) agree: some analogies don’t just simplify. They **install the wrong ontology**.

| Mistake | What the learner takes away | Harm level | Who flags it |
|---------|----------------------------|------------|--------------|
| Rubber sheet + bowling ball | Gravity is a downward force into a dent; 3D space is a 2D trampoline | **Actively harmful** as *the* model of falling | Overduin/GP-B (uses then immediately caveats); Kersting 2018; WannabeNewton: “inherently flawed”; Watkins thesis 2014 |
| 3D funnel / gravity well you “fall down” | Extra spatial axis is real; you roll downhill in space | **Actively harmful** for worldlines | Taylor–Wheeler Query 2B: worldline **cannot** lie on the embedding diagram; Flamm 1916 paraboloid is a *spatial* slice only |
| “Earth is flying upward through space” as a global fact | One Euclidean up for the whole planet; Earth should leave the solar system | **Actively harmful** for this paradox | Dale; PeterDonis; GP-B Overduin: “Obviously not, for we do not observe the earth to grow larger!” |
| Implying Earth is expanding | Directly the confusion we are killing | **Actively harmful** | Hawking’s setup; Wade888 thread as a cautionary tale of what happens if you don’t kill this |
| Gravity as a force-field overlay on top of geodesics | Restores Newton and makes GR decorative | Harmful if it stays on screen | Carroll: “acceleration due to gravity” is not a reliable primitive |
| PBS-style “gravity is an illusion” with no tides | Learner thinks GR denies the apple hitting the ground | Mildly harmful; incomplete | Pössel: gravity is *partly* artefact, *partly* curvature |
| River / “space flowing into Earth” as the standing-on-Earth picture | Space is a substance; hovering vs flow sounds like expansion or aether | **Contested.** OK as PG coordinates for horizons; bad lead for this paradox | Hamilton & Lisle 2008 is real physics; Physics.SE answers that go “ether flowing in” are not |
| Rindler slab (infinite accelerating floor) as a picture of Earth | Works locally; if globalized, people in Argentina fall off | Harmful if not labeled LOCAL | A.T.; Carroll Fig. 4.1 vs 4.2 |
| Drawing all “up” arrows parallel | Flat Earth / one inertial frame | Harmful | Beat C |

**Rubber sheet — specific charges:**

1. Needs real gravity to make the marble roll (circular).
2. Shows spatial curvature; near Earth, falling is time curvature.
3. Suggests a preferred “down” in an embedding space.
4. Makes orbits look very bent in space; Earth’s worldline is almost straight in spacetime (Overduin: one AU wide, light-years long in time).

Kersting’s finding is not “never show a sheet.” It is: students’ bodies already know gravity as a downward pull, so the sheet **confirms the Newtonian intuition GR is trying to replace**. For this learner, who already has the elevator, the sheet is a downgrade.

**Funnel — specific charges:**

Taylor–Wheeler §3.9: you add a fake Euclidean Z, pull the [r, φ] slice into a paraboloid so that ruler distance on the surface matches Schwarzschild radial stretching. “The vertical dimension is an artificial construct; it is not a dimension of spacetime.” Objects exist only on the surface. **A worldline has a time direction; the funnel slice froze time.** Rolling a ball into the funnel uses gravity to fake gravity, twice.

---

## 5. Existing explanations — what they get right / wrong *for this paradox*

Scored only on: exploding-Earth, proper vs coordinate acceleration, time vs space, geodesic vs hover.

### Einstein Online (Markus Pössel, AEI) — **best official-quality stack**

- “The elevator, the rocket, and gravity” + “Gravity: from weightlessness to curvature” (2005).
- Right: EP is local; leftover = tides; sphere geodesics; gravity partly artefact, partly curvature; giant falling elevator with two spheres converging.
- Missing: does not foreground the latitude-line (hoverer) picture as cleanly as benrg/Dale. Add Beat C yourself.

### Dale, Physics Forums Insights (2015, still the working-physicist FAQ)

- “Understanding the General Relativity View of Gravity on Earth.”
- Right: fictitious-force list; apple inertial, ground accelerating; spacetime diagram; two apples through the Earth; **latitude lines 5°N/5°S as the exploding-Earth geometry**; “surface accelerating, Earth not expanding.”
- This is the closest thing to a professional design doc for Beats C–E.
- Tone is forum-essay, not visual. Steal the geometry, not the prose.

### benrg, Physics.SE (2020)

- Highest-voted answer to “Why doesn’t planet Earth expand if I accelerate upwards.”
- The walking-east-on-parallels analogy, with walking = time, turning = acceleration.
- Short, exact, stealable.

### Gravity Probe B / Overduin (2007)

- Right: rubber sheet’s limits; planetary worldlines almost straight in spacetime; exploding-Earth named and killed; weight ≈ time warp.
- Still *shows* a rubber sheet first. Don’t copy that order.

### Gould, AJP 2016 — time dilation as the reason a ball falls

- Right: slow objects see time curvature; map vs globe.
- Rebilas, AJP 2017, commented (technical caveat on the visualization). Treat Gould as excellent *qualitative* design, not as a unique mechanism beyond the geodesic equation.
- Pössel 2019 cites Gould as the time-only Newtonian picture.

### Lewis Carroll Epstein, *Relativity Visualized* (1994)

- Nicknamed “the gold nugget of relativity books” in pop-physics circles.
- Right: time warp makes things fall; diagrams instead of tensors.
- Contested as a complete GR visualization (Euclideanized proper-time diagrams). Use as Beat D2 optional, not as the sphere-of-rockets answer.

### PBS Space Time — “Is Gravity an Illusion?” (2015) then curvature follow-ups

- Right: Newton vs Einstein on which frame is inertial; train-car fake gravity; freely falling box; **names the round-Earth objections** (tides; inertial frames accelerating relative to each other).
- Wrong / incomplete for *this* paradox: ends on “curved spacetime, sit tight.” Does not show latitude-line hoverers or “Earth is not expanding.” Slogan “gravity may simply not exist” oversells the artefact half.
- Follow-up “Can a Circle Be a Straight Line?” / “General Relativity & Curved Spacetime” do the geodesic language. Still weak on the sphere of rockets.

### Veritasium — “Why Gravity is NOT a Force” (2020)

- Right: accelerometer, geodesics, you are accelerating in your chair.
- Risk: global “ground accelerating up” without a Beat C. Comment sections refill with exploding-Earth. Pair with Dale/benrg geometry or don’t use alone.

### Science Asylum (Nick Lucid) — time-dilation gravity videos

- Right: attacks rubber sheet; attributes falling to gravitational time dilation (Gould-like).
- Incomplete: time-dilation story without the sphere-of-local-ups will not kill the balloon intuition.

### ScienceClic English — “A new way to visualize General Relativity” (2020)

- ~3.6M views. Time curvature as a *shrinking inertial grid* (animation). Explicitly: not space contracting; geodesics approaching.
- Right: time is the missing character; better than the sheet for “why things start to fall.”
- Incomplete for exploding-Earth: still a local/planar grid, not a sphere of rockets. Physicists on r/Physics generally liked it as viz, not as a replacement for curvature-as-tides.

### 3blue1brown

- No dedicated video on this paradox (as of this brief). Sphere/curvature videos help Beat A (intrinsic geometry, great circles) and Beat B (projections). Do not wait for a 3b1b exploding-Earth episode.

### Aatish Bhatia

- No located piece that treats *this* paradox. He has web gravity simulators (Newtonian n-body), not GR hoverers. **Do not cite as a source for Beat C.** If a later piece exists off-search, it was not findable in this pass.

### A.T. / adamtoons.de gravitation.swf (legacy Flash)

- Interactive spacetime surface along a radial line. Cited by working relativists as *not* the rubber sheet. If rebuilt in modern web, it is a Beat D1 candidate.

### Rickard Jonsson, “Visualizing curved spacetime” (licentiate, 2005)

- Dual vs absolute visualization methods. Academic; too heavy for Beat C; useful if you later need faithful 2D spacetime renderings.

### Dialect — “The Geometry of a Black Hole”

- Strong on embedding the Schwarzschild *manifold*. Easy to over-read as a funnel-you-fall-into. Not the exploding-Earth tool.

### Hamilton river model / JILA “waterfall of space”

- Legitimate for horizons and PG coordinates. **Not** the picture for “why standing people don’t inflate Earth.”

### Classroom rubber-sheet demos (Dan Burns / PTSOS “Gravity Visualized”)

- Viral. Harmful as GR. Fine as “orbits can look like they fall in a dent” Newtonian intuition — which is the opposite of the job here.

### Einstein primary texts (what they do and don’t give you)

- 1907 “happiest thought”: freely falling observer does not feel a gravitational field.
- 1911, “On the Influence of Gravitation on the Propagation of Light”: elevator, redshift, light bending from EP — **local**, not the spherical paradox.
- 1916, *Die Grundlage der allgemeinen Relativitätstheorie* / popular *Relativity*: gravity as spacetime geometry; no designer-ready exploding-Earth figure. The spherical-gluing insight is later pedagogy (Hawking one-liner; Dale; benrg; Overduin).

### Textbooks — what to steal

| Book | Steal | Don’t steal as a viz |
|------|-------|----------------------|
| MTW *Gravitation* (1973/2017) | Geodesic deviation as operational curvature; “matter tells spacetime how to curve…” | Phone-book tensors |
| Hartle *Gravity* | Physics-first: EP, local frames, tides before Riemann | |
| Taylor & Wheeler *Exploring Black Holes* 2e (free) | Map vs measurement; spacetime slices; **funnel is spatial, worldlines don’t live there**; rain coordinates later | Schwarzschild (t,r) plots as if they were geometry |
| Carroll notes / *Spacetime and Geometry* | EP boxes; Newtonian limit = g₀₀; no global inertial frame | |
| Schutz *First Course* | Geodesic deviation = tides | |
| Landau & Lifshitz *Classical Theory of Fields* | “Locally inertial” language (cited in Dale comments) | “Real spatial motion” wording is dated |

---

## Designer do / don’t (one page)

**Do**

1. Lead Beat C with **local rocket arrows on a sphere of constant radius**, then the **5°N / 5°S walkers**.
2. Keep Beat A (pole-meeting ants) as *tides / free-fall*, not as the explosion killer.
3. Put a clock in any picture that claims to explain *why a pen starts to fall*.
4. Define inertial as **accelerometer zero**, not as “looks straight on my graph.”
5. Label every diagram: LOCAL PATCH vs GLOBAL GLUING.
6. Prefer a physical globe + toothpicks before any CGI funnel.

**Don’t**

1. Rubber sheet as the GR explanation.
2. Funnel you fall down.
3. One arrow for the whole Earth.
4. Animate Earth’s radius growing.
5. Unqualified “gravity is an illusion.”
6. Naive Beat D paper diagram without calling it a lying map.
7. River of space as the standing-on-Earth story.

**Sequence (recommended)**

```
A  ants, great circles, no force
B  same ants on a flat map → fake force
E  small falling room vs Earth-sized room (tides = leftover)
   [E before C if he still thinks EP should apply to the whole planet]
C  sphere of rockets + latitude dual  ← paradox dies
D  honest worldlines on a curved slice (or labeled-bad map)
   optional: clocks slower lower down (why a stationary apple starts to move)
```

**One-sentence he should be able to say at the end**

> My accelerometer reads up because the floor stops me from falling on a geodesic. “Up” is a local arrow, so a sphere of them is not a balloon. The arrows can all be real and the radius can stay put because spacetime is curved — the same kind of curved that lets two latitude-walkers turn away from each other without getting farther apart. The curvature I can *measure* is tides: two dropped apples converging, like two north-walkers meeting.

---

## Contradictions and gaps

**Consensus (treat as established):**

- Standing people have outward proper acceleration; falling people do not.
- Earth is not expanding.
- Compatibility is spacetime curvature, not a hidden Euclidean motion.
- EP is local; tides are the obstruction to extending it.
- Newtonian falling ≈ time curvature (g₀₀).
- Spatial curvature matters at order v²/c² and for light.
- Rubber sheet / gravity-well-you-fall-into are pedagogically hostile to this paradox.

**Contested or incomplete popularizations:**

- “Gravity is an illusion” as a slogan (PBS) vs Pössel’s two-part gravity.
- Gould’s time-dilation visualization as a *mechanism* vs as a qualitative shadow of the geodesic equation (Rebilas comment).
- River / space-flow pictures (mathematically OK in PG coordinates; easy to mis-hear for Earth).
- ScienceClic grid as *the* picture of GR (excellent for time; not a sphere of hoverers).
- Epstein diagrams as “what spacetime really is.”

**Gaps this pass did not close:**

- No Aatish Bhatia piece on this paradox found.
- No 3blue1brown GR-hoverer video found.
- adamtoons Flash applet is legacy; a modern rebuild would be valuable and is not a 2026 standard.
- No 2024–2026 paper overturns the geometry. Pedagogy is stable.

**What would change the design:** a classroom A/B test of latitude-line vs pole-meeting as the *first* picture for exploding-Earth. Prediction: latitude-line wins for this paradox; pole-meeting wins for tides. They are not interchangeable.

---

## Sources

Primary / textbooks

1. Einstein, A. (1911). “On the Influence of Gravitation on the Propagation of Light.” *Annalen der Physik*. Elevator / EP / redshift. PDF teaching copy: https://sites.pitt.edu/~jdnorton/teaching/Einstein_graduate/pdfs/Einstein_GR_1911.pdf
2. Einstein, A. (1916). “Die Grundlage der allgemeinen Relativitätstheorie.” *Annalen der Physik*. Also the popular *Relativity: The Special and the General Theory*.
3. Misner, C. W., Thorne, K. S., & Wheeler, J. A. (1973; 2017 printing). *Gravitation*. Geodesic deviation as curvature.
4. Hartle, J. B. *Gravity: An Introduction to Einstein’s General Relativity*. Physics-first EP and tides.
5. Taylor, E. F., Wheeler, J. A., & Bertschinger, E. *Exploring Black Holes*, 2nd ed. Free: https://www.eftaylor.com/exploringblackholes/ — Ch. 3 “Curving”: maps vs measurement; Flamm funnel; Query 2B (no worldline on the embedding diagram).
6. Carroll, S. M. Lecture notes on GR, Ch. 4 Gravitation. https://ned.ipac.caltech.edu/level5/March01/Carroll3/Carroll4.html and https://preposterousuniverse.com/grnotes/ — EP boxes; Newtonian limit from g₀₀.
7. Carroll, S. M. *Spacetime and Geometry* (2004/2019). Same arguments in book form.
8. Schutz, B. F. *A First Course in General Relativity*. Geodesic deviation = tides.
9. Schwarzschild, K. (1916). Metric for a spherical mass. Einstein’s “splendid” letter is quoted in Taylor–Wheeler Ch. 3.

Geometry of the paradox (physicist pedagogy)

10. Dale. (2015). “Understanding the General Relativity View of Gravity on Earth.” Physics Forums Insights. https://www.physicsforums.com/insights/understanding-general-relativity-view-gravity-earth/
11. benrg. (2020). Answer to “Why doesn’t planet Earth expand if I accelerate upwards when standing on its surface?” Physics Stack Exchange. https://physics.stackexchange.com/questions/585054 (Wayback if Cloudflare blocks.)
12. Physics Forums thread. (2014). “Why does Earth’s sphericity break the equivalence principle?” (Hawking quote; Nugatory, A.T., PeterDonis, Dale). https://www.physicsforums.com/threads/why-does-earths-sphericity-break-the-equivalence-principle.730937/
13. Pössel, M. (2005). “Gravity: from weightlessness to curvature.” Einstein Online. https://www.einstein-online.info/en/spotlight/geometry_force/
14. Pössel, M. “The elevator, the rocket, and gravity: the equivalence principle.” Einstein Online. https://www.einstein-online.info/en/spotlight/equivalence_principle/
15. Overduin, J. (2007). “Einstein’s Spacetime.” Gravity Probe B / Stanford. https://einstein.stanford.edu/SPACETIME/spacetime2.html — exploding-Earth + time warp.
16. Baez, J. C. & Bunn, E. F. (2005). “The Meaning of Einstein’s Equation.” *Am. J. Phys.* 73, 644. https://math.ucr.edu/home/baez/einstein/

Time vs space curvature

17. Gould, R. R. (2016). “Why does a ball fall?: A new visualization for Einstein’s model of gravity.” *Am. J. Phys.* 84, 396–402. https://doi.org/10.1119/1.4939927
18. Rębilas, K. (2017). Comment on Gould. *Am. J. Phys.* 85, 66.
19. Pössel, M. (2019). “The Shapiro time delay and the equivalence principle.” arXiv:2001.00229. https://arxiv.org/abs/2001.00229 — Newtonian gravity as time distortion only; factor-of-2 from space.

Education research / harmful analogies

20. Kersting, M. & Steier, R. (2018). “Understanding Curved Spacetime: The Role of the Rubber Sheet Analogy in Learning General Relativity.” *Science & Education* 27, 593. http://ui.adsabs.harvard.edu/abs/2018Sc&Ed..27..593K
21. Kersting, M. (2019). “Free fall in curved spacetime—how to visualise gravity in general relativity.” *Physics Education*.
22. Watkins, T. R. (2014). *Gravity & Einstein: Assessing the Rubber Sheet Analogy.* Boise State thesis.

Rindler / river (use with care)

23. Rindler, W. (1960/1966). Hyperbolic motion; Rindler coordinates. See Wikipedia “Rindler coordinates” for the Schwarzschild-near-horizon analogy.
24. Hamilton, A. J. S. & Lisle, J. P. (2008). “The river model of black holes.” *Am. J. Phys.* 76, 519–532. https://arxiv.org/abs/gr-qc/0411060 — legitimate, not the lead picture here.
25. Hamilton, A. J. S. JILA inside-black-hole visualizations. https://jila.colorado.edu/~ajsh/insidebh/waterfall.html

Popular / interactive (audit)

26. PBS Space Time. (2015). “Is Gravity an Illusion?” Transcript: https://www.pbs.org/video/pbs-space-time-gravity/
27. PBS Space Time. “General Relativity & Curved Spacetime Explained!” / “Can a Circle Be a Straight Line?”
28. Veritasium. (2020). “Why Gravity is NOT a Force.” https://www.veritasium.com/videos/2020/10/9/why-gravity-is-not-a-force
29. ScienceClic English. (2020). “A new way to visualize General Relativity.” https://www.youtube.com/watch?v=wrwgIjBUYVc
30. Science Asylum. “The REAL source of Gravity might SURPRISE you…” / related time-dilation videos.
31. Epstein, L. C. (1994). *Relativity Visualized.* Insight Press. Archive text: https://archive.org/details/L.EpsteinRelativityVisualizedelemTxt1994Insight
32. UCLA Demo Web. “10. Curved Spacetime” (Epstein-based). https://demoweb.physics.ucla.edu/content/10-curved-spacetime
33. A.T. Interactive gravitation spacetime diagram (legacy Flash). http://www.adamtoons.de/physics/gravitation.swf
34. Jonsson, R. M. (2005). “Visualizing curved spacetime.” http://www.relativitet.se/Webtheses/lic.pdf
35. Nichols, D. A. Tendex/vortex visualizations of curvature (research viz, not this paradox). https://dnichols1.github.io/visualizations/

Tier notes: 1–9, 16–19, 23–24 are A (primary / peer-reviewed). 10–15, 20–22 are A/B (specialist pedagogy or education research). 26–35 are B/C (useful for “what people already saw,” not for what is true).
