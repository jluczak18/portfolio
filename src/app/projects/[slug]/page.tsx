import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, FileText, GitFork } from "lucide-react";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | JLucz`,
    description: project.excerpt,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft size={14} /> Back to Projects
      </Link>

      {/* Hero — two column */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Left: title, tags, description, links */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-muted leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                <GitFork size={16} /> View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent-dark transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {project.useCaseDoc && (
              <a
                href={project.useCaseDoc}
                download
                className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors"
              >
                <FileText size={16} /> Use Case Document
              </a>
            )}
          </div>
        </div>

        {/* Right: hero image */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-white">
          {(project.heroImage || project.image) ? (
            <Image
              src={project.heroImage ?? project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain p-4"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-accent/40 font-medium">Project Image</span>
            </div>
          )}
        </div>
      </div>

      {/* Content sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white border border-border rounded-xl p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Overview
          </h2>
          <p className="text-muted leading-relaxed">{project.sections.overview}</p>
        </div>
        <div className="bg-white border border-border rounded-xl p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Problem
          </h2>
          <p className="text-muted leading-relaxed">{project.sections.problem}</p>
        </div>
        <div className="bg-white border border-border rounded-xl p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Approach
          </h2>
          <p className="text-muted leading-relaxed">{project.sections.approach}</p>
        </div>
        <div className="bg-white border border-border rounded-xl p-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
            Results
          </h2>
          <p className="text-muted leading-relaxed">{project.sections.results}</p>
        </div>
      </div>

      {/* Tech stack */}
      <section className="mb-16">
        <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-white border border-border rounded-full px-4 py-1.5 text-sm font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Screenshots placeholders */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-4">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((_, i) => (
              <div
                key={i}
                className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl flex items-center justify-center border border-border"
              >
                <span className="text-accent/40 text-sm font-medium">
                  Screenshot {i + 1}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
