import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Rows, type RowItem } from "@/components/ui/Rows";
import { education } from "@/content/education";
import { getDictionary } from "@/content/translations";
import type { Locale } from "@/lib/i18n";

/** Pendidikan. Tidak dirender bila belum ada data (tidak ada placeholder di production). */
export function Education({ locale, index }: { locale: Locale; index: string }) {
  const t = getDictionary(locale);
  if (education.length === 0) return null;
  const items: RowItem[] = education.map((e) => ({
    id: e.id,
    title: e.qualification[locale],
    subtitle: [e.institution, [e.startedAt, e.endedAt].filter(Boolean).join(" – ")].filter(Boolean).join(" · "),
    detail: e.notes?.[locale],
  }));
  return (
    <Section labelledBy="education-title">
      <div className="grid gap-8 lg:grid-cols-12">
        <Label index={index} className="lg:col-span-3">{t.home.educationTitle}</Label>
        <DisplayHeading id="education-title" className="lg:col-span-9">
          {t.home.educationTitle}
        </DisplayHeading>
      </div>
      <div className="mt-14">
        <Rows items={items} label={t.home.educationTitle} />
      </div>
    </Section>
  );
}
