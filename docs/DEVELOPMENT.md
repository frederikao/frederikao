# Personal website development guide

A refined personal editorial website for Frederika Onofrejova, built with Next.js, TypeScript, semantic HTML, and a lightweight CSS/Intersection Observer motion system.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

- `app/` — pages, global styles, metadata, sitemap, and robots configuration
- `components/` — reusable header, footer, reveal, image placeholder, links, notes, and form components
- `lib/site-content.ts` — centralized copy, navigation, professional focus areas, locations, links, and notes
- `public/` — favicon and future production images

## Edit copy and links

Most recurring content lives in `lib/site-content.ts`. Update:

- biography and site positioning
- navigation
- professional focus areas
- location descriptions
- HFF topics
- notes
- public email
- HFF Instagram link
- canonical production URL

Longer page-specific copy currently lives near its layout in the relevant `app/*/page.tsx` file. Search for `TODO` and `Editorial TODO` before launch.

## Add final images

The current site deliberately uses the reusable `ImagePlaceholder` component. To replace a placeholder:

1. Add the optimized image to `public/images/`.
2. Replace the `ImagePlaceholder` call with Next.js `Image`.
3. Set `fill` or explicit `width`/`height` so the aspect ratio remains reserved.
4. Use `object-fit: cover` and adjust `object-position` for focal placement.
5. Add specific, descriptive alt text. Do not repeat nearby captions.

Recommended source sizes:

- Hero portrait, vertical 4:5 — 1600 × 2000px
- Editorial portraits, vertical 4:5 — 1400 × 1750px
- Standard landscape, 3:2 — 1800 × 1200px
- Wide feature, 16:9 — 1920 × 1080px
- Square editorial/Gaston — 1400 × 1400px
- Open Graph image — 1200 × 630px

Export photographs as high-quality AVIF or WebP where practical. Keep original files outside the production bundle.

## Add a note

For the initial build, notes are typed entries in `lib/site-content.ts`. Add a unique slug, category, title, description, verified date, reading time, and paragraphs. The notes index, article route, metadata, structured data, related notes, and sitemap update automatically.

If the note library becomes substantial, migrate the same fields to local MDX. A CMS is intentionally not included in this first build.

## Design tokens

Color, spacing, typography, shell width, borders, and animation easing are defined at the top of `app/globals.css`.

Key colors:

- `--warm-white: #FFFDFC`
- `--ivory: #FAF6F0`
- `--charcoal: #343330`
- `--stone: #B7ADA3`
- `--taupe: #897B70`
- `--slate: #7A858D`

Fonts are loaded through `next/font` in `app/layout.tsx`: Source Serif 4 and Manrope.

## Motion

Reveal timing and easing are controlled by:

- `--ease` in `app/globals.css`
- `.reveal` transition duration in `app/globals.css`
- the optional `delay` prop on `AnimatedReveal`

The site respects `prefers-reduced-motion`, removes stagger delays and transforms, and displays content immediately.

## Contact form

The form is an accessible visual preview and does **not** send messages yet. Before launch:

1. Choose a delivery service or server action.
2. Add server-side validation.
3. Add a honeypot and rate limiting or the provider’s spam protection.
4. Preserve accessible success and error states.
5. Remove the preview notice only after end-to-end delivery is verified.

## Deploy

The simplest deployment path is Vercel:

1. Import the GitHub repository.
2. Accept the detected Next.js defaults.
3. Add environment variables if a form provider is configured.
4. Set the custom domain.
5. Update `siteUrl` in `lib/site-content.ts`.
6. add a final 1200 × 630 social image and reference it in `app/layout.tsx`.

Any platform supporting a current Node.js runtime and Next.js can also run `npm run build` followed by `npm start`.

## Remaining launch TODOs

- Add verified education, career timeline, employers, roles, scope, and achievements.
- Add Frederika’s final biography and HFF origin story.
- Add final photographs and descriptive alt text.
- Add public email and HFF Instagram URL.
- Confirm the production domain and canonical URL.
- Add Open Graph image and final favicon variants.
- Connect and test contact-form delivery and spam protection.
- Add the downloadable résumé only after it is approved.
- Replace development note entries with final articles and real publication dates.
- Run a final content, accessibility, privacy, and performance review with production assets.
