import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Wordmark } from "@/components/ui/Wordmark";
import { localePath, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content/translations";
import { profile } from "@/content/profile";

const linkCls =
  "inline-flex min-h-11 items-center font-mono text-xs font-medium uppercase tracking-[0.04em] text-ink underline-offset-4 hover:text-red hover:underline active:text-red";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const year = new Date().getFullYear();
  const nav = [
    { href: localePath(locale), label: t.nav.home },
    { href: localePath(locale, "/projects"), label: t.nav.projects },
    { href: localePath(locale, "/about"), label: t.nav.about },
    { href: localePath(locale, "/contact"), label: t.nav.contact },
  ];

  return (
    <footer className="mt-0 overflow-hidden border-t border-red">
      <Container className="pb-8 pt-16 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Label>{t.home.contactTitle}</Label>
          </div>
          <div className="lg:col-span-9">
            <a
              href={`mailto:${profile.email}`}
              className="break-all font-display text-[clamp(1.5rem,4.2vw,3.5rem)] leading-tight tracking-[-0.02em] text-red underline-offset-8 hover:text-ink hover:underline"
            >
              {profile.email}
            </a>
            <p className="mt-4 max-w-md text-muted">{t.home.contactText}</p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-12">
          <nav aria-label={t.footer.nav} className="lg:col-span-3 lg:col-start-4">
            <p className="font-mono text-xs uppercase tracking-[0.04em] text-muted">{t.footer.nav}</p>
            <ul className="mt-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={linkCls}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.04em] text-muted">{t.footer.social}</p>
            <ul aria-label={t.footer.links} className="mt-2">
              <li>
                <a href={profile.githubUrl} className={linkCls} target="_blank" rel="noopener noreferrer">
                  GitHub<span className="sr-only"> {t.actions.externalLink}</span>
                </a>
              </li>
              {profile.linkedinUrl ? (
                <li>
                  <a href={profile.linkedinUrl} className={linkCls} target="_blank" rel="noopener noreferrer">
                    LinkedIn<span className="sr-only"> {t.actions.externalLink}</span>
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 lg:mt-24">
          <Wordmark name={profile.fullName} />
          <p className="font-mono text-xs uppercase tracking-[0.04em] text-muted">
            © {year} {profile.fullName} — {t.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
