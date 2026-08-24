"""Visual for introducing two inputs into the machine.
Renders ai/images/two_inputs_puzzle.png
"""
import os
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, Circle, FancyArrowPatch

fig, ax = plt.subplots(figsize=(11, 5.5))
ax.set_xlim(0, 12); ax.set_ylim(0, 6); ax.axis('off')
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
    ax.text(cx, cy - 0.18, value, ha='center', va='center', fontsize=17, color='#222', weight='bold')

def circle_dial(cx, cy, r, label, value, fc, ec):
    ax.add_patch(Circle((cx, cy), r, fc=fc, ec=ec, lw=2.2))
    ax.text(cx, cy + 0.22, label, ha='center', va='center', fontsize=11, color='#222')
    ax.text(cx, cy - 0.18, value, ha='center', va='center', fontsize=17, color='#222', weight='bold')

def arrow(p1, p2):
    ax.add_patch(FancyArrowPatch(p1, p2, arrowstyle='-|>', mutation_scale=20,
                                 lw=2.2, color=ARROW, zorder=5))

# Top Branch: Input 1 -> Dial 1
box(1.5, 4.3, 1.8, 1.15, 'Input 1 (x₁):', '2', BLUE_F, BLUE_E)
circle_dial(4.8, 4.3, 0.95, 'Dial 1 (w₁):', '3', GREEN_F, GREEN_E)
arrow((2.45, 4.3), (3.82, 4.3))

# Bottom Branch: Input 2 -> Dial 2
box(1.5, 1.7, 1.8, 1.15, 'Input 2 (x₂):', '4', BLUE_F, BLUE_E)
circle_dial(4.8, 1.7, 0.95, 'Dial 2 (w₂):', '5', GREEN_F, GREEN_E)
arrow((2.45, 1.7), (3.82, 1.7))

# Junction / Combiner
ax.add_patch(FancyBboxPatch((7.2 - 0.8, 3.0 - 1.0), 1.6, 2.0,
             boxstyle='round,pad=0.03,rounding_size=0.15', fc=PURPLE_F, ec=PURPLE_E, lw=2.2))
ax.text(7.2, 3.3, 'Combination', ha='center', va='center', fontsize=11, color='#222', weight='bold')
ax.text(7.2, 2.7, '?', ha='center', va='center', fontsize=28, color='#555', weight='bold')

# Arrows into junction
arrow((5.78, 4.3), (6.38, 3.5))
arrow((5.78, 1.7), (6.38, 2.5))

# Single Output
box(10.2, 3.0, 1.8, 1.15, 'Prediction:', '?', PINK_F, PINK_E)
arrow((8.03, 3.0), (9.28, 3.0))

path = os.path.join(os.path.dirname(__file__), 'images', 'two_inputs_puzzle.png')
plt.savefig(path, bbox_inches='tight', facecolor='white', dpi=150)
print('saved:', path)
