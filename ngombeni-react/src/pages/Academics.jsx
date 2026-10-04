import { usePageMeta } from "../lib/usePageMeta";
import { featured } from "../data/photos";
import { PageHero, SectionHeading, ComingSoon, Note, delay } from "../components/ui";
import { FlaskConical, BookOpen, Trophy } from "lucide-react";

const pathways = [
  { icon: FlaskConical, title: "STEM", text: "Science, technology, engineering and mathematics pathways for learners who enjoy problem-solving, inquiry and building things." },
  { icon: BookOpen, title: "Social Sciences", text: "Languages, humanities and business studies that deepen understanding of people, society and communication." },
  { icon: Trophy, title: "Arts & Sports", text: "Creative and athletic pathways that develop expression, discipline, performance and teamwork." },
];

export default function Academics() {
  usePageMeta("Academics", "Senior School academics at Ng'ombeni Girls High School: Grades 10–12 and the national STEM, Social Sciences and Arts & Sports pathways.");
  return (
    <>
      <PageHero label="Academics" title="Choices shaped around every learner's strengths." image={featured.science} imageAlt="Students collaborating on a science experiment">
        Ng'ombeni is a C3 Senior School for Grades 10 to 12 under Kenya's Competency-Based Education framework.
      </PageHero>

      <section className="content-section pathway-section">
        <SectionHeading compact label="National pathways" title="Three broad pathways." />
        <div className="pathway-grid">
          {pathways.map(({ icon: Icon, title, text }, i) => (
            <article className="pathway-card" data-reveal style={delay(i, 120)} key={title}>
              <span className="pathway-number">0{i + 1}</span><Icon size={26} aria-hidden="true" /><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
        <Note>These are national pathway categories. Confirm the specific tracks and subject combinations currently offered by Ng'ombeni Girls before selection.</Note>
      </section>

      <section className="content-section">
        <SectionHeading compact label="At Ng'ombeni" title="Subjects, support and facilities." />
        <div className="strength-grid three">
          <ComingSoon title="Subjects & combinations">Approved subject combinations will be listed here once confirmed by the school.</ComingSoon>
          <ComingSoon title="Assessment & academic support" />
          <ComingSoon title="Library, ICT & laboratories" />
        </div>
      </section>
    </>
  );
}
