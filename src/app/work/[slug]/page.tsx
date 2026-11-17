import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { work } from "#site/content";
//import { pageMetadata } from "@/lib/seo";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
 
import { pageMetadata, breadcrumbs, caseStudySchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";


// Génère les paramètres statiques pour chaque projet
export async function generateStaticParams() {
  return work.map((project) => ({ slug: project.slug }));
}

// Génère les métadonnées SEO dynamiquement
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = work.find((p) => p.slug === slug);

  if (!project) {
    return pageMetadata("Not Found", "/work", "Project not found");
  }

  return pageMetadata(
    project.title,
    `/work/${project.slug}`,
    project.description
  );
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = work.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="main">
      <JsonLd
        data={caseStudySchema({
          title: project.title,
          description: project.description,
          path: `/work/${project.slug}`,
          date: project.date,
          technologies: project.technologies,
        })}
      />


      <section className="shell page-hero" style={{ paddingBottom: "2rem" }}>
        <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: "2rem" }}>
          <Link href="/work" className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
            <ArrowLeft size={14} /> Back to Work
          </Link>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="eyebrow">{project.category}</span>
            <h1 style={{ marginTop: "1rem" }}>{project.title}</h1>
            <p style={{ marginTop: "1rem" }}>{project.description}</p>
          </div>

          <div className="flex flex-col gap-3 min-w-[200px]">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="text-xs font-mono px-2 py-1 bg-[var(--bg-alt)] border border-[var(--border)] rounded">
                  {tech}
                </span>
              ))}
            </div>
            {project.liveURL && (
              <a href={project.liveURL} target="_blank" rel="noopener noreferrer" className="button button-outline text-sm flex items-center justify-center gap-2 mt-2">
                View Live <ArrowUpRight size={16} />
              </a>
            )}
            {project.githubURL && (
              <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="button button-outline text-sm flex items-center justify-center gap-2">
                View Source <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>
      </section>

      {project.coverImage && (
        <section className="shell" style={{ marginTop: "2rem", marginBottom: "3rem" }}>
          <div className="relative w-full aspect-[3/1] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)]">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </section>
      )}


      <section className="shell content-shell">
        {/* Le contenu Markdown est injecté ici avec la classe 'prose' pour le style */}
        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </section>

      <section className="shell section final-cta" style={{ borderTop: "1px solid var(--border)" }}>
        <h2>Interested in working together?</h2>
        <Link className="button button-blue" href="/contact">
          Let's talk <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}