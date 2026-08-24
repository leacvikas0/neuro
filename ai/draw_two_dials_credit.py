"""Visual showing the credit assignment dilemma: one loss, two dials.
Renders ai/images/two_dials_credit.png
"""
import os
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, Circle, FancyArrowPatch

fig, ax = plt.subplots(figsize=(12, 6))
ax.set_xlim(0, 13); ax.set_ylim(0, 6.5); ax.axis('off')
fig.patch.set_facecolor('white')

BLUE_F, BLUE_E   = '#cfe2f3', '#4a80b4'
GREEN_F, GREEN_E = '#cde8cd', '#4e9a51'
PINK_F, PINK_E   = '#f4cccc', '#cc5555'
YEL_F, YEL_E     = '#fff2cc', '#c9a227'
PURPLE_F, PURPLE_E = '#e1d5e7', '#9673a6'
ARROW = '#444444'

def box(cx, cy, w, h, label, value, fc, ec):
    ax.add_patch(FancyBboxPatch((cx - w/2, cy - h/2), w, h,
                 boxstyle='round,pad=0.03,rounding_size=0.15', fc=fc, ec=ec, lw=2.2))
    ax.text(cx, cy + 0.22, label, ha='center', va='center', fontsize=11, color='#222')
    ax.text(cx, cy - 0.18, value, ha='center', va='center', fontsize=16, color='#222', weight='bold')

def circle_dial(cx, cy, r, label, value, fc, ec):
    ax.add_patch(Circle((cx, cy), r, fc=fc, ec=ec, lw=2.2))
    ax.text(cx, cy + 0.22, label, ha='center', va='center', fontsize=11, color='#222')
    ax.text(cx, cy - 0.18, value, ha='center', va='center', fontsize=16, color='#222', weight='bold')

def arrow(p1, p2, style='-|>', color=ARROW, lw=2.2):
    ax.add_patch(FancyArrowPatch(p1, p2, arrowstyle=style, mutation_scale=20,
                                 lw=lw, color=color, zorder=5))

# Top Branch
box(1.4, 4.8, 1.8, 1.1, 'Input 1 (x₁):', '2', BLUE_F, BLUE_E)
circle_dial(4.6, 4.8, 0.9, 'Dial 1 (w₁):', '3', GREEN_F, GREEN_E)
arrow((2.35, 4.8), (3.68, 4.8))

# Bottom Branch
box(1.4, 1.8, 1.8, 1.1, 'Input 2 (x₂):', '4', BLUE_F, BLUE_E)
circle_dial(4.6, 1.8, 0.9, 'Dial 2 (w₂):', '5', GREEN_F, GREEN_E)
arrow((2.35, 1.8), (3.68, 1.8))

# Addition Junction (+)
ax.add_patch(Circle((7.0, 3.3), 0.65, fc=PURPLE_F, ec=PURPLE_E, lw=2.2))
ax.text(7.0, 3.3, '+', ha='center', va='center', fontsize=26, color='#444', weight='bold')
ax.text(5.9, 4.5, '2×3 = 6', fontsize=11, color='#555', style='italic')
ax.text(5.9, 2.1, '4×5 = 20', fontsize=11, color='#555', style='italic')

arrow((5.52, 4.8), (6.45, 3.75))
arrow((5.52, 1.8), (6.45, 2.85))

# Output
box(9.5, 3.3, 1.8, 1.1, 'Output:', '26', PINK_F, PINK_E)
arrow((7.68, 3.3), (8.58, 3.3))

# Truth & Loss
box(9.5, 0.9, 1.8, 1.0, 'Truth:', '30', YEL_F, YEL_E)
box(11.9, 0.9, 1.6, 1.0, 'Loss:', '+4', PINK_F, PINK_E)
arrow((9.5, 2.7), (9.5, 1.45))
arrow((10.43, 0.9), (11.08, 0.9))

# The dilemma feedback paths
arrow((11.9, 1.45), (5.5, 5.0), style='->', color='#cc5555', lw=1.8)
arrow((11.9, 1.45), (5.5, 1.6), style='->', color='#cc5555', lw=1.8)

ax.text(8.8, 5.4, 'How much nudge?', color='#cc5555', fontsize=12, weight='bold')
ax.text(8.8, 1.2, 'How much nudge?', color='#cc5555', fontsize=12, weight='bold')

path = os.path.join(os.path.dirname(__file__), 'images', 'two_dials_credit.png')
plt.savefig(path, bbox_inches='tight', facecolor='white', dpi=150)
print('saved:', path)
