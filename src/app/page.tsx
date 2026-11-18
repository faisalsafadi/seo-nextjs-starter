import Link from "next/link";
import {
  Code,
  Zap,
  Wrench,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import JsonLd from "@/components/JsonLd";
import {
  baseURL,
  mainSiteURL,
  contactEmail,
  siteName,
  socials,
} from "@/config";

import Image from "next/image";

import { pageMetadata } from "@/lib/seo";
import { work, examples } from "#site/content"; // <-- Ajout de examples

export const metadata = pageMetadata(
  "Full-Stack Developer for B2B Systems",
  "/",
  "12+ years building and rescuing production web systems with Laravel, Next.js and technical SEO. Freelance, based in Marrakech, working worldwide."
);

// --- DONNÉES ---
const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Production-ready applications built with Laravel and Next.js. Type-safe, tested, and designed to scale.",
    href: "/contact",
  },
  {
    icon: Zap,
    title: "Performance & Technical SEO",
    description: "I fix slow sites and poor Core Web Vitals. Your site will be fast, visible, and built to rank.",
    href: "/contact",
  },
  {
    icon: Wrench,
    title: "Legacy System Rescue",
    description: "Refactoring tangled codebases and migrating outdated stacks without downtime.",
    href: "/contact",
  },
];

const featuredProjects = [...work]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 2); // On garde 2 projets Work pour laisser de la place

const featuredExamples = [...examples]
  .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.order - b.order)
  .slice(0, 2); // On ajoute 2 projets Open Source

const testimonials = [
  {
    quote: "Faisal rescued a legacy system that was costing us thousands in lost bookings. He delivered on time, under budget, and the system has been rock solid since.",
    author: "Operations Director",
    company: "Luxury Villa Rental Agency, Marrakech",
  },
  {
    quote: "Working with Faisal was a breath of fresh air. He understood the business requirements immediately and translated them into a fast, beautiful, and easy-to-manage website.",
    author: "Founder",
    company: "High-End Leather Goods Brand",
  },
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary by scope. A focused technical audit can take 1-2 weeks, while a full-stack application build typically ranges from 6 to 12 weeks. I provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with clients outside of Morocco?",
    answer: "Yes. I work remotely with clients worldwide. I am fluent in English, French, and Arabic, and I structure communication to fit your timezone and workflow.",
  },
  {
    question: "What does a 'technical SEO audit' include?",
    answer: "A technical SEO audit covers Core Web Vitals, crawlability, site architecture, structured data (Schema.org), and indexation issues. You receive a prioritized report with actionable fixes.",
  },
  {
    question: "How do you handle legacy code migrations?",
    answer: "I start with a thorough diagnostic phase to map dependencies and risks. Migrations are planned in incremental, low-risk stages with clear rollback points, ensuring your business continues to operate without interruption.",
  },
];

