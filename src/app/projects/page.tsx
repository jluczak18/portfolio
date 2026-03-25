"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects, getAllTags } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const tags = getAllTags();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects;

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Projects</h1>
      <p className="text-lg text-muted mb-10 max-w-2xl">
        A selection of AI products, data platforms, and analytics solutions I&apos;ve
        designed and shipped.
      </p>

      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setActiveTag(null)}
          className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors ${
            activeTag === null
              ? "bg-accent text-white border-accent"
              : "border-border text-muted hover:border-accent hover:text-accent"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag === activeTag ? null : tag)}
            className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors ${
              activeTag === tag
                ? "bg-accent text-white border-accent"
                : "border-border text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
