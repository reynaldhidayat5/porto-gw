import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { getDictionary } from "@/content/translations";
import { localePath, type Locale } from "@/lib/i18n";

export function ContactCta({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <section aria-labelledby="cta-title" className="py-12 sm:py-16">
      <Container>
        <div className="on-dark rounded-lg bg-charcoal px-6 py-12 text-ivory sm:px-12">
          <h2 id="cta-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.home.contactTitle}
          </h2>
          <p className="mt-3 max-w-xl text-lg text-stone">{t.home.contactText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-ivory px-6 font-medium text-charcoal transition-colors hover:bg-stone active:bg-stone"
            >
              {t.actions.sendEmail}
            </a>
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-ivory px-6 font-medium text-ivory transition-colors hover:bg-ivory hover:text-charcoal active:bg-ivory active:text-charcoal"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
