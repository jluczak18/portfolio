import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog | JLucz",
  description: "Articles on AI product development, data analytics, and product management.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Blog</h1>
      <p className="text-lg text-muted mb-10 max-w-2xl">
        Thoughts on building AI products, data strategy, and the intersection of
        analytics and product management.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-muted text-center py-20">
          No articles yet. Check back soon!
        </p>
      )}
    </div>
  );
}
