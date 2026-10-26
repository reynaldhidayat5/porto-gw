import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { defaultLocale, locales, localePath } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  const paths = ["", "/projects", "/about", "/contact", ...projects.map((p) => `/projects/${p.slug}`)];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${base}${localePath(locale, path)}`,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${base}${localePath(l, path)}`])),
          "x-default": `${base}${localePath(defaultLocale, path)}`,
        },
      },
    })),
  );
}
