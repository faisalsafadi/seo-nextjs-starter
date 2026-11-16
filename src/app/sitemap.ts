import type { MetadataRoute } from "next";
import { baseURL, indexable } from "@/config";
import { work, examples } from "#site/content";

export default function sitemap(): MetadataRoute.Sitemap {
  // Si le site n'est pas encore prêt à être indexé, on renvoie un sitemap vide
  if (!indexable) return [];

  // 1. Pages statiques
  const staticRoutes = [
    "/",
    "/about",
    "/work",
    "/examples",
    "/contact",
  ].map((path) => ({
    url: new URL(path, baseURL).href,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1.0 : 0.8,
  }));

  // 2. Projets dynamiques (Work)
  const workRoutes = work.map((project) => ({
    url: new URL(`/work/${project.slug}`, baseURL).href,
    lastModified: new Date(project.date).toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 3. Démos dynamiques (Examples)
  const exampleRoutes = examples.map((project) => ({
    url: new URL(`/examples/${project.slug}`, baseURL).href,
    lastModified: new Date(project.date).toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // On fusionne le tout
  return [...staticRoutes, ...workRoutes, ...exampleRoutes];
}