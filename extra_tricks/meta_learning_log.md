# Meta-Learning & Pedagogical Tricks
*A living log of how we are optimizing the learning process in this lab, based on what actually works for Vikas's brain.*

## 1. Visuals: The "No Lazy Shapes" Rule
- **Kill ASCII**: It breaks, it's confusing, and it costs translation energy.
- **Python / HTML Rendering**: Generate actual images (via `matplotlib` or HTML) and serve them locally (`python -m http.server 8791 --directory images`). 
- **High-Fidelity Tensions**: Diagrams must not be lazy. If we are teaching "Error", the diagram must explicitly draw the dashed lines representing the gap. The visual cortex needs real, concrete evidence of the concept.

## 2. The Neuroscience of Introducing Concepts
- **The Synapse Rule**: Never introduce an unfamiliar concept floating in a void. Always physically attach it to something already known (spatial reality, everyday objects, or previously mapped neuroscience).
- **The Wall is the Teacher**: The user must build, predict, and fail *first*. Theory, names, and formulas only arrive as the answer to "why did this break?"
- **Zero-Assumption Math**: Every equation is torn down to its physical actions (stretching, scaling, flipping, sliding) before being treated as abstract symbols.

## 3. The Python Pipeline
Because Python syntax is new, we use a strict three-step translation to prevent cognitive overload:
1. **Plain English**: "What should the machine do?"
2. **Notebook / Logic**: Write it out conceptually.
3. **Python Syntax**: Translate the logic into actual code.

## 4. Interaction Engine
- The user is in the driver's seat. Learning is an active physical process of guessing and building, not passively reading walls of text.

---
*Created during the Gradient Descent / Overfitting session (Aug 2026).*