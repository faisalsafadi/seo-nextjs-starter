import Link from "next/link";
//import { mainSiteURL, contactEmail } from "@/config";
import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { baseURL, mainSiteURL, contactEmail } from "@/config";


export const metadata = pageMetadata(
  "About",
  "/about",
  "About Faisal Safadi — web developer specialized in Next.js, Laravel, and technical SEO.",
);

export default function About() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
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
        }}
      />
      <section className="shell page-hero">
        <span className="eyebrow">ABOUT</span>
        <h1>
          Building fast,
          <br />
          visible websites.
        </h1>
        <p>
          I&apos;m Faisal Safadi, a web developer based in Marrakech, Morocco.
          I build modern, performant websites with Next.js, Laravel, and a
          strong focus on technical SEO.
        </p>
      </section>
      <article className="shell content-shell prose">
        <h2>What I do.</h2>
        <p>
          I design and develop websites that are fast, accessible, and built
          to be found. From frontend architecture to backend integrations, I
          take care of the whole stack — and make sure search engines
          understand what they crawl.
        </p>
        <h2>How I work.</h2>
        <p>
          Clear scope, clean code, and measurable results. I work with
          founders, agencies, and small teams who care about quality and
          long-term maintainability.
        </p>
        <h2>Let&apos;s talk.</h2>
        <p>
          Have a project in mind? Send me an email and let&apos;s figure out
          how I can help.
        </p>
        <div className="inline-links">
          <a href="/contact">Contact me ↗</a>
          <a href={mainSiteURL} target="_blank" rel="noopener noreferrer">
            Visit faisalsafadi.com ↗
          </a>
          <Link href="/open-source">Explore open source →</Link>
        </div>
      </article>
    </main>
  );
}