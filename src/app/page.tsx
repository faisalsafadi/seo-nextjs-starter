import Link from "next/link";

import {
  Code,
  Zap,
  Wrench,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import SeoStudio from "@/components/SeoStudio";
import JsonLd from "@/components/JsonLd";
import {
  baseURL,
  mainSiteURL,
  contactEmail,
  siteName,
  title,
} from "@/config";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(title, "/");


const features = [
  {
    icon: Code,
    title: "Full-Stack Development",
    text: "Production-ready applications built with Laravel and Next.js. Type-safe, tested, and designed to scale.",
    label: "ENGINEERING",
    href: "/contact",
  },
  {
    icon: Zap,
    title: "Performance & Tech SEO",
    text: "Core Web Vitals optimization, architecture audits, and technical SEO to ensure your site is fast and visible.",
    label: "OPTIMIZATION",
    href: "/contact",
  },
  {
    icon: Wrench,
    title: "Legacy System Rescue",
    text: "Refactoring tangled codebases, migrating outdated stacks, and fixing production bottlenecks without breaking what works.",
    label: "MAINTENANCE",
    href: "/contact",
  },
];
export default function Home() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteName,
          url: baseURL,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Faisal Safadi",
          url: baseURL,
          jobTitle: "Web Developer & SEO",
          sameAs: [mainSiteURL],
          email: contactEmail,
        }}
      />
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
            <Link className="button button-blue" href="/work">
              See my work <ArrowRight size={16} />
            </Link>
            <a className="button button-outline" href="/contact">
              Contact me <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-note">
            <span>Remote-first</span>
            <i /> English · Français · العربية
          </div>
        </div>
        <div className="hero-preview">
          <SeoStudio />
          <div className="preview-footnote">
            <span className="mini-mark">↗</span> What you build deserves to be
            found.
          </div>
        </div>
      </section>
      <div className="stack-strip">
        <div className="shell stack-inner">
          <span>SMALL STACK. SOLID FOUNDATIONS.</span>
          <div>
            <strong>◒ Next.js 16</strong>
            <strong>⚛ React 19</strong>
            <strong>
              <b className="ts-mark">TS</b> TypeScript
            </strong>
            <strong>≈ Tailwind CSS</strong>
          </div>
        </div>
      </div>
      <section className="shell section" id="features">
        <div className="section-heading">
          <div>
            <span className="eyebrow">HOW I CAN HELP</span>
            Engineering solutions
            <br />
            that scale.
          </div>
          <p>
            I don't just write code. I solve business problems
            <br />
            with maintainable, high-performance systems.
          </p>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, ...feature }, i) => (
            <Link
              href={feature.href}
              className="feature-card"
              key={feature.title}
            >
              <div className="feature-top">
                <span className="feature-icon">
                  <Icon size={22} strokeWidth={1.65} />
                </span>
                <span>0{i + 1}</span>
              </div>
              <span className="eyebrow small">{feature.label}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
              <ArrowUpRight className="card-arrow" size={18} />
            </Link>
          ))}
        </div>
      </section>
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
          <div className="example-grid">
            <Link className="example-card" href="/work">
              <div className="journal-cover" style={{ background: "#e8e4d9", color: "#2d2a26" }}>
                <div>
                  TOURISM PORTAL <span>01 / B2B</span>
                </div>
                <strong>
                  Luxury Villas
                  <br />
                  <em>Marrakech.</em>
                </strong>
                <span className="cover-orbit" aria-hidden="true">
                  ✳
                </span>
              </div>
              <div className="example-caption">
                <div>
                  <h3>Tourism Portal</h3>
                  <p>Custom API · Multilingual · Booking Flow</p>
                </div>
                <ArrowUpRight size={22} />
              </div>
            </Link>
            <Link className="example-card" href="/work">
              <div className="product-cover" style={{ background: "#e3e8f0", color: "#1e293b" }}>
                <span className="product-cover-label">E-COMMERCE / WORDPRESS</span>
                <strong>
                  Leather Catalog
                  <br />
                  Showcase.
                </strong>
              </div>
              <div className="example-caption">
                <div>
                  <h3>Leather Brand</h3>
                  <p>Custom Post Types · High-Res Performance</p>
                </div>
                <ArrowUpRight size={22} />
              </div>
            </Link>
          </div>
        </div>
      </section>
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
          I start by understanding the system, the constraints, and what "fixed" actually means for your business. No assumptions.
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

      <section className="shell final-cta">
        <span className="eyebrow">YOUR IDEA IS NEXT</span>
        <h2>
          Build something
          <br />
          worth finding.
        </h2>
        <a className="button button-blue" href="/contact">
          Let's work together <ArrowUpRight size={17} />
        </a>
        <p>Available for freelance, consulting, and interesting projects.</p>
      </section>
    </main>
  );
}
