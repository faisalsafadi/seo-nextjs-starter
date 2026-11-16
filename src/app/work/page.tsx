import Link from "next/link";
import { contactEmail, mainSiteURL } from "@/config";
import { pageMetadata } from "@/lib/seo";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const metadata = pageMetadata(
  "Work",
  "/work",
  "Selected case studies by Faisal Safadi — full-stack development, custom CMS, and technical SEO.",
);

export default function Work() {
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

      <section className="shell content-shell prose" style={{ maxWidth: "800px" }}>
        
        {/* PROJET 1 */}
        <div style={{ marginBottom: "5rem" }}>
          <span className="eyebrow" style={{ color: "var(--text-muted)" }}>01 / TOURISM PORTAL</span>
          <h2>Luxury Villas Booking Platform</h2>
          
          <h3>The Context</h3>
          <p>
            A major luxury villa rental agency in Marrakech operating in a highly competitive international market. They needed a modern portal to showcase their portfolio and capture qualified leads without relying entirely on third-party platforms like Booking.com.
          </p>
          
          <h3>The Problem</h3>
          <p>
            The existing system was slow, difficult to update, and not optimized for international SEO. The booking flow suffered from performance bottlenecks during high season, causing a loss of direct reservations.
          </p>
          
          <h3>My Approach</h3>
          <p>
            I designed and developed a fully custom platform. I focused on a component-based frontend architecture to ensure lightning-fast page loads and a seamless user experience. On the backend, I built a secure RESTful API to handle inventory and booking logic, while implementing a multilingual structure to capture an international audience.
          </p>
          
          <p><strong>Stack:</strong> Custom REST API, Next.js (Frontend), Multilingual SEO architecture.</p>
          
          <h3>The Result</h3>
          <p>
            A highly responsive portal that allows the client to manage their luxury portfolio independently, significantly improving direct lead generation and providing a premium digital experience that matches the brand's physical offering.
          </p>
        </div>

        {/* PROJET 2 */}
        <div style={{ marginBottom: "5rem" }}>
          <span className="eyebrow" style={{ color: "var(--text-muted)" }}>02 / CUSTOM CMS</span>
          <h2>Private Villa Showcase</h2>
          
          <h3>The Context</h3>
          <p>
            A high-end private villa in Marrakech looking to establish a strong digital presence to attract high-net-worth individuals.
          </p>
          
          <h3>The Problem</h3>
          <p>
            The website needed to do more than just inform; it had to seduce and transport the visitor. The owner also needed the ability to update photos and text easily without touching code.
          </p>
          
          <h3>My Approach</h3>
          <p>
            I developed a completely custom WordPress theme tailored to the villa's identity. I optimized the UX/UI with a clean, elegant palette and implemented strict on-page SEO best practices (semantic HTML, optimized image delivery, and clean URL structures).
          </p>
          
          <p><strong>Stack:</strong> WordPress (Custom Theme), HTML5, CSS3, JavaScript, Technical SEO.</p>
          
          <h3>The Result</h3>
          <p>
            An immersive, easy-to-navigate showcase site with a solid SEO foundation. The client now manages their own content, and the site ranks effectively for targeted local queries.
          </p>
        </div>

        {/* PROJET 3 */}
        <div style={{ marginBottom: "3rem" }}>
          <span className="eyebrow" style={{ color: "var(--text-muted)" }}>03 / E-COMMERCE CATALOG</span>
          <h2>Premium Leather Brand</h2>
          
          <h3>The Context</h3>
          <p>
            A high-end leather goods brand needing a digital showcase for their collections. They did not want to sell directly online but needed to generate leads and showcase their craftsmanship.
          </p>
          
          <h3>The Problem</h3>
          <p>
            Translating a prestigious physical catalog into an immersive digital experience while keeping the backend manageable for a non-technical team. High-resolution imagery also posed a risk to page speed.
          </p>
          
          <h3>My Approach</h3>
          <p>
            Using WordPress, I structured the catalog using Custom Post Types (CPTs) to separate collections, products, and lookbooks. I implemented heavy image optimization and lazy loading to maintain fast Core Web Vitals despite the high-quality visuals.
          </p>
          
          <p><strong>Stack:</strong> WordPress (Custom Post Types), Performance Optimization, SEO Catalog Architecture.</p>
          
          <h3>The Result</h3>
          <p>
            A structured, fast-loading catalog that the team can update effortlessly. The SEO architecture ensures that specific product queries (e.g., "luxury leather bag [brand]") route directly to the relevant collection pages.
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem", marginTop: "3rem" }}>
          <h2>Need something similar?</h2>
          <p>I am available for contract work and technical consulting.</p>
          <div className="hero-buttons" style={{ marginTop: "1.5rem" }}>
            <Link className="button button-blue" href="/contact">
              Contact me <ArrowRight size={16} />
            </Link>
            <a className="button button-outline" href={mainSiteURL} target="_blank" rel="noopener noreferrer">
              Visit B2C Portfolio <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}