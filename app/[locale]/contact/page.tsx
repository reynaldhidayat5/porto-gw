import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TodoNote } from "@/components/ui/TodoNote";
import { profile } from "@/content/profile";
import { getDictionary } from "@/content/translations";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return buildMetadata({ locale, path: "/contact", title: t.seo.contactTitle, description: t.seo.contactDescription });
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  const rows: { label: string; href: string; text: string; external: boolean }[] = [
    { label: t.contact.email, href: `mailto:${profile.email}`, text: profile.email, external: false },
    { label: t.contact.github, href: profile.githubUrl, text: profile.githubUrl.replace("https://", ""), external: true },
  ];
  if (profile.linkedinUrl) {
    rows.push({ label: t.contact.linkedin, href: profile.linkedinUrl, text: profile.linkedinUrl.replace("https://", ""), external: true });
  }

  return (
    <Section labelledBy="contact-title" hairline={false} className="!pt-12 lg:!pt-20">
      <PageHeader index="01" label={t.contact.title} id="contact-title" title={t.contact.title} intro={t.contact.intro} />
      <div className="mt-12 lg:ml-[25%]">
        <Button href={`mailto:${profile.email}`}>{t.actions.sendEmail}</Button>
      </div>
      <dl className="mt-16 border-t border-red lg:ml-[25%]">
        {rows.map((r) => (
          <div key={r.label} className="grid gap-1 border-b border-red py-5 sm:grid-cols-[10rem_1fr] sm:items-baseline">
            <dt className="font-mono text-xs font-medium uppercase tracking-[0.04em] text-muted">{r.label}</dt>
            <dd>
              <a
                href={r.href}
                className="break-all text-xl text-ink underline decoration-red underline-offset-4 hover:text-red sm:text-2xl"
                {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {r.text}
                {r.external ? <span className="sr-only"> {t.actions.externalLink}</span> : null}
              </a>
            </dd>
          </div>
        ))}
      </dl>
      {!profile.linkedinUrl ? <TodoNote label={t.todo}>LinkedIn belum diisi (profile.linkedinUrl) — baris disembunyikan.</TodoNote> : null}
    </Section>
  );
}
