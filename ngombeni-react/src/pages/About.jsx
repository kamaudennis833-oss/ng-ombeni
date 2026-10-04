import { usePageMeta } from "../lib/usePageMeta";
import { featured } from "../data/photos";
import { PageHero, SectionHeading, ComingSoon, delay } from "../components/ui";
import { school, leadership } from "../data/school";
import { Building2, GraduationCap, MapPin, HeartHandshake, IdCard, Compass, UserRound } from "lucide-react";

const facts = [
  [Building2, "School type", "Public county school"],
  [GraduationCap, "Category", `${school.category} (Grades 10–12)`],
  [GraduationCap, "Learners", "Girls-only boarding"],
  [MapPin, "Location", "Chonyi Sub-County, Kilifi County"],
  [HeartHandshake, "Listed sponsor", "Anglican Church of Kenya"],
  [IdCard, "KNEC code", school.knec],
  [Compass, "UIC code", school.uic],
];

export default function About() {
  usePageMeta("About", "About Ng'ombeni Girls High School: a public girls' boarding C3 Senior School in Chonyi, Kilifi County.");
  return (
    <>
      <PageHero label="About" title="A coastal school community with high expectations." image={featured.assembly} imageAlt="Students gathered at a bright morning assembly">
        Ng'ombeni Girls is a public county school in Chonyi Sub-County where learning, friendship, faith and responsibility come together.
      </PageHero>

      <section className="content-section">
        <SectionHeading compact label="School profile" title="Verified school details." />
        <div className="profile-grid">
          {facts.map(([Icon, label, value], i) => (
            <div className="profile-item" data-reveal style={delay(i, 60)} key={label}>
              <Icon size={19} aria-hidden="true" /><span><small>{label}</small><strong>{value}</strong></span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <SectionHeading compact label="Who we are" title="History, vision and values.">
          We publish only what the school has confirmed. These sections will be completed with approved wording.
        </SectionHeading>
        <div className="strength-grid three">
          <ComingSoon title="School history" />
          <ComingSoon title="Vision & mission" />
          <ComingSoon title="Core values & motto" />
        </div>
      </section>

      <section className="content-section">
        <SectionHeading compact label="Leadership" title="The people who lead our school.">
          Names and photographs will be added only after they are verified by the school.
        </SectionHeading>
        <div className="leader-grid">
          {leadership.map((role, i) => (
            <article className="glass-card leader-card" data-reveal style={delay(i, 70)} key={role}>
              <span className="avatar" aria-hidden="true"><UserRound size={26} /></span>
              <h3>{role}</h3>
              <p>Name to be confirmed</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
