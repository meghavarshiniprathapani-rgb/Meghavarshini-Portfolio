"""Build hero video assets from an intro clip.

Requires: ffmpeg/ffprobe on PATH and numpy (pip install numpy).
Usage: python scripts/build-hero-assets.py input.mp4 --crop 800:1000:560:80
"""
from __future__ import annotations
import argparse
import subprocess
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('source', type=Path)
parser.add_argument('--crop', default='iw:ih:0:0', help='ffmpeg crop W:H:X:Y')
args = parser.parse_args()

out = Path('public/hero'); out.mkdir(parents=True, exist_ok=True)
# Source video varies by capture. Crop values are deliberately explicit so the subject can be centred after inspection.
vf = f'crop={args.crop},scale=768:-2:flags=lanczos,colorlevels=rimax=0.98:gimax=0.98:bimax=0.98'
base = ['ffmpeg', '-y', '-i', str(args.source), '-t', '10', '-vf', vf]
subprocess.run(base + ['-c:v', 'libx264', '-crf', '24', '-preset', 'slow', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', str(out / 'hero.mp4')], check=True)
subprocess.run(base + ['-c:v', 'libvpx-vp9', '-crf', '36', '-b:v', '0', '-c:a', 'libopus', '-b:a', '80k', str(out / 'hero.webm')], check=True)
subprocess.run(['ffmpeg', '-y', '-ss', '00:00:02', '-i', str(args.source), '-vf', f'{vf},crop=480:600', '-frames:v', '1', str(Path('public') / 'portrait-bust.webp')], check=True)
subprocess.run(['ffmpeg', '-y', '-ss', '00:00:02', '-i', str(args.source), '-vf', 'scale=1200:630:force_original_aspect_ratio=increase,crop=1200:630', '-frames:v', '1', str(Path('public') / 'og.jpg')], check=True)
