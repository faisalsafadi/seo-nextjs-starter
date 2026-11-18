import type { Metadata } from "next";
import {
  baseURL,
  description as defaultDescription,
  indexable,
  siteName,
  mainSiteURL,
} from "@/config";

const DESC_MAX = 158; // marge sous les 160 pour éviter la troncature en SERP

function clamp(text: string, max = DESC_MAX): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > max * 0.7 ? cut.slice(0, lastSpace) : cut) + "…";
}

type PageMetaOptions = {
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
  type?: "website" | "article" | "profile";
  locale?: string;
};

export function pageMetadata(
  title: string,
  path: string,
  description = defaultDescription,
  options: PageMetaOptions = {},
): Metadata {
  const {
    keywords,
    ogImage,
    noindex = false,
    type = "website",
    locale = "en_US",
  } = options;

  const url = new URL(path, baseURL).href;
  const image =
    ogImage ??
    new URL(`/api/og?title=${encodeURIComponent(title)}`, baseURL).href;

  const safeDescription = clamp(description);
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: { absolute: fullTitle },
    description: safeDescription,
    keywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: indexable, follow: true },
    openGraph: {
      title: fullTitle,          // ✅ aligné avec <title>
      description: safeDescription,
      url,
      siteName,
      type,
      locale,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: safeDescription,
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
  parentName = "Work",
  parentPath = "/work",
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
      {
        "@type": "TechArticle",
        "@id": `${url}#article`,
        headline: title,
        description,
        datePublished: date,
        dateModified: date,
        author: { "@id": personId },
        publisher: { "@id": personId },
        mainEntityOfPage: { "@id": url },
        about: { "@id": workId },
      },
      {
        "@type": "CreativeWork",
        "@id": workId,
        name: title,
        description,
        dateCreated: date,
        keywords: technologies.join(", "),
        creator: { "@id": personId },
      },
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
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: parentName, path: parentPath },
        { name: title, path },
      ]),
    ],
  };
}

export function openSourceSchema({
  title,
  description,
  path,
  date,
  technologies,
  githubURL,
  liveURL,
  license = "MIT",
}: {
  title: string;
  description: string;
  path: string;
  date: string;
  technologies: string[];
  githubURL?: string;
  liveURL?: string;
  license?: string;
}) {
  const url = new URL(path, baseURL).href;
  const personId = `${baseURL}/#person`;
  const softwareId = `${url}#software`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        "@id": softwareId,
        name: title,
        description,
        dateCreated: date,
        programmingLanguage: technologies,
        ...(githubURL && { codeRepository: githubURL }),
        ...(liveURL && { url: liveURL }),
        ...(githubURL && {
          license: `https://opensource.org/licenses/${license}`,
        }),
        author: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: "Faisal Safadi",
        url: baseURL,
        jobTitle: "Full-Stack Developer & Technical SEO",
        sameAs: [mainSiteURL],
      },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Open Source", path: "/open-source" },
        { name: title, path },
      ]),
    ],
  };
}