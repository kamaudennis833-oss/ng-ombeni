import { Link } from "react-router-dom";
import {
  ArrowRight, BookOpen, Building2, CheckCircle2, Compass, FlaskConical, GraduationCap,
  HeartHandshake, IdCard, MapPin, ShieldCheck, Sparkles, Trophy, Newspaper, CalendarDays, Download,
} from "lucide-react";
import { school } from "../data/school";
import { usePageMeta } from "../lib/usePageMeta";
import { SectionHeading, Note, delay } from "../components/ui";
import assembly from "../assets/ngombeni-assembly.jpg";
import library from "../assets/ngombeni-library.jpg";
import science from "../assets/ngombeni-science.jpg";
import sports from "../assets/ngombeni-sports.jpg";

const profile = [
  { icon: Building2, label: "School type", value: "Public county school" },
  { icon: GraduationCap, label: "Category", value: school.category },
  { icon: MapPin, label: "Location", value: "Chonyi, Kilifi County" },
  { icon: HeartHandshake, label: "Listed sponsor", value: "Anglican Church of Kenya" },
  { icon: IdCard, label: "KNEC code", value: school.knec },
  { icon: Compass, label: "UIC code", value: school.uic },
];
const strengths = [
  { icon: GraduationCap, title: "Girls-only learning", text: "A focused environment designed to help young women learn, lead and flourish." },
  { icon: ShieldCheck, title: "Boarding community", text: "A structured residential setting that supports study, friendship and responsibility." },
  { icon: HeartHandshake, title: "Faith & character", text: "Sponsored by the Anglican Church of Kenya, with service and character at its heart." },
  { icon: Sparkles, title: "Whole-person growth", text: "Academic learning is strengthened by sport, creativity, mentorship and community life." },
];
const pathways = [
  { icon: FlaskConical, title: "STEM", text: "Science, technology, engineering and mathematics for curious problem-solvers." },
  { icon: BookOpen, title: "Social Sciences", text: "Languages, humanities and business studies that deepen understanding of society." },
  { icon: Trophy, title: "Arts & Sports", text: "Creative and athletic pathways that develop expression, discipline and teamwork." },
];
const quick = [
  { icon: Newspaper, title: "News & events", text: "Announcements and school updates.", to: "/news" },
  { icon: CalendarDays, title: "School calendar", text: "Term dates and key events.", to: "/parents" },
  { icon: Download, title: "Downloads", text: "Forms, joining instructions, policies.", to: "/parents" },
];

