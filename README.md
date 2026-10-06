# Satya Meghavarshini Prathapani — Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Prerequisites

- Node.js 20 or later
- npm 10 or later

## Run locally

```bash
git clone https://github.com/<your-github-username>/<your-repository>.git
cd <your-repository>
npm install
copy .env.example .env.local
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). On macOS/Linux, use `cp .env.example .env.local` instead.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_FORMSPREE_ENDPOINT` | To enable the contact form | Your Formspree form endpoint, such as `https://formspree.io/f/xxxxabcd` |

Only variables beginning with `VITE_` are available to this client-side Vite app. Do not place private keys, passwords, or server-only secrets in them.

## Quality checks

```bash
npm run lint
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy to Vercel

Vercel automatically detects Vite. When importing the repository, confirm these settings:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

In Vercel, add `VITE_FORMSPREE_ENDPOINT` under **Project Settings → Environment Variables** for Production (and Preview if desired), then redeploy.

See the deployment and custom-domain instructions in the project handoff message or Vercel's documentation.
