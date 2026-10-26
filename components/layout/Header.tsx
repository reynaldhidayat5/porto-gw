import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeaderNav, type NavItem } from "./HeaderNav";
import { localePath, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content/translations";
import { profile } from "@/content/profile";

export function Header({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const items: NavItem[] = [
    { href: localePath(locale), label: t.nav.home, exact: true },
    { href: localePath(locale, "/projects"), label: t.nav.projects },
    { href: localePath(locale, "/about"), label: t.nav.about },
    { href: localePath(locale, "/contact"), label: t.nav.contact, cta: true },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-red bg-cream">
      <Container className="site-header-inner flex items-center justify-between gap-4">
        <Link href={localePath(locale)} className="flex min-h-11 items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.04em] text-red">
          <span className="font-display text-base tracking-[-0.02em]">{profile.fullName}</span>
          <span aria-hidden="true" className="hidden text-muted lg:inline">
            {"// "}
            {profile.role[locale]}
          </span>
        </Link>
        <HeaderNav
          locale={locale}
          items={items}
          labels={{
            primary: t.nav.primaryLabel,
            open: t.nav.openMenu,
            close: t.nav.closeMenu,
            language: t.language.label,
            switchTo: t.language.switchTo,
            id: t.language.id,
            en: t.language.en,
          }}
        />
      </Container>
    </header>
  );
}
