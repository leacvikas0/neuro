"""
LESSON 1: Gradient descent, by hand, no ML libraries.

THE GOAL
--------
We have some noisy data points (x, y) that roughly follow a line.
We want to find the BEST line  y = m*x + b  through them.

Our "model" has 2 parameters: m (slope) and b (intercept).
"Training" = starting with random m, b and slowly improving them.

THE 5-STEP LOOP (this is ALL of machine learning, seriously)
------------------------------------------------------------
1. PREDICT:  y_hat = m * x + b
2. LOSS:     how wrong are we, on average? Mean Squared Error:
             L = (1/n) * sum( (y_hat - y)^2 )
3. GRADIENTS: calculus tells us the slope of the loss with respect
             to each parameter (worked out below):
             dL/dm = (2/n) * sum( (y_hat - y) * x )
             dL/db = (2/n) * sum( (y_hat - y) )
4. UPDATE:   step downhill, opposite to the gradient:
             m = m - learning_rate * dL/dm
             b = b - learning_rate * dL/db
5. REPEAT until the loss stops shrinking.

Run it:  python 01_gradient_descent.py
It saves a plot to  lesson1_result.png
"""

import random
import matplotlib
matplotlib.use("Agg")  # save plots to file instead of opening a window
import matplotlib.pyplot as plt

# ---------------------------------------------------------------------------
# STEP 0: Make some fake data.
# The TRUE hidden relationship is y = 3x + 7, plus random noise.
# Our model doesn't get to know this — it has to discover 3 and 7 by itself.
# ---------------------------------------------------------------------------
random.seed(42)  # same "random" data every run, so results are reproducible

TRUE_M = 3.0
TRUE_B = 7.0
xs = [i / 10 for i in range(0, 100)]                      # 0.0, 0.1, ... 9.9
ys = [TRUE_M * x + TRUE_B + random.uniform(-2, 2) for x in xs]

n = len(xs)

# ---------------------------------------------------------------------------
# STEP 1: Initialize parameters at random. (They will be WRONG. That's fine.)
# ---------------------------------------------------------------------------
m = random.uniform(-1, 1)
b = random.uniform(-1, 1)

learning_rate = 0.01   # how big a step we take downhill each iteration
epochs = 1000          # how many times we go through the loop

loss_history = []

# ---------------------------------------------------------------------------
# THE TRAINING LOOP
# ---------------------------------------------------------------------------
for epoch in range(epochs):
    # 1 & 2. PREDICT for every point, then compute the total error.
    #        We accumulate the loss and both gradients in one pass.
    total_loss = 0.0
    grad_m = 0.0
    grad_b = 0.0

    for x, y in zip(xs, ys):
        y_hat = m * x + b          # PREDICT
        error = y_hat - y          # how wrong this prediction is

        total_loss += error ** 2   # squared error (punishes big misses)
        grad_m += error * x        # pieces of the gradient formulas above
        grad_b += error

    loss = total_loss / n
    grad_m = (2 / n) * grad_m
    grad_b = (2 / n) * grad_b

    # 4. UPDATE: step opposite the gradient, scaled by learning_rate.
    m -= learning_rate * grad_m
    b -= learning_rate * grad_b

    loss_history.append(loss)

    if epoch % 100 == 0:
        print(f"epoch {epoch:4d} | loss {loss:8.4f} | m {m:6.3f} | b {b:6.3f}")

print(f"\nDone!  Learned: m = {m:.3f}, b = {b:.3f}   (truth: m = {TRUE_M}, b = {TRUE_B})")

# ---------------------------------------------------------------------------
# PLOT: left = the line we learned vs the data, right = loss going down.
# The loss curve is the signature of gradient descent working.
# ---------------------------------------------------------------------------
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(11, 4))

ax1.scatter(xs, ys, s=8, alpha=0.5, label="data")
ax1.plot(xs, [m * x + b for x in xs], color="red", linewidth=2,
         label=f"learned: y = {m:.2f}x + {b:.2f}")
ax1.plot(xs, [TRUE_M * x + TRUE_B for x in xs], color="green",
         linestyle="--", label=f"truth: y = {TRUE_M}x + {TRUE_B}")
ax1.legend()
ax1.set_title("The model we just trained")

ax2.plot(loss_history)
ax2.set_title("Loss going downhill (gradient descent working)")
ax2.set_xlabel("epoch")
ax2.set_ylabel("loss")

fig.tight_layout()
fig.savefig("lesson1_result.png", dpi=120)
print("Saved plot to lesson1_result.png")

# ---------------------------------------------------------------------------
# EXERCISES (do these! changing things and seeing what breaks is the lesson)
# ---------------------------------------------------------------------------
# 1. Set learning_rate = 0.5. What happens to the loss? Why?
# 2. Set learning_rate = 0.0001. What happens now? What's the tradeoff?
# 3. Set epochs = 50. Does it still get close to m=3, b=7?
# 4. Change TRUE_M / TRUE_B and re-run. Can it find any line?
# 5. HARD: remove the noise (random.uniform(-2,2) -> 0). Does the loss hit 0?
