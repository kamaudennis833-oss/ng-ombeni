import { useEffect } from "react";

const BASE = "Ng'ombeni Girls High School";

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Kilifi County, Kenya`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
      document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
    }
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + window.location.pathname;
  }, [title, description]);
}
