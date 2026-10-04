import { Clock } from "lucide-react";

export const delay = (i, step = 80) => ({ "--reveal-delay": `${i * step}ms` });

export function PageHero({ label, title, children, image, imageAlt = "" }) {
  return (
    <section className="page-hero content-section" aria-labelledby="page-title">
      <p className="section-label rise">{label}</p>
      <h1 id="page-title" className="rise delay-one">{title}</h1>
      {children && <p className="hero-lede rise delay-two">{children}</p>}
      {image && (
        <div className="page-banner rise delay-three">
          <img src={image} alt={imageAlt} width={1200} height={600} fetchPriority="high" />
        </div>
      )}
    </section>
  );
}

export function SectionHeading({ label, title, children, compact }) {
  return (
    <div className={`section-heading${compact ? " compact-heading" : ""}`} data-reveal>
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

// Honest placeholder for information the school has not yet supplied.
export function ComingSoon({ title, children }) {
  return (
    <article className="glass-card coming-soon" data-reveal>
      <Clock size={20} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{children || "This information will be published once it is confirmed by the school."}</p>
      <span className="soon-tag">Coming soon</span>
    </article>
  );
}

export function Note({ children }) {
  return <p className="data-note">{children}</p>;
}
