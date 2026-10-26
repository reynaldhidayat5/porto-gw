import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Rows, type RowItem } from "@/components/ui/Rows";
import { profile } from "@/content/profile";
import { getDictionary } from "@/content/translations";
import type { Locale } from "@/lib/i18n";

/** Skills (halaman About). Hanya teknologi yang terbukti dipakai (content/profile.ts). */
export function Skills({ locale, index, title }: { locale: Locale; index: string; title?: string }) {
  const t = getDictionary(locale);
  const heading = title ?? t.home.skillsTitle;
  const items: RowItem[] = profile.skills.map((s) => ({ id: s.name, title: s.name, detail: s.kind[locale] }));
  return (
    <Section labelledBy="skills-title">
      <div className="grid gap-8 lg:grid-cols-12">
        <Label index={index} className="lg:col-span-3">Stack</Label>
        <DisplayHeading id="skills-title" className="lg:col-span-9">
          {heading}
        </DisplayHeading>
      </div>
      <div className="mt-14">
        <Rows items={items} label={heading} />
      </div>
    </Section>
  );
}
