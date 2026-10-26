export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Konten dua bahasa: kedua locale wajib ada (paritas bahasa). */
export type Localized<T = string> = Record<Locale, T>;

export function otherLocale(locale: Locale): Locale {
  return locale === "id" ? "en" : "id";
}

/** Bangun path berlokalisasi, mis. localePath("en", "/projects") -> "/en/projects". */
export function localePath(locale: Locale, path = ""): string {
  const clean = path === "/" ? "" : path;
  return `/${locale}${clean}`;
}
