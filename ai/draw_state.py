"""One frame of the machine, in Vikas's reference style.
Usage: python ai/draw_state.py --in 2 --w 9 --truth 10 --name step_01
Renders ai/images/<name>.png — one state, nothing more.
"""
import argparse, os
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, Circle, FancyArrowPatch

p = argparse.ArgumentParser()
p.add_argument('--in', dest='inp', type=float, default=2)
p.add_argument('--w', type=float, default=9)
p.add_argument('--truth', type=float, default=10)
p.add_argument('--name', type=str, default='state')
a = p.parse_args()

out = a.inp * a.w
err = a.truth - out

def fmt(x):
    s = f'{x:g}'
    return s

fig, ax = plt.subplots(figsize=(11, 4))
ax.set_xlim(0, 11); ax.set_ylim(0, 4); ax.axis('off')
fig.patch.set_facecolor('white')

BLUE_F, BLUE_E   = '#cfe2f3', '#4a80b4'
GREEN_F, GREEN_E = '#cde8cd', '#4e9a51'
PINK_F, PINK_E   = '#f4cccc', '#cc5555'
YEL_F, YEL_E     = '#fff2cc', '#c9a227'
ARROW = '#444444'

def box(cx, cy, w, h, label, value, fc, ec):
    ax.add_patch(FancyBboxPatch((cx - w/2, cy - h/2), w, h,
                 boxstyle='round,pad=0.03,rounding_size=0.15', fc=fc, ec=ec, lw=2.2))
    ax.text(cx, cy + 0.21, label, ha='center', va='center', fontsize=11, color='#222')
    ax.text(cx, cy - 0.2, value, ha='center', va='center', fontsize=17, color='#222', weight='bold')

def arrow(p1, p2):
    ax.add_patch(FancyArrowPatch(p1, p2, arrowstyle='-|>', mutation_scale=20,
                                 lw=2.2, color=ARROW, zorder=5))

# IN -> WEIGHT -> OUT
box(1.2, 2.7, 1.6, 1.15, 'Input:', fmt(a.inp), BLUE_F, BLUE_E)
ax.add_patch(Circle((4.35, 2.7), 1.02, fc=GREEN_F, ec=GREEN_E, lw=2.2))
ax.text(4.35, 2.91, 'Weight (w):', ha='center', va='center', fontsize=11, color='#222')
ax.text(4.35, 2.5, fmt(a.w), ha='center', va='center', fontsize=17, color='#222', weight='bold')
box(7.5, 2.7, 1.6, 1.15, 'Output:', fmt(out), PINK_F, PINK_E)
arrow((2.05, 2.7), (3.28, 2.7))
arrow((5.42, 2.7), (6.65, 2.7))

# OUT -> TRUTH -> ERROR
box(7.5, 0.75, 1.6, 1.05, 'Truth:', fmt(a.truth), YEL_F, YEL_E)
box(9.85, 0.75, 1.7, 1.05, 'Error:', f'{err:+g}', PINK_F, PINK_E)
arrow((7.5, 2.1), (7.5, 1.3))
arrow((8.32, 0.75), (8.98, 0.75))

path = os.path.join(os.path.dirname(__file__), 'images', f'{a.name}.png')
plt.savefig(path, bbox_inches='tight', facecolor='white', dpi=150)
print('saved:', path)
