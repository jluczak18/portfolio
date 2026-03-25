import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | JLucz Blog`,
    description: post.excerpt,
  };
}

function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    headings.push({ id, text, level: match[1].length });
  }
  return headings;
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft size={14} /> Back to Blog
      </Link>

      <div className="grid lg:grid-cols-[1fr_250px] gap-12">
        {/* Article */}
        <article>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted">
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
          </div>

          <div className="prose max-w-none">
            <MDXRemote source={post.content} components={{ YouTubeEmbed }} />
          </div>
        </article>

        {/* Table of Contents */}
        {headings.length > 0 && (
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
                On this page
              </h4>
              <nav className="space-y-2">
                {headings.map((h) => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    className={`block text-sm text-muted hover:text-accent transition-colors ${
                      h.level === 3 ? "pl-4" : ""
                    }`}
                  >
                    {h.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
