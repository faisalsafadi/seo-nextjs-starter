import { canIndex, resolveSiteUrl } from "@/lib/site-url.mjs";

export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME || "Faisal Safadi";

export const title =
  process.env.NEXT_PUBLIC_TITLE || "Faisal Safadi — Full-Stack Developer & Technical SEO";

export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "Full-stack developer with 12+ years of experience. I build and fix production web systems with Laravel, Next.js, and technical SEO.";

export const baseURL = resolveSiteUrl(process.env);
export const indexable = canIndex(process.env);

// ─── CTA & liens externes ─────────────────────────────────────
export const mainSiteURL = "https://faisalsafadi.com";
export const contactEmail = "faisalsafadi@gmail.com";


// ─── Contact & Réseaux ────────────────────────────────────────
export const phoneNumber = "+212 6 68 96 41 68";  
export const whatsappURL = "https://wa.me/212668964168";  

export const socials = {
  github: "https://github.com/faisalsafadi",  
  linkedin: "https://www.linkedin.com/in/faisal-safadi",  
  facebook: "https://www.facebook.com/faisalsafadi",  
};