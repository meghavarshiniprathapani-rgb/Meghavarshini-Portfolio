# Satya Meghavarshini Prathapani — Portfolio

A Next.js 15 portfolio built from the supplied résumé and introduction video.

## Run

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then serve it with `npm start`.

## Sections

Hero, About, Skills, Work, Certifications, Experience, Achievements, and Contact. All displayed portfolio content is held in `src/lib/data.ts` and is sourced from the résumé.

## Assets

- `public/resume.pdf` is the résumé opened by each Résumé button.
- `public/hero/hero.mp4` is the supplied introduction video used in the hero.
- `scripts/build-hero-assets.py` documents a reusable FFmpeg pipeline for cropped MP4/WebM hero exports and still-image assets. It needs FFmpeg and NumPy installed locally. Supply crop coordinates after reviewing the source clip.

The build uses no third-party logo assets or image CDNs.
