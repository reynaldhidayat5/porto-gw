import type { MetadataRoute } from "next";
import { getSiteUrl, isIndexable } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl().origin;
  if (!isIndexable()) return { rules: { userAgent: "*", disallow: "/" } };
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${base}/sitemap.xml` };
}
