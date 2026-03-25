export default function YouTubeEmbed({ id }: { id: string }) {
  return (
    <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "0.75rem", overflow: "hidden", margin: "1.5rem 0" }}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: "100%", height: "100%", border: 0 }}
      />
    </div>
  );
}
