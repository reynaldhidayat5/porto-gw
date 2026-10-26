import type { Metadata } from "next";
import { defaultLocale, locales, localePath, type Locale } from "./i18n";
import { isIndexable } from "./site";

type Args = {
  locale: Locale;
  /** Path tanpa locale, mis. "/projects/personal-portfolio". Kosong untuk beranda. */
  path?: string;
  title: string;
  description: string;
};

/**
 * Metadata per halaman: title, description, canonical, hreflang (hanya pasangan
 * bahasa yang benar-benar ada), dan Open Graph. `metadataBase` di layout
 * membuat URL relatif menjadi absolut.
 */
export function buildMetadata({ locale, path = "", title, description }: Args): Metadata {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = localePath(l, path);
  languages["x-default"] = localePath(defaultLocale, path);

  return {
    title,
    description,
    alternates: { canonical: localePath(locale, path), languages },
    openGraph: {
      title,
      description,
      type: "website",
      url: localePath(locale, path),
      locale: locale === "id" ? "id_ID" : "en_US",
      alternateLocale: locale === "id" ? ["en_US"] : ["id_ID"],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: isIndexable() ? undefined : { index: false, follow: false },
  };
}
