# Civilia Developments — Website

## Project Overview

Marketing website for **Civilia Developments**, an Egyptian real estate developer.
Built with **Next.js** (App Router), **TypeScript**, **Tailwind CSS**, **next-intl** (i18n), GSAP, and Framer Motion.

## Architecture

```
src/
  app/[locale]/        # Route pages (home, about, news, projects, careers, contact)
  components/          # Feature-grouped UI components
  lib/
    api.ts             # CMS API calls (Wagtail)
    data.ts            # Static/local data
  i18n/                # next-intl config and navigation helpers
```

## Admin Dashboard Integration

The website content is managed through an **admin dashboard** backed by a **Wagtail CMS** REST API.

Base API URL is set via the `NEXT_PUBLIC_WAGTAIL_API_URL` environment variable (defaults to `http://127.0.0.1:8000/api/v2`).
All CMS fetch logic lives in [src/lib/api.ts](src/lib/api.ts).

### News — Done
News articles are fully wired to the admin dashboard.
- API page type: `home.CiviliaNewsPage`
- Fetching helpers: `fetchNewsItems()` and `fetchNewsItemBySlug()` in `src/lib/api.ts`
- News list page revalidates every 60 seconds; individual article pages use `no-store`.
- To add/edit/remove a news article, use the Wagtail admin — no code change needed.

### Projects — Planned
Projects are currently static (hardcoded components under `src/components/projects/`).
The next milestone is connecting projects to the admin dashboard so new projects can be created and managed without touching code.
- Will follow the same Wagtail API pattern used for news.
- A new `fetchProjects()` helper will be added to `src/lib/api.ts`.
- Project detail pages will become dynamic routes similar to `src/app/[locale]/news/[slug]/page.tsx`.

## Dev Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
```

## Environment Variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_WAGTAIL_API_URL` | Wagtail CMS base URL (e.g. `https://admin.civilia-developments.com/api/v2`) |
