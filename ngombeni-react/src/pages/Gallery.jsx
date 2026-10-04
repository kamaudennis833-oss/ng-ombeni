import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { usePageMeta } from "../lib/usePageMeta";
import { PageHero, Note } from "../components/ui";
import { photos } from "../data/photos";

const cats = ["All", ...new Set(photos.map((p) => p.cat))];

export default function Gallery() {
  usePageMeta("Gallery", "Photo gallery of Ng'ombeni Girls High School.");
  const [cat, setCat] = useState("All");
  const [idx, setIdx] = useState(null);
  const shown = photos.filter((p) => cat === "All" || p.cat === cat);
  const active = idx !== null ? shown[idx] : null;
  const step = (d) => setIdx((i) => (i + d + shown.length) % shown.length);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx, shown.length]);

  return (
    <>
      <PageHero label="Gallery" title="Moments from school life." />
      <section className="content-section gallery-section">
        <div className="chips" role="group" aria-label="Filter photos">
          {cats.map((c) => (
            <button key={c} className={`chip${c === cat ? " is-on" : ""}`} aria-pressed={c === cat} onClick={() => { setCat(c); setIdx(null); }}>{c}</button>
          ))}
        </div>
        <div className="gallery-grid">
          {shown.map((p, i) => (
            <button className="photo-tile gallery-tile" key={p.src} onClick={() => setIdx(i)} aria-label={`Open photo: ${p.label}`}>
              <img src={p.src} alt={p.alt} loading="lazy" width={912} height={912} />
              <span className="tile-label">{p.label}</span>
            </button>
          ))}
        </div>
        <Note>Sample photographs are illustrative. Add the school's own photos to src/assets/gallery (see README.txt there).</Note>
      </section>
      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.label} onClick={() => setIdx(null)}>
          <button className="lightbox-close" aria-label="Close photo" onClick={() => setIdx(null)} autoFocus><X size={22} /></button>
          {shown.length > 1 && <>
            <button className="lightbox-nav prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1); }}><ChevronLeft size={24} /></button>
            <button className="lightbox-nav next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1); }}><ChevronRight size={24} /></button>
          </>}
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            <figcaption>{active.label} · {idx + 1} / {shown.length}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
