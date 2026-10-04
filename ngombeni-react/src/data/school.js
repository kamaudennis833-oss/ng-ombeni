// Single source of truth for school facts. Only verified information goes here.
// Anything unconfirmed stays null / "Coming soon" until the school supplies it.
export const school = {
  name: "Ng'ombeni Girls High School",
  short: "Ng'ombeni Girls",
  email: "ngombenigirls@gmail.com",
  phone: "+254 713 075 496",
  phoneHref: "tel:+254713075496",
  location: "Chonyi Sub-County, Kilifi County, Kenya",
  knec: "4129212",
  uic: "4L8Z",
  category: "C3 Senior School",
  placementUrl: import.meta.env.VITE_PLACEMENT_URL || "https://www.education.go.ke",
};

export const nav = [
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/student-life", label: "Student life" },
  { to: "/news", label: "News" },
  { to: "/gallery", label: "Gallery" },
  { to: "/parents", label: "Parents" },
  { to: "/contact", label: "Contact" },
];

// Add objects here to show a site-wide announcement bar, e.g.
// { id: "g10-2027", text: "Grade 10 reporting information is now available.", to: "/parents" }
export const announcements = [];

// Add real posts here (newest first). Later, replace with a fetch() to your PHP API.
// { slug, title, date: "2026-10-04", image, excerpt, body }
export const news = [];

// Calendar rows: dates stay null until the school publishes them.
export const calendar = [
  { event: "Opening day", date: null, category: "Academic" },
  { event: "Parents' meeting", date: null, category: "Parents" },
  { event: "Sports day", date: null, category: "Sports" },
  { event: "Mid-term break", date: null, category: "Academic" },
  { event: "Closing day", date: null, category: "Academic" },
];

// Downloads: set `href` to a PDF in /public/downloads once approved by the school.
export const downloads = [
  { title: "Joining instructions", href: null },
  { title: "Fees structure", href: null },
  { title: "Uniform requirements", href: null },
  { title: "School prospectus", href: null },
  { title: "Academic calendar", href: null },
  { title: "Parent handbook", href: null },
];

export const leadership = [
  "Principal",
  "Deputy Principal",
  "Senior Teacher",
  "Board of Management",
  "Guidance & Counselling",
  "Chaplain / Patron",
];

export const faqs = [
  {
    question: "Is Ng'ombeni Girls a boarding school?",
    answer: "Yes. Public education directories consistently list Ng'ombeni Girls as a girls-only boarding county school in Chonyi Sub-County.",
  },
  {
    question: "How does Grade 10 placement work?",
    answer: "Placement follows Kenya's national Senior School transition process after Grade 9. Use official Ministry guidance and contact the school to confirm current joining requirements.",
  },
  {
    question: "Which Senior School pathways are available?",
    answer: "Kenya's national framework has STEM, Social Sciences, and Arts & Sports Science pathways. The exact tracks and subject combinations at Ng'ombeni must be confirmed with the school before selection.",
  },
  {
    question: "Where can families get fees and joining instructions?",
    answer: "Fees, term dates, uniforms, boarding requirements and joining instructions can change. Request the latest approved information directly from the school using the contact details on this site.",
  },
];
