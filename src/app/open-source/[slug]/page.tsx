import Link from "next/link";
import { notFound } from "next/navigation";
import { examples } from "#site/content";
//import { pageMetadata } from "@/lib/seo";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { pageMetadata, breadcrumbs, caseStudySchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export async function generateStaticParams() {
    return examples.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = examples.find((p) => p.slug === slug);

    if (!project) return pageMetadata("Not Found", "/open-source", "Project not found");

    return pageMetadata(
        project.title,
        `/open-source/${project.slug}`,
        project.description
    );
}

export default async function ExampleDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = examples.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <main id="main">
            <JsonLd
                data={caseStudySchema({
                    title: project.title,
                    description: project.description,
                    path: `/open-source/${project.slug}`,
                    date: project.date,
                    technologies: project.technologies,
                    parentName: "Open Source",
                    parentPath: "/open-source",
                })}
            />
            <section className="shell page-hero" style={{ paddingBottom: "2rem" }}>
                <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: "2rem" }}>
                    <Link href="/open-source" className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
                        <ArrowLeft size={14} /> Back to Open Source
                    </Link>
                </nav>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <span className="eyebrow">{project.category}</span>
                        <h1 style={{ marginTop: "1rem" }}>{project.title}</h1>
                        <p style={{ marginTop: "1rem" }}>{project.description}</p>
                    </div>

                    <div className="flex flex-col gap-3 min-w-[200px]">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="text-xs font-mono px-2 py-1 bg-[var(--bg-alt)] border border-[var(--border)] rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {project.githubURL && (
                            <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="button button-blue text-sm flex items-center justify-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                                View on GitHub
                            </a>
                        )}
                        {project.liveURL && (
                            <a href={project.liveURL} target="_blank" rel="noopener noreferrer" className="button button-outline text-sm flex items-center justify-center gap-2">
                                Live Demo <ArrowUpRight size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </section>
            {project.coverImage && (
                <section className="shell" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                    <div className="relative w-full aspect-[3/1] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)]">
                        <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </section>
            )}
            <section className="shell content-shell">
                <article
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: project.content }}
                />
            </section>

            <section className="shell section final-cta" style={{ borderTop: "1px solid var(--border)" }}>
                <h2>Found a bug or want to contribute?</h2>
                <Link className="button button-outline" href="/contact">
                    Get in touch <ArrowUpRight size={17} />
                </Link>
            </section>
        </main>
    );
}