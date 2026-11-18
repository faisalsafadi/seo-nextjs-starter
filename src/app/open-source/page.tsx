import { pageMetadata } from "@/lib/seo";
import { examples } from "#site/content";
import ExampleCard from "@/components/ExampleCard";
import JsonLd from "@/components/JsonLd";
import { baseURL, siteName } from "@/config";


export const metadata = pageMetadata(
  "Open Source Projects & Tools", // 30 chars + 16 = 46 ✅
  "/open-source",
  "Open-source tools, experimental projects and technical demos by Faisal Safadi — built with Next.js, Laravel and TypeScript." // 134 ✅
);

export default function Examples() {
  const sortedExamples = [...examples].sort((a, b) => a.order - b.order);

  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CollectionPage",
              "@id": `${baseURL}/open-source#page`,
              url: `${baseURL}/open-source`,
              name: "Open Source Projects & Tools",
              description:
                "Open-source tools, experimental projects and technical demos by Faisal Safadi.",
              isPartOf: { "@id": `${baseURL}/#website` },
              about: { "@id": `${baseURL}/#person` },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: sortedExamples.map((project, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  url: `${baseURL}/open-source/${project.slug}`,
                  name: project.title,
                })),
              },
            },
          ],
        }}
      />
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