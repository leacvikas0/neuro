# AI Context — Vikas's AI Journey

## Current Status
- Transitioning from single-neuron numerical tests to spatial architectures for image processing.
- Explored the abstract boundary between the world and the machine (Encoder -> Machine -> Decoder).
- Hit the physical bottleneck of "global coherence" — scaling the machine to output multiple numbers.
- Developed the `whiteboard` skill: all future architectural bottlenecks will use spatial, minimal HTML/SVG diagrams with native marker notes instead of text walls.

## Progress
1. **The Simplest Machine (1 Dial)**
   - Derived the full gradient descent loop from scratch: loss compass, `nudge = input * loss * lr`, learning rate speed limit, stopping condition.
   - Built and ran first Python training engine in `ai/train.py`.

2. **Two Inputs & Multi-Dial Credit Assignment**
   - Built a 2-input, 2-dial machine: `output = (x1 * w1) + (x2 * w2)`.
   - Solved the credit assignment puzzle: each dial scales its local nudge proportionally to its connected input lever.
   - Wrote, debugged, and verified the multi-dial training loop in `ai/train_scale.py`.

3. **Multi-Sample Dataset Training (Stochastic Gradient Descent)**
   - Resolved catastrophic forgetting by training on multiple samples via zipped epochs.
   - Built multi-sample dataset training in `ai/weird-exp.py`.

4. **The Global Coherence Wall (Current)**
   - Derived that a 3x3 pixel image requires 27 input levers.
   - Discovered the physical bottleneck: a single neuron mixes all 27 inputs into exactly ONE scalar number (`Output 1`).
   - Proved that intercepting the inputs *before* the sum destroys the ability for pixels to mix (global coherence).

## Open Loops
- **The Handoff Question:** If the first neuron crushes 27 inputs into a single mixed number (Output 1), what exact physical object must be placed in the "mystery circle" to produce a second mixed number (Output 2)?
- What happens when a baseline shift exists -> discovering the Bias dial `b`.

## Next
- Answer the handoff question to derive the concept of a multi-neuron **Layer**.
- Explore fixed baseline offset (`+ b`).
