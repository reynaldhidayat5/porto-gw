import Image from "next/image";
import type { Project } from "@/content/types";
import type { Locale } from "@/lib/i18n";

/**
 * Tile 4:3 konsisten. Dengan screenshot: gambar. Tanpa screenshot: tile merah
 * tipografis (bukan gambar palsu). Hover/fokus pada `group` induk membalik warna.
 */
export function ProjectThumbnail({
  project,
  locale,
  index,
  emptyLabel,
  priority = false,
}: {
  project: Project;
  locale: Locale;
  index?: string;
  emptyLabel: string;
  priority?: boolean;
}) {
  const thumb = project.thumbnail;
  return (
    <div className="on-dark relative aspect-[4/3] w-full overflow-hidden bg-red text-cream transition-colors duration-200 group-hover:bg-ink group-focus-within:bg-ink">
      {thumb ? (
        <Image
          src={thumb.src}
          alt={thumb.alt[locale]}
          width={thumb.width}
          height={thumb.height}
          sizes="(min-width: 768px) 50vw, 100vw"
          priority={priority}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full flex-col justify-between p-5 sm:p-8">
          <div className="flex items-start justify-between font-mono text-xs uppercase tracking-[0.04em]">
            <span>{index ? `[${index}]` : ""}</span>
            <span>{emptyLabel}</span>
          </div>
          <span className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.92] tracking-[-0.02em] text-balance [overflow-wrap:anywhere]">
            {project.title[locale]}
          </span>
        </div>
      )}
    </div>
  );
}
