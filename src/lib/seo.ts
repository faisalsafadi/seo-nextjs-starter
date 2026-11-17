import type { Metadata } from "next";
import {
  baseURL,
  description as defaultDescription,
  indexable,
  siteName,
  mainSiteURL, // <-- AJOUTÉ ICI
} from "@/config";

export function pageMetadata(
  title: string,
  path: string,
  description = defaultDescription,
): Metadata {
  const url = new URL(path, baseURL).href;
  const image = new URL(`/api/og?title=${encodeURIComponent(title)}`, baseURL)
    .href;
  return {
    title: { absolute: `${title} | ${siteName}` },
    description,
    alternates: { canonical: url },
    robots: { index: indexable, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, baseURL).href,
    })),
  };
}

export function caseStudySchema({
  title,
  description,
  path,
  date,
  technologies,
  parentName = "Work",       // <-- Valeur par défaut
  parentPath = "/work",      // <-- Valeur par défaut
}: {
  title: string;
  description: string;
  path: string;
  date: string;
  technologies: string[];
  parentName?: string;
  parentPath?: string;
}) {
  const url = new URL(path, baseURL).href;
  const personId = `${baseURL}/#person`;
  const workId = `${url}#creativework`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      // 1. L'Article (la page que Google lit)
      {
        "@type": "TechArticle",
        "@id": `${url}#article`,
        headline: title,
        description: description,
        datePublished: date,
        dateModified: date,
        author: { "@id": personId },
        publisher: { "@id": personId },
        mainEntityOfPage: { "@id": url },
        about: { "@id": workId },
      },
      // 2. Le CreativeWork (le projet décrit)
      {
        "@type": "CreativeWork",
        "@id": workId,
        name: title,
        description: description,
        dateCreated: date,
        keywords: technologies.join(", "),
        creator: { "@id": personId },
      },
      // 3. La Person (toi)
      {
        "@type": "Person",
        "@id": personId,
        name: "Faisal Safadi",
        url: baseURL,
        jobTitle: "Full-Stack Developer & Technical SEO",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Marrakech",
          addressCountry: "MA",
        },
        sameAs: [mainSiteURL],
      },
      // 4. Le fil d'Ariane (dynamique)
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: parentName, path: parentPath },
        { name: title, path: path },
      ]),
    ],
  };
}