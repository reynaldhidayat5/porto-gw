/**
 * URL publik situs. Atur NEXT_PUBLIC_SITE_URL di hosting (mis. Vercel) untuk
 * domain final. Tidak ada domain yang dikarang di sini.
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const raw = explicit ?? (vercel ? `https://${vercel}` : "http://localhost:3000");
  return new URL(raw);
}

/** Deploy preview tidak boleh diindeks (docs/design.md §9). */
export function isIndexable(): boolean {
  return process.env.VERCEL_ENV !== "preview";
}
