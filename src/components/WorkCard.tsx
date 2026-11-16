"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type WorkCardProps = {
  title: string;
  description: string;
  slug: string;
  category: string;
  technologies: string[];
  coverImage?: string;
  index: number;
};

export default function WorkCard({ title, description, slug, category, technologies, coverImage, index }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link href={`/work/${slug}`} className="group block h-full">
        {/* Conteneur principal de la carte avec fond et bordure */}
        <div className="flex flex-col h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-alt)] transition-all duration-300 hover:border-[var(--text-muted)] hover:shadow-xl">
          
          {/* Section Image (en haut) */}
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              // Fallback si l'image est manquante
              <div className="flex items-center justify-center w-full h-full bg-[var(--bg)] text-[var(--text-muted)]">
                <span className="text-sm font-mono">No cover image</span>
              </div>
            )}
          </div>

          {/* Section Contenu (en bas) */}
          <div className="flex flex-col flex-grow p-6 sm:p-8">
            <div className="flex items-center justify-between mb-3">
              <span className="eyebrow small text-xs tracking-wider uppercase text-[var(--text-muted)]">
                {category}
              </span>
              <ArrowUpRight className="text-[var(--text-muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--text)]" size={20} />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text)] mb-2 leading-tight">
              {title}
            </h3>
            
            <p className="text-[var(--text-muted)] text-sm leading-relaxed line-clamp-2 mb-6 flex-grow">
              {description}
            </p>

            {/* Badges Technologies */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--border)]/50">
              {technologies.map((tech) => (
                <span key={tech} className="text-xs font-mono px-2.5 py-1 bg-[var(--bg)] border border-[var(--border)] rounded-md text-[var(--text-muted)] group-hover:text-[var(--text)] transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}