import { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUp, Bell, Menu, X } from "lucide-react";
import { school, nav, announcements } from "../data/school";
import { useReveal } from "../lib/useReveal";

function Brand({ sub = "High School · Kilifi" }) {
  return (
    <Link className="school-brand" to="/" aria-label={`${school.name} home`}>
      <span className="brand-mark">N</span>
      <span><strong>{school.short}</strong><small>{sub}</small></span>
    </Link>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useReveal();
  useEffect(() => setOpen(false), [pathname]);

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const latest = announcements[0];

  return (
    <div className="school-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      {latest && (
        <div className="announce-bar" role="status">
          <Bell size={14} aria-hidden="true" />
          <span><strong>Latest:</strong> {latest.text}</span>
          {latest.to && <Link to={latest.to}>Read more <ArrowRight size={13} aria-hidden="true" /></Link>}
        </div>
      )}

      <header className="site-header">
        <Brand />
        <nav className="site-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          {nav.map((n) => <NavLink key={n.to} to={n.to}>{n.label}</NavLink>)}
        </nav>
        <a className="pill-link pill-gold header-cta" href={school.placementUrl} target="_blank" rel="noopener noreferrer">
          Check placement <ArrowRight size={15} aria-hidden="true" />
        </a>
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {open && (
        <nav id="mobile-nav" className="mobile-nav glass-panel" aria-label="Mobile navigation">
          <NavLink to="/" end>Home</NavLink>
          {nav.map((n) => <NavLink key={n.to} to={n.to}>{n.label}</NavLink>)}
          <a href={school.placementUrl} target="_blank" rel="noopener noreferrer">Check placement ↗</a>
        </nav>
      )}

      <main id="main"><Outlet /></main>

      <footer className="site-footer-wrap">
        <div className="footer-grid">
          <div>
            <Brand sub="High School" />
            <p className="footer-about">{school.category} · Public · Girls · Boarding<br />KNEC {school.knec} · UIC {school.uic}</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            {nav.slice(0, 3).map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
          </div>
          <div>
            <h4>Families</h4>
            <Link to="/news">News & events</Link>
            <Link to="/parents">Calendar & downloads</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Legal</h4>
            <Link to="/privacy">Privacy notice</Link>
            <Link to="/safeguarding">Child safeguarding</Link>
          </div>
        </div>
        <p className="source-note">Details cross-checked from public education listings; contacts are publicly listed. Photographs are illustrative.</p>
      </footer>
      {showTop && (
        <button className="to-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
