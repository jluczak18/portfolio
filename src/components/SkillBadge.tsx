export default function SkillBadge({ label }: { label: string }) {
  return (
    <span className="inline-block bg-white border border-border rounded-full px-4 py-1.5 text-sm font-medium text-muted hover:border-accent hover:text-accent transition-colors">
      {label}
    </span>
  );
}
