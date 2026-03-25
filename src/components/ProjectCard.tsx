import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-white flex items-center justify-center overflow-hidden relative">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-4"
          />
        ) : (
          <span className="text-accent/40 text-sm font-medium">Project Image</span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="text-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1"
          />
        </div>
        <p className="text-muted text-sm leading-relaxed mb-4">{project.excerpt}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
