import { canIndex, resolveSiteUrl } from "@/lib/site-url.mjs";

export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "Faisal Safadi";

export const title =
  process.env.NEXT_PUBLIC_TITLE || "Faisal Safadi — Développeur Web & SEO à Marrakech";

export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "Développeur web à Marrakech, spécialisé en frontend, Laravel et SEO technique. Créez des sites performants et visibles sur Google. Contactez-moi pour votre projet.";

export const baseURL = resolveSiteUrl(process.env);
export const indexable = canIndex(process.env);

// ─── CTA & liens externes ─────────────────────────────────────
export const mainSiteURL = "https://faisalsafadi.com";
export const contactEmail = "faisalsafadi@gmail.com";

/** Votre profil GitHub (ou LinkedIn, X…) */
// export const githubURL = "https://github.com/faisalsafadi";