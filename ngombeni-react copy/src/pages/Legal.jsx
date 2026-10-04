import { usePageMeta } from "../lib/usePageMeta";
import { PageHero, Note } from "../components/ui";
import { school } from "../data/school";

export function Privacy() {
  usePageMeta("Privacy notice", "How Ng'ombeni Girls High School's website handles personal information.");
  return (
    <>
      <PageHero label="Legal" title="Privacy notice" />
      <section className="content-section prose">
        <Note>Draft template: the school should review and approve this text, and align it with the Kenya Data Protection Act, 2019, before publication.</Note>
        <h2>What we collect</h2>
        <p>If you use the contact form, we receive the name, email address, phone number (optional) and message you provide. This website does not otherwise ask for personal information.</p>
        <h2>How we use it</h2>
        <p>We use your details only to respond to your enquiry. We do not sell or share them for marketing.</p>
        <h2>Learners' images and names</h2>
        <p>Photographs shown on this site are illustrative. Images or names of learners will be published only with appropriate consent from a parent or guardian.</p>
        <h2>Your rights</h2>
        <p>You may ask what information we hold about you and request its correction or deletion by emailing <a className="inline-link" href={`mailto:${school.email}`}>{school.email}</a>.</p>
      </section>
    </>
  );
}

export function Safeguarding() {
  usePageMeta("Child safeguarding", "Child safeguarding statement for Ng'ombeni Girls High School.");
  return (
    <>
      <PageHero label="Legal" title="Child safeguarding statement" />
      <section className="content-section prose">
        <Note>Draft template: the school must replace this with its approved safeguarding policy and name its designated safeguarding contact.</Note>
        <h2>Our commitment</h2>
        <p>Ng'ombeni Girls High School is committed to the safety, dignity and wellbeing of every learner, in line with Kenyan law and Ministry of Education guidance.</p>
        <h2>Concerns</h2>
        <p>If you have a concern about a learner's safety, contact the school immediately by phone on <a className="inline-link" href={school.phoneHref}>{school.phone}</a> or by email. Designated safeguarding contact: <strong>to be confirmed by the school.</strong></p>
      </section>
    </>
  );
}
