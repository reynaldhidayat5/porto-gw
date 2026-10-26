import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Button } from "@/components/ui/Button";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { featuredProjects } from "@/content/projects";
import { getDictionary } from "@/content/translations";
import { localePath, type Locale } from "@/lib/i18n";

export function FeaturedProjects({ locale, index }: { locale: Locale; index: string }) {
  const t = getDictionary(locale);
  if (featuredProjects.length === 0) return null;
  return (
    <Section labelledBy="featured-title">
      <div className="grid gap-8 lg:grid-cols-12">
        <Label index={index} className="lg:col-span-3">{t.nav.projects}</Label>
        <div className="lg:col-span-9">
          <DisplayHeading id="featured-title">{t.home.featuredTitle}</DisplayHeading>
          <p className="mt-6 max-w-xl text-lg text-ink">{t.home.featuredIntro}</p>
        </div>
      </div>
      <div className="mt-14">
        <ProjectGrid projects={featuredProjects.slice(0, 4)} locale={locale} />
      </div>
      <div className="mt-14">
        <Button href={localePath(locale, "/projects")} variant="secondary">
          {t.actions.viewAllProjects}
        </Button>
      </div>
    </Section>
  );
}