// --- COMPOSANT ---
export default function Home() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${baseURL}/#website`,
              url: baseURL,
              name: siteName,
              description: "Full-stack developer with 12+ years of experience.",
              publisher: { "@id": `${baseURL}/#person` },

            },
            {
              "@type": "Person",
              "@id": `${baseURL}/#person`,
              name: "Faisal Safadi",
              url: baseURL,
              jobTitle: "Full-Stack Developer & Technical SEO",
              sameAs: [mainSiteURL],
              email: contactEmail,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Marrakech",
                addressCountry: "MA",
              },
              knowsAbout: [
                "Next.js",
                "Laravel",
                "TypeScript",
                "Technical SEO",
                "Performance Optimization",
              ],
            },
            {
              "@type": "ProfessionalService",
              "@id": `${baseURL}/#service`,
              name: "Faisal Safadi — Full-Stack Development & SEO",
              url: baseURL,
              description:
                "Freelance full-stack development, legacy system rescue, and technical SEO consulting.",
              areaServed: "Worldwide",
              founder: { "@id": `${baseURL}/#person` },

              telephone: "+212 6 68 96 41 68", 
              priceRange: "$$$",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Marrakech",
                addressCountry: "MA"
              },
              image: `${baseURL}/api/og?title=Faisal%20Safadi%20%E2%80%94%20Full-Stack%20Development%20%26%20SEO`, // ou une URL d'image fix

              // ✨ ajout : lie les 3 services
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services",
                itemListElement: services.map((s) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: s.title,
                    description: s.description,
                    provider: { "@id": `${baseURL}/#person` },
                  },
                })),
              },
            },
            // ✨ LE GROS GAIN : FAQPage
            {
              "@type": "FAQPage",
              "@id": `${baseURL}/#faq`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ],
        }}
      />

      {/* 1. HERO */}
      <section className="shell hero">
        <div className="hero-copy">
          <Link className="release-label" href="/about">
            <span className="release-dot" /> Available for contract &amp; freelance work{" "}
            <span className="release-separator">/</span> Based in Marrakech
          </Link>
          <h1>
            I build and fix
            <br />
            web systems that
            <br />
            <span>can&apos;t afford to fail.</span>
          </h1>
          <p>
            Full-stack developer with 12+ years of experience. I work with Laravel,
            Next.js, and technical SEO to solve production problems — performance
            bottlenecks, migration debt, and systems that need to scale.
          </p>
          <div className="hero-buttons">
            <Link className="button button-blue" href="/contact">
              Discuss your project <ArrowRight size={16} />
            </Link>
            <Link className="button button-outline" href="/work">
              See my work
            </Link>
            <Link className="button button-outline button-open-source" href="/open-source">
              Explore my open source
            </Link>
          </div>


          <div className="hero-note">
            <span>Remote-first</span>
            <i /> English · Français · العربية
          </div>
        </div>
        <div className="hero-preview">
          <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[#0d1117] p-6 shadow-2xl font-mono text-sm">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 font-mono text-sm leading-relaxed">
              <p>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-yellow-300">developer</span> = {'{'}
              </p>

              <p className="pl-4">
                name: <span className="text-green-400">'Faisal Safadi'</span>,
              </p>
              <p className="pl-4">
                role: <span className="text-green-400">'Full-Stack Engineer'</span>,
              </p>
              <p className="pl-4">
                experience: <span className="text-blue-400">12</span>,{' '}
                <span className="text-gray-500">// years</span>
              </p>

              <p className="pl-4">
                stack: {'{'}
              </p>
              <p className="pl-8">
                core: [<span className="text-green-400">'Next.js'</span>,{' '}
                <span className="text-green-400">'TypeScript'</span>,{' '}
                <span className="text-green-400">'Laravel'</span>],
              </p>
              <p className="pl-8">
                data: [<span className="text-green-400">'PostgreSQL'</span>,{' '}
                <span className="text-green-400">'Redis'</span>],
              </p>
              <p className="pl-8">
                infra: [<span className="text-green-400">'Docker'</span>,{' '}
                <span className="text-green-400">'Vercel'</span>],
              </p>
              <p className="pl-8">
                expertise: [<span className="text-green-400">'SEO'</span>,{' '}
                <span className="text-green-400">'Performance'</span>],
              </p>
              <p className="pl-4">{'}'},</p>

              <p className="pl-4">
                availableForWork: <span className="text-orange-400">true</span>,
              </p>
              <p className="pl-4">
                problemSolver: <span className="text-orange-400">true</span>,
              </p>

              <p>{'}'};</p>
            </div>
          </div>
          <div className="preview-footnote mt-4">
            <span className="mini-mark">↗</span> Building robust systems since 2014.
          </div>
        </div>
      </section>

      {/* 2. BANDEAU DE PREUVE SOCIALE */}
      <div className="stack-strip">
        <div className="shell stack-inner">
          <span>PROVEN TRACK RECORD</span>
          <div>
            <strong>12+ Years Experience</strong>
            <strong>50+ Projects Delivered</strong>
            <strong>Available Worldwide</strong>
          </div>
        </div>
      </div>

      {/* 3. SERVICES  */}
      <section className="shell section" id="features">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HOW I CAN HELP</span>
            <h2>
              Engineering solutions
              <br />
              that scale.
            </h2>
          </div>
          <p>
            I don&apos;t just write code. I solve business problems
            <br />
            with maintainable, high-performance systems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              href={service.href}
              className="feature-card flex flex-col"
              key={service.title}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="feature-icon shrink-0">
                  <service.icon size={22} strokeWidth={1.65} />
                </span>
                <h3 className="text-xl font-semibold m-0 flex-1 leading-tight">
                  {service.title}
                </h3>
                <span className="text-sm font-mono text-[var(--text-muted)]">
                  0{i + 1}
                </span>
              </div>
              <p className="text-[var(--text-muted)] mb-6 flex-grow">
                {service.description}
              </p>
              <ArrowUpRight className="card-arrow mt-auto self-end" size={18} />
            </Link>
          ))}
        </div>
      </section>

      {/* 4. PROJETS SÉLECTIONNÉS (WORK) */}
      <section className="examples-section">
        <div className="shell section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SELECTED WORK</span>
              <h2>
                Recent projects.
                <br />
                Measurable results.
              </h2>
            </div>
            <Link className="text-link" href="/work">
              Explore all work <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                className="example-card group"
                href={`/work/${project.slug}`}
              >
                {project.coverImage && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl">
                    <Image
                      src={project.coverImage}
                      alt={`${project.title} — case study by Faisal Safadi`}
                      width={1200}
                      height={750}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="example-caption">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <ArrowUpRight size={22} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OPEN SOURCE */}
      <section className="shell section" style={{ paddingTop: "0" }}>
        <div className="section-heading">
          <div>
            <span className="eyebrow">OPEN SOURCE</span>
            <h2>
              Code &amp; tools.
              <br />
              Built for the community.
            </h2>
          </div>
          <Link className="text-link" href="/open-source">
            Explore all repos <ArrowRight size={17} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredExamples.map((project) => (
            <Link
              key={project.slug}
              className="feature-card group flex flex-col"
              href={`/open-source/${project.slug}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="eyebrow small text-xs">{project.category}</span>
                {project.githubURL && (
                  <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                    aria-label={`Voir le dépôt GitHub de ${project.title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-[var(--text-muted)] text-sm mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2 py-1 bg-[var(--bg)] border border-[var(--border)] rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. TÉMOIGNAGES */}
      <section className="shell section" id="testimonials">
        <div className="section-heading">
          <div>
            <span className="eyebrow">TESTIMONIALS</span>
            <h2>What clients say.</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <blockquote className="text-lg italic mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-[var(--text-muted)]">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PROCESSUS */}
      <section className="shell section quickstart">
        <div>
          <span className="eyebrow">HOW I WORK</span>
          <h2>
            From problem
            <br />
            to production.
          </h2>
          <Link className="text-link" href="/contact">
            Start a conversation <ArrowRight size={17} />
          </Link>
        </div>
        <ol className="steps">
          <li>
            <span>01</span>
            <div>
              <h3>Diagnose</h3>
              <p>
                I start by understanding the system, the constraints, and what &quot;fixed&quot; actually means for your business. No assumptions.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Build or Rescue</h3>
              <p>
                Clear scope, incremental delivery, and code your team can maintain after I leave. I document decisions, not just features.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Hand over</h3>
              <p>
                You get working software, a written summary of what changed and why, and a point of contact for the transition.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* 8. FAQ */}
      <section className="shell section" id="faq">
        <div className="section-heading">
          <div>
            <span className="eyebrow">COMMON QUESTIONS</span>
            <h2>Frequently asked questions.</h2>
          </div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-alt)]">
              <summary className="flex items-center justify-between cursor-pointer font-semibold">
                {faq.question}
                <CheckCircle2 size={18} className="text-[var(--text-muted)] group-open:text-[var(--text)] transition-colors" />
              </summary>
              <p className="mt-4 text-[var(--text-muted)]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 9. CTA  */}
      <section className="shell final-cta">
        <span className="eyebrow">READY TO START?</span>
        <h2>
          Let&apos;s build something
          <br />
          that works.
        </h2>
        <Link className="button button-blue" href="/contact">
          Get in touch <ArrowUpRight size={17} />
        </Link>
        <p>Available for freelance, consulting, and technical rescues.</p>
      </section>
    </main>
  );
}