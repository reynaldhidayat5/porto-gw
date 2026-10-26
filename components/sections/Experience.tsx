import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Rows, type RowItem } from "@/components/ui/Rows";
import { TodoNote } from "@/components/ui/TodoNote";
import { experience } from "@/content/experience";
import { getDictionary } from "@/content/translations";
import type { Locale } from "@/lib/i18n";

function period(start: string, end: string | undefined, nowLabel: string) {
  return `${start} – ${end ?? nowLabel}`;
}

/** Baris merah-saat-hover. Disembunyikan di production bila belum ada data nyata. */
export function Experience({ locale, index, id = "experience-title" }: { locale: Locale; index: string; id?: string }) {
  const t = getDictionary(locale);
  if (experience.length === 0) {
    return process.env.NODE_ENV === "production" ? null : (
      <Section labelledBy={id} className="!py-10">
        <h2 id={id} className="sr-only">{t.home.experienceTitle}</h2>
        <TodoNote label={t.todo}>Pengalaman belum diisi (content/experience.ts) — bagian “Experience” disembunyikan di production.</TodoNote>
      </Section>
    );
  }
  const items: RowItem[] = experience.map((e) => ({
    id: e.id,
    title: e.role[locale],
    subtitle: `${e.organization} · ${period(e.startedAt, e.endedAt, t.home.present)}`,
    detail: e.description[locale],
    tags: e.tags,
  }));
  return (
    <Section labelledBy={id}>
      <div className="grid gap-8 lg:grid-cols-12">
        <Label index={index} className="lg:col-span-3">{t.home.experienceTitle}</Label>
        <DisplayHeading id={id} className="lg:col-span-9">
          {t.home.experienceTitle}
        </DisplayHeading>
      </div>
      <div className="mt-14">
        <Rows items={items} label={t.home.experienceTitle} />
      </div>
    </Section>
  );
}
