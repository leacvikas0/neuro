# Grid Cells & Entorhinal Cortex: Conceptual / Abstract Spaces

**Research brief · 2026-08-06**  
**Focus:** Constantinescu et al. 2016 (bird neck/leg “bird space”) + newest primary findings (2024–2026)  
**Method:** Primary papers prioritized; consensus separated from new/contested claims; contradictions with the classical spatial view flagged.

---

## Frame

| | |
|---|---|
| **Question** | Do entorhinal (and related) grid codes organize non-spatial conceptual/abstract knowledge the way they map physical space—and what does the newest evidence say? |
| **Anchor experiment** | Constantinescu, O’Reilly & Behrens, *Science* 2016 — humans navigating a 2D “bird space” (neck length × leg length) during fMRI |
| **Recency window** | New findings prioritized for **2024–2026**; foundational 2010–2023 work used for consensus baseline |
| **Angles** | (1) Primary experimental literature; (2) reviews/theory; (3) counter-evidence & nulls; (4) methods limits of fMRI “grid-like” proxies |
| **Out of scope** | Pure AI/world-model applications; clinical Alzheimer’s grid literature except where it constrains the abstract-space claim |

---

## Executive take

Constantinescu et al. (2016) provided the first strong human fMRI evidence that a **hexagonal (six-fold) directional BOLD signature**—the standard non-invasive proxy for grid-cell population activity—appears when people mentally traverse a **two-dimensional conceptual space** defined by continuous feature dimensions (bird neck × legs). The signal was strongest in **entorhinal cortex (EC)** and **ventromedial / medial prefrontal cortex (vmPFC/mPFC)**, stable across sessions hours to a week apart, and correlated with task accuracy.

The **established consensus (roughly 2016–2023)** treats this as evidence for a **domain-general cognitive map**: the hippocampal–entorhinal system reuses spatial coding principles (grids, distances, vectors) for abstract relational structure (concepts, value, social hierarchy, semantics). The **2024–2026 literature expands that claim**—value space, social warmth/competence, time (age × time-of-day), developmental growth of non-spatial grid-like codes, hippocampal ripples aligning experience to grid-like schemas, primate mental navigation in EC—but also **hardens caveats**: many results are **partial**, EC self-aligned grids are often weak or absent, visual/morph confounds are hard to kill, real conceptual spaces are rarely clean Euclidean 2D lattices, and some tasks are better explained by **subjective value** than by hexagonal codes. Direct single-unit proof of “conceptual grid cells” in humans remains thin; most claims rest on the **hexadirectional fMRI proxy**.

---

## 1. The classic experiment: Constantinescu et al. 2016

