# Partap Printing Press — Standalone Site

A standalone, Vercel-ready React + Vite build of the Partap Printing Press marketing site.

## Local development

```bash
npm install
npm run dev
```

## Deploy to Vercel

### Option A — drag & drop
1. Run `npm install && npm run build` locally.
2. Go to vercel.com → New Project → Import the folder OR drop the `dist/` folder into Vercel for instant static hosting.

### Option B — Git
1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. On vercel.com → New Project → Import the repo.
3. Vercel will auto-detect Vite. The included `vercel.json` already sets the build command and output directory.
4. Click Deploy.

### Option C — Vercel CLI
```bash
npm install -g vercel
vercel
```

## Notes
- All 12 work-sample photos are bundled in `src/assets/samples/`.
- No backend, no environment variables required.
- Images are imported as ES modules so Vite handles hashing/optimization.
