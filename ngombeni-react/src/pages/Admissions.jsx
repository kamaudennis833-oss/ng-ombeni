import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { usePageMeta } from "../lib/usePageMeta";
import { featured } from "../data/photos";
import { PageHero, SectionHeading, ComingSoon, delay } from "../components/ui";
import { school, faqs } from "../data/school";

const steps = [
  ["Explore pathways", "Review the national pathway options and the learner's interests."],
  ["Check placement", "Use the official Ministry of Education placement service and the school's codes."],
  ["Confirm requirements", "Ask the school for approved fees, uniform details, term dates and joining instructions."],
  ["Report to school", "Follow the school's official joining instructions once placement is confirmed."],
];

export default function Admissions() {
  usePageMeta("Admissions", "Grade 10 admission guidance for Ng'ombeni Girls High School, Kilifi County, including placement, requirements and FAQs.");
  return (
    <>
      <PageHero label="Admissions" title="Begin the next chapter at Ng'ombeni." image={featured.library} imageAlt="Students studying together in the library">
        Grade 10 placement follows Kenya's national Senior School transition process. We direct families to the official service rather than duplicating it.
      </PageHero>

      <section className="content-section admissions-section">
        <div className="glass-panel admissions-panel" data-reveal>
          <div>
            <p className="section-label">Grade 10</p>
            <h2>Check your placement.</h2>
            <p>Use the official Ministry service with the school's codes: KNEC <strong>{school.knec}</strong> · UIC <strong>{school.uic}</strong>.</p>
            <div className="hero-actions">
              <a className="pill-link pill-gold" href={school.placementUrl} target="_blank" rel="noopener noreferrer">Check Grade 10 placement ↗</a>
              <Link className="pill-link pill-ghost" to="/contact">Ask the school <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="admission-steps">
            {steps.map(([t, d], i) => (
              <div data-reveal style={delay(i, 90)} key={t}><span>0{i + 1}</span><p><strong>{t}</strong>{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading compact label="Practical information" title="What families need to know." />
        <div className="strength-grid">
          <ComingSoon title="Joining instructions" />
          <ComingSoon title="Fees & payment">Official fees will be published only once approved and confirmed by the school.</ComingSoon>
          <ComingSoon title="Uniform & boarding requirements" />
          <ComingSoon title="Reporting date" />
        </div>
      </section>

      <section className="content-section faq-section" aria-labelledby="faq-heading">
        <div className="faq-intro" data-reveal>
          <p className="section-label">FAQs</p>
          <h2 id="faq-heading">Common questions, clearly answered.</h2>
          <p>Time-sensitive details are deliberately referred back to the school.</p>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }, i) => (
            <details data-reveal style={delay(i)} key={question}>
              <summary><HelpCircle size={18} aria-hidden="true" /><span>{question}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
