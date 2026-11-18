---
title: "Next.js SEO Starter"
description: "A production-ready Next.js boilerplate with technical SEO, sitemaps, and dynamic Open Graph images built-in."
date: "2025-06-20"
category: "Frontend"
technologies: ["Next.js", "TypeScript", "Tailwind", "Velite"]
featured: true
order: 1
githubURL: "https://github.com/faisalsafadi/seo-nextjs-starter"
coverImage: "/images/open-source/starter-cover.png"
---

## The Context

Developers often struggle to implement robust technical SEO foundations without reinventing the wheel on every new project. This template solves that by providing a production-ready boilerplate that handles sitemaps, Open Graph images, and structured data out of the box. It is designed for developers who want to ship fast while maintaining high standards for search engine visibility and content management.

## Features

- **Dynamic Sitemaps:** Automatically generated based on your project structure and content.
- **Metadata API:** Centralized control over page titles, descriptions, and canonical URLs.
- **Open Graph Image Generation:** Dynamic generation of social media preview images via `/api/og`.
- **Fully Typed with TypeScript:** Ensures type safety across the entire application stack.
- **SEO First Architecture:** Includes JSON-LD structured data (Person, CreativeWork) and breadcrumbs automatically.

## What I Learned

Building this starter reinforced my ability to architect scalable metadata strategies using Next.js 16 App Router, ensuring that SEO optimizations are baked into the build process rather than added as an afterthought. I also gained practical experience integrating Velite for type-safe content management and optimizing build performance with Turbopack to maintain a blazing-fast user experience even with dynamic content loading.

## Technical Highlights & Architecture

- **Content as Data:** Leverages Velite to manage projects and case studies via simple Markdown files, decoupling content from code logic.
- **Blazing Fast Performance:** Built on Next.js 16 with Turbopack for significantly reduced build times during development and production builds.
- **Structured Data Injection:** Automatically injects JSON-LD schema (Person, CreativeWork) to enhance search engine understanding of the site's content.

## Results & Impact

The project serves as a utility tool for the developer community:
*   **Time Savings:** Eliminates repetitive setup tasks like sitemap generation and OG image configuration on new projects.
*   **SEO Ready:** Provides immediate SEO value with canonical URLs, structured data, and responsive meta tags out of the box.
*   **Open Source:** Fully open-source and available for developers to customize, extend, or use as a foundation for their own portfolios.

---

