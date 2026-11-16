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
      <Link href={`/work/${slug}`} className="block h-full group">
        <div className="relative overflow-hidden rounded-xl border border-[var(--border)] h-full min-h-[300px] transition-colors duration-300 hover:border-[var(--text-muted)]">
          
          {/* IMAGE DE FOND + DÉGRADÉ */}
          <div className="absolute inset-0 z-0 bg-[var(--bg-alt)]">
            {coverImage && (
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover object-right opacity-60 group-hover:scale-105 transition-transform duration-500"
              />
            )}
            {/* Dégradé : opaque à gauche (couleur du site) vers transparent à droite */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/90 to-transparent"></div>
          </div>

          {/* CONTENU (au-dessus de l'image) */}
          <div className="relative z-10 flex flex-col h-full p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="eyebrow small">{category}</span>
              <ArrowUpRight className="text-[var(--text-muted)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--text)]" size={20} />
            </div>
            
            <h3 className="text-2xl font-semibold mt-2 mb-3 max-w-[80%]">{title}</h3>
            <p className="text-[var(--text-muted)] line-clamp-3 mb-8 max-w-[85%] text-sm leading-relaxed">
              {description}
            </p>
            
            {/* Les technologies poussées en bas grâce à mt-auto */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {technologies.map((tech) => (
                <span key={tech} className="text-xs font-mono px-2 py-1 bg-[var(--bg-alt)]/80 backdrop-blur-sm border border-[var(--border)] rounded text-[var(--text)]">
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