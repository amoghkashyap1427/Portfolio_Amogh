# Stage 9 Completion Report

**Project:** Portfolio_Amogh  
**Audit date:** 2026-10-08  
**Status:** Ready for Vercel deployment; no build blocker found.

## SEO, metadata, and favicon

- The document has an English language declaration, viewport and charset metadata, a descriptive title, meta description, author, and keywords.
- Open Graph and Twitter title/description metadata and the canonical portfolio URL (`https://amoghkashyap.vercel.app`) are present.
- The HTML referenced `/og-image.png` for both social image tags, but no such file exists in `public/`. Those two stale references were removed so social crawlers are not pointed at the SPA fallback. Social previews therefore have no image until a verified image asset is supplied.
- `/favicon.svg` exists and was served by the production preview with HTTP 200 (`image/svg+xml`).

## Resume and internal links

- `public/Amogh_Kashyap_Resume.pdf` exists (10,770 bytes). Its SHA-256 matches both `public/Amogh_Kashyap_SDE_Intern_Resume.pdf` and the built `dist/Amogh_Kashyap_Resume.pdf`: `D875E1A3A640178D7AF7B4B641587E3ABCFDA8725EA623A13D6757735BB35E6E`.
- Both Hero and Navbar resume CTAs point to `/Amogh_Kashyap_Resume.pdf` and retain the download filename.
- Production preview checks returned HTTP 200 for `/`, `/Amogh_Kashyap_Resume.pdf`, and `/favicon.svg`. The resume was served as `application/pdf`.
- Section navigation targets are present in the rendered application source: About, Skills, Experience, Projects, Education, Certifications, Achievements, and Contact. Resume and navigation targets are local paths/section IDs; no fabricated routes were found.

## External links

All 35 distinct external URLs used in the portfolio source were probed with HTTP HEAD requests. 32 returned HTTP 200. Three returned HTTP 403 to the automated probe:

- `https://linkedin.com/in/amoghkashyap17`
- `https://leetcode.com/u/amogh__kashyap`
- `https://codeforces.com/profile/amogh17`

A 403 from an automated request does not establish that the pages are unavailable to normal visitors. The EKADANTA live URL returned HTTP 200 and was retained as verified.

## Accessibility review

- The page declares `lang="en"`; the app has a main landmark, labeled navigation, headings, button names, and labels for the hero and icon-only profile links.
- The mobile menu uses dialog semantics and exposes its expanded state. A source review did not confirm keyboard focus trapping/restoration in that dialog.
- Some repeated compact project icon links use generic accessible names (“GitHub” and “Live Demo”) instead of names that identify the project. A visible skip link is not present, although the main landmark has the `main-content` ID.
- This was a source-level review; no automated WCAG scan or assistive-technology session was performed.

## Build and deployment readiness

- `npm run build` succeeded after the metadata correction with Vite 8.3.3; 1,937 modules transformed and production assets emitted to `dist/`.
- `npm run lint` completed with four warnings and no errors: render-time `Date` use in `Footer.jsx`, unused `index` in `Experience.jsx`, unused `isFeatured` in `Projects.jsx`, and a missing `options` dependency in `useScrollSpy.js`.
- No browser runtime console session was captured. The production build emitted no errors.
- The repository has `package-lock.json`, `npm run build`, and Vite’s default `dist` output. No `import.meta.env`, `process.env`, or `VITE_` references were found in `src/`; no portfolio-specific deployment environment variables were identified.
- Vercel can use the project root with the detected Vite framework, build command `npm run build`, and output directory `dist`. No `vercel.json` is required for this single-page Vite app.

## Changes made

Only the two social image metadata entries pointing to the absent `/og-image.png` asset were removed from `index.html`. Verified portfolio content, resume PDFs, and completed sections were not changed.

## Remaining deployment action

Deploy the project from its root in Vercel and confirm the resulting production domain. The external 403 responses and accessibility/runtime-console items above are audit limitations or follow-up quality checks, not build failures.
