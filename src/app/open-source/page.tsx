import { pageMetadata } from "@/lib/seo";
import { examples } from "#site/content";
import ExampleCard from "@/components/ExampleCard";

export const metadata = pageMetadata(
  "Open Source",
  "/open-source",
  "Open-source tools, experimental projects, and technical demos by Faisal Safadi.",
);

export default function Examples() {
  const sortedExamples = [...examples].sort((a, b) => a.order - b.order);

  return (
    <main id="main">
      <section className="shell page-hero">
        <span className="eyebrow">OPEN SOURCE & EXPERIMENTS</span>
        <h1>
          Code, tools,
          <br />
          and technical demos.
        </h1>
        <p>
          A collection of side projects, open-source repositories, and code experiments.
          Most of these are available on my GitHub.
        </p>
      </section>

      <section className="shell" style={{ paddingTop: "2rem", paddingBottom: "5rem" }}>
        {sortedExamples.length === 0 ? (
          <p className="text-[var(--text-muted)] italic">No examples published yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {sortedExamples.map((project, index) => (
              <ExampleCard
                key={project.slug}
                title={project.title}
                description={project.description}
                slug={project.slug}
                category={project.category}
                technologies={project.technologies}
                index={index}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}