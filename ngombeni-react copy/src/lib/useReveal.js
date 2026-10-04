import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll-reveal + scroll progress + hero parallax. Re-runs on every route change.
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    els.forEach((el) => observer.observe(el));

    const heroImage = document.querySelector(".hero-visual img");
    const progress = document.querySelector(".scroll-progress");
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (progress) progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        if (heroImage) heroImage.style.transform = `translate3d(0, ${window.scrollY * 0.07}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);
}
