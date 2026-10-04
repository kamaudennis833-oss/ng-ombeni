import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { usePageMeta } from "../lib/usePageMeta";
import { PageHero, Note } from "../components/ui";
import { school } from "../data/school";

const API = import.meta.env.VITE_CONTACT_API;
const empty = { name: "", email: "", phone: "", subject: "", message: "", website: "" }; // `website` = honeypot

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Please enter a valid email address.";
  if (f.subject.trim().length < 3) e.subject = "Please add a subject.";
  if (f.message.trim().length < 10) e.message = "Please write at least a short message.";
  return e;
}

export default function Contact() {
  usePageMeta("Contact", "Contact Ng'ombeni Girls High School in Chonyi, Kilifi County: phone, email and directions.");
  const [f, setF] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function onSubmit(ev) {
    ev.preventDefault();
    if (f.website) return; // bot
    const errs = validate(f);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    if (!API) {
      // No backend configured yet: open the visitor's email app, pre-filled.
      const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name}\nEmail: ${f.email}\nPhone: ${f.phone || "-"}`);
      window.location.href = `mailto:${school.email}?subject=${encodeURIComponent(f.subject)}&body=${body}`;
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: f.name, email: f.email, phone: f.phone, subject: f.subject, message: f.message }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      setF(empty);
    } catch {
      setStatus("error");
    }
  }

  const field = (k, label, type = "text", req = true) => (
    <div className="field">
      <label htmlFor={k}>{label}{req && <span aria-hidden="true"> *</span>}</label>
      <input id={k} name={k} type={type} value={f[k]} onChange={set(k)} required={req}
        aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} autoComplete={k === "name" ? "name" : k === "email" ? "email" : k === "phone" ? "tel" : "off"} />
      {errors[k] && <small id={`${k}-err`} className="field-err">{errors[k]}</small>}
    </div>
  );

  return (
    <>
      <PageHero label="Contact" title="In the heart of Chonyi, Kilifi County.">
        For the latest admissions, fees, term dates or leadership information, please confirm details directly with the school.
      </PageHero>

      <section className="content-section contact-section">
        <div>
          <div className="contact-list">
            <a href={`mailto:${school.email}`} data-reveal><Mail size={20} /><span><small>Email</small>{school.email}</span></a>
            <a href={school.phoneHref} data-reveal><Phone size={20} /><span><small>Publicly listed phone</small>{school.phone}</span></a>
            <a href="https://www.google.com/maps/search/?api=1&query=Ng%27ombeni+Girls+High+School+Chonyi+Kilifi" target="_blank" rel="noopener noreferrer" data-reveal>
              <MapPin size={20} /><span><small>Location · open in Maps</small>{school.location}</span>
            </a>
          </div>
          <Note>A verified street address, office hours and an embedded map will be added once confirmed by the school.</Note>
        </div>

        <form className="glass-panel contact-form" onSubmit={onSubmit} noValidate data-reveal>
          <h2>Send us a message</h2>
          {field("name", "Full name")}
          {field("email", "Email", "email")}
          {field("phone", "Phone", "tel", false)}
          {field("subject", "Subject")}
          <div className="field">
            <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
            <textarea id="message" rows={5} value={f.message} onChange={set("message")} required aria-invalid={!!errors.message} />
            {errors.message && <small className="field-err">{errors.message}</small>}
          </div>
          <div className="hp" aria-hidden="true">
            <label htmlFor="website">Leave this field empty</label>
            <input id="website" tabIndex={-1} autoComplete="off" value={f.website} onChange={set("website")} />
          </div>
          <button className="pill-link pill-gold" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : <>Send message <Send size={15} aria-hidden="true" /></>}
          </button>
          <p role="status" className="form-status">
            {status === "sent" && "Thank you. Your message has been sent."}
            {status === "error" && "Sorry, that did not send. Please email or call the school instead."}
          </p>
        </form>
      </section>
    </>
  );
}
