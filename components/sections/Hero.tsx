import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { TodoNote } from "@/components/ui/TodoNote";
import { Wordmark } from "@/components/ui/Wordmark";
import { getDictionary } from "@/content/translations";
import { profile } from "@/content/profile";
import { localePath, type Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const cv = profile.cvUrl?.[locale];
  return (
    <section aria-labelledby="hero-title" className="pb-20 pt-10 sm:pt-14 lg:pb-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Wordmark as="h1" id="hero-title" name={profile.fullName} className="lg:col-span-8" />
          <div className="flex flex-col gap-6 lg:col-span-4 lg:pb-3">
            <Label>{t.home.eyebrow}</Label>
            <p className="max-w-md text-lg text-ink sm:text-xl">{profile.headline[locale]}</p>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button href={localePath(locale, "/projects")}>{t.actions.viewProjects}</Button>
              {cv ? (
                <Button href={cv} variant="secondary" download>
                  {t.actions.downloadCv}
                </Button>
              ) : null}
            </div>
            {!cv ? <TodoNote label={t.todo}>CV belum diisi (profile.cvUrl) — tombol “Download CV” disembunyikan.</TodoNote> : null}
          </div>
        </div>

        {/* Panel merah: pengganti foto hero. Berisi role dan stack, tanpa klaim baru. */}
        <div className="on-dark chamfer mt-14 flex min-h-[22rem] flex-col justify-between bg-red p-5 text-cream sm:min-h-[26rem] sm:p-8 lg:mt-20 lg:min-h-[30rem]">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.04em]">[{t.home.roleLabel}]</p>
          <p className="font-display text-[clamp(2.5rem,9.5vw,9rem)] uppercase leading-[0.9] tracking-[-0.02em] text-balance">
            {profile.role[locale]}
          </p>
          <ul aria-label={t.projects.technologies} className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs font-medium uppercase tracking-[0.04em]">
            {profile.skills.map((s) => (
              <li key={s.name}>{s.name}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
