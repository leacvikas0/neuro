# AI Context — Vikas's AI Journey

## Current Status
- Restarted AI learning. Zeroing out old knowledge.
- Goal: Deep, bottom-up understanding of Diffusion and Transformers, including math and Python.
- Approach: Predictive processing analogy. Build broken machines, hit walls, fix them. Geometry before math. Python learned on the fly.

## Progress
1. **The Simplest Machine**
   - Introduced a one-input, one-weight (dial) machine.
   - User correctly identified that the operation depends on the transformation and guessed multiplication (`2 x 3 = 6`).
   - User ran Python REPL, debugged assignment syntax (`=` vs expression), and successfully calculated `loss = realoutput - output` resulting in `4.0`.
   - User derived the exact intuition for gradient descent unprompted: instead of computing `y = realoutput/x`, the machine must nudge the dial (`y goes 2.9 loss increases, goes 3.1 it decreases`), measure the distance, and follow the slope down to zero loss.
   - Hit a wall: Why do we guess/nudge instead of just solving it directly algebraically (`w = truth / x`)?
   - User realized that `loss` contains both magnitude (distance) AND direction (sign: + or -), removing the need to guess randomly.
   - Core Click: User fully grasped *why* AI exists as a field. You can't algebraically solve a billion parameters simultaneously, so you write an algorithm (gradient descent) to iteratively nudge them based on the loss compass.