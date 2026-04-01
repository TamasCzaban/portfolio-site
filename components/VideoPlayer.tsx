interface VideoPlayerProps {
  src: string;
  title: string;
}

export default function VideoPlayer({ src, title }: VideoPlayerProps) {
  return (
    <div className="aspect-video overflow-hidden rounded-xl border border-border bg-surface">
      <video
        src={src}
        title={title}
        controls
        preload="metadata"
        playsInline
        className="h-full w-full"
      />
    </div>
  );
}
