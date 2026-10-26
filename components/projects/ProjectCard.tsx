import Link from "next/link";
import type { Project } from "@/content/types";
import { getDictionary } from "@/content/translations";
import { localePath, type Locale } from "@/lib/i18n";
import { ProjectThumbnail } from "./ProjectThumbnail";

const mono = "font-mono text-xs font-medium uppercase tracking-[0.04em]";

export function ProjectCard({ project, locale, index, priority }: { project: Project; locale: Locale; index: number; priority?: boolean }) {
  const t = getDictionary(locale);
  const href = localePath(locale, `/projects/${project.slug}`);
  const num = String(index + 1).padStart(2, "0");
  const tags = [project.projectType[locale], ...project.technologies.slice(0, 2)];

  return (
    <article className="card group">
      {/* Tile dekoratif: tautan utama ada di judul agar tidak ada tautan ganda. */}
      <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
        <ProjectThumbnail project={project} locale={locale} index={num} emptyLabel={t.projects.noThumbnail} priority={priority} />
      </Link>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-red pb-3">
        <h3 className={`${mono} text-sm text-red`}>
          <Link href={href} className="inline-flex min-h-11 items-center">
            {project.title[locale]}
            <span aria-hidden="true" className="card-arrow ml-2">→</span>
            <span className="sr-only"> — {t.actions.readCaseStudy}</span>
          </Link>
        </h3>
        <ul aria-label={t.projects.technologies} className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className={`card-chip border border-red px-2 py-1 ${mono} text-red`}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 max-w-xl text-base text-ink">{project.summary[locale]}</p>
      {project.demoUrl || project.repositoryUrl ? (
        <ul className="mt-3 flex flex-wrap gap-x-6">
          {project.demoUrl ? (
            <li>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={`${mono} link-grow inline-flex min-h-11 items-center text-red hover:text-ink`}>
                {t.actions.viewDemo} ↗<span className="sr-only">: {project.title[locale]} {t.actions.externalLink}</span>
              </a>
            </li>
          ) : null}
          {project.repositoryUrl ? (
            <li>
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className={`${mono} link-grow inline-flex min-h-11 items-center text-red hover:text-ink`}>
                {t.actions.viewRepository} ↗<span className="sr-only">: {project.title[locale]} {t.actions.externalLink}</span>
              </a>
            </li>
          ) : null}
        </ul>
      ) : null}
    </article>
  );
}
