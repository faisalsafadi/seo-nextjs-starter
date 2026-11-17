import { defineConfig, defineCollection, s } from "velite";

const baseSchema = s.object({
  slug: s.path().transform((path) => path.split("/").pop()!), // ex: "work/portail-villas-luxe" → "portail-villas-luxe"
  title: s.string().max(99),
  description: s.string().max(200),
  date: s.isodate(),
  category: s.enum(["Full-Stack", "Frontend", "Backend", "SEO", "CMS", "CMS & eCommerce","Mobile & Full-Stack","CMS & Directory","CMS & E-Commerce Showcase","CMS & Web Design","Full-Stack Development","E-commerce Development","Web Development"]),
  technologies: s.array(s.string()).default([]),
  featured: s.boolean().default(false),
  order: s.number().default(0),
  coverImage: s.string().optional(),
  githubURL: s.string().url().optional(),
  liveURL: s.string().url().optional(),
  content: s.markdown(),
});

export default defineConfig({
  root: "src/content",
  output: { data: ".velite", assets: "public/static", base: "/static/", clean: true },
  collections: {
    work: defineCollection({ name: "Work", pattern: "work/**/*.md", schema: baseSchema }),
    examples: defineCollection({ name: "Example", pattern: "open-source/**/*.md", schema: baseSchema }),
  },
});