import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { TodoNote } from "@/components/ui/TodoNote";
import type { Education, Experience } from "@/content/types";
import { getDictionary } from "@/content/translations";
import type { Locale } from "@/lib/i18n";

function period(start?: string, end?: string) {
  if (!start && !end) return null;
  return [start, end].filter(Boolean).join(" – ");
}

/** Pengalaman/pendidikan. Disembunyikan sepenuhnya di production bila datanya kosong. */
export function Timeline({
  locale,
  id,
  index,
  title,
  experience = [],
  education = [],
  todoHint,
}: {
  locale: Locale;
  id: string;
  index: string;
  title: string;
  experience?: Experience[];
  education?: Education[];
  todoHint: string;
}) {
  const t = getDictionary(locale);
  if (experience.length === 0 && education.length === 0) {
    return process.env.NODE_ENV === "production" ? null : (
      <Section labelledBy={id} className="!py-10">
        <h2 id={id} className="sr-only">{title}</h2>
        <TodoNote label={t.todo}>{todoHint}</TodoNote>
      </Section>
    );
  }
  return (
    <Section labelledBy={id}>
      <div className="grid gap-8 lg:grid-cols-12">
        <Label index={index} className="lg:col-span-3">{t.nav.about}</Label>
        <DisplayHeading id={id} className="lg:col-span-9">{title}</DisplayHeading>
      </div>
      <ol className="mt-14 border-t border-red lg:ml-[25%]">
        {experience.map((e) => (
          <li key={e.id} className="grid gap-2 border-b border-red/40 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
            <p className="font-mono text-xs uppercase tracking-[0.04em] text-muted">{period(e.startedAt, e.endedAt)}</p>
            <div>
              <h3 className="text-xl font-semibold">{e.role[locale]} · {e.organization}</h3>
              <p className="mt-1 text-ink">{e.description[locale]}</p>
            </div>
          </li>
        ))}
        {education.map((e) => (
          <li key={e.id} className="grid gap-2 border-b border-red/40 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
            <p className="font-mono text-xs uppercase tracking-[0.04em] text-muted">{period(e.startedAt, e.endedAt)}</p>
            <div>
              <h3 className="text-xl font-semibold">{e.qualification[locale]} · {e.institution}</h3>
              {e.notes ? <p className="mt-1 text-ink">{e.notes[locale]}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
