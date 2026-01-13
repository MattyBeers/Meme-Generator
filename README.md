# Meme Generator

Polished Meme Generator built with React + Vite.

This repository contains a small React app that fetches meme templates from the Imgflip API and provides a clean UI to preview, select, and download memes for portfolio presentation.

## Features

- Responsive (desktop-focused) card grid with uniformly-sized thumbnails
- Click a card to preview and add top/bottom overlay text
- Download currently previewed image
- Polished header, typography, and button micro-interactions

## Quick Start

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Screenshot

Add a `screenshot.png` to the repository root to show a demo screenshot in this README. Example file path: `./screenshot.png`.

![screenshot](screenshot.png)

## Deploy to Render (Static Site)

1. Push your repo to GitHub.
2. In Render: New -> Static Site -> Connect GitHub -> select the repo.
3. Set Build Command: `npm run build`
4. Set Publish Directory: `dist`
5. Create the site — Render will build on first deploy and on future pushes.

## Git commands (local)

```bash
git init
git add .
git commit -m "chore: polish UI, add grid, preview and download"
git branch -M main
git remote add origin git@github.com:USERNAME/REPO.git # replace with your remote
git push -u origin main
```

## Notes

- The app fetches memes from `https://api.imgflip.com/get_memes` at runtime.
- If you want me to add the actual screenshot image now, upload the image here and I'll save it as `screenshot.png` and amend the commit.

---

If you'd like, I can:
- add the screenshot you uploaded to the repo and amend the local commit,
- push to your remote if you provide the repo URL, or
- add a GitHub Actions workflow for automatic builds.
