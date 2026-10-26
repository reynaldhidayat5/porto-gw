import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Label } from "@/components/ui/Label";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TechList } from "@/components/ui/TechList";
import { TodoNote } from "@/components/ui/TodoNote";
import { ProjectThumbnail } from "@/components/projects/ProjectThumbnail";
import { getAdjacentProjects, getProject, projects } from "@/content/projects";
import { getDictionary } from "@/content/translations";
import { isLocale, localePath, locales, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) return {};
  return buildMetadata({
    locale,
    path: `/projects/${slug}`,
    title: project.title[locale],
    description: project.summary[locale],
  });
}

function Block({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return (
    <section className="grid gap-6 border-t border-red py-10 lg:grid-cols-12 lg:py-14">
      <h2 className="lg:col-span-3">
        <Label as="span" index={index}>{title}</Label>
      </h2>
      <div className="max-w-3xl text-lg text-ink lg:col-span-8 lg:col-start-4">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) notFound();
  const l: Locale = locale;
  const t = getDictionary(l);
  const adjacent = getAdjacentProjects(slug);

  const meta: [string, string][] = [
    [t.projects.role, project.role[l]],
    [t.projects.type, project.projectType[l]],
  ];
  if (project.period) meta.push([t.projects.period, project.period]);

  // Nomor blok berurutan hanya untuk blok yang benar-benar tampil.
  let n = 0;
  const no = () => String(++n).padStart(2, "0");

  return (
    <article>
      <Section labelledBy="project-title" hairline={false} className="!pt-12 lg:!pt-20">
        <Link href={localePath(l, "/projects")} className="inline-flex min-h-11 items-center font-mono text-xs font-medium uppercase tracking-[0.04em] text-red underline underline-offset-4 hover:text-ink">
          ← {t.actions.backToProjects}
        </Link>

        <header className="mt-8 grid gap-8 lg:grid-cols-12">
          <Label className="lg:col-span-3">{t.nav.projects}</Label>
          <div className="lg:col-span-9">
            <DisplayHeading level={1} size="xl" id="project-title">
              {project.title[l]}
            </DisplayHeading>
            <p className="mt-8 max-w-2xl text-xl text-ink">{project.summary[l]}</p>
          </div>
        </header>

        <dl className="mt-12 grid gap-6 border-y border-red py-6 sm:grid-cols-3">
          {meta.map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-xs font-medium uppercase tracking-[0.04em] text-muted">{k}</dt>
              <dd className="mt-1 text-lg">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="group mt-12">
          <ProjectThumbnail project={project} locale={l} emptyLabel={t.projects.noThumbnail} priority />
        </div>
      </Section>

      <Container>
        <Block index={no()} title={t.projects.context}>
          <p>{project.problem[l]}</p>
        </Block>
        <Block index={no()} title={t.projects.objective}>
          <p>{project.objective[l]}</p>
        </Block>
        {project.contribution ? (
          <Block index={no()} title={t.projects.contribution}>
            <p>{project.contribution[l]}</p>
          </Block>
        ) : (
          <TodoNote label={t.todo}>
            Kontribusi pribadi belum diisi (project.contribution) — wajib untuk proyek tim/akademik; bagian disembunyikan.
          </TodoNote>
        )}
        <Block index={no()} title={t.projects.stack}>
          <TechList items={project.technologies} label={t.projects.stack} />
        </Block>
        <Block index={no()} title={t.projects.process}>
          <ul className="list-disc space-y-3 pl-5 marker:text-red">
            {project.process[l].map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </Block>
        <Block index={no()} title={t.projects.solution}>
          <p>{project.solution[l]}</p>
        </Block>
        <Block index={no()} title={t.projects.outcome}>
          <p>{project.outcome[l]}</p>
        </Block>
        {project.demoUrl || project.repositoryUrl ? (
          <Block index={no()} title={t.projects.links}>
            <div className="flex flex-col gap-3 sm:flex-row">
              {project.demoUrl ? (
                <Button href={project.demoUrl} external externalHint={t.actions.externalLink}>
                  {t.actions.viewDemo}
                </Button>
              ) : null}
              {project.repositoryUrl ? (
                <Button href={project.repositoryUrl} external variant="secondary" externalHint={t.actions.externalLink}>
                  {t.actions.viewRepository}
                </Button>
              ) : null}
            </div>
          </Block>
        ) : null}

        {adjacent ? (
          <nav aria-label={t.projects.title} className="grid gap-8 border-t border-red py-10 sm:grid-cols-2 lg:py-14">
            <Link href={localePath(l, `/projects/${adjacent.prev.slug}`)} className="group block min-h-11">
              <span className="font-mono text-xs uppercase tracking-[0.04em] text-muted">← {t.projects.previous}</span>
              <span className="mt-2 block font-display text-3xl uppercase leading-none tracking-[-0.02em] text-red group-hover:text-ink">{adjacent.prev.title[l]}</span>
            </Link>
            <Link href={localePath(l, `/projects/${adjacent.next.slug}`)} className="group block min-h-11 sm:text-right">
              <span className="font-mono text-xs uppercase tracking-[0.04em] text-muted">{t.projects.next} →</span>
              <span className="mt-2 block font-display text-3xl uppercase leading-none tracking-[-0.02em] text-red group-hover:text-ink">{adjacent.next.title[l]}</span>
            </Link>
          </nav>
        ) : null}
      </Container>
    </article>
  );
}
