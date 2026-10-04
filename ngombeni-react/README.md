# Ng'ombeni Girls High School: React website

Plain React 18 + Vite + React Router. Multi-page, no server required.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs /dist (also generates sitemap.xml + robots.txt)

Copy `.env.example` to `.env` and set `SITE_URL` before building for production.

## Where to edit content
- `src/data/school.js`: facts, nav, announcements, news, calendar, downloads, FAQs.
  Anything unverified is `null` / "Coming soon". Fill it in only once the school confirms it.
- `src/pages/*`: one file per page.
- `src/styles/`: `base.css` (original design) and `pages.css` (new components).

## Hosting
- Apache / cPanel / PHP host: upload `dist/` contents. `.htaccess` is included for route fallback.
- Netlify: `_redirects` is included.

## Connecting your PHP/MySQL backend later
- Contact form: set `VITE_CONTACT_API` to a PHP endpoint accepting JSON
  `{name,email,phone,subject,message}`. Validate server-side and add spam protection there too.
- News / events / calendar / downloads: replace the arrays in `school.js` with `fetch()` calls
  to your API (e.g. `/api/news.php`). Keep PHP under `/api/` (the `.htaccess` skips it).
