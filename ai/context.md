# AI Context — Vikas's AI Journey

## Current Status
- Restarted AI learning. Zeroing out old knowledge.
- Goal: Deep, bottom-up understanding of Diffusion and Transformers, including math and Python.
- Approach: Predictive processing analogy. Build broken machines, hit walls, fix them. Geometry before math. Python learned on the fly.

## Progress
1. **The Simplest Machine**
   - Introduced a one-input, one-weight (dial) machine.
   - User correctly identified that the operation depends on the transformation and guessed multiplication (2 x 3 = 6).
   - User ran Python REPL, debugged assignment syntax (= vs expression), and successfully calculated loss = realoutput - output resulting in 4.0.
   - User derived the exact intuition for gradient descent unprompted: instead of computing y = realoutput/x, the machine must nudge the dial (y goes 2.9 loss increases, goes 3.1 it decreases), measure the distance, and follow the slope down to zero loss.
   - Hit a wall: Why do we guess/nudge instead of just solving it directly algebraically (w = truth / x)?
   - User realized that loss contains both magnitude (distance) AND direction (sign: + or -), removing the need to guess randomly.
   - Core Click: User fully grasped *why* AI exists as a field. You can't algebraically solve a billion parameters simultaneously, so you write an algorithm (gradient descent) to iteratively nudge them based on the loss compass.
   - **The Reversed Gear (Negative Input):** Explored what happens when input is negative. The naive 
ew_dial = dial + error broke and ran backwards.
   - **The Nudge (Multiplication):** User discovered that input * loss perfectly flips the direction when the gear is reversed, creating the steering wheel.
   - **The Brakes (Learning Rate):** User noticed the machine overshoots if the nudge is too large, and deduced the need for a speed limit (learning rate lpha).
   - **Diminishing Returns:** User independently deduced the concept of model checkpointing and diminishing returns as the machine slows down approaching zero loss.
   - **First Python Engine:** User successfully wrote their first while loop in 	rain.py, overcoming indentation syntax, and trained their one-dial machine to reach 39.953 (target 40). It learned.

## Open Loops
- **Multiple Inputs (Solved):** Explored credit assignment across 2 inputs. Discovered that while both dials share the same single loss, each dial's nudge must scale with its own connected input lever (`nudge_i = x_i * loss * learning_rate`).
- **Scaling to N inputs:** How this mechanism applies to 1,000s of inputs simultaneously, and what happens when training across multiple different examples/data points (the dataset problem).

## Next
- Explore multi-sample training (datasets) and batching/generalization across varying input baskets.

## Session Notes (2026-08-20, end of day)
- User requested a full honest audit of "did I derive this myself?" across all past ML sessions. Verdict delivered with transcript evidence: insights were his (loop algorithm, why-not-divide wall, loss compass, generalization, learning rate, checkpoints/diminishing returns, stopping condition); the maze, two traps (negative-input gear, overshoot), names, analogies, and Python tools were the teacher's. Most scaffolded piece: `input × loss` as the direction cheat code. Settled framing: co-discovery — his reasoning, guided route. User's takeaway: the real artifact is the reusable structure (hit wall ? measure gap ? hypothesize ? test ? update), not gradient descent itself.
- Visual prefs reaffirmed: static pastel-box state images (ai/images/) over text grids; knobs/machine drawings over tables. Always serve via localhost link.
