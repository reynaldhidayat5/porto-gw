import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Label } from "@/components/ui/Label";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { education } from "@/content/education";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { getDictionary } from "@/content/translations";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: "/about", title: t.seo.aboutTitle, description: t.seo.aboutDescription });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);
  const cv = profile.cvUrl?.[locale];

  return (
    <>
      <Section labelledBy="about-title" hairline={false} className="!pt-12 lg:!pt-20">
        <PageHeader index="01" label={t.about.title} id="about-title" title={t.about.title} />
        <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-12">
          <p className="text-2xl leading-snug text-ink text-pretty sm:text-3xl lg:col-span-8 lg:col-start-4 lg:text-4xl">{profile.bio[locale]}</p>
          <div className="lg:col-span-6 lg:col-start-4">
            <h2 className="font-mono text-xs font-medium uppercase tracking-[0.04em] text-red">{t.about.focusTitle}</h2>
            <p className="mt-3 max-w-xl text-lg text-ink">{t.about.focusText}</p>
          </div>
        </div>
      </Section>
      <Skills locale={locale} index="02" title={t.about.skillsTitle} />
      <Timeline
        locale={locale}
        id="about-timeline"
        index="03"
        title={`${t.about.experienceTitle} & ${t.about.educationTitle}`}
        experience={experience}
        education={education}
        todoHint="Pendidikan/pengalaman belum diisi — bagian disembunyikan."
      />
      {cv ? (
        <Section labelledBy="cv-title">
          <div className="grid gap-8 lg:grid-cols-12">
            <Label index="04" className="lg:col-span-3">{t.about.cvTitle}</Label>
            <div className="lg:col-span-9">
              <h2 id="cv-title" className="sr-only">{t.about.cvTitle}</h2>
              <p className="max-w-xl text-lg text-ink">{t.about.cvText}</p>
              <div className="mt-8">
                <Button href={cv} download>
                  {t.actions.downloadCvLang}
                </Button>
              </div>
            </div>
          </div>
        </Section>
      ) : null}
    </>
  );
}
