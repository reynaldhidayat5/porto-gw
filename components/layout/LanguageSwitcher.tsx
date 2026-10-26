"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  labels: { language: string; switchTo: string; id: string; en: string };
  className?: string;
};

/** Mengganti segmen locale tetapi mempertahankan halaman yang sepadan. */
export function LanguageSwitcher({ locale, labels, className = "" }: Props) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(id|en)(?=\/|$)/, "");

  return (
    <ul aria-label={labels.language} className={`flex items-center border border-red ${className}`}>
      {locales.map((l) => {
        const active = l === locale;
        return (
          <li key={l}>
            <Link
              href={`/${l}${rest}`}
              hrefLang={l}
              lang={l}
              aria-current={active ? "true" : undefined}
              aria-label={active ? labels[l] : `${labels.switchTo} ${labels[l]}`}
              className={`inline-flex min-h-10 min-w-11 items-center justify-center px-2 font-mono text-xs font-medium uppercase tracking-[0.04em] transition-colors ${
                active ? "bg-red text-cream" : "text-red hover:bg-red hover:text-cream active:bg-red active:text-cream"
              }`}
            >
              {l}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
