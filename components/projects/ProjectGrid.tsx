import type { Project } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects, locale }: { projects: Project[]; locale: Locale }) {
  return (
    <ul className="project-grid grid gap-x-8 gap-y-16 md:grid-cols-2">
      {projects.map((p, i) => (
        <li key={p.slug} data-reveal>
          <ProjectCard project={p} locale={locale} index={i} priority={i === 0} />
        </li>
      ))}
    </ul>
  );
}
