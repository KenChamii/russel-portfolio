# Russel Bayanado, portfolio

A fast, static portfolio built with [Astro](https://astro.build) and plain CSS. No UI framework, no runtime
dependencies in the browser: the only JavaScript is a few small scripts for the accordion, the Hire me slideshow,
the demo video buttons and the About dial.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in ./dist
npm run preview    # serve the production build locally
```

Requires Node 20 or newer.

## Where to edit content

All copy lives in `src/data/`. Components only render it, so you rarely need to touch markup.

| File | What it controls |
| --- | --- |
| `profile.ts` | Name, email, headline, intro, photo, resume link |
| `experience.ts` | Roles and bullets (fill in the `[START]` and `[END]` dates) |
| `projects.ts` | Sample projects, links and demo videos |
| `skills.ts` | Skill groups |
| `services.ts` | The Hire me slideshow |
| `education.ts` | Education |
| `about.ts` | Items on the About page dial |

The resume button stays hidden until `resumeUrl` in `profile.ts` points to a PDF. Put the file in `public/`
(for example `public/resume.pdf`) and set `resumeUrl: '/resume.pdf'`.

## Project structure

```
public/
  media/              photo, demo videos (MP4) and poster images
  favicon.svg
src/
  data/               all editable content (typed)
  layouts/Base.astro  <head>, fonts, meta tags
  components/         one component per home page section
    about/AboutViz.astro   the About page animations
  pages/
    index.astro       home page
    about.astro       About page
  scripts/dial.ts     About page dial logic
  styles/
    tokens.css        colours, fonts, spacing (theme lives here)
    base.css          reset and shared primitives
    home.css          home page sections
    about.css         About page
```

## Theme

The default theme is sand. Set `data-theme="light"` or `data-theme="dark"` on `<html>` in
`src/layouts/Base.astro` to switch. Colours are CSS variables in `src/styles/tokens.css`.

## Adding a demo video

1. Convert the screen recording to a small MP4 and grab a poster frame:

   ```bash
   ffmpeg -i demo.gif -movflags +faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" public/media/demo.mp4
   ffmpeg -i public/media/demo.mp4 -frames:v 1 public/media/demo.jpg
   ```

2. Add the entry in `src/data/projects.ts` with its width and height so the layout does not shift while loading.

## Deploy to Cloudflare

The site is static, so Cloudflare handles it with no server code.

```bash
npx wrangler login
npm run deploy
```

Or connect the Git repository in the Cloudflare dashboard with build command `npm run build` and output
directory `dist`. Set the real URL in `astro.config.mjs` (`site`).

## Performance notes

- Fonts are self-hosted through Fontsource, so there are no requests to Google Fonts.
- Videos are small MP4s with posters, lazy by `preload="metadata"`, and respect the visitor's pause button.
- All animation is CSS. `prefers-reduced-motion` turns entrance animations and the slideshow autoplay off.
- The hero photo ships as WebP with a JPEG fallback.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run check` | Type check Astro and TypeScript |
| `npm run format` | Format source files with Prettier |
| `npm run deploy` | Build and deploy with Wrangler |
