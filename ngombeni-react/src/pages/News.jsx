import { usePageMeta } from "../lib/usePageMeta";
import { PageHero } from "../components/ui";
import { news } from "../data/school";
import { Newspaper } from "lucide-react";

export default function News() {
  usePageMeta("News & events", "School news, announcements and events from Ng'ombeni Girls High School.");
  return (
    <>
      <PageHero label="News & events" title="What's happening at Ng'ombeni.">
        Announcements, reporting dates, parents' meetings and school events.
      </PageHero>
      <section className="content-section">
        {news.length === 0 ? (
          <div className="glass-card empty-state" data-reveal>
            <Newspaper size={26} aria-hidden="true" />
            <h3>No news published yet</h3>
            <p>Official announcements will appear here as soon as the school shares them.</p>
          </div>
        ) : (
          <div className="news-grid">
            {news.map((n) => (
              <article className="glass-card news-card" data-reveal key={n.slug}>
                {n.image && <img src={n.image} alt="" loading="lazy" />}
                <time dateTime={n.date}>{new Date(n.date).toLocaleDateString("en-KE", { dateStyle: "long" })}</time>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
