import { usePageMeta } from "../lib/usePageMeta";
import { featured } from "../data/photos";
import { PageHero, SectionHeading, ComingSoon } from "../components/ui";
import science from "../assets/ngombeni-science.jpg";
import sports from "../assets/ngombeni-sports.jpg";
import library from "../assets/ngombeni-library.jpg";

export default function StudentLife() {
  usePageMeta("Student life", "Boarding, clubs, sports and student welfare at Ng'ombeni Girls High School in Chonyi, Kilifi County.");
  return (
    <>
      <PageHero label="Student life" title="Learning that moves beyond the classroom." image={featured.sports} imageAlt="Students celebrating together on the volleyball court">
        A girls-only boarding community where study, friendship, faith and responsibility grow side by side.
      </PageHero>

      <section className="content-section">
        <div className="photo-grid">
          <figure className="photo-tile photo-large" data-reveal><img src={science} alt="Students collaborating on a science experiment" loading="lazy" width={912} height={912} /><figcaption><span>Explore</span><strong>Practical learning</strong></figcaption></figure>
          <figure className="photo-tile" data-reveal><img src={sports} alt="Students celebrating together on the volleyball court" loading="lazy" width={912} height={912} /><figcaption><span>Compete</span><strong>Sport & teamwork</strong></figcaption></figure>
          <figure className="photo-tile" data-reveal><img src={library} alt="Students studying together in the library" loading="lazy" width={912} height={912} /><figcaption><span>Connect</span><strong>Study & friendship</strong></figcaption></figure>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading compact label="Our community" title="Boarding, activities and welfare.">
          Only activities the school confirms will be listed.
        </SectionHeading>
        <div className="strength-grid">
          <ComingSoon title="Boarding life">Dormitories, meals, study time, visiting days and welfare arrangements.</ComingSoon>
          <ComingSoon title="Clubs & societies" />
          <ComingSoon title="Sports & games" />
          <ComingSoon title="Guidance & counselling" />
        </div>
      </section>
    </>
  );
}
