import { Link } from "react-router-dom";
import { usePageMeta } from "../lib/usePageMeta";
import { PageHero } from "../components/ui";

export default function NotFound() {
  usePageMeta("Page not found");
  return (
    <>
      <PageHero label="404" title="Page not found">The page you're looking for doesn't exist or has moved.</PageHero>
      <section className="content-section"><Link className="pill-link pill-gold" to="/">Go home</Link></section>
    </>
  );
}
