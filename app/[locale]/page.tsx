import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Label } from "@/components/ui/Label";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { getDictionary } from "@/content/translations";
import { isLocale, localePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return buildMetadata({ locale, title: t.seo.homeTitle, description: t.seo.homeDescription });
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} />
      <Section labelledBy="about-preview-title">
        <div className="grid gap-8 lg:grid-cols-12">
          <Label index="01" className="lg:col-span-3">{t.home.aboutTitle}</Label>
          <div className="lg:col-span-8">
            <h2 id="about-preview-title" className="sr-only">{t.home.aboutTitle}</h2>
            <p data-reveal className="text-2xl leading-snug text-ink text-pretty sm:text-3xl lg:text-4xl">{profile.bio[locale]}</p>
            <div className="mt-10">
              <Button href={localePath(locale, "/about")} variant="secondary">
                {t.actions.moreAbout}
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <FeaturedProjects locale={locale} index="02" />
      <Experience locale={locale} index="03" />
      <Education locale={locale} index="04" />
    </>
  );
}
