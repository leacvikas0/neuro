import matplotlib.pyplot as plt
import numpy as np
import os

os.makedirs('ai/images', exist_ok=True)

fig, ax = plt.subplots(figsize=(10, 3.5))
ax.axis('off')

# Draw number line
ax.hlines(0, 0, 12, color='black', lw=2)
for i in range(0, 13, 2):
    ax.vlines(i, -0.1, 0.1, color='black', lw=2)
    ax.text(i, -0.3, str(i), ha='center', fontsize=12)

# Output position
ax.plot(6, 0, 'ro', markersize=15)
ax.text(6, 0.4, 'Output\n(x*w = 6)', color='red', ha='center', fontsize=12, fontweight='bold')

# Target position
ax.plot(10, 0, 'go', markersize=15)
ax.text(10, 0.4, 'Target\n(10)', color='green', ha='center', fontsize=12, fontweight='bold')

# The GAP (Loss)
ax.annotate('', xy=(9.8, 0.1), xytext=(6.2, 0.1),
            arrowprops=dict(facecolor='blue', shrink=0.0, width=2, headwidth=8))
ax.text(8, 0.2, 'Loss (+4)', color='blue', ha='center', fontsize=12, fontweight='bold')

# Machine state
ax.text(6, -0.8, 'The dial (w) is currently set to 3', ha='center', fontsize=14, fontstyle='italic')

plt.tight_layout()
plt.savefig('ai/images/dial_state_1.png', dpi=150, bbox_inches='tight')
print("Saved to ai/images/dial_state_1.png")
