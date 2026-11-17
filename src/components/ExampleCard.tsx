"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, FolderGit2 } from "lucide-react";

type ExampleCardProps = {
  title: string;
  description: string;
  slug: string;
  category: string;
  technologies: string[];
  index: number;
};

export default function ExampleCard({ title, description, slug, category, technologies, index }: ExampleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={`/open-source/${slug}`} className="group block h-full">
        <div className="flex flex-col h-full p-6 rounded-xl border border-[var(--border)] bg-[var(--bg-alt)] transition-all duration-300 hover:border-[var(--text-muted)] hover:shadow-lg">
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FolderGit2 size={18} className="text-[var(--text-muted)]" />
              <span className="eyebrow small text-xs">{category}</span>
            </div>
            <ArrowUpRight className="text-[var(--text-muted)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--text)]" size={18} />
          </div>

          <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
            {title}
          </h3>
          
          <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--border)]/50">
            {technologies.map((tech) => (
              <span key={tech} className="text-[11px] font-mono px-2 py-1 bg-[var(--bg)] border border-[var(--border)] rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}