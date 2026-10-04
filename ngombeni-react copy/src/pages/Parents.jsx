import { usePageMeta } from "../lib/usePageMeta";
import { featured } from "../data/photos";
import { PageHero, SectionHeading, ComingSoon, Note } from "../components/ui";
import { calendar, downloads, announcements } from "../data/school";
import { Download, FileText } from "lucide-react";

export default function Parents() {
  usePageMeta("Parents & guardians", "Calendar, downloads and information for parents and guardians of Ng'ombeni Girls High School.");
  return (
    <>
      <PageHero label="Parents & guardians" title="Everything families need, in one place." image={featured.assembly} imageAlt="Students gathered at a bright morning assembly">
        Term dates, downloads and announcements. Dates and documents appear once confirmed by the school.
      </PageHero>

      <section className="content-section">
        <SectionHeading compact label="School calendar" title="Key dates." />
        <div className="table-wrap" data-reveal>
          <table className="cal-table">
            <thead><tr><th scope="col">Event</th><th scope="col">Date</th><th scope="col">Category</th></tr></thead>
            <tbody>
              {calendar.map((r) => (
                <tr key={r.event}>
                  <td>{r.event}</td>
                  <td>{r.date ? new Date(r.date).toLocaleDateString("en-KE", { dateStyle: "long" }) : <span className="soon-tag">To be announced</span>}</td>
                  <td>{r.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>Confirm all dates with the school before travelling.</Note>
      </section>

      <section className="content-section">
        <SectionHeading compact label="Downloads" title="Forms and documents." />
        <div className="download-list">
          {downloads.map((d) => (
            <div className="download-row" data-reveal key={d.title}>
              <FileText size={20} aria-hidden="true" />
              <span>{d.title}</span>
              {d.href
                ? <a className="pill-link pill-gold" href={d.href} download><Download size={15} aria-hidden="true" /> PDF</a>
                : <span className="soon-tag">Coming soon</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading compact label="More" title="Parent information." />
        <div className="strength-grid three">
          <ComingSoon title="Visiting days & communication" />
          <ComingSoon title="Fees & payment" >Official fees are published only after confirmation by the school.</ComingSoon>
          <ComingSoon title="Student welfare & boarding" />
        </div>
        {announcements.length === 0 && <Note>There are no active announcements right now.</Note>}
      </section>
    </>
  );
}
