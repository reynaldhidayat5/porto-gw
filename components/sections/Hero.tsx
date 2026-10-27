import Image from "next/image";
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
          <Wordmark as="h1" id="hero-title" name={profile.shortName} className="lg:col-span-8" />
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

        {/* Panel merah bersudut miring. Dengan foto: potret transparan di bawah-tengah (menggantikan teks role).
            Tanpa foto: teks role besar sebagai fallback. */}
        <div className="on-dark chamfer relative mt-14 h-[26rem] overflow-hidden bg-red text-cream sm:h-[30rem] lg:mt-20 lg:h-[34rem]">
          {profile.photo ? (
            <Image
              src={profile.photo.src}
              width={profile.photo.width}
              height={profile.photo.height}
              alt={`${t.home.photoAlt} ${profile.fullName}`}
              priority
              sizes="(min-width: 1024px) 600px, 460px"
              className="load-in absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
            />
          ) : (
            <p className="absolute inset-x-5 top-1/2 -translate-y-1/2 font-display text-[clamp(2.5rem,9.5vw,9rem)] uppercase leading-[0.9] tracking-[-0.02em] text-balance sm:inset-x-8">
              {profile.role[locale]}
            </p>
          )}
          <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.04em]">[{profile.role[locale]}]</p>
            <ul aria-label={t.projects.technologies} className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs font-medium uppercase tracking-[0.04em]">
              {profile.skills.map((s) => (
                <li key={s.name}>{s.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
