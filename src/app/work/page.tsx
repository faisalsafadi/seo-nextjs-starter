import Link from "next/link";
import { contactEmail } from "@/config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Work",
  "/work",
  "Selected projects and case studies by Faisal Safadi — Laravel, Next.js, and technical SEO.",
);

export default function Work() {
  return (
    <main id="main">
      <section className="shell page-hero">
        <span className="eyebrow">SELECTED WORK</span>
        <h1>
          Case studies
          <br />
          in progress.
        </h1>
        <p>
          Detailed write-ups of recent projects — problem, approach, and
          outcome — are being prepared. In the meantime, get in touch to
          discuss specific projects or request private references.
        </p>
        <div className="hero-buttons">
          <a className="button button-blue" href="/contact">
            Request references ↗
          </a>
          <Link className="button button-outline" href="/about">
            About me →
          </Link>
        </div>
      </section>
    </main>
  );
}