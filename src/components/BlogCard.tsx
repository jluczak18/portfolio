import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 text-sm text-muted">
          <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {post.readTime}
          </span>
        </div>
        <ArrowUpRight
          size={18}
          className="text-muted group-hover:text-accent transition-colors flex-shrink-0"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
        {post.title}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-accent/10 text-accent px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
