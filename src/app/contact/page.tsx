import { Mail, MessageCircle, Globe } from "lucide-react";
import { 
  contactEmail, 
  mainSiteURL, 
  phoneNumber, 
  whatsappURL, 
  socials 
} from "@/config";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";


export const metadata = pageMetadata(
  "Contact",
  "/contact",
  "Get in touch with Faisal Safadi for freelance projects, technical consulting, or full-stack development.",
);

export default function Contact() {
  return (
    <main id="main">
      <section className="shell page-hero">
        <span className="eyebrow">CONTACT</span>
        <h1>
          Let&apos;s discuss
          <br />
          your project.
        </h1>
        <p>
          Whether you need a system built from scratch, a performance audit, or
          an extra pair of hands on a complex problem — here is how to reach me.
        </p>
      </section>

      <section className="shell content-shell">
        <div className="feature-grid">
          {/* Email */}
          <Link href={`mailto:${contactEmail}`} className="feature-card">
            <div className="feature-top">
              <span className="feature-icon">
                <Mail size={22} strokeWidth={1.65} />
              </span>
            </div>
            <span className="eyebrow small">EMAIL</span>
            <h3>{contactEmail}</h3>
            <p>Best for detailed project briefs and formal requests.</p>
          </Link>

          {/* WhatsApp */}
          <Link href={whatsappURL} target="_blank" rel="noopener noreferrer" className="feature-card">
            <div className="feature-top">
              <span className="feature-icon">
                <MessageCircle size={22} strokeWidth={1.65} />
              </span>
            </div>
            <span className="eyebrow small">WHATSAPP</span>
            <h3>{phoneNumber}</h3>
            <p>Quick questions and fast back-and-forth.</p>
          </Link>

          {/* Website */}
          <a href={mainSiteURL} target="_blank" rel="noopener" className="feature-card">
            <div className="feature-top">
              <span className="feature-icon">
                <Globe size={22} strokeWidth={1.65} />
              </span>
            </div>
            <span className="eyebrow small">PORTFOLIO B2C</span>
            <h3>faisalsafadi.com</h3>
            <p>My main portfolio for local businesses and custom web design.</p>
          </a>
        </div>

        <div style={{ marginTop: "4rem" }}>
          <span className="eyebrow">SOCIAL & CODE</span>
          <h2>Find me online.</h2>
          
          <div className="inline-links" style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-start" }}>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub ↗
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn ↗
            </a>
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}