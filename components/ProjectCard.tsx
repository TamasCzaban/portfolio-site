import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  subtitle: string;
  techStack: string[];
  thumbnail: string;
}

export default function ProjectCard({
  slug,
  title,
  subtitle,
  techStack,
  thumbnail,
}: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-background transition-all hover:border-primary/30 hover:shadow-lg"
    >
      <div className="aspect-video bg-surface p-8 flex items-center justify-center">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-contain transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