export default function Home() {
  usePageMeta("", "Official website of Ng'ombeni Girls High School, a public girls' boarding Senior School in Chonyi, Kilifi County, Kenya.");
  return (
    <>
      <section className="hero-wrap" aria-labelledby="hero-title">
        <div className="glass-panel hero-panel">
          <div className="hero-copy">
            <p className="eyebrow rise"><span /> {school.category} · Public girls' boarding</p>
            <h1 id="hero-title" className="rise delay-one">Where girls grow<br /><em>bright and brave.</em></h1>
            <p className="hero-lede rise delay-two">
              In Chonyi, Kilifi County, Ng'ombeni Girls High School nurtures disciplined learners,
              confident leaders and young women ready to shape their world.
            </p>
            <div className="hero-actions rise delay-three">
              <Link className="pill-link pill-gold" to="/admissions">Explore admissions <ArrowRight size={16} /></Link>
              <Link className="pill-link pill-ghost" to="/about">Discover our school</Link>
            </div>
            <dl className="quick-facts rise delay-three">
              <div><dt>School</dt><dd>Public · County</dd></div>
              <div><dt>Community</dt><dd>Girls · Boarding</dd></div>
              <div><dt>Sponsor</dt><dd>ACK</dd></div>
            </dl>
          </div>
          <div className="hero-visual">
            <img src={assembly} alt="Students gathered at a bright morning assembly" width={1200} height={1408} fetchPriority="high" />
            <div className="image-caption"><span>Learn boldly</span><small>Lead with purpose</small></div>
          </div>
        </div>
      </section>

      <div className="values-ribbon" aria-label="School values">
        <div className="marquee-track">
          <span>Confidence · Scholarship · Service · Faith · Discipline · Leadership · Community · Curiosity ·</span>
          <span aria-hidden="true">Confidence · Scholarship · Service · Faith · Discipline · Leadership · Community · Curiosity ·</span>
        </div>
      </div>

      <section className="content-section profile-section">
        <SectionHeading label="School at a glance" title="Essential details for families and education partners.">
          Public education listings identify Ng'ombeni Girls as a girls-only boarding county school in Chonyi Sub-County.
        </SectionHeading>
        <div className="profile-grid">
          {profile.map(({ icon: Icon, label, value }, i) => (
            <div className="profile-item" data-reveal style={delay(i, 70)} key={label}>
              <Icon size={19} aria-hidden="true" />
              <span><small>{label}</small><strong>{value}</strong></span>
            </div>
          ))}
        </div>
        <p className="verification-note" data-reveal><CheckCircle2 size={16} aria-hidden="true" /> School category, boarding status, location and identifiers are cross-checked across public education listings.</p>
      </section>

      <section className="content-section">
        <SectionHeading label="Our school" title="A coastal school community with high expectations.">
          Girls-only and boarding, Ng'ombeni brings learning, friendship, faith and responsibility together.
        </SectionHeading>
        <div className="strength-grid">
          {strengths.map(({ icon: Icon, title, text }, i) => (
            <article className="glass-card" data-reveal style={delay(i, 90)} key={title}>
              <Icon size={22} aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section pathway-section">
        <SectionHeading compact label="Senior School pathways" title="Choices shaped around every learner's strengths.">
          Kenya's Competency-Based Education framework organises Senior School learning into three broad pathways.
        </SectionHeading>
        <div className="pathway-grid">
          {pathways.map(({ icon: Icon, title, text }, i) => (
            <article className="pathway-card" data-reveal style={delay(i, 120)} key={title}>
              <span className="pathway-number">0{i + 1}</span><Icon size={26} aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
        <Note>National pathway categories. Confirm the tracks and subject combinations offered by Ng'ombeni before selection. <Link className="inline-link" to="/academics">See Academics</Link></Note>
      </section>

      <section className="content-section">
        <SectionHeading compact label="Life at Ng'ombeni" title="Learning that moves beyond the classroom." />
        <div className="photo-grid">
          <figure className="photo-tile photo-large" data-reveal><img src={science} alt="Students collaborating on a science experiment" loading="lazy" width={912} height={912} /><figcaption><span>Explore</span><strong>Practical learning</strong></figcaption></figure>
          <figure className="photo-tile" data-reveal style={delay(1, 120)}><img src={sports} alt="Students celebrating together on the volleyball court" loading="lazy" width={912} height={912} /><figcaption><span>Compete</span><strong>Sport & teamwork</strong></figcaption></figure>
          <figure className="photo-tile" data-reveal style={delay(2, 120)}><img src={library} alt="Students studying together in the library" loading="lazy" width={912} height={912} /><figcaption><span>Connect</span><strong>Study & friendship</strong></figcaption></figure>
        </div>
      </section>

      <section className="content-section quick-section">
        <div className="quick-grid">
          {quick.map(({ icon: Icon, title, text, to }, i) => (
            <Link to={to} className="glass-card quick-card" data-reveal style={delay(i, 90)} key={title}>
              <Icon size={22} aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
              <span className="card-arrow"><ArrowRight size={16} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section admissions-section">
        <div className="glass-panel admissions-panel" data-reveal>
          <div>
            <p className="section-label">Admissions</p>
            <h2>Begin the next chapter at Ng'ombeni.</h2>
            <p>Grade 10 placement follows Kenya's national Senior School transition process. Use official placement guidance and contact the school for current joining instructions.</p>
            <div className="hero-actions">
              <Link className="pill-link pill-gold" to="/admissions">Admissions guide <ArrowRight size={16} /></Link>
              <a className="pill-link pill-ghost" href={school.placementUrl} target="_blank" rel="noopener noreferrer">Check placement ↗</a>
            </div>
          </div>
          <div className="admission-steps">
            {[["Explore pathways", "Review the national pathway options and the learner's interests."],
              ["Check placement", "Use current Ministry of Education guidance and the school's official codes."],
              ["Confirm requirements", "Ask the school for approved fees, uniform details, term dates and joining instructions."]].map(([t, d], i) => (
              <div data-reveal style={delay(i, 90)} key={t}><span>0{i + 1}</span><p><strong>{t}</strong>{d}</p></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
