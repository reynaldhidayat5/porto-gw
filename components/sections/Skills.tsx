import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { profile } from "@/content/profile";
import { getDictionary } from "@/content/translations";
import type { Locale } from "@/lib/i18n";

/** Baris merah penuh lebar. Hanya teknologi yang terbukti dipakai (content/profile.ts). */
export function Skills({ locale, index, title }: { locale: Locale; index: string; title?: string }) {
  const t = getDictionary(locale);
  const heading = title ?? t.home.skillsTitle;
  return (
    <Section labelledBy="skills-title">
      <div className="grid gap-8 lg:grid-cols-12">
        <Label index={index} className="lg:col-span-3">Stack</Label>
        <DisplayHeading id="skills-title" className="lg:col-span-9">
          {heading}
        </DisplayHeading>
      </div>
      <ul className="on-dark mt-14 border-y border-red bg-red text-cream">
        {profile.skills.map((s, i) => (
          <li key={s.name} className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-t border-cream/40 px-5 py-6 first:border-t-0 sm:px-8 md:grid-cols-[4rem_1fr_auto]">
            <span className="font-mono text-xs font-medium tracking-[0.04em]">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-display text-[clamp(1.75rem,6vw,4.5rem)] uppercase leading-none tracking-[-0.02em] [overflow-wrap:anywhere]">
              {s.name}
            </span>
            <span className="col-start-2 font-mono text-xs font-medium uppercase tracking-[0.04em] md:col-start-auto">{s.kind[locale]}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
