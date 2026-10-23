// Generates sitemap.xml and robots.txt from SITE_URL before each build.
import { writeFileSync } from "node:fs";

const site = (process.env.SITE_URL || "https://ng-ombeni.vercel.app").replace(/\/$/, "");
const paths = ["", "about", "academics", "admissions", "student-life", "news", "gallery", "parents", "contact", "privacy", "safeguarding"];
const urls = paths.map((p) => `  <url>\n    <loc>${site}/${p}</loc>\n  </url>`).join("\n");
writeFileSync("public/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);
console.log(`SEO files generated for ${site}`);
