import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/content/projects";
import { getDictionary } from "@/content/translations";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: "/projects", title: t.seo.projectsTitle, description: t.seo.projectsDescription });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  return (
    <Section labelledBy="projects-title" hairline={false} className="!pt-12 lg:!pt-20">
      <PageHeader index="01" label={t.nav.projects} id="projects-title" title={t.projects.title} intro={t.projects.intro} />
      <div className="mt-16 lg:mt-24">
        {projects.length > 0 ? <ProjectGrid projects={projects} locale={locale} /> : <p className="text-muted">{t.projects.empty}</p>}
      </div>
    </Section>
  );
}
