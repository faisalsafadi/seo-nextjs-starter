"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type WorkCardProps = {
  title: string;
  description: string;
  slug: string;
  category: string;
  technologies: string[];
  index: number;
};

export default function WorkCard({ title, description, slug, category, technologies, index }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/work/${slug}`} className="group block">
        <div className="feature-card h-full transition-all duration-300 group-hover:border-[var(--text-muted)] group-hover:shadow-lg">
          <div className="feature-top">
            <span className="eyebrow small">{category}</span>
            <ArrowUpRight className="card-arrow transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={18} />
          </div>
          <h3 className="text-2xl font-semibold mt-4 mb-2">{title}</h3>
          <p className="text-[var(--text-muted)] line-clamp-3 mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech) => (
              <span key={tech} className="text-xs font-mono px-2 py-1 bg-[var(--bg-alt)] border border-[var(--border)] rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}