### Citation
**Constantinescu, A. O., O’Reilly, J. X., & Behrens, T. E. J.** (2016). Organizing conceptual knowledge in humans with a gridlike code. *Science*, **352**(6292), 1464–1468.  
**DOI:** [10.1126/science.aaf0941](https://doi.org/10.1126/science.aaf0941)  
PMC: [PMC5248972](https://pmc.ncbi.nlm.nih.gov/articles/PMC5248972/) · UCL author PDF available via discovery.ucl.ac.uk

### Design (what they actually did)
1. **Stimulus space:** Synthetic birds varying continuously on two dimensions — **neck length** and **leg length** → a 2D conceptual “bird space.” Features are lengths (metric-like) but must be extracted from a vertical visual morph, not navigated as physical space.
2. **Learning:** Stimulus–outcome (S–O) training. Birds paired with Christmas symbols. Participants freely morphed neck:leg ratios with a **non-spatial controller** until outcomes popped; this forced familiarity with the whole space, not only isolated pairings.
3. **Scanner task:** Watch a bird morph along a pre-defined neck:leg trajectory, then **imagine the morph continuing** at same ratio/speed; choose among outcome options (or “no outcome”). Accuracy ~72.8% ± 1.0%. **0/28** participants reported conceiving relationships as a spatial map (debrief).
4. **Critical control:** Trajectory orientation in bird-space was dissociated from low-level visual properties of the display (same orientation realized by different stimuli; different orientations through same stimulus). Hexagonal regressors shared **<5%** variance with tested visual/behavioral confounds.

### Neural assay
- Same logic as Doeller et al. 2010 spatial fMRI: if conjunctive grid × direction cells fire more when “movement” aligns with the population grid axis, BOLD shows **six-fold (hexagonal) modulation** of trajectory angle θ: `sin(6θ)` / `cos(6θ)`.
- **Quadrature filter** → regions sensitive to any phase of 6-fold modulation.
- **Cross-validation of grid angle** across sessions (same day ~30 min; between days >1 week): aligned vs misaligned trajectories.

### Main results
| Finding | Detail |
|--------|--------|
| Hexagonal signal | Network overlapping spatial-navigation grid-like regions and DMN: **vmPFC/mPFC**, **entorhinal (ERH)**, medial parietal, lateral temporal |
| Specificity | **Six-fold** only; not 4-, 5-, 7-, 8-fold controls |
| Stability | Grid orientation consistent **within-day** and **>1 week later** |
| Cross-region alignment | EC and vmPFC grid angles can align to each other |
| Behavior | Stronger hexagonal modulation / consistency → **better task performance** (not just faster learning history) |

### Interpretation (authors)
Global relational codes can organize non-spatial conceptual knowledge; when knowledge is laid out in **two continuous dimensions**, those codes can take a **hexagonal grid-like** form—the same metric used for physical space.

### Contemporary commentary
**Kriegeskorte & Storrs** (2016). Grid cells for conceptual spaces? *Neuron*, **92**, 280–284. DOI: [10.1016/j.neuron.2016.10.006](https://doi.org/10.1016/j.neuron.2016.10.006) — first conceptual-space grid evidence; implications for mental representation and testing neural-coding hypotheses with bulk activity.

---

## 2. Established consensus (pre-2024 baseline)

Treat as **relatively settled among cognitive-map labs** (not universally accepted outside them):

1. **Grid cells tile physical space** with hexagonal firing fields (Hafting et al. 2005 *Nature*; Mosers’ work). Human single-unit grid-like cells recorded intraoperatively (Jacobs et al. 2013 *Nature Neuroscience*).
2. **fMRI hexadirectional modulation** is a valid population proxy for grid-like coding during navigation (Doeller, Barry & Burgess 2010 *Nature*; DOI: [10.1038/nature08704](https://doi.org/10.1038/nature08704)).
3. **Domain-general cognitive maps:** the same spatial codes support navigation of abstract spaces when structure is low-dimensional and continuous.
   - Flagship theory review: **Bellmund, Gärdenfors, Moser & Doeller** (2018). Navigating cognition: Spatial codes for human thinking. *Science*, **362**(6415), eaat6766. DOI: [10.1126/science.aat6766](https://doi.org/10.1126/science.aat6766).
4. **Replications / extensions (selected, pre-2024):**
   - Imagined / simulated navigation: Bellmund et al. 2016 *eLife*; Horner et al. 2016 *Current Biology*
   - Olfactory 2D odor space: Bao et al. 2019 *Neuron*
   - Visual space (saccades): Nau et al. 2018 *Nature Neuroscience*; Staudigl et al. 2018 *Current Biology*
   - Semantic / word meaning spaces: Viganò & Piazza 2020; Viganò et al. 2021 *NeuroImage*
   - Discrete social hierarchy (competence × popularity): Park et al. 2021 *Nature Neuroscience* / related Park et al. 2020 *Neuron* (map-making)
5. **Mechanistic story:** EC provides a **metric / path-integration–like scaffold**; hippocampus binds specific entities; mPFC/vmPFC supports flexible inference over the map. Distances and vectors, not only hexagons, appear across domains.

**Caveat baked into consensus:** almost all human abstract-space evidence is **fMRI six-fold symmetry**, not single-unit grids. Authors themselves (Constantinescu 2016) urge caution about equating BOLD hexagons with neuronal grid cells.

---

## 3. Newest findings (2024–2026)

### 3.1 Abstract **value** space (prospective decision-making)
**Nitsch, A., Garvert, M. M., Bellmund, J. L. S., Schuck, N. W., & Doeller, C. F.** (2024). Grid-like entorhinal representation of an abstract value space during prospective decision making. *Nature Communications*, **15**, 1198.  
**DOI:** [10.1038/s41467-024-45127-z](https://doi.org/10.1038/s41467-024-45127-z)

- Participants traverse an abstract **value space** while making prospective choices.
- **EC shows six-fold grid-like BOLD** along trajectories.
- Grid orientation **aligned to the axis through value space most informative for the decision** (task-adaptive orientation, not fixed environmental geometry alone).
- Claim: entorhinal grid system supports **prediction of future values** via a cognitive map of abstract value structure.

### 3.2 Abstract **social** space (warmth/competence analog)
**Liang, Z., Wu, S., Wu, J., Wang, W.-X., Qin, S., & Liu, C.** (2024). Distance and grid-like codes support the navigation of abstract social space in the human brain. *eLife*, **12**, RP89025.  
**DOI:** [10.7554/eLife.89025.4](https://doi.org/10.7554/eLife.89025.4)

- Design explicitly adapted from Constantinescu 2016: 2D social value map (**competence × trustworthiness**), visual bar morphs, mental continuation of trajectories, intensive training.
- **Distance codes:** precuneus (positive with traveled distance); fusiform / middle occipital (negative).
- **Grid-like:** partial evidence — hexagonal consistency in **vmPFC** and some EC effects when aligned to frontal-pole or anatomical pmEC orientations; **EC did not reliably show grid-like code aligned to its own orientation**.
- Hexagonal consistency linked to cooperation-related distance effects and (negatively) social avoidance scores in some regions.
- **eLife Assessment:** findings **useful**, evidence **solid** but **partial**; reviewers flag possible **visual-stimulus confounds** and design limits.

### 3.3 **Time** as a 2D abstract space
**Peters-Founshtein, G., Dafni-Merom, A., Monsa, R., & Arzy, S.** (2024). Evidence for grid-cell-like activity in the time domain. *Neuropsychologia*, **198**, 108878.  
**DOI:** [10.1016/j.neuropsychologia.2024.108878](https://doi.org/10.1016/j.neuropsychologia.2024.108878) · PubMed: [38574806](https://pubmed.ncbi.nlm.nih.gov/38574806/)

- Mental simulation of changes in **age** and **time-of-day** as a 2D “age–day” space.
- Grid-cell-like representations support trajecting across this temporal conceptual space; regions coding past/present/future also engaged.
- Extends Constantinescu-style logic from feature morphs to **autobiographical/temporal abstraction**.

### 3.4 Primate **mental navigation** in EC (cellular resolution)
**Neupane, S., Fiete, I., & Jazayeri, M.** (2024). Mental navigation in the primate entorhinal cortex. *Nature*, **630**, 704–711.  
**DOI:** [10.1038/s41586-024-07557-z](https://doi.org/10.1038/s41586-024-07557-z)

- Monkeys learn a map of images; mentally navigate between landmarks without sensory path.
- Structured EC population activity tracks mental trajectories / inter-landmark structure.
- Links EC activity patterns to **endogenous cognitive-map recruitment** during mental navigation—bridges abstract human fMRI claims and animal systems neuroscience (not a pure “conceptual bird-space” replication, but critical cellular support for map-based mental traversal).

### 3.5 Hippocampus / OFC forming maps of abstract spaces
**Qiu, Y., et al.** (2024). Forming cognitive maps for abstract spaces: the roles of the human hippocampus and orbitofrontal cortex. *Communications Biology*, **7**.  
**DOI:** [10.1038/s42003-024-06207-4](https://doi.org/10.1038/s42003-024-06207-4) · PMC: [PMC11063219](https://pmc.ncbi.nlm.nih.gov/articles/PMC11063219/)

- Multidimensional abstract navigation; RSA shows **hippocampus, EC, and OFC** more accurately represent destinations in exploitation vs exploration stages.
- Emphasizes **collaboration** of HIP–EC and OFC in learning abstract structure (map formation, not only grid readout).

### 3.6 Hippocampal **ripples** + grid-like schema (2025)
**Xiao, Z., Wang, X., et al.** (2025). Human hippocampal ripples align new experiences with a grid-like schema. *Neuron*, **113**, 3661–3672.e4.  
**DOI:** [10.1016/j.neuron.2025.07.028](https://doi.org/10.1016/j.neuron.2025.07.028)

- Humans form cognitive maps enabling inference beyond direct experience, relying on **hexagonal grid-like codes as schema**.
- **Hippocampal ripples during rest** predict alignment of new experiences to that grid-like structure.
- Moves the field from “is there a grid signal during the task?” toward **offline consolidation / schema alignment** mechanisms.

### 3.7 Visual space during memory formation (2025)
**Graichen, L. P., et al.** (2025). Entorhinal grid-like codes for visual space during memory formation. *Nature Communications*, **16**, 9247.  
**DOI:** [10.1038/s41467-025-64307-z](https://doi.org/10.1038/s41467-025-64307-z)

- Saccade-based grid-like codes in **left EC**, specific to **later-remembered** study trials.
- Links grid-like visual-space coding to **successful memory encoding** (boundary of spatial vs abstract still fuzzy—visual space is spatial-ish but not self-locomotion).

### 3.8 Development of non-spatial grid-like codes (2026)
**Qu, Y., et al.** (2026). Development of non-spatial grid-like neural codes tracks inference and intelligence. *Cell*, **189**(10), 3091–3106.e15.  
**DOI:** [10.1016/j.cell.2026.02.028](https://doi.org/10.1016/j.cell.2026.02.028)

- Developmental fMRI: **EC grid-like codes in non-spatial conceptual spaces strengthen with age**, track schema representation, and **predict improved inferential reasoning** and intelligence-related measures.
- Mechanistic developmental account: growth of non-spatial grid-like codes underpins gains in inference and knowledge assimilation.
- Direct intellectual descendant of Constantinescu: same class of hexagon analyses applied to developmental cognition.

### 3.9 Related 2025–2026 extensions (primary / high-signal)
| Paper | Claim (compressed) | DOI / venue |
|-------|--------------------|-------------|
| **Barnaveli et al.** 2025 *Nat Commun* | HIP–EC maps + cortical motor system represent **action planes** and outcomes | [10.1038/s41467-025-59153-y](https://doi.org/10.1038/s41467-025-59153-y) |
| **Eperon et al.** 2026 *PLoS Biology* | **Action information** integrated into EC representations of **conceptual space**; reflected in eye movements | [10.1371/journal.pbio.3003755](https://doi.org/10.1371/journal.pbio.3003755) |
| **Spatial coding supports auditory conceptual navigation** 2025 bioRxiv | Grid-like coding for auditory conceptual navigation; notable extra-EC peaks (e.g. TPJ) | [10.1101/2025.02.04.636440](https://doi.org/10.1101/2025.02.04.636440) |
| **Viganò et al.** 2024 *PNAS* | Spontaneous eye movements reflect geometries of conceptual spaces | [10.1073/pnas.2403858121](https://doi.org/10.1073/pnas.2403858121) |
| **Zheng et al.** 2024 *Cerebral Cortex* | Parallel cognitive maps for multiple knowledge structures in hippocampal formation | [10.1093/cercor/bhad485](https://doi.org/10.1093/cercor/bhad485) |

### 3.10 Reviews that organize the 2020s wave
| Review | Focus | DOI |
|--------|-------|-----|
| **Dong, L. L. & Fiete, I. R.** (2024). Grid cells in cognition: Mechanisms and function. *Annual Review of Neuroscience*, **47**, 345–368 | Mechanisms, function, path integration; sober on what grids *must* do | [10.1146/annurev-neuro-101323-112047](https://doi.org/10.1146/annurev-neuro-101323-112047) |
| **Chen, D., et al.** (2024). Grid codes underlie multiple cognitive maps in the human brain. *Progress in Neurobiology* | Human grid codes in physical + non-physical space; models; clinical/AI notes | [10.1016/j.pneurobio.2024.102583](https://doi.org/10.1016/j.pneurobio.2024.102583) (check final DOI; SciDirect: S0301008224000054) |

---

## 4. Consensus vs new / contested

### Established consensus (high confidence within cognitive-map field)
- Low-dimensional continuous conceptual spaces can recruit **hexadirectional BOLD signatures** in EC–mPFC networks similar to spatial navigation.
- Constantinescu 2016 is the **foundational human conceptual-grid paper**; method and interpretation still define the paradigm.
- Grid-like codes are **not unique to locomotion**; they appear in imagination, value, social, semantic, and temporal tasks under carefully designed 2D geometries.
- **Distance / vector codes** co-exist with hexagons and often show up in precuneus, hippocampus, and visual/MTL regions.

### New (2024–2026) — promising but not yet “settled doctrine”
- Grid orientation can be **task-aligned** to decision-relevant axes in value space (Nitsch 2024).
- **Partial** social-space grids + individual-difference links to social traits (Liang 2024).
- **Temporal** abstract spaces show grid-like activity (Peters-Founshtein 2024).
- **Developmental** strengthening of non-spatial grids tracks inference/intelligence (Qu 2026).
- **Ripple-mediated** alignment of new experience to grid-like schemas (Xiao 2025).
- Action / motor plans may be folded into EC conceptual maps (Barnaveli 2025; Eperon 2026).

### Contested or weak
| Claim | Status | Why contested |
|-------|--------|----------------|
| “These are grid *cells*” | **Overstatement if based on fMRI alone** | Hexadirectional BOLD is a **population proxy**; Constantinescu 2016 itself warned about coarse fMRI |
| Reliable **EC self-aligned** grids in every abstract task | **Often fails** | Liang 2024: EC consistency often needs orientation borrowed from PFC; low tSNR in EC |
| Hexagonal code in **vmPFC** = local grid cells | **Unlikely** | Scarce single-unit grids in frontal cortex (Jacobs et al. 2013 rates near chance in many frontal areas); more likely EC–PFC coordination |
| Grid code > value code in vmPFC during decisions | **Task-dependent** | **Lee, Yu, Lerman & Kable** (2021). Subjective value, not a gridlike code, describes neural activity in ventromedial prefrontal cortex during value-based decision-making. *Journal of Neuroscience*. DOI: [10.1523/JNEUROSCI.0390-21.2021](https://doi.org/10.1523/JNEUROSCI.0390-21.2021) — value model clearly beat hexagonal model in their design |
| Real-world concepts are Euclidean 2D lattices with regular hexagons | **Strongly idealized** | Social dimensions are correlated/non-orthogonal; importance is non-uniform; high-dimensional (Liang 2024 discussion; spatial reward-warping literature) |
| Domain-general map is *the* explanation for generalization | **Competing accounts exist** | Pure RL structure learning, successor representations without literal hexagons, value caching — not all require 6-fold grids |

---

## 5. Contradictions / tension with the **standard spatial view**

Classical spatial view (Hafting/Moser line): grid cells are a **path-integration–based metric of physical space**—periodic triangular lattice over the explored arena, shaped by self-motion and environmental geometry.

| Spatial orthodoxy | Conceptual/abstract findings that strain it |
|-------------------|-----------------------------------------------|
| Grids require locomotion / self-motion | Purely **imagined** morphs and mental trajectories yield hexadirectional BOLD without walking |
| Grid fields tile *physical* geometry | Same signature for **neck/leg**, **value**, **warmth/competence**, **age×time-of-day** — no arena |
| Common orientation anchored to environment | Abstract tasks: orientation can track **decision-relevant axes** (Nitsch) or internal maps never shown as maps (Constantinescu debrief) |
| Regular hexagon in open field | Real cognitive spaces may need **distorted / non-uniform** metrics (reward warping of grids already seen in physical space: Boccara et al. 2019); 6-fold analysis then fails by design |
| Grid cells ≈ MEC Layer II | Human fMRI “grids” spread into **mPFC, precuneus, temporal pole**; cellular substrate outside MTL unclear |
| Path integration is the *function* | Conceptual work emphasizes **relational metric + inference**; normative theory (Dong & Fiete 2024; 2026 arXiv “If grid cells are the answer…”) still roots grids primarily in **high-fidelity path-integrable position codes**—abstract findings may be **reuse** of that code, not a separate evolved function |

**Productive middle position (common in 2024–2026 writing):**  
The EC implements a **general relational geometry / metric scaffold**. Physical space is the evolutionarily primary domain where path integration forces hexagonal organization; abstract domains can **reuse** that scaffold when experimenters (or learning) embed knowledge in continuous low-dimensional coordinates. That is **reuse / domain-generality**, not proof that “concepts are spaces” in the everyday sense—or that every concept is hexagonally tiled.

---

## 6. Methods note (why “grid-like” ≠ “grid cell”)

```
Rodent single unit:  multi-field hexagonal lattice over position
         ↓ (assumption: shared orientation + conjunctive direction tuning)
Human fMRI proxy:    BOLD ~ cos(6(θ − φ)) for trajectory direction θ
         ↓
Abstract claim:      same proxy during mental traversal of feature space
```

**Risks:** visual morph confounds, low EC SNR, multiple-comparisons / ROI selection, non-specific six-fold harmonics, alternative models (value, attention, difficulty) that can look periodic under some samplings. Best papers use: (1) orientation cross-validation, (2) fold-specificity controls (4/5/7/8), (3) dissociation from visual features, (4) behavioral correlation.

---

## 7. Gaps (still open as of mid-2026)

1. **Direct human single-unit recording** of grid cells during a Constantinescu-style conceptual task (not only virtual spatial navigation).
2. Whether conceptual grids **share phase/orientation** with spatial grids in the same cells (remapping vs reuse).
3. Scaling beyond **2D orthogonal equal-metric** spaces (the experimental sweet spot for 6-fold detection).
4. Causal necessity: does disrupting EC hexadirectional coding specifically impair conceptual inference?
5. Pre-registered multi-lab replications of social/value abstract grids with stricter visual controls.
6. Integration with successor-representation / predictive-coding accounts that may produce hexagonal-like codes without “space” metaphors.

---

## 8. One-page takeaway diagram

```
PHYSICAL SPACE                    ABSTRACT / CONCEPTUAL SPACE
─────────────────                 ───────────────────────────
Hafting 2005 grids          →     Constantinescu 2016 bird space
Doeller 2010 fMRI hex       →     Nitsch 2024 value
                                   Liang 2024 social
                                   Peters-Founshtein 2024 time
                                   Qu 2026 development
                                   Xiao 2025 ripples ↔ schema
         \                       /
          \                     /
           EC metric scaffold + mPFC flexible inference
                    (Bellmund 2018 synthesis)
                           |
              Contested: how literal? how general?
              Nulls / alternatives: Lee 2021 value > hex
```

---

## Sources

### Anchor & commentary
1. Constantinescu AO, O’Reilly JX, Behrens TEJ. Organizing conceptual knowledge in humans with a gridlike code. *Science*. 2016;352(6292):1464–1468. DOI: [10.1126/science.aaf0941](https://doi.org/10.1126/science.aaf0941)
2. Kriegeskorte N, Storrs KR. Grid cells for conceptual spaces? *Neuron*. 2016;92:280–284. DOI: [10.1016/j.neuron.2016.10.006](https://doi.org/10.1016/j.neuron.2016.10.006)

### Spatial foundations (methods + cells)
3. Hafting T, Fyhn M, Molden S, Moser MB, Moser EI. Microstructure of a spatial map in the entorhinal cortex. *Nature*. 2005;436:801–806. DOI: [10.1038/nature03721](https://doi.org/10.1038/nature03721)
4. Doeller CF, Barry C, Burgess N. Evidence for grid cells in a human memory network. *Nature*. 2010;463:657–661. DOI: [10.1038/nature08704](https://doi.org/10.1038/nature08704)
5. Jacobs J, et al. Direct recordings of grid-like neuronal activity in human spatial navigation. *Nat Neurosci*. 2013;16:1188–1190. DOI: [10.1038/nn.3466](https://doi.org/10.1038/nn.3466)

### Domain-general theory
6. Bellmund JLS, Gärdenfors P, Moser EI, Doeller CF. Navigating cognition: Spatial codes for human thinking. *Science*. 2018;362(6415):eaat6766. DOI: [10.1126/science.aat6766](https://doi.org/10.1126/science.aat6766)

### Key pre-2024 extensions (context)
7. Bellmund JLS, Deuker L, Navarro Schröder T, Doeller CF. Grid-cell representations in mental simulation. *eLife*. 2016;5:e17089. DOI: [10.7554/eLife.17089](https://doi.org/10.7554/eLife.17089)
8. Bao X, et al. Grid-like neural representations support olfactory navigation of a two-dimensional odor space. *Neuron*. 2019. DOI: [10.1016/j.neuron.2019.03.034](https://doi.org/10.1016/j.neuron.2019.03.034)
9. Park SA, Miller DS, Nili H, Ranganath C, Boorman ED. Map making: constructing, combining, and inferring on abstract cognitive maps. *Neuron*. 2020;107:1226–1238.e8. DOI: [10.1016/j.neuron.2020.06.030](https://doi.org/10.1016/j.neuron.2020.06.030)
10. Park SA, Miller DS, Boorman ED. Inferences on a multidimensional social hierarchy use a grid-like code. *Nat Neurosci*. 2021. (social hierarchy grids)
11. Viganò S, Piazza M. Distance and direction codes underlie navigation of a novel semantic space in the human brain. *J Neurosci*. 2020. DOI: [10.1523/JNEUROSCI.1849-19.2020](https://doi.org/10.1523/JNEUROSCI.1849-19.2020)
12. Lee S, Yu LQ, Lerman C, Kable JW. Subjective value, not a gridlike code, describes neural activity in ventromedial prefrontal cortex during value-based decision-making. *J Neurosci*. 2021. DOI: [10.1523/JNEUROSCI.0390-21.2021](https://doi.org/10.1523/JNEUROSCI.0390-21.2021)

### 2024–2026 primary (core of “newest findings”)
13. Nitsch A, Garvert MM, Bellmund JLS, Schuck NW, Doeller CF. Grid-like entorhinal representation of an abstract value space during prospective decision making. *Nat Commun*. 2024;15:1198. DOI: [10.1038/s41467-024-45127-z](https://doi.org/10.1038/s41467-024-45127-z)
14. Liang Z, Wu S, Wu J, Wang WX, Qin S, Liu C. Distance and grid-like codes support the navigation of abstract social space in the human brain. *eLife*. 2024;12:RP89025. DOI: [10.7554/eLife.89025.4](https://doi.org/10.7554/eLife.89025.4)
15. Peters-Founshtein G, Dafni-Merom A, Monsa R, Arzy S. Evidence for grid-cell-like activity in the time domain. *Neuropsychologia*. 2024;198:108878. DOI: [10.1016/j.neuropsychologia.2024.108878](https://doi.org/10.1016/j.neuropsychologia.2024.108878)
16. Neupane S, Fiete I, Jazayeri M. Mental navigation in the primate entorhinal cortex. *Nature*. 2024;630:704–711. DOI: [10.1038/s41586-024-07557-z](https://doi.org/10.1038/s41586-024-07557-z)
17. Qiu Y, et al. Forming cognitive maps for abstract spaces: the roles of the human hippocampus and orbitofrontal cortex. *Commun Biol*. 2024;7. DOI: [10.1038/s42003-024-06207-4](https://doi.org/10.1038/s42003-024-06207-4)
18. Dong LL, Fiete IR. Grid cells in cognition: Mechanisms and function. *Annu Rev Neurosci*. 2024;47:345–368. DOI: [10.1146/annurev-neuro-101323-112047](https://doi.org/10.1146/annurev-neuro-101323-112047)
19. Chen D, et al. Grid codes underlie multiple cognitive maps in the human brain. *Prog Neurobiol*. 2024. (SciDirect S0301008224000054)
20. Xiao Z, et al. Human hippocampal ripples align new experiences with a grid-like schema. *Neuron*. 2025;113:3661–3672.e4. DOI: [10.1016/j.neuron.2025.07.028](https://doi.org/10.1016/j.neuron.2025.07.028)
21. Graichen LP, et al. Entorhinal grid-like codes for visual space during memory formation. *Nat Commun*. 2025;16:9247. DOI: [10.1038/s41467-025-64307-z](https://doi.org/10.1038/s41467-025-64307-z)
22. Barnaveli I, et al. Hippocampus-entorhinal cognitive maps and cortical motor system represent action planes and their outcomes. *Nat Commun*. 2025;16:4139. DOI: [10.1038/s41467-025-59153-y](https://doi.org/10.1038/s41467-025-59153-y)
23. Qu Y, et al. Development of non-spatial grid-like neural codes tracks inference and intelligence. *Cell*. 2026;189(10):3091–3106.e15. DOI: [10.1016/j.cell.2026.02.028](https://doi.org/10.1016/j.cell.2026.02.028)
24. Eperon A, Doeller CF, Theves S, Bottini R. Action information is integrated into entorhinal representations of conceptual space and is reflected in eye movements. *PLoS Biol*. 2026;24(4):e3003755. DOI: [10.1371/journal.pbio.3003755](https://doi.org/10.1371/journal.pbio.3003755)
25. Spatial coding supports auditory conceptual navigation. bioRxiv 2025. DOI: [10.1101/2025.02.04.636440](https://doi.org/10.1101/2025.02.04.636440)
26. Viganò S, Bayramova R, Doeller CF, Bottini R. Spontaneous eye movements reflect the representational geometries of conceptual spaces. *PNAS*. 2024;121(17):e2403858121. DOI: [10.1073/pnas.2403858121](https://doi.org/10.1073/pnas.2403858121)

### Spatial distortion / geometry caveats (for contradictions section)
27. Boccara CN, et al. The entorhinal cognitive map is attracted to goals. *Science*. 2019. DOI: [10.1126/science.aav4837](https://doi.org/10.1126/science.aav4837)
28. Krupic J, Bauza M, Burton S, Barry C, O’Keefe J. Grid cell symmetry is shaped by environmental geometry. *Nature*. 2015. DOI: [10.1038/nature14153](https://doi.org/10.1038/nature14153)

---

*Brief compiled 2026-08-06 from primary papers, reviews, and open abstracts/PDFs. Claims labeled consensus vs new/contested above; where full text was paywalled, DOI-level metadata + abstract + secondary primary citations were cross-checked. For lab use, pull full PDFs via DOI for any claim you cite in writing.*
