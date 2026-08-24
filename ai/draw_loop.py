"""The learning loop — one clean map of the algorithm Vikas derived.
Style follows his reference: white bg, pastel rounded boxes, black text, simple arrows.
"""
import os
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, Circle, FancyArrowPatch

fig, ax = plt.subplots(figsize=(8.5, 8))
ax.set_xlim(0, 10)
ax.set_ylim(0, 10)
ax.axis('off')
fig.patch.set_facecolor('white')

GREEN_F, GREEN_E = '#cde8cd', '#4e9a51'
YELLOW_F, YELLOW_E = '#fff2cc', '#c9a227'
BLUE_F, BLUE_E = '#cfe2f3', '#4a80b4'
ARROW = '#555555'

# --- node A: the machine (green circle, like the weight in his diagram) ---
A = (5.0, 8.3)
ax.add_patch(Circle(A, 1.15, fc=GREEN_F, ec=GREEN_E, lw=2.5, zorder=3))
ax.text(A[0], A[1] + 0.28, 'out = in × w', ha='center', va='center', fontsize=12, color='#222')
ax.text(A[0], A[1] - 0.32, '2 × 9 = 18', ha='center', va='center', fontsize=15, color='#222', weight='bold')

# --- node B: the gap (yellow box) ---
B = (8.15, 4.9)
ax.add_patch(FancyBboxPatch((B[0] - 1.35, B[1] - 0.78), 2.7, 1.56,
                            boxstyle='round,pad=0.02,rounding_size=0.18',
                            fc=YELLOW_F, ec=YELLOW_E, lw=2.5, zorder=3))
ax.text(B[0], B[1] + 0.3, 'gap = truth − out', ha='center', va='center', fontsize=12, color='#222')
ax.text(B[0], B[1] - 0.3, '10 − 18 = −8', ha='center', va='center', fontsize=15, color='#222', weight='bold')

# --- node C: the nudge (blue box) ---
C = (5.0, 1.6)
ax.add_patch(FancyBboxPatch((C[0] - 1.7, C[1] - 0.78), 3.4, 1.56,
                            boxstyle='round,pad=0.02,rounding_size=0.18',
                            fc=BLUE_F, ec=BLUE_E, lw=2.5, zorder=3))
ax.text(C[0], C[1] + 0.3, 'new w = w + step × gap', ha='center', va='center', fontsize=12, color='#222')
ax.text(C[0], C[1] - 0.3, '9 + 0.1 × (−8) = 8.2', ha='center', va='center', fontsize=15, color='#222', weight='bold')

def arrow(p1, p2, rad=-0.28):
    ax.add_patch(FancyArrowPatch(p1, p2, connectionstyle=f'arc3,rad={rad}',
                                 arrowstyle='-|>', mutation_scale=24,
                                 lw=2.2, color=ARROW, zorder=2))

arrow((6.05, 7.8), (8.0, 5.85))    # machine -> gap
arrow((8.0, 3.95), (6.45, 2.2))    # gap -> nudge
arrow((3.45, 2.2), (4.15, 7.25))   # nudge -> machine

def badge(x, y, n):
    ax.add_patch(Circle((x, y), 0.26, fc='white', ec=ARROW, lw=1.8, zorder=4))
    ax.text(x, y, str(n), ha='center', va='center', fontsize=12, color='#333', weight='bold', zorder=5)

badge(7.42, 7.0, 1)   # compute out
badge(7.55, 2.85, 2)  # measure gap
badge(3.35, 4.9, 3)   # move the dial

ax.text(5.45, 5.05, 'again and again\nuntil gap ≈ 0', ha='center', va='center',
        fontsize=12, color='#777', style='italic')

out = os.path.join(os.path.dirname(__file__), 'images', 'the_loop.png')
plt.savefig(out, bbox_inches='tight', facecolor='white', dpi=150)
print('saved:', out)
