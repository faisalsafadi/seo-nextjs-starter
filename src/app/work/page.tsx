import Link from "next/link";
import { contactEmail } from "@/config";
import { pageMetadata } from "@/lib/seo";
import { work } from "#site/content";
import { ArrowRight } from "lucide-react";
import WorkCard from "@/components/WorkCard";

export const metadata = pageMetadata(
  "Work",
  "/work",
  "Selected case studies by Faisal Safadi — full-stack development, custom CMS, and technical SEO.",
);

export default function Work() {
  const sortedWork = [...work].sort((a, b) => a.order - b.order);

  return (
    <main id="main">
      <section className="shell page-hero">
        <span className="eyebrow">SELECTED WORK</span>
        <h1>
          Case studies.
          <br />
          Problem, approach, result.
        </h1>
        <p>
          A selection of recent projects where I handled the full technical
          scope — from architecture and database design to frontend delivery
          and SEO.
        </p>
      </section>

      {/* J'ai retiré le style paddingTop: 0 et ajusté l'espacement */}
      <section className="shell" style={{ paddingTop: "2rem", paddingBottom: "5rem" }}>
        {sortedWork.length === 0 ? (
          <p className="text-[var(--text-muted)] italic">No projects published yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {sortedWork.map((project, index) => (
              <WorkCard
                key={project.slug}
                title={project.title}
                description={project.description}
                slug={project.slug}
                category={project.category}
                technologies={project.technologies}
                coverImage={project.coverImage?.src}
                index={index}
              />
            ))}
          </div>
        )}
      </section>

      <section className="shell section final-cta" style={{ borderTop: "1px solid var(--border)" }}>
        <span className="eyebrow">NEXT STEPS</span>
        <h2>
          Need a similar
          <br />
          solution?
        </h2>
        <Link className="button button-blue" href="/contact">
          Contact me <ArrowRight size={17} />
        </Link>
        <p>Available for freelance, consulting, and technical rescues.</p>
      </section>
    </main>
  );
}